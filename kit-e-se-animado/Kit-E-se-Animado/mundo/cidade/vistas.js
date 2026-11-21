// Vistas prontas (câmera + para onde olha + hora). Use montarCidade(cena, { vista: 'sala' }) ou C.vista('sala').
// Coordenadas dentro do lote (frente do lote em +z); o programa converte para o mapa.
import { lotes, MEIOFIO } from './mapa.js';
import { paraMundo } from './util.js';

// [lote, câmera [x,y,z], alvo [x,y,z], fov, hora, descrição]
const V = {
  // ---- casa da família ----
  casaFrente:     ['casaFamilia', [-3.5, 2.4, 18.5], [.8, 1.8, 5.5], 44, 15, 'Fachada da casa da família vista da Rua das Flores'],
  portao:         ['casaFamilia', [-.2, 1.6, 13.5], [-2.6, 1.3, 7], 45, 15, 'Portão e garagem com o carro'],
  sala:           ['casaFamilia', [-1.6, 1.6, 5.15], [-1.6, .95, 1.6], 62, 15, 'Sala: sofá, TV, estante, ventilador'],
  salaTV:         ['casaFamilia', [-.6, 1.3, 2.4], [-4.4, .9, 3.8], 50, 20, 'Sala vista do lado da TV (sofá de frente)'],
  cozinha:        ['casaFamilia', [.3, 1.6, -2.9], [-4.3, 1.0, .1], 55, 12, 'Cozinha: pia, fogão, geladeira, mesa'],
  mesaJantar:     ['casaFamilia', [-.2, 1.5, .9], [-2.4, .8, -1.8], 50, 19.5, 'Mesa de jantar da família'],
  quartoFilho:    ['casaFamilia', [1.7, 1.75, 5.0], [4.0, .75, 1.9], 62, 16, 'Quarto do filho: cama, computador, pôsteres'],
  quartoCasal:    ['casaFamilia', [3.7, 1.6, -2.4], [1.2, .7, -5.0], 55, 21, 'Quarto do casal'],
  banheiro:       ['casaFamilia', [2.75, 1.8, .12], [1.2, .7, -1.55], 75, 9, 'Banheiro'],
  servico:        ['casaFamilia', [-4.0, 1.6, -3.6], [.4, .9, -5.8], 55, 10, 'Área de serviço: tanque e máquina'],
  quintal:        ['casaFamilia', [-4.2, 1.7, -7.0], [2.8, .8, -10.2], 50, 17, 'Quintal com churrasqueira, mesa e cachorro'],
  // ---- centro ----
  praca:          ['praca', [24, 9, 30], [0, 2, 4], 45, 10, 'Praça da Matriz vista de cima, de lado'],
  pracaChao:      ['praca', [11, 1.7, 23], [-1, 2.5, 6], 45, 16, 'Praça no nível dos olhos: coreto, árvores, bancos'],
  igreja:         ['praca', [5, 1.7, 7.0], [0, 6, -10], 55, 9, 'Igreja Matriz de frente'],
  igrejaDentro:   ['praca', [1.2, 1.7, -6.5], [0, 2.4, -19], 60, 10, 'Dentro da igreja: bancos, altar, vitrais'],
  coreto:         ['praca', [-9, 2.2, 19], [0, 2.8, 11], 45, 17.5, 'Coreto'],
  fonte:          ['praca', [5.5, 1.3, 7], [0, 1.2, 1.5], 45, 11, 'Fonte da praça'],
  parquinho:      ['praca', [-10.5, 1.65, 20.8], [-14.5, .9, 12], 55, 16, 'Parquinho'],
  avenida:        [null, [-2, 1.7, 3.2], [-60, 2, -2], 45, 15, 'Avenida Brasil com as lojas'],
  padaria:        ['padaria', [2.6, 1.65, 9], [-1.5, 1.1, 0], 58, 7.5, 'Dentro da padaria'],
  padariaFrente:  ['padaria', [1.5, 1.6, 17], [0, 2.6, 10], 45, 7.5, 'Fachada da padaria'],
  farmacia:       ['farmacia', [3.2, 1.65, 9], [-1, 1.1, -1], 58, 15, 'Dentro da farmácia'],
  loterica:       ['loterica', [3.5, 1.65, 9.5], [-1, 1.4, 0], 58, 14, 'Dentro da lotérica'],
  lanchonete:     ['lanchonete', [3.5, 1.65, 9.5], [-1.2, 1.1, 0], 58, 13, 'Dentro da lanchonete'],
  banco:          ['banco', [4, 1.7, 9.5], [-1, 1.2, 0], 58, 11, 'Dentro do banco: caixas, fila, senha'],
  mercado:        ['mercado', [8.5, 1.8, 9.5], [-2, 1.1, 0], 58, 10, 'Dentro do supermercado'],
  sorveteria:     ['sorveteria', [3.5, 1.65, 9.5], [-.5, 1.1, 0], 58, 15, 'Dentro da sorveteria'],
  lojaRoupas:     ['lojaRoupas', [3.5, 1.65, 9.5], [-1.5, 1.1, 0], 58, 15, 'Dentro da loja de roupas'],
  bar:            ['bar', [-3.6, 1.7, 9.6], [1.5, 1.0, 1.0], 58, 19.5, 'Dentro do bar'],
  prefeitura:     ['prefeitura', [5, 1.6, 22], [0, 5, 6], 50, 11, 'Prefeitura com colunas e bandeiras'],
  // ---- outros lugares ----
  escola:         ['escola', [6, 1.7, 30], [0, 3, 18], 45, 7.2, 'Portão da escola'],
  salaDeAula:     ['escola', [-10.6, 2.1, -11.7], [-19, 1.1, -17], 62, 9, 'Sala de aula com alunos'],
  quadra:         ['escola', [-9, 2.6, 4], [10, .8, 8], 55, 15, 'Quadra coberta da escola'],
  hospital:       ['santaCasa', [-8, 1.7, 21], [2, 3, 7], 45, 14, 'Fachada da Santa Casa com a ambulância'],
  salaEspera:     ['santaCasa', [2.5, 1.7, 4.8], [-12, 1, -1], 60, 14, 'Sala de espera do hospital'],
  enfermaria:     ['santaCasa', [4, 1.7, -4.5], [10, .8, -9], 60, 22, 'Enfermaria com leitos'],
  consultorio:    ['santaCasa', [-4.3, 1.7, -4.6], [-12, 1, -8], 60, 10, 'Consultório'],
  rodoviaria:     ['rodoviaria', [-.8, 1.7, 25], [0, 3, 8], 48, 16, 'Rodoviária'],
  plataforma:     ['rodoviaria', [17.5, 2.0, -3.9], [-8, 1.5, -9], 55, 16, 'Plataforma com os ônibus'],
  posto:          ['posto', [12, 1.7, 24], [0, 2.5, 8], 45, 18, 'Posto de gasolina'],
  campo:          ['campo', [0, 3.4, 15], [0, 1, -4], 50, 16.5, 'Campo de futebol de várzea'],
  // ---- paisagens ----
  cidadeAerea:    [null, [210, 150, 230], [0, 0, 0], 45, 15, 'A cidade inteira de cima'],
  pedraAlta:      [null, [36, 30, -112], [60, 135, -540], 42, 16.5, 'A Pedra Alta vista da cidade'],
  lago:           [null, [5, 3, 178], [-35, 6, 132], 50, 17.4, 'Orla do lago vista da água: deck, quiosques, palmeiras e a cidade atrás'],
  ruaDasFlores:   [null, [-90, 1.7, 63], [-40, 2, 64], 45, 15, 'Rua das Flores (rua da casa da família)'],
  noitePraca:     ['praca', [22, 6, 28], [0, 2.5, 6], 45, 20.5, 'Praça à noite, com tudo aceso'],
};
let LOTES = null;
/** Devolve a vista no mapa: { cam, alvo, fov, hora, foco, texto }. */
const DENTRO = new Set(['sala', 'salaTV', 'cozinha', 'mesaJantar', 'quartoFilho', 'quartoCasal', 'banheiro', 'servico', 'igrejaDentro', 'padaria', 'farmacia', 'loterica', 'lanchonete', 'banco', 'mercado', 'sorveteria', 'lojaRoupas', 'bar', 'salaDeAula', 'salaEspera', 'enfermaria', 'consultorio']);
export function vista(nome) {
  const v = V[nome]; if (!v) return null; LOTES = LOTES || lotes();
  const L = v[0] ? LOTES.find(l => l.nome === v[0]) : null;
  const conv = (p) => { if (!L) return p.slice(); const q = paraMundo(L, p[0], p[2]); return [q[0], p[1] + MEIOFIO, q[1]]; };
  const cam = conv(v[1]), alvo = conv(v[2]);
  return { cam, alvo, fov: v[3], hora: v[4], texto: v[5], dentro: DENTRO.has(nome), foco: L ? [L.x, L.z] : [alvo[0] * .3 + cam[0] * .7, alvo[2] * .3 + cam[2] * .7] };
}
export const VISTAS = new Proxy({}, { get: (_, k) => typeof k === 'string' ? vista(k) : undefined, ownKeys: () => Object.keys(V), getOwnPropertyDescriptor: (_, k) => V[k] ? { enumerable: true, configurable: true } : undefined, has: (_, k) => k in V });
export const LISTA_VISTAS = Object.fromEntries(Object.entries(V).map(([k, v]) => [k, v[5]]));
