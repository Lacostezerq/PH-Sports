// ATO 1B — dia 0 (42 a 108 s): o moço do gás, o botijão pesado na escada, Dona Cida subindo com ele no quadril,
// a cozinha ("Pelo menos o pão chegou inteiro!") e o quarto à noite (o contador pisca 50 -> 100).
import * as THREE from 'three';
import { mk, cam, camT, ator, rosto, icone, pw } from './base.js';
import { GUI, CIDA, GAS, PORTEIRO } from './gente.js';
import { escada, bot, botNaMao, paoNaMao, subir, FH, XA, XB, ZA0, ZLAND } from './comum.js';
import { trajetoEscada, poseSubir, cozinha, quarto } from './lugares.js';
import { sacolaPao, sacolaFeira, isqueiro, abajur } from './objs.js';
import { G, soma, vivo, treme, ofego, andar, parado, kf, kv, rir, mix } from './mov.js';
import { clamp, smooth, easeOut, lerp } from './motor/core.js';
import { registra } from './vida.js';

const QUENTE = { tint: '#FFF4E4' };
// braços segurando o botijão na frente do corpo, com as duas mãos na alça
const BRACO_CARGA = { shL: [24, -6], shR: [24, -6], elL: 52, elR: 52 };
// encostado de costas na parede, sem fôlego
const ENCOSTA = { lean: -6, bob: -.06, knL: 22, knR: 18, hipL: [14, 6], hipR: [10, 6], shL: [-8, 14], shR: [-8, 14], elL: 14, elR: 14, headX: -14, headZ: 6 };
const comCarga = (p, t, amp = 1) => soma({ ...p, ...BRACO_CARGA, lean: (p.lean || 0) - 8 }, treme(t, .7 * amp));
/** Botijão carregado na frente (filho do corpo). */
const botFrente = (k) => { const b = bot(); b.position.set(0, .1, .27); k.root.add(b); return b; };
/** Gota de suor que escorre da testa (ícone). */
function suor(c, k, o = {}) { const g = icone('gota', o.tam || .12); c.add(g); return (t) => { const ph = ((t * (o.v || .8)) % 1); const p = pw(k.headG, .17 * (o.lado || 1), .42 - ph * .25, .16); g.position.set(...p); g.material.opacity = Math.sin(ph * Math.PI); g.visible = (o.on ?? true); }; }

export const ATO1B = [
  // P1 — portaria: o moço do gás entra, deixa o botijão no chão e vai embora; Guilherme espera perto da escada
  mk(42, 45.6, { bg: '#2A2420', fov: 38 }, (c) => { const P = escada(c); const gas = ator(c, GAS, 1.6, 7.0, Math.PI); const gui = ator(c, GUI, -.25, 3.55, .35); const por = ator(c, PORTEIRO, 2.75, 6.25, -Math.PI / 2 - .5);
    const bm = botNaMao(gas, 'R', .5); const bc = bot(); bc.position.set(.85, 0, 4.25); c.add(bc);
    return (t, u, cm) => { const a = t - 42;
      // entra (0–1.4), abaixa e põe no chão (1.4–2.2), levanta, acena com a cabeça, sai (2.6–3.6)
      const ida = clamp(a / 1.4), volta = clamp((a - 2.5) / 1.1); const x = lerp(1.6, 1.0, ida) + lerp(0, .5, volta), z = lerp(7.0, 4.75, ida) + lerp(0, 2.3, volta);
      gas.place(x, z, 0, volta > 0 ? .15 : Math.PI + .25);
      const baixa = kv(a, [[1.35, 0], [1.75, 1], [2.15, 1], [2.5, 0]]);
      gas.pose(a < 1.4 ? andar(t, { f: 1.9 }) : volta > 0 ? andar(t, { f: 1.9 }) : soma(mix(parado(t, 1), { lean: 45, bob: -.12, hipL: [40, 6], hipR: [40, 6], knL: 50, knR: 50, shR: [55, 8], elR: 5, headX: -15 }, baixa)));
      bm.visible = a < 1.95; bc.visible = a >= 1.95; bm.prumo(t); rosto(gas, null, t, a > 2.2 ? 'feliz' : 'neutro');
      gui.pose(soma(G.maosBolso, vivo(t, 2, .8))); rosto(gui, null, t, 'neutro', { look: [Math.sin(a) * .3, 0] });
      por.pose(soma(parado(t, 4), { shR: [40, 10], elR: 90, shL: [35, 10], elL: 90, headX: 10 })); rosto(por, null, t, 'tedio');
      P.portaRua.rotation.y = -1.2 * (smooth(0, .4, a) * (1 - smooth(1.0, 1.4, a)) + smooth(3.0, 3.3, a));
      cam(cm, [[0, [-.85, 1.55, 6.7]], [1, [-.7, 1.5, 6.4]]], [[0, [.8, .85, 4.3]], [1, [.6, .8, 4.1]]], u / 3.6); return QUENTE; }; }),
  // P2 — ele se abaixa, segura a alça com as duas mãos, faz força (cara vermelha) e levanta tremendo
  mk(45.6, 51, { bg: '#2A2420', fov: 36 }, (c) => { const P = escada(c); const gui = ator(c, GUI, -.25, 3.55, .35); const por = ator(c, PORTEIRO, 2.75, 6.25, -Math.PI / 2 - .3);
    const b = bot(); c.add(b); const sw = suor(c, gui, { v: .9 });
    return (t, u, cm) => { const a = t - 45.6; const anda = clamp(a / 1.1); gui.place(lerp(-.25, .85, anda), lerp(3.55, 3.85, anda), 0, lerp(.35, 0, anda));
      const agacha = { lean: 34, bob: -.2, hipL: [68, 10], hipR: [68, 10], knL: 96, knR: 96, shL: [56, 4], shR: [56, 4], elL: 8, elR: 8, headX: -12 };
      const P2 = kf(a, [[0, andar(t, { chinelo: true })], [1.1, parado(t, 2)], [1.6, agacha], [2.0, soma(agacha, { headX: -24 })], [3.4, soma(agacha, { lean: 28, bob: -.17, headX: -30 })], [4.6, soma({ lean: -6, shL: [24, -6], shR: [24, -6], elL: 52, elR: 52, knL: 14, knR: 14, bob: -.03, headX: 0 })]]);
      gui.pose(a < 1.1 ? andar(t, { chinelo: true }) : soma(P2, treme(t, a > 1.9 ? 1.3 : 0)));
      const sobe = smooth(3.4, 4.6, a); b.position.set(.85, .1 * sobe, 4.25 - .0 * sobe); if (a > 3.4) { const p = gui.root.localToWorld(new THREE.Vector3(0, .1 * sobe, .27)); b.position.copy(p).lerp(new THREE.Vector3(.85, 0, 4.25), 1 - sobe); }
      b.rotation.z = Math.sin(t * 40) * .02 * (a > 2);
      rosto(gui, null, t, a > 1.9 ? 'vergonha' : 'neutro', { look: [0, a > 1.9 ? .3 : 0], mouth: a > 1.9 && a < 4.2 ? { open: .15, smile: -.6 } : undefined }); sw(t);
      por.pose(soma(parado(t, 4), { shR: [40, 10], elR: 90, shL: [35, 10], elL: 90, headX: 4 })); rosto(por, null, t, 'desconfiado', { look: [-.6, 0] });
      cam(cm, [[0, [2.3, 1.25, 6.0]], [1, [2.1, 1.1, 5.7]]], [[0, [.5, .75, 3.9]], [1, [.75, .65, 4.0]]], u / 5.4); return QUENTE; }; }),
  // P3 — câmera de baixo, na escada do térreo: primeiro andar, ok
  mk(51, 55, { bg: '#2A2420', fov: 50 }, (c) => { const P = escada(c); const gui = ator(c, GUI, XA, 2.3, Math.PI); const b = botFrente(gui);
    const path = [[XA, 0, 2.5], ...trajetoEscada(0, 1, { portaria: false })];
    return (t, u, cm) => { const e = subir(gui, path, t, 50.4, .5, { f: 1.35, pose: (tt, e, p) => comCarga(p, tt, .5) }); rosto(gui, null, t, 'preocupado', { look: [0, -.2] });
      cam(cm, [[0, [1.05, 1.15, .3]], [1, [1.05, 1.3, .1]]], [[0, [-.62, 1.05, 1.5]], [1, [-.62, 1.65, .5]]], u / 4); return QUENTE; }; }),
  // P4 — segundo andar: o passo fica pesado; ele para, apoia o botijão no degrau e encosta a testa na parede
  mk(55, 58, { bg: '#2A2420', fov: 50 }, (c) => { const P = escada(c); const gui = ator(c, GUI, XA, ZA0, Math.PI, FH); const b = bot(); c.add(b); const sw = suor(c, gui, { v: 1.1 });
    const path = [[XA, FH, ZA0 + .3], [XA, FH, ZA0 + .05], [XA, FH + .7, ZA0 - 1.08]];
    return (t, u, cm) => { const a = t - 55; const e = subir(gui, path, t, 54.6, .32, { f: .9, carga: 1, pose: (tt, e, p) => comCarga(p, tt, 1.2) });
      const para = smooth(1.55, 2.1, a); // apoia o botijão no degrau e vira para a parede
      const pw0 = gui.root.localToWorld(new THREE.Vector3(0, .1, .27)); const deg = new THREE.Vector3(XA - .05, FH + .9, ZA0 - 1.5);
      b.position.copy(pw0).lerp(deg, para); b.rotation.set(0, 0, 0);
      if (a > 1.55) { gui.root.rotation.y = lerp(Math.PI, 2 * Math.PI - .86, smooth(1.7, 2.4, a)); gui.root.position.x = lerp(XA, -.86, smooth(1.8, 2.5, a)); gui.pose(soma(mix(comCarga(poseSubir(t, .9), t), G.testaParede, smooth(1.6, 2.5, a)), ofego(t, smooth(2, 2.6, a)))); }
      rosto(gui, null, t, a > 2.2 ? 'sono' : 'vergonha', { mouth: { open: .25 + .1 * Math.sin(t * 9), smile: -.4 } }); sw(t);
      cam(cm, [[0, [1.05, FH + 1.3, 1.1]], [1, [1.05, FH + 1.35, .95]]], [[0, [-.62, FH + 1.25, .8]], [1, [-.85, FH + 1.4, .45]]], u / 3); return QUENTE; }; }),
  // P5 — "Só um minutinho..." testa na parede, ofegante, suado
  mk(58, 59.6, { bg: '#2A2420', fov: 34 }, (c) => { const P = escada(c); const gui = ator(c, GUI, -.95, ZA0 - 1.08, Math.PI / 2, FH + .7); const b = bot(); b.position.set(XA - .05, FH + .9, ZA0 - 1.5); c.add(b); const sw = suor(c, gui, { v: 1.2 }); const sw2 = suor(c, gui, { v: .9, lado: -1 });
    return (t, u, cm) => { gui.pose(soma(ENCOSTA, ofego(t, 1.2))); rosto(gui, 'gui', t, 'sono', { look: [.5, .2] }); sw(t); sw2(t + .4);
      cam(cm, [[0, [.25, FH + 1.5, .75]], [1, [.15, FH + 1.48, .7]]], [[0, [-.92, FH + 1.6, .42]], [1, [-.92, FH + 1.6, .42]]], u / 1.6); return { ...QUENTE, focus: .9, range: .5, blur: 6 }; }; }),
  // P6 — passos atrás: entra Dona Cida de avental, chinelo e sacola de feira, subindo ligeira
  mk(59.6, 63, { bg: '#2A2420', fov: 50 }, (c) => { const P = escada(c); const gui = ator(c, GUI, -.95, ZA0 - 1.08, Math.PI / 2, FH + .7); const b = bot(); b.position.set(XA - .05, FH + .9, ZA0 - 1.5); c.add(b);
    const ci = ator(c, CIDA, XB, -.2, 0, FH - .7); const sf = sacolaFeira(); sf.position.set(0, -.2, 0); ci.hands.R.add(sf); const sp = sacolaPao(); sp.scale.setScalar(.8); sp.position.set(.06, -.18, .04); ci.hands.R.add(sp);
    const path = [[XB, FH - 1.4 + .2, ZLAND + .3], [XB, FH, ZA0 + .05], [XB - .1, FH, ZA0 + .6], [XA + .1, FH, ZA0 + .6], [XA, FH, ZA0 + .05], [XA, FH + .5, ZA0 - .75]];
    return (t, u, cm) => { const e = subir(ci, path, t, 59.6, .9, { f: 2.0 }); rosto(ci, null, t, 'neutro');
      const vira = smooth(60.6, 61.3, t); gui.pose(soma(ENCOSTA, ofego(t, 1), { headY: -40 * vira, headX: 4 * vira })); rosto(gui, null, t, vira > .5 ? 'surpreso' : 'sono', { look: [.6 * vira, .4] });
      cam(cm, [[0, [-.1, FH + 1.95, 2.75]], [1, [-.15, FH + 1.9, 2.65]]], [[0, [-.75, FH + 1.0, .55]], [1, [-.7, FH + 1.0, .6]]], u / 3.4); return QUENTE; }; }),
  // P7 — ela pega o botijão, apoia no quadril e sobe; entrega a sacola de pão pra ele sem olhar
  mk(63, 66.4, { bg: '#2A2420', fov: 56, perto: true }, (c) => { const P = escada(c); const gui = ator(c, GUI, -.95, ZA0 - 1.08, Math.PI / 2, FH + .7); const b = bot(); c.add(b);
    const ci = ator(c, CIDA, XA, ZA0 - .75, Math.PI, FH + .5); const sf = sacolaFeira(); sf.position.set(0, -.2, 0); ci.hands.R.add(sf); const sp = sacolaPao(); sp.scale.setScalar(.8); c.add(sp); const spg = paoNaMao(gui, 'R', .4);
    const path = [[XA, FH + .5, ZA0 - .75], [XA, FH + .5, ZA0 - .76], [XA, FH + 1.4, ZLAND - .05], [XA + .15, FH + 1.4, ZLAND - .6], [XB - .15, FH + 1.4, ZLAND - .6]];
    return (t, u, cm) => { const a = t - 63; const sobe = a > 1.9;
      const e = subir(ci, path, t, 64.9, .8, { f: 2.0, pose: (tt, e, p) => { if (!sobe) return null; return soma(p, { shL: [-6, 30], elL: 100, tilt: -5 }); } });
      if (!sobe) { ci.place(XA, ZA0 - .75 + .05, FH + .5, Math.PI - .5 * smooth(0, .4, a)); const pega = kv(a, [[.1, 0], [.6, 1], [1.2, 1], [1.7, 0]]); ci.pose(soma(mix(parado(t, 3), { lean: 50, bob: -.1, hipL: [40, 8], hipR: [40, 8], knL: 40, knR: 40, shL: [70, 10], elL: 10, headX: -10 }, pega), a > 1.2 ? { shL: [-6, 30], elL: 100, tilt: -5 } : {})); }
      // botijão: no degrau -> na mão dela -> no quadril
      const noQ = a > 1.15; const hp = new THREE.Vector3(); if (noQ) { ci.root.updateMatrixWorld(true); ci.root.localToWorld(hp.set(.24, .22, .02)); b.position.copy(hp); b.rotation.set(0, ci.root.rotation.y, -.35); } else { b.position.set(XA - .05, FH + .9, ZA0 - 1.5); b.rotation.set(0, 0, 0); if (a > .6) { const k = smooth(.6, 1.15, a); ci.root.updateMatrixWorld(true); ci.root.localToWorld(hp.set(.24, .22, .02)); b.position.lerp(hp, k); } }
      // a sacola de pão: da mão dela (2.0–2.4) para a mão dele
      const passa = clamp((a - 2.1) / .4); sp.visible = passa < 1; spg.visible = passa >= 1; if (passa < 1) { ci.hands.R.updateMatrixWorld(true); const h1 = ci.hands.R.localToWorld(new THREE.Vector3(.05, -.15, .05)); gui.hands.R.updateMatrixWorld(true); const h2 = gui.hands.R.localToWorld(new THREE.Vector3(0, -.26, 0)); sp.position.copy(h1.lerp(h2, easeOut(passa))); }
      gui.place(-.95, ZA0 - 1.08 + .1, FH + .7, lerp(Math.PI / 2, Math.PI * .1, smooth(.2, .9, a)));
      gui.pose(soma(mix(soma(ENCOSTA, ofego(t, 1)), parado(t, 2), smooth(.2, 1, a)), { shR: [kv(a, [[1.8, 0], [2.2, 40], [3, 15]]), 8], elR: kv(a, [[1.8, 12], [2.2, 40], [3, 25]]) }));
      spg.prumo(t); rosto(gui, null, t, 'surpreso', { look: [Math.sin(a * 2) * .3, -.3] }); rosto(ci, null, t, a > 2.5 ? 'determinado' : 'neutro');
      cam(cm, [[0, [.25, FH + 2.35, 2.0]], [1, [.2, FH + 2.3, 1.9]]], [[0, [-.8, FH + .9, .55]], [1, [-.75, FH + 1.0, .45]]], u / 3.4); return QUENTE; }; }),
  // P8 — de cima: ela sobe ligeira com o botijão no quadril, ele atrás segurando só o pão
  mk(66.4, 70.4, { bg: '#2A2420', fov: 52 }, (c) => { const P = escada(c); const gui = ator(c, GUI, XA, ZA0, Math.PI, FH); const ci = ator(c, CIDA, XA, ZA0, Math.PI, FH);
    const b = bot(); ci.root.add(b); b.position.set(.24 / .84, .22 / .84, .02); b.rotation.z = -.35; b.scale.setScalar(.65 / .84); const sf = sacolaFeira(); sf.position.set(0, -.2, 0); ci.hands.R.add(sf); const spg = paoNaMao(gui, 'R', .6);
    const pc = [[XA, FH + .9, ZA0 - 1.4], [XA, FH + 1.4, ZLAND - .05], [XA + .15, FH + 1.4, ZLAND - .6], [XB - .15, FH + 1.4, ZLAND - .6], [XB, FH + 1.4, ZLAND - .05], [XB, 2 * FH, ZA0]]; const pg = [[XA, FH + .7, ZA0 - 1.08], [XA, FH + 1.4, ZLAND - .05], [XA + .15, FH + 1.4, ZLAND - .6], [XB - .15, FH + 1.4, ZLAND - .6]];
    return (t, u, cm) => { subir(ci, pc, t, 66.4, .85, { f: 2.1, pose: (tt, e, p) => soma(p, { shL: [-6, 30], elL: 100, tilt: -5 }) }); rosto(ci, null, t, 'determinado');
      subir(gui, pg, t, 66.9, .42, { f: 1.1, pose: (tt, e, p) => soma(p, ofego(tt, .5)) }); spg.prumo(t); rosto(gui, null, t, 'sono');
      const gp = gui.root.position; cam(cm, [[0, [-.1, FH + 1.95, 2.75]], [1, [0, FH + 2.05, 2.7]]], [[0, [gp.x, gp.y + .9, gp.z]], [1, [gp.x, gp.y + .9, gp.z]]], u / 4); return QUENTE; }; }),
  // P9 — terceiro lance: ela passa pela câmera com força; ele lá atrás, mão no corrimão, sem fôlego (saco de cimento na tela)
  mk(70.4, 76.2, { bg: '#2A2420', fov: 40 }, (c) => { const P = escada(c); const gui = ator(c, GUI, XB, ZLAND, 0, 2 * FH + 1.4); const ci = ator(c, CIDA, XB, ZLAND, 0, 2 * FH + 1.4);
    const b = bot(); ci.root.add(b); b.position.set(.24 / .84, .22 / .84, .02); b.rotation.z = -.35; b.scale.setScalar(.65 / .84); const sf = sacolaFeira(); sf.position.set(0, -.2, 0); ci.hands.R.add(sf); const spg = paoNaMao(gui, 'R', .6); const sw = suor(c, gui, { v: 1 });
    const pc = [[XB, 2 * FH + 1.4, ZLAND - .05], [XB, 3 * FH, ZA0 + .05], [XB - .1, 3 * FH, ZA0 + .6], [XA + .1, 3 * FH, ZA0 + .6], [XA, 3 * FH, ZA0 + .05], [XA, 3 * FH + 1.4, ZLAND - .05]];
    const pg = [[XA + .15, 2 * FH + 1.4, ZLAND - .6], [XB - .15, 2 * FH + 1.4, ZLAND - .6], [XB, 2 * FH + 1.4, ZLAND - .05], [XB, 3 * FH, ZA0 + .05], [XB - .1, 3 * FH, ZA0 + .6]];
    return (t, u, cm) => { subir(ci, pc, t, 70.4, .9, { f: 2.2, pose: (tt, e, p) => soma(p, { shL: [-6, 30], elL: 100, tilt: -5 }) }); rosto(ci, null, t, 'feliz');
      const e = subir(gui, pg, t, 72.4, .33, { f: .95, pose: (tt, e, p) => soma(p, ofego(tt, .9), { shL: [40, 30], elL: 30 }) }); spg.prumo(t); rosto(gui, null, t, 'sono', { mouth: { open: .3 + .1 * Math.sin(t * 8) } }); sw(t);
      const gp = gui.root.position; const ft = smooth(71.6, 73, t); cam(cm, [[0, [XB + .25, 3 * FH + 1.95, ZA0 + 1.25]], [1, [XB + .2, 3 * FH + 1.9, ZA0 + 1.2]]], [[0, [lerp(XB, gp.x, ft), lerp(2 * FH + 1.6, gp.y + .9, ft), lerp(-.4, gp.z, ft)]], [1, [lerp(XB, gp.x, ft), lerp(2 * FH + 1.6, gp.y + .9, ft), lerp(-.4, gp.z, ft)]]], u / 5.8); return QUENTE; }; }),
  // P10 — quarto andar: ela abre a porta do 41 e entra; ele chega se arrastando
  mk(76.2, 80, { bg: '#2A2420', fov: 50 }, (c) => { const P = escada(c); const Y = 4 * FH; const gui = ator(c, GUI, XB, ZLAND, 0, 3 * FH + 1.4); const ci = ator(c, CIDA, -.3, 2.3, Math.PI, Y);
    const b = bot(); ci.root.add(b); b.position.set(.24 / .84, .22 / .84, .02); b.rotation.z = -.35; b.scale.setScalar(.65 / .84); const sf = sacolaFeira(); sf.position.set(0, -.2, 0); ci.hands.R.add(sf); const spg = paoNaMao(gui, 'R', .6); const sw = suor(c, gui, { v: 1 });
    const pg = [[XB, 3 * FH + 1.4, ZLAND + .3], [XB, Y, ZA0 + .05], [XB - .2, Y, ZA0 + .5], [-.4, Y, 2.3]];
    return (t, u, cm) => { const a = t - 76.2; const porta = P.portas[3]; porta.rotation.y = -1.4 * smooth(.3, 1.0, a);
      const ent = clamp((a - 1.0) / 1.2); ci.place(lerp(-.45, -.6, ent), lerp(2.35, 3.4, ent), Y, Math.PI * (1 - ent) + 0); ci.root.rotation.y = ent > 0 ? 0 : Math.PI; ci.root.visible = ent < .95;
      ci.pose(a < .9 ? soma(parado(t, 3), { shR: [60, 6], elR: 40, shL: [-6, 30], elL: 100, tilt: -5 }) : soma(andar(t, { f: 2 }), { shL: [-6, 30], elL: 100, tilt: -5 })); rosto(ci, null, t, 'neutro');
      subir(gui, pg, t, 76.2, .38, { f: 1.0, pose: (tt, e, p) => soma(p, ofego(tt, 1)) }); spg.prumo(t); rosto(gui, null, t, 'sono', { mouth: { open: .3 + .12 * Math.sin(t * 8) } }); sw(t);
      cam(cm, [[0, [.15, Y + 2.0, -.7]], [1, [.15, Y + 1.95, -.6]]], [[0, [-.4, Y + .8, 2.5]], [1, [0, Y + .6, 1.6]]], u / 3.8); return QUENTE; }; }),
  // C1 — cozinha: ela conecta o botijão e acende o fogo de primeira. Fwoosh.
  mk(80, 84, { bg: '#3A3028', fov: 38 }, (c) => { const K = cozinha(c, { hora: 'tarde' }); const ci = ator(c, CIDA, -1.05, -.55, Math.PI, 0); const gui = ator(c, GUI, -1.25, .9, Math.PI / 2 + .3); const spg = paoNaMao(gui, 'R', .4);
    const isq = isqueiro(); isq.position.set(0, -.08, .03); ci.hands.R.add(isq); const fogo = chamaAzul(c, -1.19, .91, -1.12);
    return (t, u, cm) => { const a = t - 80;
      ci.place(-1.2 + .15 * smooth(1.6, 2.2, a), -.6, 0, kv(a, [[0, Math.PI * .85], [1.6, Math.PI * .85], [2.1, Math.PI]]));
      const P1 = kf(a, [[0, soma(G.ajoelhado, { lean: 22, shL: [60, 10], elL: 60, shR: [55, 0], elR: 70 })], [1.5, soma(G.ajoelhado, { lean: 22, shL: [60, 10], elL: 60, shR: [55, 0], elR: 70, headX: -8 })], [2.1, soma(parado(t, 3), { lean: 22, shL: [50, 4], elL: 40, shR: [45, 4], elR: 50, headX: 10 })], [3.2, soma(parado(t, 3), { lean: 14, shL: [50, 4], elL: 40, shR: [50, 4], elR: 50, headX: 12 })], [3.7, soma(parado(t, 3), { lean: 4, shL: [10, 10], elL: 30, shR: [30, 10], elR: 60 })]]);
      ci.pose(soma(P1, a < 1.5 ? { elR: 70 + Math.sin(t * 9) * 25 } : {})); rosto(ci, null, t, a > 3.2 ? 'feliz' : 'determinado'); fogo(t, smooth(3.15, 3.35, a));
      gui.pose(soma(parado(t, 2), ofego(t, .6))); spg.prumo(t); rosto(gui, null, t, 'sono');
      cam(cm, [[0, [.25, 1.25, .55]], [1, [.05, 1.15, .35]]], [[0, [-1.2, .75, -1.0]], [1, [-1.2, .85, -1.05]]], u / 4); return { ...QUENTE, bloom: .35 }; }; }),
  // C2 — "Pelo menos o pão chegou inteiro!" (rindo)
  mk(84, 87.4, { bg: '#3A3028', fov: 36 }, (c) => { const K = cozinha(c, { hora: 'tarde' }); const ci = ator(c, CIDA, -1.0, -.45, .35); const gui = ator(c, GUI, -1.2, .95, Math.PI - .35); const spg = paoNaMao(gui, 'R', .4); const fogo = chamaAzul(c, -1.19, .91, -1.12);
    return (t, u, cm) => { ci.pose(soma(parado(t, 3), rir(t, .8 * clamp((t - 84.3) * 2)), { shR: [30 + 20 * Math.max(0, Math.sin(t * 3)), 20], elR: 70 })); rosto(ci, 'cida', t, 'feliz', { smile: .9 }); fogo(t, 1);
      gui.pose(soma(parado(t, 2), ofego(t, .3))); spg.prumo(t); rosto(gui, null, t, 'vergonha');
      cam(cm, [[0, [-.05, 1.12, .75]], [1, [-.15, 1.08, .6]]], [[0, [-1.0, .9, -.45]], [1, [-1.0, .9, -.45]]], u / 3.4); return QUENTE; }; }),
  // C3 — ele dá um sorriso amarelo e coloca a sacola na mesa
  mk(87.4, 92, { bg: '#3A3028', fov: 38 }, (c) => { const K = cozinha(c, { hora: 'tarde' }); const ci = ator(c, CIDA, -1.0, -.45, .35); const gui = ator(c, GUI, -1.2, .95, Math.PI - .35); const spg = paoNaMao(gui, 'R', .4); const sp = sacolaPao(); sp.scale.setScalar(.8); sp.position.set(-.15, .785, .35); c.add(sp); const fogo = chamaAzul(c, -1.19, .91, -1.12);
    return (t, u, cm) => { const a = t - 87.4; const anda = clamp((a - 1.2) / 1.3); gui.place(lerp(-1.2, -.55, anda), lerp(.95, .55, anda), 0, lerp(Math.PI - .35, Math.PI / 2 + .25, smooth(1.0, 1.6, a)));
      const poe = kv(a, [[2.5, 0], [3.0, 1], [3.5, 1], [3.9, 0]]); gui.pose(anda > 0 && anda < 1 ? andar(t, { f: 1.7 }) : soma(parado(t, 2), { shR: [55 * poe, 8], elR: 12 + 20 * poe, lean: 10 * poe }));
      spg.visible = a < 3.05; sp.visible = a >= 3.05; spg.prumo(t); rosto(gui, null, t, a < 1.2 ? 'vergonha' : 'neutro', { smile: a < 1.2 ? .25 : undefined });
      ci.pose(soma(parado(t, 3), rir(t, .3 * (1 - smooth(0, 2, a))))); rosto(ci, null, t, a < 1.5 ? 'rindo' : 'feliz', { look: [.4, 0] }); fogo(t, 1);
      cam(cm, [[0, [.75, 1.2, 1.3]], [1, [.6, 1.15, 1.15]]], [[0, [-.9, .9, .4]], [1, [-.4, .85, .45]]], u / 4.6); return QUENTE; }; }),
  // Q1 — quarto à noite: deitado, olha o braço magro, fecha o punho, abre, fecha
  mk(92, 98.4, { bg: '#101018', fov: 38 }, (c) => { const Q = quarto(c, { hora: 'noite' }); Q.luz.intensity = 2.2; Q.lamp.userData.bulbo.material.emissiveIntensity = 1; const gui = deitado(c);
    const ab = abajur(); ab.position.set(1.25, .45, -1.2); c.add(ab); const cx = new THREE.Mesh(new THREE.BoxGeometry(.32, .45, .32), new THREE.MeshToonMaterial({ color: '#8A6A4A' })); cx.position.set(1.25, .225, -1.2); c.add(cx);
    return (t, u, cm) => { const a = t - 92; Q.ventilador.girar(t);
      const ergue = smooth(.3, 1.3, a) * (1 - smooth(5.6, 6.4, a)); gui.pose({ shR: [lerp(10, 95, ergue), 12], elR: lerp(10, 25, ergue) + 8 * Math.sin(a * .7), shL: [10, 14], elL: 20, headX: -10 * ergue, headY: -18 * ergue, bob: 0, hipL: [4, 2], hipR: [2, 2], knL: 6, knR: 4 });
      const fecha = (n) => smooth(n, n + .25, a) * (1 - smooth(n + .9, n + 1.15, a)); const f = Math.max(fecha(1.8), fecha(3.4), smooth(4.8, 5.05, a)); gui.hands.R.scale.set(1 - .12 * f, 1 - .3 * f, 1 + .08 * f);
      rosto(gui, null, t, a > 4.6 ? 'triste' : 'neutro', { look: [.5 * ergue, -.6 * ergue], lento: .5 });
      cam(cm, [[0, [.62, 1.55, .95]], [1, [.6, 1.45, .75]]], [[0, [.62, .75, -.55]], [1, [.62, .8, -.6]]], u / 6.4); return { tint: '#E8E8FF' }; }; }),
  // Q2 — suspira e apaga a luz do abajur
  mk(98.4, 102.4, { bg: '#101018', fov: 40 }, (c) => { const Q = quarto(c, { hora: 'noite' }); const gui = deitado(c); const ab = abajur(); ab.position.set(1.25, .45, -1.2); c.add(ab); const cx = new THREE.Mesh(new THREE.BoxGeometry(.32, .45, .32), new THREE.MeshToonMaterial({ color: '#8A6A4A' })); cx.position.set(1.25, .225, -1.2); c.add(cx);
    const L = new THREE.PointLight('#FFD89A', 3, 4, 1.6); L.position.set(1.25, .8, -1.1); c.add(L);
    return (t, u, cm) => { const a = t - 98.4; Q.ventilador.girar(t); const sus = Math.sin(clamp(a / 1.6) * Math.PI);
      const apaga = a > 2.55; const est = kv(a, [[1.5, 0], [2.3, 1], [2.7, 1], [3.2, 0]]);
      gui.pose({ lean: -4 * sus, bob: .01 * sus, shL: [10, 14], elL: 20, shR: [lerp(8, 60, est), lerp(12, 70, est)], elR: lerp(15, 10, est), headY: -25 * est, headX: -4, hipL: [4, 2], hipR: [2, 2], knL: 6, knR: 4 });
      L.intensity = apaga ? 0 : 3; Q.luz.intensity = 0; ab.userData.bulbo.material.emissiveIntensity = apaga ? 0 : .9; Q.lamp.userData.bulbo.material.emissiveIntensity = 0;
      rosto(gui, null, t, 'triste', { blink: a > 1 && a < 1.5 ? 1 : undefined, mouth: { open: .25 * sus } });
      cam(cm, [[0, [-.6, 1.5, .9]], [1, [-.45, 1.4, .7]]], [[0, [.8, .5, -.6]], [1, [.85, .5, -.65]]], u / 4); return { tint: apaga ? '#AAB4E8' : '#E8E8FF', exposure: apaga ? .55 : 1 }; }; }),
  // Q3 — escuro. Só a luz da rua. O contador pisca 50 -> 100 (tum)
  mk(102.4, 108, { bg: '#05050A', fov: 40 }, (c) => { const Q = quarto(c, { hora: 'noite' }); const gui = deitado(c); Q.luz.intensity = 0; Q.lamp.userData.bulbo.material.emissiveIntensity = 0;
    return (t, u, cm) => { Q.ventilador.girar(t); gui.pose({ shL: [10, 14], elL: 20, shR: [8, 12], elR: 15, hipL: [4, 2], hipR: [2, 2], knL: 6, knR: 4, lean: Math.sin(t * 1.2) * 1.5 }); rosto(gui, null, t, 'sono', { blink: t > 103.5 ? 1 : undefined });
      const tum = Math.exp(-Math.max(0, t - 104.2) * 6) * (t > 104.2); cam(cm, [[0, [-.2, 1.7, .6]], [1, [.2, 1.5, .2]]], [[0, [.7, .45, -.6]], [1, [.7, .45, -.6]]], u / 5.6, Math.sin(t * 40) * .004 * tum);
      return { tint: '#8E9CE0', exposure: .42 + .25 * tum - .4 * smooth(106.8, 108, t), vig: .6 }; }; }),
];

/** Guilherme deitado na cama do quarto (de barriga pra cima). */
function deitado(c) { const g = ator(c, GUI, .62, .45, 0); g.root.rotation.set(-Math.PI / 2, 0, 0); g.root.position.set(.62, .5, .42); g.sombra.visible = false; return g; }
/** Anel de chama azul numa boca do fogão (on 0..1). */
function chamaAzul(c, x, y, z) {
  const G2 = new THREE.Group(); G2.position.set(x, y, z); c.add(G2); const C = [];
  for (let i = 0; i < 12; i++) { const m = new THREE.Mesh(new THREE.ConeGeometry(.012, .05, 6), new THREE.MeshBasicMaterial({ color: i % 2 ? '#5AA8FF' : '#2E6FFF', transparent: true, opacity: .9 })); const a = i / 12 * 6.283; m.position.set(Math.cos(a) * .05, .025, Math.sin(a) * .05); G2.add(m); C.push(m); }
  const L = new THREE.PointLight('#5A8CFF', 0, 1.5, 1.6); L.position.set(x, y + .15, z); c.add(L);
  return (t, on) => { G2.visible = on > .01; const boom = on < 1 ? 1 + 1.8 * Math.sin(on * Math.PI) : 1; C.forEach((m, i) => { m.scale.set(boom, (.8 + .3 * Math.sin(t * 20 + i * 1.7)) * boom, boom); }); L.intensity = 1.2 * on * boom; };
}
