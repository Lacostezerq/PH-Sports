// QUINTA-FEIRA — falar com os animais: o Paçoca conta tudo (221,4 a 278,1 s).
import * as THREE from 'three';
import { rosto, fala, gesto, sentar } from './lib.js';
import { idle, walk, sentado } from './motor/char3d.js';
import { clamp, smooth, lerp } from './motor/core.js';
import { ctex } from './motor/toon.js';
import { cena, ator, cam, casa, casaRy, QUARTO, PISO, TETO } from './cena.js';
import { GUIPIJ, MARCOS2, DUDU2 } from './elenco.js';
import { pacoca, balao, balaoAnim, linguica, pombo, celular } from './pecas.js';

const FX4 = { tint: '#FFF3E2' }; // quinta: laranja quente
const FLASH = { tint: '#FFE6C4', sat: .75, vig: .62 }; // lembranças do Paçoca: bordas escuras e cor desbotada
const OQ = { foco: casa(2.6, 3.2), hora: 7.8, dentro: true, raio: 28, pedestres: 4, fx: FX4 };
/** Guilherme na cama: deitado (0) até sentado (1). */
function naCama(C) { const [bx2, bz] = QUARTO.cama; const g = ator(C, GUIPIJ, bx2, bz + .55, Math.PI); g.sombra.visible = false; return { g, bx2, bz }; }
function poseCama(g, bx2, bz, s, t) { // s: 0 deitado de costas, 1 sentado
  g.root.position.set(bx2, lerp(PISO + .62, PISO + .27, s), lerp(bz - .88, bz + .45, s)); g.root.rotation.set((1 - s) * Math.PI / 2 * .95, Math.PI, 0); // cabeça no travesseiro
  g.pose({ ...sentado, hipL: [80 * s + 10, 6], hipR: [80 * s + 10, 6], knL: 80 * s + 5, knR: 80 * s + 5, shL: [20, 20], shR: [20, 20] });
}
/** Calendário de parede com os dias riscados. */
function calendario() { const m = new THREE.Mesh(new THREE.PlaneGeometry(.42, .5), new THREE.MeshToonMaterial({ map: ctex(256, 304, (x) => { x.fillStyle = '#F4F1EA'; x.fillRect(0, 0, 256, 304); x.fillStyle = '#E2443A'; x.fillRect(0, 0, 256, 60); x.fillStyle = '#FFF'; x.font = '900 34px Inter'; x.textAlign = 'center'; x.fillText('NOVEMBRO', 128, 42); const d = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM']; x.font = '800 24px Inter';
    d.forEach((s, i) => { const y = 92 + i * 30; x.fillStyle = '#1B1420'; x.textAlign = 'left'; x.fillText(s, 40, y); if (i < 3) { x.strokeStyle = '#E2443A'; x.lineWidth = 5; x.beginPath(); x.moveTo(30, y - 16); x.lineTo(130, y + 4); x.stroke(); } if (i === 3) { x.strokeStyle = '#3E7CC8'; x.lineWidth = 4; x.beginPath(); x.ellipse(70, y - 8, 46, 16, 0, 0, 7); x.stroke(); } }); }) })); return m; }

export const DIA4 = [
  // AH — alguém reclama no pé da cama: o Paçoca. Ele pula e bate a cabeça na cabeceira
  cena(221.4, 230.9, OQ, (C) => {
    const { g, bx2, bz } = naCama(C); const P = pacoca(1.05); C.cena.add(P.g); P.g.position.set(bx2 - .1, PISO, bz - 1.45); P.g.rotation.y = Math.PI / 2;
    return (t, u, c) => {
      const s = smooth(224.6, 225.0, t), bate = t > 225.0 && t < 225.5 ? Math.sin((t - 225) / .5 * Math.PI) : 0;
      poseCama(g, bx2, bz, s, t); g.root.position.z += -bate * .05 + s * .05; rosto(g, null, t, t < 223 ? 'sono' : t < 225.6 ? 'surpreso' : 'medo', { blink: t < 223 ? 1 : bate > .3 ? 1 : undefined, look: [0, .5] });
      P.anima(t, { sentado: true, bravo: t < 228, olhar: [0, .3] });
      cam(c, [[0, [bx2 + 1.1, 1.25, bz - 2.6]], [1, [bx2 + .9, 1.2, bz - 2.4]]], [bx2 - .05, .85, bz - .3], u / 9.5); return { focus: 1.6, range: 1.6, blur: 6 };
    };
  }),
  // AI — o Paçoca, vira-lata caramelo, orelha dobrada (close, abanando o rabo)
  cena(230.9, 238.0, OQ, (C) => {
    const [bx2, bz] = QUARTO.cama; const P = pacoca(1.05); C.cena.add(P.g); P.g.position.set(bx2 - .1, PISO, bz - 1.45); P.g.rotation.y = Math.PI / 2;
    return (t, u, c) => { P.anima(t, { sentado: true, abana: true, feliz: true, aberta: .35 + Math.sin(t * 6) * .1, fala: false });
      const h = P.cab.getWorldPosition(new THREE.Vector3()); cam(c, [[0, [h.x + .9, h.y + .05, h.z - 1.1]], [1, [h.x + .55, h.y, h.z - .75]]], [h.x, h.y - .05, h.z], u / 7.1); return { focus: .9, range: .6, blur: 12 }; };
  }),
  // AJ — oitenta e nove palavras: as palavras que ele conhece aparecem em volta
  cena(238.0, 247.2, OQ, (C) => {
    const [bx2, bz] = QUARTO.cama; const P = pacoca(1.05); C.cena.add(P.g); P.g.position.set(bx2 - .1, PISO, bz - 1.45); P.g.rotation.y = Math.PI / 2;
    const pal = ['SENTA', 'PASSEIO', 'BANHO', 'NÃO!', 'BOLINHA', 'DEITA', 'COMIDA', 'VEM'].map((w, i) => { const b = balao(w, { tipo: 'fala', tam: .42, fs: 90 }); C.cena.add(b); const a = i / 8 * Math.PI * 2; b.position.set(bx2 - .1 + Math.cos(a) * .65, PISO + .95 + (i % 3) * .22, bz - 1.45 + Math.sin(a) * .65); return [b, 238.6 + i * .8]; });
    return (t, u, c) => { P.anima(t, { sentado: true, abana: true, olhar: [Math.sin(t * 1.4) * .9, .3], fala: false });
      pal.forEach(([b, ta]) => balaoAnim(b, t, ta, 246.9));
      const [x, z] = [bx2 - .1, bz - 1.45]; cam(c, [[0, [casa(2.35, 4.05)[0], 1.15, casa(2.35, 4.05)[1]]], [1, [casa(2.15, 3.9)[0], 1.15, casa(2.15, 3.9)[1]]]], [x, .95, z], u / 9.2); return { focus: 1.5, range: 1.2, blur: 6 };
    };
  }),
  // AK — "Linguiça." / "Claro que é linguiça." (os dois de frente)
  cena(247.2, 252.3, OQ, (C) => {
    const { g, bx2, bz } = naCama(C); const P = pacoca(1.05); C.cena.add(P.g); P.g.position.set(bx2 - .1, PISO, bz - 1.45); P.g.rotation.y = Math.PI / 2 + .4;
    const ln = linguica(); C.cena.add(ln);
    return (t, u, c) => {
      poseCama(g, bx2, bz, 1, t); if (t > 248.1 && t < 250.2) fala(g, 'gui', t, 'rindo', { ...sentado, hipL: [90, 6], hipR: [90, 6], knL: 85, knR: 85, shR: [40, 10], elR: 90 }, .8, { smile: 1 }); else rosto(g, null, t, 'feliz', { smile: 1 });
      const pul = t > 247.2 && t < 248.3 ? Math.abs(Math.sin((t - 247.2) * 6)) * .12 : 0; P.g.position.y = PISO + pul; P.anima(t, { sentado: t > 248.3, abana: true, feliz: true });
      ln.position.set(bx2 - .1 + .35, PISO + 1.1 + Math.sin(t * 2) * .03, bz - 1.45); ln.rotation.y = t; ln.visible = t < 249.5; ln.scale.setScalar(1.8);
      cam(c, [[0, [casa(1.9, 4.2)[0], 1.2, casa(1.9, 4.2)[1]]], [1, [casa(2.1, 4.0)[0], 1.35, casa(2.1, 4.0)[1]]]], [bx2 - .1, 1.08, bz - .9], u / 5.1); return { focus: 2.4, range: 1.5, blur: 6 };
    };
  }),
  // AL — lembrança 1: o Seu Marcos joga linguiça escondido embaixo da mesa
  cena(252.3, 255.7, { foco: casa(-1.5, -1), hora: 13, dentro: true, raio: 28, fx: FLASH }, (C) => {
    const [mx, mz] = casa(-1.6, -.4); const m = ator(C, MARCOS2, mx, mz, casaRy(Math.PI)); sentar(m, mx, mz, casaRy(Math.PI), PISO + .46);
    const P = pacoca(1.0); C.cena.add(P.g); const [dx, dz] = casa(-.6, .3); P.g.position.set(dx, PISO, dz); P.g.rotation.y = casaRy(Math.PI * .75); const ln = linguica(); C.cena.add(ln);
    return (t, u, c) => {
      const joga = smooth(253.7, 254.1, t); m.pose({ ...sentado, shR: [40 + joga * 40, -10], elR: 70 - joga * 50, twist: -20, headY: Math.sin(t * 5) * 25 * (1 - joga) }); rosto(m, null, t, 'desconfiado', { look: [Math.sin(t * 5) > 0 ? .9 : -.9, 0] });
      const a = new THREE.Vector3(mx, PISO + .7, mz), b = P.cab.getWorldPosition(new THREE.Vector3()); const k = clamp((t - 254.05) / .45); ln.position.lerpVectors(a, b, k); ln.position.y += Math.sin(k * Math.PI) * .3; ln.visible = k < 1; ln.scale.setScalar(1.6);
      P.anima(t, { sentado: true, abana: true, feliz: true, aberta: k > .8 ? .6 : 0, fala: false });
      cam(c, [[0, [casa(.35, -1.0)[0], 1.25, casa(.35, -1.0)[1]]], [1, [casa(.3, -.85)[0], 1.2, casa(.3, -.85)[1]]]], [casa(-1.15, -.05)[0], .85, casa(-1.15, -.05)[1]], u / 3.4); return { focus: 1.7, range: 1.2, blur: 10 };
    };
  }),
  // AM — lembrança 2: os pombos da praça cochichando em roda
  cena(255.7, 258.9, { foco: [0, -26], hora: 11, raio: 28, fx: FLASH }, (C) => {
    const ps = []; for (let i = 0; i < 7; i++) { const p = pombo(i % 2 ? '#8D94A8' : '#9AA0B4'); const a = i / 7 * Math.PI * 2; p.position.set(-4.5 + Math.cos(a) * .45, .16, -22 + Math.sin(a) * .45); p.rotation.y = -a + Math.PI; C.cena.add(p); ps.push([p, a]); }
    const b = balao('...', { tam: .5, fs: 150 }); C.cena.add(b); b.position.set(-4.5, .9, -22);
    return (t, u, c) => { ps.forEach(([p, a], i) => { p.children[1].position.y = .1 + Math.sin(t * 9 + i) * .02; p.rotation.y = -a + Math.PI + Math.sin(t * 3 + i) * .3; p.position.y = .16 + Math.abs(Math.sin(t * 6 + i)) * .01; p.asa(Math.sin(t * 12 + i) * .1); });
      balaoAnim(b, t, 256.4, 258.7); cam(c, [[0, [-3.1, .55, -20.7]], [1, [-3.3, .5, -20.9]]], [-4.5, .25, -22], u / 3.2); return { focus: 1.7, range: 1, blur: 10 }; };
  }),
  // AN — lembrança 3: de madrugada, o Dudu na calçada chorando no telefone
  cena(258.9, 262.9, { foco: casa(-2, 13), hora: 2.5, raio: 28, pedestres: 0, carros: 4, fx: { ...FLASH, tint: '#DCE2FF' } }, (C) => {
    const [dx, dz] = casa(-1.5, 13.6); const d = ator(C, DUDU2, dx, dz, casaRy(-Math.PI / 2)); const cel = celular(); d.hold(cel, 'R'); cel.position.set(0, -.05, .02); cel.rotation.set(-1.2, 0, 0);
    const luz = new THREE.PointLight('#9CC4FF', 3, 2.5); C.cena.add(luz);
    return (t, u, c) => {
      d.pose({ ...walk(t, 1.1, .5), shR: [150, -20], elR: 130, headX: 10 }); rosto(d, null, t, 'choro', { lagrima: true, look: [0, .3] }); const h = d.headG.getWorldPosition(new THREE.Vector3()); luz.position.set(h.x + .2, h.y, h.z);
      const p = d.root.position; cam(c, [[0, [p.x + 2.3, 1.5, p.z - 1.1]], [1, [p.x + 1.9, 1.45, p.z - .9]]], [p.x, 1.35, p.z], u / 4); return { focus: 2.2, range: 1.5, blur: 8 };
    };
  }),
  // AO — "Com quem?" / "Sei lá, eu sou cachorro, mas ele falou a palavra cirurgia."
  cena(262.9, 268.0, OQ, (C) => {
    const { g, bx2, bz } = naCama(C); const P = pacoca(1.05); C.cena.add(P.g); P.g.position.set(bx2 - .1, PISO, bz - 1.45); P.g.rotation.y = Math.PI / 2 + .4;
    return (t, u, c) => {
      poseCama(g, bx2, bz, 1, t); if (t < 263.8) fala(g, 'gui', t, 'desconfiado', { ...sentado, hipL: [90, 6], hipR: [90, 6], knL: 85, knR: 85 }, .6); else rosto(g, null, t, t > 267 ? 'medo' : 'desconfiado');
      P.anima(t, { sentado: true, triste: t > 266, cabeca: t > 264 && t < 265.4 ? [.25 * Math.sin(t * 8), 0] : undefined });
      const z = smooth(266.6, 267.6, t); const h = P.cab.getWorldPosition(new THREE.Vector3());
      cam(c, [[0, [casa(1.9, 4.2)[0], 1.4, casa(1.9, 4.2)[1]]], [1, [casa(2.3, 3.6)[0], 1.15, casa(2.3, 3.6)[1]]]], [lerp(bx2 - .1, h.x, z), lerp(1.2, h.y, z), lerp(bz - 1.0, h.z, z)], u / 5.1); return { focus: 2.2 - z * 1.0, range: 1.5, blur: 6 + z * 6 };
    };
  }),
  // AP — ele entende que é sério: na janela, com o calendário marcando quinta
  cena(268.0, 278.1, OQ, (C) => {
    const [jx, jz] = casa(2.75, 4.55); const g = ator(C, GUIPIJ, jx, jz, casaRy(0)); // olhando a janela (de lado para a câmera)
    const P = pacoca(1.0); C.cena.add(P.g); const [qx2, qz2] = casa(3.55, 4.25); P.g.position.set(qx2, PISO, qz2); P.g.rotation.y = casaRy(-.4);
    const cal = calendario(); const [kx, kz] = casa(4.63, 4.6); cal.position.set(kx, 1.75, kz); cal.rotation.y = -Math.PI / 2; C.cena.add(cal);
    return (t, u, c) => {
      g.pose({ ...idle(t), shL: [35, 10], elL: 90, shR: [20, 10], headX: 6 }); rosto(g, null, t, 'triste', { look: [Math.sin(t * .4) * .4, .1] }); P.anima(t, { sentado: true, triste: true, olhar: [-.6, .4], fala: false });
      cam(c, [[0, [casa(4.35, 3.3)[0], 1.55, casa(4.35, 3.3)[1]]], [1, [casa(4.2, 3.6)[0], 1.6, casa(4.2, 3.6)[1]]]], [[0, [jx, 1.4, jz]], [.62, [jx, 1.45, jz]], [1, [kx, 1.7, kz]]], u / 10.1); return { focus: 1.6, range: 1.5, blur: 6 };
    };
  }),
];
