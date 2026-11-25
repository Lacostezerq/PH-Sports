import { mk, cam, ator, rosto } from './base.js';
import { GUI, CIDA } from './gente.js';
import { luzToon, bx } from './motor/toon.js';
import { parado } from './mov.js';
export const TESTE = [mk(0, 5, { bg: '#C8D4DC', fov: 30 }, (c) => { luzToon(c, { r: 8, pos: [3, 8, 6], ki: 1.4, hemi: 1.4 }); c.add(bx(20, .02, 10, '#B8B0A0', 0, -.01, 0));
  const a = ator(c, GUI, -.3, 0, .3), b = ator(c, CIDA, .3, 0, -.3);
  return (t, u, cm) => { a.pose(parado(t)); b.pose(parado(t, 2)); rosto(a, null, t); rosto(b, null, t); cam(cm, [0, .4, 1.3], [0, .05, 0], u, 0, 0); return {}; }; })];
