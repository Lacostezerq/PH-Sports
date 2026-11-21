// Peças de construção: parede com vãos (porta/janela), porta que abre, janela com vidro e grade, telhado, forro, piso.
import * as THREE from 'three';
import { toon, tm, bx, cyl, rb, piso, placa, caixaTex, uvCaixa, D, paraMundo, giroMundo } from './util.js';
import { reboco, telha as telhaTex, repetir, vidroTex } from './texturas.js';
import { toonTex } from '../base/toon.js';

const MAT = new Map();
/** Material de parede pintada (com textura leve de reboco). */
export function tinta(cor) { if (!MAT.has(cor)) MAT.set(cor, toonTex(reboco(cor))); return MAT.get(cor); }

/**
 * Parede reta (eixo x ou z) de (x1,z1) até (x2,z2), com vãos.
 * vaos: [{ a, b, y0, y1 }] medidos ao longo da parede a partir de (x1,z1).
 * corA = cor do lado esquerdo/negativo (−z se a parede corre em x; −x se corre em z), corB = do outro lado.
 * Registra colisão nas partes sólidas até a altura da porta.
 */
export function parede(ctx, x1, z1, x2, z2, o = {}) {
  const h = o.h ?? 2.8, t = o.t ?? .14, y = o.y ?? 0, vaos = (o.vaos || []).slice().sort((a, b) => a.a - b.a);
  const emX = Math.abs(z2 - z1) < 1e-6, L = emX ? x2 - x1 : z2 - z1; const sg = Math.sign(L) || 1, len = Math.abs(L);
  const peca = (a, b, y0, y1) => { if (b - a < .005 || y1 - y0 < .005) return; const m = (a + b) / 2 * sg, w = b - a, hh = y1 - y0, cy = y + (y0 + y1) / 2;
    const cx = emX ? x1 + m : x1, cz = emX ? z1 : z1 + m;
    for (const [lado, cor] of [[-1, o.corA], [1, o.corB]]) { if (!cor) continue; const off = lado * t / 4;
      const g = emX ? uvCaixa(new THREE.BoxGeometry(w, hh, t / 2), w, hh, t / 2, 1) : uvCaixa(new THREE.BoxGeometry(t / 2, hh, w), t / 2, hh, w, 1);
      const mesh = tm(g, tinta(cor), { pos: [emX ? cx : cx + off, cy, emX ? cz + off : cz] }); mesh.castShadow = o.sombra ?? true; ctx.add(mesh); }
    if (o.rodape && y0 < .01) for (const [lado, cor] of [[-1, o.corA], [1, o.corB]]) { if (!cor || cor === o.semRodape) continue; const off = lado * (t / 2 + .006); ctx.add(bx(emX ? w : .012, .08, emX ? .012 : w, o.rodape, emX ? cx : cx + off, y + .04, emX ? cz + off : cz, { shadow: false })); }
    if (y0 < 1.2 && !o.semCol) ctx.col(cx, cz, emX ? w : t, emX ? t : w, { h: y1 }); };
  let p = 0;
  for (const v of vaos) { peca(p, v.a, 0, h); peca(v.a, v.b, 0, v.y0 ?? 0); peca(v.a, v.b, v.y1 ?? 2.1, h); p = v.b; }
  peca(p, len, 0, h);
}

/** Batente (moldura) de um vão. */
function batente(ctx, cx, cz, emX, w, y0, y1, t, cor = '#F4F1EA') {
  const e = .07, f = t + .04;
  const lat = (s) => ctx.add(bx(emX ? e : f, y1 - y0, emX ? f : e, cor, emX ? cx + s * (w / 2 + e / 2 - .02) : cx, (y0 + y1) / 2, emX ? cz : cz + s * (w / 2 + e / 2 - .02), { shadow: false }));
  lat(-1); lat(1); ctx.add(bx(emX ? w + e * 2 : f, e, emX ? f : w + e * 2, cor, cx, y1 + e / 2 - .02, cz, { shadow: false }));
  if (y0 > .05) ctx.add(bx(emX ? w + e * 2 : f + .06, .05, emX ? f + .06 : w + e * 2, cor, cx, y0 - .02, cz, { shadow: false })); // peitoril
}

/**
 * Porta que abre. (cx, cz) = centro do vão; emX = a parede corre no eixo x; w = largura.
 * dobra = lado da dobradiça (-1/1 ao longo da parede); abre = para que lado do vão ela gira (-1/1, perpendicular).
 * Fica registrada em C.portas[nome] e abre sozinha quando alguém que anda (C.andar) passa perto.
 */
export function porta(ctx, nome, cx, cz, emX, w = .82, o = {}) {
  const { C } = { C: ctx.cidade }, h = o.h ?? 2.1, t = o.t ?? .14, dobra = o.dobra ?? -1, abre = o.abre ?? 1, cor = o.cor || '#B87A4A';
  batente(ctx, cx, cz, emX, w, 0, h, t, o.batente);
  const piv = new THREE.Group(); piv.userData.vivo = true;
  const hx = emX ? cx + dobra * w / 2 : cx, hz = emX ? cz : cz + dobra * w / 2; piv.position.set(hx, 0, hz);
  const folha = new THREE.Group(); piv.add(folha);
  const fw = w - .02, ft = .045;
  const tipo = o.tipo || 'madeira';
  const corpo = (W, H, x, y) => { const m = rb(emX ? W : ft, H, emX ? ft : W, cor, emX ? x : 0, y, emX ? 0 : x, { out: .01, r: .012 }); return m; };
  const dx = -dobra * fw / 2;
  if (tipo === 'vidro') { folha.add(corpo(fw, .25, dx, .125)); folha.add(corpo(fw, .15, dx, h - .08)); for (const s of [-1, 1]) folha.add(corpo(.08, h, dx + s * (fw / 2 - .04), h / 2));
    const v = new THREE.Mesh(new THREE.PlaneGeometry(fw - .16, h - .4), new THREE.MeshToonMaterial({ color: '#CFE6F2', transparent: true, opacity: .35, depthWrite: false, side: THREE.DoubleSide })); v.position.set(emX ? dx : 0, h / 2 + .03, emX ? 0 : dx); if (!emX) v.rotation.y = Math.PI / 2; folha.add(v); }
  else { folha.add(corpo(fw, h - .01, dx, h / 2));
    for (const [y0, y1] of [[.25, .95], [1.15, 1.85]]) for (const s of [-1, 1]) { const p = bx(emX ? fw - .2 : .012, y1 - y0, emX ? .012 : fw - .2, new THREE.Color(cor).multiplyScalar(.88).getStyle(), emX ? dx : s * ft / 2, (y0 + y1) / 2, emX ? s * ft / 2 : dx, { shadow: false }); folha.add(p); } }
  for (const s of [-1, 1]) { const mac = new THREE.Group(); mac.position.set(emX ? dx * 2 + dobra * .08 : s * .04, 1.02, emX ? s * .04 : dx * 2 + dobra * .08); mac.add(cyl(.025, .025, .04, '#C9CED6', 0, 0, 0, { rot: emX ? [Math.PI / 2, 0, 0] : [0, 0, Math.PI / 2], seg: 8 })); mac.add(bx(emX ? .12 : .02, .02, emX ? .02 : .12, '#C9CED6', emX ? -dobra * -.05 : 0, 0, emX ? 0 : -dobra * -.05)); folha.add(mac); }
  ctx.add(piv);
  // ângulo: abre para o lado 'abre' (normal da parede)
  const sentido = emX ? -dobra * abre : dobra * abre;
  const P = { nome, aberta: o.aberta ?? 0, auto: o.auto ?? true, alvo: null, piv, max: (o.max ?? 95) * D,
    abrir(v) { P.aberta = v; piv.rotation.y = sentido * P.max * Math.max(0, Math.min(1, v)); },
    mundo: paraMundo(ctx.L, cx, cz), lote: ctx.L.nome };
  P.abrir(P.aberta);
  C.portas[(ctx.L.nome ? ctx.L.nome + '.' : '') + nome] = P;
  return P;
}

let VP = null;
/** Vidro visto de longe (com cortina). Metade das janelas acende à noite. Materiais reaproveitados para ficar leve. */
function vidroLonge(C, seed, cortina) { const VL = C._vl || (C._vl = new Map()); const k = (Math.abs(Math.round(seed)) % 8) + cortina; if (!VL.has(k)) { const t = vidroTex(Math.abs(Math.round(seed)) % 8, cortina); const acesa = (Math.abs(Math.round(seed)) % 8) < 4; const m = new THREE.MeshToonMaterial({ map: t, emissive: '#FFC870', emissiveMap: t, emissiveIntensity: 0 }); if (acesa && C) C.acender(m, .9); VL.set(k, m); } return VL.get(k); }
function vidroPerto() { if (!VP) VP = new THREE.MeshToonMaterial({ color: '#BFDDF0', transparent: true, opacity: .28, depthWrite: false, side: THREE.DoubleSide }); return VP; }
/** Janela: moldura, vidro (transparente perto; com cortina e reflexo de longe), grade opcional e cortina de pano do lado de dentro. */
export function janela(ctx, cx, cz, emX, w, y0, y1, o = {}) {
  const t = o.t ?? .14; batente(ctx, cx, cz, emX, w, y0, y1, t, o.moldura || '#F4F1EA');
  const h = y1 - y0, cy = (y0 + y1) / 2;
  const longe = ctx.nivel !== 'perto';
  const mat = longe ? vidroLonge(ctx.cidade, o.seed || 0, o.cortina || '#F3E3C0') : vidroPerto();
  const v = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); v.position.set(cx, cy, cz); if (!emX) v.rotation.y = Math.PI / 2; if (o.virar) v.rotation.y += Math.PI; v.castShadow = false; ctx.add(v);
  if (longe && !o.duplo) { const v2 = v.clone(); v2.rotation.y += Math.PI; ctx.add(v2); }
  // caixilho (divisão do vidro)
  ctx.add(bx(emX ? .04 : .05, h, emX ? .05 : .04, o.moldura || '#F4F1EA', cx, cy, cz, { shadow: false }));
  if (o.grade) for (let i = 1; i < Math.round(w / .14); i++) { const s = -w / 2 + i * w / Math.round(w / .14); ctx.add(bx(emX ? .02 : .02, h, emX ? .02 : .02, o.grade, emX ? cx + s : cx + (o.fora ?? 1) * (t / 2 + .05), cy, emX ? cz + (o.fora ?? 1) * (t / 2 + .05) : cz + s, { shadow: false })); }
  if (!longe && o.cortina !== false) { // cortina de pano dos dois lados, por dentro
    const dentro = -(o.fora ?? 1) * (t / 2 + .08); const cc = o.cortina || '#F3E3C0';
    for (const s of [-1, 1]) { const cw = w * .28; const cort = rb(emX ? cw : .03, h + .3, emX ? .03 : cw, cc, emX ? cx + s * (w / 2 - cw / 2 + .12) : cx + dentro, cy + .08, emX ? cz + dentro : cz + s * (w / 2 - cw / 2 + .12), { r: .012, out: .008 }); ctx.add(cort); }
    ctx.add(bx(emX ? w + .5 : .03, .03, emX ? .03 : w + .5, '#8D949C', cx + (emX ? 0 : dentro), y1 + .22, cz + (emX ? dentro : 0), { shadow: false }));
  }
}

/** Telhado de 4 águas (ou 2 águas) com telha cerâmica, beiral e calha. Base retangular w x d em y = h. */
export function telhado(ctx, cx, cz, w, d, h, o = {}) {
  const beiral = o.beiral ?? .6, W = w + beiral * 2, Dd = d + beiral * 2, sobe = o.sobe ?? Math.min(W, Dd) * .28, duas = o.duas;
  const g = new THREE.BufferGeometry(); const P = [], UV = [];
  const ladoX = W >= Dd; // cumeeira ao longo do lado maior
  const A = W / 2, B = Dd / 2, r = duas ? (ladoX ? A : B) : Math.abs(A - B);
  const tri = (p1, p2, p3) => P.push(...p1, ...p2, ...p3);
  const quad = (a, b, c, d2) => { tri(a, b, c); tri(a, c, d2); };
  if (ladoX) { const R1 = [-r, sobe, 0], R2 = [r, sobe, 0];
    quad([-A, 0, B], [A, 0, B], R2, R1); quad([A, 0, -B], [-A, 0, -B], R1, R2);
    if (!duas) { tri([A, 0, B], [A, 0, -B], R2); tri([-A, 0, -B], [-A, 0, B], R1); } }
  else { const R1 = [0, sobe, -r], R2 = [0, sobe, r];
    quad([A, 0, B], [A, 0, -B], R1, R2); quad([-A, 0, -B], [-A, 0, B], R2, R1);
    if (!duas) { tri([-A, 0, B], [A, 0, B], R2); tri([A, 0, -B], [-A, 0, -B], R1); } }
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  // UV por face: u corre ao longo do beiral, v sobe pela água do telhado (telha de 2 m)
  const uv = []; for (let i = 0; i < P.length; i += 9) { const p0 = new THREE.Vector3(P[i], P[i + 1], P[i + 2]), p1 = new THREE.Vector3(P[i + 3], P[i + 4], P[i + 5]), p2 = new THREE.Vector3(P[i + 6], P[i + 7], P[i + 8]);
    const n = new THREE.Vector3().subVectors(p1, p0).cross(new THREE.Vector3().subVectors(p2, p0)); const hx = n.x, hz = n.z, L = Math.hypot(hx, hz) || 1; const h = [hx / L, hz / L], pr = [-h[1], h[0]];
    for (const p of [p0, p1, p2]) uv.push((p.x * pr[0] + p.z * pr[1]) / 2, (p.y - (p.x * h[0] + p.z * h[1])) / 2); }
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.computeVertexNormals();
  const m = tm(g, toonTex(telhaTex(o.cor || '#C8643C')), { pos: [cx, h, cz], out: .02 }); m.material.side = THREE.DoubleSide; m.castShadow = o.sombra ?? true; ctx.add(m);
  // beiral (forro de madeira por baixo) e calha
  ctx.add(bx(W, .06, Dd, o.forro || '#F4F1EA', cx, h - .03, cz, { shadow: false }));
  if (duas) { // empenas (oitões) nas pontas
    const s = new THREE.Shape(); const L = ladoX ? Dd : W; s.moveTo(-L / 2 + beiral, 0); s.lineTo(L / 2 - beiral, 0); s.lineTo(0, sobe * (L / 2 - beiral) / (L / 2)); s.lineTo(-L / 2 + beiral, 0);
    for (const k of [-1, 1]) { const e = tm(new THREE.ShapeGeometry(s), tinta(o.parede || '#E8DCC8'), {}); e.material.side = THREE.DoubleSide; if (ladoX) { e.rotation.y = Math.PI / 2; e.position.set(cx + k * (w / 2), h, cz); } else e.position.set(cx, h, cz + k * (d / 2)); ctx.add(e); } }
  return m;
}
/** Laje com platibanda (casa "moderna" de cidade do interior): parede baixa em volta escondendo o telhado. */
export function platibanda(ctx, cx, cz, w, d, h, cor, o = {}) {
  const a = o.alt ?? .8, t = .18;
  ctx.add(bx(w + .02, .14, d + .02, '#C9C2B6', cx, h + .07, cz, { shadow: true }));
  for (const [x, z, ww, dd] of [[0, d / 2, w + t, t], [0, -d / 2, w + t, t], [w / 2, 0, t, d], [-w / 2, 0, t, d]]) ctx.add(caixaTex(ww, a, dd, tinta(cor), cx + x, h + a / 2, cz + z, 1, { out: .016 }));
  ctx.add(bx(w + t + .08, .06, .06 + t, '#F4F1EA', cx, h + a + .03, cz + d / 2, { shadow: false }));
  ctx.add(bx(1.4, .9, 1.2, '#3E7CC8', cx + w / 4, h + .55, cz - d / 4, { out: .014 })); // caixa d'água
}
/** Forro (teto visto de dentro). */
const FORRO = new Map();
export function forro(ctx, cx, cz, w, d, h, cor = '#F7F4EE') { if (!FORRO.has(cor)) FORRO.set(cor, new THREE.MeshToonMaterial({ color: cor, emissive: cor, emissiveIntensity: .62 })); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), FORRO.get(cor)); m.rotation.x = Math.PI / 2; m.position.set(cx, h, cz); m.castShadow = false; m.receiveShadow = false; ctx.add(m); return m; }
/** Piso de cômodo. */
export function chao(ctx, cx, cz, w, d, mat, y = .01, tile = 1) { const t = mat.map ? mat.map.clone() : null; let m = mat; if (t) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(w / tile, d / tile); t.needsUpdate = true; m = toonTex(t); } const p = piso(w, d, m, cx, y, cz); ctx.add(p); return p; }
