// Ato 4 (290 a 424.4 s): a conta, estátuas, tentar parar, o hospital, os seis dias, a carta, a despedida.
import * as THREE from 'three';
import { smooth, lerp, clamp, rng } from './motor/core.js';
import { luzToon, bx, rb, cyl, sph, toon, ctex } from './motor/toon.js';
import { idle, walk, run, mixPose, sentado, pisca } from './motor/char3d.js';
import { mk, cam, camT, ator, rosto, gesto, deitar, icone, cartaz } from './lib.js';
import { AUGUSTO, BIA, LURDES, JORGE, MEDICO, povo } from './elenco.js';
import { paulista, bairro } from './sets.js';
import { quarto, pizzaria, hospital, cadeira, mesa } from './interiores.js';
import { bolsaTermica, celular, relogioParede } from './mundo.js';
import { rastro, linhasVel, brilho, sprite, poeira } from './efeitos.js';
import { stars } from './motor/kit2.js';
import { w } from './fala.js';

const comBolsa = (k) => { const b = bolsaTermica(); k.torsoG.add(b); b.position.set(0, .25, -.27); return b; };
/** Papel com texto manuscrito que aparece aos poucos (linhas: [texto, tempo]). */
function papel(linhas, w2 = .6, h2 = .8) { const cv = document.createElement('canvas'); cv.width = 600; cv.height = 800; const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w2, h2), new THREE.MeshToonMaterial({ map: t })); let last = -1;
  m.paint = (tt) => { const n = linhas.reduce((a, [, s], i) => tt >= s ? i + 1 : a, 0); const frac = n < linhas.length ? 0 : 1; const key = n; if (key === last) return; last = key;
    x.fillStyle = '#FBF7EC'; x.fillRect(0, 0, 600, 800); x.strokeStyle = '#C9D8EE'; x.lineWidth = 3; for (let i = 0; i < 14; i++) { x.beginPath(); x.moveTo(30, 90 + i * 52); x.lineTo(570, 90 + i * 52); x.stroke(); }
    x.fillStyle = '#2A3A7A'; x.font = '700 50px Caveat'; linhas.slice(0, n).forEach(([s], i) => x.fillText(s, 44, 82 + i * 104)); t.needsUpdate = true; }; return m; }
function terra(r = 3) { const t = ctex(1024, 512, (x) => { x.fillStyle = '#2E6FB8'; x.fillRect(0, 0, 1024, 512); const R = rng(3); x.fillStyle = '#5DAA4E'; for (let i = 0; i < 14; i++) { const cx = R() * 1024, cy = 100 + R() * 312; x.beginPath(); for (let k = 0; k < 12; k++) { const a = k / 12 * 6.283, rr = 40 + R() * 70; x.lineTo(cx + Math.cos(a) * rr * 1.4, cy + Math.sin(a) * rr); } x.fill(); } x.fillStyle = '#F4F1EA'; x.fillRect(0, 0, 1024, 30); x.fillRect(0, 482, 1024, 30); x.fillStyle = 'rgba(255,255,255,.55)'; for (let i = 0; i < 30; i++) { x.beginPath(); x.ellipse(R() * 1024, R() * 512, 40 + R() * 60, 8 + R() * 10, 0, 0, 7); x.fill(); } });
  const g = new THREE.Group(); const m = new THREE.Mesh(new THREE.SphereGeometry(r, 64, 32), new THREE.MeshToonMaterial({ map: t, gradientMap: toon('#fff').gradientMap })); g.add(m); const at = sprite('#8FD0FF', r * 2.6, .5); g.add(at); g.userData.m = m; return g; }

/** Dona Lurdes deitada na cama do hospital, cabeça no travesseiro, coberta. Cabeça em HC. */
const HC = [-.6, 1.25, -4.18];
function avoCama(c) { const L = ator(c, LURDES, -.6, -3.15); L.root.rotation.set(-Math.PI / 2 + .15, 0, 0); L.root.position.set(-.6, 1.1, -3.15); L.sombra.visible = false;
  const cob = rb(1.04, .46, 1.25, '#BFE0EE', -.6, 1.02, -3.42, { r: .09, out: .01 }); c.add(cob); return L; }
/** Câmera de close no rosto da avó (de cima, um pouco de lado). */
const closeAvo = (C, u, d = 0) => cam(C, [[0, [HC[0] + .1, HC[1] + .82, HC[2] + .5]], [8, [HC[0] + .08 - d, HC[1] + .74, HC[2] + .44]]], [[0, HC], [8, HC]], u);

// ---------- U: a conta ----------
function U1(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .5, hemi: .55, sky: '#6A7AC0', key: '#9FB0FF' }); quarto(c, { noite: true }); const A = ator(c, AUGUSTO, 2.2, -4.55, Math.PI); const p = papel([['?', 0]]); p.rotation.x = -Math.PI / 2; p.position.set(2.1, .8, -5.15); p.scale.setScalar(.6); c.add(p);
  return (t, u, C) => { p.paint(1); const sen = smooth(0, 1.2, u); A.pose(mixPose(walk(u, 1.4), sentado({ lean: 18, headX: 18, shR: [60, 10], elR: 70, shL: [50, 10], elL: 60 }), sen)); A.root.position.y = .13 * sen; rosto(A, null, t, 'preocupado', { look: [0, .7] });
    cam(C, [[0, [.4, 1.6, -2.4]], [3.4, [1.0, 1.55, -3.2]]], [[0, [2.2, 1.0, -4.8]], [3.4, [2.2, 1.0, -4.9]]], u); return {}; }; }); }
function U2(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .7, hemi: .6, sky: '#6A7AC0' }); quarto(c, { noite: true }); const p = papel([['Semana 10:', w(816)], ['5.120 km/h', w(820)], ['1 segundo =', w(826)], ['17 minutos!', w(833)]]); p.rotation.x = -Math.PI / 2; p.position.set(2.1, .8, -5.15); p.scale.setScalar(.6); c.add(p);
  const lap = cyl(.012, .012, .3, '#F2C14E', 0, 0, 0, { seg: 6 }); c.add(lap);
  return (t, u, C) => { p.paint(t); lap.position.set(2.25 + Math.sin(u * 9) * .03, .86, -5.1 + Math.cos(u * 7) * .02); lap.rotation.set(.6, 0, -.6);
    cam(C, [[0, [2.1, 1.45, -4.85]], [7.3, [2.1, 1.32, -4.95]]], [[0, [2.1, .8, -5.17]], [7.3, [2.1, .8, -5.17]]], u); return {}; }; }); }
function U3(t0, t1) { return mk(t0, t1, { bg: '#05060F' }, (c) => { stars(c, 2500, 200, 4); const T = terra(4); T.position.set(0, 0, -14); c.add(T); const sol = new THREE.DirectionalLight('#FFFFFF', 2.4); sol.position.set(-5, 3, 4); c.add(sol); c.add(new THREE.AmbientLight('#4A5A8A', .5));
  const tr = []; for (let i = 0; i < 12; i++) { const s = sprite(i ? '#FFD45A' : '#FFFFFF', i ? .25 - i * .015 : .5, 0); c.add(s); tr.push(s); }
  return (t, u, C) => { T.userData.m.rotation.y = u * .05; const k = smooth(1.5, 5.9, u); tr.forEach((s, i) => { const kk = Math.max(0, k - i * .02); const a = kk * 5; const r = 4.3 + kk * 6; s.position.set(Math.cos(a) * r, Math.sin(a) * r * .4, -14 + Math.sin(a) * r * .6); s.material.opacity = k > .01 ? (1 - i / 12) : 0; });
    cam(C, [[0, [0, 2, 0]], [5.9, [1, 3, 2]]], [[0, [0, 0, -14]], [5.9, [0, 0, -14]]], u); return { bloom: .5, bloomT: .7 }; }; }); }
function U4(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .7, hemi: .6, sky: '#6A7AC0' }); const Q = quarto(c, { noite: true });
  return (t, u, C) => { Q.rel.set(2, 30, (u * .004 * 60) % 60); cam(C, [[0, [1.6, 2.4, -4.4]], [3.6, [1.6, 2.4, -4.9]]], [[0, [1.6, 2.4, -5.9]], [3.6, [1.6, 2.4, -5.9]]], u); return { vig: .5 }; }; }); }
function U5(t0, t1) { return mk(t0, t1, { bg: '#03040B' }, (c) => { const R = rng(9); const L = []; for (let i = 0; i < 260; i++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(.03, 1), new THREE.MeshBasicMaterial({ color: R() < .3 ? '#BFE0FF' : '#FFFFFF', transparent: true, opacity: .8 })); const a = R() * 6.283, r = 1 + R() * 8; m.userData = { a, r, z: -R() * 80 }; c.add(m); L.push(m); }
  const luz = sprite('#FFFFFF', 3, 1); luz.position.set(0, 0, -30); c.add(luz);
  return (t, u, C) => { const k = smooth(0, 4.8, u); L.forEach((m) => { const q = m.userData; const z = ((q.z + u * (20 + k * 120)) % 80) - 80; m.position.set(Math.cos(q.a) * q.r, Math.sin(q.a) * q.r, z); m.scale.y = 1 + k * 18; m.rotation.x = Math.PI / 2; m.lookAt(0, 0, z + 50); m.rotation.z = 0; m.rotateX(Math.PI / 2); });
    luz.scale.setScalar(3 + k * 30); luz.material.opacity = .4 + k * .6; cam(C, [[0, [0, 0, 5]]], [[0, [0, 0, -30]]], 0); return { flash: smooth(4.0, 4.8, u) * .7, bloom: .6, bloomT: .6 }; }; }); }
function U6(t0, t1) { return mk(t0, t1, { bg: '#C8C4BC' }, (c) => { const p = paulista(c, { nGente: 10, carros: 6, antena: false }); p.gente.forEach(({ k }) => k.estatua()); const L = ator(c, LURDES, -4, -6, .3).estatua(); const B = ator(c, BIA, -2.6, -9, -.2).estatua(); const J = ator(c, JORGE, -5.2, -12, .4).estatua();
  [L, B, J].forEach((k, i) => { k.pose({ ...idle(1 + i), shR: [30 + i * 20, 30], elR: 40 }); rosto(k, null, 0, ['feliz', 'feliz', 'surpreso'][i], { blink: 0 }); }); p.gente.forEach(({ k }, i) => { k.pose(walk(i * .3, 1.7)); rosto(k, null, 0, 'neutro', { blink: 0 }); });
  return (t, u, C) => { cam(C, [[0, [-2.2, 1.4, -3.6]], [1.2, [-2.0, 1.4, -6.4]], [2.0, [-3.6, 1.4, -9.6]], [3.2, [-2, 6, -2]], [6.4, [0, 18, 20]]], [[0, [-4, 1.1, -6]], [1.2, [-2.6, 1.1, -9]], [2.0, [-5.2, 1.2, -12]], [3.2, [-3, 3, -20]], [6.4, [0, 6, -60]]], u); return { sat: .05, tint: '#E8E4DC', vig: .5 }; }; }); }

// ---------- V: tenta parar ----------
function V1(t0, t1) { return mk(t0, t1, { bg: '#26305A' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .9, hemi: .8 }); const Q = quarto(c, { noite: false }); const A = ator(c, AUGUSTO, -2.2, -3.4); deitar(A, -2.2, .62, -3.4, .25);
  const cal = new THREE.Group(); cal.add(rb(.6, .75, .03, '#FFFFFF', 0, 0, 0, { r: .02, out: .006 })); const folha = new THREE.Mesh(new THREE.PlaneGeometry(.56, .55), new THREE.MeshToonMaterial({ map: ctex(256, 256, () => {}) })); folha.position.set(0, -.07, .02); cal.add(folha); cal.add(rb(.6, .14, .035, '#E2443A', 0, .3, .005, { r: .02 })); cal.position.set(-.2, 2.3, -5.88); c.add(cal);
  const fcv = folha.material.map.image; const fx = fcv.getContext('2d'); let lastD = -1; const B = brilho(c, [-2.2, .7, -4.2], { size: 2.0, n: 30, ps: .7 });
  const jan = Q.jan.userData.vidro;
  return (t, u, C) => { const meia = w(918); const dias = Math.min(6, Math.floor(u * 1.2)); const D = t > meia ? 7 : dias; if (D !== lastD) { lastD = D; fx.fillStyle = '#FFFFFF'; fx.fillRect(0, 0, 256, 256); fx.fillStyle = D === 7 ? '#E2443A' : '#1B1420'; fx.font = '900 120px Inter'; fx.textAlign = 'center'; fx.fillText(String(1 + D), 128, 150); fx.font = '700 34px Inter'; fx.fillText(['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM', 'DOM'][D], 128, 215); folha.material.map.needsUpdate = true; }
    const dia = (Math.sin(u * 7.5) + 1) / 2; jan.material.color.setRGB(lerp(.25, 1, dia), lerp(.3, 1, dia), lerp(.6, 1, dia)); Q.rel.set(t > meia ? 0 : (u * 30) % 12, t > meia ? 0 : (u * 360) % 60);
    const g = smooth(meia + .2, meia + .8, t); B(u, g); rosto(A, null, t, g > .5 ? 'choro' : 'tedio', { olhosAbertos: true, look: [0, -.5] });
    cam(C, [[0, [-.4, 2.2, -2.2]], [9.3, [-.8, 2.0, -2.6]]], [[0, [-1.6, 1.1, -4.6]], [9.3, [-1.8, 1.0, -4.6]]], u); return { exposure: lerp(.75, 1, dia) }; }; }); }

// ---------- W: o hospital liga ----------
function W1(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: 1.4 }); const Z = pizzaria(c); const J = ator(c, JORGE, -4.4, -4.3, -Math.PI / 2 + .6); const A = ator(c, AUGUSTO, -1.6, -2.4, -1.2); comBolsa(A); const ring = icone('exclamacao', .3); c.add(ring);
  const fone = Z.tel.userData.fone;
  return (t, u, C) => { const atende = t > w(933) - .4; ring.visible = !atende; ring.position.set(-5.1, 2.05, -4.2); ring.scale.setScalar(.3 * (1 + .2 * Math.sin(u * 30)));
    Z.tel.position.x = -5.3 + (atende ? 0 : Math.sin(u * 60) * .01); if (atende) { fone.position.set(.4, .15, .3); fone.rotation.z = 1.2; }
    J.pose(atende ? { ...idle(u), shR: [120, 60], elR: 130 } : { ...idle(u), shR: [40, 40], elR: 40 }); rosto(J, null, t, t > w(935) ? 'medo' : 'neutro', { look: [-.4, 0] });
    const vira = smooth(w(937) - .3, w(937) + .3, t); A.root.rotation.y = -1.2 - vira * .8; A.pose({ ...idle(u), headY: -20 * vira }); rosto(A, null, t, vira > .5 ? 'medo' : 'neutro');
    cam(C, [[0, [-1.0, 1.6, 1.0]], [6, [-1.6, 1.5, .2]]], [[0, [-3.6, 1.2, -3.6]], [6, [-3.4, 1.2, -3.6]]], u); return {}; }; }); }
function W2(t0, t1) { return mk(t0, t1, { bg: '#F2A764' }, (c, s) => { const p = paulista(c, { nGente: 10, carros: 10, alt: [14, 30], antena: false }); const Rr = rastro(c, ['#FFFFFF', '#E2443A', '#FFD45A']); const LV = linhasVel(c, s.camera);
  const D = poeira(c, [[-4, .2, -20], [-4, .2, -40], [-4, .2, -60]], { n: 30, sp: 4, size: 2, life: 3, op: .6 });
  return (t, u, C) => { const x = -4, z = 30 - u * 60; Rr(x, 0, z, 0, -1, 40, u < 3.6 ? 1 : 0); D(u - .4); p.gente.forEach(({ k }, i) => { k.pose({ ...idle(u, i), headY: 40 }); rosto(k, null, t, 'surpreso'); });
    camT(C, [[0, [-9, 1.6, -17]], [4.1, [-9, 1.6, -21]]], [[0, [-4, 1, -27]], [4.1, [-4, 1, -27]]], u, .08, t); LV(t, .5); return { tint: '#FFE8CC' }; }; }); }
function W3(t0, t1) { return mk(t0, t1, { bg: '#F6E3B4' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: 1.4 }); const Z = pizzaria(c); const J = ator(c, JORGE, -4.4, -4.3, -Math.PI / 2 + .6); const fone = Z.tel.userData.fone; const D = poeira(c, [[-1.6, .2, -2.4]], { n: 14, sp: 1, size: 1.2, life: 2.5, op: .6 });
  return (t, u, C) => { const k = smooth(0, 2.7, u); fone.position.set(lerp(.4, 0, k), lerp(.15, 0, k), lerp(.3, .04, k)); fone.rotation.z = lerp(1.2, 0, k); J.pose({ ...idle(u * .05), shR: [lerp(120, 60, k), 60], elR: 130 }); rosto(J, null, t, 'surpreso', { blink: 0, mouth: { open: .5, round: .8 } }); D(u + .3);
    cam(C, [[0, [-3.2, 1.75, -2.4]], [2.7, [-3.4, 1.7, -2.7]]], [[0, [-5.1, 1.5, -4.1]], [2.7, [-5.1, 1.5, -4.1]]], u); return { sat: .85 }; }; }); }
function W4(t0, t1) { return mk(t0, t1, { bg: '#DDEBF0' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .9 }); const H = hospital(c, { c1: '#F2A764', c2: '#F8D9A8' }); const L = avoCama(c); const A = ator(c, AUGUSTO, 2.6, -1.0, -2.2); comBolsa(A); const D = poeira(c, [[2.6, .1, -1.6]], { n: 8, sp: .8, size: .6, life: 1.6, op: .45 });
  return (t, u, C) => { rosto(L, null, t, 'sono', { blink: .7 }); A.pose({ ...idle(u), lean: 8 }); rosto(A, null, t, 'medo', { look: [-.6, .2] }); D(u);
    cam(C, [[0, [3.4, 1.7, 1.6]], [1.7, [3.2, 1.65, 1.2]]], [[0, [.6, 1.0, -2.6]], [1.7, [.6, 1.0, -2.6]]], u); return {}; }; }); }
function W5(t0, t1) { return mk(t0, t1, { bg: '#DDEBF0' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .9 }); hospital(c, { c1: '#F2A764', c2: '#F8D9A8' }); const L = avoCama(c); const A = ator(c, AUGUSTO, .55, -3.6, -1.6);
  return (t, u, C) => { rosto(L, null, t, 'feliz', { blink: .5, look: [.6, 0] }); A.pose({ ...idle(u, 0, .5), lean: 10, headX: 8 }); rosto(A, null, t, u > 2 ? 'choro' : 'surpreso', { olhosAbertos: true, look: [-.6, .3], smile: .3 });
    cam(C, [[0, [1.9, 1.6, -1.8]], [4.7, [1.6, 1.55, -2.3]]], [[0, [-.1, 1.15, -3.8]], [4.7, [-.1, 1.15, -3.8]]], u); return { bloom: .25, bloomT: .9 }; }; }); }

// ---------- X: os seis dias ----------
function quartoHosp(c, o = {}) { luzToon(c, { r: 8, pos: [3, 8, 6], ki: o.ki ?? .8, hemi: o.hemi ?? .9 }); const H = hospital(c, { noite: o.noite, c1: o.c1 || '#1B2550', c2: o.c2 || '#3A4A8A' }); H.rel.set(21, 14); const L = avoCama(c); return { H, L }; }
function X1(t0, t1) { return mk(t0, t1, { bg: '#2A3450' }, (c) => { const { H, L } = quartoHosp(c, { noite: true }); const M = ator(c, MEDICO, 1.6, -2.2, -1.0); const A = ator(c, AUGUSTO, .5, -1.5, 2.2);
  return (t, u, C) => { rosto(L, null, t, 'sono', { blink: 1 }); M.pose(gesto(null, t, { ...idle(u), shR: [30 + 15 * Math.sin(u * 2), 20], elR: 40 })); rosto(M, null, t, 'triste', { mouth: t < w(992) + .5 ? { open: (Math.sin(u * 10) + 1) * .2, round: .3 } : undefined, look: [-.4, 0] });
    A.pose({ ...idle(u, 0, .4) }); rosto(A, null, t, 'triste', { look: [.5, 0] }); const close = t > w(997);
    cam(C, close ? [[0, [-.6, 2.45, -4.6]]] : [[0, [3.2, 1.6, .6]], [8.6, [2.8, 1.55, .2]]], close ? [[0, [-.6, 2.45, -5.9]]] : [[0, [.8, 1.1, -2.2]], [8.6, [.8, 1.1, -2.2]]], u); return { tint: '#D8E0FF', sat: .85 }; }; }); }
function X2(t0, t1) { return mk(t0, t1, { bg: '#2A3450' }, (c) => { const { L } = quartoHosp(c, { noite: true }); const A = ator(c, AUGUSTO, .55, -3.4, -Math.PI / 2);
  return (t, u, C) => { rosto(L, null, t, 'sono', { blink: 1 }); const sen = smooth(.3, 1.6, u); A.pose(mixPose(idle(u), sentado({ headX: 10, lean: 10 }), sen)); A.root.position.y = .13 * sen; rosto(A, null, t, 'triste', { look: [-.7, .3] });
    cam(C, [[0, [2.6, 1.5, -1.0]], [4.1, [2.2, 1.4, -1.6]]], [[0, [-.1, 1.0, -3.4]], [4.1, [-.1, .95, -3.4]]], u); return { tint: '#D8E0FF', sat: .85 }; }; }); }
function X3(t0, t1) { return mk(t0, t1, { bg: '#2A3450' }, (c) => { const { L } = quartoHosp(c, { noite: true });
  return (t, u, C) => { rosto(L, null, t, 'sono', { blink: 1 }); closeAvo(C, u, .1); return { tint: '#E0E6FF', sat: .9, vig: .45 }; }; }); }
function X4(t0, t1) { return mk(t0, t1, { bg: '#2A3450' }, (c) => { const { L } = quartoHosp(c, { noite: true }); const A = ator(c, AUGUSTO, .55, -3.4, -Math.PI / 2); A.root.position.y = .13;
  return (t, u, C) => { rosto(L, null, t, 'sono', { blink: 1 }); L.pose({ shL: [30, 6], elL: 8 }); const ap = smooth(0, 2.8, u); A.pose(sentado({ lean: 20, shR: [60 + 25 * ap, 10], elR: 20 - 10 * ap, headX: 20 })); rosto(A, null, t, 'triste', { look: [-.5, .6] });
    cam(C, [[0, [.75, 1.95, -2.35]], [3, [.65, 1.9, -2.5]]], [[0, [-.3, 1.25, -3.45]], [3, [-.3, 1.25, -3.45]]], u); return { tint: '#D8E0FF', sat: .85 }; }; }); }
function X5(t0, t1) { return mk(t0, t1, { bg: '#2A3450' }, (c) => { const { H, L } = quartoHosp(c, { noite: true }); const A = ator(c, AUGUSTO, .55, -3.4, -Math.PI / 2); A.root.position.y = .13; mesa(c, 1.0, -3.9, .7, .5, .76, '#E8E2D6');
  const pil = []; for (let i = 0; i < 14; i++) { const f = new THREE.Mesh(new THREE.PlaneGeometry(.22, .3), toon('#FBF7EC')); f.rotation.x = -Math.PI / 2; f.rotation.z = (i % 3 - 1) * .2; f.position.set(1.1 + (i % 2) * .02, .785 + i * .006, -3.95); c.add(f); pil.push(f); }
  const jan = H.jan.userData.vidro; const lap = cyl(.008, .008, .16, '#F2C14E', 0, 0, 0, { seg: 6 }); A.hands.R.add(lap); lap.position.set(0, -.06, .04); lap.rotation.x = .6;
  return (t, u, C) => { rosto(L, null, t, 'sono', { blink: 1 }); const esc = Math.sin(u * 8); A.pose(sentado({ lean: 18, headX: 22, shR: [55, -5], elR: 60 + esc * 6, shL: [40, 5], elL: 50 })); A.root.rotation.y = -Math.PI / 2 + .5; rosto(A, null, t, 'determinado', { look: [.3, .9], blink: pisca(t, 3) });
    const n = Math.min(14, Math.floor(u * 1.4)); pil.forEach((f, i) => f.visible = i < n);
    const dia = (Math.sin(u * 2.4 - 1.6) + 1) / 2; jan.material.color.setRGB(lerp(.3, 1.6, dia), lerp(.35, 1.4, dia), lerp(.75, 1.0, dia));
    cam(C, [[0, [2.6, 1.6, -1.4]], [11.5, [2.0, 1.5, -2.0]]], [[0, [.4, 1.0, -3.6]], [11.5, [.6, .95, -3.7]]], u); return { exposure: lerp(.8, 1.08, dia), tint: dia > .5 ? '#FFF2DC' : '#D8E0FF' }; }; }); }
function X6(t0, t1) { return mk(t0, t1, { bg: '#2A3450' }, (c) => { const { H } = quartoHosp(c, { noite: true });
  return (t, u, C) => { H.rel.set(21, 14, 3 + u * .02); cam(C, [[0, [-.6, 2.45, -4.9]], [4.3, [-.6, 2.45, -5.1]]], [[0, [-.6, 2.45, -5.9]], [4.3, [-.6, 2.45, -5.9]]], u); return { vig: .5, tint: '#E0E6FF' }; }; }); }

// ---------- Y: a carta ----------
function Y1(t0, t1) { return mk(t0, t1, { bg: '#2A3450' }, (c) => { const { L } = quartoHosp(c, { noite: true }); const A = ator(c, AUGUSTO, .55, -3.4, -Math.PI / 2); A.root.position.y = .13;
  const carta = papel([['Vó, dessa vez', 0], ['eu cheguei a tempo.', 0]], .3, .4); carta.paint(1); c.add(carta); const close = w(1094) - .3;
  return (t, u, C) => { const k = smooth(.2, 1.6, u); A.pose(sentado({ lean: 24, shR: [60 + 20 * k, 5], elR: 30, headX: 22 })); rosto(A, null, t, 'triste', { look: [-.5, .6] }); L.pose({ shL: [30 * k + 10, 6], elL: 8 }); rosto(L, null, t, t > close ? 'sono' : 'sono', { blink: t > close ? .45 : .9, look: [0, .5] });
    carta.position.set(lerp(.2, -.1, k), lerp(1.3, 1.42, k), lerp(-3.3, -3.35, k)); carta.rotation.set(-1.25, 0, .3);
    if (t < close) cam(C, [[0, [1.6, 1.6, -1.6]], [3, [1.4, 1.5, -2.0]]], [[0, [-.2, 1.0, -3.2]], [3, [-.2, 1.0, -3.2]]], u); else cam(C, [[0, [-.02, 2.0, -2.95]]], [[0, [-.1, 1.42, -3.35]]], 0);
    return { tint: '#E0E6FF', sat: .9 }; }; }); }
function Y2(t0, t1) { return mk(t0, t1, { bg: '#2A3450' }, (c) => { const { L } = quartoHosp(c, { noite: true }); const A = ator(c, AUGUSTO, .55, -3.4, -Math.PI / 2 + .6); A.root.position.y = .13;
  return (t, u, C) => { A.pose(sentado({ lean: 6, headX: -6, shR: [25, 8], elR: 45 })); rosto(A, 'augusto', t, 'choro', { olhosAbertos: true, look: [-.6, .3], smile: .2 }); rosto(L, null, t, 'sono', { blink: .5 });
    cam(C, [[0, [.15, 1.22, -2.35]], [5.4, [.2, 1.2, -2.5]]], [[0, [.55, 1.1, -3.4]], [5.4, [.55, 1.1, -3.4]]], u); return { tint: '#E0E6FF', sat: .9 }; }; }); }

// ---------- Z: a avó responde, despedida ----------
function Z1(t0, t1) { return mk(t0, t1, { bg: '#2A3450' }, (c) => { const { H, L } = quartoHosp(c, { noite: true }); const A = ator(c, AUGUSTO, .55, -3.4, -Math.PI / 2 + .6); A.root.position.y = .13; const jan = H.jan.userData.vidro;
  return (t, u, C) => { const lent = (Math.sin(u * .6) + 1) / 2; rosto(L, null, t, 'feliz', { blink: .35, mouth: { open: lent * .35, round: .6 }, look: [.7, 0] }); A.pose(sentado({ lean: 6, headX: -4, shR: [70, 5], elR: 30 })); rosto(A, null, t, 'choro', { olhosAbertos: true, look: [-.6, .3] });
    const dia = (Math.sin(u * 1.2 - 1.6) + 1) / 2; jan.material.color.setRGB(lerp(.3, 1.6, dia), lerp(.35, 1.4, dia), lerp(.75, 1.0, dia));
    const ang = u < 6 ? 0 : 1; if (ang) cam(C, [[0, [.15, 1.22, -2.35]], [11.8, [.2, 1.2, -2.5]]], [[0, [.55, 1.1, -3.4]], [11.8, [.55, 1.1, -3.4]]], u); else closeAvo(C, u); return { tint: dia > .5 ? '#FFF2DC' : '#D8E0FF', exposure: lerp(.85, 1.05, dia) }; }; }); }
function Z2(t0, t1) { return mk(t0, t1, { bg: '#2A3450' }, (c) => { const { L } = quartoHosp(c, { noite: true });
  return (t, u, C) => { rosto(L, 'lurdes', t, 'feliz', { blink: .35, look: [.7, 0], smile: .5 }); closeAvo(C, u * .6, -.05); return { tint: '#FFF0E0', bloom: .3, bloomT: .85 }; }; }); }
function Z3(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: .45, hemi: .55, sky: '#7A8AD0', key: '#AFC0FF' }); const H = hospital(c, { noite: true, c1: '#1B2550', c2: '#3A4A8A' });
  const carta = papel([['Vó, dessa vez', 0], ['eu cheguei a tempo.', 0]], .26, .34); carta.paint(1); carta.rotation.set(-Math.PI / 2 + .2, 0, .4); carta.position.set(-.55, .98, -4.2); c.add(carta); const luar = new THREE.SpotLight('#C8D8FF', 30, 12, .4, .7, 1.2); luar.position.set(2, 3.2, -5.6); luar.target.position.set(-.6, .9, -4.0); c.add(luar, luar.target);
  return (t, u, C) => { cam(C, [[0, [2.8, 1.9, 1.2]], [8.5, [1.0, 1.4, -2.2]]], [[0, [-.6, .9, -3.8]], [8.5, [-.6, .95, -4.1]]], u); return { tint: '#D0D8FF', sat: .8, vig: .5 }; }; }); }

export const ATO4 = [[U1, 290.0, 293.4], [U2, 293.4, 300.7], [U3, 300.7, 306.6], [U4, 306.6, 310.2], [U5, 310.2, 315.0], [U6, 315.0, 321.4], [V1, 321.4, 330.7],
  [W1, 330.7, 336.7], [W2, 336.7, 340.8], [W3, 340.8, 343.5], [W4, 343.5, 345.2], [W5, 345.2, 349.9], [X1, 349.9, 358.5], [X2, 358.5, 362.6], [X3, 362.6, 366.8], [X4, 366.8, 369.8], [X5, 369.8, 381.3], [X6, 381.3, 385.6],
  [Y1, 385.6, 391.3], [Y2, 391.3, 396.7], [Z1, 396.7, 408.5], [Z2, 408.5, 415.9], [Z3, 415.9, 424.4]];
