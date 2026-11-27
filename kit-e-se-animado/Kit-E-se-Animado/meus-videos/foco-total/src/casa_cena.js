// A casa da família com gente: onde cada um fica, celular na mão, relógio de parede, capa de toalha, espelho falso.
import * as THREE from 'three';
import { casa } from './lugares_foco.js';
import { ator, rosto, sentar, celular, naMao, soma, vivo, vivoS, sentado, clamp, lerp } from './cf.js';
import { rb, bx, cyl, sph, tm, toon, ctex, toonTex } from './motor/toon.js';
import { folhaDraw, mao } from './objetos.js';

/** Lugar da cadeira da escrivaninha (Guilherme sentado de frente pra parede da esquerda). */
export const MESA = { x: -.62, z: .25, ry: -Math.PI / 2, h: .46 };
export const CAD = [-1.1, .785, .25];
/** Monta a casa e devolve também o celular do Guilherme. */
export function montaCasa(c, o = {}) { const K = casa(c, o); const tel = celular(); c.add(tel); K.tel = tel; return K; }
/** Guilherme sentado na escrivaninha. */
export function sentaMesa(g) { sentar(g, MESA.x, MESA.z, MESA.ry, MESA.h); return g; }
/** Celular na mão direita, tela virada pro rosto. */
export function telNaMao(tel, k, lado = 'L') { naMao(tel, k, lado, [0, -.07, .06], false); k.headG.updateMatrixWorld(true); const h = k.headG.localToWorld(new THREE.Vector3(0, .2, .25)); tel.up.set(0, 1, 0); tel.lookAt(h); }
/** Câmera por cima do ombro olhando a tela do celular: ponto atrás da cabeça, na linha cabeça -> celular. */
export function ombro(k, tel, d = .35, lado = .12) { k.headG.updateMatrixWorld(true); const h = k.headG.localToWorld(new THREE.Vector3(lado, .35, -.1)); const p = tel.getWorldPosition(new THREE.Vector3()); const v = h.clone().sub(p).normalize(); return [h.x + v.x * d, h.y + v.y * d + .05, h.z + v.z * d]; }
/** Pinta a página direita do caderno (o "1" escrito até k). */
export function paginaUm(K, k = 1, brilho = 0) {
  const D = K.caderno.userData.D; const key = 'um' + Math.round(k * 20) + '|' + Math.round(brilho * 10);
  D.paint(key, (x, W, H) => { folhaDraw(x, W, H, () => { x.save(); x.beginPath(); x.rect(0, 0, W * (.15 + .3 * k), H); x.clip(); if (brilho > 0) { x.shadowColor = '#FFF2A0'; x.shadowBlur = 30 * brilho; } mao(x, '1', W * .22, H * .2, 90, '#2A3A7A'); x.restore(); x.font = '600 34px Caveat'; x.fillStyle = '#2A3A7A'; x.fillText('Lição de matemática', W * .15, H * .07); }); });
}
/** Página com as 30 questões resolvidas até k (0..1). */
export function paginaTrinta(K, k = 1) {
  const D = K.caderno.userData.D; const n = Math.round(k * 30); const key = 'q' + n;
  D.paint(key, (x, W, H) => { folhaDraw(x, W, H, () => { x.font = '600 30px Caveat'; x.fillStyle = '#2A3A7A'; for (let i = 0; i < n; i++) { const col = i % 2, lin = Math.floor(i / 2); x.fillText(`${i + 1}) ${(i * 7) % 13 + 2}x = ${((i * 7) % 13 + 2) * 3}  ✓`, W * (.15 + col * .42), H * (.1 + lin * .058)); } }); });
}
/** Relógio de parede (h, m). */
export function relogioParede(r = .16) {
  const g = new THREE.Group(); g.add(cyl(r, r, .04, '#F4F1EA', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], seg: 28, out: .005 })); g.add(tm(new THREE.TorusGeometry(r, .015, 8, 28), '#2A2A30'));
  for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; g.add(bx(.01, i % 3 ? .016 : .03, .01, '#2A2A30', Math.sin(a) * r * .82, Math.cos(a) * r * .82, .025)); }
  const ph = new THREE.Group(), pm = new THREE.Group(); ph.add(bx(.014, r * .55, .008, '#1E1E22', 0, r * .25, 0)); pm.add(bx(.009, r * .8, .008, '#1E1E22', 0, r * .38, 0)); ph.position.z = .028; pm.position.z = .032; g.add(ph, pm); g.add(sph(.01, '#C0392B', 0, 0, .036, { seg: 8 }));
  g.hora = (h, m) => { pm.rotation.z = -m / 60 * 6.283; ph.rotation.z = -((h % 12) + m / 60) / 12 * 6.283; }; g.hora(7, 0); return g;
}
/** Capa de toalha presa nas costas (balança com a corrida). */
export function capa(k, cor = '#E2443A') {
  const g = new THREE.Group(); const m = new THREE.Mesh(new THREE.PlaneGeometry(.32, .38, 4, 6), new THREE.MeshToonMaterial({ color: cor, side: THREE.DoubleSide })); m.position.set(0, -.18, 0); g.add(m);
  g.position.set(0, .3, -.13); k.torsoG.add(g); const P = m.geometry.attributes.position; const base = P.array.slice();
  g.vento = (t, v = 1) => { for (let i = 0; i < P.count; i++) { const y = base[i * 3 + 1], x = base[i * 3]; const d = (.19 - y) / .38; P.array[i * 3 + 2] = base[i * 3 + 2] - d * d * .35 * v + Math.sin(t * 12 + x * 9 + y * 6) * .025 * d * v; } P.needsUpdate = true; g.rotation.x = -.15 * v; };
  return g;
}
/** Roda de carregamento girando (sprite). */
export function carregando() {
  const tx = ctex(128, 128, (x) => { for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283; x.fillStyle = `rgba(255,255,255,${.15 + i / 10 * .85})`; x.beginPath(); x.arc(64 + Math.cos(a) * 44, 64 + Math.sin(a) * 44, 10, 0, 7); x.fill(); } });
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tx, transparent: true, depthWrite: false })); s.scale.setScalar(.22); s.renderOrder = 10; return s;
}
/** Pose sentado mexendo no celular. */
export const sentadoCel = (t, seed = 1) => sentado(soma({ shL: [64, 4], elL: 76, shR: [40, 12], elR: 70, lean: 4, headX: 26 }, vivoS(t, seed, .4)));
