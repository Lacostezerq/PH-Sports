// As cenas do vídeo "E se um asteroide viesse direto para a Terra?".
import { shotTV, shotRumo, shotSegunda, shotDinos } from './cenas-a.js';
import { shotDart, shotControle, shotJanela, shotPiscina } from './cenas-b.js';
import { shotOrbitas, shotLonge, shotFinal } from './cenas-c.js';
export const CENAS = [
  [shotTV, 0, 2.9], [shotRumo, 2.9, 4.8], [shotSegunda, 4.8, 8.6], [shotDinos, 8.6, 14.2],
  [shotDart, 14.2, 20.8], [shotControle, 20.8, 25.3], [shotJanela, 25.3, 28.8], [shotPiscina, 28.8, 31.4],
  [shotOrbitas, 31.4, 35.1], [shotLonge, 35.1, 38.1], [shotFinal, 38.1, 47.4],
];
