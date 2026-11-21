// Tour por Pedra Alta: um passeio pela cidade mostrando os lugares e o que funciona sozinho.
import { cenaCidade, ator } from '../../../mundo/cidade/video.js';
import { GUI30 } from '../../../mundo/base/elenco.js';

export const DURACAO = 84;
export const CENAS = [
  cenaCidade(0, 7, { vista: 'cidadeAerea', mover: [[0, 'cidadeAerea'], [7, { cam: [95, 55, 75], alvo: [0, 2, -25] }]] }),
  cenaCidade(7, 14, { vista: 'avenida', mover: [[0, 'avenida'], [7, { cam: [-14, 6, 0], alvo: [-75, 1.2, 0] }]] }),
  cenaCidade(14, 21, { vista: 'pracaChao', mover: [[0, { cam: [8, 6, 0], alvo: [0, 2.2, -22] }], [7, { cam: [-8, 6, 0], alvo: [0, 2.6, -21] }]] }),
  cenaCidade(21, 27, { vista: 'igrejaDentro', mover: [[0, 'igrejaDentro'], [6, { cam: [.6, 1.9, -40], alvo: [0, 2.6, -50] }]] }),
  cenaCidade(27, 37, { vista: 'casaFrente', mover: [[0, 'casaFrente'], [4, 'casaFrente'], [10, { cam: [-66.7, 3.15, 65.2], alvo: [-62.7, 1.15, 72.8] }]] }, (C) => {
    const k = ator(C, GUI30); C.andar(k, ['casaFamilia.rua', 'casaFamilia.portao', 'casaFamilia.frente'], 27.6);
    C.portas['casaFamilia.portao'] && (C.portas['casaFamilia.portao'].auto = true);
  }),
  cenaCidade(37, 44, { vista: 'sala' }, (C) => { const k = ator(C, GUI30); C.andar(k, ['casaFamilia.frente', 'casaFamilia.sala', 'casaFamilia.cozinha'], 37.2); }),
  cenaCidade(44, 50, { vista: 'quartoFilho', mover: [[0, 'quartoFilho'], [6, { cam: [-69.2, 1.8, 74.2], alvo: [-69.4, .8, 77.6] }]] }),
  cenaCidade(50, 56, { vista: 'padaria' }),
  cenaCidade(56, 62, { vista: 'salaDeAula' }),
  cenaCidade(62, 68, { vista: 'salaEspera' }),
  cenaCidade(68, 75, { vista: 'lago', mover: [[0, 'lago'], [7, { cam: [-8, 3, 180], alvo: [-45, 6, 133] }]] }),
  cenaCidade(75, 84, { vista: 'noitePraca', mover: [[0, 'noitePraca'], [9, { cam: [30, 16, 12], alvo: [0, 2, -28] }]] }),
];
// os nomes que aparecem na tela estão em legendas.mjs
