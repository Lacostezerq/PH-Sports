// Atalhos das cenas deste vídeo.
import * as THREE from 'three';
import { cria } from './gente.js';
import { cam as camLib } from './lib.js';
export { mk, rosto, fala, gesto, sentar, deitar, icone } from './lib.js';
import { tremor } from './efeitos.js';
export { smooth, lerp, clamp, easeOut, easeIn, easeIO, keys, rng } from './motor/core.js';
export { walk, run, idle, sentado, mixPose } from './motor/char3d.js';
/** Câmera viva. P e Q podem ser um ponto [x,y,z] ou chaves [[u,[x,y,z]],...] (u de 0 a 1 dentro do plano). */
export const cam = (c, P, Q, u, roll = 0, viva) => camLib(c, typeof P[0] === 'number' ? [[0, P]] : P, typeof Q[0] === 'number' ? [[0, Q]] : Q, u, roll, viva);
/** Personagem na cena (com o capuz quando é o Guilherme). */
export function ator(c, def, x = 0, z = 0, ry = 0, y = 0) { const k = cria(def); k.place(x, z, y, ry); c.add(k.root); k.root.userData.ator = k; k.seed = Math.abs((x * 13 + z * 7) | 0) % 9; return k; }
/** Posição de um pedaço do personagem no mundo. */
export const pw = (o, dx = 0, dy = 0, dz = 0) => { const v = o.localToWorld(new THREE.Vector3(dx, dy, dz)); return [v.x, v.y, v.z]; };
export { THREE };
/** Câmera viva com tremor (amp em metros). */
export function camT(c, P, Q, u, amp = 0, uu, viva) { cam(c, P, Q, u, 0, viva); if (amp > 0) { const d = tremor(uu ?? u * 3.7, amp); c.position.x += d[0]; c.position.y += d[1]; } }
