// Comércio do centro: padaria, farmácia, lotérica, lanchonete, banco, mercado, sorveteria, loja de roupas, bar,
// prefeitura e loja de materiais. Todas com fachada, letreiro, toldo e o lado de dentro montado.
// Lote com frente em +z: a loja vai de z = -6 até a calçada (z = L.d/2).
import * as THREE from 'three';
import { toon, tm, bx, cyl, sph, rb, piso, placa, caixaTex, D, pega } from './util.js';
import { parede, porta, janela, telhado, platibanda, forro, chao, tinta } from './construcao.js';
import { letreiroTex, repetir, calcada } from './texturas.js';
import * as M from './moveis.js';
import { toonTex, ctex } from '../base/toon.js';
import { rng } from '../base/core.js';

const PROD = ['#E2443A', '#F2C230', '#3E7CC8', '#5AA84E', '#F08A2C', '#8E6CC4', '#F2546E', '#4FB8A0', '#F4F1EA', '#2A2A30'];
/** Prateleira de parede cheia de produtos (caixas, latas, garrafas). */
export function prateleira(w = 2, h = 2, d = .45, seed = 0, tipo = 'misto', cor = '#F4F1EA') {
  const g = new THREE.Group(), R = rng(seed * 7 + 3); g.userData.pe = [w, d];
  g.add(bx(w, h, .04, cor, 0, h / 2, -d / 2 + .02)); for (const s of [-1, 1]) g.add(bx(.04, h, d, cor, s * (w / 2 - .02), h / 2, 0, { out: .01 }));
  const n = Math.max(3, Math.round(h / .45));
  for (let i = 0; i < n; i++) { const y = .08 + i * (h - .1) / n; g.add(bx(w - .06, .03, d, cor, 0, y, 0, { out: .006 }));
    let x = -w / 2 + .07; const hh = (h - .1) / n - .06;
    while (x < w / 2 - .12) { const t = tipo === 'misto' ? pega(R, ['caixa', 'lata', 'garrafa', 'caixa']) : tipo; const c = pega(R, PROD);
      if (t === 'caixa') { const bw = .1 + R() * .12, bh = Math.min(hh, .14 + R() * .18); g.add(bx(bw, bh, d * .7, c, x + bw / 2, y + .015 + bh / 2, 0)); x += bw + .01; }
      else if (t === 'lata') { const r = .045 + R() * .03, lh = Math.min(hh, .12 + R() * .1); for (let k = 0; k < 2; k++) g.add(cyl(r, r, lh, c, x + r, y + .015 + lh / 2, -d * .2 + k * d * .4, { seg: 10 })); x += r * 2 + .01; }
      else if (t === 'garrafa') { const r = .04, lh = Math.min(hh - .05, .22 + R() * .08); g.add(cyl(r, r, lh, c, x + r, y + .015 + lh / 2, 0, { seg: 8 })); g.add(cyl(.015, .03, .07, c, x + r, y + .015 + lh + .035, 0, { seg: 8 })); x += r * 2 + .015; }
      else if (t === 'pao') { const pw = .16 + R() * .06; const p = tm(new THREE.SphereGeometry(1, 10, 6), pega(R, ['#D99A4E', '#C98A3E', '#E8B060']), { out: .006 }); p.scale.set(pw / 2, .055, .09); p.position.set(x + pw / 2, y + .07, (R() - .5) * .1); g.add(p); x += pw + .02; }
      else if (t === 'remedio') { const bw = .06 + R() * .05, bh = Math.min(hh, .08 + R() * .07); g.add(bx(bw, bh, .1, pega(R, ['#F4F1EA', '#E2443A', '#3E7CC8', '#5AA84E', '#F2C230', '#F2546E']), x + bw / 2, y + .015 + bh / 2, d / 2 - .1)); x += bw + .008; }
      else if (t === 'tinta') { const r = .12; g.add(cyl(r, r, .26, c, x + r, y + .145, 0, { seg: 12, out: .006 })); g.add(cyl(r * .95, r * .95, .01, '#C9CED6', x + r, y + .28, 0, { seg: 12 })); x += r * 2 + .03; }
      else { x += .1; } }
  }
  return g;
}
/** Balcão de atendimento com tampo. */
export function balcao(w = 2.4, cor = '#B87A4A', tampo = '#F4F1EA', vidro = false) {
  const g = new THREE.Group(); g.userData.pe = [w, .7];
  g.add(rb(w, .95, .65, cor, 0, .475, 0, { out: .012, r: .02 })); g.add(bx(w + .06, .05, .72, tampo, 0, .97, 0, { out: .01 }));
  if (vidro) { const v = new THREE.MeshToonMaterial({ color: '#CFE6F2', transparent: true, opacity: .3, depthWrite: false, side: THREE.DoubleSide }); g.add(tm(new THREE.BoxGeometry(w - .1, .42, .5), v, { pos: [0, 1.21, 0], shadow: false })); g.add(bx(w - .1, .02, .5, '#C9CED6', 0, 1.42, 0)); }
  return g;
}
export function caixaRegistradora() { const g = new THREE.Group(); g.add(rb(.4, .12, .36, '#2A2A30', 0, .06, 0, { out: .01 })); g.add(rb(.32, .2, .04, '#2A2A30', 0, .25, -.08, { out: .01, rot: [-.3, 0, 0] })); g.add(bx(.26, .14, .01, '#5AA84E', 0, .25, -.055).rotateX(-.3)); g.add(rb(.3, .02, .14, '#9AA0A8', 0, .13, .08)); return g; }
export function banqueta(cor = '#E2443A') { const g = new THREE.Group(); g.userData.pe = [.4, .4]; g.add(cyl(.2, .2, .08, cor, 0, .76, 0, { out: .01, seg: 16 })); g.add(cyl(.03, .03, .72, '#9AA0A8', 0, .36, 0, { seg: 8 })); g.add(cyl(.18, .2, .03, '#9AA0A8', 0, .015, 0, { seg: 14 })); g.add(tm(new THREE.TorusGeometry(.15, .012, 6, 16), '#9AA0A8', { pos: [0, .28, 0], rot: [Math.PI / 2, 0, 0] })); return g; }
export function geladeiraBebidas(cor = '#E2443A', seed = 0) {
  const g = new THREE.Group(), R = rng(seed + 4); g.userData.pe = [.75, .7];
  g.add(rb(.75, 2.0, .7, cor, 0, 1.0, 0, { out: .014, r: .03 })); g.add(bx(.62, 1.5, .02, '#2A3A48', 0, 1.0, .35));
  for (let i = 0; i < 5; i++) for (let k = 0; k < 6; k++) g.add(cyl(.035, .035, .2, pega(R, ['#E2443A', '#F2C230', '#5AA84E', '#3E7CC8', '#F08A2C', '#2A2A30']), -.25 + k * .1, .4 + i * .29, .3, { seg: 8, shadow: false }));
  const v = new THREE.Mesh(new THREE.PlaneGeometry(.62, 1.5), new THREE.MeshToonMaterial({ color: '#CFE6F2', transparent: true, opacity: .25, depthWrite: false })); v.position.set(0, 1.0, .362); g.add(v);
  g.add(bx(.7, .3, .02, '#FFFFFF', 0, 1.88, .352)); return g;
}
export function mesaBar(cor = '#F2C230', seed = 0) { const g = M.mesaPlastica(cor, false); g.userData.pe = [2, 2]; return g; }
/** Arara com roupas penduradas. */
export function arara(w = 1.6, seed = 0) { const g = new THREE.Group(), R = rng(seed + 11); g.userData.pe = [w, .55];
  for (const s of [-1, 1]) { g.add(cyl(.02, .02, 1.5, '#9AA0A8', s * w / 2, .75, 0, { seg: 6 })); g.add(bx(.04, .03, .5, '#9AA0A8', s * w / 2, .02, 0)); } g.add(bx(w, .025, .025, '#9AA0A8', 0, 1.5, 0));
  for (let x = -w / 2 + .1; x < w / 2 - .05; x += .11) { const c = pega(R, PROD); g.add(rb(.07, .7, .45, c, x, 1.1, 0, { r: .02 })); } return g; }
export function manequim(cor = '#E2443A') { const g = new THREE.Group(); g.userData.pe = [.5, .5]; g.add(cyl(.2, .2, .03, '#2A2A30', 0, .015, 0)); g.add(cyl(.02, .02, .8, '#9AA0A8', 0, .4, 0, { seg: 6 })); g.add(rb(.4, .6, .22, cor, 0, 1.1, 0, { out: .01, r: .08 })); g.add(sph(.12, '#F4F1EA', 0, 1.55, 0, { out: .01 })); return g; }
/** Gôndola de mercado (dupla face). */
export function gondola(w = 4, seed = 0) { const g = new THREE.Group(); g.userData.pe = [w, 1.0]; const a = prateleira(w, 1.7, .45, seed, 'misto'); a.position.z = .26; const b = prateleira(w, 1.7, .45, seed + 50, 'misto'); b.rotation.y = Math.PI; b.position.z = -.26; g.add(a, b); g.add(bx(w, .3, .3, '#F2C230', 0, 1.95, 0)); return g; }
export function caixaMercado(seed = 0) { const g = new THREE.Group(); g.userData.pe = [.9, 2.4]; g.add(rb(.8, .9, 2.2, '#F4F1EA', 0, .45, 0, { out: .012 })); g.add(bx(.6, .02, 1.4, '#2A2A30', 0, .91, .3)); g.add(caixaRegistradora().translateX(0).translateY(.92).translateZ(-.7)); g.add(cyl(.03, .03, 1.4, '#9AA0A8', .35, 1.6, -.9, { seg: 6 })); g.add(rb(.3, .3, .05, '#E2443A', .35, 2.3, -.9, { out: .01 })); return g; }
export function carrinho() { const g = new THREE.Group(); g.userData.pe = [.55, .9]; const gr = '#C9CED6'; g.add(bx(.5, .4, .75, gr, 0, .7, 0, { out: .01 })); g.add(bx(.46, .36, .71, '#E2443A', 0, .7, 0)); g.add(bx(.5, .03, .03, '#E2443A', 0, 1.0, -.45)); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { g.add(bx(.03, .5, .03, gr, a * .22, .25, b * .3)); g.add(cyl(.05, .05, .04, '#2A2A30', a * .22, .05, b * .3, { rot: [0, 0, Math.PI / 2], seg: 10 })); } return g; }
export function bancaFrutas(seed = 0) { const g = new THREE.Group(), R = rng(seed + 31); g.userData.pe = [1.6, .9];
  g.add(rb(1.6, .7, .9, '#9A6236', 0, .35, 0, { out: .012 })); const tampa = bx(1.6, .05, .9, '#7A5233', 0, .72, 0); tampa.rotation.x = .25; g.add(tampa);
  for (let i = 0; i < 4; i++) { const c = ['#E2443A', '#F2C230', '#5AA84E', '#F08A2C'][i]; for (let k = 0; k < 12; k++) g.add(sph(.06, c, -.6 + i * .4 + (R() - .5) * .25, .82 + (k % 3) * .04 - (k / 12) * .1, -.3 + (k / 12) * .6, { seg: 8 })); } return g; }
export function atm() { const g = new THREE.Group(); g.userData.pe = [.8, .7]; g.add(rb(.75, 1.6, .65, '#E8E4DC', 0, .8, 0, { out: .012 })); g.add(bx(.65, .25, .02, '#2E6FB8', 0, 1.5, .33)); const t = new THREE.Mesh(new THREE.PlaneGeometry(.36, .26), new THREE.MeshBasicMaterial({ color: '#7FB2E8' })); t.position.set(0, 1.18, .335); t.rotation.x = -.2; g.add(t); g.add(bx(.3, .12, .2, '#9AA0A8', 0, .98, .38)); g.add(bx(.2, .02, .02, '#2A2A30', 0, .82, .33)); return g; }
export function cadeirasEspera(n = 4, cor = '#3E7CC8') { const g = new THREE.Group(); g.userData.pe = [n * .55, .6]; g.add(bx(n * .55, .04, .05, '#8D949C', 0, .3, 0)); for (const s of [-1, 1]) g.add(bx(.04, .3, .4, '#8D949C', s * (n * .55 / 2 - .1), .15, 0));
  for (let i = 0; i < n; i++) { const x = -n * .55 / 2 + .275 + i * .55; g.add(rb(.48, .06, .44, cor, x, .46, 0, { out: .01 })); g.add(rb(.48, .44, .06, cor, x, .72, -.2, { out: .01, rot: [-.1, 0, 0] })); g.add(bx(.04, .16, .04, '#8D949C', x, .37, 0)); } return g; }
/** Painel de senha (número muda sozinho). */
export function painelSenha(C, seed = 0) { const g = new THREE.Group(); g.add(rb(.8, .4, .08, '#2A2A30', 0, 0, 0, { out: .01 }));
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 128; const x = cv.getContext('2d'); const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(.7, .32), new THREE.MeshBasicMaterial({ map: tx })); m.position.z = .045; m.userData.vivo = true; g.add(m); let ult = -1;
  C.vivos.push((t) => { const n = 120 + Math.floor((t + seed) / 9) % 80; if (n === ult) return; ult = n; x.fillStyle = '#100808'; x.fillRect(0, 0, 256, 128); x.fillStyle = '#FF5A3A'; x.font = '900 34px Inter, Arial'; x.textAlign = 'center'; x.fillText('SENHA', 128, 40); x.font = '900 64px Inter, Arial'; x.fillText('A' + n, 128, 108); tx.needsUpdate = true; });
  return g; }
export function sinuca() { const g = new THREE.Group(); g.userData.pe = [2.4, 1.4]; g.add(rb(2.3, .25, 1.3, '#7A5233', 0, .7, 0, { out: .014 })); g.add(bx(2.0, .02, 1.0, '#2E8A4A', 0, .83, 0)); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(bx(.14, .6, .14, '#7A5233', a * 1, .3, b * .5));
  const R = rng(5); for (let i = 0; i < 9; i++) g.add(sph(.03, pega(R, PROD), -.3 + (i % 3) * .07 + (R() - .5) * .3, .87, -.2 + Math.floor(i / 3) * .07, { seg: 8 })); g.add(sph(.03, '#FFFFFF', .6, .87, 0, { seg: 8 })); const taco = cyl(.012, .02, 1.4, '#D9B07A', .2, .9, .3, { seg: 6 }); taco.rotation.z = Math.PI / 2 - .05; g.add(taco); return g; }
export function cardapio(w, h, itens, fundo = '#2A2A30') { const t = ctex(512, Math.round(512 * h / w), (x, W, H) => { x.fillStyle = fundo; x.fillRect(0, 0, W, H); x.strokeStyle = '#F2C230'; x.lineWidth = 8; x.strokeRect(10, 10, W - 20, H - 20); x.fillStyle = '#FFFFFF'; x.textBaseline = 'middle';
  const lh = (H - 60) / itens.length; itens.forEach(([a, b], i) => { x.font = `700 ${Math.min(40, lh * .5)}px Inter, Arial`; x.textAlign = 'left'; x.fillText(a, 30, 40 + lh * (i + .5)); x.textAlign = 'right'; x.fillStyle = '#F2C230'; x.fillText(b, W - 30, 40 + lh * (i + .5)); x.fillStyle = '#FFFFFF'; }); });
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t })); }

// ---------------------------------------------------------------------------------------------
const TIPOS = {
  padaria: { nome: 'PADARIA PÃO DA SERRA', sub: 'pães • doces • café', fundo: '#C9874E', toldo: ['#C84E4E', '#F4F1EA'], ext: '#F2E2C4', int: '#FFF3DC', piso: ['xadrez', '#F4F1EA', '#C84E4E'] },
  farmacia: { nome: 'DROGARIA SERRANA', sub: 'aberta 24 horas', fundo: '#2E9C6A', toldo: ['#2E9C6A', '#F4F1EA'], ext: '#F4F1EA', int: '#F4FAF6', piso: ['ceramica', '#F4F1EA', '#DDE6E0'] },
  loterica: { nome: 'LOTÉRICA TREVO DA SORTE', sub: 'jogos • contas', fundo: '#2E6FB8', toldo: ['#F2C230', '#2E6FB8'], ext: '#DDE8F2', int: '#F2F6FA', piso: ['ceramica', '#EDEAE2', '#D6D0C4'] },
  lanchonete: { nome: 'LANCHONETE DO ZÉ', sub: 'x-tudo • pastel • suco', fundo: '#E2443A', toldo: ['#F2C230', '#E2443A'], ext: '#F6E7A6', int: '#FFF6E0', piso: ['xadrez', '#F4F1EA', '#2A2A30'] },
  banco: { nome: 'BANCO DA SERRA', sub: 'agência 0412', fundo: '#1F4E86', toldo: null, ext: '#DDE3EA', int: '#F2F4F7', piso: ['granilite', '#E4E2DC', '#8D949C'] },
  mercado: { nome: 'SUPERMERCADO BOM PREÇO', sub: 'ofertas todo dia', fundo: '#E2443A', toldo: ['#E2443A', '#F2C230'], ext: '#F4F1EA', int: '#F7F6F2', piso: ['ceramica', '#EDEAE2', '#D6D0C4'] },
  sorveteria: { nome: 'SORVETERIA GELATO', sub: 'açaí • picolé • sorvete', fundo: '#F2546E', toldo: ['#F2546E', '#F4F1EA'], ext: '#F7E3EC', int: '#FFF4F8', piso: ['xadrez', '#F4F1EA', '#8FD3F2'] },
  lojaRoupas: { nome: 'BOUTIQUE ESTILO', sub: 'moda feminina e masculina', fundo: '#8E6CC4', toldo: ['#8E6CC4', '#F4F1EA'], ext: '#EDE3F7', int: '#FBF8FF', piso: ['madeira', '#D9B07A', '#C8935E'] },
  bar: { nome: 'BAR DO TONHO', sub: 'futebol • petisco • sinuca', fundo: '#2E7A5A', toldo: ['#2E7A5A', '#F2C230'], ext: '#CFE3D2', int: '#F2F0E4', piso: ['ceramica', '#C9874E', '#B5703E'] },
  lojaMateriais: { nome: 'MATERIAIS SÃO JOSÉ', sub: 'construção • tintas • ferragens', fundo: '#F08A2C', toldo: ['#F08A2C', '#2A2A30'], ext: '#F2D8A8', int: '#F4EEE2', piso: ['granilite', '#D6D0C4', '#8D949C'] },
};

/** Constrói uma loja do tipo dado. */
export function loja(tipo) {
  return (ctx, nivel) => {
    const T = TIPOS[tipo], L = ctx.L, C = ctx.cidade, perto = nivel === 'perto', W = L.w - .3, R = rng(L.seed + 3);
    const z0 = -2, z1 = L.d / 2 - .1, Dd = z1 - z0, H = 4.0, cz = (z0 + z1) / 2, xa = -W / 2, xb = W / 2;
    const ext = T.ext, int = perto ? T.int : null;
    // quintal dos fundos (depósito) e muro
    const cim = toonTex(repetir(calcada('#CFC9BF', '#C4BDB2'), L.w, L.d / 2 + z0));
    ctx.add(piso(L.w, L.d / 2 + z0, cim, 0, .015, (-L.d / 2 + z0) / 2));
    for (const [x0, x1, za, zb] of [[-L.w / 2 + .075, -L.w / 2 + .075, -L.d / 2, z0], [L.w / 2 - .075, L.w / 2 - .075, -L.d / 2, z0], [-L.w / 2, L.w / 2, -L.d / 2 + .075, -L.d / 2 + .075]]) { const w = Math.abs(x1 - x0) || .15, d = Math.abs(zb - za) || .15; ctx.add(caixaTex(w, 2.2, d, tinta(ext), (x0 + x1) / 2, 1.1, (za + zb) / 2, 1, { out: .012 })); ctx.col((x0 + x1) / 2, (za + zb) / 2, w, d, { h: 2.2 }); }
    if (nivel !== 'longe') { for (let i = 0; i < 4; i++) ctx.add(rb(.6, .5 + (i % 2) * .3, .6, pega(R, ['#9A6236', '#C9874E', '#7A8696']), -L.w / 2 + 1 + i * .75, .3, -L.d / 2 + .8, { out: .01 })); }
    // paredes: laterais e fundos inteiras; frente com vitrine + porta larga
    const sob = ['farmacia', 'loterica', 'lanchonete', 'sorveteria', 'lojaRoupas', 'bar'].includes(tipo) && L.seed % 2 === 0;
    parede(ctx, xa, z0, xa, z1, { h: H, t: .2, corA: ext, corB: int });
    parede(ctx, xb, z0, xb, z1, { h: H, t: .2, corA: int, corB: ext });
    const portaW = tipo === 'mercado' ? 5 : tipo === 'banco' ? 2.0 : 3.4, pc = tipo === 'mercado' ? 0 : xa + 1.2 + portaW / 2;
    parede(ctx, xa, z0, xb, z0, { h: H, t: .2, corA: ext, corB: int, vaos: perto ? [{ a: W - 1.6, b: W - .8 }] : [] });
    const vit = tipo === 'banco' ? [] : [{ a: pc + portaW / 2 - xa + .6, b: W - .5, y0: .6, y1: 2.8 }];
    if (tipo === 'mercado') vit.length = 0, vit.push({ a: .5, b: W / 2 - 3, y0: .6, y1: 2.8 }, { a: W / 2 + 3, b: W - .5, y0: .6, y1: 2.8 });
    const vaosF = [{ a: pc - portaW / 2 - xa, b: pc + portaW / 2 - xa, y0: 0, y1: 3.0 }, ...vit];
    if (tipo === 'banco') vaosF.push({ a: .6, b: pc - portaW / 2 - xa - .6, y0: .4, y1: 3.2 }, { a: pc + portaW / 2 - xa + .6, b: W - .6, y0: .4, y1: 3.2 });
    parede(ctx, xa, z1, xb, z1, { h: H, t: .2, corA: int, corB: ext, vaos: vaosF, rodape: perto ? '#E8E4DC' : null, semRodape: ext });
    for (const v of vaosF.slice(1)) janela(ctx, xa + (v.a + v.b) / 2, z1, true, v.b - v.a, v.y0, v.y1, { t: .2, fora: 1, cortina: false, moldura: '#2A2A30', seed: L.seed });
    if (perto) porta(ctx, 'fundos', xb - 1.2, z0, true, .8, { t: .2, dobra: 1, abre: -1, cor: '#8D949C' });
    // porta: de aço enrolada (aberta) ou de vidro (banco)
    if (tipo === 'banco') { porta(ctx, 'entrada1', pc - .5, z1, true, 1.0, { t: .2, tipo: 'vidro', cor: '#C9CED6', dobra: -1, abre: -1 }); porta(ctx, 'entrada2', pc + .5, z1, true, 1.0, { t: .2, tipo: 'vidro', cor: '#C9CED6', dobra: 1, abre: -1 }); }
    else { ctx.add(rb(portaW + .2, .45, .35, '#8D949C', pc, 3.25, z1 + .12, { out: .012 })); for (let i = 0; i < 3; i++) ctx.add(bx(portaW, .04, .02, '#6E747C', pc, 3.08 + i * .1, z1 + .3)); }
    // letreiro na fachada (acende à noite) + toldo listrado
    const let_ = new THREE.Mesh(new THREE.PlaneGeometry(W - .6, 1.0), new THREE.MeshToonMaterial({ map: letreiroTex(T.nome, { fundo: T.fundo, sub: T.sub, w: 1024, h: 180, borda: '#FFFFFF' }), emissive: '#FFFFFF', emissiveMap: letreiroTex(T.nome, { fundo: T.fundo, sub: T.sub, w: 1024, h: 180, borda: '#FFFFFF' }), emissiveIntensity: 0 }));
    let_.position.set(0, 4.05, z1 + .115); let_.scale.y = .9; ctx.add(let_); C.acender(let_.material, .9);
    ctx.add(bx(W - .4, 1.0, .1, '#2A2A30', 0, 4.05, z1 + .06, { shadow: false }));
    if (T.toldo) { const tl = ctx2toldo(W - .6, T.toldo); tl.position.set(0, 3.0, z1 + .1); ctx.add(tl); }
    // número e calçada da loja
    if (tipo === 'farmacia') { const cruz = new THREE.Group(); const mc = new THREE.MeshToonMaterial({ color: '#2EBF6A', emissive: '#2EBF6A', emissiveIntensity: .2 }); cruz.add(tm(new THREE.BoxGeometry(.7, .22, .1), mc)); cruz.add(tm(new THREE.BoxGeometry(.22, .7, .1), mc)); cruz.position.set(xb - .2, 3.0, z1 + .6); cruz.rotation.y = Math.PI / 2; ctx.add(cruz); ctx.add(bx(.06, .06, .5, '#8D949C', xb - .2, 3.0, z1 + .3)); C.vivos.push((t) => { mc.emissiveIntensity = .2 + (C.n || 0) * 1.4 * (Math.sin(t * 3) > 0 ? 1 : .4); }); }
    // andar de cima (algumas lojas são sobrado com moradia em cima)
    if (sob) { const y = H; parede(ctx, xa, z0, xa, z1, { y, h: 2.8, t: .2, corA: ext, corB: '#3A3540', semCol: true }); parede(ctx, xb, z0, xb, z1, { y, h: 2.8, t: .2, corA: '#3A3540', corB: ext, semCol: true }); parede(ctx, xa, z0, xb, z0, { y, h: 2.8, t: .2, corA: ext, corB: '#3A3540', semCol: true });
      parede(ctx, xa, z1, xb, z1, { y, h: 2.8, t: .2, corA: '#3A3540', corB: ext, semCol: true, vaos: [{ a: 1.2, b: 2.6, y0: .9, y1: 2.2 }, { a: W - 2.6, b: W - 1.2, y0: .9, y1: 2.2 }] });
      janela(ctx, xa + 1.9, z1, true, 1.4, y + .9, y + 2.2, { t: .2, fora: 1, seed: L.seed + 1, cortina: '#F7D9E3', duplo: false }); janela(ctx, xb - 1.9, z1, true, 1.4, y + .9, y + 2.2, { t: .2, fora: 1, seed: L.seed + 2 });
      ctx.add(bx(W - .2, 2.6, Dd - .4, '#3A3540', 0, y + 1.4, cz, { shadow: false }));
      for (const s of [-1, 1]) { ctx.add(bx(1.6, .1, .5, '#E8E4DC', s * (W / 2 - 1.9), y + .85, z1 + .3)); }
    }
    const topo = sob ? H + 2.8 : H;
    ctx.add(bx(W + .1, .15, Dd + .2, '#C9C2B6', 0, topo + .07, cz)); platibanda(ctx, 0, cz, W, Dd, topo, ext, { alt: sob ? .9 : 1.0 });
    if (perto) { chao(ctx, 0, cz, W - .2, Dd - .2, toonTex(C.tex.piso(...T.piso)), .02); forro(ctx, 0, cz, W - .2, Dd - .2, H - .01); for (const p of [[-W / 4, cz - 2], [W / 4, cz - 2], [-W / 4, cz + 3], [W / 4, cz + 3]]) { const lm = new THREE.MeshToonMaterial({ color: '#FFFFFF', emissive: '#F4F8FF', emissiveIntensity: .5 }); ctx.add(tm(new THREE.BoxGeometry(1.2, .05, .25), lm, { pos: [p[0], H - .04, p[1]], shadow: false })); } }
    else ctx.add(bx(W - .4, H - .4, Dd - .4, '#3A3540', 0, H / 2, cz, { shadow: false }));
    if (perto) INTERIOR[tipo]?.(ctx, { W, z0, z1, H, R, C, pc, portaW });
    for (const [x, z, ry, o] of (GENTE[tipo]?.({ W, z0, z1 }) || [])) ctx.figurante(x, z, ry, o || {});
    ctx.ponto('entrada', pc, z1 + 1.2, Math.PI); ctx.pontoLivre('dentro', [[pc, z1 - 1.2], [pc, z1 - 2.2], [pc + 1, z1 - 1.2], [pc - 1, z1 - 1.5], [0, z1 - 1.2], [0, z1 - 3]], Math.PI);
  };
}
function ctx2toldo(w, [a, b]) { const t = ctex(512, 128, (x) => { for (let i = 0; i < 16; i++) { x.fillStyle = i % 2 ? b : a; x.fillRect(i * 32, 0, 32, 128); } x.fillStyle = 'rgba(0,0,0,.12)'; x.fillRect(0, 110, 512, 18); });
  t.wrapS = THREE.RepeatWrapping; t.repeat.set(w / 4, 1); const g = new THREE.Group(); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, 1.3), toonTex(t)); m.material.side = THREE.DoubleSide; m.rotation.x = -Math.PI / 2 + .5; m.position.set(0, -.3, .55); m.castShadow = true; g.add(m);
  const aba = new THREE.Mesh(new THREE.PlaneGeometry(w, .25), toonTex(t)); aba.material.side = THREE.DoubleSide; aba.position.set(0, -.75, 1.12); g.add(aba); return g; }

// quem trabalha e quem está em cada loja: [x, z, ângulo, opções]
const SENT = (a) => ({ sentado: true, assento: a });
const GENTE = {
  padaria: ({ z0, z1 }) => [[.5, z0 + 3.3, 0], [-1.8 + .65, z1 - 2.6, -Math.PI / 2, SENT(.8)], [1.5, z0 + 5.4, Math.PI]],
  farmacia: ({ z0 }) => [[0, z0 + 1.6, 0], [.4, z0 + 3.4, Math.PI]],
  loterica: ({ z0 }) => [[-2.5, z0 + 2.2, 0], [2.5, z0 + 2.2, 0], [0, z0 + 4.3, Math.PI], [0, z0 + 5.3, Math.PI]],
  lanchonete: ({ z0 }) => [[-.3, z0 + 2.2, 0], [-1.3, z0 + 3.75, Math.PI, SENT(.8)], [.7, z0 + 3.75, Math.PI, SENT(.8)]],
  banco: ({ W, z0, z1 }) => [[-1, z0 + 1.6, 0], [3, z0 + 1.6, 0], [.6 - 1.1, (z0 + z1) / 2 + .85, Math.PI, SENT(.49)], [.6 + .55, (z0 + z1) / 2 + 2.25, Math.PI, SENT(.49)], [1, z0 + 3.3, Math.PI]],
  mercado: ({ W, z1 }) => [[-W / 2 + 2.8, z1 - 3.2, -Math.PI / 2], [-W / 2 + 5, z1 - 3.2, -Math.PI / 2], [-W / 2 + 3.5, z1 - 2.2, Math.PI], [4, z1 - 6, Math.PI / 2]],
  bar: ({ z0, z1 }) => [[-.4, z0 + 2.0, 0], [-1, z0 + 3.55, Math.PI, SENT(.8)], [.1, z0 + 3.55, Math.PI, SENT(.8)], [2.6, z1 - 4.2, -Math.PI / 2]],
  sorveteria: ({ z0 }) => [[0, z0 + 2.2, 0], [.6, z0 + 4.2, Math.PI]],
  lojaRoupas: ({ W, z0 }) => [[W / 2 - 1.6, z0 + 1.7, 0], [-1, z0 + 5, Math.PI / 2]],
  lojaMateriais: ({ z0 }) => [[0, z0 + 2.2, 0], [.8, z0 + 4, Math.PI]],
};
// interiores de cada loja (coordenadas locais; frente = z1)
const put = (ctx, o, x, z, ry = 0, col = true) => { o.position.set(x, .02, z); o.rotation.y = ry; ctx.add(o); const pe = o.userData.pe; if (col && pe) { const q = Math.abs(Math.round(Math.sin(ry))) === 1; ctx.col(x, z, q ? pe[1] : pe[0], q ? pe[0] : pe[1], { h: 1.2 }); } return o; };
const naParede = (ctx, o, x, y, z, ry = 0) => { o.position.set(x, y, z); o.rotation.y = ry; ctx.add(o); return o; };
const INTERIOR = {
  padaria(ctx, { W, z0, z1, R, C }) {
    put(ctx, balcao(4.2, '#B87A4A', '#F4F1EA', true), .5, z0 + 4.2, 0); naParede(ctx, caixaRegistradora(), 2.2, 1.0, z0 + 4.2, 0);
    for (let i = 0; i < 4; i++) for (let k = 0; k < 6; k++) { const d = sph(.08, pega(R, ['#F2546E', '#F2C230', '#8E5A3A', '#F4F1EA']), -.9 + k * .35, 1.08, z0 + 4.2 + (i - 1.5) * .1, { seg: 8 }); ctx.add(d); }
    put(ctx, prateleira(4.6, 2.2, .45, 1, 'pao', '#C9874E'), .2, z0 + .35, 0); put(ctx, geladeiraBebidas('#E2443A', 1), -W / 2 + .5, z0 + 6.5, Math.PI / 2);
    const maq = new THREE.Group(); maq.add(rb(.6, .5, .45, '#C9CED6', 0, .25, 0, { out: .01 })); maq.add(cyl(.05, .05, .12, '#2A2A30', -.1, .12, .2, { seg: 8 })); naParede(ctx, maq, -1.4, 1.0, z0 + 4.2);
    for (let i = 0; i < 2; i++) { const m = new THREE.Group(); m.userData.pe = [.7, .7]; m.add(cyl(.35, .35, .04, '#F4F1EA', 0, 1.05, 0, { out: .01 })); m.add(cyl(.04, .04, 1.05, '#8D949C', 0, .52, 0, { seg: 8 })); put(ctx, m, -1.8 + i * 3.2, z1 - 2.6); for (const s of [-1, 1]) put(ctx, banqueta('#C84E4E'), -1.8 + i * 3.2 + s * .65, z1 - 2.6, 0); }
    naParede(ctx, cardapio(2.2, 1.2, [['Pão francês', 'R$ 0,90'], ['Café com leite', 'R$ 5,00'], ['Pão de queijo', 'R$ 4,50'], ['Bolo (fatia)', 'R$ 7,00'], ['Coxinha', 'R$ 6,00']]), 2.6, 2.6, z0 + .12);
    put(ctx, prateleira(2.4, 1.5, .8, 5, 'misto', '#C9874E'), W / 2 - .5, z0 + 7.0, -Math.PI / 2);
    const ilha = new THREE.Group(); ilha.userData.pe = [1.6, 1]; ilha.add(rb(1.6, .9, 1, '#B87A4A', 0, .45, 0, { out: .012 })); for (let i = 0; i < 3; i++) { ilha.add(cyl(.22, .24, .14, pega(R, ['#8E5A3A', '#F2C230', '#F4F1EA']), -.5 + i * .5, .97, 0, { out: .01 })); ilha.add(cyl(.27, .27, .02, '#F4F1EA', -.5 + i * .5, .91, 0)); } put(ctx, ilha, -W / 2 + 1.1, z0 + 7.6);
    const forno = new THREE.Group(); forno.add(rb(1.4, 1.6, .8, '#8D949C', 0, .8, 0, { out: .012 })); forno.add(bx(1.0, .6, .02, '#2A2A30', 0, 1.0, .41)); put(ctx, Object.assign(forno, { userData: { pe: [1.4, .8] } }), W / 2 - 1.0, z0 + .6);
  },
  farmacia(ctx, { W, z0, z1 }) {
    put(ctx, prateleira(W - 2.6, 2.2, .4, 20, 'remedio'), -.8, z0 + .3, 0);
    put(ctx, prateleira(6, 2.0, .4, 24, 'remedio'), -W / 2 + .3, (z0 + z1) / 2 - 1, Math.PI / 2); put(ctx, prateleira(6, 2.0, .4, 25, 'misto'), W / 2 - .3, (z0 + z1) / 2 - 1, -Math.PI / 2);
    put(ctx, balcao(3.2, '#2E9C6A', '#F4F1EA'), 0, z0 + 2.4, 0); naParede(ctx, caixaRegistradora(), 1.1, 1.0, z0 + 2.4);
    put(ctx, prateleira(1.6, 1.4, .5, 26, 'misto'), 0, (z0 + z1) / 2 + 2, 0);
    const bal = new THREE.Group(); bal.userData.pe = [.6, .6]; bal.add(bx(.5, .08, .5, '#F4F1EA', 0, .04, 0, { out: .01 })); bal.add(cyl(.03, .03, 1.1, '#C9CED6', 0, .6, -.2, { seg: 8 })); bal.add(rb(.3, .3, .1, '#2E9C6A', 0, 1.2, -.2, { out: .01 })); put(ctx, bal, W / 2 - 1, z1 - 1.5);
  },
  loterica(ctx, { W, z0, z1, C, R }) {
    put(ctx, balcao(W - .6, '#2E6FB8', '#F4F1EA', false), 0, z0 + 3, 0);
    const vid = new THREE.MeshToonMaterial({ color: '#CFE6F2', transparent: true, opacity: .3, depthWrite: false, side: THREE.DoubleSide }); ctx.add(tm(new THREE.PlaneGeometry(W - .6, 1.4), vid, { pos: [0, 1.7, z0 + 3.2], shadow: false }));
    for (let i = 0; i < 3; i++) { naParede(ctx, rb(.5, .3, .02, '#F2C230', 0, 0, 0, { out: .006 }), -2.5 + i * 2.5, 2.6, z0 + 3.25); naParede(ctx, caixaRegistradora(), -2.5 + i * 2.5, .99, z0 + 2.9, Math.PI); }
    naParede(ctx, painelSenha(C, 3), 0, 3.1, z0 + 3.25);
    naParede(ctx, cardapio(2.6, 1.0, [['MEGA DA SERRA', 'R$ 5,00'], ['QUINA', 'R$ 2,50'], ['LOTOFÁCIL', 'R$ 3,00']], '#1F4E86'), -W / 2 + .12, 2.2, (z0 + z1) / 2 + 2, Math.PI / 2);
    const mesa = new THREE.Group(); mesa.userData.pe = [2.2, .6]; mesa.add(bx(2.2, .05, .5, '#F4F1EA', 0, 1.05, 0, { out: .01 })); mesa.add(bx(2.1, 1.0, .05, '#2E6FB8', 0, .52, 0)); put(ctx, mesa, W / 2 - 1.4, (z0 + z1) / 2 + 2.5, -Math.PI / 2);
    put(ctx, cadeirasEspera(4, '#2E6FB8'), -W / 2 + .5, (z0 + z1) / 2 + 1, Math.PI / 2);
    naParede(ctx, cardapio(1.6, 1.0, [['ACUMULOU!', ''], ['R$ 45 MILHÕES', '']], '#2E9C6A'), W / 2 - .12, 2.4, (z0 + z1) / 2 - 1.2, -Math.PI / 2); put(ctx, M.planta(1.2, 6), W / 2 - .6, z1 - .7); naParede(ctx, M.relogio(C, .25), 0, 3.4, z0 + 3.26);
  },
  lanchonete(ctx, { W, z0, z1, C, R }) {
    put(ctx, balcao(5, '#E2443A', '#F4F1EA'), -.3, z0 + 3, 0); for (let i = 0; i < 5; i++) put(ctx, banqueta('#F2C230'), -2.3 + i * 1, z0 + 3.75, 0, false);
    const chapa = new THREE.Group(); chapa.add(bx(1.4, .9, .7, '#8D949C', 0, .45, 0, { out: .012 })); chapa.add(bx(1.3, .04, .6, '#2A2A30', 0, .92, 0)); for (let i = 0; i < 3; i++) chapa.add(cyl(.1, .1, .05, '#8E5A3A', -.4 + i * .4, .96, 0, { seg: 12 })); put(ctx, Object.assign(chapa, { userData: { pe: [1.4, .7] } }), -1.2, z0 + .5);
    put(ctx, geladeiraBebidas('#E2443A', 2), 1.4, z0 + .45); put(ctx, geladeiraBebidas('#2E6FB8', 3), 2.3, z0 + .45);
    naParede(ctx, cardapio(3, 1.3, [['X-TUDO', 'R$ 22'], ['X-SALADA', 'R$ 18'], ['PASTEL', 'R$ 9'], ['SUCO NATURAL', 'R$ 8'], ['REFRIGERANTE', 'R$ 6']], '#2A2A30'), -.6, 2.6, z0 + .12);
    for (let i = 0; i < 2; i++) put(ctx, mesaBar(pega(R, ['#E2443A', '#F2C230']), i), -1.8 + i * 3.6, z1 - 2.4, 0);
    const vp = vapor(C, -1.2, 1.4, z0 + .5); ctx.add(vp);
  },
  banco(ctx, { W, z0, z1, C }) {
    for (let i = 0; i < 3; i++) put(ctx, atm(), -W / 2 + 1 + i * 1.0, z1 - 2.2, Math.PI / 2 * 0 + Math.PI);
    put(ctx, balcao(W - 4, '#1F4E86', '#E8E4DC'), 1.2, z0 + 2.4, 0);
    const vid = new THREE.MeshToonMaterial({ color: '#CFE6F2', transparent: true, opacity: .3, depthWrite: false, side: THREE.DoubleSide }); ctx.add(tm(new THREE.PlaneGeometry(W - 4, 1.0), vid, { pos: [1.2, 1.5, z0 + 2.3], shadow: false }));
    for (let i = 0; i < 3; i++) naParede(ctx, caixaRegistradora(), -1 + i * 2, .99, z0 + 2.1, Math.PI);
    naParede(ctx, painelSenha(C, 7), W / 2 - 1.5, 3.0, z0 + .12);
    put(ctx, cadeirasEspera(5, '#1F4E86'), .6, (z0 + z1) / 2 + .8, Math.PI); put(ctx, cadeirasEspera(5, '#1F4E86'), .6, (z0 + z1) / 2 + 2.2, Math.PI);
    put(ctx, M.planta(1.4, 3), W / 2 - .6, z1 - .8); put(ctx, M.planta(1.4, 4), -W / 2 + .6, z0 + .6);
    naParede(ctx, cardapio(2.4, .5, [['ATENDIMENTO 10h às 16h', '']], '#1F4E86'), -2.0, 2.9, z0 + .12);
    const logo = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.1), toonTex(letreiroTex('BANCO DA SERRA', { fundo: '#1F4E86', sub: 'seu dinheiro em boas mãos', w: 1024, h: 340, borda: '#F2C230' }))); logo.position.set(-W / 2 + .12, 2.6, (z0 + z1) / 2 - .5); logo.rotation.y = Math.PI / 2; ctx.add(logo);
    naParede(ctx, M.quadro(1.6, 1.0, 21, 'paisagem'), W / 2 - .12, 2.2, (z0 + z1) / 2 - .5, -Math.PI / 2);
    for (let i = 0; i < 2; i++) { const pos = new THREE.Group(); pos.add(cyl(.18, .2, .04, '#9AA0A8', 0, .02, 0)); pos.add(cyl(.03, .03, 1, '#9AA0A8', 0, .5, 0, { seg: 8 })); pos.add(sph(.05, '#9AA0A8', 0, 1.02, 0)); naParede(ctx, pos, -1.6 + i * 3.6, .02, z0 + 4.2); }
    const fita = bx(3.6, .05, .02, '#E2443A', .2, .95, z0 + 4.2); ctx.add(fita);
    put(ctx, M.planta(1.3, 9), -W / 2 + .6, (z0 + z1) / 2 + 3); put(ctx, M.planta(1.3, 10), W / 2 - .6, z0 + .6);
    const mesaGer = M.escrivaninha(1.4, '#7A5233', true, 2); mesaGer.userData.pe = [1.4, .6]; put(ctx, mesaGer, W / 2 - 1.3, (z0 + z1) / 2 - 1.5, -Math.PI / 2); put(ctx, M.cadeiraEscritorio(), W / 2 - .55, (z0 + z1) / 2 - 1.5, -Math.PI / 2, false); put(ctx, M.cadeira('#1F4E86'), W / 2 - 2.3, (z0 + z1) / 2 - 1.2, Math.PI / 2, false);
  },
  mercado(ctx, { W, z0, z1, R }) {
    for (let i = 0; i < 4; i++) put(ctx, gondola(6, i * 9), -W / 2 + 3.5 + i * 3.6, (z0 + z1) / 2 - 1.5, Math.PI / 2);
    put(ctx, prateleira(W - 1.6, 2.0, .45, 77, 'garrafa'), 0, z0 + .35, 0);
    for (let i = 0; i < 3; i++) put(ctx, caixaMercado(i), -W / 2 + 2 + i * 2.2, z1 - 3, 0);
    for (let i = 0; i < 3; i++) put(ctx, bancaFrutas(i), W / 2 - 1.2, z1 - 2.5 - i * 1.4, -Math.PI / 2);
    for (let i = 0; i < 4; i++) put(ctx, carrinho(), W / 2 - 3.2 + (i % 2) * .2, z1 - 1.0 - i * .05, Math.PI / 2 * (i % 2), false);
    const frz = new THREE.Group(); frz.userData.pe = [3, .9]; frz.add(rb(3, .85, .9, '#F4F1EA', 0, .43, 0, { out: .012 })); frz.add(bx(2.8, .02, .8, '#8FD3F2', 0, .86, 0)); put(ctx, frz, 3, z0 + 1.6);
    for (const [x, n] of [[-W / 2 + 3.5, 'MERCEARIA'], [-W / 2 + 7.1, 'BEBIDAS'], [-W / 2 + 10.7, 'LIMPEZA'], [-W / 2 + 14.3, 'HIGIENE']]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(1.6, .4), new THREE.MeshBasicMaterial({ map: letreiroTex(n, { fundo: '#E2443A', w: 384, h: 96 }), side: THREE.DoubleSide })); p.position.set(x, 3.1, (z0 + z1) / 2 - 1.5); p.rotation.y = Math.PI / 2; ctx.add(p); ctx.add(bx(.02, .9, .02, '#8D949C', x, 3.6, (z0 + z1) / 2 - 1.5)); }
  },
  sorveteria(ctx, { W, z0, z1, R }) {
    const frz = new THREE.Group(); frz.userData.pe = [4, .9]; frz.add(rb(4, .95, .85, '#F4F1EA', 0, .48, 0, { out: .012 })); const vd = new THREE.MeshToonMaterial({ color: '#CFE6F2', transparent: true, opacity: .35, depthWrite: false }); frz.add(tm(new THREE.BoxGeometry(3.8, .35, .7), vd, { pos: [0, 1.15, 0], shadow: false }));
    for (let i = 0; i < 12; i++) frz.add(cyl(.12, .12, .1, pega(R, ['#F2546E', '#F2C230', '#8E5A3A', '#F4F1EA', '#5AA84E', '#8E6CC4', '#8FD3F2']), -1.65 + (i % 6) * .66, 1.0, -.15 + Math.floor(i / 6) * .3, { seg: 12 }));
    put(ctx, frz, 0, z0 + 3); put(ctx, geladeiraBebidas('#F2546E', 5), -W / 2 + .5, z0 + .5, Math.PI / 2);
    naParede(ctx, cardapio(2.6, 1.2, [['1 BOLA', 'R$ 8'], ['2 BOLAS', 'R$ 14'], ['AÇAÍ 500ml', 'R$ 20'], ['PICOLÉ', 'R$ 5']], '#F2546E'), 0, 2.6, z0 + .12);
    for (let i = 0; i < 2; i++) put(ctx, mesaBar(pega(R, ['#F2546E', '#8FD3F2']), i), -1.8 + i * 3.6, z1 - 2.4, 0);
    put(ctx, mesaBar('#8FD3F2', 3), -2.4, z0 + 6.6, 0); const pic = new THREE.Group(); pic.userData.pe = [1.4, .8]; pic.add(rb(1.4, .85, .8, '#F4F1EA', 0, .43, 0, { out: .012 })); pic.add(placa(1.2, .35, toonTex(letreiroTex('PICOLÉ', { fundo: '#8FD3F2', cor: '#F2546E' })), 0, .55, .41)); for (let i = 0; i < 10; i++) pic.add(rb(.08, .2, .03, pega(R, ['#F2546E', '#F2C230', '#8E5A3A', '#5AA84E']), -.5 + i * .11, .95, 0, { r: .03 })); put(ctx, pic, W / 2 - .7, z0 + 6.2, -Math.PI / 2);
    naParede(ctx, M.quadro(1.0, 1.3, 51, 'abstrato'), -W / 2 + .12, 2.0, z0 + 6, Math.PI / 2); put(ctx, M.planta(1.2, 4), W / 2 - .6, z1 - .7); const cone = new THREE.Group(); cone.add(tm(new THREE.ConeGeometry(.35, 1, 12), '#D9B07A', { pos: [0, .5, 0], rot: [Math.PI, 0, 0], out: .014 })); cone.add(sph(.38, '#F2546E', 0, 1.15, 0, { out: .014 })); cone.add(sph(.15, '#E2443A', 0, 1.55, 0, { out: .01 })); naParede(ctx, cone, -W / 2 + .8, 2.4, z1 - .7);
  },
  lojaRoupas(ctx, { W, z0, z1, R }) {
    put(ctx, arara(2.2, 1), -W / 2 + .8, (z0 + z1) / 2 - 2, Math.PI / 2); put(ctx, arara(2.2, 2), -W / 2 + .8, (z0 + z1) / 2 + 1.5, Math.PI / 2); put(ctx, arara(1.6, 3), 1.2, (z0 + z1) / 2, 0);
    put(ctx, prateleira(4, 2.2, .45, 40, 'caixa'), 0, z0 + .35, 0); put(ctx, balcao(2, '#8E6CC4', '#F4F1EA'), W / 2 - 1.6, z0 + 2.5, 0);
    put(ctx, manequim('#F2546E'), 1.2, z1 - 1.0); put(ctx, manequim('#3E7CC8'), 2.4, z1 - 1.0);
    const prov = new THREE.Group(); prov.userData.pe = [1.2, 1.2]; prov.add(bx(1.2, 2.2, .05, '#8E6CC4', 0, 1.1, -.6, { out: .01 })); prov.add(bx(.05, 2.2, 1.2, '#8E6CC4', -.6, 1.1, 0, { out: .01 })); const cort = rb(1.1, 1.9, .03, '#F2C230', 0, 1.15, .6, { r: .01 }); prov.add(cort); put(ctx, prov, W / 2 - .7, (z0 + z1) / 2 + 1.0);
    const esp = new THREE.Mesh(new THREE.PlaneGeometry(.7, 1.6), new THREE.MeshToonMaterial({ color: '#CFE6F2', emissive: '#9CC9E8', emissiveIntensity: .3 })); esp.position.set(W / 2 - .12, 1.2, (z0 + z1) / 2 - 2); esp.rotation.y = -Math.PI / 2; ctx.add(esp);
  },
  bar(ctx, { W, z0, z1, C, R }) {
    put(ctx, balcao(4.6, '#7A5233', '#3A3A44'), -.4, z0 + 2.8, 0); for (let i = 0; i < 4; i++) put(ctx, banqueta('#2E7A5A'), -2.1 + i * 1.1, z0 + 3.55, 0, false);
    put(ctx, prateleira(4, 2.0, .35, 60, 'garrafa', '#7A5233'), -.4, z0 + .3, 0); put(ctx, geladeiraBebidas('#E2443A', 9), W / 2 - .6, z0 + .5);
    const tv = M.rackTV(.01); const tela = tv.userData.tela; tv.children.slice(0, 3).forEach(c => c.visible = false); naParede(ctx, tv, -W / 2 + .2, 1.6, z0 + 5, Math.PI / 2); C.vivos.push((t) => M.animarTV(tela, t, 3));
    put(ctx, sinuca(), 1.2, z1 - 4.2, 0); put(ctx, mesaBar('#F2C230', 1), -2.4, z1 - 2, 0);
    naParede(ctx, cardapio(2.0, 1.0, [['CERVEJA', 'R$ 10'], ['PORÇÃO FRITAS', 'R$ 25'], ['REFRI', 'R$ 6']], '#2E7A5A'), W / 2 - .12, 2.4, z1 - 3, -Math.PI / 2);
  },
  lojaMateriais(ctx, { W, z0, z1 }) {
    put(ctx, prateleira(W - 1.6, 2.4, .5, 80, 'tinta', '#8D949C'), 0, z0 + .35, 0); put(ctx, prateleira(6, 2.4, .5, 81, 'tinta', '#8D949C'), -W / 2 + .35, (z0 + z1) / 2, Math.PI / 2);
    for (let i = 0; i < 6; i++) { const sc = rb(.6, .15, .4, '#B9B3AA', 0, 0, 0, { out: .008 }); naParede(ctx, sc, W / 2 - 1.2, .1 + i * .15, z1 - 2.5); } ctx.col(W / 2 - 1.2, z1 - 2.5, .7, .5);
    for (let i = 0; i < 4; i++) for (let k = 0; k < 3; k++) naParede(ctx, bx(.2, .1, .1, '#B5603E', 0, 0, 0), W / 2 - 2.6 + k * .22, .06 + i * .1, z1 - 4); ctx.col(W / 2 - 2.4, z1 - 4, .8, .3);
    put(ctx, balcao(2.4, '#F08A2C', '#F4F1EA'), 0, z0 + 3, 0); naParede(ctx, caixaRegistradora(), .7, 1.0, z0 + 3);
    for (let i = 0; i < 5; i++) { const cano = cyl(.04, .04, 3, '#F4F1EA', 0, 0, 0, { seg: 8 }); cano.rotation.z = Math.PI / 2; naParede(ctx, cano, 0, .3 + i * .09, z1 - 6); } ctx.col(0, z1 - 6, 3, .3);
  },
};
/** Vapor que sobe (chapa, fogão, café). */
export function vapor(C, x, y, z) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.userData.vivo = true; const m = new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: .25, depthWrite: false });
  const bolas = []; for (let i = 0; i < 6; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(.12, 8, 6), m); g.add(b); bolas.push(b); }
  C.vivos.push((t) => bolas.forEach((b, i) => { const u = ((t * .5 + i / 6) % 1); b.position.set(Math.sin(t + i) * .08, u * 1.0, Math.cos(t * .7 + i) * .05); b.scale.setScalar(.6 + u * 1.3); }));
  return g;
}

/** Prefeitura: prédio clássico com colunas, escadaria, mastros com bandeiras e brasão. */
export function prefeitura(ctx, nivel) {
  const L = ctx.L, C = ctx.cidade, W = L.w - .4, z0 = -7, z1 = L.d / 2 - 2.5, H = 7.6, cz = (z0 + z1) / 2, perto = nivel === 'perto';
  const ext = '#F2EBDD', int = perto ? '#F7F2E6' : null;
  ctx.add(piso(L.w, L.d, toonTex(repetir(C.tex.ondas(), L.w / 2, L.d / 2)), 0, .015, 0));
  for (let i = 0; i < 4; i++) ctx.add(bx(W * .5, .15, .4, '#E8E4DC', 0, .075 + i * .15, z1 + 1.6 - i * .4, { out: .01 }));
  ctx.col(-W * .25 - .3, z1 + 1, .3, 1.5); ctx.col(W * .25 + .3, z1 + 1, .3, 1.5);
  parede(ctx, -W / 2, z0, -W / 2, z1, { h: H, t: .3, corA: ext, corB: int }); parede(ctx, W / 2, z0, W / 2, z1, { h: H, t: .3, corA: int, corB: ext }); parede(ctx, -W / 2, z0, W / 2, z0, { h: H, t: .3, corA: ext, corB: int });
  const jan = []; for (let i = 0; i < 6; i++) { const c = -W / 2 + 1.8 + i * (W - 3.6) / 5; if (Math.abs(c) < 2) continue; jan.push({ c, y0: 1.0, y1: 3.0 }, { c, y0: 4.6, y1: 6.6 }); }
  parede(ctx, -W / 2, z1, W / 2, z1, { h: H, t: .3, corA: int, corB: ext, vaos: [{ a: W / 2 - 1.2, b: W / 2 + 1.2, y0: 0, y1: 3.2 }, ...jan.map(j => ({ a: j.c - .6 + W / 2, b: j.c + .6 + W / 2, y0: j.y0, y1: j.y1 }))] });
  for (const j of jan) janela(ctx, j.c, z1, true, 1.2, j.y0, j.y1, { t: .3, fora: 1, cortina: '#F3E3C0', seed: j.c * 3 | 0, moldura: '#E8E4DC' });
  porta(ctx, 'entrada1', -.6, z1, true, 1.2, { t: .3, h: 3.2, dobra: -1, abre: -1, cor: '#7A5233' }); porta(ctx, 'entrada2', .6, z1, true, 1.2, { t: .3, h: 3.2, dobra: 1, abre: -1, cor: '#7A5233' });
  for (let i = 0; i < 6; i++) { const x = -W / 2 + 1.5 + i * (W - 3) / 5; ctx.add(cyl(.32, .36, H - .2, '#F4F1EA', x, (H - .2) / 2 + .6, z1 + 1.3, { out: .014, seg: 16 })); ctx.col(x, z1 + 1.3, .7, .7, { h: H }); }
  ctx.add(bx(W + .6, .6, 2.6, '#F4F1EA', 0, H + .3, z1 + .3, { out: .014 })); const fr = new THREE.Shape(); fr.moveTo(-W / 2 - .3, 0); fr.lineTo(W / 2 + .3, 0); fr.lineTo(0, 2.0); fr.lineTo(-W / 2 - .3, 0);
  const fronta = tm(new THREE.ExtrudeGeometry(fr, { depth: .4, bevelEnabled: false }), '#F4F1EA', { pos: [0, H + .6, z1 + 1.2], out: .014 }); ctx.add(fronta);
  const tx = letreiroTex('PREFEITURA MUNICIPAL DE PEDRA ALTA', { fundo: '#F4F1EA', cor: '#7A5233', w: 1024, h: 96, peso: 900 }); ctx.add(placa(W * .8, .5, toonTex(tx), 0, H + .3, z1 + 1.62));
  const bra = new THREE.Mesh(new THREE.CircleGeometry(.6, 24), toonTex(ctex(128, 128, (x) => { x.fillStyle = '#2E6FB8'; x.beginPath(); x.arc(64, 64, 62, 0, 7); x.fill(); x.fillStyle = '#F2C230'; x.beginPath(); x.moveTo(64, 14); x.lineTo(112, 100); x.lineTo(16, 100); x.fill(); x.fillStyle = '#9E9A94'; x.beginPath(); x.moveTo(64, 40); x.lineTo(92, 96); x.lineTo(36, 96); x.fill(); })));
  bra.position.set(0, H + 1.25, z1 + 1.61); ctx.add(bra);
  ctx.add(bx(W + .2, .2, Dd2(z0, z1) + .2, '#C9C2B6', 0, H + .1, cz)); platibanda(ctx, 0, cz, W, z1 - z0, H, ext, { alt: .6 });
  // mastros com bandeiras (vivas)
  for (let i = 0; i < 3; i++) { const x = -9.5 + i * 2.6, z = L.d / 2 - .8; ctx.add(cyl(.05, .06, 8, '#C9CED6', x, 4, z, { seg: 8 })); ctx.col(x, z, .2, .2);
    const cores = [['#2E9C4A', '#F2C230', '#2E6FB8'], ['#E2443A', '#F4F1EA', '#2A2A30'], ['#2E6FB8', '#F4F1EA', '#F2C230']][i];
    const tex = ctex(128, 80, (x2) => { x2.fillStyle = cores[0]; x2.fillRect(0, 0, 128, 80); x2.fillStyle = cores[1]; x2.beginPath(); x2.moveTo(64, 8); x2.lineTo(120, 40); x2.lineTo(64, 72); x2.lineTo(8, 40); x2.fill(); x2.fillStyle = cores[2]; x2.beginPath(); x2.arc(64, 40, 18, 0, 7); x2.fill(); });
    const geo = new THREE.PlaneGeometry(1.5, .95, 12, 1); const b = new THREE.Mesh(geo, new THREE.MeshToonMaterial({ map: tex, side: THREE.DoubleSide })); b.userData.vivo = true; b.position.set(x + .78, 7.4, z); ctx.add(b);
    const base = geo.attributes.position.array.slice(); C.vivos.push((t) => { const p = geo.attributes.position; for (let k = 0; k < p.count; k++) { const u = (base[k * 3] + .75) / 1.5; p.setZ(k, Math.sin(t * 4 + u * 5 + i) * .12 * u); } p.needsUpdate = true; geo.computeVertexNormals(); }); }
  if (perto) { chao(ctx, 0, cz, W - .3, z1 - z0 - .3, toonTex(C.tex.piso('granilite', '#E8E0D2', '#8D949C')), .02); forro(ctx, 0, cz, W - .3, z1 - z0 - .3, 3.6);
    put(ctx, balcao(4, '#7A5233', '#F4F1EA'), 0, z0 + 3, 0); put(ctx, cadeirasEspera(5, '#7A5233'), -4, z1 - 3, Math.PI); put(ctx, cadeirasEspera(5, '#7A5233'), 4, z1 - 3, Math.PI);
    naParede(ctx, M.quadro(1.4, 1.0, 3, 'paisagem'), 0, 2.4, z0 + .17); put(ctx, M.planta(1.5, 1), -W / 2 + .8, z1 - .8); put(ctx, M.planta(1.5, 2), W / 2 - .8, z1 - .8); naParede(ctx, painelSenha(C, 12), 3, 2.6, z0 + .17); }
  else ctx.add(bx(W - .6, H - .4, z1 - z0 - .6, '#3A3540', 0, H / 2, cz, { shadow: false }));
  ctx.ponto('entrada', 0, z1 + 3, Math.PI); ctx.ponto('escadaria', 0, z1 + 1.8, Math.PI);
}
const Dd2 = (a, b) => b - a;
