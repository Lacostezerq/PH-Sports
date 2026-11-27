import { ATO0 } from './ato0.js';
import { ATO1 } from './ato1.js';
import { ATO2 } from './ato2.js';
import { TESTE } from './teste_elenco.js';
export const CENAS = location.search.includes('teste') ? TESTE : [...ATO0, ...ATO1, ...ATO2];
