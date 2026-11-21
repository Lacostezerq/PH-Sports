// Lugares públicos: Praça da Matriz (igreja, coreto, fonte, parquinho), escola, Santa Casa, rodoviária, posto e campo.
// Cada um ocupa uma quadra inteira (44 x 44 m), frente em +z local.
import * as THREE from 'three';
import { toon, tm, bx, cyl, sph, rb, piso, placa, caixaTex, D, pega } from './util.js';
import { parede, porta, janela, telhado, platibanda, forro, chao, tinta } from './construcao.js';
import { letreiroTex, repetir, calcada, ondas, grama, terra } from './texturas.js';
import * as M from './moveis.js';
import { balcao, cadeirasEspera, painelSenha, caixaRegistradora, geladeiraBebidas, cardapio, prateleira, vapor } from './lojas.js';
import { arvore, arbusto, canteiro } from './natureza.js';
import { toonTex, ctex } from '../base/toon.js';
import { rng } from '../base/core.js';

const put = (ctx, o, x, z, ry = 0, col = true, y = .02) => { o.position.set(x, y, z); o.rotation.y = ry; ctx.add(o); const pe = o.userData.pe; if (col && pe && pe[0]) { const q = Math.abs(Math.round(Math.sin(ry))) === 1; ctx.col(x, z, q ? pe[1] : pe[0], q ? pe[0] : pe[1], { h: 1.2 }); } return o; };
const chaoTex = (ctx, tex, x, z, w, d, tile = 1, y = .015) => { const t = tex.clone(); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(w / tile, d / tile); t.needsUpdate = true; ctx.add(piso(w, d, toonTex(t), x, y, z)); };

// ---------------- mobiliário urbano ----------------
export function bancoPraca(cor = '#2E7A5A') { const g = new THREE.Group(); g.userData.pe = [1.8, .7];
  for (const s of [-1, 1]) { g.add(bx(.08, .45, .55, '#3A3D44', s * .75, .225, 0)); g.add(bx(.08, .5, .06, '#3A3D44', s * .75, .7, -.26)); }
  for (let i = 0; i < 3; i++) g.add(rb(1.8, .05, .14, cor, 0, .47, -.18 + i * .17, { out: .008, r: .015 })); for (let i = 0; i < 2; i++) g.add(rb(1.8, .12, .04, cor, 0, .68 + i * .17, -.28, { out: .008, r: .015 })); return g; }
export function lixeira(cor = '#2E9C6A') { const g = new THREE.Group(); g.userData.pe = [.45, .45]; g.add(cyl(.2, .17, .75, cor, 0, .45, 0, { out: .01, seg: 14 })); g.add(cyl(.04, .04, .45, '#3A3D44', 0, .22, 0, { seg: 8 })); g.add(cyl(.21, .21, .04, '#3A3D44', 0, .84, 0, { seg: 14 })); return g; }
export function lampiao(C) { const g = new THREE.Group(); g.userData.pe = [.3, .3]; g.add(cyl(.07, .11, 3.6, '#2A2C30', 0, 1.8, 0, { out: .01, seg: 10 })); g.add(cyl(.18, .14, .2, '#2A2C30', 0, 3.65, 0, { seg: 10 }));
  const m = new THREE.MeshToonMaterial({ color: '#FFF6D8', emissive: '#FFD98A', emissiveIntensity: 0 }); C.acender(m, 2); g.add(tm(new THREE.CylinderGeometry(.2, .14, .5, 8), m, { pos: [0, 4.0, 0], out: .01 })); g.add(tm(new THREE.ConeGeometry(.3, .25, 8), '#2A2C30', { pos: [0, 4.38, 0], out: .01 })); C.postes.push([0, 4, 0]); g.userData.luz = true; return g; }
export function bebedouro() { const g = new THREE.Group(); g.userData.pe = [.4, .4]; g.add(rb(.35, 1.0, .35, '#C9CED6', 0, .5, 0, { out: .01 })); g.add(cyl(.15, .12, .1, '#E8E4DC', 0, 1.05, 0, { seg: 12 })); return g; }

// ---------------- PRAÇA DA MATRIZ + IGREJA ----------------
export function praca(ctx, nivel) {
  const C = ctx.cidade, Q = 22, perto = nivel === 'perto', R = rng(42);
  chaoTex(ctx, ondas(), 0, 0, 44, 44, 2);
  // canteiros de grama nos 4 cantos (a praça é cortada por caminhos em cruz)
  const gr = grama('#7CC05C');
  for (const [x, z] of [[-12.5, 12.5], [12.5, 12.5], [-12.5, -1], [12.5, -1]]) { const w = 14, d = z > 5 ? 14 : 8; ctx.add(bx(w + .3, .2, d + .3, '#C9C2B6', x, .1, z)); chaoTex(ctx, gr, x, z, w, d, 3, .205); }
  // árvores grandes e palmeiras
  const arvs = [[-15, 16, 'ipeRoxo'], [-9, 9, 'mangueira'], [15, 16, 'ipeAmarelo'], [9, 9, 'comum'], [-16, 7, 'quaresmeira'], [16, 7, 'ipeRoxo'], [-14, -1, 'comum'], [14, -1, 'mangueira'], [-9, 18, 'comum'], [9, 18, 'ipeRoxo']];
  for (const [x, z, t] of arvs) { const a = arvore(t, 1.2, x * 3 + z); a.position.set(x, .2, z); ctx.add(a); ctx.col(x, z, .7, .7, { h: 4 }); }
  for (const z of [-20, -16, -12, -8]) for (const s of [-1, 1]) { const p = arvore('palmeira', 1.25, z * s); p.position.set(s * 10.5, 0, z); ctx.add(p); ctx.col(s * 10.5, z, .5, .5, { h: 5 }); }
  for (const [x, z] of [[-12.5, 13], [12.5, 13]]) { const ct = canteiro(5, 2.2, x); ct.position.set(x, .2, z); ctx.add(ct); ctx.col(x, z, 5, 2.2, { h: .5 }); }
  // bancos ao longo dos caminhos
  for (const [x, z, ry] of [[-3, 6, Math.PI / 2], [3, 6, -Math.PI / 2], [-3, 18, Math.PI / 2], [3, 18, -Math.PI / 2], [-7, 4, Math.PI], [7, 4, Math.PI], [-7, 20.5, 0], [7, 20.5, 0], [-19, 4, Math.PI], [19, 4, Math.PI]]) {
    put(ctx, bancoPraca(), x, z, ry); }
  for (const [x, z] of [[-3, 3.5], [3, 3.5], [-3, 21], [3, 21], [-20, 4.2], [20, 4.2]]) put(ctx, lixeira(), x, z);
  for (const [x, z] of [[-3.2, 0], [3.2, 0], [-3.2, 10], [3.2, 10], [-3.2, 20], [3.2, 20], [-10, 4.2], [10, 4.2], [-20, 6], [20, 6]]) { const l = lampiao(C); const p = C.postes.pop(); put(ctx, l, x, z, 0, true, 0); const w = paraM(ctx, x, z); C.postes.push([w[0], 4.4, w[1]]); }
  // CORETO
  const cor = new THREE.Group(); cor.position.set(0, 0, 11); const rr = 3.6;
  cor.add(cyl(rr + .2, rr + .3, .9, '#E8E4DC', 0, .45, 0, { seg: 8, out: .014 })); cor.add(cyl(rr + .25, rr + .25, .06, '#C9C2B6', 0, .93, 0, { seg: 8 }));
  for (let i = 0; i < 3; i++) cor.add(bx(2, .3, .5, '#E8E4DC', 0, .15 + i * .3 - .0, rr + .9 - i * .45, { out: .01 }));
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2 + Math.PI / 8; cor.add(cyl(.1, .12, 3.0, '#F4F1EA', Math.cos(a) * rr, 2.4, Math.sin(a) * rr, { seg: 10, out: .012 }));
    if (i !== 1 && i !== 2) { const gp = bx(2 * rr * Math.sin(Math.PI / 8) - .2, .08, .06, '#F4F1EA', Math.cos(a + Math.PI / 8) * rr * .93, 1.8, Math.sin(a + Math.PI / 8) * rr * .93); gp.rotation.y = -(a + Math.PI / 8) + Math.PI / 2; cor.add(gp);
      for (let k = -3; k <= 3; k++) { const b = bx(.04, .8, .04, '#F4F1EA', Math.cos(a + Math.PI / 8) * rr * .93 + Math.cos(a + Math.PI / 8 + Math.PI / 2) * k * .35, 1.35, Math.sin(a + Math.PI / 8) * rr * .93 + Math.sin(a + Math.PI / 8 + Math.PI / 2) * k * .35); cor.add(b); } } }
  const tet = tm(new THREE.ConeGeometry(rr + .9, 2.2, 8), '#C84E4E', { pos: [0, 5.0, 0], rot: [0, Math.PI / 8, 0], out: .02 }); cor.add(tet); cor.add(cyl(.05, .05, .9, '#F2C230', 0, 6.5, 0, { seg: 6 })); cor.add(sph(.15, '#F2C230', 0, 7.0, 0));
  cor.add(cyl(rr + .3, rr + .3, .15, '#F4F1EA', 0, 3.9, 0, { seg: 8, out: .012 }));
  ctx.add(cor); ctx.col(0, 11, 6.5, 6.5, { h: .9, nome: 'coreto' });
  // FONTE com água viva
  const fo = new THREE.Group(); fo.position.set(0, 0, 1.5);
  fo.add(cyl(2.3, 2.4, .6, '#E8E4DC', 0, .3, 0, { seg: 24, out: .014 })); const ag = new THREE.Mesh(new THREE.CircleGeometry(2.1, 24), toonTex(repetir(C.tex.agua(), 2, 2))); ag.rotation.x = -Math.PI / 2; ag.position.y = .5; ag.userData.vivo = true; fo.add(ag);
  fo.add(cyl(.3, .4, 1.4, '#E8E4DC', 0, .9, 0, { seg: 12, out: .012 })); fo.add(cyl(.9, .5, .25, '#E8E4DC', 0, 1.65, 0, { seg: 16, out: .012 }));
  const jm = new THREE.MeshToonMaterial({ color: '#BFE6F7', transparent: true, opacity: .7, emissive: '#8FD3F2', emissiveIntensity: .2 });
  const jato = new THREE.Group(); jato.userData.vivo = true; fo.add(jato); const gotas = [];
  for (let i = 0; i < 14; i++) { const g2 = new THREE.Mesh(new THREE.SphereGeometry(.07, 6, 4), jm); jato.add(g2); gotas.push(g2); }
  jato.add(tm(new THREE.CylinderGeometry(.05, .08, .9, 8), jm, { pos: [0, 2.2, 0], shadow: false }));
  ctx.add(fo); ctx.col(0, 1.5, 4.8, 4.8, { h: .6, nome: 'fonte' });
  C.vivos.push((t) => { ag.material.map.offset.set(t * .03, t * .02); gotas.forEach((g2, i) => { const u = (t * .9 + i / 14) % 1, a = i / 14 * Math.PI * 2; g2.position.set(Math.cos(a) * u * .9, 2.6 + u * .5 - u * u * 1.7, Math.sin(a) * u * .9); }); });
  // PARQUINHO (balanço vivo)
  const pq = new THREE.Group(); pq.position.set(-14, .2, 12.5);
  chaoTex(ctx, terra(), -14, 12.5, 7, 5, 2, .21);
  const esc = new THREE.Group(); esc.add(bx(.06, 2, .06, '#E2443A', -.4, 1, -.5)); esc.add(bx(.06, 2, .06, '#E2443A', .4, 1, -.5)); esc.add(bx(.9, .06, .9, '#F2C230', 0, 1.6, -.5)); const rp = bx(.7, .05, 2.6, '#3E7CC8', 0, .85, .8); rp.rotation.x = .62; esc.add(rp); for (let i = 0; i < 5; i++) esc.add(bx(.8, .04, .04, '#E2443A', 0, .3 + i * .3, -1.0)); esc.position.set(-2, 0, 0); pq.add(esc);
  const bal = new THREE.Group(); bal.position.set(1.8, 0, 0); for (const s of [-1, 1]) { const p = bx(.08, 2.4, .08, '#2E9C6A', s * 1.3, 1.15, 0); p.rotation.z = s * .12; bal.add(p); } bal.add(bx(2.8, .08, .08, '#2E9C6A', 0, 2.35, 0));
  const assentos = []; for (const s of [-1, 1]) { const a = new THREE.Group(); a.position.set(s * .6, 2.35, 0); a.userData.vivo = true; a.add(bx(.02, 1.8, .02, '#9AA0A8', -.2, -.9, 0)); a.add(bx(.02, 1.8, .02, '#9AA0A8', .2, -.9, 0)); a.add(rb(.5, .05, .25, '#F2C230', 0, -1.8, 0, { out: .008 })); bal.add(a); assentos.push(a); }
  pq.add(bal); const gang = new THREE.Group(); gang.position.set(-.2, 0, 2); gang.add(bx(.2, .4, .2, '#F2C230', 0, .2, 0)); const tab = bx(3, .08, .25, '#E2443A', 0, .45, 0); gang.add(tab); pq.add(gang); C.vivos.push((t) => { assentos.forEach((a, i) => a.rotation.x = Math.sin(t * 2.1 + i * 1.3) * (i ? .35 : .15)); tab.rotation.z = Math.sin(t * 1.4) * .18; });
  ctx.add(pq); ctx.col(-16, 12.5, 2, 3); ctx.col(-12.2, 12.5, 3, .6);
  // BANCA DE JORNAL e PIPOQUEIRO
  const banca = new THREE.Group(); banca.position.set(17, .2, 19.5); banca.add(rb(3.2, 2.4, 2.2, '#2E6FB8', 0, 1.2, 0, { out: .014 })); banca.add(bx(3.5, .1, 2.6, '#1F4E86', 0, 2.45, 0)); const bt = new THREE.Mesh(new THREE.PlaneGeometry(2.8, .5), toonTex(letreiroTex('BANCA DO JOÃO', { fundo: '#F2C230', cor: '#1F4E86' }))); bt.position.set(0, 2.1, 1.11); banca.add(bt);
  for (let i = 0; i < 12; i++) banca.add(bx(.22, .3, .02, pega(R, ['#E2443A', '#F2C230', '#3E7CC8', '#5AA84E', '#F2546E', '#F4F1EA']), -1.3 + (i % 6) * .5, 1.0 + Math.floor(i / 6) * .42, 1.115));
  banca.add(bx(1.0, .9, .02, '#2A2A30', 0, .55, 1.111)); ctx.add(banca); ctx.col(17, 19.5, 3.2, 2.2, { h: 2.4 });
  const pip = new THREE.Group(); pip.position.set(5.5, .02, 20.5); pip.userData.pe = [1.4, .8]; pip.add(rb(1.2, .9, .7, '#E2443A', 0, .75, 0, { out: .012 })); const vid = new THREE.MeshToonMaterial({ color: '#FFF6D8', transparent: true, opacity: .5 }); pip.add(tm(new THREE.BoxGeometry(1.0, .6, .6), vid, { pos: [0, 1.5, 0] }));
  for (let i = 0; i < 24; i++) pip.add(sph(.05, '#FFF6D8', (R() - .5) * .8, 1.25 + R() * .25, (R() - .5) * .4, { seg: 6, shadow: false }));
  pip.add(bx(1.3, .06, .8, '#F2C230', 0, 1.85, 0)); for (const s of [-1, 1]) pip.add(cyl(.25, .25, .05, '#2A2A30', s * .5, .25, .37, { rot: [Math.PI / 2, 0, 0] })); const pt = new THREE.Mesh(new THREE.PlaneGeometry(1.1, .3), toonTex(letreiroTex('PIPOCA', { fundo: '#F2C230', cor: '#E2443A' }))); pt.position.set(0, 1.0, .36); pip.add(pt); put(ctx, pip, 5.5, 20.5, 0);
  put(ctx, bebedouro(), -5, 21);
  // pombos (vivos) perto da fonte
  const pombos = []; for (let i = 0; i < 8; i++) { const p = new THREE.Group(); p.userData.vivo = true; p.add(sph(.12, '#8D94A8', 0, .12, 0, { seg: 8, out: .008 })); p.add(sph(.07, '#6E7488', .1, .22, 0, { seg: 8 })); p.add(tm(new THREE.ConeGeometry(.025, .06, 6), '#F08A2C', { pos: [.17, .21, 0], rot: [0, 0, -Math.PI / 2] })); p.children[0].scale.set(1.3, .9, .9); ctx.add(p); pombos.push(p); }
  C.vivos.push((t) => pombos.forEach((p, i) => { const a = i * 1.7 + Math.floor(t / 3 + i) * .9, r = 3.4 + (i % 3) * .5; const bic = Math.max(0, Math.sin(t * 9 + i * 2)) * .06; p.position.set(Math.cos(a) * r + Math.sin(t * .3 + i) * .3, .02 + bic * .3, 1.5 + Math.sin(a) * r); p.rotation.y = -a + Math.sin(t * 2 + i) * .8; p.rotation.z = -bic * 2; }));
  for (const [x, z, ry] of [[-3 + .05, 6.4, Math.PI / 2], [3 - .05, 18, -Math.PI / 2], [-7.3, 20.6, 0], [7, 4.05, Math.PI]]) ctx.figurante(x, z, ry, { sentado: true, assento: .5 });
  ctx.figurante(17, 21.6, Math.PI); ctx.figurante(4.3, 20.5, Math.PI / 2);
  // ---------- IGREJA MATRIZ ----------
  igreja(ctx, nivel);
  ctx.ponto('coreto', 0, 15.5, 0); ctx.ponto('fonte', 0, 5, 0); ctx.ponto('banco1', -2.2, 6, Math.PI / 2); ctx.ponto('banca', 17, 21.5, 0); ctx.ponto('parquinho', -14, 15.5, 0); ctx.ponto('igrejaFrente', 0, -2, Math.PI); ctx.ponto('centro', 0, 6.5, 0);
}
const paraM = (ctx, x, z) => { const L = ctx.L; return [L.x + x, L.z + z]; }; // praça tem frente 's' (sem giro)

function igreja(ctx, nivel) {
  const C = ctx.cidade, perto = nivel === 'perto', W = 12, z0 = -21, z1 = -5, H = 8.5, ext = '#F4EEDC', int = perto ? '#FBF6EA' : null;
  // escadaria
  for (let i = 0; i < 4; i++) ctx.add(bx(7, .15, .5, '#E8E4DC', 0, .075 + i * .15, z1 + 1.7 - i * .45, { out: .008 }));
  // paredes da nave
  const vit = []; for (let i = 0; i < 4; i++) vit.push({ a: 2.5 + i * 3.4, b: 3.7 + i * 3.4, y0: 2.6, y1: 6.2 });
  parede(ctx, -W / 2, z0, -W / 2, z1, { h: H, t: .4, corA: ext, corB: int, vaos: vit }); parede(ctx, W / 2, z0, W / 2, z1, { h: H, t: .4, corA: int, corB: ext, vaos: vit });
  parede(ctx, -W / 2, z0, W / 2, z0, { h: H, t: .4, corA: ext, corB: int });
  parede(ctx, -W / 2, z1, W / 2, z1, { h: H, t: .4, corA: int, corB: ext, vaos: [{ a: W / 2 - 1.3, b: W / 2 + 1.3, y0: 0, y1: 3.8 }] });
  const vitral = (seed) => ctex(128, 256, (x) => { const R = rng(seed); x.fillStyle = '#2A2A30'; x.fillRect(0, 0, 128, 256); for (let i = 0; i < 14; i++) for (let k = 0; k < 6; k++) { x.fillStyle = pega(R, ['#E2443A', '#F2C230', '#3E7CC8', '#5AA84E', '#8E6CC4', '#F08A2C']); x.fillRect(6 + k * 20, 6 + i * 18, 17, 15); } x.fillStyle = '#F4F1EA'; x.beginPath(); x.arc(64, 70, 26, 0, 7); x.fill(); });
  for (const s of [-1, 1]) for (const v of vit) { const z = z0 + (v.a + v.b) / 2; const vm = new THREE.MeshToonMaterial({ map: vitral(z * s * 7 | 0), emissive: '#FFFFFF', emissiveMap: vitral(z * s * 7 | 0), emissiveIntensity: .35, side: THREE.DoubleSide }); const p = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 3.6), vm); p.position.set(s * W / 2, 4.4, z); p.rotation.y = Math.PI / 2; ctx.add(p); ctx.add(bx(.5, .1, 1.4, '#E8E4DC', s * W / 2, 2.55, z)); }
  const rosa = new THREE.Mesh(new THREE.CircleGeometry(.85, 24), new THREE.MeshToonMaterial({ map: vitral(99), emissive: '#FFFFFF', emissiveMap: vitral(99), emissiveIntensity: .35, side: THREE.DoubleSide })); rosa.position.set(0, 5.8, z1 + .21); ctx.add(rosa); const rosa2 = rosa.clone(); rosa2.position.z = z1 - .21; ctx.add(rosa2); ctx.add(tm(new THREE.TorusGeometry(.88, .08, 8, 28), '#E8DCC0', { pos: [0, 5.8, z1 + .22] })); // rosácea (vitral redondo)
  porta(ctx, 'portaA', -.65, z1, true, 1.3, { t: .4, h: 3.8, dobra: -1, abre: -1, cor: '#7A3A20', aberta: .9, auto: false }); porta(ctx, 'portaB', .65, z1, true, 1.3, { t: .4, h: 3.8, dobra: 1, abre: -1, cor: '#7A3A20', aberta: .9, auto: false });
  ctx.add(cyl(1.3, 1.3, .4, ext, 0, 3.8, z1, { rot: [Math.PI / 2, 0, 0], seg: 20 })); // arco sobre a porta
  // telhado 2 águas + frontão + torre
  telhado(ctx, 0, (z0 + z1) / 2, W, z1 - z0, H, { cor: '#B8573A', duas: true, parede: ext, beiral: .5, sobe: 3.2 });
  const fs = new THREE.Shape(); fs.moveTo(-W / 2 - .3, 0); fs.lineTo(W / 2 + .3, 0); fs.lineTo(W / 2 + .3, 1.2); fs.quadraticCurveTo(W / 4, 1.6, 2, 3.0); fs.lineTo(-2, 3.0); fs.quadraticCurveTo(-W / 4, 1.6, -W / 2 - .3, 1.2); fs.lineTo(-W / 2 - .3, 0);
  ctx.add(tm(new THREE.ExtrudeGeometry(fs, { depth: .5, bevelEnabled: false }), tinta(ext), { pos: [0, H, z1 - .25], out: .016 }));
  for (const s of [-1, 1]) { ctx.add(bx(.7, H + 1.2, .7, '#E8DCC0', s * (W / 2 + .05), (H + 1.2) / 2, z1 + .1, { out: .014 })); ctx.add(sph(.4, '#E8DCC0', s * (W / 2 + .05), H + 1.6, z1 + .1, { out: .012 })); ctx.col(s * (W / 2 + .05), z1 + .1, .7, .7, { h: H }); }
  const T = new THREE.Group(); T.position.set(0, H + 3.0, z1 - .2);
  T.add(caixaTex(3.4, 5, 3.4, tinta(ext), 0, 2.5, 0, 1, { out: .016 })); T.add(bx(3.8, .3, 3.8, '#E8DCC0', 0, 5.1, 0, { out: .012 }));
  for (const [x, z, ry] of [[0, 1.71, 0], [0, -1.71, 0], [1.71, 0, Math.PI / 2], [-1.71, 0, Math.PI / 2]]) { const ab = bx(ry ? .05 : 1.4, 2.0, ry ? 1.4 : .05, '#2A2A30', x, 3.6, z); T.add(ab); }
  const sino = tm(new THREE.CylinderGeometry(.25, .55, .8, 16, 1, true), '#C9A23A', { out: .012, pos: [0, 3.5, 0] }); sino.material = sino.material.clone(); sino.material.side = THREE.DoubleSide; const sg = new THREE.Group(); sg.position.set(0, 4.2, 0); sino.position.set(0, -.6, 0); sg.add(sino); sg.userData.vivo = true; T.add(sg);
  C.vivos.push((t) => { const h = C.h || 12; const bate = (h % 1) < .02 ? 1 : 0; sg.rotation.z = Math.sin(t * 5) * .4 * bate; });
  T.add(tm(new THREE.ConeGeometry(2.7, 4.2, 4), '#B8573A', { pos: [0, 7.35, 0], rot: [0, Math.PI / 4, 0], out: .016 }));
  const cruz = new THREE.Group(); cruz.position.set(0, 10.2, 0); cruz.add(bx(.12, 1.4, .12, '#C9A23A')); cruz.add(bx(.8, .12, .12, '#C9A23A', 0, .25, 0)); T.add(cruz);
  // relógio da torre (marca a hora da cidade)
  const rel = M.relogio(C, .85); rel.position.set(0, 1.6, 1.73); T.add(rel);
  ctx.add(T);
  // interior
  if (perto) {
    chao(ctx, 0, (z0 + z1) / 2, W - .4, z1 - z0 - .4, toonTex(C.tex.piso('xadrez', '#F4F1EA', '#B5603E')), .02); forro(ctx, 0, (z0 + z1) / 2, W - .4, z1 - z0 - .4, H - .02, '#F4EEDC');
    chaoTex(ctx, C.tex.piso('ceramica', '#B83A3A', '#A03030'), 0, (z0 + z1) / 2 + 1, 1.6, z1 - z0 - 4, 1, .03);
    for (let r = 0; r < 7; r++) for (const s of [-1, 1]) { const b = new THREE.Group(); b.userData.pe = [3.6, .7]; b.add(rb(3.6, .08, .45, '#8E5A3A', 0, .46, 0, { out: .01 })); b.add(rb(3.6, .5, .06, '#8E5A3A', 0, .82, -.22, { out: .01 })); for (const k of [-1, 0, 1]) b.add(bx(.06, .46, .45, '#7A4A2E', k * 1.75, .23, 0)); b.add(bx(3.5, .06, .2, '#7A4A2E', 0, .2, .3)); put(ctx, b, s * 2.9, z1 - 3.5 - r * 1.35, 0); }
    for (const [s, r, d] of [[-1, 1, -.8], [1, 2, .6], [-1, 4, .3], [1, 5, -1]]) ctx.figurante(s * 2.9 + d, z1 - 3.5 - r * 1.35 + .02, Math.PI, { sentado: true, assento: .5 });
    // altar
    ctx.add(bx(W - .4, .45, 3.2, '#E8E4DC', 0, .225, z0 + 1.8, { out: .01 })); ctx.col(0, z0 + 1.8, W - .4, 3.2, { h: .45 }); for (let i = 0; i < 2; i++) ctx.add(bx(3, .15, .4, '#E8E4DC', 0, .075 + i * .15, z0 + 3.6 - i * .3));
    ctx.add(rb(2.4, .95, .9, '#F4F1EA', 0, .45 + .48, z0 + 2, { out: .012 })); ctx.add(bx(2.5, .02, .95, '#C9A23A', 0, 1.42, z0 + 2)); for (const s of [-1, 1]) { ctx.add(cyl(.05, .07, .5, '#C9A23A', s * .9, 1.68, z0 + 2, { seg: 8 })); const vel = new THREE.MeshToonMaterial({ color: '#FFF6D8', emissive: '#FFD98A', emissiveIntensity: .6 }); ctx.add(tm(new THREE.SphereGeometry(.04, 8, 6), vel, { pos: [s * .9, 1.98, z0 + 2] })); }
    const cg = new THREE.Group(); cg.position.set(0, 4.2, z0 + .3); cg.add(bx(.25, 3.2, .15, '#7A4A2E', 0, 0, 0, { out: .012 })); cg.add(bx(1.7, .25, .15, '#7A4A2E', 0, .8, 0, { out: .012 })); ctx.add(cg);
    for (const s of [-1, 1]) { const im = new THREE.Group(); im.position.set(s * 4, .45, z0 + .8); im.add(cyl(.3, .35, 1.0, '#E8E4DC', 0, .5, 0, { out: .01 })); im.add(rb(.4, 1.0, .3, s > 0 ? '#3E7CC8' : '#8E5A3A', 0, 1.5, 0, { out: .01, r: .12 })); im.add(sph(.15, '#E8B48C', 0, 2.15, 0, { out: .01 })); ctx.add(im); }
    for (let i = 0; i < 3; i++) { const lu = new THREE.Group(); lu.position.set(0, H - .02, z0 + 4 + i * 4.5); lu.add(cyl(.01, .01, 1.8, '#2A2A30', 0, -.9, 0, { seg: 4 })); lu.add(cyl(.5, .3, .25, '#C9A23A', 0, -1.9, 0, { out: .01, seg: 12 }));
      const vl = new THREE.MeshToonMaterial({ color: '#FFF6D8', emissive: '#FFD98A', emissiveIntensity: .5 }); for (let k = 0; k < 6; k++) { const a = k / 6 * Math.PI * 2; lu.add(tm(new THREE.SphereGeometry(.06, 8, 6), vl, { pos: [Math.cos(a) * .45, -1.72, Math.sin(a) * .45] })); } ctx.add(lu); }
  } else ctx.add(bx(W - .8, H - .3, z1 - z0 - .8, '#3A3540', 0, H / 2, (z0 + z1) / 2, { shadow: false }));
  ctx.ponto('igrejaDentro', 0, z1 - 1.5, Math.PI); ctx.ponto('altar', 0, z0 + 4.5, 0);
}

// ---------------- ESCOLA ----------------
export function escola(ctx, nivel) {
  const C = ctx.cidade, perto = nivel === 'perto', R = rng(7), ext = '#F2E2B4', faixa = '#2E9C6A';
  chaoTex(ctx, calcada('#D6D0C4', '#CCC5B8'), 0, 0, 44, 44, 1);
  // muro com portão e letreiro
  for (const [x, z, w, d] of [[-21.9, 0, .2, 44], [21.9, 0, .2, 44], [0, -21.9, 44, .2], [-12.5, 21.9, 19, .2], [12.5, 21.9, 19, .2]]) { ctx.add(caixaTex(w, 2.2, d, tinta(ext), x, 1.1, z, 1, { out: .012 })); ctx.add(bx(w + .02, .25, d + .02, faixa, x, .2, z, { shadow: false })); ctx.col(x, z, w, d, { h: 2.2 }); }
  for (const s of [-1, 1]) { ctx.add(bx(.5, 3.6, .5, faixa, s * 3.2, 1.8, 21.9, { out: .012 })); ctx.col(s * 3.2, 21.9, .5, .5); }
  ctx.add(bx(7, .9, .3, faixa, 0, 4.0, 21.9, { out: .012 })); ctx.add(placa(6.6, .7, toonTex(letreiroTex('E.E. PROF. ANTÔNIO SERRA', { fundo: faixa, w: 1024, h: 110 })), 0, 4.0, 22.06));
  const pt = (s) => { const g = new THREE.Group(); g.userData.vivo = true; g.position.set(s * 2.95, 0, 21.9); const f = new THREE.Group(); g.add(f); for (let i = 0; i <= 8; i++) f.add(bx(.04, 2, .04, '#2A2C30', -s * i * .35, 1.05, 0)); f.add(bx(2.8, .06, .06, '#2A2C30', -s * 1.4, 2.0, 0)); f.add(bx(2.8, .06, .06, '#2A2C30', -s * 1.4, .1, 0)); ctx.add(g); return g; };
  const pa = pt(-1), pb = pt(1); const nome = (ctx.L.nome ? ctx.L.nome + '.' : '') + 'portao';
  C.portas[nome] = { nome, aberta: 1, auto: false, abrir(v) { this.aberta = v; pa.rotation.y = -v * 1.4; pb.rotation.y = v * 1.4; } }; C.portas[nome].abrir(1);
  // prédio principal (2 andares) no fundo: salas de aula com corredor aberto na frente
  const z0 = -20.5, z1 = -11, x0 = -20, x1 = 20, H = 3.4;
  for (let and = 0; and < 2; and++) { const y = and * (H + .2), intC = perto && and === 0 ? '#F7F4EA' : null;
    parede(ctx, x0, z0, x1, z0, { y, h: H, t: .25, corA: ext, corB: intC, semCol: and > 0, vaos: [0, 1, 2, 3].map(i => ({ a: i * 10 + 2.5, b: i * 10 + 7.5, y0: 1.2, y1: 2.6 })) });
    parede(ctx, x0, z0, x0, z1, { y, h: H, t: .25, corA: ext, corB: intC, semCol: and > 0 }); parede(ctx, x1, z0, x1, z1, { y, h: H, t: .25, corA: intC, corB: ext, semCol: and > 0 });
    const vf = []; for (let i = 0; i < 4; i++) vf.push({ a: i * 10 + 1, b: i * 10 + 2, y0: 0, y1: 2.2 }, { a: i * 10 + 3.5, b: i * 10 + 8.5, y0: 1.0, y1: 2.6 });
    parede(ctx, x0, z1, x1, z1, { y, h: H, t: .25, corA: intC, corB: ext, semCol: and > 0, vaos: vf });
    for (let i = 0; i < 4; i++) { janela(ctx, x0 + i * 10 + 6, z1, true, 5, y + 1.0, y + 2.6, { t: .25, fora: 1, cortina: false, seed: i + and * 4, grade: '#2E9C6A' }); janela(ctx, x0 + i * 10 + 5, z0, true, 5, y + 1.2, y + 2.6, { t: .25, fora: -1, cortina: false, seed: i + 9 + and * 4, grade: '#2E9C6A' });
      if (and === 0 && perto) porta(ctx, 'sala' + (i + 1), x0 + i * 10 + 1.5, z1, true, 1.0, { t: .25, dobra: -1, abre: -1, cor: '#2E9C6A' }); else ctx.add(bx(1.0, 2.2, .08, '#2E9C6A', x0 + i * 10 + 1.5, y + 1.1, z1 + .06));
      if (i > 0) parede(ctx, x0 + i * 10, z0, x0 + i * 10, z1, { y, h: H, t: .15, corA: intC, corB: intC, semCol: and > 0 }); }
    ctx.add(bx(x1 - x0 + .4, .2, z1 - z0 + 3.4, '#E8E4DC', 0, y + H + .1, (z0 + z1) / 2 + 1.5)); // laje + marquise do corredor
    for (let i = 0; i <= 8; i++) { ctx.add(cyl(.15, .15, H, faixa, x0 + i * 5, y + H / 2, z1 + 2.8, { seg: 10, out: .012 })); if (and === 0) ctx.col(x0 + i * 5, z1 + 2.8, .3, .3, { h: H }); }
    if (and === 1) { for (let i = 0; i <= 40; i++) ctx.add(bx(.04, 1, .04, '#2E9C6A', x0 + i, y + .5, z1 + 2.9, { shadow: false })); ctx.add(bx(40, .06, .08, '#2E9C6A', 0, y + 1.0, z1 + 2.9)); ctx.add(bx(9.6, 3.6, .2, '#3A3540', 0, y + 1.8, z1 - .3)); }
    if (!(perto && and === 0)) ctx.add(bx(x1 - x0 - .4, H - .2, z1 - z0 - .4, '#3A3540', 0, y + H / 2, (z0 + z1) / 2, { shadow: false }));
  }
  // escada externa para o 2º andar
  for (let i = 0; i < 17; i++) ctx.add(bx(1.4, .2, .3, '#E8E4DC', x1 + 1.0, .1 + i * .2, z1 + 2.5 - i * .28, { out: .006 })); ctx.col(x1 + 1.0, z1 - .2, 1.4, 5.5, { h: 3.6 });
  platibanda(ctx, 0, (z0 + z1) / 2 + 1.5, x1 - x0 + .4, z1 - z0 + 3.4, 2 * (H + .2), ext, { alt: .7 });
  ctx.add(bx(x1 - x0 + .5, .5, .1, faixa, 0, 2 * (H + .2) + .35, z1 + 3.25));
  if (perto) { for (let i = 0; i < 4; i++) salaDeAula(ctx, x0 + i * 10 + 5, (z0 + z1) / 2, 9.8, z1 - z0 - .3, H, i); chaoTex(ctx, C.tex.piso('ceramica', '#E8E0D2', '#D4CABA'), 0, z1 + 1.5, 40, 3, 1, .02); }
  // quadra coberta
  const qx = 7, qz = 7, qw = 26, qd = 15;
  chaoTex(ctx, ctex(512, 300, (x) => { x.fillStyle = '#3E8A5A'; x.fillRect(0, 0, 512, 300); x.fillStyle = '#C84E4E'; x.fillRect(30, 30, 452, 240); x.strokeStyle = '#FFFFFF'; x.lineWidth = 5; x.strokeRect(30, 30, 452, 240); x.beginPath(); x.moveTo(256, 30); x.lineTo(256, 270); x.stroke(); x.beginPath(); x.arc(256, 150, 40, 0, 7); x.stroke(); x.beginPath(); x.arc(30, 150, 70, -1.57, 1.57); x.stroke(); x.beginPath(); x.arc(482, 150, 70, 1.57, 4.71); x.stroke(); }), qx, qz, qw, qd, qw, .02);
  for (const s of [-1, 1]) { const tr = new THREE.Group(); tr.position.set(qx + s * (qw / 2 - 1.3), 0, qz); tr.add(bx(.1, 2, .1, '#F4F1EA', 0, 1, -1.5)); tr.add(bx(.1, 2, .1, '#F4F1EA', 0, 1, 1.5)); tr.add(bx(.1, .1, 3.1, '#F4F1EA', 0, 2, 0)); const rede = new THREE.Mesh(new THREE.PlaneGeometry(3, 2), new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: .25, side: THREE.DoubleSide })); rede.rotation.y = Math.PI / 2; rede.position.set(s * .8, 1, 0); tr.add(rede); ctx.add(tr); ctx.col(qx + s * (qw / 2 - 1.3), qz - 1.5, .2, .2); ctx.col(qx + s * (qw / 2 - 1.3), qz + 1.5, .2, .2);
    const tab = new THREE.Group(); tab.position.set(qx + s * (qw / 2 + .5), 0, qz); tab.add(cyl(.1, .1, 3.6, '#8D949C', 0, 1.8, 0, { seg: 8 })); tab.add(bx(.08, 1.1, 1.8, '#F4F1EA', -s * .5, 3.4, 0, { out: .01 })); tab.add(tm(new THREE.TorusGeometry(.23, .02, 6, 16), '#F08A2C', { pos: [-s * .8, 3.05, 0], rot: [Math.PI / 2, 0, 0] })); ctx.add(tab); ctx.col(qx + s * (qw / 2 + .5), qz, .2, .2); }
  for (const s of [-1, 1]) for (let i = 0; i < 5; i++) { const x = qx - qw / 2 - 1 + i * (qw + 2) / 4, z = qz + s * (qd / 2 + 1); ctx.add(cyl(.14, .14, 7, '#8D949C', x, 3.5, z, { seg: 8, out: .01 })); ctx.col(x, z, .3, .3, { h: 7 }); }
  const arco = new THREE.Mesh(new THREE.CylinderGeometry(qd / 2 + 1.5, qd / 2 + 1.5, qw + 3, 24, 1, true, Math.PI / 2 - Math.PI * .3, Math.PI * .6), toon('#C9CED6')); arco.material = arco.material.clone(); arco.material.side = THREE.DoubleSide; arco.rotation.z = Math.PI / 2; arco.rotation.y = 0; arco.position.set(qx, 7 - (qd / 2 + 1.5) * Math.cos(Math.PI * .3), qz); arco.rotation.x = 0; ctx.add(arco);
  const bola = sph(.12, '#F08A2C', qx + 3, .14, qz + 2, { out: .008 }); ctx.add(bola);
  // arquibancada pequena da quadra
  for (let i = 0; i < 3; i++) ctx.add(bx(qw - 4, .4, .7, '#E8E4DC', qx, .2 + i * .4, qz + qd / 2 + 2.6 + i * .7, { out: .008 })); ctx.col(qx, qz + qd / 2 + 3.3, qw - 4, 2.1, { h: 1.2 });
  // pátio com árvores, bancos, mastro com bandeira, cantina
  for (const [x, z, t] of [[-16, 3, 'ipeAmarelo'], [-16, 15, 'comum'], [-10, 9, 'mangueira']]) { const a = arvore(t, 1.2, x + z); a.position.set(x, 0, z); ctx.add(a); ctx.col(x, z, .7, .7, { h: 4 }); }
  for (const [x, z, ry] of [[-13, 3, 0], [-13, 15, Math.PI], [-19.5, 9, Math.PI / 2]]) put(ctx, bancoPraca('#2E9C6A'), x, z, ry);
  const mas = cyl(.06, .07, 9, '#C9CED6', -6, 4.5, 18, { seg: 8 }); ctx.add(mas); ctx.col(-6, 18, .2, .2);
  const geo = new THREE.PlaneGeometry(1.6, 1.1, 12, 1); const tex = ctex(160, 110, (x) => { x.fillStyle = '#2E9C4A'; x.fillRect(0, 0, 160, 110); x.fillStyle = '#F2C230'; x.beginPath(); x.moveTo(80, 10); x.lineTo(150, 55); x.lineTo(80, 100); x.lineTo(10, 55); x.fill(); x.fillStyle = '#2E6FB8'; x.beginPath(); x.arc(80, 55, 24, 0, 7); x.fill(); });
  const band = new THREE.Mesh(geo, new THREE.MeshToonMaterial({ map: tex, side: THREE.DoubleSide })); band.position.set(-6 + .82, 8.4, 18); band.userData.vivo = true; ctx.add(band); const base = geo.attributes.position.array.slice();
  C.vivos.push((t) => { const p = geo.attributes.position; for (let k = 0; k < p.count; k++) { const u = (base[k * 3] + .8) / 1.6; p.setZ(k, Math.sin(t * 4 + u * 5) * .12 * u); } p.needsUpdate = true; geo.computeVertexNormals(); });
  const cant = new THREE.Group(); cant.position.set(-15, 0, -4); cant.add(caixaTex(10, 3.2, 6, tinta(ext), 0, 1.6, 0, 1, { out: .014 })); cant.add(bx(11, .2, 7.5, '#E8E4DC', 0, 3.3, .6)); cant.add(placa(4, .6, toonTex(letreiroTex('CANTINA', { fundo: faixa })), 0, 2.7, 3.02)); cant.add(bx(5, .9, .1, '#2A2A30', 1, 1.6, 3.01)); cant.add(bx(5.4, .1, .6, '#F4F1EA', 1, 1.1, 3.25));
  ctx.add(cant); ctx.col(-15, -4, 10, 6, { h: 3.2 });   for (let i = 0; i < 2; i++) put(ctx, M.mesaJantar(2.2, .8, '#F4F1EA', 6, '#2E9C6A'), -17 + i * 5, 0.8, 0);
  ctx.ponto('portao', 0, 24, Math.PI); ctx.ponto('patio', -8, 10, 0); ctx.ponto('quadra', qx, qz, 0); ctx.ponto('corredor', -10, z1 + 1.5, Math.PI / 2); ctx.ponto('sala1', -18.5, -12.2, 0); ctx.ponto('sala2', -8.5, -12.2, 0);
}
/** Sala de aula completa: carteiras, mesa da professora, lousa com matéria, cartazes, armário, ventilador. */
function salaDeAula(ctx, cx, cz, w, d, H, i) {
  const C = ctx.cidade, R = rng(i * 13 + 1);
  chao(ctx, cx, cz, w - .2, d - .1, toonTex(C.tex.piso('granilite', '#E4E0D4', '#9AA0A8')), .02); forro(ctx, cx, cz, w - .2, d - .1, H - .02);
  const materia = [['MATEMÁTICA', '2 + 3 = 5', 'x² + 2x = 0'], ['PORTUGUÊS', 'Substantivo', 'Verbo • Adjetivo'], ['HISTÓRIA', 'Brasil Colônia', '1500 - 1822'], ['CIÊNCIAS', 'O ciclo da água', 'Evaporação']][i % 4];
  const lousa = new THREE.Mesh(new THREE.PlaneGeometry(4, 1.3), toonTex(ctex(512, 166, (x) => { x.fillStyle = '#2E5A44'; x.fillRect(0, 0, 512, 166); x.fillStyle = '#F4F1EA'; x.font = '700 30px Caveat, cursive'; x.fillText(materia[0], 20, 40); x.font = '700 26px Caveat, cursive'; x.fillText(materia[1], 40, 90); x.fillText(materia[2], 40, 130); x.fillText('Data: hoje', 360, 40); })));
  lousa.position.set(cx - w / 2 + .165, 1.6, cz); lousa.rotation.y = Math.PI / 2; ctx.add(lousa); ctx.add(bx(.06, 1.42, 4.12, '#9A6236', cx - w / 2 + .12, 1.6, cz)); ctx.add(bx(.12, .04, 4, '#9A6236', cx - w / 2 + .18, .92, cz));
  const mp = M.escrivaninha(1.2, '#9A6236', false); mp.position.set(cx - w / 2 + 1.5, .02, cz - 1.5); mp.rotation.y = Math.PI / 2; ctx.add(mp); ctx.col(cx - w / 2 + 1.5, cz - 1.5, .6, 1.2);
  const cp = M.cadeira('#9A6236'); cp.position.set(cx - w / 2 + .85, .02, cz - 1.5); cp.rotation.y = Math.PI / 2; ctx.add(cp);
  for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) { const x = cx - w / 2 + 3.3 + r * 1.45, z = cz - 2.7 + k * 1.75; const cr = new THREE.Group(); cr.position.set(x, .02, z); cr.rotation.y = Math.PI / 2; if (i === 0 && (r + k) % 2 === 0) ctx.figurante(x + .35, z, -Math.PI / 2, { sentado: true, assento: .48 });
    cr.add(rb(.6, .04, .45, '#D9B07A', 0, .72, -.05, { out: .008 })); cr.add(bx(.04, .7, .04, '#3E7CC8', -.26, .36, .1)); cr.add(bx(.04, .7, .04, '#3E7CC8', .26, .36, .1)); cr.add(rb(.42, .04, .38, '#3E7CC8', 0, .44, .35, { out: .008 })); cr.add(rb(.42, .35, .04, '#3E7CC8', 0, .7, .55, { out: .008 })); for (const s of [-1, 1]) cr.add(bx(.03, .44, .03, '#3A3D44', s * .18, .22, .35));
    if (R() < .6) cr.add(rb(.22, .02, .3, pega(R, ['#E2443A', '#3E7CC8', '#F2C230', '#5AA84E']), (R() - .5) * .2, .75, -.05)); ctx.add(cr); ctx.col(x, z, .55, .8, { h: .8 }); }
  for (let k = 0; k < 3; k++) { const c = M.quadro(.8, .6, i * 10 + k, k === 1 ? 'paisagem' : 'abstrato'); c.position.set(cx - w / 2 + 3.5 + k * 2.2, 2.2, cz - d / 2 + .15); ctx.add(c); }
  if (i === 0) ctx.figurante(cx - w / 2 + 1.2, cz + 1.2, Math.PI / 2);
  const ar = M.guardaRoupa(1.4, 1.9, '#9AA0A8'); ar.position.set(cx + w / 2 - .45, .02, cz - d / 2 + 1.4); ar.rotation.y = -Math.PI / 2; ctx.add(ar); ctx.col(cx + w / 2 - .45, cz - d / 2 + 1.4, .6, 1.4);
  const v = M.ventiladorTeto(H - .02); v.position.set(cx, 0, cz); ctx.add(v); const pas = v.userData.pas; C.vivos.push((t) => { pas.rotation.y = t * 6 + i; });
  const rl = M.relogio(C, .18); rl.position.set(cx + w / 2 - .1, 2.6, cz); rl.rotation.y = -Math.PI / 2; ctx.add(rl);
}

// ---------------- SANTA CASA (hospital) ----------------
export function santaCasa(ctx, nivel) {
  const C = ctx.cidade, perto = nivel === 'perto', ext = '#F4F1EA', faixa = '#2E6FB8', x0 = -16, x1 = 16, z0 = -10, z1 = 6, H = 3.6, N = 3;
  chaoTex(ctx, calcada('#D6D0C4', '#CCC5B8'), 0, 0, 44, 44, 1);
  for (let a = 0; a < N; a++) { const y = a * H, intC = perto && a === 0 ? '#F2F7FA' : null;
    const jan = []; for (let i = 0; i < 8; i++) { const c = x0 + 2 + i * 4; if (a === 0 && c > -6 && c < 4) continue; jan.push({ c, y0: 1.0, y1: 2.6 }); }
    parede(ctx, x0, z1, x1, z1, { y, h: H, t: .25, corA: intC, corB: ext, semCol: a > 0, vaos: [...(a === 0 ? [{ a: 13, b: 19, y0: 0, y1: 2.8 }] : []), ...jan.map(j => ({ a: j.c - .9 - x0, b: j.c + .9 - x0, y0: j.y0, y1: j.y1 }))] });
    for (const j of jan) janela(ctx, j.c, z1, true, 1.8, y + j.y0, y + j.y1, { t: .25, fora: 1, cortina: a === 0 && perto ? '#D9ECF7' : false, seed: j.c + a * 9, moldura: '#E8E4DC' });
    parede(ctx, x0, z0, x1, z0, { y, h: H, t: .25, corA: ext, corB: intC, semCol: a > 0, vaos: [2, 6, 10, 14, 18, 22, 26, 30].map(c => ({ a: c - .9, b: c + .9, y0: 1.0, y1: 2.6 })) });
    for (const c of [2, 6, 10, 14, 18, 22, 26, 30]) janela(ctx, x0 + c, z0, true, 1.8, y + 1.0, y + 2.6, { t: .25, fora: -1, cortina: false, seed: c + a });
    parede(ctx, x0, z0, x0, z1, { y, h: H, t: .25, corA: ext, corB: intC, semCol: a > 0 }); parede(ctx, x1, z0, x1, z1, { y, h: H, t: .25, corA: intC, corB: ext, semCol: a > 0 });
    ctx.add(bx(x1 - x0 + .4, .14, z1 - z0 + .4, '#E8E4DC', 0, y + H, (z0 + z1) / 2)); ctx.add(bx(x1 - x0 + .5, .3, .1, faixa, 0, y + H - .1, z1 + .22));
    if (!(perto && a === 0)) ctx.add(bx(x1 - x0 - .5, H - .3, z1 - z0 - .5, '#3A3540', 0, y + H / 2, (z0 + z1) / 2, { shadow: false })); }
  platibanda(ctx, 0, (z0 + z1) / 2, x1 - x0, z1 - z0, N * H, ext, { alt: .8 });
  ctx.add(placa(9, 1.2, toonTex(letreiroTex('SANTA CASA DE PEDRA ALTA', { fundo: faixa, w: 1024, h: 140 })), 0, N * H + .4, z1 + .14));
  const cruzM = new THREE.MeshToonMaterial({ color: '#E2443A', emissive: '#E2443A', emissiveIntensity: .2 }); C.acender(cruzM, 1.5); const cz2 = new THREE.Group(); cz2.add(tm(new THREE.BoxGeometry(1.4, .45, .15), cruzM)); cz2.add(tm(new THREE.BoxGeometry(.45, 1.4, .15), cruzM)); cz2.position.set(x1 - 2, N * H + .6, z1 + .2); ctx.add(cz2);
  // entrada com marquise e porta automática (abre sozinha)
  ctx.add(bx(9, .3, 5, '#E8E4DC', 0, 3.2, z1 + 2.5, { out: .014 })); for (const s of [-1, 1]) { ctx.add(cyl(.18, .18, 3.1, '#E8E4DC', s * 4.2, 1.55, z1 + 4.6, { seg: 10, out: .01 })); ctx.col(s * 4.2, z1 + 4.6, .4, .4, { h: 3 }); }
  ctx.add(placa(5, .5, toonTex(letreiroTex('PRONTO-SOCORRO', { fundo: '#E2443A' })), 0, 3.2, z1 + 5.02));
  const pa = new THREE.Group(), pb = new THREE.Group(); pa.userData.vivo = pb.userData.vivo = true; const vd = new THREE.MeshToonMaterial({ color: '#CFE6F2', transparent: true, opacity: .35, depthWrite: false, side: THREE.DoubleSide });
  for (const [g, s] of [[pa, -1], [pb, 1]]) { g.add(tm(new THREE.PlaneGeometry(1.5, 2.6), vd, { pos: [0, 1.3, 0], shadow: false })); g.add(bx(1.5, .08, .06, '#9AA0A8', 0, 2.6, 0)); g.add(bx(.06, 2.6, .06, '#9AA0A8', s * .75, 1.3, 0)); g.position.set(s * .75, 0, z1 + .2); ctx.add(g); }
  const nome = (ctx.L.nome ? ctx.L.nome + '.' : '') + 'entrada';
  const { paraMundo } = { paraMundo: (L, x, z) => [L.x + x, L.z + z] };
  C.portas[nome] = { nome, aberta: 0, auto: true, abrir(v) { this.aberta = v; const k = Math.max(0, Math.min(1, v)) * 1.45; pa.position.x = -.75 - k; pb.position.x = .75 + k; }, mundo: paraMundo(ctx.L, 0, z1), lote: ctx.L.nome };
  for (const x of [-2.25, 2.25]) ctx.add(bx(1.5, 2.8, .25, ext, x, 1.4, z1)); // laterais do vão
  // ambulância estacionada
  ambulancia(ctx, 7, z1 + 6.5, Math.PI / 2);
  // estacionamento e jardim
  for (let i = 0; i < 6; i++) { ctx.add(bx(.1, .01, 4.5, '#F4F1EA', -18 + i * 2.6, .03, 14)); if (i < 5 && i % 2 === 0) { const car = M.carro(pega(rng(i + 3), ['#3E7CC8', '#F4F1EA', '#2A2A30', '#9AA0A8', '#E2443A']), i); car.position.set(-16.7 + i * 2.6, 0, 14); ctx.add(car); ctx.col(-16.7 + i * 2.6, 14, 1.8, 4.1); } }
  for (const [x, z, t] of [[14, 15, 'ipeRoxo'], [19, 9, 'comum'], [-19, 19, 'mangueira'], [19, 19, 'comum']]) { const a = arvore(t, 1.1, x); a.position.set(x, 0, z); ctx.add(a); ctx.col(x, z, .7, .7, { h: 4 }); }
  for (const [x, z] of [[11, 19], [16, 19]]) put(ctx, bancoPraca('#2E6FB8'), x, z, 0);
  if (perto) {
    chao(ctx, 0, (z0 + z1) / 2, x1 - x0 - .3, z1 - z0 - .3, toonTex(C.tex.piso('granilite', '#EEF2F2', '#9AB8C8')), .02); forro(ctx, 0, (z0 + z1) / 2, x1 - x0 - .3, z1 - z0 - .3, H - .02);
    // recepção e sala de espera
    put(ctx, balcao(3.4, '#2E6FB8', '#F4F1EA'), 0, z1 - 4.5, Math.PI); put(ctx, M.cadeiraEscritorio(), 0, z1 - 5.4, Math.PI * 0, false); const pc = M.escrivaninha(.01, '#F4F1EA', false); ctx.add(pc);
    for (let r = 0; r < 3; r++) put(ctx, cadeirasEspera(5, '#3E7CC8'), -9, z1 - 2.5 - r * 1.6, Math.PI);
    for (const [x, r] of [[-10.1, 0], [-7.9, 1], [-9, 2], [-7.35, 0]]) ctx.figurante(x, z1 - 2.5 - r * 1.6 + .05, Math.PI, { sentado: true, assento: .49 }); ctx.figurante(0, z1 - 5.3, 0); ctx.figurante(-7, z0 + 1.8, Math.PI, { sentado: true, assento: .5, roupa: { camisa: '#F4F1EA' } });
    const tv = M.rackTV(.01); tv.children.slice(0, 3).forEach(c => c.visible = false); tv.position.set(-9, 1.6, z0 + .2 + 6); ctx.add(tv); C.vivos.push((t) => M.animarTV(tv.userData.tela, t, 8));
    ctx.add(painelSenha(C, 5).translateX(-5).translateY(2.6).translateZ(z1 - .2).rotateY(Math.PI));
    put(ctx, bebedouroH(), -14.5, z1 - 1.2); put(ctx, M.planta(1.5, 5), 4.5, z1 - .7); put(ctx, M.planta(1.5, 6), -4.5, z1 - .7);
    parede(ctx, -15.9, z0 + 6, -3, z0 + 6, { h: H, t: .12, corA: '#F2F7FA', corB: '#F2F7FA', vaos: [{ a: 4.5, b: 5.5 }] }); porta(ctx, 'consultorio', -11.4 + 0, z0 + 6, true, 1.0, { t: .12, cor: '#F4F1EA', dobra: -1, abre: -1 });
    parede(ctx, -3, z0, -3, z0 + 6, { h: H, t: .12, corA: '#F2F7FA', corB: '#F2F7FA' });
    // consultório
    put(ctx, maca(), -14, z0 + 2, Math.PI / 2); put(ctx, M.escrivaninha(1.3, '#F4F1EA', true, 2), -7, z0 + 1.0, 0); put(ctx, M.cadeiraEscritorio(), -7, z0 + 1.8, Math.PI); put(ctx, M.cadeira('#3E7CC8'), -7.3, z0 + 3.4, Math.PI); put(ctx, M.guardaRoupa(1.2, 1.9, '#F4F1EA'), -4.2, z0 + .5, 0); ctx.add(M.quadro(1.2, .8, 31, 'abstrato').translateX(-10).translateY(1.8).translateZ(z0 + .15)); put(ctx, M.pia(true), -15.5, z0 + 4.5, Math.PI / 2); put(ctx, M.planta(1.2, 7), -4, z0 + 5.4); put(ctx, suporteSoro(), -12.6, z0 + .9);
    // enfermaria com leitos
    parede(ctx, 3, z0, 3, z0 + 6, { h: H, t: .12, corA: '#F2F7FA', corB: '#F2F7FA' }); parede(ctx, 3, z0 + 6, 15.9, z0 + 6, { h: H, t: .12, corA: '#F2F7FA', corB: '#F2F7FA', vaos: [{ a: 1, b: 2.2 }] }); porta(ctx, 'enfermaria', 4.6, z0 + 6, true, 1.2, { t: .12, cor: '#F4F1EA', dobra: -1, abre: -1 });
    for (let i = 0; i < 3; i++) { put(ctx, leito(i), 6.5 + i * 3.4, z0 + 1.4, 0); put(ctx, suporteSoro(), 7.5 + i * 3.4, z0 + .6, 0); }
  } else ctx.add(bx(x1 - x0 - .5, H - .3, z1 - z0 - .5, '#3A3540', 0, H / 2, (z0 + z1) / 2, { shadow: false }));
  ctx.ponto('entrada', 0, z1 + 3.5, Math.PI); ctx.ponto('espera', -9, z1 - 3, Math.PI); ctx.ponto('consultorio', -10, z0 + 3, 0); ctx.ponto('enfermaria', 9, z0 + 4, 0); ctx.ponto('ambulancia', 7, z1 + 8.4, 0);
}
function bebedouroH() { const b = bebedouro(); return b; }
export function maca() { const g = new THREE.Group(); g.userData.pe = [2, .8]; g.add(rb(1.9, .15, .7, '#F4F1EA', 0, .8, 0, { out: .01 })); g.add(rb(.5, .1, .6, '#F4F1EA', -.7, .92, 0, { rot: [0, 0, .3] })); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(bx(.04, .75, .04, '#9AA0A8', a * .85, .37, b * .3)); g.add(bx(1.9, .02, .72, '#8FD3F2', 0, .89, 0)); return g; }
export function leito(seed = 0) { const g = M.cama(.95, '#8FD3F2', '#C9CED6'); g.userData.pe = [1.0, 2.1]; g.add(bx(1.0, .05, .05, '#9AA0A8', 0, .75, .8)); const cort = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.0), new THREE.MeshToonMaterial({ color: '#B9DCE8', side: THREE.DoubleSide })); cort.position.set(1.4, 1.2, 0); cort.rotation.y = Math.PI / 2; g.add(cort); g.add(bx(.03, .03, 2.2, '#9AA0A8', 1.4, 2.22, 0)); return g; }
export function suporteSoro() { const g = new THREE.Group(); g.userData.pe = [.3, .3]; g.add(cyl(.18, .18, .03, '#9AA0A8', 0, .02, 0)); g.add(cyl(.015, .015, 1.9, '#C9CED6', 0, .95, 0, { seg: 6 })); g.add(bx(.3, .02, .02, '#C9CED6', 0, 1.88, 0)); g.add(rb(.14, .22, .05, '#E6F4FA', .12, 1.72, 0, { r: .02 })); return g; }
export function ambulancia(ctx, x, z, ry) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry;
  g.add(rb(2.1, 2.2, 3.6, '#F4F1EA', 0, 1.45, -.8, { out: .016, r: .1 })); g.add(rb(2.0, 1.2, 1.6, '#F4F1EA', 0, .95, 1.75, { out: .016, r: .1 }));
  g.add(bx(2.12, .3, 3.6, '#E2443A', 0, 1.2, -.8)); g.add(bx(1.8, .5, .02, '#6E95B8', 0, 1.35, 2.56).rotateX(-.3));
  const sir = new THREE.MeshToonMaterial({ color: '#E2443A', emissive: '#E2443A', emissiveIntensity: .2 }), sb = new THREE.MeshToonMaterial({ color: '#3E7CC8', emissive: '#3E7CC8', emissiveIntensity: .2 });
  g.add(tm(new THREE.BoxGeometry(.5, .15, .25), sir, { pos: [-.35, 2.62, .6] })); g.add(tm(new THREE.BoxGeometry(.5, .15, .25), sb, { pos: [.35, 2.62, .6] }));
  for (const [a, b] of [[-1, 1.6], [1, 1.6], [-1, -1.8], [1, -1.8]]) g.add(cyl(.38, .38, .26, '#1B1A20', a * .98, .38, b, { rot: [0, 0, Math.PI / 2], seg: 16, out: .012 }));
  const cr = new THREE.Group(); cr.add(bx(.7, .22, .02, '#E2443A')); cr.add(bx(.22, .7, .02, '#E2443A')); for (const s of [-1, 1]) { const c2 = cr.clone(); c2.position.set(s * 1.06, 1.8, -.8); c2.rotation.y = Math.PI / 2; g.add(c2); }
  ctx.add(g); const q = Math.abs(Math.sin(ry)) > .5; ctx.col(x, z, q ? 5.4 : 2.3, q ? 2.3 : 5.4, { h: 2.6 });
  ctx.cidade.vivos.push((t) => { const p = Math.sin(t * 8) > 0; sir.emissiveIntensity = p ? 1.2 : .1; sb.emissiveIntensity = p ? .1 : 1.2; });
  return g;
}

// ---------------- RODOVIÁRIA ----------------
export function rodoviaria(ctx, nivel) {
  const C = ctx.cidade, perto = nivel === 'perto', ext = '#E8DCC8', R = rng(31);
  chaoTex(ctx, calcada('#D6D0C4', '#CCC5B8'), 0, 0, 44, 44, 1); chaoTex(ctx, C.tex.asfalto(), 0, -13, 44, 18, 4, .02);
  const x0 = -16, x1 = 16, z0 = -3, z1 = 9, H = 4.2;
  parede(ctx, x0, z0, x1, z0, { h: H, t: .25, corA: ext, corB: perto ? '#F4EEE2' : null, vaos: [{ a: 4, b: 8, y0: 0, y1: 3 }, { a: 24, b: 28, y0: 0, y1: 3 }] });
  parede(ctx, x0, z1, x1, z1, { h: H, t: .25, corA: perto ? '#F4EEE2' : null, corB: ext, vaos: [{ a: 13, b: 19, y0: 0, y1: 3.2 }, { a: 2, b: 10, y0: 1, y1: 3 }, { a: 22, b: 30, y0: 1, y1: 3 }] });
  janela(ctx, -10, z1, true, 8, 1, 3, { t: .25, fora: 1, cortina: false }); janela(ctx, 10, z1, true, 8, 1, 3, { t: .25, fora: 1, cortina: false });
  parede(ctx, x0, z0, x0, z1, { h: H, t: .25, corA: ext, corB: perto ? '#F4EEE2' : null }); parede(ctx, x1, z0, x1, z1, { h: H, t: .25, corA: perto ? '#F4EEE2' : null, corB: ext });
  ctx.add(bx(x1 - x0 + 1, .3, z1 - z0 + 16, '#E8E4DC', 0, H + .15, (z0 + z1) / 2 - 4, { out: .014 })); // cobertura que avança sobre a plataforma
  for (let i = 0; i <= 6; i++) { ctx.add(cyl(.2, .2, H, '#8D949C', x0 + i * 32 / 6, H / 2, z0 - 9, { seg: 10, out: .01 })); ctx.col(x0 + i * 32 / 6, z0 - 9, .4, .4, { h: H }); }
  ctx.add(placa(12, 1.3, toonTex(letreiroTex('RODOVIÁRIA DE PEDRA ALTA', { fundo: '#2E6FB8', w: 1024, h: 120 })), 0, H + .9, z1 + .1)); ctx.add(bx(12.4, 1.5, .15, '#1F4E86', 0, H + .9, z1));
  const rl = M.relogio(C, .5); rl.position.set(0, 3.6, z1 + .14); ctx.add(rl);
  // plataforma: meio-fio, números das baias e ônibus parados
  ctx.add(bx(36, .2, 2.5, '#E8E4DC', 0, .1, z0 - 1.3)); ctx.pisoAlto(0, z0 - 1.3, 36, 2.5, .2);
  for (let i = 0; i < 5; i++) { const x = -13 + i * 6.5; ctx.add(placa(.8, .5, toonTex(letreiroTex(String(i + 1), { fundo: '#F2C230', cor: '#1F4E86', w: 128, h: 80 })), x, 3.6, z0 - 2.5)); ctx.add(bx(.06, .6, .06, '#8D949C', x, 4.0, z0 - 2.5));
    if (i % 2 === 0) { const o = onibusParado(pega(R, ['#2E6FB8', '#E2443A', '#2E9C6A']), ['SÃO PAULO', 'CAMPINAS', 'BRAGANÇA'][i / 2]); o.position.set(x, 0, z0 - 9); o.rotation.y = Math.PI; ctx.add(o); ctx.col(x, z0 - 9, 2.6, 12, { h: 3.4 }); } }
  for (let i = 0; i < 4; i++) put(ctx, bancoPraca('#2E6FB8'), -12 + i * 8, z0 - 1.6, Math.PI);
  // praça da frente: ponto de táxi, árvores, bancos
  for (const [x, z, t] of [[-15, 17, 'ipeAmarelo'], [15, 17, 'ipeRoxo'], [-6, 19, 'palmeira'], [6, 19, 'palmeira']]) { const a = arvore(t, 1.1, x); a.position.set(x, 0, z); ctx.add(a); ctx.col(x, z, .6, .6, { h: 4 }); }
  const tx = M.carro('#F2C230', 4); tx.position.set(-10, 0, 14.5); tx.rotation.y = Math.PI / 2; tx.add(rb(.5, .2, .3, '#F4F1EA', 0, 1.45, 0)); ctx.add(tx); ctx.col(-10, 14.5, 4.1, 1.8);
  ctx.add(placa(1.2, .5, toonTex(letreiroTex('TÁXI', { fundo: '#2A2A30', cor: '#F2C230' })), -13.5, 2.4, 13)); ctx.add(cyl(.04, .04, 2.6, '#8D949C', -13.5, 1.3, 12.98, { seg: 6 }));
  if (perto) {
    chao(ctx, 0, (z0 + z1) / 2, x1 - x0 - .3, z1 - z0 - .3, toonTex(C.tex.piso('granilite', '#E4E0D4', '#9AA0A8')), .02); forro(ctx, 0, (z0 + z1) / 2, x1 - x0 - .3, z1 - z0 - .3, H - .02);
    for (let i = 0; i < 3; i++) { const g = new THREE.Group(); g.userData.pe = [2.4, .8]; g.add(rb(2.3, 1.1, .7, '#2E6FB8', 0, .55, 0, { out: .012 })); g.add(bx(2.3, 1.3, .04, '#CFE6F2', 0, 1.8, .2)); g.add(placa(2.0, .4, toonTex(letreiroTex(['VIAÇÃO SERRANA', 'EXPRESSO PAULISTA', 'TURISMO DO VALE'][i], { fundo: '#1F4E86', w: 512, h: 96 })), 0, 2.7, .3)); put(ctx, g, -12 + i * 3, z0 + 1.2, 0); g.add(caixaRegistradora().translateY(1.1)); }
    for (let r = 0; r < 2; r++) put(ctx, cadeirasEspera(6, '#2E6FB8'), 5, z0 + 4 + r * 1.8, Math.PI);
    ctx.figurante(-12, z0 + .55, 0); ctx.figurante(-9, z0 + .55, 0); ctx.figurante(3.9, z0 + 4.05, Math.PI, { sentado: true, assento: .49 }); ctx.figurante(6.6, z0 + 5.85, Math.PI, { sentado: true, assento: .49 }); ctx.figurante(-12, z0 + 2.4, Math.PI);
    put(ctx, balcao(3, '#E2443A', '#F4F1EA'), 12.5, z0 + 1.5, 0); put(ctx, geladeiraBebidas('#E2443A', 4), 15, z0 + 4, -Math.PI / 2); ctx.add(cardapio(2, .9, [['CAFÉ', 'R$ 4'], ['PÃO DE QUEIJO', 'R$ 5'], ['SALGADO', 'R$ 7']]).translateX(12.5).translateY(2.6).translateZ(z0 + .14));
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(4, 2), toonTex(ctex(512, 256, (x) => { x.fillStyle = '#100808'; x.fillRect(0, 0, 512, 256); x.font = '700 26px IBM Plex Mono, monospace'; x.fillStyle = '#F2C230'; ['HORA  DESTINO      BAIA', '14:30 SÃO PAULO     1', '15:10 CAMPINAS      3', '16:00 BRAGANÇA      5', '17:20 SÃO PAULO     1', '18:45 ATIBAIA       2'].forEach((l, i) => x.fillText(l, 16, 36 + i * 40)); })));
    quad.position.set(-3, 2.6, z1 - .15); quad.rotation.y = Math.PI; ctx.add(quad);
  } else ctx.add(bx(x1 - x0 - .5, H - .3, z1 - z0 - .5, '#3A3540', 0, H / 2, (z0 + z1) / 2, { shadow: false }));
  ctx.ponto('entrada', 0, z1 + 2, Math.PI); ctx.ponto('plataforma', 0, z0 - 1.5, 0); ctx.ponto('guiche', -9, z0 + 2.6, 0);
}
export function onibusParado(cor = '#2E6FB8', destino = 'SÃO PAULO') {
  const g = new THREE.Group(); g.add(rb(2.5, 2.8, 12, cor, 0, 1.75, 0, { out: .018, r: .18 })); g.add(bx(2.52, .3, 12, '#F4F1EA', 0, 1.0, 0));
  for (const s of [-1, 1]) { g.add(bx(.02, .9, 10.5, '#3A4E62', s * 1.26, 2.3, -.3)); for (const z of [-4.3, 0, 4.3]) g.add(cyl(.48, .48, .3, '#1B1A20', s * 1.15, .48, z, { rot: [0, 0, Math.PI / 2], seg: 16, out: .012 })); }
  g.add(bx(2.2, 1.3, .02, '#3A4E62', 0, 2.3, 6.01)); g.add(placa(2, .35, toonTex(letreiroTex(destino, { fundo: '#100808', cor: '#F2C230', w: 384, h: 64 })), 0, 3.0, 6.03));
  return g;
}

// ---------------- POSTO DE GASOLINA ----------------
export function posto(ctx, nivel) {
  const C = ctx.cidade, perto = nivel === 'perto', R = rng(91);
  chaoTex(ctx, calcada('#C9C4BA', '#BDB7AC'), 0, 0, 44, 44, 2);
  // cobertura com luzes e bombas
  const cz = 9; ctx.add(rb(20, .9, 12, '#F4F1EA', 0, 5.6, cz, { out: .016 })); ctx.add(bx(20.2, .45, 12.2, '#2E9C6A', 0, 5.25, cz)); ctx.add(placa(6, .8, toonTex(letreiroTex('AUTO POSTO SERRA', { fundo: '#2E9C6A' })), 0, 5.6, cz + 6.03));
  const lm = new THREE.MeshToonMaterial({ color: '#FFFFFF', emissive: '#F4F8FF', emissiveIntensity: .1 }); C.acender(lm, 1.6); for (let i = 0; i < 3; i++) for (let k = 0; k < 2; k++) ctx.add(tm(new THREE.BoxGeometry(2, .05, .4), lm, { pos: [-6 + i * 6, 5.13, cz - 3 + k * 6], shadow: false }));
  for (const [x, z] of [[-6, cz], [6, cz]]) { ctx.add(cyl(.35, .35, 5.2, '#F4F1EA', x, 2.6, z, { seg: 12, out: .012 })); ctx.add(bx(1.4, .25, 5, '#E8E4DC', x, .125, z)); ctx.col(x, z, 1.4, 5, { h: 1.8 });
    for (const s of [-1, 1]) { const b = new THREE.Group(); b.position.set(x, .25, z + s * 1.6); b.add(rb(.9, 1.8, .55, '#F4F1EA', 0, .9, 0, { out: .012 })); b.add(bx(.92, .5, .57, '#2E9C6A', 0, 1.5, 0)); b.add(bx(.6, .3, .02, '#100808', 0, 1.15, .29)); b.add(bx(.6, .3, .02, '#100808', 0, 1.15, -.29)); b.add(cyl(.05, .05, .8, '#2A2A30', .5, 1.0, 0, { seg: 6 })); ctx.add(b); } }
  // totem de preços
  const tot = new THREE.Group(); tot.position.set(-19, 0, 19); tot.add(rb(1.6, 6, .6, '#2E9C6A', 0, 3, 0, { out: .014 })); tot.add(placa(1.4, 2.2, toonTex(ctex(256, 400, (x) => { x.fillStyle = '#F4F1EA'; x.fillRect(0, 0, 256, 400); x.fillStyle = '#100808'; x.font = '900 34px Inter'; ['GASOLINA', '6,29', 'ETANOL', '4,19', 'DIESEL', '6,09'].forEach((l, i) => { x.fillStyle = i % 2 ? '#E2443A' : '#100808'; x.font = (i % 2 ? '900 58px ' : '800 34px ') + 'Inter'; x.fillText(l, 20, 50 + i * 62); }); })), 0, 3, .31));
  ctx.add(tot); ctx.col(-19, 19, 1.6, .6, { h: 6 });
  // loja de conveniência
  const x0 = -16, x1 = -2, z0 = -14, z1 = -4, H = 3.6;
  parede(ctx, x0, z0, x1, z0, { h: H, t: .25, corA: '#F4F1EA', corB: perto ? '#F7F7F2' : null }); parede(ctx, x0, z0, x0, z1, { h: H, t: .25, corA: '#F4F1EA', corB: perto ? '#F7F7F2' : null }); parede(ctx, x1, z0, x1, z1, { h: H, t: .25, corA: perto ? '#F7F7F2' : null, corB: '#F4F1EA' });
  parede(ctx, x0, z1, x1, z1, { h: H, t: .25, corA: perto ? '#F7F7F2' : null, corB: '#F4F1EA', vaos: [{ a: 1, b: 6, y0: .5, y1: 2.8 }, { a: 7, b: 9, y0: 0, y1: 2.6 }, { a: 10, b: 13, y0: .5, y1: 2.8 }] });
  janela(ctx, x0 + 3.5, z1, true, 5, .5, 2.8, { t: .25, fora: 1, cortina: false, moldura: '#2A2A30' }); janela(ctx, x0 + 11.5, z1, true, 3, .5, 2.8, { t: .25, fora: 1, cortina: false, moldura: '#2A2A30' });
  porta(ctx, 'loja', x0 + 8, z1, true, 2, { t: .25, tipo: 'vidro', cor: '#9AA0A8', dobra: -1, abre: 1 });
  ctx.add(bx(x1 - x0 + .4, .2, z1 - z0 + 2, '#E8E4DC', (x0 + x1) / 2, H + .1, (z0 + z1) / 2 + .8)); ctx.add(placa(8, .7, toonTex(letreiroTex('CONVENIÊNCIA 24h', { fundo: '#2E9C6A' })), (x0 + x1) / 2, H + .55, z1 + 1.82));
  if (perto) { chao(ctx, (x0 + x1) / 2, (z0 + z1) / 2, x1 - x0 - .3, z1 - z0 - .3, toonTex(C.tex.piso('ceramica', '#EDEAE2', '#D6D0C4')), .02); forro(ctx, (x0 + x1) / 2, (z0 + z1) / 2, x1 - x0 - .3, z1 - z0 - .3, H - .02);
    for (let i = 0; i < 4; i++) put(ctx, geladeiraBebidas(pega(R, ['#E2443A', '#2E6FB8', '#2E9C6A']), i), x0 + 1 + i * .8, z0 + .5); put(ctx, prateleira(5, 1.6, .45, 3, 'misto'), (x0 + x1) / 2 + 2.5, z0 + .35); put(ctx, prateleira(3.5, 1.4, .8, 4, 'misto'), (x0 + x1) / 2, (z0 + z1) / 2 + .5);
    put(ctx, balcao(2.4, '#2E9C6A', '#F4F1EA'), x1 - 1.6, (z0 + z1) / 2 + 1.5, -Math.PI / 2); ctx.add(caixaRegistradora().translateX(x1 - 1.6).translateY(1.0).translateZ((z0 + z1) / 2 + 1.5)); }
  else ctx.add(bx(x1 - x0 - .5, H - .3, z1 - z0 - .5, '#3A3540', (x0 + x1) / 2, H / 2, (z0 + z1) / 2, { shadow: false }));
  // calibrador, lava-rápido, carros e árvores
  const cal = new THREE.Group(); cal.add(rb(.4, 1.3, .3, '#E2443A', 0, .65, 0, { out: .01 })); cal.add(cyl(.12, .12, .06, '#F4F1EA', 0, 1.0, .16, { rot: [Math.PI / 2, 0, 0] })); cal.position.set(14, 0, 20); ctx.add(cal); ctx.col(14, 20, .4, .3);
  const lv = new THREE.Group(); lv.position.set(12, 0, -12); lv.add(bx(12, .25, 10, '#E8E4DC', 0, 4.2, 0, { out: .014 })); for (const [a, b] of [[-5.8, -4.8], [5.8, -4.8], [-5.8, 4.8], [5.8, 4.8]]) { lv.add(bx(.3, 4.2, .3, '#2E6FB8', a, 2.1, b, { out: .01 })); }
  lv.add(placa(5, .7, toonTex(letreiroTex('LAVA-RÁPIDO', { fundo: '#2E6FB8' })), 0, 3.7, 5.02)); lv.add(bx(12, 4.2, .2, '#F4F1EA', 0, 2.1, -5)); const cl = M.carro('#3E7CC8', 9); cl.position.set(0, 0, 0); lv.add(cl);
  ctx.add(lv); ctx.col(12, -17, 12, .3, { h: 4 }); ctx.col(12, -12, 1.8, 4.1); for (const [a, b] of [[-5.8, -4.8], [5.8, -4.8], [-5.8, 4.8], [5.8, 4.8]]) ctx.col(12 + a, -12 + b, .3, .3);
  const c1 = M.carro('#F4F1EA', 5); c1.position.set(-6, 0, cz + 3.2); c1.rotation.y = Math.PI / 2; ctx.add(c1); ctx.col(-6, cz + 3.2, 4.1, 1.8);
  for (const [x, z, t] of [[19, 2, 'comum'], [-19, 2, 'ipeAmarelo'], [19, 12, 'palmeira']]) { const a = arvore(t, 1.1, x + z); a.position.set(x, 0, z); ctx.add(a); ctx.col(x, z, .6, .6, { h: 4 }); }
  ctx.figurante(-4.6, cz + 1.6, Math.PI / 2, { roupa: { camisa: '#2E9C6A' } });
  ctx.ponto('bombas', 0, cz + 2, Math.PI); ctx.ponto('loja', -9, -2, Math.PI); ctx.ponto('lojaDentro', -8, -5.3, 0);
}

// ---------------- CAMPO DE FUTEBOL ----------------
export function campo(ctx, nivel) {
  const C = ctx.cidade, R = rng(5);
  chaoTex(ctx, grama('#7DB86A'), 0, 0, 44, 44, 3);
  const fw = 36, fd = 24, fz = -3;
  chaoTex(ctx, ctex(720, 480, (x) => { x.fillStyle = '#6FAE5A'; x.fillRect(0, 0, 720, 480); for (let i = 0; i < 12; i++) { x.fillStyle = i % 2 ? '#79B864' : '#6FAE5A'; x.fillRect(i * 60, 0, 60, 480); } x.fillStyle = 'rgba(196,148,104,.6)'; x.beginPath(); x.ellipse(360, 240, 70, 50, 0, 0, 7); x.fill(); x.beginPath(); x.ellipse(50, 240, 40, 80, 0, 0, 7); x.fill(); x.beginPath(); x.ellipse(670, 240, 40, 80, 0, 0, 7); x.fill();
    x.strokeStyle = '#FFFFFF'; x.lineWidth = 5; x.strokeRect(10, 10, 700, 460); x.beginPath(); x.moveTo(360, 10); x.lineTo(360, 470); x.stroke(); x.beginPath(); x.arc(360, 240, 60, 0, 7); x.stroke(); x.strokeRect(10, 140, 90, 200); x.strokeRect(620, 140, 90, 200); }), 0, fz, fw, fd, fw, .02);
  for (const s of [-1, 1]) { const tr = new THREE.Group(); tr.position.set(s * (fw / 2 - .3), 0, fz); tr.add(cyl(.07, .07, 2.4, '#F4F1EA', 0, 1.2, -2.5, { seg: 8, out: .01 })); tr.add(cyl(.07, .07, 2.4, '#F4F1EA', 0, 1.2, 2.5, { seg: 8, out: .01 })); tr.add(cyl(.07, .07, 5.1, '#F4F1EA', 0, 2.4, 0, { rot: [Math.PI / 2, 0, 0], seg: 8, out: .01 }));
    const rede = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.4, 5), new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: .2, wireframe: true })); rede.position.set(s * .6, 1.2, 0); tr.add(rede); ctx.add(tr); ctx.col(s * (fw / 2 - .3), fz - 2.5, .2, .2); ctx.col(s * (fw / 2 - .3), fz + 2.5, .2, .2); }
  // alambrado
  for (const [x, z, w, d] of [[0, -21.5, 43, .05], [-21.5, 0, .05, 43], [21.5, 0, .05, 43], [-12, 21.5, 19, .05], [12, 21.5, 19, .05]]) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, 3, d), new THREE.MeshBasicMaterial({ color: '#8D949C', transparent: true, opacity: .35, wireframe: false })); m.position.set(x, 1.5, z); ctx.add(m); ctx.col(x, z, w || .1, d || .1, { h: 3 });
    const n = Math.round(Math.max(w, d) / 3); for (let i = 0; i <= n; i++) ctx.add(cyl(.05, .05, 3.1, '#6E747C', x + (w > 1 ? -w / 2 + i * w / n : 0), 1.55, z + (d > 1 ? -d / 2 + i * d / n : 0), { seg: 6 })); }
  // arquibancada de madeira
  for (let i = 0; i < 4; i++) ctx.add(bx(20, .35, .75, '#B87A4A', 0, .3 + i * .45, 12.5 + i * .75, { out: .008 })); for (let i = 0; i < 6; i++) ctx.add(bx(.12, 1.9, .12, '#7A5233', -9.5 + i * 3.8, .95, 15.3)); ctx.col(0, 13.6, 20, 3, { h: 1.8, nome: 'arquibancada' });
  // refletores
  for (const [x, z] of [[-20, -16], [20, -16], [-20, 10], [20, 10]]) { ctx.add(cyl(.15, .2, 12, '#8D949C', x, 6, z, { seg: 8, out: .01 })); const lm = new THREE.MeshToonMaterial({ color: '#FFFFFF', emissive: '#F4F8FF', emissiveIntensity: 0 }); C.acender(lm, 2); const ref = tm(new THREE.BoxGeometry(2, 1.2, .3), lm, { pos: [x, 12.4, z], out: .012 }); ref.lookAt(0, 0, fz); ctx.add(ref); ctx.col(x, z, .4, .4, { h: 12 }); }
  // vestiário e bar do campo
  const v = new THREE.Group(); v.position.set(14, 0, 16.5); v.add(caixaTex(8, 3, 4, tinta('#CFE3D2'), 0, 1.5, 0, 1, { out: .014 })); v.add(bx(8.6, .2, 5, '#E8E4DC', 0, 3.1, .3)); v.add(placa(4, .6, toonTex(letreiroTex('E.C. PEDRA ALTA', { fundo: '#2E7A5A' })), 0, 2.5, 2.02)); v.add(bx(.9, 2.1, .06, '#2E7A5A', -2, 1.05, 2.02)); v.add(bx(.9, 2.1, .06, '#2E7A5A', 2, 1.05, 2.02)); ctx.add(v); ctx.col(14, 16.5, 8, 4, { h: 3 });
  const bola = sph(.12, '#F4F1EA', 3, .14, fz + 1, { out: .008 }); ctx.add(bola);
  for (const [x, z, t] of [[-17, 17, 'mangueira'], [-12, 18.5, 'comum']]) { const a = arvore(t, 1.2, x); a.position.set(x, 0, z); ctx.add(a); ctx.col(x, z, .7, .7, { h: 4 }); }
  ctx.ponto('meio', 0, fz, 0); ctx.ponto('gol', -fw / 2 + 2, fz, Math.PI / 2); ctx.ponto('arquibancada', 0, 11.4, Math.PI);
}
