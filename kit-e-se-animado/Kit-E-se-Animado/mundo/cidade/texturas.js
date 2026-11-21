// Texturas pintadas em canvas (estilo desenho). Tudo com cache: a mesma textura é criada uma vez só.
import * as THREE from 'three';
import { ctex, toonTex } from '../base/toon.js';
import { rng } from '../base/core.js';

const CACHE = new Map();
const memo = (k, f) => { if (!CACHE.has(k)) CACHE.set(k, f()); return CACHE.get(k); };
const rep = (t, a = 1, b = 1) => { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(a, b); return t; };
/** Clona a textura com outra repetição (mesma imagem na memória). */
export function repetir(t, a, b) { const n = t.clone(); n.wrapS = n.wrapT = THREE.RepeatWrapping; n.repeat.set(a, b); n.needsUpdate = true; return n; }

/** Asfalto liso com grão (1 tile = 4 m). */
export const asfalto = () => memo('asf', () => rep(ctex(256, 256, (x) => {
  x.fillStyle = '#5B5F68'; x.fillRect(0, 0, 256, 256); const R = rng(7);
  for (let i = 0; i < 900; i++) { x.fillStyle = R() < .5 ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.07)'; x.fillRect(R() * 256, R() * 256, 2 + R() * 3, 2 + R() * 3); }
  x.strokeStyle = 'rgba(30,30,36,.18)'; x.lineWidth = 3; x.beginPath(); x.moveTo(30, 200); x.bezierCurveTo(80, 180, 120, 230, 170, 210); x.stroke();
})));
/** Calçada de ladrilho (1 tile = 1 m). */
export const calcada = (c1 = '#D9D2C5', c2 = '#CBC2B3') => memo('calc' + c1, () => rep(ctex(128, 128, (x) => {
  x.fillStyle = c1; x.fillRect(0, 0, 128, 128); x.fillStyle = c2; x.fillRect(0, 0, 64, 64); x.fillRect(64, 64, 64, 64);
  x.strokeStyle = 'rgba(0,0,0,.12)'; x.lineWidth = 2; x.strokeRect(1, 1, 126, 126); x.beginPath(); x.moveTo(64, 0); x.lineTo(64, 128); x.moveTo(0, 64); x.lineTo(128, 64); x.stroke();
})));
/** Pedra portuguesa em ondas (calçadão da praça), 1 tile = 2 m. */
export const ondas = () => memo('ondas', () => rep(ctex(256, 256, (x) => {
  x.fillStyle = '#EFEAE0'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#3B3A3F';
  for (let k = 0; k < 2; k++) { x.beginPath(); for (let i = 0; i <= 256; i += 4) x.lineTo(i, 64 + k * 128 + Math.sin(i / 256 * 6.283) * 34); for (let i = 256; i >= 0; i -= 4) x.lineTo(i, 64 + k * 128 + 30 + Math.sin(i / 256 * 6.283) * 34); x.fill(); }
  const R = rng(3); x.fillStyle = 'rgba(0,0,0,.08)'; for (let i = 0; i < 500; i++) x.fillRect(R() * 256, R() * 256, 3, 3);
})));
/** Grama (1 tile = 3 m). */
export const grama = (c = '#78B85A') => memo('gr' + c, () => rep(ctex(256, 256, (x) => {
  x.fillStyle = c; x.fillRect(0, 0, 256, 256); const R = rng(11);
  for (let i = 0; i < 700; i++) { const v = R(); x.fillStyle = v < .5 ? 'rgba(40,90,30,.16)' : 'rgba(220,255,160,.14)'; const px = R() * 256, py = R() * 256; x.fillRect(px, py, 2, 5 + R() * 5); }
  for (let i = 0; i < 6; i++) { x.fillStyle = 'rgba(40,90,30,.10)'; x.beginPath(); x.ellipse(R() * 256, R() * 256, 20 + R() * 30, 12 + R() * 20, R() * 3, 0, 7); x.fill(); }
})));
/** Terra batida (campo de várzea, quintal). */
export const terra = () => memo('terra', () => rep(ctex(256, 256, (x) => {
  x.fillStyle = '#C49468'; x.fillRect(0, 0, 256, 256); const R = rng(5);
  for (let i = 0; i < 800; i++) { x.fillStyle = R() < .5 ? 'rgba(90,50,20,.12)' : 'rgba(255,230,190,.12)'; x.beginPath(); x.arc(R() * 256, R() * 256, 1 + R() * 3, 0, 7); x.fill(); }
})));
/** Paralelepípedo (rua antiga da praça). */
export const paralelepipedo = () => memo('para', () => rep(ctex(256, 256, (x) => {
  x.fillStyle = '#6E6A66'; x.fillRect(0, 0, 256, 256); const R = rng(9);
  for (let r = 0; r < 8; r++) for (let k = 0; k < 6; k++) { const o = r % 2 ? 21 : 0; const v = 100 + R() * 40 | 0; x.fillStyle = `rgb(${v},${v - 4},${v - 8})`; x.beginPath(); x.roundRect(k * 43 + o - 20, r * 32 + 2, 39, 28, 6); x.fill(); }
})));
/** Telha cerâmica (1 tile = 2 m). */
export const telha = (c = '#C8643C') => memo('tel' + c, () => rep(ctex(256, 256, (x) => {
  x.fillStyle = c; x.fillRect(0, 0, 256, 256);
  for (let r = 0; r < 8; r++) { x.fillStyle = 'rgba(0,0,0,.16)'; x.fillRect(0, r * 32 + 26, 256, 6); for (let k = 0; k < 8; k++) { const o = r % 2 ? 16 : 0; x.fillStyle = 'rgba(255,255,255,.10)'; x.beginPath(); x.ellipse(k * 32 + o + 16, r * 32 + 10, 9, 6, 0, 0, 7); x.fill(); x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(k * 32 + o, r * 32, 2, 30); } }
})));
/** Parede com textura leve de reboco. */
export const reboco = (c) => memo('reb' + c, () => rep(ctex(128, 128, (x) => {
  x.fillStyle = c; x.fillRect(0, 0, 128, 128); const R = rng(c.length * 13);
  for (let i = 0; i < 160; i++) { x.fillStyle = R() < .5 ? 'rgba(0,0,0,.035)' : 'rgba(255,255,255,.05)'; x.fillRect(R() * 128, R() * 128, 3 + R() * 5, 2 + R() * 4); }
})));
/** Tijolinho aparente. */
export const tijolo = (c = '#B5603E') => memo('tij' + c, () => rep(ctex(256, 256, (x) => {
  x.fillStyle = '#D8CBB8'; x.fillRect(0, 0, 256, 256); const R = rng(4);
  for (let r = 0; r < 16; r++) for (let k = 0; k < 5; k++) { const o = r % 2 ? 26 : 0; const t = R() * .2 - .1; x.fillStyle = c; x.globalAlpha = .85 + t; x.fillRect(k * 52 + o - 26 + 2, r * 16 + 2, 48, 12); } x.globalAlpha = 1;
})));
/** Pisos internos (1 tile = 1 m): madeira, cerâmica, ladrilho, granilite, porcelanato. */
export const piso = (tipo = 'madeira', a = '#C8935E', b = '#B98450') => memo('piso' + tipo + a + b, () => rep(ctex(256, 256, (x) => {
  if (tipo === 'madeira') { for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? a : b; x.fillRect(0, i * 32, 256, 32); x.fillStyle = 'rgba(0,0,0,.12)'; x.fillRect(0, i * 32, 256, 2); x.fillRect((i * 97) % 256, i * 32, 2, 32); x.fillStyle = 'rgba(80,40,10,.08)'; for (let k = 0; k < 4; k++) x.fillRect((i * 37 + k * 61) % 256, i * 32 + 10 + k * 3, 40, 2); } }
  else if (tipo === 'xadrez') { for (let i = 0; i < 4; i++) for (let k = 0; k < 4; k++) { x.fillStyle = (i + k) % 2 ? a : b; x.fillRect(i * 64, k * 64, 64, 64); } }
  else if (tipo === 'granilite') { x.fillStyle = a; x.fillRect(0, 0, 256, 256); const R = rng(17); for (let i = 0; i < 900; i++) { x.fillStyle = ['#00000022', '#FFFFFF33', b + '88'][i % 3]; x.fillRect(R() * 256, R() * 256, 2 + R() * 4, 2 + R() * 3); } }
  else { x.fillStyle = a; x.fillRect(0, 0, 256, 256); x.strokeStyle = b; x.lineWidth = 4; for (let i = 0; i <= 4; i++) { x.beginPath(); x.moveTo(i * 64, 0); x.lineTo(i * 64, 256); x.moveTo(0, i * 64); x.lineTo(256, i * 64); x.stroke(); } x.fillStyle = 'rgba(255,255,255,.08)'; x.fillRect(8, 8, 40, 20); }
})));
/** Azulejo de cozinha/banheiro (1 tile = .6 m). */
export const azulejo = (a = '#F4F1EA', b = '#D9E8EE', deco = '#7FB2C8') => memo('azu' + a + b + deco, () => rep(ctex(128, 128, (x) => {
  x.fillStyle = a; x.fillRect(0, 0, 128, 128); x.fillStyle = b; x.fillRect(64, 0, 64, 64); x.fillRect(0, 64, 64, 64);
  x.strokeStyle = deco; x.lineWidth = 3; x.beginPath(); x.arc(96, 32, 14, 0, 7); x.arc(32, 96, 14, 0, 7); x.stroke();
  x.strokeStyle = 'rgba(0,0,0,.14)'; x.lineWidth = 2; x.strokeRect(0, 0, 64, 64); x.strokeRect(64, 64, 64, 64); x.strokeRect(64, 0, 64, 64); x.strokeRect(0, 64, 64, 64);
})));
/** Água (lago, fonte): azul com reflexos. */
export const agua = () => memo('agua', () => rep(ctex(256, 256, (x) => {
  const g = x.createLinearGradient(0, 0, 256, 256); g.addColorStop(0, '#5DB4D8'); g.addColorStop(1, '#3F95C0'); x.fillStyle = g; x.fillRect(0, 0, 256, 256); const R = rng(21);
  x.strokeStyle = 'rgba(255,255,255,.35)'; x.lineWidth = 3; x.lineCap = 'round'; for (let i = 0; i < 40; i++) { const px = R() * 256, py = R() * 256, w = 10 + R() * 22; x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + w / 2, py - 4, px + w, py); x.stroke(); }
})));

/** Fachada com janelas (prédios e sobrados de longe). Um tile = 1 andar x 1 vão (3 m x 3 m). */
export function janelas(cor, o = {}) {
  return memo('jan' + cor + JSON.stringify(o), () => rep(ctex(128, 128, (x) => {
    x.fillStyle = cor; x.fillRect(0, 0, 128, 128); x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(0, 118, 128, 10);
    x.fillStyle = o.moldura || '#F4F1EA'; x.fillRect(26, 22, 76, 70); x.fillStyle = o.vidro || '#7FA9C9'; x.fillRect(32, 28, 64, 58);
    x.fillStyle = o.cortina || '#F3E3C0'; x.fillRect(32, 28, 18, 58); x.fillRect(78, 28, 18, 58);
    x.fillStyle = 'rgba(255,255,255,.35)'; x.beginPath(); x.moveTo(52, 86); x.lineTo(70, 28); x.lineTo(78, 28); x.lineTo(60, 86); x.fill();
    x.fillStyle = 'rgba(0,0,0,.18)'; x.fillRect(26, 92, 76, 6);
  })));
}
/** Vidro de janela visto de fora: céu refletido, cortina e um pouco do cômodo (nunca "vazio"). */
export function vidroTex(seed = 0, cortina = '#F3E3C0') {
  return memo('vid' + seed + cortina, () => ctex(128, 128, (x) => {
    const g = x.createLinearGradient(0, 0, 0, 128); g.addColorStop(0, '#A9D2EC'); g.addColorStop(1, '#5E86A8'); x.fillStyle = g; x.fillRect(0, 0, 128, 128);
    const R = rng(seed + 1); x.fillStyle = 'rgba(40,40,60,.25)'; x.fillRect(20 + R() * 40, 70, 40, 58); // móvel lá dentro
    x.fillStyle = cortina; x.fillRect(0, 0, 30, 128); x.fillRect(98, 0, 30, 128); x.fillStyle = 'rgba(0,0,0,.12)'; for (let i = 0; i < 4; i++) { x.fillRect(6 + i * 7, 0, 2, 128); x.fillRect(104 + i * 7, 0, 2, 128); }
    x.fillStyle = 'rgba(255,255,255,.4)'; x.beginPath(); x.moveTo(40, 128); x.lineTo(80, 0); x.lineTo(96, 0); x.lineTo(56, 128); x.fill();
  }));
}
/** Placa/letreiro com texto. */
export function letreiroTex(texto, o = {}) {
  const w = o.w || 512, h = o.h || 128;
  return memo('let' + texto + JSON.stringify(o), () => ctex(w, h, (x) => {
    x.fillStyle = o.fundo || '#2E6FB8'; x.beginPath(); x.roundRect(0, 0, w, h, o.raio ?? 14); x.fill();
    if (o.borda) { x.strokeStyle = o.borda; x.lineWidth = 10; x.beginPath(); x.roundRect(5, 5, w - 10, h - 10, o.raio ?? 12); x.stroke(); }
    x.fillStyle = o.cor || '#FFFFFF'; x.textAlign = 'center'; x.textBaseline = 'middle';
    let fs = o.tam || h * .52; x.font = `${o.peso || 900} ${fs}px ${o.fonte || 'Inter, Arial, sans-serif'}`; while (x.measureText(texto).width > w * .9 && fs > 10) { fs -= 2; x.font = `${o.peso || 900} ${fs}px ${o.fonte || 'Inter, Arial, sans-serif'}`; }
    x.fillText(texto, w / 2, h / 2 + (o.sub ? -h * .12 : 2));
    if (o.sub) { x.font = `700 ${h * .2}px Inter, Arial, sans-serif`; x.globalAlpha = .9; x.fillText(o.sub, w / 2, h * .8); x.globalAlpha = 1; }
  }));
}
export const matTex = (t, o) => toonTex(t, o);
