// Estilo "desenho 3D": material toon de 3 tons, contorno por casco invertido, quinas arredondadas, sombra de contato.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { W, H } from './core.js';

let GRAD = null;
export function gradTex() {
  if (GRAD) return GRAD;
  const d = new Uint8Array([118, 118, 118, 255, 196, 196, 196, 255, 255, 255, 255, 255]);
  GRAD = new THREE.DataTexture(d, 3, 1, THREE.RGBAFormat); GRAD.minFilter = GRAD.magFilter = THREE.NearestFilter; GRAD.generateMipmaps = false; GRAD.needsUpdate = true; return GRAD;
}
const MCACHE = new Map();
/** Material toon (com cache por cor quando não há opções extras). */
export function toon(c, o) {
  if (!o) { const k = String(c); if (MCACHE.has(k)) return MCACHE.get(k); const m = new THREE.MeshToonMaterial({ color: c, gradientMap: gradTex() }); MCACHE.set(k, m); return m; }
  return new THREE.MeshToonMaterial({ color: c, gradientMap: gradTex(), ...o });
}

const OUT_VS = `uniform float w; uniform float minPx; uniform vec2 res;
#include <common>
#include <skinning_pars_vertex>
void main(){
  vec4 a = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vec4 b = projectionMatrix * modelViewMatrix * vec4(position + normal * w, 1.0);
  vec2 sa = a.xy / a.w, sb = b.xy / b.w;
  vec2 dpx = (sb - sa) * res * 0.5; float px = length(dpx);
  vec3 vn = normalize(normalMatrix * normal);
  vec2 dir = (projectionMatrix * vec4(vn, 0.0)).xy; dir = length(dir) > 1e-5 ? normalize(dir) : vec2(0.0, 1.0);
  if (a.w < 0.12 || b.w < 0.12) { gl_Position = b; return; }
  float want = min(max(px, minPx), 24.0);
  vec2 off = (px > 1e-4 ? dpx / px : dir) * want;
  gl_Position = vec4((sa + off * 2.0 / res) * a.w, a.z + 0.00002 * a.w, a.w);
}`;
const OUT_FS = `uniform vec3 col; uniform float op; void main(){ gl_FragColor = vec4(col, op); }`;
const OMAT = new Map();
export function outlineMat(w = .014, col = '#17131C', minPx = 1.6) {
  const k = w + col + minPx; if (OMAT.has(k)) return OMAT.get(k);
  const m = new THREE.ShaderMaterial({ uniforms: { w: { value: w }, minPx: { value: minPx }, res: { value: new THREE.Vector2(W, H) }, col: { value: new THREE.Color(col).convertSRGBToLinear() }, op: { value: 1 } }, vertexShader: OUT_VS, fragmentShader: OUT_FS, side: THREE.BackSide });
  OMAT.set(k, m); return m;
}
/** Adiciona contorno preto (casco invertido) a uma malha. */
export function outline(mesh, w = .014, col, minPx) { const o = new THREE.Mesh(mesh.geometry, outlineMat(w, col, minPx)); o.castShadow = false; o.receiveShadow = false; o.userData.isOutline = true; mesh.add(o); return mesh; }

/** Malha toon pronta: geometria + cor + contorno opcional. */
export function tm(geo, c, o = {}) {
  const m = new THREE.Mesh(geo, c && c.isMaterial ? c : toon(c)); m.castShadow = o.shadow ?? true; m.receiveShadow = true;
  if (o.out) outline(m, o.out === true ? .014 : o.out, o.outCol, o.minPx);
  if (o.pos) m.position.set(...o.pos); if (o.rot) m.rotation.set(...o.rot); return m;
}
export const rbox = (w, h, d, r = .04, seg = 3) => new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2 - .001, h / 2 - .001, d / 2 - .001));
/** Caixa arredondada toon posicionada. */
export function rb(w, h, d, c, x = 0, y = 0, z = 0, o = {}) { return tm(rbox(w, h, d, o.r ?? Math.min(.05, Math.min(w, h, d) * .18)), c, { pos: [x, y, z], ...o }); }
/** Caixa reta toon (cenário). */
export function bx(w, h, d, c, x = 0, y = 0, z = 0, o = {}) { return tm(new THREE.BoxGeometry(w, h, d), c, { pos: [x, y, z], ...o }); }
export function cyl(rt, rb_, h, c, x = 0, y = 0, z = 0, o = {}) { return tm(new THREE.CylinderGeometry(rt, rb_, h, o.seg || 24), c, { pos: [x, y, z], ...o }); }
export function sph(r, c, x = 0, y = 0, z = 0, o = {}) { return tm(new THREE.SphereGeometry(r, o.seg || 24, Math.max(12, (o.seg || 24) * .6 | 0)), c, { pos: [x, y, z], ...o }); }

/** Canvas como textura (sRGB). */
export function ctex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d'); draw(x, w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; }
/** Material de textura toon. */
export const toonTex = (tex, o = {}) => new THREE.MeshToonMaterial({ map: tex, gradientMap: gradTex(), ...o });

let BLOB = null;
/** Sombra de contato redonda e suave. */
export function blob(r = .32, op = .38) {
  if (!BLOB) BLOB = ctex(128, 128, (x) => { const g = x.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(20,16,30,1)'); g.addColorStop(.55, 'rgba(20,16,30,.55)'); g.addColorStop(1, 'rgba(20,16,30,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128); });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(r * 2, r * 2), new THREE.MeshBasicMaterial({ map: BLOB, transparent: true, opacity: op, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
  m.rotation.x = -Math.PI / 2; m.renderOrder = 1; return m;
}

/** Luz "dia de desenho": céu forte, sol suave com sombra macia. */
export function luzToon(c, o = {}) {
  const hemi = new THREE.HemisphereLight(o.sky || '#EAF2FF', o.ground || '#B9A898', o.hemi ?? 1.5); c.add(hemi);
  const k = new THREE.DirectionalLight(o.key || '#FFF4E2', o.ki ?? 2.2); k.position.set(...(o.pos || [6, 10, 7]));
  k.castShadow = o.shadow ?? true; k.shadow.mapSize.set(2048, 2048); const r = o.r || 12; Object.assign(k.shadow.camera, { left: -r, right: r, top: r, bottom: -r, near: .5, far: o.far || 60 }); k.shadow.bias = -.0004; k.shadow.normalBias = .02; k.shadow.radius = 3;
  if (o.target) { k.target.position.set(...o.target); c.add(k.target); k.position.set(o.target[0] + (o.pos || [6, 10, 7])[0], o.target[1] + (o.pos || [6, 10, 7])[1], o.target[2] + (o.pos || [6, 10, 7])[2]); }
  c.add(k); return { hemi, k };
}
/** Efeitos padrão do estilo toon (limpo, claro, legível). */
export const FX = (e = {}) => ({ toon: 1, blur: 0, bloom: .18, bloomT: .95, bloomR: .4, vig: .22, exposure: 1, sat: 1.05, ...e });
