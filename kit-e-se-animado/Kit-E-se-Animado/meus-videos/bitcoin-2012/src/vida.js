// Detalhes e vida ambiente: objetos de rua, letreiros, pássaros, vapor, ventilador, monitor cardíaco.
// Tudo que se mexe é registrado em c.userData.vida e roda depois de cada cena (ver mk em lib.js),
// no "tempo do mundo" (tw): depois da semana 6 o mundo fica quase parado para o Augusto.
import * as THREE from 'three';
import { rng } from './motor/core.js';
import { bx, rb, cyl, sph, ctex, toon, toonTex } from './motor/toon.js';

/** Tempo do mundo: normal até a semana 6, quase parado até o fim do hospital, normal de novo no final. */
export function tw(t) { return t; }
export function registra(c, fn) { (c.userData.vida ||= []).push(fn); }

const OUT = { out: .012 };
const placaTex = (txt, bg, fg = '#FFFFFF', w = 512, h = 128, font = 64) => ctex(w, h, (x) => { x.fillStyle = bg; x.fillRect(0, 0, w, h); x.strokeStyle = '#00000033'; x.lineWidth = 8; x.strokeRect(4, 4, w - 8, h - 8); x.fillStyle = fg; x.font = `900 ${font}px Inter`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(txt, w / 2, h / 2 + 4); });

// ---------- objetos de rua ----------
export function lixeira(cor = '#2F8F5B') { const g = new THREE.Group(); g.add(cyl(.22, .19, .8, cor, 0, .4, 0, { seg: 14, ...OUT })); g.add(cyl(.25, .25, .07, '#24724A', 0, .82, 0, { seg: 14 })); g.add(cyl(.03, .03, .9, '#5A6270', -.28, .45, 0, { seg: 6 })); return g; }
export function hidrante() { const g = new THREE.Group(); g.add(cyl(.12, .14, .55, '#D8392F', 0, .28, 0, { seg: 12, ...OUT })); g.add(sph(.13, '#D8392F', 0, .58, 0, { seg: 12 })); g.add(cyl(.05, .05, .32, '#B52C24', 0, .38, 0, { seg: 8, rot: [0, 0, Math.PI / 2] })); return g; }
export function banco() { const g = new THREE.Group(); for (let i = 0; i < 3; i++) g.add(rb(1.5, .05, .12, '#A8743E', 0, .45, -.12 + i * .13, { r: .02 })); for (let i = 0; i < 2; i++) g.add(rb(1.5, .12, .04, '#A8743E', 0, .62 + i * .15, -.2, { r: .015 })); for (const x of [-.6, .6]) g.add(bx(.06, .45, .4, '#3A3A44', x, .22, -.05)); return g; }
export function placaTransito(tipo = 'pare') {
  const g = new THREE.Group(); g.add(cyl(.035, .035, 2.4, '#8A9099', 0, 1.2, 0, { seg: 8 }));
  const t = ctex(256, 256, (x) => { x.translate(128, 128); if (tipo === 'pare') { x.fillStyle = '#D8392F'; x.beginPath(); for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; x.lineTo(120 * Math.cos(a), 120 * Math.sin(a)); } x.fill(); x.strokeStyle = '#fff'; x.lineWidth = 10; x.stroke(); x.fillStyle = '#fff'; x.font = '900 70px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('PARE', 0, 6); }
    else { x.fillStyle = '#fff'; x.beginPath(); x.arc(0, 0, 122, 0, 7); x.fill(); x.strokeStyle = '#D8392F'; x.lineWidth = 26; x.beginPath(); x.arc(0, 0, 106, 0, 7); x.stroke(); x.fillStyle = '#1B1420'; x.font = '900 96px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(tipo, 0, 8); } });
  const m = new THREE.Mesh(new THREE.CircleGeometry(.32, 24), new THREE.MeshToonMaterial({ map: t, transparent: true, side: THREE.DoubleSide })); m.position.set(0, 2.25, .04); g.add(m); return g;
}
export function semaforo() { const g = new THREE.Group(); g.add(cyl(.06, .07, 3.4, '#3A3A44', 0, 1.7, 0, { seg: 8 })); g.add(rb(.32, .9, .26, '#2A2A30', 0, 3.25, .1, { ...OUT }));
  const L = ['#E2443A', '#F2C14E', '#4CC46A'].map((cor, i) => { const m = new THREE.Mesh(new THREE.CircleGeometry(.09, 16), new THREE.MeshBasicMaterial({ color: cor })); m.position.set(0, 3.52 - i * .27, .235); g.add(m); return m; }); g.userData.luzes = L; return g; }
export function bancaJornal(seed = 0) { const g = new THREE.Group(); g.add(rb(2.2, 2.2, 1.6, '#2E6FB8', 0, 1.1, 0, { ...OUT })); g.add(rb(2.5, .12, 1.9, '#25599A', 0, 2.26, .1));
  const t = ctex(512, 256, (x) => { const R = rng(seed + 9); x.fillStyle = '#E8E2D6'; x.fillRect(0, 0, 512, 256); for (let r = 0; r < 3; r++) for (let i = 0; i < 8; i++) { x.fillStyle = ['#E2443A', '#F2C14E', '#8FD3C1', '#E8A0B8', '#9EC1E8', '#F28F6B'][Math.floor(R() * 6)]; x.fillRect(8 + i * 63, 10 + r * 82, 54, 72); x.fillStyle = '#ffffffaa'; x.fillRect(14 + i * 63, 16 + r * 82, 40, 10); } });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 1.1), toonTex(t)); m.position.set(0, 1.3, .81); g.add(m); const p = new THREE.Mesh(new THREE.PlaneGeometry(1.6, .32), toonTex(placaTex('BANCA', '#F2C14E', '#1B1420'))); p.position.set(0, 2.05, .82); g.add(p); return g; }
export function pontoOnibus() { const g = new THREE.Group(); for (const x of [-1.1, 1.1]) g.add(cyl(.05, .05, 2.4, '#8A9099', x, 1.2, -.4, { seg: 8 })); g.add(rb(2.6, .1, 1.2, '#5A6270', 0, 2.45, 0, { ...OUT }));
  const v = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 1.6), new THREE.MeshToonMaterial({ color: '#BFE3F7', transparent: true, opacity: .45 })); v.position.set(0, 1.4, -.45); g.add(v); g.add(rb(2.0, .06, .35, '#A8743E', 0, .48, -.25)); const s = new THREE.Mesh(new THREE.PlaneGeometry(.8, .25), toonTex(placaTex('ÔNIBUS', '#2F7DC4'))); s.position.set(0, 2.62, .61); g.add(s); return g; }
export function vaso(seed = 0) { const R = rng(seed + 21); const g = new THREE.Group(); g.add(cyl(.22, .16, .35, ['#C46A4A', '#E8E2D6', '#8A6A5A'][seed % 3], 0, .18, 0, { seg: 12, ...OUT }));
  for (let i = 0; i < 4; i++) { const b = sph(.16 + R() * .08, ['#4C9A44', '#5DAA4E', '#6DBB57'][i % 3], (R() - .5) * .25, .45 + R() * .2, (R() - .5) * .25, { seg: 8 }); g.add(b); } return g; }
export function bikeParada() { const g = new THREE.Group(); for (const z of [-.45, .45]) { const r = new THREE.Mesh(new THREE.TorusGeometry(.3, .03, 6, 18), toon('#2A2A30')); r.position.set(0, .3, z); r.rotation.y = Math.PI / 2; g.add(r); } g.add(cyl(.02, .02, .9, '#C8392F', 0, .45, 0, { seg: 6, rot: [Math.PI / 2, 0, 0] })); g.add(cyl(.02, .02, .45, '#C8392F', 0, .55, .2, { seg: 6 })); return g; }
export function cone() { const g = new THREE.Group(); g.add(cyl(.02, .16, .5, '#F28F2B', 0, .25, 0, { seg: 12, ...OUT })); g.add(cyl(.12, .12, .07, '#FFFFFF', 0, .25, 0, { seg: 12 })); g.add(bx(.36, .04, .36, '#F28F2B', 0, .02, 0)); return g; }

/** Letreiro de loja (fictícia) num térreo. */
const LOJAS = [['PADARIA', '#C9472F'], ['FARMÁCIA', '#2F8F5B'], ['LANCHES', '#F2A33A'], ['ÓTICA', '#2E6FB8'], ['CAFÉ', '#7A5236'], ['BANCO', '#3A3A44'], ['LIVRARIA', '#8A4FA8'], ['SAPATOS', '#D8577A'], ['CELULARES', '#1F7FA0'], ['MERCADO', '#E2443A']];
export function letreiro(i, w = 5) { const [n, cor] = LOJAS[i % LOJAS.length]; const g = new THREE.Group(); const m = new THREE.Mesh(new THREE.BoxGeometry(w, .9, .2), [toon(cor), toon(cor), toon(cor), toon(cor), toonTex(placaTex(n, cor, '#FFFFFF', 640, 128, 72)), toon(cor)]); g.add(m);
  // toldo listrado
  const tt = ctex(128, 64, (x) => { for (let k = 0; k < 8; k++) { x.fillStyle = k % 2 ? '#FFFFFF' : cor; x.fillRect(k * 16, 0, 16, 64); } }); const a = new THREE.Mesh(new THREE.BoxGeometry(w * .9, .06, 1.3), [toon(cor), toon(cor), toonTex(tt), toon(cor), toon(cor), toon(cor)]); a.position.set(0, -.75, .6); a.rotation.x = .28; g.add(a); return g; }

/** Espalha detalhes nas calçadas ao longo de z. xs = [meio-fio, lado do prédio]. */
export function detalhesRua(c, o = {}) {
  const R = rng(o.seed || 77); const [xc, xp] = o.xs || [12.3, 17.2]; const z0 = o.z0 ?? 22, z1 = o.z1 ?? -180, evita = o.evita || [];
  const tipos = o.bairro ? ['lixeira', 'vaso', 'hidrante', 'placa', 'vaso', 'bike', 'lixeira', 'cone'] : ['lixeira', 'banco', 'hidrante', 'placa', 'banca', 'ponto', 'vaso', 'bike', 'semaforo'];
  const longe = (z) => evita.every(e => Math.abs(((z - e[0]) % e[1] + e[1]) % e[1]) > 1.2 && Math.abs(((z - e[0]) % e[1] + e[1]) % e[1] - e[1]) > 1.2);
  const semaf = [];
  for (const s of [-1, 1]) { let z = z0 - R() * 4;
    while (z > z1) { if (longe(z)) { const tp = tipos[Math.floor(R() * tipos.length)]; let m, x = s * xc, ry = -s * Math.PI / 2;
        if (tp === 'lixeira') m = lixeira(); else if (tp === 'hidrante') m = hidrante(); else if (tp === 'banco') { m = banco(); x = s * (xc + .9); ry = s > 0 ? -Math.PI / 2 : Math.PI / 2; }
        else if (tp === 'placa') m = placaTransito(R() < .5 ? 'pare' : String([30, 40, 50, 60][Math.floor(R() * 4)])); else if (tp === 'banca') { m = bancaJornal(Math.floor(R() * 99)); x = s * (xp - 1.2); }
        else if (tp === 'ponto') { m = pontoOnibus(); x = s * (xc + .8); } else if (tp === 'vaso') { m = vaso(Math.floor(R() * 9)); x = s * (o.bairro ? xp : xp - .3); } else if (tp === 'bike') { m = bikeParada(); x = s * (xc + .4); ry = 0; }
        else if (tp === 'cone') m = cone(); else { m = semaforo(); semaf.push(m); }
        if (tp === 'banca' || tp === 'ponto') ry = s > 0 ? -Math.PI / 2 : Math.PI / 2;
        m.position.set(x, .15, z); m.rotation.y = ry; c.add(m); }
      z -= (o.passo || 7) + R() * (o.passo || 7); } }
  if (semaf.length) registra(c, (t, T) => { const f = Math.floor(T / 6) % 3; semaf.forEach((m, i) => m.userData.luzes.forEach((l, k) => l.material.color.set(k === (f + i) % 3 ? ['#FF5A4A', '#FFD25A', '#5AE07A'][k] : '#2A2A30'))); });
}

/** Bando de pássaros cruzando o céu (ou circulando). */
export function passaros(c, o = {}) {
  const R = rng(o.seed || 5); const n = o.n || 7; const mat = toon('#2A2630', { side: THREE.DoubleSide }); const B = [];
  const geo = new THREE.PlaneGeometry(.55, .22); geo.translate(.27, 0, 0);
  for (let i = 0; i < n; i++) { const g = new THREE.Group(); const L = new THREE.Mesh(geo, mat), Rr = new THREE.Mesh(geo, mat); Rr.rotation.y = Math.PI; g.add(L, Rr); g.add(sph(.09, '#2A2630', 0, 0, 0, { seg: 6 })); g.scale.setScalar(o.escala || 1); c.add(g); B.push({ g, L, Rr, dx: (R() - .5) * 8, dy: (R() - .5) * 3, dz: (R() - .5) * 8, ph: R() * 6 }); }
  const [cx, cy, cz] = o.centro || [0, 22, -40], raio = o.raio || 30, v = o.v || .12;
  registra(c, (t, T) => { B.forEach((b, i) => { const a = T * v + (o.fase || 0); const x = cx + Math.cos(a) * raio + b.dx + Math.sin(T * .7 + b.ph) * .6, z = cz + Math.sin(a) * raio * .5 + b.dz, y = cy + b.dy + Math.sin(T * 1.3 + b.ph) * .4;
    b.g.position.set(x, y, z); b.g.rotation.y = -a + Math.PI; const f = Math.sin(T * 11 + b.ph) * .7; b.L.rotation.x = 0; b.L.rotation.z = f; b.Rr.rotation.z = -f; }); });
}

/** Fumaça/vapor saindo de um ponto (forno, panela, chaleira, bueiro). */
export function vapor(c, x, y, z, o = {}) {
  const tex = ctex(64, 64, (k) => { const gr = k.createRadialGradient(32, 32, 2, 32, 32, 30); gr.addColorStop(0, 'rgba(255,255,255,.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); k.fillStyle = gr; k.fillRect(0, 0, 64, 64); });
  const n = o.n || 8, S = []; for (let i = 0; i < n; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, color: o.cor || '#FFFFFF' })); c.add(s); S.push(s); }
  registra(c, (t, T) => S.forEach((s, i) => { const k = ((T * (o.v || .35) + i / n) % 1); s.position.set(x + Math.sin(T * 1.3 + i) * .06 * (1 + k * 3), y + k * (o.alt || .9), z + Math.cos(T + i * 2) * .04 * (1 + k * 3)); const sc = (o.tam || .18) * (.5 + k * 1.6); s.scale.set(sc, sc, 1); s.material.opacity = (o.op || .45) * Math.sin(k * Math.PI); }));
}
/** Ventilador de teto girando. */
export function ventilador(c, x, y, z) { const g = new THREE.Group(); g.add(cyl(.02, .02, .4, '#5A6270', 0, -.2, 0, { seg: 6 })); g.add(cyl(.12, .1, .14, '#E8E2D6', 0, -.42, 0, { seg: 12, out: .008 })); const p = new THREE.Group(); for (let i = 0; i < 4; i++) { const b = rb(.62, .02, .14, '#A8743E', .38, 0, 0, { r: .01 }); const q = new THREE.Group(); q.add(b); q.rotation.y = i * Math.PI / 2; p.add(q); } p.position.y = -.47; g.add(p); g.traverse((n) => { n.castShadow = false; }); g.position.set(x, y, z); c.add(g); registra(c, (t, T) => { p.rotation.y = T * 7; }); return g; }
/** Fogo dentro do forno (chamas que tremulam). */
export function chamas(c, x, y, z, o = {}) { const G = []; for (let i = 0; i < (o.n || 6); i++) { const m = new THREE.Mesh(new THREE.ConeGeometry(.09, .32, 7), new THREE.MeshBasicMaterial({ color: i % 2 ? '#FFB43A' : '#FF6A2A' })); m.position.set(x + (i - 2.5) * (o.dx || .11), y + .16, z); c.add(m); G.push(m); }
  const L = new THREE.PointLight('#FF8A3A', o.luz ?? 4, 4, 1.8); L.position.set(x, y + .4, z + .3); c.add(L);
  registra(c, (t, T) => { G.forEach((m, i) => { const f = .75 + .35 * Math.sin(T * 9 + i * 1.7) + .15 * Math.sin(T * 23 + i); m.scale.set(1, f, 1); m.position.y = y + .16 * f; }); L.intensity = (o.luz ?? 4) * (.85 + .15 * Math.sin(T * 13)); }); }
/** Linha de batimentos animada num plano (monitor do hospital). */
export function ecg(tela, o = {}) { const cv = document.createElement('canvas'); cv.width = 256; cv.height = 128; const x = cv.getContext('2d'); const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace; tela.material = new THREE.MeshBasicMaterial({ map: tx });
  let last = -1; return (T) => { const f = Math.round(T * 24); if (f === last) return; last = f; x.fillStyle = '#0B231C'; x.fillRect(0, 0, 256, 128); x.strokeStyle = '#1E4A3A'; x.lineWidth = 1; for (let i = 0; i < 256; i += 32) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 128); x.stroke(); }
    x.strokeStyle = '#5CF2A0'; x.lineWidth = 4; x.beginPath(); const bpm = o.bpm || 62, per = 60 / bpm; for (let i = 0; i <= 256; i += 2) { const tt = T - (256 - i) / 256 * 2.4; const ph = ((tt % per) + per) % per / per; let yv = 0; if (ph > .1 && ph < .14) yv = -.12; else if (ph > .18 && ph < .2) yv = .15; else if (ph > .2 && ph < .23) yv = -.9; else if (ph > .23 && ph < .26) yv = .35; else if (ph > .4 && ph < .5) yv = -.15 * Math.sin((ph - .4) / .1 * Math.PI); const yy = 72 + yv * 52; i ? x.lineTo(i, yy) : x.moveTo(i, yy); } x.stroke();
    x.fillStyle = '#5CF2A0'; x.font = '700 22px IBM Plex Mono'; x.fillText(String(bpm), 200, 28); tx.needsUpdate = true; }; }
