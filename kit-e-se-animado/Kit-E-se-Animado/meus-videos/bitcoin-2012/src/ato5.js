// Ato 5 (368.31 a 480.7 s): a faxina, o caderno no lixo, a avenida de novo, o caso real, o riso e o churrasco de 2026.
import * as THREE from 'three';
import { smooth, lerp, clamp } from './motor/core.js';
import { bx, rb, cyl, sph, toon, ctex } from './motor/toon.js';
import { idle, walk, run, mixPose, sentado } from './motor/char3d.js';
import { mk, cam, camT, ator, rosto, gesto, icone, sentar, cartaz } from './lib.js';
import { GUI20, GUICHINELO, GUICHURRAS, MARCOSCHURRAS, REGINA } from './elenco.js';
import { casaFamilia, quartoTeen, avenida, aterro, quintal } from './cenarios.js';
import { txt, caminhaoLixo, rodar, sacoLixo, caderno, cadernoAberto, folhaDraw, mao, balde, vassoura, xicara, tela, moedaDraw } from './objetos.js';
import { brilho, sprite, poeira } from './efeitos.js';
import { celular } from './mundo.js';

// ---------- N: a faxina ----------
function N1(t0, t1) { return mk(t0, t1, {}, (c) => { const K = casaFamilia(c, { ano: '2019' }); const R = ator(c, REGINA, 0, -3.0, 0); const v = vassoura(); R.hands.R.add(v); v.position.set(0, -.05, .05); v.rotation.x = -.4; const b = balde(); b.position.set(1.4, 0, -2.2); c.add(b);
  const N = []; for (let i = 0; i < 3; i++) { const n = icone('notas', .3); c.add(n); N.push(n); } const D = poeira(c, [[0, .1, -3]], { n: 14, sp: 1.5, size: .8, life: 2, op: .4, cor: '#E8DCC8' });
  return (t, u, C) => { const x = Math.sin(u * 1.3) * 1.6; R.root.position.set(x, 0, -3.0 + Math.cos(u * 1.1) * .6); R.root.rotation.y = Math.cos(u * 1.3) > 0 ? 1.2 : -1.2; R.pose({ ...walk(t, 1.8, .6), shR: [60 + 20 * Math.sin(t * 8), 20], elR: 40, shL: [40, -10], elL: 60, lean: 15 }); rosto(R, null, t, 'preocupado', { mouth: { open: .2 + .2 * Math.sin(t * 5) } });
    v.rotation.z = .4 * Math.sin(t * 8); D((u * .8) % 2); N.forEach((n, i) => { const f = (u * .4 + i / 3) % 1; n.position.set(R.root.position.x + .2, 1.6 + f, R.root.position.z); n.material.opacity = Math.sin(f * Math.PI); });
    cam(C, [[0, [-1.5, 2.2, 2.0]], [7.4, [1.0, 1.8, 1.0]]], [[0, [0, 1.0, -3.0]], [7.4, [0, 1.0, -3.0]]], u); return {}; }; }); }
function quartoFaxina(c) { const Q = quartoTeen(c, { ano: '2019' }); const R = ator(c, REGINA, 2.65, -3.0, Math.PI / 2 - .2); const S = sacoLixo('#26262C', 2); S.position.set(2.7, 0, -2.2); S.scale.set(.9, 1.1, .9); c.add(S); const pilha = []; for (let i = 0; i < 6; i++) { const k = caderno({ cor: ['#2E6FB8', '#2E9C5A', '#C0392B', '#8E5BB8', '#F2C230', '#3A3A44'][i] }); c.add(k); pilha.push(k); } return { Q, R, S, pilha }; }
function N2(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, R, S, pilha } = quartoFaxina(c);
  return (t, u, C) => { pilha.forEach((k, i) => { const f = clamp((u - .4 - i * .7) / .6, 0, 1); k.position.set(lerp(3.55, 2.7, f), lerp(.6 + i * .03, .55 - i * .02, f) + Math.sin(f * Math.PI) * .3, lerp(-3.6, -2.2, f)); k.rotation.set(f * 2, i, 0); k.visible = f < .98; });
    R.pose({ ...idle(t), shR: [70 + 30 * Math.sin(t * 3), 10], elR: 40, shL: [60, 10], elL: 50, lean: 12 }); rosto(R, null, t, 'determinado');
    cam(C, [[0, [3.5, 1.55, -1.3]], [6.5, [3.6, 1.45, -1.6]]], [[0, [2.75, 1.0, -2.8]], [6.5, [2.75, .95, -2.7]]], u); return {}; }; }); }
function N3(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, R, S, pilha } = quartoFaxina(c); pilha.forEach(k => k.visible = false); Q.cadLista.visible = false; const K = caderno(); c.add(K);
  return (t, u, C) => { const f = smooth(.4, 2.6, u); K.position.set(lerp(2.95, 2.7, f), lerp(1.2, .75, f), lerp(-2.6, -2.2, f)); K.rotation.set(-.6 - f * .8, .3, .2); K.visible = f < .97; S.scale.set(.9, 1.1 - .1 * smooth(2.8, 3.4, u), .9);
    R.pose({ ...idle(t), shR: [90 - 40 * f, 10], elR: 30, lean: 10 }); rosto(R, null, t, 'neutro', { look: [-.3, .4] });
    cam(C, [[0, [1.3, 1.7, -.4]], [4.5, [1.5, 1.55, -.7]]], [[0, [2.75, .95, -2.6]], [4.5, [2.7, .75, -2.3]]], u); return {}; }; }); }

// ---------- O: a avenida de novo, o caso real, o riso ----------
function perseg2(c) { avenida(c, { hora: 'alvorada', seed: 12, cruz: -78 }); const T = caminhaoLixo(); c.add(T); const G = ator(c, GUICHINELO, -3, 0, Math.PI); return { T, G }; }
function posCaminhao(T, t) { // segue em -z e vira à direita na rua transversal (z = -78)
  const d = 9 + 6.2 * (t - 386.78); let x = -3.2, z = -d, ry = Math.PI; if (d > 74) { const a = Math.min(Math.PI / 2, (d - 74) / 6); x = -3.2 + 6 * (1 - Math.cos(a)); z = -74 - 6 * Math.sin(a); ry = Math.PI - a; if (d > 74 + 6 * Math.PI / 2) { x += d - 74 - 6 * Math.PI / 2; } }
  T.position.set(x, 0, z); T.rotation.y = ry; rodar(T, d); T.userData.gf.material.color.set(Math.floor(t * 4) % 2 ? '#FFB020' : '#7A5A10'); return { x, z }; }
function O1(t0, t1) { return mk(t0, t1, {}, (c) => { const { T, G } = perseg2(c);
  return (t, u, C) => { posCaminhao(T, t); const gz = 2 - 5.6 * (t - 386.78); G.root.position.set(-3, 0, gz); G.pose(run(t, 2.6, 1)); rosto(G, null, t, 'determinado');
    cam(C, [[0, [-6.5, 1.2, gz - 6]], [3.1, [-6.0, 1.3, gz - 4]]], [[0, [-3, 1.2, gz]], [3.1, [-3, 1.2, gz]]], u); return { bloom: .3 }; }; }); }
function O2(t0, t1) { return mk(t0, t1, {}, (c) => { const { T, G } = perseg2(c);
  return (t, u, C) => { const P = posCaminhao(T, t + 2.5); const para = smooth(4.5, 6.2, u); const gz = 2 - 5.6 * 3.1 - 5.6 * (u - smooth(4.5, 6.2, u) * (u - 4.5) * .7); G.root.position.set(-3, 0, gz); G.pose(mixPose(run(t, 2.6, 1), { ...idle(t), shR: [170, 20 + 25 * Math.sin(t * 9)], elR: 20, shL: [120, -10], elL: 60 }, para * .7 + .3 * Math.max(0, Math.sin(t * 2)))); rosto(G, null, t, 'medo', { mouth: { open: .6 + .3 * Math.sin(t * 9), round: .4 } });
    cam(C, [[0, [-1.2, 2.1, gz + 7.0]], [6.3, [-1.6, 2.0, gz + 6.0]]], [[0, [-3, 1.2, gz - 20]], [6.3, [-1, 1.2, -78]]], u); return { bloom: .3 }; }; }); }
function O3(t0, t1) { return mk(t0, t1, {}, (c) => { const A = aterro(c);
  return (t, u, C) => { A.braco.rotation.x = -.35 + .25 * Math.sin(t * .8); cam(C, [[0, [8, 6, 10]], [9.2, [-4, 5, 7]]], [[0, [0, 1, -16]], [9.2, [-4, 1.4, -16]]], u); return { sat: .85 }; }; }); }
function ruaFinal(c) { avenida(c, { hora: 'alvorada', seed: 12, cruz: -78 }); const G = ator(c, GUICHINELO, -3, -20, Math.PI); return { G }; }
function O4(t0, t1) { return mk(t0, t1, {}, (c) => { const { G } = ruaFinal(c);
  return (t, u, C) => { const ri = smooth(3.0, 3.4, u); G.pose(mixPose({ ...idle(t), lean: 30, shL: [30, 10], shR: [30, 10], elL: 30, elR: 30, knL: 25, knR: 25, bob: -.05 + .02 * Math.sin(t * 7) }, { ...idle(t), lean: -10 + 6 * Math.sin(t * 9), shL: [40, 30], shR: [40, 30], headX: -15 }, ri)); G.root.rotation.y = Math.PI - 2.6 * smooth(.6, 2.0, u);
    rosto(G, null, t, ri > .5 ? 'rindo' : 'preocupado', { mouth: ri > .5 ? { open: .6 + .3 * Math.sin(t * 12) } : { open: .4 + .2 * Math.sin(t * 7), round: .6 } });
    cam(C, [[0, [-2.0, 1.4, -17.4]], [4.3, [-2.3, 1.35, -18.2]]], [[0, [-3, 1.1, -20]], [4.3, [-3, 1.15, -20]]], u); return {}; }; }); }
function O5(t0, t1) { return mk(t0, t1, {}, (c) => { const { G } = ruaFinal(c); G.root.rotation.y = Math.PI - 2.6;
  return (t, u, C) => { G.pose({ ...idle(t), lean: -10 + 6 * Math.sin(t * 9), shL: [40, 30], shR: [40, 30], headX: -15 + 5 * Math.sin(t * 9) }); rosto(G, null, t, u > 3.4 ? 'feliz' : 'rindo', { mouth: u < 3.4 ? { open: .6 + .3 * Math.sin(t * 12) } : { open: .2, smile: 1 }, lagrima: u > 3.4 });
    cam(C, [[0, [-1.6, 1.3, -18.6]], [5.3, [2, 9, -8]]], [[0, [-3, 1.15, -20]], [5.3, [-3, 1, -30]]], u); return { bloom: .35 }; }; }); }

// ---------- P: o churrasco de 2026 ----------
function churras(c, o = {}) { const Q = quintal(c, o); const M = ator(c, MARCOSCHURRAS, 3.2, -5.6, Math.PI - .3); const G = ator(c, GUICHURRAS, 1.6, -4.6, 2.0); const R = ator(c, REGINA, 0, 0); sentar(R, -2.6, -2.5, Math.PI, .48);
  const esp = new THREE.Group(); esp.add(cyl(.006, .006, .6, '#C8CCD2', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], seg: 4 })); M.hands.R.add(esp); esp.position.set(0, -.06, .2); return { Q, M, G, R }; }
const assando = (t) => ({ ...idle(t), shR: [70 + 8 * Math.sin(t * 2), 10], elR: 60, shL: [20, 10], elL: 30 });
function P1(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, M, G, R } = churras(c);
  return (t, u, C) => { M.pose(assando(t)); rosto(M, null, t, 'feliz'); G.pose(idle(t)); rosto(G, null, t, 'feliz', { olhosAbertos: true }); R.pose(sentado({ shR: [50, 10], elR: 90 })); rosto(R, null, t, 'feliz', { olhosAbertos: true });
    cam(C, [[0, [-4, 6, 6]], [4.9, [-1.5, 2.6, 2.4]]], [[0, [1, .8, -4.5]], [4.9, [1.8, 1.2, -5]]], u); return { bloom: .3 }; }; }); }
function P2(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, M, G, R } = churras(c);
  return (t, u, C) => { M.pose(assando(t)); rosto(M, null, t, 'feliz', { look: [0, .4] }); G.pose(idle(t)); rosto(G, null, t, 'feliz');
    cam(C, [[0, [7.0, 2.5, -2.4]], [3.7, [6.6, 2.3, -2.8]]], [[0, [2.6, 1.15, -5.5]], [3.7, [2.6, 1.15, -5.5]]], u); return {}; }; }); }
function P3(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, M, G, R } = churras(c);
  return (t, u, C) => { M.root.rotation.y = -1.0; M.pose(gesto('marcos', t, { ...idle(t), shL: [20, 10] }, .7)); rosto(M, 'marcos', t, 'feliz', { look: [-.4, 0], lagrima: u > 4 }); G.pose(idle(t)); rosto(G, null, t, 'neutro', { look: [.5, 0] });
    cam(C, [[0, [1.15, 1.6, -3.3]], [6.5, [1.3, 1.55, -3.45]]], [[0, [3.2, 1.4, -5.6]], [6.5, [3.2, 1.42, -5.6]]], u); return {}; }; }); }
function P4(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, M, G, R } = churras(c);
  return (t, u, C) => { M.root.rotation.y = -1.0; M.pose(idle(t)); rosto(M, null, t, 'triste', { look: [-.4, 0], lagrima: true }); G.pose(gesto('gui', t, { ...idle(t), shR: [30, 10] }, .6)); rosto(G, 'gui', t, 'feliz', { olhosAbertos: true, look: [.5, -.1] });
    cam(C, [[0, [4.5, 1.7, -2.7]], [5.3, [4.3, 1.65, -2.85]]], [[0, [1.9, 1.25, -4.8]], [5.3, [1.9, 1.25, -4.8]]], u); return {}; }; }); }
function P5(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, M, G, R } = churras(c);
  return (t, u, C) => { M.root.rotation.y = -1.0; M.pose(gesto('marcos', t, { ...idle(t), shR: [60, 10], elR: 90 }, .8)); rosto(M, 'marcos', t, 'desconfiado', { look: [-.4, 0], smile: .4 }); G.pose(idle(t)); rosto(G, null, t, 'feliz', { olhosAbertos: true });
    cam(C, [[0, [2.2, 1.5, -2.6]], [4.6, [2.35, 1.48, -2.85]]], [[0, [3.2, 1.4, -5.6]], [4.6, [3.2, 1.4, -5.6]]], u); return {}; }; }); }
function P6(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, M, G, R } = churras(c); R.root.visible = false; const R2 = ator(c, REGINA, -1.0, -3.0, -1.2); const tig = cyl(.16, .12, .1, '#F2C230', 0, 0, 0, { out: .004 }); R2.hands.R.add(tig); tig.position.set(.1, -.05, .1);
  return (t, u, C) => { M.root.rotation.y = -1.0; const ri = u > 1.2; M.pose({ ...idle(t), lean: ri ? -8 + 4 * Math.sin(t * 10) : 0, shL: [ri ? 40 : 10, 30], headX: ri ? -10 : 0 }); rosto(M, null, t, ri ? 'rindo' : 'surpreso', { mouth: ri ? { open: .6 + .3 * Math.sin(t * 11) } : undefined });
    G.pose(gesto('gui', t, idle(t), .6)); rosto(G, ri ? null : 'gui', t, ri && u > 2.6 ? 'rindo' : 'feliz', { olhosAbertos: true, mouth: u > 3.5 ? { open: .5 + .3 * Math.sin(t * 12) } : undefined });
    const k = smooth(1.5, 4.0, u); R2.root.position.set(lerp(-1.6, .4, k), 0, lerp(-2.6, -3.8, k)); R2.pose(k < 1 ? { ...walk(t, 1.6, .8), shR: [70, 10], elR: 60 } : { ...idle(t), shR: [70, 10], elR: 60 }); rosto(R2, null, t, 'feliz');
    cam(C, [[0, [-.4, 2.0, -1.0]], [4.45, [.2, 1.8, -1.6]]], [[0, [2.2, 1.2, -5.0]], [4.45, [2.0, 1.2, -4.8]]], u); return {}; }; }); }

// ---------- Q: a virada e o final ----------
function mesaFamilia(c, o = {}) { const Q = quintal(c, o); const M = ator(c, MARCOSCHURRAS, 0, 0); sentar(M, -1.6, -4.3, 0, .48); const G = ator(c, GUICHURRAS, 0, 0); sentar(G, -.6, -4.3, 0, .48); const R = ator(c, REGINA, 0, 0); sentar(R, -2.6, -4.3, 0, .48); Q.cads[1].position.set(-1.6, 0, -4.3); Q.cads[1].rotation.y = 0; return { Q, M, G, R }; }
function Q1(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, M, G, R } = mesaFamilia(c);
  return (t, u, C) => { [M, G, R].forEach((k, i) => { k.pose(sentado({ shR: [50 + 10 * Math.sin(t * 2 + i), 10], elR: 90, headY: 15 * Math.sin(t * .7 + i) })); rosto(k, null, t, 'feliz', { olhosAbertos: true }); });
    cam(C, [[0, [-1.6, 1.5, .4]], [5.9, [-1.2, 7.5, 6.5]]], [[0, [-1.6, 1.05, -4.0]], [5.9, [-.6, .5, -4]]], u); return { bloom: .3 }; }; }); }
function Q2(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, M, G, R } = mesaFamilia(c); const tel = celular(.08, .16); G.hands.R.add(tel); tel.position.set(0, -.02, .07); tel.rotation.x = -.6;
  tel.paint('g', (x, W, H) => { x.fillStyle = '#0E1422'; x.fillRect(0, 0, W, H); txt(x, 'BTC', W / 2, 50, 30, '#FFB43A'); x.strokeStyle = '#7DF0A0'; x.lineWidth = 7; x.beginPath(); x.moveTo(20, 450); for (let i = 0; i < 12; i++) x.lineTo(20 + i * 21, 450 - i * 25 - (i % 2) * 40); x.stroke(); });
  return (t, u, C) => { const guarda = smooth(2.2, 3.4, u), olha = smooth(4.4, 5.2, u); G.pose(sentado({ shR: [lerp(65, 10, guarda), 10], elR: lerp(110, 20, guarda), headX: lerp(20, 0, guarda), headY: lerp(0, 45, olha) })); tel.visible = guarda < .9; rosto(G, null, t, olha > .5 ? 'feliz' : 'neutro', { look: [olha > .5 ? .7 : 0, olha > .5 ? 0 : .6], olhosAbertos: true });
    M.pose(sentado({ shR: [50, 10], elR: 90 })); rosto(M, null, t, 'rindo', { mouth: { open: .4 + .3 * Math.sin(t * 6) } }); R.pose(sentado({})); rosto(R, null, t, 'feliz');
    cam(C, [[0, [-.25, 1.35, -2.65]], [3, [-.4, 1.35, -2.72]], [5.9, [-.35, 1.3, -2.8]]], [[0, [-.6, 1.0, -4.3]], [3, [-.65, 1.1, -4.3]], [5.9, [-1.1, 1.1, -4.3]]], u); return {}; }; }); }
function Q3(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, M, G, R } = mesaFamilia(c); const tel = celular(.2, .4); tel.position.set(-1.1, .795, -3.12); tel.rotation.x = -Math.PI / 2; c.add(tel);
  return (t, u, C) => { const p = .5 + .5 * Math.sin(t * 5); tel.paint('c' + Math.round(p * 6), (x, W, H) => { x.fillStyle = '#0E1422'; x.fillRect(0, 0, W, H); txt(x, 'CONTATOS', W / 2, 50, 26, '#9FB4D8', 800); x.fillStyle = '#F2C230'; x.beginPath(); x.arc(W / 2, 170, 60, 0, 7); x.fill(); txt(x, '♥', W / 2, 172, 60, '#C0392B'); txt(x, 'PAI', W / 2, 270, 46, '#FFFFFF'); txt(x, 'MÃE', W / 2, 330, 30, '#9FB4D8', 700); x.fillStyle = `rgba(46,156,90,${.6 + .4 * p})`; x.beginPath(); x.arc(W / 2, 440, 46 + 6 * p, 0, 7); x.fill(); txt(x, '☎', W / 2, 442, 46, '#FFFFFF'); });
    [M, G, R].forEach((k, i) => { k.pose(sentado({})); rosto(k, null, t, 'feliz'); }); cam(C, [[0, [-1.1, 1.5, -2.55]], [7, [-1.1, 1.25, -2.75]]], [[0, [-1.1, .79, -3.15]], [7, [-1.1, .79, -3.14]]], u, 0, .5); return { blur: 8, focus: .55, range: .3 }; }; }); }
function Q4(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, M, G, R } = mesaFamilia(c); const CA = cadernoAberto(); CA.scale.setScalar(.75); CA.position.set(-1.62, .79, -3.04); c.add(CA); const pen = cyl(.008, .008, .15, '#2E6FB8', -1.3, .8, -3.0, { rot: [0, 0, Math.PI / 2], seg: 6 }); c.add(pen);
  CA.userData.E.paint('e', (x, W, H) => folhaDraw(x, W, H, () => { mao(x, 'A SUA LISTA', W * .5, H * .08, 54, '#B8322B', 'center'); mao(x, '1. ...', W * .16, H * .2, 46); mao(x, '2. ...', W * .16, H * .32, 46); }));
  return (t, u, C) => { CA.userData.D.paint('d' + Math.floor(t * 2) % 2, (x, W, H) => folhaDraw(x, W, H, () => { mao(x, '3. ', W * .12, H * .2, 60, '#B8322B'); x.fillStyle = Math.floor(t * 2) % 2 ? '#B8322B' : '#FBF8EE'; x.fillRect(W * .26, H * .17, 6, H * .07); x.strokeStyle = '#9CC4E4'; }));
    [M, G, R].forEach((k) => { k.pose(sentado({})); rosto(k, null, t, 'feliz'); }); cam(C, [[0, [-1.62, 1.7, -2.3]], [5.95, [-1.6, 1.35, -2.55]]], [[0, [-1.62, .8, -3.05]], [5.95, [-1.6, .8, -3.05]]], u); return {}; }; }); }
function Q5(t0, t1) { return mk(t0, t1, {}, (c) => { const { Q, M, G, R } = mesaFamilia(c); const cups = [M, G, R].map(k => { const x = xicara(['#E2443A', '#F4F1EA', '#2E6FB8'][k === M ? 0 : k === G ? 1 : 2]); k.hands.R.add(x); x.position.set(0, -.06, .05); return x; });
  return (t, u, C) => { const br = smooth(1.0, 1.6, u); [M, G, R].forEach((k, i) => { k.pose(sentado({ shR: [lerp(40, 130, br), lerp(10, -10 + i * 10, br)], elR: lerp(90, 40, br), headX: -10 * br })); rosto(k, null, t, 'rindo', { mouth: { open: .4 + .3 * Math.sin(t * 8 + i) } }); });
    cam(C, [[0, [-1.6, 1.55, -.2]], [6.4, [-1.6, 1.45, -1.0]]], [[0, [-1.6, 1.2, -4.2]], [6.4, [-1.6, 1.3, -4.2]]], u); return { bloom: .35 }; }; }); }
function Q6(t0, t1) { return mk(t0, t1, {}, (c) => { const Q = quintal(c, { tarde: true }); const M = ator(c, MARCOSCHURRAS, -.4, -3.6, .8); const G = ator(c, GUICHURRAS, .1, -3.3, -1.0); const R = ator(c, REGINA, -.9, -3.1, .4);
  return (t, u, C) => { const ab = smooth(.3, 1.4, u); M.pose({ ...idle(t), shL: [lerp(10, 80, ab), lerp(8, -40, ab)], elL: 60, shR: [lerp(10, 70, ab), -30 * ab], elR: 60 }); G.pose({ ...idle(t), shL: [lerp(10, 80, ab), -40 * ab], elL: 60, shR: [lerp(10, 80, ab), -40 * ab], elR: 60 }); R.pose({ ...idle(t), shR: [70 * ab, -30 * ab], elR: 50 });
    rosto(M, null, t, 'feliz', { lagrima: true }); rosto(G, null, t, 'feliz'); rosto(R, null, t, 'feliz');
    cam(C, [[0, [1.6, 1.4, 1.2]], [5.14, [2.6, 3.4, 4.6]]], [[0, [-.3, 1.2, -3.4]], [5.14, [-.3, 1.3, -3.6]]], u); return { bloom: .45, exposure: 1 - .5 * smooth(4.2, 5.14, u) }; }; }); }

export const ATO5 = [[N1, 368.31, 375.76], [N2, 375.76, 382.29], [N3, 382.29, 386.78], [O1, 386.78, 389.87], [O2, 389.87, 396.13], [O3, 396.13, 405.33], [O4, 405.33, 409.61], [O5, 409.61, 414.89],
  [P1, 414.89, 419.81], [P2, 419.81, 423.48], [P3, 423.48, 429.99], [P4, 429.99, 435.29], [P5, 435.29, 439.9], [P6, 439.9, 444.35],
  [Q1, 444.35, 450.27], [Q2, 450.27, 456.2], [Q3, 456.2, 463.18], [Q4, 463.18, 469.14], [Q5, 469.14, 475.56], [Q6, 475.56, 480.7]];
