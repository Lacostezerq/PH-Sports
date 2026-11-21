// Móveis e objetos de dentro das casas e lojas. Todos com origem no chão, centro da peça, frente virada para +z.
// Cada função devolve um THREE.Group com userData.pe = [largura, profundidade] (área que ocupa no chão, para colisão).
import * as THREE from 'three';
import { toon, tm, bx, cyl, sph, rb, piso, placa, D, pega } from './util.js';
import { ctex, toonTex } from '../base/toon.js';
import { rng } from '../base/core.js';

const G = (pe, ...o) => { const g = new THREE.Group(); for (const m of o) g.add(m); g.userData.pe = pe; return g; };
const madeira = ['#B87A4A', '#9A6236', '#C8935E', '#7A5233', '#D9B07A'];
const tecidos = ['#3E7CC8', '#C84E4E', '#5AA84E', '#8E6CC4', '#D98A3A', '#4FB8A0', '#7A8696', '#B5603E'];

// ---------------- sala ----------------
export function sofa(w = 2.1, cor = '#3E7CC8') {
  const g = G([w, .9]); const esc = new THREE.Color(cor).multiplyScalar(.82).getStyle();
  g.add(rb(w, .42, .86, cor, 0, .21 + .08, 0, { out: .014, r: .08 })); // base
  g.add(rb(w, .5, .22, esc, 0, .62, -.32, { out: .014, r: .08 })); // encosto
  for (const s of [-1, 1]) g.add(rb(.2, .58, .86, esc, s * (w / 2 - .1), .37, 0, { out: .014, r: .07 }));
  const n = Math.max(2, Math.round(w / .8)); for (let i = 0; i < n; i++) g.add(rb((w - .44) / n - .03, .14, .62, cor, -w / 2 + .22 + (w - .44) / n * (i + .5), .56, .06, { out: .012, r: .06 }));
  for (const s of [-1, 1]) for (const k of [-1, 1]) g.add(cyl(.03, .02, .08, '#3A2A20', s * (w / 2 - .1), .04, k * .34, { seg: 6 }));
  g.add(rb(.4, .36, .12, '#F2C230', -w / 2 + .45, .72, -.17, { out: .012, r: .06, rot: [-.25, .2, 0] })); // almofada
  return g;
}
export function poltrona(cor = '#C84E4E') { const g = sofa(.95, cor); g.userData.pe = [.95, .9]; return g; }
export function mesaCentro(w = 1.1, d = .6, cor = '#9A6236') {
  const g = G([w, d], rb(w, .06, d, cor, 0, .42, 0, { out: .012 }));
  for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(bx(.05, .4, .05, cor, a * (w / 2 - .07), .2, b * (d / 2 - .07)));
  g.add(bx(w - .12, .03, d - .12, cor, 0, .12, 0)); g.add(rb(.24, .03, .17, '#E2443A', .2, .46, .05)); g.add(cyl(.08, .06, .1, '#F4F1EA', -.25, .5, 0, { out: .01 })); return g;
}
export function tapete(w = 2, d = 1.4, cor = '#C84E4E', cor2 = '#F2C230') {
  const t = ctex(256, Math.round(256 * d / w), (x, W, H) => { x.fillStyle = cor; x.fillRect(0, 0, W, H); x.strokeStyle = cor2; x.lineWidth = 10; x.strokeRect(14, 14, W - 28, H - 28); x.lineWidth = 4; x.strokeRect(32, 32, W - 64, H - 64); x.fillStyle = cor2; x.beginPath(); x.ellipse(W / 2, H / 2, W * .16, H * .2, 0, 0, 7); x.fill(); });
  const m = piso(w, d, toonTex(t), 0, .012, 0); m.castShadow = false; const g = G([0, 0], m); return g;
}
/** Rack com TV. A tela é viva (devolve g.userData.tela para animar). */
export function rackTV(w = 1.6, cor = '#7A5233') {
  const g = G([w, .45]);
  g.add(rb(w, .5, .42, cor, 0, .25, 0, { out: .012 })); for (const s of [-1, 1]) g.add(bx(w / 2 - .06, .36, .01, '#5E3E26', s * w / 4, .25, .215));
  g.add(rb(1.2, .7, .06, '#1B1A20', 0, .5 + .45, -.05, { out: .012 })); g.add(bx(.3, .03, .18, '#2A2A30', 0, .515, -.05)); g.add(bx(.06, .1, .04, '#2A2A30', 0, .56, -.05));
  const tela = tvTela(); tela.position.set(0, .95, -.016); g.add(tela); g.userData.tela = tela;
  g.add(rb(.3, .06, .15, '#2A2A30', .45, .53, .05)); // aparelho
  return g;
}
let TVT = null;
/** Tela de TV com imagem (novela/jornal) que mexe: a textura rola com o tempo (use animarTV). */
export function tvTela(w = 1.12, h = .62) {
  if (!TVT) { TVT = ctex(512, 1024, (x) => { const cenas = [['#6FB4EC', '#5AA84E'], ['#F2994A', '#3E2A60'], ['#2E6FB8', '#E8DCC8'], ['#58B26A', '#F2C230']];
    cenas.forEach(([a, b], i) => { const y = i * 256; x.fillStyle = a; x.fillRect(0, y, 512, 256); x.fillStyle = b; x.fillRect(0, y + 170, 512, 86); x.fillStyle = '#F4D2B0'; x.beginPath(); x.arc(180 + i * 40, y + 120, 44, 0, 7); x.fill(); x.fillStyle = '#2A1E1A'; x.beginPath(); x.arc(180 + i * 40, y + 100, 44, Math.PI, 0); x.fill(); x.fillStyle = ['#E2443A', '#2E9C6A', '#F2C230', '#3E7CC8'][i]; x.fillRect(120 + i * 40, y + 160, 120, 96); x.fillStyle = 'rgba(0,0,0,.55)'; x.fillRect(0, y + 214, 512, 42); x.fillStyle = '#FFF'; x.font = '700 26px Inter, Arial'; x.fillText(['JORNAL DA SERRA', 'NOVELA DAS NOVE', 'PREVISÃO DO TEMPO', 'FUTEBOL AO VIVO'][i], 16, y + 244); });
    }); TVT.wrapT = THREE.RepeatWrapping; TVT.repeat.set(1, .25); }
  const t = TVT.clone(); t.needsUpdate = true; t.repeat.set(1, .25);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); m.userData.vivo = true; m.userData.tv = true; return m;
}
/** Troca o "canal" da TV a cada ~6 s e faz a imagem mexer de leve. */
export function animarTV(tela, t, seed = 0) { const k = Math.floor((t + seed * 3.1) / 6.5) % 4; tela.material.map.offset.set(Math.sin(t * .8 + seed) * .01, .75 - k * .25); }
export function estante(w = 1.2, h = 1.8, cor = '#9A6236', seed = 0) {
  const g = G([w, .35]), R = rng(seed + 5);
  for (const s of [-1, 1]) g.add(bx(.04, h, .34, cor, s * (w / 2 - .02), h / 2, 0, { out: .01 }));
  g.add(bx(w, .04, .34, cor, 0, h, 0, { out: .01 })); g.add(bx(w, h, .02, new THREE.Color(cor).multiplyScalar(.8).getStyle(), 0, h / 2, -.16));
  const n = Math.round(h / .42); for (let i = 0; i < n; i++) { const y = .05 + i * h / n; g.add(bx(w - .08, .03, .32, cor, 0, y, 0));
    let x = -w / 2 + .08; while (x < w / 2 - .14) { if (R() < .2) { x += .12; continue; } const lw = .04 + R() * .05, lh = .2 + R() * .12; g.add(bx(lw, lh, .22, pega(R, tecidos), x + lw / 2, y + .015 + lh / 2, .02)); x += lw + .008; }
    if (i === 1) g.add(cyl(.08, .06, .16, '#F4F1EA', w / 2 - .14, y + .1, 0, { out: .01 })); }
  return g;
}
export function planta(alto = 1, seed = 0) {
  const g = G([.45, .45]), R = rng(seed + 2);
  g.add(cyl(.2, .15, .38, pega(R, ['#C8643C', '#F4F1EA', '#3A3A44', '#D9B07A']), 0, .19, 0, { out: .012, seg: 14 })); g.add(cyl(.18, .18, .02, '#5A3A24', 0, .37, 0));
  for (let i = 0; i < 7; i++) { const a = i / 7 * 6.283, f = tm(new THREE.SphereGeometry(.16, 10, 6), i % 2 ? '#4E9A48' : '#5FAE52', { out: .01 }); f.scale.set(.6, 1.8 * alto, .35); f.position.set(Math.cos(a) * .12, .55 + alto * .25, Math.sin(a) * .12); f.rotation.set(Math.sin(a) * .5, a, -Math.cos(a) * .5); g.add(f); }
  return g;
}
export function luminariaChao() { const g = G([.35, .35]); g.add(cyl(.16, .18, .03, '#2A2A30', 0, .015, 0)); g.add(cyl(.015, .015, 1.45, '#2A2A30', 0, .74, 0, { seg: 6 }));
  const m = new THREE.MeshToonMaterial({ color: '#F6E6C0', emissive: '#FFD98A', emissiveIntensity: .25 }); g.add(tm(new THREE.CylinderGeometry(.14, .22, .3, 16, 1, true), m, { pos: [0, 1.5, 0], out: .01 })); return g; }
/** Quadro de parede (desenho feito no canvas). */
export function quadro(w, h, seed = 0, tipo = 'paisagem') {
  const R = rng(seed + 8);
  const t = ctex(256, Math.round(256 * h / w), (x, W, H) => {
    if (tipo === 'paisagem') { x.fillStyle = '#8EC8EC'; x.fillRect(0, 0, W, H); x.fillStyle = '#6FA866'; x.beginPath(); x.moveTo(0, H * .7); x.quadraticCurveTo(W * .3, H * .35, W * .6, H * .62); x.quadraticCurveTo(W * .8, H * .5, W, H * .6); x.lineTo(W, H); x.lineTo(0, H); x.fill(); x.fillStyle = '#9E9A94'; x.beginPath(); x.ellipse(W * .66, H * .45, W * .1, H * .22, 0, Math.PI, 0); x.fill(); x.fillStyle = '#F2C230'; x.beginPath(); x.arc(W * .2, H * .22, H * .09, 0, 7); x.fill(); }
    else if (tipo === 'familia') { x.fillStyle = '#E8DCC8'; x.fillRect(0, 0, W, H); for (let i = 0; i < 3; i++) { const cx = W * (.28 + i * .22), cy = H * .45; x.fillStyle = ['#2C6E7F', '#E57AA0', '#3A9AD9'][i]; x.fillRect(cx - 26, cy + 20, 52, H); x.fillStyle = ['#9A6646', '#E8B48C', '#E3AE86'][i]; x.beginPath(); x.arc(cx, cy, 24, 0, 7); x.fill(); x.fillStyle = ['#2B2422', '#5A3020', '#4A2A18'][i]; x.beginPath(); x.arc(cx, cy - 6, 24, Math.PI, 0); x.fill(); } }
    else if (tipo === 'poster') { x.fillStyle = pega(R, ['#1F2D4E', '#3E2A60', '#E2443A']); x.fillRect(0, 0, W, H); x.fillStyle = '#F2C230'; x.beginPath(); x.arc(W / 2, H * .4, W * .25, 0, 7); x.fill(); x.fillStyle = '#FFF'; x.font = `900 ${W * .13}px Inter, Arial`; x.textAlign = 'center'; x.fillText(pega(R, ['ROCK', 'GAMER', 'FUTEBOL', 'ESPAÇO']), W / 2, H * .85); }
    else { x.fillStyle = '#F4F1EA'; x.fillRect(0, 0, W, H); for (let i = 0; i < 6; i++) { x.fillStyle = pega(R, tecidos); x.beginPath(); x.arc(R() * W, R() * H, 10 + R() * 30, 0, 7); x.fill(); } }
  });
  const g = G([0, 0]); g.add(rb(w + .08, h + .08, .04, '#7A5233', 0, 0, .02, { out: .008 })); const p = placa(w, h, toonTex(t), 0, 0, .042); g.add(p); return g;
}
/** Ventilador de teto (gira: g.userData.pas). */
export function ventiladorTeto(h = 2.8) {
  const g = G([0, 0]); g.add(cyl(.02, .02, .3, '#F4F1EA', 0, h - .15, 0, { seg: 6 })); g.add(cyl(.12, .1, .14, '#F4F1EA', 0, h - .35, 0, { out: .01 }));
  const pas = new THREE.Group(); pas.position.y = h - .36; pas.userData.vivo = true; for (let i = 0; i < 4; i++) { const p = rb(.62, .02, .14, '#C8935E', .38, 0, 0, { out: .008 }); const r = new THREE.Group(); r.rotation.y = i * Math.PI / 2; r.add(p); pas.add(r); }
  g.add(pas); g.userData.pas = pas; return g;
}
/** Lâmpada de teto (plafon) — acende à noite. */
export function plafon(C, h = 2.8) { const m = new THREE.MeshToonMaterial({ color: '#FFF8E6', emissive: '#FFE8B0', emissiveIntensity: 0 }); C.acender(m, 1.6); return G([0, 0], tm(new THREE.CylinderGeometry(.22, .25, .07, 18), m, { pos: [0, h - .035, 0], shadow: false })); }

// ---------------- cozinha ----------------
/** Bancada com pia e armários embaixo (comprimento w, encostada na parede de trás). */
export function bancadaPia(w = 2.2, cor = '#F4F1EA', tampo = '#3A3A44') {
  const g = G([w, .62]);
  g.add(rb(w, .86, .58, cor, 0, .43, 0, { out: .012, r: .02 })); g.add(bx(w + .02, .04, .62, tampo, 0, .88, 0, { out: .01 }));
  const nP = Math.round(w / .5); for (let i = 0; i < nP; i++) { const x = -w / 2 + w / nP * (i + .5); g.add(bx(w / nP - .03, .7, .01, cor, x, .45, .295)); g.add(bx(.12, .02, .02, '#9AA0A8', x + (i % 2 ? -.12 : .12), .7, .31)); }
  g.add(bx(.6, .02, .4, '#C9CED6', -w / 4, .905, 0)); g.add(bx(.52, .03, .34, '#8D949C', -w / 4, .9, 0));
  const tor = new THREE.Group(); tor.position.set(-w / 4, .9, -.22); tor.add(cyl(.02, .02, .28, '#C9CED6', 0, .14, 0, { seg: 8 })); const bico = cyl(.015, .015, .2, '#C9CED6', 0, .28, .08, { seg: 8 }); bico.rotation.x = Math.PI / 2; tor.add(bico); g.add(tor);
  g.add(cyl(.1, .09, .24, '#B5603E', w / 2 - .3, 1.02, 0, { out: .01 })); g.add(cyl(.11, .11, .03, '#8E4A2E', w / 2 - .3, 1.15, 0)); // filtro de barro
  g.add(rb(.3, .05, .2, '#F2C230', w / 4, .93, .05)); // pano de prato
  return g;
}
export function armarioAereo(w = 2, cor = '#F4F1EA') { const g = G([0, 0]); g.add(rb(w, .65, .34, cor, 0, 0, 0, { out: .012, r: .02 })); const n = Math.round(w / .5); for (let i = 0; i < n; i++) { const x = -w / 2 + w / n * (i + .5); g.add(bx(w / n - .03, .6, .01, cor, x, 0, .175)); g.add(bx(.02, .1, .02, '#9AA0A8', x + (i % 2 ? -.18 : .18), -.2, .19)); } return g; }
export function fogao(cor = '#F4F1EA') {
  const g = G([.62, .62]); g.add(rb(.6, .86, .6, cor, 0, .43, 0, { out: .012, r: .02 })); g.add(bx(.5, .38, .01, '#2A2A30', 0, .36, .301)); g.add(bx(.44, .3, .01, '#4A4A52', 0, .36, .305));
  g.add(bx(.6, .02, .6, '#2A2A30', 0, .87, 0)); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { g.add(cyl(.08, .08, .02, '#4A4A52', a * .14, .89, b * .14, { seg: 14 })); g.add(cyl(.05, .05, .03, '#1B1A20', a * .14, .9, b * .14, { seg: 10 })); }
  for (let i = 0; i < 4; i++) g.add(cyl(.025, .025, .03, '#1B1A20', -.2 + i * .13, .8, .31, { rot: [Math.PI / 2, 0, 0], seg: 8 }));
  g.add(bx(.6, .5, .04, cor, 0, 1.12, -.29)); // espelho do fogão
  const pan = new THREE.Group(); pan.position.set(.14, .9, .14); pan.add(cyl(.12, .11, .14, '#9AA0A8', 0, .07, 0, { out: .01 })); pan.add(cyl(.125, .125, .015, '#8D949C', 0, .15, 0)); const cabo = bx(.2, .02, .03, '#2A2A30', .2, .1, 0); pan.add(cabo); g.add(pan);
  return g;
}
export function geladeira(cor = '#F4F1EA') { const g = G([.72, .7]); g.add(rb(.7, 1.8, .68, cor, 0, .9, 0, { out: .014, r: .05 })); g.add(bx(.66, .015, .01, '#C9CED6', 0, 1.25, .345)); g.add(bx(.03, .4, .04, '#C9CED6', -.28, 1.5, .36)); g.add(bx(.03, .5, .04, '#C9CED6', -.28, .8, .36));
  for (let i = 0; i < 4; i++) g.add(rb(.08, .06, .01, ['#E2443A', '#F2C230', '#3E7CC8', '#5AA84E'][i], -.1 + i * .1 - (i > 1 ? .05 : 0), 1.55 - (i % 2) * .12, .345)); // ímãs
  g.add(rb(.3, .26, .3, '#E8DCC8', 0, 1.93, 0)); return g; }
export function mesaJantar(w = 1.2, d = .8, cor = '#B87A4A', cadeiras = 4, corCad = '#9A6236') {
  const g = G([w + .9, d + .9]); g.add(rb(w, .05, d, cor, 0, .76, 0, { out: .012 })); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(bx(.06, .74, .06, cor, a * (w / 2 - .08), .37, b * (d / 2 - .08)));
  const toalha = piso(w * .6, d + .1, toon('#F4F1EA'), 0, .79, 0); g.add(toalha);
  g.add(cyl(.14, .1, .08, '#E2A630', 0, .83, 0, { out: .01 })); for (let i = 0; i < 3; i++) g.add(sph(.05, ['#E2443A', '#F2C230', '#5AA84E'][i], -.04 + i * .04, .9, (i - 1) * .03, { seg: 10 }));
  const pos = cadeiras === 4 ? [[0, d / 2 + .25, Math.PI], [0, -d / 2 - .25, 0], [w / 2 + .25, 0, -Math.PI / 2], [-w / 2 - .25, 0, Math.PI / 2]] : [[-w / 4, d / 2 + .25, Math.PI], [w / 4, d / 2 + .25, Math.PI], [-w / 4, -d / 2 - .25, 0], [w / 4, -d / 2 - .25, 0], [w / 2 + .25, 0, -Math.PI / 2], [-w / 2 - .25, 0, Math.PI / 2]];
  for (const [x, z, ry] of pos) { const c = cadeira(corCad); c.position.set(x, 0, z); c.rotation.y = ry; g.add(c); }
  return g;
}
export function cadeira(cor = '#9A6236') { const g = G([.45, .45]); g.add(rb(.42, .05, .42, cor, 0, .46, 0, { out: .01 })); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(bx(.04, .46, .04, cor, a * .18, .23, b * .18)); g.add(bx(.04, .5, .04, cor, -.18, .72, -.18)); g.add(bx(.04, .5, .04, cor, .18, .72, -.18)); g.add(rb(.4, .2, .03, cor, 0, .85, -.19, { out: .01 })); return g; }
export function microondas() { const g = G([0, 0]); g.add(rb(.5, .3, .36, '#F4F1EA', 0, .15, 0, { out: .01 })); g.add(bx(.32, .22, .01, '#2A2A30', -.06, .15, .181)); g.add(bx(.08, .2, .01, '#9AA0A8', .18, .15, .181)); return g; }
/** Relógio de parede que marca a hora da cidade (ponteiros vivos). */
export function relogio(C, r = .16) {
  const g = G([0, 0]); g.add(cyl(r + .02, r + .02, .04, '#E2443A', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], out: .008 }));
  const f = ctex(128, 128, (x) => { x.fillStyle = '#FFF'; x.beginPath(); x.arc(64, 64, 62, 0, 7); x.fill(); x.fillStyle = '#1B1420'; for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; x.fillRect(64 + Math.cos(a) * 50 - 3, 64 + Math.sin(a) * 50 - 3, 6, 6); } });
  const fc = new THREE.Mesh(new THREE.CircleGeometry(r, 24), new THREE.MeshBasicMaterial({ map: f })); fc.position.z = .021; g.add(fc);
  const ph = new THREE.Group(), pm = new THREE.Group(); ph.position.z = pm.position.z = .025; ph.userData.vivo = pm.userData.vivo = true;
  ph.add(bx(.016, r * .55, .005, '#1B1420', 0, r * .27, 0)); pm.add(bx(.01, r * .8, .005, '#1B1420', 0, r * .4, 0)); g.add(ph, pm);
  C.vivos.push(() => { const h = C.h || 12; pm.rotation.z = -(h % 1) * Math.PI * 2; ph.rotation.z = -(h % 12) / 12 * Math.PI * 2; });
  return g;
}

// ---------------- quarto ----------------
export function cama(w = .95, cor = '#3E7CC8', madeiraCor = '#9A6236', l = 2) {
  const g = G([w + .05, l + .05]);
  g.add(rb(w + .05, .3, l + .05, madeiraCor, 0, .2, 0, { out: .012 })); g.add(rb(w + .05, .8, .07, madeiraCor, 0, .5, -l / 2, { out: .012 }));
  g.add(rb(w - .02, .2, l - .05, '#F4F1EA', 0, .44, .01, { r: .06 }));
  const lenc = rb(w + .02, .08, l * .68, cor, 0, .54, l * .15, { out: .012, r: .04 }); g.add(lenc);
  g.add(bx(w + .04, .26, .02, cor, 0, .42, l * .49)); for (const s of [-1, 1]) g.add(bx(.02, .26, l * .68, cor, s * (w / 2 + .01), .42, l * .15));
  const nT = w > 1.2 ? 2 : 1; for (let i = 0; i < nT; i++) g.add(rb(nT === 2 ? w / 2 - .1 : w - .2, .14, .34, '#FFFFFF', nT === 2 ? (i ? 1 : -1) * w / 4 : 0, .6, -l / 2 + .28, { out: .01, r: .06 }));
  return g;
}
export function criado(cor = '#9A6236', abajur = true, C) {
  const g = G([.45, .4]); g.add(rb(.44, .55, .38, cor, 0, .275, 0, { out: .012 })); g.add(bx(.38, .18, .01, new THREE.Color(cor).multiplyScalar(.85).getStyle(), 0, .4, .191)); g.add(bx(.08, .02, .02, '#C9CED6', 0, .4, .2));
  if (abajur) { g.add(cyl(.06, .08, .2, '#F4F1EA', -.08, .65, 0, { out: .008 })); const m = new THREE.MeshToonMaterial({ color: '#F6E6C0', emissive: '#FFD98A', emissiveIntensity: 0 }); if (C) C.acender(m, 1.2); g.add(tm(new THREE.CylinderGeometry(.09, .14, .17, 14, 1, true), m, { pos: [-.08, .84, 0], out: .008 })); }
  g.add(rb(.12, .03, .08, '#2A2A30', .12, .57, .04)); return g;
}
export function guardaRoupa(w = 1.6, h = 2.1, cor = '#D9B07A') {
  const g = G([w, .6]); g.add(rb(w, h, .58, cor, 0, h / 2, 0, { out: .014, r: .02 })); const n = w > 1.2 ? 3 : 2;
  for (let i = 0; i < n; i++) { const x = -w / 2 + w / n * (i + .5); g.add(bx(w / n - .03, h - .12, .01, new THREE.Color(cor).multiplyScalar(.93).getStyle(), x, h / 2, .291)); g.add(bx(.02, .3, .03, '#7A5233', x + (i % 2 ? -1 : 1) * (w / n / 2 - .08), h / 2, .31)); }
  g.add(rb(.5, .3, .4, '#C84E4E', -w / 4, h + .15, 0)); return g;
}
export function escrivaninha(w = 1.1, cor = '#F4F1EA', comPC = true, seed = 0) {
  const g = G([w, .6]); g.add(rb(w, .04, .58, cor, 0, .74, 0, { out: .012 })); g.add(bx(.04, .72, .56, cor, -w / 2 + .02, .36, 0)); g.add(rb(.4, .72, .56, cor, w / 2 - .2, .36, 0, { out: .01 }));
  for (let i = 0; i < 3; i++) g.add(bx(.34, .2, .01, '#D9D2C5', w / 2 - .2, .58 - i * .23, .281));
  if (comPC) { g.add(rb(.55, .34, .04, '#1B1A20', -.05, 1.0, -.15, { out: .01 })); const tela = new THREE.Mesh(new THREE.PlaneGeometry(.5, .3), new THREE.MeshBasicMaterial({ map: telaPC(seed) })); tela.position.set(-.05, 1.0, -.128); g.add(tela);
    g.add(bx(.06, .14, .06, '#2A2A30', -.05, .83, -.15)); g.add(bx(.2, .02, .14, '#2A2A30', -.05, .77, -.15)); g.add(rb(.42, .02, .14, '#2A2A30', -.05, .77, .08)); g.add(rb(.06, .02, .1, '#2A2A30', .24, .77, .1)); }
  g.add(cyl(.04, .04, .1, '#3E7CC8', .3, .81, -.15, { seg: 10 })); return g;
}
const PCT = new Map();
function telaPC(seed) { if (!PCT.has(seed % 3)) PCT.set(seed % 3, ctex(256, 160, (x) => { x.fillStyle = ['#2E6FB8', '#1F2D4E', '#3E2A60'][seed % 3]; x.fillRect(0, 0, 256, 160); x.fillStyle = '#F4F1EA'; x.fillRect(16, 16, 140, 90); x.fillStyle = '#5AA84E'; x.fillRect(24, 60, 60, 38); x.fillStyle = '#F2C230'; x.fillRect(100, 30, 46, 70); x.fillStyle = '#2A2A30'; x.fillRect(0, 140, 256, 20); x.fillStyle = '#FFF'; for (let i = 0; i < 4; i++) x.fillRect(8 + i * 22, 144, 14, 12); })); return PCT.get(seed % 3); }
export function cadeiraEscritorio(cor = '#2A2A30') { const g = G([.55, .55]); for (let i = 0; i < 5; i++) { const a = i / 5 * 6.283; const p = bx(.3, .03, .04, cor, Math.cos(a) * .14, .06, Math.sin(a) * .14); p.rotation.y = -a; g.add(p); } g.add(cyl(.03, .03, .38, '#8D949C', 0, .26, 0, { seg: 8 })); g.add(rb(.48, .08, .46, cor, 0, .47, 0, { out: .01 })); g.add(rb(.44, .55, .07, cor, 0, .82, -.22, { out: .01 })); return g; }
export function comoda(w = 1, cor = '#B87A4A') { const g = G([w, .45]); g.add(rb(w, .85, .44, cor, 0, .425, 0, { out: .012 })); for (let i = 0; i < 3; i++) { g.add(bx(w - .08, .22, .01, new THREE.Color(cor).multiplyScalar(.88).getStyle(), 0, .18 + i * .25, .221)); g.add(bx(.16, .02, .02, '#7A5233', 0, .25 + i * .25, .23)); } g.add(cyl(.06, .08, .03, '#F4F1EA', w / 2 - .2, .87, 0)); g.add(rb(.2, .25, .03, '#7A5233', -w / 4, .98, -.1, { rot: [-.15, 0, 0] })); return g; }

// ---------------- banheiro e área ----------------
export function vaso() { const g = G([.4, .65]); g.add(tm(new THREE.CylinderGeometry(.19, .15, .4, 18), '#FFFFFF', { pos: [0, .2, .05], out: .01 })); g.add(cyl(.2, .2, .04, '#F4F1EA', 0, .42, .05, { out: .008 })); g.add(rb(.38, .38, .17, '#FFFFFF', 0, .6, -.22, { out: .01 })); g.add(bx(.06, .02, .02, '#C9CED6', .12, .8, -.13)); return g; }
export function pia(espelho = true) { const g = G([.55, .45]); g.add(rb(.55, .2, .45, '#FFFFFF', 0, .78, 0, { out: .01 })); g.add(cyl(.08, .1, .7, '#FFFFFF', 0, .35, -.05, { seg: 12 })); g.add(cyl(.016, .016, .16, '#C9CED6', 0, .96, -.15, { seg: 8 }));
  if (espelho) { g.add(rb(.5, .7, .03, '#C9CED6', 0, 1.5, -.21, { out: .01 })); g.add(new THREE.Mesh(new THREE.PlaneGeometry(.44, .64), new THREE.MeshToonMaterial({ color: '#CFE6F2', emissive: '#9CC9E8', emissiveIntensity: .3 })).translateY(1.5).translateZ(-.19)); }
  return g; }
export function box(w = 1, d = 1) { const g = G([w, d]); g.add(bx(w, .06, d, '#E8E4DC', 0, .03, 0)); const vid = new THREE.MeshToonMaterial({ color: '#CFE6F2', transparent: true, opacity: .35, depthWrite: false });
  g.add(tm(new THREE.PlaneGeometry(w, 1.9), vid, { pos: [0, 1.0, d / 2], shadow: false })); g.add(bx(w, .04, .04, '#C9CED6', 0, 1.95, d / 2)); g.add(bx(.04, 1.95, .04, '#C9CED6', w / 2 - .02, 1, d / 2));
  const ch = new THREE.Group(); ch.position.set(0, 2.05, -d / 2 + .1); ch.add(cyl(.12, .12, .04, '#C9CED6', 0, 0, .2, { seg: 14 })); ch.add(bx(.03, .03, .25, '#C9CED6', 0, .02, .08)); g.add(ch); return g; }
export function toalha(cor = '#F2546E') { const g = G([0, 0]); g.add(bx(.5, .02, .02, '#C9CED6', 0, 0, .03)); g.add(rb(.45, .55, .03, cor, 0, -.28, .05, { r: .01 })); return g; }
export function tanque() { const g = G([.6, .55]); g.add(rb(.6, .3, .55, '#E8E4DC', 0, .78, 0, { out: .01 })); g.add(bx(.08, .62, .08, '#E8E4DC', -.2, .31, 0)); g.add(bx(.08, .62, .08, '#E8E4DC', .2, .31, 0)); g.add(cyl(.016, .016, .2, '#C9CED6', 0, 1.02, -.24, { seg: 8 })); g.add(rb(.12, .14, .08, '#3E7CC8', .18, .98, .05)); return g; }
export function maquinaLavar() { const g = G([.62, .62]); g.add(rb(.6, .9, .6, '#F4F1EA', 0, .45, 0, { out: .012, r: .04 })); g.add(cyl(.2, .2, .02, '#9AA0A8', 0, .5, .3, { rot: [Math.PI / 2, 0, 0], seg: 20 })); g.add(cyl(.16, .16, .02, '#7FA9C9', 0, .5, .31, { rot: [Math.PI / 2, 0, 0], seg: 20 })); g.add(bx(.5, .1, .01, '#C9CED6', 0, .8, .301)); return g; }
export function varal(w = 3, cores = ['#3E7CC8', '#F2546E', '#F4F1EA', '#F2C230', '#5AA84E']) {
  const g = G([0, 0]); for (const s of [-1, 1]) g.add(cyl(.03, .03, 1.9, '#9AA0A8', s * w / 2, .95, 0, { seg: 6 }));
  g.add(bx(w, .01, .01, '#E8E4DC', 0, 1.85, 0)); const R = rng(w * 10); let x = -w / 2 + .3;
  while (x < w / 2 - .4) { const rw = .3 + R() * .3, rh = .35 + R() * .35; const r = rb(rw, rh, .02, pega(R, cores), x + rw / 2, 1.83 - rh / 2, 0, { r: .01 }); r.userData.vivo = true; g.add(r); x += rw + .12; }
  return g;
}

// ---------------- quintal e garagem ----------------
export function churrasqueira() {
  const g = G([1.4, .8]); g.add(bx(1.4, .9, .8, '#B5603E', 0, .45, 0, { out: .014 })); g.add(bx(1.5, .06, .9, '#D8CBB8', 0, .93, 0)); g.add(bx(1.0, .5, .1, '#3A2A20', 0, 1.2, .3));
  g.add(bx(1.2, .8, .7, '#B5603E', 0, 1.36, -.05, { out: .014 })); const coifa = tm(new THREE.CylinderGeometry(.18, .6, .6, 4), '#B5603E', { pos: [0, 2.06, -.05], rot: [0, Math.PI / 4, 0], out: .014 }); coifa.scale.set(1.3, 1, .9); g.add(coifa);
  g.add(bx(.36, 1.2, .36, '#B5603E', 0, 2.95, -.05, { out: .014 })); g.add(bx(.9, .02, .5, '#3A3A44', 0, 1.0, .1)); for (let i = 0; i < 5; i++) g.add(sph(.05, '#2A1A14', -.3 + i * .15, 1.02, .1, { seg: 8 }));
  return g;
}
export function mesaPlastica(cor = '#F4F1EA', comGuarda = false) {
  const g = G([2.2, 2.2]); g.add(cyl(.45, .45, .04, cor, 0, .72, 0, { out: .01, seg: 20 })); for (const a of [0, 1.57, 3.14, 4.71]) { const p = bx(.04, .72, .04, cor, Math.cos(a) * .35, .36, Math.sin(a) * .35); p.rotation.z = Math.cos(a) * .12; g.add(p); }
  for (const a of [.4, 2.1, 3.7, 5.2]) { const c = cadeiraPlastica(cor); c.position.set(Math.cos(a) * .85, 0, Math.sin(a) * .85); c.rotation.y = -a - Math.PI / 2; g.add(c); }
  if (comGuarda) { g.add(cyl(.02, .02, 2.2, '#9AA0A8', 0, 1.1, 0, { seg: 6 })); const gs = tm(new THREE.ConeGeometry(1.3, .45, 8, 1, true), '#E2443A', { pos: [0, 2.2, 0], out: .012 }); g.add(gs); }
  return g;
}
export function cadeiraPlastica(cor = '#F4F1EA') { const g = new THREE.Group(); g.add(rb(.44, .04, .42, cor, 0, .44, 0, { out: .008 })); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(bx(.04, .44, .04, cor, a * .19, .22, b * .18)); g.add(rb(.44, .4, .04, cor, 0, .68, -.2, { out: .008, rot: [-.12, 0, 0] })); return g; }
export function casinhaCachorro(cor = '#C84E4E') { const g = G([1, 1.1]); g.add(bx(.9, .7, 1, '#D9B07A', 0, .35, 0, { out: .012 })); const tt = tm(new THREE.CylinderGeometry(.01, .72, .5, 4, 1), cor, { pos: [0, .95, 0], rot: [0, Math.PI / 4, 0], out: .012 }); tt.scale.set(1, 1, 1.2); g.add(tt); g.add(tm(new THREE.CircleGeometry(.22, 16), '#2A1E1A', { pos: [0, .32, .505] })); g.add(bx(.44, .2, .01, '#2A1E1A', 0, .12, .505)); return g; }
export function vasoGrande(seed = 0) { const p = planta(1.3, seed); p.scale.setScalar(1.3); p.userData.pe = [.6, .6]; return p; }
export function bicicletaParada(cor = '#2FA37A') { const g = G([1.7, .4]); for (const s of [-1, 1]) { const r = tm(new THREE.TorusGeometry(.32, .03, 8, 24), '#2A2A30', { pos: [s * .55, .34, 0] }); g.add(r); } const q = bx(1.0, .04, .04, cor, 0, .55, 0); g.add(q); const s2 = bx(.04, .4, .04, cor, -.2, .5, 0); s2.rotation.z = .3; g.add(s2); g.add(rb(.22, .05, .1, '#2A2A30', -.28, .75, 0)); g.add(bx(.04, .04, .45, '#2A2A30', .45, .8, 0)); return g; }
/** Carro (estilo desenho). Usado parado nas garagens e andando nas ruas. Frente para +z. */
export function carro(cor = '#E2443A', seed = 0) {
  const g = G([1.8, 4.1]); const R = rng(seed + 1);
  g.add(rb(1.74, .62, 4.0, cor, 0, .55, 0, { out: .016, r: .16 }));
  g.add(rb(1.56, .52, 2.1, cor, 0, 1.08, -.25, { out: .016, r: .14 }));
  const vid = toon('#6E95B8');
  g.add(bx(1.4, .4, .02, vid, 0, 1.08, .81, { rot: [-.35, 0, 0] })); g.add(bx(1.4, .38, .02, vid, 0, 1.08, -1.31, { rot: [.3, 0, 0] }));
  for (const s of [-1, 1]) { g.add(bx(.02, .36, .85, vid, s * .785, 1.08, .2)); g.add(bx(.02, .36, .8, vid, s * .785, 1.08, -.75)); }
  for (const [x, z] of [[-.8, 1.25], [.8, 1.25], [-.8, -1.3], [.8, -1.3]]) { const r = new THREE.Group(); r.position.set(x, .34, z); r.add(cyl(.34, .34, .24, '#1B1A20', 0, 0, 0, { rot: [0, 0, Math.PI / 2], out: .012, seg: 18 })); r.add(cyl(.18, .18, .25, '#C9CED6', 0, 0, 0, { rot: [0, 0, Math.PI / 2], seg: 14 })); r.userData.roda = true; g.add(r); }
  const farol = new THREE.MeshToonMaterial({ color: '#FFF6D8', emissive: '#FFF0C0', emissiveIntensity: .2 });
  for (const s of [-1, 1]) { g.add(tm(new THREE.BoxGeometry(.34, .14, .04), farol, { pos: [s * .58, .68, 2.0] })); g.add(bx(.3, .12, .04, '#E8443A', s * .62, .7, -2.0)); }
  g.add(bx(1.3, .14, .05, '#3A3A44', 0, .38, 2.02)); g.add(bx(1.3, .14, .05, '#3A3A44', 0, .38, -2.02));
  g.add(rb(.4, .12, .03, '#F4F1EA', 0, .45, -2.04)); // placa
  return g;
}

/** Prateleira de parede com produtos de limpeza. */
export function prateleiraLimpeza(seed = 0) { const g = G([0, 0]), R = rng(seed + 61); g.add(bx(1.2, .03, .25, '#F4F1EA', 0, 0, 0, { out: .006 })); g.add(bx(1.2, .03, .25, '#F4F1EA', 0, .45, 0, { out: .006 }));
  for (let k = 0; k < 2; k++) for (let i = 0; i < 6; i++) { const c = pega(R, ['#3E7CC8', '#5AA84E', '#F2C230', '#E2443A', '#F2546E', '#F4F1EA']); g.add(cyl(.045, .05, .2, c, -.5 + i * .2, .12 + k * .45, 0, { seg: 8 })); g.add(cyl(.015, .02, .05, c, -.5 + i * .2, .245 + k * .45, 0, { seg: 6 })); } return g; }
export function cestoRoupa() { const g = G([.5, .4]); g.add(cyl(.22, .18, .5, '#D9B07A', 0, .25, 0, { out: .01, seg: 14 })); g.add(rb(.36, .12, .3, '#3E7CC8', 0, .52, 0, { r: .05 })); g.add(rb(.2, .1, .2, '#F2546E', .05, .58, .04, { r: .04 })); return g; }
export function balde() { const g = G([.35, .35]); g.add(cyl(.15, .12, .28, '#3E7CC8', 0, .14, 0, { out: .01, seg: 14 })); g.add(tm(new THREE.TorusGeometry(.14, .008, 6, 16, Math.PI), '#9AA0A8', { pos: [0, .28, 0] })); const rodo = new THREE.Group(); rodo.position.set(.3, 0, 0); rodo.add(cyl(.012, .012, 1.3, '#F2C230', 0, .65, 0, { seg: 6 })); rodo.add(bx(.4, .05, .05, '#2A2A30', 0, .03, 0)); rodo.rotation.z = .15; g.add(rodo); return g; }
