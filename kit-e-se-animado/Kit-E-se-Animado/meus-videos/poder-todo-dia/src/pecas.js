// Peças deste vídeo: Paçoca (cachorro que fala), balões de pensamento, bilhete do espelho, relógios,
// pombos, objetos (coxinha, linguiça, caneca, mochila), fantasma (invisível) e poses de voo.
import * as THREE from 'three';
import { toon, tm, rb, bx, cyl, sph, ctex, toonTex, outline } from './motor/toon.js';
import { rng, clamp, smooth } from './motor/core.js';
import { boca } from './fala.js';

const INK = '#1B1420';
// ---------------------------------------------------------------- PAÇOCA
/** Vira-lata caramelo, orelha esquerda dobrada, boca que fala (sincronizada com a voz 'pacoca'). */
export function pacoca(escala = 1) {
  const g = new THREE.Group(), cor = '#C98A4A', claro = '#E8C090', esc = '#9A6230';
  const corpo = new THREE.Group(); g.add(corpo);
  const tronco = rb(.66, .32, .3, cor, 0, .44, 0, { out: .012, r: .13 }); corpo.add(tronco);
  corpo.add(rb(.4, .12, .26, claro, .02, .3, 0, { r: .05 })); // barriga
  // pescoço + cabeça
  const pesc = new THREE.Group(); pesc.position.set(.3, .55, 0); corpo.add(pesc);
  pesc.add(cyl(.09, .11, .22, cor, .04, .08, 0, { seg: 12, rot: [0, 0, -.5], out: .01 }));
  const cab = new THREE.Group(); cab.position.set(.12, .22, 0); pesc.add(cab);
  cab.add(tm(new THREE.SphereGeometry(.15, 24, 18), cor, { out: .012, pos: [0, 0, 0] }));
  cab.children[0].scale.set(1.05, .95, .95);
  // focinho (parte de cima) e mandíbula (abre quando fala)
  cab.add(rb(.16, .08, .15, claro, .15, -.03, 0, { out: .01, r: .04 }));
  cab.add(sph(.035, INK, .235, .0, 0, { seg: 12 }));
  const mand = new THREE.Group(); mand.position.set(.08, -.06, 0); cab.add(mand);
  mand.add(rb(.15, .045, .13, claro, .07, -.02, 0, { out: .01, r: .02 }));
  const lingua = rb(.08, .02, .07, '#E8707A', .09, .005, 0, { r: .01 }); mand.add(lingua);
  const boc = rb(.13, .03, .11, '#5A2A2A', .08, .02, 0, { r: .01 }); mand.add(boc);
  // olhos com pupila (olham) e sobrancelhas
  const olhos = [];
  for (const s of [-1, 1]) { const o = new THREE.Group(); o.position.set(.1, .05, s * .075); cab.add(o); o.add(sph(.038, '#FFFFFF', 0, 0, 0, { seg: 14 })); const p = sph(.024, INK, .02, 0, 0, { seg: 12 }); o.add(p); o.add(sph(.008, '#FFFFFF', .035, .01, -.006 * s, { seg: 8 })); olhos.push({ o, p });
    const sb = bx(.012, .012, .06, esc, .12, .1, s * .075); sb.userData.s = s; cab.add(sb); olhos.push({ sb }); }
  // orelhas: a esquerda dobrada
  const orE = new THREE.Group(); orE.position.set(-.03, .1, -.11); cab.add(orE); orE.add(rb(.1, .16, .04, esc, 0, .05, 0, { r: .02, out: .008 })); orE.rotation.set(-.4, 0, .9);
  const orD = new THREE.Group(); orD.position.set(-.03, .12, .11); cab.add(orD); orD.add(rb(.1, .17, .04, esc, 0, .08, 0, { r: .02, out: .008 })); orD.rotation.set(.35, 0, -.1);
  // rabo
  const rabo = new THREE.Group(); rabo.position.set(-.32, .52, 0); corpo.add(rabo); rabo.add(cyl(.025, .04, .3, cor, 0, .14, 0, { seg: 8, out: .008 })); rabo.rotation.z = .7;
  // patas
  const pernas = [];
  for (const [x, z, tras] of [[.22, .09, 0], [.22, -.09, 0], [-.22, .09, 1], [-.22, -.09, 1]]) { const p = new THREE.Group(); p.position.set(x, .34, z); p.add(cyl(.042, .036, .32, cor, 0, -.16, 0, { seg: 8, out: .008 })); p.add(sph(.05, claro, .02, -.32, 0, { seg: 10 })); corpo.add(p); pernas.push({ p, tras }); }
  // coleira
  pesc.add(tm(new THREE.TorusGeometry(.1, .018, 8, 18), '#E2443A', { pos: [.02, .02, 0], rot: [0, 0, Math.PI / 2 - .5] }));
  g.scale.setScalar(escala);
  const sombra = new THREE.Mesh(new THREE.CircleGeometry(.34, 20), new THREE.MeshBasicMaterial({ color: '#140F1E', transparent: true, opacity: .3, depthWrite: false })); sombra.rotation.x = -Math.PI / 2; sombra.position.y = .006; g.add(sombra);
  /** o: { sentado, anda, abana, olhar:[x,y], cabeca, fala (usa a voz), aberta (0-1), feliz } */
  const P = { g, cab, anima(t, o = {}) {
    const b = o.fala !== false ? boca('pacoca', t) : { open: 0 }; const ab = Math.max(o.aberta || 0, b.open || 0);
    mand.rotation.z = -ab * .55; lingua.visible = ab > .15 || o.feliz;
    rabo.rotation.x = Math.sin(t * (o.abana ? 16 : 5)) * (o.abana ? .7 : .25); rabo.rotation.z = .7 + (o.abana ? .25 : 0);
    const sent = o.sentado ? 1 : 0;
    corpo.rotation.z = sent * .55; corpo.position.y = -sent * .08; corpo.position.x = sent * .05;
    pernas.forEach(({ p, tras }, i) => { if (o.anda) p.rotation.z = Math.sin(t * 9 + (i % 2 ? 0 : Math.PI) + (tras ? Math.PI : 0)) * .45; else p.rotation.z = tras ? -sent * 1.3 : -sent * .55; });
    const ol = o.olhar || [Math.sin(t * .6) * .3, 0]; for (const e of olhos) { if (e.p) { e.p.position.z = ol[0] * .012; e.p.position.y = ol[1] * .012; } if (e.sb) { e.sb.rotation.x = (o.bravo ? .5 : o.triste ? -.4 : 0) * e.sb.userData.s; e.sb.position.y = .1 + (o.surpreso ? .02 : 0); } }
    cab.rotation.z = (o.cabeca?.[0] ?? (Math.sin(t * 1.3) * .06 + ab * .12)); cab.rotation.x = o.cabeca?.[1] ?? Math.sin(t * .9) * .1;
    orD.rotation.z = -.1 + Math.sin(t * 3) * .06 + ab * .1;
    corpo.position.y += o.anda ? Math.abs(Math.sin(t * 9)) * .015 : Math.sin(t * 2.2) * .004;
  } };
  return P;
}

// ---------------------------------------------------------------- BALÕES
const nuvem = (x, w, h, cor, borda) => { x.fillStyle = cor; x.strokeStyle = borda; x.lineWidth = 8; x.beginPath(); const cx = w / 2, cy = h * .42, rx = w * .44, ry = h * .32;
  for (let i = 0; i <= 12; i++) { const a = i / 12 * Math.PI * 2, px = cx + Math.cos(a) * rx, py = cy + Math.sin(a) * ry; x.moveTo(px + 38, py); x.arc(px, py, 38, 0, Math.PI * 2); } x.fill();
  x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, 7); x.fill(); x.stroke();
  x.beginPath(); x.ellipse(cx, cy, rx - 4, ry - 4, 0, 0, 7); x.fill();
  for (const [px, py, r] of [[cx - w * .18, h * .84, 20], [cx - w * .25, h * .94, 12]]) { x.beginPath(); x.arc(px, py, r, 0, 7); x.fill(); x.stroke(); } };
/** Balão com texto ou ícone. tipo 'pensa' (nuvem), 'cinza' (pensamento triste), 'fala'. */
export function balao(conteudo, o = {}) {
  const W = o.w || 640, H = o.h || 360, tipo = o.tipo || 'pensa';
  const t = ctex(W, H, (x) => {
    const cor = tipo === 'cinza' ? '#D7D9DE' : '#FFFFFF', bord = tipo === 'cinza' ? '#8A8F99' : INK;
    if (tipo === 'fala') { x.fillStyle = cor; x.strokeStyle = bord; x.lineWidth = 8; x.beginPath(); x.roundRect(20, 20, W - 40, H * .72, 60); x.fill(); x.stroke(); x.beginPath(); x.moveTo(W * .3, H * .72 + 16); x.lineTo(W * .22, H - 10); x.lineTo(W * .42, H * .72 + 16); x.fill(); x.stroke(); }
    else nuvem(x, W, H, cor, bord);
    if (typeof conteudo === 'function') conteudo(x, W, H);
    else { x.fillStyle = tipo === 'cinza' ? '#4A4F5A' : INK; x.textAlign = 'center'; x.textBaseline = 'middle'; let fs = o.fs || 56; x.font = `800 ${fs}px Inter, Arial`;
      const linhas = String(conteudo).split('\n'); while (Math.max(...linhas.map(l => x.measureText(l).width)) > W * .72 && fs > 20) { fs -= 2; x.font = `800 ${fs}px Inter, Arial`; }
      linhas.forEach((l, i) => x.fillText(l, W / 2, H * .42 + (i - (linhas.length - 1) / 2) * fs * 1.15)); }
  });
  const m = new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, depthTest: o.depthTest ?? true }); const s = new THREE.Sprite(m); const sc = o.tam || 1.4; s.scale.set(sc, sc * H / W, 1); s.renderOrder = 20; s.userData.base = sc; s.center.set(.5, .2);
  return s;
}
/** Anima entrada (pop) e saída (some como fumaça) do balão entre ta e tb. */
export function balaoAnim(s, t, ta, tb, o = {}) {
  const ent = clamp((t - ta) / .28), sai = clamp((t - tb) / (o.saida || .5)); const pop = ent < 1 ? Math.sin(ent * Math.PI * .5) * (1 + .12 * Math.sin(ent * Math.PI)) : 1;
  s.visible = t > ta && sai < 1; s.material.opacity = (1 - sai) * Math.min(1, ent * 2);
  const k = s.userData.base * pop * (1 + sai * .4) * (1 + Math.sin(t * 2 + ta) * .015); s.scale.set(k, k * s.material.map.image.height / s.material.map.image.width, 1);
  s.position.y = (s.userData.y0 ?? s.position.y) + sai * .4 + Math.sin(t * 1.6 + ta) * .02; if (s.userData.y0 === undefined) s.userData.y0 = s.position.y;
}
// ícones de pensamento
export const ICONE = {
  hamburguer: (x, W, H) => { const cx = W / 2, cy = H * .42; x.fillStyle = '#E2A630'; x.beginPath(); x.ellipse(cx, cy - 34, 110, 52, 0, Math.PI, 0); x.fill(); x.fillStyle = '#5AA84E'; x.fillRect(cx - 115, cy - 30, 230, 18); x.fillStyle = '#7A3A20'; x.fillRect(cx - 108, cy - 12, 216, 32); x.fillStyle = '#F2C230'; x.fillRect(cx - 112, cy + 18, 224, 12); x.fillStyle = '#E2A630'; x.beginPath(); x.roundRect(cx - 108, cy + 28, 216, 34, 16); x.fill(); x.fillStyle = '#F4F1EA'; for (let i = 0; i < 6; i++) { x.beginPath(); x.ellipse(cx - 60 + i * 24, cy - 58 + (i % 2) * 10, 5, 3, .4, 0, 7); x.fill(); } },
  cama: (x, W, H) => { const cx = W / 2, cy = H * .45; x.fillStyle = '#7A5233'; x.fillRect(cx - 130, cy - 60, 20, 110); x.fillStyle = '#3E7CC8'; x.fillRect(cx - 110, cy - 10, 240, 50); x.fillStyle = '#FFFFFF'; x.beginPath(); x.roundRect(cx - 105, cy - 40, 70, 34, 12); x.fill(); x.fillStyle = INK; x.font = '900 60px Inter'; x.textAlign = 'center'; x.fillText('Zzz', cx + 60, cy - 50); },
  conta: (x, W, H) => { const cx = W / 2, cy = H * .42; x.fillStyle = '#F4F1EA'; x.strokeStyle = INK; x.lineWidth = 6; x.beginPath(); x.roundRect(cx - 95, cy - 90, 190, 170, 10); x.fill(); x.stroke(); x.fillStyle = '#F2C230'; x.beginPath(); x.moveTo(cx - 10, cy - 70); x.lineTo(cx - 40, cy - 10); x.lineTo(cx - 8, cy - 10); x.lineTo(cx - 26, cy + 40); x.lineTo(cx + 30, cy - 26); x.lineTo(cx, cy - 26); x.closePath(); x.fill(); x.stroke(); x.fillStyle = '#E2443A'; x.font = '900 40px Inter'; x.textAlign = 'center'; x.fillText('R$ 287', cx + 30, cy + 68); },
  pizza: (x, W, H) => { const cx = W / 2, cy = H * .42; x.fillStyle = '#E8B060'; x.beginPath(); x.moveTo(cx, cy + 80); x.lineTo(cx - 100, cy - 70); x.quadraticCurveTo(cx, cy - 110, cx + 100, cy - 70); x.closePath(); x.fill(); x.fillStyle = '#F2C230'; x.beginPath(); x.moveTo(cx, cy + 60); x.lineTo(cx - 80, cy - 55); x.quadraticCurveTo(cx, cy - 85, cx + 80, cy - 55); x.fill(); x.fillStyle = '#C84E4E'; for (const [a, b] of [[-30, -40], [25, -30], [0, 10]]) { x.beginPath(); x.arc(cx + a, cy + b, 14, 0, 7); x.fill(); } },
  coracao: (x, W, H) => { const cx = W / 2, cy = H * .45; x.fillStyle = '#F2546E'; x.beginPath(); x.moveTo(cx, cy + 70); x.bezierCurveTo(cx - 130, cy - 10, cx - 60, cy - 110, cx, cy - 40); x.bezierCurveTo(cx + 60, cy - 110, cx + 130, cy - 10, cx, cy + 70); x.fill(); },
  relogio: (x, W, H) => { const cx = W / 2, cy = H * .42; x.fillStyle = '#FFFFFF'; x.strokeStyle = INK; x.lineWidth = 10; x.beginPath(); x.arc(cx, cy, 80, 0, 7); x.fill(); x.stroke(); x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx, cy - 55); x.moveTo(cx, cy); x.lineTo(cx + 40, cy + 10); x.stroke(); },
};

// ---------------------------------------------------------------- BILHETE DO ESPELHO
const TXT1 = ['Sete dias.', 'Um poder diferente por dia.', 'No domingo, você escolhe', 'um pra ficar pra sempre.', 'Escolha errado e você vai', 'passar a vida inteira...'];
const TXT2 = ['procurando um poder que', 'você já tinha.'];
/** Bilhete escrito à mão. estado: 'rasgado' | 'inteiro'. nenhum: 0..1 (quanto do "Nenhum" já foi escrito). passa: mostra "Agora passa pra frente" + nome borrado. */
export function bilheteTex(o = {}) {
  const k = JSON.stringify(o);
  return ctex(768, 1024, (x, W, H) => {
    x.clearRect(0, 0, W, H);
    const fim = o.estado === 'inteiro' ? H - 40 : H * .62;
    // papel com borda rasgada
    x.fillStyle = '#FBF6E8'; x.beginPath(); x.moveTo(30, 30); x.lineTo(W - 30, 30); x.lineTo(W - 30, fim);
    if (o.estado !== 'inteiro') { const R = rng(7); for (let px = W - 30; px > 30; px -= 26) x.lineTo(px, fim + (R() - .5) * 36); } else x.lineTo(30, fim);
    x.lineTo(30, 30); x.fill();
    x.strokeStyle = 'rgba(90,120,180,.25)'; x.lineWidth = 2; for (let y = 130; y < fim - 10; y += 62) { x.beginPath(); x.moveTo(50, y); x.lineTo(W - 50, y); x.stroke(); }
    x.fillStyle = '#E2443A'; x.fillRect(90, 30, 3, fim - 30);
    x.fillStyle = '#1F2A55'; x.textBaseline = 'alphabetic'; x.font = '700 50px Caveat, cursive';
    TXT1.forEach((l, i) => x.fillText(l, 110, 118 + i * 62));
    if (o.estado === 'inteiro') { x.fillStyle = '#1F2A55'; TXT2.forEach((l, i) => x.fillText(l, 110, 118 + (6 + i) * 62)); }
    if (o.nenhum) { // escrita aparecendo da esquerda para a direita
      x.save(); x.beginPath(); x.rect(100, 0, 40 + 330 * o.nenhum, H); x.clip(); x.fillStyle = '#2A2A30'; x.font = '700 78px Caveat, cursive'; x.fillText('Nenhum.', 160, o.estado === 'inteiro' ? 118 + 9 * 62 : 118 + 7 * 62 - 6); x.restore(); }
    if (o.passa) { x.fillStyle = '#3A2A20'; x.font = '700 58px Caveat, cursive'; x.fillText('Agora passa pra frente.', 110, H - 190); x.filter = 'blur(7px)'; x.fillStyle = '#2A2A30'; x.font = '700 70px Caveat, cursive'; x.fillText('Para: ____________', 140, H - 90); x.filter = 'none'; }
  });
}
/** Bilhete 3D (papel com fita crepe). Use setTex para trocar o estado. */
export function bilhete(o = {}) {
  const g = new THREE.Group(); const m = new THREE.MeshToonMaterial({ map: bilheteTex(o), transparent: true, alphaTest: .05, side: THREE.DoubleSide, emissive: '#FFFFFF', emissiveIntensity: .12 });
  const p = new THREE.Mesh(new THREE.PlaneGeometry(.42, .56), m); g.add(p); const fita = bx(.13, .035, .004, '#E8D8A8', 0, .27, .004); fita.rotation.z = .12; g.add(fita);
  g.userData.mat = m; g.setTex = (o2) => { const old = m.map; m.map = bilheteTex(o2); m.needsUpdate = true; if (old) old.dispose(); }; return g;
}
/** Espelho de parede com moldura (o vidro reflete o céu de leve; é decorativo). */
export function espelho(w = .7, h = 1.1) { const g = new THREE.Group(); g.add(rb(w + .1, h + .1, .04, '#7A5233', 0, 0, 0, { out: .01 })); const v = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshToonMaterial({ color: '#BCD8E6', emissive: '#9CC4DA', emissiveIntensity: .35 })); v.position.z = .022; g.add(v); const r = new THREE.Mesh(new THREE.PlaneGeometry(w * .2, h), new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: .25 })); r.position.set(-w * .2, 0, .024); r.rotation.z = .3; g.add(r); return g; }

// ---------------------------------------------------------------- RELÓGIOS
/** Despertador analógico (h = hora 0-24 fixa ou função do tempo). */
export function despertador() { const g = new THREE.Group(); g.add(cyl(.1, .1, .07, '#E2443A', 0, .12, 0, { rot: [Math.PI / 2, 0, 0], out: .008 })); for (const s of [-1, 1]) { g.add(sph(.035, '#C9CED6', s * .06, .22, 0)); g.add(bx(.012, .06, .012, '#2A2A30', s * .07, .03, 0)); }
  const f = new THREE.Mesh(new THREE.CircleGeometry(.085, 24), new THREE.MeshBasicMaterial({ map: ctex(128, 128, (x) => { x.fillStyle = '#FFF'; x.beginPath(); x.arc(64, 64, 63, 0, 7); x.fill(); x.fillStyle = INK; for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; x.fillRect(64 + Math.cos(a) * 52 - 3, 64 + Math.sin(a) * 52 - 3, 6, 6); } }) })); f.position.set(0, .12, .036); g.add(f);
  const ph = new THREE.Group(), pm = new THREE.Group(); ph.position.set(0, .12, .04); pm.position.copy(ph.position); ph.add(bx(.012, .045, .004, INK, 0, .022, 0)); pm.add(bx(.008, .065, .004, INK, 0, .032, 0)); g.add(ph, pm);
  g.hora = (h) => { pm.rotation.z = -(h % 1) * Math.PI * 2; ph.rotation.z = -(h % 12) / 12 * Math.PI * 2; }; g.hora(7); return g; }
/** Relógio digital (texto muda). */
export function relogioDigital() { const cv = document.createElement('canvas'); cv.width = 256; cv.height = 110; const x = cv.getContext('2d'); const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace; let ult = '';
  const g = new THREE.Group(); g.add(rb(.26, .12, .1, '#2A2A30', 0, .06, 0, { out: .008 })); const t = new THREE.Mesh(new THREE.PlaneGeometry(.22, .09), new THREE.MeshBasicMaterial({ map: tx, toneMapped: false })); t.position.set(0, .065, .051); g.add(t);
  g.texto = (s) => { if (s === ult) return; ult = s; x.fillStyle = '#100808'; x.fillRect(0, 0, 256, 110); x.fillStyle = '#FF4A3A'; x.font = '700 78px IBM Plex Mono, monospace'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(s, 128, 58); tx.needsUpdate = true; }; g.texto('23:59'); return g; }

// ---------------------------------------------------------------- POMBO
/** Pombo (voando ou parado). asa(t) para bater as asas. */
export function pombo(cor = '#8D94A8') { const g = new THREE.Group(); const c = sph(.13, cor, 0, 0, 0, { seg: 10, out: .008 }); c.scale.set(1.4, .9, .9); g.add(c); g.add(sph(.08, '#6E7488', .15, .1, 0, { seg: 10, out: .008 })); g.add(tm(new THREE.ConeGeometry(.025, .07, 6), '#F08A2C', { pos: [.24, .09, 0], rot: [0, 0, -Math.PI / 2] }));
  for (const s of [-1, 1]) g.add(sph(.014, INK, .2, .13, s * .045, { seg: 6 })); g.add(tm(new THREE.ConeGeometry(.07, .16, 6), '#6E7488', { pos: [-.22, .0, 0], rot: [0, 0, Math.PI / 2] }));
  const asas = []; for (const s of [-1, 1]) { const a = new THREE.Group(); a.position.set(0, .05, s * .08); const p = rb(.2, .02, .26, '#9AA0B4', -.02, 0, s * .13, { r: .01, out: .006 }); a.add(p); g.add(a); asas.push([a, s]); }
  g.asa = (v) => asas.forEach(([a, s]) => a.rotation.x = s * v); return g; }

// ---------------------------------------------------------------- OBJETOS
export function coxinha() { const g = new THREE.Group(); const c = tm(new THREE.ConeGeometry(.045, .09, 14), '#D98A3E', { out: .006 }); c.position.y = .05; g.add(c); g.add(sph(.045, '#D98A3E', 0, .01, 0, { seg: 12 })); return g; }
export function linguica() { const g = new THREE.Group(); const c = tm(new THREE.CapsuleGeometry(.025, .14, 6, 10), '#A8442E', { out: .006 }); c.rotation.z = Math.PI / 2 + .2; g.add(c); return g; }
export function caneca(txt = 'MELHOR PAI') { const g = new THREE.Group(); g.add(cyl(.045, .04, .1, '#F4F1EA', 0, .05, 0, { out: .006, seg: 16 })); g.add(cyl(.04, .04, .01, '#5A3A24', 0, .095, 0, { seg: 16 })); g.add(tm(new THREE.TorusGeometry(.028, .008, 6, 12, Math.PI), '#F4F1EA', { pos: [.045, .05, 0], rot: [0, 0, -Math.PI / 2] }));
  const l = new THREE.Mesh(new THREE.PlaneGeometry(.06, .04), new THREE.MeshBasicMaterial({ map: ctex(128, 80, (x) => { x.fillStyle = '#E2443A'; x.font = '900 24px Inter'; x.textAlign = 'center'; x.fillText(txt.split(' ')[0], 64, 34); x.fillText(txt.split(' ')[1] || '', 64, 62); }), transparent: true })); l.position.set(0, .055, .046); g.add(l); return g; }
export function mochila(k, cor = '#2E6FB8') { const g = new THREE.Group(); g.add(rb(.3, .38, .16, cor, 0, 0, 0, { out: .01, r: .05 })); g.add(rb(.22, .16, .06, new THREE.Color(cor).multiplyScalar(.8).getStyle(), 0, -.06, .1, { r: .03 })); for (const s of [-1, 1]) g.add(bx(.04, .4, .02, '#2A2A30', s * .1, .04, .09)); g.position.set(0, -.05, -.2); k.torsoG.add(g); return g; }
export function sacoPadaria() { const g = new THREE.Group(); g.add(rb(.18, .24, .1, '#D9B07A', 0, .12, 0, { out: .008, r: .01 })); g.add(new THREE.Mesh(new THREE.PlaneGeometry(.12, .06), new THREE.MeshBasicMaterial({ map: ctex(128, 64, (x) => { x.fillStyle = '#C84E4E'; x.font = '900 22px Inter'; x.textAlign = 'center'; x.fillText('PÃO DA', 64, 26); x.fillText('SERRA', 64, 52); }), transparent: true })).translateY(.14).translateZ(.051)); return g; }
export function celular() { const g = new THREE.Group(); g.add(rb(.07, .14, .012, '#1B1A20', 0, 0, 0, { r: .008 })); const t = new THREE.Mesh(new THREE.PlaneGeometry(.06, .12), new THREE.MeshBasicMaterial({ color: '#7FB2E8', toneMapped: false })); t.position.z = .007; g.add(t); g.tela = t; return g; }
export function cracha() { const g = new THREE.Group(); g.add(bx(.06, .08, .004, '#F4F1EA')); g.add(bx(.05, .02, .005, '#2E6FB8', 0, .025, 0)); g.add(bx(.002, .12, .002, '#2E6FB8', 0, .1, 0)); return g; }

// ---------------------------------------------------------------- PERSONAGEM: FANTASMA, VOO
/** Deixa o personagem transparente (invisível). op = 0 some, 1 normal. */
export function fantasma(k, op = .25, cor = '#BFE8FF') {
  if (!k._fant) { k._fant = []; k.root.traverse((m) => { if (!m.isMesh || m === k.sombra) return; const orig = m.material; const nm = orig.clone(); nm.transparent = true; nm.depthWrite = false; if (nm.color && !m.userData.isOutline) nm.color.lerp(new THREE.Color(cor), .35); m.material = nm; k._fant.push({ m, orig, nm }); }); }
  for (const { m, nm } of k._fant) { nm.opacity = m.userData.isOutline ? op * .6 : op; if (nm.uniforms && nm.uniforms.op) nm.uniforms.op.value = op * .6; m.visible = op > .01; }
  k.sombra.visible = op > .6; return k;
}
/** Pose de voo/flutuação (braços abertos, pernas soltas, balançando). */
export const voo = (t, amp = 1) => ({ bob: Math.sin(t * 2) * .03, shL: [10 + Math.sin(t * 1.7) * 8 * amp, 70 + Math.sin(t * 2.3) * 10 * amp], shR: [10 + Math.sin(t * 1.9 + 1) * 8 * amp, 70 + Math.sin(t * 2.1 + 2) * 10 * amp], elL: 10, elR: 10, hipL: [10 + Math.sin(t * 2.4) * 18 * amp, 8], hipR: [-6 + Math.sin(t * 2.4 + 2) * 18 * amp, 8], knL: 25 + Math.sin(t * 2.4) * 15, knR: 30 + Math.sin(t * 2.4 + 2) * 15, headX: -8 });
/** Debatendo (nadando no ar, desesperado). */
export const debate = (t) => ({ bob: Math.sin(t * 5) * .03, shL: [60 + Math.sin(t * 7) * 60, 30], shR: [60 + Math.sin(t * 7 + 3) * 60, 30], elL: 40, elR: 40, hipL: [20 + Math.sin(t * 8) * 30, 5], hipR: [20 + Math.sin(t * 8 + 3) * 30, 5], knL: 40, knR: 40, headX: Math.sin(t * 3) * 6 });
/** Deitado/flutuando de barriga para baixo (corpo inclinado). Aplicar em root.rotation. */
export function deitaFrente(k, ang = Math.PI / 2) { k.root.rotation.x = ang; return k; }
