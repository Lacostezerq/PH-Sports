// DOMINGO — nenhum poder (398,6 a 525,5 s): a escolha, o hospital, o bilhete inteiro e o final.
import * as THREE from 'three';
import { rosto, fala, gesto, sentar } from './lib.js';
import { idle, walk, sentado } from './motor/char3d.js';
import { clamp, smooth, lerp } from './motor/core.js';
import { ctex, cyl, rb, bx } from './motor/toon.js';
import { cena, ator, cam, casa, casaRy, hosp, QUARTO, PISO, PISOH, TETO, caminhar, ventiladorQuarto , semFigurante, LADO_DUDU } from './cena.js';
import { GUIPIJ, GUIRUA, DUDU2, MEDICO, povo } from './elenco.js';
import { espelho, bilhete, bilheteTex, pacoca, coxinha, linguica, sacoPadaria } from './pecas.js';
import { onibusParado } from '../../../mundo/cidade/publicos.js';
import { brilho } from './efeitos.js';

const FX7 = { tint: '#FFF8EE' }; // domingo: cor normal, quente
const NOITE7 = { tint: '#DCE2FF' };
const OQ = { foco: casa(2.5, 3), hora: 8, dentro: true, raio: 30, pedestres: 4, fx: FX7 };
const OQN = { ...OQ, hora: 21, fx: NOITE7 };
const SALA = { foco: [52, -88], hora: 8.3, dentro: true, raio: 26, fx: FX7 };
const [EX, EZ] = QUARTO.espelho; // espelho na porta do guarda-roupa (olha para -x)
const NOTA = [EX - .05, 1.55, EZ + .12];

function espelhoBilhete(C, estado) {
  const e = espelho(.6, 1.15); e.position.set(EX - .02, 1.35, EZ); e.rotation.y = -Math.PI / 2; C.cena.add(e);
  const b = bilhete(estado); b.position.set(...NOTA); b.rotation.y = -Math.PI / 2; b.rotation.z = .04; C.cena.add(b); return b;
}
/** Caneta na mão. */
function caneta() { const g = new THREE.Group(); g.add(cyl(.009, .009, .14, '#2E6FB8', 0, 0, 0, { seg: 8, rot: [Math.PI / 2, 0, 0] })); g.add(cyl(.004, .009, .02, '#F4F1EA', 0, 0, .08, { seg: 8, rot: [Math.PI / 2, 0, 0] })); return g; }
/** Ícones dos cinco poderes (desenhados, sem texto). */
const DESENHO = {
  voar: (x) => { x.fillStyle = '#FFFFFF'; for (const s of [-1, 1]) { x.beginPath(); x.ellipse(128 + s * 62, 120, 58, 26, s * -.5, 0, 7); x.fill(); x.beginPath(); x.ellipse(128 + s * 50, 150, 44, 20, s * -.4, 0, 7); x.fill(); } x.fillStyle = '#3E7CC8'; x.beginPath(); x.arc(128, 130, 28, 0, 7); x.fill(); },
  mente: (x) => { x.fillStyle = '#F7A8C8'; x.beginPath(); x.ellipse(128, 128, 82, 66, 0, 0, 7); x.fill(); x.strokeStyle = '#C8608A'; x.lineWidth = 8; x.beginPath(); x.moveTo(128, 66); x.lineTo(128, 190); for (const s of [-1, 1]) { x.moveTo(128 + s * 20, 92); x.quadraticCurveTo(128 + s * 70, 100, 128 + s * 40, 130); x.moveTo(128 + s * 24, 150); x.quadraticCurveTo(128 + s * 70, 160, 128 + s * 50, 178); } x.stroke(); },
  futuro: (x) => { x.fillStyle = '#FFFFFF'; x.beginPath(); x.ellipse(128, 128, 92, 54, 0, 0, 7); x.fill(); x.fillStyle = '#E2A630'; x.beginPath(); x.arc(128, 128, 40, 0, 7); x.fill(); x.fillStyle = '#1B1420'; x.beginPath(); x.arc(128, 128, 18, 0, 7); x.fill(); x.fillStyle = '#FFF'; x.beginPath(); x.arc(138, 118, 7, 0, 7); x.fill(); },
  invisivel: (x) => { x.fillStyle = 'rgba(220,240,255,.95)'; x.beginPath(); x.moveTo(60, 210); x.lineTo(60, 110); x.arc(128, 110, 68, Math.PI, 0); x.lineTo(196, 210); for (let i = 0; i < 4; i++) x.lineTo(196 - (i + .5) * 34, i % 2 ? 210 : 186); x.closePath(); x.fill(); x.fillStyle = '#1B1420'; for (const s of [-1, 1]) { x.beginPath(); x.ellipse(128 + s * 26, 110, 10, 16, 0, 0, 7); x.fill(); } },
  tempo: (x) => { x.fillStyle = '#FFFFFF'; x.strokeStyle = '#1B1420'; x.lineWidth = 12; x.beginPath(); x.arc(128, 128, 82, 0, 7); x.fill(); x.stroke(); x.beginPath(); x.moveTo(128, 128); x.lineTo(128, 70); x.moveTo(128, 128); x.lineTo(170, 140); x.stroke(); },
};
const CORES = { voar: '#3E7CC8', mente: '#C8608A', futuro: '#E2A630', invisivel: '#5FB6A4', tempo: '#8E5BB8' };
function iconePoder(nome) {
  const tx = ctex(256, 256, (x) => { x.fillStyle = CORES[nome]; x.beginPath(); x.arc(128, 128, 124, 0, 7); x.fill(); x.fillStyle = 'rgba(255,255,255,.18)'; x.beginPath(); x.arc(128, 128, 108, 0, 7); x.fill(); DESENHO[nome](x); });
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tx, transparent: true, depthWrite: false })); s.scale.setScalar(.34); return s;
}
const PODERES = [['voar', 406.8], ['mente', 408.4], ['futuro', 409.5], ['invisivel', 411.4], ['tempo', 412.4]];
/** Órbita dos ícones em volta da cabeça; o que está sendo falado cresce. */
function orbita(C, k, tIni) {
  const ics = PODERES.map(([n, tf]) => { const s = iconePoder(n); C.cena.add(s); return { s, tf }; });
  return (t, raio = .5) => { const h = k.headG.getWorldPosition(new THREE.Vector3());
    ics.forEach(({ s, tf }, i) => { const a = t * .7 + i / 5 * 6.283; const ap = smooth(tIni + i * .15, tIni + i * .15 + .4, t); const fala = smooth(tf - .1, tf + .15, t) * (1 - smooth(tf + .9, tf + 1.3, t));
      s.position.set(h.x + Math.cos(a) * raio, h.y + .62 + Math.sin(a * 2) * .05, h.z + Math.sin(a) * raio); s.scale.setScalar((.26 + fala * .18) * ap * (1 + Math.sin(t * 3 + i) * .03)); s.material.opacity = ap; }); };
}
/** Guilherme de barriga para baixo dentro de um suporte (para flutuar e cair). */
function guiFlutuando(C, def = GUIPIJ) {
  const k = ator(C, def, 0, 0); const sup = new THREE.Group(); C.cena.add(sup); sup.add(k.root);
  k.root.position.set(0, 0, -.82); k.root.rotation.set(Math.PI / 2, 0, 0); k.sombra.visible = false; return { k, sup };
}
/** Tela do celular com a mensagem do Dudu. */
function celularMsg() {
  const g = new THREE.Group(); g.add(rb(.075, .15, .012, '#1B1A20', 0, 0, 0, { r: .008 }));
  const tx = ctex(256, 512, (x) => { x.fillStyle = '#ECE5DA'; x.fillRect(0, 0, 256, 512); x.fillStyle = '#2E6FB8'; x.fillRect(0, 0, 256, 70); x.fillStyle = '#FFF'; x.font = '800 34px Inter'; x.fillText('Dudu', 20, 48);
    x.fillStyle = '#FFFFFF'; x.beginPath(); x.roundRect(16, 150, 224, 150, 22); x.fill(); x.fillStyle = '#1B1420'; x.font = '700 32px Inter'; ['valeu por', 'ter vindo,', 'Gui'].forEach((l, i) => x.fillText(l, 34, 196 + i * 40)); x.fillStyle = '#F2546E'; x.beginPath(); const cx = 200, cy = 270; x.moveTo(cx, cy + 14); x.bezierCurveTo(cx - 26, cy - 2, cx - 12, cy - 22, cx, cy - 8); x.bezierCurveTo(cx + 12, cy - 22, cx + 26, cy - 2, cx, cy + 14); x.fill(); });
  const t = new THREE.Mesh(new THREE.PlaneGeometry(.064, .13), new THREE.MeshBasicMaterial({ map: tx })); t.position.z = .007; g.add(t); return g;
}
const pensa = (t) => ({ ...idle(t), shR: [60, 15], elR: 140, shL: [30, 20], elL: 100, headX: 6, headZ: Math.sin(t * .8) * 4 }); // mão no queixo

export const DIA7 = [
  // BC1 — domingo, nenhum poder: ele de frente para o bilhete no espelho
  cena(398.6, 404.8, OQ, (C) => {
    ventiladorQuarto(C); espelhoBilhete(C, { estado: 'rasgado' });
    const g = ator(C, GUIPIJ, EX - 1.0, EZ + .15, Math.PI / 2);
    return (t, u, c) => { g.pose({ ...idle(t), shL: [15, 10], shR: [15, 10], headX: -4 }); rosto(g, null, t, 'neutro', { look: [0, .1] });
      cam(c, [[0, [EX - 1.9, 1.62, EZ - 1.2]], [1, [EX - 1.6, 1.6, EZ - .85]]], [[0, [EX - .9, 1.45, EZ + .1]], [1, [EX - .2, 1.5, EZ + .12]]], u / 6.2); return { focus: 1.6, range: 1.2, blur: 6 };
    };
  }),
  // BC2 — os cinco poderes girando em volta da cabeça dele; cada um cresce quando é falado
  cena(404.8, 413.5, OQ, (C) => {
    ventiladorQuarto(C); espelhoBilhete(C, { estado: 'rasgado' }); const [cx, cz] = QUARTO.centro;
    const g = ator(C, GUIPIJ, cx + .2, cz + .1, -Math.PI / 2); const orb = orbita(C, g, 405.6);
    return (t, u, c) => { g.pose(pensa(t)); rosto(g, null, t, 'desconfiado', { look: [Math.sin(t * 1.6) * .7, .3] }); orb(t);
      cam(c, [[0, [cx - 1.6, 1.5, cz - 1.5]], [1, [cx - 1.1, 1.55, cz - .9]]], [cx + .2, 1.45, cz + .1], u / 8.7); return { focus: 1.6, range: 1.5, blur: 5 };
    };
  }),
  // BD — ele anda de um lado para o outro, pensando alto
  cena(413.5, 423.7, OQ, (C) => {
    ventiladorQuarto(C); espelhoBilhete(C, { estado: 'rasgado' });
    const g = ator(C, GUIPIJ, ...casa(2.5, 2.5), Math.PI);
    return (t, u, c) => {
      const T = 3.2, f = (t - 413.5) / T, ida = Math.floor(f) % 2 === 0, fr = f % 1; const para = t > 421.1;
      const lz = para ? 3.4 : lerp(2.5, 4.3, ida ? smooth(0, 1, fr) : 1 - smooth(0, 1, fr)); const vira = fr > .88 || fr < .12;
      const [x, z] = casa(2.5, lz); g.place(x, z, PISO, ida ? 0 : Math.PI);
      const base = para ? { ...idle(t), headX: 14, shL: [5, 8], shR: [5, 8] } : vira ? idle(t) : walk(t, 1.4, .8);
      if (para) { g.pose(base); rosto(g, 'gui', t, 'triste', { look: [0, .6] }); } else fala(g, 'gui', t, t < 418 ? 'desconfiado' : 'surpreso', base, 1.1);
      cam(c, [[0, [casa(1.3, 4.95)[0], 1.55, casa(1.3, 4.95)[1]]], [1, [casa(1.55, 4.7)[0], 1.5, casa(1.55, 4.7)[1]]]], [x, 1.3, z], u / 10.2); return { focus: 1.4, range: 1.4, blur: 5 };
    };
  }),
  // BE — deitado na cama, olhando o teto (a pesquisa aparece na tela)
  cena(423.7, 437.6, OQ, (C) => {
    const v = ventiladorQuarto(C); const pas = v.userData.pas; espelhoBilhete(C, { estado: 'rasgado' }); const [bx2, bz] = QUARTO.cama;
    const g = ator(C, GUIPIJ, bx2, bz, Math.PI); g.sombra.visible = false; const P = pacoca(1.0); C.cena.add(P.g); const [px, pz] = casa(3.5, 4.2); P.g.position.set(px, PISO, pz); P.g.rotation.y = casaRy(-.6);
    return (t, u, c) => {
      pas.rotation.y = t * .55; g.root.position.set(bx2, PISO + .62, bz - .88); g.root.rotation.set(Math.PI / 2 * .95, Math.PI, 0);
      g.pose({ ...sentado, hipL: [10, 6], hipR: [10, 6], knL: 5, knR: 5, shL: [150, 30], shR: [150, 30], elL: 120, elR: 120 }); rosto(g, null, t, 'desconfiado', { look: [Math.sin(t * .6) * .5, 0] });
      P.anima(t, { sentado: true, abana: t > 430, olhar: [-.4, .5] });
      cam(c, [[0, [bx2 + 1.5, 2.3, bz - .3]], [1, [bx2 + 1.2, 2.15, bz - .6]]], [bx2, .9, bz - .5], u / 13.9); return { focus: 2, range: 1.5, blur: 5 };
    };
  }),
  // BF — a mão escreve "Nenhum." embaixo do bilhete
  cena(437.6, 441.9, OQ, (C) => {
    const b = espelhoBilhete(C, { estado: 'rasgado' }); const g = ator(C, GUIPIJ, EX - .5, EZ - .05, Math.PI / 2); const pen = caneta(); g.hold(pen, 'R'); pen.rotation.set(-.6, 0, 0);
    let ult = -1;
    return (t, u, c) => {
      const n = Math.round(smooth(439.3, 440.9, t) * 20) / 20; if (n !== ult) { b.setTex({ estado: 'rasgado', nenhum: n }); ult = n; }
      const esc = t > 439.2 && t < 441.0; const mexe = esc ? Math.sin(t * 22) * 4 : 0;
      if (t > 441.05) fala(g, 'gui', t, 'feliz', { shR: [70, 5], elR: 60 }, .5, { smile: .6 }); else { g.pose({ ...idle(t), shR: [78 + mexe, -8 + (n * 12)], elR: 62, headX: 6 }); rosto(g, null, t, 'neutro', { look: [.3, .3] }); }
      cam(c, [[0, [EX - 1.25, 1.72, EZ + .95]], [1, [EX - 1.1, 1.68, EZ + .85]]], [EX - .1, 1.48, EZ + .1], u / 4.3); return { focus: 1.25, range: .8, blur: 7 };
    };
  }),
  // BG — pega o ônibus, do jeito normal (o ônibus chega e para; ele sobe)
  cena(441.9, 447.3, { foco: [-12, 5], hora: 8.6, raio: 32, carros: 0, fx: FX7 }, (C) => {
    const o = onibusParado('#2E9C6A', 'CIRCULAR - CENTRO'); o.rotation.y = Math.PI / 2; C.cena.add(o);
    const g = ator(C, GUIRUA, -9.0, 4.6, Math.PI); const saco = sacoPadaria(); g.hold(saco, 'L'); saco.position.set(0, -.18, .02);
    return (t, u, c) => {
      const k = smooth(441.9, 444.6, t); o.position.set(-34 + 20 * (1 - (1 - k) ** 2), 0, 2.5);
      const sobe = smooth(445.3, 446.6, t); g.place(-9.0, lerp(4.6, 3.9, sobe), sobe * .28, Math.PI); g.pose(sobe > 0 && sobe < 1 ? walk(t, 1.4, .8) : { ...idle(t), shL: [10, 8] }); rosto(g, null, t, 'neutro', { look: [-.6, 0] });
      cam(c, [[0, [-4.6, 1.55, 6.9]], [1, [-5.3, 1.5, 6.6]]], [[0, [-12, 1.5, 3.2]], [1, [-9.4, 1.3, 4.2]]], u / 5.4); return { focus: 6, range: 4, blur: 3 };
    };
  }),
  // BH — entra na sala de espera e senta do lado do Dudu
  cena(447.3, 451.9, SALA, (C) => {
    const [dx, dz] = hosp(-8.45, .35); semFigurante(C, LADO_DUDU); const d = ator(C, DUDU2, dx, dz, Math.PI); sentar(d, dx, dz, Math.PI, PISOH + .49);
    const [sx, sz] = hosp(-7.9, .35); const g = ator(C, GUIRUA, ...hosp(-4.8, -2.2), Math.PI); const saco = sacoPadaria(); g.hold(saco, 'L'); saco.position.set(0, -.18, .02);
    const vai = caminhar(C, g, [hosp(-4.8, -2.2), hosp(-6.6, -1.0), [sx, sz - .7]], 447.4, { vel: 1.25, direto: true, olharFim: Math.PI });
    return (t, u, c) => {
      const s = smooth(450.4, 451.2, t);
      if (t < 450.4) vai(t); else { g.place(sx, lerp(sz - .7, sz, s), lerp(PISOH, PISOH + .49 - .28 * (g.root.scale.x || 1), s), Math.PI); g.pose({ ...idle(t), ...(s > .5 ? sentado : {}), knL: 90 * s, knR: 90 * s, hipL: [90 * s, 6], hipR: [90 * s, 6] }); g.sombra.visible = s < .5; }
      rosto(g, null, t, 'neutro'); d.pose({ ...sentado, shL: [45, 12], shR: [45, -12], elL: 75, elR: 75, headX: 18 - smooth(450.8, 451.6, t) * 14 }); rosto(d, null, t, t > 451 ? 'surpreso' : 'triste', { look: [t > 451 ? .8 : 0, .6] });
      const p = g.root.position; cam(c, [[0, [dx + .6, 1.45, dz - 3.6]], [1, [dx + .2, 1.4, dz - 3.0]]], [(p.x + dx) / 2, 1.05, (p.z + dz) / 2], u / 4.6); return { focus: 3, range: 2, blur: 5 };
    };
  }),
  // BI — "Gui? Como você sabia que eu tava aqui?" / "Um cachorro me contou." / coxinha
  cena(451.9, 461.9, SALA, (C) => {
    const [dx, dz] = hosp(-8.45, .35); semFigurante(C, LADO_DUDU); const d = ator(C, DUDU2, dx, dz, Math.PI); sentar(d, dx, dz, Math.PI, PISOH + .49);
    const [sx, sz] = hosp(-7.9, .35); const g = ator(C, GUIRUA, sx, sz, Math.PI); sentar(g, sx, sz, Math.PI, PISOH + .49);
    const saco = sacoPadaria(); C.cena.add(saco); saco.position.set(sx + .25, PISOH + .5, sz + .05); const cx = coxinha(); cx.scale.setScalar(1.6); C.cena.add(cx);
    return (t, u, c) => {
      const lado = { headY: 22 }, ladoD = { headY: -22 };
      fala(d, 'dudu', t, t < 454.6 ? 'surpreso' : t < 457 ? 'desconfiado' : 'rindo', { ...sentado, ...ladoD, shL: [30, 12], shR: [30, -12], elL: 60, elR: 60 }, 1, { look: [.8, .2], smile: t > 457 ? .7 : 0 });
      const da = smooth(460.6, 461.4, t); fala(g, 'gui', t, t < 459.5 ? 'neutro' : 'feliz', { ...sentado, ...lado, shR: [30 + 50 * da, 10], elR: 60 - 40 * da, shL: [30, 10], elL: 70 }, .9, { look: [-.8, .2], smile: t > 459 ? .8 : .2 });
      const h = g.hands.R.getWorldPosition(new THREE.Vector3()); cx.visible = t > 460.4; cx.position.copy(h); cx.position.y += .04;
      const P1 = [dx + .3, 1.35, dz - 2.4], P2 = [dx + 1.3, 1.3, dz - 1.5], P3 = [dx - .8, 1.3, dz - 1.6];
      cam(c, [[0, P1], [.25, P1], [.32, P2], [.52, P2], [.6, P3], [.8, P3], [1, [dx + .2, 1.3, dz - 2.0]]], [[0, [dx + .27, 1.05, dz]], [.3, [dx, 1.1, dz]], [.55, [sx, 1.1, sz]], [.8, [dx, 1.1, dz]], [1, [dx + .27, 1.05, dz]]], u / 10); return { focus: 2, range: 1.5, blur: 6 };
    };
  }),
  // BJ — os dois riem e comem; o relógio corre seis horas; o médico faz joinha e eles se abraçam
  cena(461.9, 468.9, SALA, (C) => {
    const [dx, dz] = hosp(-8.45, .35); semFigurante(C, LADO_DUDU); const d = ator(C, DUDU2, dx, dz, Math.PI); sentar(d, dx, dz, Math.PI, PISOH + .49);
    const [sx, sz] = hosp(-7.9, .35); const g = ator(C, GUIRUA, sx, sz, Math.PI); sentar(g, sx, sz, Math.PI, PISOH + .49);
    const c1 = coxinha(), c2 = coxinha(); c1.scale.setScalar(1.6); c2.scale.setScalar(1.6); C.cena.add(c1, c2);
    const m = ator(C, MEDICO, ...hosp(-4.6, -2.6), -Math.PI / 2); const vem = caminhar(C, m, [hosp(-4.6, -2.6), hosp(-6.7, -.85)], 465.6, { vel: 1.3, direto: true, olharFim: -Math.PI / 2 - .5 });
    const relo = new THREE.Group(); { const f = new THREE.Mesh(new THREE.CircleGeometry(.3, 32), new THREE.MeshBasicMaterial({ map: ctex(256, 256, (x) => { x.fillStyle = '#FFF'; x.beginPath(); x.arc(128, 128, 126, 0, 7); x.fill(); x.fillStyle = '#1B1420'; for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; x.fillRect(128 + Math.cos(a) * 104 - 6, 128 + Math.sin(a) * 104 - 6, 12, 12); } }) })); relo.add(f); relo.add(cyl(.32, .32, .04, '#2A2A30', 0, 0, -.02, { rot: [Math.PI / 2, 0, 0] })); }
    const ph = new THREE.Group(), pm = new THREE.Group(); ph.add(bx(.03, .15, .01, '#1B1420', 0, .065, .01)); pm.add(bx(.02, .23, .01, '#C84E4E', 0, .1, .012)); relo.add(ph, pm); const [rx, rz] = hosp(-11.2, 5.82); relo.position.set(rx, 2.55, rz); relo.rotation.y = Math.PI; C.cena.add(relo);
    return (t, u, c) => {
      const hh = 8 + smooth(462.2, 466.2, t) * 6; pm.rotation.z = -(hh % 1) * 6.283; ph.rotation.z = -(hh % 12) / 12 * 6.283;
      const abr = smooth(468.1, 468.5, t), ri = Math.sin(t * 9) * .5 + .5;
      d.pose(abr > 0 ? { ...sentado, headY: -20, shL: [70, 40 - 30 * abr], shR: [70, -10], elL: 60, elR: 40, lean: 8 * abr, twist: -20 * abr } : { ...sentado, headY: -18, headX: -8 * ri, shR: [55 + 20 * ri, 10], elR: 120, shL: [30, 12], elL: 60, bob: ri * .02 });
      g.pose(abr > 0 ? { ...sentado, headY: 20, shR: [70, 40 - 30 * abr], shL: [70, -10], elL: 40, elR: 60, lean: 8 * abr, twist: 20 * abr } : { ...sentado, headY: 18, headX: -8 * ri, shR: [55 + 20 * (1 - ri), 10], elR: 120, shL: [30, 10], elL: 70, bob: (1 - ri) * .02 });
      const alegre = t > 467.9; rosto(d, null, t, 'rindo', { smile: 1, mouth: t < 465.6 ? { open: .3 + ri * .5 } : undefined }); rosto(g, null, t, 'rindo', { smile: 1, mouth: t < 465.6 ? { open: .3 + (1 - ri) * .5 } : undefined });
      c1.position.copy(d.hands.R.getWorldPosition(new THREE.Vector3())); c2.position.copy(g.hands.R.getWorldPosition(new THREE.Vector3())); c1.visible = c2.visible = t < 467.6;
      vem(t); if (t > 467.7) { m.pose({ ...idle(t), shR: [95, 20], elR: 100 }); } rosto(m, null, t, alegre ? 'feliz' : 'neutro', { smile: alegre ? 1 : 0 });
      const z = smooth(462, 465.6, t), fim = smooth(466.3, 467.4, t);
      const w = z * (1 - fim) * .75; cam(c, [[0, [dx + .27, 1.3, dz - 2.2]], [.55, [dx + .1, 1.45, dz - 3.0]], [1, [dx - .5, 1.45, dz - 3.4]]], [lerp(dx + .27, rx, w), lerp(lerp(1.05, 2.3, w), 1.2, fim), lerp(lerp(dz, rz, w), dz - .4, fim)], u / 7); return { focus: 2.5, range: 2.5, blur: 4, ...(alegre ? { bloom: .35 } : {}) };
    };
  }),
  // BK — à noite ele volta pro quarto; o pedaço rasgado volta voando para o bilhete
  cena(468.9, 478.3, OQN, (C) => {
    ventiladorQuarto(C); const b = espelhoBilhete(C, { estado: 'rasgado', nenhum: 1 });
    const tx = bilheteTex({ estado: 'inteiro', nenhum: 1 }); tx.repeat.set(1, .38); tx.offset.set(0, 0); tx.needsUpdate = true;
    const peca = new THREE.Mesh(new THREE.PlaneGeometry(.42, .56 * .38), new THREE.MeshBasicMaterial({ map: tx, transparent: true, side: THREE.DoubleSide, alphaTest: .05 })); C.cena.add(peca);
    const luz = brilho(C.cena, [NOTA[0] - .08, NOTA[1] - .2, NOTA[2]], { cor: '#FFE7A8', size: 1.1, n: 24, alt: .8, ps: .5 });
    const g = ator(C, GUIPIJ, ...QUARTO.porta, Math.PI / 2); const [qx, qz] = QUARTO.porta; const vai = caminhar(C, g, [[qx, qz], [EX - .9, EZ - .2]], 469.6, { vel: 1.0, direto: true, olharFim: Math.PI / 2 });
    let trocou = false; const tA = 474.6;
    return (t, u, c) => {
      vai(t); rosto(g, null, t, t > tA - .4 ? 'surpreso' : 'neutro', { look: [0, .1] });
      const k = smooth(472.6, tA, t); const alvo = new THREE.Vector3(NOTA[0] - .003, NOTA[1] - .28 + .56 * .19, NOTA[2]);
      const ini = new THREE.Vector3(EX - 1.8, 2.4, EZ - 1.2); peca.position.lerpVectors(ini, alvo, k); peca.position.y += Math.sin(k * Math.PI) * .4; peca.position.z += Math.sin(k * Math.PI * 2) * .3;
      peca.rotation.set(0, -Math.PI / 2 + (1 - k) * 6, (1 - k) * 2.5); peca.visible = t > 472.4 && t < tA;
      if (t >= tA && !trocou) { b.setTex({ estado: 'inteiro', nenhum: 1 }); trocou = true; } if (t < tA && trocou) { b.setTex({ estado: 'rasgado', nenhum: 1 }); trocou = false; }
      luz(t, smooth(tA - .2, tA, t) * (1 - smooth(tA + .3, tA + 1.5, t)));
      cam(c, [[0, [casa(3.6, 4.6)[0], 1.65, casa(3.6, 4.6)[1]]], [.4, [EX - 1.9, 1.62, EZ - .95]], [1, [EX - 1.45, 1.58, EZ - 1.1]]], [[0, [qx, 1.3, qz]], [.38, [EX - .8, 1.4, EZ]], [.45, [NOTA[0], 1.7, NOTA[2]]], [1, [NOTA[0], 1.5, NOTA[2]]]], u / 9.4); return { focus: 1.8, range: 1.5, blur: 6, bloom: .3 };
    };
  }),
  // BL — ele lê o bilhete inteiro em voz alta
  cena(478.3, 484.3, OQN, (C) => {
    ventiladorQuarto(C); espelhoBilhete(C, { estado: "inteiro", nenhum: 1 }); const g = ator(C, GUIPIJ, EX - .9, EZ - .2, Math.PI / 2);
    return (t, u, c) => { fala(g, 'gui', t, 'surpreso', { shL: [15, 10], shR: [25, 10], elR: 30 }, .6, { look: [0, .2] });
      const h = g.headG.getWorldPosition(new THREE.Vector3()); cam(c, [[0, [EX - .25, 1.6, EZ - 1.15]], [1, [EX - .3, 1.58, EZ - 1.0]]], [[0, [h.x, h.y - .02, h.z]], [.5, [h.x, h.y - .02, h.z]], [.7, [NOTA[0], 1.45, NOTA[2]]], [1, [NOTA[0], 1.42, NOTA[2]]]], u / 6); return { focus: 1.1, range: .8, blur: 8 };
    };
  }),
  // BM — o que ajudou foi alguém que apareceu: ele sorri sentado na cama; mensagem do Dudu
  cena(484.3, 490.5, OQN, (C) => {
    ventiladorQuarto(C); espelhoBilhete(C, { estado: 'inteiro', nenhum: 1 }); const [bx2, bz] = QUARTO.cama;
    const g = ator(C, GUIPIJ, bx2, bz, Math.PI); sentar(g, bx2 + .5, bz - .2, Math.PI / 2, PISO + .5); const cel = celularMsg(); g.hold(cel, 'R'); cel.rotation.set(-1.0, Math.PI, 0);
    const P = pacoca(1.0); C.cena.add(P.g); const [px, pz] = casa(3.2, 3.0); P.g.position.set(px, PISO, pz); P.g.rotation.y = Math.PI / 2;
    return (t, u, c) => { const v = smooth(486.4, 487.0, t);
      g.pose({ ...sentado, shR: [60, 5], elR: 80, shL: [20, 10], elL: 30, headX: 14 }); rosto(g, null, t, v > .5 ? 'feliz' : 'neutro', { smile: v, look: [0, .7] }); P.anima(t, { sentado: true, abana: true, feliz: true, olhar: [.5, .4] });
      const h = cel.getWorldPosition(new THREE.Vector3()); const gh = g.headG.getWorldPosition(new THREE.Vector3());
      const n = new THREE.Vector3(0, 0, 1).applyQuaternion(cel.getWorldQuaternion(new THREE.Quaternion())); const ph = h.clone().addScaledVector(n, .34); ph.y += .03;
      const uu = u / 6.2; if (uu < .52) cam(c, [[0, [gh.x + 2.0, 1.35, gh.z - .5]], [1, [gh.x + 1.7, 1.3, gh.z - .35]]], [[0, [gh.x, gh.y - .35, gh.z]], [1, [gh.x, gh.y - .3, gh.z]]], uu / .52); else cam(c, [ph.x, ph.y, ph.z], [h.x, h.y, h.z], 0);
      return { focus: uu < .52 ? 1.9 : .34, range: .4, blur: 7 };
    };
  }),
  // BN — "agora passa pra frente": a frase aparece no fim do bilhete
  cena(490.5, 499.5, OQN, (C) => {
    ventiladorQuarto(C); const b = espelhoBilhete(C, { estado: 'inteiro', nenhum: 1 }); let pos = false;
    return (t, u, c) => { const tem = t > 496.9; if (tem !== pos) { b.setTex({ estado: 'inteiro', nenhum: 1, passa: tem }); pos = tem; }
      cam(c, [[0, [NOTA[0] - .75, 1.62, NOTA[2] - .25]], [1, [NOTA[0] - .55, 1.4, NOTA[2] - .1]]], [[0, [NOTA[0], 1.62, NOTA[2]]], [1, [NOTA[0], 1.36, NOTA[2]]]], u / 9); return { focus: .65, range: .4, blur: 10, bloom: tem ? .3 : 0 };
    };
  }),
  // BO — logo abaixo, um nome borrado; a câmera se afasta
  cena(499.5, 503.4, OQN, (C) => {
    ventiladorQuarto(C); espelhoBilhete(C, { estado: 'inteiro', nenhum: 1, passa: true });
    return (t, u, c) => { const k = smooth(500.6, 503.2, t);
      cam(c, [[0, [NOTA[0] - .45, 1.3, NOTA[2] - .05]], [1, [EX - 2.2, 1.7, EZ - 1.2]]], [NOTA[0], lerp(1.3, 1.45, k), NOTA[2]], k); return { focus: lerp(.45, 2.4, k), range: .5, blur: 10 };
    };
  }),
  // BP1 — "qual você escolheria?": os ícones girando em volta dele (a pergunta aparece na tela)
  cena(503.4, 511.3, { ...OQ, hora: 8.5 }, (C) => {
    ventiladorQuarto(C); espelhoBilhete(C, { estado: 'inteiro', nenhum: 1, passa: true }); const [cx, cz] = QUARTO.centro;
    const g = ator(C, GUIPIJ, cx + .2, cz + .1, -Math.PI / 2); const orb = orbita(C, g, 503.6);
    return (t, u, c) => { g.pose({ ...pensa(t), headY: Math.sin(t * 1.2) * 10 }); rosto(g, null, t, 'feliz', { smile: .5, look: [Math.sin(t * 1.4) * .7, .2] }); orb(t, .52);
      cam(c, [[0, [cx - 1.4, 1.35, cz + .4]], [1, [cx - 1.7, 1.45, cz + .1]]], [cx + .2, 1.35, cz + .1], u / 7.9); return { focus: 1.7, range: 1.5, blur: 5 };
    };
  }),
  // BP2 — "se inscreve, ativa o sininho, manda pra aquele amigo": Gui e Paçoca de frente, acenando
  cena(511.3, 517.6, { ...OQ, hora: 8.5 }, (C) => {
    ventiladorQuarto(C); const [cx, cz] = QUARTO.centro; const g = ator(C, GUIPIJ, cx + .3, cz, -Math.PI / 2);
    const P = pacoca(1.0); C.cena.add(P.g); P.g.position.set(cx + .1, PISO, cz - .55); P.g.rotation.y = -Math.PI / 2;
    return (t, u, c) => { const ac = Math.sin(t * 7); const aponta = t > 513.9;
      g.pose(aponta ? { ...idle(t), shR: [85, 5], elR: 10, shL: [10, 10] } : { ...idle(t), shR: [160, 25 + ac * 15], elR: 30 + ac * 20, shL: [10, 10] }); rosto(g, null, t, 'rindo', { smile: 1, look: [0, 0] });
      P.anima(t, { sentado: true, abana: true, feliz: true, olhar: [0, 0] });
      cam(c, [[0, [cx - 1.55, 1.35, cz - .25]], [1, [cx - 1.35, 1.3, cz - .2]]], [cx + .2, 1.05, cz - .25], u / 6.3); return { focus: 1.9, range: 1.5, blur: 5 };
    };
  }),
  // BP3 — acordar colado no teto... e descer com cuidado (cai na cama: boing)
  cena(517.6, 521.2, { ...OQ, hora: 7.4 }, (C) => {
    const v = ventiladorQuarto(C); const pas = v.userData.pas; const { k, sup } = guiFlutuando(C); const [bx2, bz] = QUARTO.cama;
    return (t, u, c) => { pas.rotation.y = t * .55; const tq = 520.1; const q = clamp((t - tq) / .45);
      const quica = t > tq + .45 ? Math.abs(Math.sin((t - tq - .45) * 9)) * Math.exp(-(t - tq - .45) * 4) * .25 : 0;
      sup.position.set(bx2, lerp(TETO - .5, PISO + .78, q * q) + quica + (t < tq ? Math.sin(t * 2) * .03 : 0), bz - .1); sup.rotation.y = Math.PI + (t < tq ? Math.sin(t * .8) * .1 : 0);
      k.pose(t < tq ? { shL: [150, 25], shR: [120, 30], elL: 30, hipL: [5, 8], hipR: [-5, 8], knL: 20, knR: 25, headX: -40 } : { shL: [150, 60], shR: [150, 60], hipL: [5, 25], hipR: [5, 25], headX: -30 });
      rosto(k, null, t, t < tq ? 'medo' : t < tq + .5 ? 'surpreso' : 'rindo', { smile: t > tq + .5 ? 1 : 0 });
      const p = sup.position; cam(c, [[0, [bx2 + 1.9, 1.3, bz - 1.3]], [1, [bx2 + 1.7, 1.25, bz - 1.1]]], [p.x, lerp(TETO - .7, p.y + .1, smooth(tq - .2, tq + .5, t)), p.z], u / 3.6); return { focus: 2.2, range: 2, blur: 4 };
    };
  }),
  // BP4 — e guarda uma linguiça pro Paçoca (fim)
  cena(521.2, 525.5, { ...OQ, hora: 7.5 }, (C) => {
    ventiladorQuarto(C); const P = pacoca(1.0); C.cena.add(P.g); const [px, pz] = casa(3.0, 3.3); P.g.position.set(px, PISO, pz); P.g.rotation.y = Math.PI / 2;
    const ln = linguica(); ln.scale.setScalar(2.2); C.cena.add(ln);
    const g = ator(C, GUIPIJ, px + .7, pz + .1, -Math.PI / 2); g.root.visible = true;
    return (t, u, c) => { const da = smooth(521.4, 522.3, t), pega = t > 522.4;
      g.pose({ ...idle(t), shR: [60 - 20 * da, 10], elR: 20, lean: 18 * da, headX: 10 }); rosto(g, null, t, 'feliz', { smile: 1, look: [0, .7] });
      const h = g.hands.R.getWorldPosition(new THREE.Vector3()); if (!pega) { ln.position.copy(h); ln.position.y -= .04; } else { const bp = P.cab.getWorldPosition(new THREE.Vector3()); ln.position.set(bp.x + .14, bp.y - .05, bp.z); ln.rotation.set(0, 0, 0); }
      const pulo = t > 522.1 && t < 522.7 ? Math.sin((t - 522.1) / .6 * Math.PI) * .12 : 0; P.g.position.y = PISO + pulo; P.anima(t, { sentado: !pulo && !pega ? true : pega, abana: true, feliz: true, olhar: pega ? [0, 0] : [.3, -.4] });
      cam(c, [[0, [px + .3, 1.0, pz + 1.4]], [1, [px + .35, .9, pz + 1.2]]], [px + .35, .7, pz], u / 4.3); return { focus: 1.2, range: 1, blur: 7 };
    };
  }),
];
