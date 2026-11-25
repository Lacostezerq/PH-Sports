// Elenco de "E se a força do Guilherme dobrasse todo dia?" — visual fixo de cada personagem.
import * as THREE from 'three';
import { makeChar3D } from './motor/char3d.js';
import { tm, rb, cyl, sph } from './motor/toon.js';

const gola = (cor, a = .9) => (x, w, h) => { x.fillStyle = cor; x.fillRect(0, h * a, w, h * (1 - a)); };
// rosto do Guilherme (o mesmo dos outros vídeos, sem barba)
const ROSTO_GUI = { pele: '#E3AE86', cabelo: 'topete', corCabelo: '#4A2A18', nariz: true, sobr: '#3A2014' };

/** Moletom cinza: bolso canguru, cordão do capuz e punho. */
const moletom = (x, w, h) => {
  x.fillStyle = '#80868E'; x.beginPath(); x.roundRect(w * .3, h * .56, w * .4, h * .3, 26); x.fill();
  x.strokeStyle = '#6C727A'; x.lineWidth = 6; x.beginPath(); x.moveTo(w * .33, h * .6); x.lineTo(w * .33, h * .82); x.moveTo(w * .67, h * .6); x.lineTo(w * .67, h * .82); x.stroke();
  x.strokeStyle = '#F4F1EA'; x.lineWidth = 7; for (const s of [-1, 1]) { x.beginPath(); x.moveTo(w / 2 + s * 34, 0); x.lineTo(w / 2 + s * 40, h * .3); x.stroke(); x.fillStyle = '#F4F1EA'; x.beginPath(); x.arc(w / 2 + s * 40, h * .31, 9, 0, 7); x.fill(); }
  x.fillStyle = '#7A8088'; x.fillRect(0, h * .92, w, h * .08);
};
/** Guilherme: 17 anos, magro, moletom cinza com capuz, bermuda preta, chinelo. */
export const GUI = { ...ROSTO_GUI, camisa: '#959BA3', manga: 'longa', calca: '#1E1E22', meia: '#E3AE86', tenis: '#E3AE86', sola: '#1E2A44', chinelo: '#1E2A44', escala: .95, estampa: moletom };
/** Guilherme a partir do dia 14: luvas grossas pretas de trabalho. */
export const GUILUVA = { ...GUI, luva: '#1A1A1E' };

/** Avental florido por cima da blusa. */
const avental = (x, w, h) => {
  x.fillStyle = '#F7F1E3'; x.beginPath(); x.roundRect(w * .27, h * .16, w * .46, h * .84, 30); x.fill();
  const cores = ['#E2443A', '#F2C230', '#3E7CC8', '#5AA84E', '#E57AA0'];
  for (let i = 0; i < 30; i++) { const px = w * .29 + ((i * 97) % (w * .42)), py = h * .2 + ((i * 53) % (h * .76)); x.fillStyle = cores[i % 5]; for (let k = 0; k < 5; k++) { const a = k / 5 * 6.283; x.beginPath(); x.arc(px + Math.cos(a) * 9, py + Math.sin(a) * 9, 7, 0, 7); x.fill(); } x.fillStyle = '#F2C230'; x.beginPath(); x.arc(px, py, 5, 0, 7); x.fill(); }
  x.strokeStyle = '#E2443A'; x.lineWidth = 8; x.beginPath(); x.moveTo(w * .27, h * .5); x.lineTo(0, h * .5); x.moveTo(w * .73, h * .5); x.lineTo(w, h * .5); x.stroke();
};
/** Dona Cida: 72 anos, baixinha, coque grisalho, óculos na ponta do nariz, avental florido, chinelo. */
export const CIDA = { pele: '#D9A07A', cabelo: 'coque', corCabelo: '#C9C6C0', oculos: true, rugas: true, cilios: true, nariz: true, tronco: 'senhora', camisa: '#7FA6C9', calca: '#5A6A8A', saia: '#5A6A8A', meia: '#D9A07A', tenis: '#D9A07A', sola: '#C84E4E', chinelo: '#C84E4E', escala: .84, estampa: avental };
/** Dona Cida de vestido de sair (aniversário). */
export const CIDAFESTA = { ...CIDA, camisa: '#B23A5A', saia: '#B23A5A', calca: '#B23A5A', sola: '#3A2A2A', estampa: (x, w, h) => { x.fillStyle = '#F4D8E0'; for (let i = 0; i < 46; i++) { x.beginPath(); x.arc((i * 131) % w, (i * 67) % h, 7, 0, 7); x.fill(); } gola('#8E2A44', .9)(x, w, h); }, batom: true };

/** Tiago: boné virado pra trás, camiseta larga, sempre com o celular. */
export const TIAGO = { pele: '#8A5A3E', cabelo: 'curto', corCabelo: '#1A1212', bone: '#E2443A', boneTras: true, nariz: true, tronco: 'barriga', camisa: '#F2C230', calca: '#3E5A7A', tenis: '#F4F1EA', sola: '#E2443A', escala: .97,
  estampa: (x, w, h) => { x.fillStyle = '#1E1E22'; x.font = '900 120px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('23', w / 2, h * .5); gola('#D9A520', .9)(x, w, h); } };
/** Rafa: marombeiro, regata, braço cheio de veia, corrente. */
export const RAFA = { pele: '#C98C66', cabelo: 'curto', corCabelo: '#2A1E1A', nariz: true, manga: 'regata', forte: 1.45, tronco: 'barriga', camisa: '#1E1E22', calca: '#3A3A44', tenis: '#F4F1EA', sola: '#2A2A30', escala: 1.07,
  estampa: (x, w, h) => { x.fillStyle = '#C98C66'; x.beginPath(); x.moveTo(w * .36, 0); x.quadraticCurveTo(w / 2, h * .22, w * .64, 0); x.fill(); x.strokeStyle = '#E8C547'; x.lineWidth = 9; x.setLineDash([10, 6]); x.beginPath(); x.moveTo(w * .38, 0); x.quadraticCurveTo(w / 2, h * .3, w * .62, 0); x.stroke(); x.setLineDash([]); } };
/** Motorista da carreta: uns 50 anos, bigode, camisa xadrez suada. */
export const MOTORISTA = { pele: '#B8805A', cabelo: 'curto', corCabelo: '#4A4440', bigode: '#3A3230', nariz: true, rugas: true, tronco: 'barriga', camisa: '#B8463A', calca: '#3E4A5A', tenis: '#4A3222', sola: '#2A1E16', escala: 1.05,
  estampa: (x, w, h) => { x.strokeStyle = '#7E2A22'; x.lineWidth = 16; for (let i = 0; i < 12; i++) { x.beginPath(); x.moveTo(i * 90, 0); x.lineTo(i * 90, h); x.stroke(); x.beginPath(); x.moveTo(0, i * 50); x.lineTo(w, i * 50); x.stroke(); } x.fillStyle = '#7E2A2255'; x.beginPath(); x.ellipse(w * .5, h * .35, 120, 70, 0, 0, 7); x.fill(); } };
/** Dono da academia: careca, barba, camiseta apertada com o nome da academia. */
export const DONO = { pele: '#D9A07A', cabelo: 'careca', corCabelo: '#2A2020', barba: '#3A2A20', nariz: true, forte: 1.3, tronco: 'barriga', camisa: '#1E1E22', calca: '#2A2A30', tenis: '#E2443A', sola: '#F4F1EA', escala: 1.08,
  estampa: (x, w, h) => { x.fillStyle = '#F2C230'; x.font = '900 70px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('FERRO', w / 2, h * .42); x.font = '800 40px Inter'; x.fillText('FORTE', w / 2, h * .56); } };
/** Porteiro do prédio. */
export const PORTEIRO = { pele: '#8A5A3E', cabelo: 'curto', corCabelo: '#9A9690', bigode: '#8A8680', nariz: true, rugas: true, camisa: '#3E5A7A', calca: '#2A2E38', tenis: '#1E1A18', sola: '#1E1A18', escala: 1.0,
  estampa: (x, w, h) => { x.fillStyle = '#F2C230'; x.fillRect(w * .6, h * .3, 60, 30); gola('#2E4A68', .9)(x, w, h); } };
/** Moço do gás: boné e camiseta laranja. */
export const GAS = { pele: '#B8805A', cabelo: 'curto', corCabelo: '#2A2020', bone: '#E2862E', nariz: true, camisa: '#E2862E', calca: '#2F4E86', tenis: '#2A2A30', sola: '#2A2A30',
  estampa: (x, w, h) => { x.fillStyle = '#FFFFFF'; x.font = '900 64px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('GÁS', w / 2, h * .45); } };
const GENTE = [['#3E7CC8', '#2A2A33', '#2A1E1A', 'topete', '#D9A07A'], ['#E57AA0', '#3A3550', '#5A3020', 'chanel', '#E8B48C'], ['#58B26A', '#2F4E86', '#1C1416', 'afro', '#8E5A3A'], ['#F2994A', '#3A3A44', '#C9A060', 'curto', '#F0C8A6'], ['#9B6CC4', '#2A2A33', '#1C1416', 'curto', '#B07A52'], ['#2FB5A8', '#4A3A2A', '#3A2418', 'rabo', '#E3B28E'], ['#F2D24A', '#2F4E86', '#2A1E1A', 'tigela', '#6E4430'], ['#E8E4DE', '#5A5A66', '#6A5A4A', 'coque', '#D9A07A']];
/** Figurante i (adulto). */
export const pessoa = (i, extra = {}) => { const [camisa, calca, corCabelo, cabelo, pele] = GENTE[i % GENTE.length]; return { camisa, calca, corCabelo, cabelo, pele, cilios: ['rabo', 'coque', 'chanel'].includes(cabelo), nariz: true, tenis: ['#F4F1EA', '#2A2A30', '#E2443A'][i % 3], ...extra }; };
/** Aluno da escola (uniforme branco e azul). */
export const aluno = (i, extra = {}) => pessoa(i, { camisa: '#F6F4EE', calca: '#2F4E86', escala: .94, estampa: (x, w, h) => { gola('#2F4E86', .88)(x, w, h); x.fillStyle = '#2F4E86'; x.beginPath(); x.arc(w / 2 + 120, h * .55, 34, 0, 7); x.fill(); }, ...extra });
/** Criança da rua (chinelo, bermuda). */
export const crianca = (i, extra = {}) => pessoa(i + 2, { escala: .66, meia: GENTE[(i + 2) % 8][4], tenis: GENTE[(i + 2) % 8][4], sola: ['#2D8CD6', '#E2443A', '#F2C230'][i % 3], ...extra });

/** Cria o personagem. Coloca o capuz no moletom do Guilherme. */
export function cria(def) {
  const k = makeChar3D(def);
  if (def.estampa === moletom) { // capuz caído nas costas
    const c = tm(new THREE.TorusGeometry(.13, .055, 10, 22), def.camisa, { out: .008 }); c.rotation.x = Math.PI / 2.4; c.position.set(0, .34, -.09); k.torsoG.add(c);
    const f = sph(.1, '#80868E', 0, .3, -.15, { seg: 14 }); f.scale.set(1.2, .7, .6); k.torsoG.add(f);
  }
  if (def.chinelo) for (const s of ['L', 'R']) { // tira do chinelo de dedo: um V em cima do pé, do dedão até os lados
    const an = k.legs[s].an; for (const l of [-1, 1]) { const t = tm(new THREE.BoxGeometry(.016, .014, .1), def.chinelo, { out: .003 }); t.position.set(l * .032, .013, .085); t.rotation.set(0, -l * .62, 0); an.add(t); }
    an.add(tm(new THREE.SphereGeometry(.011, 8, 6), def.chinelo, { pos: [0, .014, .125] })); }
  return k;
}
