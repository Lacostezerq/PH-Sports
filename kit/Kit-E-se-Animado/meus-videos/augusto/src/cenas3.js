// Ato 3 (188.5 a 290 s): semana 6 (mundo 64x mais lento), semana 7, semana 8 na Paulista, fama, Bia chorando, CTA de comentário.
import * as THREE from 'three';
import { smooth, lerp, clamp } from './motor/core.js';
import { luzToon, bx, rb, cyl, sph, toon, ctex, tm } from './motor/toon.js';
import { idle, walk, run, mixPose, sentado, pisca } from './motor/char3d.js';
import { mk, cam, camT, ator, rosto, gesto, deitar, icone, cartaz } from './lib.js';
import { AUGUSTO, BIA, LURDES, JORGE, TERNO, REPORTER, CIENTISTA, povo } from './elenco.js';
import { paulista, bairro } from './sets.js';
import { cozinha, quarto, pizzaria, fachadaPizzaria, comodo, janela, cadeira as import_cadeira } from './interiores.js';
import { caixaPizza, bolsaTermica, quebrarPredio, carro, celular, casaZL, ceu } from './mundo.js';
import { estilhacos, onda, coneVapor, poeira, linhasVel, rastro, brilho, sprite } from './efeitos.js';
import { w } from './fala.js';

const comBolsa = (k) => { const b = bolsaTermica(); k.torsoG.add(b); b.position.set(0, .25, -.27); return b; };
const naMao = (k, box) => { k.hands.R.add(box); box.position.set(0, -.07, .06); box.rotation.set(Math.PI / 2, 0, 0); };
const agachado = (u, ph = 0) => ({ bob: -.28, lean: 38, hipL: [85, 10], hipR: [85, 10], knL: 125, knR: 125, shL: [150 + Math.sin(u * 9 + ph) * 3, 25], shR: [150, 25], elL: 115, elR: 115, headX: 25 });
function formula(cor = '#E2443A') { const g = new THREE.Group(); g.add(rb(.8, .35, 3.4, cor, 0, .35, 0, { r: .15, out: .012 })); g.add(rb(.5, .3, .8, '#1E1E26', 0, .6, -.2, { r: .12 })); g.add(rb(1.9, .06, .45, cor, 0, .22, 1.75, { r: .02, out: .01 })); g.add(rb(1.4, .35, .1, cor, 0, .78, -1.6, { r: .03, out: .01 })); g.add(rb(.08, .4, .4, '#1E1E26', -.6, .55, -1.6)); g.add(rb(.08, .4, .4, '#1E1E26', .6, .55, -1.6));
  const pneu = new THREE.CylinderGeometry(.34, .34, .36, 18); pneu.rotateZ(Math.PI / 2); const R = []; for (const [x, z] of [[-.75, 1.2], [.75, 1.2], [-.8, -1.15], [.8, -1.15]]) { const w = tm(pneu, '#1E1E26', { pos: [x, .34, z], out: .01 }); g.add(w); R.push(w); } g.userData.rodas = R;
  const n = cartaz(.5, .3, (x, W, H) => { x.fillStyle = '#FFFFFF'; x.beginPath(); x.arc(W / 2, H / 2, H * .45, 0, 7); x.fill(); x.fillStyle = '#1B1420'; x.font = `900 ${H * .6}px Inter`; x.textAlign = 'center'; x.fillText('7', W / 2, H * .72); }); n.position.set(.41, .4, .3); n.rotation.y = Math.PI / 2; g.add(n); return g; }
function vanTV() { const g = carro('#F4F1EA'); g.scale.set(1.15, 1.35, 1.2); const logo = cartaz(1.8, .5, (x, W, H) => { x.fillStyle = '#E2443A'; x.fillRect(0, 0, W, H); x.fillStyle = '#FFFFFF'; x.font = `900 ${H * .55}px Inter`; x.textAlign = 'center'; x.fillText('TV NOTÍCIA', W / 2, H * .72); }); logo.position.set(.92, .65, 0); logo.rotation.y = Math.PI / 2; g.add(logo);
  const d = new THREE.Mesh(new THREE.SphereGeometry(.45, 24, 12, 0, Math.PI * 2, 0, 1.0), toon('#E8E4DA', { side: THREE.DoubleSide })); d.position.set(0, 1.75, -.5); d.rotation.x = -.8; g.add(d); g.add(cyl(.04, .04, .4, '#9EA2AA', 0, 1.55, -.5)); return g; }
function televisao(draw) { const g = new THREE.Group(); g.add(rb(1.9, 1.15, .12, '#1E1E26', 0, 0, 0, { r: .04, out: .012 })); const t = ctex(960, 560, draw); const s = new THREE.Mesh(new THREE.PlaneGeometry(1.78, 1.03), new THREE.MeshBasicMaterial({ map: t })); s.position.z = .065; g.add(s); g.add(cyl(.05, .05, .4, '#1E1E26', 0, -.75, -.05)); g.add(rb(.6, .05, .3, '#1E1E26', 0, -.95, -.05)); return g; }
const telaPlantao = (x, W, H) => { const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#7EC4F0'); g.addColorStop(1, '#D6EEF9'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.fillStyle = '#9CC9E8'; for (let i = 0; i < 6; i++) x.fillRect(40 + i * 150, 60 + (i % 2) * 30, 110, H * .7); x.fillStyle = '#56585F'; x.fillRect(0, H * .66, W, H * .34);
  x.fillStyle = '#E2443A'; x.beginPath(); x.arc(W * .5, H * .52, 38, 0, 7); x.fill(); x.fillStyle = '#B5774C'; x.beginPath(); x.arc(W * .5, H * .4, 34, 0, 7); x.fill(); x.fillStyle = '#1C1416'; x.beginPath(); x.arc(W * .5, H * .36, 30, Math.PI, 0); x.fill();
  x.fillStyle = '#E2443A'; x.fillRect(0, H * .74, W * .3, 50); x.fillStyle = '#FFFFFF'; x.font = '900 34px Inter'; x.fillText('PLANTÃO', 20, H * .74 + 37);
  x.fillStyle = '#1B1420'; x.fillRect(0, H * .74 + 50, W, 80); x.fillStyle = '#FFFFFF'; x.font = '800 40px Inter'; x.fillText('GAROTO QUEBRA A BARREIRA DO SOM NA PAULISTA', 20, H * .74 + 105); };

// ---------- P: semana 6 ----------
function P1(t0, t1) { return mk(t0, t1, {}, (c, s) => { paulista(c, { alt: [12, 20], antena: false, nGente: 0, carros: 0 }); const F = formula(); F.rotation.y = Math.PI; c.add(F); const A = ator(c, AUGUSTO, 0, 0, Math.PI); comBolsa(A); const LV = linhasVel(c, s.camera); const Rr = rastro(c);
  return (t, u, C) => { const z = -u * 40, cansa = smooth(5.2, 5.7, u); F.position.set(-2.4, 0, z - .2 + Math.sin(u * 2) * .2); F.userData.rodas.forEach(w => w.rotation.x = -u * 40 / .34); A.root.position.set(-4.6, 0, z); A.pose(run(u, 3.8, 1.15)); rosto(A, null, t, cansa > .5 ? 'triste' : 'determinado'); Rr(-4.6, 0, z, 0, -1, 7, 1);
    cam(C, [[0, [-1.0, 1.0, z - 6]]], [[0, [-3.4, .8, z]]], 0); LV(t, .6); return { sat: lerp(1.05, .7, cansa) }; }; }); }
function congelaPizzaria(c) { const Z = pizzaria(c); const J = ator(c, JORGE, .6, -4.3); const massa = new THREE.Mesh(new THREE.CylinderGeometry(.28, .28, .02, 24), toon('#F2E2B8')); massa.position.set(.6, 2.3, -4.0); massa.rotation.set(.3, 0, .2); c.add(massa); const B = ator(c, BIA, -2.6, -4.3, .3);
  const cl = []; for (let i = 0; i < 2; i++) { const k = povo(i + 4); k.place(-3.6 + i * 6.5, -1.2 + i * .3, 0, i ? -2.4 : 2.2); c.add(k.root); cl.push(k); } return { Z, J, B, cl, massa }; }
function P2(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); const Q = congelaPizzaria(c); const A = ator(c, AUGUSTO, 2.6, -1.6, -2.2); comBolsa(A);
  return (t, u, C) => { const sl = 1 / 64; Q.Z.rel.set(19, 42, 10 + u * sl * 60); Q.J.pose({ shL: [150, 20], elL: 20, shR: [150, 20], elR: 20, headX: -20 }); rosto(Q.J, null, t, 'feliz', { lento: .02, blink: 0, look: [0, -.8] }); Q.B.pose({ shR: [40, 15], elR: 60 }); rosto(Q.B, null, t, 'neutro', { lento: .02, blink: .5 });
    Q.cl.forEach((k, i) => { k.pose(walk(1 + i, 1.7)); rosto(k, null, t, 'feliz', { lento: .02, mouth: { open: .5, round: .2 }, blink: 0 }); });
    const x = 2.6 - u * .5; A.root.position.x = x; A.pose(walk(u, 1.3, .7)); rosto(A, null, t, 'triste', { look: [-.6, 0] });
    cam(C, [[0, [2.6, 1.7, 1.8]], [5, [1.8, 1.65, 1.3]]], [[0, [-.2, 1.3, -3.6]], [5, [-.4, 1.3, -3.6]]], u); return { sat: .75, tint: '#E6EEFF' }; }; }); }
function P3(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); pizzaria(c); const B = ator(c, BIA, -2.6, -4.3, .3); const A = ator(c, AUGUSTO, -1.6, -2.6, -2.6); comBolsa(A);
  const bal = cartaz(1.8, .8, (x, W, H) => { x.fillStyle = '#FFFFFF'; x.beginPath(); x.roundRect(6, 6, W - 12, H - 50, 46); x.fill(); x.beginPath(); x.moveTo(W * .25, H - 46); x.lineTo(W * .18, H - 6); x.lineTo(W * .38, H - 46); x.fill(); x.lineWidth = 8; x.strokeStyle = '#1B1420'; x.beginPath(); x.roundRect(6, 6, W - 12, H - 50, 46); x.stroke(); }, { basic: true, transp: true }); c.add(bal);
  const letras = ['A', 'u', '.', '.', '.']; const L = letras.map((l, i) => { const m = cartaz(.18, .26, (x, W, H) => { x.fillStyle = '#1B1420'; x.font = `900 ${H * .8}px Inter`; x.textAlign = 'center'; x.fillText(l, W / 2, H * .8); }, { basic: true, transp: true }); bal.add(m); m.position.set(-.5 + i * .2, .12, .02); return m; });
  return (t, u, C) => { B.pose({ shR: [40, 15], elR: 60 }); rosto(B, null, t, 'neutro', { lento: .02, mouth: { open: .35 + .05 * Math.sin(u * .4), round: .6 }, blink: 0 }); A.pose({ ...idle(u), hipR: [Math.max(0, Math.sin(u * 16)) * 10, 0], shL: [30, 30], elL: 120, shR: [30, 30], elR: 120 }); rosto(A, null, t, 'tedio', { look: [-.3, 0] });
    bal.position.set(-2.3, 2.15, -4.1); bal.lookAt(C.position); L.forEach((m, i) => { m.visible = u > 1 + i * 1.6; });
    cam(C, [[0, [.9, 1.55, -3.0]], [7, [.75, 1.52, -3.2]]], [[0, [-2.1, 1.35, -3.6]], [7, [-2.1, 1.35, -3.6]]], u); return { sat: .8 }; }; }); }
function P4(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); pizzaria(c); const B = ator(c, BIA, -2.6, -4.3, .4);
  return (t, u, C) => { B.pose({ ...idle(u * .1), shR: [40, 15], elR: 60 }); rosto(B, 'bia', t, 'preocupado', { lento: .15, olhosAbertos: true, blink: Math.min(1, pisca(t * .15, 2)), look: [.4, 0] });
    cam(C, [[0, [-1.75, 1.33, -2.9]], [5.6, [-1.95, 1.3, -3.25]]], [[0, [-2.6, 1.15, -4.3]], [5.6, [-2.6, 1.15, -4.3]]], u); return { sat: .8, tint: '#E6EEFF' }; }; }); }

// ---------- Q: espera e espera ----------
function Q1(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); pizzaria(c); const B = ator(c, BIA, -2.6, -4.3, .4); const A = ator(c, AUGUSTO, -1.6, -2.6, -2.6); comBolsa(A); const z = icone('zzz', .1); c.add(z);
  const bz = cartaz(.9, .4, (x, W, H) => { x.fillStyle = '#F2C14E'; x.font = `900 ${H * .7}px Inter`; x.textAlign = 'center'; x.lineWidth = 10; x.strokeStyle = '#1B1420'; x.strokeText('BZZZ', W / 2, H * .75); x.fillText('BZZZ', W / 2, H * .75); }, { basic: true, transp: true }); c.add(bz);
  return (t, u, C) => { B.pose({ shR: [40, 15], elR: 60 }); rosto(B, null, t, 'preocupado', { lento: .02, mouth: { open: .3, round: .7 }, blink: 0 });
    const e1 = w(595), e2 = w(597), e3 = w(599); // "espera", "espera", "espera"
    let p; if (t < 213.6) p = { ...idle(u), shR: [30, 20], elR: 40 }; else if (t < e1) p = { ...idle(u), shL: [20, 20], shR: [20, 20] }; else if (t < e2) p = sentado({ headX: 8 }); else if (t < e3) p = { ...idle(u), shL: [150, 20], elL: 150, shR: [150, 20], elR: 150, headZ: 10 }; else p = sentado({ lean: -20, headX: -10, shL: [40, 40], shR: [40, 40] });
    A.pose(p); A.root.position.y = (t >= e1 && t < e2) || t >= e3 ? -.02 : 0;
    const fala = t > 212.7 && t < 214.4; rosto(A, null, t, t < e1 ? 'determinado' : 'tedio', { mouth: fala ? { open: .3 + .6 * ((Math.floor(t * 40) % 2)), round: .2 } : undefined, look: [-.3, 0] });
    bz.visible = fala || (t > 214.4 && t < 215.8); bz.position.set(-2.1, 1.9, -3.4); bz.lookAt(C.position); z.visible = false;
    cam(C, [[0, [.9, 1.5, -2.9]], [7.6, [.75, 1.47, -3.1]]], [[0, [-2.1, 1.05, -3.6]], [7.6, [-2.1, 1.05, -3.6]]], u); return { sat: .8 }; }; }); }
function Q2(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: 1.2, hemi: 1.0 }); const Z = pizzaria(c); Z.rel.set(6, 2); const cad = new THREE.Group(); c.add(cad); const A = ator(c, AUGUSTO, 1.6, -.2, -.5); comBolsa(A); import_cadeira(c, 1.6, -.28, -.5);
  // cadeiras viradas em cima das mesas
  for (const [x, z] of [[-3.8, -1.2], [3.6, -1.4]]) for (const s of [-1, 1]) { const ch = new THREE.Group(); ch.add(rb(.44, .06, .42, '#9A6236', 0, 0, 0, { r: .02 })); ch.add(rb(.44, .5, .05, '#9A6236', 0, -.27, -.19, { r: .02 })); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) ch.add(rb(.05, .45, .05, '#9A6236', a * .18, .23, b * .17, { r: .01 })); ch.position.set(x + s * .22, .84, z); ch.rotation.z = Math.PI; c.add(ch); }
  const pl = cartaz(.6, .3, (x, W, H) => { x.fillStyle = '#E2443A'; x.fillRect(0, 0, W, H); x.fillStyle = '#FFFFFF'; x.font = `900 ${H * .5}px Inter`; x.textAlign = 'center'; x.fillText('FECHADO', W / 2, H * .68); }); pl.position.set(-4.6, 2.0, -6.85); c.add(pl);
  return (t, u, C) => { A.pose(sentado({ headX: 10, shL: [30, 10], elL: 60, shR: [30, 10], elR: 60 })); A.root.position.y = .13; rosto(A, null, t, 'tedio', { look: [0, .3] });
    cam(C, [[0, [-.6, 1.9, 2.6]], [7.9, [.2, 1.6, 1.6]]], [[0, [1.4, .8, -.6]], [7.9, [1.5, .85, -.4]]], u); return { sat: .7, exposure: .95 }; }; }); }

// ---------- R: semana 7 ----------
function R1(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); pizzaria(c); const B = ator(c, BIA, -1.9, -4.3, 0); const A = ator(c, AUGUSTO, -1.9, -2.85, Math.PI); comBolsa(A);
  return (t, u, C) => { B.pose({ ...idle(u), shR: [80, 2], elR: 6 }); rosto(B, null, t, 'apaixonado', { look: [0, .2] });
    const ap = smooth(.5, 2.5, u), rec = smooth(3.8, 4.6, u); const trem = Math.sin(u * 60) * 2 * ap * (1 - rec); A.pose({ ...idle(u), lean: 10 * ap * (1 - rec), shL: [80 * ap * (1 - rec) + trem, 4], elL: 6 }); rosto(A, null, t, rec > .5 ? 'triste' : 'preocupado', { look: [0, .6] });
    cam(C, [[0, [.6, 1.25, -3.55]], [6, [.45, 1.22, -3.55]]], [[0, [-1.9, .95, -3.57]], [6, [-1.9, .95, -3.57]]], u); return {}; }; }); }
function R2(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); cozinha(c); const L = ator(c, LURDES, .4, -3.6, -1.0); const A = ator(c, AUGUSTO, -.9, -3.0, 1.2);
  return (t, u, C) => { L.pose({ ...idle(u), shL: [90, 50], elL: 20, shR: [90, 50], elR: 20 }); rosto(L, null, t, 'feliz', { olhosAbertos: true, look: [-.5, 0] }); const rec = smooth(.6, 1.4, u); A.root.position.x = -.9 - rec * .4; A.pose({ ...idle(u), shL: [30 * (1 - rec), 30], shR: [30 * (1 - rec), 30], lean: -6 * rec }); rosto(A, null, t, rec > .5 ? 'triste' : 'feliz', { look: [.5, 0] });
    cam(C, [[0, [-.2, 1.45, -.4]], [2, [-.3, 1.4, -.7]]], [[0, [-.3, 1.05, -3.3]], [2, [-.3, 1.05, -3.3]]], u); return {}; }; }); }
function R3(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .6, hemi: .6, sky: '#6A7AC0', key: '#9FB0FF' }); const Q = quarto(c, { noite: true }); Q.rel.set(2, 17); const lua = sph(.25, '#FFF6D8', -.2, 2.1, -6.2, { seg: 16 }); lua.material = new THREE.MeshBasicMaterial({ color: '#FFF6D8' }); c.add(lua);
  const A = ator(c, AUGUSTO, -2.2, -3.4); deitar(A, -2.2, .62, -3.4, .25);
  return (t, u, C) => { const vira = Math.sin(u * 1.4); A.pose({ headY: vira * 30 }); rosto(A, null, t, 'tedio', { olhosAbertos: true, look: [0, -.4], blink: 0 });
    cam(C, [[0, [-2.1, 1.95, -3.9]], [6.2, [-2.12, 1.9, -4.0]]], [[0, [-2.2, 1.1, -4.52]], [6.2, [-2.2, 1.1, -4.52]]], u); return { tint: '#C8D4FF' }; }; }); }

// ---------- S: semana 8 ----------
function S1(t0, t1) { return mk(t0, t1, {}, (c) => { const p = paulista(c, { nGente: 18 }); return (t, u, C) => { p.carros.forEach(({ k, s, z0, v }) => { k.position.z = z0 + s * -v * t * .0; }); cam(C, [[0, [-2, 30, 40]], [2, [-2, 26, 34]]], [[0, [0, 10, -60]], [2, [0, 9, -60]]], u); return { sat: .9 }; }; }); }
function S2(t0, t1) { return mk(t0, t1, {}, (c, s) => { const p = paulista(c, { nGente: 18 }); const A = ator(c, AUGUSTO, -4, 0, Math.PI); const box = caixaPizza(); naMao(A, box); const V = coneVapor(A.root, { r: .9, l: 2.2, y: .85 }); const Rr = rastro(c); const LV = linhasVel(c, s.camera);
  return (t, u, C) => { const z = 40 - u * 12; A.root.position.z = z; A.pose(run(u * .5, 3.2, 1.1)); rosto(A, null, t, 'determinado'); V(smooth(3.5, 5.5, u) * .6); Rr(-4, 0, z, 0, -1, 6, 1);
    cam(C, [[0, [-1.5, 1.2, z - 6]]], [[0, [-4, 1.0, z]]], 0); LV(t, .3); return {}; }; }); }
function S3(t0, t1) { return mk(t0, t1, {}, (c) => { const p = paulista(c, { nGente: 18 }); const A = ator(c, AUGUSTO, -4, 0, Math.PI); const box = caixaPizza(); naMao(A, box); const V = coneVapor(A.root, { r: 1.0, l: 2.6, y: .85 }); const Rr = rastro(c); const O = onda(c, [-4, 1, 0], { r: 80, dur: 1.4 });
  const cel = celular(.09, .18); A.hands.L.add(cel); cel.position.set(-.02, .02, .08); cel.rotation.set(-1.2, 0, 0);
  return (t, u, C) => { cel.paint('h', (x, W, H) => { x.fillStyle = '#1B2550'; x.fillRect(0, 0, W, H); x.fillStyle = '#FFFFFF'; x.font = '800 70px Inter'; x.textAlign = 'center'; x.fillText('15:03', W / 2, H * .4); x.fillStyle = '#F2546E'; x.font = '700 28px Inter'; x.fillText('ATRASADO!', W / 2, H * .55); });
    const tl = (t - t0) * .12; const z = 10 - tl * 30; A.root.position.z = z; const olha = t < 252.1; A.pose(olha ? { ...run(tl * 3, 3.2, 1.1), shL: [70, 10], elL: 110, headX: 15 } : run(tl * 3, 3.2, 1.1)); rosto(A, null, t, olha ? 'medo' : 'determinado', { look: olha ? [-.3, .8] : [0, 0] }); cel.visible = olha;
    const sv = smooth(w(697) - .2, w(699), t); V(sv); Rr(-4, 0, z, 0, -1, 5, .6 + sv * .4); O(t - (w(700) + .1)); A.root.position.z = z;
    camT(C, [[0, [-1.6, 1.25, z - 3.6]]], [[0, [-4, 1.0, z]]], 0, t > w(700) ? .15 * Math.exp(-(t - w(700)) * 2) : 0, t); return { flash: t > w(700) + .1 && t < w(700) + .35 ? .5 : 0 }; }; }); }
function S4(t0, t1) { return mk(t0, t1, {}, (c) => { const p = paulista(c, { nGente: 18 }); const E = estilhacos(c, (() => { const E2 = []; p.P.forEach((b) => { if (b.z < -60 || b.z > 20) return; for (let k = 0; k < 3; k++) E2.push({ p: [b.s * 18.4, 6 + k * 9, b.z], n: [-b.s, 0, 0], w: b.d * .9, h: 8 }); }); return E2; })(), { n: 900, v: 10, size: .35, fade: 9, seed: 11 });
  return (t, u, C) => { if (u > .05) p.P.forEach((b, i) => { if (!b.q) { quebrarPredio(b.g, i + 5); b.q = 1; } }); E(u * .5);
    const lev = smooth(2.6, 3.6, u); p.gente.forEach(({ k, ph }, i) => { k.pose(mixPose(agachado(u, ph), idle(u, ph), lev)); rosto(k, null, t, lev > .5 ? 'surpreso' : 'medo', { lento: .05 }); });
    camT(C, [[0, [6, 3, 14]], [4, [5, 3.5, 10]]], [[0, [-2, 8, -30]], [4, [-2, 7, -30]]], u, .12 * Math.exp(-u * 1.5), t); return {}; }; }); }
function S5(t0, t1) { return mk(t0, t1, { bg: '#F3E3C8' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6] }); comodo(c, { w: 8, d: 6, parede: '#F3D9B0', tipoPiso: 'madeira' }); const tv = televisao(telaPlantao); tv.position.set(0, 1.5, -5.5); c.add(tv);
  const sofa = new THREE.Group(); sofa.add(rb(2.6, .45, .9, '#3E7CC8', 0, .3, 0, { r: .1, out: .01 })); sofa.add(rb(2.6, .7, .25, '#3E7CC8', 0, .7, .4, { r: .1, out: .01 })); sofa.position.set(0, 0, -1.4); c.add(sofa);
  const fam = []; for (let i = 0; i < 3; i++) { const k = povo(i + 2); k.place(-.8 + i * .8, -1.45, .1, Math.PI); c.add(k.root); fam.push(k); }
  return (t, u, C) => { fam.forEach((k, i) => { k.pose(sentado({ headX: -6, shL: [20 + 30 * (i === 1), 10], elL: 40 })); rosto(k, null, t, 'surpreso', { lento: .05, mouth: { open: .5, round: .9 } }); });
    cam(C, [[0, [0, 2.15, .4]], [3.4, [0, 2.0, -.9]]], [[0, [0, 1.35, -5]], [3.4, [0, 1.45, -5]]], u); return {}; }; }); }
function S6(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 0 }); const van = vanTV(); van.position.set(-6.6, 0, -6); c.add(van);
  const R = ator(c, REPORTER, -4.4, -8.8, Math.PI / 2 + .6); const mic = cyl(.03, .03, .2, '#1E1E26', 0, 0, 0); mic.add(sph(.05, '#E2443A', 0, .12, 0)); R.hands.R.add(mic); mic.position.set(0, .05, .06);
  const Ci = ator(c, CIENTISTA, -1.8, -10.6, -.6); const cel = celular(.09, .18); Ci.hands.R.add(cel); cel.position.set(.02, .1, .02); cel.rotation.set(0, 0, 0);
  const G1 = ator(c, TERNO, -3.0, -11.4, 0); const G2 = ator(c, TERNO, -2.3, -12.0, 0);
  return (t, u, C) => { R.pose(gesto(null, t, { ...idle(u), shR: [70, 15], elR: 60 })); rosto(R, null, t, 'feliz', { mouth: { open: (Math.sin(u * 11) + 1) * .3, round: .2 } });
    Ci.pose({ ...idle(u), shR: [150, 10], elR: 150 }); rosto(Ci, null, t, 'surpreso', { mouth: { open: (Math.sin(u * 9) + 1) * .3, round: .5 } }); G1.pose(idle(u)); rosto(G1, null, t, 'neutro'); G2.pose(idle(u, 1)); rosto(G2, null, t, 'neutro');
    cam(C, [[0, [1.6, 1.8, -3.0]], [4.8, [1.0, 1.7, -4.4]]], [[0, [-3.4, 1.1, -10]], [4.8, [-3.0, 1.1, -10.5]]], u); return {}; }; }); }
function S7(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 21 }); const f = fachadaPizzaria(); f.position.set(0, 0, -12); c.add(f); const B = ator(c, BIA, 0, -11.4, 0);
  return (t, u, C) => { B.pose({ ...idle(u, 0, .5), shL: [30, 10], elL: 60, shR: [30, 10], elR: 60 }); rosto(B, null, t, 'choro', { look: [.2, 0] });
    cam(C, [[0, [-.5, 2.2, -5]], [4.3, [0, 1.4, -9.3]]], [[0, [0, 2.0, -11.5]], [4.3, [0, 1.15, -11.5]]], u); return { sat: .9 }; }; }); }
function S8(t0, t1) { return mk(t0, t1, {}, (c) => { bairro(c, { seed: 21 }); const f = fachadaPizzaria(); f.position.set(0, 0, -12); c.add(f); const B = ator(c, BIA, 0, -11.4, 0); const A = ator(c, AUGUSTO, .4, -10.6, Math.PI + .3); comBolsa(A);
  return (t, u, C) => { B.pose(gesto('bia', t, { ...idle(u, 0, .5), shL: [30, 10], elL: 60 }, .5)); rosto(B, 'bia', t, 'choro', { olhosAbertos: true, look: [.4, 0] }); A.pose({ ...idle(u, 0, .4), shR: [25, 10], elR: 30 }); rosto(A, null, t, 'triste', { look: [-.4, 0] });
    cam(C, [[0, [-.9, 1.4, -9.2]], [6.5, [-1.0, 1.35, -9.5]]], [[0, [0, 1.15, -11.4]], [6.5, [0, 1.15, -11.4]]], u); return { sat: .9 }; }; }); }

// ---------- T: CTA de comentário ----------
function T1(t0, t1) { return mk(t0, t1, { bg: '#151830' }, (c) => { c.add(new THREE.HemisphereLight('#AFC0FF', '#151830', 1.0)); const k = new THREE.DirectionalLight('#FFD99A', 2); k.position.set(-3, 4, 3); c.add(k); const A = ator(c, AUGUSTO, 2.2, 0, -.4); comBolsa(A); A.sombra.visible = false;
  const ic = cartaz(1.1, 1.0, (x, W, H) => { x.fillStyle = '#FFFFFF'; x.beginPath(); x.roundRect(10, 10, W - 20, H * .72, 50); x.fill(); x.beginPath(); x.moveTo(W * .25, H * .7); x.lineTo(W * .2, H * .95); x.lineTo(W * .45, H * .7); x.fill(); x.fillStyle = '#3E7CC8'; for (let i = 0; i < 3; i++) { x.beginPath(); x.arc(W * (.3 + i * .2), H * .38, W * .06, 0, 7); x.fill(); } }, { basic: true, transp: true }); ic.position.set(1.2, 2.1, .2); c.add(ic);
  return (t, u, C) => { A.pose({ ...idle(u), shR: [60, 40], elR: 90, headZ: 8 }); rosto(A, null, t, 'feliz', { look: [-.6, .2] }); ic.scale.setScalar(smooth(.2, .6, u) * (1 + .05 * Math.sin(u * 4))); ic.position.y = 2.1 + Math.sin(u * 2) * .05;
    cam(C, [[0, [1.0, 1.4, 4.4]], [10.6, [1.2, 1.4, 3.6]]], [[0, [1.0, 1.3, 0]], [10.6, [1.2, 1.3, 0]]], u); return { vig: .5 }; }; }); }

export const ATO3 = [[P1, 188.5, 194.2], [P2, 194.2, 199.2], [P3, 199.2, 206.3], [P4, 206.3, 211.9], [Q1, 211.9, 219.5], [Q2, 219.5, 227.4], [R1, 227.4, 233.4], [R2, 233.4, 235.4], [R3, 235.4, 241.6],
  [S1, 241.6, 243.6], [S2, 243.6, 249.6], [S3, 249.6, 256.4], [S4, 256.4, 260.4], [S5, 260.4, 263.8], [S6, 263.8, 268.6], [S7, 268.6, 272.9], [S8, 272.9, 279.4], [T1, 279.4, 290.0]];
