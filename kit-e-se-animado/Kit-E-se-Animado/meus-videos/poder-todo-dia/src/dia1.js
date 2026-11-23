// SEGUNDA-FEIRA — voar. Do ventilador até o "Ele estava muito errado" (0 a 93,6 s).
import * as THREE from 'three';
import { mk, rosto, fala, gesto, ator as atorC, camT } from './lib.js';
import { idle, walk, sentado } from './motor/char3d.js';
import { clamp, smooth, keys, lerp } from './motor/core.js';
import { cena, ator, cam, casa, casaRy, QUARTO, PISO, TETO, ventiladorQuarto, vermelhoAv } from './cena.js';
import { GUIPIJ, GUIRUA, MARCOS2, VIZINHO } from './elenco.js';
import { espelho, bilhete, pombo, caneca, mochila, cracha, voo, debate } from './pecas.js';
import { carro } from '../../../mundo/cidade/moveis.js';
import { escritorio } from './sets.js';
import { brilho, poeira } from './efeitos.js';

const FX1 = { tint: '#EEF5FF' }; // segunda: tom azul-claro
const QH = 7.4; // hora da manhã no quarto

/** Guilherme deitado de barriga para baixo dentro de um suporte que gira (para flutuar no teto). */
function guiFlutuando(C, def = GUIPIJ) {
  const k = ator(C, def, 0, 0); const sup = new THREE.Group(); C.cena.add(sup); sup.add(k.root);
  k.root.position.set(0, 0, -.82); k.root.rotation.set(Math.PI / 2, 0, 0); k.sombra.visible = false; return { k, sup };
}
/** Espelho na porta do guarda-roupa com o bilhete (o espelho olha para o meio do quarto). */
function espelhoBilhete(C, estado = { estado: 'rasgado' }) {
  const [x, z] = QUARTO.espelho; const e = espelho(.6, 1.15); e.position.set(x - .02, 1.35, z); e.rotation.y = -Math.PI / 2; C.cena.add(e);
  const b = bilhete(estado); b.position.set(x - .05, 1.55, z + .12); b.rotation.y = -Math.PI / 2; b.rotation.z = .04; C.cena.add(b); return { e, b };
}
const OQ = { foco: casa(2.5, 3), hora: QH, dentro: true, raio: 30, pedestres: 6, fx: FX1 };

export const DIA1 = [
  // A — acorda colado no ventilador, câmera deitada na cama olhando para cima
  cena(0, 8.8, OQ, (C) => {
    const v = ventiladorQuarto(C); const pas = v.userData.pas; const { k, sup } = guiFlutuando(C); espelhoBilhete(C);
    const [cx, cz] = QUARTO.centro; sup.position.set(cx, TETO - .5, cz);
    return (t, u, c) => {
      const a = t * .55; pas.rotation.y = a; sup.rotation.y = a + .4;
      // abraçado na haste: braços para cima (na direção da cabeça)
      k.pose({ shL: [160, 18], shR: [160, 18], elL: 40, elR: 40, hipL: [-4 + Math.sin(t * 1.2) * 4, 6], hipR: [-2 + Math.sin(t * 1.2 + 1) * 4, 6], knL: 8, knR: 12, headX: -28 + smooth(4, 5.5, t) * 10 });
      const acordado = t > 4.1; rosto(k, null, t, t > 5.2 ? 'surpreso' : 'neutro', { blink: acordado ? undefined : 1, look: acordado ? [Math.sin(t * 2.6) * .7, -.4] : [0, 0] });
      sup.position.y = TETO - .5 + Math.sin(t * 1.4) * .02;
      const [bx2, bz] = QUARTO.cama; cam(c, [bx2 + .3, .95, bz - .5], [cx, TETO - .45, cz], u / 8.8);
      return { focus: 2.2, range: 3, blur: 4 };
    };
  }),
  // B — vista do quarto: ele girando de pijama, perninhas balançando
  cena(8.8, 14.2, OQ, (C) => {
    const v = ventiladorQuarto(C); const pas = v.userData.pas; const { k, sup } = guiFlutuando(C); espelhoBilhete(C);
    const [cx, cz] = QUARTO.centro; sup.position.set(cx, TETO - .5, cz);
    return (t, u, c) => {
      const a = t * .55; pas.rotation.y = a; sup.rotation.y = a + .4;
      k.pose({ shL: [160, 18], shR: [160, 18], elL: 40, elR: 40, hipL: [10 + Math.sin(t * 3) * 25, 10], hipR: [10 + Math.sin(t * 3 + 2) * 25, 10], knL: 30 + Math.sin(t * 3) * 20, knR: 30 + Math.sin(t * 3 + 2) * 20, headX: -18 });
      rosto(k, null, t, 'medo', { look: [Math.sin(t * 1.7) * .8, -.3] });
      const [px, pz] = casa(1.15, 1.75), [qx, qz] = casa(3.6, 4.6);
      cam(c, [px, 1.45, pz], [cx - .2, TETO - .6, cz], u / 5.4); return { focus: 2.4, range: 3, blur: 3 };
    };
  }),
  // C — o espelho na porta do guarda-roupa e o bilhete escrito à mão
  cena(14.2, 17.4, OQ, (C) => {
    ventiladorQuarto(C); const { b } = espelhoBilhete(C); const [x, z] = QUARTO.espelho;
    return (t, u, c) => { b.rotation.x = Math.sin(t * 3.1) * .03; cam(c, [x - 1.6 + u * .25, 1.6, z + .5], [x, 1.5, z + .1], u / 3.2); return { focus: 1.3, range: 1.2, blur: 10 }; };
  }),
  // D1 — ele lê o bilhete em voz alta, do teto (rosto em close)
  cena(17.4, 22.0, OQ, (C) => {
    const v = ventiladorQuarto(C); const pas = v.userData.pas; const { k, sup } = guiFlutuando(C); espelhoBilhete(C);
    const [cx, cz] = QUARTO.centro; sup.position.set(cx, TETO - .5, cz);
    return (t, u, c) => {
      pas.rotation.y = t * .55; sup.rotation.y = -Math.PI / 2 + .25 + Math.sin(t * .5) * .08; // de frente para o espelho
      k.pose({ ...gesto('gui', t, { shL: [150, 25], shR: [120, 30] }, .6), elL: 50, hipL: [5, 8], hipR: [-5, 8], knL: 20, knR: 25, headX: -42 });
      rosto(k, 'gui', t, 'desconfiado', { look: [0, .2] });
      const p = k.headG.getWorldPosition(new THREE.Vector3());
      cam(c, [p.x - .75, p.y - .35, p.z + .55], [p.x, p.y - .05, p.z], u / 4.6); return { focus: .95, range: .6, blur: 12 };
    };
  }),
  // D2 — por cima do ombro: o bilhete lá embaixo, ele terminando de ler
  cena(22.0, 27.6, OQ, (C) => {
    const v = ventiladorQuarto(C); const pas = v.userData.pas; const { k, sup } = guiFlutuando(C); const { b } = espelhoBilhete(C);
    const [cx, cz] = QUARTO.centro; sup.position.set(cx, TETO - .5, cz); const [ex, ez] = QUARTO.espelho;
    return (t, u, c) => {
      pas.rotation.y = t * .55; sup.rotation.y = -Math.PI / 2 + .25;
      k.pose({ ...gesto('gui', t, { shL: [150, 25], shR: [120, 30] }, .6), headX: -42, hipL: [5, 8], hipR: [-5, 8], knL: 20, knR: 25 });
      rosto(k, 'gui', t, t > 25.5 ? 'medo' : 'desconfiado'); b.rotation.x = Math.sin(t * 3.1) * .03;
      const p = k.headG.getWorldPosition(new THREE.Vector3()); cam(c, [ex - .25, 1.7, ez + .45], [p.x, p.y - .1, p.z], u / 5.6); return { focus: 1.3, range: 1.2, blur: 5 }; // do espelho, olhando ele lá em cima
    };
  }),
  // E — não sabe quem escreveu, não sabe descer: nada no ar, bate a cabeça no teto
  cena(27.6, 37.9, OQ, (C) => {
    const v = ventiladorQuarto(C); const pas = v.userData.pas; const { k, sup } = guiFlutuando(C); espelhoBilhete(C);
    const [cx, cz] = QUARTO.centro;
    return (t, u, c) => {
      pas.rotation.y = t * .55; const bate = Math.max(0, Math.sin(t * 2.2)) ** 6;
      sup.position.set(cx + Math.sin(t * .7) * .35, TETO - .55 + bate * .1, cz + Math.cos(t * .5) * .25); sup.rotation.y = t * .25;
      k.pose(debate(t)); rosto(k, null, t, u < 3 ? 'desconfiado' : u < 6.5 ? 'medo' : 'bravo', { look: [Math.sin(t * 1.3) * .8, -.6] });
      const [px, pz] = casa(2.2, 1.8), [qx, qz] = casa(2.3, 4.9); cam(c, [[0, [px, 1.3, pz]], [1, [qx, 1.4, qz]]], [cx, TETO - .7, cz], u / 10.3); return { focus: 2.3, range: 2.5, blur: 4 };
    };
  }),
  // F — cai na cama (boing) e o pai abre a porta
  cena(37.9, 44.3, OQ, (C) => {
    const v = ventiladorQuarto(C); const pas = v.userData.pas; const { k, sup } = guiFlutuando(C); espelhoBilhete(C);
    const [cx, cz] = QUARTO.centro, [bx2, bz] = QUARTO.cama, P = C.portas['casaFamilia.quarto1']; if (P) P.auto = false;
    const m = ator(C, MARCOS2, ...casa(1.5, 1.05), casaRy(0)); m.hold(caneca(), 'R'); m.root.visible = false;
    return (t, u, c) => {
      pas.rotation.y = t * .55;
      const tc = 40.55, q = clamp((t - tc) / .38), y0 = TETO - .52, yc = PISO + .62;
      const pulo = t > tc + .38 ? Math.abs(Math.sin((t - tc - .38) * 9)) * Math.exp(-(t - tc - .38) * 4) * .18 : 0;
      sup.position.set(lerp(cx, bx2, smooth(39.9, 40.9, t)), t < tc ? y0 + Math.sin(t * 2) * .02 : lerp(y0, yc, q * q) + pulo, lerp(cz, bz + .1, smooth(39.9, 40.9, t)));
      sup.rotation.y = lerp(.4 + (t - 37.9) * .2, 0, smooth(39.9, 40.9, t)); // cai com a cabeça para o travesseiro
      k.pose(t < tc + .3 ? debate(t) : { shL: [170, 30], shR: [170, 30], elL: 20, elR: 20, hipL: [0, 10], hipR: [0, 10] });
      rosto(k, null, t, t < tc ? 'medo' : t < 42.5 ? 'medo' : 'vergonha', { blink: t > tc && t < tc + .6 ? 1 : undefined });
      if (P) P.abrir(smooth(43.1, 43.9, t)); m.root.visible = t > 43.3; m.pose({ shL: [30, 20], shR: [40, -20], elL: 100, elR: 110 }); rosto(m, null, t, 'bravo');
      cam(c, [casa(1.45, 5.0)[0], 1.75, casa(1.45, 5.0)[1]], [casa(3.2, 2.0)[0], 1.15, casa(3.2, 2.0)[1]], u / 6.4);
      return { focus: 3, range: 3, blur: 3 };
    };
  }),
  // G — Seu Marcos na porta, de braços cruzados e caneca; Guilherme sem graça na cama
  cena(44.3, 52.5, OQ, (C) => {
    ventiladorQuarto(C); espelhoBilhete(C); const P = C.portas['casaFamilia.quarto1']; if (P) { P.auto = false; P.abrir(1); }
    const m = ator(C, MARCOS2, ...casa(1.55, 1.1), casaRy(0)); m.hold(caneca(), 'R');
    const [bx2, bz] = QUARTO.cama; const { k: g, sup } = guiFlutuando(C); sup.position.set(bx2, PISO + .62, bz + .1);
    return (t, u, c) => {
      P && P.abrir(1);
      fala(m, 'marcos', t, 'bravo', { shL: [35, 25], shR: [55, -15], elL: 105, elR: 95 }, .8);
      // de bruços na cama, levanta o peito apoiado nos cotovelos e vira a cabeça para o pai
      const lev = smooth(44.6, 45.6, t); g.pose({ lean: -32 * lev, headX: -30 * lev, headY: -38 * lev, shL: [95, 25], shR: [95 + Math.sin(t * 2) * 5, 25], elL: 95, elR: 95, hipL: [0, 8], hipR: [0, 8], knL: 10 + Math.sin(t * 1.3) * 10, knR: 15 });
      rosto(g, 'gui', t, t < 50.3 ? 'vergonha' : 'tedio', { look: [.7, -.4] });
      cam(c, [[0, [casa(1.45, 5.0)[0], 1.6, casa(1.45, 5.0)[1]]], [1, [casa(1.9, 4.8)[0], 1.5, casa(1.9, 4.8)[1]]]], [casa(3.0, 1.9)[0], 1.1, casa(3.0, 1.9)[1]], u / 8.2); return { focus: 3.2, range: 3, blur: 4 };
    };
  }),
  // H — DIA 1: voando baixinho pela Rua das Flores, de mochila (câmera do outro lado da rua)
  cena(52.5, 61.1, { foco: [-64, 62], hora: 8, raio: 30, fov: 23, fx: FX1 }, (C) => {
    const g = ator(C, GUIRUA, -58, 66.6, -Math.PI / 2); mochila(g); g.sombra.visible = false;
    const sb = new THREE.Mesh(new THREE.CircleGeometry(.4, 20), new THREE.MeshBasicMaterial({ color: '#140F1E', transparent: true, opacity: .25, depthWrite: false })); sb.rotation.x = -Math.PI / 2; C.cena.add(sb);
    return (t, u, c) => {
      const x = -57 - u * 1.45, y = .15 + 1.85 + Math.sin(t * 2.2) * .12;
      g.place(x, 66.6 + Math.sin(t * .9) * .25, y, -Math.PI / 2 + Math.sin(t * 1.3) * .2); g.root.rotation.z = Math.sin(t * 1.7) * .12;
      g.pose(voo(t)); rosto(g, null, t, u < 3 ? 'surpreso' : 'feliz', { look: [Math.sin(t) * .5, .3] }); sb.position.set(x, .16, 66.6);
      cam(c, [x - 2.2, 2.6, 54.2], [x - .8, 1.9, 66.6], u / 8.6); return { focus: 12.5, range: 6, blur: 6 };
    };
  }),
  // I — na altura dos postes; um pombo vem vindo
  cena(61.1, 67.0, { foco: [-68, 64], hora: 8.1, raio: 30, fov: 40, fx: FX1 }, (C) => {
    const g = ator(C, GUIRUA, -66, 66.3, -Math.PI / 2); mochila(g); g.sombra.visible = false; const pb = pombo(); C.cena.add(pb);
    return (t, u, c) => {
      const x = -64.5 - u * 1.2, y = .15 + 2.9 + Math.sin(t * 2.2) * .1;
      g.place(x, 66.2, y, -Math.PI / 2 + Math.sin(t * 1.1) * .15); g.root.rotation.z = Math.sin(t * 1.5) * .1; g.pose(voo(t, 1.2)); rosto(g, null, t, 'feliz', { look: [Math.sin(t * .8) * .6, .2] });
      pb.position.set(x - 9 + u * 1.2, y + 1.2 - u * .15, 66.2 + Math.sin(t * 2) * .3); pb.rotation.y = 0; pb.asa(Math.sin(t * 18) * .9);
      cam(c, [x + 3.2, 1.25, 67.8], [x - .4, y + .3, 66.3], u / 5.9); return { focus: 3.6, range: 3, blur: 5 };
    };
  }),
  // I2 — o pombo bate na cara dele (penas para todo lado)
  cena(67.0, 70.1, { foco: [-72, 64], hora: 8.1, raio: 30, fov: 38, fx: FX1 }, (C) => {
    const g = ator(C, GUIRUA, -71, 66.2, -Math.PI / 2); mochila(g); g.sombra.visible = false; const pb = pombo(); C.cena.add(pb);
    const penas = []; for (let i = 0; i < 14; i++) { const p = new THREE.Mesh(new THREE.PlaneGeometry(.07, .16), new THREE.MeshToonMaterial({ color: i % 2 ? '#9AA0B4' : '#C9CED6', side: THREE.DoubleSide })); C.cena.add(p); penas.push(p); }
    const tb = 67.55;
    return (t, u, c) => {
      const x = -71, y = .15 + 2.9 + Math.sin(t * 2.2) * .06, rec = smooth(tb, tb + .35, t);
      g.place(x + rec * .35, 66.2, y, -Math.PI / 2); g.root.rotation.z = rec * .35 * Math.exp(-(t - tb) * 1.2 * (t > tb));
      g.pose(t < tb ? voo(t) : debate(t)); rosto(g, null, t, t < tb - .2 ? 'feliz' : t < tb + 1.2 ? 'surpreso' : 'bravo', { blink: t > tb && t < tb + .25 ? 1 : undefined, look: [-.4, 0] });
      const hp = g.headG.getWorldPosition(new THREE.Vector3());
      if (t < tb) { const k2 = (tb - t); pb.position.set(hp.x - .25 - k2 * 3.5, hp.y + .05 + k2 * .5, hp.z); pb.asa(Math.sin(t * 18) * .9); pb.rotation.set(0, 0, 0); }
      else { const d = t - tb; pb.position.set(hp.x - .3 - d * .9, hp.y + .1 + d * 1.2 - d * d * .6, hp.z + d * .8); pb.rotation.set(d * 5, 0, d * 3); pb.asa(Math.sin(t * 22) * 1.1); }
      penas.forEach((p, i) => { const d = t - tb; p.visible = d > 0 && d < 2.8; const a = i / 14 * 6.283; p.position.set(hp.x - .2 + Math.cos(a) * d * .7, hp.y + .1 + Math.sin(a * 2) * .3 * d + d * .3 - d * d * .45, hp.z + Math.sin(a) * d * .7); p.rotation.set(t * 3 + i, t * 2 + i, i); });
      cam(c, [x - 2.1, y + .25, 67.9], [x, y + .05, 66.2], u / 3.1); return { focus: 2.6, range: 1.5, blur: 8 };
    };
  }),
  // J — o vizinho grita lá de baixo
  cena(70.1, 73.8, { foco: [-76, 65], hora: 8.2, raio: 30, fov: 42, fx: FX1 }, (C) => {
    const v = ator(C, VIZINHO, -77.2, 67.0, Math.PI * .85); const g = ator(C, GUIRUA, -72.5, 64.5, -Math.PI / 2); mochila(g); g.sombra.visible = false;
    return (t, u, c) => {
      fala(v, 'vizinho', t, 'bravo', { shR: [150 + Math.sin(t * 6) * 15, 20], elR: 20, shL: [40, 20], elL: 60, headX: -18 }, 1.2);
      g.place(-72.5 - u * .5, 64.4, .15 + 3.0 + Math.sin(t * 2) * .1, -Math.PI / 2 + .6); g.pose(debate(t * .6)); rosto(g, null, t, 'vergonha', { look: [.5, .5] });
      cam(c, [-81.2, 1.45, 66.1], [-75.5, 2.2, 65.6], u / 3.7); return { focus: 4.2, range: 4, blur: 4 };
    };
  }),
  // K — Avenida Brasil parada no sinal; ele passa por cima dos carros (câmera de drone)
  cena(73.8, 81.4, { foco: [-4, 0], hora: 8.3, raio: 34, fov: 46, carros: 0, tempo: vermelhoAv(73.8), fx: FX1 }, (C) => {
    const cores = ['#E2443A', '#3E7CC8', '#F4F1EA', '#2A2A30', '#9AA0A8', '#F2C230', '#2E9C6A', '#8E6CC4', '#F08A2C'];
    for (let i = 0; i < 9; i++) { const a = carro(cores[i % 9], i); a.position.set(19.8 - i * 5.6, 0, 2.5); a.rotation.y = Math.PI / 2; C.cena.add(a); const b = carro(cores[(i + 4) % 9], i + 20); b.position.set(-19.8 + i * 5.6, 0, -2.5); b.rotation.y = -Math.PI / 2; C.cena.add(b); }
    const g = ator(C, GUIRUA, -22, 2.5, Math.PI / 2); mochila(g); g.sombra.visible = false;
    return (t, u, c) => {
      const x = -22 + u * 4.4, y = 4.1 + Math.sin(t * 2) * .12; g.place(x, 2.4 + Math.sin(t * .7) * .3, y, Math.PI / 2 + Math.sin(t * 1.2) * .12); g.root.rotation.z = Math.sin(t * 1.6) * .1;
      g.pose(voo(t, .8)); rosto(g, null, t, 'feliz', { look: [0, .4], smile: 1 });
      cam(c, [[0, [x - 8, 9, 10]], [1, [x - 6, 7.5, 8]]], [x + 1.5, y - 1, 1.5], u / 7.6); return { focus: 10, range: 8, blur: 3 };
    };
  }),
  // L — chega no escritório: o relógio marca 7h50 e ele passa o crachá
  mk(81.4, 85.5, { bg: '#E6EEF2', fov: 42 }, (c) => {
    const E = escritorio(c); const g = atorC(c, GUIRUA, .3, 2.6, Math.PI); mochila(g); const cr = cracha(); g.hold(cr, 'R'); cr.position.set(0, -.08, .05);
    return (t, u, cm) => {
      E.rel.hora(7 + 50 / 60 + u * .002);
      const desce = smooth(81.4, 82.3, t), anda = smooth(82.5, 84.3, t);
      g.place(lerp(.3, 1.75, anda), lerp(2.6, .2, anda), (1 - desce) * .9, Math.PI + anda * .5);
      g.pose(desce < 1 ? { ...voo(t), knL: 40, knR: 40 } : anda > 0 && anda < 1 ? walk(t, 1.8, 1) : t > 84.3 ? { shR: [80, 10], elR: 40 } : idle(t));
      rosto(g, null, t, t < 84.6 ? 'feliz' : 'rindo', { smile: 1 });
      E.catraca.children[2].material.color.set(t > 84.6 ? '#3CCB6A' : '#E2443A');
      cam(cm, [[0, [3.4, 2.1, -3.0]], [.35, [3.3, 2.0, -2.9]], [1, [3.6, 1.6, 1.5]]], [[0, [3.2, 2.35, -3.96]], [.3, [3.2, 2.3, -3.9]], [.45, [.6, 1.0, 2.0]], [1, [1.8, 1.0, .2]]], u);
      return { focus: u < .35 ? 1.2 : 2.5, range: 2, blur: 6 };
    };
  }),
  // M — todo convencido... "Ele estava muito errado." (a imagem perde a cor)
  mk(85.5, 93.6, { bg: '#E6EEF2', fov: 36 }, (c) => {
    escritorio(c); const g = atorC(c, GUIRUA, 1.6, .4, 2.55); mochila(g);
    return (t, u, cm) => {
      fala(g, 'gui', t, t < 90.1 ? 'feliz' : 'rindo', { shL: [20, 12], shR: [t < 88 ? 30 : 140, t < 88 ? 10 : -10], elR: t < 88 ? 30 : 60 }, 1, { smile: 1 });
      const p = [1.6, 1.55, .4]; const z = smooth(90.1, 91.2, t);
      cam(cm, [[0, [p[0] + 1.9, 1.4, p[2] - 2.8]], [.55, [p[0] + 1.6, 1.35, p[2] - 2.4]], [.68, [p[0] + 1.0, 1.3, p[2] - 1.5]], [1, [p[0] + .9, 1.3, p[2] - 1.35]]], [p[0], 1.12, p[2]], u);
      return { sat: 1 - z * .75, tint: z > .5 ? '#E8E2D8' : '#FFFFFF', vig: .22 + z * .3, focus: 2 - z, range: 1.5, blur: 6 };
    };
  }),
];
