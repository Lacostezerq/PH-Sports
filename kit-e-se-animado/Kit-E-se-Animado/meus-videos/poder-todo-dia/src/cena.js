// Atalhos das cenas deste vídeo: cena na cidade (com câmera viva), coordenadas da casa da família e do hospital.
import * as THREE from 'three';
import { cenaCidade } from '../../../mundo/cidade/video.js';
import { setCur, ator as atorLib, cam as camLib } from './lib.js';
import { uT } from './motor/kit2.js';
import { ventiladorTeto } from '../../../mundo/cidade/moveis.js';
/** Câmera viva. P e Q podem ser um ponto [x,y,z] ou chaves [[u,[x,y,z]],...] (u de 0 a 1 dentro do plano). */
export const cam = (c, P, Q, u, roll = 0) => camLib(c, typeof P[0] === 'number' ? [[0, P]] : P, typeof Q[0] === 'number' ? [[0, Q]] : Q, u, roll);

/** Cena dentro de Pedra Alta. o: opções da cidade (foco, hora, raio, dentro, carros, pedestres, tempo, fx, viva). */
export function cena(t0, t1, o, monta) {
  return cenaCidade(t0, t1, { raio: 42, ...o }, (C, s) => {
    const up = monta ? monta(C, s) : null;
    return (t, u, camera) => { setCur({ t0, t1, viva: o.viva ?? 1 }); uT.value = t; const r = up ? up(t, u, camera) || {} : {}; return { ...(o.fx || {}), ...r }; };
  });
}
/** Personagem na cidade (já com sombra e altura do chão). */
export function ator(C, def, x, z, ry = 0, y) { const k = atorLib(C.cena, def, x, z, ry, y ?? (C.alturaChao ? C.alturaChao(x, z) : 0)); return k; }

// ---------- casa da família (lote em -65.5, 79, frente para o norte) ----------
export const CASA = { x: -65.5, z: 79 };
/** Converte coordenadas da planta da casa (x, z locais) para o mapa. */
export const casa = (lx, lz) => [CASA.x - lx, CASA.z - lz];
/** Converte um ângulo local da planta para o mapa. */
export const casaRy = (ry) => ry + Math.PI;
export const PISO = .275, TETO = 2.945;
// quarto do Guilherme (quarto 1): x .8..4.7, z 1.5..5.5 (local)
export const QUARTO = { centro: casa(2.75, 3.5), cama: casa(4.15, 2.6), porta: casa(1.5, 1.5), espelho: [casa(1.46, 3.5)[0] - .03, casa(1.46, 3.5)[1]], janela: casa(2.75, 5.5) };
/** Ventilador de teto extra no quarto do Guilherme (o ponto de partida do vídeo). */
export function ventiladorQuarto(C) { const v = ventiladorTeto(TETO - .15); const [x, z] = QUARTO.centro; v.position.set(x, .15, z); C.cena.add(v); return v; }

// ---------- Santa Casa (60, -90, frente para o sul) ----------
export const hosp = (lx, lz) => [60 + lx, -90 + lz];
export const PISOH = .17;

/** Tempo que faz o semáforo da Avenida Brasil (eixo x) ficar vermelho no instante t do vídeo. */
export const vermelhoAv = (tVideo, fase = 20) => (t) => t + (fase - ((tVideo + 1.5) % 32) + 64) % 32;

import { walk as walkC, idle as idleC } from './motor/char3d.js';
/** Faz o personagem andar pelos pontos usando o tempo do vídeo (funciona mesmo com a cidade congelada).
 * Desvia de tudo (C.caminho). Devolve upd(t) para chamar a cada quadro. */
export function caminhar(C, k, pontos, t0, o = {}) {
  const pts = []; for (let i = 0; i < pontos.length - 1; i++) { const seg = o.direto ? [pontos[i], pontos[i + 1]] : C.caminho(pontos[i], pontos[i + 1]); if (pts.length) seg.shift(); pts.push(...seg); }
  const L = [0]; for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const tot = L.at(-1), vel = o.vel || 1.25, T = tot / vel;
  const em = (d) => { let i = 1; while (i < L.length - 1 && L[i] < d) i++; const u = Math.min(1, (d - L[i - 1]) / Math.max(1e-6, L[i] - L[i - 1])); return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * u, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * u]; };
  let ry = Math.atan2(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]);
  return (t) => { const u = Math.max(0, Math.min(T, t - t0)), d = u * vel, p = em(d), q = em(Math.min(tot, d + .5)); if (Math.hypot(q[0] - p[0], q[1] - p[1]) > 1e-3) ry = Math.atan2(q[0] - p[0], q[1] - p[1]);
    const anda = t > t0 && t < t0 + T; k.place(p[0], p[1], C.alturaChao(p[0], p[1]), anda || o.olharFim === undefined ? ry : o.olharFim); if (!o.semPose) k.pose(anda ? walkC(t, 1.8, 1) : idleC(t)); return anda; };
}
/** Esconde o figurante da cidade que estiver sentado/parado perto de (x, z) — ex.: o lugar ao lado do Dudu. */
export function semFigurante(C, pontos, r = .35) { const L = C._perto || []; for (let i = L.length - 1; i >= 0; i--) { const k = L[i], p = k.root.position; if (pontos.some(([x, z]) => Math.hypot(p.x - x, p.z - z) < r)) { k.root.visible = false; k.root.parent && k.root.parent.remove(k.root); L.splice(i, 1); } } }
/** Lugares da sala de espera da Santa Casa que precisam ficar livres (os dois do lado do Dudu). */
export const LADO_DUDU = [hosp(-9, .35), hosp(-7.9, .35)];
