// Ferramentas comuns da cidade: juntar malhas (deixa leve), lote com giro, colisores e registro de "coisas vivas".
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { toon, tm, rb, bx, cyl, sph, rbox, outline, blob } from '../base/toon.js';
export { toon, tm, rb, bx, cyl, sph, rbox, outline, blob };
export const D = Math.PI / 180;

/**
 * Junta todas as malhas paradas de um grupo em poucas malhas (uma por material).
 * Malhas com userData.vivo (portas, TVs, coisas que mexem) ficam de fora e continuam separadas.
 */
export function fundir(g) {
  g.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(g.matrixWorld).invert();
  const grupos = new Map(), soltos = [];
  const visita = (o) => {
    for (const ch of [...o.children]) {
      if (ch.userData.vivo || (ch.isMesh && Array.isArray(ch.material)) || ch.isLight || ch.isSprite || ch.isPoints || ch.isLine || ch.isInstancedMesh || ch.isSkinnedMesh || ch.isCamera) { soltos.push(ch); continue; }
      if (ch.isMesh && ch.geometry && !Array.isArray(ch.material) && ch.visible) {
        const o2 = ch; const k = o2.material.uuid + (o2.castShadow ? 's' : 'n') + (o2.receiveShadow ? 'r' : '') + (o2.renderOrder | 0);
        if (!grupos.has(k)) grupos.set(k, { mat: o2.material, cast: o2.castShadow, rec: o2.receiveShadow, ro: o2.renderOrder, out: !!o2.userData.isOutline, geos: [] });
        let geo = o2.geometry.index ? o2.geometry.toNonIndexed() : o2.geometry.clone();
        for (const n of Object.keys(geo.attributes)) if (!['position', 'normal', 'uv'].includes(n)) geo.deleteAttribute(n);
        if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
        if (!geo.attributes.normal) geo.computeVertexNormals();
        geo.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o2.matrixWorld)); geo.morphAttributes = {}; geo.clearGroups();
        grupos.get(k).geos.push(geo);
      }
      visita(ch);
    }
  };
  visita(g);
  const out = new THREE.Group(); out.name = g.name; out.position.copy(g.position); out.rotation.copy(g.rotation); out.scale.copy(g.scale); out.userData = g.userData;
  for (const G of grupos.values()) {
    if (!G.geos.length) continue;
    const geo = mergeGeometries(G.geos, false); if (!geo) continue;
    const m = new THREE.Mesh(geo, G.mat); m.castShadow = G.cast; m.receiveShadow = G.rec; m.renderOrder = G.ro; m.userData.isOutline = G.out; m.matrixAutoUpdate = false; out.add(m);
  }
  for (const s of soltos) { // re-anexa com a mesma posição no mundo
    const mw = s.matrixWorld.clone(); out.add(s); s.matrix.copy(new THREE.Matrix4().multiplyMatrices(inv, mw)); s.matrix.decompose(s.position, s.quaternion, s.scale);
  }
  return out;
}

/** Giro de um lote: frente para 's' (+z), 'n', 'e' (+x), 'w'. */
export const GIRO = { s: 0, n: Math.PI, e: Math.PI / 2, w: -Math.PI / 2 };
/** Converte ponto local do lote para o mundo. */
export function paraMundo(L, x, z) { const a = GIRO[L.frente] || 0, c = Math.cos(a), s = Math.sin(a); return [L.x + x * c + z * s, L.z - x * s + z * c]; }
/** Converte direção (ângulo y) local para o mundo. */
export const giroMundo = (L, ry) => ry + (GIRO[L.frente] || 0);

/**
 * Contexto de construção de um lote: adiciona peças em coordenadas locais e registra colisores.
 * `col(x,z,w,d)` = caixa sólida no chão (paredes, móveis). Personagens nunca entram nela.
 */
export function lote(cidade, L) {
  const g = new THREE.Group(); g.position.set(L.x, L.y || 0, L.z); g.rotation.y = GIRO[L.frente] || 0; g.name = L.nome || L.tipo;
  const ctx = {
    L, g, cidade,
    add: (...o) => { for (const m of o) g.add(m); return o[0]; },
    col: (x, z, w, d, o = {}) => { const a = GIRO[L.frente] || 0; const p = paraMundo(L, x, z); const q = Math.abs(Math.round(Math.sin(a))) === 1; cidade.colisores.push({ x: p[0], z: p[1], w: q ? d : w, d: q ? w : d, h: o.h ?? 2, y: o.y ?? 0, nome: o.nome || L.nome }); },
    ponto: (nome, x, z, ry = 0, y) => { const p = paraMundo(L, x, z); cidade.pontos[(L.nome ? L.nome + '.' : '') + nome] = { x: p[0], z: p[1], y: (y ?? 0) + (L.y || 0), ry: giroMundo(L, ry) }; },
    vivo: (fn) => cidade.vivos.push(fn),
    /** Registra o primeiro ponto da lista que não encosta em nada (os colisores já registrados). */
    pontoLivre: (nome, cands, ry = 0) => { for (const [x, z] of cands) { const p = paraMundo(L, x, z); if (!cidade.colisores.some(c => Math.abs(p[0] - c.x) < c.w / 2 + .3 && Math.abs(p[1] - c.z) < c.d / 2 + .3)) { ctx.ponto(nome, x, z, ry); return; } } ctx.ponto(nome, cands[0][0], cands[0][1], ry); },
    pisoAlto: (x, z, w, d, y) => { const a = GIRO[L.frente] || 0; const p = paraMundo(L, x, z); const q = Math.abs(Math.round(Math.sin(a))) === 1; (cidade.pisosAltos = cidade.pisosAltos || []).push({ x: p[0], z: p[1], w: q ? d : w, d: q ? w : d, y: y + (L.y || 0) }); },
    figurante: (x, z, ry = 0, o = {}) => { const p = paraMundo(L, x, z); (cidade.figurantes = cidade.figurantes || []).push({ x: p[0], z: p[1], ry: giroMundo(L, ry), y: (o.y ?? 0) + (L.y || 0), lote: L.nome, nivel: ctx.nivel, ...o }); },
  };
  return ctx;
}

/** Plano deitado no chão. */
export function piso(w, d, mat, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat); m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); m.receiveShadow = true; return m; }
/** Plano em pé (placa, quadro). */
export function placa(w, h, mat, x = 0, y = 0, z = 0, ry = 0) { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); m.position.set(x, y, z); m.rotation.y = ry; m.receiveShadow = true; return m; }
/** Ajusta a repetição de UV de uma caixa para a textura ficar no tamanho certo (tile em metros). */
export function uvCaixa(geo, w, h, d, tile = 1) {
  const uv = geo.attributes.uv, n = geo.attributes.normal;
  for (let i = 0; i < uv.count; i++) { const nx = Math.abs(n.getX(i)), ny = Math.abs(n.getY(i)); const su = nx > .5 ? d : w, sv = ny > .5 ? d : h; uv.setXY(i, uv.getX(i) * su / tile, uv.getY(i) * sv / tile); }
  uv.needsUpdate = true; return geo;
}
/** Caixa com textura repetida em metros. */
export function caixaTex(w, h, d, mat, x, y, z, tile = 1, o = {}) { const g = uvCaixa(new THREE.BoxGeometry(w, h, d), w, h, d, tile); const m = tm(g, mat, { pos: [x, y, z], ...o }); return m; }
/** Escolhe item de uma lista com um sorteio fixo. */
export const pega = (R, a) => a[Math.floor(R() * a.length) % a.length];
