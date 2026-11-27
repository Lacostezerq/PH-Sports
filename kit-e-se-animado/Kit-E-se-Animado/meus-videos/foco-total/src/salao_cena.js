// Salão do campeonato montado com gente: Guilherme e o adversário na mesa da final, juiz, professor, jogadores nas outras mesas e o público.
import * as THREE from 'three';
import { salao } from './lugares_foco.js';
import { ator, rosto, sentar, celular, soma, vivo, parado, G, sentado, clamp } from './cf.js';
import { GUI, ADV, JUIZ, PROFEF, pessoa } from './elenco_foco.js';

export const HS = .3 + .48; // altura do assento no tablado
/** Monta o salão. o.semGente: só a mesa da final. Devolve S com gui, adv, juiz, prof, jogadores, publico, tel (celular no bolso). */
export function montaSalao(c, o = {}) {
  const S = salao(c, o);
  const gui = ator(c, GUI, 0, .62, Math.PI); sentar(gui, 0, .62, Math.PI, HS);
  const adv = ator(c, ADV, 0, -.62, 0); sentar(adv, 0, -.62, 0, HS);
  const juiz = ator(c, JUIZ, 1.25, -.1, -Math.PI / 2, .3); const prof = ator(c, o.profX ? PROFEF : PROFEF, -2.6, 2.9, Math.PI);
  const jog = [], pub = [];
  if (!o.semGente) {
    S.mesas.forEach((m, i) => { if (i % 2) return; const k = ator(c, pessoa(i, { escala: .95 }), 0, 0, 0); const lado = i % 4 ? 1 : -1; sentar(k, m.position.x, m.position.z + lado * .55, lado > 0 ? Math.PI : 0, .48); k.seed = i % 9; jog.push(k); });
    for (let i = 0; i < 18; i++) { const k = ator(c, pessoa(i + 3), -3.8 + (i % 9) * .95, 2.75 + Math.floor(i / 9) * .7, Math.PI); k.seed = i; pub.push(k); }
  }
  const tel = celular(); c.add(tel);
  return { ...S, gui, adv, juiz, prof, jog, pub, tel };
}
/** Atualiza o povo do salão (pensando, respirando). k = estado: 'jogo' | 'aplauso' | 'tensao'. */
export function salaoUpd(S, t, est = 'jogo') {
  S.jog.forEach((k, i) => { k.pose(sentado(soma({ shR: [60, 8], elR: 100, headX: 18, shL: [30, 8], elL: 70 }, vivo(t, i, .6)))); rosto(k, null, t, i % 3 ? 'neutro' : 'determinado'); });
  S.pub.forEach((k, i) => { let p = parado(t, i, .8);
    if (est === 'aplauso') { const b = Math.abs(Math.sin(t * 9 + i)); p = soma({ shL: [70, -10], shR: [70, -10], elL: 60 + b * 30, elR: 60 + b * 30 }, { bob: b * .01 }); }
    if (est === 'tensao' && i % 3 === 0) p = soma(p, { shR: [120, -10], elR: 140, headX: 6 });
    k.pose(p); rosto(k, null, t, est === 'aplauso' ? 'feliz' : est === 'tensao' ? 'preocupado' : 'neutro', { look: [0, .2] }); });
  rosto(S.juiz, null, t, 'neutro'); if (!S.juiz._pose) S.juiz.pose(soma(G.bracoCruzado, vivo(t, 3, .5)));
}
/** Celular no bolso da bermuda do Guilherme (sentado), brilhando quando vibra. */
export function celNoBolso(S, t, vib = 0) {
  const p = S.gui.root.position; S.tel.position.set(p.x - .18 + vib, HS + .1, p.z - .16); S.tel.rotation.set(0, -Math.PI / 2 - .5, Math.PI / 2 - .2);
}
