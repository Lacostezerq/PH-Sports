// Ato 5 (424.4 a 516.63 s): a velocidade volta ao normal, o recomeço, Bia e Augusto devagar, mensagem final.
import * as THREE from 'three';
import { smooth, lerp } from './motor/core.js';
import { luzToon, bx, rb, cyl, sph, toon } from './motor/toon.js';
import { idle, walk, run, pedal, mixPose, sentado, pisca } from './motor/char3d.js';
import { mk, cam, ator, rosto, gesto, deitar, icone, cartaz } from './lib.js';
import { AUGUSTO, BIA, LURDES, JORGE, REPORTER, povo } from './elenco.js';
import { paulista, bairro } from './sets.js';
import { cozinha, quarto, pizzaria, fachadaPizzaria, quadroParede, retratoAvo, retratoVo } from './interiores.js';
import { bicicleta, girarBike, bolsaTermica, casaZL, carro, ceu } from './mundo.js';
import { brilho, sprite, poeira } from './efeitos.js';
import { w } from './fala.js';

const comBolsa = (k) => { const b = bolsaTermica(); k.torsoG.add(b); b.position.set(0, .25, -.27); return b; };
const POR = { topo: '#F27E5E', base: '#FFD9A0' };
function vanTV() { const g = carro('#F4F1EA'); g.scale.set(1.15, 1.35, 1.2); const logo = cartaz(1.8, .5, (x, W, H) => { x.fillStyle = '#E2443A'; x.fillRect(0, 0, W, H); x.fillStyle = '#FFFFFF'; x.font = `900 ${H * .55}px Inter`; x.textAlign = 'center'; x.fillText('TV NOTÍCIA', W / 2, H * .72); }); logo.position.set(.92, .65, 0); logo.rotation.y = Math.PI / 2; g.add(logo); return g; }
/** Rua do bairro ao pôr do sol. */
function bairroPor(c, o = {}) { ceu(c, POR.topo, POR.base, { n: 5, alt: -20 }); luzToon(c, { r: 28, far: 120, pos: [-30, 10, -20], target: [0, 0, -10], ki: 2.0, hemi: 1.1, sky: '#FFE2C0', key: '#FFB070', ground: '#9A7A6A' }); return bairro(c, { ...o, semCeu: true, semLuz: true }); }

/** Laje ao pôr do sol: casa no centro (laje com topo em y≈3.45, borda da frente em z=-2), casas em volta. */
function lajeSet(c) { ceu(c, POR.topo, POR.base, { n: 5, alt: -20 }); luzToon(c, { r: 20, far: 120, pos: [-30, 14, -10], target: [0, 0, -6], ki: 2.0, hemi: 1.1, sky: '#FFE2C0', key: '#FFB070', ground: '#9A7A6A' });
  const ch = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), toon('#C9B8A0')); ch.rotation.x = -Math.PI / 2; ch.receiveShadow = true; c.add(ch);
  const casa = casaZL(2, { cor: '#F2C14E', andar: false }); casa.position.set(0, 0, -6); c.add(casa);
  [[-10, -10, .3, 5], [10, -12, -.4, 7], [-18, -26, .2, 9], [16, -28, -.2, 11], [0, -30, 0, 13], [-28, -12, .5, 15], [26, -10, -.5, 17]].forEach(([x, z, r, sd]) => { const h = casaZL(sd); h.position.set(x, 0, z); h.rotation.y = r; c.add(h); });
  return casa; }
// ---------- AA: a meia-noite em que nada acontece ----------
function AA1(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .5, hemi: .6, sky: '#6A7AC0', key: '#9FB0FF' }); const Q = quarto(c, { noite: true }); const A = ator(c, AUGUSTO, -2.2, -3.0, .4); A.root.position.y = .22; const B = brilho(c, [-2.2, .9, -3.0], { size: 1.2, n: 14, ps: .5 });
  return (t, u, C) => { const mn = w(1174); Q.rel.set(t < mn ? 23 : 0, t < mn ? 59 : 0, t < mn ? 40 + u * 4 : (t - mn) * 1); const f = smooth(mn, mn + .4, t) * (1 - smooth(mn + .8, mn + 1.6, t)); B(u, f * .8);
    A.pose(sentado({ headX: t < mn ? -10 : -4, shL: [20, 10], elL: 50, shR: [20, 10], elR: 50 })); rosto(A, null, t, t < mn + 1.6 ? 'preocupado' : 'surpreso', { look: t < mn ? [.6, -.6] : [0, .3] });
    cam(C, [[0, [-.4, 1.4, -.6]], [8.2, [-.9, 1.3, -1.3]]], [[0, [-2.0, 1.0, -3.2]], [8.2, [-2.1, 1.0, -3.2]]], u); return { tint: '#D0D8FF' }; }; }); }
function AA2(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 31 }); const A = ator(c, AUGUSTO, -1.2, 2, Math.PI); const viz = []; for (let i = 0; i < 4; i++) { const k = povo(i + 1); k.place(i % 2 ? 1.6 : -2.6, -3 - i * 3, 0, i % 2 ? Math.PI : 0); c.add(k.root); viz.push(k); }
  return (t, u, C) => { const z = 2 - u * 1.4; A.root.position.z = z; A.pose(walk(u, 1.6)); rosto(A, null, t, u > 1.5 ? 'feliz' : 'surpreso', { look: [Math.sin(u) * .3, 0] }); viz.forEach((k, i) => { k.root.position.z += 0; k.pose(walk(u + i, 1.6)); k.root.position.z = (-3 - i * 3) + (i % 2 ? -1 : 1) * u * 1.3; rosto(k, null, t, 'feliz'); });
    cam(C, [[0, [.6, 1.4, z - 3.2]]], [[0, [-1.2, 1.0, z]]], 0); return {}; }; }); }
function AA3(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 0 }); const van = vanTV(); c.add(van); const R = ator(c, REPORTER, -3.6, -8.2, Math.PI / 2);
  return (t, u, C) => { const z = -8 - u * u * 2.4; van.position.set(-2.2, 0, z); van.rotation.y = Math.PI; van.userData.rodas.forEach(w2 => w2.rotation.x = u * 3); R.root.position.x = -3.6 + Math.min(u, 1) * .8; R.pose(u < 1 ? walk(u, 1.7) : idle(u)); rosto(R, null, t, 'tedio'); R.root.visible = u < 1.1;
    cam(C, [[0, [3, 1.8, -2]], [2.9, [3, 1.8, -3]]], [[0, [-2.2, 1.0, -10]], [2.9, [-2.2, 1.0, -13]]], u); return {}; }; }); }
function AA4(t0, t1) { return mk(t0, t1, { bg: '#F27E5E' }, (c) => { lajeSet(c); const A = ator(c, AUGUSTO, -1.5, -2.25, 0); A.root.position.y = 3.1;
  const fot = new THREE.Group(); quadroParede(fot, -.17, 0, 0, .3, .37, retratoAvo); quadroParede(fot, .17, 0, 0, .3, .37, retratoVo); A.torsoG.add(fot); fot.position.set(0, .05, .36); fot.rotation.x = -.5;
  return (t, u, C) => { A.pose(sentado({ shL: [55, 10], elL: 60, shR: [55, 10], elR: 60, headX: u < 6 ? 18 : -8 })); rosto(A, null, t, u < 6 ? 'triste' : 'feliz', { look: u < 6 ? [0, .8] : [0, -.2], smile: u > 6 ? .3 : undefined });
    const a = .5 - u * .06; cam(C, [[0, [-1.5 + Math.sin(a) * 2.4, 4.0, -2.25 + Math.cos(a) * 2.4]], [11, [-1.5 + Math.sin(a) * 3.2, 4.4, -2.25 + Math.cos(a) * 3.2]]], [[0, [-1.5, 3.75, -2.25]], [11, [-1.5, 3.85, -2.25]]], u); return { tint: '#FFE8D0' }; }; }); }

// ---------- BB: o recomeço ----------
function BB1(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 13 }); const f = fachadaPizzaria(); f.position.set(-12.5, 0, -20); f.rotation.y = Math.PI / 2; c.add(f); const b = bicicleta(); b.rotation.y = Math.PI; c.add(b); const A = ator(c, AUGUSTO, 0, 0, Math.PI, .15); comBolsa(A);
  const J = ator(c, JORGE, -6.4, -20, Math.PI / 2);
  return (t, u, C) => { const chega = Math.min(u, 4.6); const z = 4 - chega * 4.6; const x = -2 - smooth(3.4, 4.6, u) * 2.4; b.position.set(x, 0, z); A.root.position.set(x, .15, z + .14); girarBike(b, chega * 4.6); A.pose(u < 4.6 ? pedal(u, 1.1) : { ...pedal(4.6), shR: [120, 30], elR: 30 }); rosto(A, null, t, 'feliz');
    J.pose({ ...idle(u), shL: [30, 30], elL: 120, shR: [30, 30], elR: 120 }); rosto(J, null, t, 'bravo', { look: [.6, 0] });
    if (u < 4.2) cam(C, [[0, [x + 2.6, 1.5, z + 3]]], [[0, [x, 1.0, z]]], 0); else cam(C, [[4.2, [x + 2.6, 1.5, z + 3]], [6.3, [-.8, 1.6, -13.5]]], [[4.2, [x, 1.0, z]], [6.3, [-5.5, 1.1, -19.5]]], u); return {}; }; }); }
function BB2(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 13 }); const f = fachadaPizzaria(); f.position.set(-12.5, 0, -20); f.rotation.y = Math.PI / 2; c.add(f); const J = ator(c, JORGE, -6.4, -20, Math.PI / 2 - .3); const A = ator(c, AUGUSTO, -4.6, -19.4, -Math.PI / 2 - .4); comBolsa(A);
  return (t, u, C) => { const sorri = t > w(1260) + .6; J.pose(gesto('jorge', t, sorri ? { ...idle(u), shR: [60, 30], elR: 60 } : { ...idle(u), shL: [30, 30], elL: 120, shR: [30, 30], elR: 120 }, .5)); rosto(J, 'jorge', t, sorri ? 'feliz' : 'bravo', { olhosAbertos: true, look: [.5, 0] });
    A.pose({ ...idle(u), shR: [150, 25], elR: 120 }); rosto(A, null, t, 'vergonha', { smile: .5, look: [-.5, 0] });
    cam(C, [[0, [-4.4, 1.45, -17.4]], [4.9, [-4.6, 1.42, -17.8]]], [[0, [-6.2, 1.2, -19.9]], [4.9, [-6.2, 1.2, -19.9]]], u); return {}; }; }); }
function BB3(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const sai = w(1280) - .2; const noite = true;
  // interior (antes) e rua (depois) no mesmo plano: interior escondido quando sai
  const g1 = new THREE.Group(); c.add(g1); luzToon(g1, { r: 8, pos: [3, 8, 6], ki: .9, hemi: .8, key: '#FFE2B8' }); const Z = pizzaria(g1); Z.rel.set(23, 2); const B = ator(g1, BIA, -3.3, -4.3, .1); const A = ator(g1, AUGUSTO, -1.2, -2.6, 2.6);
  const g2 = new THREE.Group(); c.add(g2); bairro(g2, { noite: true, seed: 21 }); const B2 = ator(g2, BIA, .3, 0, Math.PI); const A2 = ator(g2, AUGUSTO, -.3, 0, Math.PI);
  return (t, u, C) => { const fora = t > sai; g1.visible = !fora; g2.visible = fora;
    if (!fora) { B.pose({ ...idle(u), shR: [60, 10], elR: 70, shL: [60, 10], elL: 70, headX: 20 }); rosto(B, null, t, 'feliz', { look: [0, .7] }); A.pose({ ...idle(u), shL: [10, 10] }); rosto(A, null, t, 'feliz', { look: [-.5, 0] }); cam(C, [[0, [.6, 1.6, .6]], [4, [.2, 1.5, .2]]], [[0, [-2.4, 1.0, -3.6]], [4, [-2.4, 1.0, -3.6]]], u); }
    else { const v = t - sai; const z = -v * .7; B2.root.position.z = z; A2.root.position.z = z; B2.pose(walk(v, 1.1, .6)); A2.pose(walk(v, 1.1, .6, .5)); rosto(B2, null, t, 'feliz', { look: [-.6, 0] }); rosto(A2, null, t, 'feliz', { look: [.6, 0] }); cam(C, [[0, [.0, 1.5, z - 4.2]]], [[0, [0, 1.0, z]]], 0); }
    return {}; }; }); }
function casal(c, z0 = 0) { const B = ator(c, BIA, .27, z0, Math.PI); const A = ator(c, AUGUSTO, -.27, z0, Math.PI); return { A, B }; }
function BB4(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { bairro(c, { noite: true, seed: 21 }); const { A, B } = casal(c);
  return (t, u, C) => { const v = t - t0 + 4.4; const z = -v * .7; A.root.position.z = z; B.root.position.z = z; B.pose(gesto('bia', t, walk(v, 1.1, .6), .4)); A.pose(walk(v, 1.1, .6, .5)); rosto(B, 'bia', t, 'feliz', { olhosAbertos: true, look: [-.7, 0] }); rosto(A, null, t, 'feliz', { look: [.7, 0] }); B.pose({ ...walk(v, 1.1, .6), headY: -25 }); A.pose({ ...walk(v, 1.1, .6, .5), headY: 20 });
    cam(C, [[0, [.6, 1.35, z - 2.2]]], [[0, [0, 1.15, z]]], 0); return {}; }; }); }
function BB5(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { bairro(c, { noite: true, seed: 21 }); const { A, B } = casal(c);
  return (t, u, C) => { const v = t - t0 + 7.5; const z = -v * .6; A.root.position.z = z; B.root.position.z = z; const mao = smooth(2.2, 3.0, u);
    A.pose({ ...gesto('augusto', t, walk(v, 1.0, .5, .5), .2), headY: 25, shL: [0, 8 + 14 * mao], elL: 8 }); B.pose({ ...walk(v, 1.0, .5), headY: -20, shR: [0, 8 + 14 * mao], elR: 8 }); rosto(A, 'augusto', t, 'feliz', { olhosAbertos: true, look: [.7, 0], smile: .5 }); rosto(B, null, t, 'apaixonado', { look: [-.6, 0] });
    cam(C, [[0, [-.6, 1.35, z - 2.2]], [4.7, [-.2, 1.3, z - 2.6]]], [[0, [0, 1.1, z]], [4.7, [0, 1.0, z]]], u); return {}; }; }); }

// ---------- CC: mensagem final ----------
function CC1(t0, t1) { return mk(t0, t1, {}, (c) => { const p = paulista(c, { nGente: 22, carros: 12 }); const gv = w(1336) - .4; // "chega atrasado..."
  const g2 = new THREE.Group(); c.add(g2); g2.visible = false;
  return (t, u, C) => { p.gente.forEach(({ k, z0, dir, ph }) => { const z = z0 - dir * u * 4.2; k.root.position.z = ((z + 120) % 140) - 120; k.root.rotation.y = dir > 0 ? Math.PI : 0; k.pose(run(u, 3, .6, ph)); rosto(k, null, t, 'preocupado'); }); p.carros.forEach(({ k, s, z0, v }) => { k.position.z = ((z0 + s * -v * 3 * u + 220) % 220) - 200; });
    cam(C, [[0, [12, 8, 12]], [10.7, [10, 6, 2]]], [[0, [0, 1, -30]], [10.7, [0, 1, -40]]], u); return { sat: .85 }; }; }); }
function CC1b(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: 1.1 }); cozinha(c); quadroParede(c, -3.9, 2.0, -2.45, .5, .62, retratoVo, Math.PI / 2);
  const flor = new THREE.Group(); flor.add(cyl(.07, .05, .18, '#F4F1EA', 0, .09, 0, { out: .005 })); for (let i = 0; i < 3; i++) { flor.add(cyl(.006, .006, .22, '#4C9A44', (i - 1) * .04, .27, 0, { seg: 4 })); flor.add(sph(.04, ['#F28F6B', '#F2C14E', '#E8A0B8'][i], (i - 1) * .05, .39, 0, { seg: 10 })); } flor.position.set(-.6, .8, -2.6); c.add(flor);
  return (t, u, C) => { cam(C, [[0, [-1.6, 1.7, -1.0]], [3.8, [-2.4, 1.8, -1.8]]], [[0, [-3.9, 1.6, -2.8]], [3.8, [-3.9, 1.85, -2.8]]], u); return { sat: .85, vig: .4 }; }; }); }
function CC2(t0, t1) { return mk(t0, t1, { bg: '#F27E5E' }, (c) => { bairroPor(c, { seed: 6 }); const { A, B } = casal(c, 0);
  return (t, u, C) => { const z = -u * .6; A.root.position.z = z; B.root.position.z = z; A.pose({ ...walk(u, 1.0, .5, .5), shL: [0, 22], elL: 8 }); B.pose({ ...walk(u, 1.0, .5), shR: [0, 22], elR: 8 }); rosto(A, null, t, 'feliz', { look: [.5, 0] }); rosto(B, null, t, 'feliz', { look: [-.5, 0] });
    cam(C, [[0, [0, 1.4, z + 4]], [7.4, [0, 4.5, z + 12]]], [[0, [0, 1.0, z]], [7.4, [0, 1.5, z - 6]]], u); return { tint: '#FFE8D0' }; }; }); }
function CC3(t0, t1) { return mk(t0, t1, { bg: '#F27E5E' }, (c) => { lajeSet(c); const A = ator(c, AUGUSTO, -1.5, -2.25, 0); A.root.position.y = 3.1; const B = ator(c, BIA, -.9, -2.25, 0); B.root.position.y = 3.1;
  return (t, u, C) => { A.pose(sentado({ shR: [10, 30], elR: 10 })); B.pose(sentado({ shL: [10, 30], elL: 10, headZ: -10 })); rosto(A, null, t, 'feliz', { look: [.3, -.2], smile: .3 }); rosto(B, null, t, 'feliz', { look: [-.3, -.2] });
    cam(C, [[0, [-1.2, 4.0, 1.9]], [7.6, [-1.2, 4.05, 1.3]]], [[0, [-1.2, 4.05, -2.25]], [7.6, [-1.2, 4.1, -2.25]]], u); return { tint: '#FFE8D0', vig: .45 }; }; }); }
function CC4(t0, t1) { return mk(t0, t1, { bg: '#F27E5E' }, (c) => { bairroPor(c, { seed: 6 }); const A = ator(c, AUGUSTO, 0, -2, 0);
  return (t, u, C) => { const tch = smooth(.3, .8, u); A.pose({ ...idle(u), shR: [60 * tch + 90 * tch, 20 + 40 * tch], elR: 30 + Math.sin(u * 8) * 15 * tch }); rosto(A, null, t, 'feliz', { olhosAbertos: true, smile: .8 });
    cam(C, [[0, [0, 1.35, 1.2]], [6, [0, 1.3, .7]]], [[0, [0, 1.1, -2]], [6, [0, 1.1, -2]]], u); return { tint: '#FFE8D0' }; }; }); }
function CC5(t0, t1) { return mk(t0, t1, { bg: '#F27E5E' }, (c) => { bairroPor(c, { seed: 6 }); const { A, B } = casal(c, -1);
  return (t, u, C) => { const z = -1 - u * .55; A.root.position.z = z; B.root.position.z = z; A.pose({ ...walk(u, .95, .5, .5), shL: [0, 22], elL: 8, headY: 15 }); B.pose({ ...walk(u, .95, .5), shR: [0, 22], elR: 8, headY: -15 }); rosto(A, null, t, 'feliz'); rosto(B, null, t, 'feliz');
    cam(C, [[0, [0, 1.6, 3]], [5.3, [0, 2.2, 5]]], [[0, [0, 1.0, -4]], [5.3, [0, 1.2, -8]]], u); const fade = smooth(3.9, 5.2, u); return { tint: '#FFE8D0', exposure: 1 - fade }; }; }); }

export const ATO5 = [[AA1, 424.4, 432.6], [AA2, 432.6, 438.3], [AA3, 438.3, 441.2], [AA4, 441.2, 452.2], [BB1, 452.2, 458.5], [BB2, 458.5, 463.4], [BB3, 463.4, 471.8], [BB4, 471.8, 474.9], [BB5, 474.9, 479.6],
  [CC1, 479.6, 486.2], [CC1b, 486.2, 490.3], [CC2, 490.3, 497.7], [CC3, 497.7, 505.3], [CC4, 505.3, 511.3], [CC5, 511.3, 516.63]];
