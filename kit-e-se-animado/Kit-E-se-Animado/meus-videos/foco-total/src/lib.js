// Atalhos de cena deste vídeo (estilo toon).
import * as THREE from 'three';
import { makeShot, aim, keys } from './motor/core.js';
import { uT } from './motor/kit2.js';
import { FX } from './motor/toon.js';
import { tw } from './vida.js';
/** mk(t0,t1,{bg,fov,fog,far}, build) — build(c, s) devolve upd(t,u,cam) => efeitos. */
export function mk(t0, t1, o, build) {
  const s = makeShot(t0, t1, o.bg || '#BFE3F7', o.fov || 32); const bg = s.scene.background;
  s.camera.near = o.near || .05; s.camera.far = o.far || 500; s.camera.updateProjectionMatrix();
  let U = null, c = null;
  // a cena só é montada quando o vídeo chega nela; a anterior é desmontada (economiza memória)
  const monta = () => { if (ULTIMA && ULTIMA !== s) ULTIMA._desmonta(); ULTIMA = s; c = s.scene = new THREE.Scene(); c.background = bg; if (o.fog) c.fog = new THREE.Fog(o.fog[0], o.fog[1], o.fog[2]); U = build(c, s) || (() => ({})); };
  s._desmonta = () => { if (!U) return; c.traverse((n) => { if (n.geometry) n.geometry.dispose(); if (n.material) for (const m of [].concat(n.material)) { if (m.map && !m.map.userData.fixa && m.map.image && m.map.image.tagName === 'CANVAS' && m.map.image.__dyn) m.map.dispose(); m.dispose(); } }); s.scene = new THREE.Scene(); s.scene.background = bg; U = null; c = null; };
  s.update = (t, u) => { if (!U) monta(); uT.value = t; CUR = { t0, t1, viva: o.viva ?? 1, scene: c, perto: o.perto }; restaura(c); const r = U(t, u, s.camera) || {}; if (o.expressao !== false) vidaRostos(c, t); if (o.limpa !== false) limpaVista(c, s.camera); const V = c.userData.vida; if (V && o.vida !== false) { const T = tw(t); for (const f of V) f(t, T, u); } return FX(r); };
  return s;
}
let ULTIMA = null;
let CUR = { t0: 0, t1: 1, viva: 1 };
// ---- vista limpa: quem fica colado na câmera ou na frente de quem está sendo filmado sai do quadro ----
const _v = new THREE.Vector3(), _a = new THREE.Vector3(), _b = new THREE.Vector3();
const atoresDa = (c) => c.userData._at || (c.userData._at = (() => { const L = []; c.traverse((n) => { if (n.userData && n.userData.ator) L.push(n.userData.ator); }); return L; })());
function restaura(c) { for (const k of atoresDa(c)) if (k._ocultei) { k.root.visible = true; k._ocultei = false; } }
export function limpaVista(c, cam) {
  const alvo = cam.userData.alvo; if (!alvo) return; c.updateMatrixWorld(true); _a.copy(cam.position); _b.set(alvo[0], alvo[1], alvo[2]); const ab = _b.clone().sub(_a); const L2 = ab.lengthSq();
  for (const k of atoresDa(c)) { if (!k.root.visible || k.fixo) continue; let vis = false; for (let p = k.root.parent; p; p = p.parent) if (p.visible === false) { vis = true; break; } if (vis) continue;
    k.headG.getWorldPosition(_v); _v.y += .26 * (k.root.scale.x || 1); const dc = _v.distanceTo(_a); const s = Math.max(0, Math.min(1, _v.clone().sub(_a).dot(ab) / L2)); const d = _v.distanceTo(_a.clone().addScaledVector(ab, s));
    const alvoProx = _v.distanceTo(_b) < .55; if (dc < .75 || (!alvoProx && s > .02 && s < .8 && d < .3 * (k.root.scale.x || 1) && dc < _a.distanceTo(_b) - .4)) { k.root.visible = false; k._ocultei = true; } }
}
/** Usado pelas cenas da cidade para a câmera viva saber o começo e o fim do plano. */
export function setCur(c) { CUR = c; }
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
  // rosto na mira: afasta a câmera até a cabeça ocupar no máximo ~40% da altura da tela
  if (CUR.scene && CUR.perto !== true) { const L = atoresDa(CUR.scene); for (const k of L) { if (!k.root.visible) continue; k.headG.getWorldPosition(_v); _v.y += .26 * (k.root.scale.x || 1);
      if (Math.hypot(_v.x - q[0], _v.y - q[1], _v.z - q[2]) < .45) { const mn = (CUR.perto || .71 * (k.root.scale.x || 1)) / Math.tan(c.fov * Math.PI / 360); const d = Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]); if (d < mn && d > 1e-3) for (let i = 0; i < 3; i++) p[i] = q[i] + (p[i] - q[i]) * mn / d; break; } } }
  aim(c, p, q, roll); c.userData.alvo = q; }
import { makeChar3D, pisca } from './motor/char3d.js';
import { boca } from './fala.js';
/** Coloca um personagem na cena. */
export function ator(c, def, x = 0, z = 0, ry = 0, y = 0) { const k = makeChar3D(def); k.place(x, z, y, ry); c.add(k.root); k.seed = Math.abs((x * 13 + z * 7) | 0) % 9; return k; }
const hsh = (n, s) => { const x = Math.sin(n * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
/** Piscada natural: olho fecha de verdade por ~4 quadros, em intervalos irregulares, às vezes piscada dupla. */
export function piscaV(t, seed = 0) { const Lp = 2.4 + (seed % 5) * .21, n = Math.floor((t + seed * .9) / Lp), tl = (t + seed * .9) - n * Lp;
  const f = (d) => d < 0 ? 0 : d < .04 ? .55 : d < .14 ? 1 : d < .18 ? .55 : 0; const st = .15 + hsh(n, seed) * (Lp - .8);
  return Math.max(f(tl - st), hsh(n + 50, seed) < .22 ? f(tl - st - .3) : 0); }
/** Olhar vivo: pequenos saltos dos olhos para um lado e outro, segurando entre um e outro. */
export function sacada(t, seed = 0, amp = .24) { const Lp = 1.3 + (seed % 4) * .27, n = Math.floor((t + seed * 1.3) / Lp), tl = (t + seed * 1.3) - n * Lp;
  const o = (m) => [(hsh(m, seed + 7) - .5) * 2 * amp, (hsh(m, seed + 11) - .5) * amp * .8]; const a = o(n - 1), b2 = o(n), k = Math.min(1, tl / .07); return [a[0] + (b2[0] - a[0]) * k, a[1] + (b2[1] - a[1]) * k]; }
/** Sobrancelha que levanta de vez em quando (expressão). */
const sobe = (t, seed) => { const Lp = 3.3 + (seed % 3) * .5, n = Math.floor((t + seed) / Lp), tl = (t + seed) - n * Lp; if (hsh(n, seed + 3) > .35) return 0; const st = hsh(n, seed + 5) * (Lp - 1); const d = tl - st; return d < 0 || d > .9 ? 0 : 1.6 * Math.sin(Math.PI * d / .9); };
/** Feliz: olho aberto com sorriso, e de vez em quando aperta os olhos ^ ^ (riso) por ~1 s. */
const riso = (t, seed) => { const Lp = 3.6 + (seed % 3) * .4, n = Math.floor((t + seed * 1.1) / Lp), tl = (t + seed * 1.1) - n * Lp; const st = hsh(n, seed + 9) * (Lp - 1.3); return hsh(n, seed + 13) < .55 && tl > st && tl < st + 1.1; };
/** Quem não recebeu rosto neste quadro (figurantes, plateia) também pisca e olha em volta. */
function vidaRostos(c, t) { for (const k of atoresDa(c)) { if (k._rt === t || !k.root.visible || k.congelado) continue; const U2 = k._ult; if (U2 && U2.extra.vivo === false) continue; rosto(k, null, t, U2 ? U2.emo : 'neutro', U2 ? { ...U2.extra, mouth: U2.extra.mouth } : {}); } }
/** Rosto com piscada automática e boca sincronizada com a fala de `quem` (tempo absoluto t). */
export function rosto(k, quem, t, emo = 'neutro', extra = {}) {
  const b = quem ? boca(quem, t) : { open: 0, round: 0 };
  const m = extra.mouth || (b.open > 0 ? { open: b.open, round: b.round, smile: extra.smile } : { open: 0, smile: extra.smile });
  k._rt = t; k._ult = { emo, extra };
  const sd = k.seed || 0, fz = k.congelado || extra.vivo === false, L0 = extra.look || [0, 0], sc = fz ? [0, 0] : sacada(t, sd, L0[0] || L0[1] ? .13 : .24);
  const brow = (extra.brow ?? 0) + (fz ? 0 : sobe(t, sd) + (b.open || 0) * 1.3 * (.55 + .45 * Math.sin(t * 4.3 + sd)));
  k.face({ emo, blink: extra.blink ?? (fz ? 0 : piscaV(t, sd)), look: [L0[0] + sc[0], L0[1] + sc[1]], brow, lagrima: extra.lagrima, olhosAbertos: extra.olhosAbertos ?? (emo === 'feliz' && extra.blink === undefined && !fz ? !riso(t, sd) : undefined), blush: extra.blush, lingua: extra.lingua, pisca1: extra.pisca1, mouth: m });
  // vida: respiração, cabeça que balança devagar e acena junto com a fala
  const H = k.headG.rotation, To = k.torsoG.rotation, V = k._viva;
  if (V && H.x === V.r[0] && H.y === V.r[1] && H.z === V.r[2] && To.x === V.r[3] && To.z === V.r[4]) { H.x -= V.d[0]; H.y -= V.d[1]; H.z -= V.d[2]; To.x -= V.d[3]; To.z -= V.d[4]; }
  if (!k.congelado && extra.vivo !== false) { const sd = (k.seed || 0) * 1.7, tl = t * (extra.lento ?? 1), fala = b.open || 0;
    const ol = sacada(tl, sd + 3, 1); const d = [.045 * Math.sin(tl * 1.05 + sd) + fala * .11 * (.6 + .4 * Math.sin(tl * 7.3 + sd)) + ol[1] * .06, .065 * Math.sin(tl * .63 + sd * 2) + fala * .06 * Math.sin(tl * 3.1 + sd) + ol[0] * .12, .04 * Math.sin(tl * .81 + sd * 3) + .03 * Math.sin(tl * 1.9 + sd), .025 * Math.sin(tl * 2.2 + sd), .016 * Math.sin(tl * .9 + sd)];
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
/** Senta um personagem num assento de altura h (topo do assento). Esconde a sombra redonda (ela ficaria no ar). */
export function sentar(k, x, z, ry = 0, h = .48) { const e = k.root.scale.x || 1; k.place(x, z, h - .28 * e, ry); k.sombra.visible = false; return k; }
/** Fala: rosto + gesto do personagem quem. */
export function fala(k, quem, t, emo = 'neutro', base = {}, amp = 1, extra = {}) { k.pose(gesto(quem, t, base, amp)); return rosto(k, quem, t, emo, extra); }
/** Efeitos de cor prontos. */
export const SEPIA = { sat: .45, tint: '#F4DDB8', vig: .45 };
export const NOITE = { tint: '#D6DEFF' };
