// Movimentos dos personagens: poses com chaves no tempo, respiração, troca de peso, esforço e gestos prontos.
// Ângulos em graus. sh/hip: [frente, abrir]; el/kn: dobra. lean>0 inclina pra frente; headX>0 olha pra baixo.
import { clamp, lerp, easeIO, easeOut, easeIn, smooth } from './motor/core.js';
import { walk, run, idle } from './motor/char3d.js';

const ARR = { shL: [0, 8], shR: [0, 8], hipL: [0, 0], hipR: [0, 0] };
const ESC = { elL: 8, elR: 8 };
/** Soma poses: a primeira é a base, as outras são deslocamentos (somam em cima). */
export function soma(base, ...ds) {
  const r = { ...base };
  for (const d of ds) { if (!d) continue; for (const k in d) { const v = d[k]; if (Array.isArray(v)) { const b = r[k] || ARR[k] || [0, 0]; r[k] = [b[0] + (v[0] || 0), b[1] + (v[1] || 0), (b[2] || 0) + (v[2] || 0)]; } else r[k] = (r[k] ?? ESC[k] ?? 0) + v; } }
  return r;
}
/** Mistura duas poses (u de 0 a 1). */
export function mix(a, b, u) {
  const r = {}; const ks = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const k of ks) { const x = a[k], y = b[k]; if (Array.isArray(x) || Array.isArray(y)) { const X = x || ARR[k] || [0, 0], Y = y || ARR[k] || [0, 0]; r[k] = [lerp(X[0], Y[0], u), lerp(X[1] ?? 0, Y[1] ?? 0, u), lerp(X[2] || 0, Y[2] || 0, u)]; } else r[k] = lerp(x ?? ESC[k] ?? 0, y ?? ESC[k] ?? 0, u); }
  return r;
}
const EASE = { io: easeIO, out: easeOut, in: easeIn, lin: (u) => clamp(u), back: (u) => { u = clamp(u); const s = 1.9; return 1 + (s + 1) * Math.pow(u - 1, 3) + s * Math.pow(u - 1, 2); }, mola: (u) => { u = clamp(u); return 1 - Math.cos(u * Math.PI * 2.5) * Math.exp(-u * 5); } };
/** Pose por chaves: K = [[t, pose, ease?], ...]. Entre duas chaves mistura com a curva da chave de chegada (io, out, in, lin, back, mola). */
export function kf(t, K) {
  if (t <= K[0][0]) return K[0][1];
  for (let i = 1; i < K.length; i++) if (t <= K[i][0]) { const u = (t - K[i - 1][0]) / Math.max(1e-6, K[i][0] - K[i - 1][0]); return mix(K[i - 1][1], K[i][1], (EASE[K[i][2] || 'io'])(u)); }
  return K[K.length - 1][1];
}
/** Valor por chaves (número ou vetor), mesma ideia de kf. */
export function kv(t, K) {
  if (t <= K[0][0]) return K[0][1];
  for (let i = 1; i < K.length; i++) if (t <= K[i][0]) { const u = (EASE[K[i][2] || 'io'])((t - K[i - 1][0]) / Math.max(1e-6, K[i][0] - K[i - 1][0])); const a = K[i - 1][1], b = K[i][1]; return Array.isArray(a) ? a.map((v, j) => lerp(v, b[j], u)) : lerp(a, b, u); }
  return K[K.length - 1][1];
}
const n1 = (t, a) => Math.sin(t * .71 + a) * .6 + Math.sin(t * 1.37 + a * 2.1) * .3 + Math.sin(t * 2.9 + a * 3.3) * .1;

/** Vida de quem está parado: respira, troca o peso de perna, mexe os braços de leve. amp 0..1+. */
export function vivo(t, seed = 0, amp = 1) {
  const b = Math.sin(t * 1.9 + seed), w = n1(t * .35, seed * 2.3), m = n1(t * .6, seed * 4.1);
  return { bob: b * .004 * amp - Math.abs(w) * .008 * amp, lean: b * .8 * amp, tilt: w * 2.2 * amp, hipL: [0, w * 2 * amp], hipR: [0, -w * 2 * amp], knL: Math.max(0, w) * 9 * amp, knR: Math.max(0, -w) * 9 * amp,
    shL: [m * 3 * amp, b * 1.2 * amp], shR: [-m * 3 * amp, b * 1.2 * amp], elL: (4 + m * 4) * amp, elR: (4 - m * 4) * amp, headY: n1(t * .4, seed * 7) * 6 * amp, headZ: -w * 1.5 * amp };
}
/** Parado de pé com vida (pose base + vida). */
export const parado = (t, seed = 0, amp = 1) => soma({ shL: [0, 9], shR: [0, 9], elL: 12, elR: 12 }, vivo(t, seed, amp));
/** Ofegante: peito subindo e descendo forte. */
export const ofego = (t, amp = 1) => { const b = Math.sin(t * 5.2); return { lean: (6 + b * 3) * amp, bob: b * .008 * amp, shL: [b * 3 * amp, b * 2 * amp], shR: [b * 3 * amp, b * 2 * amp], headX: (-2 + b * 3) * amp }; };
/** Tremor de esforço (somar em cima). */
export const treme = (t, amp = 1) => { const a = Math.sin(t * 41) * amp, b = Math.sin(t * 57 + 1) * amp; return { lean: a * .8, tilt: b * .7, shL: [a * 1.5, b], shR: [b * 1.5, a], headZ: a * .8, bob: b * .002 }; };
/** Andar com vida (cabeça compensa, ombros balançam). o: {f, amp, chinelo, curvado, maos:'bolso'|'livre'} */
export function andar(t, o = {}) {
  const f = o.f || 1.8, amp = o.amp ?? 1, ph = o.ph || 0, P = walk(t, f, amp, ph), s = Math.sin((t * f + ph) * Math.PI * 2);
  P.headY = -s * 3 * amp; P.tilt = s * 1.8 * amp; P.headZ = -s * 1.2 * amp;
  if (o.chinelo) { P.knL *= .8; P.knR *= .8; P.hipL[0] *= .85; P.hipR[0] *= .85; } // passo arrastado de chinelo
  if (o.curvado) { P.lean += 10; P.headX = -6; }
  if (o.maos === 'bolso') { P.shL = [18 + s * 2, 0, -90]; P.shR = [18 - s * 2, 0, -90]; P.elL = 105; P.elR = 105; } // mãos no bolso do moletom
  return P;
}
/** Correr com vida. */
export const correr = (t, f = 2.9, amp = 1) => { const P = run(t, f, amp), s = Math.sin(t * f * Math.PI * 2); P.headY = -s * 3; P.tilt = s * 2.5; return P; };

// ---------- gestos prontos (poses completas) ----------
export const G = {
  bracoCruzado: { shL: [30, 4, -75], shR: [26, 4, -80], elL: 95, elR: 95, lean: -3 },
  maosCintura: { shL: [-15, 55, -90], shR: [-15, 55, -90], elL: 85, elR: 85, lean: -2 },
  maosBolso: { shL: [18, 0, -90], shR: [18, 0, -90], elL: 105, elR: 105, lean: 2, headX: 4 }, // mãos no bolso do moletom
  maosCabeca: { shL: [150, 38], shR: [150, 38], elL: 130, elR: 130, headX: -6 },
  bracosAbertos: { shL: [55, 55], shR: [55, 55], elL: 22, elR: 22, lean: -4, headX: -4 },
  abraco: { shL: [70, 20, -80], shR: [70, 20, -80], elL: 50, elR: 50, lean: 8 },
  maosFrente: { shL: [80, 8], shR: [80, 8], elL: 14, elR: 14, lean: 6 }, // braços esticados pra frente
  desculpa: { shL: [55, 22], shR: [55, 22], elL: 85, elR: 85, lean: -3, headX: 6, headZ: 6 }, // palmas pra frente, "foi mal"
  ombros: { shL: [10, 24], shR: [10, 24], elL: 70, elR: 70, headZ: 10, bob: .015 }, // dá de ombros
  celular: { shR: [62, 6], elR: 72, shL: [30, 10], elL: 60 }, // segurando o celular na frente
  filmar: { shR: [88, 2], elR: 38, shL: [70, -6], elL: 60, headX: 2 }, // celular erguido filmando
  coçarOlho: { shR: [118, -8], elR: 150, headX: 8, headZ: -6 },
  apontar: { shR: [92, 6], elR: 4 },
  punhoFecha: { shR: [70, 10], elR: 105, headX: 18 },
  pegaChao: { lean: 52, bob: -.18, hipL: [64, 6], hipR: [60, 6], knL: 85, knR: 80, shL: [74, 6], shR: [74, 6], elL: 6, elR: 6, headX: -20 },
  carregaFrente: { lean: -10, shL: [22, -4], shR: [22, -4], elL: 50, elR: 50, knL: 12, knR: 12, bob: -.02, headX: -6 }, // peso na frente, com as duas mãos
  quadril: { shL: [-6, 30], elL: 100, shR: [8, 10], elR: 20, tilt: -6, lean: 3 }, // botijão apoiado no quadril (braço esquerdo envolve)
  ajoelhado: { bob: -.3, lean: 6, hipL: [92, 4], hipR: [-6, 4], knL: 92, knR: 98, shL: [12, 10], shR: [12, 10], elL: 25, elR: 25 },
  sentadoChao: { bob: -.48, lean: -10, hipL: [80, 18], hipR: [80, 18], knL: 30, knR: 30, shL: [-30, 20], shR: [-30, 20], elL: 10, elR: 10 },
  testaParede: { lean: 22, shL: [100, 18], elL: 85, shR: [10, 8], elR: 15, headX: 16 },
  comemora: { shL: [160, 30], shR: [160, 30], elL: 20, elR: 20, headX: -12 },
  assustado: { shL: [30, 22], shR: [30, 22], elL: 100, elR: 100, lean: -8, headX: -6 },
  aceno: { shR: [150, 30], elR: 30 },
};
/** Aceno com a mão direita (t em segundos). */
export const acenar = (t, amp = 1) => ({ shR: [148, 30 + Math.sin(t * 7) * 14 * amp], elR: 32 + Math.sin(t * 7 + 1) * 18 * amp });
/** Rindo: ombros pulando, cabeça pra trás. */
export const rir = (t, amp = 1) => { const b = Math.abs(Math.sin(t * 9)); return { bob: b * .01 * amp, headX: -8 * amp - b * 4 * amp, shL: [b * 5 * amp, 8 + b * 4 * amp], shR: [b * 5 * amp, 8 + b * 4 * amp], lean: -3 * amp }; };
/** Pulando de alegria (torcida). */
export const pular = (t, f = 2.2, ph = 0) => { const s = Math.max(0, Math.sin((t * f + ph) * Math.PI * 2)); return { bob: s * .16, knL: (1 - s) * 30, knR: (1 - s) * 30, hipL: [(1 - s) * 18, 4], hipR: [(1 - s) * 18, 4], shL: [140 + s * 20, 30], shR: [140 + s * 20, 30], elL: 30, elR: 30, headX: -10 }; };
/** Sacudindo a mão que doeu (porteiro). */
export const sacode = (t) => ({ shR: [40 + Math.sin(t * 18) * 15, 20], elR: 70 + Math.sin(t * 18 + 1) * 30, shL: [20, 10], elL: 60 });
/** Batucar os dedos na mesa (mão direita). */
export const batuca = (t) => ({ shR: [38, 6], elR: 68 + Math.max(0, Math.sin(t * 9)) * 8 });
export { smooth, easeIO, easeOut, easeIn, clamp, lerp, idle };
/** Vida para quem está sentado: igual ao vivo, mas sem mexer quadril, joelho e altura (senão desfaz a pose sentada). */
export function vivoS(t, seed = 0, amp = 1) { const v = vivo(t, seed, amp); delete v.hipL; delete v.hipR; delete v.knL; delete v.knR; delete v.bob; return v; }
