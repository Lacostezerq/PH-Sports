// Atalho para usar a cidade dentro de um vídeo do kit (HyperFrames + Stage).
// Cada cena monta a cidade só quando é filmada pela primeira vez e libera a memória da cena anterior.
//
//   import { cenaCidade } from '../../../mundo/cidade/video.js';
//   export const CENAS = [
//     cenaCidade(0, 6, { vista: 'casaFrente' }),                                   // câmera parada numa vista pronta
//     cenaCidade(6, 14, { vista: 'sala', mover: [[0, 'sala'], [8, 'salaTV']] }),     // câmera indo de uma vista a outra
//     cenaCidade(14, 22, { foco: [-65, 79], hora: 18 }, (C, s) => {                  // cena livre
//        const k = ator(C, GUI30); C.andar(k, ['casaFamilia.portao', 'casaFamilia.sala'], 14.5);
//        return (t, u, cam) => { camera(cam, [-60, 1.7, 70], [-65, 1.2, 76]); };
//     }),
//   ];
import * as THREE from 'three';
import { makeShot, keys, aim } from '../base/core.js';
import { FX } from '../base/toon.js';
import { makeChar3D } from '../base/char3d.js';
import { montarCidade, VISTAS } from './index.js';

let ATIVA = null;
function liberar(s) {
  if (!s || !s._montada) return;
  const mats = new Set(), texs = new Set();
  s.scene.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.isLight && o.shadow && o.shadow.map) { o.shadow.map.dispose(); o.shadow.map = null; }
    const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
    for (const m of ms) { mats.add(m); for (const k of ['map', 'emissiveMap', 'alphaMap']) if (m[k]) texs.add(m[k]); }
  });
  // libera a memória de vídeo (o three.js envia de novo sozinho se algo for reaproveitado depois)
  for (const m of mats) m.dispose(); for (const t of texs) t.dispose();
  s.scene.clear(); s._montada = false; s.C = null; if (s._limpar) s._limpar(); // solta a cena antiga para a memória voltar
}

/**
 * Cria uma cena (shot) do Stage com a cidade.
 * o.vista / o.foco / o.hora / o.raio / o.vida ... = opções de montarCidade.
 * o.mover = [[segundos, 'nomeDaVista' ou {cam,alvo}], ...] câmera passando por vistas (tempo relativo ao começo da cena).
 * o.fx = efeitos de cor (ex.: { tint: '#D6DEFF' }).
 * monta(C, shot) pode devolver upd(t, u, cam) chamado a cada quadro (t = tempo do vídeo, u = tempo dentro da cena).
 */
export function cenaCidade(t0, t1, o = {}, monta) {
  const v0 = o.vista ? VISTAS[o.vista] : null;
  const s = makeShot(t0, t1, '#BFE3F7', o.fov || v0?.fov || 45);
  s.camera.near = o.near || .08; s.camera.far = 3000; s.camera.updateProjectionMatrix();
  let upd = null; s._limpar = () => { upd = null; };
  const montar = () => { if (ATIVA && ATIVA !== s) liberar(ATIVA); ATIVA = s; s._montada = true;
    const C = montarCidade(s.scene, { ...o, foco: o.foco || v0?.foco, hora: o.hora ?? v0?.hora, dentro: o.dentro ?? v0?.dentro }); s.C = C; s.scene.userData.vida = [];
    upd = monta ? monta(C, s) : null; };
  // trajetória da câmera
  const caminho = o.mover ? o.mover.map(([tt, w]) => { const q = typeof w === 'string' ? VISTAS[w] : w; return [tt, q.cam, q.alvo, q.fov ?? s.camera.fov]; }) : null;
  s.update = (t, u) => {
    if (!s._montada) montar();
    const C = s.C, cam = s.camera;
    if (caminho) { const p = keys(caminho.map(k => [k[0], k[1]]), u), q = keys(caminho.map(k => [k[0], k[2]]), u), f = keys(caminho.map(k => [k[0], k[3]]), u); aim(cam, p, q); if (Math.abs(cam.fov - f) > .01) { cam.fov = f; cam.updateProjectionMatrix(); } }
    else if (v0) aim(cam, v0.cam, v0.alvo);
    const r = upd ? upd(t, u, cam) || {} : {};
    C.atualizar(t, cam);
    return FX({ ...(o.fx || {}), ...r });
  };
  return s;
}
/** Coloca um personagem (definição do elenco) na cidade. */
export function ator(C, def, x = 0, z = 0, ry = 0) { const k = makeChar3D(def); C.cena.add(k.root); k.place(x, z, C.alturaChao ? C.alturaChao(x, z) : 0, ry); k.seed = Math.abs((x * 13 + z * 7) | 0) % 9; return k; }
/** Aponta a câmera (atalho). */
export function camera(cam, p, q, roll = 0) { aim(cam, p, q, roll); }
