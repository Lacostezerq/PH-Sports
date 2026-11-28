// ATO 2 — dia 1 (129 a 235 s): o primeiro foco (escova, pão), a aula de história, a prova surpresa, a coxinha e a lição de 30 questões.
import * as THREE from 'three';
import { escovar, levaBoca, ciclo, alcanca, palma, aponta, naCabeca } from './ik.js';
import { frenteDe, mk, cam, ator, rosto, fala, sentar, icone, UF, emFoco, fundo, celular, particulas, vibra, soma, vivo, parado, andar, G, sentado, clamp, smooth, lerp, easeIO, easeOut, kv, naMao, rir } from './cf.js';
import { montaCasa, sentaMesa, telNaMao, paginaUm, paginaTrinta, relogioParede, sentadoCel, MESA } from './casa_cena.js';
import { banheiro } from './lugares.js';
import { salaAula } from './lugares2.js';
import { cantina } from './lugares_foco.js';
import { GUI, DAVI, ROSECASA, ROSE, TIAGO, PROFH, aluno } from './elenco_foco.js';
import { folha, coxinha, prova, paoManteiga, faca } from './pecas_foco.js';
import { escova, xicara } from './objs.js';
import { cadernoAberto, folhaDraw } from './objetos.js';
import { fantasma } from './pecas.js';
import { deitar } from './lib.js';
import { rb, bx, cyl, sph, toon, ctex } from './motor/toon.js';

const MANHA = { tint: '#FFF8EC', bloom: .22 };
const deitaCama = (g) => { deitar(g, .95, .43, -.02); g.root.position.y = .63; return g; };
/** Gui escovando os dentes (mão direita na boca). */
const escovando = (t, f = 1) => ({ shR: [96, -24], elR: 142 + Math.sin(t * 16 * f) * 8, shL: [10, 10], elL: 20, headX: -2 });
/** Banheiro com o Guilherme na pia. */
function montaBanho(c) { const B = banheiro(c); const g = ator(c, GUI, .3, -.3, Math.PI); const e = escova('#3EA6FF'); c.add(e); e.scale.setScalar(1.6); return { B, g, e }; }
const escovaUpd = (S, t, f = 1) => { escovar(S.g, S.e, t, { shL: [6, 10], elL: 18, headX: -4 + Math.sin(t * 20 * f) * 1.5 }, f); };
/** Holograma (desenho que flutua): '1789' | 'coroa' | 'napoleao' | 'bastilha'. */
function holo(tipo) {
  const tx = ctex(256, 256, (x) => { x.strokeStyle = '#8FF0FF'; x.fillStyle = 'rgba(120,230,255,.25)'; x.lineWidth = 8; x.shadowColor = '#8FF0FF'; x.shadowBlur = 16; x.lineJoin = 'round';
    if (tipo === '1789') { x.font = '900 96px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#B8F8FF'; x.fillText('1789', 128, 128); }
    else if (tipo === 'coroa') { x.beginPath(); x.moveTo(40, 180); x.lineTo(40, 90); x.lineTo(85, 130); x.lineTo(128, 70); x.lineTo(171, 130); x.lineTo(216, 90); x.lineTo(216, 180); x.closePath(); x.fill(); x.stroke(); }
    else if (tipo === 'napoleao') { x.beginPath(); x.arc(128, 150, 55, 0, 7); x.fill(); x.stroke(); x.beginPath(); x.moveTo(40, 110); x.quadraticCurveTo(128, 20, 216, 110); x.quadraticCurveTo(128, 80, 40, 110); x.fill(); x.stroke(); x.beginPath(); x.arc(108, 145, 6, 0, 7); x.arc(148, 145, 6, 0, 7); x.stroke(); }
    else { x.beginPath(); x.rect(50, 100, 156, 110); x.fill(); x.stroke(); for (const px of [50, 100, 150]) { x.strokeRect(px, 70, 32, 30); } x.beginPath(); x.arc(128, 210, 26, Math.PI, 0); x.stroke(); } });
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tx, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); s.scale.setScalar(.32); s.renderOrder = 12; return s;
}
const GIZ = (x) => { x.strokeStyle = '#F4F1EA'; x.fillStyle = '#F4F1EA'; x.font = '700 64px Caveat'; x.fillText('Revolução Francesa', 60, 80); x.font = '600 46px Caveat'; x.fillText('1789 — Queda da Bastilha', 80, 160); x.fillText('Liberdade, Igualdade, Fraternidade', 80, 225); x.fillText('Napoleão Bonaparte', 600, 290); };
/** Sala de aula com os alunos sentados (Gui na 2ª fila, meio; Tiago do lado). */
function montaAula(c, o = {}) {
  const A = salaAula(c, { giz: GIZ }); const L = [];
  for (let r = 0; r < 4; r++) for (let k = 0; k < 5; k++) { const x = -2.4 + k * 1.2, z = -1.0 + r * 1.3; if (r === 1 && (k === 2 || k === 3)) continue; if ((r * 5 + k) % 3 === 2) continue; const a = ator(c, aluno(r * 5 + k), x, z, Math.PI); sentar(a, x, z, Math.PI, .46); a.seed = r * 5 + k; L.push(a); }
  const g = ator(c, GUI, 0, .3, Math.PI); sentar(g, 0, .3, Math.PI, .46); const ti = ator(c, TIAGO, 1.2, .3, Math.PI); sentar(ti, 1.2, .3, Math.PI, .46); const pr = ator(c, PROFH, -.4, -2.9, 0);
  return { A, L, g, ti, pr };
}
/** Alunos: dormindo (cabeça na mesa) ou acordados. */
const alunosUpd = (S, t, dorme = 1) => S.L.forEach((a, i) => { const d = dorme > 0 && i % 2 === 0; a.pose(sentado(d ? { lean: 40, headX: 30, shL: [70, 20], elL: 120, shR: [70, 20], elR: 120 } : soma({ shR: [40, 8], elR: 80, shL: [40, 8], elL: 80, lean: 6 }, vivo(t, i, .5)))); rosto(a, null, t, d ? 'sono' : 'tedio', { blink: d ? 1 : undefined }); });
/** Cantina com Gui e Tiago na mesa. */
function montaCantina(c) { const C = cantina(c); const g = ator(c, GUI, 1.0, -1.85, 0); sentar(g, 1.0, -1.85, 0, .47); const ti = ator(c, TIAGO, 1.45, -.55, Math.PI); sentar(ti, 1.45, -.55, Math.PI, .47); const cx = coxinha(); cx.scale.setScalar(1.8); c.add(cx); const suco = rb(.06, .1, .04, '#F2994A', 0, 0, 0, { out: .003 }); c.add(suco); return { C, g, ti, cx, suco }; }
const comendo = (t, k = 1) => sentado({ shR: [30, 8], elR: 70, lean: 6, headX: 6 });
/** Come a coxinha de verdade: leva à boca (k), abre a boca chegando, fecha na mordida. Devolve {P, boca}. */
const come = (S, t, k, base = comendo(t)) => { const P = levaBoca(S.g, 'L', k, base); naMao(S.cx, S.g, 'L', [0, -.04, .06], false); S.cx.rotation.set(0, 0, .5); return { P, boca: k > .55 && k < .97 ? { open: .6 } : k >= .97 ? { open: .15 } : undefined }; };

export const ATO2 = [
  // C1 — "Dia um. Ele acorda...": senta na cama de manhã e vai pro banheiro
  mk(128.96, 131.6, { bg: '#DDE6EE', fov: 46, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'manha' }); const g = ator(c, GUI, 0, 0, 0); deitaCama(g); K.tel.visible = false;
    return (t, u, cm) => { const k = smooth(129.5, 130.8, t); g.root.rotation.x = lerp(-Math.PI / 2, -.1, k); g.root.position.set(.95, lerp(.63, .45, k), lerp(.38, -.3, k)); g.pose(k > .5 ? sentado({ shL: [20, 30], shR: [20, 30], elL: 30, elR: 30 }) : { shR: [10, 10], elR: 30, shL: [10, 10], elL: 30 }); rosto(g, null, t, k > .3 ? 'sono' : 'sono', { blink: k < .2 ? 1 : .4 });
      cam(cm, [[0, [-1.2, 1.7, 1.4]], [1, [-1.0, 1.6, 1.25]]], [.9, .95, -.3], u / 2.64); return MANHA; }; }),
  mk(131.6, 134.2, { bg: '#DDE6EE', fov: 46 }, (c) => { const S = montaBanho(c);
    return (t, u, cm) => { escovaUpd(S, t); rosto(S.g, null, t, 'sono', { blink: .4 }); cam(cm, [[0, [1.05, 1.5, -.98]], [1, [1.0, 1.45, -.9]]], [.3, 1.12, -.3], u / 2.6); return MANHA; }; }),
  // C2 — "Ele sente cada cerda da escova": efeito foco pela primeira vez, só a escova colorida
  mk(134.2, 136.68, { bg: '#DDE6EE', fov: 30, perto: true, limpa: false }, (c) => { const S = montaBanho(c); const set = emFoco([S.e]);
    return (t, u, cm) => { escovaUpd(S, t, .35); rosto(S.g, null, t, 'surpreso', { look: [0, .4] }); const k = smooth(134.2, 134.7, t); UF.mundo.value = k; set(k, t); fundo(c, '#DDE6EE', k);
      const p = S.e.getWorldPosition(new THREE.Vector3()); cam(cm, [[0, [.85, 1.32, -.95]], [1, [.8, 1.3, -.88]]], [p.x, p.y, p.z], u / 2.48, 0, 0); return { focus: .35, range: .12, blur: 14 }; }; }),
  // C3 — "Ouve a espuma estourando": bolhas estourando em câmera lenta
  mk(136.68, 138.44, { bg: '#DDE6EE', fov: 28, perto: true, limpa: false }, (c) => { const S = montaBanho(c); const set = emFoco([S.e]); const cb = [0, 0, 0]; const bol = particulas(c, cb, { n: 30, cor: '#FFFFFF', r: .18, tam: .03 });
    return (t, u, cm) => { escovaUpd(S, t, .2); rosto(S.g, null, t, 'surpreso', { look: [0, .4] }); UF.mundo.value = 1; set(1, t); fundo(c, '#DDE6EE', 1); S.g.headG.updateMatrixWorld(true); const m = S.g.headG.localToWorld(new THREE.Vector3(0, .12, .3));
      cb[0] = m.x; cb[1] = m.y; cb[2] = m.z; bol(((t - 136.68) / 1.2) % 1); cam(cm, [[0, [.85, 1.3, -.92]], [1, [.82, 1.28, -.86]]], [m.x, m.y, m.z], u / 1.76, 0, 0); return { focus: .4, range: .15, blur: 12 }; }; }),
  // C4 — "Sente o gosto da menta como se fosse a primeira vez": explosão verde, olhos arregalados
  mk(138.44, 142.2, { bg: '#DDE6EE', fov: 44, limpa: false }, (c) => { const S = montaBanho(c); const set = emFoco([S.e, S.g.headG]); const pt = particulas(c, [.3, 1.18, -.62], { n: 70, cor: '#7AF0B0', r: .55, tam: .03 });
    return (t, u, cm) => { escovaUpd(S, t, .3); rosto(S.g, null, t, t > 139.4 ? 'surpreso' : 'neutro', { look: [0, 0] }); UF.mundo.value = 1; set(1, t); fundo(c, '#DDE6EE', 1); pt(clamp((t - 139.3) / 1.8));
      cam(cm, [[0, [1.05, 1.45, -1.0]], [1, [1.0, 1.4, -.92]]], [.3, 1.15, -.35], u / 3.76, 0, 0); return { focus: .7, range: .3, blur: 10 }; }; }),
  // C5 — "E escova por exatamente dois minutos sem perceber": o tempo passa, o efeito desliga, ele olha a escova assustado
  mk(142.2, 147.04, { bg: '#DDE6EE', fov: 40 }, (c) => { const S = montaBanho(c); const set = emFoco([S.e]);
    return (t, u, cm) => { const off = t > 145.3; if (!off) escovaUpd(S, t); else { S.g.pose({ shR: [70, -10], elR: 90, shL: [10, 10], elL: 20, headX: 14 }); naMao(S.e, S.g, 'R', [0, -.04, .04], [Math.PI / 2, 0, 0]); }
      rosto(S.g, null, t, off ? 'medo' : 'neutro', { look: off ? [.3, .6] : [0, 0] }); const k = 1 - smooth(145.1, 145.5, t); UF.mundo.value = k; set(k, t); fundo(c, '#DDE6EE', k);
      cam(cm, [[0, [1.05, 1.5, -.98]], [1, [1.0, 1.45, -.9]]], [.3, 1.12, -.3], u / 4.84); return MANHA; }; }),
  // C6 — "No café, ele passa manteiga no pão com tanta atenção": foco no pão, a faca desliza
  mk(147.04, 152.4, { bg: '#F4E8D0', fov: 36, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'manha' }); K.tel.visible = false; const g = ator(c, GUI, 0, 0, 0); sentar(g, -2.42, .45, -Math.PI / 2, .46); const p = paoManteiga(); p.scale.setScalar(1.6); p.position.set(-2.78, .79, .45); p.rotation.y = Math.PI / 2; c.add(p); const fa = faca(); fa.scale.setScalar(1.6); c.add(fa);
    const set = emFoco([p, fa]);
    return (t, u, cm) => { const k = clamp((t - 148.0) / 3.6); g.pose(sentado({ shR: [55, 8], elR: 70, shL: [45, -10], elL: 80, lean: 8, headX: 16 })); rosto(g, null, t, 'determinado', { look: [0, .7] }); p.userData.passa(k);
      fa.position.set(-2.78, .87, .45 + lerp(.1, -.1, k)); fa.rotation.set(0, Math.PI / 2, -.15); const f = smooth(147.2, 147.8, t); UF.mundo.value = f; set(f, t); fundo(c, '#F4E8D0', f);
      cam(cm, [[0, [-3.35, 1.05, .8]], [1, [-3.2, .98, .66]]], [-2.78, .86, .45], u / 5.36, 0, 0); return { ...MANHA, focus: .65, range: .25, blur: 10 }; }; }),
  // C7 — "Perfeitamente reto": macro da manteiga lisa como espelho, brilho "ting"
  mk(152.4, 154.2, { bg: '#F4E8D0', fov: 26, perto: true, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'manha' }); K.tel.visible = false; const p = paoManteiga(); p.scale.setScalar(1.6); p.position.set(-2.78, .79, .45); p.rotation.y = Math.PI / 2; c.add(p); p.userData.passa(1); const set = emFoco([p]);
    const br = icone('✦', .12); c.add(br); br.material.color.set('#FFFFFF');
    return (t, u, cm) => { UF.mundo.value = 1; set(1, t); fundo(c, '#F4E8D0', 1); const k = clamp((t - 153.1) / .5); br.visible = k > 0 && k < 1; br.position.set(-2.76, .9, .4); br.scale.setScalar(.12 * Math.sin(k * Math.PI) + .001); br.material.rotation = k * 2;
      cam(cm, [[0, [-2.55, 1.05, .78]], [1, [-2.6, .98, .68]]], [-2.78, .86, .45], u / 1.8, 0, 0); return { bloom: .5, bloomT: .8, focus: .35, range: .12, blur: 10 }; }; }),
  // C8 — "E a Dona Rose para de mexer o café pra olhar": a colher parada no ar, o café pingando; o Davi com a folha perto do prato
  mk(154.2, 156.76, { bg: '#F4E8D0', fov: 40 }, (c) => { const K = montaCasa(c, { hora: 'manha' }); K.tel.visible = false; const r = ator(c, ROSE, -3.55, .0, Math.PI / 2 + .3); const d = ator(c, DAVI, -3.0, -.17, 0); sentar(d, -3.0, -.2, 0, .5); const g = ator(c, GUI, 0, 0, 0); sentar(g, -2.42, .45, -Math.PI / 2, .46);
    const xi = xicara(); xi.scale.setScalar(1.4); c.add(xi); const col = cyl(.008, .008, .2, '#C9CED6', 0, 0, 0); c.add(col); const f = folha(); f.scale.setScalar(.7); f.position.set(-3.0, .79, .15); f.rotation.x = -Math.PI / 2; c.add(f); const p = paoManteiga(); p.scale.setScalar(1.6); p.position.set(-2.78, .79, .45); p.rotation.y = Math.PI / 2; c.add(p); p.userData.passa(1);
    const gota = sph(.012, '#6A3A1A', 0, 0, 0); c.add(gota);
    return (t, u, cm) => { r.pose({ shL: [50, -10], elL: 80, shR: [70, 10], elR: 70, headX: 10 }); rosto(r, null, t, 'surpreso', { look: [.6, .4] }); naMao(xi, r, 'L', [0, -.06, .06]); naMao(col, r, 'R', [0, -.06, .05], [.4, 0, 0]);
      const cp = col.position; const gk = ((t - 154.2) * 1.4) % 1; gota.position.set(cp.x, cp.y - .1 - gk * .25, cp.z); d.pose(sentado(vivo(t, 2, .4))); rosto(d, null, t, 'feliz', { look: [.5, .3] }); g.pose(sentado({ shR: [55, 8], elR: 70, lean: 10, headX: 20 })); rosto(g, null, t, 'determinado', { look: [0, .7] }); f.set(0);
      cam(cm, [[0, [-2.0, 1.4, 1.35]], [1, [-2.15, 1.35, 1.2]]], [-3.2, 1.0, .0], u / 2.56); return MANHA; }; }),
  // C9 — "Que capricho é esse?": sobrancelha levantada
  mk(156.76, 158.44, { bg: '#F4E8D0', fov: 40 }, (c) => { const K = montaCasa(c, { hora: 'manha' }); K.tel.visible = false; const r = ator(c, ROSE, -3.55, .0, Math.PI / 2 + .3); const xi = xicara(); xi.scale.setScalar(1.4); c.add(xi);
    return (t, u, cm) => { fala(r, 'mae', t, 'desconfiado', { shL: [50, -10], elL: 80 }, .5, { brow: 1, look: [.6, .3] }); naMao(xi, r, 'L', [0, -.06, .06]); cam(cm, [[0, [-2.4, 1.4, .9]], [1, [-2.6, 1.35, .75]]], [-3.55, 1.15, 0], u / 1.68); return MANHA; }; }),
  // C10 — "Sei lá, eu só tô fazendo": dá de ombros e morde o pão
  mk(158.44, 160.56, { bg: '#F4E8D0', fov: 40 }, (c) => { const K = montaCasa(c, { hora: 'manha' }); K.tel.visible = false; const g = ator(c, GUI, 0, 0, 0); sentar(g, -2.42, .45, -Math.PI / 2, .46); const p = paoManteiga(); p.scale.setScalar(1.6); c.add(p); p.userData.passa(1);
    return (t, u, cm) => { const mord = t > 159.8; const base = sentado(mord ? { lean: 4 } : soma(G.ombros, { shR: [30, 24], elR: 70 })); fala(g, 'gui', t, 'neutro', base, .2); g.pose(base); if (mord) { const kb = kv(t, [[159.8, 0], [160.2, 1], [160.56, 1]]); levaBoca(g, 'R', kb, base, [.12, -.32, .4]); naMao(p, g, 'R', [0, -.05, .06], false); p.rotation.set(0, Math.PI / 2, 1.1); rosto(g, null, t, 'neutro', { mouth: kb > .55 ? { open: kb > .97 ? .15 : .6 } : undefined }); } else { p.position.set(-2.78, .79, .45); p.rotation.set(0, Math.PI / 2, 0); }
      cam(cm, [[0, [-3.2, 1.35, 1.25]], [1, [-3.1, 1.3, 1.1]]], [-2.42, 1.05, .45], u / 2.12); return MANHA; }; }),
  // C11 — "Na escola, o professor de história começa a falar da Revolução Francesa": metade da sala dormindo, o Tiago babando
  mk(160.56, 164.92, { bg: '#F2E6C8', fov: 44 }, (c) => { const S = montaAula(c); const baba = sph(.015, '#BFE8FF', 0, 0, 0); c.add(baba);
    return (t, u, cm) => { alunosUpd(S, t, 1); fala(S.pr, 'n', t, 'feliz', soma({ shR: [80 + Math.sin(t * 2) * 30, 30], elR: 40 }, vivo(t, 3)), 0, { mouth: { open: Math.abs(Math.sin(t * 9)) * .5 } });
      S.ti.pose(sentado({ lean: 40, headX: 30, shL: [70, 20], elL: 120, shR: [70, 20], elR: 120 })); rosto(S.ti, null, t, 'sono', { blink: 1, mouth: { open: .3 } }); S.ti.headG.updateMatrixWorld(true); const b = S.ti.headG.localToWorld(new THREE.Vector3(.05, .05, .28)); baba.position.copy(b); baba.position.y -= ((t * .5) % 1) * .1;
      S.g.pose(sentado({ shR: [40, 8], elR: 80, shL: [40, 8], elL: 80, lean: 6, headX: 4 })); rosto(S.g, null, t, 'tedio');
      cam(cm, [[0, [2.6, 2.1, -2.8]], [1, [2.3, 1.9, -2.5]]], [0, .9, .3], u / 4.36); return {}; }; }),
  // C12 — "que sempre dormia nessa aula com a cara no caderno": flashback ANTES
  mk(164.92, 169.21, { bg: '#F2E6C8', fov: 56 }, (c) => { const S = montaAula(c); const cd = cadernoAberto(); cd.scale.setScalar(.75); cd.position.set(0, .74, -.12); c.add(cd); cd.userData.E.paint('e', (x, W, H) => folhaDraw(x, W, H)); cd.userData.D.paint('d', (x, W, H) => folhaDraw(x, W, H));
    return (t, u, cm) => { alunosUpd(S, t, 1); S.pr.pose(soma({ shR: [80, 30], elR: 40 }, vivo(t, 3))); rosto(S.pr, null, t, 'neutro'); S.ti.pose(sentado(vivo(t, 3))); rosto(S.ti, null, t, 'tedio');
      const re = Math.sin(t * 1.6); S.g.pose(sentado({ lean: 38 + re * 1.5, headX: 26, headZ: -32, shL: [70, 20], elL: 125, shR: [70, 20], elR: 125 })); rosto(S.g, null, t, 'sono', { blink: 1, mouth: { open: .22 + re * .06 } });
      cam(cm, [[0, [.78, 1.32, -.62]], [1, [.72, 1.28, -.56]]], [0, .8, -.1], u / 4.29); return { sat: .3, tint: '#F4DDB8', vig: .55 }; }; }),
  // C13 — "não perde uma palavra": sentado reto, efeito foco ligado (o professor colorido)
  mk(169.21, 170.72, { bg: '#F2E6C8', fov: 40 }, (c) => { const S = montaAula(c); const set = emFoco([S.pr.root]);
    return (t, u, cm) => { alunosUpd(S, t, 1); fala(S.pr, 'n', t, 'feliz', soma({ shR: [80 + Math.sin(t * 2) * 30, 30], elR: 40 }, vivo(t, 3)), 0, { mouth: { open: Math.abs(Math.sin(t * 9)) * .5 } }); S.ti.pose(sentado({ lean: 40, headX: 30, shL: [70, 20], elL: 120, shR: [70, 20], elR: 120 })); rosto(S.ti, null, t, 'sono', { blink: 1 });
      S.g.pose(sentado({ shR: [30, 8], elR: 70, shL: [30, 8], elL: 70, lean: -2, headX: -4 })); rosto(S.g, null, t, 'determinado', { look: [0, -.1] }); const k = smooth(169.3, 169.8, t); UF.mundo.value = k; set(k, t); fundo(c, '#F2E6C8', k);
      cam(cm, [[0, [.9, 1.3, 1.6]], [1, [.7, 1.25, 1.4]]], [-.2, 1.15, -1.0], u / 1.51); return { focus: 4, range: 1.5, blur: 8 }; }; }),
  // C14 — "Ele vê as datas, os nomes, a cara do Napoleão, as cenas da Bastilha": hologramas girando em volta da cabeça
  mk(170.72, 180.24, { bg: '#F2E6C8', fov: 40 }, (c) => { const S = montaAula(c); const H = ['1789', 'coroa', 'napoleao', 'bastilha'].map((n) => { const h = holo(n); c.add(h); return h; }); const set = emFoco([S.g.root]);
    const ent = [171.15, 172.6, 173.1, 174.5];
    return (t, u, cm) => { alunosUpd(S, t, 1); S.pr.pose(soma({ shR: [80 + Math.sin(t * 2) * 30, 30], elR: 40 }, vivo(t, 3))); rosto(S.pr, null, t, 'feliz', { mouth: { open: Math.abs(Math.sin(t * 9)) * .5 } }); S.ti.pose(sentado({ lean: 40, headX: 30, shL: [70, 20], elL: 120, shR: [70, 20], elR: 120 })); rosto(S.ti, null, t, 'sono', { blink: 1 });
      S.g.pose(sentado({ shR: [30, 8], elR: 70, shL: [30, 8], elL: 70, lean: -2, headX: -4 })); rosto(S.g, null, t, t > 177.5 ? 'surpreso' : 'determinado', { look: [Math.sin(t * 2) * .5, -.2] }); UF.mundo.value = .85; set(.6, t); fundo(c, '#F2E6C8', .85);
      S.g.headG.updateMatrixWorld(true); const h = S.g.headG.localToWorld(new THREE.Vector3(0, .3, 0));
      H.forEach((s, i) => { const v = clamp((t - ent[i]) / .4); const ent2 = clamp((t - 177.3 - i * .45) / .5); const a = t * 1.2 + i * Math.PI / 2; const r = .55 * (1 - ent2);
        s.position.set(h.x + Math.cos(a) * r, h.y + .1 + Math.sin(t * 2 + i) * .06 - ent2 * .05, h.z + Math.sin(a) * r * .7 - ent2 * .1); s.scale.setScalar(.32 * easeOut(v) * (1 - ent2 * .8) + .001); s.visible = v > 0 && ent2 < 1; });
      cam(cm, [[0, [1.2, 1.45, -.9]], [1, [.9, 1.35, -.7]]], [0, 1.2, .3], u / 9.52); return { bloom: .45, bloomT: .7, focus: 1.5, range: .6, blur: 8 }; }; }),
  // C16 — "Prova surpresa, gente. Guarda tudo!": o professor bate a mão na mesa, a sala acorda pulando, papel voando
  mk(180.24, 182.96, { bg: '#F2E6C8', fov: 44 }, (c) => { const S = montaAula(c); const pap = []; for (let i = 0; i < 14; i++) { const p = new THREE.Mesh(new THREE.PlaneGeometry(.21, .29), new THREE.MeshToonMaterial({ color: '#FBF8EE', side: THREE.DoubleSide })); c.add(p); pap.push(p); }
    return (t, u, cm) => { const bate = t > 180.5; const pulo = clamp((t - 180.6) / .5); S.pr.place(-1.4, -2.3, 0, .3); fala(S.pr, 'prof', t, 'bravo', bate ? { shR: [60 - Math.max(0, Math.sin((t - 180.5) * 12)) * 30, 10], elR: 20, lean: 10 } : { shR: [120, 10], elR: 30 }, .2);
      S.L.forEach((a, i) => { a.pose(sentado(soma({ shL: [60, 30], shR: [60, 30], elL: 30, elR: 30 }, { bob: -.17 + Math.sin(pulo * Math.PI) * .12 }))); rosto(a, null, t, pulo > 0 ? 'surpreso' : 'sono'); });
      S.ti.pose(sentado({ bob: Math.sin(pulo * Math.PI) * .12, shL: [60, 30], shR: [60, 30] })); rosto(S.ti, null, t, 'medo'); S.g.pose(sentado({ shR: [30, 8], elR: 70 })); rosto(S.g, null, t, 'neutro');
      pap.forEach((p, i) => { const k = clamp((t - 180.6) / 2); p.visible = k > 0; p.position.set(-2.4 + (i % 5) * 1.2 + Math.sin(i) * .3, .8 + Math.sin(k * Math.PI) * (1 + (i % 3) * .3), -1.4 + Math.floor(i / 5) * 1.3 + k * .4); p.rotation.set(k * 6 + i, k * 4, i); });
      cam(cm, [[0, [2.7, 1.9, -3.0]], [1, [2.5, 1.8, -2.8]]], [-.3, 1.0, -.2], u / 2.72, 0, 1); const sh = bate && t < 180.9 ? Math.sin(t * 80) * .02 : 0; cm.position.y += sh; return {}; }; }),
  // C17 — "Mano, a gente vai morrer": Tiago com as mãos no rosto, a alma saindo do corpo
  mk(182.96, 184.96, { bg: '#F2E6C8', fov: 40 }, (c) => { const S = montaAula(c); const alma = ator(c, TIAGO, 1.2, .3, Math.PI); fantasma(alma, .35);
    return (t, u, cm) => { alunosUpd(S, t, 0); S.ti.pose(sentado({ shL: [110, 10], elL: 140, shR: [110, 10], elR: 140, headX: 6 })); fala(S.ti, 'tiago', t, 'medo', S.ti._p, 0); S.ti.pose(sentado({ shL: [110, 10], elL: 140, shR: [110, 10], elR: 140, headX: 6 }));
      const k = clamp((t - 183.6) / 1.2); fantasma(alma, .45 * (1 - k * .5)); alma.place(1.2, .3, .3 + k * .6, Math.PI); alma.pose({ shL: [160, 30], shR: [160, 30], elL: 10, elR: 10, bob: 0 }); rosto(alma, null, t, 'medo'); alma.root.visible = t > 183.5;
      S.g.pose(sentado({ shR: [30, 8], elR: 70 })); rosto(S.g, null, t, 'neutro'); cam(cm, [[0, [2.3, 1.5, -1.2]], [1, [2.15, 1.5, -1.05]]], [1.2, 1.2, .3], u / 2); return {}; }; }),
  // C18 — "O Tiago tirou 3. O Guilherme tirou 10.": as duas provas lado a lado
  mk(184.96, 188.40, { bg: '#F2E6C8', fov: 36, perto: true, limpa: false }, (c) => { const S = montaAula(c); const p3 = prova('3', '#D8342C'); const p10 = prova('10', '#2E5EC8'); p3.position.set(.98, .78, -.2); p10.position.set(.22, .78, -.2); p3.rotation.z = p10.rotation.z = Math.PI; c.add(p3, p10);
    return (t, u, cm) => { alunosUpd(S, t, 0); S.ti.pose(sentado({ lean: 20, headX: 20 })); rosto(S.ti, null, t, 'choro'); S.g.pose(sentado({ shR: [30, 8], elR: 70 })); rosto(S.g, null, t, 'feliz'); p3.visible = t > 185.0; p10.visible = t > 186.8;
      cam(cm, [[0, [.6, 1.35, -1.05]], [1, [.6, 1.25, -.9]]], [.6, .8, -.1], u / 3.44, 0, 0); return {}; }; }),
  // C19 — "Terminou em 15 minutos e ainda ficou entediado": a caneta soltando faísca, entrega, boceja rodando o lápis
  mk(188.40, 192.80, { bg: '#F2E6C8', fov: 40 }, (c) => { const S = montaAula(c); const cn = cyl(.008, .008, .16, '#2E5EC8', 0, 0, 0, { out: .002 }); c.add(cn); const cf = [0, 0, 0]; const fa = particulas(c, cf, { n: 20, cor: '#FFD86A', r: .12, tam: .015 });
    return (t, u, cm) => { alunosUpd(S, t, 0); S.ti.pose(sentado({ shR: [50, 8], elR: 80, lean: 14, headX: 20 })); rosto(S.ti, null, t, 'preocupado'); const fase = t < 190.2;
      S.g.pose(sentado(fase ? { shR: [55 + Math.sin(t * 40) * 4, 6], elR: 85, lean: 16, headX: 24 } : { shR: [70, 6], elR: 100 + Math.sin(t * 3) * 10, shL: [130, 20], elL: 140, headX: -8 })); rosto(S.g, null, t, fase ? 'determinado' : 'sono', { mouth: fase ? undefined : { open: t > 190.6 && t < 191.6 ? .8 : 0, round: 1 } });
      naMao(cn, S.g, 'R', [0, -.05, .04]); if (!fase) cn.rotation.z = t * 12; const p = cn.position; cf[0] = p.x; cf[1] = p.y - .06; cf[2] = p.z; fa(fase ? (t * 3) % 1 : 0);
      cam(cm, [[0, [.9, 1.45, -1.2]], [1, [.75, 1.4, -1.0]]], [0, 1.0, .3], u / 4.4); return {}; }; }),
  // C20 — "No intervalo, ele come uma coxinha com foco total... a melhor coxinha da vida dele": fundo branco total de comercial
  mk(192.80, 199.40, { bg: '#FFFFFF', fov: 38 }, (c) => { const S = montaCantina(c); const set = emFoco([S.cx]);
    return (t, u, cm) => { const branco = smooth(194.0, 194.4, t); S.C.g.visible = branco < .5; S.ti.root.visible = branco < .5; c.background = new THREE.Color(branco > .5 ? '#FFFFFF' : '#F2E6C8');
      const kb = kv(t, [[192.8, .1], [193.6, .1], [194.25, 1], [194.6, 1], [195.4, .25], [197.6, .25], [198.3, 1], [198.6, 1], [199.4, .4]]); const C = come(S, t, kb); const mord = t > 194.4 ? 1 : 0; rosto(S.g, null, t, branco > .5 ? 'feliz' : 'neutro', { blink: branco > .5 ? 1 : undefined, mouth: C.boca }); S.cx.userData.morde(mord);
      S.ti.pose(sentado(vivo(t, 3))); rosto(S.ti, null, t, 'neutro'); UF.mundo.value = branco < .5 ? 0 : 0; set(branco, t);
      cam(cm, [[0, [3.0, 1.5, -1.0]], [1, [2.2, 1.3, -1.5]]], [1.0, 1.05, -1.8], u / 6.6); return { exposure: 1 + branco * .1, bloom: .3 }; }; }),
  // C21 — "Ele sente a casca estalando, o vapor saindo, o frango, o catupiry": macro em câmera lenta
  mk(199.40, 204.48, { bg: '#FFFFFF', fov: 28, perto: true, limpa: false }, (c) => { const cx = coxinha(1); cx.scale.setScalar(4); cx.position.set(0, .8, 0); c.add(cx); c.add(new THREE.HemisphereLight('#FFFFFF', '#F4E0C0', 1.6)); const k = new THREE.DirectionalLight('#FFF4E0', 1.8); k.position.set(2, 4, 3); c.add(k);
    const vap = particulas(c, [.05, 1.1, .08], { n: 26, cor: '#FFFFFF', r: .25, g: .4, sobe: 1.6, tam: .06 }); const mig = particulas(c, [.08, 1.0, .12], { n: 30, cor: '#E8B060', r: .3, tam: .015 });
    return (t, u, cm) => { cx.rotation.y = .4 + t * .1; vap(((t - 199.4) / 2.5) % 1); mig(clamp((t - 199.6) / 1.5)); cx.userData.morde(t > 203.4 ? 1 : .4);
      cam(cm, [[0, [.6, 1.08, .65]], [.5, [.5, 1.0, .55]], [1, [.45, .98, .5]]], [.05, .95, .05], u / 5.08, 0, 0); return { bloom: .35 }; }; }),
  // C22 — "E o Tiago fica olhando assustado, porque o amigo tá de olho fechado, sorrindo pra uma coxinha de 4 reais"
  mk(204.48, 210.98, { bg: '#F2E6C8', fov: 40 }, (c) => { const S = montaCantina(c); S.cx.userData.morde(1);
    const lag = sph(.02, '#9FD8FF', 0, 0, 0); c.add(lag);
    return (t, u, cm) => { const C = come(S, t, ciclo(t, 2.6)); rosto(S.g, null, t, 'feliz', { lagrima: true, mouth: C.boca }); S.g.headG.updateMatrixWorld(true); const e = S.g.headG.localToWorld(new THREE.Vector3(.12, .2, .28)); lag.position.copy(e); lag.position.y -= ((t * .4) % 1) * .12;
      S.ti.pose(sentado({ shR: [80, 6], elR: 100, shL: [30, 8], elL: 60, lean: -6 })); rosto(S.ti, null, t, 'surpreso', { look: [0, .2] }); naMao(S.suco, S.ti, 'R', [0, -.05, .05]);
      if (t < 207.6) cam(cm, [[0, [2.2, 1.38, -1.55]], [1, [2.1, 1.33, -1.45]]], [1.45, 1.05, -.55], (t - 204.48) / 3.12); else cam(cm, [[0, [2.4, 1.35, -2.0]], [1, [2.2, 1.3, -1.9]]], [1.0, 1.05, -1.85], (t - 207.6) / 3.38); return {}; }; }),
  // C24 — "Tu tá bem, mano?": cutuca o ombro com o canudo
  mk(210.98, 212.48, { bg: '#F2E6C8', fov: 40 }, (c) => { const S = montaCantina(c); S.cx.userData.morde(1); const can = cyl(.004, .004, .14, '#F2546E', 0, 0, 0); c.add(can);
    return (t, u, cm) => { const C = come(S, t, ciclo(t, 2.6, .8)); rosto(S.g, null, t, 'feliz', { blink: 1, mouth: C.boca }); const cut = Math.max(0, Math.sin(t * 10)); const p = sentado({ shR: [90 - cut * 10, 30], elR: 30, shL: [30, 8], elL: 60, lean: 10 }); fala(S.ti, 'tiago', t, 'preocupado', p, 0); S.ti.pose(p); naMao(can, S.ti, 'R', [0, -.06, .05], [Math.PI / 2, 0, 0]);
      cam(cm, [[0, [2.7, 1.4, -1.3]], [1, [2.55, 1.35, -1.25]]], [1.2, 1.05, -1.2], u / 1.5); return {}; }; }),
  // C25 — "Tiago, essa coxinha mudou minha vida": close dramático de novela, vento no cabelo
  mk(212.48, 215.48, { bg: '#F2E6C8', fov: 34 }, (c) => { const S = montaCantina(c); S.cx.userData.morde(1);
    return (t, u, cm) => { const p = comendo(t); fala(S.g, 'gui', t, 'determinado', p, 0, { look: [.3, 0] }); come(S, t, .35, p); S.g.headG.rotation.z += Math.sin(t * 14) * .03;
      S.ti.pose(sentado(vivo(t, 3))); rosto(S.ti, null, t, 'surpreso'); const a = .5 - u / 3 * .4; cam(cm, [1.0 + Math.sin(a) * 1.2, 1.3, -1.85 + Math.cos(a) * 1.2], [1.0, 1.15, -1.85], u / 3, .04); return { vig: .5, sat: 1.15 }; }; }),
  // C26 — "À noite, ele senta pra lição e faz as 30 questões sem levantar a cabeça": mesmo quadro do dia zero, páginas, celular cinza vibrando
  mk(215.48, 224.89, { bg: '#C8C0B8', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.luzes.LG.intensity = 1.8; K.luzAbaj.intensity = 1.2; const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); const cn = cyl(.006, .006, .14, '#2E5EC8', 0, 0, 0, { out: .002 }); c.add(cn);
    K.tel.position.set(-1.0, .79, -.18); K.tel.rotation.set(-Math.PI / 2, 0, -Math.PI / 2); const set = emFoco([g.root, K.caderno]); const P = [217, 218.3, 219.1, 220.4, 221.2, 222.5, 223.3, 224.1];
    return (t, u, cm) => { g.pose(sentado({ shR: [58 + Math.sin(t * 9) * 3, 4], elR: 92 + Math.sin(t * 13) * 4, shL: [44, 6], elL: 84, lean: 14, headX: 26 })); rosto(g, null, t, 'determinado', { look: [0, .7] }); naMao(cn, g, 'R', [0, -.05, .04], [.6, 0, 0]);
      paginaTrinta(K, clamp((t - 216.3) / 8)); K.tel.position.x = -1.0 + vibra(t, P, .4); K.tel.tela(P.some((p) => t > p && t < p + .4) ? 'bloqueio' : 'apagada'); UF.mundo.value = .9; set(.4, t); fundo(c, '#C8C0B8', .9);
      cam(cm, [[0, [-1.38, 1.55, -1.38]], [1, [-1.3, 1.5, -1.25]]], [-.75, 1.0, .2], u / 9.41); return { tint: '#E8E2FF' }; }; }),
  // C27 — "e quando olha o relógio, passaram duas horas que pareceram 10 minutos": o relógio dá duas voltas
  mk(224.89, 227.78, { bg: '#C8C0B8', fov: 40 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.luzes.LG.intensity = 1.8; const rel = relogioParede(); rel.position.set(-.5, 2.0, -1.47); c.add(rel); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g);
    return (t, u, cm) => { const m = easeIO(clamp((t - 225) / 2.4)) * 120; rel.hora(19, m); g.pose(sentado({ shR: [40, 8], elR: 80, lean: 0, headX: -20, headY: 30 })); rosto(g, null, t, 'surpreso', { look: [.5, -.6] });
      cam(cm, [[0, [-.4, 1.85, -.7]], [1, [-.45, 1.9, -.85]]], [-.5, 2.0, -1.47], u / 2.89, 0, 0); return { tint: '#E8E2FF' }; }; }),
  // C28 — "E só aí ele percebe que o celular tá cheio de mensagem": 27 mensagens não lidas, cara desconfiada
  mk(227.78, 233.48, { bg: '#C8C0B8', fov: 44 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.luzes.LG.intensity = 1.8; K.luzAbaj.intensity = 1.2; const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); paginaTrinta(K, 1);
    return (t, u, cm) => { g.pose(sentadoCel(t)); rosto(g, null, t, t > 230.9 ? 'desconfiado' : 'surpreso', { look: [0, .55] }); telNaMao(K.tel, g); K.tel.tela('mensagens', clamp((t - 228.4) / 1.8));
      if (t < 230.9) { g.headG.visible = false; g.headG.updateMatrixWorld(true); const e = g.headG.localToWorld(new THREE.Vector3(0, .3, .05)); const P = K.tel.position; cam(cm, [e.x, e.y, e.z], [P.x, P.y, P.z], (t - 227.78) / 3.1, 0, 0); }
      else { g.headG.visible = true; cam(cm, [[0, [-1.1, 1.3, -.5]], [1, [-1.05, 1.28, -.4]]], [-.66, 1.15, .25], (t - 230.9) / 2.58); } return { tint: '#E8E2FF' }; }; }),
  // C29 — "Lembra disso.": freeze no celular com o ícone de vibração
  mk(233.48, 234.68, { bg: '#1A1A22', fov: 30, perto: true, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); const set = emFoco([K.tel]);
    return (t, u, cm) => { g.pose(sentadoCel(233.5)); rosto(g, null, 233.5, 'desconfiado', { vivo: false }); telNaMao(K.tel, g); K.tel.tela('mensagens', 1); UF.mundo.value = .9; set(1, t); fundo(c, '#1A1A22', .9);
      const P = K.tel.position; g.headG.visible = false; g.headG.updateMatrixWorld(true); const e = g.headG.localToWorld(new THREE.Vector3(0, .25, .1)); cam(cm, [e.x, e.y, e.z], [P.x, P.y, P.z], u / 1.2, 0, 0); return { vig: .55 }; }; }),
];
/** Bolhas de espuma em volta da boca (posição m), estourando. */
function bolUpd(f, m, L) { f(L % 1); }
