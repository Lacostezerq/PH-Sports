// ATO 4A — treino dos ovos (489 a 560 s): a cozinha à noite, "Pega um. Sem quebrar.", as tentativas estourando,
// a noite virando madrugada, a tentativa 47 com o ovo inteiro na palma e o primeiro sorriso da Dona Cida.
import * as THREE from 'three';
import { mk, cam, ator, rosto, sentar, icone } from './base.js';
import { GUI, CIDA } from './gente.js';
import { cozinha, janela } from './lugares.js';
import { ovo, bandejaOvos, gema, cascas } from './objs.js';
import { naMao, respingo } from './fx2.js';
import { G, soma, vivo, treme, andar, parado, kf, kv, mix } from './mov.js';
import { clamp, smooth, easeOut, lerp, rng } from './motor/core.js';
import { sph } from './motor/toon.js';

const LUZ = { tint: '#FFE8C0', bloom: .3, vig: .45 };
export const OVO_ESC = 1.7;
// instantes em que um ovo estoura (tentativas 1, 2, 3, 4, 10, 18, 30)
const QUEBRA = [512.4, 514.6, 515.6, 516.6, 520.4, 523.8, 530.0];
const SENT = (o = {}) => ({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: 10, shL: [40, 4], elL: 60, shR: [50, 0], elR: 65, ...o });
/** Cozinha da noite com a mesa do treino. o.hora 'noite' | 'madrugada'. */
export function montaOvos(c, o = {}) {
  const K = cozinha(c, { hora: o.hora || 'noite' }); if (!o.hora) { K.luz.intensity = 8; K.lamp.userData.bulbo.material.emissiveIntensity = 1.4; }
  const jm = janela(1.0, .9, 'madrugada', 2); jm.position.set(.4, 1.6, -1.6 + .03); c.add(jm); jm.traverse((m) => { if (m.material) { m.material = m.material.clone(); m.material.transparent = true; } }); jm.userData.vidro.material.opacity = 0;
  const gui = ator(c, o.luva ? o.luva : GUI, .15, 1.05, Math.PI); sentar(gui, .15, 1.05, Math.PI, .46);
  const ci = ator(c, CIDA, .15, -.15, 0); sentar(ci, .15, -.15, 0, .46);
  const band = bandejaOvos(30); band.position.set(.25, .785, .45); band.scale.setScalar(OVO_ESC); c.add(band);
  const mao = ovo(); mao.scale.setScalar(OVO_ESC); c.add(mao);
  const R = rng(7); const gem = QUEBRA.map((q, i) => { const g = gema(.035); g.position.set(-.2 + R() * .5, .786, .55 + R() * .3); g.scale.setScalar(.8 + R() * .5); c.add(g); return g; });
  const chao = []; for (let i = 0; i < 26; i++) { const k = cascas(i); k.position.set(-.5 + R() * 1.4, .005, .6 + R() * 1.0); k.scale.setScalar(OVO_ESC); c.add(k); chao.push(k); }
  const ps = QUEBRA.map(() => [0, 0, 0]); const sp = QUEBRA.map((q, i) => respingo(c, ps[i], { t0: q, cores: ['#F2B430', '#F4F1E4', '#F2B430'], n: 24, v: i === 0 ? 2.2 : 1.4, up: i === 0 ? 1.4 : 1, tam: .03, vida: .9, chao: .79 }));
  const cara = sph(.05, '#F2B430', 0, 0, 0, { seg: 10 }); cara.scale.set(1.3, .5, .4); gui.headG.add(cara); cara.position.set(.08, .28, .29); cara.visible = false;
  return { K, jm, gui, ci, band, mao, gem, chao, sp, ps, cara };
}
/** Atualiza o treino no tempo t (o ovo na mão, gemas na mesa, cascas no chão). */
export function ovosUpd(S, t, o = {}) {
  const { gui, mao, gem, chao, sp, cara, band } = S;
  const ult = QUEBRA.filter((q) => q <= t); const quebrou = ult.length && t - ult[ult.length - 1] < .9;
  gem.forEach((g, i) => { g.visible = t > QUEBRA[i] + .15; }); chao.forEach((k, i) => { k.visible = t > 527 + i * .05 && i < 26; });
  cara.visible = t > QUEBRA[0] && t < 518;
  mao.visible = !quebrou && !o.semOvo; if (mao.visible) { gui.root.updateMatrixWorld(true); const h = gui.hands.R.localToWorld(new THREE.Vector3(0, -.02, .06)); mao.position.copy(h); mao.rotation.set(0, 0, 0); }
  gui.root.updateMatrixWorld(true); const h = gui.hands.R.localToWorld(new THREE.Vector3(0, -.02, .06));
  QUEBRA.forEach((q, i) => { if (t < q) S.ps[i].splice(0, 3, h.x, h.y, h.z); if (Math.abs(t - q) < 1) sp[i](t); else sp[i](-99); });
  band.userData.ovos.forEach((ov, i) => { ov.visible = i >= Math.min(ult.length, 7) || t > 527.4; });
}

export const ATO4A = [
  // O1 — noite. Luz amarela de lâmpada. Ele sozinho na mesa, olhando as próprias mãos
  mk(489.4, 500, { bg: '#1A1610', fov: 40 }, (c) => { const S = montaOvos(c); S.ci.root.visible = false; S.band.visible = false;
    return (t, u, cm) => { ovosUpd(S, 489, { semOvo: true }); S.gui.pose(soma(SENT({ shR: [45, 6], elR: 80, shL: [45, 6], elL: 80, headX: 16 }), vivo(t, 2, .3))); rosto(S.gui, null, t, 'triste', { look: [0, .7], lento: .5 });
      cam(cm, [[0, [1.6, 1.7, -.6]], [1, [1.2, 1.4, -.3]]], [[0, [.15, .8, .8]], [1, [.15, .9, .9]]], u / 10.6); return LUZ; }; }),
  // O2 — Dona Cida entra, põe a bandeja de 30 ovos na mesa, puxa a cadeira, senta de frente e cruza os braços
  mk(500, 508, { bg: '#1A1610', fov: 40 }, (c) => { const S = montaOvos(c);
    return (t, u, cm) => { const a = t - 500; ovosUpd(S, 489, { semOvo: true }); const anda = clamp(a / 2.4);
      const sent = a > 4.4; if (!sent) { S.ci.place(lerp(-1.4, .15, anda), lerp(.9, -.5, anda), 0, anda < 1 ? Math.atan2(1.55, -1.4) : 0); } else sentar(S.ci, .15, -.15, 0, .46);
      S.band.visible = true; if (a < 2.6) { naMao(S.band, S.ci, 'R', [.08, -.08, .12], false); S.band.rotation.set(0, 0, 0); } else S.band.position.set(.25, .785, .45);
      S.ci.pose(sent ? soma(SENT({ lean: -4 }), mix({}, G.bracoCruzado, smooth(5, 5.8, a))) : a < 2.4 ? soma(andar(t, { f: 2 }), { shR: [60, -10], elR: 60, shL: [60, -10], elL: 60 }) : a < 3.4 ? soma(parado(t, 3), { lean: 20, shR: [60, 0], elR: 20, shL: [60, 0], elL: 20 }) : soma(parado(t, 3), { shL: [40, 10], elL: 20, lean: 10 }));
      rosto(S.ci, null, t, 'determinado'); S.gui.pose(SENT({ shR: [45, 6], elR: 80, shL: [45, 6], elL: 80, headX: a < 3 ? 16 : 0 })); rosto(S.gui, null, t, a > 3 ? 'surpreso' : 'triste', { look: a > 3 ? [0, .5] : [0, .7] });
      cam(cm, [[0, [1.45, 1.4, 1.4]], [1, [1.35, 1.35, 1.25]]], [[0, [-.5, 1.0, .3]], [1, [.15, .95, .3]]], u / 8); return LUZ; }; }),
  // O3 — "Pega um. Sem quebrar."
  mk(508, 510.4, { bg: '#1A1610', fov: 38 }, (c) => { const S = montaOvos(c);
    return (t, u, cm) => { ovosUpd(S, 489, { semOvo: true }); S.ci.pose(soma(SENT({ lean: -4 }), G.bracoCruzado, { headX: -2 })); rosto(S.ci, 'cida', t, 'determinado'); S.gui.pose(SENT({ shR: [45, 6], elR: 80, shL: [45, 6], elL: 80 }));
      cam(cm, [[0, [.42, 1.32, 1.6]], [1, [.4, 1.3, 1.5]]], [[0, [.15, .92, -.15]], [1, [.15, .92, -.15]]], u / 2.4); return LUZ; }; }),
  // M1 — tentativa 1: o ovo explode e espirra na cara dele
  mk(510.4, 513.6, { bg: '#1A1610', fov: 40 }, (c) => { const S = montaOvos(c);
    return (t, u, cm) => { ovosUpd(S, t); const pega = smooth(510.8, 511.6, t); S.gui.pose(soma(SENT({ shR: [lerp(50, 62, pega), 0], elR: lerp(65, 75, pega), headX: 10 }), t > 512.4 ? { lean: -12, headX: -14 } : {})); rosto(S.gui, null, t, t > 512.45 ? 'surpreso' : 'determinado', { blink: t > 512.45 && t < 513 ? 1 : undefined, look: [0, .5] });
      S.ci.pose(soma(SENT({ lean: -4 }), G.bracoCruzado)); rosto(S.ci, null, t, 'neutro');
      cam(cm, [[0, [.55, 1.25, -.55]], [1, [.5, 1.22, -.5]]], [[0, [.15, .95, .9]], [1, [.15, 1.0, 1.0]]], u / 3.2); return LUZ; }; }),
  // M2 — tentativas 2, 3, 4: todos estourando, gema na mesa
  mk(513.6, 517.6, { bg: '#1A1610', fov: 38 }, (c) => { const S = montaOvos(c);
    return (t, u, cm) => { ovosUpd(S, t); const c3 = ((t - 513.6) % 1); S.gui.pose(SENT({ shR: [55 + 8 * Math.sin(c3 * Math.PI), 0], elR: 70, headX: 12 })); rosto(S.gui, null, t, 'tedio', { look: [0, .6] }); S.ci.pose(soma(SENT({ lean: -4 }), G.bracoCruzado)); rosto(S.ci, null, t, 'neutro');
      cam(cm, [[0, [.95, 1.15, .95]], [1, [.85, 1.1, .85]]], [[0, [.1, .85, .7]], [1, [.1, .85, .7]]], u / 4); return LUZ; }; }),
  // M3 — tentativa 10: fecha os olhos, respira fundo... mas quebra
  mk(517.6, 521.6, { bg: '#1A1610', fov: 36 }, (c) => { const S = montaOvos(c);
    return (t, u, cm) => { ovosUpd(S, t); const resp = Math.sin(clamp((t - 518.2) / 1.8) * Math.PI); S.gui.pose(SENT({ shR: [58, 0], elR: 72, lean: 10 - 5 * resp, shL: [40 + 4 * resp, 8], headX: -4 * resp })); rosto(S.gui, null, t, t > 520.5 ? 'triste' : 'neutro', { blink: t > 518.2 && t < 520.4 ? 1 : undefined });
      S.ci.pose(soma(SENT({ lean: -4 }), G.bracoCruzado)); cam(cm, [[0, [.42, 1.3, -.6]], [1, [.4, 1.25, -.5]]], [[0, [.15, 1.0, 1.0]], [1, [.15, 1.0, 1.0]]], u / 4); return LUZ; }; }),
  // M4 — tentativa 18: só com a ponta de dois dedos... e quebra
  mk(521.6, 525, { bg: '#1A1610', fov: 30 }, (c) => { const S = montaOvos(c);
    return (t, u, cm) => { ovosUpd(S, t); S.gui.pose(SENT({ shR: [62, 0], elR: 80, headX: 14 })); S.gui.hands.R.scale.set(.85, 1.15, .7); rosto(S.gui, null, t, t > 523.9 ? 'bravo' : 'determinado', { look: [0, .7] }); S.ci.pose(soma(SENT({ lean: -4 }), G.bracoCruzado));
      cam(cm, [[0, [.75, 1.05, .55]], [1, [.68, 1.02, .6]]], [[0, [.1, .92, .78]], [1, [.1, .92, .8]]], u / 3.4); return { ...LUZ, focus: .7, range: .4, blur: 6 }; }; }),
  // M5 — Dona Cida levanta e traz outra bandeja
  mk(525, 528.6, { bg: '#1A1610', fov: 40 }, (c) => { const S = montaOvos(c); const b2 = bandejaOvos(30); b2.scale.setScalar(OVO_ESC); c.add(b2);
    return (t, u, cm) => { const a = t - 525; ovosUpd(S, t); const vai = kv(a, [[.4, 0], [1.6, 1], [2.0, 1], [3.2, 0]]); S.ci.place(lerp(.15, .9, vai), lerp(-.15, -.9, vai), 0, a < 1.8 ? Math.PI * .8 : -Math.PI * .1);
      S.ci.pose(vai > .05 && vai < .95 ? soma(andar(t, { f: 2 }), a > 1.8 ? { shR: [60, -10], elR: 60, shL: [60, -10], elL: 60 } : {}) : soma(parado(t, 3), a > 1.8 ? { shR: [60, -10], elR: 60, shL: [60, -10], elL: 60 } : {})); rosto(S.ci, null, t, 'determinado');
      if (a > 1.8 && a < 3.3) naMao(b2, S.ci, 'R', [.08, -.08, .12], false); else if (a >= 3.3) b2.position.set(-.15, .785, .45); else b2.position.set(1.32, .93, -1.0); b2.rotation.set(0, 0, 0);
      S.gui.pose(SENT({ shR: [45, 6], elR: 80, headX: 6 })); rosto(S.gui, null, t, 'tedio', { look: [.4, 0] });
      cam(cm, [[0, [-1.0, 1.45, 1.5]], [1, [-.9, 1.4, 1.35]]], [[0, [.4, .9, -.3]], [1, [.3, .9, -.2]]], u / 3.6); return LUZ; }; }),
  // M6 — tentativa 30: o chão cheio de casca; ele limpa o rosto com a manga
  mk(528.6, 532.6, { bg: '#1A1610', fov: 40 }, (c) => { const S = montaOvos(c);
    return (t, u, cm) => { ovosUpd(S, t); const limpa = kv(t, [[530.4, 0], [530.9, 1], [531.8, 1], [532.3, 0]]); S.gui.pose(SENT({ shR: [55, 0], elR: 70, shL: [lerp(40, 115, limpa), lerp(4, -20, limpa)], elL: lerp(60, 140, limpa) + 10 * Math.sin(t * 9) * limpa, headX: 6 })); rosto(S.gui, null, t, 'tedio', { blink: limpa > .5 ? 1 : undefined });
      S.ci.pose(soma(SENT({ lean: -4 }), G.bracoCruzado)); cam(cm, [[0, [1.3, .55, 1.9]], [1, [1.2, .8, 1.7]]], [[0, [.0, .1, 1.1]], [1, [.15, .85, 1.0]]], u / 4); return LUZ; }; }),
  // M7 — pela janela, a noite vira madrugada
  mk(532.6, 536.6, { bg: '#1A1610', fov: 34 }, (c) => { const S = montaOvos(c);
    return (t, u, cm) => { ovosUpd(S, t); const m = smooth(533.2, 535.8, t); S.jm.userData.vidro.material.opacity = m; S.gui.pose(SENT({ shR: [55, 0], elR: 70, headX: 10 })); S.ci.pose(soma(SENT({ lean: -4 }), G.bracoCruzado, { headX: 14 * m }));
      cam(cm, [[0, [-.2, 1.5, .4]], [1, [-.1, 1.5, .2]]], [[0, [.4, 1.55, -1.6]], [1, [.4, 1.5, -1.6]]], u / 4); return { ...LUZ, tint: m > .5 ? '#D8DCFF' : LUZ.tint }; }; }),
  // M8 — Dona Cida cochilando na cadeira; acorda e aponta pra bandeja
  mk(536.6, 540.6, { bg: '#1A1610', fov: 36 }, (c) => { const S = montaOvos(c); S.jm.userData.vidro.material.opacity = 1;
    return (t, u, cm) => { ovosUpd(S, t); const ac = smooth(538.4, 538.8, t), ap = smooth(539, 539.5, t); S.ci.pose(soma(SENT({ lean: -4 }), mix(soma(G.bracoCruzado, { headX: 28 + 4 * Math.sin(t * 1.5), headZ: 10 }), { shR: [75, 6], elR: 10, shL: [30, 10], elL: 60 }, ap), { headX: -28 * ac * (1 - ap) }));
      rosto(S.ci, null, t, ac < .5 ? 'sono' : 'determinado', { blink: ac < .5 ? 1 : undefined, look: [0, .4 * ap] }); S.gui.pose(SENT({ shR: [55, 0], elR: 70 })); rosto(S.gui, null, t, 'sono');
      cam(cm, [[0, [.45, 1.3, 1.55]], [1, [.42, 1.28, 1.45]]], [[0, [.15, .9, -.15]], [1, [.15, .9, -.15]]], u / 4); return { ...LUZ, tint: '#E0E0FF' }; }; }),
  // E47 — tentativa 47: a música para. Câmera bem perto da mão: o ovo inteiro na palma, sem nenhuma rachadura. Ele nem respira
  mk(540.6, 548, { bg: '#1A1610', fov: 30 }, (c) => { const S = montaOvos(c); S.jm.userData.vidro.material.opacity = 1;
    return (t, u, cm) => { ovosUpd(S, t); const ab = smooth(542, 544, t); S.gui.pose(SENT({ shR: [58, 0], elR: 80, headX: 14 })); S.gui.hands.R.scale.set(1, 1 - .15 * (1 - ab), 1);
      S.gui.root.updateMatrixWorld(true); const h = S.gui.hands.R.localToWorld(new THREE.Vector3(0, -.02, .06)); S.mao.position.copy(h).add(new THREE.Vector3(0, .03 * ab, 0));
      rosto(S.gui, null, t, 'surpreso', { look: [0, .7], blink: 0 }); S.ci.pose(soma(SENT({ lean: 6 }), { shL: [40, 10], elL: 60, shR: [40, 10], elR: 60, headX: 10 }));
      const p = S.mao.position; cam(cm, [[0, [p.x + .5, p.y + .2, p.z - .35]], [1, [p.x + .3, p.y + .12, p.z - .22]]], [[0, [p.x, p.y, p.z]], [1, [p.x, p.y + .02, p.z]]], u / 7.4, 0, .2); return { ...LUZ, tint: '#FFF0D0', focus: .4, range: .15, blur: 14, sat: 1.1 }; }; }),
  // E48 — corte pra Dona Cida, que sorri pela primeira vez desde o aniversário
  mk(548, 553, { bg: '#1A1610', fov: 34 }, (c) => { const S = montaOvos(c); S.jm.userData.vidro.material.opacity = 1;
    return (t, u, cm) => { ovosUpd(S, t); const sor = smooth(548.8, 550.5, t); S.ci.pose(soma(SENT({ lean: 6 }), { shL: [40, 10], elL: 60, shR: [40, 10], elR: 60, headX: 4 })); rosto(S.ci, null, t, sor > .6 ? 'feliz' : 'neutro', { smile: sor, lento: .5, olhosAbertos: true });
      S.gui.pose(SENT({ shR: [58, 0], elR: 80 })); cam(cm, [[0, [.42, 1.3, 1.55]], [1, [.4, 1.25, 1.4]]], [[0, [.15, .92, -.15]], [1, [.15, .95, -.15]]], u / 5); return { ...LUZ, tint: '#FFE8D0' }; }; }),
  // E49 — "Agora todo dia, porque amanhã você tá mais forte."
  mk(553, 560, { bg: '#1A1610', fov: 36 }, (c) => { const S = montaOvos(c); S.jm.userData.vidro.material.opacity = 1;
    return (t, u, cm) => { ovosUpd(S, t); const vira = t > 557.4; S.ci.pose(soma(SENT({ lean: 4 }), { shR: [45 + 20 * Math.max(0, Math.sin(t * 3)) * (t < 557.3), 12], elR: 50, shL: [40, 10], elL: 60 })); rosto(S.ci, 'cida', t, 'feliz', { smile: .8, olhosAbertos: true });
      S.gui.pose(SENT({ shR: [58, 0], elR: 80, headX: vira ? 12 : 0 })); rosto(S.gui, null, t, vira ? 'feliz' : 'surpreso', { look: [0, vira ? .7 : 0], smile: vira ? .4 : undefined });
      cam(cm, [[0, [1.5, 1.35, .45]], [1, [1.4, 1.3, .45]]], [[0, [.15, .95, .45]], [1, [.15, .95, .45]]], u / 7); return { ...LUZ, tint: '#FFE8D0' }; }; }),
];
