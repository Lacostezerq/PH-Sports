// Objetos deste vídeo: caminhão de lixo, sacos, caderno da lista, notebook, celular de teclado, computador antigo,
// videogame, porta-retrato, TV, churrasqueira, moeda de bitcoin, cofre, chave, cadeado, maca, cachorro.
import * as THREE from 'three';
import { rng } from './motor/core.js';
import { toon, toonTex, tm, rb, bx, cyl, sph, rbox, ctex, outline, blob } from './motor/toon.js';
import { registra } from './vida.js';

const INK = '#1B1420';
export const txt = (x, s, cx, cy, size, cor, peso = 900, al = 'center', fam = 'Inter') => { x.fillStyle = cor; x.font = `${peso} ${size}px ${fam}`; x.textAlign = al; x.textBaseline = 'middle'; x.fillText(s, cx, cy); };
/** Plano com textura de canvas que pode ser repintado (paint(chave, fn)). */
export function tela(w, h, res = 512, basic = true) {
  const cv = document.createElement('canvas'); cv.width = res; cv.height = Math.round(res * h / w); const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), basic ? new THREE.MeshBasicMaterial({ map: t, toneMapped: false }) : toonTex(t)); let last = null;
  m.paint = (key, fn) => { if (key !== last) { last = key; x.setTransform(1, 0, 0, 1, 0, 0); fn(x, cv.width, cv.height); t.needsUpdate = true; } return m; }; return m;
}
/** Desenha a moeda de bitcoin (genérica: círculo laranja com ₿). */
export function moedaDraw(x, cx, cy, r) { x.fillStyle = '#F2A23A'; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); x.lineWidth = r * .08; x.strokeStyle = '#C9781E'; x.beginPath(); x.arc(cx, cy, r * .86, 0, 7); x.stroke(); x.save(); x.translate(cx, cy); x.rotate(.24); txt(x, '₿', 0, r * .06, r * 1.25, '#FFFFFF', 900); x.restore(); }

// ---------- caminhão de lixo (frente para +z) ----------
export function caminhaoLixo() {
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  // cabine branca com faixa verde
  body.add(rb(2.5, 2.2, 2.2, '#F4F1EA', 0, 1.75, 3.2, { r: .2, out: .012 }));
  body.add(rb(2.3, .9, .05, '#3B4A60', 0, 2.25, 4.31, { r: .03 }));
  for (const s of [-1, 1]) body.add(rb(.05, .7, 1.1, '#3B4A60', s * 1.26, 2.2, 3.4, { r: .02 }));
  body.add(bx(2.52, .32, 2.22, '#2E9C5A', 0, 1.05, 3.2));
  const fr = new THREE.MeshBasicMaterial({ color: '#FFF4D0' }); for (const s of [-1, 1]) { const f = new THREE.Mesh(new THREE.CircleGeometry(.16, 16), fr); f.position.set(s * .9, 1.1, 4.32); body.add(f); }
  body.add(rb(2.6, .3, .3, '#9EA6B0', 0, .75, 4.35, { r: .08 }));
  // compactador laranja
  body.add(rb(2.6, 3.0, 5.6, '#F28A2E', 0, 2.15, -.9, { r: .25, out: .012 }));
  body.add(bx(2.64, .35, 5.6, '#2E9C5A', 0, 1.25, -.9));
  const lado = ctex(1024, 256, (x, W, H) => { x.fillStyle = '#F28A2E'; x.fillRect(0, 0, W, H); txt(x, 'LIMPEZA URBANA', W / 2, H * .42, 120, '#FFFFFF'); x.fillStyle = '#FFFFFF'; x.fillRect(W * .1, H * .72, W * .8, 10); txt(x, 'COLETA DOMICILIAR', W / 2, H * .86, 54, '#FFF2DE', 800); });
  for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 1.2), toonTex(lado)); p.position.set(s * 1.32, 2.4, -.9); p.rotation.y = s * Math.PI / 2; body.add(p); }
  // boca traseira (caçamba) com sacos
  body.add(rb(2.7, .45, 1.2, '#D9741E', 0, 2.62, -4.1, { r: .1, out: .012 })); for (const s of [-1, 1]) body.add(rb(.3, 2.2, 1.2, '#D9741E', s * 1.2, 1.5, -4.1, { r: .08, out: .012 }));
  const boca = bx(2.2, 1.2, .1, '#2A2420', 0, 1.3, -3.9); body.add(boca); body.add(bx(2.3, .12, .9, '#B8601A', 0, .72, -4.3));
  const sacos = []; const R = rng(4); for (let i = 0; i < 9; i++) { const s = sacoLixo(['#26262C', '#3A3A44', '#2A3A2A', '#F4F1EA', '#3E5C8A'][i % 5], R() * 9); s.scale.setScalar(.55 + R() * .2); s.position.set(-.8 + (i % 4) * .52, .78 + Math.floor(i / 4) * .3, -4.15 - (i % 2) * .25); body.add(s); sacos.push(s); }
  body.add(rb(2.8, .25, .3, '#2E9C5A', 0, .6, -4.75, { r: .06 }));
  // giroflex e lanternas
  const gf = new THREE.Mesh(new THREE.SphereGeometry(.16, 14, 10), new THREE.MeshBasicMaterial({ color: '#FFB020' })); gf.position.set(0, 3.0, 2.3); body.add(gf);
  for (const s of [-1, 1]) { const l = new THREE.Mesh(new THREE.BoxGeometry(.3, .18, .04), new THREE.MeshBasicMaterial({ color: '#E23A3A' })); l.position.set(s * 1.15, .95, -4.73); body.add(l); }
  const pneu = new THREE.CylinderGeometry(.55, .55, .42, 20); pneu.rotateZ(Math.PI / 2); const rodas = [];
  for (const [a, b] of [[-1.2, 3.2], [1.2, 3.2], [-1.2, -1.6], [1.2, -1.6], [-1.2, -2.9], [1.2, -2.9]]) { const w = tm(pneu, '#26262C', { pos: [a, .55, b] }); w.add(tm(new THREE.CylinderGeometry(.26, .26, .44, 12).rotateZ(Math.PI / 2), '#C8CCD2')); g.add(w); rodas.push(w); }
  const sb = blob(2.2, .4); sb.scale.set(1.3, 4.2, 1); sb.position.y = .01; g.add(sb);
  g.userData = { rodas, gf, sacos, body }; return g;
}
export function rodar(g, dist) { g.userData.rodas.forEach(w => w.rotation.x = dist / .55); }
export function sacoLixo(cor = '#26262C', seed = 0) {
  const g = new THREE.Group(); const m = sph(.42, cor, 0, .36, 0, { seg: 14, out: .01 }); m.scale.set(1, .85 + (seed % 3) * .05, .95); g.add(m);
  const n = cyl(.05, .12, .2, cor, 0, .78, 0, { seg: 8, out: .006 }); g.add(n); for (const s of [-1, 1]) { const o = cyl(.025, .04, .16, cor, s * .07, .9, 0, { seg: 6 }); o.rotation.z = s * .7; g.add(o); } return g;
}
// ---------- caderno da lista ----------
const CAPA = '#E8742A';
export function capaTex(cor = CAPA) { return ctex(256, 340, (x, W, H) => { x.fillStyle = cor; x.fillRect(0, 0, W, H); x.fillStyle = '#FFFFFF'; x.fillRect(W * .15, H * .14, W * .7, H * .2); txt(x, 'CADERNO', W / 2, H * .2, 30, '#5A3018'); txt(x, 'Guilherme · 1º C', W / 2, H * .28, 18, '#5A3018', 700); x.fillStyle = '#F2C230'; x.beginPath(); x.arc(W * .72, H * .7, 34, 0, 7); x.fill(); txt(x, '★', W * .72, H * .705, 44, '#C0392B'); x.fillStyle = '#2A2420'; for (let i = 0; i < 14; i++) x.fillRect(4, 10 + i * 23, 10, 8); }); }
export function caderno(o = {}) {
  const g = new THREE.Group(); const cap = toonTex(capaTex(o.cor)); const lat = toon('#F4F1EA'), cor = toon(o.cor || CAPA);
  const m = new THREE.Mesh(rbox(.24, .025, .32, .006), [lat, lat, cap, cor, lat, lat]); m.castShadow = true; outline(m, .004); g.add(m); return g;
}
/** Folha de caderno pautada com escrita à mão (fn desenha por cima). */
export function folhaDraw(x, W, H, fn) {
  x.fillStyle = '#FBF8EE'; x.fillRect(0, 0, W, H); x.strokeStyle = '#9CC4E4'; x.lineWidth = 2; for (let y = H * .14; y < H; y += H * .062) { x.beginPath(); x.moveTo(0, y); x.lineTo(W, y); x.stroke(); }
  x.strokeStyle = '#E88A8A'; x.lineWidth = 3; x.beginPath(); x.moveTo(W * .12, 0); x.lineTo(W * .12, H); x.stroke(); fn && fn(x, W, H);
}
export const mao = (x, s, cx, cy, size, cor = '#2A3A7A', al = 'left') => { x.fillStyle = cor; x.font = `700 ${size}px Caveat`; x.textAlign = al; x.textBaseline = 'middle'; x.fillText(s, cx, cy); };
/** Caderno aberto sobre a mesa: duas páginas (esq/dir) pintáveis. */
export function cadernoAberto() {
  const g = new THREE.Group(); g.add(rb(.62, .02, .4, CAPA, 0, .01, 0, { r: .006, out: .004 }));
  const E = tela(.29, .38, 512, false), D = tela(.29, .38, 512, false); E.rotation.x = D.rotation.x = -Math.PI / 2; E.position.set(-.148, .023, 0); D.position.set(.148, .023, 0); g.add(E, D);
  g.add(cyl(.006, .006, .38, '#9EA6B0', 0, .03, 0, { rot: [Math.PI / 2, 0, 0], seg: 6 })); g.userData = { E, D }; return g;
}
// ---------- eletrônicos ----------
export function notebook(o = {}) {
  const g = new THREE.Group(); g.add(rb(.5, .025, .34, o.cor || '#8E949C', 0, .012, 0, { r: .01, out: .005 })); g.add(bx(.44, .004, .2, '#2A2A30', 0, .027, -.03));
  const tampa = new THREE.Group(); tampa.position.set(0, .025, -.17); g.add(tampa); tampa.add(rb(.5, .34, .02, o.cor || '#8E949C', 0, .17, -.01, { r: .01, out: .005 }));
  const sc = tela(.46, .29, 512); sc.position.set(0, .17, .002); tampa.add(sc); tampa.rotation.x = -.25; g.userData = { sc, tampa }; return g;
}
export function celularTeclado() {
  const g = new THREE.Group(); g.add(rb(.055, .11, .018, '#2A2E38', 0, 0, 0, { r: .012, out: .004 }));
  const s = tela(.04, .035, 128); s.position.set(0, .025, .0095); g.add(s); s.paint('0', (x, W, H) => { x.fillStyle = '#9FD6A8'; x.fillRect(0, 0, W, H); txt(x, '07:02', W / 2, H * .5, 30, '#1E3A22', 800, 'center', "'IBM Plex Mono'"); });
  for (let i = 0; i < 12; i++) g.add(bx(.01, .007, .004, '#C8CCD2', -.014 + (i % 3) * .014, -.008 - Math.floor(i / 3) * .011, .01)); return g;
}
export function computadorAntigo() {
  const g = new THREE.Group(); g.add(rb(.5, .42, .44, '#E8E2CC', 0, .31, -.05, { r: .04, out: .007 })); g.add(rb(.38, .3, .3, '#DCD4BA', 0, .3, -.32, { r: .08 }));
  const sc = tela(.4, .3, 512); sc.position.set(0, .32, .172); g.add(sc); g.add(rb(.2, .06, .18, '#DCD4BA', 0, .05, -.05, { r: .02 }));
  const tec = rb(.46, .025, .16, '#E8E2CC', 0, .02, .32, { r: .01, out: .004 }); g.add(tec); for (let i = 0; i < 30; i++) g.add(bx(.024, .006, .022, '#CFC7AE', -.2 + (i % 15) * .029, .036, .27 + Math.floor(i / 15) * .035));
  g.add(rb(.06, .03, .1, '#E8E2CC', .32, .02, .32, { r: .015 })); g.userData = { sc }; return g;
}
export function videogame() { const g = new THREE.Group(); g.add(rb(.34, .08, .26, '#2A2A33', 0, .04, 0, { r: .02, out: .005 })); g.add(bx(.12, .004, .01, '#5AE07A', .08, .05, .13)); const ct = new THREE.Group(); ct.add(rb(.16, .04, .09, '#3A3A44', 0, 0, 0, { r: .02, out: .004 })); for (const s of [-1, 1]) ct.add(sph(.03, '#3A3A44', s * .07, -.005, .03)); ct.position.set(.05, .1, .2); g.add(ct); return g; }
export function portaRetrato(draw, w = .26, h = .32) { const g = new THREE.Group(); g.add(rb(w + .04, h + .04, .025, '#7A5236', 0, h / 2 + .02, 0, { r: .008, out: .004 })); const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), toonTex(ctex(256, Math.round(256 * h / w), draw))); p.position.set(0, h / 2 + .02, .014); g.add(p); const pe = bx(.03, h * .8, .03, '#7A5236', 0, h * .4, -.08); pe.rotation.x = -.35; g.add(pe); return g; }
/** Desenho do porta-retrato: Guilherme pequeno nos ombros do pai. */
export function fotoPaiFilho(x, W, H) {
  const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#9FD4F2'); g.addColorStop(1, '#F6E7C8'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.fillStyle = '#7CC46A'; x.fillRect(0, H * .82, W, H * .18);
  x.lineWidth = 6; x.strokeStyle = INK;
  const cab = (cx, cy, r, pele, cab) => { x.fillStyle = pele; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); x.stroke(); x.fillStyle = cab; x.beginPath(); x.arc(cx, cy - r * .2, r * 1.02, Math.PI * 1.05, Math.PI * 1.95); x.fill(); x.fillStyle = INK; for (const k of [-1, 1]) { x.beginPath(); x.arc(cx + k * r * .35, cy + r * .05, r * .1, 0, 7); x.fill(); } x.beginPath(); x.lineWidth = 5; x.arc(cx, cy + r * .3, r * .3, .3, Math.PI - .3); x.stroke(); x.lineWidth = 6; };
  x.fillStyle = '#22355E'; x.beginPath(); x.ellipse(W / 2, H * .95, W * .3, H * .3, 0, Math.PI, 0); x.fill(); x.stroke();
  cab(W / 2, H * .55, W * .17, '#9A6646', '#2B2422'); x.fillStyle = '#4E4642'; x.beginPath(); x.arc(W / 2, H * .62, W * .14, .1, Math.PI - .1); x.fill();
  x.fillStyle = '#3A9AD9'; x.beginPath(); x.ellipse(W / 2, H * .37, W * .14, H * .07, 0, Math.PI, 0); x.fill(); cab(W / 2, H * .24, W * .11, '#E3AE86', '#4A2A18');
  x.strokeStyle = 'rgba(80,60,30,.35)'; x.lineWidth = W * .03; x.strokeRect(W * .03, H * .03, W * .94, H * .94);
}
export function tv(w = 1.6, h = .9) { const g = new THREE.Group(); g.add(rb(w + .08, h + .08, .08, '#1E1E24', 0, 0, 0, { r: .02, out: .008 })); const sc = tela(w, h, 768); sc.position.z = .045; g.add(sc); g.userData = { sc }; return g; }
// ---------- bitcoin e segurança ----------
export function moeda(r = .5) {
  const face = toonTex(ctex(256, 256, (x) => { x.fillStyle = '#C9781E'; x.fillRect(0, 0, 256, 256); moedaDraw(x, 128, 128, 120); })); const lado = toon('#D98A24');
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, r * .16, 40), [lado, face, face]); m.rotation.x = Math.PI / 2; m.castShadow = true; outline(m, .01); const g = new THREE.Group(); g.add(m); return g;
}
export function cofre() { const g = new THREE.Group(); g.add(rb(1.6, 1.8, 1.4, '#5A6578', 0, .9, 0, { r: .08, out: .012 })); const porta = new THREE.Group(); porta.position.set(-.7, .9, .72); g.add(porta);
  porta.add(rb(1.4, 1.6, .12, '#76839A', .7, 0, 0, { r: .05, out: .01 })); const vol = new THREE.Group(); vol.position.set(.7, 0, .08); porta.add(vol); vol.add(cyl(.3, .3, .08, '#C8CCD2', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], out: .006 })); for (let i = 0; i < 4; i++) { const r = bx(.06, .5, .05, '#9EA6B0', 0, 0, .06); r.rotation.z = i * Math.PI / 4; vol.add(r); }
  const dentro = new THREE.Group(); for (let i = 0; i < 7; i++) { const m = moeda(.22); m.position.set(-.45 + (i % 4) * .3, .35 + Math.floor(i / 4) * .5, -.1); m.rotation.y = .3; dentro.add(m); } g.add(dentro); g.userData = { porta, vol, dentro }; return g; }
export function chave() { const g = new THREE.Group(); g.add(cyl(.12, .12, .05, '#F2C230', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], out: .006 })); g.add(cyl(.05, .05, .07, '#C99A1E', 0, 0, 0, { rot: [Math.PI / 2, 0, 0] })); g.add(bx(.36, .05, .04, '#F2C230', .28, 0, 0)); g.add(bx(.04, .1, .04, '#F2C230', .38, -.06, 0)); g.add(bx(.04, .07, .04, '#F2C230', .3, -.05, 0)); return g; }
export function cadeado() { const g = new THREE.Group(); g.add(rb(.5, .42, .2, '#F2C230', 0, 0, 0, { r: .06, out: .008 })); const arco = new THREE.Mesh(new THREE.TorusGeometry(.16, .045, 10, 24, Math.PI), toon('#C8CCD2')); arco.position.y = .2; outline(arco, .006); g.add(arco); g.add(cyl(.05, .05, .21, INK, 0, -.02, 0, { rot: [Math.PI / 2, 0, 0] })); g.userData = { arco }; return g; }
// ---------- casa e quintal ----------
export function churrasqueira() {
  const g = new THREE.Group(); const tij = ctex(256, 256, (x) => { x.fillStyle = '#C46A4A'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#AE563A'; for (let r = 0; r < 16; r++) for (let i = 0; i < 8; i++) x.fillRect(i * 32 + (r % 2) * 16, r * 16, 30, 14); }); tij.wrapS = tij.wrapT = THREE.RepeatWrapping; tij.repeat.set(2, 2);
  const m = toonTex(tij); g.add(tm(new THREE.BoxGeometry(1.8, 1.0, .9), m, { pos: [0, .5, 0], out: .01 })); g.add(tm(new THREE.BoxGeometry(1.8, 1.1, .2), m, { pos: [0, 1.55, -.35], out: .01 })); for (const s of [-1, 1]) g.add(tm(new THREE.BoxGeometry(.2, 1.1, .9), m, { pos: [s * .8, 1.55, 0], out: .01 }));
  g.add(tm(new THREE.CylinderGeometry(.3, .55, 1.0, 4), m, { pos: [0, 2.6, -.1], out: .01, rot: [0, Math.PI / 4, 0] })); g.add(tm(new THREE.BoxGeometry(.4, 1.4, .4), m, { pos: [0, 3.6, -.1], out: .01 }));
  g.add(bx(1.4, .12, .7, '#2A2420', 0, 1.04, 0)); const brasa = new THREE.Mesh(new THREE.BoxGeometry(1.3, .04, .6), new THREE.MeshBasicMaterial({ color: '#FF7A2A' })); brasa.position.set(0, 1.1, 0); g.add(brasa);
  for (let i = 0; i < 7; i++) g.add(cyl(.008, .008, .7, '#9EA6B0', -.6 + i * .2, 1.38, 0, { rot: [Math.PI / 2, 0, 0], seg: 4 }));
  const carnes = []; for (let i = 0; i < 4; i++) { const k = new THREE.Group(); k.add(cyl(.006, .006, .9, '#C8CCD2', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], seg: 4 })); for (let j = 0; j < 4; j++) { const c = rb(.1, .08, .1, j % 2 ? '#8A3A22' : '#A84A2A', 0, 0, -.25 + j * .16, { r: .03, out: .004 }); k.add(c); } k.position.set(-.45 + i * .3, 1.42, 0); g.add(k); carnes.push(k); }
  const L = new THREE.PointLight('#FF8A3A', 3, 3, 1.8); L.position.set(0, 1.4, .5); g.add(L); g.userData = { carnes, brasa, L }; return g;
}
export function cachorro(cor = '#C98A4A') { const g = new THREE.Group(); const b = rb(.5, .26, .24, cor, 0, .36, 0, { r: .1, out: .007 }); g.add(b); const cab = new THREE.Group(); cab.position.set(.3, .52, 0); g.add(cab); cab.add(sph(.15, cor, 0, 0, 0, { out: .007 })); cab.add(sph(.07, '#E8C89A', .12, -.04, 0, { out: .005 })); cab.add(sph(.025, INK, .19, -.02, 0)); for (const s of [-1, 1]) { cab.add(sph(.022, INK, .1, .05, s * .07)); const o = rb(.05, .14, .09, '#8A5A2A', -.03, .1, s * .12, { r: .02, out: .004 }); o.rotation.x = s * .4; cab.add(o); }
  for (const [x, z] of [[-.18, -.08], [-.18, .08], [.18, -.08], [.18, .08]]) g.add(cyl(.04, .04, .26, cor, x, .13, z, { seg: 8, out: .005 })); const rabo = new THREE.Group(); rabo.position.set(-.26, .45, 0); rabo.add(cyl(.025, .02, .2, cor, 0, .09, 0, { seg: 6, out: .004 })); g.add(rabo); const sb = blob(.4, .35); sb.position.y = .01; g.add(sb); g.userData = { cab, rabo }; return g; }
export function maca() { const g = new THREE.Group(); g.add(rb(.7, .14, 2.0, '#F4F6F8', 0, .85, 0, { r: .05, out: .008 })); g.add(rb(.72, .06, 2.0, '#9EA6B0', 0, .74, 0, { r: .02 })); for (const z of [-.85, .85]) for (const x of [-.3, .3]) { g.add(cyl(.025, .025, .7, '#9EA6B0', x, .38, z, { seg: 6 })); g.add(sph(.06, '#2A2A30', x, .05, z)); } return g; }
export function balde() { const g = new THREE.Group(); g.add(cyl(.18, .14, .3, '#2E8FD8', 0, .15, 0, { seg: 16, out: .006 })); const a = new THREE.Mesh(new THREE.TorusGeometry(.17, .01, 6, 20, Math.PI), toon('#C8CCD2')); a.position.y = .3; g.add(a); return g; }
export function vassoura() { const g = new THREE.Group(); g.add(cyl(.018, .018, 1.3, '#C98A4A', 0, .65, 0, { seg: 6, out: .004 })); g.add(rb(.32, .08, .08, '#E2443A', 0, .02, 0, { r: .02, out: .004 })); for (let i = 0; i < 8; i++) g.add(bx(.02, .12, .03, '#F2C230', -.13 + i * .037, -.07, 0)); return g; }
export function xicara(cor = '#F4F1EA') { const g = new THREE.Group(); g.add(cyl(.045, .035, .08, cor, 0, .04, 0, { seg: 14, out: .004 })); g.add(cyl(.038, .038, .005, '#5A3418', 0, .078, 0, { seg: 14 })); const a = new THREE.Mesh(new THREE.TorusGeometry(.022, .008, 6, 12), toon(cor)); a.position.set(.05, .045, 0); g.add(a); return g; }
export function garrafaTermica() { const g = new THREE.Group(); g.add(cyl(.07, .07, .3, '#C0392B', 0, .15, 0, { seg: 14, out: .005 })); g.add(cyl(.05, .07, .08, '#3A3A44', 0, .34, 0, { seg: 14 })); return g; }
export function jornal(manchete = 'GASOLINA SOBE DE NOVO') { return new THREE.Mesh(new THREE.PlaneGeometry(.42, .3), toonTex(ctex(420, 300, (x, W, H) => { x.fillStyle = '#EDE8DC'; x.fillRect(0, 0, W, H); txt(x, 'DIÁRIO DA CIDADE', W / 2, 26, 26, '#1B1420', 900, 'center', 'Fraunces'); x.fillStyle = '#1B1420'; x.fillRect(10, 44, W - 20, 3); txt(x, manchete, W / 2, 80, 30, '#B8322B', 900); x.fillStyle = '#9A958A'; for (let i = 0; i < 9; i++) x.fillRect(14 + (i % 3) * 136, 112 + Math.floor(i / 3) * 56, 124, 44); }), { side: THREE.DoubleSide })); }
export function radio() { const g = new THREE.Group(); g.add(rb(.32, .18, .12, '#8A5A36', 0, .09, 0, { r: .03, out: .005 })); g.add(cyl(.05, .05, .01, '#E8E2D6', -.08, .09, .062, { rot: [Math.PI / 2, 0, 0] })); g.add(bx(.12, .06, .01, '#F2C230', .07, .11, .062)); return g; }
export function prato(cor = '#F4F1EA', comida = true) { const g = new THREE.Group(); g.add(cyl(.12, .1, .02, cor, 0, .01, 0, { seg: 18, out: .004 })); if (comida) { g.add(sph(.05, '#F6F1DA', -.03, .03, 0, { seg: 8 })); g.add(sph(.04, '#8A4A22', .04, .03, .02, { seg: 8 })); g.add(sph(.03, '#5DAA4E', .02, .03, -.04, { seg: 8 })); } return g; }
