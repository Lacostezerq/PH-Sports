// TERÇA-FEIRA — ler mentes (93,6 a 167,7 s).
import * as THREE from 'three';
import { mk, rosto, fala, gesto, ator as atorC, sentar } from './lib.js';
import { idle, walk, sentado } from './motor/char3d.js';
import { clamp, smooth, lerp } from './motor/core.js';
import { cena, ator, cam, casa, casaRy, QUARTO, PISO, TETO } from './cena.js';
import { GUIPIJ, GUIRUA, REGINA2, DUDU2, CHEFE, povo } from './elenco.js';
import { balao, balaoAnim, ICONE, mochila, relogioDigital } from './pecas.js';
import { onibus, reuniao } from './sets.js';

const FX2 = { tint: '#F4EEFF' }; // terça: tom lilás
const acima = (k, s, dy = .78) => { const p = k.headG.getWorldPosition(new THREE.Vector3()); s.position.set(p.x, p.y + dy, p.z); s.userData.y0 = p.y + dy; };
const OQ = { foco: casa(1, 0), hora: 8.2, dentro: true, raio: 30, pedestres: 6, fx: FX2 };

export const DIA2 = [
  // O — acorda no chão; tenta voar e nada
  cena(93.6, 97.3, OQ, (C) => {
    const [bx2, bz] = QUARTO.cama; const g = ator(C, GUIPIJ, bx2 + 1.0, bz - .4, casaRy(Math.PI / 2));
    return (t, u, c) => {
      const lev = smooth(94.4, 95.4, t), pulo = t > 96.0 && t < 96.9 ? Math.sin((t - 96.0) / .9 * Math.PI) * .35 : 0;
      g.root.rotation.x = lerp(-Math.PI / 2, 0, lev); g.root.position.y = PISO + lerp(.2, 0, lev) + pulo;
      g.pose(lev < 1 ? { shL: [150, 30], shR: [150, 30], elL: 30, elR: 30 } : pulo > 0 ? { shL: [170, 20], shR: [170, 20], knL: 30, knR: 30, hipL: [20, 0], hipR: [20, 0] } : { ...idle(t), shL: [10, 30], shR: [10, 30] });
      rosto(g, null, t, t < 94.7 ? 'sono' : t < 96 ? 'desconfiado' : t < 97 ? 'surpreso' : 'tedio', { blink: t < 94.6 ? 1 : undefined });
      const [qx, qz] = casa(3.4, 5.2); cam(c, [qx, .6 + u * .4, qz], [bx2 + 1.0, PISO + .5 + lev * .5, bz - .4], u / 3.7); return { focus: 2.2, range: 2, blur: 5 };
    };
  }),
  // P — a mãe entra na cozinha; ele toma café na mesa
  cena(97.3, 101.4, { foco: casa(-1.5, -1), hora: 8.3, dentro: true, raio: 30, fx: FX2 }, (C) => {
    const [gx, gz] = casa(-.75, -1.1); const g = ator(C, GUIRUA, gx, gz, casaRy(-Math.PI / 2)); sentar(g, gx, gz, casaRy(-Math.PI / 2), PISO + .46);
    const r = ator(C, REGINA2, ...casa(1.6, .9), casaRy(-Math.PI / 2)); C.andar(r, [casa(1.6, .9), casa(-3.55, -1.45)], 97.4, { olharFim: casaRy(-Math.PI / 2), vel: 1.15 });
    return (t, u, c) => {
      g.pose({ ...sentado, shR: [55 + Math.sin(t * 1.5) * 8, 10], elR: 110, shL: [40, 10], elL: 80, headX: 4 }); rosto(g, null, t, 'tedio', { look: [.5, -.2] });
      rosto(r, null, t, 'neutro');
      cam(c, [casa(-3.9, .9)[0], 1.65, casa(-3.9, .9)[1]], [casa(-1.2, -1.6)[0], 1.0, casa(-1.2, -1.6)[1]], u / 4.1); return { focus: 2.6, range: 2.5, blur: 4 };
    };
  }),
  // Q — o pensamento da mãe; ele responde; ela vira sem entender
  cena(101.4, 108.8, { foco: casa(-1.5, -1), hora: 8.4, dentro: true, raio: 30, fx: FX2 }, (C) => {
    const [gx, gz] = casa(-.75, -1.1); const g = ator(C, GUIRUA, gx, gz, casaRy(-Math.PI / 2)); sentar(g, gx, gz, casaRy(-Math.PI / 2), PISO + .46);
    const r = ator(C, REGINA2, ...casa(-3.55, -1.45), casaRy(-Math.PI / 2)); const b = balao('Esse menino precisa\ncortar esse cabelo...', { tam: 1.25 }); C.cena.add(b);
    return (t, u, c) => {
      const vira = smooth(106.1, 106.6, t); r.root.rotation.y = casaRy(-Math.PI / 2) + vira * Math.PI;
      if (t < 106.2) { r.pose({ shL: [55 + Math.sin(t * 6) * 10, 15], shR: [55 + Math.sin(t * 6 + 2) * 10, -5], elL: 70, elR: 70, headX: 12 }); rosto(r, null, t, 'neutro', { mouth: { open: 0 } }); }
      else fala(r, 'regina', t, 'desconfiado', { shL: [20, 15], shR: [30, 15], elL: 70, elR: 30 }, 1);
      acima(r, b, .7); balaoAnim(b, t, 101.5, 104.1);
      if (t > 103.95 && t < 106.4) fala(g, 'gui', t, 'tedio', { ...sentado, shR: [50, 10], elR: 100 }, .7, { look: [.7, 0] });
      else { g.pose({ ...sentado, shR: [55, 10], elR: 110, shL: [40, 10], elL: 80 }); rosto(g, null, t, t > 106.4 ? 'surpreso' : 'tedio', { look: [.7, 0] }); }
      cam(c, [[0, [casa(.35, -2.9)[0], 1.6, casa(.35, -2.9)[1]]], [1, [casa(.2, -2.7)[0], 1.55, casa(.2, -2.7)[1]]]], [casa(-2.3, -1.2)[0], 1.2, casa(-2.3, -1.2)[1]], u / 7.4); return { focus: 2.8, range: 3, blur: 4 };
    };
  }),
  // R — a boca dela não se mexeu: close nela de boca fechada, depois nele em choque
  cena(108.8, 113.5, { foco: casa(-1.5, -1), hora: 8.4, dentro: true, raio: 30, fx: FX2 }, (C) => {
    const [gx, gz] = casa(-.75, -1.1); const g = ator(C, GUIRUA, gx, gz, casaRy(-Math.PI / 2)); sentar(g, gx, gz, casaRy(-Math.PI / 2), PISO + .46);
    const r = ator(C, REGINA2, ...casa(-3.55, -1.45), casaRy(Math.PI / 2)); const b = balao('?', { tam: .7, fs: 150 }); C.cena.add(b);
    return (t, u, c) => {
      r.pose({ shL: [10, 30], shR: [70, -10], elR: 120, elL: 60, headZ: 6 }); rosto(r, null, t, 'desconfiado', { mouth: { open: 0 } }); acima(r, b, .55); balaoAnim(b, t, 109.3, 111.4);
      g.pose({ ...sentado, shR: [20, 10], shL: [20, 10], lean: -6 }); rosto(g, null, t, t > 110.4 ? 'surpreso' : 'desconfiado', { look: [.6, 0] });
      const hr = r.headG.getWorldPosition(new THREE.Vector3()), hg = g.headG.getWorldPosition(new THREE.Vector3());
      const k = smooth(110.3, 111.3, t); const alvo = hr.clone().lerp(hg, k); const [cx2, cz2] = casa(-2.0, -2.5);
      cam(c, [cx2, alvo.y + .05, cz2], [alvo.x, alvo.y - .05, alvo.z], u / 4.7); return { focus: 1.6, range: .9, blur: 10 };
    };
  }),
  // S — na rua: todo mundo pensando ao mesmo tempo (balões com desenhos)
  cena(113.5, 126.0, { foco: [-12, 6], hora: 9, raio: 32, fov: 40, fx: FX2 }, (C) => {
    const g = ator(C, GUIRUA, -30, 6.2, Math.PI / 2); mochila(g); C.andar(g, [[-24, 6.4], [-2, 6.4]], 113.6, { vel: .9, direto: true });
    const icones = [ICONE.hamburguer, ICONE.cama, ICONE.conta, ICONE.coracao, ICONE.pizza, ICONE.relogio];
    const gente = []; for (let i = 0; i < 6; i++) { const k = povo(i + 2); C.cena.add(k.root); const s0 = -21 + i * 4.2, z = i % 2 ? 7.4 : 5.8, dir = i % 3 === 0 ? -1 : 1; C.andar(k, [[s0, z], [s0 + dir * 9, z]], 113.5 + i * .3, { vel: .8 + (i % 3) * .1, direto: true }); const b = balao(icones[i], { tam: .95 }); C.cena.add(b); gente.push([k, b, 114.5 + i * 1.3]); }
    return (t, u, c) => {
      const tapa = smooth(122.5, 123.3, t); if (tapa > 0) { g.pose({ ...walk(t, 1.8, .7), shL: [150 * tapa, 40], shR: [150 * tapa, 40], elL: 130 * tapa, elR: 130 * tapa }); }
      rosto(g, null, t, t < 118 ? 'desconfiado' : t < 122 ? 'surpreso' : 'bravo', { look: [Math.sin(t * 1.5) * .8, .3] });
      gente.forEach(([k, b, ta]) => { acima(k, b, .62); balaoAnim(b, t, ta, 125.6); });
      const p = g.root.position; cam(c, [p.x + 5.5, 1.85, 5.3], [p.x, 1.7, p.z + .3], u / 12.5); return { focus: 5.6, range: 4, blur: 4 };
    };
  }),
  // T — ônibus lotado: fome, sono, conta de luz... ele tapa os ouvidos
  mk(126.0, 135.4, { bg: '#E8E4DC', fov: 50 }, (c) => {
    const O = onibus(c); const icones = [ICONE.hamburguer, ICONE.cama, ICONE.conta, ICONE.pizza, ICONE.coracao, ICONE.relogio, ICONE.hamburguer, ICONE.conta];
    const g = atorC(c, GUIRUA, .1, .6, Math.PI); mochila(g);
    const lugares = [[-.75, -4.2], [.75, -4.2], [-.75, -2.6], [.75, -2.6], [-.75, -1.0], [.75, -1.0], [-.75, 2.2], [.75, 2.2]];
    const gente = lugares.map(([x, z], i) => { const k = povo(i + 5); c.add(k.root); sentar(k, x, z - .05, Math.PI, .54); const b = balao(icones[i], { tam: .58 }); c.add(b); return [k, b, 128.6 + (i < 3 ? [3.8, 4.6, 5.9][i] : i * .55)]; });
    const empe = [[-.15, -.6], [.2, 1.4], [-.2, 3.4]].map(([x, z], i) => { const k = povo(i + 13); c.add(k.root); k.place(x, z, 0, i % 2 ? 0 : Math.PI); const b = balao(icones[(i + 3) % 8], { tam: .58 }); c.add(b); return [k, b, 129.5 + i * .8]; });
    return (t, u, cm) => {
      O.anda(t);
      gente.forEach(([k, b, ta], i) => { k.pose({ ...sentado, headX: Math.sin(t * .8 + i) * 5, shR: [30, 10], elR: 60 }); rosto(k, null, t, ['tedio', 'sono', 'triste', 'neutro'][i % 4], { look: [Math.sin(t * .4 + i) * .5, 0] }); acima(k, b, .55); balaoAnim(b, t, ta, 135.2); });
      empe.forEach(([k, b, ta], i) => { k.pose({ ...idle(t, i), shR: [170, 10], elR: 20 }); rosto(k, null, t, 'tedio'); acima(k, b, .55); balaoAnim(b, t, ta, 135.2); });
      const tapa = smooth(130.0, 130.7, t); g.pose({ ...idle(t), shL: [150 * tapa, 40], shR: [150 * tapa, 40], elL: 135 * tapa, elR: 135 * tapa, headX: Math.sin(t * 3) * 4 * tapa });
      rosto(g, null, t, tapa > .5 ? 'bravo' : 'desconfiado', { look: [Math.sin(t * 2.2) * .9, .2], blink: tapa > .5 && Math.sin(t * 1.3) > .6 ? 1 : undefined });
      cam(cm, [[0, [.05, 1.95, 5.2]], [1, [-.05, 1.9, 4.6]]], [[0, [0, 1.45, -1.5]], [1, [.1, 1.5, -.4]]], u); return { focus: 4.2, range: 3, blur: 4 };
    };
  }),
  // U — reunião: o chefe aponta o gráfico e pensa "não li o relatório"; ele segura o riso
  mk(135.4, 140.4, { bg: '#EEF0E8', fov: 40 }, (c) => {
    const R = reuniao(c); const ch = atorC(c, CHEFE, -1.2, -2.6, 0); const g = atorC(c, GUIRUA, 0, 0, 0); const [gx, gz, gr] = R.lugares[3]; sentar(g, gx, gz, gr, .5);
    const col = [R.lugares[0], R.lugares[5], R.lugares[6]].map(([x, z, ry], i) => { const k = povo(i + 20); c.add(k.root); sentar(k, x, z, ry, .5); return k; });
    const b = balao('Tomara que ninguém perceba\nque eu não li o relatório', { tam: 2.1, tipo: 'pensa' }); c.add(b);
    return (t, u, cm) => {
      ch.pose({ ...idle(t), shR: [110 + Math.sin(t * 2) * 10, -30], elR: 20, shL: [20, 15], elL: 40, twist: -15 }); rosto(ch, null, t, 'feliz', { mouth: { open: 0, smile: .6 }, look: [-.6, 0] }); acima(ch, b, .8); balaoAnim(b, t, 137.4, 140.2);
      const ri = smooth(138.2, 138.8, t); g.pose({ ...sentado, shR: [60 * ri, 10], elR: 130 * ri, lean: Math.sin(t * 14) * 3 * ri }); rosto(g, null, t, ri > .5 ? 'rindo' : 'neutro', { mouth: { open: 0, smile: 1 }, blink: ri > .5 ? 1 : undefined });
      col.forEach((k, i) => { k.pose({ ...sentado, headX: Math.sin(t + i) * 4 }); rosto(k, null, t, ['tedio', 'sono', 'neutro'][i]); });
      cam(cm, [[0, [3.9, 1.75, .9]], [1, [3.6, 1.7, .5]]], [[0, [-.9, 1.6, -1.4]], [1, [-.8, 1.65, -1.6]]], u); return { focus: 4.6, range: 3.5, blur: 3 };
    };
  }),
  // V — fim de tarde na praça: o Dudu conta piada
  cena(140.4, 149.7, { foco: [-3, -14], hora: 17.3, raio: 34, fx: FX2 }, (C) => {
    const d = ator(C, DUDU2, -3, -12, Math.PI / 2); const g = ator(C, GUIRUA, -9, -13.2, Math.PI / 2); mochila(g); C.andar(g, [[-9, -13.2], [-1.9, -13.2]], 140.5, { vel: 1.1, olharFim: -Math.PI / 2 - .25, direto: true });
    return (t, u, c) => {
      const lev = smooth(143.6, 144.6, t);
      if (lev < 1) { sentar(d, -3.05, -12, Math.PI / 2, .65); d.root.position.y = lerp(.15 + .65 - .28, .15, lev); d.pose(lev > 0 ? idle(t) : { ...sentado, shR: [20, 30], elR: 30 }); rosto(d, null, t, 'feliz', { look: [-.6, 0] }); }
      else { d.place(-2.75, -12.3, .15, Math.PI / 2 + .6); fala(d, 'dudu', t, t < 147.8 ? 'feliz' : 'rindo', { shR: [60 + Math.sin(t * 5) * 30, -20], elR: 70, shL: [40, 20], elL: 50 }, 1.4, { smile: 1 }); }
      if (t > 147.9) rosto(g, null, t, 'rindo', { smile: 1 }); else rosto(g, null, t, 'feliz');
      cam(c, [[0, [2.2, 1.6, -9.2]], [1, [1.4, 1.55, -9.8]]], [-3.2, 1.25, -12.7], u / 9.3); return { focus: 5.2, range: 3, blur: 5 };
    };
  }),
  // W — ele rindo... e o pensamento cinza aparece: "Eu não posso contar pro Gui"
  cena(149.7, 157.9, { foco: [-3, -14], hora: 17.4, raio: 34, fx: FX2 }, (C) => {
    const d = ator(C, DUDU2, -2.75, -12.3, Math.PI / 2 + .6); const g = ator(C, GUIRUA, -1.9, -13.4, -Math.PI / 2 - .25); mochila(g); const b = balao('Eu não posso\ncontar pro Gui.', { tam: 1.1, tipo: 'cinza' }); C.cena.add(b);
    return (t, u, c) => {
      const triste = smooth(155.3, 155.9, t);
      d.pose({ ...idle(t), shR: [40 * (1 - triste) + Math.sin(t * 5) * 15 * (1 - triste), -10], elR: 60, shL: [20, 15], lean: Math.sin(t * 9) * 3 * (1 - triste) }); rosto(d, null, t, triste > .5 ? 'triste' : 'rindo', { smile: 1 - triste, look: triste > .5 ? [-.3, .6] : [.4, 0] });
      acima(d, b, .7); balaoAnim(b, t, 155.6, 157.8, { saida: .3 });
      g.pose(idle(t)); rosto(g, null, t, t < 155.5 ? 'rindo' : 'desconfiado', { smile: t < 155.5 ? 1 : 0, look: [-.4, .2] });
      const hd = d.headG.getWorldPosition(new THREE.Vector3()); cam(c, [[0, [hd.x + 2.4, 1.7, hd.z - .9]], [1, [hd.x + 1.45, 1.75, hd.z - .35]]], [hd.x, hd.y + .25 * triste, hd.z], u / 8.2); return { focus: 1.6, range: 1.5, blur: 8 };
    };
  }),
  // X — "Contar o quê?" / "Contar o quê o quê? Eu nem falei nada, cara."
  cena(157.9, 161.5, { foco: [-3, -14], hora: 17.45, raio: 34, fx: FX2 }, (C) => {
    const d = ator(C, DUDU2, -2.75, -12.3, Math.PI / 2 + .6); const g = ator(C, GUIRUA, -1.9, -13.4, -Math.PI / 2 - .25); mochila(g);
    return (t, u, c) => {
      fala(g, 'gui', t, 'desconfiado', {}, .8, { look: [-.5, 0] });
      fala(d, 'dudu', t, 'desconfiado', { shL: [40, 50], shR: [40, -50], elL: 60, elR: 60 }, 1.2, { look: [.5, 0] });
      cam(c, [[0, [-.1, 1.55, -11.0]], [1, [-.35, 1.55, -11.2]]], [-2.35, 1.35, -12.85], u / 3.6); return { focus: 2.9, range: 2.5, blur: 6 };
    };
  }),
  // Y — meia-noite: o relógio vira 00:00 e os pensamentos somem como fumaça
  cena(161.5, 167.7, { foco: casa(2.5, 3), hora: 23.95, dentro: true, raio: 28, pedestres: 0, fx: { tint: '#DCE2FF' } }, (C) => {
    const [bx2, bz] = QUARTO.cama; const g = ator(C, GUIPIJ, bx2, bz, 0); g.root.rotation.set(Math.PI / 2, Math.PI, 0); g.root.position.set(bx2, PISO + .62, bz - .78); g.sombra.visible = false; // deitado de barriga para cima, cabeça no travesseiro
    const rel = relogioDigital(); const [cx2, cz2] = casa(3.3, 1.78); rel.position.set(cx2, PISO + .58, cz2 + .05); rel.rotation.y = Math.PI; C.cena.add(rel);
    const icones = [ICONE.hamburguer, ICONE.cama, ICONE.conta, ICONE.coracao, ICONE.relogio, ICONE.pizza];
    const bs = icones.map((ic, i) => { const b = balao(ic, { tam: .42 }); C.cena.add(b); b.position.set(bx2 - .7 + (i % 3) * .6, PISO + 1.35 + (i % 2) * .35, bz - .6 + Math.floor(i / 3) * .9); return b; });
    return (t, u, c) => {
      rel.texto(t < 164.55 ? '23:59' : '00:00');
      g.pose({ shL: [170, 20], shR: [170, 20], elL: 100, elR: 100 }); rosto(g, null, t, t < 164.6 ? 'desconfiado' : 'triste', { look: [Math.sin(t * .9) * .7, .5] });
      bs.forEach((b, i) => balaoAnim(b, t, 161.4, 164.6 + i * .12, { saida: .9 }));
      cam(c, [[0, [casa(2.4, 4.6)[0], 1.9, casa(2.4, 4.6)[1]]], [1, [casa(2.9, 4.0)[0], 1.75, casa(2.9, 4.0)[1]]]], [bx2, PISO + .75, bz + .3], u / 6.2); return { focus: 2.2, range: 2, blur: 6 };
    };
  }),
];
