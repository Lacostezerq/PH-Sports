// IK simples do braço: acha ombro [frente, abrir, girar] e cotovelo para a mão chegar num ponto do mundo.
// Usa o próprio boneco (pose + medida da mão), então funciona com qualquer proporção e escala.
import * as THREE from 'three';

const V = new THREE.Vector3(), PT = new THREE.Vector3();
const LIM = [[-70, 175], [-25, 110], [-80, 80], [0, 150]];
const cache = new WeakMap();

/** Ponto de pegada da mão (palma) em coordenadas do mundo. */
export function palma(g, lado, out = new THREE.Vector3()) { g.hands[lado].updateWorldMatrix(true, false); return g.hands[lado].localToWorld(out.set(0, -.04, .03)); }

/**
 * Devolve a pose `p` com o braço `lado` ('L'|'R') ajustado para a mão chegar em `alvo` ([x,y,z] ou Vector3, mundo).
 * Também aplica a pose no boneco. `cot`: preferência de cotovelo (graus) quando há várias soluções.
 */
export function alcanca(g, lado, alvo, p = {}, o = {}) {
  const A = Array.isArray(alvo) ? PT.set(...alvo) : PT.copy(alvo);
  const kS = 'sh' + lado, kE = 'el' + lado;
  let c = cache.get(g)?.[lado];
  if (!c) { const s = p[kS] || [40, 10, 0]; c = [s[0] || 0, s[1] ?? 10, s[2] || 0, p[kE] ?? 60]; }
  c = c.slice();
  const P = { ...p };
  const custo = (x) => {
    P[kS] = [x[0], x[1], x[2]]; P[kE] = x[3]; g.pose(P); g.root.updateMatrixWorld(true);
    const d = palma(g, lado, V).distanceTo(A);
    return d + Math.abs(x[2]) * .0004 + Math.max(0, -x[1]) * .002 + (o.cot !== undefined ? Math.abs(x[3] - o.cot) * .0003 : 0);
  };
  let best = custo(c);
  for (const st of [24, 12, 6, 3, 1.5, .7]) {
    for (let it = 0; it < 3; it++) {
      let mudou = false;
      for (let i = 0; i < 4; i++) for (const s of [st, -st]) {
        const x = c.slice(); x[i] = Math.min(LIM[i][1], Math.max(LIM[i][0], x[i] + s));
        const v = custo(x); if (v < best - 1e-5) { best = v; c = x; mudou = true; }
      }
      if (!mudou) break;
    }
  }
  const m = cache.get(g) || {}; m[lado] = c; cache.set(g, m);
  P[kS] = [c[0], c[1], c[2]]; P[kE] = c[3]; g.pose(P); g.root.updateMatrixWorld(true);
  return P;
}

/** Ponto no espaço da cabeça (x lado, y cima, z frente) em coordenadas do mundo. Boca ≈ (0, -.1, .3). */
export function naCabeca(g, x, y, z) { g.headG.updateWorldMatrix(true, false); return g.headG.localToWorld(new THREE.Vector3(x, y, z)); }

/** Faz o objeto apontar de `de` para `para` (eixo +Y do objeto vai na direção). */
export function aponta(obj, de, para, eixo = new THREE.Vector3(0, 1, 0)) {
  const d = new THREE.Vector3().subVectors(para, de).normalize(); obj.quaternion.setFromUnitVectors(eixo, d);
}

/** Ponto da boca no espaço da cabeça. */
export const BOCA = [0, .17, .29];
/** Escovar os dentes de verdade: a mão direita leva a escova até a boca e esfrega de um lado pro outro. */
export function escovar(g, e, t, base = {}, f = 1) {
  const b = naCabeca(g, ...BOCA); const h = naCabeca(g, -.24 + Math.sin(t * 40 * f) * .025 * f, .13 + Math.sin(t * 20 * f) * .008, .36);
  const P = alcanca(g, 'R', h, base); const pm = palma(g, 'R'); e.position.copy(pm); aponta(e, pm, b); return P;
}
/** Leva a mão (com a comida) do repouso (k=0) até a frente da boca (k=1). */
export function levaBoca(g, lado, k, base = {}, rep = [.1, -.22, .36]) {
  const s = lado === 'L' ? 1 : -1; const a = naCabeca(g, s * rep[0], rep[1], rep[2]), b = naCabeca(g, s * .02, .13, .39);
  return alcanca(g, lado, a.lerp(b, k), base);
}
/** Ciclo de mordidas: devolve k (0 repouso .. 1 na boca), com pausa na boca. per = segundos por mordida. */
export function ciclo(t, per = 2.4, fase = 0) { const x = (((t + fase) / per) % 1 + 1) % 1; if (x < .3) return .5 - .5 * Math.cos(x / .3 * Math.PI); if (x < .45) return 1; if (x < .75) return .5 + .5 * Math.cos((x - .45) / .3 * Math.PI); return 0; }
