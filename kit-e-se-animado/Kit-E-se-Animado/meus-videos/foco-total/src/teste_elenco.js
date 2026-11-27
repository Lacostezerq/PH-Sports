import * as THREE from 'three';
import { mk, cam, ator, rosto } from './base.js';
import { GUI, DAVI, ROSE } from './elenco_foco.js';
import { casa, mercado, cantina, campinho, salao, salaDavi, corredorDavi, vazio } from './lugares_foco.js';
export const TESTE = [
  mk(0, 1, { bg: '#DDE6EE', fov: 40 }, (c) => { casa(c, { corte: true }); return (t, u, cm) => { cam(cm, [-.2, 2.2, 7.5], [-.3, 1.1, 0], 0, 0, 0); return {}; }; }),
  mk(1, 2, { bg: '#DDE6EE', fov: 50 }, (c) => { casa(c, {}); const g = ator(c, GUI, -.6, .3, -Math.PI / 2); return (t, u, cm) => { cam(cm, [1.0, 1.5, 1.3], [-1.0, .9, .1], 0, 0, 0); return {}; }; }),
  mk(2, 3, { bg: '#DDE6EE', fov: 40 }, (c) => { mercado(c); const r = ator(c, ROSE, 0, -.4, 0); return (t, u, cm) => { cam(cm, [1.6, 1.6, 2.6], [0, 1.0, 0], 0, 0, 0); return {}; }; }),
  mk(3, 4, { bg: '#DDE6EE', fov: 40 }, (c) => { cantina(c); return (t, u, cm) => { cam(cm, [3.5, 1.8, 3.5], [0, 1, -1.5], 0, 0, 0); return {}; }; }),
  mk(4, 5, { bg: '#DDE6EE', fov: 40 }, (c) => { campinho(c); ator(c, DAVI, 0, 0, 0); ator(c, GUI, -1, .5, 0); return (t, u, cm) => { cam(cm, [0, 2.0, 7], [0, .8, 0], 0, 0, 0); return {}; }; }),
  mk(5, 6, { bg: '#1A1A22', fov: 45 }, (c) => { salao(c); return (t, u, cm) => { cam(cm, [6, 7, 12], [0, 1, 0], 0, 0, 0); return {}; }; }),
  mk(6, 7, { bg: '#DDE6EE', fov: 45 }, (c) => { salaDavi(c, { empilhadas: true }); ator(c, DAVI, 2.6, -2.3, -Math.PI * .8).place(2.6, -2.3, .32 - .28 * .64, -Math.PI * .8); return (t, u, cm) => { cam(cm, [-2.5, 1.8, 2.6], [1.5, .6, -1.8], 0, 0, 0); return {}; }; }),
  mk(7, 8, { bg: '#DDE6EE', fov: 45 }, (c) => { corredorDavi(c); return (t, u, cm) => { cam(cm, [0, 1.6, 2.5], [0, 1.3, -6], 0, 0, 0); return {}; }; }),
];
