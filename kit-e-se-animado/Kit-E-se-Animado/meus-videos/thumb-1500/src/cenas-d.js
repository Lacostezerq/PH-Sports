// Salvar gente, a peste, a virada e o final (254.97 a 422.7 s).
import * as THREE from 'three';
import { smooth, rng, lerp, clamp } from './motor/core.js';
import { canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, sky, pointer, tree, lamp, car } from './motor/kit.js';
import { smoke, crowd, stars, nebula } from './motor/kit2.js';
import { mk, cam, luzes, feixe, poeira, letreiro, comodo, planta, quadro, phoneMesh, TELA, cidade, pessoa } from './lib.js';
import { heroi, velho, crianca, gente, casa, calcada, fundoLisboa, interior, vela, pergaminho, nau, rio, banguela, rato, bebe } from './lx.js';
import { ape } from './cenas-c.js';

/** Rua de Lisboa com casas dos dois lados. */
function rua(c, o = {}) { fundoLisboa(c, { z: -200, w: 600, y: -2, seed: o.seed || 12, noite: o.noite, stops: o.stops }); calcada(c, 20, 120, -40); const cs = []; for (let i = 0; i < 8; i++) for (const s of [-1, 1]) { const h = casa(70 + i * 2 + (s > 0 ? 1 : 0) + (o.seed || 0), 6, 2 + (i + (s > 0 ? 1 : 0)) % 2, { night: o.noite, cruz: o.cruz && (i + (s > 0 ? 1 : 0)) % 3 === 0 }); h.position.set(s * 6.2, 0, -4 - i * 6.4); h.rotation.y = -s * Math.PI / 2; c.add(h); cs.push(h); } return cs; }
/** Bacia de água com sabão. */
function bacia(c, x, y, z, s = 1) { const b = new THREE.Mesh(new THREE.CylinderGeometry(.35 * s, .25 * s, .18 * s, 24), std('#B8683A')); b.position.set(x, y + .09 * s, z); c.add(b); const a = new THREE.Mesh(new THREE.CircleGeometry(.31 * s, 24), new THREE.MeshStandardMaterial({ color: '#9FD8F0', roughness: .05, metalness: .2 })); a.rotation.x = -Math.PI / 2; a.position.set(x, y + .17 * s, z); c.add(a); const sab = box(.14 * s, .06 * s, .08 * s, '#F4EEDC', x + .45 * s, y + .03 * s, z); c.add(sab); return { b, a }; }
const maoT = () => canvasTex(128, 160, (x) => { x.fillStyle = '#1C1C25'; x.beginPath(); x.roundRect(30, 60, 70, 90, 20); x.fill(); for (let i = 0; i < 4; i++) { x.beginPath(); x.roundRect(30 + i * 18, 6 + Math.abs(i - 1.5) * 8, 14, 64, 7); x.fill(); } x.beginPath(); x.roundRect(90, 70, 30, 14, 7); x.fill(); });

/** 33. Você começa a reparar ao seu redor — 254.97 a 261.68 */
export function sBairro(t0, t1) {
  return mk(t0, t1, { bg: '#A8CCE8', fog: ['#D8D0C0', .012], fov: 34, far: 900 }, (c) => {
    rua(c, { seed: 20 }); luzes(c, { ki: 3, pos: [-10, 20, 10], r: 40, hemi: 1 }); const h = heroi(c, 0, -6);
    const P = [['mae', 'long', '#3A2418', -3.6, -10], ['parteira', 'bun', '#5A3A22', 3.6, -13], ['mae', 'bun', '#2a1b18', -3.4, -16]].map(([o, hh, hc, x, z]) => { const k = gente(c, o, hh, hc, x, z); k.tint('#FFF0E0'); return k; });
    return (t, u, C) => { const z = -6 - u * .9; h.root.position.z = z; h.walk(u, .8, .8); h.face(C); h.eye(u < 3 ? 'look' : 'lookl'); P.forEach(k => { k.face(C); k.eye('sad'); k.pose({ armL: [20, -110], armR: [20, -110] }); }); cam(C, [[0, [1.4, 1.5, -1]], [6.7, [1.2, 1.6, -6]]], [[0, [0, 1.3, -8]], [6.7, [0, 1.3, -14]]], u); return { focus: C.position.distanceTo(h.root.position), range: 3, blur: 10, bloom: .25, bloomT: .95, vig: .42, sat: .85 }; };
  });
}

/** 34. Mulheres morrendo depois do parto — 261.68 a 266.62 */
export function sParto(t0, t1) {
  return mk(t0, t1, { bg: '#0E0808', fog: ['#1A1010', .03], fov: 32 }, (c) => {
    const I = interior(c, { lareiraX: 3.6, noite: true }); c.add(box(2.2, .4, 1.6, std('#6A4A2E'), -1, .2, -2.6)); c.add(box(2.1, .2, 1.5, std('#E2D6C0'), -1, .5, -2.6)); c.add(box(2.1, .08, 1.2, std('#5A4A6A'), -.8, .62, -2.5));
    const doente = gente(c, 'mae', 'long', '#3A2418', -1.5, -2.7, -.3); doente.tint('#C8C0D0'); const vs = [vela(c, -2.4, .9, -3.2), vela(c, .6, .9, -2.0)]; c.add(box(.5, .9, .5, std('#5A3A22'), -2.4, .45, -3.2)); c.add(box(.4, .9, .4, std('#5A3A22'), .6, .45, -2.0));
    const marido = gente(c, 'campones', null, null, .5, -2.8); marido.tint('#E0D0C8');
    return (t, u, C) => { I.upd(u); vs.forEach(v => v.upd(u)); cam(C, [[0, [.6, 1.4, 1.6]], [4.9, [.2, 1.3, .8]]], [[0, [-1, .9, -2.6]], [4.9, [-1, 1, -2.6]]], u); doente.face(C); doente.eye('shut'); doente.pose({ head: -10 }); marido.face(C); marido.eye('sad'); marido.pose({ armL: [20, -120], armR: [20, -120], head: 10 }); return { focus: C.position.distanceTo(doente.root.position), range: 1.8, blur: 13, bloom: .45, bloomT: .78, vig: .7, sat: .7 }; };
  });
}

/** 35. Lavar as mãos (algo que só se descobre em 1847) — 266.62 a 272.73 */
export function sLavar(t0, t1) {
  return mk(t0, t1, { bg: '#2A1A10', fog: ['#2A1A10', .02], fov: 30 }, (c) => {
    const I = interior(c, { lareiraX: -9 }); c.add(box(2, .1, 1.2, std('#6A4A2E'), 0, .9, -2)); const B = bacia(c, 0, .95, -2, 1.2);
    const mt = maoT(); const M = [cut(mt, .22, .28), cut(mt, .22, .28)]; M.forEach(m => c.add(m)); M[1].scale.x = -1;
    const R = rng(2), gotas = []; for (let i = 0; i < 24; i++) { const g = new THREE.Mesh(new THREE.SphereGeometry(.015, 6, 4), new THREE.MeshStandardMaterial({ color: '#CFEFFF', emissive: '#6AB8E0', emissiveIntensity: .4 })); c.add(g); gotas.push({ g, vx: (R() - .5) * .8, vy: R() * 1.2, p: R() }); }
    const esp = []; for (let i = 0; i < 16; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(.03 + R() * .03, 8, 6), new THREE.MeshStandardMaterial({ color: '#FFFFFF', transparent: true, opacity: .8 })); c.add(s); esp.push({ s, x: (R() - .5) * .4, p: R() * 6 }); }
    return (t, u, C) => {
      I.upd(u); const esf = Math.sin(u * 9); M[0].position.set(-.08 + esf * .05, 1.2, -1.95); M[1].position.set(.08 - esf * .05, 1.2, -1.93); M.forEach(m => { m.rotation.z = esf * .2; pointer(m, C); });
      gotas.forEach(q => { const k = (u * 1.4 + q.p) % 1; q.g.position.set(q.vx * k * .5, 1.1 + q.vy * k * .3 - k * k * .5, -1.95); }); esp.forEach(q => { q.s.position.set(q.x + Math.sin(u + q.p) * .03, 1.12 + Math.abs(Math.sin(u * 2 + q.p)) * .08, -1.95); });
      cam(C, [[0, [.3, 1.6, -.6]], [6.1, [.1, 1.5, -1.0]]], [[0, [0, 1.1, -2]], [6.1, [0, 1.15, -2]]], u);
      return { focus: C.position.distanceTo(new THREE.Vector3(0, 1.15, -1.95)), range: .8, blur: 12, bloom: .4, bloomT: .82, vig: .55 };
    };
  });
}

/** 36. Viena: lavar as mãos derrubou as mortes — 272.73 a 281.56 */
export function sViena(t0, t1) {
  return mk(t0, t1, { bg: '#C8C8C0', fog: ['#D8D4CC', .02], fov: 34 }, (c) => {
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), std('#8A7A6A', { roughness: .5 })); fl.rotation.x = -Math.PI / 2; fl.position.z = -8; fl.receiveShadow = true; c.add(fl);
    c.add(box(30, 6, .3, std('#E8E0D0'), 0, 3, -10)); for (const s of [-1, 1]) c.add(box(.3, 6, 30, std('#E0D8C8'), s * 6, 3, -6));
    for (let i = 0; i < 4; i++) { const j = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 2.4), new THREE.MeshBasicMaterial({ color: '#F4F0E0' })); j.position.set(-4.5 + i * 3, 3, -9.8); c.add(j); feixe(c, -4.5 + i * 3, 2.4, -7, 1.2, 5, .3, '#FFF4D8', .1).rotation.x = -.6; }
    for (let i = 0; i < 6; i++) for (const s of [-1, 1]) { c.add(box(.9, .5, 2, std('#E8E4DA'), s * 4.6, .5, -1 - i * 1.4)); c.add(box(.9, .1, .3, std('#F4F2EE'), s * 4.6, .8, -1.8 - i * 1.4)); }
    const med = gente(c, 'terno', null, null, -.8, -4); med.tint('#FFFFFF'); const B = bacia(c, .4, .9, -4.2, 1); c.add(box(.6, .9, .6, std('#5A3A22'), .4, .45, -4.2));
    const gr = pergaminho(c, 2.2, 1.4, (x, p, W, H) => { x.fillStyle = '#3A2A1A'; x.font = '700 48px Caveat'; x.fillText('mortes na ala', 60, 80); x.strokeStyle = '#3A2A1A'; x.lineWidth = 4; x.beginPath(); x.moveTo(80, 120); x.lineTo(80, 620); x.lineTo(980, 620); x.stroke(); x.strokeStyle = '#C21A1A'; x.lineWidth = 10; x.beginPath(); const pts = [[120, 180], [300, 170], [460, 160], [600, 560], [800, 580], [960, 570]]; const n = Math.max(2, Math.floor(p * pts.length) + 1); x.moveTo(...pts[0]); for (let i = 1; i < Math.min(n, pts.length); i++) x.lineTo(...pts[i]); x.stroke(); x.fillStyle = '#C21A1A'; x.font = '900 52px Fraunces'; x.fillText('18%', 140, 160); if (p > .8) x.fillText('2%', 820, 540); });
    gr.position.set(2.6, 2.6, -9.8);
    luzes(c, { ki: 2.4, pos: [-10, 20, 10], r: 20, hemi: 1.1 });
    return (t, u, C) => { gr.paint(smooth(3, 7.5, u)); cam(C, [[0, [-1.6, 1.7, 3]], [4, [0, 1.8, 0]], [8.8, [1.8, 2.4, -6]]], [[0, [-.6, 1.3, -4]], [4, [.6, 1.6, -5]], [8.8, [2.6, 2.6, -9.8]]], u); med.face(C); med.eye(u < 4 ? 'look' : 'happy'); med.pose({ armR: [50, -40], armL: [50, -40], head: 6 }); return { focus: lerp(5, C.position.distanceTo(gr.position), smooth(4, 7, u)), range: 2.4, blur: 11, bloom: .3, bloomT: .92, vig: .45, sat: .8 }; };
  });
}

/** 37. Penitência: mãos limpas para receber uma alma nova; a parteira aceita — 281.56 a 294.94 */
export function sPenitencia(t0, t1) {
  return mk(t0, t1, { bg: '#2A1A10', fog: ['#3A2414', .02], fov: 32 }, (c) => {
    const I = interior(c, { lareiraX: -3.4 }); c.add(box(1.4, .9, .8, std('#5A3A22'), .2, .45, -2.4)); bacia(c, .2, .9, -2.4, 1.1);
    const h = heroi(c, -.9, -2.2); const p = gente(c, 'parteira', 'bun', '#C8C8C8', 1.3, -2.3); p.tint('#FFE8D0'); banguela(p);
    const cruz = cut(canvasTex(128, 128, (x) => { x.clearRect(0, 0, 128, 128); x.fillStyle = '#C9A04A'; x.fillRect(54, 10, 20, 108); x.fillRect(24, 36, 80, 18); }), .3, .3, { blend: true }); c.add(cruz);
    return (t, u, C) => { I.upd(u); cam(C, [[0, [.2, 1.5, 2.4]], [13.4, [.2, 1.45, 1.1]]], [[0, [.2, 1.3, -2.3]], [13.4, [.2, 1.35, -2.3]]], u); h.face(C); h.pose({ armL: [10, 6], armR: u < 6 ? [70 + Math.sin(u * 6) * 15, -10] : [40, -60] }); h.eye(u < 2.6 ? 'look' : u < 6 ? 'smug' : 'happy'); p.face(C); const lav = u > 8.5; p.pose({ armL: lav ? [40, -60] : [10, 6], armR: lav ? [40, -60] : [10, 6], head: lav ? 8 : Math.sin(u * 2) * 4 }); p.eye(u < 6 ? 'look' : 'happy'); cruz.visible = u > 5.3 && u < 8.6; cruz.position.set(-.5, 2.1, -2.2); cruz.material.opacity = smooth(5.3, 5.6, u) * (1 - smooth(8.2, 8.6, u)); pointer(cruz, C); return { focus: C.position.distanceTo(new THREE.Vector3(.2, 1.3, -2.3)), range: 2, blur: 12, bloom: .4, bloomT: .82, vig: .5 }; };
  });
}

/** 38. As mães do bairro começam a sobreviver — 294.94 a 301.76 */
export function sMaesVivas(t0, t1) {
  return mk(t0, t1, { bg: '#F2D9B0', fog: ['#E8D8C0', .012], fov: 34, far: 900 }, (c) => {
    rua(c, { seed: 30, stops: [[0, '#6FA7D8'], [.6, '#F2D0A8'], [1, '#FFE8C0']] }); luzes(c, { ki: 3.2, key: '#FFD8A0', pos: [-10, 14, 10], r: 40, hemi: 1.1 });
    const M = [[-2.4, -6, 'mae', 'long', '#3A2418'], [-.8, -8, 'parteira', 'bun', '#5A3A22'], [1.2, -7, 'mae', 'bun', '#2a1b18'], [2.6, -9, 'mae', 'bob', '#5A3A22']].map(([x, z, o, hh, hc], i) => { const k = gente(c, o, hh, hc, x, z); k.tint('#FFF4E8'); const b = bebe(c, x + .02, 1.18, z + .22, .9); k.b = b; k.ph = i; return k; });
    const h = heroi(c, 4.2, -4.6); const pz = poeira(c, 80, [-4, 5, .5, 4, -10, -3], 3, '#FFE8B0');
    return (t, u, C) => { pz(u); M.forEach(k => { k.face(C); k.eye('happy'); k.pose({ armL: [30, -100], armR: [30, -100], head: Math.sin(u * 2 + k.ph) * 4 }); k.b.face(C); k.b.olhos(Math.sin(u + k.ph) > .5 ? 'happy' : 'open'); }); h.face(C); h.eye(u < 3 ? 'look' : 'happy'); cam(C, [[0, [0, 1.4, 1.5]], [6.8, [2.6, 1.5, -.4]]], [[0, [0, 1.3, -7]], [6.8, [3.6, 1.4, -4.6]]], u); return { focus: C.position.distanceTo(u < 4 ? M[1].root.position : h.root.position), range: 3, blur: 10, bloom: .35, bloomT: .9, vig: .38 }; };
  });
}

/** 39. 1569: cabelo branco, netos… e a peste chega — 301.76 a 311.12 */
export function sNetos(t0, t1) {
  return mk(t0, t1, { bg: '#A8C0D8', fog: ['#C8C8C0', .012], fov: 34, far: 900 }, (c) => {
    const ceu = sky(c, -200, 900, 400, [[0, '#6FA7D8'], [.6, '#C8D8E0'], [1, '#F4E8D0']]); fundoLisboa(c, { z: -180, w: 520, y: -2, seed: 40 });
    calcada(c, 30, 30, -4); const h1 = casa(51, 8, 2); h1.position.set(-4, 0, -9); c.add(h1); const h2 = casa(52, 6, 2); h2.position.set(4.6, 0, -9); c.add(h2); tree(c, 1.6, -7, 1.4, undefined, 2);
    const v = velho(c, 0, -3); const netos = [[-1.4, -2.6, 'campones2', null], [1.2, -2.4, 'mae', 'bob'], [-2.4, -3.4, 'campones', null], [2.2, -3.2, 'mae', 'long']].map(([x, z, o, hh], i) => { const k = gente(c, o, hh, '#3A2418', x, z, 0, .58); k.tint('#FFF0E0'); k.ph = i; return k; });
    const nuvem = smoke(c, 20, [0, 18, -60], { col: '#3A3440', size: 30, rise: 6, spread: 30, seed: 4, life: 6 });
    const sol = luzes(c, { ki: 3, pos: [-10, 20, 10], r: 20, hemi: 1 });
    return (t, u, C) => { const esc = smooth(4.5, 8.5, u); sol.intensity = lerp(3, .8, esc); nuvem(esc > .05 ? u : -99); netos.forEach(k => { k.face(C); if (esc < .5) k.cheer(u, k.ph, .6); else k.pose({ armL: [20, -110], armR: [20, -110] }); k.eye(esc < .5 ? 'happy' : 'wide'); }); v.face(C); v.eye(esc < .5 ? 'happy' : 'look'); v.pose({ armL: [20, -20], armR: [20, -20], head: esc * 8 }); cam(C, [[0, [0, 1.3, 3.4]], [9.4, [.4, 1.6, 4.6]]], [[0, [0, 1.0, -3]], [9.4, [0, 3.4, -20]]], u); return { focus: C.position.distanceTo(v.root.position), range: 4, blur: 10, bloom: .25, bloomT: .95, vig: lerp(.4, .65, esc), sat: lerp(1, .6, esc), exposure: lerp(1, .8, esc) }; };
  });
}

/** 40. A peste: cruzes nas portas, os padres não dão conta dos nomes — 311.12 a 322.14 */
export function sPeste(t0, t1) {
  return mk(t0, t1, { bg: '#4A4A50', fog: ['#5A5658', .03], fov: 34, far: 900 }, (c) => {
    rua(c, { seed: 50, cruz: true, stops: [[0, '#4A4A58'], [.6, '#7A7A80'], [1, '#9A948C']] }); luzes(c, { ki: 1.2, key: '#C8C8D0', pos: [-10, 20, 10], r: 40, hemi: .7 });
    const carroca = new THREE.Group(); carroca.add(box(2.2, .3, 1.2, std('#5A3A22'), 0, .7, 0)); for (const s of [-1, 1]) { const r = new THREE.Mesh(new THREE.TorusGeometry(.4, .06, 6, 16), std('#3A2414')); r.position.set(-.4, .4, s * .65); carroca.add(r); } for (let i = 0; i < 3; i++) { const corpo = new THREE.Mesh(new THREE.CapsuleGeometry(.18, 1.1, 4, 8), std('#D8D0C0')); corpo.rotation.z = Math.PI / 2; corpo.position.set(0, 1.0 + i * .12, -.35 + i * .35); carroca.add(corpo); } carroca.position.set(-1.5, 0, -9); c.add(carroca);
    const padre = gente(c, 'padre', null, null, 2.2, -6.2); padre.tint('#E8E0E0'); const livro = box(.4, .05, .3, std('#5A1A1A'), 0, 0, 0); c.add(livro);
    const fum = smoke(c, 16, [0, 1, -14], { col: '#6A6466', size: 4, rise: 4, spread: 6, seed: 2, life: 5 });
    const R = rng(5); for (let i = 0; i < 6; i++) rato(c, (R() - .5) * 6, -3 - R() * 10, .45);
    return (t, u, C) => { fum(u); carroca.position.x = -1.5 + u * .25; padre.face(C); padre.eye('sad'); const esc = Math.sin(u * 8); padre.pose({ armL: [30, -100], armR: [40 + esc * 8, -90], head: 10 }); livro.position.set(padre.root.position.x, 1.1, padre.root.position.z + .2); cam(C, [[0, [-.4, 1.6, 2]], [11, [1.2, 1.7, -2.6]]], [[0, [0, 1.3, -10]], [11, [2.2, 1.3, -6.2]]], u); return { focus: C.position.distanceTo(u < 5 ? carroca.position : padre.root.position), range: 3, blur: 10, bloom: .2, bloomT: 1, vig: .65, sat: .45 }; };
  });
}

/** 41. Castigo de Deus ou ar podre: todos fecham as janelas e rezam — 322.14 a 330.22 */
export function sReza(t0, t1) {
  return mk(t0, t1, { bg: '#1A1418', fog: ['#2A2226', .02], fov: 34, far: 600 }, (c) => {
    stars(c, 1000, 200, 5); const h = casa(61, 10, 3, { night: true, col: '#C8BCA8' }); h.position.set(0, 0, -6); c.add(h); calcada(c, 30, 30, -2, '#6A6058');
    const jan = []; [[-3.33, 1.5], [0, 1.5], [3.33, 1.5], [-3.33, 4.3], [0, 4.3], [3.33, 4.3], [-3.33, 7.1], [3.33, 7.1]].forEach(([x, y], i) => { const g = new THREE.Group(); for (const s of [-1, 1]) { const p = box(.45, 1.2, .06, std('#3A2A1A'), s * .23, 0, 0); g.add(p); } g.position.set(x, y, -3.4); c.add(g); jan.push(g); const v = glowSprite('#FFC67A', .4, .8); v.position.set(x, y - .3, -3.45); c.add(v); g.v = v; });
    const fum = smoke(c, 12, [0, .5, -2], { col: '#B8B0C0', size: 2, rise: 5, spread: 3, seed: 8, life: 4 });
    c.add(new THREE.HemisphereLight('#3A3A5A', '#0A0808', .5)); const L = new THREE.DirectionalLight('#8A8AB8', .8); L.position.set(-5, 10, 10); c.add(L);
    return (t, u, C) => { fum(u); jan.forEach((g, i) => { const k = smooth(3 + i * .35, 3.4 + i * .35, u); g.children.forEach((p, j) => { p.position.x = (j ? 1 : -1) * lerp(.7, .23, k); }); g.v.material.opacity = lerp(.8, .25, k); }); cam(C, [[0, [0, 3, 10]], [8.1, [0, 4, 7]]], [[0, [0, 4, -6]], [8.1, [0, 4.4, -6]]], u); return { focus: 11, range: 8, blur: 8, bloom: .5, bloomT: .75, vig: .6, sat: .6 }; };
  });
}

/** 42. A peste vem das pulgas dos ratos: você limpa tudo — 330.22 a 341.34 */
export function sRatos(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .025], fov: 32 }, (c) => {
    const I = interior(c, { lareiraX: -3.4 }); const R = rng(7), RS = []; for (let i = 0; i < 5; i++) { const r = rato(c, -1 + i * .5, -1.2 - R() * .6, .55); RS.push({ r, x: r.position.x, p: R() * 6 }); }
    const pulgas = []; for (let i = 0; i < 30; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(.012, 5, 4), std('#2A1A10')); c.add(p); pulgas.push({ p, i: i % 5, a: R() * 6, h: R() }); }
    const v = velho(c, 1.4, -2.4); const vas = new THREE.Group(); vas.add(box(.04, 1.3, .04, '#B8864A', 0, .65, 0)); vas.add(box(.36, .14, .08, '#E9B44C', 0, .05, 0)); c.add(vas);
    const roupa = box(.4, .1, .3, std('#E8E0D0'), -3.4, 1.05, -3.4); c.add(roupa);
    const neto = gente(c, 'campones2', null, null, 2.6, -3, 0, .58); neto.tint('#FFF0E0');
    return (t, u, C) => {
      I.upd(u); const fase = u < 2.6 ? 0 : 1; const fuga = smooth(5, 7, u);
      RS.forEach(q => { q.r.position.x = q.x - fuga * 6 + Math.sin(u * 6 + q.p) * .05; q.r.position.y = .17 + Math.abs(Math.sin(u * 10 + q.p)) * .02; pointer(q.r, C); }); pulgas.forEach(q => { const r = RS[q.i].r; q.p.position.set(r.position.x + Math.cos(u * 9 + q.a) * .2, r.position.y + .1 + Math.abs(Math.sin(u * 12 + q.a)) * .15 * q.h, r.position.z + Math.sin(u * 7 + q.a) * .1); });
      roupa.position.y = 1.05 + Math.sin(u * 3) * .03;
      cam(C, fase ? [[2.6, [.6, 1.4, 1.2]], [11.1, [.4, 1.5, .4]]] : [[0, [-.2, .45, .4]], [2.6, [-.3, .5, .2]]], fase ? [[2.6, [.4, 1.0, -2.4]], [11.1, [.6, 1.1, -2.6]]] : [[0, [0, .2, -1.4]], [2.6, [-.2, .2, -1.4]]], u);
      v.face(C); const sw = Math.sin(u * 5); v.pose({ armL: [30, -60], armR: [30, -60], lean: sw * 4, head: 6 }); v.eye(u < 6 ? 'angry' : 'look'); vas.position.set(v.root.position.x + .25 + sw * .2, 0, v.root.position.z + .2); vas.rotation.z = -.3 - sw * .2;
      neto.face(C); neto.cheer(u, 1, .4); neto.eye('happy');
      return { focus: u < 2.6 ? .9 : C.position.distanceTo(v.root.position), range: u < 2.6 ? .6 : 2.4, blur: 12, bloom: .4, bloomT: .82, vig: .55 };
    };
  });
}

/** 43. Os vizinhos acham que você enlouqueceu; um ano depois, sua família está inteira — 341.34 a 350.54 */
export function sInteira(t0, t1) {
  return mk(t0, t1, { bg: '#F2D9B0', fog: ['#E8D8C0', .012], fov: 34, far: 900 }, (c) => {
    rua(c, { seed: 60, stops: [[0, '#6FA7D8'], [.6, '#F2D0A8'], [1, '#FFE8C0']] }); const sol = luzes(c, { ki: 1.2, key: '#C8C8D0', pos: [-10, 14, 10], r: 40, hemi: .8 });
    const viz = [gente(c, 'parteira', 'bun', '#5A3A22', -3.6, -8), gente(c, 'campones', null, null, -3.4, -10)]; viz.forEach(k => k.tint('#E8E0D8'));
    const v = velho(c, .6, -6.4); const fam = [[-.6, -6.8, 'mae', 'long', 1], [1.8, -6.8, 'campones', null, 1], [-.2, -5.8, 'campones2', null, .58], [1.2, -5.7, 'mae', 'bob', .55], [2.6, -5.9, 'mae', 'long', .58]].map(([x, z, o, hh, s], i) => { const k = gente(c, o, hh, '#3A2418', x, z, 0, s); k.tint('#FFF4E8'); k.ph = i; return k; });
    const halo = glowSprite('#FFE0A0', 6, 0); halo.position.set(.8, 1.4, -6.6); c.add(halo);
    return (t, u, C) => { const ano = smooth(2.6, 3.6, u); sol.intensity = lerp(1.2, 3.2, ano); halo.material.opacity = ano * .35; viz.forEach(k => { k.root.visible = ano < .5; k.face(C); k.eye('angry'); k.pose({ armL: [20, -110], armR: [70, -140], head: 8 }); }); fam.forEach(k => { k.root.visible = ano > .5; k.face(C); k.eye('happy'); k.pose({ head: Math.sin(u * 2 + k.ph) * 4 }); }); v.face(C); v.eye(ano < .5 ? 'flat' : 'happy'); cam(C, [[0, [-1.6, 1.6, -3]], [2.6, [-1.4, 1.6, -3.4]], [3.6, [.8, 1.5, -.6]], [9.2, [.8, 1.6, -1.6]]], [[0, [-3.4, 1.5, -9]], [2.6, [-3.4, 1.5, -9]], [3.6, [.8, 1.2, -6.4]], [9.2, [.8, 1.3, -6.4]]], u); return { focus: C.position.distanceTo(ano < .5 ? viz[0].root.position : v.root.position), range: 3, blur: 10, bloom: .35, bloomT: .9, vig: .42, sat: lerp(.6, 1, ano) }; };
  });
}

/** Ícones da lição final. */
const licaoTex = (k) => canvasTex(200, 200, (x) => { x.fillStyle = '#10162Bdd'; x.beginPath(); x.arc(100, 100, 94, 0, 7); x.fill(); x.strokeStyle = '#F2C14E'; x.lineWidth = 6; x.stroke(); x.lineCap = 'round';
  if (k === 0) { x.fillStyle = '#F4EEDC'; x.beginPath(); x.roundRect(60, 70, 50, 70, 14); x.fill(); for (let i = 0; i < 4; i++) { x.beginPath(); x.roundRect(60 + i * 13, 34 + Math.abs(i - 1.5) * 6, 10, 46, 5); x.fill(); } x.fillStyle = '#9FD8FF'; for (const [a, b] of [[130, 60], [140, 100], [126, 130]]) { x.beginPath(); x.moveTo(a, b - 14); x.quadraticCurveTo(a + 12, b + 4, a, b + 8); x.quadraticCurveTo(a - 12, b + 4, a, b - 14); x.fill(); } }
  if (k === 1) { x.fillStyle = '#5A5A62'; x.beginPath(); x.arc(100, 120, 44, 0, Math.PI); x.fill(); x.fillRect(52, 108, 96, 14); x.strokeStyle = '#E8E4DA'; x.lineWidth = 6; for (const a of [76, 100, 124]) { x.beginPath(); x.moveTo(a, 96); x.quadraticCurveTo(a - 12, 76, a, 56); x.quadraticCurveTo(a + 12, 40, a, 30); x.stroke(); } x.fillStyle = '#FF8A30'; x.beginPath(); x.moveTo(70, 172); x.lineTo(100, 150); x.lineTo(130, 172); x.fill(); }
  if (k === 2) { x.drawImage(ratoMini, 30, 50, 140, 88); x.strokeStyle = '#E9483A'; x.lineWidth = 12; x.beginPath(); x.arc(100, 100, 80, 0, 7); x.moveTo(44, 44); x.lineTo(156, 156); x.stroke(); } });
let ratoMini = null;
/** 44. Na beira do Tejo: lava a mão, ferve a água e cuidado com o rato — 350.54 a 370.46 */
export function sTejo(t0, t1) {
  return mk(t0, t1, { bg: '#0A0C24', fog: ['#141838', .004], fov: 34, far: 900 }, (c) => {
    fundoLisboa(c, { noite: true, z: -280, w: 700, y: -6, seed: 9 }); stars(c, 3000, 300, 11); const lua = glowSprite('#E8ECFF', 30, .9); lua.position.set(60, 70, -260); lua.material.fog = false; c.add(lua);
    const T = rio(c, 600, 300, -150, -.4); const cais = new THREE.Mesh(new THREE.PlaneGeometry(200, 30), std('#5A5248')); cais.rotation.x = -Math.PI / 2; cais.position.set(0, 0, 10); c.add(cais); c.add(box(200, 1.2, 1, std('#4A4238'), 0, -.4, -5));
    for (let i = 0; i < 10; i++) c.add(box(.3, 1.2, .3, '#3A2A1A', -20 + i * 4.2, .3, -4.8));
    const fant = []; for (let i = 0; i < 13; i++) { const n = nau(1); n.traverse(o => { if (o.material) { o.material = o.material.clone(); o.material.transparent = true; o.material.opacity = .0; o.material.depthWrite = false; } }); n.position.set(-30 + (i % 5) * 14, -.4, -40 - Math.floor(i / 5) * 22); n.rotation.y = -Math.PI / 2 + .15; c.add(n); fant.push(n); }
    const v = velho(c, .2, -3.6, -.2); const lanterna = vela(c, -.8, 0, -3.4, 1.4);
    if (!ratoMini) { ratoMini = document.createElement('canvas'); ratoMini.width = 256; ratoMini.height = 160; }
    const ic = [0, 1, 2].map(k => { const m = cut(licaoTex(k), .8, .8); c.add(m); return m; }); const T2 = [16.6, 17.6, 18.8];
    c.add(new THREE.HemisphereLight('#3A3A6A', '#0A0808', .55)); const L = new THREE.DirectionalLight('#A8B8FF', .8); L.position.set(30, 20, -30); c.add(L);
    return (t, u, C) => {
      T.offset.x = u * .02; lanterna.upd(u); const g = smooth(4, 7, u) * (1 - smooth(12, 15, u)); fant.forEach((n, i) => { n.traverse(o => { if (o.material) o.material.opacity = g * .35; }); n.position.z = -40 - Math.floor(i / 5) * 22 - u * .6; });
      ic.forEach((m, i) => { const p = smooth(T2[i], T2[i] + .3, u); m.visible = p > .02; m.scale.setScalar(p); m.position.set(-1.1 + i * 1.1, 2.6, -3.4); pointer(m, C); });
      v.face(C); v.eye(u < 7 ? 'look' : u < 13 ? 'sad' : 'happy'); v.pose({ armL: [10, 6], armR: [10, 6], head: Math.sin(u * .6) * 3 });
      cam(C, [[0, [3.5, 1.6, 2]], [8, [1.2, 1.4, 0]], [15.5, [.3, 1.6, 1.8]], [19.9, [.2, 2.0, 2.6]]], [[0, [0, 1.2, -3.6]], [8, [-6, 3, -40]], [15.5, [0, 1.6, -3.6]], [19.9, [0, 2.1, -3.6]]], u);
      return { focus: lerp(C.position.distanceTo(v.root.position), 40, smooth(5, 8, u) * (1 - smooth(13, 15.5, u))), range: 4, blur: 10, bloom: .5, bloomT: .75, vig: .55 };
    };
  });
}

/** 45. A virada: é sobre você, agora, segurando um celular — 370.46 a 389.45 */
export function sAgora(t0, t1) {
  return mk(t0, t1, { bg: '#E8E0D0', fog: ['#E8E0D0', .015], fov: 32 }, (c) => {
    ape(c); const sofa = new THREE.Group(); const sf = std('#36AEA2'); sofa.add(box(2.8, .46, 1, sf, 0, .3, 0)); sofa.add(box(2.8, .9, .3, sf, 0, .78, -.4)); for (const x of [-1.5, 1.5]) sofa.add(box(.3, .7, 1.05, std('#43C4B4'), x, .42, 0)); sofa.position.set(-.6, 0, -2.4); c.add(sofa);
    const h = heroi(c, -.6, -1.9, -.1); const tel = phoneMesh(.16, .32); c.add(tel); const gl = new THREE.PointLight('#AFC8FF', 2, 2); c.add(gl);
    const mini = []; for (let i = 0; i < 18; i++) { const s = glowSprite('#FFE8A0', .08, 0); c.add(s); mini.push(s); }
    return (t, u, C) => {
      tel.paint('s' + Math.floor(u * 2), (x) => { x.fillStyle = '#0E0E14'; x.fillRect(0, 0, 540, 1110); const off = (u * 120) % 300; for (let i = -1; i < 5; i++) { x.fillStyle = ['#36AEA2', '#E9483A', '#F2C14E', '#4A86C7'][(i + 8 + Math.floor(u * 2)) % 4]; x.fillRect(30, 60 + i * 300 - off, 480, 260); } }); tel.position.set(-.35, 1.18, -1.7); tel.rotation.set(-.3, 0, 0); gl.position.set(-.35, 1.4, -1.3);
      const sab = smooth(10, 12, u) * (1 - smooth(17, 19, u)); mini.forEach((s, i) => { const a = i / 18 * 6.283 + u; s.position.set(-.6 + Math.cos(a) * .5, 1.9 + Math.sin(a) * .25, -1.85); s.material.opacity = sab; });
      cam(C, [[0, [-.6, 1.4, 2.4]], [12, [-.6, 1.45, .5]], [19, [-.6, 1.5, .2]]], [[0, [-.6, 1.2, -2]], [12, [-.6, 1.5, -2]], [19, [-.6, 1.6, -2]]], u);
      h.face(C); h.pose({ armL: [20, -80], armR: [20, -80], head: u < 12 ? 8 : 0 }); h.eye(u < 5.4 ? 'down' : u < 12 ? 'look' : u < 15 ? 'wide' : 'flat');
      return { focus: C.position.distanceTo(h.root.position), range: 1.6, blur: 12, bloom: .4, bloomT: .82, vig: lerp(.4, .65, smooth(10, 19, u)) };
    };
  });
}

/** 46. Olhar em volta e cuidar de quem está do seu lado — 389.45 a 395.58 */
export function sCuidar(t0, t1) {
  return mk(t0, t1, { bg: '#BFD8EE', fog: ['#E8E0D8', .01], fov: 34 }, (c) => {
    cidade(c, { seed: 77 }); const h = heroi(c, 5.4, -3, .14); const vo = pessoa(c, 'roxo', 'old', '#E8E8EE', 6.4, -3.2, .14); vo.tint('#FFFFFF');
    const sac = [box(.3, .4, .2, std('#E8D8B8'), 0, 0, 0), box(.3, .4, .2, std('#E8D8B8'), 0, 0, 0)]; sac.forEach(s => c.add(s));
    return (t, u, C) => { const k = smooth(1.6, 2.4, u); h.face(C); vo.face(C); h.pose({ armL: [20, 6], armR: [lerp(10, 30, k), lerp(6, -20, k)] }); h.eye('happy'); vo.pose({ armL: [10, 6], armR: [lerp(30, 10, k), lerp(-20, 6, k)], head: 6 }); vo.eye(k > .5 ? 'happy' : 'sad'); const z = -3 - smooth(2.6, 6, u) * 1.6; h.root.position.z = z; vo.root.position.z = z - .2; if (u > 2.6) { h.walk(u, .6, .5); vo.walk(u, .5, .4); } sac[0].position.set(lerp(vo.root.position.x + .35, h.root.position.x + .4, k), .75, vo.root.position.z + .1); sac[1].position.set(h.root.position.x + .45, .75, h.root.position.z + .1); sac[1].visible = k > .5; cam(C, [[0, [3.6, 1.5, 1.6]], [6.1, [3.8, 1.5, -.6]]], [[0, [5.9, 1.2, -3]], [6.1, [5.9, 1.2, -4.6]]], u); return { focus: C.position.distanceTo(h.root.position), range: 3, blur: 10, bloom: .25, bloomT: .95, vig: .4 }; };
  });
}

/** 47. A última coisa: uma mesa cheia de netos, todos vivos, de mão lavada — 395.58 a 405.1 */
export function sMesa(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .02], fov: 34 }, (c) => {
    const I = interior(c, { lareiraX: -3.4, noite: true }); c.add(box(4.4, .1, 1.4, std('#7A5232'), .4, .85, -2.2)); for (const [x, z] of [[-1.6, -2.7], [2.4, -2.7], [-1.6, -1.7], [2.4, -1.7]]) c.add(box(.1, .82, .1, '#4A3220', x, .41, z));
    const vs = [-.8, .4, 1.6].map(x => vela(c, x, .9, -2.2, 1.2)); for (let i = 0; i < 6; i++) { const p = new THREE.Mesh(new THREE.CylinderGeometry(.16, .12, .05, 16), std('#E8DCC4')); p.position.set(-1.2 + i * .65, .93, -1.8); c.add(p); } const pao = new THREE.Mesh(new THREE.CapsuleGeometry(.12, .4, 4, 10), std('#C8904A')); pao.rotation.z = Math.PI / 2; pao.position.set(.4, 1.0, -2.4); c.add(pao); bacia(c, 2.9, .9, -2.4, .8);
    const v = velho(c, -2.2, -2.3); const netos = []; const L = [['mae', 'long', -.9, -2.9], ['campones2', null, -.2, -2.95], ['mae', 'bob', .5, -2.9], ['campones', null, 1.2, -2.95], ['mae', 'bun', 1.9, -2.9], ['campones2', null, 2.6, -2.95]]; L.forEach(([o, hh, x, z], i) => { const k = gente(c, o, hh, '#3A2418', x, z, -.15, .62 + (i % 3) * .08); k.tint('#FFF0E0'); k.ph = i; netos.push(k); });
    return (t, u, C) => { I.upd(u); vs.forEach(q => q.upd(u)); netos.forEach(k => { k.face(C); k.eye(Math.sin(u * 1.5 + k.ph) > -.3 ? 'happy' : 'open'); k.pose({ head: Math.sin(u * 2 + k.ph) * 5, armL: [20, -60], armR: [20, -60] }); }); v.face(C); v.eye('happy'); v.pose({ armL: [20, -60], armR: [20, -60] }); cam(C, [[0, [.4, 1.6, 2.6]], [9.5, [.2, 1.8, 3.8]]], [[0, [.2, 1.2, -2.6]], [9.5, [.2, 1.3, -2.6]]], u); return { focus: C.position.distanceTo(new THREE.Vector3(.2, 1.2, -2.6)), range: 3, blur: 10, bloom: .5, bloomT: .75, vig: .5 }; };
  });
}

/** 48. Em que ano você nasceria? Comenta — 405.1 a 413.9 */
export function sAnoEscolha(t0, t1) {
  return mk(t0, t1, { bg: '#1A1638', fog: ['#1A1638', .02], fov: 34 }, (c) => {
    stars(c, 1500, 200, 3); nebula(c, 0, 10, -60, 120, '#C78BFF', 4, .12); const fl = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), std('#2A2450', { roughness: .4, metalness: .2 })); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; c.add(fl);
    const h = heroi(c, 0, -.6); const anos = ['1500', '1822', '1888', '1969', '2100', '3000']; const C2 = anos.map((a, i) => { const m = cut(canvasTex(320, 180, (x) => { x.fillStyle = '#10162Bee'; x.beginPath(); x.roundRect(6, 6, 308, 168, 24); x.fill(); x.strokeStyle = i === 0 ? '#F2C14E' : '#8FF0E0'; x.lineWidth = 6; x.stroke(); x.fillStyle = i === 0 ? '#F2C14E' : '#EAF6FF'; x.font = '900 96px Fraunces'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(a, 160, 96); }), 1.1, .62, { blend: true }); c.add(m); return m; });
    const L = new THREE.SpotLight('#FFE8C8', 60, 12, .6, .5, 1.4); L.position.set(0, 5, 3); L.target.position.set(0, 1, -1); L.castShadow = true; c.add(L, L.target); c.add(new THREE.HemisphereLight('#8A7AC8', '#101018', .7));
    return (t, u, C) => { C2.forEach((m, i) => { const a = i / 6 * 6.283 + u * .3; m.position.set(Math.cos(a) * 2.6, 2.2 + Math.sin(a * 2) * .3, -.6 + Math.sin(a) * 1.2); m.material.opacity = smooth(.3 + i * .2, .6 + i * .2, u); pointer(m, C); }); cam(C, [[0, [0, 1.6, 5]], [8.8, [.4, 1.8, 4]]], [[0, [0, 1.8, -.6]], [8.8, [0, 1.9, -.6]]], u); h.face(C); h.pose({ armL: [10, 6], armR: u < 5 ? [70 + Math.sin(u * 2) * 10, 10] : [25, 0], head: u > 5 ? -8 : 0 }); h.eye(u < 5 ? 'look' : 'happy'); return { focus: C.position.distanceTo(h.root.position), range: 3, blur: 8, bloom: .45, bloomT: .8, vig: .5 }; };
  });
}

/** 49. Se inscreve, ativa o sininho… e vai lá: lava a mão — 413.9 ao fim */
export function sFim(t0, t1) {
  return mk(t0, t1, { bg: '#E8E0D0', fog: ['#E8E0D0', .015], fov: 32 }, (c) => {
    ape(c); const h = heroi(c, 1.5, -2.9); c.add(box(.6, .05, .4, std('#E8E8EC', { metalness: .3 }), 1.5, .93, -3.3));
    const agua = new THREE.Mesh(new THREE.CylinderGeometry(.02, .02, .3, 8), new THREE.MeshStandardMaterial({ color: '#BFE8FF', transparent: true, opacity: .8, emissive: '#5FA8D8', emissiveIntensity: .4 })); agua.position.set(1.5, 1.2, -3.45); c.add(agua); const torn = box(.04, .25, .04, std('#C8CCD4', { metalness: .8 }), 1.5, 1.42, -3.6); c.add(torn);
    const bc = document.createElement('canvas'); bc.width = 800; bc.height = 200; const bx = bc.getContext('2d'); const bT = new THREE.CanvasTexture(bc); bT.colorSpace = THREE.SRGBColorSpace; const paint = (on) => { bx.clearRect(0, 0, 800, 200); bx.fillStyle = on ? '#4A4A58' : '#E9483A'; bx.beginPath(); bx.roundRect(10, 10, 780, 180, 90); bx.fill(); bx.fillStyle = '#fff'; bx.font = '900 80px Inter'; bx.textAlign = 'center'; bx.textBaseline = 'middle'; bx.fillText(on ? 'INSCRITO ✓' : 'INSCREVER-SE', 400, 104); bT.needsUpdate = true; };
    const btn = new THREE.Mesh(new THREE.PlaneGeometry(1.8, .45), new THREE.MeshStandardMaterial({ map: bT, emissiveMap: bT, emissive: '#fff', emissiveIntensity: .6, transparent: true })); btn.position.set(.2, 2.6, -2.6); c.add(btn); const sino = cut(canvasTex(200, 200, (x) => { x.fillStyle = '#F2C14E'; x.beginPath(); x.moveTo(100, 30); x.quadraticCurveTo(160, 40, 160, 120); x.lineTo(176, 150); x.lineTo(24, 150); x.lineTo(40, 120); x.quadraticCurveTo(40, 40, 100, 30); x.fill(); x.beginPath(); x.arc(100, 168, 18, 0, 7); x.fill(); }), .4, .4); sino.position.set(1.4, 2.6, -2.6); c.add(sino);
    let lo = -1;
    return (t, u, C) => { const on = u > 2.3 ? 1 : 0; if (on !== lo) { paint(on); lo = on; } sino.rotation.z = u > 2.8 && u < 4.2 ? Math.sin(u * 30) * .3 : 0; const lav = u > 5.3; btn.visible = !lav || u < 5.6; sino.visible = btn.visible; agua.visible = lav; h.face(C); h.pose(lav ? { armL: [40, -70 + Math.sin(u * 9) * 10], armR: [40, -70 - Math.sin(u * 9) * 10], head: 6 } : { armL: [10, 6], armR: u < 2.3 ? [130, 20] : [10, 6] }); h.eye(u < 7.6 ? (lav ? 'down' : 'happy') : (Math.floor(u * 3) % 4 === 0 ? 'shut' : 'happy')); cam(C, [[0, [.8, 1.7, 1.6]], [5.3, [1.0, 1.6, .8]], [8.8, [1.3, 1.5, -.8]]], [[0, [.8, 1.9, -2.6]], [5.3, [1.2, 1.5, -2.8]], [8.8, [1.5, 1.3, -3]]], u); return { focus: C.position.distanceTo(h.root.position), range: 2, blur: 12, bloom: .4, bloomT: .85, vig: lerp(.4, .7, smooth(7.6, 8.8, u)), exposure: lerp(1, 0, smooth(8.0, 8.8, u)) }; };
  });
}
