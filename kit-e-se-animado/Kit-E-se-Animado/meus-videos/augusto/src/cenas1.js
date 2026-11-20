// Ato 1 (0 a 95.27 s): Paulista semana 8, o entregador mais lento, o avô, "devagar, meu filho", a regra.
import * as THREE from 'three';
import { smooth, lerp, clamp } from './motor/core.js';
import { luzToon, bx, rb, cyl, sph, toon, ctex } from './motor/toon.js';
import { idle, walk, run, pedal, mixPose, sentado } from './motor/char3d.js';
import { mk, cam, camT, ator, rosto, gesto, deitar, icone, cartaz } from './lib.js';
import { AUGUSTO, BIA, LURDES, JORGE, AVO, MEDICO, povo } from './elenco.js';
import { paulista, bairro } from './sets.js';
import { cozinha, quarto, pizzaria, hospital, comodo, janela, mesa, cadeira, quadroParede } from './interiores.js';
import { bicicleta, girarBike, caixaPizza, bolsaTermica, quebrarPredio, moto, celular, casaZL, relogioParede, ceu } from './mundo.js';
import { estilhacos, onda, coneVapor, poeira, linhasVel, rastro, chuva, brilho, sprite } from './efeitos.js';

const T_EXP = 6.58; // "explodem"
const segura = (k, box) => { k.torsoG.add(box); box.position.set(0, .02, .31); box.rotation.y = 0; return { shL: [42, 12], shR: [42, 12], elL: 72, elR: 72 }; };
const agachado = (u, ph = 0) => ({ bob: -.28, lean: 38, hipL: [85, 10], hipR: [85, 10], knL: 125, knR: 125, shL: [150 + Math.sin(u * 9 + ph) * 3, 25], shR: [150, 25], elL: 115, elR: 115, headX: 25 });

function quebraTudo(p, on) { p.P.forEach((b, i) => { if (on && !b.q) { quebrarPredio(b.g, i + 1); b.q = 1; } }); }
function emissores(p, zMin, zMax) { const E = []; p.P.forEach((b) => { if (b.z < zMin || b.z > zMax) return; const x = b.s * 18.4; for (let k = 0; k < 3; k++) E.push({ p: [x, 6 + k * 9, b.z], n: [-b.s, 0, 0], w: b.d * .9, h: 8 }); }); return E; }
function moverTransito(p, t) { p.carros.forEach(({ k, s, z0, v }) => { const z = ((z0 - 20 + s * -v * t) % 220 + 440) % 220 - 200 + 20; k.position.z = z; k.userData.rodas.forEach(w => w.rotation.x = t * v / .36 * -s); }); }
function andarGente(p, t, assusta = -1) { p.gente.forEach(({ k, s, z0, ph, dir }, i) => { if (assusta >= 0 && t > assusta) { k.pose(agachado(t, ph)); rosto(k, null, t, 'medo'); return; } const z = z0 - dir * t * 1.3; k.root.position.z = z; k.root.rotation.y = dir > 0 ? Math.PI : 0; k.pose(walk(t, 1.7, 1, ph)); rosto(k, null, t, 'neutro'); }); }

// ---------- A: Paulista, semana 8 ----------
function A1(t0, t1) { return mk(t0, t1, {}, (c) => { const p = paulista(c, { nGente: 18 });
  return (t, u, C) => { moverTransito(p, t); andarGente(p, t); cam(C, [[0, [10, 42, 46]], [5, [6, 24, 22]]], [[0, [0, 12, -70]], [5, [0, 6, -60]]], u); return {}; }; }); }
function A2(t0, t1) { return mk(t0, t1, {}, (c) => { const p = paulista(c, { nGente: 18 }); const E = estilhacos(c, emissores(p, -70, 10), { n: 900, v: 10, size: .35, fade: 9 }); const O = onda(c, [0, 1, -40], { r: 90, dur: 1.4 });
  const fl = sprite('#FFFFFF', 30, 0); fl.position.set(0, 6, -40); c.add(fl);
  return (t, u, C) => { const e = t - T_EXP; moverTransito(p, Math.min(t, T_EXP) + Math.max(0, e) * .25); andarGente(p, t, T_EXP + .1); quebraTudo(p, e > .05); E(e > 0 ? e * .45 : -1); O(e); fl.material.opacity = e > 0 ? Math.max(0, .9 - e * 2) : 0;
    camT(C, [[0, [-4, 2.2, 6]], [4.5, [-5, 2.6, 2]]], [[0, [12, 14, -40]], [4.5, [10, 9, -40]]], u, e > 0 ? .25 * Math.exp(-e * 1.6) : 0, t); return { flash: e > 0 && e < .25 ? .5 * (1 - e / .25) : 0 }; }; }); }
function A3(t0, t1) { return mk(t0, t1, {}, (c) => { const p = paulista(c, { nGente: 18 }); quebraTudo(p, 1); const E = estilhacos(c, emissores(p, -40, 10), { n: 700, v: 6, size: .3, fade: 12, seed: 3 });
  const al = []; p.carros.slice(0, 8).forEach(({ k }) => { const s = sprite('#FFB040', 1.4, 0); s.position.set(0, .8, 2); k.add(s); al.push(s); const s2 = sprite('#FFB040', 1.4, 0); s2.position.set(0, .8, -2); k.add(s2); al.push(s2); });
  const g2 = []; for (let i = 0; i < 5; i++) { const k = povo(i + 3, { simples: false }); k.place(14 + (i % 3) * 1.4, -6 - i * 1.6, 0, -Math.PI / 2 + .3); c.add(k.root); g2.push(k); }
  return (t, u, C) => { moverTransito(p, T_EXP); andarGente(p, t, 0); E(2.2 + u * .45); al.forEach((s, i) => s.material.opacity = (Math.floor(t * 3) + i) % 2 ? .9 : 0);
    g2.forEach((k, i) => { const d = smooth(.2 + i * .25, .9 + i * .25, u); k.pose(mixPose(walk(u, 1.6, 1, i), agachado(u, i), d)); rosto(k, null, t, d > .5 ? 'medo' : 'surpreso', { look: [-.5, -.3] }); });
    camT(C, [[0, [9, 1.4, 2]], [5.2, [8.2, 1.2, -1]]], [[0, [14, 1.0, -9]], [5.2, [14, .9, -9]]], u, .04, t); return {}; }; }); }
function A4(t0, t1) { return mk(t0, t1, {}, (c) => { const p = paulista(c, { nGente: 18, carros: 10 }); quebraTudo(p, 1); const E = estilhacos(c, emissores(p, -40, 0), { n: 500, v: 5, size: .3, fade: 30, seed: 5 });
  const A = ator(c, AUGUSTO, -4, -20); const box = caixaPizza(); const H = segura(A, box); const D = poeira(c, [[-4, .2, -26], [4, .2, -30]], { n: 18, sp: 10, size: 3, life: 7, op: .35 });
  const papeis = []; for (let i = 0; i < 10; i++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(.25, .32), new THREE.MeshToonMaterial({ color: '#F4F1EA', side: THREE.DoubleSide })); c.add(m); papeis.push(m); }
  return (t, u, C) => { moverTransito(p, T_EXP); andarGente(p, t, 0); E(8 + u * .3); D(u * .7 + .6);
    papeis.forEach((m, i) => { const f = (u * .12 + i / 10) % 1; m.position.set(-3 + i * .7 + Math.sin(u + i) * .5, 4 - f * 4, -18 - i * .6); m.rotation.set(u * 2 + i, u + i, 0); });
    A.pose({ ...H, ...idle(u, 0, .4), headY: Math.sin(u * 1.1) * 18 * smooth(1.5, 2.5, u) }); rosto(A, null, t, u < 3 ? 'surpreso' : 'medo', { look: [Math.sin(u * 1.1) * .6, 0] });
    camT(C, [[0, [-4.5, 5, 6]], [4, [-4.2, 2.0, -12]], [6.95, [-4.1, 1.45, -16.2]]], [[0, [-4, 1, -20]], [6.95, [-4, 1.1, -20]]], u, .01, t); return {}; }; }); }
function A5(t0, t1) { return mk(t0, t1, {}, (c) => { const p = paulista(c, { nGente: 6, carros: 6 }); quebraTudo(p, 1); const A = ator(c, AUGUSTO, -4, -20); const box = caixaPizza(); const H = segura(A, box);
  return (t, u, C) => { const olha = smooth(1.9, 2.4, u); A.pose({ ...H, ...idle(u, 0, .4), headX: 28 * olha }); rosto(A, null, t, olha > .5 ? 'preocupado' : 'surpreso', { look: [0, olha * .9] });
    cam(C, [[0, [-3.3, 1.12, -17.9]], [3.6, [-3.45, 1.1, -18.2]]], [[0, [-4, 1.05, -20]], [3.6, [-4, .95, -20]]], u); return {}; }; }); }

// ---------- B: barreira do som e o rebobinar ----------
function corrida(c, p) { const A = ator(c, AUGUSTO, 0, 0, Math.PI); const box = caixaPizza(); A.hands.R.add(box); box.position.set(0, -.08, .05); box.rotation.x = Math.PI / 2; const V = coneVapor(A.root, { r: .9, l: 2.2, y: .85 }); const Rr = rastro(c); return { A, V, Rr }; }
function B1(t0, t1) { return mk(t0, t1, {}, (c) => { const p = paulista(c, { nGente: 14 }); const { A, V, Rr } = corrida(c, p); const O = onda(c, [0, 1, -30], { r: 70, dur: 1.2 });
  return (t, u, C) => { moverTransito(p, t * .05); andarGente(p, 0); const z = 30 - u * 40; A.root.position.set(-4, 0, z); A.pose(run(u * .3, 2.9, 1.1)); rosto(A, null, t, 'determinado'); V(smooth(.3, .6, u)); Rr(-4, 0, z, 0, -1, 9, 1); O(u - 1.9);
    cam(C, [[0, [-.6, 1.2, z - 5.5]]], [[0, [-4, 1.0, z + .5]]], 0); return {}; }; }); }
function B2(t0, t1) { return mk(t0, t1, {}, (c) => { const p = paulista(c, { nGente: 14 }); const E = estilhacos(c, emissores(p, -60, 10), { n: 700, v: 10, size: .35, fade: 99 }); const A = ator(c, AUGUSTO, -4, -20); const box = caixaPizza(); const H = segura(A, box);
  return (t, u, C) => { const r = Math.max(0, 1.6 - u * 1.2); E(r * .5); if (u < .05) quebraTudo(p, 1); moverTransito(p, -u * 30); andarGente(p, -u * 3); A.pose({ ...H }); rosto(A, null, t, 'surpreso');
    cam(C, [[0, [-4, 2.0, -13]], [1.75, [-2, 8, 6]]], [[0, [-4, 1.1, -20]], [1.75, [0, 4, -40]]], u); return { sat: .2, tint: '#C8D8FF', exposure: 1.12, vig: .6 }; }; }); }
function B3(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c); const b = bicicleta(); b.rotation.y = Math.PI / 2; c.add(b); const A = ator(c, AUGUSTO, 0, 0, Math.PI / 2, .15); const bag = bolsaTermica(); A.torsoG.add(bag); bag.position.set(0, .25, -.27);
  const V = ator(c, { ...LURDES, camisa: '#E89A6A', saia: '#8A5A36', oculos: false, cabelo: 'coque' }, -3, -1.2, Math.PI / 2); const gota = icone('gota', .22); A.headG.add(gota); gota.position.set(-.32, .48, .1);
  return (t, u, C) => { const x = -2 + u * .35; b.position.set(x, 0, 0); A.root.position.set(x - .14 * 0, .15, 0); A.root.position.x = x - .14; girarBike(b, u * .35); A.pose(pedal(u, .45)); rosto(A, null, t, 'tedio');
    const vx = -5 + u * 1.6; V.root.position.x = vx; V.pose(walk(u, 1.2, .6)); rosto(V, null, t, 'feliz'); gota.position.y = .48 - (u * .3 % .3);
    cam(C, [[0, [-.2, 1.1, 4.4]], [3.7, [.4, 1.1, 4.2]]], [[0, [-.6, .8, 0]], [3.7, [.2, .8, 0]]], u); return {}; }; }); }

// ---------- C: Zona Leste, avó, pizzaria, moto ----------
function C1(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 3 }); const pipa = new THREE.Mesh(new THREE.PlaneGeometry(.8, .8), new THREE.MeshBasicMaterial({ color: '#E2443A', side: THREE.DoubleSide })); pipa.rotation.z = Math.PI / 4; c.add(pipa);
  const k1 = povo(2); k1.place(-5.4, -6, 0, .5); c.add(k1.root);
  return (t, u, C) => { pipa.position.set(4 + Math.sin(u) * .6, 14 + Math.sin(u * 1.3) * .5, -30); k1.pose(idle(u)); rosto(k1, null, t, 'feliz'); cam(C, [[0, [-2.5, 2.2, 10]], [2, [-2.2, 2.0, 7.5]]], [[0, [8, 2.2, -4]], [2, [8, 2.2, -6]]], u); return {}; }; }); }
function C2(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); const K = cozinha(c); K.rel.set(7, 40); const L = ator(c, LURDES, 1.0, -4.8, Math.PI);
  const vap = []; for (let i = 0; i < 6; i++) { const s = sprite('#FFFFFF', .4, .0, false); c.add(s); vap.push(s); }
  return (t, u, C) => { const vira = smooth(.4, 1.0, u); L.root.rotation.y = Math.PI * (1 - vira); L.pose({ ...idle(u), shR: [vira * 40, 20 + vira * 100], elR: 30 + vira * 20, headZ: vira * 8 * Math.sin(u * 4) }); rosto(L, null, t, 'feliz');
    vap.forEach((s, i) => { const f = (u * .5 + i / 6) % 1; s.position.set(1.0 + Math.sin(i + u) * .1, 1.3 + f * .9, -5.55); s.material.opacity = .5 * Math.sin(f * Math.PI); s.scale.setScalar(.3 + f * .4); });
    cam(C, [[0, [-.2, 1.6, -.5]], [2.35, [.2, 1.5, -1.6]]], [[0, [.8, 1.1, -4.8]], [2.35, [1, 1.15, -4.8]]], u); return {}; }; }); }
function C3(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 5 }); const loja = new THREE.Group();
  loja.add(rb(8, 4.2, .3, '#E8E2D6', 0, 2.1, -3)); loja.add(rb(.3, 4.2, 3, '#3A3A44', -4, 2.1, -1.5)); loja.add(rb(.3, 4.2, 3, '#3A3A44', 4, 2.1, -1.5)); loja.add(rb(8.3, .9, 3.2, '#3A3A44', 0, 3.75, -1.5)); loja.add(rb(8.3, .5, .4, '#3A3A44', 0, .25, 0));
  const vid = new THREE.Mesh(new THREE.PlaneGeometry(7.6, 2.8), new THREE.MeshBasicMaterial({ color: '#BFE3F2', transparent: true, opacity: .22, depthWrite: false })); vid.position.set(0, 1.9, .05); loja.add(vid);
  const chaoL = new THREE.Mesh(new THREE.PlaneGeometry(8, 3), toon('#D9D2C4')); chaoL.rotation.x = -Math.PI / 2; chaoL.position.set(0, .02, -1.5); loja.add(chaoL);
  const placa = cartaz(5, .8, (x, W, H) => { x.fillStyle = '#F2C14E'; x.fillRect(0, 0, W, H); x.fillStyle = '#1B1420'; x.font = `900 ${H * .6}px Inter`; x.textAlign = 'center'; x.fillText('MOTOS ZL', W / 2, H * .75); }); placa.position.set(0, 3.75, .22); loja.add(placa);
  const m = moto('#E2443A'); m.position.set(.2, .02, -1.4); m.rotation.y = 1.1; m.scale.setScalar(1.3); loja.add(m);
  const preco = cartaz(.9, .5, (x, W, H) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, W, H); x.strokeStyle = '#E2443A'; x.lineWidth = 12; x.strokeRect(6, 6, W - 12, H - 12); x.fillStyle = '#E2443A'; x.font = `900 ${H * .34}px Inter`; x.textAlign = 'center'; x.fillText('R$ 16.990', W / 2, H * .62); }); preco.position.set(-1.2, 1.3, -.6); loja.add(preco);
  loja.position.set(-7.4, 0, -6); loja.rotation.y = Math.PI / 2; c.add(loja);
  const b = bicicleta(); b.position.set(-4.0, 0, -4.2); c.add(b); const A = ator(c, AUGUSTO, -5.2, -6.0, -Math.PI / 2); const bag = bolsaTermica(); A.torsoG.add(bag); bag.position.set(0, .25, -.27);
  return (t, u, C) => { A.pose({ ...idle(u), shL: [8, 6], headX: 4, headZ: -6 }); rosto(A, null, t, u < 1.3 ? 'feliz' : 'triste', { look: [0, -.1] });
    cam(C, [[0, [-3.3, 1.45, -8.9]], [3.5, [-3.6, 1.4, -8.6]]], [[0, [-6.6, 1.1, -5.6]], [3.5, [-6.6, 1.1, -5.7]]], u); return {}; }; }); }

// ---------- D: bom de coração, péssimo de pontualidade ----------
function D1(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 7 }); const A = ator(c, AUGUSTO, 1, -4, .3); const V = ator(c, { ...LURDES, camisa: '#8FD3C1', saia: '#2F68AE', oculos: true }, 2.4, -4.6, -1.2); const sac = rb(.3, .35, .2, '#F2C14E', 0, 0, 0, { out: .006 }); A.hands.L.add(sac); sac.position.set(0, -.2, 0);
  const cor = icone('coracao', .45); c.add(cor);
  return (t, u, C) => { A.pose({ ...idle(u), shL: [10, 10], elL: 10, shR: [30 + Math.sin(u * 6) * 10, 70], elR: 30 }); rosto(A, null, t, 'feliz'); V.pose(idle(u, 2)); rosto(V, null, t, 'feliz');
    const k = smooth(.5, .9, u); cor.position.set(1.7, 1.62 + u * .08, -4.3); cor.scale.setScalar(.45 * k * (1 + .08 * Math.sin(u * 8)));
    cam(C, [[0, [1.6, 1.5, -.6]], [2.7, [1.7, 1.4, -1.2]]], [[0, [1.6, 1.1, -4.3]], [2.7, [1.6, 1.1, -4.3]]], u); return {}; }; }); }
function D2(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); const Z = pizzaria(c); Z.rel.set(6, 42); const J = ator(c, JORGE, .5, -2.2, .4); const A = ator(c, AUGUSTO, -3, -1.0, Math.PI / 2);
  return (t, u, C) => { J.pose({ ...idle(u), shL: [30, 30], elL: 120, shR: [30, 30], elR: 120, hipR: [Math.max(0, Math.sin(u * 14)) * 8, 0] }); rosto(J, null, t, 'bravo', { look: [-.6, 0] });
    const x = -3 + u * 1.6; A.root.position.x = Math.min(x, -1); A.pose(x < -1 ? walk(u, 2.2) : { lean: 20, headX: 15, shL: [20, 8], shR: [20, 8] }); rosto(A, null, t, 'preocupado', { mouth: { open: .45 + .25 * Math.sin(u * 12), round: .5 } });
    cam(C, [[0, [-1.4, 1.5, 2.2]]], [[0, [-.6, 1.1, -2]]], u); return {}; }; }); }
function D3(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 9 }); const casa = new THREE.Group(); casa.add(rb(6, 3.2, .3, '#9EC1E8', 0, 1.6, 0)); casa.add(rb(1.1, 2.2, .06, '#5A3A22', -1.4, 1.1, .2)); casa.add(rb(1.4, 1, .06, '#BFE3F2', 1.4, 1.7, .2, { r: .02 })); casa.position.set(2.5, 0, -10.4); c.add(casa);
  const K = ator(c, { camisa: '#2FB5A8', calca: '#4A3A2A', cabelo: 'tigela', corCabelo: '#2A1E1A', pele: '#E3B28E', manga: 'longa' }, 1.1, -9.8, 0); const A = ator(c, AUGUSTO, 1.1, -8.5, Math.PI); const box = caixaPizza(); const H = segura(A, box);
  return (t, u, C) => { const rel = u < .9; K.pose(rel ? { ...idle(u), shL: [80, 25], elL: 95, headX: 18, headY: 10 } : { ...idle(u), shL: [10, 8], shR: [25, 25], elR: 30 }); rosto(K, null, t, 'bravo', { look: rel ? [-.4, .9] : [0, 0] });
    A.pose({ ...H, ...idle(u) }); rosto(A, null, t, 'vergonha', { smile: .2 });
    cam(C, [[0, [3.6, 1.4, -8.2]], [1.6, [3.4, 1.35, -8.4]]], [[0, [1.0, 1.05, -9.2]], [1.6, [1.0, 1.05, -9.2]]], u); return {}; }; }); }
function D4(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); const K = cozinha(c); K.rel.set(11, 50);
  const bolo = new THREE.Group(); bolo.add(cyl(.32, .34, .22, '#8A5A36', 0, .91, 0, { out: .008 })); bolo.add(cyl(.33, .33, .05, '#F4F1EA', 0, 1.03, 0)); for (let i = 0; i < 5; i++) { const a = i / 5 * 6.28; bolo.add(cyl(.012, .012, .06, '#F28F6B', Math.cos(a) * .18, 1.07, Math.sin(a) * .18, { seg: 6 })); } bolo.position.set(-.6, 0, -2.6); c.add(bolo);
  const conv = []; [[LURDES, -1.6, -2.6, Math.PI / 2], [{ ...JORGE }, -.6, -3.5, 0], [BIA, .4, -2.6, -Math.PI / 2]].forEach(([d, x, z, r], i) => { const k = ator(c, d, x, z, r); const ch = new THREE.Mesh(new THREE.ConeGeometry(.12, .3, 16), toon(['#F2546E', '#F2C14E', '#3E7CC8'][i])); ch.position.set(0, .62, 0); k.headG.add(ch); conv.push(k); });
  const A = ator(c, AUGUSTO, -4, -1.2, Math.PI / 2);
  return (t, u, C) => { conv.forEach((k, i) => { k.pose(i === 1 ? idle(u * .3) : sentado({ headX: 12 + Math.sin(u + i) * 3 })); rosto(k, null, t, u < 1 ? 'sono' : 'surpreso', { look: [-.8, 0] }); });
    A.root.position.x = -4 + Math.min(1, u) * 1.2; A.pose(u < 1 ? walk(u, 2) : { ...idle(u), shR: [40, 60], elR: 40 }); rosto(A, null, t, 'vergonha', { smile: .3 });
    cam(C, [[0, [.5, 1.8, 1.5]]], [[0, [-1.6, 1.0, -2.6]]], u); return {}; }; }); }
function D5(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: 1.4 }); const K = cozinha(c); const A = ator(c, AUGUSTO, -3.0, -3.2, -Math.PI / 2);
  return (t, u, C) => { A.pose({ ...idle(u, 0, .5), headX: 4 }); rosto(A, null, t, 'triste', { look: [.1, -.2] }); cam(C, [[0, [-1.2, 1.55, -1.9]], [2.4, [-1.9, 1.75, -2.4]]], [[0, [-3.4, 1.5, -3.2]], [2.4, [-3.7, 1.75, -3.2]]], u); return { sat: lerp(1, .7, smooth(0, 2.4, u)), vig: .35 }; }; }); }

// ---------- E: o avô (flashback frio) ----------
function E1(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .6, hemi: .65, sky: '#6A7AC0', key: '#9FB0FF' }); const Q = quarto(c, { noite: true }); Q.rel.set(3, 12);
  const A = ator(c, AUGUSTO, -2.2, -3.4); deitar(A, -2.2, .62, -3.4, .25); const cel = celular(.1, .2); cel.position.set(-1.3, .8, -4.9); cel.rotation.x = -Math.PI / 2; c.add(cel); const L = new THREE.PointLight('#AFC8FF', 0, 2); L.position.set(-1.3, 1, -4.9); c.add(L);
  return (t, u, C) => { const on = Math.floor(u * 4) % 2; cel.paint('c' + on, (x, W, H) => { x.fillStyle = on ? '#2F7DC4' : '#1B2550'; x.fillRect(0, 0, W, H); x.fillStyle = '#FFFFFF'; x.font = '700 40px Inter'; x.textAlign = 'center'; x.fillText('VÓ', W / 2, H * .35); x.font = '600 26px Inter'; x.fillText('chamando...', W / 2, H * .45); }); cel.position.x = -1.3 + (on ? .01 : -.01); L.intensity = on ? 2 : .5;
    rosto(A, null, t, 'sono', { blink: u < 1.4 ? 1 : 0 }); A.pose({ headY: u > 1.4 ? 25 : 0 });
    cam(C, [[0, [-.7, 1.9, -3.0]], [2.7, [-.9, 1.7, -3.4]]], [[0, [-2.0, .75, -4.4]], [2.7, [-1.7, .8, -4.6]]], u); return { tint: '#C8D4FF' }; }; }); }
function E2(t0, t1) { return mk(t0, t1, { bg: '#121A38' }, (c) => { bairro(c, { noite: true, seed: 2 }); const Ch = chuva(c, [-12, 12, 0, 12, -40, 8], { n: 1400, vel: 16 }); const b = bicicleta(); b.rotation.y = Math.PI; c.add(b); const A = ator(c, AUGUSTO, 0, 0, Math.PI, .15);
  const hosp = cartaz(4, 1, (x, W, H) => { x.fillStyle = '#E2443A'; x.fillRect(0, 0, W, H); x.fillStyle = '#FFFFFF'; x.font = `900 ${H * .6}px Inter`; x.textAlign = 'center'; x.fillText('+ HOSPITAL', W / 2, H * .74); }, { basic: true }); hosp.position.set(-3, 6, -60); c.add(hosp);
  return (t, u, C) => { Ch(t); const z = 2 - u * 3; b.position.set(0, 0, z); A.root.position.set(0, .15, z + .14); girarBike(b, u * 3); A.pose(pedal(u, 1.6)); rosto(A, null, t, 'choro');
    cam(C, [[0, [1.6, 1.3, z + 3.2 + u * 3]], [3.1, [1.2, 1.2, -5.8]]], [[0, [0, .9, -2]], [3.1, [0, .9, -9]]], u); return { tint: '#B8C8FF', sat: .8 }; }; }); }
function E3(t0, t1) { return mk(t0, t1, { bg: '#2A3450' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .5, hemi: .6, sky: '#8A9AD0' }); const Hh = hospital(c, { noite: true, lencol: '#DDE6EC' }); Hh.rel.set(4, 5);
  const A = ator(c, AUGUSTO, 1.2, -1.2, Math.PI + .3); const M = ator(c, MEDICO, .2, -1.7, Math.PI * .75);
  return (t, u, C) => { A.pose({ ...idle(u, 0, .3), headX: 10 }); rosto(A, null, t, 'choro', { look: [0, .3] }); M.pose({ ...idle(u), shR: [60, 30], elR: 40 }); rosto(M, null, t, 'triste');
    cam(C, [[0, [2.7, 1.55, 1.2]], [2.9, [2.5, 1.5, .8]]], [[0, [-.5, .95, -3.4]], [2.9, [-.5, .95, -3.5]]], u); return { tint: '#B8C8FF', sat: .6, vig: .5 }; }; }); }
function E4(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: 1.2 }); cozinha(c);
  return (t, u, C) => { cam(C, [[0, [-2.6, 2.0, -3.2]], [2.5, [-3.2, 2.0, -3.2]]], [[0, [-3.9, 2.0, -3.2]], [2.5, [-3.9, 2.0, -3.2]]], u); return { vig: .55, sat: .8 }; }; }); }

// ---------- F: "Devagar, meu filho" ----------
function F1(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); const K = cozinha(c); K.rel.set(17, 52); const L = ator(c, LURDES, 1.6, -4.5, Math.PI); const A = ator(c, AUGUSTO, 3.4, -1.5, -Math.PI / 2); const bag = bolsaTermica(); A.torsoG.add(bag); bag.position.set(0, .25, -.27);
  return (t, u, C) => { const x = 3.4 - u * 3.2; A.root.position.x = x; A.pose(run(u, 2.6, .8)); rosto(A, null, t, 'determinado'); const vira = smooth(.6, 1.3, u); L.root.rotation.y = Math.PI * (1 - vira) + vira * .5; L.pose(idle(u)); rosto(L, 'lurdes', t, 'neutro', { look: [-.6, 0] });
    cam(C, [[0, [.6, 1.6, 2.4]], [2, [.4, 1.55, 2.0]]], [[0, [1.2, 1.0, -3.2]], [2, [1.0, 1.0, -3.2]]], u); return {}; }; }); }
function F2(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); cozinha(c); const L = ator(c, LURDES, 1.0, -4.6, .4);
  return (t, u, C) => { L.pose(gesto('lurdes', t, { ...idle(u), shL: [20, 15], elL: 60 }, .8)); rosto(L, 'lurdes', t, 'feliz', { olhosAbertos: true, look: [-.5, 0] });
    cam(C, [[0, [.3, 1.35, -3.0]], [3.2, [.4, 1.3, -3.25]]], [[0, [1.0, 1.15, -4.6]], [3.2, [1.0, 1.15, -4.6]]], u); return {}; }; }); }
function F3(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); const K = cozinha(c); const L = ator(c, LURDES, .2, -3.4, -1.2); const A = ator(c, AUGUSTO, -3.2, -1.4, -Math.PI / 2); const bag = bolsaTermica(); A.torsoG.add(bag); bag.position.set(0, .25, -.27);
  return (t, u, C) => { const sai = smooth(1.6, 2.6, u); A.root.position.x = -3.2 - sai * 1.6; A.root.rotation.y = -Math.PI / 2 - (1 - sai) * .2; A.pose(u < 1.6 ? { ...idle(u), shR: [40 + Math.sin(u * 9) * 15, 80], elR: 30 } : walk(u, 2.2)); rosto(A, null, t, 'feliz'); A.root.visible = sai < .98;
    K.porta.rotation.y = Math.PI / 2 - .9 * smooth(1.4, 1.8, u) * (1 - smooth(3.0, 3.4, u));
    L.pose({ ...idle(u), headZ: u > 3.3 ? Math.sin(u * 5) * 8 : 0, headY: u > 3.3 ? Math.sin(u * 4) * 14 : 0, shL: [25, 15], elL: 80, shR: [25, 15], elR: 80 }); rosto(L, null, t, u > 3.3 ? 'feliz' : 'neutro', { look: [-.6, 0] });
    cam(C, [[0, [1.8, 1.6, .8]], [5.4, [1.3, 1.5, .2]]], [[0, [-2.2, 1.0, -2.4]], [5.4, [-1.6, 1.0, -2.6]]], u); return {}; }; }); }

// ---------- G: meia-noite de domingo e a regra ----------
function G1(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .35, hemi: .45, sky: '#6A7AC0', key: '#9FB0FF' }); const Q = quarto(c, { noite: true }); const A = ator(c, AUGUSTO, -2.2, -3.4); deitar(A, -2.2, .62, -3.4, .25);
  const B = brilho(c, [-2.2, .7, -4.2], { size: 2.2, n: 40, alt: 1.4 }); const L = new THREE.PointLight('#FFD45A', 0, 5, 1.4); L.position.set(-2.2, 1.4, -4); c.add(L);
  return (t, u, C) => { const s = t < 75.1 ? 59 : 0; const h = t < 75.1 ? 23 : 0; Q.rel.set(h, s, (t - 73.64) * 20 % 60); const g = smooth(76.3, 77.0, t); B(u, g); L.intensity = 1.1 * g * (.8 + .2 * Math.sin(u * 8)); rosto(A, null, t, 'sono', { blink: 1 });
    cam(C, [[0, [.8, 2.2, -.4]], [1.5, [1.2, 2.4, -1.0]], [1.6, [-.6, 1.6, -2.0]], [3.95, [-.9, 1.4, -2.6]]], [[0, [1.6, 2.3, -5.9]], [1.5, [1.6, 2.3, -5.9]], [1.6, [-2.2, .7, -4.0]], [3.95, [-2.2, .7, -4.2]]], u); return { bloom: .3 * g + .18, bloomT: .85 }; }; }); }
function G2(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .4, hemi: .5, sky: '#6A7AC0', key: '#9FB0FF' }); quarto(c, { noite: true }); const A = ator(c, AUGUSTO, -1.2, -2.6, .3); const B = brilho(c, [-1.2, .8, -2.6], { size: 1.8, n: 24, ps: .5 });
  return (t, u, C) => { B(u, .5 + .2 * Math.sin(u * 3)); const ol = smooth(1, 1.6, u); A.pose({ ...idle(u), shL: [70 * ol, 20], elL: 70 * ol, shR: [70 * ol, 20], elR: 70 * ol, headX: 22 * ol }); rosto(A, null, t, ol > .5 ? 'surpreso' : 'neutro', { look: [0, ol * .9] });
    cam(C, [[0, [-.4, 1.4, -.4]], [5.6, [-.7, 1.35, -1.1]]], [[0, [-1.2, 1.05, -2.6]], [5.6, [-1.2, 1.0, -2.6]]], u); return { bloom: .4, bloomT: .75 }; }; }); }
function G3(t0, t1) { return mk(t0, t1, {}, (c, s) => { bairro(c, { seed: 11 }); const A = ator(c, AUGUSTO, 0, 0, Math.PI); const LV = linhasVel(c, s.camera, {});
  return (t, u, C) => { // velocidade por tempo: 5 → 10 (87.7) → 20 (88.7) → 40 (90.1)
    const v = t < 87.7 ? 1.4 : t < 88.7 ? 2.8 : t < 90.1 ? 5.6 : 11; const d = (t - t0) * 1.4 + Math.max(0, t - 87.7) * 1.4 + Math.max(0, t - 88.7) * 2.8 + Math.max(0, t - 90.1) * 5.4;
    A.root.position.z = -d; const k = t < 88.7 ? 0 : t < 90.1 ? .5 : 1; A.pose(k === 0 ? walk(t, t < 87.7 ? 1.7 : 2.2) : k === .5 ? run(t, 2.4, .7) : run(t, 3.2, 1)); rosto(A, null, t, k < 1 ? 'feliz' : 'surpreso');
    cam(C, [[0, [3.2, 1.3, -d + 1.5]]], [[0, [0, .9, -d - .5]]], 0); LV(t, t > 90.1 ? .8 : t > 88.7 ? .35 : 0); return {}; }; }); }
function G4(t0, t1) { return mk(t0, t1, { bg: '#1B1E3A' }, (c) => { c.add(new THREE.HemisphereLight('#EAF2FF', '#3A3050', 1.4)); const k = new THREE.DirectionalLight('#FFF4E2', 1.6); k.position.set(3, 6, 5); c.add(k);
  const A = ator(c, AUGUSTO, 0, 0); A.sombra.visible = false; const gota = icone('gota', .25); A.headG.add(gota); gota.position.set(.33, .52, .05);
  const nums = [5, 10, 20, 40, 80, 160, 320, 640, '1.280', '2.560', '5.120', '10.240']; const N = nums.map((n, i) => { const m = cartaz(1.6, .7, (x, W, H) => { x.fillStyle = i < 4 ? '#F2C14E' : i < 8 ? '#F28F6B' : '#E2443A'; x.beginPath(); x.roundRect(4, 4, W - 8, H - 8, 40); x.fill(); x.lineWidth = 10; x.strokeStyle = '#1B1420'; x.stroke(); x.fillStyle = '#1B1420'; let fs = H * .5; x.font = `900 ${fs}px Inter`; const tw = x.measureText(n + ' km/h').width; if (tw > W * .84) { fs *= W * .84 / tw; x.font = `900 ${fs}px Inter`; } x.textAlign = 'center'; x.fillText(n + ' km/h', W / 2, H * .5 + fs * .36); }, { basic: true, transp: true }); c.add(m); return m; });
  return (t, u, C) => { N.forEach((m, i) => { const a = .25 + i * .3; const p = smooth(a, a + .25, u); m.visible = p > .01; const ang = i * 2.4, r = 1.4 + i * .16; m.position.set(Math.cos(ang) * r * 1.3, 1.5 + Math.sin(ang) * r * .5, -1.2 - i * .35); m.scale.setScalar(p * (.55 + i * .03)); m.lookAt(C.position); });
    A.pose({ ...idle(u), headX: -14, shL: [10, 15], shR: [10, 15] }); rosto(A, null, t, 'medo', { look: [Math.sin(u * 2) * .6, -.6] }); gota.position.y = .52 - (u * .25 % .25);
    cam(C, [[0, [0, 1.5, 3.2]], [4.3, [0, 1.8, 7]]], [[0, [0, 1.3, 0]], [4.3, [0, 1.8, -1]]], u); return { vig: .35 }; }; }); }

export const ATO1 = [[A1, 0, 5.0], [A2, 5.0, 9.5], [A3, 9.5, 14.7], [A4, 14.7, 21.65], [A5, 21.65, 25.3], [B1, 25.3, 28.45], [B2, 28.45, 30.2], [B3, 30.2, 33.9],
  [C1, 33.9, 35.9], [C2, 35.9, 38.25], [C3, 38.25, 41.72], [D1, 41.72, 44.4], [D2, 44.4, 45.7], [D3, 45.7, 47.3], [D4, 47.3, 49.4], [D5, 49.4, 51.8],
  [E1, 51.8, 54.5], [E2, 54.5, 57.6], [E3, 57.6, 60.54], [E4, 60.54, 63.0], [F1, 63.0, 65.0], [F2, 65.0, 68.2], [F3, 68.2, 73.64], [G1, 73.64, 77.6], [G2, 77.6, 83.25], [G3, 83.25, 90.98], [G4, 90.98, 95.27]];
