// Interiores toon: cômodo base, cozinha da avó, quarto do Augusto, pizzaria, hospital.
import * as THREE from 'three';
import { vapor, ventilador, chamas, ecg, registra, vaso, lixeira } from './vida.js';
import { rng } from './motor/core.js';
import { toon, toonTex, tm, rb, bx, cyl, sph, rbox, ctex, outline } from './motor/toon.js';
import { relogioParede, caixaPizza, celular } from './mundo.js';

export function pisoTex(tipo = 'madeira', a = '#C8935E', b = '#B98450') {
  const t = ctex(512, 512, (x) => {
    if (tipo === 'madeira') { for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? a : b; x.fillRect(0, i * 64, 512, 64); x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(0, i * 64, 512, 3); x.fillRect(((i * 197) % 400) + 40, i * 64, 3, 64); } }
    else if (tipo === 'ladrilho') { x.fillStyle = a; x.fillRect(0, 0, 512, 512); x.fillStyle = b; for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) if ((i + j) % 2) x.fillRect(i * 64, j * 64, 64, 64); }
    else { x.fillStyle = a; x.fillRect(0, 0, 512, 512); x.strokeStyle = b; x.lineWidth = 4; for (let i = 0; i <= 8; i++) { x.beginPath(); x.moveTo(i * 64, 0); x.lineTo(i * 64, 512); x.stroke(); x.beginPath(); x.moveTo(0, i * 64); x.lineTo(512, i * 64); x.stroke(); } }
  }); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}
/** Cômodo: piso + paredes traseira/esquerda/direita (aberto para +z). o: {w,d,h,parede,piso,tipoPiso,rodape} */
export function comodo(c, o = {}) {
  const { w = 8, d = 7, h = 3.2 } = o; const pt = pisoTex(o.tipoPiso || 'madeira', o.piso1, o.piso2); pt.repeat.set(w / 2.5, d / 2.5);
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(w, d), toonTex(pt)); fl.rotation.x = -Math.PI / 2; fl.position.set(0, 0, -d / 2 + (o.dz || 0) + d * .0); fl.receiveShadow = true; c.add(fl);
  const pm = toon(o.parede || '#F3E3C8'), pm2 = toon(o.parede2 || o.parede || '#F3E3C8');
  const back = bx(w, h, .2, pm, 0, h / 2, -d, { shadow: false }); c.add(back);
  const E = o.frente ?? 6; // paredes e piso continuam pra frente, a câmera nunca vê o vazio
  if (o.lados !== false) { c.add(bx(.2, h, d + E, pm2, -w / 2, h / 2, -d / 2 + E / 2, { shadow: false })); c.add(bx(.2, h, d + E, pm2, w / 2, h / 2, -d / 2 + E / 2, { shadow: false })); }
  if (E > 0) { const fe = new THREE.Mesh(new THREE.PlaneGeometry(w, E), toonTex(pt)); fe.rotation.x = -Math.PI / 2; fe.position.set(0, 0, E / 2); fe.receiveShadow = true; c.add(fe); }
  if (o.meiaParede) { c.add(bx(w, h * .38, .05, toon(o.meiaParede), 0, h * .19, -d + .12, { shadow: false })); }
  c.add(bx(w, .12, .06, o.rodape || '#FFFFFF', 0, .06, -d + .12, { shadow: false }));
  // teto (sem ele o céu aparecia por cima das paredes) e moldura de gesso
  if (o.teto !== false) { const tc = o.teto || '#F6F1EA'; c.add(bx(w + .4, .14, d + E + .4, tc, 0, h + .07, -d / 2 + E / 2, { shadow: false })); c.add(bx(w, .1, .1, tc, 0, h - .05, -d + .15, { shadow: false }));
    const lum = new THREE.Mesh(new THREE.CircleGeometry(.28, 24), new THREE.MeshBasicMaterial({ color: '#FFF8E6' })); lum.rotation.x = Math.PI / 2; lum.position.set(0, h - .005, -d / 2); c.add(lum); }
  return { w, d, h };
}
export function janela(c, x, y, z, w = 1.6, h = 1.3, o = {}) {
  const g = new THREE.Group(); const ceu = ctex(128, 128, (q) => { const gr = q.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, o.c1 || '#8CCBF2'); gr.addColorStop(1, o.c2 || '#DDF2FB'); q.fillStyle = gr; q.fillRect(0, 0, 128, 128); });
  const vid = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: ceu, color: o.tint || '#FFFFFF' })); g.add(vid); g.userData.vidro = vid;
  const fr = o.moldura || '#FFFFFF'; g.add(bx(w + .16, .1, .1, fr, 0, h / 2, .03)); g.add(bx(w + .16, .1, .14, fr, 0, -h / 2, .05)); g.add(bx(.1, h, .1, fr, -w / 2, 0, .03)); g.add(bx(.1, h, .1, fr, w / 2, 0, .03)); g.add(bx(.05, h, .06, fr, 0, 0, .03)); g.add(bx(w, .05, .06, fr, 0, 0, .03));
  if (o.cortina) for (const s of [-1, 1]) { const ct = rb(.35, h + .4, .06, o.cortina, s * (w / 2 + .1), 0, .1, { r: .03 }); g.add(ct); }
  g.position.set(x, y, z); if (o.ry) g.rotation.y = o.ry; c.add(g); return g;
}
export function mesa(c, x, z, w = 1.4, d = .8, h = .76, cor = '#B87A4A') { const g = new THREE.Group(); g.add(rb(w, .07, d, cor, 0, h, 0, { r: .02, out: .008 })); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(rb(.07, h, .07, cor, a * (w / 2 - .08), h / 2, b * (d / 2 - .08), { r: .02 })); g.position.set(x, 0, z); c.add(g); return g; }
export function cadeira(c, x, z, ry = 0, cor = '#9A6236') { const g = new THREE.Group(); g.add(rb(.44, .06, .42, cor, 0, .45, 0, { r: .02, out: .007 })); g.add(rb(.44, .5, .05, cor, 0, .72, -.19, { r: .02, out: .007 })); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(rb(.05, .45, .05, cor, a * .18, .22, b * .17, { r: .01 })); g.position.set(x, 0, z); g.rotation.y = ry; c.add(g); return g; }
export function quadroParede(c, x, y, z, w, h, draw, ry = 0) { const t = ctex(256, Math.round(256 * h / w), (q, W, H) => draw(q, W, H)); const g = new THREE.Group(); g.add(rb(w + .08, h + .08, .04, '#7A5236', 0, 0, 0, { r: .01 })); const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), toonTex(t)); p.position.z = .025; g.add(p); g.position.set(x, y, z); g.rotation.y = ry; c.add(g); return g; }

/** Retrato do avô (foto antiga). */
export function retratoAvo(x, W, H) {
  const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#E9D9B4'); g.addColorStop(1, '#CDB88E'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.lineWidth = W * .02; x.strokeStyle = '#1B1420'; x.lineCap = 'round';
  x.fillStyle = '#7A9CB8'; x.beginPath(); x.ellipse(W / 2, H * 1.02, W * .42, H * .3, 0, Math.PI, 0); x.fill(); x.stroke();
  x.fillStyle = '#F4F1EA'; x.beginPath(); x.moveTo(W * .42, H * .74); x.lineTo(W / 2, H * .84); x.lineTo(W * .58, H * .74); x.fill();
  x.fillStyle = '#C98E66'; x.beginPath(); x.arc(W / 2, H * .44, W * .3, 0, 7); x.fill(); x.stroke();
  x.fillStyle = '#E4E0DA'; for (const s of [-1, 1]) { x.beginPath(); x.ellipse(W / 2 + s * W * .27, H * .4, W * .07, H * .09, 0, 0, 7); x.fill(); }
  x.fillStyle = '#1B1420'; for (const s of [-1, 1]) { x.beginPath(); x.ellipse(W / 2 + s * W * .1, H * .42, W * .035, H * .04, 0, 0, 7); x.fill(); }
  x.lineWidth = W * .015; for (const s of [-1, 1]) { x.beginPath(); x.arc(W / 2 + s * W * .1, H * .42, W * .07, 0, 7); x.stroke(); }
  x.fillStyle = '#E4E0DA'; x.beginPath(); x.ellipse(W / 2, H * .53, W * .13, H * .035, 0, 0, 7); x.fill();
  x.lineWidth = W * .018; x.beginPath(); x.arc(W / 2, H * .55, W * .07, .3, Math.PI - .3); x.stroke();
  x.strokeStyle = 'rgba(80,60,30,.35)'; x.lineWidth = W * .03; x.strokeRect(W * .03, H * .03, W * .94, H * .94);
}
/** Retrato da Dona Lurdes. */
export function retratoVo(x, W, H) {
  const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#F3E2C4'); g.addColorStop(1, '#E2C9A0'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.lineWidth = W * .02; x.strokeStyle = '#1B1420'; x.lineCap = 'round';
  x.fillStyle = '#9C7BC4'; x.beginPath(); x.ellipse(W / 2, H * 1.02, W * .42, H * .3, 0, Math.PI, 0); x.fill(); x.stroke();
  x.fillStyle = '#ECE8E4'; x.beginPath(); x.arc(W / 2, H * .2, W * .13, 0, 7); x.fill(); x.stroke(); x.beginPath(); x.arc(W / 2, H * .42, W * .33, Math.PI * 1.05, Math.PI * 1.95); x.fill();
  x.fillStyle = '#E3B28E'; x.beginPath(); x.arc(W / 2, H * .46, W * .29, 0, 7); x.fill(); x.stroke();
  x.fillStyle = '#ECE8E4'; x.beginPath(); x.ellipse(W / 2, H * .25, W * .27, H * .08, 0, 0, 7); x.fill();
  x.fillStyle = '#1B1420'; for (const s of [-1, 1]) { x.beginPath(); x.ellipse(W / 2 + s * W * .1, H * .45, W * .03, H * .035, 0, 0, 7); x.fill(); }
  x.strokeStyle = '#6A4A3A'; x.lineWidth = W * .014; for (const s of [-1, 1]) { x.beginPath(); x.arc(W / 2 + s * W * .1, H * .45, W * .075, 0, 7); x.stroke(); }
  x.strokeStyle = '#1B1420'; x.lineWidth = W * .018; x.beginPath(); x.arc(W / 2, H * .54, W * .08, .3, Math.PI - .3); x.stroke();
  x.fillStyle = 'rgba(240,110,110,.35)'; for (const s of [-1, 1]) { x.beginPath(); x.ellipse(W / 2 + s * W * .17, H * .55, W * .05, H * .03, 0, 0, 7); x.fill(); }
  x.strokeStyle = 'rgba(80,60,30,.35)'; x.lineWidth = W * .03; x.strokeRect(W * .03, H * .03, W * .94, H * .94);
}
/** Cozinha da Dona Lurdes. */
export function cozinha(c, o = {}) {
  const C = comodo(c, { w: 9, d: 6, parede: '#F6E3B4', parede2: '#EFD7A2', tipoPiso: 'ladrilho', piso1: '#E9E2D6', piso2: '#D7CCB9', meiaParede: '#9ED3C4' });
  // azulejos atrás da pia
  const az = ctex(256, 128, (x) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, 256, 128); x.strokeStyle = '#CFE3EC'; x.lineWidth = 4; for (let i = 0; i <= 8; i++) { x.beginPath(); x.moveTo(i * 32, 0); x.lineTo(i * 32, 128); x.stroke(); } for (let j = 0; j <= 4; j++) { x.beginPath(); x.moveTo(0, j * 32); x.lineTo(256, j * 32); x.stroke(); } }); az.wrapS = az.wrapT = THREE.RepeatWrapping; az.repeat.set(3, 1);
  const pa = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 1), toonTex(az)); pa.position.set(-1.6, 1.45, -5.88); c.add(pa);
  c.add(rb(4.4, .9, .7, '#7FC4B4', -1.6, .45, -5.55, { r: .03 })); c.add(rb(4.5, .06, .74, '#E8E2D6', -1.6, .93, -5.55, { r: .02 }));
  for (let i = 0; i < 4; i++) c.add(rb(.9, .7, .04, '#8FD0C0', -3.2 + i * 1.08, .45, -5.18, { r: .02 }));
  c.add(rb(2.6, .7, .45, '#7FC4B4', -1.9, 2.25, -5.7, { r: .03 })); // armário alto
  // fogão com panela fumegando
  c.add(rb(.9, .92, .7, '#F4F1EA', 1.1, .46, -5.55, { r: .04, out: .008 })); c.add(rb(.92, .05, .72, '#3A3A44', 1.1, .95, -5.55, { r: .02 }));
  const panela = cyl(.22, .2, .24, '#C8CCD2', 1.0, 1.1, -5.55, { out: .008 }); c.add(panela); c.add(cyl(.24, .24, .03, '#9EA2AA', 1.0, 1.23, -5.55));
  // geladeira
  c.add(rb(.9, 1.9, .75, '#F4F1EA', 2.6, .95, -5.5, { r: .1, out: .01 })); c.add(rb(.04, .4, .06, '#B8BCC4', 2.25, 1.35, -5.1, { r: .02 }));
  // mesa e cadeiras
  const m = mesa(c, -.6, -2.6, 1.6, .95, .76, '#C98B5A'); const tc = new THREE.Mesh(new THREE.PlaneGeometry(1.5, .85), toonTex(ctex(128, 128, (x) => { x.fillStyle = '#F4F1EA'; x.fillRect(0, 0, 128, 128); x.fillStyle = '#E2443A'; for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) if ((i + j) % 2) x.fillRect(i * 16, j * 16, 16, 16); }))); tc.rotation.x = -Math.PI / 2; tc.position.set(-.6, .8, -2.6); c.add(tc);
  cadeira(c, -1.6, -2.6, Math.PI / 2); cadeira(c, .4, -2.6, -Math.PI / 2);
  janela(c, 3.2, 1.7, -5.88, 1.4, 1.1, { cortina: '#F28F6B' });
  // foto do avô na parede
  const foto = quadroParede(c, -3.9, 2.0, -3.2, .5, .62, retratoAvo, Math.PI / 2);
  foto.traverse?.((m) => { m.castShadow = false; }); // sem sombra flutuante na parede
  const rel = relogioParede(); rel.position.set(0, 2.45, -5.88); c.add(rel);
  const porta = new THREE.Group(); porta.add(rb(1.05, 2.15, .08, '#8A5A36', .52, 1.08, 0, { r: .03, out: .008 })); porta.add(sph(.05, '#E8C060', .92, 1.05, .07)); porta.position.set(-4.4, 0, -1.2); porta.rotation.y = Math.PI / 2; c.add(porta);
  c.add(bx(.25, 2.3, 1.3, '#EFD7A2', -4.52, 1.15, -1.75, { shadow: false }));
  vapor(c, 1.0, 1.27, -5.55, { n: 7, tam: .16, alt: .8 });
  // fruteira, potes, calendário, pano, tapete, vasinhos na janela
  c.add(cyl(.2, .14, .08, '#E8E2D6', -.9, .82, -2.6, { out: .006 })); for (let i = 0; i < 5; i++) c.add(sph(.065, ['#E2443A', '#F2C14E', '#F28F2B', '#6DBB57', '#E2443A'][i], -.98 + (i % 3) * .08, .9 + (i > 2 ? .07 : 0), -2.62 + (i % 2) * .07, { seg: 10 }));
  c.add(rb(1.6, .05, .3, '#C98B5A', -1.9, 1.75, -5.8)); for (let i = 0; i < 5; i++) c.add(cyl(.08, .08, .2 + (i % 2) * .06, ['#F2C14E', '#E8A0B8', '#9EC1E8', '#F28F6B', '#B9D98C'][i], -2.5 + i * .3, 1.88, -5.78, { seg: 10, out: .005 }));
  const cal = new THREE.Mesh(new THREE.PlaneGeometry(.42, .56), toonTex(ctex(128, 170, (x) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, 128, 170); x.fillStyle = '#E2443A'; x.fillRect(0, 0, 128, 40); x.fillStyle = '#fff'; x.font = '900 24px Inter'; x.textAlign = 'center'; x.fillText('MARÇO', 64, 28); x.fillStyle = '#3A3A44'; x.font = '600 13px Inter'; for (let i = 0; i < 31; i++) x.fillText(String(i + 1), 12 + (i % 7) * 17, 62 + Math.floor(i / 7) * 22); }))); cal.position.set(-3.9 + .12, 1.6, -4.6); cal.rotation.y = Math.PI / 2; c.add(cal);
  c.add(rb(.3, .4, .02, '#F28F6B', .7, .7, -5.17, { r: .01 }));
  const tap = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.4), toonTex(ctex(128, 96, (x) => { x.fillStyle = '#C9472F'; x.fillRect(0, 0, 128, 96); x.strokeStyle = '#F2C14E'; x.lineWidth = 6; x.strokeRect(8, 8, 112, 80); x.strokeStyle = '#F4F1EA'; x.lineWidth = 3; x.strokeRect(18, 18, 92, 60); }))); tap.rotation.x = -Math.PI / 2; tap.position.set(-.6, .012, -2.6); c.add(tap);
  for (let i = 0; i < 2; i++) { const v = vaso(i + 3); v.scale.setScalar(.45); v.position.set(2.95 + i * .5, 1.12, -5.75); c.add(v); }
  return { C, rel, panela, porta, foto };
}

/** Quarto do Augusto. */
export function quarto(c, o = {}) {
  const C = comodo(c, { w: 8, d: 6, parede: o.noite ? '#6F7FB0' : '#A9C9E6', parede2: o.noite ? '#61709E' : '#98BCDD', tipoPiso: 'madeira', piso1: '#B98A5E', piso2: '#AD7F52' });
  const cama = new THREE.Group(); cama.add(rb(1.2, .38, 2.1, '#8A5A36', 0, .22, 0, { r: .05, out: .01 })); cama.add(rb(1.12, .2, 2.0, '#F4F1EA', 0, .48, 0, { r: .08 })); cama.add(rb(1.14, .14, 1.3, o.lencol || '#E2443A', 0, .6, .35, { r: .06 })); cama.add(rb(.7, .16, .38, '#FFFFFF', 0, .64, -.72, { r: .08, out: .006 })); cama.add(rb(1.2, .9, .1, '#8A5A36', 0, .6, -1.05, { r: .04, out: .01 }));
  cama.position.set(-2.2, 0, -4.4); c.add(cama);
  const mesa1 = mesa(c, 2.2, -5.2, 1.5, .7, .76, '#C98B5A'); const cad = cadeira(c, 2.2, -4.5, Math.PI);
  const lum = new THREE.Group(); lum.add(cyl(.12, .14, .04, '#3A3A44', 0, 0, 0)); lum.add(cyl(.015, .015, .4, '#3A3A44', 0, .2, 0)); lum.add(cyl(.08, .16, .16, '#F2C14E', 0, .42, 0, { out: .006 })); lum.position.set(2.75, .8, -5.3); c.add(lum);
  if (o.noite) { const L = new THREE.PointLight('#FFD99A', 6, 5, 1.6); L.position.set(2.7, 1.4, -5.1); c.add(L); }
  const jan = janela(c, -.2, 1.8, -5.88, 1.6, 1.2, { c1: o.noite ? '#1B2550' : '#8CCBF2', c2: o.noite ? '#3A4A8A' : '#DDF2FB', cortina: '#F2C14E' });
  const rel = relogioParede({ cor: '#FFFFFF', aro: '#E2443A' }); rel.position.set(1.6, 2.4, -5.88); c.add(rel);
  // pôster de moto
  quadroParede(c, 3.9, 1.9, -3.4, .9, .65, (x, W, H) => { x.fillStyle = '#F2C14E'; x.fillRect(0, 0, W, H); x.fillStyle = '#E2443A'; x.beginPath(); x.arc(W * .3, H * .7, H * .16, 0, 7); x.arc(W * .72, H * .7, H * .16, 0, 7); x.fill(); x.fillStyle = '#1B1420'; x.fillRect(W * .3, H * .45, W * .45, H * .12); x.font = `900 ${H * .16}px Inter`; x.textAlign = 'center'; x.fillText('UM DIA', W / 2, H * .28); }, -Math.PI / 2);
  // estante com livros, tapete, bolsa térmica no chão, roupa na cadeira, cortina que balança
  const est = new THREE.Group(); est.add(rb(1.1, 1.8, .35, '#8A5A36', 0, .9, 0, { r: .02, out: .008 })); for (let r = 0; r < 3; r++) { est.add(bx(1.0, .03, .3, '#6E4628', 0, .35 + r * .5, .02)); for (let i = 0; i < 7; i++) est.add(bx(.08 + (i % 3) * .02, .3 + (i % 2) * .08, .22, ['#E2443A', '#2E6FB8', '#F2C14E', '#2FA37A', '#8A4FA8', '#F28F6B', '#F4F1EA'][(i + r) % 7], -.4 + i * .13, .53 + r * .5 + (i % 2) * .04, .03)); }
  est.position.set(3.75, 0, -2.4); est.rotation.y = -Math.PI / 2; c.add(est);
  const tap = new THREE.Mesh(new THREE.CircleGeometry(.9, 32), toon('#E8A0B8')); tap.rotation.x = -Math.PI / 2; tap.position.set(0, .012, -3.4); c.add(tap); const tap2 = new THREE.Mesh(new THREE.RingGeometry(.7, .78, 32), toon('#F4F1EA')); tap2.rotation.x = -Math.PI / 2; tap2.position.set(0, .014, -3.4); c.add(tap2);
  c.add(rb(.55, .5, .45, '#E2443A', -.9, .25, -5.5, { r: .06, out: .008 })); c.add(rb(.4, .03, .3, '#F4F1EA', -.9, .5, -5.5));
  c.add(rb(.5, .06, .4, '#2E6FB8', 2.2, .5, -4.35, { r: .03 }));
  const cort = jan.children ? jan : null; if (cort) { const cs = []; jan.traverse((n) => { if (n.isMesh && n.geometry?.parameters?.width === .35) cs.push(n); }); registra(c, (t, T) => cs.forEach((m, i) => { m.rotation.y = .04 * Math.sin(T * 1.1 + i * 2); })); }
  return { C, cama, mesa: mesa1, cad, rel, jan };
}

/** Pizzaria do Seu Jorge (interior): balcão, forno a lenha, cardápio, telefone. */
export function pizzaria(c, o = {}) {
  const C = comodo(c, { w: 11, d: 7, parede: '#F6E7C8', parede2: '#F0DDB4', tipoPiso: 'ladrilho', piso1: '#F4F1EA', piso2: '#E2443A', meiaParede: '#2FA37A' });
  // tijolinho atrás do forno
  const tij = ctex(256, 256, (x) => { x.fillStyle = '#C46A4A'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#B25A3C'; for (let r = 0; r < 16; r++) for (let i = 0; i < 8; i++) x.fillRect(i * 32 + (r % 2) * 16, r * 16, 30, 14); }); tij.wrapS = tij.wrapT = THREE.RepeatWrapping; tij.repeat.set(2, 2);
  const pt = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 3.2), toonTex(tij)); pt.position.set(2.8, 1.6, -6.88); c.add(pt);
  const forno = new THREE.Group(); const dome = new THREE.Mesh(new THREE.SphereGeometry(1.1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), toon('#B25A3C')); dome.castShadow = true; outline(dome, .012); forno.add(dome); forno.add(rb(2.6, 1, 1.8, '#9A4A30', 0, -.5, 0, { r: .05 }));
  const boca = new THREE.Mesh(new THREE.CircleGeometry(.42, 24, 0, Math.PI), new THREE.MeshBasicMaterial({ color: '#FF9A3C' })); boca.position.set(0, 0, 1.0); forno.add(boca);
  const fogo = new THREE.PointLight('#FF9A3C', 4, 5, 1.6); fogo.position.set(0, .3, 1.4); forno.add(fogo); forno.position.set(2.8, 1, -5.9); c.add(forno);
  // balcão
  c.add(rb(5, .74, .9, '#2FA37A', -1.4, .37, -3.6, { r: .05, out: .012 })); c.add(rb(5.1, .07, 1, '#E8E2D6', -1.4, .77, -3.6, { r: .03 }));
  const caixa = rb(.4, .22, .32, '#3A3A44', -3.75, .92, -3.75, { r: .04, out: .008 }); c.add(caixa); c.add(rb(.32, .2, .03, '#8FD3C1', -3.75, 1.12, -3.86, { r: .02 }));
  for (let i = 0; i < 3; i++) { const p = caixaPizza(); p.position.set(.4 + i * .05, .84 + i * .065, -3.6); p.rotation.y = i * .2; c.add(p); }
  // cardápio
  quadroParede(c, -1.6, 2.4, -6.88, 3, 1.1, (x, W, H) => { x.fillStyle = '#1B1420'; x.fillRect(0, 0, W, H); x.fillStyle = '#FFD24A'; x.font = `900 ${H * .2}px Inter`; x.textAlign = 'center'; x.fillText('PIZZARIA DO JORGE', W / 2, H * .25); x.fillStyle = '#F4F1EA'; x.font = `600 ${H * .12}px Inter`; x.textAlign = 'left'; ['CALABRESA ....... 45', 'MUSSARELA ....... 42', 'PORTUGUESA ..... 48', 'FRANGO C/ CAT.. 50'].forEach((l, i) => x.fillText(l, W * .08 + (i % 2) * W * .46, H * (.52 + Math.floor(i / 2) * .22))); });
  const rel = relogioParede(); rel.position.set(-4.6, 2.5, -6.88); c.add(rel);
  // telefone de parede
  const tel = new THREE.Group(); tel.add(rb(.28, .4, .12, '#E2443A', 0, 0, 0, { r: .04, out: .008 })); const fone = rb(.1, .38, .1, '#C8352E', -.2, 0, .04, { r: .04, out: .008 }); tel.add(fone); tel.position.set(-5.3, 1.6, -4.2); tel.rotation.y = Math.PI / 2; c.add(tel); tel.userData.fone = fone;
  // mesinhas
  for (const [x, z] of [[-3.8, -1.2], [-1.0, -.6], [3.6, -1.4]]) { mesa(c, x, z, .9, .9, .74, '#C98B5A'); const tt = new THREE.Mesh(new THREE.PlaneGeometry(.86, .86), toonTex(ctex(64, 64, (q) => { q.fillStyle = '#F4F1EA'; q.fillRect(0, 0, 64, 64); q.fillStyle = '#2FA37A'; for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) if ((i + j) % 2) q.fillRect(i * 8, j * 8, 8, 8); }))); tt.rotation.x = -Math.PI / 2; tt.position.set(x, .785, z); c.add(tt); }
  // luminárias pendentes
  for (const x of [-3, 0, 3]) { c.add(cyl(.01, .01, .8, '#3A3A44', x, 2.8, -3)); c.add(cyl(.12, .3, .25, '#E2443A', x, 2.35, -3, { out: .008 })); }
  chamas(c, 2.8, .98, -4.92, { n: 6, dx: .1, luz: 3 }); vapor(c, 2.8, 1.25, -4.85, { n: 6, tam: .22, alt: 1.2, op: .3, cor: '#E8E2D6' }); ventilador(c, -1.2, 3.2, -1.8);
  // geladeira de bebidas, prateleira de latas, planta, plaquinha ABERTO, fotos
  const gel = new THREE.Group(); gel.add(rb(1.0, 2.0, .7, '#E2443A', 0, 1.0, 0, { r: .05, out: .01 })); const vid = new THREE.Mesh(new THREE.PlaneGeometry(.8, 1.5), toonTex(ctex(128, 240, (x) => { x.fillStyle = '#BFE3F7'; x.fillRect(0, 0, 128, 240); for (let r = 0; r < 4; r++) { x.fillStyle = '#9EA6B0'; x.fillRect(0, 56 + r * 58, 128, 4); for (let i = 0; i < 6; i++) { x.fillStyle = ['#E2443A', '#2FA37A', '#F2A33A', '#2E6FB8', '#3A3A44', '#F4F1EA'][(i + r) % 6]; x.fillRect(6 + i * 20, 14 + r * 58, 14, 40); } } }))); vid.position.set(0, 1.1, .36); gel.add(vid); gel.position.set(-5.0, 0, -6.2); gel.rotation.y = .5; c.add(gel);
  c.add(rb(2.2, .05, .3, '#8A5A36', -1.6, 1.55, -6.8)); for (let i = 0; i < 9; i++) c.add(cyl(.06, .06, .18, ['#E2443A', '#2FA37A', '#F2A33A'][i % 3], -2.5 + i * .22, 1.67, -6.75, { seg: 10, out: .004 }));
  const v1 = vaso(4); v1.position.set(5.0, 0, -2.6); c.add(v1); const v2 = vaso(7); v2.position.set(-5.0, 0, -.6); c.add(v2);
  for (let i = 0; i < 3; i++) quadroParede(c, -5.4, 1.9 + (i % 2) * .5, -2.6 + i * .7, .45, .35, (x, W, H) => { x.fillStyle = ['#F2C14E', '#8FD3C1', '#E8A0B8'][i]; x.fillRect(0, 0, W, H); x.fillStyle = '#C9472F'; x.beginPath(); x.arc(W / 2, H * .55, H * .3, 0, 7); x.fill(); x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(W / 2, H * .55, H * .24, 0, 7); x.fill(); }, Math.PI / 2);
  return { C, forno, rel, tel, caixa };
}
/** Fachada da pizzaria (para cenas de rua). Frente para +z, porta no centro. */
export function fachadaPizzaria(o = {}) {
  const g = new THREE.Group(); const w = 9;
  const tij = ctex(256, 256, (x) => { x.fillStyle = '#F6E7C8'; x.fillRect(0, 0, 256, 256); }); g.add(rb(w, 4.2, 6, '#F6E7C8', 0, 2.1, -3, { r: .05 }));
  const sign = ctex(1024, 200, (x) => { x.fillStyle = '#2FA37A'; x.fillRect(0, 0, 1024, 200); x.fillStyle = '#FFD24A'; x.font = '900 110px Inter'; x.textAlign = 'center'; x.fillText('PIZZARIA DO JORGE', 512, 140); });
  const s = new THREE.Mesh(new THREE.BoxGeometry(w - .6, 1, .2), [toon('#2FA37A'), toon('#2FA37A'), toon('#2FA37A'), toon('#2FA37A'), toonTex(sign), toon('#2FA37A')]); s.position.set(0, 3.5, .12); g.add(s);
  const tol = ctex(512, 128, (x) => { for (let i = 0; i < 12; i++) { x.fillStyle = i % 2 ? '#E2443A' : '#F4F1EA'; x.fillRect(i * 512 / 12, 0, 512 / 12, 128); } });
  const to = new THREE.Mesh(new THREE.PlaneGeometry(w - .6, 1.1), toonTex(tol, { side: THREE.DoubleSide })); to.position.set(0, 2.75, .6); to.rotation.x = -.9; g.add(to);
  const vid = toon(o.noite ? '#FFD98A' : '#8DB8D8'); g.add(rb(2.6, 1.8, .06, vid, -2.6, 1.3, .02, { r: .02 })); g.add(rb(2.6, 1.8, .06, vid, 2.6, 1.3, .02, { r: .02 }));
  const porta = rb(1.3, 2.3, .06, o.noite ? '#FFE3A8' : '#6E9EC0', 0, 1.15, .03, { r: .02 }); g.add(porta);
  g.add(bx(w + .4, .2, 2.5, '#C9C2B6', 0, .1, 1.2));
  if (o.noite) { const L = new THREE.PointLight('#FFD99A', 10, 9, 1.6); L.position.set(0, 2.2, 1.6); g.add(L); }
  return g;
}

/** Corredor/quarto de hospital. */
export function hospital(c, o = {}) {
  const C = comodo(c, { w: 8, d: 6, parede: o.noite ? '#9FB6C8' : '#DDEBF0', parede2: o.noite ? '#93AABD' : '#D2E3EA', tipoPiso: 'grade', piso1: '#E8EEF0', piso2: '#CBD6DA', meiaParede: '#8FC9D8' });
  const cama = new THREE.Group(); cama.add(rb(1.1, .5, 2.1, '#C8CCD2', 0, .4, 0, { r: .05, out: .01 })); cama.add(rb(1.04, .16, 2.0, '#FFFFFF', 0, .72, 0, { r: .07 })); cama.add(rb(1.06, .12, 1.25, o.lencol || '#BFE0EE', 0, .84, .35, { r: .06 })); cama.add(rb(.72, .2, .4, '#FFFFFF', 0, .86, -.7, { r: .09, out: .006 }));
  cama.add(rb(1.1, .7, .06, '#9EA6B0', 0, .85, -1.05, { r: .03, out: .008 })); for (const z of [-.98, .98]) for (const x of [-.48, .48]) cama.add(cyl(.03, .03, .4, '#9EA6B0', x, .2, z, { seg: 8 }));
  cama.position.set(-.6, 0, -3.6); c.add(cama);
  const mon = new THREE.Group(); mon.add(rb(.5, .4, .3, '#3A3A44', 0, 1.35, 0, { r: .04, out: .008 })); const tela = new THREE.Mesh(new THREE.PlaneGeometry(.42, .3), new THREE.MeshBasicMaterial({ color: '#0E2A22' })); tela.position.set(0, 1.35, .16); mon.add(tela); mon.add(cyl(.03, .03, 1.2, '#9EA6B0', 0, .6, 0, { seg: 8 })); mon.position.set(-1.9, 0, -4.5); c.add(mon);
  const jan = janela(c, 1.9, 1.8, -5.88, 1.8, 1.3, { c1: o.c1 || '#8CCBF2', c2: o.c2 || '#DDF2FB', cortina: '#8FC9D8' });
  const rel = relogioParede(); rel.position.set(-.6, 2.45, -5.88); c.add(rel);
  cadeira(c, .5, -3.4, -Math.PI / 2, '#8FC9D8');
  const flor = new THREE.Group(); flor.add(cyl(.08, .06, .2, '#F4F1EA', 0, .1, 0, { out: .005 })); for (let i = 0; i < 3; i++) { flor.add(cyl(.006, .006, .25, '#4C9A44', (i - 1) * .04, .3, 0, { seg: 4 })); flor.add(sph(.045, ['#F28F6B', '#F2C14E', '#E8A0B8'][i], (i - 1) * .05, .44, 0, { seg: 10 })); }
  flor.position.set(1.2, .76, -4.9); c.add(flor); mesa(c, 1.2, -4.9, .6, .5, .76, '#E8E2D6');
  const bate = ecg(tela, { bpm: 64 }); registra(c, (t, T) => bate(T));
  // suporte de soro, cortina divisória, pia, quadro de avisos
  const soro = new THREE.Group(); soro.add(cyl(.025, .025, 2.1, '#C8CCD2', 0, 1.05, 0, { seg: 8 })); soro.add(bx(.5, .03, .03, '#C8CCD2', 0, 2.08, 0)); const bag = rb(.2, .3, .06, '#DDF2FB', .18, 1.85, 0, { r: .04, out: .006 }); soro.add(bag); soro.add(cyl(.006, .006, 1.1, '#DDF2FB', .18, 1.15, 0, { seg: 4 })); for (let i = 0; i < 4; i++) soro.add(cyl(.02, .02, .3, '#9EA6B0', Math.cos(i * 1.57) * .15, .03, Math.sin(i * 1.57) * .15, { seg: 4, rot: [0, 0, Math.PI / 2] })); soro.position.set(-1.6, 0, -3.2); c.add(soro);
  const cort = rb(.06, 2.2, 2.4, '#C9E4EC', -3.4, 1.3, -3.4, { r: .02 }); c.add(cort); for (let i = 0; i < 6; i++) c.add(bx(.08, 2.2, .02, '#B6D6E0', -3.36, 1.3, -4.5 + i * .44));
  c.add(rb(.7, .2, .45, '#F4F1EA', 3.6, .95, -5.6, { r: .05, out: .008 })); c.add(cyl(.02, .02, .25, '#C8CCD2', 3.6, 1.15, -5.75, { seg: 6 }));
  return { C, cama, mon, tela, jan, rel };
}
