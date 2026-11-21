// Ato 1 (0 a 87.18 s): a avenida em 2019, o Guilherme de 2026, a briga, a volta para 2012 e o pai vivo na cozinha.
import * as THREE from 'three';
import { smooth, lerp, clamp } from './motor/core.js';
import { bx, rb, cyl, sph, toon, ctex } from './motor/toon.js';
import { idle, walk, run, mixPose, sentado } from './motor/char3d.js';
import { mk, cam, camT, ator, rosto, gesto, icone, sentar, fala, SEPIA, NOITE } from './lib.js';
import { GUI16, GUI16CASA, GUI20, GUICHINELO, GUI30, MARCOS, REGINA } from './elenco.js';
import { avenida, apartamento, casaFamilia, quartoTeen, HORA } from './cenarios.js';
import { caminhaoLixo, rodar, sacoLixo, caderno, cadernoAberto, folhaDraw, mao, txt, jornal } from './objetos.js';
import { brilho, sprite, poeira } from './efeitos.js';
import { registra } from './vida.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';

// ---------- A: a avenida, 2019 ----------
const VT = 6.2, VG = 5.6; // velocidade do caminhão e do Guilherme (m/s)
function perseguicao(c, o = {}) {
  avenida(c, { hora: 'alvorada', seed: 12, ...o });
  const T = caminhaoLixo(); T.rotation.y = Math.PI; c.add(T);
  const extra = sacoLixo('#F4F1EA', 3); extra.scale.setScalar(.6); extra.position.set(.35, 1.38, -4.5); T.userData.body.add(extra);
  const cad = caderno(); cad.position.set(.35, 1.72, -4.66); cad.rotation.set(-.9, .3, .4); T.userData.body.add(cad);
  const G = ator(c, GUICHINELO, -3, 0, Math.PI);
  const pista = (t) => ({ tz: -9 - VT * t, gz: 2 - VG * t });
  return { T, G, pista, cad };
}
function moverPerseg(P, t, u) { const { tz, gz } = P.pista(t); P.T.position.set(-3.2, 0, tz); rodar(P.T, VT * t); P.T.userData.gf.material.color.set(Math.floor(t * 4) % 2 ? '#FFB020' : '#7A5A10'); P.G.root.position.set(-3, 0, gz); P.G.pose(run(t, 2.6, 1)); return { tz, gz }; }
function A1(t0, t1) { return mk(t0, t1, {}, (c) => { const P = perseguicao(c);
  return (t, u, C) => { const { gz } = moverPerseg(P, t, u); rosto(P.G, null, t, 'determinado');
    cam(C, [[0, [6, 16, gz + 16]], [4.6, [2.2, 2.4, gz + 6.5]]], [[0, [-3, 1, gz - 14]], [4.6, [-3, 1.3, gz - 4]]], u); return { bloom: .3 }; }; }); }
function A2(t0, t1) { return mk(t0, t1, {}, (c) => { const P = perseguicao(c);
  return (t, u, C) => { const { gz } = moverPerseg(P, t, u); rosto(P.G, null, t, 'determinado');
    cam(C, [[0, [-1.5, .5, gz + 1.6]], [2.4, [-1.7, .55, gz + .9]]], [[0, [-3, .8, gz - .3]], [2.4, [-3, .85, gz - .6]]], u); return {}; }; }); }
function A3(t0, t1) { return mk(t0, t1, {}, (c) => { const P = perseguicao(c);
  return (t, u, C) => { const { tz, gz } = moverPerseg(P, t, u); rosto(P.G, null, t, 'determinado'); P.G.root.position.z = Math.max(gz, tz + 13);
    const z0 = tz + 4.75; camT(C, [[0, [-1.0, 2.4, z0 + 3.2]], [4.2, [-2.3, 1.9, z0 + 1.7]]], [[0, [-3.2, 1.2, z0 - .4]], [4.2, [-3.0, 1.45, z0 - .3]]], u, .006, t); return {}; }; }); }
function A4(t0, t1) { return mk(t0, t1, { bg: '#2A2420' }, (c) => {
  const amb = new THREE.HemisphereLight('#FFD9B0', '#3A2A30', 1.2); c.add(amb); const k = new THREE.DirectionalLight('#FFC48A', 2); k.position.set(-2, 4, 2); k.castShadow = true; c.add(k);
  const fundo = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), toon('#2A2420')); fundo.rotation.x = -Math.PI / 2; c.add(fundo);
  for (let i = 0; i < 14; i++) { const s = sacoLixo(['#26262C', '#3A3A44', '#2A3A2A', '#F4F1EA', '#3E5C8A'][i % 5], i); s.scale.setScalar(.7 + (i % 3) * .15); s.position.set(-1.6 + (i % 5) * .8, -.15, -1 - Math.floor(i / 5) * .7 + (i % 2) * .2); c.add(s); }
  for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2, rr = .95 + (i % 3) * .3; const s = sacoLixo(['#26262C', '#3A3A44', '#2A3A2A', '#5A4A3A', '#3E5C8A', '#2C4A3A'][i % 6], i + 20); s.scale.setScalar(.45 + (i % 4) * .08); s.position.set(Math.cos(a) * rr * 1.3, -.28 + (i % 2) * .05, .3 + Math.sin(a) * rr); s.rotation.y = i * 1.7; c.add(s); }
  for (let i = 0; i < 9; i++) { const a = i * 2.4, rr = .55 + (i % 3) * .12; const p = sph(.05 + (i % 3) * .015, ['#F4F1EA', '#E8DCC0', '#D9D2C4'][i % 3], Math.cos(a) * rr * 1.4, .1, .3 + Math.sin(a) * rr * .9); c.add(p); }
  for (let i = 0; i < 4; i++) { const b = rb(.32, .2, .26, ['#B88A5A', '#C9A06A'][i % 2], [-1.1, 1.0, -.7, .9][i], .02, [.9, .8, -.4, -.3][i], { r: .01, out: .005 }); b.rotation.y = i * .8; c.add(b); }
  const lata = cyl(.04, .04, .12, '#C0392B', .62, .1, .55, { seg: 12, out: .004 }); lata.rotation.z = 1.5; c.add(lata);
  for (const s of [-1, 1]) c.add(rb(.1, 2.4, 4, '#C95E1E', s * 2.2, .9, 0, { r: .02 })); c.add(rb(4.5, 2.4, .1, '#B8501A', 0, .9, -1.8, { r: .02 }));
  const ca = cadernoAberto(); ca.position.set(0, .32, .3); ca.rotation.set(-.35, .15, .05); c.add(ca);
  ca.userData.E.paint('e', (x, W, H) => folhaDraw(x, W, H, () => { mao(x, '3. ~~~~~~~~', W * .16, H * .25, 44, '#2A3A7A'); x.fillStyle = '#2A3A7A'; x.fillRect(W * .16, H * .23, W * .7, 10); }));
  ca.userData.D.paint('d', (x, W, H) => folhaDraw(x, W, H, () => { mao(x, 'SENHA:', W * .16, H * .2, 54, '#B8322B'); x.filter = 'blur(7px)'; mao(x, 'k7Rq-9xWm-2Lb', W * .16, H * .36, 52); mao(x, 'Fz4t-Pp81-Vh', W * .16, H * .48, 52); x.filter = 'none'; mao(x, '100 BTC', W * .5, H * .7, 60, '#B8322B', 'center'); x.strokeStyle = '#B8322B'; x.lineWidth = 6; x.beginPath(); x.ellipse(W * .5, H * .7, W * .3, H * .07, 0, 0, 7); x.stroke(); }));
  return (t, u, C) => { camT(C, [[0, [.15, 1.25, 1.1]], [3, [.05, .95, .78]]], [[0, [0, .3, .3]], [3, [.05, .3, .28]]], u, .004, t); return { exposure: 1.05 }; }; }); }
function A5(t0, t1) { return mk(t0, t1, {}, (c) => { const P = perseguicao(c);
  return (t, u, C) => { const { tz, gz } = moverPerseg(P, t, u); rosto(P.G, null, t, 'determinado');
    cam(C, [[0, [14, 34, gz + 22]], [5, [10, 30, gz + 6]]], [[0, [-3, 0, gz - 20]], [5, [-3, 0, tz - 6]]], u); return { bloom: .3 }; }; }); }
function A6(t0, t1) { return mk(t0, t1, {}, (c) => { const P = perseguicao(c);
  return (t, u, C) => { const { gz } = moverPerseg(P, t, u); const sorri = smooth(2.2, 3.2, u); P.G.pose(mixPose(run(t, 2.6, 1), run(t, 2.6, .9), sorri));
    rosto(P.G, null, t, sorri > .5 ? 'feliz' : 'determinado', { olhosAbertos: true, mouth: sorri > .5 ? { open: .25, smile: 1 } : undefined });
    cam(C, [[0, [-2.2, 1.6, gz - 4.2]], [4.3, [-2.85, 1.48, gz - 1.6]]], [[0, [-3, 1.25, gz]], [4.3, [-3, 1.42, gz]]], u); return {}; }; }); }

// ---------- B: 2026 e a briga ----------
function B1(t0, t1) { return mk(t0, t1, { bg: '#121A3A' }, (c) => { avenida(c, { hora: 'noite', seed: 31, detalhes: false });
  return (t, u, C) => {
    cam(C, [[0, [0, 3, 20]], [3.2, [-3, 18, -26]]], [[0, [0, 10, -60]], [3.2, [-16, 17, -50]]], u); return { ...NOITE, bloom: .6, bloomT: .7 }; }; }); }
function B2(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const A = apartamento(c); const G = ator(c, GUI30, 0, 0); sentar(G, -1.4, -4.36, 0, .5);
  A.nb.userData.sc.paint('p', (x, W, H) => { x.fillStyle = '#F4F6F8'; x.fillRect(0, 0, W, H); x.fillStyle = '#2C6E7F'; x.fillRect(0, 0, W, 40); txt(x, 'RELATÓRIO_FINAL_v7.xlsx', W / 2, 21, 20, '#fff', 700); x.fillStyle = '#C8D2D6'; for (let i = 0; i < 12; i++) x.fillRect(20, 60 + i * 20, W - 40, 10); });
  return (t, u, C) => { A.rel.set(3, 12 + u * .5, u * 10); G.pose(sentado({ shL: [45, 14], elL: 70, shR: [45, 14], elR: 70 + Math.sin(t * 9) * 6, headX: 12, lean: 8 })); rosto(G, null, t, 'tedio', { look: [0, .5] });
    cam(C, [[0, [1.8, 1.6, -.4]], [4.5, [.6, 1.25, -1.6]]], [[0, [-1.4, .8, -4.0]], [4.5, [-1.4, .95, -4.0]]], u); return { ...NOITE }; }; }); }
function B3(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const A = apartamento(c); const G = ator(c, GUI30, 2.9, -5.2, -2.6);
  return (t, u, C) => { G.pose({ ...idle(t), shL: [55, 10], elL: 60, headX: 18 }); rosto(G, null, t, 'triste', { look: [-.4, .6] });
    cam(C, [[0, [1.4, .95, -5.0]], [5, [1.85, .85, -5.85]]], [[0, [2.1, .7, -6.35]], [5, [2.1, .68, -6.35]]], u); return { ...NOITE, blur: 10, focus: .7, range: .5 }; }; }); }
function cozinhaBriga(c) { const K = casaFamilia(c, { sepia: true, ano: '2019' }); const M = ator(c, MARCOS, 1.8, -4.6, -.6); const G = ator(c, { ...GUI20, camisa: '#2F4E86', estampa: (x, w, h) => { x.fillStyle = '#24406E'; x.fillRect(w * .36, h * .58, w * .28, h * .2); } }, -.4, -2.2, 2.3); return { K, M, G }; }
function B4(t0, t1) { return mk(t0, t1, {}, (c) => { const { K, M, G } = cozinhaBriga(c);
  return (t, u, C) => { const g = Math.sin(t * 3.1); G.pose({ ...idle(t), shR: [40 + 25 * Math.max(0, g), 20], elR: 60, shL: [20, 10], elL: 40, lean: 6, headX: -6 }); rosto(G, null, t, 'bravo', { mouth: { open: .35 + .3 * Math.abs(Math.sin(t * 7)) } });
    M.pose({ ...idle(t, 1), shL: [55, -10], shR: [55, -10], elL: 110, elR: 110, headY: -10 + 8 * Math.sin(t * .8) }); rosto(M, null, t, 'bravo', { mouth: u > 3.2 && u < 5 ? { open: .4 + .3 * Math.abs(Math.sin(t * 6)) } : undefined });
    cam(C, [[0, [3.0, 1.65, .6]], [5.8, [2.3, 1.5, -.3]]], [[0, [.6, 1.15, -3.4]], [5.8, [.7, 1.2, -3.4]]], u); return SEPIA; }; }); }
function B5(t0, t1) { return mk(t0, t1, {}, (c) => { const { K, M, G } = cozinhaBriga(c); K.porta.rotation.y = Math.PI / 2;
  const fora = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 2.15), new THREE.MeshBasicMaterial({ color: '#FFFFFF', toneMapped: false })); fora.rotation.y = Math.PI / 2; fora.position.set(-5.885, 1.08, -1.7); c.add(fora); // vão da porta: luz da rua lá fora
  for (const z of [-1.16, -2.24]) c.add(bx(.1, 2.25, .08, '#6E4628', -5.93, 1.12, z)); c.add(bx(.1, .08, 1.16, '#6E4628', -5.93, 2.22, -1.7)); // batente
  return (t, u, C) => { const sai = smooth(.2, 3.4, u); const x = lerp(-.4, -6.9, sai), z = lerp(-2.2, -1.7, sai); G.root.position.set(x, 0, z); G.root.rotation.y = u < .3 ? 2.3 : Math.atan2(-4.9, .45);
    G.pose(u < .3 ? idle(t) : walk(t, 1.9, 1)); rosto(G, null, t, 'bravo'); const ab = smooth(1.9, 2.6, u); K.porta.rotation.y = Math.PI / 2 + 1.45 * ab; G.root.visible = x > -6.6;
    M.pose({ ...idle(t, 1), shL: [55, -10], shR: [55, -10], elL: 110, elR: 110, headY: -30 * sai }); rosto(M, null, t, 'bravo', { look: [-.6 * sai, 0] });
    cam(C, [[0, [1.6, 1.6, .2]], [4.1, [2.6, 1.7, -.4]]], [[0, [-1.5, 1.2, -2.6]], [4.1, [-4.4, 1.2, -1.9]]], u); return SEPIA; }; }); }
function B6(t0, t1) { return mk(t0, t1, {}, (c) => { const { K, M, G } = cozinhaBriga(c); G.root.visible = false;
  return (t, u, C) => { M.pose({ ...idle(t, 1), shL: [10, 8], shR: [10, 8], headX: 12, headY: -25 }); rosto(M, null, t, 'triste', { look: [-.7, .3] });
    cam(C, [[0, [-1.2, 1.6, -1.6]], [1.7, [-.4, 1.6, -2.6]]], [[0, [1.8, 1.55, -4.6]], [1.7, [1.8, 1.6, -4.6]]], u); return { ...SEPIA, sat: .35 }; }; }); }
function B7(t0, t1) { return mk(t0, t1, { bg: '#1E2648' }, (c) => { const A = apartamento(c); const G = ator(c, GUI30, 0, 0); G.root.rotation.set(0, 0, Math.PI / 2 - .06); G.root.position.set(-.55, .74, -4.35); G.sombra.visible = false;
  A.nb.userData.sc.paint('p', (x, W, H) => { x.fillStyle = '#20304A'; x.fillRect(0, 0, W, H); txt(x, 'Sem conexão', W / 2, H / 2, 30, '#9FB4D8', 700); });
  const B = brilho(c, [-1.6, 1.2, -4.0], { cor: '#FFE6A0', size: 4, n: 50 }); const zz = icone('zzz', .3); zz.position.set(-2.6, 1.6, -4.2); c.add(zz);
  return (t, u, C) => { A.rel.set(4, 40 + u * 2); G.pose({ ...sentado({ hipL: [20, 0], hipR: [20, 0], knL: 20, knR: 20 }), shL: [10, 30], shR: [160, 30], elR: 60, bob: 0 }); rosto(G, null, t, 'sono', { blink: u < 2.7 ? 1 : (u < 5.3 ? 1 : 0), mouth: { open: .12 } });
    zz.material.opacity = 1 - smooth(2.4, 2.9, u); zz.position.y = 1.6 + (u % 1.2) * .3; const acorda = smooth(2.7, 5.6, u); B(u, acorda); A.Ln.intensity = 2.4 * (1 - acorda);
    cam(C, [[0, [1.0, 2.3, -1.2]], [5.9, [-.2, 1.7, -2.2]]], [[0, [-1.8, .8, -4.25]], [5.9, [-2.0, 1.0, -4.25]]], u); return { ...NOITE, flash: smooth(5.2, 5.85, u) * .9, bloom: .35 + acorda * .5, bloomT: .75 }; }; }); }

// ---------- C: 2012 ----------
function C1(t0, t1) { return mk(t0, t1, {}, (c) => { const K = casaFamilia(c, { ano: '2012' }); const R = ator(c, REGINA, -4.6, -2.7, Math.PI - .5);
  return (t, u, C) => { R.pose({ ...idle(t), shL: [140, -28], shR: [140, -28], elL: 120, elR: 120, headX: -24, lean: -6 }); rosto(R, 'regina', t, 'bravo', { look: [0, -.7] });
    cam(C, [[0, [-2.3, 1.35, -1.7]], [3.8, [-2.8, 1.3, -2.1]]], [[0, [-4.6, 1.2, -2.9]], [3.8, [-4.6, 1.25, -2.9]]], u); return { flash: .9 * (1 - smooth(0, .5, u)) }; }; }); }
function C2(t0, t1) { return mk(t0, t1, {}, (c) => { const Q = quartoTeen(c); const G = ator(c, GUI16CASA, 0, 0); G.root.position.set(-3.75, .48, -4.9); G.sombra.visible = false; G.root.rotation.y = Math.PI / 2;
  return (t, u, C) => { const lev = smooth(0, 1.3, u); G.root.position.x = lerp(-3.15, -3.75, lev); /* deitado mais pra frente: a cabeça fica no travesseiro, não dentro da parede */ G.pose({ ...sentado({ knL: 8, knR: 8, hipL: [85, 0], hipR: [85, 0] }), lean: -82 * (1 - lev), shL: [25, 25], shR: [25, 25], elL: 30, elR: 30, headX: 10 * (1 - lev), headY: 40 * Math.sin(u * .8) * smooth(1.3, 1.9, u) });
    rosto(G, null, t, u < 1.4 ? 'sono' : 'surpreso', { look: [Math.sin(u * .8) * .7, -.1] });
    cam(C, [[0, [-1.6, 1.5, -3.2]], [1.6, [-1.6, 1.5, -3.3]], [2.6, [-1.1, 1.8, -4.4]], [3.6, [-1.1, 1.85, -4.7]], [4.4, [-2.7, 1.0, -5.0]], [5.3, [-2.95, .9, -5.2]]], [[0, [-3.6, 1.0, -4.9]], [1.6, [-3.6, 1.05, -4.9]], [2.6, [-1.2, 1.95, -6.37]], [3.6, [-1.2, 1.95, -6.37]], [4.4, [-3.55, .55, -6.05]], [5.3, [-3.55, .52, -6.05]]], u); return {}; }; }); }
function C3(t0, t1) { return mk(t0, t1, {}, (c) => { const Q = quartoTeen(c); const G = ator(c, GUI16CASA, 3.1, -1.5, Math.PI / 2);
  const ref = new Reflector(new THREE.PlaneGeometry(.58, 1.48), { textureWidth: 768, textureHeight: 1536, color: 0xd8e4ea }); ref.position.set(0, 1.0, .04); Q.esp.add(ref);
  return (t, u, C) => { const p = { ...idle(t), shL: [70 + 10 * Math.sin(t * 2), 10], elL: 100, headX: -4, headY: 6 * Math.sin(t * 1.3) }; G.pose(p); rosto(G, null, t, u < .6 ? 'neutro' : 'surpreso', { mouth: u > .6 ? { open: .5, round: .8 } : undefined });
    cam(C, [[0, [1.7, 1.3, -.55]], [2.8, [1.95, 1.28, -.7]]], [[0, [3.88, 1.12, -1.45]], [2.8, [3.88, 1.12, -1.45]]], u); return {}; }; }); }
function C4(t0, t1) { return mk(t0, t1, {}, (c) => { const Q = quartoTeen(c);
  return (t, u, C) => { cam(C, [[0, [.3, 1.62, -4.4]], [2, [.22, 1.68, -5.03]]], [[0, [.2, 1.68, -6.38]], [2, [.2, 1.68, -6.38]]], u, 0, .4); return {}; }; }); }
function C5(t0, t1) { return mk(t0, t1, {}, (c) => { const K = casaFamilia(c, { ano: '2012' }); const G = ator(c, GUI16CASA, 0, 0);
  return (t, u, C) => { const d = smooth(0, 2.1, u), i = 11 * (1 - d); const y = d < 1 ? .24 * (i + 1) - .24 * Math.min(1, i) * 0 : 0; const z = d < 1 ? -3.4 - .3 * i : -3.4 + smooth(2.1, 2.7, u) * .9;
    G.root.position.set(-5.3 + smooth(2.2, 2.9, u) * .9, Math.max(0, y - .24 * (d >= .999 ? 1 : 0)), z); G.root.rotation.y = lerp(0, 1.2, smooth(2.3, 2.8, u)); G.sombra.visible = d >= .999;
    G.pose(u < 2.5 ? run(t, 2.4, .7) : idle(t)); rosto(G, null, t, u < 2.5 ? 'determinado' : 'surpreso', { look: [.6 * smooth(2.4, 2.8, u), 0] });
    cam(C, [[0, [-3.0, 2.2, -.4]], [3, [-3.2, 1.45, -1.0]]], [[0, [-5.3, 2.4, -5.6]], [3, [-4.6, 1.1, -2.7]]], u); return {}; }; }); }
function cozinha2012(c) { const K = casaFamilia(c, { ano: '2012' }); const M = ator(c, MARCOS, 0, 0); sentar(M, 1.15, -3.6, -Math.PI / 2 + .25, .48);
  const xi = K.xi; M.hands.R.add(xi); xi.position.set(0, -.06, .04); const J = jornal(); J.position.set(.6, .8, -3.55); J.rotation.x = -Math.PI / 2; J.rotation.z = .3; c.add(J);
  const G = ator(c, GUI16CASA, -3.0, -2.1, 2.0); return { K, M, G }; }
function C6(t0, t1) { return mk(t0, t1, {}, (c) => { const { K, M, G } = cozinha2012(c);
  return (t, u, C) => { K.rel.set(6, 50 + u * .2); const gole = Math.sin(t * .9) > .6 ? 1 : 0; M.pose(sentado({ shR: [60 + 25 * gole, 10], elR: 110 + 20 * gole, shL: [30, 10], elL: 60, headX: gole ? -12 : 6, headY: gole ? 0 : 20 * Math.sin(t * 1.4) })); rosto(M, null, t, u > 3 ? 'bravo' : 'neutro', { mouth: u > 2.6 && !gole ? { open: .3 + .3 * Math.abs(Math.sin(t * 7)) } : undefined });
    G.pose({ ...idle(t), shL: [5, 6], shR: [5, 6] }); rosto(G, null, t, 'surpreso', { look: [.5, 0], lagrima: u > 4.8 });
    cam(C, [[0, [-3.6, 1.5, -.2]], [6.7, [-2.6, 1.4, -.9]]], [[0, [.8, 1.0, -3.6]], [6.7, [1.0, 1.1, -3.6]]], u); return {}; }; }); }
function C7(t0, t1) { return mk(t0, t1, {}, (c) => { const { K, M, G } = cozinha2012(c); G.root.position.set(-.9, 0, -2.2); G.root.rotation.y = 2.17;
  return (t, u, C) => { M.pose(gesto('marcos', t, sentado({ shR: [60, 10], elR: 110, headY: -30 }), .6)); rosto(M, 'marcos', t, 'desconfiado', { look: [-.5, 0] });
    G.pose(idle(t)); rosto(G, null, t, 'surpreso', { look: [.6, 0] });
    cam(C, [[0, [-2.5, 1.7, -.15]], [3.3, [-2.3, 1.65, -.3]]], [[0, [1.1, 1.25, -3.55]], [3.3, [1.1, 1.28, -3.55]]], u); return {}; }; }); }
function C8(t0, t1) { return mk(t0, t1, {}, (c) => { const { K, M, G } = cozinha2012(c); G.root.position.set(-.9, 0, -2.2); G.root.rotation.y = 2.17;
  return (t, u, C) => { M.pose(sentado({ shR: [60, 10], elR: 110, headY: -30 })); rosto(M, null, t, 'neutro', { look: [-.5, 0] });
    G.pose(gesto('gui', t, { ...idle(t), headX: 6 }, .4)); rosto(G, 'gui', t, 'triste', { lagrima: true, look: [.6, -.1], smile: .3 });
    cam(C, [[0, [.55, 1.3, -3.05]], [3.2, [.35, 1.28, -2.9]]], [[0, [-.9, 1.1, -2.2]], [3.2, [-.9, 1.12, -2.2]]], u); return {}; }; }); }
function C9(t0, t1) { return mk(t0, t1, {}, (c) => { const { K, M, G } = cozinha2012(c); G.root.position.set(-.9, 0, -2.2); G.root.rotation.y = 2.17;
  return (t, u, C) => { M.pose(gesto('marcos', t, sentado({ shR: [60, 10], elR: 110, headY: -30, headZ: 10 }), .8)); rosto(M, 'marcos', t, u < 1.3 ? 'surpreso' : 'feliz', { look: [-.5, 0], olhosAbertos: true });
    G.pose(idle(t)); rosto(G, null, t, 'feliz', { lagrima: true, olhosAbertos: true });
    cam(C, [[0, [-.4, 1.5, .7]], [3.2, [-.1, 1.45, .3]]], [[0, [.1, 1.1, -3.0]], [3.2, [.15, 1.12, -3.0]]], u); return {}; }; }); }

export const ATO1 = [[A1, 0, 4.6], [A2, 4.6, 7.0], [A3, 7.0, 11.2], [A4, 11.2, 14.2], [A5, 14.2, 19.2], [A6, 19.2, 23.5],
  [B1, 23.5, 26.7], [B2, 26.7, 31.2], [B3, 31.2, 36.2], [B4, 36.2, 42.1], [B5, 42.1, 46.3], [B6, 46.3, 48.0], [B7, 48.0, 53.85],
  [C1, 53.85, 57.65], [C2, 57.65, 63.0], [C3, 63.0, 65.8], [C4, 65.8, 67.8], [C5, 67.8, 70.8], [C6, 70.8, 77.5], [C7, 77.5, 80.75], [C8, 80.75, 84.0], [C9, 84.0, 87.18]];
