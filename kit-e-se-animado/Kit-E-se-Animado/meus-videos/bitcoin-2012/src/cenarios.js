// Cenários deste vídeo. Convenção dos cômodos: piso de z=0 até z=-d, parede do fundo em z=-d, aberto para +z.
import * as THREE from 'three';
import { rng } from './motor/core.js';
import { luzToon, bx, rb, cyl, sph, toon, toonTex, tm, ctex, outline, blob } from './motor/toon.js';
import { predio, rua, ceu, arvore, poste, carro, onibus, casaZL, chao, relogioParede, faixaPedestre } from './mundo.js';
import { comodo, janela, mesa, cadeira, quadroParede, hospital } from './interiores.js';
import { registra, vapor, ventilador, passaros, detalhesRua, letreiro, vaso, lixeira, chamas, semaforo, banco, ecg } from './vida.js';
import { txt, tela, caminhaoLixo, sacoLixo, caderno, notebook, celularTeclado, computadorAntigo, videogame, portaRetrato, fotoPaiFilho, tv, churrasqueira, cachorro, xicara, garrafaTermica, jornal, radio, prato, moedaDraw } from './objetos.js';
import { povo, torcedor } from './elenco.js';
import { cartaz } from './lib.js';

const W_ = (c, o) => luzToon(c, o);
/** Céu e luz por hora do dia. */
export const HORA = {
  alvorada: { topo: '#5E6FB8', base: '#FFB98A', key: '#FFC48A', sky: '#C9B8F0', ground: '#7A6A80', ki: 1.7, hemi: 1.05, pos: [-30, 9, -40] },
  dia: { topo: '#5FB4EE', base: '#D6EEF9', key: '#FFF4E2', sky: '#EAF2FF', ground: '#B9A898', ki: 2.3, hemi: 1.4, pos: [30, 50, 25] },
  manha: { topo: '#6EC0F2', base: '#E8F4F8', key: '#FFEFD2', sky: '#EAF2FF', ground: '#B9A898', ki: 2.1, hemi: 1.35, pos: [25, 30, 30] },
  noite: { topo: '#121A3A', base: '#2E3C74', key: '#9FB0FF', sky: '#6A7AC0', ground: '#2A2A40', ki: .45, hemi: .5, pos: [-10, 30, 10] },
  tarde: { topo: '#F28E5E', base: '#FFD9A0', key: '#FFB070', sky: '#FFE2C0', ground: '#9A7A6A', ki: 2.0, hemi: 1.1, pos: [-30, 12, -20] },
};
// ---------- avenida (ao longo de z) ----------
export function avenida(c, o = {}) {
  const H = HORA[o.hora || 'alvorada']; ceu(c, H.topo, H.base, { n: o.hora === 'noite' ? 0 : 6 });
  if (o.hora === 'alvorada') { const sol = new THREE.Mesh(new THREE.CircleGeometry(16, 40), new THREE.MeshBasicMaterial({ color: '#FFE7B0', fog: false })); sol.position.set(-40, 18, -380); c.add(sol); }
  luzToon(c, { r: o.r || 40, far: 200, pos: H.pos, target: o.alvo || [0, 0, -20], ki: H.ki, hemi: H.hemi, key: H.key, sky: H.sky, ground: H.ground });
  rua(c, { largura: 16, comp: 300, z: -100, faixas: 4, calc: 6, c1: '#D3CEC6', c2: '#BFB8AC' });
  const R = rng(o.seed || 12); const cores = ['#E8DCC8', '#D9C9B0', '#F2E6D2', '#CFC6BC', '#E6CDB8', '#C8D2D6']; const P = [];
  for (const s of [-1, 1]) { let z = o.z0 ?? 40, i = 0; while (z > -240) { const w = 12 + R() * 8, d = 14 + R() * 8, h = 14 + R() * 30; const vidro = R() < .4; if (o.cruz !== undefined && z - d < o.cruz + 7 && z > o.cruz - 7) { z = o.cruz - 7; continue; }
      const g = predio({ w, d, h, tipo: vidro ? 'vidro' : 'janelas', cor: cores[(i + (s > 0 ? 2 : 0)) % 6], v1: '#A8D2EE', v2: '#6FA6D2', vj: o.hora === 'noite' ? '#FFD98A' : '#8DB8D8', seed: i + (s > 0 ? 50 : 0), corTerreo: ['#4A4E58', '#5A4E46', '#3E4A56'][i % 3], noite: o.hora === 'noite' });
      g.position.set(s * (8 + 6 + w / 2 + .5), 0, z - d / 2); c.add(g); if (o.lojas !== false) { const lt = letreiro(i * 3 + (s > 0 ? 1 : 0) + 2, Math.min(w * .7, 7)); lt.position.set(s * 14.3, 4.4, z - d / 2); lt.rotation.y = -s * Math.PI / 2; c.add(lt); } P.push(g); z -= d + 2 + R() * 3; i++; } }
  for (let i = 0; i < 12; i++) for (const s of [-1, 1]) poste(c, s * 8.6, 20 - i * 22, -s, o.hora === 'noite');
  for (let i = 0; i < 16; i++) arvore(c, (i % 2 ? 1 : -1) * 12.2, 14 - i * 15, .8, i);
  if (o.detalhes !== false) detalhesRua(c, { xs: [8.5, 13.3], z0: 24, z1: -200, evita: [[20, 22], [14, 15]], seed: (o.seed || 12) + 5, passo: 7 });
  if (o.hora !== 'noite' && o.passaros !== false) passaros(c, { n: 8, centro: [0, 26, -70], raio: 36, v: .1, seed: 3 });
  if (o.faixa) faixaPedestre(c, 0, o.faixa, 16);
  if (o.cruz !== undefined) { const r2 = new THREE.Mesh(new THREE.PlaneGeometry(200, 12), toon('#5A5C62')); r2.rotation.x = -Math.PI / 2; r2.position.set(0, .02, o.cruz); r2.receiveShadow = true; c.add(r2); }
  return { P };
}
// ---------- apartamento 2026 ----------
export function apartamento(c, o = {}) {
  W_(c, { r: 9, pos: [4, 9, 6], ki: o.noite === false ? 2 : .35, hemi: o.noite === false ? 1.3 : .55, sky: '#7A8AD0', key: '#AFC0FF', ground: '#3A3048' });
  const C = comodo(c, { w: 10, d: 7, parede: '#5D6D8E', parede2: '#53627F', tipoPiso: 'madeira', piso1: '#7A5A44', piso2: '#6E503C' });
  // janelão com a cidade de noite
  const cid = ctex(512, 256, (x, W, H) => { const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#0E1530'); g.addColorStop(1, '#2C3B70'); x.fillStyle = g; x.fillRect(0, 0, W, H); const R = rng(3); for (let i = 0; i < 26; i++) { const bw = 14 + R() * 30, bh = 40 + R() * 160, bx_ = i * 20; x.fillStyle = ['#1B2346', '#222B52', '#151C3A'][i % 3]; x.fillRect(bx_, H - bh, bw, bh); for (let k = 0; k < 30; k++) if (R() < .4) { x.fillStyle = R() < .7 ? '#FFD98A' : '#9FD6FF'; x.fillRect(bx_ + 3 + (k % 3) * 5, H - bh + 6 + Math.floor(k / 3) * 9, 3, 4); } } x.fillStyle = '#F4F1EA'; x.beginPath(); x.arc(420, 50, 16, 0, 7); x.fill(); });
  const jan = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 2.0), new THREE.MeshBasicMaterial({ map: cid })); jan.position.set(1.6, 1.75, -6.88); c.add(jan); for (const x of [-.2, 1.6, 3.4]) c.add(bx(.08, 2.0, .08, '#2A2A33', x, 1.75, -6.85)); c.add(bx(3.7, .08, .1, '#2A2A33', 1.6, .75, -6.85)); c.add(bx(3.7, .08, .1, '#2A2A33', 1.6, 2.75, -6.85));
  // sofá
  const sofa = new THREE.Group(); sofa.add(rb(2.6, .45, .95, '#8E4A3A', 0, .3, 0, { r: .1, out: .01 })); sofa.add(rb(2.6, .7, .3, '#8E4A3A', 0, .75, -.38, { r: .12, out: .01 })); for (const s of [-1, 1]) sofa.add(rb(.3, .6, .95, '#7E3E30', s * 1.2, .5, 0, { r: .1, out: .01 })); sofa.add(rb(.5, .35, .15, '#E2B13A', -.8, .7, -.15, { r: .07, out: .006 })); sofa.position.set(-1.6, 0, -4.4); c.add(sofa);
  const mc = mesa(c, -1.6, -3.0, 1.3, .6, .42, '#3A3A44');
  const nb = notebook(); nb.position.set(-1.5, .43, -3.0); nb.rotation.y = Math.PI; c.add(nb);
  for (let i = 0; i < 3; i++) { const x = xicara(['#F4F1EA', '#E2443A', '#2E6FB8'][i]); x.position.set(-2.1 + i * .16, .43, -2.85 + (i % 2) * .1); c.add(x); }
  // caixa de comida, latas, papéis
  c.add(rb(.4, .06, .4, '#D9B98A', -1.05, .46, -3.1, { r: .01, out: .004 })); for (let i = 0; i < 4; i++) c.add(cyl(.03, .03, .1, ['#C0392B', '#2E9C5A', '#9EA6B0'][i % 3], -2.15 + i * .06, .47, -3.15, { seg: 10 }));
  for (let i = 0; i < 5; i++) { const p = new THREE.Mesh(new THREE.PlaneGeometry(.2, .28), toon('#F4F1EA')); p.rotation.x = -Math.PI / 2; p.rotation.z = i; p.position.set(-.4 + i * .3, .012, -2.4 - (i % 2) * .4); c.add(p); }
  // rack com porta-retrato e luminária
  c.add(rb(2.2, .5, .45, '#3A3A44', 2.6, .25, -6.4, { r: .03, out: .008 })); const pr = portaRetrato(fotoPaiFilho); pr.position.set(2.1, .5, -6.35); pr.rotation.y = -.2; c.add(pr);
  const lum = new THREE.Group(); lum.add(cyl(.02, .02, 1.5, '#2A2A33', 0, .75, 0)); lum.add(cyl(.18, .25, .3, '#E8C27A', 0, 1.55, 0, { out: .006 })); lum.position.set(-3.6, 0, -5.6); c.add(lum);
  const Lq = new THREE.PointLight('#FFC27A', o.noite === false ? 0 : 3.5, 5, 1.6); Lq.position.set(-3.6, 1.5, -5.4); c.add(Lq);
  const Ln = new THREE.PointLight('#8FC4FF', 2.4, 3, 1.8); Ln.position.set(-1.5, .8, -2.6); c.add(Ln);
  const rel = relogioParede({ cor: '#F4F1EA', aro: '#2A2A33' }); rel.position.set(-2.2, 2.4, -6.88); c.add(rel); rel.set(3, 12);
  const v = vaso(5); v.position.set(4.3, 0, -5.2); c.add(v); c.add(rb(.6, .9, .5, '#2E6FB8', 3.9, .45, -2.0, { r: .05 })); // pilha de caixas
  quadroParede(c, -4.85, 1.9, -3.2, 1.0, .7, (x, W, H) => { x.fillStyle = '#E2B13A'; x.fillRect(0, 0, W, H); x.fillStyle = '#1B1420'; x.beginPath(); x.moveTo(0, H); x.lineTo(W * .4, H * .3); x.lineTo(W * .7, H * .7); x.lineTo(W, H * .2); x.lineTo(W, H); x.fill(); }, Math.PI / 2);
  return { C, nb, rel, sofa, pr, Ln };
}
// ---------- casa da família: cozinha com escada e porta ----------
export function casaFamilia(c, o = {}) {
  W_(c, { r: 10, pos: o.noite ? [-6, 9, 5] : [6, 9, 6], ki: o.noite ? .5 : 2.0, hemi: o.noite ? .6 : 1.4, sky: o.noite ? '#7A8AD0' : '#EAF2FF', key: o.noite ? '#AFC0FF' : '#FFF0D8' });
  const C = comodo(c, { w: 12, d: 7, parede: o.sepia ? '#E8D8BE' : '#F3D9C9', parede2: '#EDCDBA', tipoPiso: 'ladrilho', piso1: '#E6DCCB', piso2: '#D8CBB4', meiaParede: '#DDBBA6' });
  // armários azul-marinho, pia, fogão, geladeira (lado direito)
  c.add(rb(3.6, .9, .7, '#355C8C', 2.6, .45, -6.55, { r: .03, out: .008 })); c.add(rb(3.7, .06, .74, '#EAE6DD', 2.6, .93, -6.55, { r: .02 }));
  for (let i = 0; i < 4; i++) c.add(rb(.84, .7, .04, '#3F6A9C', 1.2 + i * .92, .45, -6.18, { r: .02 })); c.add(rb(2.4, .7, .45, '#355C8C', 2.2, 2.2, -6.7, { r: .03, out: .008 }));
  const az = ctex(256, 64, (x) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, 256, 64); x.strokeStyle = '#B9DCE6'; x.lineWidth = 3; for (let i = 0; i <= 16; i++) { x.beginPath(); x.moveTo(i * 16, 0); x.lineTo(i * 16, 64); x.stroke(); } for (let j = 0; j <= 4; j++) { x.beginPath(); x.moveTo(0, j * 16); x.lineTo(256, j * 16); x.stroke(); } }); const pa = new THREE.Mesh(new THREE.PlaneGeometry(3.6, .9), toonTex(az)); pa.position.set(2.6, 1.42, -6.88); c.add(pa);
  c.add(rb(.9, .92, .7, '#F4F1EA', 4.85, .46, -6.55, { r: .04, out: .008 })); c.add(rb(.92, .05, .72, '#3A3A44', 4.85, .95, -6.55)); const pan = cyl(.2, .18, .2, '#C8CCD2', 4.75, 1.08, -6.55, { out: .006 }); c.add(pan); vapor(c, 4.75, 1.2, -6.55, { n: 6, tam: .14, alt: .7 });
  c.add(rb(.9, 1.95, .75, '#E8EEF2', 5.4, .97, -5.2, { r: .1, out: .01 })); c.add(rb(.04, .4, .06, '#9EA6B0', 4.98, 1.4, -4.8, { r: .02 }));
  for (let i = 0; i < 4; i++) c.add(rb(.12, .12, .02, ['#E2443A', '#F2C230', '#2E9C5A', '#2E6FB8'][i], 5.0, 1.0 + i * .2, -4.83 - (i % 2) * .2, { r: .03 })); // ímãs
  const jan = janela(c, 3.0, 1.75, -6.88, 1.3, 1.0, { cortina: '#F2C230', c1: o.noite ? '#1B2550' : o.alvorada ? '#7A80C8' : '#8CCBF2', c2: o.noite ? '#3A4A8A' : o.alvorada ? '#FFB98A' : '#DDF2FB' });
  // mesa redonda com café
  const mt = new THREE.Group(); mt.add(cyl(.75, .75, .06, '#A8743E', 0, .76, 0, { seg: 32, out: .008 })); mt.add(cyl(.08, .12, .74, '#8A5A36', 0, .38, 0)); mt.add(cyl(.35, .35, .04, '#8A5A36', 0, .02, 0)); mt.position.set(.2, 0, -3.6); c.add(mt);
  const toalha = new THREE.Mesh(new THREE.CircleGeometry(.68, 32), toonTex(ctex(128, 128, (x) => { x.fillStyle = '#F4F1EA'; x.fillRect(0, 0, 128, 128); x.fillStyle = '#7FB8E0'; for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) if ((i + j) % 2) x.fillRect(i * 16, j * 16, 16, 16); }))); toalha.rotation.x = -Math.PI / 2; toalha.position.set(.2, .795, -3.6); c.add(toalha);
  const cads = [[-.8, -3.6, Math.PI / 2], [1.2, -3.6, -Math.PI / 2], [.2, -4.6, 0], [.2, -2.6, Math.PI]].map(([x, z, r]) => cadeira(c, x, z, r, '#8A5A36'));
  const gt = garrafaTermica(); gt.position.set(.45, .79, -3.85); c.add(gt); const xi = xicara(); xi.position.set(.85, .79, -3.55); c.add(xi);
  c.add(rb(.3, .1, .14, '#E8B86A', -.05, .84, -3.75, { r: .05, out: .004 })); const rd = radio(); rd.position.set(1.6, .96, -6.6); c.add(rd);
  // escada e passagem (lado esquerdo)
  c.add(bx(.25, 3.2, 3.6, '#EDCDBA', -2.6, 1.6, -5.2, { shadow: false })); // parede divisória com vão em z ∈ [-3.4,-1.6]
  const esc = new THREE.Group(); for (let i = 0; i < 12; i++) { const h = .24 * (i + 1); esc.add(bx(1.3, h, .3, i % 2 ? '#8A5A36' : '#946240', 0, h / 2, -i * .3)); esc.add(bx(1.32, .04, .32, '#6E4628', 0, h + .02, -i * .3)); }
  for (let i = 0; i < 12; i++) esc.add(cyl(.02, .02, .9, '#5A3A22', .62, .24 * (i + 1) + .45, -i * .3, { seg: 6 })); const corr = cyl(.035, .035, 4.3, '#5A3A22', .62, 2.46, -1.65, { seg: 8 }); corr.rotation.x = -Math.atan2(3.3, 2.64); esc.add(corr);
  esc.position.set(-5.3, 0, -3.4); c.add(esc); // sobe para o fundo (z negativo), pé da escada em z≈-3.4
  // porta da rua (fundo esquerdo)
  const porta = new THREE.Group(); porta.add(rb(1.0, 2.15, .08, '#6E4628', .5, 1.08, 0, { r: .03, out: .008 })); porta.add(sph(.05, '#E8C060', .88, 1.05, .07)); porta.position.set(-5.88, 0, -1.2); porta.rotation.y = Math.PI / 2; c.add(porta);
  const rel = relogioParede({ cor: '#FFFFFF', aro: '#355C8C' }); rel.position.set(.4, 2.45, -6.88); c.add(rel);
  const cal = new THREE.Mesh(new THREE.PlaneGeometry(.5, .66), toonTex(ctex(128, 170, (x, W, H) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, W, H); x.fillStyle = '#C0392B'; x.fillRect(0, 0, W, 42); txt(x, o.ano || '2012', W / 2, 22, 28, '#fff'); x.fillStyle = '#3A3A44'; x.font = '600 13px Inter'; x.textAlign = 'center'; for (let i = 0; i < 31; i++) x.fillText(String(i + 1), 12 + (i % 7) * 17, 62 + Math.floor(i / 7) * 22); }))); cal.position.set(-1.0, 1.7, -6.88); c.add(cal);
  quadroParede(c, -2.47, 1.9, -4.6, .5, .62, fotoPaiFilho, Math.PI / 2);
  const v = vaso(2); v.position.set(-2.1, 0, -6.3); c.add(v);
  return { C, rel, porta, mt, cads, jan, xi, cal };
}
// ---------- quarto do Guilherme em 2012 ----------
export function quartoTeen(c, o = {}) {
  const noite = !!o.noite; W_(c, { r: 9, pos: noite ? [-4, 9, 5] : [5, 9, 6], ki: noite ? .35 : 1.9, hemi: noite ? .5 : 1.35, sky: noite ? '#6A7AC0' : '#EAF2FF', key: noite ? '#9FB0FF' : '#FFF0D8' });
  const C = comodo(c, { w: 8, d: 6.5, parede: noite ? '#5E7E78' : '#9FD3B9', parede2: noite ? '#557270' : '#8FC6AC', tipoPiso: 'madeira', piso1: '#B98A5E', piso2: '#AD7F52' });
  // cama encostada à esquerda
  const cama = new THREE.Group(); cama.add(rb(1.15, .36, 2.1, '#6E4A2E', 0, .2, 0, { r: .05, out: .01 })); cama.add(rb(1.08, .2, 2.0, '#F4F1EA', 0, .46, 0, { r: .08 })); cama.add(rb(1.1, .16, 1.25, '#2E6FB8', 0, .58, .38, { r: .07 })); cama.add(rb(.66, .16, .36, '#FFFFFF', 0, .62, -.72, { r: .08, out: .006 })); cama.add(rb(1.15, .9, .1, '#6E4A2E', 0, .6, -1.05, { r: .04, out: .01 }));
  cama.position.set(-3.3, 0, -4.9); cama.rotation.y = Math.PI / 2; c.add(cama);
  // criado-mudo com celular de teclado e despertador
  c.add(rb(.5, .5, .45, '#C98B5A', -3.5, .25, -6.1, { r: .03, out: .008 })); const cel = celularTeclado(); cel.rotation.x = -Math.PI / 2; cel.position.set(-3.55, .51, -6.05); c.add(cel);
  const desp = new THREE.Group(); desp.add(cyl(.09, .09, .07, '#E2443A', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], out: .005 })); desp.add(new THREE.Mesh(new THREE.CircleGeometry(.075, 20), new THREE.MeshBasicMaterial({ color: '#F4F1EA' })).translateZ(.036)); for (const s of [-1, 1]) desp.add(sph(.035, '#E2443A', s * .06, .09, 0)); desp.position.set(-3.3, .6, -6.0); c.add(desp);
  // escrivaninha com computador antigo
  mesa(c, 1.4, -6.0, 1.6, .7, .76, '#C98B5A'); const pc = computadorAntigo(); pc.position.set(1.3, .79, -6.05); c.add(pc); const cad = cadeira(c, 1.3, -5.2, Math.PI, '#2E6FB8');
  const ab = new THREE.Group(); ab.add(cyl(.1, .12, .03, '#3A3A44')); ab.add(cyl(.012, .012, .35, '#3A3A44', 0, .18, 0)); ab.add(cyl(.07, .14, .14, '#F2C230', 0, .38, 0, { out: .006 })); ab.position.set(2.0, .79, -6.1); c.add(ab);
  const Lab = new THREE.PointLight('#FFD99A', noite ? 5 : 0, 4, 1.6); Lab.position.set(2.0, 1.2, -5.8); c.add(Lab);
  // estante com cadernos (o caderno da lista é o laranja)
  const est = new THREE.Group(); est.add(rb(1.2, 1.9, .35, '#8A5A36', 0, .95, 0, { r: .02, out: .008 })); for (let r = 0; r < 4; r++) est.add(bx(1.1, .03, .3, '#6E4628', 0, .3 + r * .45, .03));
  const cores = ['#2E6FB8', '#2E9C5A', '#C0392B', '#8E5BB8', '#F2C230', '#3A3A44']; for (let r = 0; r < 3; r++) for (let i = 0; i < 8; i++) { if (r === 1 && i === 3) continue; est.add(bx(.06 + (i % 3) * .015, .3 + (i % 2) * .05, .24, cores[(i + r * 2) % 6], -.45 + i * .125, .48 + r * .45 + (i % 2) * .025, .04)); }
  const cadLista = caderno(); cadLista.rotation.set(0, 0, Math.PI / 2); cadLista.rotation.y = Math.PI / 2; cadLista.position.set(-.075, .94, .05); est.add(cadLista);
  est.position.set(3.8, 0, -3.6); est.rotation.y = -Math.PI / 2; c.add(est);
  // pôsteres, calendário, espelho
  quadroParede(c, -1.2, 1.95, -6.37, .8, 1.1, (x, W, H) => { const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#1B1440'); g.addColorStop(1, '#5A2E7A'); x.fillStyle = g; x.fillRect(0, 0, W, H); x.fillStyle = '#F2C230'; for (let i = 0; i < 30; i++) { x.fillRect((i * 53) % W, (i * 97) % (H * .6), 3, 3); } x.fillStyle = '#E8742A'; x.beginPath(); x.arc(W * .6, H * .35, W * .2, 0, 7); x.fill(); x.fillStyle = '#F4F1EA'; x.beginPath(); x.moveTo(W * .2, H * .9); x.lineTo(W * .3, H * .55); x.lineTo(W * .4, H * .9); x.fill(); txt(x, 'ESPAÇO', W / 2, H * .95, W * .14, '#F4F1EA'); });
  quadroParede(c, -3.88, 1.9, -2.6, .9, .65, (x, W, H) => { x.fillStyle = '#E2443A'; x.fillRect(0, 0, W, H); txt(x, 'ROCK', W / 2, H * .3, H * .3, '#F4F1EA'); x.strokeStyle = '#F4F1EA'; x.lineWidth = 8; x.beginPath(); x.ellipse(W * .45, H * .7, W * .12, H * .14, 0, 0, 7); x.stroke(); x.fillStyle = '#F4F1EA'; x.fillRect(W * .55, H * .45, W * .3, 8); }, Math.PI / 2);
  const cal = tela(.55, .72, 256, false); cal.position.set(.2, 1.75, -6.38); c.add(cal); cal.paint(o.ano || '2012', (x, W, H) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, W, H); x.fillStyle = '#2E6FB8'; x.fillRect(0, 0, W, H * .3); txt(x, o.ano || '2012', W / 2, H * .16, H * .2, '#FFFFFF'); x.fillStyle = '#3A3A44'; x.font = `600 ${H * .045}px Inter`; x.textAlign = 'center'; for (let i = 0; i < 31; i++) x.fillText(String(i + 1), W * .1 + (i % 7) * W * .13, H * .4 + Math.floor(i / 7) * H * .11); });
  const mur = quadroParede(c, 1.25, 1.95, -6.37, .85, .62, (x, W, H) => { x.fillStyle = '#C9A26E'; x.fillRect(0, 0, W, H); const cs = ['#F6E27A', '#9FD6F2', '#F4A6B8', '#B8E0A0', '#FFFFFF']; for (let i = 0; i < 7; i++) { x.save(); x.translate(W * (.15 + (i % 4) * .23), H * (.25 + Math.floor(i / 4) * .45)); x.rotate((i % 3 - 1) * .15); x.fillStyle = cs[i % 5]; x.fillRect(-W * .09, -H * .14, W * .18, H * .26); x.fillStyle = '#E2443A'; x.beginPath(); x.arc(0, -H * .12, 4, 0, 7); x.fill(); x.restore(); } });
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(.9, .28), toonTex(ctex(256, 80, (x, W, H) => { x.fillStyle = '#2E6FB8'; x.beginPath(); x.moveTo(0, 0); x.lineTo(W, H / 2); x.lineTo(0, H); x.fill(); txt(x, 'CAMPEÃO', W * .38, H / 2, H * .38, '#F2C230'); }))); fl.position.set(.2, 2.45, -6.36); c.add(fl);
  for (let i = 0; i < 3; i++) { const ft = new THREE.Mesh(new THREE.PlaneGeometry(.2, .24), toonTex(ctex(64, 76, (x, W, H) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, W, H); x.fillStyle = ['#8CCBF2', '#F2C230', '#9FD3B9'][i]; x.fillRect(5, 5, W - 10, H - 22); x.fillStyle = '#5A3A22'; x.beginPath(); x.arc(W / 2, H * .4, 9, 0, 7); x.fill(); }))); ft.position.set(-.38 + i * .05, 1.35 + i * .02, -6.36); ft.position.x = -.42 + i * .24 + .9 * 0; ft.position.y = 1.2; ft.rotation.z = (i - 1) * .12; ft.position.x += 0; ft.position.set(-.45 + i * .25 + 1.35 * 0, 1.22, -6.36); c.add(ft); }
  // espelho de corpo na parede direita (com "reflexo" num nicho atrás do vidro)
  const esp = new THREE.Group(); esp.add(rb(.7, 1.6, .06, '#F4F1EA', 0, 1.0, 0, { r: .03, out: .006 })); const vid = new THREE.Mesh(new THREE.PlaneGeometry(.58, 1.48), new THREE.MeshBasicMaterial({ color: '#CFE8F2', transparent: true, opacity: .28, depthWrite: false })); vid.position.set(0, 1.0, .035); esp.add(vid); esp.position.set(3.88, 0, -1.4); esp.rotation.y = -Math.PI / 2; c.add(esp);
  // mochila, videogame, tapete
  c.add(rb(.4, .5, .25, '#E8742A', -1.8, .25, -6.1, { r: .1, out: .008 })); c.add(rb(.3, .2, .05, '#C95E1E', -1.8, .2, -5.97, { r: .04 }));
  const vg = videogame(); vg.position.set(-.3, .02, -2.8); c.add(vg); const tp = new THREE.Mesh(new THREE.CircleGeometry(1.0, 32), toon('#F2C230')); tp.rotation.x = -Math.PI / 2; tp.position.set(-.6, .012, -3.3); c.add(tp);
  janela(c, -2.6, 1.85, -6.38, 1.2, 1.0, { cortina: '#2E6FB8', c1: noite ? '#1B2550' : '#8CCBF2', c2: noite ? '#3A4A8A' : '#DDF2FB' });
  return { C, cama, cel, desp, pc, cad, est, cadLista, cal, esp, vg, Lab };
}
// ---------- escola ----------
export function salaAula(c, o = {}) {
  W_(c, { r: 10, pos: [6, 9, 6], ki: 2.0, hemi: 1.4 }); const C = comodo(c, { w: 12, d: 8, parede: '#F2E6C4', parede2: '#E8DAB2', tipoPiso: 'grade', piso1: '#E0D6C4', piso2: '#CFC2AA', meiaParede: '#7FB8A8' });
  const lousa = tela(5, 1.8, 1024, false); lousa.position.set(0, 1.9, -7.86); c.add(lousa); c.add(rb(5.2, 2.0, .06, '#8A5A36', 0, 1.9, -7.9, { r: .02 })); c.add(rb(5.0, .06, .14, '#8A5A36', 0, .95, -7.82));
  lousa.paint(o.lousa || 'prova', (x, W, H) => { x.fillStyle = '#2E5A44'; x.fillRect(0, 0, W, H); const g = (s, X, Y, sz) => { x.fillStyle = '#F4F1EA'; x.font = `700 ${sz}px Caveat`; x.textAlign = 'left'; x.fillText(s, X, Y); }; g('PROVA DE MATEMÁTICA', 40, 70, 64); g('1) 3x + 7 = 22', 60, 160, 54); g('2) Área do círculo de raio 4 = ?', 60, 240, 54); g('3) 15% de 240 = ?', 60, 320, 54); });
  const mesaP = mesa(c, 3.6, -6.4, 1.6, .7, .76, '#8A5A36'); const carteiras = [];
  for (let r = 0; r < 3; r++) for (let i = 0; i < 4; i++) { const x = -3.6 + i * 2.2, z = -4.8 + r * 1.6; const m = new THREE.Group(); m.add(rb(.7, .05, .5, '#D9B98A', 0, .72, 0, { r: .01, out: .005 })); m.add(cyl(.025, .025, .7, '#3A3A44', 0, .36, 0)); m.position.set(x, 0, z); c.add(m); cadeira(c, x, z + .45, Math.PI, '#2E6FB8'); carteiras.push([x, z]); }
  janela(c, -5.88, 1.8, -3.5, 2.4, 1.2, { ry: Math.PI / 2, cortina: '#F2C230' }); const rel = relogioParede(); rel.position.set(-3.6, 2.6, -7.88); c.add(rel); ventilador(c, 0, 3.05, -4);
  c.add(bx(12.2, .12, 8.2, '#FBF6EA', 0, 3.26, -4, { shadow: false })); for (let i = 0; i < 3; i++) c.add(bx(1.6, .04, .4, '#FFFFFF', -3.5 + i * 3.5, 3.19, -2.6, { shadow: false }));
  const fr = new THREE.Group(); fr.add(bx(4.2, 3.2, .2, toon('#E8DAB2'), -3.9, 1.6, 0, { shadow: false })); fr.add(bx(5.6, 3.2, .2, toon('#E8DAB2'), 3.2, 1.6, 0, { shadow: false })); fr.add(bx(2.2, 1.0, .2, toon('#E8DAB2'), -.7, 2.7, 0, { shadow: false })); fr.add(rb(1.0, 2.2, .08, '#8A5A36', -1.3, 1.1, -.05, { r: .02 })); fr.add(bx(12, .12, .06, '#FFFFFF', 0, .06, -.12, { shadow: false })); c.add(fr);
  const mural = tela(2.2, 1.3, 512, false); mural.paint('mural', (x, W, H) => { x.fillStyle = '#C9A06A'; x.fillRect(0, 0, W, H); const cs = ['#F4F1EA', '#F2D24A', '#9FD8FF', '#F7A8C8']; for (let i = 0; i < 7; i++) { x.fillStyle = cs[i % 4]; x.fillRect(20 + (i % 4) * 120, 30 + Math.floor(i / 4) * 140, 100, 110); } }); mural.position.set(4.2, 1.8, -.12); mural.rotation.y = Math.PI; c.add(mural);
  return { C, lousa, carteiras, rel };
}
export function patio(c, o = {}) {
  const H = HORA.manha; ceu(c, H.topo, H.base, { n: 6 }); W_(c, { r: 18, far: 80, pos: H.pos, target: [0, 0, -6], ki: H.ki, hemi: H.hemi, key: H.key });
  chao(c, 60, 60, toon('#CFC6B6'), 0, -10, 0); const q = new THREE.Mesh(new THREE.PlaneGeometry(14, 22), toon('#4E9A6A')); q.rotation.x = -Math.PI / 2; q.position.set(9, .01, -14); c.add(q); for (const s of [-1, 1]) { const l = new THREE.Mesh(new THREE.PlaneGeometry(14, .1), toon('#F4F1EA')); l.rotation.x = -Math.PI / 2; l.position.set(9, .02, -14 + s * 10.9); c.add(l); }
  const pred = new THREE.Group(); pred.add(rb(30, 7, 6, '#F2E6C4', 0, 3.5, 0, { r: .1 })); pred.add(bx(30.2, .5, 6.2, '#C0392B', 0, 7.2, 0)); for (let i = 0; i < 9; i++) { const j = janela(pred, -13 + i * 3.3, 4.8, 3.02, 1.6, 1.1, { c1: '#9FCBE8', c2: '#DDEFF8' }); } for (let i = 0; i < 6; i++) pred.add(rb(1.2, 2.2, .1, '#2E6FB8', -12 + i * 5, 1.1, 3.02, { r: .02 }));
  const pl = tela(6, .8, 1024, false); pl.paint('esc', (x, W, H) => { x.fillStyle = '#2E9C6A'; x.fillRect(0, 0, W, H); txt(x, 'ESCOLA ESTADUAL VILA AURORA', W / 2, H / 2, H * .55, '#FFFFFF'); }); pl.position.set(0, 6.3, 3.04); pred.add(pl); pred.position.set(0, 0, -24); c.add(pred);
  for (let i = 0; i < 4; i++) { const b = banco(); b.position.set(-8 + i * 3.2, .0, -16); c.add(b); } for (let i = 0; i < 5; i++) arvore(c, -14 + i * 7, -19, .9, i + 3);
  const beb = new THREE.Group(); beb.add(rb(.8, 1.0, .5, '#C8CCD2', 0, .5, 0, { r: .05, out: .008 })); beb.position.set(-12, 0, -18); c.add(beb); passaros(c, { n: 6, centro: [0, 18, -30], raio: 18, v: .12, seed: 8 });
  return { pred };
}
// ---------- bar da Copa ----------
export function bar(c, o = {}) {
  W_(c, { r: 10, pos: [-4, 9, 6], ki: .9, hemi: .85, sky: '#FFE2B8', key: '#FFD9A0', ground: '#5A4030' });
  const C = comodo(c, { w: 14, d: 9, parede: '#2E5A44', parede2: '#2A5240', tipoPiso: 'ladrilho', piso1: '#C9B89A', piso2: '#B5A282', meiaParede: '#8A5A36' });
  const T = tv(3.6, 2.0); T.position.set(0, 2.4, -8.84); c.add(T); c.add(rb(.3, .3, .3, '#2A2A33', 0, 1.3, -8.8));
  // varal de bandeirinhas verde e amarelo
  const band = []; for (let k = 0; k < 3; k++) for (let i = 0; i < 22; i++) { const b = new THREE.Mesh(new THREE.PlaneGeometry(.22, .3), new THREE.MeshToonMaterial({ color: i % 2 ? '#F6D33A' : '#2E9C4A', side: THREE.DoubleSide })); b.position.set(-6.6 + i * .63, 3.2 - Math.sin(i / 21 * Math.PI) * .35, -2 - k * 2.6); b.rotation.x = .1; c.add(b); band.push(b); }
  // balcão e prateleira de garrafas
  c.add(rb(.9, 1.05, 5.0, '#6E4628', -6.0, .53, -4.5, { r: .04, out: .01 })); c.add(rb(1.0, .07, 5.1, '#3A2A20', -6.0, 1.08, -4.5));
  for (let r = 0; r < 2; r++) { c.add(bx(.3, .04, 4.6, '#5A3A22', -6.85, 1.6 + r * .5, -4.5)); for (let i = 0; i < 14; i++) c.add(cyl(.045, .05, .26, ['#2E7D4F', '#8A3A22', '#E8C27A', '#3E5C8A'][(i + r) % 4], -6.85, 1.76 + r * .5, -6.5 + i * .3, { seg: 8, out: .004 })); }
  const mesas = []; for (const [x, z] of [[-2.8, -5.6], [0, -4.6], [2.9, -5.6], [-2.4, -2.4], [2.6, -2.6], [4.8, -4.0]]) { const g = new THREE.Group(); g.add(rb(1.0, .05, 1.0, '#E8E2D6', 0, .75, 0, { r: .02, out: .006 })); g.add(cyl(.04, .04, .75, '#C0392B', 0, .38, 0)); for (let i = 0; i < 3; i++) g.add(cyl(.04, .035, .16, '#F2D27A', -.2 + i * .2, .86, (i % 2) * .15 - .05, { seg: 10, out: .003 })); g.position.set(x, 0, z); c.add(g); mesas.push(g); }
  const Ls = [[-3, -3], [0, -6], [3, -3]].map(([x, z]) => { c.add(cyl(.01, .01, .9, '#2A2A30', x, 3.45, z)); c.add(cyl(.12, .28, .22, '#F2C230', x, 2.95, z, { out: .006 })); const L = new THREE.PointLight('#FFD48A', 4, 6, 1.6); L.position.set(x, 2.7, z); c.add(L); return L; });
  const tvL = new THREE.PointLight('#9FE0B0', 3, 6, 1.6); tvL.position.set(0, 2.2, -7.5); c.add(tvL); ventilador(c, -1.2, 3.6, -4.2);
  quadroParede(c, 6.86, 2.0, -5.0, 1.2, .8, (x, W, H) => { x.fillStyle = '#F2C230'; x.fillRect(0, 0, W, H); txt(x, 'BAR DO TONHO', W / 2, H * .4, H * .22, '#1B1420'); txt(x, 'DESDE 1988', W / 2, H * .72, H * .13, '#1B1420', 700); }, -Math.PI / 2);
  return { C, T, mesas, Ls, tvL, band };
}
/** Tela da TV do bar: campo visto de cima com placar no canto (sem imagens reais do jogo). */
export function pintaTV(T, gols, piscaGol = 0) { T.userData.sc.paint(gols + '|' + (piscaGol > 0 ? 1 : 0), (x, W, H) => { x.fillStyle = '#2E8A44'; x.fillRect(0, 0, W, H); x.fillStyle = '#34964B'; for (let i = 0; i < 10; i++) if (i % 2) x.fillRect(i * W / 10, 0, W / 10, H); x.strokeStyle = '#F4F1EA'; x.lineWidth = 5; x.strokeRect(20, 20, W - 40, H - 40); x.beginPath(); x.moveTo(W / 2, 20); x.lineTo(W / 2, H - 20); x.stroke(); x.beginPath(); x.arc(W / 2, H / 2, 60, 0, 7); x.stroke(); x.strokeRect(20, H / 2 - 90, 90, 180); x.strokeRect(W - 110, H / 2 - 90, 90, 180);
  x.fillStyle = '#0E1422E8'; x.fillRect(30, 30, 300, 64); txt(x, `BRA 0 × ${gols} ALE`, 180, 63, 38, '#FFFFFF', 900); if (piscaGol > 0) { x.fillStyle = 'rgba(255,255,255,.85)'; x.fillRect(W / 2 - 270, H / 2 - 70, 540, 140); txt(x, 'GOL DA ALEMANHA', W / 2, H / 2, 44, '#C0392B'); } }); }
// ---------- ônibus e república ----------
export function onibusDentro(c, o = {}) {
  W_(c, { r: 8, pos: [5, 8, 4], ki: 1.6, hemi: 1.3 }); const g = new THREE.Group(); c.add(g);
  g.add(bx(3.0, .1, 14, '#5A6270', 0, 0, -5)); g.add(bx(3.0, .1, 14, '#E8E2D6', 0, 2.5, -5)); for (const s of [-1, 1]) { g.add(bx(.1, .9, 14, '#2F7DC4', s * 1.5, .45, -5)); g.add(bx(.1, .3, 14, '#2F7DC4', s * 1.5, 2.35, -5)); }
  for (let i = 0; i < 6; i++) for (const s of [-1, 1]) { const b = new THREE.Group(); b.add(rb(.9, .12, .5, '#C0392B', 0, .5, 0, { r: .04, out: .006 })); b.add(rb(.9, .6, .1, '#C0392B', 0, .85, -.24, { r: .04, out: .006 })); b.add(cyl(.03, .03, .45, '#9EA6B0', 0, .22, 0)); b.position.set(s * .95, 0, -i * 1.6); g.add(b); }
  for (let i = 0; i < 6; i++) g.add(cyl(.025, .025, 2.4, '#C8CCD2', .35, 1.25, -i * 1.6 - .8, { seg: 8 })); g.add(cyl(.02, .02, 14, '#C8CCD2', .35, 2.2, -5, { rot: [Math.PI / 2, 0, 0], seg: 6 }));
  // cidade passando nas janelas
  const cid = ctex(1024, 256, (x, W, H) => { x.fillStyle = '#BFE3F7'; x.fillRect(0, 0, W, H); const R = rng(6); for (let i = 0; i < 40; i++) { const bw = 30 + R() * 60, bh = 80 + R() * 160; x.fillStyle = ['#E8DCC8', '#CFC6BC', '#D9C9B0', '#C8D2D6'][i % 4]; x.fillRect(i * 26, H - bh, bw, bh); x.fillStyle = '#8DB8D8'; for (let k = 0; k < 12; k++) x.fillRect(i * 26 + 4 + (k % 3) * 9, H - bh + 8 + Math.floor(k / 3) * 18, 6, 10); } }); cid.wrapS = THREE.RepeatWrapping;
  const fora = []; for (const s of [-1, 1]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(14, 1.5), new THREE.MeshBasicMaterial({ map: s > 0 ? cid : cid.clone() })); if (s < 0) { m.material.map.wrapS = THREE.RepeatWrapping; m.material.map.needsUpdate = true; } m.position.set(s * 1.7, 1.6, -5); m.rotation.y = -s * Math.PI / 2; g.add(m); fora.push(m); }
  registra(c, (t, T) => fora.forEach((m, i) => { m.material.map.offset.x = (T * .08 * (i ? -1 : 1)) % 1; }));
  return { g };
}
export function republica(c, o = {}) {
  W_(c, { r: 8, pos: [-4, 8, 5], ki: .55, hemi: .65, sky: '#8A9AD0', key: '#C0CCFF' }); const C = comodo(c, { w: 7, d: 5.5, parede: '#C9B8E0', parede2: '#BBA8D4', tipoPiso: 'madeira', piso1: '#9A7A5A', piso2: '#8E6E4E' });
  const bel = new THREE.Group(); for (const y of [0, 1.3]) { bel.add(rb(1.0, .3, 2.0, '#3A3A44', 0, .3 + y, 0, { r: .03, out: .008 })); bel.add(rb(.95, .14, 1.9, ['#E2443A', '#2E9C5A'][y ? 1 : 0], 0, .5 + y, 0, { r: .06 })); } for (const x of [-.48, .48]) for (const z of [-.95, .95]) bel.add(cyl(.03, .03, 2.4, '#3A3A44', x, 1.2, z, { seg: 6 })); bel.position.set(-2.7, 0, -4.2); bel.rotation.y = Math.PI / 2; c.add(bel);
  mesa(c, 1.2, -4.8, 1.4, .6, .76, '#C98B5A'); const nb = notebook({ cor: '#3A3A44' }); nb.position.set(1.0, .79, -4.85); c.add(nb);
  const tig = new THREE.Group(); tig.add(cyl(.12, .09, .1, '#F4F1EA', 0, .05, 0, { seg: 16, out: .004 })); tig.add(cyl(.11, .11, .01, '#F2C76A', 0, .095, 0, { seg: 16 })); for (let i = 0; i < 2; i++) { const h = cyl(.004, .004, .3, '#C98B5A', .03 * i, .2, 0, { seg: 4 }); h.rotation.z = .4; tig.add(h); } tig.position.set(1.6, .79, -4.7); c.add(tig); vapor(c, 1.6, .9, -4.7, { n: 6, tam: .1, alt: .5 });
  quadroParede(c, 0, 1.9, -5.38, 1.0, .7, (x, W, H) => { x.fillStyle = '#2E6FB8'; x.fillRect(0, 0, W, H); txt(x, 'ENGENHARIA', W / 2, H * .5, H * .17, '#F4F1EA'); }); const lum = new THREE.PointLight('#FFD99A', 3, 4, 1.6); lum.position.set(1.2, 1.6, -4.4); c.add(lum);
  janela(c, 2.4, 1.8, -5.38, 1.0, .9, { c1: '#1B2550', c2: '#3A4A8A' }); for (let i = 0; i < 6; i++) c.add(rb(.3, .05, .25, ['#E2443A', '#3A3A44', '#F2C230'][i % 3], -1 + i * .25, .03, -2.2 - (i % 2) * .3, { r: .02 }));
  return { C, nb, tig };
}
// ---------- hospital: sala de espera do pronto-socorro ----------
export function prontoSocorro(c, o = {}) {
  W_(c, { r: 11, pos: [5, 10, 6], ki: 1.7, hemi: 1.45, sky: '#F2FAFF', key: '#F4FAFF' }); const C = comodo(c, { w: 14, d: 8, parede: '#DDEBF0', parede2: '#D2E3EA', tipoPiso: 'grade', piso1: '#E8EEF0', piso2: '#CBD6DA', meiaParede: '#8FC9D8' });
  const pl = tela(3.2, .55, 1024, false); pl.paint('ps', (x, W, H) => { x.fillStyle = '#C0392B'; x.fillRect(0, 0, W, H); txt(x, '✚  PRONTO-SOCORRO', W / 2, H / 2 + 4, H * .55, '#FFFFFF'); }); pl.position.set(-3.6, 2.7, -7.86); c.add(pl);
  c.add(rb(3.0, 1.1, .7, '#F4F1EA', -3.6, .55, -6.6, { r: .04, out: .01 })); c.add(rb(3.1, .06, .8, '#8FC9D8', -3.6, 1.12, -6.6)); const pc = rb(.4, .3, .05, '#2A2A30', -3.2, 1.35, -6.7, { r: .02 }); c.add(pc);
  // porta dupla do centro cirúrgico com luz
  const portas = []; for (const s of [-1, 1]) { const p = new THREE.Group(); p.add(rb(.95, 2.3, .08, '#B9D4DE', s * .475, 1.15, 0, { r: .02, out: .008 })); p.add(new THREE.Mesh(new THREE.CircleGeometry(.16, 18), new THREE.MeshBasicMaterial({ color: '#9FC3D4' })).translateX(s * .475).translateY(1.6).translateZ(.045)); p.position.set(3.4 + s * .95, 0, -7.86); c.add(p); portas.push(p); }
  const cc = tela(2.2, .45, 1024, false); cc.paint('cc', (x, W, H) => { x.fillStyle = '#2E6FB8'; x.fillRect(0, 0, W, H); txt(x, 'CENTRO CIRÚRGICO', W / 2, H / 2 + 4, H * .5, '#FFFFFF'); }); cc.position.set(3.4, 2.75, -7.86); c.add(cc);
  const luz = new THREE.Mesh(new THREE.BoxGeometry(.9, .22, .06), new THREE.MeshBasicMaterial({ color: '#552222' })); luz.position.set(3.4, 2.42, -7.84); c.add(luz);
  const luzT = tela(.86, .2, 256); luzT.position.set(3.4, 2.42, -7.8); c.add(luzT);
  // fileiras de cadeiras azuis
  const cad = []; for (let r = 0; r < 2; r++) for (let i = 0; i < 5; i++) { const g = new THREE.Group(); g.add(rb(.5, .08, .48, '#2E7FB8', 0, .46, 0, { r: .03, out: .006 })); g.add(rb(.5, .5, .06, '#2E7FB8', 0, .74, -.22, { r: .03, out: .006 })); g.position.set(-4.6 + i * .56, 0, -2.2 - r * 2.0); g.rotation.y = 0; c.add(g); cad.push(g); } c.add(bx(2.8, .06, .5, '#9EA6B0', -3.48, .22, -2.2)); c.add(bx(2.8, .06, .5, '#9EA6B0', -3.48, .22, -4.2));
  const beb = new THREE.Group(); beb.add(rb(.5, 1.1, .4, '#F4F1EA', 0, .55, 0, { r: .05, out: .008 })); beb.add(cyl(.14, .14, .4, '#9FD6F2', 0, 1.3, 0, { seg: 14 })); beb.position.set(6.3, 0, -6.6); c.add(beb);
  const T = tv(1.2, .7); T.position.set(-6.86, 2.2, -3.6); T.rotation.y = Math.PI / 2; c.add(T); T.userData.sc.paint('tv', (x, W, H) => { x.fillStyle = '#2E6FB8'; x.fillRect(0, 0, W, H); txt(x, 'SAÚDE', W / 2, H * .4, H * .2, '#FFFFFF'); txt(x, 'Cuide do seu coração', W / 2, H * .66, H * .09, '#DDEFF8', 700); });
  const rel = relogioParede(); rel.position.set(0, 2.6, -7.88); c.add(rel); for (let i = 0; i < 2; i++) { const v = vaso(i + 6); v.position.set(-.8 + i * 7.6, 0, -7.2); c.add(v); }
  c.add(cyl(.03, .03, 9.5, '#C8CCD2', 1.0, .95, -7.72, { rot: [0, 0, Math.PI / 2], seg: 8 })); for (let i = 0; i < 5; i++) c.add(cyl(.02, .02, .14, '#C8CCD2', -3.6 + i * 2.3, .95, -7.8, { rot: [Math.PI / 2, 0, 0], seg: 6 }));
  const cart = (x, y, cor, a, b) => { const p = cartaz(.7, .95, (q, W, H) => { q.fillStyle = '#FFFFFF'; q.fillRect(0, 0, W, H); q.fillStyle = cor; q.fillRect(0, 0, W, H * .3); txt(q, a, W / 2, H * .15, H * .1, '#FFFFFF'); txt(q, b, W / 2, H * .55, H * .08, '#2A2A30'); q.fillStyle = cor; q.beginPath(); q.arc(W / 2, H * .8, H * .08, 0, 7); q.fill(); }); p.position.set(x, y, -7.84); c.add(p); };
  cart(5.8, 1.75, '#2E9C6A', 'LAVE AS MÃOS', 'Higiene salva'); cart(1.0, 1.75, '#C0392B', 'CORAÇÃO', 'Faça o exame'); cart(.1, 1.75, '#2E6FB8', 'SILÊNCIO', 'Área de cirurgia');
  const ext = new THREE.Group(); ext.add(cyl(.1, .1, .5, '#D63A2A', 0, .25, 0, { out: .005 })); ext.add(cyl(.04, .04, .1, '#2A2A30', 0, .55, 0)); ext.position.set(1.8, .55, -7.74); c.add(ext); c.add(rb(.5, .35, .04, '#F4F1EA', 1.8, 1.0, -7.83, { r: .01 }));
  c.add(rb(.14, .26, .1, '#F4F1EA', 4.9, 1.35, -7.78, { r: .02 })); c.add(cyl(.03, .03, .06, '#9FD6F2', 4.9, 1.2, -7.72));
  const bq = new THREE.Group(); bq.add(rb(1.6, .08, .45, '#8FC9D8', 0, .46, 0, { r: .02, out: .006 })); for (const s of [-1, 1]) bq.add(rb(.06, .44, .4, '#7AA8B8', s * .7, .22, 0)); bq.position.set(6.0, 0, -7.4); c.add(bq);
  return { C, portas, luz, luzT, cad, rel };
}
// ---------- quintal do churrasco (2026) ----------
export function quintal(c, o = {}) {
  const H = o.tarde ? HORA.tarde : HORA.dia; ceu(c, H.topo, H.base, { n: 7 }); W_(c, { r: 16, far: 80, pos: o.tarde ? [-26, 10, -10] : [14, 22, 14], target: [0, 0, -4], ki: H.ki, hemi: H.hemi, key: H.key, sky: H.sky, ground: H.ground });
  chao(c, 40, 40, toon('#7CB85E'), 0, -6, 0); const piso = new THREE.Mesh(new THREE.PlaneGeometry(9, 6), toonTex(ctex(256, 256, (x) => { x.fillStyle = '#D9CDB8'; x.fillRect(0, 0, 256, 256); x.strokeStyle = '#C2B49C'; x.lineWidth = 4; for (let i = 0; i <= 4; i++) { x.beginPath(); x.moveTo(i * 64, 0); x.lineTo(i * 64, 256); x.stroke(); x.beginPath(); x.moveTo(0, i * 64); x.lineTo(256, i * 64); x.stroke(); } }))); piso.rotation.x = -Math.PI / 2; piso.position.set(0, .012, -3); piso.receiveShadow = true; c.add(piso);
  // muro com trepadeira e casa ao fundo
  for (const [x, z, w, r] of [[0, -8, 18, 0], [-9, -2, 12, Math.PI / 2], [9, -2, 12, Math.PI / 2]]) { const m = bx(w, 2.2, .25, '#F2E6D2', x, 1.1, z); m.rotation.y = r; c.add(m); }
  for (let i = 0; i < 14; i++) c.add(sph(.35 + (i % 3) * .1, ['#4C9A44', '#5DAA4E', '#6DBB57'][i % 3], -8 + i * 1.2, 1.9 + (i % 2) * .3, -7.8, { seg: 8 }));
  const casa = casaZL(4, { cor: '#F2C14E', andar: false }); casa.position.set(-4, 0, -14); c.add(casa); const casa2 = casaZL(9); casa2.position.set(6, 0, -15); c.add(casa2);
  const ch = churrasqueira(); ch.position.set(3.2, 0, -6.8); c.add(ch); vapor(c, 3.2, 4.4, -6.9, { n: 9, tam: .5, alt: 2.4, op: .35, cor: '#DDD8D0', v: .25 }); vapor(c, 3.2, 1.5, -6.7, { n: 6, tam: .25, alt: .9, op: .3, cor: '#EEE8E0' });
  // mesa de plástico com toalha e comida
  const mt = new THREE.Group(); mt.add(rb(2.2, .06, 1.0, '#F4F1EA', 0, .74, 0, { r: .02, out: .006 })); const tt = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 1.1), toonTex(ctex(128, 64, (x) => { x.fillStyle = '#F4F1EA'; x.fillRect(0, 0, 128, 64); x.fillStyle = '#E2443A'; for (let i = 0; i < 16; i++) for (let j = 0; j < 8; j++) if ((i + j) % 2) x.fillRect(i * 8, j * 8, 8, 8); }))); tt.rotation.x = -Math.PI / 2; tt.position.y = .775; mt.add(tt); for (const [x, z] of [[-1, -.4], [1, -.4], [-1, .4], [1, .4]]) mt.add(cyl(.03, .03, .74, '#F4F1EA', x, .37, z, { seg: 6 }));
  for (let i = 0; i < 4; i++) { const p = prato(); p.position.set(-.8 + i * .52, .78, (i % 2) * .2 - .1); mt.add(p); } mt.add(cyl(.18, .14, .1, '#F2C230', .2, .82, .25, { seg: 14, out: .004 })); mt.add(cyl(.06, .06, .28, '#2E7D4F', -.3, .92, .3, { seg: 10, out: .004 }));
  mt.position.set(-1.6, 0, -3.4); c.add(mt); const cads = [[-2.6, -2.5, Math.PI], [-1.6, -2.5, Math.PI], [-.6, -2.5, Math.PI], [-2.6, -4.3, 0], [-.6, -4.3, 0]].map(([x, z, r]) => { const g = new THREE.Group(); g.add(rb(.46, .06, .44, '#F4F1EA', 0, .45, 0, { r: .02, out: .005 })); g.add(rb(.46, .5, .05, '#F4F1EA', 0, .72, -.2, { r: .02, out: .005 })); for (const a of [-1, 1]) for (const b of [-1, 1]) g.add(cyl(.02, .02, .45, '#F4F1EA', a * .18, .22, b * .18, { seg: 5 })); g.position.set(x, 0, z); g.rotation.y = r; c.add(g); return g; });
  // varal, árvore, cachorro, pássaros
  for (const x of [-7, -3]) c.add(cyl(.04, .04, 2.2, '#9EA6B0', x, 1.1, -6.6, { seg: 6 })); c.add(cyl(.006, .006, 4, '#F4F1EA', -5, 2.15, -6.6, { rot: [0, 0, Math.PI / 2], seg: 4 })); const roupas = []; for (let i = 0; i < 4; i++) { const r = new THREE.Mesh(new THREE.PlaneGeometry(.5, .6), new THREE.MeshToonMaterial({ color: ['#2E6FB8', '#F2C230', '#E2443A', '#F4F1EA'][i], side: THREE.DoubleSide })); r.position.set(-6.3 + i * .9, 1.8, -6.6); c.add(r); roupas.push(r); }
  registra(c, (t, T) => roupas.forEach((r, i) => { r.rotation.x = .15 * Math.sin(T * 1.6 + i); }));
  arvore(c, 7.0, -5.5, 1.2, 7); const dog = cachorro(); dog.position.set(1.2, 0, -2.0); dog.rotation.y = .6; c.add(dog); registra(c, (t, T) => { dog.userData.rabo.rotation.z = .6 * Math.sin(T * 12); dog.userData.cab.rotation.z = .08 * Math.sin(T * 2); });
  passaros(c, { n: 7, centro: [0, 16, -20], raio: 16, v: .1, seed: 11 }); registra(c, (t, T) => ch.userData.carnes.forEach((k, i) => { k.rotation.z = T * .6 + i; }));
  return { ch, mt, cads, dog };
}
// ---------- aterro no País de Gales (cena ilustrativa) ----------
export function aterro(c, o = {}) {
  ceu(c, '#8E98A8', '#D8DCE0', { n: 8 }); W_(c, { r: 30, far: 120, pos: [10, 30, 20], target: [0, 0, -10], ki: 1.3, hemi: 1.3, sky: '#E0E4EA', key: '#F0F0F0', ground: '#8A7A6A' });
  chao(c, 200, 200, toon('#8A8070'), 0, -40, 0); const R = rng(9);
  for (let i = 0; i < 9; i++) { const m = new THREE.Mesh(new THREE.SphereGeometry(6 + R() * 5, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), toon(['#7E7466', '#8A7E6E', '#746A5C'][i % 3])); m.scale.y = .35 + R() * .2; m.position.set(-28 + i * 7 + R() * 3, 0, -18 - R() * 22); m.receiveShadow = true; c.add(m); }
  const cores = ['#26262C', '#F4F1EA', '#3E5C8A', '#C0392B', '#2E9C5A', '#F2C230', '#9EA6B0', '#3A3A44'];
  for (let i = 0; i < 160; i++) { const x = (R() - .5) * 60, z = -6 - R() * 40; const s = sacoLixo(cores[i % 8], i); s.scale.setScalar(.6 + R() * .7); s.position.set(x, 0, z); s.rotation.y = R() * 6; c.add(s); }
  for (let i = 0; i < 40; i++) { const bw = .4 + R() * .6, bh = .3 + R() * .4, bd = .3 + R() * .5; c.add(rb(bw, bh, bd, cores[(i + 3) % 8], (R() - .5) * 50, bh / 2, -8 - R() * 36, { r: .05 })); }
  const esc = new THREE.Group(); esc.add(rb(2.4, 1.2, 3.2, '#F2C230', 0, 1.2, 0, { r: .15, out: .012 })); esc.add(rb(1.6, 1.2, 1.4, '#F2C230', -.3, 2.3, .6, { r: .12, out: .01 })); esc.add(rb(1.5, 1.0, .05, '#3B4A60', -.3, 2.35, 1.31, { r: .02 })); for (const s of [-1, 1]) esc.add(rb(.7, .7, 3.6, '#2A2A30', s * 1.3, .35, 0, { r: .3 }));
  const braco = new THREE.Group(); braco.position.set(.6, 2.2, 1.2); esc.add(braco); braco.add(rb(.4, .4, 3.4, '#E2B020', 0, .5, 1.6, { r: .1, out: .008 })); braco.add(rb(1.0, .8, .8, '#3A3A44', 0, -.3, 3.4, { r: .08 })); braco.rotation.x = -.35;
  esc.position.set(-6, 1.3, -16); esc.rotation.y = .7; c.add(esc); for (let i = 0; i < 14; i++) c.add(cyl(.05, .05, 2.4, '#9EA6B0', -20 + i * 3, 1.2, -2, { seg: 6 })); c.add(cyl(.01, .01, 40, '#9EA6B0', 0, 2.2, -2, { rot: [0, 0, Math.PI / 2], seg: 4 }));
  const placa = tela(3, 1, 512, false); placa.paint('at', (x, W, H) => { x.fillStyle = '#2E7D4F'; x.fillRect(0, 0, W, H); txt(x, 'ATERRO SANITÁRIO', W / 2, H * .38, H * .26, '#FFFFFF'); txt(x, 'PROIBIDA A ENTRADA', W / 2, H * .72, H * .17, '#F2C230'); }); placa.position.set(4, 2.0, -1.9); c.add(placa); c.add(cyl(.05, .05, 2, '#5A6270', 3, 1, -1.95, { seg: 6 })); c.add(cyl(.05, .05, 2, '#5A6270', 5, 1, -1.95, { seg: 6 }));
  // gaivotas
  passaros(c, { n: 12, centro: [0, 12, -20], raio: 14, v: .16, seed: 21, escala: .8 }); c.traverse((n) => { if (n.material && n.material.color && n.material.color.getHexString && n.material.color.getHexString() === '2a2630') n.material = toon('#F4F1EA', { side: THREE.DoubleSide }); });
  return { esc, braco };
}
/** Cenário "infográfico": chão infinito escuro com grade luminosa (para explicar o bitcoin). */
export function palco(c, o = {}) {
  ceu(c, o.c1 || '#1A1A3A', o.c2 || '#3A2A5A', { n: 0 }); W_(c, { r: 14, far: 60, pos: [6, 12, 8], ki: 1.6, hemi: 1.0, sky: '#C8B8FF', key: '#FFE8C8', ground: '#2A2040' });
  const g = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), toonTex((() => { const t = ctex(256, 256, (x) => { x.fillStyle = o.chao || '#2A2448'; x.fillRect(0, 0, 256, 256); x.strokeStyle = '#4A3E7A'; x.lineWidth = 3; x.strokeRect(0, 0, 256, 256); }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(60, 60); return t; })())); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
  // fundo: cidade à noite em volta do palco, estrelas e brilho no horizonte (nada de vazio atrás)
  const R = rng(o.seed || 77); const cores = ['#3A3060', '#2E2850', '#443A6E', '#352C58'];
  for (let i = 0; i < 34; i++) { const a = i / 34 * Math.PI * 2 + R() * .08, rr = 95 + R() * 30, w = 14 + R() * 10, h = 22 + R() * 50;
    const p = predio({ w, d: w, h, tipo: i % 3 === 0 ? 'vidro' : 'janelas', cor: cores[i % 4], v1: '#3A3A70', v2: '#5A4A90', vj: '#FFD98A', noite: true, seed: 300 + i, corTerreo: '#241E40', topo: '#2A2448', teto: '#2A2448' }); p.position.set(Math.sin(a) * rr, 0, -Math.cos(a) * rr); p.rotation.y = -a; c.add(p); }
  const est = new THREE.BufferGeometry(); const pos = []; for (let i = 0; i < 500; i++) { const a = R() * Math.PI * 2, e = .25 + R() * 1.2; pos.push(Math.cos(a) * Math.cos(e) * 300, Math.sin(e) * 300, Math.sin(a) * Math.cos(e) * 300); }
  est.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); c.add(new THREE.Points(est, new THREE.PointsMaterial({ color: '#FFF4D8', size: 1.6, sizeAttenuation: false, fog: false, transparent: true, opacity: .85 })));
  const hz = new THREE.Mesh(new THREE.CylinderGeometry(150, 150, 40, 48, 1, true), new THREE.MeshBasicMaterial({ map: ctex(8, 256, (x) => { const q = x.createLinearGradient(0, 0, 0, 256); q.addColorStop(0, 'rgba(255,170,120,0)'); q.addColorStop(1, 'rgba(255,150,110,.55)'); x.fillStyle = q; x.fillRect(0, 0, 8, 256); }), transparent: true, side: THREE.BackSide, depthWrite: false, fog: false })); hz.position.y = 20; c.add(hz);
  c.fog = new THREE.Fog(o.c2 || '#3A2A5A', 40, 190);
  return { g };
}
