import { ATO0 } from './ato0.js';
import { ATO1 } from './ato1.js';
import { ATO2 } from './ato2.js';
import { ATO3, ATO4 } from './ato3.js';
import { ATO5, ATO6, ATO7 } from './ato5.js';
import { ATO8 } from './ato8.js';
import { ATO9 } from './ato9.js';
import { TESTE } from './teste_elenco.js';
export const CENAS = location.search.includes('teste') ? TESTE : [...ATO0, ...ATO1, ...ATO2, ...ATO3, ...ATO4, ...ATO5, ...ATO6, ...ATO7, ...ATO8, ...ATO9];
