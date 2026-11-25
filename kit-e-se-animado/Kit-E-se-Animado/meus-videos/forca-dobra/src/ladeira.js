// A ladeira do dia 12: carreta sem freio, carros desviando, moto caindo, gente correndo, Guilherme segurando o para-choque.
// Tudo depende do "tempo da simulação" ts (o vídeo pode andar em câmera lenta, congelar ou rebobinar mudando ts).
import * as THREE from 'three';
import { rua } from './lugares2.js';
import { cria, GUI, MOTORISTA, pessoa } from './gente.js';
import { carreta, carroPop, moto, sacolaPao, pao, rachadura, marcaMao } from './objs.js';
import { paoNaMao } from './comum.js';
import { poeira, sprite } from './efeitos.js';
import { G, soma, vivo, treme, correr, kf, kv, mix } from './mov.js';
import { rng, clamp, smooth, easeOut, lerp } from './motor/core.js';
import { cyl, toon } from './motor/toon.js';
import { rosto as rostoLib } from './lib.js';

export const T_IMP = 22.6;           // instante (tempo de filme da ladeira) em que as mãos tocam o para-choque
const ALC = .42;                     // distância do corpo até as mãos esticadas
const FK = [[0, -160], [4, -118], [8.2, -62], [11, -40], [14.2, -28], [16.4, -17], [19.5, -6], [20.6, -3.0], [T_IMP, -ALC]];
export const ESC = .58, PC = 7.53 * ESC; // escala da carreta e distância da origem até a frente do para-choque
/** Relógio da simulação: câmera lenta entre 20,6 e 23,6 s. */
export const simc = (tf) => tf < 20.6 ? tf : tf < 23.6 ? 20.6 + (tf - 20.6) * .3 : 21.5 + (tf - 23.6);
const S_IMP = simc(T_IMP);
/** Frente da carreta (z) no tempo de filme da ladeira. */
export const frente = (tf) => { if (tf >= T_IMP) return -ALC + .25 * easeOut((simc(tf) - S_IMP) / .14); return kv(tf, FK.map(([a, b]) => [a, b, 'lin'])); };
/** Tempo de filme da ladeira no começo do vídeo: normal, congela no rosto, depois rebobina. */
export function tsAbertura(t) { if (t < 32.6) return t; if (t < 38.6) return 32.6; return Math.max(3.4, 32.6 - (t - 38.6) * 8.6); }

const pe = (k, x, z, ry) => k.place(x, z, 0, ry);
const rosto = (k, t, emo, ex = {}) => rostoLib(k, ex.quem || null, t, emo, ex);
/** Monta a ladeira inteira. o.hora, o.fugir (gente correndo), o.verdade (versão do dia 12 com o motorista descendo). */
export function montaLadeira(c, o = {}) {
  const L = rua(c, { incl: 6, hora: o.hora || 'tarde', tipo: 'lojas', z0: -210, z1: 50, seed: 31, carros: [[1, -36, '#3E7CC8'], [-1, -21, '#F4F1EA'], [1, 21, '#5AA84E'], [-1, 31, '#2A2A30']] });
  const g = L.g, R = rng(17);
  const add = (def, x, z, ry) => { const k = cria(def); k.place(x, z, 0, ry); g.add(k.root); k.root.userData.ator = k; k.seed = Math.abs((x * 13 + z * 7) | 0) % 9; return k; };
  // Guilherme na faixa, de frente para a subida (-z), sacola de pão na mão esquerda
  const gui = add(GUI, 0, 0, Math.PI); const sacM = paoNaMao(gui, 'L', .6);
  const sacC = sacolaPao(); sacC.scale.setScalar(.8); g.add(sacC); const paoR = pao(); paoR.scale.setScalar(.8); g.add(paoR);
  // carreta + motorista
  const cw = new THREE.Group(); g.add(cw); const ca = carreta(); ca.scale.setScalar(ESC); cw.add(ca); const U = ca.userData;
  U.vidro.material = new THREE.MeshToonMaterial({ color: '#9EC0DA', transparent: true, opacity: .28, depthWrite: false });
  const mot = cria(MOTORISTA); mot.place(.55 * ESC, 5.5 * ESC, 1.52 * ESC - .28 * 1.05 + .02, 0); mot.sombra.visible = false; cw.add(mot.root); mot.seed = 4;
  const vol = new THREE.Mesh(new THREE.TorusGeometry(.2, .025, 8, 24), toon('#2A2A30')); vol.position.set(.55, 1.92, 6.0); vol.rotation.x = -.9; ca.add(vol);
  const pc = U.parachoque; const marcas = [-1, 1].map((s) => { const m = marcaMao(); m.scale.setScalar(.9); m.position.set(s * .2, .02, .115); pc.add(m); m.visible = false; return m; });
  // carros em movimento, moto com piloto
  const carA = carroPop('#E2862E'); g.add(carA); const carB = carroPop('#8E5AB8'); g.add(carB);
  const mo = moto('#C0392B'); g.add(mo); const pil = cria(pessoa(4, { bone: '#2A2A30' })); g.add(pil.root); pil.seed = 2;
  // gente na calçada correndo para dentro das lojas
  const GENTE = [[-4.5, -9, -1, 2.8, -2.5], [-4.4, -15, -1, 3.4, 3], [4.5, -12, 1, 2.9, 2.5], [4.6, -20, 1, 3.6, -3], [-4.4, -26, -1, 4.2, 2], [4.4, -6, 1, 3.1, -2.5], [-4.6, -3, -1, 2.6, 3], [4.5, -30, 1, 4.6, 3]];
  const povo = GENTE.map(([x, z, s, td, dz], i) => ({ k: add(pessoa(i + 1), x, z, s > 0 ? -Math.PI / 2 : Math.PI / 2), x, z, s, td, dz }));
  // faíscas e fumaça do freio queimado
  const fa = []; for (let i = 0; i < 70; i++) { const s = sprite(i % 3 ? '#FFB43A' : '#FFF2A0', .09 + R() * .06, 1); s.userData = { ph: R(), vx: (R() - .5) * 1.6, vy: .6 + R() * 2, roda: Math.floor(R() * 6) }; g.add(s); fa.push(s); }
  const fu = []; for (let i = 0; i < 46; i++) { const s = sprite('#A8A29A', 1, 0, false); s.userData = { ph: R(), roda: Math.floor(R() * 6), dx: (R() - .5) * .6 }; g.add(s); fu.push(s); }
  const RODAS = [[-1.1, -3.6], [1.1, -3.6], [-1.1, -4.6], [1.1, -4.6], [-1.1, -5.6], [1.1, -5.6]].map(([a, b]) => [a * ESC, b * ESC]);
  // impacto: rachadura em estrela, marcas do chinelo arrastando, poeira em círculo
  const rach = rachadura(4.2, 5, '#1A1614'); rach.rotation.set(-Math.PI / 2, 0, .3); rach.position.set(0, .012, .15); g.add(rach);
  const rach2 = rachadura(2.2, 9, '#1A1614'); rach2.rotation.set(-Math.PI / 2, 0, 1.4); rach2.position.set(.3, .013, .5); g.add(rach2);
  const pts = []; for (let i = 0; i < 18; i++) { const a = i / 18 * 6.283; pts.push([Math.cos(a) * .6, .05, .2 + Math.sin(a) * .6]); }
  const po = poeira(g, pts, { n: 48, size: 1.4, life: 5, op: .32, sp: .4, spread: .25, cor: '#C8B8A0' });
  const vapor = []; for (let i = 0; i < 14; i++) { const s = sprite('#E8E4DE', .6, 0, false); s.userData = { ph: i / 14 }; cw.add(s); vapor.push(s); }

  /** Atualiza tudo. t = tempo do vídeo (respiração), ts = tempo da simulação. o2.guiPose(t, ts) troca a pose do Guilherme. */
  function upd(t, tf, o2 = {}) {
    const F = frente(tf), sc = simc(tf), dI = sc - S_IMP, bateu = dI > 0, ts = sc;
    cw.position.set(0, 0, F - PC); U.rodas.forEach((r) => { r.rotation.x = bateu ? 0 : -F / (.52 * ESC); });
    // amassado no formato das mãos
    const am = clamp(dI / .12); pc.scale.z = 1 - .45 * am; pc.position.z = 7.42 - .05 * am; marcas.forEach((m) => { m.visible = am > .05; }); U.grade.position.z = 7.32 - .06 * am;
    cw.rotation.x = bateu ? -Math.sin(Math.min(1, dI / .5) * Math.PI) * .015 * Math.exp(-dI * 2) : 0; // a traseira levanta de leve no tranco
    // Guilherme: escorrega pra trás junto com a frente da carreta depois do toque
    const gz = bateu ? F + ALC : 0; gui.place(0, gz, 0, Math.PI);
    const pg = o2.guiPose ? o2.guiPose(t, tf) : soma(G.maosFrente, { shL: [-16, 0], shR: [-16, 0], hipL: [30, 6], knL: 38, hipR: [-22, 4], knR: 8, lean: 16 }, treme(t, bateu ? 1 : 0));
    gui.pose(pg); sacM.visible = tf < (o.tSolta ?? 19.75); sacM.prumo(t);
    // sacola cai no chão e tomba; um pão rola ladeira abaixo
    const tc = tf - (o.tSolta ?? 19.75); sacC.visible = tc >= 0; if (tc >= 0) { const y = Math.max(0, .42 - 4.9 * tc * tc); sacC.position.set(-.3, y, .1); sacC.rotation.set(0, .3, -1.3 * smooth(.15, .4, tc)); }
    const tr = sc - (S_IMP + .45); paoR.visible = tr > 0; if (tr > 0) { const d = Math.min(7.5, .55 * tr + .02 * tr * tr); paoR.position.set(-.45 - d * .05, .02, .25 + d); paoR.rotation.set(d / .05, 0, 0); }
    // motorista: buzina travada, desespero; tranco no impacto
    const tranco = bateu ? Math.exp(-dI * 3) * Math.sin(Math.min(1, dI * 4) * Math.PI) : 0;
    mot.pose(o2.motPose ? o2.motPose(t, tf) : { bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: 8 + tranco * 30, shL: [62, 6], shR: [52 + Math.max(0, Math.sin(t * 11)) * 12, 4], elL: 40, elR: 55, headX: -6 + tranco * 10 });
    // carros parados na subida desviam para a calçada quando a carreta chega perto; moto tomba; gente corre
    const re = (z, d = 30, w = 16) => clamp((F - (z - d)) / w);
    const sA = easeOut(re(-62, 34, 14)), sB = easeOut(re(-44, 32, 12));
    carA.position.set(lerp(2.2, 5.3, sA), .16 * smooth(.5, .7, sA), -62 - 1.5 * sA); carA.rotation.y = Math.PI - Math.sin(sA * Math.PI) * .55 - sA * .25;
    carB.position.set(lerp(-2.2, -5.2, sB), .16 * smooth(.5, .7, sB), -44 - 1.2 * sB); carB.rotation.y = Math.PI + Math.sin(sB * Math.PI) * .5 + sB * .3;
    const sm = re(-27, 26, 8), zm = -27 - 1.5 * sm;
    mo.position.set(1.6 + 1.6 * easeOut(sm), 0, zm); mo.rotation.set(0, Math.PI, 1.45 * easeOut(sm));
    if (sm <= 0) { pil.place(1.6, zm + .1, .35, Math.PI); pil.pose({ bob: -.17, hipL: [80, 14], hipR: [80, 14], knL: 85, knR: 85, shL: [70, 10], shR: [70, 10], elL: 20, elR: 20, lean: 18 }); }
    else { const k2 = easeOut(clamp(sm * 1.4)); pil.place(1.6 + 2.6 * k2, zm + .6, 0, Math.PI + 1.2); pil.pose(soma(G.sentadoChao, { shL: [60, 30], shR: [40, 20] })); }
    rosto(pil, t, sm > 0 ? 'medo' : 'preocupado');
    povo.forEach((p, i) => { const tt = (F - (p.z - 34 - i * 2)) / 9; const xF = p.s * 6.95, zF = p.z + p.dz, dist = Math.hypot(xF - p.x, p.dz); const u = clamp(Math.max(0, tt) * p.td / dist);
      p.k.root.visible = u < .999; p.k.place(lerp(p.x, xF, u), lerp(p.z, zF, u), .16, tt > 0 ? Math.atan2(xF - p.x, p.dz) : (i % 2 ? 0 : Math.PI));
      p.k.pose(tt > 0 ? correr(t + i * .3, 3) : soma(G.assustado, vivo(t, i))); rosto(p.k, t, tt > 0 ? 'medo' : 'surpreso'); });
    // faíscas nas rodas travadas (só antes do toque) e fumaça do freio
    const oz = F - PC; fa.forEach((s) => { const q = s.userData, a = ((ts * 2.6 + q.ph) % 1) * .45, [rx, rz] = RODAS[q.roda]; s.visible = !bateu && ts > 3; s.position.set(rx + q.vx * a, .06 + q.vy * a - 4.9 * a * a, oz + rz - 2 * a); s.material.opacity = 1 - a / .45; });
    fu.forEach((s) => { const q = s.userData, a = ((ts * .5 + q.ph) % 1) * 2.2, [rx, rz] = RODAS[q.roda]; const zb = frente(Math.min(tf, T_IMP) - a) - PC + rz; s.position.set(rx + q.dx * (1 + a), .3 + a * .6, Math.min(zb, oz + rz)); s.scale.setScalar(.5 + a * 1.3); s.material.opacity = (bateu ? .35 : .5) * Math.sin(Math.min(1, a / 2.2) * Math.PI); s.visible = ts > 3; });
    // vapor do motor amassado depois da batida
    vapor.forEach((s) => { const q = s.userData, a = ((ts * .45 + q.ph) % 1); s.visible = dI > .3; s.position.set((q.ph - .5) * .6, 1.15 + a * 1.1, 4.6 + a * .3); s.scale.setScalar(.3 + a * .9); s.material.opacity = .35 * Math.sin(a * Math.PI); });
    rach.crescer(clamp(dI / .35)); rach2.crescer(clamp((dI - .1) / .4)); po(bateu ? dI * 1.6 : -1);
    // vidros das lojas vibram
    L.vidros.forEach((v, i) => { const k = bateu ? Math.exp(-dI * 2.5) * .03 : 0; v.position.y = 1.35 + Math.sin(ts * 70 + i) * k; v.material.emissiveIntensity = .25 + k * 6; });
    rosto(gui, t, o2.guiEmo || 'determinado', o2.guiExtra); rosto(mot, t, o2.motEmo || 'medo', { quem: 'mot' });
  }
  return { L, g, gui, ca, cw, mot, sacC, paoR, carA, carB, mo, pil, povo, upd, marcas };
}
