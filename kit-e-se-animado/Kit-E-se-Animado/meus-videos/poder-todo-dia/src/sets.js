// Cenários fechados que não estão na cidade: recepção do escritório, sala de reunião e o ônibus por dentro.
import * as THREE from 'three';
import { toon, tm, rb, bx, cyl, sph, ctex, toonTex, luzToon } from './motor/toon.js';
import { rng } from './motor/core.js';
import * as M from '../../../mundo/cidade/moveis.js';
import { piso as pisoTex, reboco, azulejo, repetir, letreiroTex } from '../../../mundo/cidade/texturas.js';

const plano = (w, h, mat, x, y, z, rx = 0, ry = 0) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); m.position.set(x, y, z); m.rotation.set(rx, ry, 0); m.receiveShadow = true; return m; };
const texRep = (t, a, b) => { const n = t.clone(); n.wrapS = n.wrapT = THREE.RepeatWrapping; n.repeat.set(a, b); n.needsUpdate = true; return toonTex(n); };
/** Sala retangular: chão, 4 paredes, teto claro. Devolve o grupo. */
export function sala(c, w, d, h, o = {}) {
  const g = new THREE.Group(); c.add(g);
  g.add(plano(w, d, texRep(pisoTex(...(o.piso || ['ceramica', '#E8E0D2', '#D4CABA'])), w, d), 0, 0, 0, -Math.PI / 2));
  const pm = texRep(reboco(o.parede || '#EEF0EC'), w / 2, h / 2);
  g.add(plano(w, h, pm, 0, h / 2, -d / 2)); g.add(plano(w, h, pm, 0, h / 2, d / 2, 0, Math.PI)); g.add(plano(d, h, pm, -w / 2, h / 2, 0, 0, Math.PI / 2)); g.add(plano(d, h, pm, w / 2, h / 2, 0, 0, -Math.PI / 2));
  const teto = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshToonMaterial({ color: '#F7F4EE', emissive: '#F7F4EE', emissiveIntensity: .55 })); teto.rotation.x = Math.PI / 2; teto.position.y = h; g.add(teto);
  // rodapé
  for (const [x, z, ww, dd] of [[0, -d / 2 + .01, w, .02], [0, d / 2 - .01, w, .02], [-w / 2 + .01, 0, .02, d], [w / 2 - .01, 0, .02, d]]) g.add(bx(ww, .1, dd, '#D8D2C8', x, .05, z, { shadow: false }));
  // luminárias de teto
  for (let i = 0; i < (o.luzes || 2); i++) { const lm = new THREE.MeshToonMaterial({ color: '#FFFFFF', emissive: '#F4F8FF', emissiveIntensity: .8 }); g.add(tm(new THREE.BoxGeometry(1.2, .04, .3), lm, { pos: [-w / 4 + (i % 2) * w / 2, h - .03, -d / 4 + Math.floor(i / 2) * d / 2], shadow: false })); }
  return g;
}
/** Janela de vidro com a cidade lá fora (imagem pintada). */
export function janelaCidade(w, h, dia = true) {
  const t = ctex(512, 320, (x) => { const g = x.createLinearGradient(0, 0, 0, 320); g.addColorStop(0, dia ? '#7EC4F0' : '#1C2556'); g.addColorStop(1, dia ? '#D9F0FA' : '#4A3E6E'); x.fillStyle = g; x.fillRect(0, 0, 512, 320);
    x.fillStyle = dia ? '#7DB572' : '#2A3A3A'; x.beginPath(); x.moveTo(0, 220); x.quadraticCurveTo(160, 130, 300, 200); x.quadraticCurveTo(420, 150, 512, 190); x.lineTo(512, 320); x.lineTo(0, 320); x.fill();
    const R = rng(3); for (let i = 0; i < 14; i++) { const bw = 30 + R() * 30, bh = 40 + R() * 80; x.fillStyle = ['#E8DCC8', '#F2D8A8', '#CFE3D2', '#F4C7B4'][i % 4]; x.fillRect(i * 38, 320 - bh, bw, bh); x.fillStyle = '#C8643C'; x.beginPath(); x.moveTo(i * 38 - 4, 320 - bh); x.lineTo(i * 38 + bw / 2, 300 - bh); x.lineTo(i * 38 + bw + 4, 320 - bh); x.fill(); } });
  const g = new THREE.Group(); g.add(new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t }))); for (const s of [-1, 1]) g.add(bx(.06, h + .06, .06, '#F4F1EA', s * w / 2, 0, .02)); g.add(bx(w, .06, .06, '#F4F1EA', 0, h / 2, .02)); g.add(bx(w + .1, .06, .12, '#F4F1EA', 0, -h / 2, .05)); g.add(bx(.04, h, .04, '#F4F1EA', 0, 0, .02)); return g;
}

// ---------------------------------------------------------------- ESCRITÓRIO (recepção)
/** Recepção do escritório do Guilherme. Origem no centro; a porta de vidro fica em z = +4 (frente). */
export function escritorio(c, o = {}) {
  luzToon(c, { r: 9, pos: [4, 9, 6], ki: 1.6, hemi: 1.7 });
  const amb = new THREE.AmbientLight('#FFF4E6', .55); c.add(amb);
  sala(c, 10, 8, 3.2, { parede: '#E6EEF2', piso: ['granilite', '#E4E2DC', '#8D949C'], luzes: 4 });
  // logotipo da empresa na parede do fundo
  const logo = new THREE.Mesh(new THREE.PlaneGeometry(3.4, .9), toonTex(letreiroTex('SERRA SOLUÇÕES', { fundo: '#1F4E86', sub: 'contabilidade', w: 1024, h: 260, borda: '#F2C230' }))); logo.position.set(0, 2.3, -3.98); c.add(logo);
  // balcão da recepção, computador, planta, sofá de espera, relógio
  const bal = rb(2.6, 1.05, .7, '#1F4E86', 0, .53, -2.2, { out: .012 }); c.add(bal); c.add(bx(2.7, .05, .8, '#F4F1EA', 0, 1.08, -2.2));
  const pc = M.escrivaninha(.01, '#F4F1EA', true, 2); pc.children.slice(0, 7).forEach(m => m.visible = false); pc.position.set(.6, .3, -2.35); c.add(pc);
  c.add(M.planta(1.4, 3).translateX(-4.4).translateZ(-3.5)); c.add(M.planta(1.3, 5).translateX(4.4).translateZ(-3.5));
  const sofa = M.sofa(2, '#7A8696'); sofa.position.set(-3.6, 0, 1.2); sofa.rotation.y = Math.PI / 2; c.add(sofa);
  const rel = new THREE.Group(); rel.add(cyl(.32, .32, .05, '#2A2A30', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], out: .01 }));
  const face = new THREE.Mesh(new THREE.CircleGeometry(.29, 32), new THREE.MeshBasicMaterial({ map: ctex(256, 256, (x) => { x.fillStyle = '#FFF'; x.beginPath(); x.arc(128, 128, 126, 0, 7); x.fill(); x.fillStyle = '#1B1420'; x.font = '700 36px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; for (let i = 1; i <= 12; i++) { const a = i / 12 * 6.283 - Math.PI / 2; x.fillText(String(i), 128 + Math.cos(a) * 96, 128 + Math.sin(a) * 96); } }) })); face.position.z = .027; rel.add(face);
  const ph = new THREE.Group(), pm = new THREE.Group(); ph.position.z = pm.position.z = .03; ph.add(bx(.03, .15, .01, '#1B1420', 0, .07, 0)); pm.add(bx(.02, .22, .01, '#E2443A', 0, .1, 0)); rel.add(ph, pm); rel.position.set(3.2, 2.35, -3.96); c.add(rel);
  rel.hora = (h) => { pm.rotation.z = -(h % 1) * Math.PI * 2; ph.rotation.z = -(h % 12) / 12 * Math.PI * 2; }; rel.hora(7 + 50 / 60);
  // catraca e porta de vidro com a rua
  const cat = new THREE.Group(); cat.add(rb(.3, 1.0, .9, '#8D949C', 0, .5, 0, { out: .01 })); cat.add(bx(.04, .04, .6, '#C9CED6', .3, .9, 0)); cat.add(bx(.12, .08, .02, '#3CCB6A', 0, 1.02, .2)); cat.position.set(2.2, 0, -.3); c.add(cat);
  const jan = janelaCidade(3.2, 2.4, o.dia !== false); jan.position.set(0, 1.3, 3.97); jan.rotation.y = Math.PI; c.add(jan);
  for (let i = 0; i < 2; i++) c.add(M.quadro(1.2, .8, 40 + i, 'paisagem').translateX(-4.97).translateY(1.7).translateZ(-1.5 + i * 2.2).rotateY(Math.PI / 2));
  return { rel, catraca: cat };
}

// ---------------------------------------------------------------- SALA DE REUNIÃO
export function reuniao(c) {
  luzToon(c, { r: 9, pos: [3, 9, 5], ki: 1.5, hemi: 1.7 }); c.add(new THREE.AmbientLight('#FFF4E6', .55));
  sala(c, 9, 7, 3.0, { parede: '#EEF0E8', piso: ['madeira', '#B98450', '#A8763F'], luzes: 4 });
  const mesa = rb(5, .08, 1.6, '#5A3A24', 0, .76, 0, { out: .012 }); c.add(mesa); for (const [a, b] of [[-2.2, -.6], [2.2, -.6], [-2.2, .6], [2.2, .6]]) c.add(bx(.08, .74, .08, '#3A2A1A', a, .37, b));
  const lugares = []; for (let i = 0; i < 4; i++) for (const s of [-1, 1]) { const cad = M.cadeiraEscritorio(); cad.position.set(-1.8 + i * 1.2, 0, s * 1.15); cad.rotation.y = s > 0 ? Math.PI : 0; c.add(cad); lugares.push([-1.8 + i * 1.2, s * 1.15, s > 0 ? Math.PI : 0]); }
  for (let i = 0; i < 6; i++) { c.add(rb(.3, .02, .22, '#F4F1EA', -2 + i * .8, .81, (i % 2 ? .4 : -.4))); c.add(M.cadeira && cyl(.04, .035, .1, '#F4F1EA', -1.8 + i * .7, .86, (i % 2 ? -.5 : .5), { seg: 10 })); }
  // tela do projetor com gráfico
  const tela = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1.8), new THREE.MeshBasicMaterial({ map: ctex(640, 360, (x) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, 640, 360); x.fillStyle = '#1F4E86'; x.font = '900 30px Inter'; x.fillText('RESULTADOS DO TRIMESTRE', 30, 50); const v = [120, 160, 140, 210, 250]; v.forEach((h, i) => { x.fillStyle = ['#3E7CC8', '#5AA84E', '#F2C230', '#F08A2C', '#E2443A'][i]; x.fillRect(60 + i * 110, 320 - h, 70, h); }); x.strokeStyle = '#2A2A30'; x.lineWidth = 3; x.beginPath(); x.moveTo(40, 320); x.lineTo(610, 320); x.stroke(); }) }));
  tela.position.set(0, 1.75, -3.47); c.add(tela); c.add(bx(3.3, .06, .1, '#2A2A30', 0, 2.68, -3.45));
  const jan = janelaCidade(2.4, 1.6); jan.position.set(4.47, 1.5, 0); jan.rotation.y = -Math.PI / 2; c.add(jan);
  c.add(M.planta(1.4, 2).translateX(-4).translateZ(-3)); c.add(M.relogio({ vivos: [], h: 10 }).translateX(-4.48).translateY(2.2).rotateY(Math.PI / 2));
  return { lugares };
}

// ---------------------------------------------------------------- ÔNIBUS POR DENTRO
/** Ônibus lotado: corredor no eixo z (frente em -z). A paisagem passa pelas janelas (anda com o tempo). */
export function onibus(c, o = {}) {
  luzToon(c, { r: 8, pos: [3, 8, 2], ki: 1.3, hemi: 1.8 }); c.add(new THREE.AmbientLight('#FFF4E6', .6));
  const L = 11, W = 2.5, H = 2.3;
  const g = new THREE.Group(); c.add(g);
  g.add(plano(W, L, toon('#4A4F5A'), 0, 0, 0, -Math.PI / 2)); g.add(plano(.8, L, toon('#3A3D44'), 0, .005, 0, -Math.PI / 2));
  const teto = new THREE.Mesh(new THREE.PlaneGeometry(W, L), new THREE.MeshToonMaterial({ color: '#E8E4DC', emissive: '#E8E4DC', emissiveIntensity: .5 })); teto.rotation.x = Math.PI / 2; teto.position.y = H; g.add(teto);
  for (let i = 0; i < 4; i++) { const lm = new THREE.MeshToonMaterial({ color: '#FFFFFF', emissive: '#F4F8FF', emissiveIntensity: .8 }); g.add(tm(new THREE.BoxGeometry(.3, .03, 1.6), lm, { pos: [0, H - .02, -4 + i * 2.7], shadow: false })); }
  // paisagem nas janelas (textura comprida que rola)
  const pais = ctex(2048, 256, (x) => { const R = rng(9); const gr = x.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#8EC8EC'); gr.addColorStop(1, '#D9F0FA'); x.fillStyle = gr; x.fillRect(0, 0, 2048, 256);
    for (let i = 0; i < 40; i++) { const bw = 40 + R() * 50, bh = 60 + R() * 110, px = i * 52; x.fillStyle = ['#E8DCC8', '#F2D8A8', '#CFE3D2', '#F4C7B4', '#D8E2EE', '#F6E7A6'][i % 6]; x.fillRect(px, 256 - bh, bw, bh); x.fillStyle = '#C8643C'; x.beginPath(); x.moveTo(px - 4, 256 - bh); x.lineTo(px + bw / 2, 236 - bh); x.lineTo(px + bw + 4, 256 - bh); x.fill(); x.fillStyle = '#7FA9C9'; x.fillRect(px + 8, 256 - bh + 20, 14, 18); x.fillRect(px + bw - 22, 256 - bh + 20, 14, 18); if (i % 5 === 2) { x.fillStyle = '#4E9A48'; x.beginPath(); x.arc(px + 20, 160, 34, 0, 7); x.fill(); x.fillStyle = '#7A5233'; x.fillRect(px + 16, 180, 8, 76); } }
    x.fillStyle = '#8D949C'; for (let i = 0; i < 16; i++) x.fillRect(i * 130, 40, 6, 216); });
  pais.wrapS = THREE.RepeatWrapping; pais.repeat.set(.45, 1);
  const mp = new THREE.MeshBasicMaterial({ map: pais });
  for (const s of [-1, 1]) {
    // parede lateral: faixa de baixo, janelas, faixa de cima
    g.add(plano(L, .9, toon('#2E9C6A'), s * W / 2, .45, 0, 0, -s * Math.PI / 2)); g.add(plano(L, .35, toon('#E8E4DC'), s * W / 2, H - .17, 0, 0, -s * Math.PI / 2));
    const jan = new THREE.Mesh(new THREE.PlaneGeometry(L, 1.05), mp); jan.position.set(s * (W / 2 + .02), 1.43, 0); jan.rotation.y = -s * Math.PI / 2; g.add(jan);
    for (let i = 0; i <= 6; i++) g.add(bx(.06, 1.1, .08, '#C9CED6', s * (W / 2 - .03), 1.43, -L / 2 + i * L / 6));
    // bancos azuis
    for (let i = 0; i < 6; i++) { const z = -4.2 + i * 1.6; const b = new THREE.Group(); b.position.set(s * .75, 0, z); b.add(rb(.85, .12, .45, '#2E6FB8', 0, .48, 0, { out: .01 })); b.add(rb(.85, .55, .1, '#2E6FB8', 0, .8, .2, { out: .01, rot: [.12, 0, 0] })); b.add(bx(.06, .42, .3, '#8D949C', 0, .21, 0)); g.add(b); }
  }
  // barras e alças
  for (const s of [-1, 1]) g.add(cyl(.02, .02, L, '#C9CED6', s * .45, 1.95, 0, { rot: [Math.PI / 2, 0, 0], seg: 8 }));
  for (let i = 0; i < 6; i++) { const z = -4.5 + i * 1.8; g.add(cyl(.025, .025, H, '#F2C230', .42, H / 2, z, { seg: 8 })); for (const s of [-1, 1]) { const a = new THREE.Group(); a.position.set(s * .45, 1.95, z + .5); a.add(bx(.01, .18, .01, '#2A2A30', 0, -.09, 0)); a.add(tm(new THREE.TorusGeometry(.05, .01, 6, 14), '#2A2A30', { pos: [0, -.22, 0] })); g.add(a); } }
  g.add(plano(W, H, toon('#3A3D44'), 0, H / 2, -L / 2)); g.add(plano(W, H, toon('#3A3D44'), 0, H / 2, L / 2, 0, Math.PI));
  const placa = new THREE.Mesh(new THREE.PlaneGeometry(1.6, .3), new THREE.MeshBasicMaterial({ map: letreiroTex('CIRCULAR — CENTRO', { fundo: '#100808', cor: '#F2C230', w: 512, h: 96 }) })); placa.position.set(0, H - .3, -L / 2 + .02); g.add(placa);
  return { anda: (t) => { pais.offset.x = (t * .035) % 1; g.position.y = Math.sin(t * 9) * .006 + Math.sin(t * 2.3) * .004; g.rotation.z = Math.sin(t * 1.1) * .004; } };
}
