// Ato 3 (179.07 a 287.19 s): o desafio do Dudu, o 7 a 1, o pedido de like, 2017, a data e a insistência.
import * as THREE from 'three';
import { smooth, lerp, clamp } from './motor/core.js';
import { bx, rb, cyl, sph, toon, ctex } from './motor/toon.js';
import { idle, walk, run, mixPose, sentado } from './motor/char3d.js';
import { mk, cam, camT, ator, rosto, gesto, icone, sentar, cartaz } from './lib.js';
import { GUI16, GUI20, MARCOSCASA, REGINA, DUDU, DUDUCOPA, povo, torcedor } from './elenco.js';
import { patio, bar, pintaTV, onibusDentro, republica, palco, casaFamilia, quartoTeen } from './cenarios.js';
import { txt, moeda, moedaDraw, prato, tela } from './objetos.js';
import { brilho, sprite } from './efeitos.js';
import { celular, carro, arvore } from './mundo.js';

const GOLS = [194.22, 195.19, 195.72, 196.38, 196.97];
const golsAte = (t) => GOLS.filter(g => t >= g).length;
const aluno = (i, extra = {}) => povo(i, { camisa: '#F6F4EE', estampa: GUI16.estampa, simples: true, ...extra });

// ---------- H: o desafio e o 7 a 1 ----------
// lado de trás do pátio: muro, árvores e o outro prédio da escola (antes era só chão e céu)
function fundoPatio(c) { const m = new THREE.Group(); m.add(rb(46, 2.4, .4, '#E8DAB2', 0, 1.2, 0, { r: .05 })); m.add(bx(46.2, .2, .5, '#C0392B', 0, 2.45, 0)); for (let i = 0; i < 7; i++) m.add(rb(2.4, 1.2, .06, ['#2E9C6A', '#2E6FB8', '#F2C230', '#E2443A'][i % 4], -15 + i * 5, 1.2, -.24, { r: .05 })); m.position.set(0, 0, 9); m.rotation.y = Math.PI; c.add(m);
  const b2 = new THREE.Group(); b2.add(rb(34, 8, 6, '#F2E6C4', 0, 4, 0, { r: .1 })); b2.add(bx(34.2, .5, 6.2, '#C0392B', 0, 8.2, 0)); for (let a = 0; a < 2; a++) for (let i = 0; i < 10; i++) b2.add(bx(1.5, 1.1, .1, '#9FCBE8', -14 + i * 3.1, 2.6 + a * 3, -3.02)); b2.position.set(0, 0, 18); c.add(b2);
  for (let i = 0; i < 6; i++) arvore(c, -13 + i * 5.2, 7.2, .85, i + 9); }
function desafio(c) { patio(c); fundoPatio(c); for (let i = 0; i < 6; i++) { const k = aluno(i + 2); k.place(-7 + i * 2.4, -10 - (i % 2) * 2, 0, (i % 3 - 1) * .6); c.add(k.root); k.pose(idle(i)); }
  const G = ator(c, GUI16, -.7, -3.6, .9); const D = ator(c, DUDU, 1.0, -2.7, -2.3); return { G, D }; }
function H1(t0, t1) { return mk(t0, t1, {}, (c) => { const { G, D } = desafio(c);
  return (t, u, C) => { D.pose(gesto('dudu', t, { ...idle(t), shL: [55, -10], elL: 110 }, 1.2)); rosto(D, 'dudu', t, 'desconfiado', { look: [-.5, 0], smile: .5 }); G.pose(idle(t)); rosto(G, null, t, 'neutro', { look: [.6, 0] });
    cam(C, [[0, [-1.7, 1.55, -4.9]], [4.9, [-1.45, 1.5, -4.6]]], [[0, [1.0, 1.2, -2.7]], [4.9, [1.0, 1.2, -2.7]]], u); return {}; }; }); }
function H2(t0, t1) { return mk(t0, t1, {}, (c) => { const { G, D } = desafio(c);
  return (t, u, C) => { G.pose(idle(t)); rosto(G, 'gui', t, 'determinado', { look: [.6, 0] }); const ri = smooth(1.1, 1.3, u); D.pose({ ...idle(t), lean: -12 * ri, shL: [30 * ri, 30], shR: [30 * ri, 30], headX: -20 * ri * Math.abs(Math.sin(t * 9)) }); rosto(D, null, t, ri > .5 ? 'rindo' : 'surpreso', { mouth: ri > .5 ? { open: .6 + .3 * Math.sin(t * 14) } : undefined });
    cam(C, [[0, [.2, 1.25, -1.6]], [1.1, [.0, 1.22, -1.9]], [2.45, [.6, 1.4, .2]]], [[0, [-.7, 1.1, -3.6]], [1.1, [-.7, 1.1, -3.6]], [2.45, [.1, 1.1, -3.1]]], u); return {}; }; }); }
function torcida(c, n = 18, o = {}) { const T = []; const pos = []; for (let r = 0; r < 3; r++) for (let i = 0; i < 6; i++) pos.push([-5.2 + i * 1.9 + (r % 2) * .8, -6.4 + r * 1.5]);
  for (let i = 0; i < n; i++) { const [x, z] = pos[i]; if (x > 3.0) continue; if (o.livre && Math.hypot(x - o.livre[0], z - o.livre[1]) < 1.2) continue; const k = torcedor(i, { simples: true }); k.place(x, z, 0, Math.PI + (x * .04)); c.add(k.root); T.push({ k, i }); } return T; }
const poseTorcida = (t, i, fase) => { // fase: 0 assistindo, 1 tensão, 2 gol contra (mãos na cabeça), 3 silêncio
  if (fase === 2) return { ...idle(t, i), shL: [150, -30], shR: [150, -30], elL: 140, elR: 140, headX: -8 }; if (fase === 3) return { ...idle(t, i, .3), shL: [5, 6], shR: [5, 6], headX: 10 };
  if (fase === 1) return { ...idle(t, i), shL: [60, 10], shR: [60, 10], elL: 120, elR: 120 }; return { ...idle(t, i), shR: [20 + 15 * Math.sin(t * 2 + i), 10] }; };
function cenaBar(c, o = {}) { const B = bar(c); const T = torcida(c, 18); const G = ator(c, GUI16CASA2(), 0, 0); sentar(G, 5.3, -3.6, -2.2, .5); const D = ator(c, DUDUCOPA, 0, 0); sentar(D, 4.3, -4.5, -2.9, .5);
  for (const [x, z, r] of [[5.3, -3.6, -2.2], [4.3, -4.5, -2.9]]) { const g = new THREE.Group(); g.add(rb(.44, .06, .42, '#C0392B', 0, .47, 0, { r: .02, out: .005 })); for (const a of [-1, 1]) for (const b of [-1, 1]) g.add(cyl(.02, .02, .47, '#9EA6B0', a * .17, .23, b * .17, { seg: 5 })); g.position.set(x, 0, z); c.add(g); }
  return { B, T, G, D }; }
function GUI16CASA2() { return { ...GUI16, camisa: '#F6D33A', estampa: (x, w, h) => { x.fillStyle = '#2E9C4A'; x.fillRect(0, h * .88, w, h * .12); } }; }
function H3(t0, t1) { return mk(t0, t1, {}, (c) => { const { B, T, G, D } = cenaBar(c); pintaTV(B.T, 0);
  return (t, u, C) => { T.forEach(({ k, i }) => { k.pose(poseTorcida(t, i, 0)); rosto(k, null, t, 'feliz'); }); G.pose(sentado({ shL: [40, 10], elL: 90, shR: [40, 10], elR: 90, headX: 25 })); rosto(G, null, t, 'preocupado', { look: [0, .6] }); D.pose(sentado({ shR: [70, 10], elR: 100 })); rosto(D, null, t, 'feliz');
    cam(C, [[0, [-5.6, 2.8, 2.6]], [4.5, [-3.0, 2.2, .6]]], [[0, [0, 1.4, -5.5]], [4.5, [1.5, 1.3, -5.0]]], u); return { bloom: .3 }; }; }); }
function H4(t0, t1) { return mk(t0, t1, {}, (c) => { const { B, T, G, D } = cenaBar(c); pintaTV(B.T, 0);
  return (t, u, C) => { T.forEach(({ k, i }) => { k.pose(poseTorcida(t, i, 1)); rosto(k, null, t, 'preocupado'); }); G.pose(sentado({ shL: [150, -25], elL: 140, shR: [150, -25], elR: 140, headX: 20 })); rosto(G, null, t, 'preocupado', { look: [0, .7] }); D.pose(sentado({ shR: [70, 10], elR: 100, lean: 10 })); rosto(D, null, t, 'neutro', { look: [-.6, -.2] });
    cam(C, [[0, [3.0, 1.3, -1.6]], [3.2, [3.4, 1.25, -2.0]]], [[0, [5.0, 1.0, -3.8]], [3.2, [5.0, 1.0, -3.8]]], u); return {}; }; }); }
function H5(t0, t1) { return mk(t0, t1, {}, (c) => { const { B, T, G, D } = cenaBar(c); B.band.forEach(b => b.visible = false);
  return (t, u, C) => { const n = golsAte(t), ult = n ? t - GOLS[n - 1] : 9; pintaTV(B.T, n, ult < .7 ? 1 : 0); T.forEach(({ k, i }) => { k.pose(poseTorcida(t, i, ult < 1.2 ? 2 : 1)); rosto(k, null, t, ult < 1.2 ? 'medo' : 'preocupado', { mouth: ult < .8 ? { open: .7, round: .9 } : undefined }); });
    G.pose(sentado({ shL: [150, -25], elL: 140, shR: [150, -25], elR: 140, headX: 20 })); rosto(G, null, t, 'triste'); D.pose(sentado({ shR: [150, -20], elR: 140, shL: [150, -20], elL: 140 })); rosto(D, null, t, 'medo');
    camT(C, [[0, [0, 1.8, -1.2]], [3.3, [0, 1.9, -3.2]]], [[0, [0, 2.2, -8.8]], [3.3, [0, 2.3, -8.8]]], u, ult < .4 ? .02 : 0, t); return { bloom: .3 }; }; }); }
function H6(t0, t1) { return mk(t0, t1, {}, (c) => { const { B, T, G, D } = cenaBar(c); pintaTV(B.T, 5); B.band.forEach(b => b.visible = false);
  return (t, u, C) => { T.forEach(({ k, i }) => { k.pose(poseTorcida(t, i, 2)); rosto(k, null, t, i % 3 ? 'choro' : 'medo'); }); G.pose(sentado({ headX: 30 })); rosto(G, null, t, 'triste'); D.pose(sentado({ shR: [150, -20], elR: 140, shL: [150, -20], elL: 140 })); rosto(D, null, t, 'medo');
    cam(C, [[0, [-1.6, 3.1, -1.6]], [2.95, [-1.0, 2.85, -2.3]]], [[0, [-1.3, 1.0, -5.7]], [2.95, [-1.0, 1.0, -5.7]]], u); return {}; }; }); }
function H7(t0, t1) { return mk(t0, t1, {}, (c) => { const { B, T, G, D } = cenaBar(c); pintaTV(B.T, 5);
  return (t, u, C) => { T.forEach(({ k, i }) => { k.pose(poseTorcida(t, i, 3)); rosto(k, null, t, 'triste'); }); G.pose(sentado({ headX: 30 })); rosto(G, null, t, 'triste'); D.pose(sentado({})); rosto(D, null, t, 'surpreso', { look: [-.3, 0] });
    cam(C, [[0, [2.6, 2.8, 1.6]], [1.9, [2.4, 2.6, .9]]], [[0, [0, 1.2, -5.4]], [1.9, [0, 1.2, -5.4]]], u, 0, .4); return { sat: .8 }; }; }); }
const PALIDO = { ...DUDUCOPA, pele: '#B89A88' };
function H8(t0, t1) { return mk(t0, t1, {}, (c) => { const { B, T, G, D } = cenaBar(c); D.root.visible = false; const P = ator(c, PALIDO, 0, 0); sentar(P, 4.3, -4.5, -2.9, .5); pintaTV(B.T, 5);
  return (t, u, C) => { const v = smooth(.3, 3.2, u); P.root.rotation.y = lerp(-2.9, -.9, v); P.pose(sentado({ headY: 10 * v })); rosto(P, null, t, 'medo', { look: [.5 * v, 0] }); G.pose(sentado({ headX: 25 })); rosto(G, null, t, 'triste', { look: [0, .5] });
    T.forEach(({ k, i }) => { k.pose(poseTorcida(t, i, 3)); rosto(k, null, t, 'triste'); });
    cam(C, [[0, [2.6, 1.3, -2.0]], [3.7, [3.1, 1.2, -2.6]]], [[0, [4.4, 1.05, -4.4]], [3.7, [4.35, 1.05, -4.45]]], u); return { sat: .85 }; }; }); }
function H9(t0, t1) { return mk(t0, t1, {}, (c) => { const { B, T, G, D } = cenaBar(c); D.root.visible = false; const P = ator(c, PALIDO, 0, 0); sentar(P, 4.3, -4.5, -.9, .5); pintaTV(B.T, 5);
  return (t, u, C) => { P.pose(gesto('dudu', t, sentado({ headY: 10 }), .4)); rosto(P, 'dudu', t, 'medo', { look: [.5, 0] }); G.pose(sentado({ headX: 10, headY: -20 })); rosto(G, null, t, 'neutro', { look: [-.6, 0] });
    T.forEach(({ k, i }) => { k.pose(poseTorcida(t, i, 3)); rosto(k, null, t, 'triste'); });
    cam(C, [[0, [3.3, 1.18, -3.7]], [3.1, [3.42, 1.15, -3.8]]], [[0, [4.3, 1.05, -4.5]], [3.1, [4.3, 1.05, -4.5]]], u); return { sat: .85 }; }; }); }
function I1(t0, t1) { return mk(t0, t1, {}, (c) => { const { B, T, G, D } = cenaBar(c); pintaTV(B.T, 5);
  return (t, u, C) => { T.forEach(({ k, i }) => { k.pose(poseTorcida(0, i, 2)); rosto(k, null, 0, i % 3 ? 'choro' : 'medo', { vivo: false }); }); G.pose(sentado({ headX: 30 })); rosto(G, null, t, 'triste'); D.pose(sentado({})); rosto(D, null, t, 'surpreso');
    const a = -.9 + u * .18; cam(C, [[0, [Math.sin(a) * 7, 2.6, -4 + Math.cos(a) * 7]]], [[0, [0, 1.3, -5]]], 0); return { sat: .9 }; }; }); }
function I2(t0, t1) { return mk(t0, t1, {}, (c) => { const { B, T, G, D } = cenaBar(c); pintaTV(B.T, 5);
  return (t, u, C) => { T.forEach(({ k, i }) => { k.pose(poseTorcida(t, i, 3)); rosto(k, null, t, 'triste'); }); G.root.rotation.y = -2.2 + 2.2 * smooth(.3, 1.2, u); G.pose(sentado({})); rosto(G, null, t, 'desconfiado', { look: [0, 0], smile: .4 }); D.pose(sentado({})); rosto(D, null, t, 'surpreso');
    cam(C, [[0, [5.0, 1.4, -1.2]], [5.1, [5.25, 1.25, -2.6]]], [[0, [5.3, 1.1, -3.6]], [5.1, [5.3, 1.12, -3.6]]], u); return { exposure: 1 - .9 * smooth(4.3, 5.1, u) }; }; }); }

// ---------- J: 2017 ----------
const ANOS = [[2012, 8], [2013, 750], [2014, 320], [2015, 430], [2016, 960], [2017, 19000]];
function grafico3D(c) { const pts = ANOS.map(([a, v], i) => new THREE.Vector3(-6 + i * 2.4, .4 + (Math.log10(v) - .9) * 1.55, 0)); const curva = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
  const geo = new THREE.TubeGeometry(curva, 160, .14, 10, false); const m = new THREE.Mesh(geo, toon('#FFB43A', { emissive: '#7A4A10' })); m.castShadow = true; c.add(m); const n = geo.index.count;
  ANOS.forEach(([a, v], i) => { const p = cartaz(1.4, .5, (x, W, H) => { x.fillStyle = '#2A2448'; x.fillRect(0, 0, W, H); txt(x, String(a), W / 2, H / 2, H * .6, '#C9C2E8'); }); p.rotation.x = -Math.PI / 2; p.position.set(pts[i].x, .02, 1.4); c.add(p); c.add(cyl(.03, .03, pts[i].y, '#4A3E7A', pts[i].x, pts[i].y / 2, 0, { seg: 6 })); });
  return { set: (k) => geo.setDrawRange(0, Math.floor(n * clamp(k)) - Math.floor(n * clamp(k)) % 3), curva, pts }; }
function J1(t0, t1) { return mk(t0, t1, {}, (c) => { palco(c); const Gf = grafico3D(c); for (let i = 0; i < 40; i++) { const m = moeda(.22 + (i % 3) * .06); m.rotation.set(-Math.PI / 2 + (i % 5) * .15, 0, i); m.position.set(-7 + (i * 2.37) % 14, .03 + (i % 4) * .05, 1.2 + (i * 1.73) % 6.5); c.add(m); }
  return (t, u, C) => { Gf.set(smooth(.2, 2.6, u) * .82); cam(C, [[0, [-4, 3, 11]], [2.65, [-1, 3.6, 12]]], [[0, [-2, 2, 0]], [2.65, [0, 2.6, 0]]], u); return { bloom: .5, bloomT: .75 }; }; }); }
function J2(t0, t1) { return mk(t0, t1, {}, (c) => { palco(c); const Gf = grafico3D(c); const G = ator(c, GUI20, 0, 0); const top = Gf.pts[5]; const base = moeda(.7); base.rotation.x = -Math.PI / 2; base.position.set(top.x, top.y + .05, 0); c.add(base);
  const M = []; for (let i = 0; i < 26; i++) { const m = moeda(.18); c.add(m); M.push(m); }
  return (t, u, C) => { Gf.set(.82 + .18 * smooth(0, 1.2, u)); G.root.position.set(top.x, top.y + .13, 0); G.root.rotation.y = .5; G.pose({ ...idle(t), shL: [160, 30], shR: [160, 30], elL: 10, elR: 10 }); rosto(G, null, t, 'rindo', { olhosAbertos: true });
    M.forEach((m, i) => { const f = ((u * .35 + i / 26) % 1); m.position.set(top.x - 2.5 + (i * 1.37) % 5, top.y + 4 - f * 5.5, -1.5 + (i * .71) % 3); m.rotation.set(t * 2 + i, t + i, 0); });
    cam(C, [[0, [top.x - 6, top.y + 1.5, 7]], [6.85, [top.x - 2.6, top.y + 1.0, 3.6]]], [[0, [top.x - 1, top.y + .5, 0]], [6.85, [top.x, top.y + 1.0, 0]]], u); return { bloom: .5, bloomT: .75 }; }; }); }
function J3(t0, t1) { return mk(t0, t1, {}, (c) => { onibusDentro(c); const G = ator(c, GUI20, 0, 0); sentar(G, .95, -3.2, 0, .56); const tel = celular(.07, .14); G.hands.R.add(tel); tel.position.set(0, -.02, .06); tel.rotation.x = -.6; tel.paint('s', (x, W, H) => { x.fillStyle = '#0E1422'; x.fillRect(0, 0, W, H); moedaDraw(x, W / 2, 130, 50); txt(x, '100 BTC', W / 2, 230, 34, '#fff'); });
  const P = []; for (let i = 0; i < 4; i++) { const k = povo(i + 2, { simples: true }); k.place(-.35 + (i % 2) * .2, -5.2 - i * 1.5, 0, Math.PI / 2 + (i % 2) * .4); c.add(k.root); P.push(k); }
  return (t, u, C) => { G.pose(sentado({ shR: [55, 10], elR: 100, shL: [40, 10], elL: 60, headX: 22 })); rosto(G, null, t, 'neutro', { look: [0, .7] }); P.forEach((k, i) => { k.pose({ ...idle(t, i), shR: [165, 10], elR: 10, bob: .01 * Math.sin(t * 7) }); rosto(k, null, t, 'tedio'); });
    camT(C, [[0, [.55, 1.5, -1.45]], [2.1, [.62, 1.45, -1.7]]], [[0, [.95, 1.0, -3.1]], [2.1, [.95, 1.0, -3.1]]], u, .006, t); return {}; }; }); }
function J4(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const R = republica(c); const G = ator(c, GUI20, 0, 0); sentar(G, 1.5, -4.1, Math.PI, .48); const cad = new THREE.Group(); cad.add(rb(.44, .06, .42, '#3A3A44', 0, .45, 0, { r: .02 })); cad.position.set(1.5, 0, -4.1); c.add(cad);
  const C2 = ator(c, { pele: '#E8B898', cabelo: 'tigela', corCabelo: '#C9A060', camisa: '#58B26A', calca: '#3A3A44' }, 0, 0); C2.root.rotation.set(-Math.PI / 2, 0, Math.PI / 2); C2.root.position.set(-2.4, 1.98, -4.2); C2.sombra.visible = false;
  return (t, u, C) => { G.pose(sentado({ shR: [70, 15], elR: 120 + 15 * Math.sin(t * 4), shL: [40, 10], elL: 60, headX: 15 })); rosto(G, null, t, 'feliz', { look: [.2, .5], mouth: { open: .2 * Math.abs(Math.sin(t * 5)) } }); C2.pose({}); rosto(C2, null, t, 'sono', { blink: 1 });
    cam(C, [[0, [-.5, 1.6, -4.2]], [1.85, [-.3, 1.55, -4.45]]], [[0, [1.5, 1.0, -4.4]], [1.85, [1.5, 1.0, -4.4]]], u); return { tint: '#E8E2FF' }; }; }); }
function J5(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { republica(c); const tel = celular(.5, 1.0); tel.position.set(0, 1.0, -2.4); c.add(tel); const B = brilho(c, [0, .6, -2.4], { cor: '#7DF0A0', size: .9, n: 16, alt: .9 });
  tel.paint('s', (x, W, H) => { x.fillStyle = '#0E1422'; x.fillRect(0, 0, W, H); txt(x, 'MINHA CARTEIRA', W / 2, 50, 22, '#9FB4D8', 800); moedaDraw(x, W / 2, 150, 54); txt(x, '100 BTC', W / 2, 250, 38, '#FFFFFF'); txt(x, '≈ R$ 6.000.000', W / 2, 320, 30, '#7DF0A0'); x.fillStyle = '#2E3A5A'; x.fillRect(30, 380, W - 60, 120); x.strokeStyle = '#7DF0A0'; x.lineWidth = 5; x.beginPath(); x.moveTo(40, 490); x.bezierCurveTo(120, 480, 160, 460, W - 40, 395); x.stroke(); });
  return (t, u, C) => { tel.rotation.set(-.15 + .03 * Math.sin(t), .1 * Math.sin(t * .7), 0); B(u, .7); cam(C, [[0, [.2, 1.1, -1.0]], [2.6, [.05, 1.02, -1.55]]], [[0, [0, 1.0, -2.4]], [2.6, [0, 1.0, -2.4]]], u); return { bloom: .4, bloomT: .8 }; }; }); }
function casinha() { const g = new THREE.Group(); g.add(rb(.5, .4, .4, '#F2C14E', 0, .2, 0, { r: .03, out: .006 })); const tt = new THREE.Mesh(new THREE.ConeGeometry(.42, .3, 4), toon('#C0392B')); tt.rotation.y = Math.PI / 4; tt.position.y = .55; g.add(tt); g.add(bx(.1, .18, .01, '#7A5236', 0, .09, .2)); return g; }
function aviao() { const g = new THREE.Group(); const f = cyl(.07, .05, .6, '#F4F1EA', 0, 0, 0, { rot: [0, 0, Math.PI / 2], out: .005 }); g.add(f); g.add(rb(.12, .02, .7, '#2E6FB8', 0, 0, 0, { r: .01 })); g.add(rb(.08, .2, .02, '#2E6FB8', -.27, .1, 0, { r: .01 })); return g; }
function J6(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const R = republica(c); const G = ator(c, GUI20, .4, -3.0, .2); const I = [casinha(), carro('#E2443A'), aviao()]; I[1].scale.setScalar(.14); I.forEach(o => c.add(o)); const at = [237.56, 238.38, 238.87];
  return (t, u, C) => { const nao = smooth(242.0, 242.6, t); I.forEach((o, i) => { const k = smooth(at[i], at[i] + .35, t) * (1 - nao); const a = -1 + i; o.position.set(.4 + Math.sin(a) * .85, 1.62 + .08 * Math.sin(t * 2 + i) + (i === 2 ? .12 : 0), -2.9 + Math.cos(a) * .2); o.scale.setScalar((i === 1 ? .14 : 1) * Math.max(.001, k)); o.rotation.y = t * .8 + i; });
    G.pose({ ...idle(t), shR: [nao > .5 ? 0 : 60, 10], elR: nao > .5 ? 10 : 110, headY: nao > 0 && nao < 1 ? 0 : 25 * Math.sin((t - 242) * 9) * nao * (1 - smooth(243, 243.4, t)) }); rosto(G, null, t, nao > .5 ? 'determinado' : 'feliz', { olhosAbertos: true, look: [0, -.5 * (1 - nao)] });
    cam(C, [[0, [.9, 1.5, .9]], [6.7, [.7, 1.45, .1]]], [[0, [.4, 1.3, -3.0]], [6.7, [.4, 1.3, -3.0]]], u); return { tint: '#E8E2FF' }; }; }); }
function J7(t0, t1) { return mk(t0, t1, {}, (c) => { palco(c, { c1: '#2A1A1A', c2: '#4A2A2A' }); const pts = []; for (let i = 0; i <= 12; i++) pts.push(new THREE.Vector3(-7 + i * 1.2, 1.4 + 1.4 * Math.sin(i * 1.3) + (i % 3) * .5, 0)); const cv = new THREE.CatmullRomCurve3(pts); const m = new THREE.Mesh(new THREE.TubeGeometry(cv, 200, .12, 8), toon('#E2443A')); c.add(m);
  for (const p of pts) c.add(cyl(.03, .03, p.y, '#5A3A3A', p.x, p.y / 2, 0, { seg: 6 })); const car = rb(.6, .3, .4, '#F2C230', 0, 0, 0, { r: .08, out: .008 }); c.add(car); const q = icone('interrogacao', .7); c.add(q);
  return (t, u, C) => { const k = (u / 5.1) * .95; const p = cv.getPointAt(k), tg = cv.getTangentAt(k); car.position.copy(p).add(new THREE.Vector3(0, .22, 0)); car.rotation.z = Math.atan2(tg.y, tg.x); q.position.set(p.x, p.y + 1.1, 0);
    cam(C, [[0, [-3, 3, 9]], [5.1, [3, 3, 8]]], [[0, [-2, 1.8, 0]], [5.1, [2, 1.8, 0]]], u); return { sat: .9 }; }; }); }
function J8(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { republica(c); const G = ator(c, GUI20, .4, -3.0, .2);
  return (t, u, C) => { const pis = smooth(.6, .8, u) * (1 - smooth(1.4, 1.6, u)); G.pose({ ...idle(t), headZ: 8 }); rosto(G, null, t, 'feliz', { olhosAbertos: true, blink: 0, mouth: { open: 0, smile: .9 } });
    G.face({ emo: 'desconfiado', blink: 0, look: [.1, 0], mouth: { open: 0, smile: .9 } }); if (pis > .5) G.face({ emo: 'feliz', blink: 0, look: [0, 0], mouth: { open: .1, smile: 1 } });
    cam(C, [[0, [.5, 1.35, -.9]], [2.2, [.45, 1.3, -1.3]]], [[0, [.4, 1.2, -3.0]], [2.2, [.4, 1.2, -3.0]]], u); return { tint: '#E8E2FF' }; }; }); }

// ---------- K: a data e a insistência ----------
function K1(t0, t1) { return mk(t0, t1, {}, (c) => { const Q = quartoTeen(c, { ano: '2019' }); const cal = Q.cal;
  cal.paint('m', (x, W, H) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, W, H); x.fillStyle = '#C0392B'; x.fillRect(0, 0, W, H * .18); txt(x, 'MARÇO 2019', W / 2, H * .09, H * .09, '#FFFFFF'); const d = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']; d.forEach((s, i) => txt(x, s, W * .09 + i * W * .135, H * .25, H * .04, '#9A958A', 800));
    for (let i = 0; i < 31; i++) { const col = (i + 5) % 7, row = Math.floor((i + 5) / 7); txt(x, String(i + 1), W * .09 + col * W * .135, H * .33 + row * H * .11, H * .05, i === 13 ? '#C0392B' : '#3A3A44', i === 13 ? 900 : 600); }
    const cx = W * .09 + 4 * W * .135, cy = H * .33 + 2 * H * .11; x.strokeStyle = '#C0392B'; x.lineWidth = 8; x.beginPath(); x.ellipse(cx, cy, W * .07, H * .045, -.2, 0, 7); x.stroke(); });
  return (t, u, C) => { cam(C, [[0, [.0, 1.7, -3.9]], [6, [.15, 1.74, -5.45]]], [[0, [.2, 1.72, -6.38]], [6, [.2, 1.74, -6.38]]], u, 0, .5); return {}; }; }); }
function almoco(c) { const K = casaFamilia(c, { ano: '2018' }); const M = ator(c, MARCOSCASA, 0, 0); sentar(M, 1.15, -3.6, -Math.PI / 2, .48); const R = ator(c, REGINA, 0, 0); sentar(R, .2, -4.55, 0, .48); const G = ator(c, GUI20, 0, 0); sentar(G, -.75, -3.6, Math.PI / 2, .48);
  for (let i = 0; i < 3; i++) { const p = prato(); p.position.set([.7, .2, -.3][i], .8, [-3.6, -4.05, -3.6][i]); c.add(p); } const trav = cyl(.22, .2, .09, '#F4F1EA', .2, .84, -3.45, { out: .004 }); c.add(trav); c.add(sph(.16, '#C98A4A', .2, .9, -3.45, { seg: 12 })); c.add(cyl(.12, .1, .12, '#E8E2D6', -.1, .86, -3.2, { out: .004 })); return { K, M, R, G }; }
const comer = (t, ph = 0) => sentado({ shR: [55 + 10 * Math.sin(t * 3 + ph), 10], elR: 100 + 20 * Math.sin(t * 3 + ph), shL: [40, 10], elL: 70, headX: 10 });
function K2(t0, t1) { return mk(t0, t1, {}, (c) => { const { K, M, R, G } = almoco(c);
  return (t, u, C) => { M.pose(comer(t)); rosto(M, null, t, u > 3.5 ? 'tedio' : 'feliz'); R.pose(comer(t, 2)); rosto(R, null, t, 'neutro', { look: [-.3, 0] }); G.pose(gesto('gui', t, sentado({ shR: [50, 10], elR: 60 }), 1)); rosto(G, null, t, 'preocupado', { mouth: { open: .3 * Math.abs(Math.sin(t * 6)) }, look: [.5, 0] });
    cam(C, [[0, [-1.6, 2.6, .6]], [7.6, [-.4, 2.0, -.6]]], [[0, [.2, .9, -3.6]], [7.6, [.25, 1.0, -3.6]]], u); return {}; }; }); }
function K3(t0, t1) { return mk(t0, t1, {}, (c) => { const { K, M, R, G } = almoco(c);
  return (t, u, C) => { M.pose(comer(t)); rosto(M, null, t, 'tedio', { look: [-.5, 0] }); R.pose(sentado({})); rosto(R, null, t, 'preocupado', { look: [-.4, 0] }); G.pose(gesto('gui', t, sentado({ shR: [50, 10], elR: 60 }), 1.2)); rosto(G, 'gui', t, 'preocupado', { look: [.6, 0] });
    cam(C, [[0, [.5, 1.35, -2.7]], [4, [.35, 1.32, -2.85]]], [[0, [-.75, 1.15, -3.6]], [4, [-.75, 1.15, -3.6]]], u); return {}; }; }); }
function K4(t0, t1) { return mk(t0, t1, {}, (c) => { const { K, M, R, G } = almoco(c);
  return (t, u, C) => { const fl = smooth(1.6, 2.2, u) * (1 - smooth(3.6, 4.2, u)); M.pose(gesto('marcos', t, sentado({ shR: [lerp(30, 90, fl), lerp(10, 80, fl)], elR: lerp(60, 130, fl), headY: 10 }), .7)); rosto(M, 'marcos', t, fl > .5 ? 'determinado' : 'bravo', { look: [-.5, 0] });
    R.pose(sentado({})); rosto(R, null, t, 'preocupado'); G.pose(sentado({})); rosto(G, null, t, 'triste', { look: [.6, 0] });
    cam(C, [[0, [-.1, 1.4, -2.8]], [5, [.05, 1.38, -2.9]]], [[0, [1.15, 1.25, -3.6]], [5, [1.15, 1.25, -3.6]]], u); return {}; }; }); }
function K5(t0, t1) { return mk(t0, t1, {}, (c) => { const { K, M, R, G } = almoco(c);
  return (t, u, C) => { M.pose(sentado({ shL: [55, -10], shR: [55, -10], elL: 110, elR: 110 })); rosto(M, null, t, 'bravo'); R.pose(sentado({})); rosto(R, null, t, 'preocupado'); G.pose(gesto('gui', t, sentado({ shR: [60, 10], elR: 40, shL: [60, 10], elL: 40 }), .6)); rosto(G, 'gui', t, 'triste', { look: [.6, 0], lagrima: u > .9 });
    cam(C, [[0, [.45, 1.3, -2.95]], [1.75, [.3, 1.28, -3.05]]], [[0, [-.75, 1.15, -3.6]], [1.75, [-.75, 1.15, -3.6]]], u); return {}; }; }); }
function K6(t0, t1) { return mk(t0, t1, {}, (c) => { const { K, M, R, G } = almoco(c); M.root.visible = false; const M2 = ator(c, MARCOSCASA, 1.6, -3.6, -Math.PI / 2);
  return (t, u, C) => { const sobe = smooth(0, .5, u); M2.root.position.x = lerp(1.15, 1.55, sobe); M2.pose(mixPose(sentado({}), gesto('marcos', t, { ...idle(t), shR: [70, 10], elR: 20, lean: 8 }, 1.3), sobe)); M2.root.position.y = lerp(.2, 0, sobe); M2.sombra.visible = sobe > .95; rosto(M2, 'marcos', t, 'bravo', { look: [-.4, -.2] });
    R.pose(sentado({})); rosto(R, null, t, 'medo'); G.pose(sentado({ headX: -10 })); rosto(G, null, t, 'triste', { look: [.6, -.4] });
    camT(C, [[0, [-1.3, 1.1, -2.2]], [3.3, [-1.1, 1.15, -2.5]]], [[0, [1.5, 1.45, -3.6]], [3.3, [1.5, 1.5, -3.6]]], u, u < .6 ? .01 : 0, t); return {}; }; }); }
function K7(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const Q = quartoTeen(c, { noite: true, ano: '2018' }); const G = ator(c, GUI20, 0, 0); sentar(G, -2.42, -4.9, Math.PI / 2, .62);
  return (t, u, C) => { G.pose(sentado({ shL: [40, 10], elL: 100, shR: [40, 10], elR: 100, lean: 15, headX: 5 })); rosto(G, null, t, u < 4 ? 'triste' : 'determinado', { look: [0, .1] });
    cam(C, [[0, [1.2, 2.0, -2.0]], [8.7, [-1.0, 1.25, -4.4]]], [[0, [-2.42, 1.0, -4.9]], [8.7, [-2.42, 1.15, -4.9]]], u); return { tint: '#E6EAFF', vig: .35, exposure: 1.35 }; }; }); }

export const ATO3 = [[H1, 179.07, 184.0], [H2, 184.0, 186.45], [H3, 186.45, 191.0], [H4, 191.0, 194.2], [H5, 194.2, 197.55], [H6, 197.55, 200.5], [H7, 200.5, 202.37], [H8, 202.37, 206.1], [H9, 206.1, 209.2],
  [I1, 209.2, 215.5], [I2, 215.5, 220.6], [J1, 220.6, 223.25], [J2, 223.25, 230.1], [J3, 230.1, 232.25], [J4, 232.25, 234.1], [J5, 234.1, 236.7], [J6, 236.7, 243.45], [J7, 243.45, 248.6], [J8, 248.6, 250.8],
  [K1, 250.8, 256.8], [K2, 256.8, 264.4], [K3, 264.4, 268.4], [K4, 268.4, 273.45], [K5, 273.45, 275.2], [K6, 275.2, 278.5], [K7, 278.5, 287.19]];
