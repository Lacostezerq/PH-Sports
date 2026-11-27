import * as THREE from 'three';
import { mk, cam, ator, rosto, parado } from './cf.js';
import { GUI } from './elenco_foco.js';
import { sph } from './motor/toon.js';
import { alcanca, naCabeca, palma, aponta } from './ik.js';
import { escova } from './objs.js';
// cena de teste: Gui em pé, mão direita na boca (IK). t 0..1 frente, 1..2 lado, 2..3 3/4
const B = [0, .17, .29];
const mkT = (t0, P) => mk(t0, t0 + 1, { bg: '#DDE6EE', fov: 30, limpa: false, perto: true }, (c) => { c.add(new THREE.AmbientLight('#fff', 1.2)); const d = new THREE.DirectionalLight('#fff', 1.5); d.position.set(2, 4, 3); c.add(d);
  const g = ator(c, GUI, 0, 0, 0); const m = sph(.012, '#FF0000'); c.add(m); const e = escova(); e.scale.setScalar(1.6); c.add(e);
  return (t, u, cm) => { const b = naCabeca(g, ...B); m.position.copy(b); const alvo = naCabeca(g, -.17 + Math.sin(t * 40) * .025, .14, .34);
    alcanca(g, 'R', alvo, parado(t, 1)); const pm = palma(g, 'R'); e.position.copy(pm); aponta(e, pm, b); rosto(g, null, t, 'neutro', { mouth: { open: .35 } });
    g.headG.updateMatrixWorld(true); const h = g.headG.getWorldPosition(new THREE.Vector3());
    cam(cm, P, [h.x, h.y - .25, h.z], 0, 0, 0); return {}; }; });
export const TESTE = [mkT(0, [0, 1.3, 2.4]), mkT(1, [-2.4, 1.3, .1]), mkT(2, [-1.4, 1.5, 1.9])];
