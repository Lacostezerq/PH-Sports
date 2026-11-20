// Ato 4 (287.19 a 368.31 s): 14 de março de 2019, a dor fingida, a corrida até o hospital, o infarto do pai e o item 3.
import * as THREE from 'three';
import { smooth, lerp, clamp } from './motor/core.js';
import { bx, rb, cyl, sph, toon, ctex, luzToon } from './motor/toon.js';
import { idle, walk, run, mixPose, sentado } from './motor/char3d.js';
import { mk, cam, camT, ator, rosto, gesto, icone, sentar, deitar, cartaz } from './lib.js';
import { GUI20, MARCOS, REGINA, MEDICA, ENFERMEIRO, povo } from './elenco.js';
import { casaFamilia, quartoTeen, avenida, prontoSocorro, HORA } from './cenarios.js';
import { txt, maca, folhaDraw, mao, cadernoAberto, tela } from './objetos.js';
import { brilho, sprite, linhasVel } from './efeitos.js';
import { carro, ceu, predio, arvore } from './mundo.js';
import { hospital } from './interiores.js';
import { ecg, registra } from './vida.js';

// ---------- L: a manhã do dia 14 ----------
function L1(t0, t1) { return mk(t0, t1, {}, (c) => { const K = casaFamilia(c, { ano: '2019', alvorada: true });
  return (t, u, C) => { K.rel.set(6, 30, u * 8); cam(C, [[0, [.4, 2.1, -4.6]], [2.75, [.4, 2.35, -5.9]]], [[0, [.4, 2.45, -6.88]], [2.75, [.4, 2.45, -6.88]]], u, 0, .4); return { tint: '#FFE8D8' }; }; }); }
function L2(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const Q = quartoTeen(c, { ano: '2019' }); const G = ator(c, GUI20, 0, 0); sentar(G, -2.42, -4.9, Math.PI / 2, .62);
  const rel = Q.desp; return (t, u, C) => { G.pose(sentado({ shL: [40, 10], elL: 100, shR: [40, 10], elR: 100, lean: 15, headX: 12 })); rosto(G, null, t, u < 4 ? 'preocupado' : 'determinado', { look: [-.6, -.4] });
    cam(C, [[0, [0, 1.6, -3.4]], [4.5, [-.5, 1.4, -3.9]], [9.9, [-1.0, 1.25, -4.4]]], [[0, [-2.42, 1.0, -4.9]], [4.5, [-2.42, 1.05, -4.9]], [9.9, [-2.42, 1.1, -4.9]]], u); return { tint: '#FFE0D0' }; }; }); }
function L3(t0, t1) { return mk(t0, t1, {}, (c) => { const K = casaFamilia(c, { ano: '2019', alvorada: true }); const M = ator(c, MARCOS, 0, 0); sentar(M, 1.15, -3.6, -Math.PI / 2 + .25, .48); const G = ator(c, GUI20, -4.6, -3.0, 1.0);
  return (t, u, C) => { const k = smooth(.3, 5.4, u); G.root.position.set(lerp(-4.8, -1.7, k), 0, lerp(-3.2, -2.6, k)); G.root.rotation.y = 1.35; G.pose(mixPose(walk(t, 1.2, .55), { shR: [55, -25], elR: 100, lean: 12 }, .55)); rosto(G, null, t, 'determinado');
    M.pose(sentado({ shR: [60, 10], elR: 110, headY: -20 * smooth(4.5, 5.6, u) })); rosto(M, null, t, 'neutro', { look: [-.5 * smooth(4.5, 5.6, u), 0] });
    cam(C, [[0, [-1.6, 1.6, .2]], [5.9, [-.6, 1.4, -.6]]], [[0, [-4.4, 1.0, -3.0]], [5.9, [-1.6, 1.1, -2.7]]], u); return { tint: '#FFE8D8' }; }; }); }
function L4(t0, t1) { return mk(t0, t1, {}, (c) => { const K = casaFamilia(c, { ano: '2019', alvorada: true }); const M = ator(c, MARCOS, 0, 0); sentar(M, 1.15, -3.6, -Math.PI / 2 + .25, .48); const G = ator(c, GUI20, -.9, -2.2, 2.17);
  return (t, u, C) => { G.pose(gesto('gui', t, { shR: [55, -25], elR: 100, lean: 22, knL: 15, knR: 15, bob: -.03 }, .3)); rosto(G, 'gui', t, 'preocupado', { look: [.6, -.3] }); M.pose(sentado({ shR: [30, 10], elR: 60, headY: -25 })); rosto(M, null, t, u < 1.2 ? 'surpreso' : 'medo', { look: [-.6, 0] });
    cam(C, [[0, [.0, 1.45, -.1]], [3.5, [.1, 1.4, -.4]]], [[0, [.1, 1.0, -2.9]], [3.5, [.1, 1.0, -2.9]]], u); return { tint: '#FFE8D8' }; }; }); }
function L5(t0, t1) { return mk(t0, t1, {}, (c) => { const K = casaFamilia(c, { ano: '2019', alvorada: true }); const M = ator(c, MARCOS, .9, -2.9, -1.8); const G = ator(c, GUI20, -.9, -2.2, 2.17); const R = ator(c, REGINA, 0, 0);
  const ch = new THREE.Group(); ch.add(sph(.03, '#C8CCD2')); ch.add(bx(.02, .08, .01, '#C8CCD2', 0, -.05, 0)); R.hands.R.add(ch); ch.position.set(0, -.07, .03);
  return (t, u, C) => { M.pose(gesto('marcos', t, { ...idle(t), shR: [90, 30], elR: 20, shL: [70, -10], elL: 40, lean: 10 }, 1.4)); rosto(M, 'marcos', t, 'medo', { look: [-.4, 0] });
    G.pose({ shR: [55, -25], elR: 100, lean: 22, knL: 15, knR: 15, bob: -.03 }); rosto(G, null, t, 'preocupado');
    const k = smooth(1.0, 3.8, u); R.root.position.set(lerp(-4.6, -1.6, k), 0, lerp(-5.5, -3.6, k)); R.root.rotation.y = 2.2; R.pose(k < 1 ? run(t, 2.6, .9) : { ...idle(t), shR: [100, 10], elR: 20 }); rosto(R, null, t, 'medo');
    camT(C, [[0, [2.6, 1.7, -.4]], [4.3, [2.3, 1.6, -.8]]], [[0, [.2, 1.2, -3.0]], [4.3, [-.4, 1.2, -3.0]]], u, .008, t); return { tint: '#FFE8D8' }; }; }); }
// carro da família pela avenida de manhã
function corridaCarro(c, o = {}) { avenida(c, { hora: 'manha', seed: 44, faixa: -40, ...o }); const K = carro('#2E6FB8', { out: true }); K.rotation.y = Math.PI; c.add(K); const M = ator(c, MARCOS, 0, 0); M.root.scale.multiplyScalar(.9); M.root.position.set(-.38, .25, .1); M.root.rotation.y = Math.PI; M.sombra.visible = false; K.userData.body.add(M.root); M.root.position.set(-.38, .25, -.1); M.root.rotation.y = 0;
  const outros = []; for (let i = 0; i < 6; i++) { const k = carro(['#F4F1EA', '#E2443A', '#3A3A44', '#F2C230', '#8FD3C1', '#E8A0B8'][i]); k.rotation.y = i % 2 ? 0 : Math.PI; c.add(k); outros.push({ k, x: i % 2 ? 3.4 : -5.6, z0: -20 - i * 22, v: i % 2 ? -6 : 4 }); } return { K, M, outros }; }
function moverCarro(R, t, u, v = 18) { const z = 6 - v * u; R.K.position.set(-2.4 + .4 * Math.sin(u * 2.3), 0, z); R.K.rotation.y = Math.PI + .06 * Math.sin(u * 2.3); R.K.userData.rodas.forEach(w => w.rotation.x = -u * v / .36); R.outros.forEach(({ k, x, z0, v: vv }) => { k.position.set(x, 0, z0 + (vv < 0 ? -vv : -vv) * u * (vv < 0 ? 1 : 1)); }); R.M.pose(sentado({ shL: [70, 10], elL: 30, shR: [70, 10], elR: 30, lean: 10 })); rosto(R.M, null, t, 'medo'); return z; }
function L6(t0, t1) { return mk(t0, t1, {}, (c) => { const R = corridaCarro(c);
  return (t, u, C) => { const z = moverCarro(R, t, u); cam(C, [[0, [3.6, 1.4, z - 9]], [2.6, [2.4, 1.0, z - 6]]], [[0, [-2.4, .9, z]], [2.6, [-2.4, .9, z]]], u); return {}; }; }); }
function L7(t0, t1) { return mk(t0, t1, {}, (c) => { const R = corridaCarro(c); const sem = []; c.traverse(n => { if (n.userData && n.userData.luzes) sem.push(n); });
  const cruz = carro('#F2C230'); cruz.rotation.y = Math.PI / 2; c.add(cruz); const bz = icone('exclamacao', .9); c.add(bz);
  return (t, u, C) => { const z = moverCarro(R, t, u + 1.6, 20); cruz.position.set(lerp(-14, -6.5, smooth(0, 1.0, u)), 0, -40 - 0); bz.position.set(-6.5, 2.4, -40); bz.visible = u > .5 && u < 1.3 && Math.floor(t * 8) % 2 === 0;
    camT(C, [[0, [6, 3.2, -46]], [1.4, [5, 2.6, -44]]], [[0, [-2.4, 1, -38]], [1.4, [-3, 1, -40]]], u, .02, t); return {}; }; }); }
function fachadaHospital() { const g = new THREE.Group(); g.add(rb(18, 9, 8, '#E8EEF2', 0, 4.5, 0, { r: .1 })); for (let a = 0; a < 2; a++) for (let i = 0; i < 9; i++) { const j = bx(1.3, 1.1, .1, '#8FC4E0', -7.6 + i * 1.9, 4.6 + a * 2.4, 4.02); g.add(j); }
  const pl = cartaz(7, 1.1, (x, W, H) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, W, H); txt(x, '✚ HOSPITAL SANTA LUZIA', W / 2, H / 2, H * .5, '#C0392B'); }); pl.position.set(0, 8.2, 4.06); g.add(pl);
  const ps = cartaz(4, .8, (x, W, H) => { x.fillStyle = '#C0392B'; x.fillRect(0, 0, W, H); txt(x, 'PRONTO-SOCORRO', W / 2, H / 2, H * .5, '#FFFFFF'); }); ps.position.set(0, 3.3, 5.6); g.add(ps); g.add(bx(8, .2, 3, '#C8CCD2', 0, 3.0, 5.4)); for (const s of [-1, 1]) g.add(cyl(.12, .12, 3, '#C8CCD2', s * 3.6, 1.5, 6.6));
  g.add(rb(3, 2.6, .1, '#9FC3D4', 0, 1.3, 4.05, { r: .02 })); return g; }
function L8(t0, t1) { return mk(t0, t1, {}, (c) => { const H = HORA.manha; ceu(c, H.topo, H.base, { n: 6 }); const L = new THREE.HemisphereLight(H.sky, H.ground, 1.35); c.add(L); const S = new THREE.DirectionalLight(H.key, 2.1); S.position.set(20, 30, 30); S.castShadow = true; S.shadow.mapSize.set(2048, 2048); Object.assign(S.shadow.camera, { left: -20, right: 20, top: 20, bottom: -20, far: 100 }); c.add(S);
  const ch = new THREE.Mesh(new THREE.PlaneGeometry(160, 160), toon('#C9C2B6')); ch.rotation.x = -Math.PI / 2; ch.receiveShadow = true; c.add(ch); const F = fachadaHospital(); F.position.set(0, 0, -14); c.add(F);
  const ru = new THREE.Mesh(new THREE.PlaneGeometry(160, 9), toon('#55575E')); ru.rotation.x = -Math.PI / 2; ru.position.set(0, .01, 6); ru.receiveShadow = true; c.add(ru); for (let i = 0; i < 16; i++) c.add(bx(2, .02, .2, '#F4F1EA', -40 + i * 5.5, .02, 6));
  const cores = ['#E8DCC8', '#D9C9B0', '#C8D2D6', '#E6CDB8']; [[-19, -16, 12, 16], [-31, -18, 10, 24], [19, -16, 12, 20], [31, -19, 10, 13], [-14, -34, 14, 30], [14, -34, 14, 26]].forEach(([x, z, w, h], i) => { const p = predio({ w, d: 12, h, tipo: i % 2 ? 'vidro' : 'janelas', cor: cores[i % 4], v1: '#A8D2EE', v2: '#6FA6D2', vj: '#8DB8D8', seed: 90 + i, corTerreo: '#4A4E58' }); p.position.set(x, 0, z); c.add(p); });
  for (let i = 0; i < 7; i++) arvore(c, -12 + i * 4 + (i > 2 ? 4 : 0), -6.5, .75, i + 4); for (const x of [-9, 9]) { const b = rb(.12, 2.6, .12, '#5A6068', x, 1.3, -7.5); c.add(b); }
  const amb = carro('#F4F6F8', { out: true }); amb.position.set(6.5, 0, -8.6); amb.rotation.y = -1.2; c.add(amb); const fx = bx(1.2, .12, .3, '#C0392B', 0, 1.75, 0); amb.add(fx);
  const K = carro('#2E6FB8', { out: true }); K.position.set(-4.2, 0, 4.5); K.rotation.y = .35; c.add(K);
  const M = ator(c, MARCOS, 0, 0); const G = ator(c, GUI20, 0, 0); G.sombra.visible = false;
  const colo = new THREE.Group(); M.root.add(colo); colo.position.set(0, .66, .36); colo.add(G.root); G.root.position.set(-.5, 0, 0);
  G.root.setRotationFromMatrix(new THREE.Matrix4().makeBasis(new THREE.Vector3(0, 0, 1), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0)));
  return (t, u, C) => { const k = smooth(.1, 3.9, u); const x = lerp(-2.2, -.2, k), z = lerp(3.5, -8.4, k); M.root.position.set(x, 0, z); M.root.rotation.y = Math.atan2(2.0, -11.9); M.pose({ ...run(t, 2.6, .8), shL: [80, 8], elL: 35, shR: [80, -8], elR: 35 }); rosto(M, null, t, 'medo');
    G.pose({ shR: [20, 10], elR: 40, shL: [10, 5], elL: 20, hipL: [55, 0], hipR: [50, 0], knL: 95, knR: 90, headX: 10 }); rosto(G, null, t, 'preocupado', { olhosAbertos: .5 });
    cam(C, [[0, [1.4, 2.4, 9.0]], [4, [1.3, 2.3, -.8]]], [[0, [-1.4, 1.4, 1.0]], [4, [-.1, 1.6, -9.6]]], u); return {}; }; }); }

// ---------- M: o hospital ----------
function M1(t0, t1) { return mk(t0, t1, {}, (c) => { luzToon(c, { r: 8, pos: [4, 8, 5], target: [-.6, 0, -3.6], ki: 1.6, hemi: 1.45, sky: '#F2FAFF', key: '#FFF6EA' }); const H = hospital(c); const G = ator(c, GUI20, 0, 0); G.root.position.set(-.6, .62, -3.8); G.root.rotation.y = Math.PI / 2; G.sombra.visible = false; const Me = ator(c, MEDICA, .3, -3.2, -1.7);
  const est = new THREE.Group(); est.add(cyl(.04, .04, .02, '#C8CCD2', 0, 0, 0, { rot: [Math.PI / 2, 0, 0] })); Me.hands.R.add(est); est.position.set(0, -.07, .04); const bate = ecg(H.tela, { bpm: 72 }); const M = ator(c, MARCOS, -1.9, -1.8, .4);
  return (t, u, C) => { bate(t); G.pose(sentado({ shR: [10, 10], shL: [10, 10], hipL: [85, 0], hipR: [85, 0], knL: 80, knR: 80 })); rosto(G, null, t, 'vergonha', { look: [.4, 0] }); Me.pose({ ...idle(t), shR: [80, -20], elR: 30, lean: 10 }); rosto(Me, null, t, u > 2.4 ? 'feliz' : 'neutro', { look: [-.5, 0] });
    M.pose({ ...idle(t), shL: [55, -10], shR: [55, -10], elL: 110, elR: 110 }); rosto(M, null, t, 'preocupado', { look: [.4, 0] });
    cam(C, [[0, [1.8, 1.6, -.4]], [3.7, [1.2, 1.45, -1.2]]], [[0, [-.6, 1.0, -3.6]], [3.7, [-.4, 1.05, -3.6]]], u); return {}; }; }); }
function salaEspera(c) { const P = prontoSocorro(c); const M = ator(c, MARCOS, 0, 0); sentar(M, -3.48, -2.0, 0, .5); const g = []; for (const [x, z] of [[-4.6, -2.0], [-2.36, -2.0], [-4.04, -4.0], [-2.92, -4.0]]) { const k = povo(g.length + 3, { simples: true }); sentar(k, x, z + .0, 0, .5); c.add(k.root); g.push(k); } return { P, M, g }; }
function M2(t0, t1) { return mk(t0, t1, {}, (c) => { const { P, M, g } = salaEspera(c); P.luzT.paint('off', (x, W, H) => { x.fillStyle = '#3A2222'; x.fillRect(0, 0, W, H); });
  return (t, u, C) => { const dor = smooth(3.0, 3.6, u), cai = smooth(5.3, 5.9, u); M.pose(mixPose(sentado({ shL: [20, 10], elL: 30, shR: [20, 10], elR: 30 }), sentado({ shR: [55, -30], elR: 115, shL: [30, 30], elL: 30, lean: 25 + 40 * cai, headX: 20 }), dor)); M.root.rotation.z = -cai * .9; M.root.position.y = .5 - .28 * 1.07 - cai * .25; M.root.position.x = -3.48 + cai * .4;
    rosto(M, null, t, dor > .5 ? 'medo' : 'neutro', { look: [.2, 0], mouth: dor > .5 ? { open: .5, round: .6 } : undefined }); g.forEach((k, i) => { k.pose(sentado({ headY: cai > .2 ? 40 : 0 })); rosto(k, null, t, cai > .2 ? 'medo' : 'tedio'); });
    camT(C, [[0, [-1.2, 1.5, .8]], [3.0, [-2.0, 1.3, -.2]], [6.2, [-2.6, 1.15, -.8]]], [[0, [-3.4, 1.0, -2.0]], [6.2, [-3.4, .95, -2.0]]], u, cai > 0 && cai < 1 ? .015 : 0, t); return {}; }; }); }
function M3(t0, t1) { return mk(t0, t1, {}, (c) => { const { P, M, g } = salaEspera(c); M.root.visible = false; const mc = maca(); c.add(mc); const Mz = ator(c, MARCOS, 0, 0); deitar(Mz, 0, .9, 0); mc.add(Mz.root); Mz.root.position.set(0, .93, .55);
  const E = [ator(c, ENFERMEIRO, 0, 0), ator(c, MEDICA, 0, 0), ator(c, { ...ENFERMEIRO, camisa: '#4FA3B8', calca: '#4FA3B8', pele: '#E3B28E', cabelo: 'rabo', corCabelo: '#5A3020', cilios: true }, 0, 0)];
  return (t, u, C) => { const k = smooth(0, 4.6, u); mc.position.set(lerp(-3.0, 3.0, k), 0, lerp(-1.4, -6.6, k)); mc.rotation.y = Math.atan2(6, -5.2); E.forEach((e, i) => { const off = [[-.6, .4], [.6, .2], [0, 1.4]][i]; e.root.position.set(mc.position.x + off[0], 0, mc.position.z + off[1]); e.root.rotation.y = mc.rotation.y; e.pose(run(t, 2.6, .8, i * .3)); rosto(e, null, t, 'determinado'); });
    Mz.pose({}); rosto(Mz, null, t, 'sono', { blink: 1 }); g.forEach((k, i) => { k.pose(sentado({ headY: 30 })); rosto(k, null, t, 'medo'); });
    cam(C, [[0, [3.6, 1.8, 1.4]], [4.8, [4.8, 1.7, -1.6]]], [[0, [-1.4, .9, -2.2]], [4.8, [2.4, .9, -6.0]]], u); return {}; }; }); }
function M4(t0, t1) { return mk(t0, t1, {}, (c) => { const P = prontoSocorro(c); const G = ator(c, GUI20, 3.4, -4.6, Math.PI); P.luzT.paint('on', (x, W, H) => { x.fillStyle = '#FF3A2A'; x.fillRect(0, 0, W, H); txt(x, 'EM CIRURGIA', W / 2, H / 2 + 2, H * .6, '#FFFFFF'); });
  return (t, u, C) => { const fecha = smooth(.2, 1.6, u); P.portas.forEach((p, i) => { p.rotation.y = (i ? 1 : -1) * 1.4 * (1 - fecha); }); P.luz.visible = fecha > .9; P.luzT.visible = fecha > .9; G.pose({ ...idle(t), shL: [5, 6], shR: [5, 6] }); rosto(G, null, t, 'choro');
    cam(C, [[0, [3.4, 1.6, -1.0]], [5.2, [3.4, 1.5, -2.4]]], [[0, [3.4, 1.6, -7.8]], [5.2, [3.4, 1.4, -7.8]]], u); return {}; }; }); }
function M5(t0, t1) { return mk(t0, t1, {}, (c) => { const P = prontoSocorro(c); const G = ator(c, GUI20, 0, 0); sentar(G, 1.5, -6.0, 0, .5); const s = new THREE.Group(); s.add(rb(.5, .08, .48, '#2E7FB8', 0, .46, 0, { r: .03 })); s.position.set(1.5, 0, -6.0); c.add(s); const Me = ator(c, MEDICA, 3.4, -7.4, 0);
  return (t, u, C) => { const h = 9 + u * 1.0; P.rel.set(h, (u * 60) % 60); const sai = smooth(1.6, 3.2, u); P.portas.forEach((p, i) => p.rotation.y = (i ? 1 : -1) * 1.3 * sai * (1 - smooth(3.0, 3.3, u))); Me.root.position.z = lerp(-7.5, -6.6, sai); Me.root.visible = sai > .15; Me.pose(sai < 1 ? walk(t, 1.4, .8) : idle(t)); rosto(Me, null, t, 'neutro');
    G.pose(sentado({ shL: [40, 10], elL: 100, shR: [40, 10], elR: 100, lean: 20, headX: u > 1.6 ? -10 : 20 })); G.root.rotation.y = u > 1.8 ? .9 : 0; rosto(G, null, t, u > 1.6 ? 'surpreso' : 'triste');
    cam(C, [[0, [1.1, 1.35, -3.5]], [1.6, [1.2, 1.4, -3.7]], [3.2, [.3, 1.5, -4.1]]], [[0, [1.5, 1.0, -6.0]], [1.6, [1.7, 1.05, -6.3]], [3.2, [2.9, 1.3, -6.9]]], u); return {}; }; }); }
function M6(t0, t1) { return mk(t0, t1, {}, (c) => { const P = prontoSocorro(c); const Me = ator(c, MEDICA, 3.4, -6.2, .4); const G = ator(c, GUI20, 2.6, -4.9, 2.6); const R = ator(c, REGINA, 3.6, -4.6, -2.9);
  return (t, u, C) => { Me.pose(gesto('n', t, { ...idle(t), shR: [40 + 15 * Math.sin(t * 2), 20], elR: 60 }, .2)); rosto(Me, null, t, 'feliz', { mouth: u < 6 ? { open: .25 + .25 * Math.abs(Math.sin(t * 6)), smile: .4 } : undefined });
    const al = smooth(.2, .8, u); R.pose({ ...idle(t), shL: [120 * al, -20], shR: [120 * al, -20], elL: 120, elR: 120, headX: 10 }); rosto(R, null, t, 'choro', { smile: .6 }); G.pose({ ...idle(t), shR: [50 * al, 30], elR: 40 }); rosto(G, null, t, 'choro', { smile: .5 });
    cam(C, [[0, [1.3, 1.6, -7.3]], [7.1, [1.8, 1.5, -7.0]]], [[0, [3.1, 1.3, -4.8]], [7.1, [3.1, 1.3, -4.8]]], u); return {}; }; }); }
function corredorMemoria(c) { const P = prontoSocorro(c); const G = ator(c, GUI20, 0, 0); sentar(G, -2.36, -2.0, 0, .5); return { P, G }; }
function M7(t0, t1) { return mk(t0, t1, {}, (c) => { const { P, G } = corredorMemoria(c); const CA = cadernoAberto(); CA.scale.setScalar(1.1); c.add(CA); const B = brilho(c, [-2.36, 1.9, -1.6], { cor: '#FFE6A0', size: 2, n: 40, alt: 1.2 });
  CA.userData.E.paint('e', (x, W, H) => folhaDraw(x, W, H, () => { mao(x, 'A LISTA', W * .5, H * .08, 60, '#B8322B', 'center'); mao(x, '1. Comprar bitcoin', W * .16, H * .2, 46); mao(x, '2. Não contar pra ninguém', W * .16, H * .32, 42); }));
  CA.userData.D.paint('d', (x, W, H) => { folhaDraw(x, W, H); x.fillStyle = '#E8E2D0'; x.fillRect(0, H * .38, W, H * .62); });
  CA.traverse(n => { if (n.material) { n.material = n.material.clone(); n.material.transparent = true; } });
  return (t, u, C) => { const ap = smooth(1.2, 3.2, u); CA.position.set(-2.36, 1.95 + .05 * Math.sin(t * 2), -1.3); CA.rotation.set(1.15 + .12 * Math.sin(t), 0, 0); CA.traverse(n => { if (n.material) n.material.opacity = ap * .82; }); B(u, ap);
    G.pose(sentado({ shL: [40, 10], elL: 100, shR: [40, 10], elR: 100, lean: 12, headX: -14 })); rosto(G, null, t, 'triste', { look: [0, -.6] });
    cam(C, [[0, [-1.2, 1.45, .9]], [5.6, [-1.8, 1.5, .5]]], [[0, [-2.36, 1.6, -1.7]], [5.6, [-2.36, 1.62, -1.6]]], u); return { bloom: .25, bloomT: .85 }; }; }); }
function M8(t0, t1) { return mk(t0, t1, {}, (c) => { const { P, G } = corredorMemoria(c); const CA = cadernoAberto(); CA.scale.setScalar(1.6); CA.position.set(-2.36, 1.75, -1.3); CA.rotation.set(1.0, 0, 0); c.add(CA); const B = brilho(c, [-2.36, 1.9, -1.4], { cor: '#FFE6A0', size: 2.5, n: 40, alt: 1.2 });
  CA.userData.E.paint('e', (x, W, H) => folhaDraw(x, W, H, () => { mao(x, 'A LISTA', W * .5, H * .08, 60, '#B8322B', 'center'); mao(x, '1. Comprar bitcoin', W * .16, H * .2, 46); mao(x, '2. Não contar pra ninguém', W * .16, H * .32, 42); }));
  return (t, u, C) => { const d = 1 - smooth(0, .8, u); CA.userData.D.paint('d' + Math.round(d * 10), (x, W, H) => folhaDraw(x, W, H, () => { mao(x, '3. Salvar o meu pai', W * .12, H * .46, 54, '#B8322B'); mao(x, '14/03/2019', W * .2, H * .58, 50, '#B8322B'); if (d > 0) { x.fillStyle = '#E8E2D0'; x.fillRect(0, H * (1 - .62 * d), W, H * .62 * d); } }));
    B(u, .8); CA.position.y = 1.75 + .03 * Math.sin(t * 2);
    cam(C, [[0, [-2.1, 2.05, -.75]], [4.6, [-2.25, 2.0, -.95]]], [[0, [-2.2, 1.72, -1.35]], [4.6, [-2.25, 1.72, -1.35]]], u); return { bloom: .4, bloomT: .78 }; }; }); }
function M9(t0, t1) { return mk(t0, t1, {}, (c) => { luzToon(c, { r: 8, pos: [4, 8, 5], target: [-.6, 0, -3.6], ki: 1.5, hemi: 1.4, sky: '#F2FAFF', key: '#FFE6C8' }); const H = hospital(c); const M = ator(c, MARCOS, 0, 0); deitar(M, -.6, .78, -2.7); const bate = ecg(H.tela, { bpm: 64 }); const G = ator(c, GUI20, .7, -2.4, -2.43); const m = sprite('#FFB43A', 1.2, 0, true); m.position.set(.6, 2.0, -2.4); c.add(m);
  return (t, u, C) => { bate(t); M.pose({ shL: [10, 10], shR: [10, 10] }); rosto(M, null, t, 'sono', { blink: 1 }); G.pose({ ...idle(t), shR: [30, 10], elR: 20 }); rosto(G, null, t, 'feliz', { lagrima: true, look: [-.6, .3] }); m.material.opacity = .6 * (1 - smooth(1.0, 2.2, u));
    cam(C, [[0, [1.7, 1.55, -4.35]], [6.2, [1.5, 1.5, -4.2]]], [[0, [-.1, 1.0, -3.0]], [6.2, [-.1, 1.05, -3.0]]], u); return {}; }; }); }

export const ATO4 = [[L1, 287.19, 289.94], [L2, 289.94, 299.84], [L3, 299.84, 305.7], [L4, 305.7, 309.2], [L5, 309.2, 313.47], [L6, 313.47, 316.07], [L7, 316.07, 317.45], [L8, 317.45, 321.5],
  [M1, 321.5, 325.2], [M2, 325.2, 331.4], [M3, 331.4, 336.2], [M4, 336.2, 341.4], [M5, 341.4, 344.75], [M6, 344.75, 351.85], [M7, 351.85, 357.45], [M8, 357.45, 362.1], [M9, 362.1, 368.31]];
