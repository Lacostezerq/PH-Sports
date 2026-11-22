// QUARTA-FEIRA — invisível (167,7 a 221,4 s).
import * as THREE from 'three';
import { rosto, fala, gesto, sentar } from './lib.js';
import { idle, walk, sentado } from './motor/char3d.js';
import { clamp, smooth, lerp } from './motor/core.js';
import { cyl, bx, rb, sph } from './motor/toon.js';
import { cena, ator, cam, casa, casaRy, hosp, PISO, PISOH , semFigurante, LADO_DUDU } from './cena.js';
import { GUIRUA, DUDU2, povo } from './elenco.js';
import { fantasma, mochila } from './pecas.js';
import { carro } from '../../../mundo/cidade/moveis.js';

const FX3 = { tint: '#EAF2EC', sat: .93 }; // quarta: cinza-esverdeado
function escova() { const g = new THREE.Group(); g.add(cyl(.008, .009, .17, '#3E9AD9', 0, 0, 0, { seg: 8, rot: [0, 0, Math.PI / 2] })); g.add(bx(.03, .018, .012, '#F4F1EA', .09, .012, 0)); g.add(rb(.028, .012, .012, '#E8F4FF', .09, .026, 0, { r: .004 })); return g; }
function poeira3(C, n = 10) { const ps = []; for (let i = 0; i < n; i++) { const m = new THREE.Mesh(new THREE.SphereGeometry(.12, 8, 6), new THREE.MeshBasicMaterial({ color: '#D8D2C4', transparent: true, opacity: 0, depthWrite: false })); C.cena.add(m); ps.push(m); } return ps; }

// Dudu andando cabisbaixo
const triste = (t) => ({ ...walk(t, 1.5, .7), headX: 14, shL: [-6, 6], shR: [6, 6] });

export const DIA3 = [
  // Z — o espelho do banheiro vazio e a escova de dente escovando sozinha
  cena(167.7, 177.3, { foco: casa(1.9, -.75), hora: 7.9, dentro: true, raio: 28, pedestres: 0, fx: FX3 }, (C) => {
    const e = escova(); e.scale.setScalar(1.6); C.cena.add(e); const [px, pz] = casa(2.45, -.35);
    return (t, u, c) => {
      const esc = t > 171.6 ? Math.sin(t * 16) * .03 : 0;
      e.position.set(px + .02 + esc * .4, 1.52 + Math.sin(t * 1.3) * .02, pz + esc); e.rotation.set(0, Math.PI / 2 + .2, -.15 + Math.sin(t * 16) * .08 * (t > 171.6));
      const [cx2, cz2] = casa(1.25, -.15), [ax, az] = casa(2.95, -.4);
      cam(c, [[0, [casa(1.05, .05)[0], 1.55, casa(1.05, .05)[1]]], [1, [casa(1.35, -.05)[0], 1.55, casa(1.35, -.05)[1]]]], [px, 1.5, pz], u / 9.6); return { focus: 1.2, range: 1, blur: 6 };
    };
  }),
  // AA — invisível na calçada, todo feliz, e ninguém vê
  cena(177.3, 183.3, { foco: [-38, 8], hora: 9, raio: 32, fx: FX3 }, (C) => {
    const g = ator(C, GUIRUA, -38.5, 6.4, Math.PI * .1); mochila(g); fantasma(g, .3);
    const gente = [0, 1, 2].map(i => { const k = povo(i + 30); C.cena.add(k.root); C.andar(k, [[-46 + i * 1.2, 5.8 + (i % 2) * 1.6], [-30 + i, 5.8 + (i % 2) * 1.6]], 177.2 + i * .7, { vel: 1.1, direto: true }); return k; });
    return (t, u, c) => {
      fantasma(g, .28 + Math.sin(t * 3) * .04);
      g.pose({ bob: Math.abs(Math.sin(t * 4)) * .05, shL: [150 + Math.sin(t * 6) * 15, 30], shR: [150 + Math.sin(t * 6 + 1) * 15, 30], elL: 20, elR: 20, hipL: [Math.sin(t * 4) * 15, 4], hipR: [-Math.sin(t * 4) * 15, 4], knL: 10, knR: 10, twist: Math.sin(t * 2) * 15 });
      rosto(g, null, t, 'rindo', { smile: 1 }); g.root.rotation.y = Math.PI * .1 + Math.sin(t * 1.5) * .5;
      cam(c, [[0, [-34.5, 1.55, 6.9]], [1, [-35, 1.6, 7.6]]], [-38.5, 1.3, 6.2], u / 6); return { focus: 4, range: 3, blur: 4 };
    };
  }),
  // AB — a faixa: o carro passa raspando e o motorista nem percebe
  cena(183.3, 189.1, { foco: [-30, 6], hora: 9.1, raio: 32, carros: 0, fx: FX3 }, (C) => {
    const g = ator(C, GUIRUA, -35.6, 7.2, Math.PI / 2); mochila(g); fantasma(g, .3);
    const a = carro('#E2443A', 3); C.cena.add(a); const pz = poeira3(C);
    const tp = 185.55; // o carro passa pela faixa
    return (t, u, c) => {
      a.position.set(-32.5, 0, 7.2 + (t - tp) * 11); a.rotation.y = 0; a.traverse(m => { if (m.userData.roda) m.rotation.x = t * 30; });
      const sai = smooth(184.2, 184.9, t), volta = smooth(tp - .35, tp + .1, t);
      const x = -35.6 + sai * 1.2 - volta * 1.6; g.place(x, 7.2, .15 * (x < -35 ? 1 : 0) + (volta > 0 && volta < 1 ? Math.sin(volta * Math.PI) * .35 : 0), Math.PI / 2);
      g.pose(volta > 0 ? { lean: -20 * (1 - Math.abs(volta - .5) * 2), shL: [120, 50], shR: [120, 50], elL: 30, elR: 30, knL: 40, knR: 40, hipL: [30, 0], hipR: [30, 0] } : sai > 0 && sai < 1 ? walk(t) : idle(t));
      rosto(g, null, t, t < tp - .4 ? 'feliz' : 'medo', { look: [-.6, 0] }); fantasma(g, .3);
      pz.forEach((m, i) => { const d = t - tp; m.material.opacity = d > 0 && d < 1.6 ? .45 * (1 - d / 1.6) : 0; const ang = i / 10 * 6.283; m.position.set(-33.8 + Math.cos(ang) * d * .8, .3 + i * .06 + d * .3, 7.2 + Math.sin(ang) * d * .8 + d * 1.5); m.scale.setScalar(.6 + d * 1.4); });
      cam(c, [[0, [-37.6, 1.15, 10.4]], [1, [-37.3, 1.2, 10.0]]], [-33.2, 1.0, 6.9], u / 5.8); return { focus: 4.5, range: 3, blur: 4 };
    };
  }),
  // AC — "Tá bom, tá bom, invisível na calçada, entendi."
  cena(189.1, 192.8, { foco: [-36, 7], hora: 9.1, raio: 32, fx: FX3 }, (C) => {
    const g = ator(C, GUIRUA, -36.4, 6.9, Math.PI * .35); mochila(g); fantasma(g, .32);
    return (t, u, c) => { fala(g, 'gui', t, 'medo', { shR: [60, -20], elR: 120, lean: 12 + Math.sin(t * 7) * 3, bob: -.03 }, 1); fantasma(g, .32);
      cam(c, [[0, [-34.4, 1.5, 8.6]], [1, [-34.8, 1.5, 8.3]]], [-36.4, 1.35, 6.9], u / 3.7); return { focus: 2.6, range: 2, blur: 7 }; };
  }),
  // AD — seguindo o Dudu: ele sai do trabalho cabisbaixo, a caminho do ponto
  cena(192.8, 200.1, { foco: [-20, 6], hora: 17.6, raio: 32, fx: FX3 }, (C) => {
    const d = ator(C, DUDU2, -23.5, 6.1, Math.PI / 2); const g = ator(C, GUIRUA, -26.4, 6.6, Math.PI / 2); mochila(g); fantasma(g, .3);
    C.andar(d, [[-23.5, 6.1], [-14.5, 6.1]], 192.9, { vel: 1.0, direto: true, semPose: true }); C.andar(g, [[-26.4, 6.6], [-17.6, 6.6]], 193.3, { vel: 1.0, direto: true });
    return (t, u, c) => {
      d.pose(t < 192.9 + 9.3 ? triste(t) : idle(t)); rosto(d, null, t, 'triste', { look: [0, .6] }); fantasma(g, .3); rosto(g, null, t, 'desconfiado');
      const p = d.root.position; cam(c, [p.x + 3.6, 1.45, 4.6], [p.x - 1.4, 1.25, 6.4], u / 7.3); return { focus: 4.0, range: 3, blur: 5 };
    };
  }),
  // AE — ele entra na Santa Casa (a porta automática abre)
  cena(200.1, 203.6, { foco: [60, -80], hora: 17.8, raio: 30, fx: FX3 }, (C) => {
    const d = ator(C, DUDU2, 56, -74, Math.PI); const g = ator(C, GUIRUA, 54.6, -71.8, Math.PI); mochila(g); fantasma(g, .3);
    C.andar(d, [[56.5, -74.5], [60, -78], [60, -85]], 200.15, { vel: 1.2, semPose: true }); C.andar(g, [[55, -72.4], [59.6, -77.4], [59.8, -82]], 200.9, { vel: 1.2 });
    return (t, u, c) => { d.pose(triste(t)); rosto(d, null, t, 'triste'); fantasma(g, .3);
      const p = d.root.position; cam(c, [[0, [p.x + 3.2, 1.7, p.z + 3.4]], [1, [p.x + 2.6, 1.65, p.z + 3.0]]], [p.x - .4, 1.3, p.z - .6], u / 3.5); return { focus: 4.2, range: 4, blur: 3 }; };
  }),
  // AF — sala de espera: o Dudu sozinho; o Guilherme a dois passos, a mão quase no ombro
  cena(203.6, 211.8, { foco: [52, -88], hora: 18, dentro: true, raio: 26, fx: FX3 }, (C) => {
    const [dx, dz] = hosp(-8.45, .35); semFigurante(C, LADO_DUDU); const d = ator(C, DUDU2, dx, dz, Math.PI); sentar(d, dx, dz, Math.PI, PISOH + .49);
    const g = ator(C, GUIRUA, dx + .9, dz - 1.05, -.55); mochila(g); fantasma(g, .3);
    return (t, u, c) => {
      d.pose({ ...sentado, shL: [45, 12], shR: [45, -12], elL: 75, elR: 75, headX: 16 + Math.sin(t * .7) * 3 }); rosto(d, null, t, 'triste', { look: [0, .7] });
      const mao = smooth(207.6, 209.0, t) * (1 - smooth(209.6, 210.6, t)); g.pose({ ...idle(t), shR: [20 + 65 * mao, -10], elR: 30 - 20 * mao, lean: 6 * mao }); rosto(g, null, t, 'triste', { look: [-.5, .5] }); fantasma(g, .3);
      cam(c, [[0, [dx - .9, 1.45, dz - 3.6]], [1, [dx - .6, 1.4, dz - 3.0]]], [dx + .45, 1.0, dz - .4], u / 8.2); return { focus: 3.0, range: 2, blur: 5, sat: .85 };
    };
  }),
  // AG — e não pode dizer nada (câmera rodeando devagar)
  cena(211.8, 221.4, { foco: [52, -88], hora: 18.1, dentro: true, raio: 26, fx: FX3 }, (C) => {
    const [dx, dz] = hosp(-8.45, .35); semFigurante(C, LADO_DUDU); const d = ator(C, DUDU2, dx, dz, Math.PI); sentar(d, dx, dz, Math.PI, PISOH + .49);
    const g = ator(C, GUIRUA, dx + .9, dz - 1.05, -.55); mochila(g); fantasma(g, .3);
    return (t, u, c) => {
      const gira = Math.sin(t * 1.4); d.pose({ ...sentado, shL: [45 + gira * 6, 12], shR: [45 - gira * 6, -12], elL: 75, elR: 75, headX: 18 }); rosto(d, null, t, 'triste', { look: [0, .8] });
      g.pose({ ...idle(t), shL: [150, 30], shR: [150, 30], elL: 140, elR: 140 }); rosto(g, null, t, 'bravo', { look: [-.4, .4] }); fantasma(g, .3);
      const a = -.6 + u * 1.0; cam(c, [dx + .45 + Math.sin(a) * 2.5, 1.5, dz - .5 - Math.cos(a) * 2.5], [dx + .45, 1.0, dz - .5], u / 9.6); return { focus: 2.5, range: 2, blur: 5, sat: .85 };
    };
  }),
];
