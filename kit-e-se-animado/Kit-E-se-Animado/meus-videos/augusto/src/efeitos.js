// Efeitos: estilhaços de vidro, onda de choque, cone de vapor (barreira do som), poeira, linhas de velocidade,
// rastro de corrida, chuva (normal ou parada), brilho mágico, faíscas.
import * as THREE from 'three';
import { rng, clamp, smooth } from './motor/core.js';
import { ctex } from './motor/toon.js';

let SOFT = null; const soft = () => SOFT || (SOFT = ctex(128, 128, (x) => { const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.5, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); }));
export function sprite(col, size, op = 1, add = true) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: soft(), color: col, transparent: true, opacity: op, depthWrite: false, blending: add ? THREE.AdditiveBlending : THREE.NormalBlending, fog: false })); s.scale.setScalar(size); return s; }

/** Estilhaços: emissores = [{p:[x,y,z], n:[nx,ny,nz], w, h}] (retângulo na fachada). Velocidade v, câmera lenta via slow. */
export function estilhacos(c, emis, o = {}) {
  const n = o.n || 600, R = rng(o.seed || 7); const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute([0, .5, 0, -.45, -.4, 0, .5, -.3, 0], 3)); geo.computeVertexNormals();
  const mat = new THREE.MeshBasicMaterial({ color: o.cor || '#D8F0FF', transparent: true, opacity: .9, side: THREE.DoubleSide, depthWrite: false });
  const im = new THREE.InstancedMesh(geo, mat, n); im.frustumCulled = false; c.add(im);
  const P = []; for (let i = 0; i < n; i++) { const e = emis[i % emis.length]; const right = new THREE.Vector3(...e.n).cross(new THREE.Vector3(0, 1, 0)).normalize(); if (right.lengthSq() < .1) right.set(1, 0, 0);
    const p = new THREE.Vector3(...e.p).addScaledVector(right, (R() - .5) * e.w).add(new THREE.Vector3(0, (R() - .5) * e.h, 0)); const v = new THREE.Vector3(...e.n).multiplyScalar((o.v || 9) * (.4 + R())).add(new THREE.Vector3((R() - .5) * 4, R() * 3, (R() - .5) * 4));
    P.push({ p, v, s: (o.size || .25) * (.4 + R()), ax: new THREE.Vector3(R() - .5, R() - .5, R() - .5).normalize(), sp: 4 + R() * 10, d: R() * (o.spread || .25) }); }
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), S = new THREE.Vector3(), X = new THREE.Vector3();
  im.count = 0;
  return (u) => { // u: segundos desde a explosão (já com câmera lenta aplicada fora)
    if (u < 0) { im.count = 0; return; } im.count = n;
    for (let i = 0; i < n; i++) { const q = P[i], t = Math.max(0, u - q.d); X.copy(q.p).addScaledVector(q.v, t); X.y -= 4.9 * t * t; if (X.y < .02) X.y = .02; Q.setFromAxisAngle(q.ax, t * q.sp); S.setScalar(t > 0 ? q.s : 0); M.compose(X, Q, S); im.setMatrixAt(i, M); }
    im.instanceMatrix.needsUpdate = true; mat.opacity = .9 * (1 - smooth(o.fade || 6, (o.fade || 6) + 1.5, u));
  };
}
/** Onda de choque: casca esférica + anel no chão. */
export function onda(c, pos, o = {}) {
  const g = new THREE.Group(); g.position.set(...pos); c.add(g);
  const sh = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: .25, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending })); g.add(sh);
  const ringT = ctex(256, 256, (x) => { const gr = x.createRadialGradient(128, 128, 90, 128, 128, 128); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.6, 'rgba(255,255,255,.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 256, 256); });
  const ring = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ map: ringT, transparent: true, depthWrite: false, opacity: .8 })); ring.rotation.x = -Math.PI / 2; ring.position.y = .05; g.add(ring);
  return (u) => { const on = u > 0 && u < (o.dur || 1.6); g.visible = on; if (!on) return; const r = (o.r || 60) * Math.pow(u / (o.dur || 1.6), .6); sh.scale.setScalar(r); ring.scale.setScalar(r); const f = 1 - u / (o.dur || 1.6); sh.material.opacity = .28 * f; ring.material.opacity = .85 * f; };
}
/** Cone de vapor (barreira do som) preso a um objeto, apontando para trás (−z local). */
export function coneVapor(par, o = {}) {
  const t = ctex(64, 256, (x) => { const g = x.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(.25, 'rgba(255,255,255,.85)'); g.addColorStop(.6, 'rgba(255,255,255,.35)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 256); });
  const geo = new THREE.ConeGeometry(o.r || 1.1, o.l || 2.4, 48, 1, true); geo.rotateX(-Math.PI / 2); geo.translate(0, 0, -(o.l || 2.4) / 2 + .3);
  const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, side: THREE.DoubleSide, opacity: .8 })); m.position.y = o.y ?? .8; par.add(m);
  return (op) => { m.visible = op > .01; m.material.opacity = .8 * op; };
}
/** Nuvens de poeira (sprites normais). */
export function poeira(c, pts, o = {}) {
  const R = rng(o.seed || 3); const S = []; for (let i = 0; i < (o.n || 30); i++) { const p = pts[i % pts.length]; const s = sprite(o.cor || '#D9CDB8', 1, .0, false); s.position.set(p[0] + (R() - .5) * (o.sp || 3), p[1] + R() * .5, p[2] + (R() - .5) * (o.sp || 3)); s.userData = { b: s.position.clone(), d: R() * (o.spread || .6), v: new THREE.Vector3((R() - .5) * 2, R() * 1.2, (R() - .5) * 2), s: (o.size || 2) * (.6 + R() * .8) }; c.add(s); S.push(s); }
  return (u) => S.forEach((s) => { const q = s.userData, t = u - q.d; s.visible = t > 0 && t < (o.life || 4); if (!s.visible) return; const k = t / (o.life || 4); s.position.copy(q.b).addScaledVector(q.v, t * .8); s.scale.setScalar(q.s * (.4 + k * 1.4)); s.material.opacity = (o.op || .75) * Math.sin(Math.min(1, k * 4) * Math.PI / 2) * (1 - k); });
}
/** Linhas de velocidade presas à câmera (anime). */
export function linhasVel(c, cam, o = {}) {
  if (!cam.parent) c.add(cam); const g = new THREE.Group(); cam.add(g); const R = rng(o.seed || 9); const L = [];
  const mat = new THREE.MeshBasicMaterial({ color: o.cor || '#FFFFFF', transparent: true, opacity: .0, depthWrite: false, depthTest: false, fog: false });
  for (let i = 0; i < (o.n || 46); i++) { const a = R() * Math.PI * 2, r = .55 + R() * .9; const m = new THREE.Mesh(new THREE.PlaneGeometry(.012 + R() * .02, 1), mat); m.position.set(Math.cos(a) * r * 1.7, Math.sin(a) * r, -2); m.rotation.z = a + Math.PI / 2; m.renderOrder = 20; m.userData = { a, r, ph: R() }; g.add(m); L.push(m); }
  return (u, k = 1) => { mat.opacity = .55 * k; g.visible = k > .01; L.forEach((m) => { const q = m.userData; const f = ((u * (o.vel || 3) + q.ph) % 1); const rr = q.r * (1.6 - f * .8); m.position.set(Math.cos(q.a) * rr * 1.7, Math.sin(q.a) * rr, -2); m.scale.y = .3 + f * .8; }); };
}
/** Rastro de corrida: faixas coloridas atrás de um objeto (no espaço do mundo). */
export function rastro(c, cores = ['#E2443A', '#2F4E86', '#B5774C'], o = {}) {
  const g = new THREE.Group(); c.add(g); const t = ctex(256, 32, (x) => { const gr = x.createLinearGradient(0, 0, 256, 0); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(1, 'rgba(255,255,255,1)'); x.fillStyle = gr; x.fillRect(0, 0, 256, 32); });
  const F = cores.map((k, i) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, color: k, transparent: true, opacity: .7, depthWrite: false, side: THREE.DoubleSide })); m.position.y = [.95, .4, 1.2][i] ?? .8; g.add(m); return m; });
  return (x, y, z, dirx, dirz, len, op = 1) => { g.visible = op > .01; if (!g.visible) return; g.position.set(x, y, z); g.rotation.y = Math.atan2(dirx, dirz) + Math.PI / 2; F.forEach((m, i) => { m.scale.set(len, [.5, .45, .35][i] ?? .4, 1); m.position.x = -len / 2; m.material.opacity = .65 * op; }); };
}
/** Chuva: gotas instanciadas numa caixa; fator de tempo (1 normal, ~0.02 quase parada). */
export function chuva(c, box, o = {}) {
  const n = o.n || 900, R = rng(o.seed || 4); const geo = new THREE.CylinderGeometry(.008, .008, o.l || .45, 4); const mat = new THREE.MeshBasicMaterial({ color: o.cor || '#BFD8F0', transparent: true, opacity: o.op || .6, depthWrite: false });
  const im = new THREE.InstancedMesh(geo, mat, n); im.frustumCulled = false; c.add(im); const P = []; for (let i = 0; i < n; i++) P.push([box[0] + R() * (box[1] - box[0]), R(), box[4] + R() * (box[5] - box[4])]);
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, o.inc || .12)), S = new THREE.Vector3(1, 1, 1), X = new THREE.Vector3(); const H = box[3] - box[2];
  return (tt, esticar = 1) => { S.set(1, esticar, 1); for (let i = 0; i < n; i++) { const p = P[i]; const y = box[2] + ((p[1] * H - tt * (o.vel || 14)) % H + H) % H; X.set(p[0], y, p[2]); M.compose(X, Q, S); im.setMatrixAt(i, M); } im.instanceMatrix.needsUpdate = true; };
}
/** Brilho mágico (aura + faíscas subindo). */
export function brilho(c, pos, o = {}) {
  const g = new THREE.Group(); g.position.set(...pos); c.add(g); const aura = sprite(o.cor || '#FFD45A', o.size || 3, 0); g.add(aura); const R = rng(o.seed || 5); const F = [];
  for (let i = 0; i < (o.n || 40); i++) { const s = sprite(i % 3 ? (o.cor || '#FFD45A') : '#FFFFFF', (.12 + R() * .1) * (o.ps || 1), 0); s.userData = { a: R() * 6.28, r: .3 + R() * .6, ph: R(), sp: .6 + R() }; g.add(s); F.push(s); }
  return (u, k) => { g.visible = k > .01; if (!g.visible) return; aura.material.opacity = (o.aura ?? .45) * k * (.85 + .15 * Math.sin(u * 7)); aura.scale.setScalar((o.size || 3) * (.9 + .1 * Math.sin(u * 3))); F.forEach((s) => { const q = s.userData, f = (u * .5 * q.sp + q.ph) % 1; s.position.set(Math.cos(q.a + u) * q.r, f * (o.alt || 2.2) - .2, Math.sin(q.a + u) * q.r); s.material.opacity = k * Math.sin(f * Math.PI); }); };
}
/** Tremida de câmera determinística. */
export function tremor(u, amp) { return [Math.sin(u * 47) * amp + Math.sin(u * 89) * amp * .5, Math.sin(u * 53 + 1) * amp + Math.sin(u * 97) * amp * .4, 0]; }
