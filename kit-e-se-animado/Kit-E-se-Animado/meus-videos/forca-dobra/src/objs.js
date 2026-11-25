// Objetos deste vídeo: botijão, sacola de pão, pote de azeitona, ovos, bolo, carreta, moto, supino, carteira, etc.
import * as THREE from 'three';
import { tm, rb, bx, cyl, sph, ctex, toonTex, toon } from './motor/toon.js';
import { rng } from './motor/core.js';

/** Botijão de gás (13 kg): corpo cinza-azulado, alça em cima. Origem no chão. */
export function botijao() {
  const g = new THREE.Group();
  g.add(cyl(.17, .17, .36, '#5E7A99', 0, .25, 0, { seg: 24, out: .008 })); g.add(sph(.17, '#5E7A99', 0, .43, 0, { seg: 24 }).translateY(0)); g.children[1].scale.y = .45;
  g.add(cyl(.17, .15, .08, '#4E6A88', 0, .04, 0, { seg: 24, out: .006 }));
  g.add(cyl(.04, .05, .06, '#B9BEC6', 0, .53, 0, { seg: 12 }));
  const a = new THREE.Mesh(new THREE.TorusGeometry(.11, .018, 8, 24, Math.PI), toon('#4E6A88')); a.position.set(0, .52, 0); g.add(a);
  const et = new THREE.Mesh(new THREE.PlaneGeometry(.18, .12), toonTex(ctex(180, 120, (x) => { x.fillStyle = '#F2C230'; x.fillRect(0, 0, 180, 120); x.fillStyle = '#C0392B'; x.font = '900 40px Inter'; x.textAlign = 'center'; x.fillText('GÁS', 90, 60); x.font = '700 22px Inter'; x.fillText('13 kg', 90, 95); })));
  et.position.set(0, .26, .172); g.add(et);
  g.userData.alca = [0, .62, 0]; return g;
}
/** Sacola de pão (papel), com pãezinhos aparecendo. */
export function sacolaPao() {
  const g = new THREE.Group(); g.add(rb(.22, .26, .12, '#E2C08A', 0, .13, 0, { out: .006, r: .01 }));
  for (let i = 0; i < 3; i++) { const p = sph(.05, '#D9984A', -.06 + i * .06, .27, 0, { seg: 10 }); p.scale.set(1.3, .8, 1); g.add(p); }
  const pao = []; for (let i = 0; i < 3; i++) pao.push(g.children[i + 1]); g.userData.paes = pao; return g;
}
/** Pãozinho francês solto. */
export function pao() { const g = new THREE.Group(); const p = sph(.06, '#D9984A', 0, .045, 0, { seg: 12, out: .005 }); p.scale.set(1.5, .75, 1); g.add(p); g.add(bx(.08, .006, .02, '#B87A30', 0, .085, 0)); return g; }
/** Pote de azeitona com tampa (a tampa é g.userData.tampa). */
export function poteAzeitona() {
  const g = new THREE.Group(); const v = cyl(.07, .07, .16, '#7FA45A', 0, .08, 0, { seg: 18, out: .005 }); v.material = new THREE.MeshToonMaterial({ color: '#9CC46E', transparent: true, opacity: .85 }); g.add(v);
  for (let i = 0; i < 9; i++) g.add(sph(.022, '#4E6A2E', Math.cos(i) * .04, .03 + (i % 4) * .03, Math.sin(i * 2) * .04, { seg: 8 }));
  const t = cyl(.075, .075, .03, '#C0392B', 0, .175, 0, { seg: 18, out: .005 }); g.add(t); g.userData.tampa = t; return g;
}
/** Xícara de café (com café). */
export function xicara() { const g = new THREE.Group(); g.add(cyl(.05, .038, .08, '#F4F1EA', 0, .04, 0, { seg: 16, out: .005 })); const c = cyl(.044, .044, .004, '#5A3418', 0, .074, 0, { seg: 16 }); g.add(c); g.userData.cafe = c; const a = new THREE.Mesh(new THREE.TorusGeometry(.022, .007, 6, 14), toon('#F4F1EA')); a.position.set(.055, .045, 0); g.add(a); g.add(cyl(.075, .07, .01, '#F4F1EA', 0, .005, 0, { seg: 18 })); return g; }
/** Mochila escolar. */
export function mochila(cor = '#2E6FB8') { const g = new THREE.Group(); g.add(rb(.3, .38, .16, cor, 0, 0, 0, { out: .008, r: .05 })); g.add(rb(.22, .16, .06, new THREE.Color(cor).multiplyScalar(.8).getStyle(), 0, -.07, .1, { r: .03 })); return g; }
/** Escova de dente (inteira ou em duas metades). */
export function escova(cor = '#3EA6FF') { const g = new THREE.Group(); const a = bx(.012, .1, .01, cor, 0, .05, 0); const b = bx(.012, .08, .01, cor, 0, .14, 0); b.add(bx(.014, .03, .012, '#F4F1EA', 0, .03, .008)); g.add(a, b); g.userData.cabo = a; g.userData.ponta = b; return g; }
/** Celular com tela (draw(x,W,H)). Devolve { g, desenha(fn) }. */
export function celular(draw) {
  const g = new THREE.Group(); g.add(rb(.075, .15, .012, '#1B1A20', 0, 0, 0, { r: .008 }));
  const cv = document.createElement('canvas'); cv.width = 300; cv.height = 600; const x = cv.getContext('2d'); const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace;
  const t = new THREE.Mesh(new THREE.PlaneGeometry(.066, .132), new THREE.MeshBasicMaterial({ map: tx })); t.position.z = .007; g.add(t);
  g.desenha = (fn) => { fn(x, 300, 600); tx.needsUpdate = true; }; if (draw) g.desenha(draw); return g;
}
/** Torneira de parede (bica). */
export function torneira() { const g = new THREE.Group(); g.add(cyl(.02, .02, .08, '#C9CED6', 0, 0, .04, { rot: [Math.PI / 2, 0, 0], seg: 10, out: .004 })); g.add(cyl(.018, .018, .07, '#C9CED6', 0, -.03, .08, { seg: 10 })); g.add(bx(.06, .015, .015, '#C9CED6', 0, .03, .03)); return g; }
/** Cadeira de plástico branca (as quatro pernas abrem com g.abrir(u)). */
export function cadeiraPlastico(cor = '#F4F1EA') {
  const g = new THREE.Group(); const ass = rb(.44, .04, .42, cor, 0, .44, 0, { out: .006 }); g.add(ass); const enc = rb(.44, .4, .04, cor, 0, .68, -.2, { out: .006 }); enc.rotation.x = -.12; g.add(enc);
  const pernas = []; for (const [a, b] of [[-.19, -.18], [.19, -.18], [-.19, .18], [.19, .18]]) { const p = new THREE.Group(); p.position.set(a, .43, b); p.add(cyl(.02, .025, .44, cor, 0, -.22, 0, { seg: 8, out: .004 })); g.add(p); pernas.push([p, a, b]); }
  g.abrir = (u) => { ass.position.y = .44 - .38 * u; enc.position.y = .68 - .38 * u; enc.rotation.x = -.12 - .5 * u; pernas.forEach(([p, a, b]) => { p.position.y = .43 - .38 * u; p.rotation.set(Math.sign(b) * 1.4 * u, 0, -Math.sign(a) * 1.4 * u); }); };
  return g;
}
/** Ovo (escala 1 = tamanho real). */
export function ovo(cor = '#F2E6D0') { const m = sph(.022, cor, 0, .028, 0, { seg: 14, out: .003 }); m.scale.set(1, 1.3, 1); const g = new THREE.Group(); g.add(m); return g; }
/** Bandeja de papelão com 30 ovos (5x6). Devolve { g, ovos[] }. */
export function bandejaOvos(n = 30) {
  const g = new THREE.Group(); g.add(rb(.3, .04, .36, '#B8A47E', 0, .02, 0, { out: .004 })); const ovos = [];
  for (let i = 0; i < n; i++) { const o = ovo(); o.position.set(-.12 + (i % 5) * .06, .025, -.15 + Math.floor(i / 5) * .06); g.add(o); ovos.push(o); }
  g.userData.ovos = ovos; return g;
}
/** Gema/clara espirrada (mancha amarela no plano). */
export function gema(r = .05) { const g = new THREE.Group(); const cl = new THREE.Mesh(new THREE.CircleGeometry(r * 1.6, 18), new THREE.MeshToonMaterial({ color: '#F4F1E4', transparent: true, opacity: .85 })); cl.rotation.x = -Math.PI / 2; g.add(cl); const gm = sph(r * .55, '#F2B430', 0, .006, 0, { seg: 12 }); gm.scale.y = .4; g.add(gm); return g; }
/** Casca de ovo quebrada (pedacinhos). */
export function cascas(seed = 0) { const R = rng(seed + 5); const g = new THREE.Group(); for (let i = 0; i < 4; i++) { const m = new THREE.Mesh(new THREE.SphereGeometry(.02, 6, 4, 0, 2, 0, 1.2), toon('#F2E6D0')); m.position.set((R() - .5) * .08, .005, (R() - .5) * .08); m.rotation.set(R() * 3, R() * 3, R() * 3); g.add(m); } return g; }
/** Bolo de chocolate com vela "72". g.userData.chama, g.userData.cobertura. */
export function bolo() {
  const g = new THREE.Group(); g.add(cyl(.2, .2, .03, '#F4F1EA', 0, .015, 0, { seg: 28, out: .005 }));
  g.add(cyl(.16, .16, .12, '#5A3018', 0, .09, 0, { seg: 28, out: .006 })); const cob = cyl(.165, .165, .025, '#3A1E10', 0, .16, 0, { seg: 28 }); g.add(cob);
  for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; g.add(sph(.014, '#F2546E', Math.cos(a) * .14, .175, Math.sin(a) * .14, { seg: 6 })); }
  const vela = new THREE.Group(); vela.position.y = .17; g.add(vela);
  for (const [s, n] of [[-1, '7'], [1, '2']]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(.07, .09), toonTex(ctex(70, 90, (x) => { x.fillStyle = '#F2C230'; x.font = '900 86px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.strokeStyle = '#B88A1A'; x.lineWidth = 6; x.strokeText(n, 35, 48); x.fillText(n, 35, 48); }), { transparent: true, alphaTest: .4, side: THREE.DoubleSide })); p.position.set(s * .035, .055, 0); vela.add(p); }
  const ch = new THREE.Mesh(new THREE.ConeGeometry(.012, .035, 8), new THREE.MeshBasicMaterial({ color: '#FFB43A' })); ch.position.set(0, .13, 0); vela.add(ch); vela.add(bx(.003, .02, .003, '#2A2A2A', 0, .105, 0));
  g.userData.chama = ch; g.userData.cobertura = cob; return g;
}
/** Copo de vidro (com água). */
export function copo() { const g = new THREE.Group(); const v = new THREE.Mesh(new THREE.CylinderGeometry(.035, .03, .11, 16, 1, true), new THREE.MeshToonMaterial({ color: '#DDEFF7', transparent: true, opacity: .45, side: THREE.DoubleSide })); v.position.y = .055; g.add(v); const a = new THREE.Mesh(new THREE.CylinderGeometry(.032, .029, .07, 16), new THREE.MeshToonMaterial({ color: '#8FCBEA', transparent: true, opacity: .55 })); a.position.y = .04; g.add(a); g.userData.agua = a; return g; }
/** Mesa de concreto do pátio (duas metades: g.userData.A / B). */
export function mesaConcreto() {
  const g = new THREE.Group(); const A = new THREE.Group(), B = new THREE.Group(); g.add(A, B);
  A.add(rb(.6, .1, .8, '#A9A49C', -.3, .78, 0, { out: .008, r: .02 })); B.add(rb(.6, .1, .8, '#A9A49C', .3, .78, 0, { out: .008, r: .02 }));
  g.add(cyl(.14, .18, .74, '#9A958C', 0, .37, 0, { seg: 12, out: .008 }));
  for (const s of [-1, 1]) { const b = new THREE.Group(); b.add(rb(.9, .08, .3, '#A9A49C', 0, .44, 0, { out: .006 })); b.add(cyl(.08, .1, .42, '#9A958C', 0, .21, 0, { seg: 10 })); b.position.z = s * .75; g.add(b); }
  g.userData.A = A; g.userData.B = B; return g;
}
/** Carro popular (hatch) simples. */
export function carroPop(cor = '#E2443A') {
  const g = new THREE.Group(); g.add(rb(1.7, .55, 3.7, cor, 0, .5, 0, { out: .012, r: .12 })); g.add(rb(1.5, .5, 2.0, cor, 0, 1.0, -.25, { out: .01, r: .14 }));
  const vid = new THREE.MeshToonMaterial({ color: '#2A3A4E' }); for (const [w, h, x, y, z, ry] of [[1.38, .38, 0, 1.02, .76, 0], [1.38, .36, 0, 1.02, -1.26, Math.PI]]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), vid); p.position.set(x, y, z); p.rotation.y = ry; g.add(p); }
  for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(1.8, .36), vid); p.position.set(s * .76, 1.02, -.25); p.rotation.y = s * Math.PI / 2; g.add(p); }
  const rodas = []; for (const [x, z] of [[-.78, 1.15], [.78, 1.15], [-.78, -1.2], [.78, -1.2]]) { const r = cyl(.32, .32, .22, '#1E1E22', x, .32, z, { rot: [0, 0, Math.PI / 2], seg: 18, out: .006 }); g.add(r); rodas.push(r); g.add(cyl(.16, .16, .23, '#B9BEC6', x, .32, z, { rot: [0, 0, Math.PI / 2], seg: 12 })); }
  for (const s of [-1, 1]) { g.add(bx(.3, .14, .04, '#F4F1EA', s * .55, .62, 1.86)); g.add(bx(.26, .12, .04, '#E2443A', s * .58, .66, -1.86)); }
  g.add(bx(1.6, .14, .14, '#2A2A30', 0, .3, 1.88)); g.add(bx(1.6, .14, .14, '#2A2A30', 0, .3, -1.88));
  g.userData.rodas = rodas; return g;
}
/** Carreta (cavalo + baú). Frente para +z. g.userData.parachoque, cabine, porta, rodas, fumaca. */
export function carreta() {
  const g = new THREE.Group(); const cab = new THREE.Group(); g.add(cab);
  // cabine aberta na frente (para ver o motorista pelo para-brisa): teto, fundo, laterais, painel e colunas
  const dS = { side: THREE.DoubleSide };
  cab.add(rb(2.5, .14, 2.4, '#E8E4DC', 0, 3.04, 5.2, { out: .012, r: .05 })); cab.add(rb(2.5, 2.2, .14, '#E8E4DC', 0, 2.0, 4.07, { out: .012, r: .05 }));
  for (const s of [-1, 1]) { cab.add(rb(.12, 2.2, 2.4, '#E8E4DC', s * 1.19, 2.0, 5.2, { out: .012, r: .04 })); cab.add(bx(.14, 1.08, .14, '#E8E4DC', s * 1.16, 2.55, 6.36)); }
  cab.add(rb(2.5, 1.15, .14, '#E8E4DC', 0, 1.47, 6.33, { out: .012, r: .04 })); cab.add(bx(2.2, .16, .45, '#2A2A30', 0, 1.86, 6.08)); // painel
  cab.add(tm(new THREE.BoxGeometry(2.3, .1, 2.2), '#3A3A40', { pos: [0, .95, 5.2] })); cab.add(rb(.6, .5, .5, '#4A3A30', .55, 1.25, 5.3)); cab.add(rb(.6, .8, .14, '#4A3A30', .55, 1.75, 4.95)); // banco do motorista
  cab.add(rb(2.4, .9, 1.4, '#E8E4DC', 0, 1.25, 6.6, { out: .014, r: .1 }));
  cab.add(bx(2.52, .3, 2.42, '#2E6FB8', 0, 1.5, 5.2)); cab.add(bx(2.42, .2, 1.42, '#2E6FB8', 0, 1.0, 6.6));
  const vid = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.0), new THREE.MeshToonMaterial({ color: '#3A4E66' })); vid.position.set(0, 2.55, 6.42); vid.rotation.x = -.1; cab.add(vid);
  const grade = rb(1.6, .7, .08, '#9EA4AC', 0, 1.25, 7.32, { out: .008 }); cab.add(grade);
  const pc = new THREE.Group(); pc.position.set(0, .75, 7.42); cab.add(pc); pc.add(rb(2.5, .34, .22, '#C9CED6', 0, 0, 0, { out: .01, r: .05 })); // para-choque
  for (const s of [-1, 1]) { cab.add(bx(.36, .22, .06, '#FFF4C8', s * .9, 1.35, 7.32)); const ret = rb(.08, .5, .3, '#2A2A30', s * 1.35, 2.5, 6.2); cab.add(ret); }
  const porta = new THREE.Group(); porta.position.set(1.26, 1.6, 5.9); cab.add(porta); porta.add(bx(.04, 1.6, 1.2, '#E8E4DC', 0, .2, -.6)); porta.add(bx(.045, .1, .1, '#2A2A30', 0, .3, -1.05));
  const pv = new THREE.Mesh(new THREE.PlaneGeometry(1.0, .7), new THREE.MeshToonMaterial({ color: '#3A4E66', side: THREE.DoubleSide })); pv.position.set(.025, .75, -.6); pv.rotation.y = Math.PI / 2; porta.add(pv);
  cab.add(cyl(.09, .09, 1.6, '#8E949C', -1.1, 3.0, 4.3, { seg: 10 })); // escapamento
  const bau = rb(2.6, 3.0, 9.5, '#F2F0EA', 0, 2.5, -1.2, { out: .018, r: .06 }); g.add(bau);
  const lado = new THREE.Mesh(new THREE.PlaneGeometry(8, 1.4), toonTex(ctex(1024, 180, (x) => { x.fillStyle = '#F2F0EA'; x.fillRect(0, 0, 1024, 180); x.fillStyle = '#2E6FB8'; x.font = '900 120px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('TRANSPORTES SERRA', 512, 92); })));
  for (const s of [-1, 1]) { const l = lado.clone(); l.position.set(s * 1.31, 2.7, -1.2); l.rotation.y = s * Math.PI / 2; g.add(l); }
  const rodas = []; for (const z of [6.4, 4.4, 3.4, -3.6, -4.6, -5.6]) for (const s of [-1, 1]) { const r = cyl(.52, .52, .4, '#1E1E22', s * 1.1, .52, z, { rot: [0, 0, Math.PI / 2], seg: 18, out: .008 }); g.add(r); g.add(cyl(.25, .25, .41, '#B9BEC6', s * 1.1, .52, z, { rot: [0, 0, Math.PI / 2], seg: 10 })); rodas.push(r); }
  g.add(bx(2.2, .3, 13, '#2A2A30', 0, .9, -.2));
  g.userData = { parachoque: pc, cabine: cab, porta, rodas, grade, vidro: vid }; return g;
}
/** Moto simples. */
export function moto(cor = '#E2443A') { const g = new THREE.Group(); for (const z of [-.65, .65]) { const r = new THREE.Mesh(new THREE.TorusGeometry(.3, .08, 8, 20), toon('#1E1E22')); r.position.set(0, .32, z); r.rotation.y = Math.PI / 2; g.add(r); } g.add(rb(.3, .3, 1.0, cor, 0, .7, 0, { out: .008 })); g.add(rb(.28, .12, .6, '#2A2A30', 0, .88, -.2)); g.add(bx(.6, .04, .04, '#3A3A44', 0, 1.0, .5)); return g; }
/** Banco de supino com barra e anilhas. g.userData.barra (grupo da barra com anilhas), anilhas[]. */
export function supino() {
  const g = new THREE.Group(); g.add(rb(.34, .1, 1.3, '#2A2A30', 0, .45, 0, { out: .008 })); g.add(bx(.06, .4, .06, '#3A3A44', 0, .2, .5)); g.add(bx(.06, .4, .06, '#3A3A44', 0, .2, -.5));
  for (const s of [-1, 1]) { g.add(cyl(.03, .03, 1.15, '#3A3A44', s * .5, .58, -.55, { seg: 8 })); g.add(bx(.08, .04, .1, '#3A3A44', s * .5, 1.1, -.5)); }
  const barra = new THREE.Group(); barra.position.set(0, 1.15, -.55); g.add(barra); barra.add(cyl(.018, .018, 2.1, '#C9CED6', 0, 0, 0, { rot: [0, 0, Math.PI / 2], seg: 10, out: .004 }));
  const anilhas = []; for (const s of [-1, 1]) for (let i = 0; i < 6; i++) { const r = .24 - i * .02; const a = cyl(r, r, .045, ['#1E1E22', '#E2443A', '#2E6FB8', '#F2C230', '#1E1E22', '#5AA84E'][i], s * (.72 + i * .05), 0, 0, { rot: [0, 0, Math.PI / 2], seg: 22, out: .005 }); barra.add(a); anilhas.push(a); }
  g.userData.barra = barra; g.userData.anilhas = anilhas; return g;
}
/** Barra entortada em U (com t de 0 a 1): troca a barra reta por segmentos dobrados. */
export function dobrarBarra(barra, u) { barra.children[0].scale.y = 1; barra.children.forEach((m, i) => { if (i === 0) return; const s = Math.sign(m.position.x) || 1; const base = m.userData.x0 ?? (m.userData.x0 = m.position.x); m.position.x = base * (1 - .35 * u); m.position.y = -Math.abs(base) * .9 * u; m.rotation.z = Math.PI / 2 + s * 1.1 * u; }); barra.children[0].scale.set(1, 1 - .3 * u, 1); }
/** Anilha solta. */
export function anilha(cor = '#1E1E22', r = .22) { return cyl(r, r, .045, cor, 0, r, 0, { rot: [0, 0, Math.PI / 2], seg: 22, out: .005 }); }
/** Carteira escolar com cadeira. */
export function carteira() { const g = new THREE.Group(); g.add(rb(.6, .04, .45, '#C9A06A', 0, .72, 0, { out: .006 })); g.add(bx(.04, .7, .04, '#4A4E58', -.26, .35, -.18)); g.add(bx(.04, .7, .04, '#4A4E58', .26, .35, -.18)); g.add(bx(.04, .7, .04, '#4A4E58', -.26, .35, .18)); g.add(bx(.04, .7, .04, '#4A4E58', .26, .35, .18)); const t = g.children[0]; g.userData.tampo = t; return g; }
/** Poste de rua (pode entortar com g.entortar(u)). */
export function poste() { const g = new THREE.Group(); const p = new THREE.Group(); g.add(p); p.add(cyl(.08, .1, 4.2, '#8E949C', 0, 2.1, 0, { seg: 10, out: .006 })); p.add(bx(.9, .06, .06, '#8E949C', .45, 4.1, 0)); p.add(rb(.3, .1, .16, '#5A6270', .85, 4.05, 0)); g.entortar = (u) => { p.rotation.z = -u * .45; }; return g; }
/** Rachadura em estrela no chão (textura). */
export function rachaduraTex(seed = 1, cor = '#2A2420') {
  return ctex(512, 512, (x) => { x.clearRect(0, 0, 512, 512); const R = rng(seed); x.strokeStyle = cor; x.lineCap = 'round';
    for (let i = 0; i < 14; i++) { let a = i / 14 * 6.283 + R() * .3, px = 256, py = 256, w = 9; x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 9; k++) { a += (R() - .5) * .6; const l = 14 + R() * 22; px += Math.cos(a) * l; py += Math.sin(a) * l; x.lineWidth = w; x.lineTo(px, py); w *= .8; } x.stroke();
      if (R() > .5) { x.lineWidth = 2; x.beginPath(); x.moveTo(256 + Math.cos(a) * 80, 256 + Math.sin(a) * 80); x.lineTo(256 + Math.cos(a + .5) * 140, 256 + Math.sin(a + .5) * 140); x.stroke(); } }
    x.fillStyle = cor; x.beginPath(); x.arc(256, 256, 18, 0, 7); x.fill(); });
}
/** Decalque de rachadura (plano) que cresce com g.crescer(u). */
export function rachadura(tam = 1.5, seed = 1, cor) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(tam, tam), new THREE.MeshBasicMaterial({ map: rachaduraTex(seed, cor), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
  m.crescer = (u) => { m.visible = u > .01; m.scale.setScalar(Math.max(.01, u)); m.material.opacity = Math.min(1, u * 3); }; return m;
}
/** Marca de mão afundada (decalque). */
export function marcaMao() { return new THREE.Mesh(new THREE.PlaneGeometry(.2, .24), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, map: ctex(200, 240, (x) => { x.fillStyle = '#3A2414AA'; x.strokeStyle = '#2A1808'; x.lineWidth = 4; x.beginPath(); x.ellipse(100, 150, 52, 62, 0, 0, 7); x.fill(); x.stroke(); for (let i = 0; i < 4; i++) { x.beginPath(); x.ellipse(52 + i * 32, 62 - (i === 1 || i === 2 ? 22 : 6), 13, 36, (i - 1.5) * .12, 0, 7); x.fill(); x.stroke(); } x.beginPath(); x.ellipse(162, 150, 12, 30, -.9, 0, 7); x.fill(); x.stroke(); }) })); }
/** Ventilador de pé velho (hélice gira com g.girar(t)). */
export function ventiladorPe() { const g = new THREE.Group(); g.add(cyl(.16, .2, .04, '#5A6270', 0, .02, 0, { seg: 16, out: .005 })); g.add(cyl(.02, .02, 1.0, '#8E949C', 0, .52, 0, { seg: 8 })); const cab = new THREE.Group(); cab.position.set(0, 1.08, .04); g.add(cab); cab.add(sph(.07, '#5A6270', 0, 0, -.04, { seg: 12 })); const grade = new THREE.Mesh(new THREE.TorusGeometry(.2, .008, 6, 28), toon('#C9CED6')); cab.add(grade); const h = new THREE.Group(); cab.add(h); for (let i = 0; i < 3; i++) { const p = rb(.08, .18, .01, '#3EA6FF', 0, .1, 0); const s = new THREE.Group(); s.rotation.z = i * 2.094; s.add(p); h.add(s); } g.girar = (t) => { h.rotation.z = t * 14; cab.rotation.y = Math.sin(t * .4) * .6; }; return g; }
/** Lâmpada pendurada (fio + bulbo). bulbo.material.emissiveIntensity pisca. */
export function lampada(fio = .4) { const g = new THREE.Group(); g.add(bx(.008, fio, .008, '#2A2A30', 0, -fio / 2, 0)); const b = new THREE.Mesh(new THREE.SphereGeometry(.045, 14, 10), new THREE.MeshToonMaterial({ color: '#FFF2C8', emissive: '#FFE6A0', emissiveIntensity: 1 })); b.position.y = -fio - .03; g.add(b); g.userData.bulbo = b; return g; }
/** Sacola de feira (ráfia listrada) com verduras aparecendo. */
export function sacolaFeira() { const g = new THREE.Group(); const t = ctex(128, 128, (x) => { for (let i = 0; i < 8; i++) { x.fillStyle = ['#E2443A', '#F4F1EA', '#3E7CC8', '#F4F1EA'][i % 4]; x.fillRect(0, i * 16, 128, 16); } });
  g.add(tm(new THREE.BoxGeometry(.24, .22, .12), toonTex(t), { pos: [0, .11, 0], out: .005 })); for (const s of [-1, 1]) { const a = new THREE.Mesh(new THREE.TorusGeometry(.06, .008, 6, 12, Math.PI), toon('#C0392B')); a.position.set(s * .05, .22, 0); g.add(a); }
  g.add(cyl(.012, .012, .2, '#5AA84E', -.05, .28, 0, { seg: 6, rot: [0, 0, .3] })); g.add(sph(.04, '#5AA84E', -.08, .36, 0, { seg: 8 })); g.add(sph(.035, '#E2443A', .04, .24, .02, { seg: 8 })); g.add(sph(.03, '#F2C230', .07, .23, -.02, { seg: 8 })); return g; }
/** Isqueiro de fogão. */
export function isqueiro() { const g = new THREE.Group(); g.add(bx(.02, .14, .02, '#E2443A', 0, 0, 0)); g.add(bx(.012, .06, .012, '#C9CED6', 0, .1, 0)); return g; }
/** Abajur pequeno (lâmpada em g.userData.bulbo). */
export function abajur() { const g = new THREE.Group(); g.add(cyl(.06, .07, .03, '#5A4A3A', 0, .015, 0, { seg: 12 })); g.add(cyl(.01, .01, .25, '#5A4A3A', 0, .15, 0, { seg: 6 })); const cup = new THREE.Mesh(new THREE.CylinderGeometry(.06, .1, .12, 14, 1, true), new THREE.MeshToonMaterial({ color: '#F2E2B8', emissive: '#FFE2A0', emissiveIntensity: .8, side: THREE.DoubleSide })); cup.position.y = .3; g.add(cup); g.userData.bulbo = cup; return g; }
