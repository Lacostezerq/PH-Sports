import * as THREE from 'three';
import { mk, cam, ator, rosto, frenteDe, sentado } from './cf.js';
import { montaCasa, sentaMesa, telNaMao, sentadoCel } from './casa_cena.js';
import { GUI } from './elenco_foco.js';
import { sph } from './motor/toon.js';
const mkT = (t0, P) => mk(t0, t0 + 1, { bg: '#DDE6EE', fov: 50, limpa: false, perto: true }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); const m = sph(.02, '#FF0000'); c.add(m);
  return (t, u, cm) => { g.pose(sentadoCel(t)); rosto(g, null, t, 'neutro'); telNaMao(K.tel, g); K.tel.tela('chat', .5); const F = [0,0,0]; m.position.set(...F); cam(cm, P, [-.8, 1.0, .25], 0, 0, 0); return {}; }; });
export const TESTE = [mkT(0, [-.7, 1.3, 1.4]), mkT(1, [-.75, 2.3, .26]), mkT(2, [.6, 1.4, .25])];
