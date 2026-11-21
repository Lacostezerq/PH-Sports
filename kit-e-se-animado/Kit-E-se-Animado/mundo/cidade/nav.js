// Caminhos e colisão: personagens andam desviando de paredes e móveis, passam pelas portas (que abrem sozinhas)
// e nunca atravessam nada. Use C.andar(personagem, ['casaFamilia.sala', 'casaFamilia.quarto1'], t0).
import * as THREE from 'three';
import { walk, idle } from '../base/char3d.js';
import { XS, ZS, RUA, MEIOFIO, qx, qz } from './mapa.js';

const CEL = 4; // tamanho da célula do índice espacial
export function montarNav(C) {
  // ---------- índice espacial dos colisores ----------
  const H = new Map(); const key = (i, k) => i * 100003 + k;
  C.colisores.forEach((c, n) => { const i0 = Math.floor((c.x - c.w / 2) / CEL), i1 = Math.floor((c.x + c.w / 2) / CEL), k0 = Math.floor((c.z - c.d / 2) / CEL), k1 = Math.floor((c.z + c.d / 2) / CEL);
    for (let i = i0; i <= i1; i++) for (let k = k0; k <= k1; k++) { const kk = key(i, k); if (!H.has(kk)) H.set(kk, []); H.get(kk).push(n); } });
  /** true se um círculo de raio r em (x,z) não encosta em nada sólido. */
  C.livre = (x, z, r = .22, ignora) => { const l = H.get(key(Math.floor(x / CEL), Math.floor(z / CEL))); if (!l) return true;
    for (const n of l) { const c = C.colisores[n]; if (ignora && ignora(c)) continue; if (c.h !== undefined && c.h < .12) continue; if (Math.abs(x - c.x) < c.w / 2 + r && Math.abs(z - c.z) < c.d / 2 + r) return false; } return true; };
  /** Altura do chão em (x,z): rua = 0, calçada e lotes = 0,15, dentro de casa = 0,275. */
  C.alturaChao = (x, z) => { for (const p of C.pisosAltos || []) if (Math.abs(x - p.x) < p.w / 2 && Math.abs(z - p.z) < p.d / 2) return p.y; return naQuadra(x, z) ? MEIOFIO : 0; };
  const naQuadra = (x, z) => { for (let c = 0; c < 5; c++) if (Math.abs(x - qx(c)) <= 25) for (let l = 0; l < 4; l++) if (Math.abs(z - qz(l)) <= 25) return true; return z > 127 && z < 136 && Math.abs(x) < 165; };
  const naFaixa = (x, z) => { for (const X of XS) for (const Z of ZS) { const dx = Math.abs(x - X), dz = Math.abs(z - Z); if ((dx < 5 && dz > 5 && dz < 8.6) || (dz < 5 && dx > 5 && dx < 8.6)) return true; } return false; };
  C.naQuadra = naQuadra;

  /** Caminho de a até b ([x,z]) desviando de tudo. Prefere calçada; atravessa a rua pela faixa. */
  C.caminho = (a, b, o = {}) => {
    const dist = Math.hypot(b[0] - a[0], b[1] - a[1]); const res = o.res || (dist < 50 ? .2 : dist < 140 ? .4 : .7), r = o.raio ?? .22;
    const m = o.margem ?? Math.min(30, 8 + dist * .3);
    const x0 = Math.min(a[0], b[0]) - m, z0 = Math.min(a[1], b[1]) - m, nx = Math.ceil((Math.abs(b[0] - a[0]) + 2 * m) / res), nz = Math.ceil((Math.abs(b[1] - a[1]) + 2 * m) / res);
    const N = nx * nz, custo = new Float32Array(N); // 0 = bloqueado
    for (let k = 0; k < nz; k++) for (let i = 0; i < nx; i++) { const x = x0 + (i + .5) * res, z = z0 + (k + .5) * res;
      custo[k * nx + i] = !C.livre(x, z, r) ? 0 : naQuadra(x, z) ? 1 : naFaixa(x, z) ? 1.5 : (o.rua ? 1.2 : 25); }
    const idx = (p) => { const i = Math.max(0, Math.min(nx - 1, Math.floor((p[0] - x0) / res))), k = Math.max(0, Math.min(nz - 1, Math.floor((p[1] - z0) / res))); return k * nx + i; };
    const ini = idx(a), fim = idx(b); custo[ini] = custo[ini] || 1; custo[fim] = custo[fim] || 1;
    const g = new Float32Array(N).fill(Infinity), de = new Int32Array(N).fill(-1), fechado = new Uint8Array(N);
    const heap = [], push = (n, f) => { heap.push([f, n]); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
    const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = 2 * i + 1, rr = l + 1; let s = i; if (l < heap.length && heap[l][0] < heap[s][0]) s = l; if (rr < heap.length && heap[rr][0] < heap[s][0]) s = rr; if (s === i) break; [heap[s], heap[i]] = [heap[i], heap[s]]; i = s; } } return top; };
    const bi = fim % nx, bk = (fim / nx) | 0; const hh = (n) => Math.hypot(n % nx - bi, ((n / nx) | 0) - bk);
    g[ini] = 0; push(ini, hh(ini)); let achou = false, passos = 0;
    const viz = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, 1.414], [1, -1, 1.414], [-1, 1, 1.414], [-1, -1, 1.414]];
    while (heap.length && passos++ < 3e6) { const [, n] = pop(); if (fechado[n]) continue; fechado[n] = 1; if (n === fim) { achou = true; break; }
      const i = n % nx, k = (n / nx) | 0;
      for (const [di, dk, w] of viz) { const ii = i + di, kk = k + dk; if (ii < 0 || kk < 0 || ii >= nx || kk >= nz) continue; const q = kk * nx + ii; const c = custo[q]; if (!c || fechado[q]) continue;
        if (di && dk && (!custo[k * nx + ii] || !custo[kk * nx + i])) continue; // não corta quina
        const ng = g[n] + w * c; if (ng < g[q]) { g[q] = ng; de[q] = n; push(q, ng + hh(q)); } } }
    if (!achou) { console.warn('[cidade] caminho não encontrado', a, b); const r = [a, b]; r.falhou = true; return r; }
    const cel = []; for (let n = fim; n !== -1; n = de[n]) cel.push([x0 + (n % nx + .5) * res, z0 + (((n / nx) | 0) + .5) * res]); cel.reverse();
    cel[0] = a; cel[cel.length - 1] = b;
    // alisa: pula pontos quando dá para ir reto sem encostar em nada e sem sair do tipo de chão
    const reto = (p, q) => { const d = Math.hypot(q[0] - p[0], q[1] - p[1]), n = Math.ceil(d / (res * .5)); const t0 = naQuadra(p[0], p[1]);
      for (let s = 1; s < n; s++) { const x = p[0] + (q[0] - p[0]) * s / n, z = p[1] + (q[1] - p[1]) * s / n; if (!C.livre(x, z, r * .95)) return false; if (!naQuadra(x, z) && !naFaixa(x, z) && !o.rua) return false; } return true; };
    const out = [cel[0]]; let i = 0; while (i < cel.length - 1) { let j = cel.length - 1; while (j > i + 1 && !reto(cel[i], cel[j])) j--; out.push(cel[j]); i = j; }
    return out;
  };

  /** Converte nomes de pontos ("casaFamilia.sala") ou [x,z] em coordenadas. */
  C.ponto = (p) => { if (Array.isArray(p)) return p; const q = C.pontos[p]; if (!q) { console.warn('[cidade] ponto desconhecido: ' + p + '. Pontos: ' + Object.keys(C.pontos).slice(0, 40).join(', ')); return [0, 0]; } return [q.x, q.z]; };

  /**
   * Faz um personagem andar por uma lista de lugares a partir do tempo t0 (segundos do vídeo).
   * o.vel = velocidade (m/s, padrão 1.25), o.correr = true para correr, o.olharFim = ângulo final.
   * Devolve { dur, fim, pos(t) }. O personagem é movido sozinho a cada quadro.
   */
  C.andar = (k, lista, t0 = 0, o = {}) => {
    const pts = []; for (let i = 0; i < lista.length - 1; i++) { const a = C.ponto(lista[i]), b = C.ponto(lista[i + 1]); const seg = o.direto ? [a, b] : C.caminho(a, b, o); if (pts.length) seg.shift(); pts.push(...seg); }
    if (lista.length === 1) pts.push(C.ponto(lista[0]));
    const L = [0]; for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    const tot = L[L.length - 1]; let vel = o.vel || (o.correr ? 3.2 : 1.25); const ini = Math.min(1.0, tot / vel); // ini: tempo para acelerar e para frear
    const T = tot / vel + ini;
    const s = (t) => { const u = t - t0; if (u <= 0) return 0; if (u >= T) return tot; if (u < ini) return vel * u * u / (2 * ini); if (u < T - ini) return vel * (u - ini / 2); return tot - vel * (T - u) ** 2 / (2 * ini); };
    const vu = (t) => { const u = t - t0; if (u <= 0 || u >= T) return 0; return Math.min(1, u / ini, (T - u) / ini); };
    const em = (d) => { let i = 1; while (i < L.length - 1 && L[i] < d) i++; const u = (d - L[i - 1]) / Math.max(1e-6, L[i] - L[i - 1]); return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * Math.min(1, u), pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * Math.min(1, u)]; };
    const A = { k, pts, t0, dur: T, fim: t0 + T, tot,
      pos: (t) => em(s(t)),
      rumo: (t) => { const d = s(t), p = em(Math.max(0, d - .35)), q = em(Math.min(tot, d + .6)); return (Math.abs(q[0] - p[0]) + Math.abs(q[1] - p[1]) < 1e-4) ? null : Math.atan2(q[0] - p[0], q[1] - p[1]); } };
    let ultRumo = o.olharIni ?? (pts.length > 1 ? Math.atan2(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]) : 0);
    const rumoFim = pts.length > 1 ? Math.atan2(pts.at(-1)[0] - pts.at(-2)[0], pts.at(-1)[1] - pts.at(-2)[1]) : ultRumo;
    if (k) C.vivos.push((t) => {
      if (A.desligado) return; const p = A.pos(t), andando = t > t0 && t < A.fim; const y = C.alturaChao(p[0], p[1]);
      const r = A.rumo(t); let ry = t <= t0 ? ultRumo : t >= A.fim ? (o.olharFim ?? rumoFim) : (r ?? rumoFim);
      k.place(p[0], p[1], y, ry);
      const v = vu(t);
      if (!o.semPose) k.pose(andando ? (o.correr ? walk(t, 2.6, 1.3 * v) : walk(t, 1.8, v)) : idle(t, k.seed || 0));
    });
    C.andantes.push(A); return A;
  };
  // ---------- portas automáticas ----------
  C.vivos.push((t) => {
    for (const nome in C.portas) { const P = C.portas[nome]; if (!P.auto || !P.mundo) continue; let v = 0;
      for (const A of C.andantes) { if (A.desligado) continue; const p = A.pos(t), d = Math.hypot(p[0] - P.mundo[0], p[1] - P.mundo[1]); v = Math.max(v, 1 - Math.max(0, Math.min(1, (d - 1.0) / 1.4))); }
      P.abrir(Math.max(P.abertaFixa ?? 0, v * v * (3 - 2 * v))); }
  });
}
