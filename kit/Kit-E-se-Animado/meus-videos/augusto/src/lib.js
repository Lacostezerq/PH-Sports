// Atalhos de cena deste vídeo (estilo toon).
import * as THREE from 'three';
import { makeShot, aim, keys } from './motor/core.js';
import { uT } from './motor/kit2.js';
import { FX } from './motor/toon.js';
import { tw } from './vida.js';
/** mk(t0,t1,{bg,fov,fog,far}, build) — build(c, s) devolve upd(t,u,cam) => efeitos. */
export function mk(t0, t1, o, build) {
  const s = makeShot(t0, t1, o.bg || '#BFE3F7', o.fov || 32), c = s.scene;
  if (o.fog) c.fog = new THREE.Fog(o.fog[0], o.fog[1], o.fog[2]);
  s.camera.near = o.near || .05; s.camera.far = o.far || 500; s.camera.updateProjectionMatrix();
  const U = build(c, s) || (() => ({}));
  s.update = (t, u) => { uT.value = t; CUR = { t0, t1, viva: o.viva ?? 1 }; const r = U(t, u, s.camera) || {}; const V = c.userData.vida; if (V && o.vida !== false) { const T = tw(t); for (const f of V) f(t, T, u); } return FX(r); };
  return s;
}
let CUR = { t0: 0, t1: 1, viva: 1 };
const nz = (t, a) => Math.sin(t * .71 + a) * .6 + Math.sin(t * 1.37 + a * 2.1) * .3 + Math.sin(t * 2.9 + a * 3.3) * .1;
/** Câmera viva: segue as chaves e soma um leve "na mão" + aproximação lenta, para nenhum plano ficar parado. */
export function cam(c, P, Q, u, roll = 0, viva = CUR.viva) {
  const p = keys(P, u), q = keys(Q, u);
  if (viva > 0) { const t = uT.value, d = Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);
    const k = Math.min(1, Math.max(0, (t - CUR.t0) / Math.max(.5, CUR.t1 - CUR.t0)));
    const longo = CUR.t1 - CUR.t0 > 6.5 && k > .5 ? .2 * viva : 0; // plano longo: corte de aproximação no meio
    const push = .05 * viva * (k * k * (3 - 2 * k)) + longo; for (let i = 0; i < 3; i++) p[i] += (q[i] - p[i]) * push;
    const a = d * .011 * viva; p[0] += nz(t, 1) * a; p[1] += nz(t, 4) * a * .7; p[2] += nz(t, 7) * a * .5; q[0] += nz(t, 9) * a * .35; q[1] += nz(t, 12) * a * .3;
    roll += nz(t, 15) * .006 * viva; }
  aim(c, p, q, roll); }
import { makeChar3D, pisca } from './motor/char3d.js';
import { boca } from './fala.js';
/** Coloca um personagem na cena. */
export function ator(c, def, x = 0, z = 0, ry = 0, y = 0) { const k = makeChar3D(def); k.place(x, z, y, ry); c.add(k.root); k.seed = Math.abs((x * 13 + z * 7) | 0) % 9; return k; }
/** Rosto com piscada automática e boca sincronizada com a fala de `quem` (tempo absoluto t). */
export function rosto(k, quem, t, emo = 'neutro', extra = {}) {
  const b = quem ? boca(quem, t) : { open: 0, round: 0 };
  const m = extra.mouth || (b.open > 0 ? { open: b.open, round: b.round, smile: extra.smile } : { open: 0, smile: extra.smile });
  k.face({ emo, blink: extra.blink ?? pisca(t, k.seed || 0), look: extra.look || [0, 0], brow: extra.brow, lagrima: extra.lagrima, olhosAbertos: extra.olhosAbertos, mouth: m });
  // vida: respiração, cabeça que balança devagar e acena junto com a fala
  const H = k.headG.rotation, To = k.torsoG.rotation, V = k._viva;
  if (V && H.x === V.r[0] && H.y === V.r[1] && H.z === V.r[2] && To.x === V.r[3] && To.z === V.r[4]) { H.x -= V.d[0]; H.y -= V.d[1]; H.z -= V.d[2]; To.x -= V.d[3]; To.z -= V.d[4]; }
  if (!k.congelado && extra.vivo !== false) { const sd = (k.seed || 0) * 1.7, tl = t * (extra.lento ?? 1), fala = b.open || 0;
    const d = [.03 * Math.sin(tl * 1.05 + sd) + fala * .09 * (.6 + .4 * Math.sin(tl * 7.3 + sd)), .045 * Math.sin(tl * .63 + sd * 2) + fala * .05 * Math.sin(tl * 3.1 + sd), .025 * Math.sin(tl * .81 + sd * 3), .018 * Math.sin(tl * 2.2 + sd), .01 * Math.sin(tl * .9 + sd)];
    H.x += d[0]; H.y += d[1]; H.z += d[2]; To.x += d[3]; To.z += d[4]; k._viva = { d, r: [H.x, H.y, H.z, To.x, To.z] }; } else k._viva = null;

  return k;
}
/** Gesto leve de quem fala (braços acompanham a energia da voz). */
export function gesto(quem, t, base = {}, amp = 1) { const b = boca(quem, t).open; const s = Math.sin(t * 2.3), s2 = Math.sin(t * 1.7 + 1); return { ...base, shR: [(base.shR?.[0] ?? 0) + 18 * b * amp + 6 * s * amp, (base.shR?.[1] ?? 8) + 6 * b * amp], elR: (base.elR ?? 10) + 40 * b * amp, shL: [(base.shL?.[0] ?? 0) + 8 * b * amp * s2, base.shL?.[1] ?? 8], headX: (base.headX ?? 0) - 3 * b + 1.5 * s, headZ: (base.headZ ?? 0) + 2 * s2 * b }; }
import { tremor, sprite } from './efeitos.js';
import { ctex } from './motor/toon.js';
/** Câmera com tremor. */
export function camT(c, P, Q, u, amp = 0, uu = u) { cam(c, P, Q, u); if (amp > 0) { const d = tremor(uu, amp); c.position.x += d[0]; c.position.y += d[1]; } }
/** Deita um personagem de costas (pés em zPes, apontando a cabeça para -z). */
export function deitar(k, x, ySup, zPes, inclina = 0) { k.root.rotation.set(-Math.PI / 2 + inclina, 0, 0); k.root.position.set(x, ySup + .2, zPes); k.sombra.visible = false; return k; }
let HEART = null;
/** Ícone flutuante (coração, interrogação, gota de suor, notas, zzz, exclamação). */
export function icone(tipo, size = .4) {
  const t = ctex(256, 256, (x) => { x.lineJoin = 'round'; x.lineWidth = 14; x.strokeStyle = '#1B1420'; x.textAlign = 'center'; x.textBaseline = 'middle';
    if (tipo === 'coracao') { x.fillStyle = '#F2546E'; x.beginPath(); x.moveTo(128, 214); x.bezierCurveTo(20, 140, 30, 50, 100, 52); x.bezierCurveTo(118, 54, 128, 70, 128, 82); x.bezierCurveTo(128, 70, 138, 54, 156, 52); x.bezierCurveTo(226, 50, 236, 140, 128, 214); x.fill(); x.stroke(); x.fillStyle = '#FFFFFF88'; x.beginPath(); x.ellipse(88, 92, 18, 12, -.6, 0, 7); x.fill(); }
    else if (tipo === 'gota') { x.fillStyle = '#8FD3F2'; x.beginPath(); x.moveTo(128, 30); x.bezierCurveTo(200, 130, 200, 210, 128, 214); x.bezierCurveTo(56, 210, 56, 130, 128, 30); x.fill(); x.stroke(); }
    else { const txt = { interrogacao: '?', exclamacao: '!', zzz: 'Z', notas: '♪' }[tipo] || tipo; x.font = '900 200px Inter'; x.fillStyle = tipo === 'exclamacao' ? '#F2C14E' : '#FFFFFF'; x.strokeText(txt, 128, 136); x.fillText(txt, 128, 136); } });
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false })); s.scale.setScalar(size); s.renderOrder = 10; return s;
}
/** Placa/cartaz 3D com texto (canvas). */
export function cartaz(w, h, draw, o = {}) { const t = ctex(Math.round(512 * (o.res || 1)), Math.round(512 * h / w * (o.res || 1)), (x, W, H) => draw(x, W, H)); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), o.basic ? new THREE.MeshBasicMaterial({ map: t, transparent: !!o.transp, side: THREE.DoubleSide }) : new THREE.MeshToonMaterial({ map: t, transparent: !!o.transp, side: THREE.DoubleSide })); return m; }
