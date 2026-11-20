// Ato 2 (87.18 a 179.07 s): a lista, o bitcoin em 2012, o dinheiro, a compra, a senha no caderno e os anos de escola.
import * as THREE from 'three';
import { smooth, lerp, clamp } from './motor/core.js';
import { bx, rb, cyl, sph, toon, ctex } from './motor/toon.js';
import { idle, walk, run, mixPose, sentado } from './motor/char3d.js';
import { mk, cam, camT, ator, rosto, gesto, icone, sentar, fala, cartaz } from './lib.js';
import { GUI16, GUI16CASA, MARCOS, DUDU, PROFESSORA, povo } from './elenco.js';
import { quartoTeen, palco, salaAula, patio } from './cenarios.js';
import { caderno, cadernoAberto, folhaDraw, mao, txt, moeda, moedaDraw, cofre, chave, cadeado, videogame, tela } from './objetos.js';
import { brilho, sprite } from './efeitos.js';
import { celular } from './mundo.js';

const NOITE2 = { tint: '#D8DEFF', vig: .4 };
const aluno = (i, extra = {}) => povo(i, { camisa: '#F6F4EE', estampa: GUI16.estampa, simples: true, ...extra });
function caneta() { const g = new THREE.Group(); g.add(cyl(.008, .008, .15, '#2E6FB8', 0, 0, 0, { seg: 6 })); g.add(cyl(.004, .008, .02, '#1B1420', 0, -.085, 0, { seg: 6 })); return g; }
/** Quarto à noite com o Guilherme escrevendo na escrivaninha (caderno aberto). */
function escrevendo(c) { const Q = quartoTeen(c, { noite: true }); Q.cad.position.x = 2.05; const G = ator(c, GUI16CASA, 0, 0); sentar(G, 2.05, -5.2, Math.PI, .48);
  const CA = cadernoAberto(); CA.position.set(2.05, .795, -5.78); CA.rotation.y = Math.PI; c.add(CA); const pen = caneta(); G.hands.R.add(pen); pen.position.set(0, -.05, .03); pen.rotation.x = 1.2; return { Q, G, CA, pen }; }
const poseEscreve = (t, k = 1) => sentado({ shR: [70, 12], elR: 85 + 6 * Math.sin(t * 9) * k, shL: [55, 18], elL: 85, headX: 28, lean: 14 });
/** Página da lista: n = quantos itens já escritos (até 3), dobra 0..1. */
function paginaLista(x, W, H, n, dobra = 0, item3 = false) {
  folhaDraw(x, W, H, () => { mao(x, 'A LISTA', W * .5, H * .08, 60, '#B8322B', 'center');
    if (n > 0) mao(x, '1. Comprar bitcoin', W * .16, H * .2, 46); if (n > 1) mao(x, '2. Não contar pra ninguém', W * .16, H * .32, 42);
    if (n > 2) { if (item3) { mao(x, '3. Salvar o meu pai', W * .16, H * .44, 44, '#B8322B'); mao(x, '14/03/2019', W * .2, H * .53, 42, '#B8322B'); } else mao(x, '3. ...', W * .16, H * .44, 44); }
    if (dobra > 0) { const d = H * .62 * dobra; x.fillStyle = '#E8E2D0'; x.beginPath(); x.moveTo(0, H); x.lineTo(0, H - d); x.lineTo(W, H - d); x.lineTo(W, H); x.fill(); x.strokeStyle = '#B8B0A0'; x.lineWidth = 4; x.beginPath(); x.moveTo(0, H - d); x.lineTo(W, H - d); x.stroke(); }
  }); }

// ---------- D: a lista ----------
function D1(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const { Q, G, CA } = escrevendo(c); CA.userData.D.paint('0', (x, W, H) => paginaLista(x, W, H, 0)); CA.userData.E.paint('e', (x, W, H) => folhaDraw(x, W, H));
  return (t, u, C) => { G.pose(poseEscreve(t, u > 2 ? 1 : 0)); rosto(G, null, t, 'determinado', { look: [0, .8] });
    cam(C, [[0, [3.5, 2.3, -3.4]], [5, [3.3, 2.15, -3.9]]], [[0, [2.0, .9, -5.75]], [5, [2.0, .9, -5.75]]], u); return NOITE2; }; }); }
function D2(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const { Q, G, CA, pen } = escrevendo(c); CA.userData.E.paint('e', (x, W, H) => folhaDraw(x, W, H));
  return (t, u, C) => { const n = t < 92.3 ? 0 : t < 94.45 ? 1 : t < 97.1 ? 2 : 3; const db = smooth(100.1, 100.9, t); CA.userData.D.paint(n + '|' + Math.round(db * 10), (x, W, H) => paginaLista(x, W, H, n, db)); G.pose(poseEscreve(t, t < 99.8 ? 1 : 0)); rosto(G, null, t, t > 98 && t < 100 ? 'preocupado' : 'determinado', { look: [0, .8] });
    cam(C, [[0, [3.25, 2.1, -6.1]], [9.1, [3.05, 1.95, -6.05]]], [[0, [2.05, .8, -5.8]], [9.1, [2.05, .8, -5.8]]], u); return NOITE2; }; }); }
function D3(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const { Q, G, CA } = escrevendo(c); CA.visible = false; const fech = caderno(); fech.position.set(2.05, .81, -5.78); c.add(fech);
  return (t, u, C) => { const v = smooth(.6, 1.6, u); G.pose(sentado({ shR: [40, 10], elR: 60, shL: [40, 10], elL: 60, headX: 4, headY: 150 * v * 0, twist: 0 })); G.root.rotation.y = lerp(Math.PI, .9, v); Q.cad.rotation.y = G.root.rotation.y; rosto(G, null, t, 'desconfiado', { look: [.3 * v, 0], mouth: { open: 0, smile: .4 } });
    cam(C, [[0, [3.05, 1.3, -4.05]], [3.9, [2.85, 1.25, -4.3]]], [[0, [2.05, 1.1, -5.2]], [3.9, [2.05, 1.1, -5.2]]], u); return NOITE2; }; }); }

// ---------- E: o bitcoin em 2012 e o dinheiro ----------
function moedaGigante(c, y = 2.2, r = 1.4) { const m = moeda(r); m.position.set(0, y, 0); c.add(m); const L = new THREE.PointLight('#FFC060', 8, 10, 1.6); L.position.set(0, y + .5, 2); c.add(L); const B = brilho(c, [0, y - 1, 0], { cor: '#FFC060', size: 6, n: 50, alt: 3 }); return { m, B }; }
function E1(t0, t1) { return mk(t0, t1, {}, (c) => { palco(c); const { m, B } = moedaGigante(c); const P = []; for (let i = 0; i < 6; i++) { const a = -1.2 + i * .48; const k = povo(i, { simples: true }); k.place(Math.sin(a) * 4.2, Math.cos(a) * 3.4 - .5, 0, a + Math.PI); c.add(k.root); const q = icone('interrogacao', .5); q.position.set(0, 1.85, 0); k.root.add(q); P.push({ k, q, i }); }
  return (t, u, C) => { m.rotation.y = t * 1.6; B(u, .8); P.forEach(({ k, q, i }) => { k.pose({ ...idle(t, i), shL: [30, 40], shR: [30, 40], elL: 90, elR: 90, headZ: 12 * Math.sin(t * 2 + i) }); rosto(k, null, t, 'desconfiado'); q.position.y = 1.85 + .08 * Math.sin(t * 3 + i); });
    cam(C, [[0, [0, 2.6, 9]], [3.2, [1.5, 2.2, 7.2]]], [[0, [0, 1.6, 0]], [3.2, [0, 1.7, 0]]], u); return { bloom: .5, bloomT: .8 }; }; }); }
function E2(t0, t1) { return mk(t0, t1, {}, (c) => { palco(c, { c1: '#2A1A3A', c2: '#5A3A2A' }); const pd = cyl(.9, 1.0, 1.1, '#F4F1EA', 0, .55, 0, { out: .01 }); c.add(pd); const m = moeda(.6); m.position.set(0, 1.75, 0); c.add(m);
  const tag = cartaz(1.4, .8, (x, W, H) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, W, H); x.strokeStyle = '#B8322B'; x.lineWidth = 16; x.strokeRect(8, 8, W - 16, H - 16); txt(x, 'R$ 16', W / 2, H * .45, H * .38, '#B8322B'); txt(x, '≈ US$ 8', W / 2, H * .78, H * .16, '#3A3A44', 800); }); tag.position.set(1.25, 1.2, .4); tag.rotation.set(0, -.3, .12); c.add(tag); c.add(cyl(.01, .01, .6, '#9EA6B0', .8, 1.45, .25, { rot: [0, 0, 1.1], seg: 4 }));
  const B = brilho(c, [0, 1.2, 0], { cor: '#FFC060', size: 3, n: 30, alt: 2 });
  return (t, u, C) => { m.rotation.y = t * 1.2; m.position.y = 1.75 + .05 * Math.sin(t * 2); B(u, .6); tag.rotation.z = .12 + .05 * Math.sin(t * 2.2);
    cam(C, [[0, [-1.2, 1.9, 4.2]], [3.1, [-.6, 1.7, 3.2]]], [[0, [.3, 1.4, 0]], [3.1, [.45, 1.4, 0]]], u); return { bloom: .45, bloomT: .8 }; }; }); }
function quartoDia(c) { const Q = quartoTeen(c); return Q; }
function E3(t0, t1) { return mk(t0, t1, {}, (c) => { const Q = quartoDia(c); const G = ator(c, GUI16CASA, 0, 0); sentar(G, 1.3, -5.15, Math.PI + .4, .48);
  Q.pc.userData.sc.paint('g', (x, W, H) => { x.fillStyle = '#0E1422'; x.fillRect(0, 0, W, H); txt(x, 'BITCOIN?', W / 2, 44, 34, '#FFB43A'); x.strokeStyle = '#7DF0A0'; x.lineWidth = 6; x.beginPath(); x.moveTo(30, H - 40); x.bezierCurveTo(200, H - 60, 300, H - 90, W - 30, 70); x.stroke(); });
  return (t, u, C) => { G.pose(sentado({ shR: [30, 10], elR: 40, shL: [30, 10], elL: 40, headY: -25 })); rosto(G, null, t, 'feliz', { olhosAbertos: true, look: [.4, 0], mouth: { open: 0, smile: .7 } });
    cam(C, [[0, [-.15, 1.4, -6.1]], [3.2, [.05, 1.35, -6.25]]], [[0, [1.3, 1.15, -5.2]], [3.2, [1.3, 1.15, -5.2]]], u); return {}; }; }); }
function cofrinho() { const g = new THREE.Group(); const b = sph(.18, '#F28FA8', 0, .18, 0, { out: .006 }); b.scale.set(1.25, 1, 1); g.add(b); g.add(cyl(.06, .07, .07, '#F28FA8', .23, .2, 0, { rot: [0, 0, Math.PI / 2], out: .004 })); for (const s of [-1, 1]) { g.add(sph(.045, '#E07A94', .12, .34, s * .09)); for (const z of [-.08, .08]) g.add(cyl(.03, .03, .08, '#F28FA8', s * .1, .03, z, { seg: 6 })); } g.add(bx(.08, .01, .02, '#1B1420', 0, .36, 0)); return g; }
function E4(t0, t1) { return mk(t0, t1, {}, (c) => { const Q = quartoDia(c); const G = ator(c, GUI16CASA, -.6, -3.3, .2); const pig = cofrinho(); G.hands.R.add(pig); pig.position.set(-.1, -.05, .1);
  const moedas = []; for (let i = 0; i < 3; i++) { const m = cyl(.03, .03, .008, '#E8C060', 0, 0, 0, { seg: 12 }); c.add(m); moedas.push(m); }
  return (t, u, C) => { const sacode = u < 2.6 ? Math.sin(t * 22) * 14 : 0; G.pose({ ...idle(t), shR: [95 + sacode * .5, 20], elR: 60 + sacode, shL: [80, -10], elL: 70, headX: 10 }); rosto(G, null, t, u < 2.6 ? 'determinado' : u < 3.3 ? 'triste' : 'determinado', { look: [-.2, .4] });
    moedas.forEach((m, i) => { const f = clamp((u - .8 - i * .5) * 1.6, 0, 1); m.position.set(-.55 + i * .06, 1.0 - f * .99, -3.0); m.visible = f > 0; });
    cam(C, [[0, [.6, 1.3, -1.4]], [3.2, [.3, 1.2, -1.8]], [4.7, [-.2, 1.15, -2.4]]], [[0, [-.6, 1.0, -3.3]], [4.7, [-.6, 1.05, -3.3]]], u); return { exposure: 1 - .08 * smooth(3.2, 4.2, u) }; }; }); }
function E5(t0, t1) { return mk(t0, t1, {}, (c) => { const Q = quartoDia(c); Q.vg.visible = false; const G = ator(c, GUI16CASA, -.9, -2.4, 1.2); const K = ator(c, { pele: '#C98A62', cabelo: 'tigela', corCabelo: '#2A1A14', camisa: '#E2443A', calca: '#2A2A33', escala: .92 }, .5, -2.0, -1.9);
  const vg = videogame(); c.add(vg); const nota = cartaz(.16, .08, (x, W, H) => { x.fillStyle = '#7AC4A0'; x.fillRect(0, 0, W, H); txt(x, 'R$ 50', W / 2, H / 2, H * .5, '#1E4A33'); }, { basic: true }); c.add(nota);
  return (t, u, C) => { const k = smooth(.5, 1.4, u); const P = new THREE.Vector3(lerp(-.6, .25, k), .74, lerp(-2.25, -2.05, k)); vg.position.copy(P).add(new THREE.Vector3(0, -.08, 0)); vg.rotation.y = 1.2;
    G.pose({ ...idle(t), shR: [45 - 25 * k, 10], shL: [45 - 25 * k, 10], elR: 45, elL: 45 }); rosto(G, null, t, 'triste', { look: [.6, 0] }); K.pose({ ...idle(t, 2), shR: [45 * k, 10], shL: [45 * k, 10], elR: 45, elL: 45 }); rosto(K, null, t, 'feliz', { look: [-.4, 0] });
    nota.position.set(lerp(.3, -.5, smooth(1.3, 1.9, u)), .8, -2.1); nota.rotation.y = .4;
    cam(C, [[0, [-.3, 1.4, .2]], [2.1, [-.25, 1.35, -.2]]], [[0, [-.2, 1.0, -2.2]], [2.1, [-.2, 1.0, -2.2]]], u); return {}; }; }); }
function E6(t0, t1) { return mk(t0, t1, {}, (c) => { const Q = quartoDia(c); const G = ator(c, GUI16CASA, 0, 0); sentar(G, -2.6, -4.4, Math.PI / 2, .6);
  const pote = new THREE.Group(); pote.add(cyl(.1, .1, .2, '#CFE8F2', 0, .1, 0, { seg: 16, out: .004 })); for (let i = 0; i < 6; i++) pote.add(cyl(.03, .03, .008, '#E8C060', (i % 3 - 1) * .04, .02 + Math.floor(i / 3) * .01, 0, { seg: 10 })); pote.position.set(-2.95, .66, -4.95); c.add(pote);
  const alb = rb(.3, .04, .4, '#2E9C5A', -3.5, .68, -4.75, { r: .01, out: .004 }); c.add(alb); const alT = cartaz(.26, .34, (x, W, H) => { x.fillStyle = '#2E9C5A'; x.fillRect(0, 0, W, H); txt(x, 'ÁLBUM', W / 2, H * .3, H * .14, '#F6D33A'); txt(x, 'FIGURINHAS', W / 2, H * .5, H * .1, '#FFFFFF'); for (let i = 0; i < 4; i++) { x.fillStyle = ['#E2443A', '#F2C230', '#2E6FB8', '#F4F1EA'][i]; x.fillRect(W * (.15 + i * .18), H * .65, W * .14, H * .18); } }); alT.rotation.x = -Math.PI / 2; alT.position.set(-3.5, .705, -4.75); c.add(alT);
  return (t, u, C) => { G.pose(sentado({ shR: [60, 10], elR: 70 + 10 * Math.sin(t * 6), shL: [50, 10], elL: 60, headX: 25, lean: 8 })); rosto(G, null, t, 'determinado', { look: [.3, .8] }); pote.rotation.z = .4 * smooth(.2, .8, u);
    cam(C, [[0, [-.8, 1.3, -3.0]], [1.8, [-1.1, 1.2, -3.4]]], [[0, [-2.8, .75, -4.6]], [1.8, [-2.8, .75, -4.6]]], u); return {}; }; }); }
function E7(t0, t1) { return mk(t0, t1, {}, (c) => { const Q = quartoDia(c); const N = []; for (let i = 0; i < 32; i++) { const n = cartaz(.16, .08, (x, W, H) => { x.fillStyle = ['#7AC4A0', '#E8B86A', '#9FB4E8'][i % 3]; x.fillRect(0, 0, W, H); txt(x, ['R$ 50', 'R$ 20', 'R$ 10'][i % 3], W / 2, H / 2, H * .45, '#1B1420'); }, { basic: true }); n.rotation.x = -Math.PI / 2; n.rotation.z = i * .7; c.add(n); N.push(n); }
  return (t, u, C) => { N.forEach((n, i) => { const f = clamp((u - i * .04) * 3, 0, 1); n.position.set(-3.6 + (i % 6) * .13 + (i % 2) * .03, .67 + f * 0 + .002 * i + (1 - f) * .8, -4.4 + Math.floor(i / 6) * .12); n.visible = f > 0; });
    cam(C, [[0, [-2.4, 1.6, -3.6]], [2.2, [-2.7, 1.4, -3.9]]], [[0, [-3.3, .65, -4.2]], [2.2, [-3.3, .65, -4.15]]], u); return {}; }; }); }
function quartoPai(c) { const Q = quartoDia(c); const G = ator(c, GUI16CASA, -.8, -3.6, .7); const M = ator(c, MARCOS, 1.2, -1.6, -2.3); return { Q, G, M }; }
function E8(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, G, M } = quartoPai(c); Q.vg.visible = false;
  return (t, u, C) => { M.pose(gesto('marcos', t, { ...idle(t, 1), shR: [80, -5], elR: 10, headX: -4 }, 1)); rosto(M, 'marcos', t, 'bravo', { look: [-.5, 0] }); G.pose({ ...idle(t), shL: [10, 6], shR: [10, 6], headX: 8 }); rosto(G, null, t, 'preocupado', { look: [.6, -.2] });
    cam(C, [[0, [-2.4, 1.6, -1.6]], [5.1, [-2.0, 1.55, -1.9]]], [[0, [1.0, 1.3, -1.8]], [5.1, [1.0, 1.32, -1.8]]], u); return {}; }; }); }
function E9(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, G, M } = quartoPai(c); Q.vg.visible = false;
  return (t, u, C) => { M.pose({ ...idle(t, 1), shL: [55, -10], shR: [55, -10], elL: 110, elR: 110 }); rosto(M, null, t, 'bravo'); G.pose(gesto('gui', t, { ...idle(t), shR: [60, 20], elR: 30, shL: [60, 20], elL: 30 }, .8)); rosto(G, 'gui', t, 'determinado', { look: [.5, -.2] });
    cam(C, [[0, [.6, 1.25, -2.0]], [1.8, [.45, 1.22, -2.2]]], [[0, [-.8, 1.08, -3.6]], [1.8, [-.8, 1.1, -3.6]]], u); return {}; }; }); }
function E10(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, G, M } = quartoPai(c); Q.vg.visible = false; Q.pc.userData.sc.paint('c', (x, W, H) => { x.fillStyle = '#F4F6F8'; x.fillRect(0, 0, W, H); x.fillStyle = '#2E6FB8'; x.fillRect(0, 0, W, 50); txt(x, 'COIN EXCHANGE', W / 2, 26, 26, '#fff'); });
  return (t, u, C) => { const ap = smooth(.8, 1.5, u); M.pose(gesto('marcos', t, { ...idle(t, 1), shR: [70 * ap, -30 * ap], elR: 10, shL: [55, -10], elL: 110, headY: 20 * ap }, .6)); rosto(M, 'marcos', t, 'desconfiado', { look: [.3, 0] }); G.pose(idle(t)); rosto(G, null, t, 'tedio', { look: [.5, 0] });
    cam(C, [[0, [-2.8, 1.65, -.3]], [3.7, [-2.5, 1.6, -.6]]], [[0, [.2, 1.15, -2.6]], [3.7, [.3, 1.15, -2.7]]], u); return {}; }; }); }

// ---------- F: a compra, a carteira e a senha ----------
function telaSite(x, W, H, fase, prog = 0) {
  x.fillStyle = '#F4F6F8'; x.fillRect(0, 0, W, H); x.fillStyle = '#2E6FB8'; x.fillRect(0, 0, W, 54); txt(x, 'COIN EXCHANGE', 120, 28, 24, '#fff', 900); txt(x, 'Buy · Sell · Wallet', W - 110, 28, 16, '#DDEFF8', 700);
  if (fase === 0) { txt(x, 'BUY BITCOIN', W / 2, 100, 34, '#1B1420'); x.fillStyle = '#FFFFFF'; x.strokeStyle = '#9EA6B0'; x.lineWidth = 2; for (let i = 0; i < 3; i++) { x.fillRect(80, 140 + i * 60, W - 160, 40); x.strokeRect(80, 140 + i * 60, W - 160, 40); } txt(x, 'Amount: 100 BTC', 100, 160, 20, '#3A3A44', 600, 'left'); txt(x, 'Password: ••••••••', 100, 220, 20, '#3A3A44', 600, 'left'); txt(x, 'I agree to the terms', 100, 280, 18, '#3A3A44', 600, 'left'); x.fillStyle = '#F2A23A'; x.fillRect(W / 2 - 90, 330, 180, 50); txt(x, 'CONFIRM', W / 2, 356, 22, '#fff'); }
  else if (fase === 1) { txt(x, 'Processing...', W / 2, 150, 32, '#1B1420', 800); x.fillStyle = '#DDE3E8'; x.fillRect(80, 200, W - 160, 30); x.fillStyle = '#2E9C5A'; x.fillRect(80, 200, (W - 160) * prog, 30); txt(x, 'Waiting for bank transfer (3-5 days)', W / 2, 270, 18, '#9A3A2A', 700); }
  else { moedaDraw(x, W / 2, 150, 60); txt(x, 'BALANCE', W / 2, 240, 22, '#3A3A44', 800); txt(x, '100.00000000 BTC', W / 2, 290, 40, '#2E9C5A', 900); txt(x, 'Welcome!', W / 2, 345, 22, '#1B1420', 700); }
}
function F1(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const Q = quartoTeen(c, { noite: true }); const G = ator(c, GUI16CASA, 0, 0); sentar(G, 1.3, -5.15, Math.PI, .48);
  return (t, u, C) => { const fase = t < 137.8 ? 0 : t < 140.55 ? 1 : 2; Q.pc.userData.sc.paint(fase + '|' + Math.round((t - 137.8) * 4), (x, W, H) => telaSite(x, W, H, fase, clamp((t - 137.8) / 2.7))); Q.cal.paint('d' + Math.floor(clamp(u * 1.6, 0, 7)), (x, W, H) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, W, H); x.fillStyle = '#2E6FB8'; x.fillRect(0, 0, W, H * .3); txt(x, '2012', W / 2, H * .16, H * .2, '#FFFFFF'); txt(x, String(3 + Math.floor(clamp(u * 1.6, 0, 7))), W / 2, H * .64, H * .36, '#1B1420'); });
    G.pose(sentado({ shR: [55, 12], elR: 80 + (fase === 0 ? 8 * Math.sin(t * 11) : 0), shL: [55, 12], elL: 80, headX: 4, lean: 10 + (fase === 2 ? -8 : 0), shR: fase === 2 ? [150, 30] : [55, 12] })); rosto(G, null, t, fase === 2 ? 'rindo' : fase === 1 ? 'tedio' : 'determinado');
    cam(C, [[0, [1.9, 1.4, -4.85]], [2.7, [1.8, 1.35, -5.05]], [5.4, [2.9, 1.5, -4.2]]], [[0, [1.3, 1.1, -5.88]], [2.7, [1.3, 1.11, -5.88]], [5.4, [1.4, 1.0, -5.5]]], u); return NOITE2; }; }); }
function bancoPredio() { const g = new THREE.Group(); g.add(rb(3.2, 2.6, 2.0, '#E8E2D6', 0, 1.3, 0, { r: .05, out: .012 })); const tri = new THREE.Mesh(new THREE.ConeGeometry(2.2, .8, 4), toon('#D8D0C2')); tri.rotation.y = Math.PI / 4; tri.scale.set(1, 1, .5); tri.position.set(0, 3.0, 0); g.add(tri); for (let i = 0; i < 4; i++) g.add(cyl(.12, .12, 2.2, '#F4F1EA', -1.05 + i * .7, 1.2, 1.1, { out: .006 })); const p = cartaz(1.8, .4, (x, W, H) => { x.fillStyle = '#3A3A44'; x.fillRect(0, 0, W, H); txt(x, 'BANCO', W / 2, H / 2, H * .6, '#F2C230'); }); p.position.set(0, 2.45, 1.02); g.add(p); return g; }
function xis() { const g = new THREE.Group(); for (const s of [-1, 1]) { const b = rb(3.2, .4, .2, '#E23A3A', 0, 0, 0, { r: .08, out: .01 }); b.rotation.z = s * Math.PI / 4; g.add(b); } return g; }
function F2(t0, t1) { return mk(t0, t1, {}, (c) => { palco(c); const B = bancoPredio(); B.position.set(-2.6, 0, 0); c.add(B); const X = xis(); X.position.set(-2.6, 1.6, 1.4); c.add(X);
  const tel = celular(.9, 1.7); tel.position.set(2.6, 1.6, .2); c.add(tel); tel.paint('w', (x, W, H) => { x.fillStyle = '#0E1422'; x.fillRect(0, 0, W, H); txt(x, 'CARTEIRA', W / 2, 60, 30, '#FFB43A'); moedaDraw(x, W / 2, 190, 70); txt(x, '100 BTC', W / 2, 310, 40, '#FFFFFF'); x.fillStyle = '#2E3A5A'; x.fillRect(30, 370, W - 60, 60); txt(x, 'CHAVE: ••••••••', W / 2, 400, 22, '#9FB4D8', 700); });
  const L = new THREE.PointLight('#8FC4FF', 6, 6, 1.6); L.position.set(2.6, 1.8, 1.4); c.add(L); const G = ator(c, GUI16CASA, .2, 1.2, 0);
  return (t, u, C) => { const x = smooth(2.2, 2.5, u); X.scale.setScalar(x < .01 ? .001 : x); X.rotation.z = .1 * Math.sin(t * 3); const ph = smooth(3.6, 4.2, u); tel.scale.setScalar(.3 + .7 * ph); tel.rotation.y = -.3 + .3 * Math.sin(t); L.intensity = 6 * ph;
    G.pose({ ...idle(t), headY: lerp(-40, 40, smooth(1.5, 4.5, u)) }); rosto(G, null, t, 'neutro', { look: [lerp(-.6, .6, smooth(1.5, 4.5, u)), 0] });
    cam(C, [[0, [-2.0, 2.2, 7.4]], [2.6, [-1.2, 2.0, 6.6]], [5.6, [1.6, 2.0, 6.4]]], [[0, [-2.6, 1.5, 0]], [2.6, [-2.2, 1.5, 0]], [5.6, [2.0, 1.5, 0]]], u); return { bloom: .4, bloomT: .8 }; }; }); }
function F3(t0, t1) { return mk(t0, t1, {}, (c) => { palco(c, { c1: '#1A1A2A', c2: '#2A2A40' }); const Co = cofre(); c.add(Co); const K = chave(); c.add(K); const cad = cadeado(); cad.position.set(0, 2.3, .9); c.add(cad); cad.visible = false; const XX = xis(); XX.position.set(0, 1.25, 1.7); c.add(XX); const B = brilho(c, [0, .9, .4], { cor: '#FFC060', size: 3, n: 40, alt: 2 });
  const Lr = new THREE.PointLight('#FF3A2A', 0, 6, 1.6); Lr.position.set(0, 1.6, 2); c.add(Lr);
  return (t, u, C) => { const entra = smooth(0, .9, u), abre = smooth(1.0, 1.6, u) * (1 - smooth(2.2, 2.5, u)), cai = smooth(1.9, 2.6, u);
    K.position.set(lerp(1.8, .78, entra), lerp(1.7, .9, entra) - cai * 1.4, lerp(2.0, .85, entra)); K.rotation.set(0, Math.PI / 2 * entra, cai * 2); K.visible = cai < .98;
    Co.userData.porta.rotation.y = -1.6 * abre; Co.userData.vol.rotation.z = entra * 3; B(u, abre); Co.userData.dentro.visible = abre > .05; cad.userData.arco.position.y = .2 + .12 * abre; XX.scale.setScalar(Math.max(.001, .42 * smooth(2.4, 2.75, u))); XX.rotation.z = .06 * Math.sin(t * 3);
    Lr.intensity = 8 * smooth(2.4, 2.7, u); 
    cam(C, [[0, [1.8, 2.0, 5.0]], [3.95, [.6, 1.8, 4.0]]], [[0, [0, 1.2, 0]], [3.95, [0, 1.3, 0]]], u); return { bloom: .4, bloomT: .8 }; }; }); }
function F4(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const { Q, G, CA } = escrevendo(c); CA.userData.E.paint('lista', (x, W, H) => paginaLista(x, W, H, 2, 0));
  return (t, u, C) => { const k = clamp((u - .6) / 3.2, 0, 1); CA.userData.D.paint('s' + Math.floor(k * 20), (x, W, H) => folhaDraw(x, W, H, () => { mao(x, 'SENHA DA CARTEIRA:', W * .16, H * .14, 44, '#B8322B'); const s1 = 'k7Rq-9xWm-2Lb'.slice(0, Math.ceil(k * 26)), s2 = 'Fz4t-Pp81-Vh'.slice(0, Math.max(0, Math.ceil(k * 26) - 13)); x.filter = 'blur(6px)'; mao(x, s1, W * .16, H * .3, 52); mao(x, s2, W * .16, H * .42, 52); x.filter = 'none'; if (k > .95) mao(x, 'NÃO PERDER!!!', W * .16, H * .6, 48, '#B8322B'); }));
    G.pose(poseEscreve(t, k < 1 ? 1 : 0)); rosto(G, null, t, 'determinado', { look: [0, .8] });
    cam(C, [[0, [3.2, 2.05, -6.05]], [5, [3.0, 1.95, -6.05]]], [[0, [2.05, .8, -5.8]], [5, [2.05, .8, -5.8]]], u); return NOITE2; }; }); }
function F5(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const Q = quartoTeen(c, { noite: true }); const G = ator(c, GUI16CASA, 3.0, -3.5, Math.PI / 2); const mc = caderno(); G.hands.R.add(mc); mc.position.set(0, -.06, .06); mc.rotation.set(Math.PI / 2, 0, 0);
  const wp = new THREE.Vector3(); Q.cadLista.getWorldPosition(wp); const B = brilho(c, [wp.x, wp.y - .2, wp.z], { cor: '#FFB43A', size: 1.2, n: 24, alt: .6, ps: .6 });
  return (t, u, C) => { const k = smooth(.3, 1.6, u); G.pose({ ...idle(t), shR: [lerp(40, 95, k), 10], elR: lerp(60, 15, k), headX: -8 }); rosto(G, null, t, 'determinado', { look: [0, -.2] }); const dentro = u > 1.7; mc.visible = !dentro; Q.cadLista.visible = dentro;
    if (dentro) G.pose({ ...idle(t), shR: [lerp(95, 10, smooth(1.7, 2.5, u)), 10], elR: 15 }); B(u, smooth(2.4, 3.2, u) * .9);
    cam(C, [[0, [.6, 1.85, -.7]], [2.0, [.8, 1.8, -.9]], [4.6, [1.1, 1.7, -1.1]]], [[0, [3.3, 1.0, -3.5]], [2.0, [3.5, 1.0, -3.6]], [4.6, [wp.x, wp.y, wp.z]]], u); return NOITE2; }; }); }

// ---------- G: os anos na escola ----------
function patioGente(c, n = 10) { const P = []; for (let i = 0; i < n; i++) { const k = aluno(i); k.place(-6 + (i % 5) * 2.6 + (i % 2) * .6, -6 - Math.floor(i / 5) * 3.2, 0, (i % 3 - 1) * .8); c.add(k.root); P.push(k); } return P; }
function G1(t0, t1) { return mk(t0, t1, {}, (c) => { patio(c); const P = patioGente(c); const G = ator(c, GUI16, 0, 0, Math.PI);
  return (t, u, C) => { const z = 1 - u * .9; G.root.position.set(.4, 0, z); G.pose(walk(t, 1.6, .9)); rosto(G, null, t, 'feliz', { olhosAbertos: true }); P.forEach((k, i) => { k.faceTo(.4, z); k.pose(idle(t, i)); rosto(k, null, t, i % 2 ? 'desconfiado' : 'surpreso'); });
    cam(C, [[0, [2.5, 1.6, 4.4]], [5.5, [1.8, 1.5, 0]]], [[0, [.4, 1.0, -.5]], [5.5, [.4, 1.0, -4.2]]], u); return {}; }; }); }
function G2(t0, t1) { return mk(t0, t1, {}, (c) => { patio(c); const G = ator(c, GUI16, 0, -8, 0); const A = [aluno(2), aluno(5), aluno(1)]; A.forEach((k, i) => { const [ax, az] = [[-1.7, -7.0], [1.6, -7.5], [-.3, -9.6]][i]; k.place(ax, az, 0, 0); k.faceTo(0, -8); c.add(k.root); });
  const N = []; for (let i = 0; i < 4; i++) { const n = icone('notas', .3); c.add(n); N.push(n); } const meme = cartaz(1.0, .7, (x, W, H) => { x.fillStyle = '#F4F1EA'; x.fillRect(0, 0, W, H); x.fillStyle = '#F2C230'; x.beginPath(); x.arc(W / 2, H * .5, H * .3, 0, 7); x.fill(); x.fillStyle = '#1B1420'; x.beginPath(); x.arc(W * .44, H * .44, 8, 0, 7); x.arc(W * .56, H * .44, 8, 0, 7); x.fill(); x.lineWidth = 6; x.strokeStyle = '#1B1420'; x.beginPath(); x.arc(W / 2, H * .5, H * .16, .2, Math.PI - .2); x.stroke(); txt(x, 'MEME', W / 2, H * .9, H * .14, '#1B1420'); }); c.add(meme);
  return (t, u, C) => { G.pose({ ...idle(t), headZ: 10 * Math.sin(t * 5), shR: [20 + 20 * Math.abs(Math.sin(t * 5)), 30], shL: [20 + 20 * Math.abs(Math.sin(t * 5 + 1)), 30] }); rosto(G, null, t, 'feliz', { mouth: { open: .3 + .2 * Math.sin(t * 9), round: .7 } });
    N.forEach((n, i) => { const f = (u * .5 + i / 4) % 1; n.position.set(.3 + Math.sin(f * 6 + i) * .3, 1.6 + f * 1.2, -8); n.material.opacity = u < 2.4 ? Math.sin(f * Math.PI) : 0; }); const mm = smooth(2.5, 2.9, u); meme.position.set(.9, 1.9, -7.8); meme.scale.setScalar(.01 + mm); meme.rotation.y = -.2;
    A.forEach((k, i) => { k.pose({ ...idle(t, i), shL: [80 * (i === 1 ? 1 : 0), 10], elL: 90 }); rosto(k, null, t, 'surpreso', { mouth: { open: .5, round: .8 } }); });
    cam(C, [[0, [2.8, 2.3, -3.4]], [4.2, [2.5, 2.1, -3.8]]], [[0, [0, 1.1, -7.8]], [4.2, [0, 1.15, -7.9]]], u); return {}; }; }); }
function G3(t0, t1) { return mk(t0, t1, {}, (c) => { const S = salaAula(c); const P = ator(c, PROFESSORA, 2.4, -6.9, 0); const al = S.carteiras.map(([x, z], i) => { if (i === 5) return null; const k = aluno(i + 2); sentar(k, x, z + .45, Math.PI, .48); c.add(k.root); return k; });
  const G = ator(c, GUI16, 0, 0); const [gx, gz] = S.carteiras[5]; sentar(G, gx, gz + .45, Math.PI, .48);
  return (t, u, C) => { const lev = smooth(1.2, 1.6, u); G.pose(sentado({ shR: [lerp(40, 165, lev), 20], elR: lerp(80, 10, lev), shL: [50, 10], elL: 80 })); rosto(G, null, t, lev > .5 ? 'feliz' : 'determinado', { olhosAbertos: true });
    al.forEach((k, i) => { if (!k) return; k.pose(sentado({ shR: [50, 10], elR: 80 + 6 * Math.sin(t * 8 + i), shL: [50, 10], elL: 80, headX: 20, headY: lev > .5 && i % 2 ? 40 : 0 })); rosto(k, null, t, lev > .5 ? 'surpreso' : 'preocupado'); });
    P.pose({ ...idle(t), headY: 40 * lev }); rosto(P, null, t, lev > .5 ? 'surpreso' : 'neutro');
    cam(C, [[0, [4.8, 2.6, -7.2]], [3.2, [4.4, 2.3, -6.9]]], [[0, [gx, 1.0, gz]], [3.2, [gx, 1.0, gz]]], u); return {}; }; }); }
function G4(t0, t1) { return mk(t0, t1, {}, (c) => { patio(c); const G = ator(c, GUI16, 0, -6, 0); const A = []; for (let i = 0; i < 6; i++) { const k = aluno(i + 1); const a = -1 + i * .4; k.place(Math.sin(a) * 2.6, -6 + Math.cos(a) * 2.6, 0, a + Math.PI); c.add(k.root); A.push(k); }
  const B = brilho(c, [0, 1.7, -6], { cor: '#C9A8FF', size: 1.5, n: 20, alt: 1 });
  return (t, u, C) => { G.pose({ ...idle(t), shL: [40, 40], shR: [40, 40], elL: 60, elR: 60 }); rosto(G, null, t, 'vergonha', { olhosAbertos: true }); B(u, .7);
    A.forEach((k, i) => { k.pose({ ...idle(t, i), shR: [95, 0], elR: 0 }); rosto(k, null, t, 'surpreso', { mouth: { open: .4 + .2 * Math.sin(t * 6 + i) } }); });
    cam(C, [[0, [0, 3.2, 1.4]], [3.25, [0, 2.4, -.6]]], [[0, [0, 1.0, -6]], [3.25, [0, 1.3, -6]]], u); return { bloom: .3 }; }; }); }
function G5(t0, t1) { return mk(t0, t1, {}, (c) => { patio(c); patioGente(c, 6); const G = ator(c, GUI16, -1.5, -3.6, .7); const D = ator(c, DUDU, 2.2, -1.8, -2.2);
  return (t, u, C) => { const k = smooth(0, 1.4, u); D.root.position.set(lerp(2.4, 1.0, k), 0, lerp(-1.2, -2.7, k)); D.pose(u < 1.4 ? mixPose(walk(t, 1.8, 1), { shL: [55, -10], shR: [55, -10], elL: 110, elR: 110 }, .5) : { ...idle(t), shL: [55, -10], shR: [55, -10], elL: 110, elR: 110 }); rosto(D, null, t, 'desconfiado', { look: [-.4, 0] });
    G.pose(idle(t)); rosto(G, null, t, 'neutro', { look: [.5, 0] });
    cam(C, [[0, [-.9, 1.5, 1.6]], [1.8, [-.6, 1.45, .8]]], [[0, [-.2, 1.1, -3.0]], [1.8, [-.1, 1.1, -3.1]]], u); return {}; }; }); }

export const ATO2 = [[D1, 87.18, 92.2], [D2, 92.2, 101.35], [D3, 101.35, 105.28], [E1, 105.28, 108.5], [E2, 108.5, 111.6], [E3, 111.6, 114.85], [E4, 114.85, 119.6], [E5, 119.6, 121.7], [E6, 121.7, 123.5], [E7, 123.5, 125.7],
  [E8, 125.7, 130.85], [E9, 130.85, 132.7], [E10, 132.7, 136.4], [F1, 136.4, 141.85], [F2, 141.85, 147.45], [F3, 147.45, 151.4], [F4, 151.4, 156.4], [F5, 156.4, 161.05],
  [G1, 161.05, 166.6], [G2, 166.6, 170.85], [G3, 170.85, 174.05], [G4, 174.05, 177.3], [G5, 177.3, 179.07]];
