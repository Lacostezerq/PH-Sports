// ATO 2A — dia 1 e dia 2 (108 a 176 s): o pote de azeitona, a tampa que cai no café, a mochila no corredor da escola,
// o botijão numa mão só, assobiando, e a Dona Cida desconfiada na porta.
import * as THREE from 'three';
import { mk, cam, ator, rosto, icone } from './base.js';
import { GUI, CIDA, aluno } from './gente.js';
import { escada, botNaMao, paoNaMao, subir, FH, XA, XB, ZA0, ZLAND } from './comum.js';
import { cozinha, trajetoEscada } from './lugares.js';
import { corredor } from './lugares2.js';
import { poteAzeitona, xicara, mochila } from './objs.js';
import { naMao, respingo, notas } from './fx2.js';
import { G, soma, vivo, treme, ofego, andar, parado, kf, kv, mix, rir } from './mov.js';
import { clamp, smooth, easeOut, easeIn, lerp } from './motor/core.js';
import { rb } from './motor/toon.js';

const MANHA = { tint: '#FFF8EC', bloom: .25 };
const CUP = [-.12, .783, .42];
/** Cozinha da manhã do dia 1 com Cida, Guilherme, pote e xícara. */
function cena1(c) {
  const K = cozinha(c, { hora: 'manha' }); const ci = ator(c, CIDA, -.7, -.25, .5); const gui = ator(c, GUI, -1.6, .9, Math.PI / 2);
  const pote = poteAzeitona(); c.add(pote); const tampa = pote.userData.tampa; pote.remove(tampa); c.add(tampa);
  const xic = xicara(); xic.position.set(...CUP); c.add(xic); const pano = rb(.16, .02, .12, '#F2C230', 0, 0, 0); c.add(pano);
  const sp = respingo(c, [CUP[0], CUP[1] + .08, CUP[2]], { t0: 123.15, cor: '#6A3A1A', n: 22, v: 1.1, tam: .025, chao: .78 });
  return { K, ci, gui, pote, tampa, xic, pano, sp };
}
/** Estado do pote e da tampa no tempo t. */
function poteUpd(S, t) {
  const { ci, gui, pote, tampa, pano } = S; const comGui = t > 121.3;
  naMao(pote, comGui ? gui : ci, 'R', [0, -.1, .05], false); pote.rotation.set(0, 0, 0);
  if (!comGui && t > 114.6 && t < 118.4) { pano.visible = true; naMao(pano, ci, 'L', [0, -.06, .05]); } else pano.visible = false;
  const voa = t - 122.35; const topo = new THREE.Vector3(pote.position.x, pote.position.y + .175, pote.position.z);
  if (voa < 0) { tampa.position.copy(topo); tampa.rotation.set(0, comGui ? (t - 121.6) * 4 * (t > 121.6) : Math.sin(t * 9) * .3, 0); }
  else if (voa < .3) { const k = easeOut(voa / .3); tampa.position.set(lerp(topo.x, -.3, k), lerp(topo.y, 2.55, k), lerp(topo.z, .45, k)); tampa.rotation.set(voa * 30, voa * 20, 0); }
  else if (voa < .8) { const k = easeIn((voa - .3) / .5); tampa.position.set(lerp(-.3, CUP[0], k), lerp(2.55, CUP[1] + .07, k), lerp(.45, CUP[2], k)); tampa.rotation.set(voa * 30, voa * 20, 0); }
  else { tampa.position.set(CUP[0], CUP[1] + .055, CUP[2]); tampa.rotation.set(.25, 0, .1); }
}
// poses da briga com o pote
const giraPote = (t, f = 1) => ({ shR: [28, 4], elR: 72, shL: [30, 8, -40], elL: 78 + Math.sin(t * 11) * 14 * f, lean: 6, twist: Math.sin(t * 11) * 6 * f, headX: 14 });

export const ATO2A = [
  // K1 — Dona Cida briga com o pote: gira com a mão, faz força, careta
  mk(108, 113.2, { bg: '#C8D8E0', fov: 38 }, (c) => { const S = cena1(c);
    return (t, u, cm) => { const { ci, gui } = S; gui.root.visible = false; poteUpd(S, t); S.sp(t);
      ci.pose(soma(parado(t, 3, .5), giraPote(t, 1 + smooth(110, 112, t)), treme(t, .8))); rosto(ci, null, t, t > 110.5 ? 'bravo' : 'determinado', { look: [.3, .5], mouth: t > 110.5 ? { open: .1, smile: -.7 } : undefined });
      cam(cm, [[0, [.8, 1.22, 1.25]], [1, [.6, 1.15, 1.0]]], [[0, [-.6, .9, -.1]], [1, [-.65, .95, -.2]]], u / 5.2); return MANHA; }; }),
  // K2 — bate a tampa na pia, enrola no pano de prato, careta
  mk(113.2, 118.6, { bg: '#C8D8E0', fov: 46 }, (c) => { const S = cena1(c);
    return (t, u, cm) => { const { ci, gui } = S; gui.root.visible = false; const a = t - 113.2;
      const ida = smooth(0, .9, a); ci.place(lerp(-.7, -.05, ida), lerp(-.25, -.78, ida), 0, lerp(.5, Math.PI - .25, ida));
      const bate = a > .9 && a < 3.2 ? Math.max(0, Math.sin((a - .9) * 9)) : 0; const enrola = smooth(3.3, 3.7, a);
      ci.pose(a < .9 ? andar(t, { f: 2 }) : soma(mix({ shR: [40 + 50 * bate, 6], elR: 40 + 30 * bate, shL: [30, 8], elL: 60, lean: 3 + 4 * bate, headX: -4 }, giraPote(t, 1.3), enrola), treme(t, .6 * enrola)));
      poteUpd(S, t); rosto(ci, null, t, enrola > .5 ? 'vergonha' : 'bravo', { mouth: { open: .1 + .2 * bate, smile: -.8 }, look: [0, .4] });
      cam(cm, [[0, [.45, 1.15, .2]], [.25, [.42, 1.02, -1.48]], [1, [.4, 1.0, -1.46]]], [[0, [-.2, .95, -.6]], [.25, [-.05, .88, -.78]], [1, [-.05, .9, -.78]]], u / 5.4); return MANHA; }; }),
  // K3 — Guilherme chega meio dormindo, coçando o olho
  mk(118.6, 121.6, { bg: '#C8D8E0', fov: 38 }, (c) => { const S = cena1(c);
    return (t, u, cm) => { const { ci, gui } = S; const a = t - 118.6; const anda = clamp(a / 2.2); gui.place(lerp(-1.6, -.62, anda), lerp(.9, .62, anda), 0, Math.PI / 2 - .1);
      gui.pose(soma(andar(t, { f: 1.3, amp: .7, curvado: true }), G.coçarOlho)); if (anda >= 1) gui.pose(soma(parado(t, 2), G.coçarOlho));
      rosto(gui, null, t, 'sono', { blink: Math.sin(t * 2) > .6 ? 1 : undefined });
      ci.place(-.05, -.78, 0, lerp(Math.PI - .25, .9, smooth(.6, 1.4, a))); ci.pose(soma(parado(t, 3), giraPote(t, .6), treme(t, .5))); poteUpd(S, t); rosto(ci, null, t, 'vergonha', { mouth: { open: .1, smile: -.8 } });
      cam(cm, [[0, [.95, 1.25, 1.3]], [1, [.8, 1.2, 1.15]]], [[0, [-1.1, 1.0, .6]], [1, [-.7, 1.0, .5]]], u / 3); return MANHA; }; }),
  // K4 — ele pega o pote e gira: a tampa voa, bate no teto e cai dentro da xícara. Splash.
  mk(121.6, 123.9, { bg: '#C8D8E0', fov: 44 }, (c) => { const S = cena1(c);
    return (t, u, cm) => { const { ci, gui } = S; gui.place(-.62, .62, 0, Math.PI / 2 - .1); ci.place(-.15, -.55, 0, .9);
      gui.pose(kf(t, [[121.6, soma(parado(t, 2), { shR: [40, 8], elR: 60 })], [121.9, soma(parado(t, 2), { shR: [50, 6], elR: 90, shL: [45, 8, -30], elL: 95 })], [122.3, soma(parado(t, 2), { shR: [50, 6], elR: 90, shL: [45, 8, -30], elL: 80, twist: -4 })], [122.45, soma(parado(t, 2), { shR: [50, 6], elR: 90, shL: [70, 20], elL: 40, twist: 8, headX: -20 }), 'out']]));
      ci.pose(soma(parado(t, 3), t > 122.4 ? { shL: [40, 20], elL: 60, shR: [40, 20], elR: 60, lean: -6, headX: -20 } : { shR: [50, 10], elR: 30 })); poteUpd(S, t); S.sp(t);
      rosto(gui, null, t, t > 122.4 ? 'surpreso' : 'sono', { look: t > 122.4 ? [0, -.8] : [0, .5] }); rosto(ci, null, t, t > 122.4 ? 'surpreso' : 'neutro', { look: t > 122.4 ? [0, -.8] : [-.3, .3] });
      const k = smooth(122.35, 123.3, t); cam(cm, [[0, [1.25, .95, 1.75]], [1, [1.15, .95, 1.6]]], [[0, [-.4, 1.1 + 1.0 * Math.sin(k * Math.PI) * (k < .6 ? 1 : .6), .4]], [1, [-.2, .85, .42]]], k, 0, .3); return MANHA; }; }),
  // K5 — "Ué?" / "Eu só girei!"
  mk(123.9, 127.1, { bg: '#C8D8E0', fov: 36 }, (c) => { const S = cena1(c);
    return (t, u, cm) => { const { ci, gui } = S; gui.place(-.62, .62, 0, Math.PI / 2 - .1); ci.place(-.15, -.55, 0, .9); poteUpd(S, t);
      ci.pose(soma(parado(t, 3), { shL: [30, 20], elL: 70, shR: [30, 20], elR: 70, lean: -5 })); rosto(ci, 'cida', t, 'surpreso', { look: [-.4, .2] });
      gui.pose(soma(parado(t, 2), { shR: [50, 6], elR: 90, shL: [30 + 30 * smooth(125.4, 125.8, t), 30], elL: 60 }, G.ombros && t > 125.5 ? { headZ: 8 } : {})); rosto(gui, 'gui', t, 'preocupado', { look: [.4, 0] });
      cam(cm, [[0, [.95, 1.18, .95]], [1, [.85, 1.15, .85]]], [[0, [-.45, 1.0, .1]], [1, [-.45, 1.0, .1]]], u / 3.2); return MANHA; }; }),
  // K6 — os dois olham pro pote. Depois um pro outro.
  mk(127.1, 132, { bg: '#C8D8E0', fov: 34 }, (c) => { const S = cena1(c);
    return (t, u, cm) => { const { ci, gui } = S; gui.place(-.62, .62, 0, Math.PI / 2 - .1); ci.place(-.15, -.55, 0, .9); poteUpd(S, t); const outro = smooth(129.6, 130.1, t);
      gui.pose(soma(parado(t, 2), { shR: [62, 6], elR: 80, headX: 14 * (1 - outro), headY: 30 * outro })); rosto(gui, null, t, 'desconfiado', { look: [outro ? .5 : 0, .5 * (1 - outro)] });
      ci.pose(soma(parado(t, 3), { headX: 18 * (1 - outro), headY: -20 * outro, lean: 6 })); rosto(ci, null, t, 'desconfiado', { look: [-.5 * outro, .5 * (1 - outro)] });
      cam(cm, [[0, [.75, 1.3, 1.35]], [1, [.65, 1.28, 1.2]]], [[0, [-.45, .95, .1]], [1, [-.4, 1.0, .1]]], u / 4.9); return MANHA; }; }),
  // E1 — corredor da escola: joga a mochila no ombro; ela voa rápido demais e quase acerta o colega
  mk(132, 138.4, { bg: '#F2E6C8', fov: 42 }, (c) => { corredor(c); const gui = ator(c, GUI, 0, 1, Math.PI); const col = ator(c, aluno(3), -.75, 0, Math.PI); const al = [0, 1, 2, 4, 5].map((i) => ator(c, aluno(i), (i % 2 ? .7 : -.7), -6 - i * 1.6, i % 2 ? 0 : Math.PI));
    const mo = mochila('#2E6FB8'); c.add(mo);
    return (t, u, cm) => { const a = t - 132; const z = 1 - Math.min(a, 2.6) * .9; gui.place(0, z, 0, Math.PI); col.place(-.72, z - .3 - Math.min(a, 2.6) * 0, 0, Math.PI); col.place(-.72, .7 - Math.min(a, 2.6) * .9, 0, Math.PI);
      const joga = clamp((a - 2.6) / .35); // a mochila dá a volta inteira em vez de parar no ombro
      gui.pose(a < 2.6 ? soma(andar(t, { f: 1.6 }), { shR: [10, 10], elR: 10 }) : kf(a, [[2.6, soma(parado(t, 2), { shR: [-20, 12], elR: 10 })], [2.8, soma(parado(t, 2), { shR: [150, 30], elR: 40, twist: 12 }), 'out'], [3.4, soma(parado(t, 2), { shR: [60, 10], elR: 120, twist: -4 })]]));
      const desv = kv(a, [[2.75, 0], [2.95, 1], [3.8, 1], [4.4, 0]]); col.pose(a < 2.6 ? andar(t + .3, { f: 1.6 }) : soma(parado(t, 1), mix({}, { bob: -.28, lean: 30, knL: 70, knR: 70, hipL: [40, 6], hipR: [40, 6], shL: [120, 30], shR: [120, 30], elL: 120, elR: 120, headX: 20 }, desv)));
      rosto(col, null, t, desv > .3 ? 'medo' : 'neutro'); rosto(gui, null, t, a > 3 ? 'surpreso' : 'neutro', { look: a > 3 ? [.6, 0] : [0, 0] });
      // mochila: na mão -> arco rápido passando por cima do colega -> nas costas
      gui.root.updateMatrixWorld(true);
      if (joga <= 0) naMao(mo, gui, 'R', [0, -.2, 0]); else { const ang = -1.2 + joga * 5.2; const r = .55; const p = gui.root.localToWorld(new THREE.Vector3(-.15 - Math.sin(ang) * .2, .85 + Math.sin(ang) * r * .6, -Math.cos(ang) * r)); if (joga < 1) mo.position.copy(p); else mo.position.copy(gui.root.localToWorld(new THREE.Vector3(-.12, .72, -.2))); mo.rotation.set(joga * 9, 0, 0); if (joga >= 1) mo.rotation.set(0, Math.PI, .2); }
      al.forEach((k, i) => { k.pose(andar(t + i, { f: 1.6 })); k.place(k.root.position.x, -6.5 - i * 1.4 + (i % 2 ? -1 : 1) * (((t - 132) * .9) % 3), 0, i % 2 ? Math.PI : 0); rosto(k, null, t, 'neutro'); });
      cam(cm, [[0, [.6, 1.5, -3.4]], [1, [.55, 1.45, -3.7]]], [[0, [-.1, 1.0, .5]], [1, [-.2, 1.0, -.8]]], u / 6.4); return { tint: '#FFF6EA' }; }; }),
  // E2 — ele olha pra mochila sem entender
  mk(138.4, 143, { bg: '#F2E6C8', fov: 34 }, (c) => { corredor(c); const gui = ator(c, GUI, 0, -1.4, Math.PI); const col = ator(c, aluno(3), -.8, -2.1, Math.PI * .7); const mo = mochila('#2E6FB8'); c.add(mo);
    return (t, u, cm) => { const a = t - 138.4; gui.pose(soma(parado(t, 2), { shR: [12, 14], elR: 25, headY: -25, headX: 26 })); naMao(mo, gui, 'R', [0, -.22, 0]); mo.rotation.y += Math.sin(t * 1.3) * .2;
      rosto(gui, null, t, 'desconfiado', { look: [-.7, .3] }); col.pose(soma(parado(t, 1), G.assustado, { lean: -10 })); rosto(col, null, t, 'medo', { look: [.5, 0] });
      cam(cm, [[0, [.55, 1.4, -3.4]], [1, [.45, 1.35, -3.15]]], [[0, [-.3, 1.0, -1.5]], [1, [-.3, 1.0, -1.5]]], u / 4.6); return { tint: '#FFF6EA' }; }; }),
  // E3 — "Pequeno, quase nada, mas o corpo dele já sabia..." — a mão abrindo e fechando, o rosto
  mk(143, 152, { bg: '#F2E6C8', fov: 30 }, (c) => { corredor(c); const gui = ator(c, GUI, 0, -1.4, Math.PI); const mo = mochila('#2E6FB8'); gui.root.add(mo); mo.position.set(.08, .72, -.2); mo.rotation.set(0, Math.PI, .2);
    return (t, u, cm) => { const a = t - 143; gui.pose(soma(parado(t, 2, .6), { shL: [75, 6], elL: 70, headX: 16, headY: 10 })); const f = Math.max(0, Math.sin(a * 1.4)); gui.hands.L.scale.set(1 - .12 * f, 1 - .3 * f, 1 + .08 * f);
      rosto(gui, null, t, a > 4.5 ? 'determinado' : 'desconfiado', { look: [.2, .7], lento: .6 });
      cam(cm, [[0, [.6, 1.0, -2.9]], [.5, [.4, 1.1, -2.6]], [1, [.3, 1.25, -3.1]]], [[0, [.05, .85, -1.55]], [.5, [.05, 1.0, -1.5]], [1, [0, 1.15, -1.45]]], u / 9); return { tint: '#FFF2E0', focus: .7, range: .4, blur: 8 }; }; }),
  // D1 — dia 2, mesma escada, mesmo enquadramento: botijão numa mão balançando, pão na outra, assobiando, dois degraus por vez
  mk(152, 156.6, { bg: '#2A2420', fov: 50 }, (c) => { const P = escada(c); const gui = ator(c, GUI, XA, 2.3, Math.PI); const bm = botNaMao(gui, 'R', 1.5); const sp = paoNaMao(gui, 'L', 1); const no = notas(c, gui);
    const path = [[XA, 0, 2.7], ...trajetoEscada(0, 1, { portaria: false })];
    return (t, u, cm) => { subir(gui, path, t, 152, 1.05, { f: 1.3, amp: 1.5, pose: (tt, e, p) => soma(p, { shR: [Math.sin(tt * 4) * 18, 12], elR: 10, lean: -2 }) }); bm.prumo(t); sp.prumo(t); no(t);
      rosto(gui, null, t, 'feliz', { mouth: { open: .2, round: 1 } });
      cam(cm, [[0, [1.05, 1.15, .3]], [1, [1.05, 1.3, .1]]], [[0, [-.62, 1.05, 1.5]], [1, [-.62, 1.65, .3]]], u / 4.6); return { tint: '#FFF4E4' }; }; }),
  // D2 — lá em cima, Dona Cida segura a porta e estreita os olhos por cima dos óculos
  mk(156.6, 170, { bg: '#2A2420', fov: 46 }, (c) => { const P = escada(c); const Y = 4 * FH; const gui = ator(c, GUI, XB, ZLAND, 0, 3 * FH + 1.4); const bm = botNaMao(gui, 'R', 1.5); const sp = paoNaMao(gui, 'L', 1); const no = notas(c, gui);
    const ci = ator(c, CIDA, -.15, 2.45, Math.PI - .5, Y); const pg = [[XB, 3 * FH + 1.4, ZLAND + .2], [XB, Y, ZA0 + .05], [XB - .2, Y, ZA0 + .4], [.2, Y, 1.75]];
    return (t, u, cm) => { const a = t - 156.6; P.portas[3].rotation.y = -1.4; const e = subir(gui, pg, t, 158.2, 1.0, { f: 1.4, amp: 1.4, pose: (tt, e, p) => e.parado ? soma(parado(tt, 2), { shR: [6, 12], elR: 10 }) : soma(p, { shR: [Math.sin(tt * 4) * 18, 12], elR: 10 }) });
      bm.prumo(t); sp.prumo(t); no(t, 1 - smooth(162, 163, t)); rosto(gui, null, t, t < 162.5 ? 'feliz' : 'neutro', { mouth: t < 162.5 ? { open: .2, round: 1 } : undefined, look: [-.4, -.2] });
      const desc = smooth(161.8, 163.5, t); ci.pose(soma(parado(t, 3), { shL: [55, 30], elL: 30, headX: 14 * desc, lean: 4 * desc })); rosto(ci, null, t, desc > .5 ? 'desconfiado' : 'neutro', { look: [0, -.55 * desc] });
      cam(cm, [[0, [.15, Y + 2.0, -.7]], [.4, [.15, Y + 1.9, -.55]], [1, [-.4, Y + 1.5, 1.0]]], [[0, [.5, Y - .2, .5]], [.4, [.2, Y + .7, 1.6]], [1, [-.15, Y + 1.0, 2.4]]], u / 13.4); return { tint: '#FFF4E4' }; }; }),
  // D3 — "Tá tomando o quê escondido de mim?"
  mk(170, 172.6, { bg: '#2A2420', fov: 32 }, (c) => { const P = escada(c); const Y = 4 * FH; const ci = ator(c, CIDA, -.15, 2.45, Math.PI - .5, Y); const gui = ator(c, GUI, .35, 1.6, -.53, Y); botNaMao(gui, 'R'); paoNaMao(gui, 'L');
    return (t, u, cm) => { P.portas[3].rotation.y = -1.4; ci.pose(soma(parado(t, 3), { shL: [55, 30], elL: 30, headX: 14, lean: 4, shR: [30 + 15 * Math.sin(t * 3), 20], elR: 80 })); rosto(ci, 'cida', t, 'desconfiado', { look: [0, -.55] });
      gui.pose(parado(t, 2)); rosto(gui, null, t, 'neutro');
      gui.root.visible = false; cam(cm, [[0, [.6, Y + 1.12, 1.1]], [1, [.55, Y + 1.1, 1.2]]], [[0, [-.15, Y + .92, 2.45]], [1, [-.15, Y + .92, 2.45]]], u / 2.6); return { tint: '#FFF4E4' }; }; }),
  // D4 — ele só dá de ombros e entra
  mk(172.6, 176, { bg: '#2A2420', fov: 42 }, (c) => { const P = escada(c); const Y = 4 * FH; const ci = ator(c, CIDA, -.15, 2.45, Math.PI - .5, Y); const gui = ator(c, GUI, .2, 1.75, -.4, Y); const bm = botNaMao(gui, 'R', 1.2); const sp = paoNaMao(gui, 'L', 1);
    return (t, u, cm) => { const a = t - 172.6; P.portas[3].rotation.y = -1.4; const omb = kv(a, [[.1, 0], [.4, 1], [1.0, 1], [1.3, 0]]);
      const anda = clamp((a - 1.4) / 1.6); gui.place(lerp(.2, -.6, anda), lerp(1.75, 3.2, anda), Y, anda > 0 ? -.5 + .5 * anda : -.4); gui.root.visible = anda < .9;
      gui.pose(anda > 0 ? andar(t, { f: 1.8 }) : soma(parado(t, 2), { shL: [10, 24 * omb], elL: 40 * omb, headZ: 8 * omb, bob: .015 * omb })); bm.prumo(t); sp.prumo(t); rosto(gui, null, t, 'feliz', { look: [-.4, 0] });
      ci.place(-.15, 2.45, Y, lerp(Math.PI - .5, Math.PI + .6, smooth(1.4, 2.6, a))); ci.pose(soma(parado(t, 3), { shL: [55, 30], elL: 30, headX: 10 })); rosto(ci, null, t, 'desconfiado', { look: [.3, -.5] });
      cam(cm, [[0, [.75, Y + 1.4, .4]], [1, [.65, Y + 1.35, .55]]], [[0, [-.1, Y + .9, 2.2]], [1, [-.3, Y + .9, 2.5]]], u / 3.4); return { tint: '#FFF4E4' }; }; }),
];
