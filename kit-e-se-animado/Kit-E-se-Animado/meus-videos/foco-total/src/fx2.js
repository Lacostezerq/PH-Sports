// Efeitos pequenos: objeto preso na mão, jato de água, respingos, gotas pingando, estilhaços pequenos, notas musicais.
import * as THREE from 'three';
import { sprite } from './efeitos.js';
import { rng, clamp } from './motor/core.js';
import { icone } from './lib.js';

const V = new THREE.Vector3(), Q = new THREE.Quaternion();
/** Põe obj (filho da cena) na mão do personagem, com deslocamento local da mão. rot: [x,y,z] extra. */
export function naMao(obj, k, lado = 'R', off = [0, -.08, .03], rot) {
  k.root.updateMatrixWorld(true); const h = k.hands[lado]; h.localToWorld(V.set(...off)); obj.position.copy(V);
  if (rot !== false) { h.getWorldQuaternion(Q); obj.quaternion.copy(Q); if (rot) obj.rotateX(rot[0]).rotateY(rot[1]).rotateZ(rot[2]); }
}
/** Jato de água saindo de p0 na direção d (m/s). Devolve fn(t, on). */
export function jato(c, p0, d, o = {}) {
  const R = rng(o.seed || 4), N = o.n || 60, S = [];
  for (let i = 0; i < N; i++) { const s = sprite(i % 3 ? '#BFE4FF' : '#FFFFFF', (o.tam || .05) * (.6 + R() * .8), .85, false); s.userData = { ph: R(), dx: (R() - .5) * (o.abre || .5), dy: (R() - .5) * (o.abre || .5), dz: (R() - .5) * (o.abre || .5) }; c.add(s); S.push(s); }
  return (t, on = 1) => S.forEach((s) => { const q = s.userData, a = ((t * (o.taxa || 2.2) + q.ph) % 1) * (o.vida || .45); s.visible = on > .01;
    s.position.set(p0[0] + (d[0] + q.dx) * a, p0[1] + (d[1] + q.dy) * a - 4.9 * a * a, p0[2] + (d[2] + q.dz) * a); s.material.opacity = .85 * on * (1 - a / (o.vida || .45) * .6); if (s.position.y < (o.chao ?? 0)) s.position.y = o.chao ?? 0; });
}
/** Respingo que explode de um ponto no instante t0 (gema, café, água, poeira de vidro). */
export function respingo(c, p, o = {}) {
  const R = rng(o.seed || 9), N = o.n || 26, S = [];
  for (let i = 0; i < N; i++) { const s = sprite(o.cores ? o.cores[i % o.cores.length] : (o.cor || '#F2B430'), (o.tam || .03) * (.6 + R()), 1, false); const a = R() * 6.28, e = R() * (o.cone ?? 1.2); s.userData = { v: [Math.cos(a) * Math.sin(e) * (o.v || 1.6), Math.cos(e) * (o.v || 1.6) * (o.up ?? 1), Math.sin(a) * Math.sin(e) * (o.v || 1.6)] }; c.add(s); S.push(s); }
  return (t) => { const a = t - (o.t0 || 0); S.forEach((s) => { s.visible = a > 0 && a < (o.vida || .8); if (!s.visible) return; const v = s.userData.v; s.position.set(p[0] + v[0] * a, Math.max(o.chao ?? -9, p[1] + v[1] * a - 4.9 * a * a), p[2] + v[2] * a); s.material.opacity = 1 - a / (o.vida || .8); }); };
}
/** Gotas pingando de um corpo molhado (pontos relativos ao personagem). */
export function pinga(c, k, o = {}) {
  const R = rng(o.seed || 2), N = o.n || 14, S = [];
  for (let i = 0; i < N; i++) { const s = sprite('#A8D8FF', .025, .9, false); s.userData = { ph: R(), x: (R() - .5) * .4, y: .4 + R() * .8, z: (R() - .5) * .25 }; c.add(s); S.push(s); }
  return (t) => { k.root.updateMatrixWorld(true); S.forEach((s) => { const q = s.userData, a = ((t * .9 + q.ph) % 1) * .6; k.root.localToWorld(V.set(q.x, q.y, q.z)); s.position.set(V.x, Math.max(o.chao || 0, V.y - 4.9 * a * a), V.z); s.material.opacity = .9 * (1 - a / .6); }); };
}
/** Notas musicais saindo da boca (assobio). */
export function notas(c, k) {
  const N = [0, 1, 2].map(() => { const s = icone('notas', .14); c.add(s); return s; });
  return (t, on = 1) => N.forEach((s, i) => { const a = ((t * .7 + i / 3) % 1); const p = k.headG.localToWorld(V.set(.12 + a * .2, .3 + a * .35, .3)); s.position.copy(p); s.material.opacity = on * Math.sin(a * Math.PI); s.visible = on > .01; });
}
