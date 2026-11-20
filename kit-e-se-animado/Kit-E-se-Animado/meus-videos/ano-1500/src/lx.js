// Lisboa de 1500: casas, ruas, naus, interiores, bebê, parteira, ratos, pergaminho.
import * as THREE from 'three';
import { rng, lerp, smooth, clamp } from './motor/core.js';
import { canvasTex, makeChar } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, sky, pointer } from './motor/kit.js';
import { smoke } from './motor/kit2.js';
import { luzes, feixe, quadro } from './lib.js';

export const HEROI = { outfit: 'camisa', glow: .12 };
export const heroi = (c, x, z, y = 0, sc = 1, o = {}) => { const h = makeChar({ ...HEROI, ...o }); h.place(x, z, y, sc); c.add(h.root); h.tint('#CFCBC4'); return h; };
export const velho = (c, x, z, y = 0) => heroi(c, x, z, y, 1, { hair: 'old' });
export const crianca = (c, x, z, y = 0) => heroi(c, x, z, y, .62);
export const gente = (c, outfit, hair, hairc, x, z, y = 0, sc = 1) => { const k = makeChar({ outfit, hair, hairc, lash: !!hair && outfit !== 'padre' && outfit !== 'inquisidor' }); k.place(x, z, y, sc); c.add(k.root); return k; };

const PAREDES = ['#F2EBDD', '#EFD9B4', '#E8C9A8', '#F4E4C8', '#E6D2C0', '#F0DCCC', '#DCC8A8'];
const JANELAS = ['#2E6A5A', '#2A4E7A', '#7A3A2A', '#5A4A3A', '#3E6A3A'];
const telhaT = () => { const t = canvasTex(256, 256, (x) => { x.fillStyle = '#A8482E'; x.fillRect(0, 0, 256, 256); for (let r = 0; r < 16; r++) for (let i = 0; i < 9; i++) { x.fillStyle = (r + i) % 3 ? '#B8583A' : '#984028'; x.beginPath(); x.ellipse(i * 32 + (r % 2) * 16, r * 16 + 8, 15, 9, 0, 0, Math.PI); x.fill(); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; };
let TELHA = null;
/** Casa lisboeta: parede caiada, telhado de barro, janelas com portadas, porta em arco, varanda e vasos. Frente para +z. */
export function casa(seed, w = 6, floors = 2, o = {}) {
  const R = rng(seed), g = new THREE.Group(), H = floors * 2.8 + .4, col = o.col || PAREDES[Math.floor(R() * PAREDES.length)], jc = JANELAS[Math.floor(R() * JANELAS.length)];
  const pT = canvasTex(256, 256, (x) => { x.fillStyle = col; x.fillRect(0, 0, 256, 256); for (let i = 0; i < 600; i++) { x.fillStyle = `rgba(${R() < .5 ? '255,250,240' : '90,70,50'},${R() * .06})`; x.fillRect(R() * 256, R() * 256, 6 + R() * 20, 4 + R() * 12); } x.fillStyle = 'rgba(80,60,40,.12)'; x.fillRect(0, 230, 256, 26); });
  pT.wrapS = pT.wrapT = THREE.RepeatWrapping; pT.repeat.set(w / 3, H / 3);
  const corpo = new THREE.Mesh(new THREE.BoxGeometry(w, H, 5), new THREE.MeshStandardMaterial({ map: pT, roughness: .95 })); corpo.position.y = H / 2; corpo.castShadow = corpo.receiveShadow = true; g.add(corpo);
  if (!TELHA) TELHA = telhaT(); const tm = new THREE.MeshStandardMaterial({ map: TELHA, roughness: .9 });
  for (const sd of [-1, 1]) { const r = box(w + .5, .16, 3.1, tm, 0, H + .62, sd * 1.32); r.rotation.x = sd * .45; g.add(r); } g.add(box(w + .5, .2, .3, '#8E3A22', 0, H + 1.28, 0));
  g.add(box(w + .3, .18, 5.3, '#C8B8A0', 0, H, 0));
  const lit = o.night ? .55 : 0; const nw = Math.max(1, Math.floor(w / 2));
  for (let f = 0; f < floors; f++) for (let k = 0; k < nw; k++) {
    const x = -w / 2 + (k + .5) * w / nw, y = f * 2.8 + 1.5; if (f === 0 && k === Math.floor(nw / 2)) continue;
    const win = new THREE.Mesh(new THREE.PlaneGeometry(.8, 1.2), new THREE.MeshStandardMaterial({ color: '#1A1612', emissive: '#FFB860', emissiveIntensity: R() < .5 ? lit : lit * .2 })); win.position.set(x, y, 2.51); g.add(win);
    g.add(box(1.0, .1, .2, '#D8C8B0', x, y - .65, 2.55)); g.add(box(1.0, .1, .12, '#D8C8B0', x, y + .65, 2.53));
    for (const s of [-1, 1]) { const p = box(.42, 1.2, .05, std(jc), x + s * .64, y, 2.56); p.rotation.y = s * .25; g.add(p); }
    if (f > 0 && R() < .4) { g.add(box(1.3, .08, .5, '#3A2E26', x, y - .7, 2.75)); for (let b = 0; b < 6; b++) g.add(box(.03, .5, .03, '#2A2420', x - .6 + b * .24, y - .45, 2.98, false)); }
    if (R() < .4) { g.add(box(.5, .18, .2, '#B8583A', x, y - .58, 2.7)); g.add(box(.45, .16, .15, R() < .5 ? '#4E8A3E' : '#C9363A', x, y - .44, 2.7)); }
  }
  // porta em arco
  const pt = canvasTex(128, 256, (x) => { x.fillStyle = '#5A3A22'; x.fillRect(0, 0, 128, 256); x.strokeStyle = '#3A2414'; x.lineWidth = 4; for (let i = 16; i < 128; i += 22) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 256); x.stroke(); } x.fillStyle = '#C9A04A'; x.beginPath(); x.arc(96, 140, 6, 0, 7); x.fill(); });
  const door = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 2.2), new THREE.MeshStandardMaterial({ map: pt })); door.position.set(0, 1.1, 2.52); g.add(door); g.add(new THREE.Mesh(new THREE.TorusGeometry(.62, .1, 6, 16, Math.PI), std('#D8C8B0'))).position.set(0, 2.2, 2.55);
  if (o.cruz) { door.material = new THREE.MeshStandardMaterial({ map: canvasTex(128, 256, (x) => { x.fillStyle = '#5A3A22'; x.fillRect(0, 0, 128, 256); x.strokeStyle = '#C91E1E'; x.lineWidth = 16; x.beginPath(); x.moveTo(64, 50); x.lineTo(64, 190); x.moveTo(24, 100); x.lineTo(104, 100); x.stroke(); }) }); }
  g.userData = { H, w }; return g;
}
/** Chão de pedra portuguesa. */
export function calcada(c, w = 60, l = 120, z = -40, col = '#B8AC98') { const t = canvasTex(1024, 1024, (x) => { x.fillStyle = '#6E6458'; x.fillRect(0, 0, 1024, 1024); const R = rng(3); for (let r = 0; r < 32; r++) for (let i = 0; i < 33; i++) { const k = R(); x.fillStyle = col; x.globalAlpha = .65 + k * .35; x.beginPath(); x.roundRect(i * 32 + (r % 2) * 16 - 16 + 2, r * 32 + 2, 28, 28, 7); x.fill(); } x.globalAlpha = 1; }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(w / 4, l / 4); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, l), new THREE.MeshStandardMaterial({ map: t, roughness: .95 })); m.rotation.x = -Math.PI / 2; m.position.z = z; m.receiveShadow = true; c.add(m); return m; }
/** Céu e colina com casinhas brancas e o castelo, pintados ao fundo. */
export function fundoLisboa(c, o = {}) {
  const noite = !!o.noite; sky(c, -220, 900, 360, noite ? [[0, '#0A0C24'], [.6, '#22204A'], [.9, '#4A3A5A'], [1, '#6A4A5A']] : (o.stops || [[0, '#5E9AD8'], [.55, '#A8CCE8'], [.85, '#F4DCC0'], [1, '#FCE8C8']]));
  const t = canvasTex(2048, 700, (x) => { x.clearRect(0, 0, 2048, 700); const R = rng(o.seed || 5); x.fillStyle = noite ? '#2A2840' : '#A8A090'; x.beginPath(); x.moveTo(0, 700); for (let a = 0; a <= 2048; a += 32) x.lineTo(a, 300 - Math.sin(a / 2048 * Math.PI) * 200 + Math.sin(a * .01) * 20); x.lineTo(2048, 700); x.fill();
    for (let i = 0; i < 380; i++) { const a = R() * 2048, top = 300 - Math.sin(a / 2048 * Math.PI) * 200 + 20, b = top + R() * (700 - top); const w = 14 + R() * 22, h = 10 + R() * 14; x.fillStyle = noite ? (R() < .25 ? '#F2C878' : '#3A3858') : ['#F4EEE2', '#EAD8B8', '#F0E4D0', '#E8D0C0'][Math.floor(R() * 4)]; x.fillRect(a, b, w, h); if (!noite) { x.fillStyle = '#B85A3A'; x.fillRect(a - 2, b - 4, w + 4, 5); } }
    x.fillStyle = noite ? '#34324C' : '#C8BCA8'; const cx = 1100, cy = 110; x.fillRect(cx - 160, cy, 320, 60); for (let i = 0; i < 9; i++) x.fillRect(cx - 160 + i * 40, cy - 16, 22, 18); for (const d of [-170, 170]) { x.fillRect(cx + d - 24, cy - 50, 48, 110); for (let i = 0; i < 3; i++) x.fillRect(cx + d - 24 + i * 18, cy - 64, 12, 16); } });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(o.w || 520, (o.w || 520) * 700 / 2048), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, fog: false })); m.position.set(o.x || 0, (o.y ?? -6) + (o.w || 520) * 350 / 2048, o.z || -170); c.add(m); return m;
}
/** Rio Tejo animado. */
export function rio(c, w = 400, l = 300, z = -150, y = 0) { const t = canvasTex(512, 512, (x) => { x.fillStyle = '#3A6E8A'; x.fillRect(0, 0, 512, 512); const R = rng(3); x.strokeStyle = '#ffffff30'; x.lineWidth = 3; for (let i = 0; i < 220; i++) { const a = R() * 512, b = R() * 512; x.beginPath(); x.moveTo(a, b); x.quadraticCurveTo(a + 10, b - 4, a + 20, b); x.stroke(); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(w / 16, l / 16); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, l), new THREE.MeshStandardMaterial({ map: t, roughness: .15, metalness: .15 })); m.rotation.x = -Math.PI / 2; m.position.set(0, y, z); c.add(m); return t; }
/** Nau com velas brancas e a cruz da Ordem de Cristo. Proa para -x. */
const velaT = () => canvasTex(256, 256, (x) => { x.fillStyle = '#F2EAD8'; x.fillRect(0, 0, 256, 256); x.strokeStyle = '#D8CCB0'; x.lineWidth = 3; for (let i = 0; i < 256; i += 32) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 256); x.stroke(); } x.fillStyle = '#C21A1A'; x.fillRect(108, 50, 40, 156); x.fillRect(50, 108, 156, 40); x.fillStyle = '#F2EAD8'; x.fillRect(122, 64, 12, 128); x.fillRect(64, 122, 128, 12); });
let VELA = null;
export function nau(sc = 1) {
  const g = new THREE.Group(); if (!VELA) VELA = velaT(); const mad = std('#5A3A22'), mad2 = std('#7A5232');
  const sh = new THREE.Shape(); sh.moveTo(-6, 1.2); sh.lineTo(-7.2, 3.0); sh.lineTo(-4, 2.2); sh.lineTo(3, 2.2); sh.lineTo(4.2, 4.2); sh.lineTo(6.6, 4.4); sh.lineTo(6.2, 1.0); sh.quadraticCurveTo(4, -1.0, 0, -1.2); sh.quadraticCurveTo(-4, -1.0, -6, 1.2);
  const hull = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 3, bevelEnabled: true, bevelSize: .3, bevelThickness: .4, bevelSegments: 2 }), mad); hull.position.z = -1.5; hull.castShadow = true; g.add(hull);
  g.add(box(13, .12, 3.2, mad2, -.4, 2.25, 0)); g.add(box(3, .4, 3.6, std('#C9A04A'), 5.2, 4.3, 0));
  const vela = new THREE.MeshStandardMaterial({ map: VELA, side: THREE.DoubleSide, roughness: .9 });
  [[-3.6, 9, 3.2], [.6, 11, 4.2], [4.4, 7, 2.6]].forEach(([x, h, sw]) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(.12, .16, h, 8), mad); m.position.set(x, 2.2 + h / 2, 0); g.add(m); for (const [y, s] of [[2.2 + h * .45, 1], [2.2 + h * .8, .7]]) { const v = new THREE.Mesh(new THREE.PlaneGeometry(sw * s, sw * s * .9, 6, 4), vela); const p = v.geometry.attributes.position; for (let i = 0; i < p.count; i++) p.setZ(i, Math.cos(p.getX(i) / (sw * s) * Math.PI) * .5 * s); v.geometry.computeVertexNormals(); v.position.set(x, y, .3); v.rotation.y = Math.PI / 2; v.castShadow = true; g.add(v); g.add(box(.08, .08, sw * s + .4, mad, x, y + sw * s * .45, 0, false)); } const f = new THREE.Mesh(new THREE.PlaneGeometry(.8, .4), std('#C21A1A', { side: THREE.DoubleSide })); f.position.set(x + .4, 2.3 + h, 0); g.add(f); });
  g.add(box(.08, .08, 6, mad, -6.8, 3.4, 0, false)).rotation.z = .4;
  g.scale.setScalar(sc); return g;
}
/** Interior de casa simples de 1500: lareira acesa, mesa, banquinhos, crucifixo, ervas, potes. */
export function interior(c, o = {}) {
  const W = 12, WZ = -4;
  const pedra = canvasTex(512, 512, (x) => { x.fillStyle = '#8A7A68'; x.fillRect(0, 0, 512, 512); const R = rng(2); for (let r = 0; r < 12; r++) for (let i = 0; i < 9; i++) { x.fillStyle = `rgb(${120 + R() * 40},${105 + R() * 35},${90 + R() * 30})`; x.beginPath(); x.roundRect(i * 60 + (r % 2) * 30 - 30, r * 44, 56, 40, 8); x.fill(); } }); pedra.wrapS = pedra.wrapT = THREE.RepeatWrapping; pedra.repeat.set(4, 3);
  const chao = new THREE.Mesh(new THREE.PlaneGeometry(20, 16), new THREE.MeshStandardMaterial({ map: pedra, roughness: 1 })); chao.rotation.x = -Math.PI / 2; chao.position.z = 2; chao.receiveShadow = true; c.add(chao);
  const reboco = canvasTex(512, 512, (x) => { x.fillStyle = o.parede || '#D8C8A8'; x.fillRect(0, 0, 512, 512); const R = rng(5); for (let i = 0; i < 500; i++) { x.fillStyle = `rgba(${R() < .5 ? '255,245,230' : '90,70,50'},${R() * .08})`; x.fillRect(R() * 512, R() * 512, 10 + R() * 40, 6 + R() * 20); } }); reboco.wrapS = reboco.wrapT = THREE.RepeatWrapping; reboco.repeat.set(3, 1.2);
  const rm = new THREE.MeshStandardMaterial({ map: reboco, roughness: 1 });
  c.add(box(24, 5, .3, rm, 0, 2.5, WZ)); c.add(box(.3, 5, 16, rm, -6.5, 2.5, 2)); c.add(box(.3, 5, 16, rm, 6.5, 2.5, 2));
  for (let i = -5; i <= 5; i += 1.6) c.add(box(.25, .3, 16, '#4A3220', i, 4.6, 2)); c.add(box(24, .35, .35, '#4A3220', 0, 4.4, WZ + .2));
  // lareira
  const L = new THREE.Group(); L.add(box(2.6, 2.2, .8, std('#7A6A58'), 0, 1.1, 0)); L.add(box(1.8, 1.4, .82, std('#1A1410'), 0, .7, .02)); L.add(box(3, .25, 1, std('#6A5A48'), 0, 2.3, .1)); L.add(box(1.2, 2.6, .7, std('#7A6A58'), 0, 3.6, -.05));
  const cald = new THREE.Mesh(new THREE.SphereGeometry(.38, 18, 12, 0, 6.3, 1.2, 1.94), std('#2A2A2E', { metalness: .6, roughness: .5 })); cald.position.set(0, .7, .25); L.add(cald);
  L.position.set(o.lareiraX ?? -3.4, 0, WZ + .45); c.add(L);
  const fogo = []; for (let i = 0; i < 4; i++) { const f = glowSprite(i % 2 ? '#FF8A30' : '#FFC860', .6 + i * .1, .9); f.position.set(L.position.x - .3 + i * .2, .35, L.position.z + .3); c.add(f); fogo.push(f); }
  const fl = new THREE.PointLight('#FF9A4A', 16, 10, 1.4); fl.position.set(L.position.x, 1, L.position.z + 1.2); fl.castShadow = true; fl.shadow.mapSize.set(1024, 1024); c.add(fl);
  const vapor = smoke(c, 10, [L.position.x, 1.1, L.position.z + .3], { col: '#FFFFFF', size: .7, rise: 1.6, spread: .2, seed: 4, life: 2.4 });
  // mesa, banquinhos, potes, pão
  c.add(box(2.4, .1, 1.1, std('#7A5232'), 1.6, .85, -2.4)); for (const [x, z] of [[.5, -2.85], [2.7, -2.85], [.5, -1.95], [2.7, -1.95]]) c.add(box(.1, .82, .1, '#4A3220', x, .41, z));
  for (const x of [.8, 2.4]) c.add(box(.45, .45, .45, std('#6A4A2E'), x, .23, -1.4));
  [['#B8683A', .8, -2.5, .18], ['#D8C8A8', 1.4, -2.3, .12], ['#8A5A3A', 2.2, -2.6, .22]].forEach(([k, x, z, r]) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(r * .8, r, r * 2, 14), std(k)); p.position.set(x, .9 + r, z); p.castShadow = true; c.add(p); });
  const pao = new THREE.Mesh(new THREE.CapsuleGeometry(.1, .25, 4, 10), std('#C8904A')); pao.rotation.z = Math.PI / 2; pao.position.set(1.8, .98, -2.2); c.add(pao);
  // crucifixo, ervas penduradas, janelinha com luz
  c.add(box(.06, .5, .04, '#4A3220', 1.6, 2.8, WZ + .18)); c.add(box(.3, .06, .04, '#4A3220', 1.6, 2.9, WZ + .18));
  for (let i = 0; i < 5; i++) { const e = cut(canvasTex(64, 128, (x) => { x.clearRect(0, 0, 64, 128); x.strokeStyle = '#6A7A3A'; x.lineWidth = 4; for (let k = 0; k < 8; k++) { x.beginPath(); x.moveTo(32, 0); x.lineTo(16 + k * 4, 120); x.stroke(); } }), .3, .6); e.position.set(-1 + i * .5, 3.9, WZ + .4); c.add(e); }
  const jan = new THREE.Mesh(new THREE.PlaneGeometry(1, 1.2), new THREE.MeshBasicMaterial({ color: o.noite ? '#2A3058' : '#F8E8C8' })); jan.position.set(4.2, 2.6, WZ + .16); c.add(jan); c.add(box(1.2, .1, .3, '#5A3A22', 4.2, 1.95, WZ + .2)); for (const s of [-1, 1]) c.add(box(.08, 1.3, .2, '#5A3A22', 4.2 + s * .55, 2.6, WZ + .2));
  if (!o.noite) feixe(c, 3.6, 2.0, -2, 1.2, 4.2, .45, '#FFE2B0', .12);
  c.add(new THREE.HemisphereLight('#C8A880', '#2A1A10', o.noite ? .35 : .65));
  return { fogo, fl, vapor, cald, L, upd(u) { fogo.forEach((f, i) => { const k = .85 + Math.sin(u * 15 + i * 2) * .1 + Math.sin(u * 27 + i) * .05; f.scale.setScalar((.6 + i * .1) * k); }); fl.intensity = 16 * (.88 + Math.sin(u * 13) * .08); vapor(u); } };
}
/** Bebê enrolado em pano: retorna grupo com .olhos(s) e .chora(u). */
export function bebe(c, x, y, z, sc = 1) {
  const g = new THREE.Group(); const pano = cut(canvasTex(256, 320, (q) => { q.fillStyle = '#E2D6C0'; q.beginPath(); q.ellipse(128, 200, 100, 118, 0, 0, 7); q.fill(); q.strokeStyle = '#D8CCB4'; q.lineWidth = 6; for (let i = 0; i < 4; i++) { q.beginPath(); q.moveTo(40, 140 + i * 40); q.quadraticCurveTo(128, 170 + i * 40, 216, 130 + i * 40); q.stroke(); } q.fillStyle = '#D8C8AC'; q.beginPath(); q.ellipse(128, 96, 108, 74, 0, Math.PI, 0); q.fill(); }), .5, .62); pano.material.color.set('#BDB2A2'); pano.position.y = .1; g.add(pano);
  const cab = cut(canvasTex(256, 256, (q) => { const gr = q.createRadialGradient(110, 90, 4, 128, 128, 110); gr.addColorStop(0, '#2C2E44'); gr.addColorStop(1, '#08080E'); q.fillStyle = gr; q.beginPath(); q.arc(128, 128, 110, 0, 7); q.fill(); q.strokeStyle = '#FFE9C8'; q.lineWidth = 6; q.beginPath(); q.arc(128, 128, 110, 0, 7); q.stroke(); }), .3, .3); cab.position.set(0, .3, .01); g.add(cab);
  const EST = {}; const olho = (k) => canvasTex(256, 256, (q) => { q.clearRect(0, 0, 256, 256); q.fillStyle = '#F6EFE6'; q.strokeStyle = '#F6EFE6'; q.lineWidth = 12; q.lineCap = 'round'; for (const s of [-1, 1]) { const a = 128 + s * 40; if (k === 'open') { q.beginPath(); q.ellipse(a, 128, 16, 24, 0, 0, 7); q.fill(); } else if (k === 'wide') { q.beginPath(); q.ellipse(a, 124, 22, 32, 0, 0, 7); q.fill(); } else if (k === 'cry') { q.beginPath(); q.moveTo(a - 20, 120); q.quadraticCurveTo(a, 140, a + 20, 120); q.stroke(); q.fillStyle = '#9FD8FF'; q.beginPath(); q.ellipse(a + s * 6, 160, 8, 14, 0, 0, 7); q.fill(); q.fillStyle = '#F6EFE6'; } else if (k === 'flat') { q.beginPath(); q.moveTo(a - 20, 128); q.lineTo(a + 20, 128); q.stroke(); } else if (k === 'happy') { q.beginPath(); q.moveTo(a - 20, 136); q.quadraticCurveTo(a, 108, a + 20, 136); q.stroke(); } } if (k === 'cry') { q.beginPath(); q.ellipse(128, 190, 22, 16, 0, 0, 7); q.fillStyle = '#F6EFE6'; q.fill(); } });
  for (const k of ['open', 'wide', 'cry', 'flat', 'happy']) { const m = cut(olho(k), .3, .3); m.position.set(0, .3, .02); m.visible = k === 'open'; g.add(m); EST[k] = m; }
  const mao = cut(canvasTex(64, 96, (q) => { q.fillStyle = '#1C1C25'; q.beginPath(); q.ellipse(32, 30, 20, 24, 0, 0, 7); q.fill(); q.fillRect(22, 40, 20, 56); q.strokeStyle = '#FFE9C8'; q.lineWidth = 3; q.beginPath(); q.ellipse(32, 30, 20, 24, 0, 0, 7); q.stroke(); }), .1, .15); mao.position.set(.14, .2, .02); mao.visible = false; g.add(mao);
  g.position.set(x, y, z); g.scale.setScalar(sc); c.add(g);
  g.olhos = (k) => { for (const q in EST) EST[q].visible = q === k; }; g.mao = mao; g.cab = cab; g.ests = EST; g.face = (cam) => pointer(g, cam);
  return g;
}
/** Sorriso banguela da parteira, preso na cabeça do personagem. */
export function banguela(ch) { const m = cut(canvasTex(256, 128, (q) => { q.clearRect(0, 0, 256, 128); q.strokeStyle = '#F6EFE6'; q.lineWidth = 12; q.lineCap = 'round'; q.beginPath(); q.moveTo(50, 40); q.quadraticCurveTo(128, 120, 206, 40); q.stroke(); q.fillStyle = '#F6EFE6'; q.fillRect(140, 62, 18, 26); }), .3, .15); m.position.set(0, -.13, .03); ch.head.add(m); return m; }
/** Rato com pulguinhas. */
export const ratoTex = () => canvasTex(256, 160, (q) => { q.lineCap = 'round'; q.strokeStyle = '#8A7A7A'; q.lineWidth = 6; q.beginPath(); q.moveTo(40, 110); q.quadraticCurveTo(0, 130, 10, 60); q.stroke(); q.fillStyle = '#6E6466'; q.beginPath(); q.ellipse(110, 110, 70, 40, 0, 0, 7); q.fill(); q.fillStyle = '#121218'; q.beginPath(); q.ellipse(190, 96, 44, 34, 0, 0, 7); q.fill(); q.beginPath(); q.arc(178, 62, 18, 0, 7); q.fill(); q.fillStyle = '#E8A0A8'; q.beginPath(); q.arc(178, 62, 9, 0, 7); q.fill(); q.beginPath(); q.arc(232, 104, 7, 0, 7); q.fill(); q.fillStyle = '#F6EFE6'; q.beginPath(); q.ellipse(200, 90, 7, 10, 0, 0, 7); q.fill(); q.strokeStyle = '#ddd'; q.lineWidth = 2; for (const d of [-8, 0, 8]) { q.beginPath(); q.moveTo(228, 104); q.lineTo(252, 100 + d); q.stroke(); } q.fillStyle = '#2A1A10'; for (let i = 0; i < 9; i++) { q.beginPath(); q.arc(80 + (i * 37) % 80, 86 + (i * 23) % 40, 3, 0, 7); q.fill(); } });
export function rato(c, x, z, w = .5) { const m = cut(ratoTex(), w, w * .625, { shadow: true }); m.position.set(x, w * .31, z); c.add(m); return m; }
/** Pergaminho com desenho que vai sendo traçado (draw(ctx, progresso)). */
export function pergaminho(c, w, h, draw) { const cv = document.createElement('canvas'); cv.width = 1024; cv.height = Math.round(1024 * h / w); const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: t, roughness: .9 })); c.add(m); let last = -1; m.paint = (p) => { const k = Math.round(p * 60); if (k === last) return; last = k; const g = x.createRadialGradient(cv.width / 2, cv.height / 2, 50, cv.width / 2, cv.height / 2, cv.width * .7); g.addColorStop(0, '#F2E2B8'); g.addColorStop(1, '#C8A86A'); x.fillStyle = g; x.fillRect(0, 0, cv.width, cv.height); draw(x, p, cv.width, cv.height); t.needsUpdate = true; }; return m; }
/** Vela acesa. */
export function vela(c, x, y, z, s = 1) { c.add(box(.06 * s, .25 * s, .06 * s, '#F4EEDC', x, y + .125 * s, z, false)); const f = glowSprite('#FFC67A', .35 * s, 1); f.position.set(x, y + .3 * s, z); c.add(f); const L = new THREE.PointLight('#FFB060', 2.5 * s, 4 * s, 1.6); L.position.set(x, y + .4 * s, z); c.add(L); return { f, L, upd(u) { const k = .9 + Math.sin(u * 19 + x * 7) * .08; f.scale.setScalar(.35 * s * k); L.intensity = 2.5 * s * k; } }; }
