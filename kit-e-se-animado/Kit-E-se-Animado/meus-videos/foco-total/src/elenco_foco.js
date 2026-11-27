// Elenco de "E se você focasse 100% em tudo que faz?" — visual fixo de cada personagem.
import { GUI, aluno, pessoa, crianca } from './gente.js';
export { GUI, aluno, pessoa, crianca };

const gola = (cor, a = .9) => (x, w, h) => { x.fillStyle = cor; x.fillRect(0, h * a, w, h * (1 - a)); };
const texto = (s, cor, tam, y = .5) => (x, w, h) => { x.fillStyle = cor; x.font = `900 ${tam}px Inter`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(s, w / 2, h * y); };

/** Davi: 8 anos, banguela, cabelo cacheado escuro, camiseta amarela, bermuda azul, chinelo trocado. */
export const DAVI = { pele: '#E3AE86', cabelo: 'cacheado', corCabelo: '#3A2216', nariz: true, banguela: true, sardas: true, camisa: '#F6C83A', calca: '#3E6EC8', meia: '#E3AE86', tenis: '#E3AE86', sola: '#E2443A', chinelo: '#E2443A', escala: .64,
  estampa: (x, w, h) => { gola('#E0A824', .88)(x, w, h); x.fillStyle = '#E2443A'; x.beginPath(); for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + i * 2.513; x.lineTo(w / 2 + Math.cos(a) * 46, h * .5 + Math.sin(a) * 46); const b = a + 1.256; x.lineTo(w / 2 + Math.cos(b) * 19, h * .5 + Math.sin(b) * 19); } x.fill(); } };
/** Davi de pijama azul com estrelinhas. */
export const DAVIPIJAMA = { ...DAVI, camisa: '#6E8ED8', calca: '#6E8ED8', manga: 'longa',
  estampa: (x, w, h) => { x.fillStyle = '#F6E27A'; for (let i = 0; i < 22; i++) { const cx = (i * 137) % w, cy = (i * 71) % h; x.beginPath(); for (let j = 0; j < 5; j++) { const a = -Math.PI / 2 + j * 2.513; x.lineTo(cx + Math.cos(a) * 13, cy + Math.sin(a) * 13); x.lineTo(cx + Math.cos(a + 1.256) * 5, cy + Math.sin(a + 1.256) * 5); } x.fill(); } } };

/** Dona Rose: mãe, caixa do mercado, uniforme vermelho com crachá, cabelo preso. */
const uniformeMercado = (x, w, h) => { gola('#B02A24', .9)(x, w, h); x.fillStyle = '#B02A24'; x.fillRect(w / 2 - 6, 0, 12, h * .3);
  x.fillStyle = '#F4F1EA'; x.fillRect(w / 2 + 70, h * .3, 120, 70); x.fillStyle = '#2A2A30'; x.font = '900 30px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('ROSE', w / 2 + 130, h * .3 + 35);
  x.fillStyle = '#FFE08A'; x.font = '900 36px Inter'; x.fillText('BOM PREÇO', w / 2 - 110, h * .62); };
export const ROSE = { pele: '#D9A07A', cabelo: 'coque', corCabelo: '#2E1E16', cilios: true, nariz: true, brincos: '#F2C230', camisa: '#D8362E', calca: '#2A2A30', tenis: '#2A2A30', sola: '#F4F1EA', escala: .93, estampa: uniformeMercado };
/** Dona Rose em casa (blusa lilás). */
export const ROSECASA = { ...ROSE, camisa: '#9C7AC8', estampa: gola('#8A66B8', .9) };

/** Tiago: melhor amigo, boné vermelho pra trás, camiseta verde, sempre com o celular. */
export const TIAGO = { pele: '#8A5A3E', cabelo: 'curto', corCabelo: '#1A1212', bone: '#E2443A', boneTras: true, nariz: true, tronco: 'barriga', camisa: '#3EA864', calca: '#3E5A7A', tenis: '#F4F1EA', sola: '#E2443A', escala: .97,
  estampa: (x, w, h) => { texto('23', '#F4F1EA', 120)(x, w, h); gola('#2E8E50', .9)(x, w, h); } };
/** Tiago com uniforme da escola. */
export const TIAGOESC = { ...aluno(2), pele: '#8A5A3E', cabelo: 'curto', corCabelo: '#1A1212', bone: '#E2443A', boneTras: true, tronco: 'barriga', escala: .97 };
/** Guilherme com uniforme da escola (camiseta branca por baixo do moletom aberto não dá: usa o moletom). */
export const GUIESC = GUI;

/** Professor de história: óculos, bigode grisalho, camisa social bege, gravata. */
export const PROFH = { pele: '#E3B28E', cabelo: 'curto', corCabelo: '#8A8680', bigode: '#7A7670', oculos: true, nariz: true, rugas: true, tronco: 'barriga', camisa: '#E2D2A8', manga: 'longa', calca: '#5A4A3A', tenis: '#3A2A20', sola: '#2A1E16', escala: 1.04,
  estampa: (x, w, h) => { x.fillStyle = '#7A2E2E'; x.beginPath(); x.moveTo(w / 2 - 16, 0); x.lineTo(w / 2 + 16, 0); x.lineTo(w / 2 + 22, h * .6); x.lineTo(w / 2, h * .7); x.lineTo(w / 2 - 22, h * .6); x.fill(); } };
/** Professor de educação física: agasalho azul com listras brancas, apito no pescoço. */
export const PROFEF = { pele: '#B8805A', cabelo: 'curto', corCabelo: '#2A2020', nariz: true, camisa: '#2E5EB8', manga: 'longa', calca: '#2E5EB8', tenis: '#F4F1EA', sola: '#2A2A30', escala: 1.04,
  estampa: (x, w, h) => { x.fillStyle = '#F4F1EA'; x.fillRect(w * .18, 0, 18, h); x.fillRect(w * .82 - 18, 0, 18, h); x.strokeStyle = '#E8E4DC'; x.lineWidth = 5; x.beginPath(); x.moveTo(w / 2 - 50, 0); x.lineTo(w / 2, h * .3); x.lineTo(w / 2 + 50, 0); x.stroke(); x.fillStyle = '#C9CED6'; x.beginPath(); x.ellipse(w / 2, h * .32, 22, 14, 0, 0, 7); x.fill(); } };
/** Caio: 3º ano, campeão do clube, óculos, cabelo arrumado, camisa polo branca do uniforme. */
export const CAIO = { ...aluno(0), pele: '#F0C8A6', cabelo: 'topete', corCabelo: '#C99A4A', oculos: true, nariz: true, escala: 1.0, sobr: '#9A7030' };
/** Adversário da final: 19 anos, terno preto, gravata, fones no pescoço (desenhados na gola). */
export const ADV = { pele: '#C98C66', cabelo: 'curto', corCabelo: '#1A1212', nariz: true, sobr: '#1A1212', camisa: '#1E2028', manga: 'longa', calca: '#1E2028', tenis: '#121216', sola: '#121216', escala: 1.02,
  estampa: (x, w, h) => { x.fillStyle = '#F4F1EA'; x.beginPath(); x.moveTo(w / 2 - 60, 0); x.lineTo(w / 2, h * .42); x.lineTo(w / 2 + 60, 0); x.fill(); x.fillStyle = '#7A1E2E'; x.fillRect(w / 2 - 9, 0, 18, h * .4);
    x.strokeStyle = '#E2443A'; x.lineWidth = 14; x.beginPath(); x.arc(w / 2, -10, 92, .15, Math.PI - .15); x.stroke(); x.fillStyle = '#E2443A'; for (const s of [-1, 1]) { x.beginPath(); x.ellipse(w / 2 + s * 86, 40, 24, 30, 0, 0, 7); x.fill(); } } };
/** Juiz do campeonato: camisa branca, colete escuro, crachá. */
export const JUIZ = { pele: '#E3B28E', cabelo: 'careca', corCabelo: '#7A7670', barba: '#9A968F', oculos: true, nariz: true, tronco: 'barriga', camisa: '#F4F1EA', manga: 'longa', calca: '#2A2A30', tenis: '#1E1A18', sola: '#1E1A18', escala: 1.03,
  estampa: (x, w, h) => { x.fillStyle = '#2A2E3A'; x.fillRect(0, 0, w * .34, h); x.fillRect(w * .66, 0, w * .34, h); x.fillStyle = '#F2C230'; x.fillRect(w * .7, h * .3, 70, 50); } };
/** Ciclista: camiseta esportiva laranja, bermuda preta. */
export const CICLISTA = { pele: '#B8805A', cabelo: 'curto', corCabelo: '#2A2020', nariz: true, barba: '#3A2A20', camisa: '#F27A2E', calca: '#1E1E22', tenis: '#F4F1EA', sola: '#2A2A30', escala: 1.03,
  estampa: (x, w, h) => { x.fillStyle = '#1E1E22'; x.fillRect(0, h * .4, w, h * .08); } };
/** Professora do Davi. */
export const PROFA = { pele: '#C98C66', cabelo: 'rabo', corCabelo: '#3A2418', laco: '#E57AA0', cilios: true, nariz: true, oculos: true, camisa: '#4FB8A0', calca: '#3A3A44', saia: '#3A3A44', tenis: '#3A2A20', escala: .96 };
/** Mãe/pai/irmão da plateia do dia da família. */
export const familia = (i) => pessoa(i + 1, { escala: .97 + (i % 3) * .03 });
export const crianca2 = (i, extra = {}) => crianca(i, { escala: .62, ...extra });
