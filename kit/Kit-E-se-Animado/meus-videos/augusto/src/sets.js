// Cenários montados (reaproveitados em várias cenas).
import * as THREE from 'three';
import { rng } from './motor/core.js';
import { luzToon, bx, rb, cyl, toon } from './motor/toon.js';
import { predio, rua, ceu, arvore, poste, carro, onibus, casaZL, chao, calcadaTex, faixaPedestre, placaRua } from './mundo.js';
import { povo } from './elenco.js';
import { detalhesRua, passaros, letreiro } from './vida.js';

/** Avenida Paulista (ao longo de z, centro x=0). Devolve prédios (para quebrar), carros e pedestres. */
export function paulista(c, o = {}) {
  ceu(c, o.noite ? '#1B2550' : '#5FB4EE', o.noite ? '#3A4A8A' : '#D6EEF9');
  luzToon(c, { r: o.r || 40, far: 160, pos: [30, 50, 25], target: o.alvo || [0, 0, -20], ki: 2.3, hemi: 1.4 });
  rua(c, { largura: 22, comp: 260, z: -80, faixas: 6, calc: 7, c1: '#D3CEC6', c2: '#BFB8AC' });
  c.add(rb(1.6, .25, 240, '#9C9488', 0, .12, -80, { r: .05 })); for (let i = 0; i < 14; i++) arvore(c, 0, 20 - i * 14, .8, i);
  const P = []; const R = rng(o.seed || 31);
  const cores = ['#E8DCC8', '#D9C9B0', '#F2E6D2', '#CFC6BC'];
  for (const s of [-1, 1]) {
    let z = 30; let i = 0;
    while (z > -200) { const w = 14 + R() * 8, d = 16 + R() * 10, h = (o.alt || [38, 55])[0] + R() * (o.alt || [38, 55])[1]; const vidro = R() < .55;
      const g = predio({ w, d, h, tipo: vidro ? 'vidro' : 'janelas', cor: cores[i % 4], v1: ['#A8D2EE', '#9CC7E0', '#B6DCEF'][i % 3], v2: ['#6FA6D2', '#5C94C0', '#7CB2DA'][i % 3], vj: '#8DB8D8', seed: i, corTerreo: ['#4A4E58', '#5A4E46', '#3E4A56'][i % 3] });
      g.position.set(s * (11 + 7 + w / 2 + .5), 0, z - d / 2); c.add(g); if (o.lojas !== false) { const lt = letreiro(i * 3 + (s > 0 ? 1 : 0), Math.min(w * .7, 7)); lt.position.set(s * 18.3, 4.4, z - d / 2); lt.rotation.y = -s * Math.PI / 2; c.add(lt); } P.push({ g, s, z: z - d / 2, w, d, h, x: s * (18 + .5) }); z -= d + 2 + R() * 4; i++; }
  }
  // antena ao fundo
  if (o.antena !== false) { const ant = new THREE.Group(); for (let k = 0; k < 6; k++) { const m = bx(1.6 - k * .22, 12, 1.6 - k * .22, k % 2 ? '#F4F1EA' : '#E2443A', 0, 6 + k * 12, 0); ant.add(m); } ant.position.set(-38, 40, -230); c.add(ant); }
  for (let i = 0; i < 9; i++) for (const s of [-1, 1]) poste(c, s * 11.6, 15 - i * 24, -s);
  const carros = []; const cc = ['#E2443A', '#F4F1EA', '#2F4E86', '#F2C14E', '#3A3A44', '#8FD3C1', '#E8A0B8'];
  for (let i = 0; i < (o.carros ?? 14); i++) { const s = i % 2 ? 1 : -1; const k = carro(cc[i % cc.length]); const lane = 2.2 + (i % 3) * 3.1; k.position.set(s * lane, 0, 20 - i * 11 - (i % 3) * 3); k.rotation.y = s > 0 ? Math.PI : 0; c.add(k); carros.push({ k, s, z0: k.position.z, v: 6 + (i % 4) * 2 }); }
  const gente = []; if (o.gente !== false) for (let i = 0; i < (o.nGente ?? 16); i++) { const s = i % 2 ? 1 : -1; const k = povo(i, { simples: true }); k.place(s * (13 + (i % 3) * 1.6), 6 - i * 3.6 - (i % 2) * 1.5, 0, s > 0 ? Math.PI : 0); c.add(k.root); gente.push({ k, s, z0: k.root.position.z, ph: i * .37, dir: i % 3 ? 1 : -1 }); }
  if (o.detalhes !== false) detalhesRua(c, { xs: [12.4, 17.3], z0: 22, z1: -170, evita: [[15, 24]], seed: (o.seed || 31) + 5, passo: 6 });
  if (!o.noite && o.passaros !== false) { passaros(c, { n: 8, centro: [0, 30, -70], raio: 42, v: .1, seed: 3 }); passaros(c, { n: 5, centro: [10, 24, -30], raio: 26, v: -.14, seed: 9, fase: 2 }); }
  return { P, carros, gente };
}
/** Rua de bairro da Zona Leste (ao longo de z). */
export function bairro(c, o = {}) {
  if (!o.semCeu) ceu(c, o.noite ? '#16204A' : '#6DBDF2', o.noite ? '#33437E' : '#DDF2FB', { n: o.noite ? 0 : 6 });
  if (!o.semLuz) luzToon(c, { r: 28, far: 120, pos: o.noite ? [-10, 30, 10] : [20, 30, 18], target: [0, 0, -10], ki: o.noite ? .5 : 2.2, hemi: o.noite ? .55 : 1.45, sky: o.noite ? '#6A7AC0' : '#EAF2FF', key: o.noite ? '#9FB0FF' : '#FFF4E2' });
  rua(c, { largura: 8, comp: 160, z: -50, faixas: 2, calc: 3, cor: '#5E6066', c1: '#D8CFC2', c2: '#CBC0B0' });
  const casas = []; for (const s of [-1, 1]) for (let i = 0; i < (o.n || 9); i++) { const h = casaZL(i * 2 + (s > 0 ? 1 : 0) + (o.seed || 0), { noite: o.noite }); h.position.set(s * 13.5, 0, 18 - i * 9.2); h.rotation.y = -s * Math.PI / 2; c.add(h); casas.push(h); }
  for (let i = 0; i < 7; i++) poste(c, (i % 2 ? 1 : -1) * 5.4, 12 - i * 13, i % 2 ? -1 : 1, o.noite);
  // fios
  if (o.fios !== false) for (const s of [-1, 1]) { const f = cyl(.012, .012, 150, '#2A2A30', s * 5.4, 6.1, -50, { seg: 4, rot: [Math.PI / 2, 0, 0], shadow: false }); c.add(f); }
  if (o.detalhes !== false) detalhesRua(c, { bairro: true, xs: [4.55, 6.75], z0: 20, z1: -110, evita: [[12, 13]], seed: (o.seed || 0) + 41, passo: 7 });
  if (!o.noite && o.passaros !== false) { passaros(c, { n: 6, centro: [0, 15, -30], raio: 22, v: .12, seed: 4 + (o.seed || 0) }); }
  return { casas };
}
