// ATO 5 — a queda e o final (695 a 840 s): Dona Cida sobe sozinha, escorrega no degrau molhado do 3º andar, o botijão
// quica escada abaixo, o Guilherme sobe correndo (os degraus trincam), segura a avó sem quebrar, o abraço; dia 20;
// a escada espelhando o dia 0 (os dois de mão dada); o ovo quebrado de propósito na frigideira; encerramento.
import * as THREE from 'three';
import { mk, cam, camT, ator, rosto, sentar, pw } from './base.js';
import { GUI, GUILUVA, CIDA, GAS } from './gente.js';
import { escada, bot, botNaMao, subir, trincas, FH, XA, XB, ZA0, ZLAND } from './comum.js';
import { trajetoEscada, poseSubir, cozinha, salinha } from './lugares.js';
import { mochila, ovo, gema, cascas, sacolaFeira } from './objs.js';
import { naMao, respingo } from './fx2.js';
import { sprite } from './efeitos.js';
import { G, soma, vivo, treme, andar, parado, kf, kv, mix, correr, rir, acenar } from './mov.js';
import { clamp, smooth, easeOut, easeIn, lerp } from './motor/core.js';
import { cyl, sph, rb, bx, toon } from './motor/toon.js';
import { OVO_ESC } from './ato4a.js';

const QUENTE = { tint: '#FFF4E4' };
const LENTO = { tint: '#DCE4FF', sat: .72, vig: .6 };
const CIDASEM = { ...CIDA, camisa: '#7FA6C9', estampa: undefined };
const Y2 = 2 * FH;                                   // chão do 2º andar (o lance do 3º andar começa aqui)
const ESCORREGA = [XA, Y2 + .875, ZA0 - 5 * RUNZ()]; // degrau molhado
function RUNZ() { return .27; }
const T_ESC = 708.6, T_PEGA = 729.6;
/** Quanto a queda andou (câmera lenta): 0 no escorregão, 1 nos braços dele. */
const queda = (t) => clamp((t - T_ESC) / (T_PEGA - T_ESC));
/** Cida caindo de costas em câmera lenta (ou nos braços dele depois de T_PEGA). */
function cidaCai(ci, t) {
  const q = queda(t); const ease = q < .1 ? q * 2.5 * q * 4 : q; // escorrega rápido e depois flutua
  const x = XA, y = lerp(Y2 + .875, Y2 + .55, easeOut(q)) + Math.sin(Math.min(1, q * 3) * Math.PI) * .12, z = lerp(ESCORREGA[2] + .05, ZA0 - .25, easeOut(q));
  ci.root.position.set(x, y, z); ci.root.rotation.set(lerp(0, 1.15, easeOut(Math.min(1, q * 2.2))), Math.PI, 0);
  ci.pose({ shL: [70 + 30 * q, 60], shR: [70 + 30 * q, 60], elL: 20, elR: 20, hipL: [50 * q + 20, 10], hipR: [30 * q, 10], knL: 40, knR: 20, headX: -20 });
}
/** Ela deitada atravessada nos braços dele (colo): cabeça pra um lado, pernas pro outro, rosto pra cima. */
const _QB = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(new THREE.Vector3(0, .34, .94), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, .94, -.34)));
function colo(g, ci) { g.root.updateMatrixWorld(true); const h = g.root.localToWorld(new THREE.Vector3(0, .6, .3)); const q = g.root.quaternion.clone().multiply(_QB);
  const ey = new THREE.Vector3(0, 1, 0).applyQuaternion(q); ci.root.quaternion.copy(q); ci.root.position.copy(h).addScaledVector(ey, -.5); ci.sombra && (ci.sombra.visible = false); }
/** Trincas nos degraus por onde ele passa correndo (pontos x,y,z). */
function degrausTrincados(c) { const pts = []; for (let n = 0; n < 2; n++) { for (let k = 1; k < 8; k += 2) pts.push([XA, n * FH + (k + 1) * .175, ZA0 - (k + .5) * .27]); for (let k = 1; k < 8; k += 2) pts.push([XB, n * FH + 1.4 + (k + 1) * .175, ZLAND + (k + .5) * .27]); } for (let k = 1; k < 4; k += 2) pts.push([XA, Y2 + (k + 1) * .175, ZA0 - (k + .5) * .27]); return { pts, f: trincas(c, pts, { tam: .5, seed: 8 }) }; }
/** Caminho dele subindo correndo da portaria até o lance do 3º andar. */
const CAMINHO_GUI = () => [[1.4, 0, 5.0], [XA, 0, 2.3], ...trajetoEscada(0, 2, { portaria: false }), [XA, Y2, ZA0 + .05], [XA, Y2 + .175, ZA0 - .2]];
const T_CORRE = 714.2;
function guiCorre(g, t, o = {}) { const e = subir(g, CAMINHO_GUI(), t, T_CORRE, 1.5, { f: 1.4, amp: 1.5, pose: (tt, e, p) => e.fim ? null : soma(e.sobe ? soma(p, { lean: 18 }) : correr(tt, 1.6, 1.2), { shL: [-30 * Math.sin(tt * 9), 10], shR: [30 * Math.sin(tt * 9), 10] }) }); return e; }

/** Esconde o corrimão do lance A do 2º andar (atravessava o rosto dos dois no abraço). */
function semCorrimao(P) { P.g.traverse((o) => { if (o.isMesh && Math.abs(o.position.x - (XA + .55)) < .01 && o.position.y > Y2 && o.position.y < Y2 + 2.5) o.visible = false; }); }
export const ATO5 = [
  // Q1 — ela sobe com o botijão no quadril, igual no dia zero. Primeiro andar
  mk(695, 700, { bg: '#2A2420', fov: 50 }, (c) => { const P = escada(c); const ci = ator(c, CIDASEM, XA, 2.3, Math.PI); const b = bot(); ci.root.add(b); b.position.set(.24 / .84, .22 / .84, .02); b.rotation.z = -.35; b.scale.setScalar(.65 / .84);
    const path = [[XA, 0, 2.6], ...trajetoEscada(0, 1, { portaria: false })];
    return (t, u, cm) => { subir(ci, path, t, 694.6, .7, { f: 1.8, pose: (tt, e, p) => soma(p, { shL: [-6, 30], elL: 100, tilt: -5 }) }); rosto(ci, null, t, 'determinado');
      cam(cm, [[0, [1.05, 1.15, .3]], [1, [1.05, 1.3, .1]]], [[0, [-.62, 1.05, 1.5]], [1, [-.62, 1.65, .5]]], u / 5); return QUENTE; }; }),
  // Q2 — segundo andar: ofegante, parando um pouco
  mk(700, 705, { bg: '#2A2420', fov: 50 }, (c) => { const P = escada(c); const ci = ator(c, CIDASEM, XB, ZLAND, 0, FH + 1.4); const b = bot(); ci.root.add(b); b.position.set(.24 / .84, .22 / .84, .02); b.rotation.z = -.35; b.scale.setScalar(.65 / .84);
    const path = [[XB, FH + 1.4, ZLAND + .2], [XB, 2 * FH, ZA0 + .05], [XB - .1, 2 * FH, ZA0 + .6]];
    return (t, u, cm) => { const a = t - 700; const para = a > 2.2 && a < 3.6; const e = subir(ci, path, t, 700, para ? 0 : .5, { v: para ? 0 : (a < 2.2 ? .5 : .45), f: 1.2, pose: (tt, e, p) => soma(para ? parado(tt, 3) : p, { shL: [-6, 30], elL: 100, tilt: -5 }, { lean: 10 }, para ? { shR: [30, 30], elR: 60 } : {}) });
      rosto(ci, null, t, para ? 'sono' : 'determinado', { mouth: { open: .25 + .1 * Math.sin(t * 8) } });
      cam(cm, [[0, [XA + .2, 2 * FH + 1.5, ZA0 + .9]], [1, [XA + .25, 2 * FH + 1.45, ZA0 + .8]]], [[0, [XB, FH + 1.9, -.2]], [1, [XB - .1, 2 * FH + .9, 1.1]]], u / 5); return QUENTE; }; }),
  // Q3 — terceiro andar: close no chinelo pisando num degrau molhado
  mk(705, 708.6, { bg: '#2A2420', fov: 36 }, (c) => { const P = escada(c); const ci = ator(c, CIDASEM, XA, ZA0, Math.PI, Y2); const b = bot(); ci.root.add(b); b.position.set(.24 / .84, .22 / .84, .02); b.rotation.z = -.35; b.scale.setScalar(.65 / .84);
    const poca = new THREE.Mesh(new THREE.CircleGeometry(.2, 18), new THREE.MeshToonMaterial({ color: '#BFE0F4', transparent: true, opacity: .6, emissive: '#FFFFFF', emissiveIntensity: .25 })); poca.rotation.x = -Math.PI / 2; poca.scale.set(1.6, .6, 1); poca.position.set(XA - .1, Y2 + .876, ESCORREGA[2]); c.add(poca);
    const path = [[XA, Y2, ZA0 + .2], [XA, Y2 + 1.4, ZLAND - .05]];
    return (t, u, cm) => { subir(ci, path, t, 705.2, .36, { f: 1.1, pose: (tt, e, p) => soma(p, { shL: [-6, 30], elL: 100, tilt: -5 }) }); rosto(ci, null, t, 'sono');
      cam(cm, [[0, [XA + .12, Y2 + 2.2, ESCORREGA[2] - .75]], [1, [XA + .12, Y2 + 2.2, ESCORREGA[2] - .7]]], [[0, [XA, Y2 + .85, ESCORREGA[2] + .9]], [1, [XA, Y2 + 1.2, ESCORREGA[2] + .35]]], u / 3.6, 0, .2); return { ...QUENTE }; }; }),
  // Q4 — o pé escorrega. Câmera lenta: o botijão escapa e quica degrau por degrau (bang, bang, bang); ela cai pra trás, braços abertos
  mk(708.6, 711, { bg: '#2A2420', fov: 46 , perto: true }, (c) => { const P = escada(c); const ci = ator(c, CIDASEM, XA, ZA0, Math.PI, Y2); const b = bot(); c.add(b);
    return (t, u, cm) => { cidaCai(ci, t); rosto(ci, null, t, 'medo', { mouth: { open: .5 } }); const k = (t - T_ESC) * 1.6; const st = Math.min(5, Math.floor(k)); const f = k - Math.floor(k);
      b.position.set(XA + .2, Y2 + .875 - st * .175 + Math.sin(f * Math.PI) * .25 + .05, ESCORREGA[2] + .05 + st * .27 + f * .27); b.rotation.set(k * 1.3, 0, k * .7);
      cam(cm, [[0, [1.05, Y2 + 1.95, 1.4]], [1, [1.05, Y2 + 1.9, 1.55]]], [[0, [XA, Y2 + 1.35, ESCORREGA[2]]], [1, [XA, Y2 + 1.05, ESCORREGA[2] + .4]]], u / 2.4); return LENTO; }; }),
  // Q5 — corte paralelo: Guilherme entrando na portaria com a mochila; ouve o barulho do botijão
  mk(711, 713, { bg: '#2A2420', fov: 38 }, (c) => { const P = escada(c); const g = ator(c, GUILUVA, 1.6, 6.6, Math.PI); const mo = mochila('#2E6FB8'); g.root.add(mo); mo.position.set(0, .72, -.22);
    return (t, u, cm) => { const a = t - 711; const anda = clamp(a / .8); g.place(1.6, lerp(6.6, 5.9, anda), 0, Math.PI); const ouve = smooth(1.0, 1.4, a); g.pose(anda < 1 ? andar(t, { f: 1.7, maos: 'bolso' }) : soma(parado(t, 2), { headX: -24 * ouve, headY: 15 * ouve })); rosto(g, null, t, ouve > .5 ? 'surpreso' : 'neutro', { look: [0, -.6 * ouve] });
      P.portaRua.rotation.y = -1.2 * (1 - smooth(.6, 1.2, a)); cam(cm, [[0, [1.0, 1.25, 4.0]], [1, [1.1, 1.2, 4.2]]], [[0, [1.6, 1.05, 6.2]], [1, [1.6, 1.15, 5.9]]], u / 2); return QUENTE; }; }),
  // Q6 — "Vó!"
  mk(713, 714.2, { bg: '#2A2420', fov: 32 }, (c) => { const P = escada(c); const g = ator(c, GUILUVA, 1.6, 5.9, Math.PI); const mo = mochila('#2E6FB8'); g.root.add(mo); mo.position.set(0, .72, -.22);
    return (t, u, cm) => { g.pose(soma(parado(t, 2), { headX: -18, lean: -6, shL: [20, 20], shR: [20, 20] })); rosto(g, 'gui', t, 'medo', { look: [0, -.4] }); cam(cm, [[0, [1.45, 1.05, 4.4]], [1, [1.5, 1.02, 4.5]]], [[0, [1.6, 1.15, 5.9]], [1, [1.6, 1.15, 5.9]]], u / 1.2); return QUENTE; }; }),
  // Q7 — a subida: ele sobe correndo; cada passo trinca o degrau; câmera lenta total, som abafado, só o coração
  mk(714.2, 718.4, { bg: '#2A2420', fov: 50 , perto: true }, (c) => { const P = escada(c); const g = ator(c, GUILUVA, 1.4, 5.0, Math.PI); const D = degrausTrincados(c);
    return (t, u, cm) => { const e = guiCorre(g, t); D.f(clamp(e.prog * 1.25)); rosto(g, null, t, 'determinado');
      cam(cm, [[0, [1.05, 1.0, .1]], [1, [1.05, 1.4, -.2]]], [[0, [-.3, .9, 2.6]], [1, [-.62, 1.4, .4]]], u / 4.2); return LENTO; }; }),
  // Q8 — Dona Cida no ar, caindo (câmera lenta)
  mk(718.4, 722, { bg: '#2A2420', fov: 44 , perto: true }, (c) => { const P = escada(c); const ci = ator(c, CIDASEM, XA, ZA0, Math.PI, Y2); const b = bot(); b.position.set(XA + .2, Y2 + .05, ZA0 + .5); c.add(b);
    return (t, u, cm) => { cidaCai(ci, t); rosto(ci, null, t, 'medo', { blink: .6 }); ci.root.updateMatrixWorld(true); const cp = ci.root.localToWorld(new THREE.Vector3(0, .6, 0)); cam(cm, [[0, [.95, Y2 + 1.45, .75]], [1, [.95, Y2 + 1.45, .95]]], [cp.x, cp.y, cp.z], u / 3.6, 0, .2); return LENTO; }; }),
  // Q9 — "Seis mil e quinhentas toneladas... se segurar forte demais, quebra ela; se segurar fraco, ela cai" — ele chega e estica os braços
  mk(722, 726, { bg: '#2A2420', fov: 56 , perto: true }, (c) => { const P = escada(c); const g = ator(c, GUILUVA, 1.4, 5.0, Math.PI); const D = degrausTrincados(c); const ci = ator(c, CIDASEM, XA, ZA0, Math.PI, Y2);
    return (t, u, cm) => { const e = guiCorre(g, t); D.f(clamp(e.prog * 1.25)); rosto(g, null, t, 'determinado'); cidaCai(ci, t); rosto(ci, null, t, 'medo', { blink: .7 });
      ci.root.updateMatrixWorld(true); const cp = ci.root.localToWorld(new THREE.Vector3(0, .75, 0)); cam(cm, [[0, [.95, Y2 + 2.1, 2.85]], [1, [.9, Y2 + 2.0, 2.75]]], [[0, [cp.x + .3, cp.y - .1, cp.z - .3]], [1, [cp.x + .25, cp.y - .1, cp.z - .25]]], u / 4); return LENTO; }; }),
  mk(726, 730.6, { bg: '#2A2420', fov: 46 , perto: true, limpa: false }, (c) => { const P = escada(c); const g = ator(c, GUILUVA, 1.4, 5.0, Math.PI); const D = degrausTrincados(c); D.f(1); const ci = ator(c, CIDASEM, XA, ZA0, Math.PI, Y2);
    const fant = new THREE.Mesh(new THREE.SphereGeometry(.22, 24, 16), new THREE.MeshBasicMaterial({ color: '#FFF6E0', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })); fant.scale.set(1, 1.3, 1); c.add(fant);
    return (t, u, cm) => { const e = guiCorre(g, t); const est = smooth(727, 728.6, t); if (e.fim) { g.place(XA, ZA0 - .15, Y2 + .175, Math.PI); g.pose(soma(mix(parado(t, 2), G.maosFrente, est), { shL: [10 * est, 10 * est], shR: [10 * est, 10 * est], elL: 30 * est, elR: 30 * est })); }
      rosto(g, null, t, 'determinado'); cidaCai(ci, t); rosto(ci, null, t, 'medo', { blink: .8 });
      fant.position.set(XA, Y2 + 1.0, ZA0 - .55); fant.material.opacity = .45 * Math.sin(clamp((t - 728.4) / 1.1) * Math.PI);
      cam(cm, [[0, [.9, Y2 + 1.35, .3]], [1, [.9, Y2 + 1.35, .45]]], [[0, [XA, Y2 + .85, 1.05]], [1, [XA, Y2 + .95, 1.2]]], u / 4.6, 0, .2); return { ...LENTO, bloom: .4, bloomT: .88 }; }; }),
  // Q10 — ele segura. Silêncio total. Ela abre os olhos devagar, inteira, no colo dele
  mk(730.6, 736, { bg: '#2A2420', fov: 36 , perto: true }, (c) => { const P = escada(c); const g = ator(c, GUILUVA, XA, ZA0 - .15, Math.PI, Y2 + .175); const ci = ator(c, CIDASEM, XA, ZA0, Math.PI, Y2); ci.fixo = true; g.fixo = true;
    return (t, u, cm) => { g.pose(soma(parado(t, 2, .3), G.abraco, { lean: 4, elL: 70, elR: 70 }, treme(t, .25))); rosto(g, null, t, 'preocupado', { look: [0, .5] });
      colo(g, ci);
      ci.pose({ shL: [30, 20], shR: [50, 10], elL: 50, elR: 70, hipL: [80, 4], hipR: [80, 4], knL: 85, knR: 85, headX: 8 }); const abre = smooth(732.5, 734.5, t); rosto(ci, null, t, abre > .6 ? 'surpreso' : 'neutro', { blink: 1 - abre, lento: .3 });
      cam(cm, [[0, [XA + .42, Y2 + 2.25, -.05]], [1, [XA + .38, Y2 + 2.15, .05]]], [[0, [XA, Y2 + .85, 1.2]], [1, [XA, Y2 + .85, 1.15]]], u / 5.4); return { tint: '#F0F0FF', sat: .9 }; }; }),
  // Q11 — "Te peguei, vó." (emocionado, tremendo)
  mk(736, 738, { bg: '#2A2420', fov: 32 , perto: true }, (c) => { const P = escada(c); const g = ator(c, GUILUVA, XA, ZA0 - .15, Math.PI, Y2 + .175); const ci = ator(c, CIDASEM, XA, ZA0, Math.PI, Y2); ci.fixo = true; g.fixo = true;
    return (t, u, cm) => { g.pose(soma(parado(t, 2, .3), G.abraco, { lean: 4, elL: 70, elR: 70, headX: 14 }, treme(t, .35))); rosto(g, 'gui', t, 'triste', { lagrima: true, look: [0, .6] });
      colo(g, ci); ci.pose({ shL: [30, 20], shR: [50, 10], elL: 50, elR: 70, hipL: [80, 4], hipR: [80, 4], knL: 85, knR: 85, headX: 8 }); rosto(ci, null, t, 'surpreso');
      cam(cm, [[0, [-.35, Y2 + 1.7, -.75]], [1, [-.38, Y2 + 1.68, -.7]]], [[0, [XA, Y2 + 1.4, .4]], [1, [XA, Y2 + 1.4, .4]]], u / 2); return { tint: '#F0F0FF', sat: .95 }; }; }),
  // Q12 — ele coloca ela sentada no degrau, devagar; ela olha pra ele; ele abre os braços com medo; ela abraça ele primeiro
  mk(738, 746, { bg: '#2A2420', fov: 50 , perto: true, limpa: false }, (c) => { const P = escada(c); semCorrimao(P); const ci = ator(c, CIDASEM, XA, ZA0 - .5, 0, Y2); const g = ator(c, GUILUVA, XA, ZA0 + .1, Math.PI, Y2);
    return (t, u, cm) => { const a = t - 738; sentar(ci, XA, ZA0 - .45, 0, Y2 + .35 + .1); ci.root.position.y = Y2 + .175 + .175 - .28 * .84 + .02;
      const abre = smooth(1.8, 2.8, a), abr = smooth(3.6, 4.6, a); g.place(XA, ZA0 + .36, Y2, Math.PI); g.pose(soma(G.ajoelhado, mix(mix({}, soma(G.bracosAbertos, { shL: [40, 40], shR: [40, 40] }), abre), G.abraco, abr), treme(t, .3 * abre * (1 - abr)), { lean: 3 * abr }));
      ci.pose(soma({ bob: -.17, hipL: [80, 4], hipR: [80, 4], knL: 80, knR: 80 }, mix({ shL: [20, 10], shR: [20, 10], elL: 30, elR: 30 }, G.abraco, smooth(3.3, 4.2, a)), { lean: 2 * abr })); rosto(ci, null, t, a > 3 ? 'feliz' : 'neutro', { lagrima: a > 3 });
      rosto(g, null, t, abr > .5 ? 'triste' : 'medo', { lagrima: true }); const ang = a / 8 * .9;
      cam(cm, [[0, [.8, Y2 + 1.3, 1.15]], [1, [.75, Y2 + 1.25, 1.3]]], [[0, [XA, Y2 + .8, 1.3]], [1, [XA, Y2 + .82, 1.32]]], u / 8, 0, .3); return { tint: '#FFF0E4' }; }; }),
  // Q13 — "Falei que você não era fraco!" — a câmera gira devagar em volta dos dois; nada quebra; lá embaixo, o botijão parado
  mk(746, 754, { bg: '#2A2420', fov: 50 , perto: true, limpa: false }, (c) => { const P = escada(c); semCorrimao(P); const ci = ator(c, CIDASEM, XA, ZA0 - .45, 0, Y2); const g = ator(c, GUILUVA, XA, ZA0 + .36, Math.PI, Y2); const b = bot(); b.position.set(-.3, Y2 - FH + FH, ZA0 + .9); b.rotation.z = 1.4; b.position.y = Y2 + .17; c.add(b);
    return (t, u, cm) => { ci.root.position.set(XA, Y2 + .175 + .175 - .28 * .84 + .02, ZA0 - .45); ci.root.rotation.y = 0; ci.sombra.visible = false; g.pose(soma(G.ajoelhado, G.abraco, { lean: 3 }, vivo(t, 2, .3))); ci.pose(soma({ bob: -.17, hipL: [80, 4], hipR: [80, 4], knL: 80, knR: 80 }, G.abraco, { lean: 2 }, rir(t, .4)));
      rosto(ci, 'cida', t, 'feliz', { lagrima: true }); rosto(g, null, t, 'feliz', { lagrima: true, blink: 1 }); const ang = 1.6 + (t - 746) / 8 * .8;
      cam(cm, [[0, [.75, Y2 + 1.25, 1.5]], [1, [.65, Y2 + 1.2, 1.35]]], [[0, [XA, Y2 + .82, 1.3]], [1, [XA, Y2 + .84, 1.3]]], u / 8, 0, .3); return { tint: '#FFF0E4', bloom: .35 }; }; }),
  // D20 — dia 20: "Cinquenta e duas mil toneladas, o peso do Titanic..." — os dois no sofa, ela com a cabeça no ombro dele
  mk(754, 762, { bg: '#3A3028', fov: 38 }, (c) => { const S = salinha(c); S.manta.visible = false; const g = ator(c, GUILUVA, -.28, -1.05, 0); sentar(g, -.28, -1.05, 0, .45); const ci = ator(c, CIDASEM, -1.04, -1.05, 0); sentar(ci, -1.04, -1.05, 0, .45);
    return (t, u, cm) => { g.pose({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, shL: [30, 30], elL: 40, shR: [20, 8], elR: 50, lean: -6 }); ci.pose({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, shL: [20, 8], elL: 50, shR: [30, 10], elR: 60, tilt: -8, headZ: -10, lean: -6 });
      rosto(g, null, t, 'feliz', { look: [0, 0] }); rosto(ci, null, t, 'feliz', { blink: 1 }); cam(cm, [[0, [.9, 1.5, 1.6]], [1, [.7, 1.3, 1.3]]], [[0, [-.65, .9, -1.0]], [1, [-.65, .9, -1.0]]], u / 8); return { bloom: .3, tint: '#FFE8D0' }; }; }),
  mk(762, 770, { bg: '#3A3028', fov: 32 }, (c) => { const S = salinha(c); S.manta.visible = false; const g = ator(c, GUILUVA, -.28, -1.05, 0); sentar(g, -.28, -1.05, 0, .45); const ci = ator(c, CIDASEM, -1.04, -1.05, 0); sentar(ci, -1.04, -1.05, 0, .45);
    return (t, u, cm) => { g.pose({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, shL: [30, 30], elL: 40, shR: [20, 8], elR: 50, lean: -6 }); ci.pose({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, shL: [20, 8], elL: 50, shR: [30, 10], elR: 60, tilt: -8, headZ: -10, lean: -6 });
      rosto(g, null, t, 'feliz', { smile: .5 }); rosto(ci, null, t, 'feliz', { blink: 1 }); cam(cm, [[0, [-.2, 1.15, .2]], [1, [-.3, 1.12, .1]]], [[0, [-.6, .95, -1.05]], [1, [-.62, .95, -1.05]]], u / 8); return { bloom: .3, tint: '#FFE8D0' }; }; }),
  // E1 — escada, espelho do dia 0: o moço do gás deixa o botijão; os dois esperando
  mk(770, 774.4, { bg: '#2A2420', fov: 38 }, (c) => { const P = escada(c); const gas = ator(c, GAS, 1.6, 7.0, Math.PI); const bm = botNaMao(gas, 'R', .5); const bc = bot(); bc.position.set(.85, 0, 4.25); c.add(bc); const g = ator(c, GUILUVA, -.1, 3.6, .35); const ci = ator(c, CIDASEM, -.55, 3.7, .6); const sf = sacolaFeira(); sf.position.set(0, -.2, 0); ci.hands.R.add(sf);
    return (t, u, cm) => { const a = t - 770; const ida = clamp(a / 1.3), volta = clamp((a - 2.4) / 1.4); gas.place(lerp(1.6, 1.0, ida) + .5 * volta, lerp(7.0, 4.75, ida) + 2.3 * volta, 0, volta > 0 ? .15 : Math.PI + .25);
      gas.pose(a < 1.3 || volta > 0 ? andar(t, { f: 1.9 }) : soma(parado(t, 1), { lean: 40, bob: -.1, knL: 40, knR: 40, hipL: [35, 6], hipR: [35, 6], shR: [55, 8], elR: 5 })); bm.visible = a < 1.85; bc.visible = a >= 1.85; bm.prumo(t); rosto(gas, null, t, 'feliz');
      g.pose(soma(parado(t, 2), G.maosBolso)); rosto(g, null, t, 'feliz'); ci.pose(parado(t, 3)); rosto(ci, null, t, 'feliz'); P.portaRua.rotation.y = -1.2 * (smooth(0, .4, a) * (1 - smooth(.9, 1.3, a)) + smooth(2.9, 3.2, a));
      cam(cm, [[0, [-.85, 1.55, 6.7]], [1, [-.7, 1.5, 6.4]]], [[0, [.5, .85, 4.1]], [1, [.4, .8, 4.0]]], u / 4.4); return QUENTE; }; }),
  // E2 — ele pega o botijão com uma mão, leve, sem esforço; com a outra, segura a mão da Dona Cida
  mk(774.4, 779.6, { bg: '#2A2420', fov: 36, limpa: false }, (c) => { const P = escada(c); const g = ator(c, GUILUVA, -.1, 3.6, .35); const ci = ator(c, CIDASEM, -.55, 3.7, .6); const sf = sacolaFeira(); sf.position.set(0, -.2, 0); ci.hands.R.add(sf); const bc = bot(); bc.position.set(.85, 0, 4.25); c.add(bc); const bm = botNaMao(g, 'R', .6);
    return (t, u, cm) => { const a = t - 774.4; const vai = clamp(a / 1.2); g.place(lerp(-.1, .55, vai), lerp(3.6, 3.95, vai), 0, .35); const pega = kv(a, [[1.2, 0], [1.6, 1], [2.0, 0]]); const volta = clamp((a - 2.1) / 1.2);
      if (a > 2.1) g.place(lerp(.55, -.25, volta), lerp(3.95, 3.55, volta), 0, lerp(.35, Math.PI + .4, smooth(0, .5, volta))); bm.visible = a > 1.6; bc.visible = a <= 1.6; bm.prumo(t);
      const mao = smooth(3.4, 4.0, a); g.pose(vai < 1 || (volta > 0 && volta < 1) ? andar(t, { f: 1.7 }) : soma(parado(t, 2), mix({}, { lean: 30, knL: 25, knR: 25, hipL: [25, 4], hipR: [25, 4], shR: [50, 6], elR: 5 }, pega), { shL: [25 * mao, -10 * mao], elL: 15 })); rosto(g, null, t, 'feliz');
      ci.place(-.55, 3.7, 0, lerp(.6, Math.PI + .4, smooth(2.6, 3.2, a))); ci.pose(soma(parado(t, 3), { shL: [25 * mao, -10 * mao], elL: 15 })); rosto(ci, null, t, 'feliz', { smile: .5 });
      cam(cm, [[0, [1.9, 1.25, 5.6]], [1, [1.7, 1.2, 5.4]]], [[0, [.3, .75, 3.8]], [1, [-.3, .8, 3.5]]], u / 5.2); return QUENTE; }; }),
  // E3 — mesmo enquadramento exato do dia 0: câmera de baixo, mesma lâmpada piscando; os dois sobem juntos, degrau por degrau, no ritmo dela
  mk(779.6, 791, { bg: '#2A2420', fov: 50, limpa: false }, (c) => { const P = escada(c); const g = ator(c, GUILUVA, XA + .22, 2.3, Math.PI); const ci = ator(c, CIDASEM, XA - .22, 2.3, Math.PI); const bm = botNaMao(g, 'R', .6); const sf = sacolaFeira(); sf.position.set(0, -.2, 0); ci.hands.R.add(sf);
    const pth = (dx) => [[XA + dx, 0, 2.6], ...trajetoEscada(0, 1, { portaria: false }).map(([x, y, z]) => [x + (Math.abs(x - XA) < .3 ? dx : Math.abs(x - XB) < .3 ? -dx : 0), y, z])];
    return (t, u, cm) => { subir(g, pth(.2), t, 779.6, .32, { f: .9, pose: (tt, e, p) => soma(p, { shL: [25, -12], elL: 15 }) }); subir(ci, pth(-.22), t, 779.6, .32, { f: .9, pose: (tt, e, p) => soma(p, { shR: [25, -12], elR: 15 }) }); bm.prumo(t);
      const fala = t > 786.5 && t < 789.5; rosto(ci, null, t, 'feliz', { mouth: fala ? { open: .3 + .25 * Math.abs(Math.sin(t * 9)) } : undefined, look: [.5, 0] }); rosto(g, null, t, t > 789.2 ? 'rindo' : 'feliz', { look: [-.4, 0] });
      if (t > 789.2) g.pose(soma(poseSubir(t, .9), rir(t, .6), { shL: [25, -12], elL: 15 }));
      const mp = g.root.position.clone().add(ci.root.position).multiplyScalar(.5); cam(cm, [[0, [.6, 2.15, 2.85]], [.3, [.4, 2.0, 2.78]], [1, [.3, 2.05, 2.7]]], [mp.x, mp.y + .9, mp.z], u / 11.4, 0, .3); return QUENTE; }; }),
  // K1 — cozinha, última imagem: ela conecta o botijão e acende o fogo de primeira. Fwoosh.
  mk(791, 796.4, { bg: '#3A3028', fov: 38 }, (c) => { const K = cozinha(c, { hora: 'tarde' }); const ci = ator(c, CIDASEM, -1.05, -.55, Math.PI); const g = ator(c, GUILUVA, .2, .5, -Math.PI / 2 - .3); const fogo = chama(c, -1.19, .91, -1.12);
    return (t, u, cm) => { const a = t - 791; ci.pose(kf(a, [[0, soma(G.ajoelhado, { lean: 22, shL: [60, 10], elL: 60, shR: [55, 0], elR: 70 + Math.sin(t * 9) * 25 })], [2.0, soma(G.ajoelhado, { lean: 22, shL: [60, 10], elL: 60, shR: [55, 0], elR: 70 })], [2.6, soma(parado(t, 3), { lean: 18, shR: [50, 4], elR: 50 })], [4.4, soma(parado(t, 3), { lean: 4, shR: [30, 10], elR: 60 })]]));
      rosto(ci, null, t, a > 3.9 ? 'feliz' : 'determinado'); fogo(t, smooth(3.8, 4.0, a)); g.pose(soma(parado(t, 2), G.maosBolso)); rosto(g, null, t, 'feliz', { look: [-.5, 0] });
      cam(cm, [[0, [.25, 1.25, .55]], [1, [.05, 1.15, .35]]], [[0, [-1.2, .75, -1.0]], [1, [-1.2, .85, -1.05]]], u / 5.4); return { ...QUENTE, bloom: .35 }; }; }),
  // K2 — ele pega um ovo da bandeja, olha pra ele, sorri e quebra na frigideira de propósito, com cuidado
  mk(796.4, 803.6, { bg: '#3A3028', fov: 32, limpa: false }, (c) => { const K = cozinha(c, { hora: 'tarde' }); const ci = ator(c, CIDASEM, -1.3, -.1, .6); const g = ator(c, GUILUVA, -.75, -.6, Math.PI * .85); const fogo = chama(c, -1.19, .91, -1.12);
    const fr = new THREE.Group(); fr.position.set(-1.19, .93, -1.12); c.add(fr); fr.add(cyl(.14, .12, .04, '#2A2A30', 0, .02, 0, { seg: 20, out: .005 })); fr.add(bx(.25, .02, .03, '#2A2A30', .25, .03, 0)); const gm = gema(.05); gm.position.set(0, .042, 0); fr.add(gm); gm.visible = false;
    const o = ovo(); o.scale.setScalar(OVO_ESC); c.add(o); const cs = cascas(3); cs.scale.setScalar(OVO_ESC); c.add(cs);
    return (t, u, cm) => { const a = t - 796.4; fogo(t, 1); const olha = smooth(1.0, 1.6, a) * (1 - smooth(3.6, 4.0, a)); const quebra = a > 5.0;
      g.pose(soma(parado(t, 2), { shR: [lerp(40, 70, olha), 0], elR: lerp(40, 90, olha), headX: 12, shL: [quebra ? 0 : 50 * smooth(4, 4.6, a), 0], elL: 40 }, a > 4 ? { shR: [62, -10], elR: 50, lean: 10 } : {})); rosto(g, null, t, a > 2 ? 'feliz' : 'neutro', { look: [0, .6], smile: a > 2.2 ? .7 : undefined });
      o.visible = !quebra; naMao(o, g, 'R', [0, -.02, .06], false); gm.visible = quebra; gm.scale.setScalar(Math.min(1, (a - 5) * 4)); cs.visible = quebra; cs.position.set(-.95, .87, -1.2);
      ci.pose(soma(parado(t, 3), G.bracoCruzado)); rosto(ci, null, t, 'feliz', { smile: .8 }); cam(cm, [[0, [-.2, 1.45, .3]], [.45, [-.35, 1.6, .4]], [1, [-1.0, 2.0, .55]]], [[0, [-.75, 1.0, -.6]], [.45, [-.8, 1.0, -.7]], [1, [-1.05, .95, -.95]]], u / 7.2, 0, 0); return { ...QUENTE, bloom: .35 }; }; }),
  // K3 — plano aberto dos dois na cozinha, luz quente (o contador aparece uma última vez e some com um "tum")
  mk(803.6, 812, { bg: '#3A3028', fov: 40 }, (c) => { const K = cozinha(c, { hora: 'tarde' }); const ci = ator(c, CIDASEM, -1.25, -.15, .7); const g = ator(c, GUILUVA, -.75, -.6, Math.PI * .85); const fogo = chama(c, -1.19, .91, -1.12);
    return (t, u, cm) => { fogo(t, 1); g.pose(soma(parado(t, 2), { shR: [55, -6], elR: 40 + 15 * Math.sin(t * 2), lean: 6 })); ci.pose(soma(parado(t, 3), rir(t, .4), G.bracoCruzado)); rosto(g, null, t, 'feliz'); rosto(ci, null, t, 'rindo');
      cam(cm, [[0, [1.25, 1.7, 1.45]], [1, [1.05, 1.5, 1.25]]], [[0, [-.7, .9, -.6]], [1, [-.8, .9, -.6]]], u / 8.4); return { ...QUENTE, bloom: .4, tint: '#FFE8C8' }; }; }),
  // C1 — encerramento: close no Guilherme olhando direto pra câmera
  mk(812, 822, { bg: '#3A3028', fov: 30 }, (c) => { const K = cozinha(c, { hora: 'tarde' }); K.cad1.visible = false; const g = ator(c, GUILUVA, .15, 1.2, 0);
    return (t, u, cm) => { g.pose(soma(parado(t, 2, .6), G.maosBolso)); rosto(g, null, t, 'feliz', { smile: .5 }); cam(cm, [[0, [.15, 1.15, 3.6]], [1, [.15, 1.12, 3.3]]], [[0, [.15, 1.08, 1.2]], [1, [.15, 1.08, 1.2]]], u / 10, 0, .3); return { tint: '#FFE8C8', blur: 0 }; }; }),
  // C2 — ele de luva acenando bem devagar, com o botão de inscrever do lado
  mk(822, 840, { bg: '#3A3028', fov: 34 }, (c) => { const K = cozinha(c, { hora: 'tarde' }); K.cad1.visible = false; const g = ator(c, GUILUVA, .55, 1.15, -.25);
    return (t, u, cm) => { g.pose(soma(parado(t, 2, .6), acenar(t * .45, .8))); rosto(g, null, t, 'feliz', { smile: .6 }); cam(cm, [[0, [-.1, 1.2, 4.0]], [1, [-.05, 1.18, 3.8]]], [[0, [-.25, 1.0, 1.1]], [1, [-.2, 1.0, 1.1]]], u / 18, 0, .3); return { tint: '#FFE8C8', blur: 0, exposure: t > 837.5 ? 1 - smooth(837.5, 840, t) : 1 }; }; }),
];
/** Anel de chama azul numa boca do fogão (on 0..1). */
function chama(c, x, y, z) { const G2 = new THREE.Group(); G2.position.set(x, y, z); c.add(G2); const C = [];
  for (let i = 0; i < 12; i++) { const m = new THREE.Mesh(new THREE.ConeGeometry(.012, .05, 6), new THREE.MeshBasicMaterial({ color: i % 2 ? '#5AA8FF' : '#2E6FFF', transparent: true, opacity: .9 })); const a = i / 12 * 6.283; m.position.set(Math.cos(a) * .05, .025, Math.sin(a) * .05); G2.add(m); C.push(m); }
  const L = new THREE.PointLight('#5A8CFF', 0, 1.5, 1.6); L.position.set(x, y + .15, z); c.add(L);
  return (t, on) => { G2.visible = on > .01; const boom = on < 1 ? 1 + 1.8 * Math.sin(on * Math.PI) : 1; C.forEach((m, i) => { m.scale.set(boom, (.8 + .3 * Math.sin(t * 20 + i * 1.7)) * boom, boom); }); L.intensity = 1.2 * on * boom; }; }
