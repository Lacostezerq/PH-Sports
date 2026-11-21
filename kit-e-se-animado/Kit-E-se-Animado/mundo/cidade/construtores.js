// Liga cada tipo de lote do mapa à função que o desenha.
import { casa, sobrado, casaFamilia } from './casas.js';
import { loja, prefeitura } from './lojas.js';
import { praca, escola, santaCasa, rodoviaria, posto, campo } from './publicos.js';
export const CONSTRUTORES = { casa, sobrado, casaFamilia, prefeitura, praca, escola, santaCasa, rodoviaria, posto, campo };
for (const t of ['padaria', 'farmacia', 'loterica', 'lanchonete', 'banco', 'mercado', 'sorveteria', 'lojaRoupas', 'bar', 'lojaMateriais']) CONSTRUTORES[t] = loja(t);
