// SEXTA-FEIRA — parar o tempo (278,1 a 353,3 s). O pedido de like acontece com tudo congelado.
import * as THREE from 'three';
import { mk, rosto, fala, gesto, ator as atorC, sentar } from './lib.js';
import { idle, walk, sentado } from './motor/char3d.js';
import { clamp, smooth, lerp } from './motor/core.js';
import { ctex, bx, rb } from './motor/toon.js';
import { cena, ator, cam, casa, casaRy, hosp, QUARTO, PISO, PISOH, caminhar } from './cena.js';
import { GUIPIJ, GUIRUA, RECEPCAO, povo, CHEFE } from './elenco.js';
import { pacoca, pombo, despertador, coxinha, mochila } from './pecas.js';
import { escritorio } from './sets.js';
import { onibusParado } from '../../../mundo/cidade/publicos.js';

const GELO = { tint: '#DCE8FF', sat: .7, vig: .3 }; // tudo parado: tom gelado
const T0 = 300; // o relógio da cidade fica parado neste instante
const parado = () => T0;
/** Pose congelada no meio de um passo. */
const passoParado = (i) => ({ ...walk(.13 + i * .37, 1.8, 1) });
/** Figurante qualquer parado na cidade. */
const figura = (C, i, x, z, ry) => { const k = povo(i); C.cena.add(k.root); k.place(x, z, C.alturaChao(x, z), ry); k.seed = i; return k; };

export const DIA5 = [
  // AQ — o despertador não toca: o ponteiro está parado (e o Paçoca congelado no meio do bocejo)
  cena(278.1, 285.9, { foco: casa(2.6, 3.2), hora: 7.5, dentro: true, raio: 28, tempo: parado, pedestres: 4, fx: { tint: '#E6EEFF', sat: .85 } }, (C) => {
    const [bx2, bz] = QUARTO.cama; const g = ator(C, GUIPIJ, bx2, bz, Math.PI); g.sombra.visible = false;
    const rel = despertador(); const [rx, rz] = casa(3.3, 1.78); rel.position.set(rx, PISO + .56, rz + .02); rel.rotation.y = Math.PI; rel.scale.setScalar(1.4); rel.hora(6 + 59 / 60); C.cena.add(rel);
    const P = pacoca(1.0); C.cena.add(P.g); P.g.position.set(bx2 + .2, PISO, bz - 1.5); P.g.rotation.y = Math.PI / 2;
    return (t, u, c) => {
      const s = smooth(281.2, 282.0, t); g.root.position.set(bx2, lerp(PISO + .62, PISO + .27, s), lerp(bz - .88, bz + .45, s)); g.root.rotation.set((1 - s) * Math.PI / 2 * .95, Math.PI, 0);
      g.pose({ ...sentado, hipL: [80 * s + 10, 6], hipR: [80 * s + 10, 6], knL: 80 * s + 5, knR: 80 * s + 5, shR: [20 + 60 * smooth(283.4, 284.0, t), 30], elR: 30 }); rosto(g, null, t, t < 281.2 ? 'sono' : t < 283.5 ? 'desconfiado' : 'surpreso', { blink: t < 281 ? 1 : undefined, look: [-.7, .4] });
      P.anima(299.3, { sentado: true, aberta: .9, fala: false, cabeca: [.4, .1] }); // congelado no meio do bocejo
      const k = smooth(280.4, 283.2, t); const [cx2, cz2] = casa(3.1, 2.55);
      cam(c, [[0, [cx2, PISO + .75, cz2]], [1, [casa(2.3, 3.7)[0], 1.4, casa(2.3, 3.7)[1]]]], [lerp(rx, bx2, k), lerp(PISO + .7, PISO + 1.0, k), lerp(rz, bz, k)], k); return { focus: lerp(.5, 1.6, k), range: .8, blur: 8 };
    };
  }),
  // AR — a água da fonte parada no ar, pombos parados no meio do voo
  cena(285.9, 295.1, { foco: [0, -26], hora: 9.5, raio: 32, tempo: parado, fx: GELO }, (C) => {
    const ps = []; for (let i = 0; i < 9; i++) { const p = pombo(); const a = i / 9 * 6.283; p.position.set(Math.cos(a) * (2 + i % 3 * .7), 2.2 + (i % 4) * .5, -28.5 + Math.sin(a) * (2 + i % 3 * .7)); p.rotation.set(.2, -a, .3 * Math.sin(i)); p.asa(.6 + (i % 3) * .3); C.cena.add(p); ps.push(p); }
    return (t, u, c) => { const a = .3 + u * 1.1; cam(c, [Math.sin(a) * 6.5, 2.1 + u * .6, -28.5 + Math.cos(a) * 6.5], [0, 1.8, -28.5], u / 9.2); return { focus: 6.5, range: 4, blur: 4 }; };
  }),
  // AS1 — "eu vou parar ele aqui também": a praça inteira congelada, câmera rodando devagar
  cena(295.1, 304.6, { foco: [0, -22], hora: 9.5, raio: 32, tempo: parado, fov: 46, fx: { ...GELO, sat: .55 } }, (C) => {
    const g = ator(C, GUIRUA, 2.6, -21.5, -2.4); mochila(g);
    const ps = []; for (let i = 0; i < 9; i++) { const p = pombo(); const a = i / 9 * 6.283; p.position.set(Math.cos(a) * (2 + i % 3 * .7), 2.2 + (i % 4) * .5, -28.5 + Math.sin(a) * (2 + i % 3 * .7)); p.rotation.set(.2, -a, .3 * Math.sin(i)); p.asa(.6 + (i % 3) * .3); C.cena.add(p); ps.push(p); }
    return (t, u, c) => { g.pose(passoParado(1)); rosto(g, null, 0, 'surpreso', { blink: 0, vivo: false });
      const a = 2.2 + u * .9; cam(c, [Math.sin(a) * 12, 4.5 - u, -24 + Math.cos(a) * 12], [0, 1.8, -24.5], u / 9.5); return { focus: 11, range: 6, blur: 3 }; };
  }),
  // AS2 — close nos pombos e no Guilherme parados... "pode soltar o tempo": tudo volta a andar
  cena(304.6, 314.5, { foco: [0, -22], hora: 9.5, raio: 32, tempo: (t) => t < 313.0 ? T0 : T0 + (t - 313.0), fov: 42, fx: GELO }, (C) => {
    const g = ator(C, GUIRUA, 2.6, -21.5, -2.4); mochila(g);
    const ps = []; for (let i = 0; i < 9; i++) { const p = pombo(); const a = i / 9 * 6.283; const b = [Math.cos(a) * (2 + i % 3 * .7), 2.2 + (i % 4) * .5, -28.5 + Math.sin(a) * (2 + i % 3 * .7)]; p.position.set(...b); p.rotation.set(.2, -a, .3 * Math.sin(i)); C.cena.add(p); ps.push([p, b, a, i]); }
    return (t, u, c) => {
      const solta = t > 313.0, d = t - 313.0;
      ps.forEach(([p, b, a, i]) => { if (!solta) { p.position.set(...b); p.asa(.6 + (i % 3) * .3); } else { p.position.set(b[0] + Math.cos(a) * d * 3, b[1] + d * 1.6, b[2] + Math.sin(a) * d * 3); p.asa(Math.sin(t * 20 + i) * 1); } });
      if (!solta) { g.pose(passoParado(1)); rosto(g, null, 0, 'surpreso', { blink: 0, vivo: false }); } else { g.pose(walk(t, 1.8, 1)); rosto(g, null, t, 'feliz'); g.place(2.6 - Math.sin(2.4) * d * 1.2, -21.5 - Math.cos(2.4) * d * 1.2, .15, -2.4); }
      cam(c, [[0, [5.6, 1.9, -26.4]], [1, [5.0, 1.8, -25.6]]], [[0, [1.4, 2.1, -24.8]], [1, [1.9, 1.7, -23.6]]], u / 9.9); return { focus: 5, range: 4, blur: 4, sat: solta ? .55 + smooth(313, 313.8, t) * .45 : .55, tint: solta && t > 313.6 ? '#FFFFFF' : '#DCE8FF' };
    };
  }),
  // AT1 — ele anda entre as pessoas paradas até o ônibus parado
  cena(314.5, 319.6, { foco: [-12, 5], hora: 10, raio: 32, tempo: parado, carros: 0, fx: GELO }, (C) => {
    const o = onibusParado('#2E9C6A', 'CIRCULAR - CENTRO'); o.position.set(-14, 0, 2.5); o.rotation.y = Math.PI / 2; C.cena.add(o);
    const g = ator(C, GUIRUA, -2, 6.3, -Math.PI / 2); mochila(g); const vai = caminhar(C, g, [[-2, 6.3], [-10.2, 6.0], [-11.4, 4.4]], 314.6, { vel: 1.8, direto: true });
    const gente = [[-4, 6.9, 1.6], [-6.5, 5.6, -1.4], [-8.2, 7.2, 1.2], [-12.5, 6.6, 0]].map(([x, z, ry], i) => figura(C, 40 + i, x, z, ry));
    return (t, u, c) => { vai(t); gente.forEach((k, i) => { k.pose(passoParado(i)); rosto(k, null, 0, 'neutro', { blink: 0, vivo: false }); }); rosto(g, null, t, 'rindo', { smile: 1 });
      const p = g.root.position; cam(c, [[0, [-13.6, 1.7, 5.4]], [1, [-13.9, 1.6, 5.6]]], [p.x, 1.3, p.z], u / 5.1); return { focus: 4, range: 3, blur: 5 }; };
  }),
  // AT2 — pega a última coxinha da padaria (atendente parada no meio do movimento)
  cena(319.6, 321.9, { foco: [-43.5, -16], hora: 10, dentro: true, raio: 26, tempo: parado, fx: GELO }, (C) => {
    const [vx, vz] = [-43.5 + .5, -19 - 2 + 4.2 + 0]; // vitrine (balcão da padaria)
    const g = ator(C, GUIRUA, vx + .2, vz + 1.0, Math.PI); mochila(g); const cx = coxinha(); cx.scale.setScalar(2.2); C.cena.add(cx);
    return (t, u, c) => {
      const pega = smooth(320.2, 320.9, t), come = smooth(321.2, 321.6, t);
      g.pose({ ...idle(t), shR: [70 + 40 * come, 10], elR: 20 + 110 * come, lean: 10 * pega * (1 - come) }); rosto(g, null, t, come > .5 ? 'rindo' : 'feliz', { smile: 1, mouth: come > .5 ? { open: .5 + Math.sin(t * 14) * .3 } : undefined });
      const h = g.hands.R.getWorldPosition(new THREE.Vector3()); const base = new THREE.Vector3(vx + .1, 1.1, vz); cx.position.lerpVectors(base, h, pega);
      cam(c, [[0, [vx - 1.3, 1.45, vz + .5]], [1, [vx - 1.1, 1.4, vz + .6]]], [vx + .15, 1.25, vz + .75], u / 2.3); return { focus: 2, range: 1.5, blur: 6 };
    };
  }),
  // AU — no meio de uma discussão, ele para o tempo para pensar numa resposta
  mk(321.9, 330.0, { bg: '#E6EEF2', fov: 40 }, (c) => {
    escritorio(c); const ch = atorC(c, CHEFE, -.8, 0, Math.PI / 2); const g = atorC(c, GUIRUA, .6, 0, -Math.PI / 2); mochila(g);
    return (t, u, cm) => {
      ch.pose({ shR: [90, -10], elR: 10, lean: 8, headX: -6 }); rosto(ch, null, 0, 'bravo', { blink: 0, mouth: { open: .7 }, vivo: false });
      const anda = t > 322.8 && t < 325.4; const a = (t - 322.8) * .9;
      if (anda) { g.place(-.1 + Math.cos(a) * .85, Math.sin(a) * .85, 0, a + Math.PI); g.pose({ ...walk(t, 1.4, .8), shR: [60, 10], elR: 130 }); rosto(g, null, t, 'desconfiado', { look: [-.6, .4] }); }
      else if (t <= 322.8) { g.place(.6, 0, 0, -Math.PI / 2); g.pose(idle(t)); rosto(g, null, t, 'bravo'); }
      else { g.place(.55, .25, 0, -Math.PI / 2 - .3); fala(g, 'gui', t, t < 328.5 ? 'feliz' : 'tedio', t < 328.5 ? { shR: [80, -10], elR: 40 } : { shL: [40, 50], shR: [40, 50], elL: 40, elR: 40 }, 1); }
      cam(cm, [[0, [.1, 1.55, 2.6]], [1, [-.2, 1.5, 2.2]]], [-.1, 1.35, 0], u); return { focus: 2.4, range: 2, blur: 5, ...GELO };
    };
  }),
  // AV — sozinho no meio da avenida congelada; acena para uma criança e nada. A câmera sobe e ele fica pequenininho
  cena(330.0, 341.8, { foco: [0, 0], hora: 10.5, raio: 34, tempo: parado, carros: 0, fov: 42, fx: { ...GELO, sat: .5 } }, (C) => {
    const cores = ['#E2443A', '#3E7CC8', '#F4F1EA', '#2A2A30', '#9AA0A8', '#F2C230'];
    for (let i = 0; i < 6; i++) { const a = carro0(cores[i], i); a.position.set(-22 + i * 9, 0, i % 2 ? 2.5 : -2.5); a.rotation.y = i % 2 ? Math.PI / 2 : -Math.PI / 2; C.cena.add(a); }
    const g = ator(C, GUIRUA, 1.2, 0, Math.PI * .1); mochila(g); const cr = figura(C, 47, 3.2, 5.6, -2.6); cr.root.scale.setScalar(.62);
    const gente = [[-3, 6.2, 1.5], [6, 6.4, -1.6], [-6, -5.9, 1.6], [8.5, -6.2, -1.4], [11, 6.8, 1.6]].map(([x, z, ry], i) => figura(C, 50 + i, x, z, ry));
    return (t, u, c) => {
      const ac = smooth(337.2, 337.6, t) * (1 - smooth(339.5, 340.2, t)); g.pose({ ...idle(t), shR: [160 * ac + 10, -20 * ac], elR: 20 + Math.sin(t * 10) * 25 * ac }); rosto(g, null, t, t < 336 ? 'desconfiado' : t < 339.5 ? 'feliz' : 'triste', { look: [Math.sin(t * .6) * .9, 0] });
      g.root.rotation.y = lerp(Math.PI * .1, Math.atan2(3.2 - 1.2, 5.6), smooth(336.2, 337.2, t));
      cr.pose({ ...passoParado(3), shR: [20, 10] }); rosto(cr, null, 0, 'feliz', { blink: 0, vivo: false }); gente.forEach((k, i) => { k.pose(passoParado(i)); rosto(k, null, 0, 'neutro', { blink: 0, vivo: false }); });
      cam(c, [[0, [1.8, 1.6, -3.2]], [.45, [2.2, 2.2, -4.2]], [1, [-6, 26, -16]]], [[0, [1.2, 1.35, 0]], [1, [1.2, .5, 0]]], u / 11.8); return { focus: lerp(3, 28, smooth(.45, 1, u / 11.8)), range: 6, blur: 3 };
    };
  }),
  // AW — dentro da Santa Casa congelada: ele vai até o quadro da recepção
  cena(341.8, 349.2, { foco: [58, -88], hora: 11, dentro: true, raio: 26, tempo: parado, fx: GELO }, (C) => {
    const q = quadro(); const [qx, qz] = hosp(6, -3.92); q.position.set(qx, 1.75, qz); C.cena.add(q);
    const g = ator(C, GUIRUA, ...hosp(0, 5.3), Math.PI); mochila(g); const vai = caminhar(C, g, [hosp(0, 5.3), hosp(3.2, .6), hosp(5.7, -2.7)], 342.0, { vel: 1.2, olharFim: Math.PI }); const P = C.portas['santaCasa.entrada']; if (P) { P.auto = false; P.abrir(1); }
    return (t, u, c) => { vai(t); rosto(g, null, t, t < 346 ? 'desconfiado' : 'surpreso');
      const p = g.root.position; cam(c, [[0, [p.x - 2.6, 1.7, p.z + 2.2]], [1, [p.x - 1.6, 1.65, p.z + 1.5]]], [p.x + .3, 1.5, p.z - .8], u / 7.4); return { focus: 2.6, range: 2, blur: 5 };
    };
  }),
  // AX — o quadro: "Cirurgia marcada pra domingo de manhã"
  cena(349.2, 353.3, { foco: [58, -88], hora: 11, dentro: true, raio: 26, tempo: parado, fx: GELO }, (C) => {
    const q = quadro(); const [qx, qz] = hosp(6, -3.92); q.position.set(qx, 1.75, qz); C.cena.add(q);
    return (t, u, c) => { cam(c, [[0, [qx - .3, 1.8, qz + 1.6]], [1, [qx - .1, 1.78, qz + 1.05]]], [qx, 1.72, qz], u / 4.1); return { focus: 1.2, range: .8, blur: 10 }; };
  }),
];
import { carro as carro0 } from '../../../mundo/cidade/moveis.js';
/** Quadro branco da recepção com a agenda de cirurgias. */
function quadro() { const g = new THREE.Group(); g.add(rb(1.5, 1.0, .04, '#C9CED6', 0, 0, 0, { out: .01 }));
  const t = ctex(768, 512, (x) => { x.fillStyle = '#FBFBF8'; x.fillRect(0, 0, 768, 512); x.fillStyle = '#1F4E86'; x.font = '900 44px Inter'; x.fillText('AGENDA DE CIRURGIAS', 40, 64); x.strokeStyle = '#1F4E86'; x.lineWidth = 4; x.beginPath(); x.moveTo(40, 84); x.lineTo(728, 84); x.stroke();
    x.font = '700 40px Caveat, cursive'; x.fillStyle = '#2A2A30'; x.fillText('Sáb 14h — José R.', 50, 150); x.fillStyle = '#C84E4E'; x.font = '700 54px Caveat, cursive'; x.fillText('DOMINGO 8h — Lúcia S.', 50, 240); x.font = '700 36px Caveat, cursive'; x.fillText('(mãe do Eduardo)', 90, 290); x.strokeStyle = '#C84E4E'; x.lineWidth = 6; x.beginPath(); x.ellipse(300, 225, 280, 50, 0, 0, 7); x.stroke(); x.fillStyle = '#2A2A30'; x.font = '700 40px Caveat, cursive'; x.fillText('Seg 9h — Antônio P.', 50, 380); x.fillText('Ter 10h — Maria C.', 50, 450); });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1.42, .92), new THREE.MeshToonMaterial({ map: t, emissive: '#FFFFFF', emissiveMap: t, emissiveIntensity: .25 })); m.position.z = .022; g.add(m); return g; }
