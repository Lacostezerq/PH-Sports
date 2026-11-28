// ATO 3 — dia 2 (235 a 318 s): o violão do pai, o vídeo viral, a mãe chamando pra janta sem ser ouvida, o Davi que "não estava ali".
// ATO 4 — dia 3 (318 a 367 s): a bola murcha, o campinho, o foco dourado e os 20 minutos.
import * as THREE from 'three';
import { alcanca, levaBoca, naCabeca } from './ik.js';
import { frenteDe, mk, cam, ator, rosto, fala, sentar, icone, UF, emFoco, fundo, celular, particulas, papelPicado, cronometro, vibra, soma, vivo, parado, andar, correr, G, sentado, clamp, smooth, lerp, easeIO, easeOut, easeIn, kv, naMao, rir, pular } from './cf.js';
import { montaCasa, sentaMesa, telNaMao, relogioParede, sentadoCel, ombro } from './casa_cena.js';
import { campinho } from './lugares_foco.js';
import { GUI, DAVI, ROSECASA, TIAGO } from './elenco_foco.js';
import { folha, violao, bola } from './pecas_foco.js';
import { fantasma } from './pecas.js';
import { deitar } from './lib.js';
import { rb, bx, cyl, sph, toon, ctex } from './motor/toon.js';

const TARDE = { tint: '#FFF0DC', bloom: .22 };
const NOTAS = ['#F2546E', '#F2C230', '#3EA6FF', '#5AE07A', '#B88AF2'];
/** Gui sentado na beira da cama tocando violão (corpo do violão no colo). */
const BEIRA = { x: .64, z: .25, ry: -Math.PI / 2 };
function tocando(g, v, t, f = 1, olhos = 0) {
  // corpo do violão no colo, braço pra esquerda; mão direita batendo nas cordas na boca do violão, mão esquerda no braço trocando de casa
  const base = sentado({ lean: 10, headX: 16, headZ: -6 }); g.pose(base);
  g.root.updateMatrixWorld(true); const p = g.root.localToWorld(new THREE.Vector3(-.1, .24, .2)); v.position.copy(p); v.quaternion.copy(g.root.quaternion); v.rotateZ(.4); v.updateMatrixWorld(true);
  const s = Math.sin(t * 9 * f); const casa = [.48, .55, .42, .6][Math.floor(t * .9 * Math.max(f, .3)) % 4];
  const P = alcanca(g, 'R', v.localToWorld(new THREE.Vector3(.08, s * .035 * Math.min(1, f + .2), .08)), base);
  alcanca(g, 'L', v.localToWorld(new THREE.Vector3(casa, -.01, .06)), P);
}
function montaQuartoViolao(c, o = {}) { const K = montaCasa(c, o); K.violao.visible = false; const g = ator(c, GUI, 0, 0, 0); sentar(g, BEIRA.x, BEIRA.z, BEIRA.ry, .42); const v = violao({}); c.add(v); K.tel.position.set(.35, .8, -.9); return { K, g, v }; }
/** Notas coloridas subindo do violão. */
function notasViolao(c, v) { const L = []; for (let i = 0; i < 10; i++) { const s = icone('notas', .1); s.material.color.set(NOTAS[i % 5]); c.add(s); L.push(s); }
  return (t, on = 1) => { const p = v.getWorldPosition(new THREE.Vector3()); L.forEach((s, i) => { const a = ((t * .5 + i / 10) % 1); s.position.set(p.x + Math.sin(i * 2.3 + t) * .25 * a, p.y + .1 + a * .8, p.z + Math.cos(i * 1.7) * .25 * a); s.material.opacity = on * Math.sin(a * Math.PI); s.visible = on > .01; }); }; }

export const ATO3 = [
  // D1 — "Dia dois. Ele pega o violão velho do pai, encostado atrás da porta há três anos": a porta fecha e revela o violão com teia
  mk(234.68, 238.86, { bg: '#DDE6EE', fov: 44, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); K.tel.visible = false; const g = ator(c, GUI, -.4, .3, -Math.PI / 2 - .4);
    return (t, u, cm) => { K.portaK.abre(1 - smooth(234.9, 235.8, t)); const k = clamp((t - 236.3) / 1.5); g.place(lerp(-.2, -.95, k), lerp(.4, 1.1, k), 0, -2.3); g.pose(k > 0 && k < 1 ? andar(t, { f: 1.8 }) : soma(parado(t, 1), k >= 1 ? { lean: 30, shR: [70, 10], elR: 20 } : {})); rosto(g, null, t, 'surpreso', { look: [-.3, .6] });
      cam(cm, [[0, [1.25, 1.5, -.75]], [1, [1.15, 1.42, -.6]]], [-1.3, .7, 1.1], u / 4.18); return TARDE; }; }),
  // D2 — "com uma corda faltando": ele sopra a poeira, que vira nuvem
  mk(238.86, 240.88, { bg: '#DDE6EE', fov: 56, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); K.tel.visible = false; K.violao.visible = false; const g = ator(c, GUI, -.85, .95, -2.4); const v = violao({ teia: true, semCorda: 2 }); c.add(v); const cp = [0, 0, 0]; const po = particulas(c, cp, { n: 40, cor: '#D8CDB8', r: .5, tam: .07, sobe: .5 });
    return (t, u, cm) => { g.pose({ shR: [40, 10], elR: 50, shL: [62, 30], elL: 22, headX: 16, headY: 22 }); rosto(g, null, t, 'neutro', { mouth: t > 239.4 && t < 240.2 ? { open: .4, round: 1 } : undefined, look: [.5, -.3] }); naMao(v, g, 'L', [0, -.05, .05], false); v.rotation.set(0, -2.4 - Math.PI / 2, 1.2);
      const p = v.getWorldPosition(new THREE.Vector3()); cp[0] = p.x; cp[1] = p.y + .1; cp[2] = p.z; po(clamp((t - 239.4) / 1.4)); g.headG.updateMatrixWorld(true); const hd = g.headG.getWorldPosition(new THREE.Vector3()); const m = hd.clone().lerp(p, .5); cam(cm, [[0, [-1.36, 1.4, .3]], [1, [-1.34, 1.36, .36]]], [m.x, m.y, m.z], u / 2.02); return TARDE; }; }),
  // D3 — "troca a corda, coloca um vídeo de aula": o celular apoiado num copo com a aula
  mk(240.88, 243.18, { bg: '#DDE6EE', fov: 40 }, (c) => { const S = montaQuartoViolao(c, { hora: 'tarde' }); const copo = cyl(.04, .035, .1, '#CFE6F4', 0, 0, 0, { out: .003 }); copo.position.set(.35, .82, -1.15); c.add(copo); S.K.tel.position.set(.35, .95, -1.12); S.K.tel.rotation.set(-.2, 0, 0); S.K.tel.tela('views', .02);
    const cr = bx(.002, .002, .9, '#E8E0C8', 0, 0, 0); c.add(cr);
    return (t, u, cm) => { S.g.pose(sentado({ shR: [70, 10], elR: 70 + Math.sin(t * 6) * 15, shL: [60, -30], elL: 40, lean: 16, headX: 26 })); rosto(S.g, null, t, 'determinado', { look: [.2, .6] }); tocando(S.g, S.v, t, 0); S.g.pose(sentado({ shR: [70, 10], elR: 70 + Math.sin(t * 6) * 15, shL: [60, -30], elL: 40, lean: 16, headX: 26 }));
      const p = S.v.getWorldPosition(new THREE.Vector3()); cr.position.set(p.x, p.y + .05, p.z); cr.quaternion.copy(S.v.quaternion); cr.rotateY(Math.PI / 2); cr.visible = t > 241.2;
      if (t < 241.75) cam(cm, [[0, [-.05, 1.18, -.3]], [1, [.08, 1.12, -.48]]], [p.x, p.y, p.z], (t - 240.88) / .87, 0, 0); else cam(cm, [[0, [.9, 1.15, -.5]], [1, [.75, 1.1, -.6]]], [.35, .95, -1.12], (t - 241.75) / 1.43, 0, 0); return TARDE; }; }),
  // D4 — "e uma tarde depois tá tocando a música inteira": foco no braço do violão, o sol atravessa a janela, notas coloridas
  mk(243.18, 249.68, { bg: '#DDE6EE', fov: 40 }, (c) => { const S = montaQuartoViolao(c, { hora: 'tarde' }); const set = emFoco([S.v, S.g.root]); const nt = notasViolao(c, S.v); const sol = S.K.luzes.sol;
    return (t, u, cm) => { const k = u / 6.5; tocando(S.g, S.v, t, .5 + k); rosto(S.g, null, t, k > .55 ? 'feliz' : 'determinado', { blink: k > .55 ? 1 : undefined, look: [0, .5] }); sol.position.set(.4 + lerp(-1.4, 1.4, k), 2.3, -2.1); sol.color.set(k > .6 ? '#FFB070' : '#FFF0D0');
      UF.mundo.value = smooth(243.3, 243.8, t); set(1, t); fundo(c, '#DDE6EE', UF.mundo.value); nt(t, smooth(246, 246.5, t));
      cam(cm, [[0, [-.15, 1.3, .95]], [.5, [-.1, 1.2, -.35]], [1, [-.15, 1.28, .75]]], [.6, .9, .25], k); return { tint: k > .6 ? '#FFE0C0' : '#FFF4E4', bloom: .3 }; }; }),
  // D5 — "Para tudo! Tu aprendeu isso hoje?": o Tiago na porta, celular na horizontal filmando
  mk(249.68, 251.88, { bg: '#DDE6EE', fov: 42 }, (c) => { const S = montaQuartoViolao(c, { hora: 'tarde' }); S.K.portaK.abre(1); const ti = ator(c, TIAGO, -1.25, .85, Math.PI / 2 - .3); const tt = celular(); c.add(tt);
    return (t, u, cm) => { tocando(S.g, S.v, t, 1.3); rosto(S.g, null, t, 'feliz', { blink: 1 }); const p = soma(G.filmar, { bob: 0 }); fala(ti, 'tiago', t, 'surpreso', p, 0); ti.pose(p); naMao(tt, ti, 'R', [0, -.08, .05], [0, 0, Math.PI / 2]); tt.tela('views', .01);
      cam(cm, [[0, [.3, 1.45, -1.0]], [1, [.2, 1.4, -.9]]], [-1.2, 1.2, .85], u / 2.2); return TARDE; }; }),
  // D6 — "Hoje à tarde.": sem parar de tocar, dá de ombros
  mk(251.88, 253.78, { bg: '#DDE6EE', fov: 42 }, (c) => { const S = montaQuartoViolao(c, { hora: 'tarde' }); const nt = notasViolao(c, S.v);
    return (t, u, cm) => { tocando(S.g, S.v, t, 1.3); S.g.root.position.y = .42 - .28 * .95 + Math.abs(Math.sin(t * 5)) * .01; fala(S.g, 'gui', t, 'feliz', S.g._ultima || {}, 0, { look: [-.6, 0] }); tocando(S.g, S.v, t, 1.3); nt(t, 1);
      cam(cm, [[0, [-.5, 1.3, .9]], [1, [-.4, 1.25, .8]]], [.7, .9, .25], u / 1.9); return TARDE; }; }),
  // D7 — "O Tiago posta, e o vídeo passa de 200 mil visualizações antes da janta": a tela do celular, os números subindo
  mk(253.78, 262.78, { bg: '#DDE6EE', fov: 40, limpa: false, perto: true }, (c) => { const S = montaQuartoViolao(c, { hora: 'tarde' }); const ti = ator(c, TIAGO, -.8, .6, Math.PI / 2 + .3); const tt = celular(); c.add(tt);
    return (t, u, cm) => { tocando(S.g, S.v, t, 1.3); rosto(S.g, null, t, 'feliz', { blink: 1 }); ti.pose(soma(parado(t, 2), { shR: [64, 4], elR: 76, shL: [40, 12], elL: 70, headX: 24 })); rosto(ti, null, t, 'surpreso', { look: [0, .5] }); telNaMao(tt, ti, 'R'); tt.tela('views', clamp((t - 254.3) / 4.2));
      ti.headG.visible = false; ti.headG.updateMatrixWorld(true); const e0 = ti.headG.localToWorld(new THREE.Vector3(0, .26, .1)); const P = tt.position; tt.translateY(.07); tt.updateMatrixWorld(true); const e = P.clone().add(e0.clone().sub(P).normalize().multiplyScalar(.36 - .04 * Math.sin(u * .7))); cam(cm, [e.x, e.y, e.z], [P.x, P.y, P.z], u / 9, 0, 0); return TARDE; }; }),
  // D8 — "E foi aí que apareceu o primeiro sinal de que tinha alguma coisa errada": congela, a cor esfria
  mk(262.78, 266.88, { bg: '#B8C8DC', fov: 40 }, (c) => { const S = montaQuartoViolao(c, { hora: 'tarde' });
    return (t, u, cm) => { tocando(S.g, S.v, 262.8, 1.3); rosto(S.g, null, 262.8, 'feliz', { blink: 1, vivo: false }); cam(cm, [[0, [-.55, 1.3, .75]], [1, [-.45, 1.25, .65]]], [.7, .95, .25], u / 4.1); return { tint: '#B8D0FF', sat: .55, exposure: .9 }; }; }),
  // D9 — "Guilherme, a janta!": a Dona Rose pondo os pratos e chamando pro corredor
  mk(266.88, 269.18, { bg: '#E8E0D0', fov: 44 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.tel.visible = false; const r = ator(c, ROSECASA, -2.4, .9, -Math.PI / 2 + .6); const pr = []; for (let i = 0; i < 3; i++) { const p = cyl(.11, .09, .02, '#F4F1EA', -3.3 + i * .3, .79, .45, { out: .003 }); c.add(p); pr.push(p); }
    return (t, u, cm) => { const p = { shR: [110, 30], elR: 60, shL: [20, 10], elL: 30, headX: -6 }; fala(r, 'mae', t, 'neutro', p, .3); r.pose(p); cam(cm, [[0, [-3.9, 1.4, 1.2]], [1, [-3.75, 1.35, 1.1]]], [-2.4, 1.2, .9], u / 2.3); return { tint: '#FFF0DC' }; }; }),
  // D10 — "Ela chamou uma vez, duas, cinco vezes, foi até a porta, bateu... e ele não ouviu nenhuma": a casa em corte, mãe de um lado, ele em foco do outro
  mk(269.18, 290.18, { bg: '#2A2A34', fov: 40, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'noite', corte: true }); K.tel.visible = false; K.luzes.LG.intensity = 2; K.violao.visible = false; const g = ator(c, GUI, 0, 0, 0); sentar(g, BEIRA.x, BEIRA.z, BEIRA.ry, .42); const v = violao({}); c.add(v);
    const r = ator(c, ROSECASA, -3.0, .9, 0); const set = emFoco([g.root, v]); const nt = notasViolao(c, v);
    return (t, u, cm) => { tocando(g, v, t, 1.2); rosto(g, null, t, 'feliz', { blink: 1 }); nt(t, 1);
      const anda = clamp((t - 273.1) / 1.6); r.place(lerp(-3.0, -2.0, anda), lerp(.9, .85, anda), 0, -Math.PI / 2 + .1 + (anda < 1 && anda > 0 ? 0 : 0)); r.root.rotation.y = anda > 0 && anda < 1 ? Math.PI / 2 : Math.PI / 2;
      const bate = t > 275 && t < 276.2; const chama = [269.6, 270.3, 271.1, 271.8, 272.4, 275.6].some((q) => t > q && t < q + .5);
      const p = anda > 0 && anda < 1 ? andar(t, { f: 1.8 }) : bate ? { shR: [90, 0], elR: 60 + Math.abs(Math.sin(t * 14)) * 40 } : { shR: [120, 30], elR: 70, shL: [120, 30], elL: 70, headX: -6 };
      r.pose(p); rosto(r, null, t, t > 276 ? 'preocupado' : 'bravo', { mouth: chama ? { open: .7 } : undefined });
      const k = smooth(278.6, 279.2, t); UF.mundo.value = .25 + k * .75; set(1, t); fundo(c, '#2A2A34', 0);
      if (t < 278.6) cam(cm, [[0, [-1.6, 2.1, 6.0]], [1, [-1.6, 2.0, 5.6]]], [-1.6, 1.1, 0], (t - 269.18) / 9.4, 0, 0);
      else if (t < 284.2) cam(cm, [[0, [.6, 1.6, 3.4]], [1, [.7, 1.4, 2.6]]], [.6, .95, .25], (t - 278.6) / 5.6, 0, 0);
      else cam(cm, [[0, [-1.6, 1.6, 3.6]], [1, [-1.6, 1.5, 3.3]]], [-1.6, 1.1, .5], (t - 284.2) / 6, 0, 0);
      return { tint: '#E8E2FF' }; }; }),
  // D11 — "E enquanto ele tocava, o Davi entrou no quarto com a mesma folha dobrada... por 10 minutos... não estava ali"
  mk(290.18, 310.68, { bg: '#C8C0B8', fov: 46, limpa: false }, (c) => { const S = montaQuartoViolao(c, { hora: 'noite' }); S.K.luzes.LG.intensity = 2; const d = ator(c, DAVI, 1.5, .85, -Math.PI / 2); fantasma(d, 1); const f = folha(); c.add(f); f.scale.setScalar(.6); S.K.portaD.abre(1);
    const rel = relogioParede(); rel.position.set(-.3, 2.0, -1.47); c.add(rel); const set = emFoco([S.g.root, S.v]); const nt = notasViolao(c, S.v);
    return (t, u, cm) => { tocando(S.g, S.v, t, 1.1); rosto(S.g, null, t, 'feliz', { blink: 1 }); nt(t, 1); const en = clamp((t - 291.7) / 1.6);
      d.place(lerp(1.5, -.05, en), lerp(.85, 1.35, en), 0, lerp(-Math.PI / 2, 2.58 - Math.PI * 2, en)); const bal = Math.sin(t * 2.2); d.pose(en > 0 && en < 1 ? andar(t, { f: 2 }) : soma({ shL: [30, -40], elL: 120, shR: [30, -40], elR: 120, headX: 6, tilt: bal * 5 }, { bob: Math.abs(bal) * .01 }));
      d.root.position.x += en >= 1 ? bal * .03 : 0; rosto(d, null, t, 'triste', { look: [-.6, .1] }); d.root.updateMatrixWorld(true); const a = d.hands.L.localToWorld(new THREE.Vector3(0, -.04, .04)), b = d.hands.R.localToWorld(new THREE.Vector3(0, -.04, .04)); f.position.copy(a).add(b).multiplyScalar(.5); f.quaternion.copy(d.root.quaternion); f.set(0);
      rel.hora(20, clamp((t - 294.8) / 9) * 10); UF.mundo.value = 1; set(.5, t); fundo(c, '#C8C0B8', 1); fantasma(d, t > 308.3 ? lerp(1, .15, smooth(308.3, 309.2, t)) * (t > 310.2 ? 1.5 : 1) : 1);
      const W = (a, b) => (t - a) / (b - a);
      if (t < 293) cam(cm, [[0, [-1.2, 2.05, -1.2]], [1, [-1.15, 2.0, -1.15]]], [.7, .8, .5], W(290.18, 293), 0, 0);
      else if (t < 294.8) cam(cm, [[0, [.75, 1.12, 1.25]], [1, [.7, 1.1, 1.28]]], [f.position.x, f.position.y + .12, f.position.z], W(293, 294.8));
      else if (t < 298) cam(cm, [[0, [-.3, 1.75, -.55]], [1, [-.3, 1.8, -.7]]], [-.3, 2.0, -1.47], W(294.8, 298));
      else if (t < 302.4) cam(cm, [[0, [1.45, 1.35, 2.0]], [1, [1.38, 1.32, 1.92]]], [.15, .88, .95], W(298, 302.4));
      else if (t < 304.1) { S.g.headG.updateMatrixWorld(true); const h = S.g.headG.getWorldPosition(new THREE.Vector3()); cam(cm, [[0, [h.x - .9, h.y + .1, h.z - .5]], [1, [h.x - .8, h.y + .08, h.z - .45]]], [h.x, h.y - .2, h.z], W(302.4, 304.1)); }
      else cam(cm, [[0, [-1.2, 2.05, -1.2]], [1, [-1.1, 1.95, -1.1]]], [.7, .8, .5], W(304.1, 310.68), 0, 0);
      return { tint: '#E8E2FF' }; }; }),
  // D12 — "Quando ele finalmente parou de tocar": a cor volta, o quarto está vazio
  mk(310.68, 313.08, { bg: '#C8C0B8', fov: 44 }, (c) => { const S = montaQuartoViolao(c, { hora: 'noite' }); S.K.luzes.LG.intensity = 2;
    return (t, u, cm) => { tocando(S.g, S.v, 310.7, 0); S.g.pose(sentado({ shR: [30, 20], elR: 40, shL: [40, -20], elL: 50, headX: 0, headY: Math.sin((t - 310.68) * 2) * 40 })); rosto(S.g, null, t, 'neutro', { look: [Math.sin((t - 310.68) * 2), 0] }); UF.mundo.value = 1 - smooth(310.7, 311.3, t);
      cam(cm, [[0, [-.6, 1.5, 1.2]], [1, [-.5, 1.4, 1.05]]], [.7, .9, .25], u / 2.4); return { tint: '#E8E2FF' }; }; }),
  // D13 — "a janta tava fria no prato, coberta com outro prato": levanta o prato de cima, nenhum vapor
  mk(313.08, 316.55, { bg: '#E8E0D0', fov: 34 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.tel.visible = false; const g = ator(c, GUI, -2.3, .45, -Math.PI / 2); const p1 = cyl(.12, .09, .025, '#F4F1EA', -2.85, .79, .45, { out: .003 }); const p2 = cyl(.12, .09, .025, '#F4F1EA', 0, 0, 0, { out: .003 }); p2.rotation.x = Math.PI; c.add(p1, p2);
    const com = sph(.07, '#C89A50', -2.85, .8, .45, { seg: 10 }); com.scale.y = .4; c.add(com);
    return (t, u, cm) => { const lev = smooth(314.2, 314.8, t); g.pose({ shR: [40 + lev * 40, 0], elR: 60 - lev * 30, lean: 14, headX: 26 }); rosto(g, null, t, 'triste', { look: [0, .7] }); p2.position.set(-2.85 + lev * .1, .82 + lev * .25, .45); p2.rotation.z = lev * .6;
      cam(cm, [[0, [-3.6, 1.25, .25]], [1, [-3.5, 1.18, .32]]], [-2.6, .95, .45], u / 3.47); return { tint: '#FFE8D0', sat: .8 }; }; }),
  // D14 — "e o Davi já tava dormindo": a porta entreaberta, a folha saindo debaixo do travesseiro
  mk(316.55, 318.38, { bg: '#10121C', fov: 34 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.tel.visible = false; K.portaD.abre(.35); const d = ator(c, DAVI, 0, 0, 0); deitar(d, 3.55, .38, .2); d.root.position.y = .58; const f = folha(); f.scale.setScalar(.6); f.position.set(3.45, .5, -1.0); f.rotation.set(-Math.PI / 2, 0, .4); c.add(f);
    const lua = new THREE.SpotLight('#B8C8FF', 12, 6, .5, .6, 1.2); lua.position.set(3.3, 2.4, -2.2); lua.target.position.set(3.5, .4, -.6); c.add(lua, lua.target);
    return (t, u, cm) => { d.pose({ shL: [10, 10], shR: [10, 10] }); rosto(d, null, t, 'sono', { blink: 1 }); f.set(0); cam(cm, [[0, [2.3, 1.45, 1.2]], [1, [2.45, 1.35, 1.05]]], [3.45, .5, -.6], u / 1.83); return { tint: '#C8D4FF', exposure: .85 }; }; }),
];

// ================================================================ DIA 3
const OURO = (k) => { UF.mundo.value = k; UF.ouro.value = 1; };
/** Bola rolando entre pontos com quique. */
function bolaEm(B, t, K) { let a = K[0], b = K[K.length - 1]; for (let i = 0; i < K.length - 1; i++) if (t >= K[i][0] && t <= K[i + 1][0]) { a = K[i]; b = K[i + 1]; break; } const u = b[0] > a[0] ? clamp((t - a[0]) / (b[0] - a[0])) : 1; B.position.set(lerp(a[1], b[1], u), Math.sin(u * Math.PI) * (b[3] || 0), lerp(a[2], b[2], u)); B.rotation.z = -B.position.x * 4; B.rotation.x = B.position.z * 4; }
function montaCampo(c) { const P = campinho(c); const d = ator(c, DAVI, 0, 0, 0); const g = ator(c, GUI, 0, 0, 0); const B = bola(.35); c.add(B); const tel = celular(); tel.position.set(-3.5, .02, 2.3); tel.rotation.set(-Math.PI / 2, 0, .6); c.add(tel); return { P, d, g, B, tel }; }

export const ATO4 = [
  // E1 — "Dia três, sábado de manhã. O Davi aparece na porta com uma bola murcha debaixo do braço e o chinelo trocado"
  mk(318.38, 325.98, { bg: '#F4E8C8', fov: 44, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'manha' }); K.tel.visible = false; K.portaD.abre(1); const d = ator(c, DAVI, 1.42, .85, -Math.PI / 2); const B = bola(.35); c.add(B); const g = ator(c, GUI, 0, 0, 0); deitar(g, .95, .43, .38); g.root.position.y = .63;
    return (t, u, cm) => { d.pose(soma(parado(t, 2), { shR: [8, 34], elR: 40, shL: [0, 9] })); rosto(d, null, t, 'feliz', { look: [-.6, 0] }); d.root.updateMatrixWorld(true); B.position.copy(d.root.localToWorld(new THREE.Vector3(-.3, .78, .04))); B.position.y -= .11; g.pose({ shR: [10, 10], elR: 30, shL: [10, 10], elL: 30 }); rosto(g, null, t, 'sono', { blink: 1 });
      if (t < 323.9) cam(cm, [[0, [-.3, 1.4, .6]], [1, [0, 1.25, .7]]], [1.42, .75, .85], (t - 318.38) / 5.5); else cam(cm, [[0, [.95, .3, .95]], [1, [1.0, .25, .9]]], [1.42, .06, .85], (t - 323.9) / 2.08, 0, 0); return { tint: '#FFE8B8', bloom: .3 }; }; }),
  // E2 — "Joga comigo?": meio escondido no batente
  mk(325.98, 327.56, { bg: '#F4E8C8', fov: 36 }, (c) => { const K = montaCasa(c, { hora: 'manha' }); K.tel.visible = false; K.portaD.abre(1); const d = ator(c, DAVI, 1.5, .78, -Math.PI / 2); const B = bola(.35); c.add(B);
    return (t, u, cm) => { const p = soma(parado(t, 2), { shR: [10, 30], elR: 80, shL: [60, 20], elL: 90, tilt: -8, headZ: -10 }); fala(d, 'davi', t, 'vergonha', p, 0, { look: [-.6, 0] }); d.pose(p); naMao(B, d, 'R', [-.05, -.05, .08], false);
      cam(cm, [[0, [.6, .95, .75]], [1, [.7, .92, .76]]], [1.5, .75, .8], u / 1.58); return { tint: '#FFE8B8', bloom: .3 }; }; }),
  // E3 — "Bora, mas só um pouquinho.": espreguiça e joga a coberta de lado
  mk(327.56, 330.58, { bg: '#F4E8C8', fov: 44 }, (c) => { const K = montaCasa(c, { hora: 'manha' }); K.tel.visible = false; const g = ator(c, GUI, 0, 0, 0); sentar(g, .95, -.98, 0, .47); K.coberta.position.y = .53;
    return (t, u, cm) => { const e = smooth(327.6, 328.4, t) * (1 - smooth(329.3, 329.9, t)); const p = sentado({ knL: 0, knR: 0, shL: [lerp(20, 165, e), 20], shR: [lerp(20, 165, e), 20], elL: 20, elR: 20, headX: -10 * e }); fala(g, 'gui', t, e > .5 ? 'sono' : 'feliz', p, 0); g.pose(p);
      K.coberta.position.x = -smooth(329.6, 330.2, t) * .5; K.coberta.rotation.z = smooth(329.6, 330.2, t) * .5; cam(cm, [[0, [.2, 1.4, .75]], [1, [.25, 1.35, .6]]], [.95, .85, -.75], u / 3.02); return { tint: '#FFE8B8', bloom: .3 }; }; }),
  // E4 — "E aí aconteceu uma coisa que ninguém esperava, porque ele focou 100% no irmão": o campinho, o foco dourado liga
  mk(330.58, 336.68, { bg: '#BFE3F7', fov: 40 }, (c) => { const S = montaCampo(c); const set = emFoco([S.d.root, S.g.root, S.B]);
    return (t, u, cm) => { const x = lerp(-2.5, 1.5, u / 6.1); S.d.place(x, .2 + Math.sin(t * 2) * .3, 0, Math.PI / 2); S.d.pose(correr(t, 2.6, .8)); rosto(S.d, null, t, 'feliz', { lingua: true }); S.B.position.set(x + .3, .0, .2 + Math.sin(t * 2) * .3); S.B.rotation.z = -t * 6;
      S.g.place(x - .9, .9, 0, Math.PI / 2 - .3); S.g.pose(correr(t, 2.2, .6)); rosto(S.g, null, t, 'feliz'); const k = smooth(334.3, 335.3, t); OURO(k); set(k, t); fundo(c, '#BFE3F7', k, 1);
      cam(cm, [[0, [x - 1.5, 1.6, 4.2]], [1, [x - 1, 1.4, 3.6]]], [x, .6, .4], u / 6.1, 0, 0); return { bloom: .3 + k * .3, bloomT: .8 }; }; }),
  // E5 — "Não pegou o celular nenhuma vez": o celular jogado na grama, apagado
  mk(336.68, 338.99, { bg: '#BFE3F7', fov: 32, perto: true }, (c) => { const S = montaCampo(c); const set = emFoco([S.d.root, S.g.root, S.B]); S.tel.tela('apagada');
    return (t, u, cm) => { S.d.place(-1.5 + (t - 336.68) * 1.8, 1.6, 0, Math.PI / 2); S.d.pose(correr(t, 2.6, .8)); rosto(S.d, null, t, 'feliz'); S.g.place(-1.0 + (t - 336.68) * 1.6, 2.2, 0, Math.PI / 2); S.g.pose(correr(t, 2.2, .6)); rosto(S.g, null, t, 'feliz'); S.B.position.set(-1.2 + (t - 336.68) * 1.8, 0, 1.7);
      OURO(1); set(1, t); fundo(c, '#BFE3F7', 1, 1); cam(cm, [[0, [-3.9, .35, 2.75]], [1, [-3.85, .3, 2.65]]], [-3.5, .02, 2.3], u / 2.31, 0, 0); return { bloom: .45, bloomT: .8, focus: .55, range: .3, blur: 10 }; }; }),
  // E6 — "riu de verdade de cada chute torto": o Davi chuta torto, o Gui ri de se dobrar
  mk(338.99, 341.48, { bg: '#BFE3F7', fov: 40 }, (c) => { const S = montaCampo(c); const set = emFoco([S.d.root, S.g.root, S.B]);
    return (t, u, cm) => { const ch = 339.4; S.d.place(1.0, .2, 0, Math.PI / 2); S.d.pose(t < ch + .3 ? { hipR: [-30 + clamp((t - ch) / .25) * 90, 0], knR: 20, shL: [40, 30], shR: [40, 30] } : soma(parado(t, 2), { shL: [130, 20], elL: 120 })); rosto(S.d, null, t, t > ch + .4 ? 'vergonha' : 'determinado', { lingua: t < ch + .3 });
      bolaEm(S.B, t, [[ch, 1.3, .2, 0], [ch + 1.2, 2.5, 3.0, .5], [ch + 2.5, 2.8, 3.8, .1]]); S.g.place(3.0, 1.0, 0, -Math.PI / 2 - .2); S.g.pose(t > ch + .6 ? soma(rir(t, 1.3), { lean: 25 + Math.sin(t * 9) * 5, shL: [40, 10], elL: 100, shR: [40, 10], elR: 100 }) : parado(t, 1)); rosto(S.g, null, t, t > ch + .6 ? 'rindo' : 'feliz', { mouth: t > ch + .6 ? { open: .8, smile: 1 } : undefined });
      OURO(1); set(1, t); fundo(c, '#BFE3F7', 1, 1); cam(cm, [[0, [2.0, 1.4, -2.6]], [1, [2.1, 1.35, -2.3]]], [2.0, .7, .5], u / 2.49); return { bloom: .45, bloomT: .8 }; }; }),
  // E7 — "comemorou cada gol do Davi como se fosse final de Copa": de joelhos, braços pro alto, papel picado imaginário
  mk(341.48, 344.87, { bg: '#BFE3F7', fov: 40 }, (c) => { const S = montaCampo(c); const set = emFoco([S.d.root, S.g.root, S.B]); const pp = papelPicado(c, 4.4, 0, .6, { w: 3, d: 2, h: 3 });
    return (t, u, cm) => { const ch = 341.7; S.d.place(3.6, .1, 0, Math.PI / 2); S.d.pose(t < ch + .3 ? { hipR: [-30 + clamp((t - ch) / .25) * 90, 0], knR: 20, shL: [40, 30], shR: [40, 30] } : soma(pular(t, 2.4), G.comemora)); rosto(S.d, null, t, t > ch + .3 ? 'rindo' : 'determinado', { pisca1: t < ch + .3, mouth: t > ch + .3 ? { open: .7, smile: 1 } : undefined });
      bolaEm(S.B, t, [[ch, 3.9, .1, 0], [ch + .5, 5.9, .2, .15], [ch + 1.2, 6.4, .3, 0]]); S.g.place(4.6, 1.5, 0, -Math.PI * .8); const jo = t > ch + .5; S.g.pose(jo ? soma(G.ajoelhado, G.comemora) : parado(t, 1)); rosto(S.g, null, t, jo ? 'rindo' : 'surpreso', { mouth: jo ? { open: .9, smile: 1 } : undefined });
      pp(t); c.children.forEach(() => {}); OURO(1); set(1, t); fundo(c, '#BFE3F7', 1, 1); cam(cm, [[0, [2.6, 1.3, 3.6]], [1, [2.9, 1.2, 3.2]]], [4.4, .7, .6], u / 3.39); return { bloom: .45, bloomT: .8 }; }; }),
  // E8 — "e viu coisas que nunca tinha reparado": câmera lenta no Davi correndo
  mk(344.87, 347.28, { bg: '#BFE3F7', fov: 34 }, (c) => { const S = montaCampo(c); const set = emFoco([S.d.root, S.B]);
    return (t, u, cm) => { const tl = 344.87 + (t - 344.87) * .35; const x = lerp(-1, 0, u / 2.41); S.d.place(x, .3, 0, Math.PI / 2); S.d.pose(correr(tl, 2.6, .8)); rosto(S.d, null, tl, 'feliz'); S.B.position.set(x + .3, 0, .45); S.B.rotation.z = -tl * 6; S.g.root.visible = false;
      OURO(1); set(1, t); fundo(c, '#BFE3F7', 1, 1); cam(cm, [[0, [x + .2, .8, 2.2]], [1, [x + .5, .75, 2.0]]], [x, .5, .3], u / 2.41); return { bloom: .45, bloomT: .8 }; }; }),
  // E9 — "que o Davi corre com a língua pra fora"
  mk(347.28, 349.20, { bg: '#BFE3F7', fov: 30 }, (c) => { const S = montaCampo(c); const set = emFoco([S.d.root]);
    return (t, u, cm) => { const tl = 347.28 + (t - 347.28) * .35; S.d.place(0, .3, 0, Math.PI / 2 - .3); S.d.pose(correr(tl, 2.6, .8)); rosto(S.d, null, tl, 'feliz', { lingua: true }); S.g.root.visible = false; S.B.visible = false;
      OURO(1); set(1, t); fundo(c, '#BFE3F7', 1, 1); cam(cm, [[0, [1.3, .75, 1.1]], [1, [1.2, .72, 1.0]]], [0, .62, .3], u / 1.92); return { bloom: .45, bloomT: .8 }; }; }),
  // E10 — "que ele fecha um olho pra chutar"
  mk(349.20, 350.88, { bg: '#BFE3F7', fov: 30 }, (c) => { const S = montaCampo(c); const set = emFoco([S.d.root, S.B]);
    return (t, u, cm) => { const k = clamp((t - 349.6) / 1.0); S.d.place(0, .3, 0, Math.PI / 2); S.d.pose({ hipR: [-30 + k * 70, 0], knR: 30 - k * 20, shL: [40, 30], shR: [40, 30], lean: 8 }); rosto(S.d, null, t, 'determinado', { pisca1: true }); S.g.root.visible = false; S.B.position.set(.3 + k * .3, 0, .38);
      OURO(1); set(1, t); fundo(c, '#BFE3F7', 1, 1); cam(cm, [[0, [1.25, .65, 1.0]], [1, [1.15, .62, .9]]], [0, .58, .3], u / 1.68); return { bloom: .45, bloomT: .8 }; }; }),
  // E11 — "que ele narra o próprio gol baixinho"
  mk(350.88, 352.87, { bg: '#BFE3F7', fov: 30 }, (c) => { const S = montaCampo(c); const set = emFoco([S.d.root]);
    return (t, u, cm) => { S.d.place(.5, .3, 0, Math.PI / 2 + .6); S.d.pose(soma(correr(t * .5, 2.6, .5), { shR: [70, 10], elR: 120 })); rosto(S.d, null, t, 'feliz', { mouth: { open: Math.abs(Math.sin(t * 13)) * .35 } }); S.g.root.visible = false; S.B.visible = false;
      OURO(1); set(1, t); fundo(c, '#BFE3F7', 1, 1); cam(cm, [[0, [1.55, .75, 1.2]], [1, [1.45, .72, 1.1]]], [.5, .6, .3], u / 1.99); return { bloom: .45, bloomT: .8 }; }; }),
  // E12 — "e que depois de cada gol ele olha pro irmão pra ver se ele viu"
  mk(352.87, 356.28, { bg: '#BFE3F7', fov: 34 }, (c) => { const S = montaCampo(c); const set = emFoco([S.d.root, S.g.root]);
    return (t, u, cm) => { S.d.place(4.6, .2, 0, Math.PI / 2); const vira = smooth(353.6, 354.3, t); S.d.root.rotation.y = lerp(Math.PI / 2, -.6, vira); S.d.pose(soma(parado(t, 2), { shL: [130 * (1 - vira), 20], elL: 40 })); rosto(S.d, null, t, vira > .5 ? 'feliz' : 'rindo', { look: [0, 0], brow: vira });
      S.g.place(3.2, 2.0, 0, Math.PI * .8); S.g.pose(soma(G.comemora, pular(t, 2))); rosto(S.g, null, t, 'rindo'); S.B.position.set(5.9, 0, .2);
      OURO(1); set(1, t); fundo(c, '#BFE3F7', 1, 1); cam(cm, [[0, [6.5, 1.35, -.7]], [1, [6.3, 1.3, -.55]]], [3.9, .7, 1.1], u / 3.41); return { bloom: .45, bloomT: .8 }; }; }),
  // E13 — "Viu, Gui? Viu esse?": correndo de braços abertos, sorriso banguela
  mk(356.28, 358.91, { bg: '#BFE3F7', fov: 34 }, (c) => { const S = montaCampo(c); const set = emFoco([S.d.root, S.g.root]);
    return (t, u, cm) => { const x = lerp(4.6, 3.5, u / 2.63), z = lerp(.2, 1.6, u / 2.63); S.d.place(x, z, 0, -.7); const p = soma(correr(t, 2.6, .7), G.bracosAbertos); fala(S.d, 'davi', t, 'rindo', p, 0); S.d.pose(p); S.g.place(3.2, 2.1, 0, Math.PI * .85); S.g.pose(parado(t, 1)); rosto(S.g, null, t, 'feliz');
      OURO(1); set(1, t); fundo(c, '#BFE3F7', 1, 1); cam(cm, [[0, [3.3, .85, 2.6]], [1, [3.25, .8, 2.45]]], [x, .6, z], u / 2.63); return { bloom: .45, bloomT: .8 }; }; }),
  // E14 — "Vi, foi golaço!": os dois caem na terra rindo, a bola rola pra longe
  mk(358.91, 361.08, { bg: '#BFE3F7', fov: 38 }, (c) => { const S = montaCampo(c); const set = emFoco([S.d.root, S.g.root, S.B]);
    return (t, u, cm) => { const cai = smooth(359.9, 360.5, t); S.g.place(3.2, 2.1, 0, Math.PI * .85); S.g.root.rotation.x = -cai * 1.45; S.g.root.position.y = cai * .06; const pg = cai > .1 ? rir(t, 1) : G.bracosAbertos; fala(S.g, 'gui', t, 'rindo', pg, 0, { mouth: cai > .5 ? { open: .8, smile: 1 } : undefined }); S.g.pose(pg);
      S.d.place(3.95, 1.55, 0, -.7); S.d.root.rotation.x = -cai * 1.4; S.d.root.position.y = cai * .04; S.d.pose(rir(t, 1)); rosto(S.d, null, t, 'rindo', { mouth: { open: .8, smile: 1 } }); bolaEm(S.B, t, [[359.9, 3.6, 1.5, 0], [361.08, 2.2, .2, 0]]);
      OURO(1); set(1, t); fundo(c, '#BFE3F7', 1, 1); cam(cm, [[0, [1.6, 1.8, 3.8]], [1, [1.8, 2.2, 3.6]]], [3.3, .3, 1.6], u / 2.17); return { bloom: .45, bloomT: .8 }; }; }),
  // E15 — "Foram só 20 minutos. Guarda esses 20 minutos": freeze nos dois deitados na terra (cronômetro dourado vem na tela)
  mk(361.08, 367.28, { bg: '#BFE3F7', fov: 36 }, (c) => { const S = montaCampo(c); const set = emFoco([S.d.root, S.g.root]);
    return (t, u, cm) => { S.g.place(3.2, 2.1, 0, Math.PI * .85); S.g.root.rotation.x = -1.45; S.g.root.position.y = .06; S.g.pose(rir(361.1, 1)); rosto(S.g, null, 361.1, 'rindo', { mouth: { open: .5, smile: 1 }, vivo: false });
      S.d.place(3.95, 1.55, 0, -.7); S.d.root.rotation.x = -1.4; S.d.root.position.y = .04; S.d.pose(rir(361.1, 1)); rosto(S.d, null, 361.1, 'rindo', { mouth: { open: .6, smile: 1 }, vivo: false }); S.B.position.set(2.2, 0, .2);
      OURO(1); set(1, t); fundo(c, '#BFE3F7', 1, 1); cam(cm, [[0, [5.6, 1.9, 2.6]], [1, [5.2, 1.6, 2.4]]], [3.5, .15, 1.8], u / 6.2, 0, 0); return { bloom: .5, bloomT: .75, vig: .45 }; }; }),
];
