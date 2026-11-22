// SÁBADO — ver o futuro (353,3 a 398,6 s).
import * as THREE from 'three';
import { rosto, fala, gesto, sentar } from './lib.js';
import { idle, walk, sentado } from './motor/char3d.js';
import { clamp, smooth, lerp } from './motor/core.js';
import { ctex, cyl, rb, bx } from './motor/toon.js';
import { cena, ator, cam, casa, casaRy, hosp, QUARTO, PISO, PISOH , semFigurante, LADO_DUDU } from './cena.js';
import { GUIRUA, MARCOS2, REGINA2, DUDU2, povo } from './elenco.js';
import { caneca, balao, balaoAnim } from './pecas.js';
import { chuva } from './efeitos.js';

const FX6 = { tint: '#FFF1D6' }; // sábado: dourado
const VISAO = { tint: '#FFE7A8', sat: .8, vig: .65, bloom: .5, bloomT: .7 }; // visão do futuro: bordas brilhando
const COZ = { foco: casa(-1.5, -1), hora: 8.6, dentro: true, raio: 28, fx: FX6 };
// lugares na mesa da cozinha (centro da mesa no local -1.6, -1.1)
const MESA = { gui: [-.75, -1.1, -Math.PI / 2], pai: [-1.6, -.45, Math.PI], mae: [-2.45, -1.1, Math.PI / 2] };
const sentaMesa = (C, def, [lx, lz, r]) => { const [x, z] = casa(lx, lz); const k = ator(C, def, x, z, casaRy(r)); sentar(k, x, z, casaRy(r), PISO + .46); return k; };
/** Relógio de parede grande com ponteiros controlados. */
function relogioGrande() { const g = new THREE.Group(); g.add(cyl(.34, .34, .05, '#F4F1EA', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], out: .01 }));
  const f = new THREE.Mesh(new THREE.CircleGeometry(.31, 32), new THREE.MeshBasicMaterial({ map: ctex(256, 256, (x) => { x.fillStyle = '#FFF'; x.beginPath(); x.arc(128, 128, 126, 0, 7); x.fill(); x.fillStyle = '#1B1420'; x.font = '700 36px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; for (let i = 1; i <= 12; i++) { const a = i / 12 * 6.283 - Math.PI / 2; x.fillText(String(i), 128 + Math.cos(a) * 98, 128 + Math.sin(a) * 98); } }) })); f.position.z = .027; g.add(f);
  const ph = new THREE.Group(), pm = new THREE.Group(); ph.position.z = pm.position.z = .03; ph.add(bx(.03, .16, .01, '#1B1420', 0, .07, 0)); pm.add(bx(.02, .24, .01, '#C84E4E', 0, .11, 0)); g.add(ph, pm);
  g.hora = (h) => { pm.rotation.z = -(h % 1) * Math.PI * 2; ph.rotation.z = -(h % 12) / 12 * Math.PI * 2; }; return g; }

export const DIA6 = [
  // AY1 — café da manhã: ele já sabe o que vai acontecer
  cena(353.3, 360.5, COZ, (C) => {
    const g = sentaMesa(C, GUIRUA, MESA.gui), m = sentaMesa(C, MARCOS2, MESA.pai); const cn = caneca(); m.hold(cn, 'R'); cn.position.set(0, -.08, .04);
    const r = ator(C, REGINA2, ...casa(-3.55, -1.45), casaRy(-Math.PI / 2));
    return (t, u, c) => {
      g.pose({ ...sentado, shR: [55 + Math.sin(t * 2) * 6, 10], elR: 110, shL: [40, 10], elL: 80 }); rosto(g, null, t, 'tedio', { look: [0, .5] });
      m.pose({ ...sentado, shR: [40 + Math.sin(t * .8) * 10, 8], elR: 100 + Math.sin(t * .8) * 10, shL: [30, 10], elL: 70 }); rosto(m, null, t, 'neutro', { look: [.3, .2] });
      r.pose({ shL: [55 + Math.sin(t * 6) * 10, 15], shR: [55 + Math.sin(t * 6 + 2) * 10, -5], elL: 70, elR: 70, headX: 12 }); rosto(r, null, t, 'neutro');
      cam(c, [[0, [casa(-1.0, -3.0)[0], 1.6, casa(-1.0, -3.0)[1]]], [1, [casa(-1.3, -2.7)[0], 1.55, casa(-1.3, -2.7)[1]]]], [casa(-1.9, -.9)[0], 1.0, casa(-1.9, -.9)[1]], u / 7.2); return { focus: 2.6, range: 2.5, blur: 4 };
    };
  }),
  // AY2 — "Pai, cuidado com o café." / "Que café? Ah, droga!" (a caneca cai em câmera lenta)
  cena(360.5, 365.6, COZ, (C) => {
    const g = sentaMesa(C, GUIRUA, MESA.gui), m = sentaMesa(C, MARCOS2, MESA.pai); const cn = caneca(); C.cena.add(cn); cn.scale.setScalar(1.3);
    const gotas = []; for (let i = 0; i < 18; i++) { const d = new THREE.Mesh(new THREE.SphereGeometry(.022 + (i % 3) * .008, 8, 6), new THREE.MeshToonMaterial({ color: '#5A3420' })); C.cena.add(d); gotas.push(d); }
    const mancha = new THREE.Mesh(new THREE.CircleGeometry(.25, 20), new THREE.MeshBasicMaterial({ color: '#5A3420', transparent: true, opacity: 0, depthWrite: false })); mancha.rotation.x = -Math.PI / 2; C.cena.add(mancha);
    const tq = 363.45, [mx, mz] = casa(-1.6, -.8); mancha.position.set(mx, PISO + .815, mz);
    return (t, u, c) => {
      if (t < 362.4) fala(g, 'gui', t, 'tedio', { ...sentado, shR: [55, 10], elR: 110 }, .5, { look: [0, .5] }); else { g.pose({ ...sentado, shR: [55, 10], elR: 110 }); rosto(g, null, t, 'tedio', { look: [0, .5] }); }
      const susto = smooth(tq - .1, tq + .2, t); fala(m, 'marcos', t, t < tq ? 'desconfiado' : 'bravo', { ...sentado, shR: [40 + 50 * susto, 8 - 30 * susto], elR: 100 - 60 * susto, shL: [30 + 40 * susto, 20], elL: 70 }, .8);
      const h = m.hands.R.getWorldPosition(new THREE.Vector3()); const q = clamp((t - tq) / 1.1); // câmera lenta: cai em 1,1 s
      if (t < tq) { cn.position.copy(h); cn.rotation.set(0, 0, 0); } else { cn.position.set(lerp(h.x, mx, q), h.y - (h.y - (PISO + .8)) * q * q, lerp(h.z, mz, q)); cn.rotation.set(q * 1.9, 0, q * .6); }
      gotas.forEach((d, i) => { const k = clamp((t - tq - .35) / .9); d.visible = k > 0 && k < 1; const a = i / 18 * 6.283; d.position.set(cn.position.x + Math.cos(a) * k * .45, cn.position.y + .05 + Math.sin(k * Math.PI) * (.18 + (i % 4) * .05), cn.position.z + Math.sin(a) * k * .45); });
      mancha.material.opacity = smooth(tq + .9, tq + 1.4, t) * .85; mancha.scale.setScalar(.4 + smooth(tq + .9, tq + 1.6, t) * .8);
      const slow = smooth(tq - .4, tq, t) * (1 - smooth(tq + 1.4, tq + 1.8, t));
      cam(c, [[0, [casa(-1.1, -2.6)[0], 1.35, casa(-1.1, -2.6)[1]]], [1, [casa(-1.4, -2.3)[0], 1.2, casa(-1.4, -2.3)[1]]]], [lerp(casa(-1.3, -.8)[0], mx, slow), lerp(1.15, PISO + .9, slow), lerp(casa(-1.3, -.8)[1], mz, slow)], u / 5.1);
      return { focus: lerp(2, 1.2, slow), range: 1.2, blur: 6 + slow * 6 };
    };
  }),
  // AZ — três da tarde: o relógio do quarto marca 15h e a chuva começa na janela
  cena(365.6, 373.7, { foco: casa(2.6, 3.2), hora: 15, dentro: true, raio: 28, fx: { ...FX6, tint: '#E8EEF8' } }, (C) => {
    const rg = relogioGrande(); const [rx, rz] = casa(4.45, 4.5); rg.position.set(rx, 2.1, rz); rg.rotation.y = Math.PI / 2; C.cena.add(rg);
    const [jx0, jz0] = QUARTO.janela; const chove = chuva(C.cena, [jx0 - 3, jx0 + 3, -.5, 6, jz0 - 4, jz0 - .6], { n: 500 });
    const [jx, jz] = casa(3.95, 5.0); const g = ator(C, GUIRUA, jx, jz, casaRy(-Math.PI / 2));
    return (t, u, c) => {
      rg.hora(14 + 59 / 60 + smooth(366.2, 368.6, t) / 60); const k0 = smooth(369.3, 370.2, t); chove(t, k0 < .05 ? .001 : k0);
      const olha = smooth(368.8, 369.6, t); g.pose({ ...idle(t), shL: [35, 10], elL: 90, shR: [35, 10], elR: 90, headY: -55 * olha + 10 * (1 - olha) }); rosto(g, null, t, t < 369.3 ? 'tedio' : 'neutro', { look: [-.4 * olha, .1] });
      const k = smooth(367.4, 369.2, t); const [ax, az] = casa(3.2, 5.3); cam(c, [[0, [casa(1.9, 3.4)[0], 1.7, casa(1.9, 3.4)[1]]], [1, [casa(2.1, 3.6)[0], 1.65, casa(2.1, 3.6)[1]]]], [lerp(rx, ax, k), lerp(2.1, 1.45, k), lerp(rz, az, k)], u / 8.1); return { focus: 2, range: 2, blur: 5 };
    };
  }),
  // BA — nem a previsão do tempo acerta tanto: vista de fora, a chuva na frente e ele na janela
  cena(373.7, 383.6, { foco: casa(2.6, 3.2), hora: 15.1, dentro: true, raio: 28, fx: { tint: '#E8EEF8', sat: .9 } }, (C) => {
    const [jx0, jz0] = QUARTO.janela; const chove = chuva(C.cena, [jx0 - 4, jx0 + 4, -.5, 7, jz0 - 4.5, jz0 - .5], { n: 900 });
    const [jx, jz] = casa(2.6, 5.0); const g = ator(C, GUIRUA, jx, jz, casaRy(0));
    return (t, u, c) => { chove(t, 1); g.pose({ ...idle(t), shL: [40, 10], elL: 100, shR: [40, 10], elR: 100 }); rosto(g, null, t, 'neutro', { look: [Math.sin(t * .5) * .3, -.1] });
      const [w0x, w0z] = casa(3.9, 3.7), [w1x, w1z] = casa(3.6, 3.95), [lx2, lz2] = casa(2.45, 5.2); cam(c, [[0, [w0x, 1.65, w0z]], [1, [w1x, 1.6, w1z]]], [lx2, 1.4, lz2], u / 9.9); return { focus: 1.6, range: 1.2, blur: 6, sat: .85 }; };
  }),
  // BB1 — a visão do domingo: o Dudu sozinho na sala de espera (bordas brilhando)
  cena(383.6, 393.0, { foco: [52, -88], hora: 8.2, dentro: true, raio: 26, fx: VISAO }, (C) => {
    const [dx, dz] = hosp(-8.45, .35); semFigurante(C, LADO_DUDU); const d = ator(C, DUDU2, dx, dz, Math.PI); sentar(d, dx, dz, Math.PI, PISOH + .49);
    return (t, u, c) => { d.pose({ ...sentado, shL: [45, 12], shR: [45, -12], elL: 75, elR: 75, headX: 18 + Math.sin(t * .6) * 3 }); rosto(d, null, t, 'triste', { look: [0, .8] });
      cam(c, [[0, [dx - 1.6, 1.5, dz - 3.4]], [1, [dx - .8, 1.4, dz - 2.4]]], [dx, 1.0, dz], u / 9.4); return { focus: 2.8, range: 2, blur: 6 }; };
  }),
  // BB2 — o relógio da sala de espera corre de 8h até 14h; gente chega e vai, ninguém senta do lado dele
  cena(393.0, 398.6, { foco: [52, -88], hora: 8.2, dentro: true, raio: 26, fx: VISAO }, (C) => {
    const [dx, dz] = hosp(-8.45, .35); semFigurante(C, LADO_DUDU); const d = ator(C, DUDU2, dx, dz, Math.PI); sentar(d, dx, dz, Math.PI, PISOH + .49);
    const rg = relogioGrande(); const [rx, rz] = hosp(-11.2, 5.82); rg.position.set(rx, 2.55, rz); rg.rotation.y = Math.PI; C.cena.add(rg);
    const lugares = [[-10.1, 1.95], [-9.55, 3.5], [-8.45, 3.5], [-10.1, .35]].map(([lx, lz], i) => { const [x, z] = hosp(lx, lz); const k = povo(60 + i); C.cena.add(k.root); sentar(k, x, z, Math.PI, PISOH + .49); return [k, i]; });
    return (t, u, c) => {
      rg.hora(8 + u / 5.6 * 6); d.pose({ ...sentado, shL: [45, 12], shR: [45, -12], elL: 75, elR: 75, headX: 18 }); rosto(d, null, t, 'triste', { look: [0, .8] });
      lugares.forEach(([k, i]) => { const fase = (u * 1.1 + i * .37) % 1; k.root.visible = fase > .15 && fase < .75; k.pose(sentado); rosto(k, null, t, 'tedio'); });
      cam(c, [[0, [dx + .7, 1.5, dz - 3.2]], [1, [dx + .5, 1.6, dz - 3.6]]], [[0, [dx, 1.05, dz]], [.35, [dx, 1.05, dz]], [1, [lerp(dx, rx, .7), 2.0, lerp(dz, rz, .7)]]], u / 5.6); return { focus: 3, range: 3, blur: 4 };
    };
  }),
];
