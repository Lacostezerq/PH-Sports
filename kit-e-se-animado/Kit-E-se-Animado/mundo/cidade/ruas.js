// Ruas, calçadas, meio-fio, faixas, postes, placas com nome de rua e semáforos.
import * as THREE from 'three';
import { toon, tm, bx, cyl, sph, rb, piso, caixaTex, fundir, D } from './util.js';
import { asfalto, calcada, letreiroTex, repetir, grama } from './texturas.js';
import { toonTex } from '../base/toon.js';
import { RUA, CALC, MEIOFIO, XS, ZS, NOMES_X, NOMES_Z, qx, qz, SEMAFOROS, PONTOS_ONIBUS } from './mapa.js';

/** Fase do semáforo no tempo t. eixo 'x' = carros andando no eixo x (ruas leste-oeste). Ciclo de 32 s. */
export function sinal(t, eixo, ox = 0, oz = 0) {
  const c = ((t + (ox + oz) * .05) % 32 + 32) % 32; // pequena defasagem entre cruzamentos
  if (eixo === 'x') return c < 13 ? 'verde' : c < 16 ? 'amarelo' : 'vermelho';
  return c < 16 ? 'vermelho' : c < 29 ? 'verde' : c < 32 ? 'amarelo' : 'vermelho';
}

const AMARELO = '#F2C230', BRANCO = '#F4F1EA';
export function ruas(C) {
  const raiz = new THREE.Group(); raiz.name = 'ruas';
  const x0 = XS[0] - RUA / 2, x1 = XS[XS.length - 1] + RUA / 2, z0 = ZS[0] - RUA / 2, z1 = ZS[ZS.length - 1] + RUA / 2;
  // asfalto da cidade inteira (as quadras ficam por cima)
  const asf = asfalto(); const ma = toonTex(repetir(asf, (x1 - x0) / 4, (z1 - z0) / 4));
  raiz.add(piso(x1 - x0, z1 - z0, ma, (x0 + x1) / 2, 0, (z0 + z1) / 2));
  // estradas que saem da cidade: Estrada Velha (norte e sul) e Rua da Matriz até o lago
  const sai = (x, za, zb) => raiz.add(piso(RUA, zb - za, toonTex(repetir(asf, RUA / 4, (zb - za) / 4)), x, 0, (za + zb) / 2));
  sai(XS[5], -420, z0); sai(XS[5], z1, 160); sai(XS[2], z1, 136);
  // quadras: bloco da calçada (topo em y = MEIOFIO) + meio-fio
  const lado = QUADRA_TOT();
  const mc = toonTex(repetir(calcada(), lado, lado)), mf = toon('#B9B3AA');
  for (let lin = 0; lin < 4; lin++) for (let col = 0; col < 5; col++) {
    const cx = qx(col), cz = qz(lin);
    const g = new THREE.Mesh(new THREE.BoxGeometry(lado, MEIOFIO, lado), [mf, mf, mc, mf, mf, mf]); g.position.set(cx, MEIOFIO / 2, cz); g.receiveShadow = true; raiz.add(g);
    const fio = bx(lado + .06, .02, lado + .06, '#E6E1D8', cx, MEIOFIO + .001, cz, { shadow: false }); fio.scale.set(1, 1, 1); // borda clara do meio-fio
  }
  // faixas: linha amarela tracejada no meio, faixa de pedestre e linha de parada em cada cruzamento
  const tr = new THREE.Group();
  const traco = (x, z, w, d, cor) => tr.add(piso(w, d, toon(cor), x, .012, z));
  for (const z of ZS) for (let i = 0; i < XS.length - 1; i++) { const a = XS[i] + RUA / 2 + 6, b = XS[i + 1] - RUA / 2 - 6; for (let x = a; x < b - 2; x += 5) traco(x + 1.25, z, 2.5, .16, AMARELO); }
  for (const x of XS) for (let i = 0; i < ZS.length - 1; i++) { const a = ZS[i] + RUA / 2 + 6, b = ZS[i + 1] - RUA / 2 - 6; for (let z = a; z < b - 2; z += 5) traco(x, z + 1.25, .16, 2.5, AMARELO); }
  for (const x of XS) for (const z of ZS) {
    for (const s of [-1, 1]) { // zebra nos 4 lados
      if (z + s * (RUA / 2 + 2) > z0 && z + s * (RUA / 2 + 2) < z1) for (let k = -4; k <= 4; k++) traco(x + k * 1, z + s * (RUA / 2 + 2.2), .55, 3, BRANCO);
      if (x + s * (RUA / 2 + 2) > x0 && x + s * (RUA / 2 + 2) < x1) for (let k = -4; k <= 4; k++) traco(x + s * (RUA / 2 + 2.2), z + k * 1, 3, .55, BRANCO);
      traco(x + s * (RUA / 2 + 4.2), z + s * RUA / 4, .35, RUA / 2 - .3, BRANCO); // linha de parada (mão direita)
      traco(x - s * RUA / 4, z + s * (RUA / 2 + 4.2), RUA / 2 - .3, .35, BRANCO);
    }
  }
  raiz.add(tr);
  C.cena.add(fundir(raiz));

  // ---------- postes, árvores de calçada, placas, bueiros ----------
  const mob = new THREE.Group(); mob.name = 'mobiliario';
  const mLamp = new THREE.MeshToonMaterial({ color: '#FFF6D8', emissive: '#FFD98A', emissiveIntensity: 0 }); C.acender(mLamp, 2.2);
  const poste = (x, z, ry) => { const p = new THREE.Group(); p.position.set(x, MEIOFIO, z); p.rotation.y = ry;
    p.add(cyl(.09, .12, 7.4, '#8D949C', 0, 3.7, 0, { out: .012, seg: 10 }));
    const br = bx(.09, .09, 1.8, '#8D949C', 0, 7.2, .9, { out: .012 }); br.rotation.x = -8 * D; p.add(br);
    const cab = rb(.42, .16, .8, '#6E747C', 0, 7.12, 1.75, { out: .012 }); p.add(cab);
    const l = new THREE.Mesh(new THREE.BoxGeometry(.32, .04, .62), mLamp); l.position.set(0, 7.03, 1.75); p.add(l);
    mob.add(p); C.colisores.push({ x, z, w: .3, d: .3, h: 7 }); C.postes.push([x + Math.sin(ry) * 1.75, 7, z + Math.cos(ry) * 1.75]); };
  const off = RUA / 2 + .45; // poste perto do meio-fio
  for (let i = 0; i < XS.length - 1; i++) for (const z of ZS) for (const s of [-1, 1]) {
    const a = XS[i] + RUA / 2 + CALC, b = XS[i + 1] - RUA / 2 - CALC; if (z + s * off < ZS[0] || z + s * off > ZS[ZS.length - 1]) continue;
    for (let k = 0; k < 2; k++) { const x = a + (b - a) * (k ? .78 : .22) + (s > 0 ? 5.5 : 0); poste(x, z + s * off, s > 0 ? Math.PI : 0); }
  }
  for (let i = 0; i < ZS.length - 1; i++) for (const x of XS) for (const s of [-1, 1]) {
    const a = ZS[i] + RUA / 2 + CALC, b = ZS[i + 1] - RUA / 2 - CALC; if (x + s * off < XS[0] || x + s * off > XS[XS.length - 1]) continue;
    const z = (a + b) / 2 + (s > 0 ? 5.5 : -5.5); poste(x + s * off, z, s > 0 ? -Math.PI / 2 : Math.PI / 2);
  }
  // placas com nome de rua em cada esquina (canto noroeste de cada quadra)
  for (let lin = 0; lin < 4; lin++) for (let col = 0; col < 5; col++) {
    const x = XS[col] + RUA / 2 + .5, z = ZS[lin] + RUA / 2 + .5;
    const p = new THREE.Group(); p.position.set(x, MEIOFIO, z);
    p.add(cyl(.045, .05, 2.9, '#5E646C', 0, 1.45, 0, { out: .01, seg: 8 }));
    const pz = new THREE.Mesh(new THREE.BoxGeometry(1.5, .32, .03), [toon('#2E6FB8'), toon('#2E6FB8'), toon('#2E6FB8'), toon('#2E6FB8'), toonTex(letreiroTex(NOMES_Z[lin], { w: 512, h: 110 })), toonTex(letreiroTex(NOMES_Z[lin], { w: 512, h: 110 }))]); pz.position.set(.7, 2.75, 0); p.add(pz);
    const px = new THREE.Mesh(new THREE.BoxGeometry(.03, .32, 1.5), [toonTex(letreiroTex(NOMES_X[col], { w: 512, h: 110 })), toonTex(letreiroTex(NOMES_X[col], { w: 512, h: 110 })), toon('#2E6FB8'), toon('#2E6FB8'), toon('#2E6FB8'), toon('#2E6FB8')]); px.position.set(0, 2.38, .7); p.add(px);
    mob.add(p); C.colisores.push({ x, z, w: .2, d: .2, h: 3 });
  }
  // bueiros
  for (const x of XS) for (const z of ZS) for (const s of [-1, 1]) { const b = bx(.9, .02, .35, '#3A3C42', x + s * (RUA / 2 + 5), .01, z + RUA / 2 - .25, { shadow: false }); mob.add(b); }
  C.cena.add(fundir(mob));

  // ---------- abrigos de ônibus ----------
  for (const P of PONTOS_ONIBUS) abrigo(C, P);
  // ---------- semáforos (vivos) ----------
  for (const [sx, sz] of SEMAFOROS) semaforos(C, sx, sz);
}
export const QUADRA_TOT = () => 60 - RUA; // 50 m: quadra + calçadas

function semaforos(C, cx, cz) {
  const cores = { vermelho: '#E8443A', amarelo: '#F2C230', verde: '#3CCB6A' };
  const mats = { x: {}, z: {} };
  for (const e of ['x', 'z']) for (const k in cores) { mats[e][k] = new THREE.MeshBasicMaterial({ color: '#2A2C30' }); }
  const um = (x, z, ry, eixo) => { const g = new THREE.Group(); g.position.set(x, MEIOFIO, z); g.rotation.y = ry;
    g.add(cyl(.07, .09, 3.2, '#3A3D44', 0, 1.6, 0, { out: .012, seg: 10 }));
    const cx2 = rb(.38, 1.05, .3, '#2A2C30', 0, 3.4, .12, { out: .014 }); g.add(cx2);
    ['vermelho', 'amarelo', 'verde'].forEach((k, i) => { const l = new THREE.Mesh(new THREE.CircleGeometry(.11, 18), mats[eixo][k]); l.position.set(0, 3.72 - i * .32, .275); g.add(l);
      const pala = bx(.28, .02, .12, '#2A2C30', 0, 3.84 - i * .32, .33); g.add(pala); });
    C.cena.add(g); C.colisores.push({ x, z, w: .25, d: .25, h: 3.5 }); };
  const o = RUA / 2 + .6;
  um(cx - o, cz - o, 0, 'z'); um(cx + o, cz + o, Math.PI, 'z'); // de frente para quem vem no eixo z
  um(cx + o, cz - o, Math.PI / 2, 'x'); um(cx - o, cz + o, -Math.PI / 2, 'x');
  C.vivos.push((t) => { for (const e of ['x', 'z']) { const f = sinal(t, e, cx, cz); for (const k in cores) mats[e][k].color.set(k === f ? cores[k] : '#2A2C30'); } });
}

/** Abrigo de ônibus com banco, teto de vidro, propaganda e placa. */
function abrigo(C, P) {
  const g = new THREE.Group(); g.position.set(P.x, MEIOFIO, P.z); g.rotation.y = P.ry;
  for (const s of [-1, 1]) g.add(bx(.1, 2.5, .1, '#3A3D44', s * 1.8, 1.25, -.6, { out: .01 }));
  g.add(bx(4, .08, 1.6, '#3A3D44', 0, 2.55, -.1, { out: .01 })); g.add(new THREE.Mesh(new THREE.BoxGeometry(3.9, .04, 1.5), new THREE.MeshToonMaterial({ color: '#BFDDF0', transparent: true, opacity: .5 })).translateY(2.52).translateZ(-.1));
  g.add(new THREE.Mesh(new THREE.PlaneGeometry(3.5, 1.9), new THREE.MeshToonMaterial({ color: '#BFDDF0', transparent: true, opacity: .3, side: THREE.DoubleSide, depthWrite: false })).translateY(1.25).translateZ(-.62));
  const ad = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.7), toonTex(letreiroTex('SORVETERIA GELATO', { fundo: '#F2546E', w: 256, h: 400, sub: 'na praça!' }))); ad.position.set(1.75, 1.3, -.55); ad.rotation.y = -Math.PI / 2; g.add(ad); g.add(bx(.06, 1.8, 1.2, '#3A3D44', 1.8, 1.3, -.05));
  for (let i = 0; i < 3; i++) g.add(rb(.9, .06, .42, '#C9874E', -1.1 + i * 1, .48, -.3, { out: .008 })); g.add(bx(3, .06, .06, '#3A3D44', 0, .42, -.3)); for (const x of [-1.4, 0, 1.4]) g.add(bx(.06, .42, .06, '#3A3D44', x, .21, -.3));
  const pl = new THREE.Group(); pl.position.set(-2.4, 0, .3); pl.add(cyl(.04, .04, 2.6, '#3A3D44', 0, 1.3, 0, { seg: 6 })); pl.add(new THREE.Mesh(new THREE.CircleGeometry(.3, 20), toonTex(letreiroTex('P', { fundo: '#2E6FB8', w: 128, h: 128, raio: 64 }))).translateY(2.5).translateZ(.02)); g.add(pl);
  C.cena.add(g); const c = Math.abs(Math.sin(P.ry)) > .5; C.colisores.push({ x: P.x - .3 * Math.sin(P.ry), z: P.z - .3 * Math.cos(P.ry), w: c ? .6 : 3.4, d: c ? 3.4 : .6, h: .5 }); for (const s of [-1, 1]) { const px = P.x + s * 1.8 * Math.cos(P.ry) - .6 * Math.sin(P.ry), pz = P.z - s * 1.8 * Math.sin(P.ry) - .6 * Math.cos(P.ry); C.colisores.push({ x: px, z: pz, w: .15, d: .15, h: 2.5 }); }
  C.pontos[P.nome] = { x: P.x + Math.sin(P.ry) * .6, z: P.z + Math.cos(P.ry) * .6, y: MEIOFIO, ry: P.ry };
}
