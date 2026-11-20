// Elenco original deste canal: Guilherme (16, 23 e 30 anos), Seu Marcos (pai), Dona Regina (mãe), Dudu (melhor amigo) e figurantes.
import { makeChar3D } from './motor/char3d.js';

const txt = (x, s, cx, cy, size, cor, peso = 900) => { x.fillStyle = cor; x.font = `${peso} ${size}px Inter`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(s, cx, cy); };
const gola = (cor, a = .9) => (x, w, h) => { x.fillStyle = cor; x.fillRect(0, h * a, w, h * (1 - a)); };

// ---------- Guilherme ----------
const GUI_BASE = { pele: '#E3AE86', cabelo: 'topete', corCabelo: '#4A2A18', nariz: true, sobr: '#3A2014' };
/** Guilherme com 16 anos (2012-2014): uniforme da escola (camiseta branca, gola e logo verdes), sardas. */
export const GUI16 = { ...GUI_BASE, sardas: true, camisa: '#F6F4EE', calca: '#3D4F73', tenis: '#F08A2C', sola: '#FFFFFF', escala: .93,
  estampa: (x, w, h) => { gola('#2E9C6A', .88)(x, w, h); x.fillStyle = '#2E9C6A'; x.fillRect(0, 0, w, h * .05); const cx = w / 2 + 120, cy = h * .55; x.beginPath(); x.arc(cx, cy, 44, 0, 7); x.fill(); x.fillStyle = '#FFFFFF'; x.beginPath(); x.moveTo(cx, cy - 26); x.lineTo(cx + 24, cy + 18); x.lineTo(cx - 24, cy + 18); x.closePath(); x.fill(); } };
/** Guilherme em casa (16 anos), camiseta listrada. */
export const GUI16CASA = { ...GUI_BASE, sardas: true, camisa: '#3A9AD9', calca: '#3D4F73', tenis: '#F08A2C', escala: .93,
  estampa: (x, w, h) => { x.fillStyle = '#F6F4EE'; for (let i = 0; i < 6; i++) x.fillRect(0, h * (.12 + i * .15), w, h * .05); } };
/** Guilherme universitário (2017-2019): moletom mostarda, mochila. */
export const GUI20 = { ...GUI_BASE, camisa: '#E2A630', manga: 'longa', calca: '#30384A', tenis: '#F4F1EA', sola: '#F08A2C',
  estampa: (x, w, h) => { x.fillStyle = '#C98C1E'; x.fillRect(w * .36, h * .58, w * .28, h * .2); x.strokeStyle = '#6E4A10'; x.lineWidth = 6; x.beginPath(); x.moveTo(w / 2 - 30, 0); x.lineTo(w / 2 - 30, h * .3); x.moveTo(w / 2 + 30, 0); x.lineTo(w / 2 + 30, h * .3); x.stroke(); } };
/** Guilherme de chinelo na avenida (2019): camiseta cinza, bermuda, chinelo (pé à mostra). */
export const GUICHINELO = { ...GUI_BASE, camisa: '#8E9AA8', calca: '#2F5E5A', tenis: '#E3AE86', sola: '#2D8CD6', meia: '#E3AE86',
  estampa: (x, w, h) => { gola('#7A8696')(x, w, h); } };
/** Guilherme com 30 anos (2026): camisa social azul-petróleo, barba curta e olheiras. */
export const GUI30 = { ...GUI_BASE, barba: '#5A3826', olheiras: true, camisa: '#2C6E7F', manga: 'longa', calca: '#8C7656', tenis: '#3A2A20', sola: '#F4F1EA',
  estampa: (x, w, h) => { x.fillStyle = '#245B69'; x.fillRect(w / 2 - 4, 0, 8, h); for (let i = 0; i < 5; i++) { x.fillStyle = '#F4F1EA'; x.beginPath(); x.arc(w / 2 + 14, h * (.25 + i * .14), 6, 0, 7); x.fill(); } } };
/** Guilherme no churrasco (2026): camiseta verde-água, sem olheiras. */
export const GUICHURRAS = { ...GUI_BASE, barba: '#5A3826', camisa: '#4FB8A0', calca: '#8C7656', tenis: '#F4F1EA', sola: '#2C6E7F',
  estampa: (x, w, h) => { gola('#3C9A84')(x, w, h); } };

// ---------- Seu Marcos (pai) ----------
const logoFirma = (x, w, h) => { x.fillStyle = '#F2C230'; x.fillRect(0, h * .62, w, h * .07); const cx = w / 2 - 120, cy = h * .4; x.fillStyle = '#F2C230'; x.fillRect(cx - 46, cy - 30, 92, 60); x.fillStyle = '#1F2D4E'; x.font = '900 26px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('CF', cx, cy + 2); x.fillStyle = '#F2C230'; x.font = '800 22px Inter'; x.fillText('CASA FORTE', w / 2 + 160, h * .42); };
export const MARCOS = { pele: '#9A6646', cabelo: 'curto', corCabelo: '#2B2422', corCabelo2: '#9E9893', barba: '#4E4642', nariz: true, sobr: '#2B2422', sobrW: 19,
  camisa: '#22355E', calca: '#3E3A36', tenis: '#4A3222', sola: '#2A1E16', escala: 1.07, estampa: (x, w, h) => { logoFirma(x, w, h); gola('#1A2848')(x, w, h); } };
/** Marcos em casa no domingo (camisa xadrez). */
export const MARCOSCASA = { ...MARCOS, camisa: '#B8463A', estampa: (x, w, h) => { x.strokeStyle = '#8E2F28'; x.lineWidth = 14; for (let i = 0; i < 12; i++) { x.beginPath(); x.moveTo(i * 90, 0); x.lineTo(i * 90, h); x.stroke(); x.beginPath(); x.moveTo(0, i * 50); x.lineTo(w, i * 50); x.stroke(); } } };
/** Marcos no churrasco 2026: mais magro, avental. */
export const MARCOSCHURRAS = { ...MARCOS, corCabelo: '#77716C', barba: '#8E8782', camisa: '#F4F1EA', calca: '#3E3A36', escala: 1.03,
  estampa: (x, w, h) => { x.fillStyle = '#2E7D4F'; x.fillRect(w * .3, h * .3, w * .4, h * .7); x.fillStyle = '#F4F1EA'; x.font = '900 34px Inter'; x.textAlign = 'center'; x.fillText('MESTRE', w / 2, h * .6); x.fillText('DO FOGO', w / 2, h * .72); } };

// ---------- Dona Regina (mãe) ----------
export const REGINA = { pele: '#C98C66', cabelo: 'chanel', corCabelo: '#7A2E1E', brincos: '#F2C230', cilios: true, nariz: true, camisa: '#2FB0A8', calca: '#7E3352', saia: '#7E3352', tenis: '#7E3352', sola: '#4E1E33', escala: .95,
  estampa: (x, w, h) => { x.fillStyle = '#F6F4EE'; for (let i = 0; i < 40; i++) { x.beginPath(); x.arc((i * 137) % w, (i * 71) % h, 9, 0, 7); x.fill(); } } };

// ---------- Dudu (melhor amigo) ----------
export const DUDU = { pele: '#6E4430', cabelo: 'afro', corCabelo: '#1A1212', faixa: '#E2443A', nariz: true, camisa: '#7B4FC9', calca: '#2A2A33', tenis: '#F2C230', sola: '#FFFFFF', escala: .95,
  estampa: (x, w, h) => { x.fillStyle = '#F2C230'; const cx = w / 2, cy = h * .5; x.beginPath(); x.moveTo(cx + 10, cy - 70); x.lineTo(cx - 30, cy + 6); x.lineTo(cx, cy + 6); x.lineTo(cx - 14, cy + 70); x.lineTo(cx + 34, cy - 10); x.lineTo(cx + 4, cy - 10); x.closePath(); x.fill(); } };
/** Dudu de camisa amarela (Copa 2014), sem marca. */
export const DUDUCOPA = { ...DUDU, camisa: '#F6D33A', estampa: (x, w, h) => { gola('#2E9C4A', .86)(x, w, h); x.fillStyle = '#2E9C4A'; x.fillRect(0, h * .1, w, h * .04); } };

// ---------- figurantes ----------
export const MEDICA = { pele: '#E8B898', cabelo: 'rabo', corCabelo: '#2A1A14', laco: '#F4F1EA', cilios: true, camisa: '#F4F6F8', manga: 'longa', calca: '#4FA3B8', tenis: '#F4F6F8', estampa: (x, w, h) => { x.fillStyle = '#4FA3B8'; x.fillRect(w / 2 - 50, h * .5, 100, h * .5); x.strokeStyle = '#3A3A44'; x.lineWidth = 5; x.beginPath(); x.arc(w / 2 + 140, h * .45, 30, 0, Math.PI); x.stroke(); } };
export const ENFERMEIRO = { pele: '#8A5A3E', cabelo: 'curto', corCabelo: '#1A1212', camisa: '#5FB6A4', calca: '#5FB6A4', tenis: '#F4F6F8', manga: 'curta' };
export const GARI = { pele: '#B8805A', cabelo: 'curto', corCabelo: '#2A2020', camisa: '#F2862E', calca: '#F2862E', tenis: '#2A2A30', bone: '#F2862E', estampa: (x, w, h) => { x.fillStyle = '#E8F04A'; x.fillRect(0, h * .55, w, h * .06); x.fillRect(0, h * .75, w, h * .06); } };
export const PROFESSORA = { pele: '#D9A07A', cabelo: 'coque', corCabelo: '#5A3A2A', oculos: true, cilios: true, camisa: '#8E5BB8', manga: 'longa', calca: '#3A3A44', saia: '#3A3A44', tenis: '#3A2A20' };
const POVO = [['#3E7CC8', '#2A2A33', '#2A1E1A', 'topete', '#D9A07A'], ['#E57AA0', '#3A3550', '#5A3020', 'chanel', '#E8B48C'], ['#58B26A', '#2F4E86', '#1C1416', 'afro', '#8E5A3A'], ['#F2994A', '#3A3A44', '#C9A060', 'curto', '#F0C8A6'], ['#9B6CC4', '#2A2A33', '#1C1416', 'curto', '#B07A52'], ['#2FB5A8', '#4A3A2A', '#3A2418', 'rabo', '#E3B28E'], ['#F2D24A', '#2F4E86', '#2A1E1A', 'tigela', '#6E4430'], ['#E8E4DE', '#5A5A66', '#6A5A4A', 'coque', '#D9A07A']];
export const povo = (i, extra = {}) => { const [camisa, calca, corCabelo, cabelo, pele] = POVO[i % POVO.length]; return makeChar3D({ camisa, calca, corCabelo, cabelo, pele, cilios: ['rabo', 'coque', 'chanel'].includes(cabelo), tenis: ['#F4F1EA', '#2A2A30', '#E2443A'][i % 3], ...extra }); };
/** Torcedor de camisa amarela (sem marca). */
export const torcedor = (i, extra = {}) => povo(i, { camisa: i % 4 === 3 ? '#2E9C4A' : '#F6D33A', estampa: gola(i % 4 === 3 ? '#F6D33A' : '#2E9C4A', .86), ...extra });
export const novo = (o) => makeChar3D(o);
