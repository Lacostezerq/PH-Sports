// Mundo toon de São Paulo: prédios, ruas, carros, ônibus, árvores, casas da Zona Leste, bicicleta e objetos.
import * as THREE from 'three';
import { rng } from './motor/core.js';
import { toon, toonTex, tm, rb, bx, cyl, sph, rbox, ctex, outline, blob } from './motor/toon.js';

// ---------- texturas ----------
const TC = {};
/** Fachada em grade de janelas. tipo: 'vidro' | 'janelas' | 'concreto'. Repete por andar/coluna. */
export function fachadaTex(tipo = 'janelas', cor = '#E8DCC8', o = {}) {
  const key = tipo + cor + JSON.stringify(o); if (TC[key]) return TC[key];
  const t = ctex(256, 256, (x) => {
    if (tipo === 'vidro') {
      const g = x.createLinearGradient(0, 0, 256, 256); g.addColorStop(0, o.v1 || '#9CC9E8'); g.addColorStop(.55, o.v2 || '#6FA6D2'); g.addColorStop(1, o.v1 || '#9CC9E8'); x.fillStyle = g; x.fillRect(0, 0, 256, 256);
      x.fillStyle = 'rgba(255,255,255,.28)'; x.beginPath(); x.moveTo(30, 256); x.lineTo(130, 0); x.lineTo(175, 0); x.lineTo(75, 256); x.fill();
      x.fillStyle = o.mul || '#46607A'; for (let i = 0; i < 4; i++) { x.fillRect(i * 64, 0, 7, 256); x.fillRect(0, i * 64, 256, 9); }
      if (o.quebrado) { const R = rng(o.quebrado); for (let i = 0; i < 16; i++) { if (R() < .3) continue; const cx = (i % 4) * 64 + 35, cy = Math.floor(i / 4) * 64 + 36; x.fillStyle = '#1D2633'; x.beginPath(); for (let k = 0; k < 9; k++) { const a = k / 9 * 6.283, r = 14 + R() * 16; x.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r * .9); } x.fill(); } }
    } else {
      x.fillStyle = cor; x.fillRect(0, 0, 256, 256);
      x.fillStyle = 'rgba(0,0,0,.06)'; x.fillRect(0, 118, 256, 10); x.fillRect(0, 246, 256, 10);
      for (let r = 0; r < 2; r++) for (let k = 0; k < 2; k++) {
        const wx = k * 128 + 26, wy = r * 128 + 22, ww = 76, wh = 80; const lit = o.noite && ((r * 3 + k * 7 + (o.seed || 0)) % 5 < 2);
        x.fillStyle = 'rgba(0,0,0,.12)'; x.fillRect(wx - 6, wy - 6, ww + 12, wh + 14);
        x.fillStyle = o.noite ? (lit ? '#FFD98A' : '#2B3550') : (o.vj || '#8DB8D8'); x.fillRect(wx, wy, ww, wh);
        if (!o.noite) { x.fillStyle = 'rgba(255,255,255,.35)'; x.beginPath(); x.moveTo(wx + 8, wy + wh); x.lineTo(wx + 40, wy); x.lineTo(wx + 56, wy); x.lineTo(wx + 24, wy + wh); x.fill(); }
        x.fillStyle = o.caixilho || '#F4F1EA'; x.fillRect(wx + ww / 2 - 3, wy, 6, wh); x.fillRect(wx, wy + wh * .55, ww, 5);
        if (o.quebrado && (r + k + o.quebrado) % 3 !== 0) { x.fillStyle = '#1D2633'; x.beginPath(); x.moveTo(wx + 10, wy + 8); x.lineTo(wx + 60, wy + 20); x.lineTo(wx + 50, wy + 70); x.lineTo(wx + 15, wy + 60); x.fill(); }
      }
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; TC[key] = t; return t;
}
/** Prédio. o: {w,d,h,tipo,cor,andar(=3.2),noite,quebrado} — base em y=0. */
export function predio(o) {
  const { w = 12, d = 12, h = 40, tipo = 'janelas', cor = '#E8DCC8' } = o; const an = o.andar || 3.2;
  const base = fachadaTex(tipo, cor, o);
  const mats = [d, d, w, w, w, w].map((len, i) => { if (i === 2 || i === 3) return toon(o.teto || '#B8B2A8'); const t = base.clone(); t.needsUpdate = true; t.repeat.set(Math.max(1, Math.round(len / (an * 2))), Math.max(1, Math.round(h / (an * 2)))); return toonTex(t); });
  const g = new THREE.Group(); const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mats); m.position.y = h / 2; m.castShadow = m.receiveShadow = true; g.add(m);
  g.add(bx(w + .4, .6, d + .4, o.topo || '#D9D2C4', 0, h + .3, 0));
  if (o.terreo !== false) g.add(bx(w + .2, 3.6, d + .2, o.corTerreo || '#4A4E58', 0, 1.8, 0));
  g.userData.mats = mats; g.userData.base = { tipo, cor, o }; return g;
}
/** Troca a fachada de um prédio para a versão quebrada. */
export function quebrarPredio(g, seed = 1) { const { tipo, cor, o } = g.userData.base; const t0 = fachadaTex(tipo, cor, { ...o, quebrado: seed }); g.userData.mats.forEach((m) => { if (m.map) { const r = m.map.repeat.clone(); m.map = t0.clone(); m.map.needsUpdate = true; m.map.repeat.copy(r); } }); }

export function asfaltoTex(faixas = 4, o = {}) {
  const t = ctex(512, 512, (x) => { x.fillStyle = o.cor || '#56585F'; x.fillRect(0, 0, 512, 512); const R = rng(3); for (let i = 0; i < 1500; i++) { x.fillStyle = `rgba(255,255,255,${R() * .05})`; x.fillRect(R() * 512, R() * 512, 3, 3); }
    x.fillStyle = '#F4F1EA'; for (let k = 1; k < faixas; k++) for (let y = 0; y < 512; y += 128) x.fillRect(k * 512 / faixas - 4, y + 20, 8, 70);
    x.fillStyle = '#F2C94C'; if (o.centro) { x.fillRect(250, 0, 5, 512); x.fillRect(258, 0, 5, 512); } });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}
export function calcadaTex(c1 = '#D8D2C8', c2 = '#C9C2B6') { const t = ctex(256, 256, (x) => { x.fillStyle = c1; x.fillRect(0, 0, 256, 256); x.fillStyle = c2; for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) if ((i + j) % 2) x.fillRect(i * 64 + 2, j * 64 + 2, 60, 60); x.strokeStyle = 'rgba(0,0,0,.08)'; x.lineWidth = 3; for (let i = 0; i <= 4; i++) { x.beginPath(); x.moveTo(i * 64, 0); x.lineTo(i * 64, 256); x.stroke(); x.beginPath(); x.moveTo(0, i * 64); x.lineTo(256, i * 64); x.stroke(); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; }
/** Plano de chão texturizado. */
export function chao(c, w, l, mat, x = 0, z = 0, y = 0, rep = [1, 1]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, l), typeof mat === 'string' ? toon(mat) : mat); if (m.material.map) { m.material.map.repeat.set(...rep); } m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); m.receiveShadow = true; c.add(m); return m; }
/** Rua com calçadas ao longo de z. */
export function rua(c, o = {}) {
  const { largura = 14, comp = 200, z = -60, faixas = 4, calc = 5 } = o;
  const at = asfaltoTex(faixas, o); chao(c, largura, comp, toonTex(at), 0, z, 0, [1, comp / largura]);
  const ct = calcadaTex(o.c1, o.c2); for (const s of [-1, 1]) { const m = chao(c, calc, comp, toonTex(ct.clone()), s * (largura / 2 + calc / 2), z, .15, [calc / 2, comp / 2]); m.material.map.needsUpdate = true; c.add(bx(.25, .16, comp, '#B9B2A6', s * (largura / 2 + .12), .08, z)); }
}
/** Faixa de pedestre. */
export function faixaPedestre(c, x, z, w = 14, ang = 0) { const g = new THREE.Group(); for (let i = 0; i < 8; i++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(w / 16, 3), toon('#F4F1EA')); m.rotation.x = -Math.PI / 2; m.position.set(-w / 2 + (i + .5) * w / 8, .012, 0); g.add(m); } g.position.set(x, 0, z); g.rotation.y = ang; c.add(g); return g; }

// ---------- céu ----------
export function ceu(c, topo = '#7EC4F0', base = '#D9F0FA', o = {}) {
  const t = ctex(16, 512, (x) => { const g = x.createLinearGradient(0, 0, 0, 512); g.addColorStop(0, topo); g.addColorStop(.62, base); g.addColorStop(1, o.chao || base); x.fillStyle = g; x.fillRect(0, 0, 16, 512); });
  const m = new THREE.Mesh(new THREE.SphereGeometry(o.r || 420, 32, 16), new THREE.MeshBasicMaterial({ map: t, side: THREE.BackSide, fog: false, depthWrite: false })); m.renderOrder = -10; c.add(m);
  if (o.nuvens !== false && o.n !== 0) for (let i = 0; i < (o.n || 7); i++) { const g = nuvem(i); const a = -1.9 + i * .55 + (o.giro || 0); const rr = (o.r || 420) * .8; g.position.set(Math.sin(a) * rr, 60 + (i % 3) * 25 + (o.alt || 0), -Math.cos(a) * rr); g.scale.setScalar(5 + (i % 3) * 2); g.lookAt(0, g.position.y, 0); c.add(g); }
  return m;
}
export function nuvem(seed = 0) { const g = new THREE.Group(); const R = rng(seed + 11); const m = new THREE.MeshBasicMaterial({ color: '#FFFFFF', fog: false }); for (let i = 0; i < 5; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(1.2 + R() * 1.4, 16, 12), m); s.position.set((i - 2) * 1.8 + R(), R() * 1.2, R() * .8); s.scale.y = .7; g.add(s); } return g; }

// ---------- vegetação e mobiliário ----------
export function arvore(c, x, z, s = 1, seed = 0) {
  const g = new THREE.Group(); g.add(cyl(.16 * s, .22 * s, 2.2 * s, '#7A5236', 0, 1.1 * s, 0, { seg: 10 }));
  const R = rng(seed + 3); const cols = ['#5DAA4E', '#4C9A44', '#6DBB57'];
  for (let i = 0; i < 3; i++) { const b = new THREE.Mesh(new THREE.IcosahedronGeometry((1 + R() * .4) * s, 1), new THREE.MeshToonMaterial({ color: cols[i], gradientMap: toon('#fff').gradientMap, flatShading: true })); b.position.set((R() - .5) * 1.2 * s, (2.6 + R() * .9) * s, (R() - .5) * 1.2 * s); b.castShadow = true; b.receiveShadow = true; g.add(b); }
  g.position.set(x, 0, z); c.add(g); return g;
}
export function poste(c, x, z, lado = 1, noite = false) {
  const g = new THREE.Group(); g.add(cyl(.07, .1, 6, '#5A6270', 0, 3, 0, { seg: 10 })); const br = bx(1.6, .1, .1, '#5A6270', lado * .75, 5.95, 0); g.add(br);
  const l = rb(.5, .14, .3, noite ? '#FFF4C8' : '#E8E4DA', lado * 1.45, 5.85, 0); g.add(l);
  if (noite) { const pl = new THREE.PointLight('#FFD99A', 14, 14, 1.6); pl.position.set(lado * 1.45, 5.5, 0); g.add(pl); }
  g.position.set(x, 0, z); c.add(g); return g;
}

// ---------- veículos ----------
export function carro(cor = '#E2443A', o = {}) {
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  body.add(rb(1.8, .62, 4, cor, 0, .62, 0, { r: .22, out: o.out ? .012 : 0 }));
  body.add(rb(1.55, .55, 2.1, cor, 0, 1.15, -.25, { r: .2, out: o.out ? .012 : 0 }));
  const vid = toon('#33445C'); for (const s of [-1, 1]) { const w = rb(.02, .38, 1.7, vid, s * .78, 1.17, -.25, { r: .01 }); body.add(w); }
  body.add(rb(1.4, .38, .02, vid, 0, 1.17, .82, { r: .01 })); body.add(rb(1.4, .36, .02, vid, 0, 1.17, -1.32, { r: .01 }));
  const farol = new THREE.MeshBasicMaterial({ color: o.noite ? '#FFF6D0' : '#FFF1C8' }); for (const s of [-1, 1]) { const f = new THREE.Mesh(new THREE.SphereGeometry(.13, 12, 8), farol); f.position.set(s * .6, .7, 2); f.scale.z = .4; body.add(f); const tl = new THREE.Mesh(new THREE.BoxGeometry(.32, .14, .04), new THREE.MeshBasicMaterial({ color: '#E23A3A' })); tl.position.set(s * .6, .75, -2.01); body.add(tl); }
  body.add(rb(1.85, .18, .2, '#D8D8DC', 0, .42, 2.02, { r: .06 })); body.add(rb(1.85, .18, .2, '#D8D8DC', 0, .42, -2.02, { r: .06 }));
  const rodas = []; const pneu = new THREE.CylinderGeometry(.36, .36, .26, 20); pneu.rotateZ(Math.PI / 2);
  for (const [a, b] of [[-.86, 1.3], [.86, 1.3], [-.86, -1.3], [.86, -1.3]]) { const w = tm(pneu, '#26262C', { pos: [a, .36, b] }); w.add(tm(new THREE.CylinderGeometry(.18, .18, .28, 12).rotateZ(Math.PI / 2), '#C8CCD2')); g.add(w); rodas.push(w); }
  const sb = blob(1.6, .35); sb.scale.set(1.15, 2.6, 1); sb.position.y = .01; g.add(sb);
  g.userData.rodas = rodas; g.userData.body = body; return g;
}
export function onibus(cor = '#2F7DC4', o = {}) {
  const g = new THREE.Group(); g.add(rb(2.5, 2.6, 11, cor, 0, 1.75, 0, { r: .3 })); g.add(rb(2.52, .9, 10.4, '#33445C', 0, 2.25, -.1, { r: .08 }));
  g.add(rb(2.54, .3, 11.02, '#F4F1EA', 0, 1.25, 0, { r: .1 })); g.add(rb(2.1, 1.2, .05, '#33445C', 0, 2.1, 5.5, { r: .05 }));
  const sign = ctex(256, 48, (x) => { x.fillStyle = '#1B1420'; x.fillRect(0, 0, 256, 48); x.fillStyle = '#FFB84A'; x.font = '700 30px Inter'; x.textAlign = 'center'; x.fillText(o.letreiro || 'RADIAL LESTE', 128, 35); });
  const s = new THREE.Mesh(new THREE.PlaneGeometry(1.8, .34), new THREE.MeshBasicMaterial({ map: sign })); s.position.set(0, 2.85, 5.52); g.add(s);
  const pneu = new THREE.CylinderGeometry(.5, .5, .4, 18); pneu.rotateZ(Math.PI / 2); const rodas = [];
  for (const [a, b] of [[-1.15, 3.6], [1.15, 3.6], [-1.15, -3.4], [1.15, -3.4]]) { const w = tm(pneu, '#26262C', { pos: [a, .5, b] }); g.add(w); rodas.push(w); }
  const sb = blob(2, .35); sb.scale.set(1.3, 5.6, 1); sb.position.y = .01; g.add(sb); g.userData.rodas = rodas; return g;
}
export function moto(cor = '#E2443A') {
  const g = new THREE.Group(); const pneu = new THREE.TorusGeometry(.3, .09, 10, 24); pneu.rotateY(Math.PI / 2);
  for (const z of [-.6, .6]) g.add(tm(pneu, '#26262C', { pos: [0, .38, z], out: .008 }));
  g.add(rb(.35, .35, 1.0, cor, 0, .78, 0, { r: .12, out: .01 })); g.add(rb(.3, .12, .6, '#26262C', 0, 1.0, -.2, { r: .05 })); g.add(cyl(.03, .03, .7, '#8A8E96', 0, 1.05, .52, { rot: [0, 0, Math.PI / 2] }));
  return g;
}

/** Bicicleta (rodas giram com u). Assento em y≈.46, pedais em torno de y≈.17. */
export function bicicleta(cor = '#2FA37A') {
  const g = new THREE.Group(); const R = .3; const pneu = new THREE.TorusGeometry(R, .035, 10, 32); pneu.rotateY(Math.PI / 2);
  const rodas = []; for (const z of [-.5, .5]) { const w = new THREE.Group(); w.position.set(0, R + .035, z); w.add(tm(pneu, '#26262C', { out: .006 })); for (let i = 0; i < 4; i++) { const s = cyl(.006, .006, R * 2, '#B8BCC4', 0, 0, 0, { seg: 4 }); s.rotation.x = i * Math.PI / 4; w.add(s); } g.add(w); rodas.push(w); }
  const tubo = (a, b, r = .025) => { const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b); const L = A.distanceTo(B); const m = cyl(r, r, L, cor, 0, 0, 0, { seg: 10, out: .006 }); m.position.copy(A).add(B).multiplyScalar(.5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.clone().sub(A).normalize()); g.add(m); };
  const cr = [0, .2, 0], se = [0, .5, -.12], hd = [0, .62, .38], fr = [0, R + .035, .5], bk = [0, R + .035, -.5];
  tubo(cr, se); tubo(se, hd); tubo(cr, hd); tubo(cr, bk); tubo(se, bk); tubo(hd, fr);
  g.add(rb(.12, .05, .24, '#26262C', 0, .53, -.14, { r: .02, out: .006 }));
  g.add(cyl(.018, .018, .5, '#3A3A40', 0, .66, .38, { rot: [0, 0, Math.PI / 2], out: .006 }));
  const pedal = new THREE.Group(); pedal.position.set(0, .2, 0); for (const s of [-1, 1]) { const arm = bx(.02, .14, .03, '#3A3A40', s * .06, s * .07, 0); pedal.add(arm); pedal.add(rb(.08, .02, .05, '#26262C', s * .09, s * .14, 0, { r: .008 })); } g.add(pedal);
  const sb = blob(.8, .3); sb.scale.set(.6, 1.4, 1); sb.position.y = .006; g.add(sb);
  g.userData = { rodas, pedal }; return g;
}
export function girarBike(b, dist, tempo) { b.userData.rodas.forEach(w => w.rotation.x = dist / .335); b.userData.pedal.rotation.x = dist / .335 * .55; }

// ---------- objetos ----------
export function caixaPizza(sabor = 'CALABRESA') {
  const t = ctex(256, 256, (x) => { x.fillStyle = '#E8D3AE'; x.fillRect(0, 0, 256, 256); x.strokeStyle = '#C8AC80'; x.lineWidth = 6; x.strokeRect(10, 10, 236, 236); x.fillStyle = '#E2443A'; x.beginPath(); x.arc(128, 100, 52, 0, 7); x.fill(); x.fillStyle = '#FFD24A'; x.beginPath(); x.moveTo(128, 66); x.lineTo(98, 128); x.lineTo(158, 128); x.fill(); x.fillStyle = '#B8322B'; x.font = '900 30px Inter'; x.textAlign = 'center'; x.fillText(sabor, 128, 200); x.font = '700 18px Inter'; x.fillText('PIZZARIA DO JORGE', 128, 228); });
  const top = toonTex(t), side = toon('#DCC49C'); const m = new THREE.Mesh(rbox(.36, .06, .36, .012), [side, side, top, side, side, side]); m.castShadow = true; outline(m, .006); return m;
}
export function bolsaTermica() { const t = ctex(256, 256, (x) => { x.fillStyle = '#E2443A'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#FFD24A'; x.beginPath(); x.moveTo(128, 200); x.lineTo(78, 80); x.quadraticCurveTo(128, 50, 178, 80); x.closePath(); x.fill(); x.fillStyle = '#F4F1EA'; x.font = '900 26px Inter'; x.textAlign = 'center'; x.fillText('JORGE', 128, 240); });
  const s = toon('#C8352E'), f = toonTex(t); const m = new THREE.Mesh(rbox(.42, .42, .3, .05), [s, s, s, s, f, s]); m.castShadow = true; outline(m, .008); return m; }
/** Celular com tela pintada (paint(fn) troca a tela quando a chave muda). */
export function celular(w = .1, h = .2) {
  const g = new THREE.Group(); g.add(rb(w, h, .016, '#1E1E26', 0, 0, 0, { r: .012, out: .005 }));
  const cv = document.createElement('canvas'); cv.width = 270; cv.height = 540; const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Mesh(new THREE.PlaneGeometry(w * .88, h * .9), new THREE.MeshBasicMaterial({ map: t })); s.position.z = .0085; g.add(s);
  let last = ''; g.paint = (key, fn) => { if (key !== last) { last = key; fn(x, 270, 540); t.needsUpdate = true; } return g; }; return g;
}
export function relogioParede(o = {}) {
  const g = new THREE.Group(); g.add(cyl(.32, .32, .06, o.cor || '#F4F1EA', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], out: .01 })); g.add(cyl(.34, .34, .05, o.aro || '#3A3A44', 0, 0, -.02, { rot: [Math.PI / 2, 0, 0] }));
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; g.add(bx(.02, i % 3 ? .03 : .06, .01, '#3A3A44', Math.sin(a) * .26, Math.cos(a) * .26, .035)); }
  const ph = new THREE.Group(), pm = new THREE.Group(), ps = new THREE.Group(); [ph, pm, ps].forEach(p => { p.position.z = .04; g.add(p); });
  ph.add(bx(.03, .16, .01, '#1B1420', 0, .07, 0)); pm.add(bx(.02, .24, .01, '#1B1420', 0, .11, .005)); ps.add(bx(.008, .25, .01, '#E2443A', 0, .1, .01)); g.add(sph(.025, '#1B1420', 0, 0, .05));
  g.set = (h, m, s = 0) => { ph.rotation.z = -((h % 12) + m / 60) / 12 * Math.PI * 2; pm.rotation.z = -(m + s / 60) / 60 * Math.PI * 2; ps.rotation.z = -s / 60 * Math.PI * 2; return g; };
  g.set(10, 10); return g;
}
/** Casa simples da Zona Leste: térreo pintado, laje com caixa d'água, portão. Frente para +z. */
export function casaZL(seed = 0, o = {}) {
  const R = rng(seed + 5); const cores = ['#F2C14E', '#8FD3C1', '#F28F6B', '#B9D98C', '#F4E3C1', '#9EC1E8', '#E8A0B8']; const cor = o.cor || cores[Math.floor(R() * cores.length)];
  const w = o.w || 7, d = o.d || 8, h1 = 3.2; const g = new THREE.Group();
  const tf = fachadaTex('janelas', cor, { vj: '#7FA6C4', caixilho: '#F4F1EA', noite: o.noite, seed });
  const mat = toonTex((() => { const t = tf.clone(); t.needsUpdate = true; t.repeat.set(Math.max(1, Math.round(w / 6)), 1); return t; })());
  const corpo = new THREE.Mesh(new THREE.BoxGeometry(w, h1, d), [toon(cor), toon(cor), toon('#C9C2B6'), toon(cor), mat, toon(cor)]); corpo.position.y = h1 / 2; corpo.castShadow = corpo.receiveShadow = true; g.add(corpo);
  if (o.andar !== false && R() < .7) { const tij = ctex(256, 256, (x) => { x.fillStyle = '#C46A4A'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#B25A3C'; for (let r = 0; r < 16; r++) for (let i = 0; i < 8; i++) x.fillRect(i * 32 + (r % 2) * 16, r * 16, 30, 14); }); tij.wrapS = tij.wrapT = THREE.RepeatWrapping; tij.repeat.set(2, 1); const m2 = new THREE.Mesh(new THREE.BoxGeometry(w * .7, 2.8, d * .7), toonTex(tij)); m2.position.set(-w * .15, h1 + 1.4, -d * .1); m2.castShadow = true; g.add(m2); }
  g.add(bx(w + .3, .25, d + .3, '#D9D2C4', 0, h1 + .12, 0));
  g.add(cyl(.55, .5, .9, '#3E7CC8', w * .3, h1 + .7, -d * .25, { seg: 16 })); g.add(cyl(.6, .6, .12, '#2F68AE', w * .3, h1 + 1.2, -d * .25, { seg: 16 }));
  g.add(rb(1.1, 2.2, .1, o.porta || '#7A5236', -w * .25, 1.1, d / 2 + .02, { r: .03 }));
  // muro e portão
  g.add(bx(w, 1.3, .2, '#E8E2D6', 0, .65, d / 2 + 2.2)); const pt = new THREE.Group(); for (let i = 0; i < 9; i++) pt.add(bx(.05, 1.8, .05, '#3A3A44', -1 + i * .25, .9, 0)); pt.add(bx(2.1, .06, .06, '#3A3A44', 0, 1.78, 0)); pt.add(bx(2.1, .06, .06, '#3A3A44', 0, .3, 0)); pt.position.set(-w * .25, 0, d / 2 + 2.25); g.add(pt);
  return g;
}
/** Placa de rua (nome). */
export function placaRua(texto, cor = '#2E6FB8') { const t = ctex(512, 128, (x) => { x.fillStyle = cor; x.fillRect(0, 0, 512, 128); x.strokeStyle = '#F4F1EA'; x.lineWidth = 8; x.strokeRect(10, 10, 492, 108); x.fillStyle = '#F4F1EA'; x.font = '800 54px Inter'; x.textAlign = 'center'; x.fillText(texto, 256, 84); }); const g = new THREE.Group(); g.add(cyl(.05, .05, 3, '#5A6270', 0, 1.5, 0, { seg: 8 })); const p = new THREE.Mesh(new THREE.BoxGeometry(1.6, .4, .04), [toon(cor), toon(cor), toon(cor), toon(cor), toonTex(t), toonTex(t)]); p.position.y = 3.05; g.add(p); return g; }
