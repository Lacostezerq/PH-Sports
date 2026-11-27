// Atalhos das cenas deste vídeo: plano com efeito foco, celular com telas prontas, cronômetro dourado, poses.
import * as THREE from 'three';
import { mk as mkBase } from './lib.js';
import { focoCena, focoZera, UF, emFoco, fundo } from './foco.js';
import { rb, cyl, sph, bx, tm, toon, ctex } from './motor/toon.js';
import { clamp, lerp, easeIO, easeOut, smooth } from './motor/core.js';
export { UF, emFoco, fundo };
export { cam, ator, rosto, fala, gesto, sentar, icone, camT, pw, THREE } from './base.js';
export { soma, mix, kf, kv, vivo, parado, ofego, treme, andar, correr, G, acenar, rir, pular, sacode, batuca } from './mov.js';
export { naMao, respingo, notas } from './fx2.js';
export { clamp, lerp, easeIO, easeOut, smooth };
export { easeIn, keys, rng } from './motor/core.js';
export { walk, run, idle, sentado, mixPose } from './motor/char3d.js';

/** Plano deste vídeo: igual ao mk, mas os materiais aceitam o efeito foco e os uniformes zeram a cada quadro. */
export function mk(t0, t1, o, build) {
  o = { perto: .42, ...o };
  return mkBase(t0, t1, o, (c, s) => { const up = build(c, s); focoCena(c); return (t, u, cm) => { focoZera(); const r = up ? up(t, u, cm) || {} : {}; return r; }; });
}
/** Liga o efeito foco com rampa: k(t) = 0..1 entre a (liga) e b (desliga). */
export const rampa = (t, a, b, d = .35) => clamp(Math.min((t - a) / d, (b - t) / d));

// ---------------- celular ----------------
const CV = { w: 300, h: 600 };
function base(x, W, H, cor = '#14161C') { x.fillStyle = cor; x.fillRect(0, 0, W, H); }
const t_ = (x, s, cx, cy, sz, cor, p = 800, al = 'center') => { x.fillStyle = cor; x.font = `${p} ${sz}px Inter`; x.textAlign = al; x.textBaseline = 'middle'; x.fillText(s, cx, cy); };
/** Telas prontas do celular. Cada uma é (x, W, H, k) onde k é um valor 0..1 (progresso). */
export const TELAS = {
  apagada: (x, W, H) => base(x, W, H, '#0A0A0E'),
  bloqueio: (x, W, H, k = 0) => { const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#3A4A8A'); g.addColorStop(1, '#8A4A7A'); x.fillStyle = g; x.fillRect(0, 0, W, H); t_(x, '19:42', W / 2, 120, 64, '#FFFFFF', 300);
    x.fillStyle = 'rgba(255,255,255,.85)'; x.beginPath(); x.roundRect(20, 200, W - 40, 70, 16); x.fill(); x.fillStyle = '#3EC860'; x.beginPath(); x.roundRect(32, 212, 46, 46, 10); x.fill(); t_(x, 'Tiago', 92, 225, 20, '#1A1A1E', 800, 'left'); t_(x, 'mano olha isso kkkk', 92, 250, 16, '#3A3A44', 600, 'left'); },
  chat: (x, W, H, k = 0) => { base(x, W, H, '#E8DDD0'); x.fillStyle = '#2E8E6A'; x.fillRect(0, 0, W, 70); t_(x, 'Tiago', 70, 38, 22, '#FFF', 800, 'left');
    const b = [[0, 'mano olha isso kkkk'], [1, 'kkkkkkk'], [0, 'bora jogar?'], [1, 'depois']]; b.slice(0, 1 + Math.floor(k * 4)).forEach(([eu, s], i) => { x.fillStyle = eu ? '#D8F8C8' : '#FFFFFF'; const w = 30 + s.length * 10; x.beginPath(); x.roundRect(eu ? W - w - 16 : 16, 100 + i * 70, w, 48, 12); x.fill(); t_(x, s, eu ? W - w / 2 - 16 : 16 + w / 2, 124 + i * 70, 18, '#1A1A1E', 600); }); },
  foto: (x, W, H, k = 0) => { base(x, W, H, '#FFFFFF'); x.fillStyle = '#F4A05A'; x.fillRect(0, 80, W, 300); x.fillStyle = '#F2C230'; x.beginPath(); x.arc(200, 170, 40, 0, 7); x.fill(); x.fillStyle = '#5AA84E'; x.beginPath(); x.moveTo(0, 380); x.lineTo(120, 240); x.lineTo(240, 380); x.fill();
    const s = 1 + Math.sin(Math.min(1, k * 2) * Math.PI) * .5; x.save(); x.translate(50, 420); x.scale(s, s); x.fillStyle = k > .2 ? '#F2546E' : '#FFFFFF'; x.strokeStyle = '#1A1A1E'; x.lineWidth = 3; x.beginPath(); x.moveTo(0, 14); x.bezierCurveTo(-26, -6, -12, -24, 0, -10); x.bezierCurveTo(12, -24, 26, -6, 0, 14); x.fill(); x.stroke(); x.restore(); t_(x, (1203 + (k > .2 ? 1 : 0)) + ' curtidas', 80, 420, 18, '#1A1A1E', 800, 'left'); },
  tapete: (x, W, H, k = 0) => { base(x, W, H, '#0E0E12'); x.fillStyle = '#5A4A3A'; x.fillRect(0, 160, W, 280); const lim = W * clamp(k); x.fillStyle = '#C8463A'; x.fillRect(0, 160, lim, 280); x.strokeStyle = '#F2C230'; x.lineWidth = 6; for (let i = 0; i < 6; i++) { x.beginPath(); x.arc(lim / 2, 300, 20 + i * 22, 0, 7); x.stroke(); } x.fillStyle = 'rgba(255,255,255,.7)'; x.fillRect(lim - 6, 160, 12, 280);
    x.fillStyle = '#FF2A2A'; x.fillRect(0, H - 12, W * (.2 + k * .7), 6); t_(x, 'LIMPEZA DE TAPETE SATISFATÓRIA', W / 2, 500, 15, '#FFFFFF', 800); },
  xadrez: (x, W, H, k = 0) => { base(x, W, H, '#262421'); const s = W / 8; for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { x.fillStyle = (i + j) % 2 ? '#769656' : '#EEEED2'; x.fillRect(i * s, 150 + j * s, s, s); }
    const pc = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜']; x.font = `${s * .8}px serif`; x.textAlign = 'center'; x.textBaseline = 'middle'; pc.forEach((p, i) => { x.fillStyle = '#1A1A1E'; x.fillText(p, i * s + s / 2, 150 + s / 2); x.fillText('♟', i * s + s / 2, 150 + s * 1.5); x.fillStyle = '#FFFFFF'; x.fillText('♙', i * s + s / 2, 150 + s * 6.5); x.fillText(pc[i].replace('♜', '♖').replace('♞', '♘').replace('♝', '♗').replace('♛', '♕').replace('♚', '♔'), i * s + s / 2, 150 + s * 7.5); });
    t_(x, 'ABERTURAS: SICILIANA', W / 2, 90, 18, '#FFFFFF', 800); t_(x, 'Partida ' + Math.floor(1 + k * 199), W / 2, 500, 20, '#B8B8B8', 700); },
  mensagens: (x, W, H, k = 0) => { TELAS.bloqueio(x, W, H); x.fillStyle = 'rgba(20,20,28,.9)'; x.beginPath(); x.roundRect(16, 200, W - 32, 110, 18); x.fill(); t_(x, String(Math.round(27 * clamp(k * 1.3))), W / 2, 240, 50, '#3EC860', 900); t_(x, 'MENSAGENS NÃO LIDAS', W / 2, 286, 17, '#FFFFFF', 800); },
  views: (x, W, H, k = 0) => { base(x, W, H, '#0E0E12'); x.fillStyle = '#3A3A44'; x.fillRect(0, 60, W, 300); x.fillStyle = '#C9893E'; x.beginPath(); x.ellipse(W / 2, 220, 70, 90, 0, 0, 7); x.fill(); x.fillStyle = '#E3AE86'; x.beginPath(); x.arc(W / 2, 110, 36, 0, 7); x.fill();
    const v = Math.round(200000 * Math.pow(clamp(k), 2.2)); t_(x, v.toLocaleString('pt-BR') + ' visualizações', 20, 390, 20, '#FFFFFF', 800, 'left'); x.fillStyle = '#F2546E'; t_(x, '♥ ' + Math.round(v / 9).toLocaleString('pt-BR'), 20, 425, 20, '#F2546E', 800, 'left'); },
  chamadas: (x, W, H, k = 0) => { base(x, W, H, '#101016'); t_(x, '14', W / 2, 180, 110, '#FF4A4A', 900); t_(x, 'CHAMADAS PERDIDAS', W / 2, 260, 20, '#FFFFFF', 900); t_(x, k > .5 ? 'MÃE' : '', W / 2, 310, 34, '#FFFFFF', 900);
    x.strokeStyle = 'rgba(255,255,255,.55)'; x.lineWidth = 2; const cx = 210, cy = 120; for (let i = 0; i < 9; i++) { const a = i * .7; x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + Math.cos(a) * 260, cy + Math.sin(a) * 260); x.stroke(); } x.beginPath(); x.arc(cx, cy, 40, 0, 7); x.stroke(); },
  chamadasBorrado: (x, W, H, k = 0) => { base(x, W, H, '#101016'); x.filter = 'blur(5px)'; t_(x, '14', W / 2, 180, 110, '#FF4A4A', 900); t_(x, 'CHAMADAS PERDIDAS', W / 2, 260, 20, '#FFFFFF', 900); t_(x, '■■■', W / 2, 310, 34, '#FFFFFF', 900); x.filter = 'none';
    x.strokeStyle = 'rgba(255,255,255,.7)'; x.lineWidth = 2; const cx = 90, cy = 420; for (let i = 0; i < 9; i++) { const a = i * .7; x.beginPath(); x.moveTo(cx, cy); x.lineTo(cx + Math.cos(a) * 300, cy + Math.sin(a) * 300); x.stroke(); } x.beginPath(); x.arc(cx, cy, 36, 0, 7); x.stroke(); },
  mensagemMae: (x, W, H, k = 0) => { TELAS.chamadas(x, W, H, 1); const s = 'ele ficou esperando você na porta da escola até a apresentação acabar'; const n = Math.floor(s.length * clamp(k)); x.fillStyle = '#2E8E6A'; x.beginPath(); x.roundRect(16, 360, W - 32, 190, 16); x.fill(); t_(x, 'Mãe', 32, 382, 16, '#D8F8C8', 800, 'left');
    x.fillStyle = '#FFFFFF'; x.font = '700 19px Inter'; x.textAlign = 'left'; const pal = s.slice(0, n).split(' '); let lin = '', y = 414; for (const p of pal) { if (x.measureText(lin + p).width > W - 70) { x.fillText(lin, 32, y); lin = ''; y += 26; } lin += p + ' '; } x.fillText(lin, 32, y); },
  audio: (x, W, H, k = 0) => { base(x, W, H, '#E8DDD0'); x.fillStyle = '#2E8E6A'; x.fillRect(0, 0, W, 70); t_(x, 'Tiago', 70, 38, 22, '#FFF', 800, 'left'); x.fillStyle = '#FFFFFF'; x.beginPath(); x.roundRect(16, 240, W - 60, 70, 18); x.fill(); x.fillStyle = '#2E8E6A'; for (let i = 0; i < 26; i++) { const h = 6 + Math.abs(Math.sin(i * 1.7 + k * 30)) * 30 * (i / 26 < k ? 1 : .4); x.fillRect(70 + i * 7, 275 - h / 2, 4, h); } x.beginPath(); x.moveTo(36, 260); x.lineTo(56, 275); x.lineTo(36, 290); x.fill(); },
  coxinha: (x, W, H, k = 0) => { base(x, W, H, '#E8DDD0'); x.fillStyle = '#2E8E6A'; x.fillRect(0, 0, W, 70); t_(x, 'Tiago', 70, 38, 22, '#FFF', 800, 'left'); x.fillStyle = '#D8F8C8'; x.beginPath(); x.roundRect(60, 120, W - 76, 260, 14); x.fill(); x.fillStyle = '#F4E6C0'; x.fillRect(72, 132, W - 100, 180);
    x.fillStyle = '#D9892E'; x.beginPath(); x.moveTo(W / 2 + 20, 160); x.quadraticCurveTo(W / 2 + 90, 280, W / 2 + 20, 290); x.quadraticCurveTo(W / 2 - 50, 280, W / 2 + 20, 160); x.fill(); t_(x, 'desculpa mano, bora?', W / 2 + 20, 345, 18, '#1A1A1E', 800); if (k > .5) t_(x, '✓✓', W - 40, 365, 14, '#3EA6FF', 900); },
  conversa: (x, W, H) => { base(x, W, H, '#E8DDD0'); x.fillStyle = '#2E8E6A'; x.fillRect(0, 0, W, 70); t_(x, 'Tiago', 70, 38, 22, '#FFF', 800, 'left'); x.fillStyle = '#FFFFFF'; x.beginPath(); x.roundRect(16, 380, 230, 60, 12); x.fill(); t_(x, 'vem aqui em casa hoje? 🎂', 130, 410, 16, '#1A1A1E', 700); t_(x, '✓✓', 220, 430, 13, '#9A9A9A', 900); },
};
/** Celular com tela trocável: tel.tela(nome, k). Fica de pé, tela para +z. */
export function celular() {
  const g = new THREE.Group(); g.add(rb(.075, .15, .012, '#1B1A20', 0, 0, 0, { r: .008, out: .003 }));
  const cv = document.createElement('canvas'); cv.width = CV.w; cv.height = CV.h; const x = cv.getContext('2d'); const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.MeshBasicMaterial({ map: tx }); const s = new THREE.Mesh(new THREE.PlaneGeometry(.066, .132), m); s.position.z = .0065; g.add(s);
  let ult = ''; g.tela = (nome, k = 0, luz = 1) => { const key = nome + '|' + Math.round(k * 60); if (key !== ult) { ult = key; TELAS[nome](x, CV.w, CV.h, k); tx.needsUpdate = true; } m.color.setScalar(luz); };
  g.tela('apagada'); g.userData.tela = s; g.scale.setScalar(1.7); return g;
}
/** Cronômetro dourado de bolso com ponteiro e números (texto mm:ss). set(seg). */
export function cronometro(e = 1) {
  const g = new THREE.Group(); const ouro = toon('#E8B828', { emissive: '#5A4008', emissiveIntensity: .2 });
  g.add(tm(new THREE.CylinderGeometry(.16, .16, .05, 40), ouro, { out: .006, rot: [Math.PI / 2, 0, 0] })); g.add(cyl(.03, .03, .05, ouro, 0, .19, 0, { out: .004 })); g.add(tm(new THREE.TorusGeometry(.04, .01, 8, 18), ouro, { out: .003, pos: [0, .25, 0] }));
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 512; const x = cv.getContext('2d'); const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace;
  const f = new THREE.Mesh(new THREE.CircleGeometry(.14, 40), new THREE.MeshBasicMaterial({ map: tx, color: '#D8D0C0' })); f.position.z = .026; g.add(f);
  let ult = -1; g.set = (seg, brilho = 0) => { const k = Math.round(seg * 4) + brilho * 1000; if (k === ult) return; ult = k; x.fillStyle = '#FFF8E6'; x.fillRect(0, 0, 512, 512); x.strokeStyle = '#8A6A10'; x.lineWidth = 8;
    for (let i = 0; i < 60; i++) { const a = i / 60 * 6.283; x.beginPath(); x.moveTo(256 + Math.sin(a) * 230, 256 - Math.cos(a) * 230); x.lineTo(256 + Math.sin(a) * (i % 5 ? 214 : 196), 256 - Math.cos(a) * (i % 5 ? 214 : 196)); x.stroke(); }
    const mm = Math.floor(seg / 60), ss = Math.floor(seg % 60); if (brilho > 0) { x.shadowColor = '#F2C230'; x.shadowBlur = 40 * brilho; } x.fillStyle = '#3A2A08'; x.font = "700 120px 'IBM Plex Mono'"; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(String(mm).padStart(2, '0') + ':' + String(ss).padStart(2, '0'), 256, 330); x.shadowBlur = 0;
    const a = (seg % 60) / 60 * 6.283; x.strokeStyle = '#C8302A'; x.lineWidth = 10; x.beginPath(); x.moveTo(256, 256); x.lineTo(256 + Math.sin(a) * 190, 256 - Math.cos(a) * 190); x.stroke(); x.fillStyle = '#C8302A'; x.beginPath(); x.arc(256, 256, 14, 0, 7); x.fill(); tx.needsUpdate = true; };
  g.set(0); g.scale.setScalar(e); return g;
}
let BOLA = null;
/** Partículas que sobem/explodem (menta, notas, faíscas). Devolve upd(k) com k 0..1. */
export function particulas(c, centro, o = {}) {
  const n = o.n || 40, cor = o.cor || '#7AF0B0'; const L = [];
  if (!BOLA) BOLA = ctex(64, 64, (x) => { const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.6, 'rgba(255,255,255,.85)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); });
  for (let i = 0; i < n; i++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: BOLA, color: cor, transparent: true, depthWrite: false })); s.scale.setScalar(o.tam || .02); c.add(s); const a = Math.random() * 6.283, b = Math.random() * 2 - 1; L.push({ s, d: new THREE.Vector3(Math.cos(a) * Math.sqrt(1 - b * b), b * .6 + (o.sobe || 0), Math.sin(a) * Math.sqrt(1 - b * b)), v: .4 + Math.random() * .6, ph: Math.random() }); }
  return (k, t = 0) => { for (const p of L) { const kk = clamp((k - p.ph * .3) / .7); p.s.visible = kk > 0 && kk < 1; p.s.position.set(centro[0] + p.d.x * kk * (o.r || .3) * p.v, centro[1] + p.d.y * kk * (o.r || .3) * p.v + (o.g || 0) * kk * kk, centro[2] + p.d.z * kk * (o.r || .3) * p.v); p.s.material.opacity = 1 - kk; } };
}
/** Papel picado caindo numa caixa. upd(t). */
export function papelPicado(c, cx, cy, cz, o = {}) {
  const cores = ['#E2443A', '#F2C230', '#3E7CC8', '#5AA84E', '#F2546E', '#FFFFFF']; const L = [];
  for (let i = 0; i < (o.n || 90); i++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(.035, .022), new THREE.MeshBasicMaterial({ color: cores[i % 6], side: THREE.DoubleSide })); c.add(m); L.push({ m, x: (Math.random() - .5) * (o.w || 3), z: (Math.random() - .5) * (o.d || 2), ph: Math.random() * (o.h || 3), r: Math.random() * 6 }); }
  return (t) => { for (const p of L) { const y = cy + (o.h || 3) - ((t * (o.v || .8) + p.ph) % (o.h || 3)); p.m.position.set(cx + p.x + Math.sin(t * 2 + p.r) * .1, y, cz + p.z); p.m.rotation.set(t * 3 + p.r, t * 2 + p.r, 0); } };
}
/** Tremor do celular vibrando (deslocamento) no instante t para pulsos em P (lista de tempos). */
export const vibra = (t, P, d = .35) => P.some((p) => t >= p && t < p + d) ? Math.sin(t * 90) * .004 : 0;
/** Pose sentado na escrivaninha escrevendo (mão direita na mesa). */
export const escrevendo = (t) => ({ shR: [52 + Math.sin(t * 9) * 3, 8], elR: 78 + Math.sin(t * 13) * 4, shL: [44, 6], elL: 80, lean: 14, headX: 22 });
/** Pose olhando o celular com as duas mãos. */
export const noCelular = (t) => ({ shR: [58, 8], elR: 92, shL: [56, 10], elL: 92, headX: 20, lean: 6 });
/** Ponto na frente de um objeto (no sentido do +z local dele), a d metros, subindo `up`. */
export function frenteDe(obj, d = .4, up = 0, lado = 0) { obj.updateMatrixWorld(true); const n = new THREE.Vector3(lado, 0, 1).applyQuaternion(obj.getWorldQuaternion(new THREE.Quaternion())).normalize(); const p = obj.getWorldPosition(new THREE.Vector3()); return [p.x + n.x * d, p.y + n.y * d + up, p.z + n.z * d]; }
