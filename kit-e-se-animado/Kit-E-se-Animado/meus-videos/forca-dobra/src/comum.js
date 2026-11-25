// Peças repetidas pelas cenas: escada com a lâmpada piscando, subir degraus, botijão na mão, rachaduras perto do Guilherme.
import * as THREE from 'three';
import { predio, trajetoEscada, andarPor, poseSubir, FH, XA, XB, ZA0, ZLAND } from './lugares.js';
import { botijao, sacolaPao, rachadura } from './objs.js';
import { andar, soma, vivo, treme, ofego } from './mov.js';
import { rng, smooth, clamp } from './motor/core.js';
import { registra } from './vida.js';
export { FH, XA, XB, ZA0, ZLAND };

/** Lâmpada fraca que pisca de vez em quando (0..1). */
export const piscaLuz = (t, seed = 0) => { const a = Math.sin(t * 13.1 + seed) * Math.sin(t * 3.7 + seed * 2), b = ((t * .37 + seed * .13) % 1); return b > .82 && a > .2 ? .25 : b > .8 && b < .83 ? .55 : 1; };
/** Prédio com as lâmpadas piscando. */
export function escada(c, o = {}) {
  const P = predio(c, o); const base = P.luzes.map(l => l.intensity);
  registra(c, (t) => { P.luzes.forEach((l, i) => { const k = i === P.luzes.length - 1 ? 1 : piscaLuz(t, i * 1.7); l.intensity = base[i] * k * (o.luz ?? 1); }); P.lamps.forEach((b, i) => { b.material.emissiveIntensity = piscaLuz(t, (i % 5) * 1.7); }); });
  return P;
}
/** Botijão no tamanho do desenho (os bonecos têm 1,35 m). */
export const bot = () => { const b = botijao(); b.scale.setScalar(.65); return b; };
/** Pendura um objeto na mão pela alça (o objeto fica de pé, balançando de leve). Chame piv.prumo(t) depois de k.pose(). */
export function pendura(k, obj, alca, lado = 'R', amp = 1) {
  const piv = new THREE.Group(); obj.position.set(0, -alca, 0); piv.add(obj); k.hands[lado].add(piv); piv.position.set(0, -.04, 0);
  const q = new THREE.Quaternion(), qr = new THREE.Quaternion(), e = new THREE.Euler();
  piv.prumo = (t = 0) => { k.root.updateMatrixWorld(true); k.hands[lado].getWorldQuaternion(q); k.root.getWorldQuaternion(qr); e.set(Math.sin(t * 3.1) * .06 * amp, 0, Math.sin(t * 2.3) * .05 * amp); piv.quaternion.copy(q.invert().multiply(qr).multiply(new THREE.Quaternion().setFromEuler(e))); };
  return piv;
}
/** Botijão pendurado na mão. */
export const botNaMao = (k, lado = 'R', amp = 1) => { const b = bot(); const p = pendura(k, b, .405, lado, amp); p.obj = b; return p; };
/** Sacola de pão na mão. */
export const paoNaMao = (k, lado = 'L', amp = 1) => { const s = sacolaPao(); s.scale.setScalar(.8); const p = pendura(k, s, .22, lado, amp); p.obj = s; return p; };

/** Faz o personagem subir pelo caminho P (pontos [x,y,z]) a partir de t0 com velocidade v.
 * o.pose(t, est) pode trocar a pose; o.f = passos/s; o.carga = 0..1 (pesado). Devolve o estado. */
export function subir(k, P, t, t0, v = .7, o = {}) {
  const A = k._and || (k._and = andarPor(P, t0, v)); const e = A(t, o.v ?? v);
  k.place(e.p[0], e.p[2], e.p[1], e.ry);
  const parado = t < t0 || e.fim;
  let pose = parado ? soma({ shL: [0, 9], shR: [0, 9], elL: 12, elR: 12 }, vivo(t, k.seed || 0, .7)) : e.sobe ? poseSubir(t, o.f || 1.6, o.amp ?? 1, o.carga || 0) : andar(t, { f: o.fw || 1.7, chinelo: true });
  if (!parado && o.carga) pose = soma(pose, treme(t, o.carga * .6), { lean: o.carga * 8 });
  if (o.pose) pose = o.pose(t, e, pose) || pose;
  k.pose(pose); return { ...e, parado };
}
/** Rachaduras finas que aparecem em volta de um ponto (no chão: rx = -PI/2; na parede: passe rot). Devolve fn(u). */
export function trincas(c, pts, o = {}) {
  const R = rng(o.seed || 3); const L = pts.map((p, i) => { const r = rachadura(o.tam || .6 * (.7 + R() * .6), (o.seed || 3) + i * 7, o.cor || '#3A3028'); r.position.set(p[0], p[1] + .004, p[2]); r.rotation.set(...(p[3] || [-Math.PI / 2, 0, R() * 6])); c.add(r); r.crescer(0); return r; });
  return (u) => L.forEach((r, i) => r.crescer(clamp(u * L.length - i * .6, 0, 1)));
}
export { smooth, clamp };
