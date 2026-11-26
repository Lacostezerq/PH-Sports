// ATO 4B — dia 12 a dia 17 (560 a 695 s): a verdade na ladeira (os dedos afrouxam como no ovo, o motorista ajoelhado),
// o mundo de papel com as luvas pretas, o poste entortado, a montagem dos ovos, o relógio da escola e a Dona Cida decidida.
import * as THREE from 'three';
import { mk, cam, camT, ator, rosto, pw } from './base.js';
import { GUI, GUILUVA, CIDA, MOTORISTA, GAS, pessoa } from './gente.js';
import { montaLadeira, T_IMP, PC, frente } from './ladeira.js';
import { rua, salaAula } from './lugares2.js';
import { escada, bot, botNaMao } from './comum.js';
import { cozinha } from './lugares.js';
import { montaOvos, ovosUpd, OVO_ESC } from './ato4a.js';
import { celular, ovo, sacolaPao, poste } from './objs.js';
import { naMao } from './fx2.js';
import { sprite } from './efeitos.js';
import { G, soma, vivo, treme, andar, parado, kf, kv, mix, correr } from './mov.js';
import { clamp, smooth, easeOut, easeIn, lerp } from './motor/core.js';
import { sph, cyl, rb, bx, toon, ctex } from './motor/toon.js';
import * as M from '../../../mundo/cidade/moveis.js';

const FXT = { tint: '#FFF0E0', sat: 1.08 };
const lad = (t0, t1, build, o = {}) => mk(t0, t1, { bg: '#E8B080', fov: o.fov || 40, far: 600 }, (c) => { const S = montaLadeira(c, o); const U = build(S, c); return (t, u, cm) => { S.g.updateMatrixWorld(true); return { ...FXT, ...(U(t, u, cm) || {}) }; }; });
const W = (S, x, y, z) => S.L.w(x, y, z);
const segura = (t, tf) => { const k = clamp((tf - T_IMP) / .2); return soma(G.maosFrente, { shL: [-22, 0], shR: [-22, 0], hipL: [24, 6], knL: 24 + 8 * k, hipR: [-18 - 6 * k, 4], knR: 6, lean: 2 + 5 * k, bob: -.02 * k }, treme(t, tf > T_IMP ? .9 * Math.exp(-(tf - T_IMP) * .8) + .15 : 0)); };
const espera = (t, tf) => kf(tf, [[0, soma({ shL: [0, 9], shR: [4, 9], elL: 14, elR: 12 }, vivo(t, 3, .6))], [19.6, { shL: [6, 10], shR: [4, 9], elL: 18, elR: 12 }], [19.85, { shL: [-6, 14], shR: [2, 10], elL: 6, elR: 10 }, 'out'], [20.5, soma(G.maosFrente, { shL: [-18, 0], shR: [-18, 0], hipL: [24, 6], knL: 22, hipR: [-18, 4], knR: 6, lean: 2 }), 'back']]);
// as mãos afrouxam no último instante (os dedos abrem: mão um pouco mais larga e mais leve)
const guiPose = (t, tf) => tf < 20.5 ? espera(t, tf) : segura(t, tf);
/** Ovo transparente que aparece sobre as mãos (lembrança da tentativa 47). */
function ovoFantasma(c) { const m = new THREE.Mesh(new THREE.SphereGeometry(.18, 24, 16), new THREE.MeshBasicMaterial({ color: '#FFF6E0', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })); m.scale.set(1, 1.3, 1); c.add(m); return m; }
/** Motorista de pé (fora da cabine). */
function motPe(S) { const k = ator(S.g, MOTORISTA, 1.0, -1.0, 0); k.root.visible = false; return k; }
/** Mapa do tempo de filme da ladeira na cena da verdade. */
const tfV = (t) => t < 566 ? 4 + (t - 560) * 2.6 : t < 572 ? 20.2 + (t - 566) * (1.95 / 6) : t < 574 ? 22.15 + (t - 572) * .3 : 22.75 + (t - 574) * .8;

export const ATO4B = [
  // V1 — dia 12, a verdade: mesmo ângulo do começo
  lad(560, 566, (S) => (t, u, cm) => { const tf = tfV(t); S.upd(t, tf, { guiPose }); const F = S.cw.position.z + PC; cam(cm, [[0, W(S, 2.6, 13, 9)], [1, W(S, 2.2, 11.5, 5)]], W(S, 0, 0, F * .55 - 4), u / 6); return { bloom: .3 }; }),
  // V2 — câmera lenta nas mãos chegando no para-choque
  lad(566, 572, (S) => (t, u, cm) => { const tf = tfV(t); S.upd(t, tf, { guiPose, guiEmo: 'determinado' }); cam(cm, [[0, W(S, 1.5, .85, .1)], [1, W(S, 1.2, .8, -.05)]], [[0, W(S, 0, .7, -.5)], [1, W(S, 0, .72, -.42)]], u / 6, 0, 0); return { focus: 1.3, range: .6, blur: 9, sat: 1.15 }; }),
  // V3 — no último instante os dedos afrouxam, igual no ovo; flash do ovo 47 sobreposto
  lad(572, 574, (S, c) => { const of = ovoFantasma(S.g); return (t, u, cm) => { const tf = tfV(t); S.upd(t, tf, { guiPose: (tt, f) => soma(guiPose(tt, f), { elL: 4 * smooth(572.2, 572.8, t), elR: 4 * smooth(572.2, 572.8, t) }), guiEmo: 'determinado', guiExtra: { blink: t > 572.5 && t < 573 ? .6 : undefined } });
    S.gui.hands.L.scale.set(1.15, 1, 1.2); S.gui.hands.R.scale.set(1.15, 1, 1.2); const p = pw(S.gui.hands.R, 0, 0, 0); of.position.set(0, .78, S.gui.root.position.z - .42); of.material.opacity = .5 * Math.sin(clamp((t - 572.3) / 1.2) * Math.PI);
    cam(cm, [[0, W(S, 1.0, .9, -.15)], [1, W(S, .9, .88, -.1)]], [[0, W(S, 0, .75, -.42)], [1, W(S, 0, .75, -.4)]], u / 2, 0, 0); return { focus: 1.0, range: .5, blur: 10, bloom: .6, bloomT: .6 }; }; }),
  // V4 — o para-choque amassa, mas a cabine não rasga e o vidro não estoura. A carreta para
  lad(574, 578.2, (S) => (t, u, cm) => { const tf = tfV(t); S.upd(t, tf, { guiPose, guiEmo: 'determinado' }); const dI = Math.max(0, tf - T_IMP); camT(cm, [[0, W(S, -2.6, 1.6, 1.8)], [1, W(S, -2.9, 1.7, 2.1)]], [[0, W(S, 0, 1.0, -1.0)], [1, W(S, 0, 1.0, -1.2)]], u / 4.2, .04 * Math.exp(-dI * 5)); return { bloom: .35 }; }),
  // V5 — a porta da cabine abre e o motorista desce tremendo
  lad(578.2, 585, (S) => { const mp = motPe(S); return (t, u, cm) => { const tf = 25; S.upd(t, tf, { guiPose: (tt) => soma(segura(tt, 25), { lean: 0 }), guiEmo: 'neutro' }); const a = t - 578.2;
    S.ca.userData.porta.rotation.y = 1.3 * smooth(.3, 1.2, a); const sai = a > 1.4; S.mot.root.visible = !sai; mp.root.visible = sai;
    const ca = S.cw.position.z; if (sai) { const k = clamp((a - 1.4) / 4); mp.place(lerp(1.05, .75, k), lerp(ca + 3.2, .55, k), 0, lerp(0, -Math.PI / 2 - .3, smooth(.5, 1, k))); mp.pose(k < 1 ? soma(andar(t, { f: 1.3, amp: .7 }), treme(t, .8)) : soma(parado(t, 4), treme(t, .9))); rosto(mp, null, t, 'medo'); }
    cam(cm, [[0, W(S, 4.2, 1.9, -2.2)], [1, W(S, 3.4, 2.7, -1.6)]], [[0, W(S, .8, 1.0, ca + 3.2)], [1, W(S, .4, .9, .4)]], u / 6.8); return { bloom: .3 }; }; }),
  // V6 — cai de joelhos no asfalto e olha pra cima
  lad(585, 592.8, (S) => { const mp = motPe(S); mp.root.visible = true; return (t, u, cm) => { S.upd(t, 25, { guiPose: (tt) => soma(parado(tt, 2), { shL: [10, 10], shR: [10, 10] }), guiEmo: 'preocupado' }); S.mot.root.visible = false; const a = t - 585;
    mp.place(.75, .6, 0, -Math.PI / 2 - .25); mp.pose(soma(mix(parado(t, 4), G.ajoelhado, smooth(.3, 1.2, a)), { headX: -18 * smooth(1.5, 2.5, a), shL: [30, 10], shR: [30, 10], elL: 30, elR: 30 }, treme(t, .5))); rosto(mp, null, t, 'choro', { look: [0, -.6] });
    cam(cm, [[0, W(S, -.55, 1.15, 2.1)], [1, W(S, -.45, 1.1, 1.9)]], [[0, W(S, .4, .75, .4)], [1, W(S, .45, .78, .45)]], u / 7.8); return { bloom: .3 }; }; }),
  // V7 — "Moleque, tu é o quê?" (chorando)
  lad(592.8, 596.4, (S) => { const mp = motPe(S); mp.root.visible = true; return (t, u, cm) => { S.upd(t, 25, { guiPose: (tt) => parado(tt, 2), guiEmo: 'preocupado' }); S.mot.root.visible = false;
    mp.place(.75, .6, 0, -Math.PI / 2 - .25); mp.pose(soma(G.ajoelhado, { headX: -18, shL: [40 + 10 * Math.sin(t * 3), 20], elL: 40, shR: [40, 20], elR: 40 }, treme(t, .4))); rosto(mp, 'mot', t, 'choro', { look: [0, -.6] });
    cam(cm, [[0, W(S, .15, 1.02, 1.15)], [1, W(S, .2, 1.0, 1.08)]], [[0, W(S, .75, .78, .6)], [1, W(S, .75, .78, .6)]], u / 3.6); return { bloom: .3 }; }; }),
  // V8 — "Neto da Dona Cida." (tímido)
  lad(596.4, 599.6, (S) => { const mp = motPe(S); mp.root.visible = true; return (t, u, cm) => { S.upd(t, 25, { guiPose: (tt) => soma(parado(tt, 2), G.maosBolso, { headX: 16 }), guiEmo: 'vergonha', guiExtra: { quem: 'gui', look: [0, .5] } }); S.gui.root.rotation.y = Math.PI / 2; S.mot.root.visible = false;
    mp.place(.75, .6, 0, -Math.PI / 2 - .25); mp.pose(soma(G.ajoelhado, { headX: -18 })); rosto(mp, null, t, 'choro', { look: [0, -.6] });
    cam(cm, [[0, W(S, 1.6, .7, .45)], [1, W(S, 1.55, .72, .42)]], [[0, W(S, 0, 1.05, .25)], [1, W(S, 0, 1.05, .25)]], u / 3.2); return { bloom: .3 }; }; }),
  // V9 — ele pega a sacola de pão do chão e vai embora; gente saindo das lojas filmando
  lad(599.6, 605, (S, c) => { const mp = motPe(S); mp.root.visible = true; const fil = [[-4.8, -3.2], [-5.4, -1.0], [4.9, -2.4], [5.2, .8], [-4.6, 1.6]].map(([x, z], i) => { const k = ator(S.g, pessoa(i + 2), x, z, x > 0 ? -Math.PI / 2 : Math.PI / 2); const f = celular(); k.hands.R.add(f); f.position.set(0, -.08, .04); return k; });
    return (t, u, cm) => { const a = t - 599.6; S.upd(t, 25, { guiPose: (tt) => parado(tt, 2), guiEmo: 'neutro' }); S.mot.root.visible = false; S.sacC.visible = false;
      const pega = kv(a, [[.4, 0], [.9, 1], [1.3, 0]]); const vai = clamp((a - 1.4) / 3.6); S.gui.place(lerp(0, .5, vai), lerp(.25, 3.5, vai), 0, vai > 0 ? .15 : Math.PI);
      S.gui.pose(vai > 0 ? andar(t, { f: 1.7 }) : soma(parado(t, 2), mix({}, G.pegaChao, pega))); const sp = S.sacC; sp.visible = true; if (a > .9) naMao(sp, S.gui, 'L', [0, -.22, 0], false); sp.rotation.set(0, 0, 0); rosto(S.gui, null, t, 'neutro');
      mp.place(.75, .6, 0, -Math.PI / 2 - .25 + .9 * smooth(2, 3.5, a)); mp.pose(soma(G.ajoelhado, { headX: -10 })); rosto(mp, null, t, 'choro', { look: [.5, -.4] });
      fil.forEach((k, i) => { k.pose(soma(parado(t, i), G.filmar)); rosto(k, null, t, 'surpreso'); k.faceTo(S.gui.root.position.x, S.gui.root.position.z); });
      cam(cm, [[0, W(S, -2.6, 1.6, 2.6)], [1, W(S, -2.4, 1.7, 3.2)]], [[0, W(S, .2, .8, .6)], [1, W(S, .3, .9, 2.0)]], u / 5.4); return { bloom: .3 }; }; }),
  // V10 — "Se ele tivesse segurado com toda a força, a carreta teria virado lata, e o motorista junto" (o "e se" aparece por um instante, cinza)
  lad(605, 611.2, (S) => { const mp = motPe(S); mp.root.visible = true; return (t, u, cm) => { const lata = t > 608.4 && t < 610.6; S.upd(t, 25, { guiPose: (tt) => parado(tt, 2) }); S.mot.root.visible = false; S.gui.root.visible = false; S.sacC.visible = false;
    S.ca.scale.set(.58, .58 * (lata ? .78 : 1), .58 * (lata ? .62 : 1)); S.ca.rotation.z = lata ? .06 : 0; mp.root.visible = !lata; mp.place(.75, .6, 0, -Math.PI / 2 + .6); mp.pose(soma(G.ajoelhado, { headX: -6 })); rosto(mp, null, t, 'choro');
    cam(cm, [[0, W(S, 4.6, 2.6, 4.5)], [1, W(S, 4.0, 2.3, 3.6)]], [[0, W(S, 0, 1, -1.5)], [1, W(S, 0, 1, -1.8)]], u / 6.2); return lata ? { sat: 0, tint: '#C8C8D0', exposure: .85, vig: .7 } : { bloom: .3 }; }; }),
  // V11 — ele sobe a ladeira com o pão, de capuz, enquanto o povo filma atrás
  lad(611.2, 620, (S, c) => { const fil = [[-3.0, 4.0], [-2.0, 4.8], [2.4, 4.4], [1.2, 5.6], [3.6, 5.2], [-.6, 6.0]].map(([x, z], i) => { const k = ator(S.g, pessoa(i), x, z, Math.PI); const f = celular(); k.hands.R.add(f); f.position.set(0, -.08, .04); return k; });
    const capuz = sph(.33, '#959BA3', 0, 0, 0, { seg: 18 }); capuz.scale.set(1.05, 1.0, 1.08); S.gui.headG.add(capuz); capuz.position.set(0, .27, -.04);
    return (t, u, cm) => { const a = t - 611.2; S.upd(t, 25, {}); S.mot.root.visible = false; S.sacC.visible = true; S.gui.place(.6, 9 - a * .95, 0, Math.PI); S.gui.pose(andar(t, { f: 1.5, curvado: true })); naMao(S.sacC, S.gui, 'L', [0, -.22, 0], false); S.sacC.rotation.set(0, 0, 0); rosto(S.gui, null, t, 'neutro');
      fil.forEach((k, i) => { k.place(k.root.position.x, k.root.position.z - .015, 0, Math.PI); k.pose(soma(parado(t, i), G.filmar)); rosto(k, null, t, 'surpreso'); });
      cam(cm, [[0, W(S, .3, 1.6, 12.5)], [1, W(S, .2, 1.9, 13.5)]], [[0, W(S, .5, 1.0, 4)], [1, W(S, .5, 1.6, -4)]], u / 8.8); return { bloom: .35, tint: '#FFE6CC' }; }; }),
];

// ---------- dia 14: mundo de papel ----------
const POSTE = [4.5, -5];
function montaPapel(c) {
  const L = rua(c, { incl: 0, hora: 'dia', tipo: 'lojas', faixa: false, z0: -60, z1: 40, seed: 52, carros: [[1, -14, '#3E7CC8'], [-1, -8, '#F4F1EA'], [1, 12, '#E2443A']] });
  const pt = L.postes.find((p) => Math.abs(p.position.x - POSTE[0]) < .1 && Math.abs(p.position.z - POSTE[1]) < 1) || L.postes[0];
  L.g.children.forEach((o) => { if (o.isGroup && o.children.length === 6 && Math.abs(o.position.y - .16) < .01 && Math.abs(o.position.x - POSTE[0]) < 1.2 && o.position.z > -11 && o.position.z < 0) o.visible = false; }); // árvore que tapava o poste e o Guilherme
  const bur = new THREE.Mesh(new THREE.CircleGeometry(.22, 16), toon('#3A3630')); bur.rotation.x = -Math.PI / 2; bur.scale.set(1.3, 1, 1); bur.position.set(5.0, .162, -3.9); L.g.add(bur);
  const gui = ator(L.g, GUILUVA, 5.3, 8, Math.PI); const gente = [[5.0, -6, 0], [5.6, -9.5, 0], [5.2, -45, 0], [4.8, 1.5, Math.PI], [5.7, 32, Math.PI]].map(([x, z, r], i) => ({ k: ator(L.g, pessoa(i + 1), x, z, r), x, z, r }));
  return { L, pt, gui, gente };
}
function papelUpd(P, t) {
  const { pt, gui, gente } = P;
  // passos curtos e devagar, desviando das pessoas como se fossem de vidro (620–630), tropeça no buraco (630.6) e apoia no poste
  const z = t < 630.6 ? 8 - (t - 620) * 1.15 : -4.2 - .32 * smooth(630.6, 631.2, t); const desvia = gente.reduce((s, p) => { const pz = p.z + (p.r ? 1 : -1) * (t - 620) * -1.0; const d = Math.abs(pz - z); return s + (d < 2 ? (1 - d / 2) * .55 : 0); }, 0); const desS = gente.reduce((s, p) => { const pz = p.z + (p.r ? 1 : -1) * (t - 620) * -1.0; const d = Math.abs(pz - z); return s + (d < 2.2 ? Math.sin(Math.PI / 2 * Math.min(1, (2.2 - d) / 1.2)) * Math.sign(5.3 - p.x) : 0); }, 0);
  const tro = t > 630.6; gui.place(5.3 + (t < 630.6 ? desS * .62 : -.62 * smooth(630.6, 631.2, t)), z, 0, tro ? Math.PI - .5 * smooth(630.6, 631, t) : Math.PI);
  let p = andar(t, { f: 1.2, amp: .55, maos: 'bolso' }); if (desvia > .1 && !tro) p = soma(p, { shL: [20, 30], shR: [20, 30], elL: 40, elR: 40, lean: -4, twist: 12 * desvia });
  if (tro) p = kf(t, [[630.6, p], [630.9, soma(parado(t, 2), { lean: 25, shL: [70, 40], elL: 5, knR: 40, hipR: [30, 4], bob: -.08 })], [631.6, soma(parado(t, 2), { lean: 12, shL: [60, 50], elL: 10, bob: -.02 })], [633.6, soma(parado(t, 2), { lean: 12, shL: [60, 50], elL: 10 })], [634.4, soma(parado(t, 2), G.maosBolso)]]);
  gui.pose(p); rosto(gui, null, t, tro ? (t > 631.4 ? 'medo' : 'surpreso') : 'preocupado', { look: tro ? [-.6, -.2] : [Math.sin(t) * .4, .2] });
  pt.entortar(smooth(630.95, 632.2, t) * .9);
  gente.forEach((q, i) => { const pz = q.z + (q.r ? 1 : -1) * (t - 620) * -1.0; q.k.place(q.x, pz, .16, q.r); q.k.pose(andar(t + i, { f: 1.7 })); rosto(q.k, null, t, 'neutro'); });
}

// ---------- montagem dos dias 13 a 16 ----------
const ovoMao = (c) => { const o = ovo(); o.scale.setScalar(OVO_ESC); c.add(o); return o; };

export const ATO4C = [
  // P1 — dia 14: andando na calçada de luvas pretas, passos curtos e devagar, desviando das pessoas como se fossem de vidro
  mk(620, 627, { bg: '#CFE4EE', fov: 40 }, (c) => { const P = montaPapel(c); return (t, u, cm) => { papelUpd(P, t); const z = P.gui.root.position.z; cam(cm, [[0, [4.4, 1.45, z - 3.2]], [1, [4.4, 1.4, z - 3.0]]], [5.2, 1.0, z], u / 7); return { tint: '#FFFAF0' }; }; }),
  // P2 — por três segundos tudo ganha textura de papel amassado (a camada de cima faz o papel)
  mk(627, 630.4, { bg: '#CFE4EE', fov: 46 }, (c) => { const P = montaPapel(c); return (t, u, cm) => { papelUpd(P, t); const z = P.gui.root.position.z; cam(cm, [[0, [1.5, 3.2, z - 6]], [1, [1.8, 3.0, z - 5.4]]], [5.2, 1.0, z], u / 3.4); return { sat: .35, tint: '#F4ECD8', exposure: 1.05 }; }; }),
  // P3 — tropeça de leve num buraco e apoia a mão no poste: o poste entorta até ficar torto pro lado
  mk(630.4, 636, { bg: '#CFE4EE', fov: 40 }, (c) => { const P = montaPapel(c); return (t, u, cm) => { papelUpd(P, t); camT(cm, [[0, [5.9, 1.35, -7.4]], [1, [5.85, 1.6, -7.6]]], [[0, [4.7, 1.0, -4.5]], [1, [4.6, 1.7, -4.8]]], u / 5.6, t > 631 && t < 632.3 ? .01 : 0); return { tint: '#FFFAF0' }; }; }),
  // P4 — "Oitocentas toneladas, mais que o Cristo Redentor..." — o poste torto, ele parado olhando
  mk(636, 642, { bg: '#CFE4EE', fov: 38 }, (c) => { const P = montaPapel(c); return (t, u, cm) => { papelUpd(P, t); cam(cm, [[0, [5.8, 1.5, -7.6]], [1, [5.75, 1.45, -7.3]]], [[0, [4.65, 1.5, -4.7]], [1, [4.75, 1.25, -4.4]]], u / 6); return { tint: '#FFFAF0' }; }; }),
  // P5 — ele olha em volta, ninguém viu, e sai rápido de cabeça baixa
  mk(642, 650, { bg: '#CFE4EE', fov: 40 }, (c) => { const P = montaPapel(c); return (t, u, cm) => { papelUpd(P, 640); const a = t - 642; const g = P.gui; const sai = clamp((a - 2.6) / 5);
    g.place(4.68 + .4 * sai, -4.52 - sai * 6, 0, a < 2.6 ? Math.PI + Math.sin(a * 2.4) * .9 : Math.PI); g.pose(sai > 0 ? andar(t, { f: 2.0, maos: 'bolso', curvado: true }) : soma(parado(t, 2), G.maosBolso, { headY: Math.sin(a * 2.4) * 40 })); rosto(g, null, t, 'preocupado');
    P.pt.entortar(.9); cam(cm, [[0, [5.75, 1.45, -7.3]], [1, [5.9, 1.5, -12.8]]], [g.root.position.x, 1.0, g.root.position.z], u / 8, 0, .3); return { tint: '#FFFAF0' }; }; }),
  // Mo1 — dias 13 a 16 na cozinha: segurando um ovo, depois dois (o contador sobe a cada corte)
  mk(650, 655, { bg: '#C8D8E0', fov: 36 }, (c) => { const S = montaOvos(c, { luva: GUILUVA, hora: 'tarde' }); S.band.visible = true; const o2 = ovoMao(c);
    return (t, u, cm) => { ovosUpd(S, 489, {}); const dois = t > 652.6; S.gui.pose({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: 6, shR: [60, 0], elR: 80, shL: [dois ? 60 : 30, 0], elL: dois ? 80 : 50, headX: 12 }); o2.visible = dois; naMao(o2, S.gui, 'L', [0, -.02, .06], false); rosto(S.gui, null, t, 'determinado', { look: [0, .6] });
      S.ci.pose({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, ...G.bracoCruzado }); rosto(S.ci, null, t, 'feliz'); cam(cm, [[0, [.42, 1.3, -.65]], [1, [.4, 1.25, -.55]]], [[0, [.15, .95, .95]], [1, [.15, .95, .95]]], u / 5); return { tint: '#FFF6E8' }; }; }),
  // Mo2 — passando um ovo de uma mão pra outra
  mk(655, 660, { bg: '#C8D8E0', fov: 40, perto: true }, (c) => { const S = montaOvos(c, { luva: GUILUVA, hora: 'tarde' }); S.ci.root.visible = false; S.mao.visible = false; const o = ovoMao(c);
    return (t, u, cm) => { ovosUpd(S, 489, { semOvo: true }); S.gui.pose({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: 6, shR: [80, 10], elR: 66, shL: [80, 10], elL: 66, headX: 14 });
      const k = (Math.sin(t * 2.2) + 1) / 2; S.gui.root.updateMatrixWorld(true); const a = S.gui.hands.R.localToWorld(new THREE.Vector3(0, -.02, .06)), b = S.gui.hands.L.localToWorld(new THREE.Vector3(0, -.02, .06)); o.position.copy(a).lerp(b, k); o.position.y += Math.sin(k * Math.PI) * .3; o.rotation.z = k * 6;
      rosto(S.gui, null, t, 'feliz', { look: [(k - .5) * 1.2, .6] }); S.ci.pose({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, ...G.bracoCruzado }); cam(cm, [[0, [.8, 1.6, -.45]], [1, [.74, 1.56, -.38]]], [[0, [.15, 1.0, .7]], [1, [.15, 1.02, .72]]], u / 5); return { tint: '#FFF6E8' }; }; }),
  // Mo3 — segurando um ovo em cima de cada dedo
  mk(660, 665, { bg: '#C8D8E0', fov: 30, perto: true }, (c) => { const S = montaOvos(c, { luva: GUILUVA, hora: 'tarde' }); S.ci.root.visible = false; const os = [0, 1, 2, 3, 4].map(() => ovoMao(c));
    return (t, u, cm) => { ovosUpd(S, 489, { semOvo: true }); S.gui.pose({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: 4, shR: [75, 0], elR: 90, headX: 8 }); S.gui.root.updateMatrixWorld(true);
      os.forEach((o, i) => { const p = S.gui.hands.R.localToWorld(new THREE.Vector3((i - 2) * .028, .06 + Math.sin(t * 3 + i) * .002, .02 + Math.abs(i - 2) * .01)); o.position.copy(p); o.rotation.z = Math.sin(t * 2 + i) * .05; });
      rosto(S.gui, null, t, 'determinado', { look: [0, -.2] }); cam(cm, [[0, [1.25, 1.55, -.5]], [1, [1.18, 1.5, -.42]]], [[0, [.2, .98, .75]], [1, [.2, 1.0, .75]]], u / 5); return { tint: '#FFF6E8' }; }; }),
  // Mo4 — Dona Cida aplaudindo baixinho, sentada na cadeira
  mk(665, 670, { bg: '#C8D8E0', fov: 34 }, (c) => { const S = montaOvos(c, { luva: GUILUVA, hora: 'tarde' }); const os = [0, 1, 2, 3, 4].map(() => ovoMao(c));
    return (t, u, cm) => { ovosUpd(S, 489, { semOvo: true }); S.gui.pose({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: 4, shR: [75, 0], elR: 90 }); S.gui.root.updateMatrixWorld(true); os.forEach((o, i) => { o.position.copy(S.gui.hands.R.localToWorld(new THREE.Vector3((i - 2) * .028, .06, .02 + Math.abs(i - 2) * .01))); });
      const pal = Math.abs(Math.sin(t * 6)); S.ci.pose({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: 4, shL: [62, -8 + 10 * pal, -30], elL: 70, shR: [62, -8 + 10 * pal, -30], elR: 70 }); rosto(S.ci, null, t, 'feliz', { smile: .9 });
      cam(cm, [[0, [.45, 1.3, 1.6]], [1, [.42, 1.28, 1.5]]], [[0, [.15, .92, -.15]], [1, [.15, .92, -.15]]], u / 5); return { tint: '#FFF6E8' }; }; }),
  // D17a — escola, dia 17: ele olhando o relógio da parede: duas e quarenta
  mk(670, 674.5, { bg: '#F2E6C8', fov: 36 }, (c) => { const S = salaAula(c); S.relogio.hora(2, 40); const g = ator(c, GUILUVA, 1.2, .2, Math.PI); g.sombra.visible = false; g.place(1.2, .1, .02, Math.PI);
    const al = [[-1.2, -1.0], [0, -1.0], [-2.4, .3], [0, .3], [2.4, -1.0]].map(([x, z], i) => { const k = ator(c, pessoa(i, { camisa: '#F6F4EE', calca: '#2F4E86' }), x, z + .4, Math.PI); k.place(x, z + .4, .02, Math.PI); return k; });
    return (t, u, cm) => { g.pose({ bob: -.2, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: 6, shL: [40, 6], elL: 70, shR: [40, 6], elR: 70, headX: -14, headY: 20 }); rosto(g, null, t, 'tedio', { look: [.4, -.6] });
      al.forEach((k, i) => { k.pose({ bob: -.2, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: 10, shL: [40, 6], elL: 70, shR: [40 + 10 * Math.sin(t * 2 + i), 6], elR: 70, headX: 12 }); rosto(k, null, t, 'tedio'); });
      cam(cm, [[0, [3.2, 1.4, .8]], [.45, [3.1, 1.4, .7]], [1, [1.6, 1.9, .6]]], [[0, [1.2, 1.05, .1]], [.45, [1.2, 1.1, .1]], [1, [2.2, 2.45, -3.7]]], u / 4.5); return { tint: '#FFF8EC' }; }; }),
  // D17b — batuca de leve na carteira com a ponta do dedo e a carteira afunda um pouquinho
  mk(674.5, 680, { bg: '#F2E6C8', fov: 30 }, (c) => { const S = salaAula(c); const g = ator(c, GUILUVA, 1.2, .1, Math.PI); g.place(1.2, .36, .02, Math.PI); const ct = S.carteiras.reduce((m, k) => Math.hypot(k.position.x - 1.2, k.position.z + .1) < Math.hypot(m.position.x - 1.2, m.position.z + .1) ? k : m);
    return (t, u, cm) => { const bat = Math.max(0, Math.sin(t * 9)); g.pose({ bob: -.2, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: 0, shL: [62, 6], elL: 62, shR: [66, 6], elR: 62 + bat * 8, headX: 4 }); const af = smooth(676.5, 677.2, t); ct.userData.tampo.position.y = .72 - .03 * af; ct.userData.tampo.rotation.z = .05 * af;
      rosto(g, null, t, af > .5 ? 'surpreso' : 'tedio', { look: [0, .6] }); cam(cm, [[0, [1.85, 1.45, -.45]], [1, [1.8, 1.4, -.4]]], [[0, [1.15, .82, -.05]], [1, [1.15, .8, -.05]]], u / 5.5); return { tint: '#FFF8EC', focus: .7, range: .4, blur: 6 }; }; }),
  // G1 — portaria: o moço do gás deixa o botijão
  mk(680, 684, { bg: '#2A2420', fov: 38 }, (c) => { const P = escada(c); const gas = ator(c, GAS, 1.6, 7.0, Math.PI); const bm = botNaMao(gas, 'R', .5); const bc = bot(); bc.position.set(.85, 0, 4.25); c.add(bc);
    return (t, u, cm) => { const a = t - 680; const ida = clamp(a / 1.3), volta = clamp((a - 2.3) / 1.4); gas.place(lerp(1.6, 1.0, ida) + .5 * volta, lerp(7.0, 4.75, ida) + 2.3 * volta, 0, volta > 0 ? .15 : Math.PI + .25);
      gas.pose(a < 1.3 || volta > 0 ? andar(t, { f: 1.9 }) : soma(parado(t, 1), { lean: 40, bob: -.1, knL: 40, knR: 40, hipL: [35, 6], hipR: [35, 6], shR: [55, 8], elR: 5 })); bm.visible = a < 1.85; bc.visible = a >= 1.85; bm.prumo(t); rosto(gas, null, t, 'neutro');
      P.portaRua.rotation.y = -1.2 * (smooth(0, .4, a) * (1 - smooth(.9, 1.3, a)) + smooth(2.8, 3.1, a)); cam(cm, [[0, [-.85, 1.0, 5.5]], [1, [-.7, .9, 5.2]]], [[0, [.9, .3, 4.3]], [1, [.85, .3, 4.25]]], u / 4); return { tint: '#FFF4E4' }; }; }),
  // G2 — Dona Cida na cozinha: olha o relógio, olha pela janela, bufa. "Sempre levei sozinha."
  mk(684, 690.2, { bg: '#C8D8E0', fov: 36 }, (c) => { const K = cozinha(c, { hora: 'tarde' }); const rel = M.relogio({ vivos: [] }, .14); rel.position.set(-1.0, 2.0, -1.58); c.add(rel); const ci = ator(c, CIDA, -.2, -.2, Math.PI);
    return (t, u, cm) => { const a = t - 684; const olha = kv(a, [[0, 0], [.6, 1], [1.8, 1], [2.4, 2], [3.6, 2], [4.0, 3]]); const ry = olha < 1 ? lerp(Math.PI, Math.PI + .5, olha) : olha < 2 ? lerp(Math.PI + .5, Math.PI - .2, olha - 1) : lerp(Math.PI - .2, .3, olha - 2);
      ci.place(-.2, -.2, 0, ry); const buf = a > 3.4 && a < 4.0; ci.pose(soma(parado(t, 3), G.maosCintura, { headX: olha < 2 ? -18 * Math.min(1, olha) : 0, bob: buf ? -.02 : 0 }, a > 4 ? { shR: [30 + 20 * Math.max(0, Math.sin(t * 3)), 20], elR: 70 } : {})); rosto(ci, a > 4 ? 'cida' : null, t, a > 3.4 ? 'bravo' : 'preocupado', { mouth: buf ? { open: .4, round: 1 } : undefined, look: olha < 1 ? [0, -.6] : [0, 0] });
      cam(cm, [[0, [1.45, 1.6, 1.45]], [.55, [1.35, 1.5, 1.2]], [1, [1.05, 1.3, .6]]], [[0, [-.55, 1.45, -1.0]], [.55, [-.4, 1.2, -.6]], [1, [-.2, 1.0, -.2]]], u / 6.2); return { tint: '#FFF0DC' }; }; }),
  // G3 — ela tira o avental, amarra o cabelo e desce
  mk(690.2, 695, { bg: '#C8D8E0', fov: 38 }, (c) => { const K = cozinha(c, { hora: 'tarde' }); const ci = ator(c, CIDA, -.2, -.2, .3); const ci2 = ator(c, { ...CIDA, estampa: undefined, camisa: '#7FA6C9' }, -.2, -.2, .3); const av = rb(.3, .4, .02, '#F7F1E3', 0, 0, 0); c.add(av);
    return (t, u, cm) => { const a = t - 690.2; const tira = a > 1.2; ci.root.visible = !tira; ci2.root.visible = tira; const k = tira ? ci2 : ci; const sai = clamp((a - 2.8) / 1.8);
      k.place(lerp(-.2, -1.75, sai), lerp(-.2, .9, sai), 0, sai > 0 ? -Math.PI / 2 - .5 : .3); k.pose(sai > 0 ? andar(t, { f: 2.3 }) : soma(parado(t, 3), a < 1.2 ? { shL: [60, 30], elL: 120, shR: [60, 30], elR: 120, headX: 10 } : a < 2.6 ? { shL: [160, 30], elL: 120, shR: [160, 30], elR: 120, headX: 8 } : {})); rosto(k, null, t, 'determinado');
      av.visible = tira; av.position.set(.6, .8, .5); av.rotation.set(-1.4, 0, .3); cam(cm, [[0, [1.1, 1.3, 1.2]], [1, [1.0, 1.25, 1.05]]], [[0, [-.3, .95, -.1]], [1, [-1.0, .95, .5]]], u / 4.8); return { tint: '#FFF0DC' }; }; }),
];
