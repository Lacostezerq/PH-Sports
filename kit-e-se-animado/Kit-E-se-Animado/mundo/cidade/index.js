// PEDRA ALTA — a cidade 3D dos vídeos. Use: const C = montarCidade(cena, { foco: [x, z], hora: 15 });
// Depois, a cada quadro: C.atualizar(t). Veja mundo/LEIA-ME.md.
import * as THREE from 'three';
import { lotes, XS, ZS, MEIOFIO } from './mapa.js';
import { ruas } from './ruas.js';
import { paisagem, lago, nuvens } from './natureza.js';
import { montarHora } from './hora.js';
import { lote, fundir } from './util.js';
import * as TX from './texturas.js';
import { CONSTRUTORES } from './construtores.js';
import { montarVida } from './vida.js';
import { montarNav } from './nav.js';
import { VISTAS } from './vistas.js';

/**
 * Monta a cidade dentro de uma cena three.js.
 * o.foco = [x, z]: onde a câmera vai filmar (perto dele tudo é montado com todos os detalhes e com o lado de dentro).
 * o.raio = até onde vai o detalhe máximo (padrão 70 m). Mais longe, os lotes ficam simplificados (mas completos por fora).
 * o.hora = hora do dia (0 a 24). o.vida = false desliga carros e pedestres.
 * o.vista = nome de uma vista pronta (de vistas.js): já define foco e hora.
 */
export function montarCidade(cena, o = {}) {
  if (o.vista && VISTAS[o.vista]) { const v = VISTAS[o.vista]; o = { foco: v.foco, hora: v.hora, dentro: v.dentro, ...o }; }
  const foco = o.foco || [0, -30], raio = o.raio ?? 70;
  const C = {
    cena, foco, raio, colisores: [], pontos: {}, portas: {}, vivos: [], postes: [], lugares: {}, tex: TX,
    _acesos: [], _noiteFn: [], andantes: [],
    acender: (m, f = 1) => C._acesos.push([m, f]),
    aNoite: (fn) => C._noiteFn.push(fn),
  };
  montarHora(C, o);
  paisagem(C); ruas(C); lago(C); nuvens(C);
  const perto = (L) => Math.max(0, Math.hypot(L.x - foco[0], L.z - foco[1]) - Math.hypot(L.w, L.d) / 2);
  for (const L of lotes()) {
    const d = perto(L), nivel = d < raio ? 'perto' : d < raio * 2.2 ? 'medio' : 'longe';
    const ctx = lote(C, { ...L, y: MEIOFIO }); ctx.nivel = nivel;
    const f = CONSTRUTORES[L.tipo] || CONSTRUTORES.casa; f(ctx, nivel);
    C.lugares[L.nome || (L.tipo + L.seed)] = L;
    cena.add(o.fundir === false ? ctx.g : fundir(ctx.g));
  }
  montarNav(C);
  C.vista = (nome) => VISTAS[nome];
  if (o.vida !== false) montarVida(C, o);
  C.hora(o.hora ?? 15); C.focar(foco[0], foco[1]); if (o.dentro) C.luzDentro(1);
  C.atualizar = (t, cam) => {
    if (o.horaAnda) C.hora((o.hora ?? 15) + t * o.horaAnda / 3600);
    for (const f of C.vivos) f(t);
    if (cam) { const d = new THREE.Vector3(); cam.getWorldDirection(d); const k = Math.max(6, Math.min(40, cam.position.y * 1.2 + 10)); C.focar(cam.position.x + d.x * k, cam.position.z + d.z * k); C.ceu.position.copy(cam.position); }
  };
  // se o vídeo usa o atalho mk() do kit, a cidade se atualiza sozinha
  (cena.userData.vida = cena.userData.vida || []).push((t) => C.atualizar(t));
  return C;
}
export { VISTAS };
export { LISTA_VISTAS } from './vistas.js';
