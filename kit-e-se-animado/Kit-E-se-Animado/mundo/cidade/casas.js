// Casas térreas e sobrados de Pedra Alta, com quintal, garagem e TODOS os cômodos mobiliados.
// Planta (lote 11 x 22 m, frente em +z, valores sem espelhar):
//
//   z=11  ─ muro + portão de garagem + portão social ─
//          garagem (carro)        |  jardim
//   z=5.5 ── [porta]  SALA   │ QUARTO 1 (filho) ──
//   z=1.5 ──── arco ─────────┴─[porta]──────────
//               COZINHA    [porta] CORREDOR
//                               │ BANHEIRO │ corredor
//   z=-1.8                      ├──────────┴─[porta]
//   z=-3.2 ──[porta]────────    │ QUARTO 2 (casal)
//               SERVIÇO         │
//   z=-6.5 ──[porta dos fundos]─┴──────────
//          QUINTAL (churrasqueira, mesa, varal, casinha do cachorro)
//   z=-11 ─ muro ─
import * as THREE from 'three';
import { toon, tm, bx, cyl, rb, piso, caixaTex, D, pega, paraMundo } from './util.js';
import { parede, porta, janela, telhado, platibanda, forro, chao, tinta } from './construcao.js';
import { piso as pisoTex, azulejo, grama, terra, calcada, tijolo, repetir } from './texturas.js';
import * as M from './moveis.js';
import { arvore, arbusto, canteiro } from './natureza.js';
import { toonTex } from '../base/toon.js';
import { rng } from '../base/core.js';

const EXT = ['#F2D8A8', '#E8DCC8', '#CFE3D2', '#F4C7B4', '#D8E2EE', '#F6E7A6', '#E7C9DE', '#F2F0EA', '#C9DDE8', '#EFC7A0'];
const INT = ['#F7F1E3', '#EAF1F4', '#F6E8E0', '#EEF2E4', '#F4EEDC', '#E9E4F2'];
const TELHA = ['#C8643C', '#B8573A', '#D07A4A', '#A85A40'];
const PORTA = ['#B87A4A', '#8E5A3A', '#F4F1EA', '#3E7CC8', '#2E7A5A'];

/** Paleta da casa (fixa para a casa da família, sorteada para as outras). */
function paleta(L) {
  const R = rng(L.seed * 97 + 13);
  if (L.tipo === 'casaFamilia') return { ext: '#F2D8A8', faixa: '#C9874E', sala: '#F7F1E3', q1: '#D9ECF7', q2: '#F3E6EE', coz: '#FFFFFF', ser: '#EAF1F4', ban: '#FFFFFF', cor: '#F4EEDC', telha: '#C8643C', porta: '#8E5A3A', sofa: '#3E7CC8', cama1: '#2E9C6A', cama2: '#C84E4E', carro: '#E2443A', m: 1, telhado: '4aguas', grade: '#3A3D44', muro: 'reboco', carroSim: true, R };
  const ext = pega(R, EXT);
  return { ext, faixa: new THREE.Color(ext).multiplyScalar(.78).getStyle(), sala: pega(R, INT), q1: pega(R, ['#D9ECF7', '#E8F4E0', '#F7E3D9', '#EDE3F7']), q2: pega(R, INT), coz: '#FFFFFF', ser: pega(R, INT), ban: '#FFFFFF', cor: pega(R, INT),
    telha: pega(R, TELHA), porta: pega(R, PORTA), sofa: pega(R, ['#3E7CC8', '#C84E4E', '#7A8696', '#5AA84E', '#8E6CC4', '#D98A3A']), cama1: pega(R, ['#2E9C6A', '#3E7CC8', '#F2546E', '#F2C230']), cama2: pega(R, ['#C84E4E', '#8E6CC4', '#4FB8A0', '#D98A3A']),
    carro: pega(R, ['#E2443A', '#3E7CC8', '#F4F1EA', '#2A2A30', '#9AA0A8', '#F2C230', '#2E9C6A']), m: R() < .5 ? 1 : -1, telhado: R() < .62 ? '4aguas' : R() < .55 ? '2aguas' : 'platibanda', grade: pega(R, ['#3A3D44', '#F4F1EA', '#2E6FB8', '#7A2A2A']), muro: R() < .3 ? 'tijolo' : 'reboco', carroSim: R() < .65, R };
}

export function casa(ctx, nivel) { construirCasa(ctx, nivel, false); }
export function sobrado(ctx, nivel) { construirCasa(ctx, nivel, true); }
export const casaFamilia = (ctx, nivel) => construirCasa(ctx, nivel, false);

function construirCasa(ctx, nivel, dois) {
  const L = ctx.L, P = paleta(L), m = P.m, C = ctx.cidade, R = P.R, perto = nivel === 'perto';
  const X = (x) => x * m; // espelha a planta
  const H = 2.8, TE = .2, TI = .12;
  // ---------- terreno: quintal, garagem, jardim, muros ----------
  const cim = toonTex(repetir(calcada('#CFC9BF', '#C4BDB2'), 1, 1));
  chaoLote(ctx, X(-2.45), 8.2, 5.9, 5.4, cim); // garagem
  chaoLote(ctx, X(2.95), 8.2, 4.9, 5.4, toonTex(repetir(grama(), 1, 1)), 3); // jardim
  chaoLote(ctx, 0, -8.75, 10.7, 4.5, cim); // quintal
  chaoLote(ctx, X(-5.1), -.5, .6, 12, cim); chaoLote(ctx, X(5.1), -.5, .6, 12, cim); // corredores laterais
  muros(ctx, P, X, nivel);
  // ---------- jardim da frente ----------
  if (nivel !== 'longe') {
    const t = arvore(pega(R, ['ipeAmarelo', 'quaresmeira', 'comum', 'ipeRoxo']), .7, L.seed); t.position.set(X(3.6), 0, 8.6); ctx.add(t); ctx.col(X(3.6), 8.6, .5, .5);
    const a1 = arbusto(3.2, .8, .7, '#4E9A48', L.seed); a1.position.set(X(3.0), 0, 6.1); ctx.add(a1); ctx.col(X(3.0), 6.1, 3.2, .7);
    if (L.tipo === 'casaFamilia' || R() < .5) { const ct = canteiro(1.6, .7, L.seed); ct.position.set(X(1.7), 0, 10.2); ctx.add(ct); ctx.col(X(1.7), 10.2, 1.6, .7); }
  }
  // carro na garagem
  if (P.carroSim) { const car = M.carro(P.carro, L.seed); car.position.set(X(-3.0), 0, 8.5); car.rotation.y = R() < .5 ? 0 : Math.PI; if (L.tipo === 'casaFamilia') car.rotation.y = Math.PI; ctx.add(car); ctx.col(X(-3.0), 8.5, 1.8, 4.1, { nome: 'carro' }); }
  else if (perto) { const b = M.bicicletaParada(pega(R, ['#2FA37A', '#E2443A', '#3E7CC8'])); b.position.set(X(-4.6), 0, 7.5); b.rotation.y = Math.PI / 2; ctx.add(b); }

  // ---------- corpo da casa ----------
  const cores = P;
  const ext = P.ext;
  const sal = perto ? P.sala : null, q1 = perto ? P.q1 : null, q2 = perto ? P.q2 : null, coz = perto ? P.coz : null, ser = perto ? P.ser : null, ban = perto ? P.ban : null, cor = perto ? P.cor : null;
  const PZ = (z, xa, xb, vaos, neg, pos, o = {}) => { const a = Math.min(X(xa), X(xb)), b = Math.max(X(xa), X(xb));
    const vs = (vaos || []).map(v => ({ a: X(v.c) - v.w / 2 - a, b: X(v.c) + v.w / 2 - a, y0: v.y0 ?? 0, y1: v.y1 ?? 2.1 }));
    parede(ctx, a, z, b, z, { vaos: vs, corA: neg, corB: pos, h: o.h ?? H, t: o.t ?? TI, y: o.y ?? 0, rodape: perto ? '#E8E4DC' : null, semRodape: ext }); };
  const PX = (x, za, zb, vaos, neg, pos, o = {}) => { const xx = X(x); const [A, B] = m > 0 ? [neg, pos] : [pos, neg];
    const vs = (vaos || []).map(v => ({ a: v.c - v.w / 2 - za, b: v.c + v.w / 2 - za, y0: v.y0 ?? 0, y1: v.y1 ?? 2.1 }));
    parede(ctx, xx, za, xx, zb, { vaos: vs, corA: A, corB: B, h: o.h ?? H, t: o.t ?? TI, y: o.y ?? 0, rodape: perto ? '#E8E4DC' : null, semRodape: ext }); };
  const J = (cx, cz, emX, w, y0, y1, fora, o = {}) => janela(ctx, emX ? X(cx) : X(cx), cz, emX, w, y0, y1, { t: TE, fora: emX ? fora : fora * m, grade: P.grade, cortina: pega(rng(L.seed + cx * 7), ['#F3E3C0', '#D9ECF7', '#F7D9E3', '#E8F4E0']), seed: L.seed + (cx * 3 | 0), ...o });

  // base da casa (degrau) e faixa de cor na parte de baixo
  ctx.pisoAlto(0, -.5, 9.4, 12, .125);
  ctx.add(bx(9.6, .12, 12.2, '#C9C2B6', 0, .06, -.5, { shadow: false }));
  // paredes externas
  const vF1 = [{ c: -3.35, w: .9 }, { c: -1.2, w: 1.4, y0: .95, y1: 2.15 }], vF2 = [{ c: 2.75, w: 1.3, y0: .95, y1: 2.15 }];
  const vB1 = [{ c: -3.2, w: .85 }, { c: -1.2, w: .7, y0: 1.3, y1: 2.1 }], vB2 = [{ c: 2.7, w: 1.3, y0: .95, y1: 2.15 }];
  PZ(5.5, -4.7, .8, vF1, sal, ext, { t: TE }); PZ(5.5, .8, 4.7, vF2, q1, ext, { t: TE });
  PZ(-6.5, -4.7, .8, vB1, ext, ser, { t: TE }); PZ(-6.5, .8, 4.7, vB2, ext, q2, { t: TE });
  PX(-4.7, 1.5, 5.5, [{ c: 3.5, w: 1.2, y0: .95, y1: 2.15 }], ext, sal, { t: TE });
  PX(-4.7, -3.2, 1.5, [{ c: -.9, w: 1.2, y0: 1.05, y1: 2.15 }], ext, coz, { t: TE });
  PX(-4.7, -6.5, -3.2, [], ext, ser, { t: TE });
  PX(4.7, 1.5, 5.5, [], q1, ext, { t: TE }); PX(4.7, -1.8, 1.5, [{ c: -.6, w: .6, y0: 1.45, y1: 2.1 }], cor, ext, { t: TE }); PX(4.7, -6.5, -1.8, [], q2, ext, { t: TE });
  // portas e janelas externas
  porta(ctx, 'frente', X(-3.35), 5.5, true, .9, { t: TE, dobra: -m, abre: -1, cor: P.porta, batente: '#F4F1EA' });
  porta(ctx, 'fundos', X(-3.2), -6.5, true, .85, { t: TE, dobra: -m, abre: -1, cor: P.porta });
  J(-1.2, 5.5, true, 1.4, .95, 2.15, 1); J(2.75, 5.5, true, 1.3, .95, 2.15, 1);
  J(-1.2, -6.5, true, .7, 1.3, 2.1, -1, { grade: null }); J(2.7, -6.5, true, 1.3, .95, 2.15, -1);
  J(-4.7, 3.5, false, 1.2, .95, 2.15, -1); J(-4.7, -.9, false, 1.2, 1.05, 2.15, -1); J(4.7, -.6, false, .6, 1.45, 2.1, 1, { grade: null, cortina: false });
  // degrau e luz da porta da frente
  ctx.add(bx(1.3, .1, .5, '#C9C2B6', X(-3.35), .05, 5.85)); const lamp = new THREE.MeshToonMaterial({ color: '#FFF6D8', emissive: '#FFD98A', emissiveIntensity: 0 }); C.acender(lamp, 2); ctx.add(tm(new THREE.SphereGeometry(.1, 12, 8), lamp, { pos: [X(-2.6), 2.25, 5.66] }));
  // número da casa
  const num = 10 + L.seed * 7 % 890; const pl = new THREE.Mesh(new THREE.PlaneGeometry(.36, .2), toonTex(C.tex.letreiroTex(String(num), { w: 128, h: 72, fundo: '#2E6FB8' }))); pl.position.set(X(-.4), 1.6, 10.99 + .02); ctx.add(pl);
  // faixa colorida em volta (rodapé externo)
  for (const [x, z, w, d] of [[0, 5.62, 9.6, .04], [0, -6.62, 9.6, .04], [-4.82, -.5, .04, 12.2], [4.82, -.5, .04, 12.2]]) ctx.add(bx(w, .45, d, P.faixa, X(x), .3, z, { shadow: false }));
  // paredes internas
  if (perto) {
    PZ(1.5, -4.7, .8, [{ c: -2.7, w: 2.4, y1: 2.35 }], coz, sal);
    PX(.8, 1.5, 5.5, [], sal, q1);
    PZ(1.5, .8, 4.7, [{ c: 1.5, w: .8 }], cor, q1);
    PX(.8, .3, 1.5, [{ c: .9, w: .8 }], coz, cor); PX(.8, -1.8, .3, [], coz, ban); PX(.8, -3.2, -1.8, [], coz, q2); PX(.8, -6.5, -3.2, [], ser, q2);
    PZ(-3.2, -4.7, .8, [{ c: -1.0, w: .8 }], ser, coz);
    PZ(.3, .8, 3.0, [{ c: 1.85, w: .7 }], ban, cor); PX(3.0, -1.8, .3, [], ban, cor);
    PZ(-1.8, .8, 3.0, [], q2, ban); PZ(-1.8, 3.0, 4.7, [{ c: 3.85, w: .8 }], q2, cor);
    const dp = { t: TI, cor: '#F4F1EA', batente: '#F4F1EA' };
    porta(ctx, 'quarto1', X(1.5), 1.5, true, .8, { ...dp, dobra: -m, abre: 1 });
    porta(ctx, 'cozinha', X(.8), .9, false, .8, { ...dp, dobra: 1, abre: m });
    porta(ctx, 'servico', X(-1.0), -3.2, true, .8, { ...dp, dobra: m, abre: -1 });
    porta(ctx, 'banheiro', X(1.85), .3, true, .7, { ...dp, dobra: m, abre: -1 });
    porta(ctx, 'quarto2', X(3.85), -1.8, true, .8, { ...dp, dobra: m, abre: 1 });
    // pisos
    const mad = C.tex.piso('madeira', '#C8935E', '#B98450'), cer = C.tex.piso('ceramica', '#E8E0D2', '#D4CABA'), azb = C.tex.piso('xadrez', '#F4F1EA', '#9AB8C8');
    const room = (x0, x1, z0, z1, mat, corForro = '#F7F4EE') => { const a = Math.min(X(x0), X(x1)), b = Math.max(X(x0), X(x1)); chao(ctx, (a + b) / 2, (z0 + z1) / 2, b - a, z1 - z0, toonTex(mat), .125); forro(ctx, (a + b) / 2, (z0 + z1) / 2, b - a, z1 - z0, H - .005, corForro); };
    room(-4.7, .8, 1.5, 5.5, mad); room(.8, 4.7, 1.5, 5.5, mad); room(-4.7, .8, -3.2, 1.5, cer); room(-4.7, .8, -6.5, -3.2, cer);
    room(.8, 3.0, -1.8, .3, azb); room(.8, 4.7, .3, 1.5, mad); room(3.0, 4.7, -1.8, .3, mad); room(.8, 4.7, -6.5, -1.8, mad);
    // azulejo na cozinha (meia parede atrás da pia) e no banheiro
    const azu = toonTex(repetir(azulejo(), 1, 1));
    const azp = (x, z, w, h, ry) => { const t = azu.map.clone(); t.repeat.set(w / .6, h / .6); t.needsUpdate = true; const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), toonTex(t)); p.position.set(X(x), .125 + h / 2 + .9, z); p.rotation.y = ry; ctx.add(p); };
    azp(-4.6 + .005, -1.5, 2.4, .7, m > 0 ? Math.PI / 2 : -Math.PI / 2);
    const azb2 = (x, z, w, ry) => { const t = azu.map.clone(); t.repeat.set(w / .6, 1.6 / .6); t.needsUpdate = true; const p = new THREE.Mesh(new THREE.PlaneGeometry(w, 1.6), toonTex(t)); p.position.set(X(x), .125 + .8, z); p.rotation.y = ry; ctx.add(p); };
    azb2(1.9, -1.8 + .065, 2.2, 0); azb2(.8 + .065, -.75, 2.1, m > 0 ? Math.PI / 2 : -Math.PI / 2); azb2(3.0 - .065, -.75, 2.1, m > 0 ? -Math.PI / 2 : Math.PI / 2);
    mobiliar(ctx, P, X, m);
  } else {
    // de longe: um "miolo" por dentro para as janelas nunca mostrarem vazio
    ctx.add(bx(9.2, 2.6, 11.8, '#3A3540', 0, 1.4, -.5, { shadow: false }));
  }
  // ---------- telhado ----------
  const alt = dois ? H * 2 + .15 : H;
  if (dois) andarDeCima(ctx, P, X, nivel);
  if (P.telhado === 'platibanda') platibanda(ctx, 0, -.5, 9.4, 12, alt + .02, P.ext);
  else telhado(ctx, 0, -.5, 9.4, 12, alt + .02, { cor: P.telha, duas: P.telhado === '2aguas', parede: P.ext, sombra: !(C.dentro || []).includes(L.nome), sobe: 2.2 });
  ctx.ponto('frente', X(-3.35), 6.05, Math.PI); ctx.ponto('portao', X(-.22), 11.8, Math.PI); ctx.ponto('rua', X(-.22), 14.5, Math.PI); ctx.ponto('sala', X(-1.0), 2.6); ctx.ponto('cozinha', X(-2.6), -2.4); ctx.ponto('quarto1', X(2.5), 3.4); ctx.ponto('quarto2', X(3.2), -4.2); ctx.ponto('banheiro', X(1.9), -.5); ctx.ponto('quintal', X(-.5), -8.6); ctx.ponto('garagem', X(-.3), 8.2);
}

function chaoLote(ctx, cx, cz, w, d, mat, tile = 1) { const t = mat.map.clone(); t.repeat.set(w / tile, d / tile); t.needsUpdate = true; const p = piso(w, d, toonTex(t), cx, .015, cz); ctx.add(p); }

function muros(ctx, P, X, nivel) {
  const L = ctx.L, cor = P.ext, mt = P.muro === 'tijolo' ? toonTex(tijolo()) : null;
  const seg = (x0, x1, z0, z1, h) => { const w = Math.abs(x1 - x0) || .15, d = Math.abs(z1 - z0) || .15; const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const msh = mt ? caixaTex(w, h, d, mt, cx, h / 2, cz, 1.2, { out: .012 }) : caixaTex(w, h, d, tinta(cor), cx, h / 2, cz, 1, { out: .012 }); ctx.add(msh);
    ctx.add(bx(w + .04, .06, d + .04, '#E8E4DC', cx, h + .03, cz, { shadow: false })); ctx.col(cx, cz, w, d, { h }); };
  const hw = L.w / 2 - .075, hd = L.d / 2 - .075;
  seg(-hw, -hw, -hd, hd - .1, 2.0); seg(hw, hw, -hd, hd - .1, 2.0); seg(-hw, hw, -hd, -hd, 2.0);
  // frente: muro baixo + grade, vão do portão da garagem e do portão social
  const fz = hd; const gA = [X(-4.85), X(-1.15)].sort((a, b) => a - b), sA = [X(-.9), X(.45)].sort((a, b) => a - b);
  const cortes = [[-hw, Math.min(gA[0], sA[0])], [Math.min(gA[1], sA[1]), Math.max(gA[0], sA[0])], [Math.max(gA[1], sA[1]), hw]];
  for (const [a, b] of cortes) { if (b - a < .05) continue; seg(a, b, fz, fz, 1.0);
    if (nivel !== 'longe') { const n = Math.max(1, Math.round((b - a) / .13)); for (let i = 0; i <= n; i++) ctx.add(bx(.025, .95, .025, P.grade, a + (b - a) * i / n, 1.5, fz, { shadow: false })); ctx.add(bx(b - a, .04, .04, P.grade, (a + b) / 2, 1.97, fz, { shadow: false })); } }
  for (const x of [gA[0], gA[1], sA[0], sA[1]]) { ctx.add(bx(.3, 2.1, .3, cor, x, 1.05, fz, { out: .012 })); ctx.col(x, fz, .3, .3); }
  // portão da garagem (corre de lado) e portão social (abre) — vivos
  const C = ctx.cidade, gp = new THREE.Group(); gp.userData.vivo = true; const gw = gA[1] - gA[0] - .3;
  gp.add(bx(gw, .06, .05, P.grade, 0, .1, 0)); gp.add(bx(gw, .06, .05, P.grade, 0, 1.95, 0)); for (let i = 0; i <= Math.round(gw / .12); i++) gp.add(bx(.03, 1.85, .03, P.grade, -gw / 2 + i * gw / Math.round(gw / .12), 1.02, 0)); gp.add(bx(gw, .5, .02, P.grade, 0, .45, 0));
  const g0 = (gA[0] + gA[1]) / 2; gp.position.set(g0, 0, fz - .12); ctx.add(gp);
  const nome = (L.nome ? L.nome + '.' : '') + 'garagem';
  const sentido = X(1) > 0 ? 1 : -1;
  C.portas[nome] = { nome, aberta: 0, auto: false, abrir(v) { this.aberta = v; gp.position.x = g0 + sentido * Math.max(0, Math.min(1, v)) * (gw + .1); }, lote: L.nome };
  const sp = new THREE.Group(); sp.userData.vivo = true; const sw = sA[1] - sA[0] - .3, sh = X(1) > 0 ? sA[0] + .15 : sA[1] - .15; sp.position.set(sh, 0, fz); const sd = X(1) > 0 ? 1 : -1;
  const fol = new THREE.Group(); sp.add(fol); fol.add(bx(sw, .06, .05, P.grade, sd * sw / 2, .1, 0)); fol.add(bx(sw, .06, .05, P.grade, sd * sw / 2, 1.95, 0)); for (let i = 0; i <= 6; i++) fol.add(bx(.03, 1.85, .03, P.grade, sd * i * sw / 6, 1.02, 0));
  ctx.add(sp); const nm2 = (L.nome ? L.nome + '.' : '') + 'portao';
  const P2 = { nome: nm2, aberta: 0, auto: true, abrir(v) { this.aberta = v; sp.rotation.y = sd * Math.max(0, Math.min(1, v)) * 1.5; }, mundo: paraMundo(L, (sA[0] + sA[1]) / 2, fz), lote: L.nome };
  C.portas[nm2] = P2;
  // caixa de correio e interfone
  ctx.add(rb(.3, .4, .15, '#E2443A', X(.55), 1.3, fz + .1, { out: .01 }));
}

function mobiliar(ctx, P, X, m) {
  const C = ctx.cidade, R = P.R, Y = .125;
  const put = (o, x, z, ry = 0, col = true, y = 0) => { o.position.set(X(x), Y + y, z); o.rotation.y = m > 0 ? ry : -ry; ctx.add(o);
    const pe = o.userData.pe; if (col && pe && pe[0] > 0) { const q = Math.abs(Math.round(Math.sin(ry))) === 1; ctx.col(X(x), z, q ? pe[1] : pe[0], q ? pe[0] : pe[1], { h: 1 }); } return o; };
  const parede = (o, x, z, y, ry) => { o.position.set(X(x), Y + y, z); o.rotation.y = m > 0 ? ry : -ry; ctx.add(o); return o; };
  const fam = ctx.L.tipo === 'casaFamilia';
  // SALA
  put(M.tapete(2.4, 1.8, pega(R, ['#C84E4E', '#3E7CC8', '#8E6CC4', '#D98A3A']), '#F2C230'), -2.1, 3.45, Math.PI / 2, false);
  put(M.sofa(2.1, P.sofa), -4.15, 3.45, Math.PI / 2);
  const rack = put(M.rackTV(1.6), .55, 3.45, -Math.PI / 2); const tela = rack.userData.tela; C.vivos.push((t) => M.animarTV(tela, t, ctx.L.seed));
  put(M.mesaCentro(1.1, .6), -2.1, 3.45, Math.PI / 2);
  put(M.poltrona(pega(R, ['#C84E4E', '#F2C230', '#5AA84E'])), -1.9, 4.95, Math.PI);
  put(M.estante(1.0, 1.8, '#9A6236', ctx.L.seed), -.6, 1.75, 0);
  put(M.planta(1, ctx.L.seed), .4, 5.1); put(M.planta(1.2, ctx.L.seed + 1), -4.35, 1.95); put(M.luminariaChao(), -4.35, 4.95);
  parede(M.quadro(1.2, .7, ctx.L.seed, 'paisagem'), -4.6 + .01, 3.45, 1.55, Math.PI / 2);
  parede(M.quadro(.45, .55, ctx.L.seed + 2, fam ? 'familia' : 'abstrato'), -4.3, 1.56 + .01, 1.5, 0);
  const vent = put(M.ventiladorTeto(2.68), -2.1, 3.45, 0, false); const pas = vent.userData.pas; C.vivos.push((t) => { pas.rotation.y = t * 7; });
  // COZINHA
  put(M.bancadaPia(2.4), -4.29, -1.5, Math.PI / 2); put(M.fogao(), -4.29, .05, Math.PI / 2); put(M.geladeira(), -4.29, 1.0, Math.PI / 2);
  parede(M.armarioAereo(1.0), -4.43, -2.2, 1.85, Math.PI / 2); parede(M.microondas(), -4.3, -2.45, .92, Math.PI / 2);
  put(M.mesaJantar(1.2, .8, '#B87A4A', 4, '#9A6236'), -1.6, -1.1, 0);
  parede(M.relogio(C), .8 - .07, -1.2, 2.0, -Math.PI / 2); put(M.plafon(C, 2.795), -2.0, -.9, 0, false);
  // SERVIÇO
  put(M.tanque(), .45, -5.9, -Math.PI / 2); put(M.maquinaLavar(), .45, -5.0, -Math.PI / 2);
  put(M.bicicletaParada(pega(R, ['#2FA37A', '#E2443A', '#3E7CC8'])), -4.45, -4.9, Math.PI / 2);
  put(new THREE.Group().add(rb(.5, 1.8, .45, '#F4F1EA', 0, .9, 0, { out: .012 })), -4.4, -3.55, Math.PI / 2, false); ctx.col(X(-4.4), -3.55, .45, .5);
  put(M.plafon(C, 2.795), -2, -4.9, 0, false);
  parede(M.prateleiraLimpeza(ctx.L.seed), -4.7 + .2, -5.0, 1.45, Math.PI / 2); put(M.cestoRoupa(), .45, -4.1, 0); put(M.balde(), -2.0, -6.15, 0);
  // BANHEIRO
  put(M.box(1, 1), 1.35, -1.25, 0); put(M.vaso(), 2.6, -1.4, 0); put(M.pia(true), 2.72, -.35, -Math.PI / 2);
  parede(M.toalha(pega(R, ['#F2546E', '#3E7CC8', '#F2C230'])), 2.0, -1.8 + .08, 1.5, 0); put(M.plafon(C, 2.795), 1.9, -.75, 0, false);
  // CORREDOR
  parede(M.quadro(.5, .6, ctx.L.seed + 4, 'abstrato'), 4.6 - .01, -.75, 1.55, -Math.PI / 2); put(M.plafon(C, 2.795), 3.85, .3, 0, false);
  // QUARTO 1 (filho)
  put(M.tapete(1.4, 1, '#3E7CC8', '#F4F1EA'), 2.6, 3.6, 0, false);
  put(M.cama(.95, P.cama1, '#9A6236'), 4.15, 2.6, 0); put(M.criado('#9A6236', true, C), 3.3, 1.78, 0);
  put(M.escrivaninha(1.1, '#F4F1EA', true, ctx.L.seed), 2.6, 5.12, Math.PI); put(M.cadeiraEscritorio(), 2.6, 4.45, Math.PI);
  put(M.guardaRoupa(1.6, 2.1, '#D9B07A'), 1.16, 3.5, Math.PI / 2);
  parede(M.quadro(.5, .7, ctx.L.seed + 5, 'poster'), 4.6 - .01, 4.3, 1.6, -Math.PI / 2); parede(M.quadro(.45, .6, ctx.L.seed + 6, 'poster'), 3.3, 1.5 + .07, 1.75, 0);
  put(M.plafon(C, 2.795), 2.75, 3.5, 0, false);
  // QUARTO 2 (casal)
  put(M.tapete(2, 1.4, '#E8DCC8', '#C9874E'), 2.2, -4.3, Math.PI / 2, false);
  put(M.cama(1.4, P.cama2, '#7A5233'), 1.85, -4.3, Math.PI / 2); put(M.criado('#7A5233', true, C), 1.05, -5.35, Math.PI / 2); put(M.criado('#7A5233', true, C), 1.05, -3.25, Math.PI / 2);
  put(M.guardaRoupa(1.8, 2.1, '#B87A4A'), 4.34, -4.6, -Math.PI / 2); put(M.comoda(1, '#B87A4A'), 1.3, -6.18, 0);
  parede(M.quadro(1.0, .6, ctx.L.seed + 7, fam ? 'familia' : 'paisagem'), .8 + .07, -4.3, 1.75, Math.PI / 2);
  const v2 = put(M.ventiladorTeto(2.68), 2.6, -4.2, 0, false); const p2 = v2.userData.pas; C.vivos.push((t) => { p2.rotation.y = -t * 6; });
  // QUINTAL
  put(M.churrasqueira(), 3.4, -10.45, 0); put(M.mesaPlastica(pega(R, ['#F4F1EA', '#E2443A', '#F2C230']), true), 1.4, -8.6, 0);
  put(M.varal(3), -4.95, -8.8, Math.PI / 2, false); ctx.col(X(-4.95), -7.3, .1, .1); ctx.col(X(-4.95), -10.3, .1, .1);
  put(M.casinhaCachorro(pega(R, ['#C84E4E', '#3E7CC8', '#2E9C6A'])), -1.4, -10.4, 0);
  put(M.vasoGrande(ctx.L.seed), 4.8, -7.1); put(M.vasoGrande(ctx.L.seed + 3), -3.8, -10.5);
}

/** Andar de cima do sobrado: laje, paredes com janelas, varanda na frente, dois quartos e um escritório. */
function andarDeCima(ctx, P, X, nivel) {
  const H = 2.8, y = H + .15, perto = nivel === 'perto', ext = P.ext, int = perto ? P.q1 : null;
  ctx.add(bx(9.6, .15, 12.2, '#E8E4DC', 0, H + .075, -.5));
  const PZ = (z, xa, xb, vaos, neg, pos) => { const a = Math.min(X(xa), X(xb)), b = Math.max(X(xa), X(xb)); parede(ctx, a, z, b, z, { y, h: H, t: .2, corA: neg, corB: pos, semCol: true, vaos: vaos.map(v => ({ a: X(v.c) - v.w / 2 - a, b: X(v.c) + v.w / 2 - a, y0: v.y0, y1: v.y1 })) }); };
  const PXw = (x, za, zb, vaos, neg, pos) => { const [A, B] = X(1) > 0 ? [neg, pos] : [pos, neg]; parede(ctx, X(x), za, X(x), zb, { y, h: H, t: .2, corA: A, corB: B, semCol: true, vaos: vaos.map(v => ({ a: v.c - v.w / 2 - za, b: v.c + v.w / 2 - za, y0: v.y0, y1: v.y1 })) }); };
  const jan = (cx, cz, emX, w, y0, y1, fora) => janela(ctx, X(cx), cz, emX, w, y + y0, y + y1, { t: .2, fora: emX ? fora : fora * (X(1) > 0 ? 1 : -1), cortina: '#F3E3C0', seed: ctx.L.seed + 50 + cx });
  PZ(5.5, -4.7, 4.7, [{ c: -2.2, w: 2.2, y0: 0, y1: 2.2 }, { c: 2.6, w: 1.4, y0: .95, y1: 2.15 }], int, ext);
  PZ(-6.5, -4.7, 4.7, [{ c: -2.2, w: 1.4, y0: .95, y1: 2.15 }, { c: 2.6, w: 1.4, y0: .95, y1: 2.15 }], ext, int);
  PXw(-4.7, -6.5, 5.5, [{ c: 0, w: 1.2, y0: .95, y1: 2.15 }], ext, int); PXw(4.7, -6.5, 5.5, [{ c: -3, w: 1.2, y0: .95, y1: 2.15 }], int, ext);
  jan(2.6, 5.5, true, 1.4, .95, 2.15, 1); jan(-2.2, -6.5, true, 1.4, .95, 2.15, -1); jan(2.6, -6.5, true, 1.4, .95, 2.15, -1); jan(-4.7, 0, false, 1.2, .95, 2.15, -1); jan(4.7, -3, false, 1.2, .95, 2.15, 1);
  // porta de vidro para a varanda + varanda com guarda-corpo sobre a garagem
  janela(ctx, X(-2.2), 5.5, true, 2.2, y, y + 2.2, { t: .2, fora: 1, cortina: perto ? '#F3E3C0' : false, seed: 9 });
  ctx.add(bx(4.2, .15, 1.6, '#E8E4DC', X(-2.2), H + .075, 6.3)); for (let i = 0; i <= 14; i++) ctx.add(bx(.03, 1, .03, P.grade, X(-4.3 + i * .3), y + .5, 7.05, { shadow: false })); ctx.add(bx(4.2, .05, .06, P.grade, X(-2.2), y + 1.02, 7.05, { shadow: false }));
  ctx.add(cyl(.09, .09, H, '#E8E4DC', X(-4.15), H / 2, 6.95, { seg: 10 })); ctx.add(cyl(.09, .09, H, '#E8E4DC', X(-.25), H / 2, 6.95, { seg: 10 }));
  if (perto) { // móveis do andar de cima (vistos pelas janelas)
    const C = ctx.cidade; const R = P.R;
    const put = (o, x, z, ry = 0) => { o.position.set(X(x), y + .01, z); o.rotation.y = X(1) > 0 ? ry : -ry; ctx.add(o); };
    chao(ctx, 0, -.5, 9.2, 11.8, toonTex(C.tex.piso('madeira', '#B98450', '#A8763F')), y + .005); forro(ctx, 0, -.5, 9.2, 11.8, y + H - .01);
    parede(ctx, X(-4.7), 0, X(4.7), 0, { y, h: H, t: .12, corA: int, corB: int, semCol: true, vaos: [{ a: 4.2, b: 5.0 }] });
    put(M.cama(1.4, pega(R, ['#C84E4E', '#3E7CC8', '#8E6CC4'])), 2.6, 1.9, 0); put(M.criado('#7A5233', true, C), 1.6, 1.0); put(M.guardaRoupa(1.6), -.4, .35, 0);
    put(M.escrivaninha(1.2, '#F4F1EA', true, ctx.L.seed + 1), -3.4, -6.1, 0); put(M.cadeiraEscritorio(), -3.4, -5.4, Math.PI); put(M.estante(1.2, 1.8, '#9A6236', ctx.L.seed + 9), -4.35, -2.5, Math.PI / 2);
    put(M.cama(.95, pega(R, ['#2E9C6A', '#F2C230'])), 3.9, -4.8, 0); put(M.sofa(1.6, P.sofa), -.8, 4.7, Math.PI); put(M.plafon(C, H - .01), 0, 3);
  } else ctx.add(bx(9.2, 2.6, 11.8, '#3A3540', 0, y + 1.3, -.5, { shadow: false }));
}
