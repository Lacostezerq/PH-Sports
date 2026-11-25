// ATO 1A — abertura (tela preta) e a ladeira do dia 12 (0 a 42 s): carreta, impacto, pão rolando, congelamento, like, rebobinar.
import * as THREE from 'three';
import { mk, cam, camT, rosto, pw } from './base.js';
import { montaLadeira, tsAbertura, T_IMP, PC } from './ladeira.js';
import { G, soma, vivo, treme, kf, kv, mix, ofego } from './mov.js';
import { celular } from './objs.js';
import { clamp, smooth, easeOut, lerp } from './motor/core.js';
import { tremor } from './efeitos.js';

const TS = tsAbertura;
const FXT = { tint: '#FFF0E0', sat: 1.08 };
/** Plano na ladeira: build(S, c) devolve upd(t, u, cm) => efeitos. */
const lad = (t0, t1, build, o = {}) => mk(t0, t1, { bg: '#E8B080', fov: o.fov || 40, far: 600 }, (c) => { const S = montaLadeira(c, o); const U = build(S, c); return (t, u, cm) => { S.g.updateMatrixWorld(true); return { ...FXT, ...(U(t, u, cm) || {}) }; }; });
const W = (S, x, y, z) => S.L.w(x, y, z);
// pose do Guilherme segurando a carreta (depois do toque) e antes (esperando)
const segura = (t, ts) => { const b = ts > T_IMP; const k = clamp((ts - T_IMP) / .2); return soma(G.maosFrente, { shL: [-22, 0], shR: [-22, 0], hipL: [24, 6], knL: 24 + 8 * k, hipR: [-18 - 6 * k, 4], knR: 6, lean: 2 + 5 * k, bob: -.02 * k }, treme(t, b ? 1.2 * Math.exp(-(ts - T_IMP) * .8) + .25 : 0)); };
const espera = (t, ts) => kf(ts, [[0, soma({ shL: [0, 9], shR: [4, 9], elL: 14, elR: 12, headX: 2 }, vivo(t, 3, .6))], [19.6, { shL: [6, 10], shR: [4, 9], elL: 18, elR: 12, headX: -4 }], [19.85, { shL: [-6, 14], shR: [2, 10], elL: 6, elR: 10, headX: -2 }, 'out'], [20.5, soma(G.maosFrente, { shL: [-18, 0], shR: [-18, 0], hipL: [24, 6], knL: 22, hipR: [-18, 4], knR: 6, lean: 2 }), 'back']]);
const guiPose = (t, ts) => ts < 20.5 ? espera(t, ts) : segura(t, ts);
const guiEmo = (ts) => ts < 19.4 ? 'neutro' : 'determinado';

export const ATO1A = [
  // 0 — abertura: tela preta (a frase e o vidro quebrando estão na camada de cima)
  mk(0, 4, { bg: '#000000' }, () => () => ({ vig: 0, exposure: 0 })),
  // 1 — vista alta da ladeira: a carreta desce sem freio, carros sobem na calçada, moto cai, gente corre
  lad(4, 8.2, (S) => (t, u, cm) => { const ts = TS(t); S.upd(t, ts, { guiPose, guiEmo: guiEmo(ts) });
    const F = S.cw.position.z + PC; cam(cm, [[0, W(S, 2.6, 13, 9)], [1, W(S, 2.2, 11.5, 5)]], W(S, 0, 0, F * .55 - 4), u / 4.2); return { bloom: .3 }; }),
  // 2 — no chão, na calçada: gente correndo para dentro das lojas, a carreta vindo, faíscas
  lad(8.2, 11, (S) => (t, u, cm) => { const ts = TS(t); S.upd(t, ts, { guiPose });
    const z = S.cw.position.z + PC; camT(cm, [[0, W(S, 2.3, .55, -6.5)], [1, W(S, 2.1, .7, -7.6)]], [[0, W(S, -.5, 2.2, z)], [1, W(S, -.5, 2.0, z)]], u / 2.8, .012 + u * .004); return { focus: 30, range: 40, blur: 2 }; }),
  // 3 — o motorista desesperado, buzina travada: "Sai da frente, moleque!"
  lad(11, 14.2, (S) => (t, u, cm) => { const ts = TS(t); S.upd(t, ts, { guiPose, motEmo: 'medo' }); S.ca.updateMatrixWorld(true);
    const p = pw(S.ca, -.7 + u * .15, 2.25, 10.6 - u * .4), q = pw(S.ca, .55, 2.4, 5.5); camT(cm, p, q, u / 3.2, .02); return { focus: 3.2, range: 2, blur: 5 }; }),
  // 4 — o chinelo parado no meio da faixa
  lad(14.2, 16.4, (S) => (t, u, cm) => { const ts = TS(t); S.upd(t, ts, { guiPose });
    cam(cm, [[0, W(S, .55, .12, .9)], [1, W(S, .45, .14, .75)]], [[0, W(S, 0, .08, 0)], [1, W(S, 0, .1, -.05)]], u / 2.2); return { focus: .9, range: .4, blur: 14 }; }),
  // 5 — a câmera sobe devagar: a sacola na mão, o moletom, o rosto sério (a carreta crescendo atrás)
  lad(16.4, 19.5, (S) => (t, u, cm) => { const ts = TS(t); S.upd(t, ts, { guiPose, guiEmo: 'neutro' }); const k = smooth(0, 1, u / 3.1);
    cam(cm, [[0, W(S, 1.0, .35, -1.1)], [1, W(S, 1.05, 1.22, -1.05)]], [[0, W(S, .1, .35, 0)], [.5, W(S, 0, .8, 0)], [1, W(S, 0, 1.16, 0)]], k, 0, .4); return { focus: 1.6, range: 1, blur: 6 }; }),
  // 6 — larga a sacola e estica as duas mãos (de frente-lado, a carreta lá em cima)
  lad(19.5, 20.6, (S) => (t, u, cm) => { const ts = TS(t); S.upd(t, ts, { guiPose, guiEmo: 'determinado' });
    cam(cm, [[0, W(S, -1.7, 1.1, -1.3)], [1, W(S, -1.55, 1.05, -1.15)]], [[0, W(S, 0, .95, 0)], [1, W(S, 0, .9, -.1)]], u / 1.1); return { focus: 2.2, range: 1.2, blur: 5 }; }),
  // 7 — câmera lenta: as mãos e o para-choque chegando
  lad(20.6, 22.55, (S) => (t, u, cm) => { const ts = TS(t); S.upd(t, ts, { guiPose, guiEmo: 'determinado' });
    cam(cm, [[0, W(S, 1.9, .95, -.2)], [1, W(S, 1.6, .9, -.35)]], [[0, W(S, 0, .82, -.6)], [1, W(S, 0, .82, -.45)]], u / 1.95); return { focus: 1.9, range: .8, blur: 8, sat: 1.15 }; }),
  // 8 — o impacto: tela treme, para-choque amassa, asfalto racha em estrela, poeira sobe em círculo
  lad(22.55, 23.6, (S) => (t, u, cm) => { const ts = TS(t); S.upd(t, ts, { guiPose, guiEmo: 'bravo' }); const dI = Math.max(0, ts - T_IMP);
    camT(cm, [[0, W(S, 3.6, 1.6, 2.6)], [1, W(S, 3.9, 1.7, 2.9)]], [[0, W(S, 0, .7, -.4)], [1, W(S, 0, .7, -.4)]], u / 1.05, .07 * Math.exp(-dI * 6) * (dI > 0)); return { flash: dI > 0 ? .5 * Math.exp(-dI * 18) : 0, bloom: .5 }; }),
  // 9 — tudo para. Silêncio. Um pão rola sozinho ladeira abaixo
  lad(23.6, 25.5, (S) => (t, u, cm) => { const ts = TS(t); S.upd(t, ts, { guiPose, guiEmo: 'determinado' }); const p = S.paoR.position;
    cam(cm, [[0, W(S, -1.0, .22, 2.4)], [1, W(S, -.9, .25, 2.8)]], [[0, W(S, -.3, .35, .2)], [1, W(S, -.3, .4, .5)]], u / 1.9); return { focus: 2.2, range: 1.5, blur: 5 }; }),
  // 10 — de baixo: o herói segurando a carreta, vapor do motor, poeira no ar
  lad(25.5, 29.3, (S) => (t, u, cm) => { const ts = TS(t); S.upd(t, ts, { guiPose, guiEmo: 'determinado' });
    cam(cm, [[0, W(S, -2.7, .3, -1.05)], [1, W(S, -2.35, .36, -.8)]], [[0, W(S, 0, .95, .2)], [1, W(S, 0, .95, .22)]], u / 3.8, 0, 0); return { focus: 2.0, range: 2, blur: 4, bloom: .35 }; }),
  // 11 — aproxima no rosto; congela (a poeira para no ar)
  lad(29.3, 33.6, (S) => (t, u, cm) => { const ts = TS(t), tg = Math.min(t, 32.6); S.upd(tg, ts, { guiPose, guiEmo: 'determinado' }); const fz = smooth(32.5, 32.8, t);
    cam(cm, [[0, W(S, .5, 1.24, -.76)], [1, W(S, .26, 1.16, -.52)]], [[0, W(S, 0, 1.06, .22)], [1, W(S, 0, 1.08, .24)]], u / 4.3, 0, 0); return { focus: 1.4, range: .8, blur: 8, sat: 1.08 - .5 * fz, tint: fz > 0 ? '#E8EEF8' : FXT.tint, flash: fz * (1 - smooth(32.8, 33.1, t)) * .5 }; }),
  // 12 — congelado: surge um celular com o like do lado; ele encosta o dedo de leve e o celular continua inteiro
  lad(33.6, 38.6, (S) => { const fone = celular(); fone.scale.setScalar(4.2); S.g.add(fone);
    const desenha = (k, ok) => fone.desenha((x, w, h) => { x.fillStyle = '#F4F6FA'; x.fillRect(0, 0, w, h); x.fillStyle = '#E2443A'; x.fillRect(0, 0, w, 60); x.fillStyle = '#FFFFFF'; x.font = '800 30px Inter'; x.textAlign = 'center'; x.fillText('▶ vídeo', w / 2, 42);
      x.save(); x.translate(w / 2, h * .48); x.scale(1 + k * .25, 1 + k * .25); x.lineWidth = 12; x.lineJoin = 'round'; x.strokeStyle = ok ? '#2D8CD6' : '#2A2A30'; x.fillStyle = ok ? '#2D8CD6' : 'rgba(0,0,0,0)';
      x.beginPath(); x.moveTo(-70, -10); x.lineTo(-30, -10); x.lineTo(-10, -80); x.quadraticCurveTo(15, -95, 18, -60); x.lineTo(12, -18); x.lineTo(70, -18); x.quadraticCurveTo(92, -15, 86, 10); x.lineTo(70, 75); x.quadraticCurveTo(64, 90, 45, 90); x.lineTo(-30, 90); x.lineTo(-30, -10); x.closePath(); if (ok) x.fill(); x.stroke(); x.strokeRect(-70, -10, 40, 100); x.restore();
      x.fillStyle = ok ? '#2D8CD6' : '#5A5A66'; x.font = '900 52px Inter'; x.fillText(ok ? 'Curtido!' : 'Curtir', w / 2, h * .74); });
    desenha(0, false); let est = -1;
    const pose = (t, ts) => kf(t, [[33.6, segura(32.6, ts)], [34.9, segura(32.6, ts)], [35.7, soma(segura(32.6, ts), { shR: [60, 30], elR: 50, twist: -6 }), 'io'], [36.1, soma(segura(32.6, ts), { shR: [82, 42], elR: 22, twist: -8 }), 'out'], [36.7, soma(segura(32.6, ts), { shR: [82, 42], elR: 22, twist: -8 })], [37.5, segura(32.6, ts)]]);
    return (t, u, cm) => { const ts = TS(t); S.upd(32.6, ts, { guiPose: (tt, s) => pose(t, s), guiEmo: t > 36.1 ? 'feliz' : 'determinado', guiExtra: { look: t > 34.6 ? [-.7, 0] : [0, 0], smile: t > 36.2 ? .6 : undefined } });
      const ent = easeOut(clamp((t - 33.8) / .55)); const toque = t > 36.05; const k = toque ? Math.exp(-(t - 36.05) * 5) : 0; const e2 = toque ? 1 : 0; if (e2 !== est || toque) { desenha(k, toque); est = e2; }
      fone.position.set(.5 + (1 - ent) * 1.0, 1.12 + Math.sin(t * 2) * .01, -.02); fone.rotation.set(0, -2.85 + k * .05, Math.sin(t * 1.7) * .02 + k * .04);
      cam(cm, W(S, .3, 1.3, -.76), W(S, .16, 1.04, .15), u / 5, 0, 0); return { sat: .62, tint: '#E8EEF8', focus: 1.9, range: 1, blur: 4 }; }; }),
  // 13 — rebobinando: a carreta sobe de ré, o pão volta rolando, o sol volta pro alto
  lad(38.6, 42, (S) => (t, u, cm) => { const ts = TS(t); S.upd(t, ts, { guiPose, guiEmo: 'neutro' }); const k = u / 3.4;
    cam(cm, [[0, W(S, 2.4, 14, 11)], [1, W(S, 2.0, 16, 13)]], [[0, W(S, 0, 0, -40)], [1, W(S, 0, 0, -55)]], k, Math.sin(t * 30) * .004, 0); return { tint: k < .5 ? '#FFE0C8' : '#F4F4FF', exposure: 1 + Math.sin(t * 40) * .06, sat: .8 }; }),
];
