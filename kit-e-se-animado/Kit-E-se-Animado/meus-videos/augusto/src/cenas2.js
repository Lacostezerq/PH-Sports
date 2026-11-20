// Ato 2 (95.27 a 188.5 s): semanas 1 a 5, Seu Jorge, Radial Leste, a Bia, câmera lenta, like.
import * as THREE from 'three';
import { smooth, lerp, clamp } from './motor/core.js';
import { luzToon, bx, rb, cyl, sph, toon, ctex } from './motor/toon.js';
import { idle, walk, run, pedal, mixPose, sentado } from './motor/char3d.js';
import { mk, cam, camT, ator, rosto, gesto, icone, cartaz } from './lib.js';
import { AUGUSTO, BIA, LURDES, JORGE, povo } from './elenco.js';
import { paulista, bairro } from './sets.js';
import { cozinha, pizzaria, fachadaPizzaria, mesa, cadeira } from './interiores.js';
import { bicicleta, girarBike, caixaPizza, bolsaTermica, celular, carro, onibus, placaRua } from './mundo.js';
import { coneVapor, poeira, linhasVel, rastro, chuva, brilho, sprite } from './efeitos.js';

const segura = (k, box) => { k.torsoG.add(box); box.position.set(0, .02, .31); return { shL: [42, 12], shR: [42, 12], elL: 72, elR: 72 }; };
const naMao = (k, box) => { k.hands.R.add(box); box.position.set(0, -.07, .06); box.rotation.set(Math.PI / 2, 0, 0); };
const comBolsa = (k) => { const b = bolsaTermica(); k.torsoG.add(b); b.position.set(0, .25, -.27); return b; };
const telaVideo = (views) => (x, W, H) => { x.fillStyle = '#101018'; x.fillRect(0, 0, W, H); x.fillStyle = '#7EC4F0'; x.fillRect(0, H * .12, W, H * .42); x.fillStyle = '#56585F'; x.fillRect(0, H * .4, W, H * .14);
  x.fillStyle = '#E2443A'; x.beginPath(); x.arc(W * .55, H * .32, W * .06, 0, 7); x.fill(); x.fillStyle = '#B5774C'; x.beginPath(); x.arc(W * .55, H * .25, W * .05, 0, 7); x.fill(); x.fillStyle = 'rgba(255,255,255,.7)'; x.fillRect(W * .1, H * .3, W * .38, 6); x.fillRect(W * .15, H * .34, W * .3, 6);
  x.fillStyle = '#FFFFFF'; x.font = '800 21px Inter'; x.textAlign = 'left'; x.fillText('ENTREGADOR MAIS', 18, H * .64); x.fillText('RÁPIDO QUE CARRO?!', 18, H * .69); x.fillStyle = '#F2546E'; x.font = '900 38px Inter'; x.fillText('♥ ' + views, 20, H * .8); x.fillStyle = '#AAB'; x.font = '600 24px Inter'; x.fillText('visualizações', 20, H * .85); };

// ---------- H: semana 1 ----------
function H1(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); const Z = pizzaria(c); const J = ator(c, JORGE, -.4, -4.4); const A = ator(c, AUGUSTO, -4.6, -1.2, Math.PI / 2); comBolsa(A);
  return (t, u, C) => { Z.rel.set(17, t < 97.5 ? 59 : 0, (t * 20) % 60); const x = Math.min(-1.6, -4.6 + u * 1.5); A.root.position.x = x; A.pose(x < -1.61 ? walk(u, 1.9) : { ...idle(u), shR: [40, 20], elR: 30, lean: -4 }); rosto(A, null, t, 'feliz');
    const ch = smooth(2.2, 2.6, u); J.pose({ ...idle(u), shL: [15 * ch, 10], shR: [15 * ch, 10], lean: -5 * ch }); rosto(J, null, t, ch > .5 ? 'surpreso' : 'neutro', { mouth: { open: .55 * ch, round: .8 }, look: [-.5, 0] });
    cam(C, [[0, [-1.6, 1.6, 2.6]], [4.6, [-1.0, 1.5, 1.8]]], [[0, [-1.6, 1.0, -2.6]], [4.6, [-1.0, 1.0, -2.8]]], u); return {}; }; }); }
function H2(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); pizzaria(c); const J = ator(c, JORGE, -.6, -2.4, -1.0); const A = ator(c, AUGUSTO, -1.6, -2.0, 1.2); comBolsa(A);
  return (t, u, C) => { const mao = smooth(.4, .8, u) * (1 - smooth(2.2, 2.6, u)); J.pose(gesto('jorge', t, { ...idle(u), shR: [80 * mao, 20 + 30 * mao], elR: 40 * mao, lean: 6 * mao }, mao > .1 ? 0 : 1)); rosto(J, 'jorge', t, 'desconfiado', { look: [-.6, 0] });
    A.pose({ ...idle(u), headX: -4 }); rosto(A, null, t, u < 2.5 ? 'feliz' : 'vergonha', { look: [.6, 0] });
    cam(C, [[0, [-.6, 1.5, -.2]], [4.6, [-.7, 1.45, -.5]]], [[0, [-1.0, 1.15, -2.3]], [4.6, [-1.0, 1.15, -2.3]]], u); return {}; }; }); }

// ---------- I: semana 2 (entrega correndo) ----------
function I1(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 13 }); const fach = fachadaPizzaria(); fach.position.set(-12.5, 0, -6); fach.rotation.y = Math.PI / 2; c.add(fach);
  const b = bicicleta(); c.add(b); const A = ator(c, AUGUSTO, -5.6, -6, Math.PI / 2); comBolsa(A);
  return (t, u, C) => { const larga = u > .9; b.position.set(-6.6, larga ? 0 : 0, -5.3); b.rotation.set(0, Math.PI / 2, larga ? lerp(0, -.35, smooth(.9, 1.3, u)) : 0); const x = -5.6 + Math.max(0, u - 1.3) * 3.5; A.root.position.x = x; A.pose(u < 1.3 ? { ...idle(u), shL: [20, 20], elL: 20 } : run(u, 2.7, .7)); rosto(A, null, t, u < 1.3 ? 'pensativo' === 'x' ? 'neutro' : 'determinado' : 'feliz');
    cam(C, [[0, [-3.0, 1.5, -1.8]], [2.5, [-1.0, 1.4, -2.4]]], [[0, [-6, 1.0, -6]], [2.5, [-2.5, 1.0, -6]]], u); return {}; }; }); }
function I2(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 15 }); const A = ator(c, AUGUSTO, 0, 0, Math.PI); const box = caixaPizza(); naMao(A, box); const vap = []; for (let i = 0; i < 5; i++) { const s = sprite('#FFFFFF', .25, 0, false); c.add(s); vap.push(s); }
  return (t, u, C) => { const z = -u * 5.5; A.root.position.set(-1.8, 0, z); A.pose(run(u, 2.6, .75)); rosto(A, null, t, 'feliz');
    vap.forEach((s, i) => { const f = (u * 1.2 + i / 5) % 1; s.position.set(-1.8 + .15, 1.0 + f * .5, z + .6 + f * .4); s.material.opacity = .6 * Math.sin(f * Math.PI); });
    cam(C, [[0, [1.5, 1.3, z + 2.5]]], [[0, [-1.8, .9, z - .5]]], 0); return {}; }; }); }
function I3(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 9 }); const casa = new THREE.Group(); casa.add(rb(6, 3.2, .3, '#F2C14E', 0, 1.6, 0)); casa.add(rb(1.1, 2.2, .06, '#5A3A22', -1.4, 1.1, .2)); casa.add(rb(1.4, 1, .06, '#BFE3F2', 1.4, 1.7, .2, { r: .02 })); casa.position.set(2.5, 0, -10.4); c.add(casa);
  const K = ator(c, { camisa: '#9B6CC4', calca: '#2A2A33', cabelo: 'rabo', corCabelo: '#1C1416', pele: '#C98B5E', cilios: true }, 1.1, -9.8, 0); const cel = celular(.09, .18); K.hands.R.add(cel); cel.position.set(.02, .03, .08); cel.rotation.set(-1.2, 0, 0);
  const A = ator(c, AUGUSTO, 1.1, -8.6, Math.PI); const box = caixaPizza(); const H = segura(A, box);
  return (t, u, C) => { cel.paint('p' + Math.floor(u * 3) % 4, (x, W, H2) => { x.fillStyle = '#F4F1EA'; x.fillRect(0, 0, W, H2); x.fillStyle = '#2FA37A'; x.font = '800 30px Inter'; x.textAlign = 'center'; x.fillText('PAGAMENTO', W / 2, H2 * .4); x.fillStyle = '#56585F'; x.font = '600 26px Inter'; x.fillText('processando' + '.'.repeat(Math.floor(u * 3) % 4), W / 2, H2 * .5); });
    K.pose({ ...idle(u), shR: [70, 10], elR: 80, headX: 20 * (1 - smooth(1.8, 2.2, u)) }); rosto(K, null, t, u < 1.9 ? 'neutro' : 'surpreso', { look: u < 1.9 ? [0, .9] : [0, 0] });
    A.pose({ ...H, ...idle(u) }); rosto(A, null, t, 'feliz');
    cam(C, [[0, [4.1, 1.4, -9.1]], [3.2, [3.9, 1.38, -9.2]]], [[0, [1.1, 1.05, -9.2]], [3.2, [1.1, 1.05, -9.2]]], u); return {}; }; }); }

// ---------- J: semana 3 (40 km/h) ----------
function J1(t0, t1) { return mk(t0, t1, {}, (c, s) => { bairro(c, { seed: 17 }); const A = ator(c, AUGUSTO, 0, 0, Math.PI); comBolsa(A); const cic = []; for (let i = 0; i < 3; i++) { const b = bicicleta(['#3E7CC8', '#F28F6B', '#58B26A'][i]); b.rotation.y = Math.PI; c.add(b); const k = povo(i + 1); k.place(0, 0, .15, Math.PI); c.add(k.root); cic.push({ b, k, z0: -4 - i * 6 }); } const LV = linhasVel(c, s.camera);
  return (t, u, C) => { const z = -u * 11; A.root.position.set(-1.6, 0, z); A.pose(run(u, 3.2, 1)); rosto(A, null, t, 'feliz');
    cic.forEach(({ b, k, z0 }, i) => { const zz = z0 - u * 4.5; b.position.set(1.4 - i * .1, 0, zz); girarBike(b, u * 4.5); k.root.position.set(1.4 - i * .1, .15, zz + .14); k.pose(pedal(u, 1.2, i)); rosto(k, null, t, 'surpreso', { look: [-.7, 0] }); });
    cam(C, [[0, [-4.2, 1.2, z + 1]]], [[0, [-1.6, .9, z - 1.5]]], 0); LV(t, .3); return {}; }; }); }
function J2(t0, t1) { return mk(t0, t1, {}, (c, s) => { bairro(c, { seed: 19 }); const A = ator(c, AUGUSTO, 0, 0, Math.PI); comBolsa(A); const cel = celular(.09, .18); A.hands.L.add(cel); cel.position.set(-.02, .02, .08); cel.rotation.set(-1.2, 0, 0);
  const At = ator(c, { camisa: '#F2D24A', calca: '#2FA37A', cabelo: 'careca', corCabelo: '#1C1416', pele: '#7A4A30', estampa: (x, w, h) => { x.fillStyle = '#FFFFFF'; x.fillRect(w * .4, h * .35, w * .2, h * .25); x.fillStyle = '#1B1420'; x.font = '900 60px Inter'; x.textAlign = 'center'; x.fillText('1', w / 2, h * .54); } }, 0, 0, Math.PI); const LV = linhasVel(c, s.camera);
  return (t, u, C) => { const z = -u * 11; const relax = smooth(3.0, 3.4, u); A.root.position.set(-1.0, 0, z); A.pose(mixPose(run(u, 3.0, 1), { ...run(u, 3.0, .6), shL: [60, 10], elL: 100 }, relax)); rosto(A, null, t, relax > .5 ? 'tedio' : 'feliz', { look: relax > .5 ? [0, .8] : [0, 0] }); cel.visible = relax > .3;
    At.root.position.set(.4, 0, z - .2 + Math.sin(u * 1.3) * .1); At.pose(run(u, 3.3, 1.15, .3)); rosto(At, null, t, 'surpreso', { mouth: { open: .7, round: .3 }, look: [-.7, 0] });
    cam(C, [[0, [-.3, 1.3, z - 4.2]]], [[0, [-.3, .95, z]]], 0); LV(t, .35); return {}; }; }); }

// ---------- K: semana 4 (Radial Leste) ----------
function radial(c) { const p = paulista(c, { alt: [8, 14], antena: false, nGente: 4, carros: 0 }); const pr = placaRua('RADIAL LESTE', '#2E8B57'); pr.position.set(-11.4, 0, -14); pr.rotation.y = Math.PI / 2; pr.scale.setScalar(1.6); c.add(pr); return p; }
function K1(t0, t1) { return mk(t0, t1, {}, (c, s) => { radial(c); const cs = []; const cc = ['#F4F1EA', '#2F4E86', '#F2C14E', '#3A3A44', '#8FD3C1', '#E8A0B8']; for (let i = 0; i < 6; i++) { const k = carro(cc[i]); k.rotation.y = Math.PI; c.add(k); cs.push({ k, x: -2.2 - (i % 2) * 3.1, z0: -6 - i * 9 }); }
  const A = ator(c, AUGUSTO, 0, 0, Math.PI); const box = caixaPizza(); naMao(A, box); const Rr = rastro(c); const LV = linhasVel(c, s.camera);
  return (t, u, C) => { const za = 4 - u * 22; A.root.position.set(-3.65, 0, za); A.pose(run(u, 3.6, 1.1)); rosto(A, null, t, 'determinado'); Rr(-3.65, 0, za, 0, -1, 4, .8);
    cs.forEach(({ k, x, z0 }) => { const z = z0 - u * 11; k.position.set(x, 0, z); k.userData.rodas.forEach(w => w.rotation.x = -u * 11 / .36); });
    cam(C, [[0, [-7.2, 1.6, za + 3]]], [[0, [-3.6, 1.0, za - 2]]], 0); LV(t, .5); return {}; }; }); }
function K2(t0, t1) { return mk(t0, t1, {}, (c) => { radial(c); const P = ator(c, { camisa: '#3E7CC8', calca: '#2A2A33', cabelo: 'tigela', corCabelo: '#5A3020', pele: '#E8B48C', manga: 'longa' }, -12.6, -6, 2.1);
  const cel = celular(.12, .24); P.hands.R.add(cel); cel.position.set(.0, .02, .1); cel.rotation.set(-1.4, 0, 0);
  const A = ator(c, AUGUSTO, -6.8, 0, Math.PI); const box = caixaPizza(); naMao(A, box); const Rr = rastro(c);
  return (t, u, C) => { P.pose({ ...idle(u), shR: [95, 10], elR: 40, shL: [60, 10], elL: 60, headY: -20 + u * 25 }); rosto(P, null, t, 'surpreso', { look: [.3, 0], mouth: { open: .5, round: .8 } });
    const z = 2 - u * 14; A.root.position.z = z; A.pose(run(u, 3.6, 1.1)); rosto(A, null, t, 'feliz'); Rr(-6.8, 0, z, 0, -1, 4, .8); cel.paint('v', telaVideo('12 mil'));
    cam(C, [[0, [-13.5, 1.8, -4.7]], [1.6, [-13.4, 1.75, -4.9]]], [[0, [-8.5, 1.0, -8.5]], [1.6, [-8.5, 1.0, -9.5]]], u); return {}; }; }); }
function K3(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 21 }); const fach = fachadaPizzaria(); fach.position.set(-12.5, 0, -10); fach.rotation.y = Math.PI / 2; c.add(fach);
  const fila = []; for (let i = 0; i < 9; i++) { const k = povo(i, { simples: true }); k.place(-6.2 + (i % 2) * .3, -10 + 1.5 + i * 1.0, 0, Math.PI); c.add(k.root); fila.push(k); }
  const cel = celular(1.1, 2.2); cel.position.set(0, 1.4, 1.2); c.add(cel);
  return (t, u, C) => { const m = smooth(.3, 1.4, u); const v = Math.round(lerp(12, 2300, m * m)); cel.paint('v' + v, telaVideo(v < 1000 ? v + ' mil' : (v / 1000).toFixed(1).replace('.', ',') + ' mi')); cel.visible = u < 1.45;
    fila.forEach((k, i) => { k.pose(idle(u, i)); rosto(k, null, t, i % 3 ? 'feliz' : 'neutro', { look: [0, 0] }); });
    cam(C, [[0, [0, 1.4, 5.0]], [1.45, [0, 1.4, 4.6]], [1.5, [-2.5, 2.2, 2]], [2.9, [-2.8, 2.0, 0]]], [[0, [0, 1.4, 1.2]], [1.45, [0, 1.4, 1.2]], [1.5, [-7, 1.2, -6]], [2.9, [-7, 1.2, -7]]], u); return {}; }; }); }

// ---------- L: Seu Jorge empolgado ----------
function L1(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); pizzaria(c); const J = ator(c, JORGE, .2, -2.4, -.6); const A = ator(c, AUGUSTO, -1.0, -1.9, .9); comBolsa(A);
  return (t, u, C) => { const ex = Math.sin(u * 5); J.pose(gesto('jorge', t, { ...idle(u), shL: [30 + 40 * Math.max(0, ex), 50], elL: 40, shR: [30, 50], elR: 40, bob: Math.max(0, ex) * .02 }, 1.3)); rosto(J, 'jorge', t, u < 3.6 ? 'feliz' : 'preocupado', { olhosAbertos: true, look: [-.5, 0] });
    A.pose({ ...idle(u), shR: [40, 40], elR: 100 }); rosto(A, null, t, 'vergonha', { smile: .4, look: [.6, 0] });
    cam(C, [[0, [-.2, 1.45, .9]], [5.4, [-.3, 1.4, .5]]], [[0, [-.3, 1.1, -2.2]], [5.4, [-.3, 1.1, -2.2]]], u); return {}; }; }); }

// ---------- M: a Bia ----------
function M1(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); pizzaria(c); const B = ator(c, BIA, -2.8, -4.3); const A = ator(c, AUGUSTO, 3, -2.6, -Math.PI / 2); comBolsa(A); const cor = icone('coracao', .25); c.add(cor);
  return (t, u, C) => { const x = 3 - u * 1.25; A.root.position.x = x; A.pose(walk(u, 1.9)); rosto(A, null, t, 'feliz');
    const olha = [smooth(1.6, 1.8, u) * (1 - smooth(2.2, 2.4, u)), smooth(3.0, 3.2, u) * (1 - smooth(3.6, 3.8, u)), smooth(5.4, 5.6, u)]; const o = Math.max(...olha);
    B.pose({ ...idle(u), headY: 70 * o, headX: -4 * o, shL: [35, 15], elL: 70, shR: [35, 15], elR: 70 }); rosto(B, null, t, o > .5 ? (u > 5.3 ? 'apaixonado' : 'surpreso') : 'tedio', { look: [o, 0] });
    cor.visible = u > 5.6; cor.position.set(-2.6, 1.75 + (u - 5.6) * .2, -4.2); cor.scale.setScalar(.25 * smooth(5.6, 5.8, u));
    cam(C, [[0, [-.6, 1.5, 1.4]], [7.2, [-1.2, 1.45, .4]]], [[0, [-1.4, 1.0, -3.6]], [7.2, [-2.6, 1.05, -4.2]]], u); return {}; }; }); }
function M2(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); pizzaria(c); const B = ator(c, BIA, -2.6, -4.3, .5);
  return (t, u, C) => { B.pose(gesto('bia', t, { ...idle(u), shL: [35, 15], elL: 80, headZ: 6 }, .8)); rosto(B, 'bia', t, 'feliz', { olhosAbertos: true, look: [.5, 0] });
    cam(C, [[0, [-1.6, 1.35, -2.7]], [4.3, [-1.7, 1.33, -2.9]]], [[0, [-2.6, 1.15, -4.3]], [4.3, [-2.6, 1.15, -4.3]]], u); return {}; }; }); }
function M3(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); pizzaria(c); const B = ator(c, BIA, -2.6, -4.3, .5); const A = ator(c, AUGUSTO, -1.3, -2.7, -2.4); comBolsa(A); const gota = icone('gota', .2); A.headG.add(gota); gota.position.set(.34, .5, 0);
  return (t, u, C) => { A.pose(gesto('augusto', t, { ...idle(u), shL: [150, 25], elL: 120, headZ: -6 }, .6)); rosto(A, 'augusto', t, 'vergonha', { olhosAbertos: true, smile: .4, look: [-.4, 0] }); gota.position.y = .5 - (u * .2 % .2);
    B.pose({ ...idle(u), shL: [35, 15], elL: 80, shR: [35, 15], elR: 80, headZ: 8 }); rosto(B, null, t, u > 3.3 ? 'desconfiado' : 'feliz', { look: [.4, 0], smile: .5 });
    cam(C, [[0, [-3.9, 1.4, -2.0]], [4.5, [-3.7, 1.38, -2.2]]], [[0, [-1.95, 1.1, -3.5]], [4.5, [-1.95, 1.1, -3.5]]], u); return {}; }; }); }

// ---------- N: semana 5 — o mundo devagar ----------
function N1(t0, t1) { return mk(t0, t1, {}, (c) => { const p = paulista(c, { alt: [10, 20], antena: false, nGente: 16, carros: 8 }); const A = ator(c, AUGUSTO, -12.8, -4, Math.PI); comBolsa(A);
  return (t, u, C) => { p.gente.forEach(({ k, ph, dir, z0, s }) => { const z = z0 - dir * u * 1.3; k.root.position.z = z; k.root.rotation.y = dir > 0 ? Math.PI : 0; k.pose(walk(u, 1.7, 1, ph)); rosto(k, null, t, 'neutro'); }); A.root.position.z = -4 - u * 1.2; A.pose(walk(u, 1.6)); rosto(A, null, t, u > 3 ? 'desconfiado' : 'neutro', { look: [Math.sin(u) * .5, 0] });
    cam(C, [[0, [-14.4, 1.4, -1.8]], [5.3, [-13.8, 1.35, -7.0]]], [[0, [-12.8, 1.2, -4.5]], [5.3, [-12.8, 1.2, -10]]], u); return {}; }; }); }
function N2(t0, t1) { return mk(t0, t1, {}, (c, s) => { bairro(c, { seed: 23 }); const A = ator(c, AUGUSTO, 0, 0, Math.PI); comBolsa(A); const cer = sprite('#9FE8FF', .8, 0); A.headG.add(cer); cer.position.set(0, .3, .1); const LV = linhasVel(c, s.camera);
  const pts = []; for (let i = 0; i < 40; i++) { const m = sph(.03, '#D9CDB8', 0, 0, 0, { seg: 6 }); c.add(m); pts.push(m); }
  return (t, u, C) => { const lento = smooth(5.6, 6.4, u); const vel = lerp(14, .25, lento); const tt = u < 5.6 ? u : 5.6 + (u - 5.6) * lerp(1, .04, lento);
    const z = -tt * 14; A.root.position.set(-1.4, 0, z); A.pose(run(tt, 3.4, 1.1)); rosto(A, null, t, lento > .5 ? 'surpreso' : 'determinado', { look: lento > .5 ? [.6, 0] : [0, 0] });
    cer.material.opacity = smooth(2.2, 2.8, u) * (1 - smooth(5, 6, u)) * (.7 + .3 * Math.sin(u * 12)); pts.forEach((m, i) => { m.position.set(-1.4 + Math.sin(i * 3.1) * 1.2, .1 + (i % 7) * .12, z + .4 + (i % 9) * .25); m.visible = lento > .1; });
    const orb = lento * (u - 5.6) * .6; cam(C, [[0, [-4.2, 1.3, z + 1.2]]], [[0, [-1.4, 1.0, z - 1]]], 0); if (lento > 0) { const a = -1.2 + orb; C.position.set(-1.4 + Math.sin(a) * 3.2, 1.3, z + Math.cos(a) * 3.2); C.lookAt(-1.4, 1.0, z); }
    LV(t, .45 * (1 - lento)); return { sat: lerp(1.05, .8, lento), tint: lento > .5 ? '#E8F0FF' : '#FFFFFF' }; }; }); }
function N3(t0, t1) { return mk(t0, t1, { bg: '#9AA6B8' }, (c) => { bairro(c, { seed: 25 }); const Ch = chuva(c, [-6, 6, 0, 6, -18, 4], { n: 1500, vel: 14, l: .35 }); const A = ator(c, AUGUSTO, 0, 0, Math.PI); comBolsa(A);
  const cs = []; for (let i = 0; i < 3; i++) { const k = carro(['#E2443A', '#3A3A44', '#F2C14E'][i]); k.position.set(1.8, 0, -6 - i * 7); c.add(k); cs.push(k); }
  const fal = ator(c, { camisa: '#E57AA0', calca: '#3A3550', cabelo: 'rabo', corCabelo: '#5A3020', pele: '#E8B48C', cilios: true }, -2.6, -9, Math.PI / 2); const bal = cartaz(1.6, .7, (x, W, H) => { x.fillStyle = '#FFFFFF'; x.beginPath(); x.roundRect(6, 6, W - 12, H - 40, 40); x.fill(); x.lineWidth = 8; x.strokeStyle = '#1B1420'; x.stroke(); x.fillStyle = '#1B1420'; x.font = `800 ${H * .26}px Inter`; x.textAlign = 'center'; x.fillText('Ooooiii...', W / 2, H * .52); }, { basic: true, transp: true }); c.add(bal);
  return (t, u, C) => { Ch(100 + u * .02, 1); A.root.position.set(-.8, 0, -4 - u * .9); A.pose(walk(u, 1.5)); rosto(A, null, t, u < 3 ? 'surpreso' : 'feliz', { look: [Math.sin(u * .8) * .7, -.2] });
    cs.forEach((k, i) => { k.position.z = -6 - i * 7 + u * .25; k.userData.rodas.forEach(w => w.rotation.x = u * .7); });
    fal.pose({ ...idle(u * .05), shR: [40, 30], elR: 40 }); rosto(fal, null, t, 'feliz', { mouth: { open: .5 + .1 * Math.sin(u * .5), round: .9 }, blink: 0 }); bal.position.set(-2.4, 2.1, -9); bal.lookAt(C.position); bal.visible = u > 3.5; bal.scale.setScalar(smooth(3.5, 3.8, u));
    cam(C, [[0, [.6, 1.5, -.6]], [7, [.2, 1.4, -4.6]]], [[0, [-.8, 1.1, -4.5]], [7, [-1.4, 1.1, -10]]], u); return { tint: '#E8EEFF', sat: .85 }; }; }); }
function N4(t0, t1) { return mk(t0, t1, { bg: '#A9C9E6' }, (c) => { luzToon(c, { r: 6, pos: [3, 8, 6] }); const fl = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), toon('#B98A5E')); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; c.add(fl);
  const tn = new THREE.Group(); const corpo = rb(.4, .3, .7, '#F4F1EA', 0, .2, 0, { r: .12, out: .012 }); tn.add(corpo); tn.add(rb(.42, .08, .74, '#E2443A', 0, .05, 0, { r: .03, out: .01 })); const bico = rb(.36, .16, .25, '#F4F1EA', 0, .13, .3, { r: .08, out: .01 }); tn.add(bico);
  for (let i = 0; i < 3; i++) tn.add(rb(.22, .02, .04, '#E2443A', 0, .36, -.05 + i * .1, { r: .01 })); tn.rotation.y = .6; c.add(tn);
  const poca = new THREE.Mesh(new THREE.CircleGeometry(.6, 32), toon('#ECE6DA')); poca.rotation.x = -Math.PI / 2; poca.position.set(.05, .004, .05); c.add(poca);
  const fum = []; for (let i = 0; i < 8; i++) { const s = sprite('#9C968C', .3, 0, false); c.add(s); fum.push(s); }
  return (t, u, C) => { const d = smooth(0, 2.2, u); corpo.scale.set(1 + d * .2, 1 - d * .55, 1 + d * .1); corpo.position.y = .2 - d * .08; poca.scale.setScalar(.6 + d * .5);
    fum.forEach((s, i) => { const f = (u * .5 + i / 8) % 1; s.position.set(Math.sin(i * 2) * .15, .35 + f * 1.1, Math.cos(i * 2) * .15); s.material.opacity = .45 * Math.sin(f * Math.PI); s.scale.setScalar(.25 + f * .5); });
    cam(C, [[0, [1.0, .85, 1.3]], [2.4, [.8, .7, 1.05]]], [[0, [0, .15, 0]], [2.4, [0, .15, 0]]], u); return {}; }; }); }
function N5(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); cozinha(c); cadeira(c, -.6, -1.85, Math.PI); const A = ator(c, AUGUSTO, -.6, -1.9, Math.PI);
  for (let i = 0; i < 12; i++) { const b = caixaPizza(); b.position.set(-1.1 + (i % 2) * .05, .82 + Math.floor(i / 2) * .062 + (i % 2) * .03, -2.75 + (i % 2) * .5); b.rotation.y = i * .3; c.add(b); }
  const fat = new THREE.Mesh(new THREE.ConeGeometry(.12, .02, 3), toon('#F2C14E')); fat.rotation.x = Math.PI / 2; A.hands.R.add(fat); fat.position.set(0, -.08, .1);
  return (t, u, C) => { const m = (Math.sin(u * 7) + 1) / 2; A.pose(sentado({ shR: [70 + 20 * m, 15], elR: 110 + 10 * m, shL: [40, 10], elL: 50, headX: -4 })); A.root.position.y = .13; rosto(A, null, t, 'feliz', { mouth: { open: .2 + .5 * m, round: .2 } });
    cam(C, [[0, [-.2, 1.45, -4.6]], [3, [-.3, 1.4, -4.3]]], [[0, [-.6, 1.0, -1.9]], [3, [-.6, 1.0, -1.9]]], u); return {}; }; }); }
function N6(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); const K = cozinha(c); const A = ator(c, AUGUSTO, -4.05, -2.2, Math.PI / 2); const L = ator(c, LURDES, -3.5, -2.85, -1.0);
  const marcas = cartaz(.3, 1.2, (x, W, H) => { x.strokeStyle = '#5A3A22'; x.lineWidth = 6; x.font = '700 22px Inter'; x.fillStyle = '#5A3A22'; for (let i = 0; i < 6; i++) { const y = H * (.15 + i * .14); x.beginPath(); x.moveTo(W * .2, y); x.lineTo(W * .8, y); x.stroke(); } }, { transp: true }); marcas.position.set(-4.39, 1.2, -1.75); marcas.rotation.y = Math.PI / 2; c.add(marcas);
  return (t, u, C) => { A.pose({ ...idle(u, 0, .3), shL: [5, 4], shR: [5, 4] }); rosto(A, null, t, 'vergonha', { look: [.6, 0], smile: .3 }); L.pose({ ...idle(u), shR: [150, 20], elR: 30, headX: -15 }); rosto(L, null, t, 'feliz', { look: [-.3, -.8] });
    cam(C, [[0, [-1.7, 1.45, -.6]], [2.9, [-1.9, 1.42, -.8]]], [[0, [-3.8, 1.15, -2.4]], [2.9, [-3.8, 1.15, -2.4]]], u); return {}; }; }); }

// ---------- O: pedido de like ----------
function O1(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 27 }); const A = ator(c, AUGUSTO, 0, -3, 0); comBolsa(A); const D = poeira(c, [[0, .2, -3]], { n: 22, sp: 1.6, size: 1.6, life: 2.6, op: .7 }); const Rr = rastro(c);
  return (t, u, C) => { const sai = smooth(4.1, 4.35, u); A.root.visible = sai < .99; A.root.position.x = -sai * 14; A.root.rotation.y = sai > 0 ? -Math.PI / 2 : 0;
    const pol = smooth(.6, 1.0, u) * (1 - smooth(3.8, 4.1, u)); A.pose(sai > 0 ? run(u, 3.6, 1.2) : { ...idle(u), shR: [70 * pol, 20 + 40 * pol], elR: 90 * pol }); rosto(A, null, t, 'feliz', { olhosAbertos: u > 2.2, smile: .8 });
    Rr(A.root.position.x, 0, -3, -1, 0, 6, sai > 0 && sai < 1 ? 1 - sai * .6 : 0); D(u - 4.15);
    cam(C, [[0, [0, 1.3, 1.2]], [4, [0, 1.25, .6]]], [[0, [0, 1.1, -3]], [4, [0, 1.1, -3]]], u); return {}; }; }); }

export const ATO2 = [[H1, 95.27, 99.9], [H2, 99.9, 104.5], [I1, 104.5, 107.0], [I2, 107.0, 111.6], [I3, 111.6, 114.8], [J1, 114.8, 117.0], [J2, 117.0, 121.4], [K1, 121.4, 125.5], [K2, 125.5, 127.1], [K3, 127.1, 130.0], [L1, 130.0, 135.97],
  [M1, 135.97, 143.2], [M2, 143.2, 147.5], [M3, 147.5, 152.0], [N1, 152.0, 157.3], [N2, 157.3, 165.2], [N3, 165.2, 172.2], [N4, 172.2, 174.6], [N5, 174.6, 177.6], [N6, 177.6, 180.5], [O1, 180.5, 188.5]];
