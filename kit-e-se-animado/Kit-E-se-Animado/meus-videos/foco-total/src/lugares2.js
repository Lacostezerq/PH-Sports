// Cenários de fora do prédio: a ladeira das lojas (carreta), a rua do bairro (bola embaixo do carro, mundo de papel),
// a escola (pátio, corredor, sala de aula) e a academia de bairro.
import * as THREE from 'three';
import { toon, tm, rb, bx, cyl, sph, ctex, toonTex, luzToon } from './motor/toon.js';
import { rng } from './motor/core.js';
import * as M from '../../../mundo/cidade/moveis.js';
import { piso as pisoTex, reboco, azulejo, asfalto, calcada, tijolo } from '../../../mundo/cidade/texturas.js';
import { letreiro, lixeira, vaso, hidrante, passaros, registra } from './vida.js';
import { poste, carroPop, supino, anilha, carteira, mesaConcreto, lampada } from './objs.js';

const rep = (t, a, b) => { const n = t.clone(); n.wrapS = n.wrapT = THREE.RepeatWrapping; n.repeat.set(a, b); n.needsUpdate = true; return n; };
const plano = (w, h, mat, x, y, z, rx = 0, ry = 0) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); m.position.set(x, y, z); m.rotation.set(rx, ry, 0); m.receiveShadow = true; return m; };
const parede = (cor, a = 1, b = 1) => toonTex(rep(reboco(cor), a, b));

/** Céu em degradê (esfera grande, sem luz). */
export function ceu(c, cores, r = 220) {
  const t = ctex(8, 512, (x) => { const g = x.createLinearGradient(0, 0, 0, 512); cores.forEach(([a, b]) => g.addColorStop(a, b)); x.fillStyle = g; x.fillRect(0, 0, 8, 512); });
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 16), new THREE.MeshBasicMaterial({ map: t, side: THREE.BackSide, fog: false, depthWrite: false })); m.renderOrder = -10; c.add(m); return m;
}
const CEUS = {
  tarde: [[0, '#5A7AB8'], [.38, '#E89A62'], [.5, '#F7C98A'], [.56, '#F2B070'], [1, '#C8946A']],
  dia: [[0, '#5EA8E8'], [.45, '#A8D6F4'], [.55, '#E4F2FA'], [1, '#CFE4EE']],
  manha: [[0, '#6CB0EA'], [.45, '#B4DCF4'], [.55, '#F4EAD2'], [1, '#D8E6EE']],
};
/** Fachada de loja (térreo com vitrine + 1 ou 2 andares em cima). Frente para +x local. */
function fachada(R, i, w, andares, cores, o = {}) {
  const g = new THREE.Group(); const H = 3.2 + andares * 2.8; const cor = cores[i % cores.length];
  g.add(tm(new THREE.BoxGeometry(4, H, w), toonTex(rep(reboco(cor), 2, 2)), { pos: [-2, H / 2, 0], out: .012 }));
  // janelas dos andares de cima
  for (let a = 0; a < andares; a++) for (let j = 0; j < Math.max(1, Math.floor(w / 2.4)); j++) { const zj = -w / 2 + (j + .5) * w / Math.max(1, Math.floor(w / 2.4));
    g.add(bx(.06, 1.2, 1.0, '#E8E2D6', .02, 3.2 + a * 2.8 + 1.2, zj)); g.add(plano(.9, 1.1, toon(R() > .5 ? '#6E8CA8' : '#8EA8BE'), .06, 3.2 + a * 2.8 + 1.2, zj, 0, Math.PI / 2)); g.add(bx(.18, .06, 1.1, '#D8D2C4', .1, 3.2 + a * 2.8 + .6, zj)); }
  let vid = null;
  if (o.casa) { // casa de bairro: muro com portão + janela
    g.add(bx(.12, 1.6, w, new THREE.Color(cor).multiplyScalar(.85).getStyle(), 1.6, .8, 0, { out: .008 }));
    const gate = new THREE.Group(); gate.position.set(1.62, 0, -w * .2); g.add(gate); for (let k = 0; k < 9; k++) gate.add(bx(.03, 1.5, .03, '#2F4A3A', 0, .75, -.6 + k * .15)); gate.add(bx(.04, .05, 1.3, '#2F4A3A', 0, 1.45, 0)); gate.add(bx(.04, .05, 1.3, '#2F4A3A', 0, .2, 0));
    g.add(bx(.06, 1.1, 1.3, '#E8E2D6', .02, 1.7, w * .2)); g.add(plano(1.2, 1.0, toon('#7E98B0'), .06, 1.7, w * .2, 0, Math.PI / 2));
    g.add(tm(new THREE.BoxGeometry(4.6, .25, w + .3), toon('#B8643C'), { pos: [-2, H + .1, 0], out: .01 }));
  } else { // loja: vitrine de vidro + letreiro + toldo
    vid = plano(w * .7, 2.0, new THREE.MeshToonMaterial({ color: '#BFD6E2', emissive: '#FFE8C0', emissiveIntensity: .25, transparent: true, opacity: .85 }), .03, 1.35, 0, 0, Math.PI / 2); g.add(vid);
    g.add(bx(.08, 2.3, .12, '#3A3A44', .04, 1.2, -w * .35)); g.add(bx(.08, 2.3, .12, '#3A3A44', .04, 1.2, w * .35)); g.add(bx(.08, .1, w * .72, '#3A3A44', .04, 2.4, 0));
    // prateleiras dentro (vistas pela vitrine)
    for (let k = 0; k < 3; k++) g.add(bx(.3, .04, w * .6, '#8A6A4A', -.4, .7 + k * .55, 0));
    for (let k = 0; k < 12; k++) g.add(bx(.12, .16 + R() * .1, .14, ['#E2443A', '#F2C230', '#3E7CC8', '#5AA84E', '#F2546E'][k % 5], -.4, .82 + (k % 3) * .55, -w * .28 + (k / 12) * w * .56));
    const l = letreiro(o.loja ?? i, w * .9); l.position.set(.15, 2.95, 0); l.rotation.y = Math.PI / 2; g.add(l);
  }
  return { g, vid, H };
}
/** Rua com calçadas dos dois lados.  o.incl: inclinação em graus (a rua sobe para -z); o.tipo 'lojas' | 'casas'; o.hora 'tarde' | 'dia' | 'manha'.
 * Tudo fica dentro de L.g (inclinado). Use L.w(x,y,z) para ter o ponto no mundo e L.g.add() para pôr pessoas/carros na rua. */
export function rua(c, o = {}) {
  const incl = (o.incl ?? 0) * Math.PI / 180, hora = o.hora || 'dia', R = rng(o.seed || 31);
  const tarde = hora === 'tarde';
  ceu(c, CEUS[hora]);
  const L = luzToon(c, { r: 26, pos: tarde ? [-14, 9, -30] : [10, 18, 8], ki: tarde ? 2.4 : 2.0, hemi: tarde ? 1.05 : 1.5, sky: tarde ? '#F4C08A' : '#EAF2FF', ground: tarde ? '#8E6A5A' : '#B9A898', key: tarde ? '#FFB070' : '#FFF4E2', far: 120, target: [0, 0, -8] });
  c.add(new THREE.AmbientLight(tarde ? '#FFC898' : '#FFFFFF', tarde ? .35 : .25));
  if (o.fog !== false) c.fog = new THREE.Fog(tarde ? '#F0C49A' : '#CFE4EE', 80, 230);
  const g = new THREE.Group(); g.rotation.x = -incl; c.add(g); // gira em volta do x: -z sobe
  const Z0 = o.z0 ?? -90, Z1 = o.z1 ?? 40, LEN = Z1 - Z0, ZM = (Z0 + Z1) / 2;
  const RW = o.largura || 8;
  g.add(plano(RW, LEN, toonTex(rep(asfalto(), RW / 4, LEN / 4)), 0, 0, ZM, -Math.PI / 2));
  // faixas: tracejado no meio + faixa de pedestre em z = 0
  for (let z = Z0; z < Z1; z += 4) g.add(plano(.14, 2, toon('#F2E6B0'), 0, .005, z, -Math.PI / 2));
  if (o.faixa !== false) for (let k = 0; k < 8; k++) g.add(plano(.55, 3, toon('#F4F1EA'), -RW / 2 + .6 + k * (RW - 1.2) / 7, .006, 0, -Math.PI / 2));
  // calçadas + meio-fio
  const CW = 3;
  for (const s of [-1, 1]) { g.add(tm(new THREE.BoxGeometry(CW, .16, LEN), toonTex(rep(calcada(), CW, LEN)), { pos: [s * (RW / 2 + CW / 2), .08, ZM] })); g.add(bx(.12, .17, LEN, '#B8B2A8', s * (RW / 2 + .06), .085, ZM)); }
  // fachadas dos dois lados
  const cores = o.tipo === 'casas' ? ['#E8C88A', '#9CC4B0', '#E8A08A', '#B8C8E8', '#F2E0B0', '#D8B8D8'] : ['#D8C4A8', '#C8B098', '#E2D2BC', '#B8A890', '#D4B89A', '#E8D8C0'];
  const vidros = []; const XF = RW / 2 + CW;
  for (const s of [-1, 1]) { let z = Z0, i = s > 0 ? 3 : 0;
    while (z < Z1) { const w = o.tipo === 'casas' ? 7 + R() * 3 : 5 + R() * 3; const f = fachada(R, i, w, o.tipo === 'casas' ? 0 : 1 + Math.floor(R() * 2), cores, { casa: o.tipo === 'casas', loja: i }); f.g.position.set(s * XF, .16, z + w / 2); f.g.rotation.y = s > 0 ? Math.PI : 0; g.add(f.g); if (f.vid) vidros.push(f.vid); z += w; i++; } }
  // postes, lixeiras, árvores, hidrante na calçada
  const postes = [];
  for (let z = Z0 + 6; z < Z1; z += 14) for (const s of [-1, 1]) { const p = poste(); p.position.set(s * (RW / 2 + .5), .16, z + (s > 0 ? 7 : 0)); p.rotation.y = s > 0 ? Math.PI : 0; g.add(p); postes.push(p); }
  for (let z = Z0 + 10; z < Z1; z += 11) { const s = R() > .5 ? 1 : -1; const a = arvore(R); a.position.set(s * (RW / 2 + 2.25), .16, z); g.add(a); const lx = lixeira(); lx.position.set(-s * (RW / 2 + .5), .16, z + 3); g.add(lx); }
  // carros estacionados
  const parados = []; for (const [s, z, cor] of o.carros || [[1, -26, '#3E7CC8'], [-1, -14, '#F4F1EA'], [1, 18, '#5AA84E'], [-1, 26, '#2A2A30']]) { const k = carroPop(cor); k.position.set(s * (RW / 2 - 1.1), 0, z); g.add(k); parados.push(k); }
  if (o.passaros !== false) passaros(c, { centro: [0, 26, -40], raio: 30, n: 6 });
  /** ponto local -> mundo */
  const w = (x, y, z) => { const v = new THREE.Vector3(x, y, z).applyMatrix4(new THREE.Matrix4().makeRotationX(-incl)); return [v.x, v.y, v.z]; };
  return { g, w, vidros, postes, parados, RW, CW, luz: L, incl };
}
function arvore(R) { const g = new THREE.Group(); g.add(cyl(.12, .16, 2.4, '#6A4A30', 0, 1.2, 0, { seg: 8, out: .006 })); for (let i = 0; i < 4; i++) { const b = sph(.8 + R() * .4, ['#4C8A3E', '#5DA04A', '#3E7A34'][i % 3], (R() - .5) * 1, 2.8 + R() * .9, (R() - .5) * 1, { seg: 10, out: .01 }); g.add(b); } g.add(bx(1, .3, 1, '#7A6A5A', 0, .15, 0)); return g; }

// ===================================================================== ESCOLA
/** Pátio da escola: chão de cimento, muro pintado, mesa de concreto no meio, árvore, cesta de basquete, bebedouro. */
export function patio(c) {
  ceu(c, CEUS.dia); luzToon(c, { r: 14, pos: [6, 12, 6], ki: 2.0, hemi: 1.5 }); c.add(new THREE.AmbientLight('#FFFFFF', .25));
  const g = new THREE.Group(); c.add(g); const R = rng(9);
  g.add(plano(30, 30, toonTex(rep(pisoTex('granilite', '#C8C2B6', '#A8A296'), 10, 10)), 0, 0, 0, -Math.PI / 2));
  // muro: metade de baixo verde, de cima creme
  for (const [x, z, ry, L] of [[0, -8, 0, 24], [-12, 0, Math.PI / 2, 16], [12, 0, -Math.PI / 2, 16]]) { g.add(plano(L, 1.2, toon('#4E9A6A'), x, .6, z, 0, ry)); g.add(plano(L, 2.6, parede('#F2E6C8', L / 3, 1), x, 2.5, z, 0, ry)); }
  // prédio da escola ao fundo com janelas
  g.add(tm(new THREE.BoxGeometry(24, 7, 1), toonTex(rep(reboco('#F2E6C8'), 6, 2)), { pos: [0, 3.5, -8.6] }));
  for (let i = 0; i < 9; i++) for (let a = 0; a < 2; a++) { g.add(plano(1.6, 1.1, toon('#7E98B0'), -10 + i * 2.5, 2.4 + a * 3, -7.98)); g.add(bx(1.7, .06, .1, '#E8E2D6', -10 + i * 2.5, 1.8 + a * 3, -7.95)); }
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(4.4, .7), toonTex(ctex(880, 140, (x) => { x.fillStyle = '#2E6A4A'; x.fillRect(0, 0, 880, 140); x.fillStyle = '#F4F1EA'; x.font = '900 70px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('ESCOLA ESTADUAL', 440, 74); }))); pl.position.set(0, 6.2, -7.97); g.add(pl);
  const mesa = mesaConcreto(); g.add(mesa);
  const arv = arvore(R); arv.position.set(-5.5, 0, -4); g.add(arv); const arv2 = arvore(R); arv2.position.set(6.5, 0, -5); g.add(arv2);
  const cesta = new THREE.Group(); cesta.position.set(9, 0, -6.5); g.add(cesta); cesta.add(cyl(.08, .08, 3.2, '#3A3A44', 0, 1.6, 0, { seg: 8 })); cesta.add(bx(1.2, .8, .05, '#F4F1EA', 0, 3.2, .3, { out: .006 })); const ar = new THREE.Mesh(new THREE.TorusGeometry(.22, .015, 6, 18), toon('#E2443A')); ar.rotation.x = Math.PI / 2; ar.position.set(0, 2.95, .6); cesta.add(ar);
  const beb = new THREE.Group(); beb.position.set(-9, 0, -7.6); g.add(beb); beb.add(rb(.6, 1.0, .4, '#C9CED6', 0, .5, 0, { out: .006 }));
  for (let i = 0; i < 6; i++) { const m = new THREE.Group(); m.position.set(-11 + i * .5, 0, -7.7); m.add(rb(.36, .4, .2, ['#E2443A', '#3E7CC8', '#F2C230', '#5AA84E'][i % 4], 0, .2, 0, { out: .005 })); g.add(m); } // mochilas encostadas no muro
  passaros(c, { centro: [0, 18, -20], raio: 14, n: 5 });
  return { g, mesa };
}
/** Corredor da escola: portas de sala, mural, piso encerado. Corredor ao longo de z (de 4 a -16), largura 3. */
export function corredor(c) {
  luzToon(c, { r: 10, pos: [3, 8, 4], ki: 1.0, hemi: 1.4 }); c.add(new THREE.AmbientLight('#FFF4E6', .45));
  const g = new THREE.Group(); c.add(g); const W = 3, L = 22, H = 3;
  g.add(plano(W, L, toonTex(rep(pisoTex('ceramica', '#D8CDB4', '#C4B89E'), 3, 22)), 0, 0, -6, -Math.PI / 2));
  for (const s of [-1, 1]) { g.add(plano(L, 1.1, toon('#3E8A6A'), s * W / 2, .55, -6, 0, -s * Math.PI / 2)); g.add(plano(L, 1.9, parede('#F2E6C8', 6, 1), s * W / 2, 2.05, -6, 0, -s * Math.PI / 2)); }
  const teto = plano(W, L, toon('#F4F0E8'), 0, H, -6, Math.PI / 2); g.add(teto); g.add(plano(W, H, parede('#F2E6C8'), 0, H / 2, -17));
  for (let i = 0; i < 4; i++) for (const s of [-1, 1]) { const z = 1 - i * 5 + (s > 0 ? 2 : 0); const p = new THREE.Group(); p.position.set(s * (W / 2 - .02), 0, z); p.rotation.y = -s * Math.PI / 2; g.add(p); p.add(bx(.9, 2.1, .04, '#8A6040', 0, 1.05, 0, { out: .006 })); p.add(bx(1.0, .08, .06, '#5E3E26', 0, 2.14, 0));
    const n = new THREE.Mesh(new THREE.PlaneGeometry(.3, .2), toonTex(ctex(150, 100, (x) => { x.fillStyle = '#F4F1EA'; x.fillRect(0, 0, 150, 100); x.fillStyle = '#2A2A30'; x.font = '900 54px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(String(i * 2 + (s > 0 ? 2 : 1)) + 'º', 75, 54); }))); n.position.set(0, 1.75, .03); p.add(n); }
  for (let i = 0; i < 3; i++) { const m = M.quadro(1.2, .8, 50 + i, 'paisagem'); m.position.set(-W / 2 + .03, 1.6, -1.5 - i * 5); m.rotation.y = Math.PI / 2; g.add(m); }
  for (let i = 0; i < 5; i++) { const l = new THREE.PointLight('#FFF2D8', 3, 6, 1.6); l.position.set(0, 2.7, 2 - i * 4.5); g.add(l); g.add(bx(1.2, .04, .2, '#FFFDF0', 0, H - .02, 2 - i * 4.5)); }
  return { g, W, L };
}
/** Sala de aula: carteiras em fileiras, quadro verde, relógio de parede (ponteiros em relogio.h/m). Frente da sala em z = -3.5. */
export function salaAula(c, o = {}) {
  luzToon(c, { r: 8, pos: [5, 7, 2], ki: 1.4, hemi: 1.4 }); c.add(new THREE.AmbientLight('#FFF4E6', .45));
  const g = new THREE.Group(); c.add(g); const W = 7, D = 7.5, H = 3;
  g.add(plano(W, D, toonTex(rep(pisoTex('ceramica', '#D8CDB4', '#C4B89E'), 7, 7)), 0, 0, 0, -Math.PI / 2));
  for (const [L, x, z, ry] of [[W, 0, -D / 2, 0], [W, 0, D / 2, Math.PI], [D, -W / 2, 0, Math.PI / 2], [D, W / 2, 0, -Math.PI / 2]]) { g.add(plano(L, 1.1, toon('#3E8A6A'), x, .55, z, 0, ry)); g.add(plano(L, 1.9, parede('#F2E6C8', 3, 1), x, 2.05, z, 0, ry)); }
  g.add(plano(W, D, toon('#F4F0E8'), 0, H, 0, Math.PI / 2));
  const q = bx(3.6, 1.3, .05, '#2E5A44', 0, 1.65, -D / 2 + .04, { out: .008 }); g.add(q); g.add(bx(3.7, .06, .12, '#9A7A5A', 0, .98, -D / 2 + .08));
  const giz = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 1.1), new THREE.MeshBasicMaterial({ transparent: true, map: ctex(1024, 330, (x) => { if (o.giz) { o.giz(x); return; } x.strokeStyle = '#F4F1EA'; x.fillStyle = '#F4F1EA'; x.font = '600 48px Caveat'; x.fillText('Física — Força e Movimento', 40, 70); x.font = '700 72px Caveat'; x.fillText('F = m · a', 80, 180); x.font = '600 40px Caveat'; x.fillText('1 kgf ≈ 9,8 N', 520, 170); x.lineWidth = 4; x.beginPath(); x.moveTo(560, 250); x.lineTo(820, 250); x.lineTo(800, 236); x.moveTo(820, 250); x.lineTo(800, 264); x.stroke(); }) }));
  giz.position.set(0, 1.65, -D / 2 + .07); g.add(giz);
  // relógio de parede
  const rel = new THREE.Group(); rel.position.set(2.2, 2.45, -D / 2 + .04); g.add(rel);
  rel.add(cyl(.22, .22, .05, '#F4F1EA', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], seg: 28, out: .006 })); const aro = new THREE.Mesh(new THREE.TorusGeometry(.22, .02, 8, 28), toon('#2A2A30')); rel.add(aro);
  for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; rel.add(bx(.012, i % 3 ? .02 : .04, .01, '#2A2A30', Math.sin(a) * .18, Math.cos(a) * .18, .03)); }
  const ph = new THREE.Group(), pm = new THREE.Group(); ph.add(bx(.016, .11, .01, '#1E1E22', 0, .05, 0)); pm.add(bx(.01, .17, .01, '#1E1E22', 0, .08, 0)); ph.position.z = .035; pm.position.z = .04; rel.add(ph, pm); rel.add(sph(.012, '#C0392B', 0, 0, .045, { seg: 8 }));
  rel.hora = (h, m) => { pm.rotation.z = -m / 60 * 6.283; ph.rotation.z = -((h % 12) + m / 60) / 12 * 6.283; };
  // carteiras (5 fileiras x 4)
  const carts = []; for (let r = 0; r < 4; r++) for (let k = 0; k < 5; k++) { const ct = carteira(); ct.position.set(-2.4 + k * 1.2, 0, -1.4 + r * 1.3); g.add(ct); carts.push(ct); const cd = M.cadeira('#4A4E58'); cd.position.set(-2.4 + k * 1.2, 0, -1.0 + r * 1.3); cd.rotation.y = Math.PI; g.add(cd); }
  // janelas na parede da direita (luz da tarde)
  for (let i = 0; i < 3; i++) { const j = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.1), new THREE.MeshBasicMaterial({ color: '#CFE6F4' })); j.position.set(W / 2 - .02, 1.9, -2 + i * 2.2); j.rotation.y = -Math.PI / 2; g.add(j); g.add(bx(.08, .06, 1.5, '#E8E2D6', W / 2 - .05, 1.33, -2 + i * 2.2)); }
  const sol = new THREE.SpotLight('#FFE8C0', 14, 12, .7, .6, 1.2); sol.position.set(W / 2 + 2, 3.5, 0); sol.target.position.set(0, 0, 0); c.add(sol, sol.target);
  const mesaProf = rb(1.2, .06, .6, '#9A6236', -1.8, .76, -D / 2 + 1.1, { out: .008 }); g.add(mesaProf); g.add(bx(1.1, .7, .5, '#7A4E2E', -1.8, .36, -D / 2 + 1.1));
  return { g, relogio: rel, carteiras: carts, D, W };
}

// ===================================================================== ACADEMIA
/** Academia de bairro: espelho grande no fundo, piso de borracha, supino no meio, halteres, cartaz FERRO FORTE, caixa de som. */
export function academia(c) {
  luzToon(c, { r: 9, pos: [3, 8, 5], ki: 1.1, hemi: 1.2, key: '#F4F6FF' }); c.add(new THREE.AmbientLight('#E8ECF8', .5));
  const g = new THREE.Group(); c.add(g); const W = 10, D = 8, H = 3.4;
  g.add(plano(W, D, toonTex(rep(ctex(64, 64, (x) => { x.fillStyle = '#26262C'; x.fillRect(0, 0, 64, 64); x.strokeStyle = '#1A1A1E'; x.lineWidth = 2; x.strokeRect(0, 0, 64, 64); for (let i = 0; i < 60; i++) { x.fillStyle = '#3A3A42'; x.fillRect((i * 37) % 64, (i * 23) % 64, 2, 2); } }), 10, 8)), 0, 0, 0, -Math.PI / 2));
  for (const [L, x, z, ry, cor] of [[D, -W / 2, 0, Math.PI / 2, '#E2443A'], [D, W / 2, 0, -Math.PI / 2, '#3A3A44'], [W, 0, D / 2, Math.PI, '#3A3A44']]) g.add(plano(L, H, parede(cor, 3, 1), x, H / 2, z, 0, ry));
  g.add(plano(W, D, toon('#2A2A30'), 0, H, 0, Math.PI / 2));
  // parede do espelho (fundo): espelho com reflexo pintado, moldura
  g.add(plano(W, H, parede('#3A3A44', 3, 1), 0, H / 2, -D / 2));
  const esp = new THREE.Mesh(new THREE.PlaneGeometry(8, 2.1), new THREE.MeshBasicMaterial({ map: ctex(1024, 270, (x) => { // reflexo pintado: a própria academia ao contrário
    const gr = x.createLinearGradient(0, 0, 0, 270); gr.addColorStop(0, '#4A5058'); gr.addColorStop(.55, '#3A3E46'); gr.addColorStop(1, '#22252A'); x.fillStyle = gr; x.fillRect(0, 0, 1024, 270);
    x.fillStyle = '#9A3A34'; x.fillRect(0, 20, 120, 250); x.fillStyle = '#E8ECF4'; for (const a of [180, 500, 820]) { x.fillRect(a, 8, 150, 10); }
    x.fillStyle = '#2A2C32'; x.fillRect(760, 120, 230, 12); x.fillRect(760, 175, 230, 12); for (let i = 0; i < 8; i++) { x.fillStyle = '#18181C'; x.beginPath(); x.arc(775 + i * 29, 110 + (i % 2) * 55, 11, 0, 7); x.fill(); }
    x.fillStyle = '#30333A'; x.fillRect(140, 150, 90, 120); x.fillStyle = '#C8D0D8'; x.fillRect(470, 150, 90, 4); x.fillStyle = '#B88A6A'; x.beginPath(); x.arc(330, 120, 26, 0, 7); x.fill(); x.fillStyle = '#3A3A44'; x.fillRect(312, 146, 36, 90); }) })); esp.position.set(0, 1.45, -D / 2 + .02); g.add(esp);
  const refl = new THREE.Mesh(new THREE.PlaneGeometry(8, 2.1), new THREE.MeshBasicMaterial({ transparent: true, opacity: .35, map: ctex(1024, 270, (x) => { const gr = x.createLinearGradient(0, 0, 1024, 270); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(.45, 'rgba(255,255,255,.5)'); gr.addColorStop(.55, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 1024, 270); }) })); refl.position.set(0, 1.45, -D / 2 + .03); g.add(refl);
  g.add(bx(8.1, .06, .06, '#9EA4AC', 0, 2.52, -D / 2 + .04)); g.add(bx(8.1, .06, .06, '#9EA4AC', 0, .38, -D / 2 + .04));
  // cartaz FERRO FORTE
  const cart = new THREE.Mesh(new THREE.PlaneGeometry(3.2, .8), toonTex(ctex(800, 200, (x) => { x.fillStyle = '#1E1E22'; x.fillRect(0, 0, 800, 200); x.fillStyle = '#F2C230'; x.font = '900 120px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('FERRO FORTE', 400, 106); })));
  cart.position.set(-W / 2 + .03, 2.6, 0); cart.rotation.y = Math.PI / 2; g.add(cart);
  // supino no meio (de frente pra câmera)
  const sup = supino(); sup.position.set(0, 0, -.5); g.add(sup);
  // anilhas empilhadas + suporte de halteres
  const rack = new THREE.Group(); rack.position.set(3.8, 0, -2.6); g.add(rack); rack.add(rb(1.8, .08, .5, '#3A3A44', 0, .5, 0)); rack.add(rb(1.8, .08, .5, '#3A3A44', 0, .9, 0)); for (const s of [-1, 1]) rack.add(bx(.06, .95, .5, '#3A3A44', s * .87, .47, 0));
  for (let i = 0; i < 8; i++) { const h = new THREE.Group(); h.position.set(-.75 + i * .21, .6 + (i % 2) * .4, 0); h.add(cyl(.012, .012, .3, '#9EA4AC', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], seg: 6 })); for (const s of [-1, 1]) h.add(cyl(.05, .05, .06, '#1E1E22', 0, 0, s * .12, { rot: [Math.PI / 2, 0, 0], seg: 12 })); rack.add(h); }
  const extras = []; for (let i = 0; i < 6; i++) { const a = anilha(['#1E1E22', '#E2443A', '#2E6FB8'][i % 3], .2); a.position.set(-3.8, .045 + i * .05, -2.8); a.rotation.set(Math.PI / 2, 0, 0); g.add(a); extras.push(a); }
  // esteira e bicicleta ergométrica no canto
  const est = new THREE.Group(); est.position.set(-3.6, 0, 1.2); est.rotation.y = Math.PI / 2; g.add(est); est.add(rb(.7, .15, 1.6, '#2A2A30', 0, .1, 0)); est.add(bx(.6, .02, 1.4, '#1A1A1E', 0, .19, 0)); for (const s of [-1, 1]) est.add(bx(.05, 1.1, .05, '#5A6270', s * .32, .7, .7)); est.add(rb(.7, .3, .1, '#3A3A44', 0, 1.25, .72));
  // caixa de som
  const som = rb(.5, .8, .4, '#1A1A1E', W / 2 - .4, 2.6, -D / 2 + .5, { out: .006 }); g.add(som); g.add(cyl(.14, .14, .02, '#3A3A44', W / 2 - .4, 2.75, -D / 2 + .71, { rot: [Math.PI / 2, 0, 0], seg: 16 }));
  for (let i = 0; i < 3; i++) { const l = new THREE.PointLight('#F2F4FF', 5, 8, 1.4); l.position.set(-3 + i * 3, 3.0, 0); g.add(l); g.add(bx(1.4, .04, .3, '#FFFFFF', -3 + i * 3, H - .02, 0)); }
  return { g, supino: sup, espelho: esp, extras, som, W, D };
}
