// ATO 8 — dia 7 (531 a 646 s): a final, o foco mais profundo, as 14 ligações em paralelo com a escola do Davi, o xeque-mate,
// as chamadas perdidas, a corrida até a escola, a sala vazia, o Davi no canto e o Guilherme sentando no chão.
import * as THREE from 'three';
import { frenteDe, mk, cam, ator, rosto, fala, sentar, icone, UF, emFoco, fundo, celular, particulas, papelPicado, vibra, soma, vivo, parado, andar, correr, G, sentado, clamp, smooth, lerp, easeIO, easeOut, easeIn, kv, naMao, rir, pular, cronometro } from './cf.js';
import { montaSalao, salaoUpd, celNoBolso, HS } from './salao_cena.js';
import { montaCasa } from './casa_cena.js';
import { vazio, mercado, salaDavi, corredorDavi } from './lugares_foco.js';
import { rua } from './lugares2.js';
import { GUI, DAVI, ROSE, PROFA, PROFEF, familia, crianca2, aluno, pessoa } from './elenco_foco.js';
import { folha, tabuleiro, peca, prova, trofeu, violao, bola, cadeirinha } from './pecas_foco.js';
import { mochila, carroPop } from './objs.js';
import { fantasma } from './pecas.js';
import { rb, bx, cyl, sph, toon, ctex, toonTex } from './motor/toon.js';

const ESC = { bg: '#121218', far: 160 };
const guiJoga = (S, t, emo = 'determinado', o = {}) => { S.gui.pose(sentado(soma({ shR: [48, 6], elR: 96, shL: [44, 6], elL: 98, lean: 12, headX: 16 }, o.parado ? {} : vivo(t, 1, .3)))); rosto(S.gui, null, t, emo, { look: [0, .45], vivo: !o.parado }); };
const advJoga = (S, t, emo = 'determinado') => { S.adv.pose(sentado(soma({ shR: [40, 6], elR: 100, shL: [30, 6], elL: 90, lean: 10, headX: 14 }, vivo(t, 4, .4)))); rosto(S.adv, null, t, emo, { look: [0, .4] }); };
/** Lances do jogo da final (de, para, tempo). */
const JOGO = [['e2', 'e4', 567.3], ['c7', 'c5', 567.6], ['g1', 'f3', 567.9], ['d7', 'd6', 568.2], ['d2', 'd4', 568.5], ['c5', 'd4', 568.8], ['f3', 'd4', 569.1], ['a8', 'a3', 569.6], ['b2', 'a3', 570.3], ['d8', 'a5', 570.8], ['c1', 'd2', 571.3]];
function lances(T, t, L, dur = .3) { for (const [de, para, t0] of L) { const p = T.P[de]; if (!p) continue; const u = clamp((t - t0) / dur); if (u <= 0) continue; T.move(p, de, para, u); if (u >= 1) { if (T.P[para] && T.P[para] !== p) T.P[para].visible = false; } } }
/** Tabuleiro gigante no vazio + linhas brancas (jogadas futuras). */
function montaGigante(c, o = {}) { const V = vazio(c, { cor: '#C8D4FF' }); const T = tabuleiro(.045); T.g.scale.setScalar(o.e || 40); c.add(T.g); const L = [];
  for (let i = 0; i < 8; i++) { const a = new THREE.Vector3((i % 4 - 1.5) * 5, 1, -6 + (i >> 1) * 3), b = new THREE.Vector3(((i + 2) % 4 - 1.5) * 5, 1, -4 + ((i + 1) >> 1) * 3); const cv = new THREE.QuadraticBezierCurve3(a, a.clone().add(b).multiplyScalar(.5).add(new THREE.Vector3(0, 4, 0)), b);
    const m = new THREE.Mesh(new THREE.TubeGeometry(cv, 24, .06, 6), new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: .8 })); c.add(m); L.push(m); }
  return { V, T, L }; }

export const ATO8 = [
  // I1 — "Dia sete, dez da manhã. Final do campeonato estadual": câmera aérea descendo pelas 50 mesas
  mk(530.80, 534.60, { ...ESC, fov: 44 }, (c) => { const S = montaSalao(c);
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t); salaoUpd(S, t); const k = easeIO(u / 3.8); cam(cm, [lerp(-9, -5, k), lerp(11, 6, k), lerp(9, 7, k)], [0, 0, lerp(-3, -1, k)], u / 3.8, 0, 0); return { vig: .4 }; }; }),
  // I2 — "Um salão grande com 50 mesas, mas só uma importando: a da final"
  mk(534.60, 539.05, { ...ESC, fov: 40 }, (c) => { const S = montaSalao(c);
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t); salaoUpd(S, t); const k = easeIO(u / 4.45); cam(cm, [lerp(-5, -1.6, k), lerp(6, 1.8, k), lerp(7, 2.2, k)], [0, lerp(0, .95, k), 0], u / 4.45, 0, 0); return { vig: .45 }; }; }),
  // I3 — "Silêncio total, relógio de xadrez batendo"
  mk(539.05, 542.04, { ...ESC, fov: 28, perto: true }, (c) => { const S = montaSalao(c, { semGente: true });
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t); salaoUpd(S, t); const s = 600 - Math.floor((t - 539) * 1); S.rel.userData.set('10:00', '09:' + String(59 - Math.floor((t - 539.05) * 2) % 60).padStart(2, '0'), Math.floor(t) % 2);
      cam(cm, [[0, [.95, 1.25, .35]], [1, [.82, 1.2, .25]]], [.44, 1.09, -.02], u / 2.99, 0, 0); return { vig: .55, exposure: .9 }; }; }),
  // I4 — "e do outro lado do tabuleiro, um adversário de 19 anos que nunca tinha perdido uma final": terno, fones no pescoço, arruma as peças sem olhar
  mk(542.04, 548.64, { ...ESC, fov: 32 }, (c) => { const S = montaSalao(c);
    return (t, u, cm) => { guiJoga(S, t); salaoUpd(S, t); S.adv.pose(sentado({ shR: [50 + Math.sin(t * 3) * 6, 4], elR: 80, shL: [20, 8], elL: 30, lean: 6, headX: -4 })); rosto(S.adv, null, t, 'desconfiado', { look: [.5, -.3] });
      cam(cm, [[0, [.6, 1.3, .45]], [1, [.45, 1.25, .3]]], [0, 1.2, -.62], u / 6.6); return { vig: .5 }; }; }),
  // I5 — "Podem começar.": o juiz aperta o relógio
  mk(548.64, 549.47, { ...ESC, fov: 34 }, (c) => { const S = montaSalao(c);
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t); salaoUpd(S, t); S.juiz._pose = 1; S.juiz.place(.95, -.15, .3, -Math.PI / 2 - .4); const p = { shR: [70, 4], elR: 30, lean: 14 }; fala(S.juiz, 'juiz', t, 'neutro', p, 0); S.juiz.pose(p); S.rel.userData.set('10:00', '10:00', t > 549.1 ? 1 : 0);
      cam(cm, [[0, [1.4, 1.5, .9]], [1, [1.3, 1.45, .8]]], [.6, 1.0, -.05], u / .83); return {}; }; }),
  // I6 — "E o Guilherme entrou no foco mais profundo da vida dele": o salão some, fica tudo preto
  mk(549.47, 552.80, { ...ESC, fov: 30 }, (c) => { const S = montaSalao(c); const set = emFoco([S.T.g, S.gui.root]);
    return (t, u, cm) => { guiJoga(S, t, 'determinado'); advJoga(S, t); salaoUpd(S, t); const k = smooth(549.8, 551.8, t); UF.mundo.value = 1; set(1, t); fundo(c, '#121218', 1); S.g.children.forEach((m) => { if (m !== S.mesaF && m !== S.tab) m.visible = k < .5; }); S.jog.concat(S.pub, [S.juiz, S.adv, S.prof]).forEach((k2) => { k2.root.visible = k < .5; });
      c.background = new THREE.Color().setRGB(.07 * (1 - k), .07 * (1 - k), .09 * (1 - k)); cam(cm, [[0, [-1.4, 1.5, 1.8]], [1, [-.8, 1.35, 1.3]]], [0, 1.0, .2], u / 3.33); return { vig: .5 }; }; }),
  // I7 — "Ele via 10 jogadas na frente, ouvia o próprio coração, as peças pareciam gigantes, o resto do salão sumiu"
  mk(552.80, 559.60, { bg: '#05050A', fov: 50 }, (c) => { const Gt = montaGigante(c); const g = ator(c, GUI, 0, 6, Math.PI); g.root.scale.setScalar(.95);
    return (t, u, cm) => { g.pose(soma(parado(t, 1), { headX: 10 })); rosto(g, null, t, 'determinado', { look: [0, .3] }); Gt.L.forEach((m, i) => { m.material.opacity = .3 + .5 * Math.abs(Math.sin(t * 2 + i)); m.visible = t > 553 + i * .4; });
      const k = u / 6.8; cam(cm, [[0, [2.5, 1.2, 9]], [.5, [6, 4, 2]], [1, [-6, 9, -2]]], [[0, [0, 1.6, 4]], [.5, [0, 2, -2]], [1, [0, 0, -4]]], k, 0, 0); return { bloom: .4, bloomT: .7 }; }; }),
  // I8 — "E no bolso, o celular começou a vibrar"
  mk(559.60, 561.20, { ...ESC, fov: 32, limpa: false }, (c) => { const S = montaSalao(c); const set = emFoco([S.tel]); const P = [560.0, 560.6, 561.0];
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t); salaoUpd(S, t); celNoBolso(S, t, vibra(t, P)); S.tel.tela(P.some((p) => t > p && t < p + .3) ? 'chamadasBorrado' : 'apagada'); UF.mundo.value = 1; set(1, t); fundo(c, '#121218', 1); S.juiz.root.visible = false;
      const p = S.tel.position; cam(cm, [[0, [-.75, 1.05, .55]], [1, [-.65, 1.0, .52]]], [p.x, p.y, p.z], u / 1.6, 0, 0); return { focus: .5, range: .2, blur: 12, vig: .5 }; }; }),
  // I9 — a escola do Davi: famílias entrando pelo corredor
  mk(561.20, 562.30, { bg: '#F7E7C8', fov: 44 }, (c) => { const C = corredorDavi(c); const F = []; for (let i = 0; i < 6; i++) { const k = ator(c, i % 2 ? crianca2(i) : familia(i), 0, 0, 0); F.push(k); }
    return (t, u, cm) => { F.forEach((k, i) => { const z = 2 - ((t - 561.2) * 1.2 + i * .9) % 8; k.place(i % 2 ? .4 : -.3, z, 0, Math.PI); k.pose(andar(t + i, { f: 1.8 })); rosto(k, null, t, 'feliz'); }); cam(cm, [0, 1.6, 3.2], [0, 1.0, -4], u / 1.1); return {}; }; }),
  // "uma vez": o Davi na porta da escola, olhando a rua
  mk(562.30, 562.84, { bg: '#BFE3F7', fov: 40 }, (c) => { const C = corredorDavi(c); const d = ator(c, DAVI, 0, 2.2, 0); return (t, u, cm) => { d.pose(soma(parado(t, 2), { headY: Math.sin(t * 3) * 20 })); rosto(d, null, t, 'preocupado', { look: [0, -.2] }); cam(cm, [.4, .9, 3.6], [0, .7, 2.2], u / .54); return {}; }; }),
  // "duas": a Dona Rose no caixa, com o celular no ouvido
  mk(562.84, 563.20, { bg: '#F4F4F0', fov: 38 }, (c) => { const M = mercado(c); const r = ator(c, ROSE, -.05, -.42, 0); const tel = celular(); c.add(tel);
    return (t, u, cm) => { r.pose({ shR: [130, -10], elR: 150, shL: [30, 10], elL: 60, headZ: 10 }); rosto(r, null, t, 'preocupado'); naMao(tel, r, 'R', [0, -.04, .06]); tel.tela('bloqueio'); cam(cm, [.9, 1.35, 1.6], [0, 1.15, -.3], u / .36); return {}; }; }),
  // "cinco": a sala do Davi, crianças apresentando com os irmãos
  mk(563.20, 563.65, { bg: '#F7E7C8', fov: 44 }, (c) => { const S = salaDavi(c); const P = []; for (let i = 0; i < 4; i++) { const a = ator(c, crianca2(i), -1.4 + i * .9, -2.0, 0); const b = ator(c, aluno(i + 1), -1.1 + i * .9, -2.1, 0); P.push(a, b); }
    return (t, u, cm) => { P.forEach((k, i) => { k.pose(soma(parado(t, i), i % 2 ? G.bracoCruzado : { shR: [90, 10], elR: 30 })); rosto(k, null, t, 'feliz'); }); cam(cm, [0, 1.3, 1.5], [0, .8, -2], u / .45); return {}; }; }),
  // "dez" e "catorze": o Davi sozinho na última cadeira, guardando a folha
  mk(563.65, 565.09, { bg: '#F7E7C8', fov: 38 }, (c) => { const S = salaDavi(c); const d = ator(c, DAVI, 0, 0, 0); sentar(d, 2.2, 1.3, Math.PI, .32); const f = folha(); f.scale.setScalar(.6); c.add(f); const m = mochila('#3E7CC8'); c.add(m);
    return (t, u, cm) => { const k = clamp((t - 563.9) / .9); d.pose(sentado({ shL: [lerp(60, 30, k), -10], elL: 80, shR: [40, -10], elR: 90, lean: 10, headX: 24 })); rosto(d, null, t, 'triste', { look: [0, .6] }); naMao(m, d, 'R', [-.05, -.1, .12], false); d.root.updateMatrixWorld(true);
      const a = d.hands.L.localToWorld(new THREE.Vector3(0, -.04, .04)); f.position.lerpVectors(a, m.position, k); f.quaternion.copy(d.root.quaternion); f.set(0); f.visible = k < .95; cam(cm, [[0, [1.4, 1.0, .3]], [1, [1.5, .95, .45]]], [2.2, .55, 1.3], u / 1.44); return { sat: .7 }; }; }),
  // "e ele não sentiu nenhuma": volta pro rosto imóvel do Guilherme
  mk(565.09, 567.20, { ...ESC, fov: 26, limpa: false }, (c) => { const S = montaSalao(c); const set = emFoco([S.gui.root]); S.adv.root.visible = false;
    return (t, u, cm) => { guiJoga(S, 565.1, 'determinado', { parado: true }); salaoUpd(S, t); UF.mundo.value = 1; set(.6, t); fundo(c, '#121218', 1); S.juiz.root.visible = false; cam(cm, [[0, [-.4, 1.4, -.42]], [1, [-.34, 1.38, -.34]]], [0, 1.27, .62], u / 2.11, 0, 0); return { vig: .55 }; }; }),
  // I15 — "O adversário ataca, ele defende, o adversário sacrifica a torre": lances rápidos
  mk(567.20, 571.08, { ...ESC, fov: 30 }, (c) => { const S = montaSalao(c); const set = emFoco([S.T.g]);
    return (t, u, cm) => { lances(S.T, t, JOGO); guiJoga(S, t); advJoga(S, t); salaoUpd(S, t, 'tensao'); UF.mundo.value = .9; set(.5, t); fundo(c, '#121218', .9); const a = (t - 567.2) * .3; cam(cm, [Math.sin(a) * .9 + .3, 1.45, Math.cos(a) * .4 - .1], [0, 1.07, 0], u / 3.88, 0, 0); return { vig: .5 }; }; }),
  // "ele vê a armadilha três jogadas antes": as linhas acendem em vermelho no tabuleiro gigante
  mk(571.08, 573.09, { bg: '#05050A', fov: 50 }, (c) => { const Gt = montaGigante(c);
    return (t, u, cm) => { Gt.L.forEach((m, i) => { const r = clamp((t - 571.3 - i * .1) / .3); m.material.color.setRGB(1, 1 - r, 1 - r); m.visible = true; }); cam(cm, [[0, [4, 5, 8]], [1, [2, 4, 6]]], [0, 1, -2], u / 2.01, 0, 0); return { bloom: .5, bloomT: .6 }; }; }),
  // "o público prende a respiração"
  mk(573.09, 575.12, { ...ESC, fov: 38 }, (c) => { const S = montaSalao(c);
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t); salaoUpd(S, t, 'tensao'); S.pub.forEach((a, i) => { a.pose({ shL: [100, -10], elL: 140, shR: [100, -10], elR: 140, headX: 4 }); rosto(a, null, t, 'medo'); }); cam(cm, [[0, [-1.5, 1.4, .8]], [1, [-1.4, 1.35, 1.1]]], [-.5, 1.3, 3.0], u / 2.03); return { vig: .5 }; }; }),
  // I16 — "e 41 jogadas depois, ele coloca a rainha na casa certa": silêncio, a rainha deslizando
  mk(575.12, 579.01, { ...ESC, fov: 26, perto: true }, (c) => { const S = montaSalao(c); const set = emFoco([S.T.g]); const q = S.T.P.d1;
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t, 'medo'); salaoUpd(S, t, 'tensao'); S.T.move(q, 'd1', 'f7', easeIO(clamp((t - 576.3) / 2.6))); UF.mundo.value = .95; set(1, t); fundo(c, '#121218', .95); S.T.g.updateMatrixWorld(true); const p = q.getWorldPosition(new THREE.Vector3());
      cam(cm, [p.x + .35, p.y + .18, p.z + .3], [p.x, p.y + .03, p.z], u / 3.89, 0, 0); return { vig: .55, focus: .45, range: .15, blur: 10 }; }; }),
  // I17 — "Xeque-mate.": câmera lenta, a rainha toca o tabuleiro, o rei adversário cai
  mk(579.01, 580.24, { ...ESC, fov: 28, perto: true }, (c) => { const S = montaSalao(c); const q = S.T.P.d1; const r = S.T.P.e8;
    return (t, u, cm) => { const p0 = sentado({ shR: [60, 6], elR: 60, lean: 16, headX: 20 }); fala(S.gui, 'gui', t, 'determinado', p0, 0, { look: [0, .5] }); S.gui.pose(p0); advJoga(S, t, 'medo'); salaoUpd(S, t, 'tensao'); S.T.move(q, 'd1', 'f7', 1); r.rotation.x = smooth(579.5, 580.1, t) * 1.45;
      S.T.g.updateMatrixWorld(true); const p = r.getWorldPosition(new THREE.Vector3()); cam(cm, [p.x + .3, p.y + .12, p.z + .35], [p.x, p.y + .03, p.z], u / 1.23, 0, 0); return { vig: .5 }; }; }),
  // I18 — "Campeão estadual... O salão aplaude em pé": o efeito desliga, aplauso, flashes, papel picado
  mk(580.24, 584.61, { ...ESC, fov: 42 }, (c) => { const S = montaSalao(c); const pp = papelPicado(c, 0, 0, 0, { w: 8, d: 6, h: 6, n: 140 }); const fl = new THREE.PointLight('#FFFFFF', 0, 12, 1.5); fl.position.set(-2, 3, 4); c.add(fl); S.T.P.e8.rotation.x = 1.45;
    return (t, u, cm) => { salaoUpd(S, t, 'aplauso'); S.jog.forEach((k, i) => { k.pose(sentado({ shL: [70, -10], shR: [70, -10], elL: 60 + Math.abs(Math.sin(t * 9 + i)) * 30, elR: 60 + Math.abs(Math.sin(t * 9 + i)) * 30 })); rosto(k, null, t, 'feliz'); });
      S.gui.place(0, .62, .3, Math.PI); S.gui.pose(soma(G.comemora, pular(t, 1.5))); rosto(S.gui, null, t, 'rindo'); advJoga(S, t, 'triste'); pp(t); fl.intensity = Math.sin(t * 23) > .85 ? 40 : 0;
      cam(cm, [[0, [2.5, 2.2, 4.5]], [1, [1.8, 1.8, 3.6]]], [0, 1.1, .3], u / 4.37); return { vig: .3, bloom: .3 }; }; }),
  // "o professor chorando abraçado no troféu, gente filmando"
  mk(584.61, 587.84, { ...ESC, fov: 36 }, (c) => { const S = montaSalao(c); const tr = trofeu(1.6); c.add(tr); const pp = papelPicado(c, -2, 0, 2.5, { w: 4, d: 3, h: 4 }); const tels = S.pub.slice(0, 5).map(() => { const x = celular(); c.add(x); return x; });
    return (t, u, cm) => { salaoUpd(S, t, 'aplauso'); S.prof.place(-2.2, 2.0, 0, Math.PI * .85); S.prof.pose({ shL: [70, -10, -60], elL: 100, shR: [70, -10, -60], elR: 100, bob: Math.abs(Math.sin(t * 6)) * .01 }); rosto(S.prof, null, t, 'choro'); naMao(tr, S.prof, 'R', [.08, -.05, .1], false);
      S.pub.slice(0, 5).forEach((a, i) => { a.pose(soma(parado(t, i), G.filmar)); naMao(tels[i], a, 'R', [0, -.08, .05], [0, 0, Math.PI / 2]); tels[i].tela('views', .1); }); pp(t); cam(cm, [[0, [-1.0, 1.5, .6]], [1, [-1.2, 1.45, .8]]], [-2.2, 1.2, 2.0], u / 3.23); return { vig: .3 }; }; }),
  // I19 — "e ele tira o celular do bolso pra tirar uma foto": sorrindo
  mk(587.84, 591.92, { ...ESC, fov: 34, limpa: false }, (c) => { const S = montaSalao(c); const pp = papelPicado(c, 0, 0, .6, { w: 3, d: 2, h: 3 });
    return (t, u, cm) => { salaoUpd(S, t, 'aplauso'); S.gui.place(0, .62, .3, Math.PI); const k = clamp((t - 588.8) / 1.2); S.gui.pose({ shL: [lerp(10, 64, k), 4], elL: lerp(20, 76, k), shR: [20, 10], elR: 20, headX: lerp(0, 22, k) }); rosto(S.gui, null, t, 'feliz', { look: [0, k * .5] }); if (k > 0) { naMao(S.tel, S.gui, 'L', [0, -.07, .06], false); S.gui.headG.updateMatrixWorld(true); S.tel.lookAt(S.gui.headG.localToWorld(new THREE.Vector3(0, .2, .25))); S.tel.tela('apagada'); }
      pp(t); S.adv.root.visible = false; cam(cm, [[0, [-.5, 1.5, -.6]], [1, [-.4, 1.45, -.45]]], [0, 1.25, .62], u / 4.08); return { vig: .35 }; }; }),
  // I20 — "14 chamadas perdidas da mãe, e uma mensagem só": a tela trincada; I21 — a mensagem letra por letra, ele perde a cor
  mk(591.92, 599.44, { ...ESC, fov: 34, limpa: false }, (c) => { const S = montaSalao(c); const set = emFoco([S.gui.root]);
    return (t, u, cm) => { salaoUpd(S, t, 'aplauso'); S.gui.place(0, .62, .3, Math.PI); S.gui.pose({ shL: [64, 4], elL: 76, shR: [20, 10], elR: 20, headX: 22 }); naMao(S.tel, S.gui, 'L', [0, -.07, .06], false); S.gui.headG.updateMatrixWorld(true); S.tel.lookAt(S.gui.headG.localToWorld(new THREE.Vector3(0, .2, .25)));
      const msg = t > 595.84; S.tel.tela(msg ? 'mensagemMae' : 'chamadas', msg ? clamp((t - 595.9) / 2.8) : clamp((t - 592) / 1.6)); S.adv.root.visible = false;
      if (t < 597.4) { S.gui.headG.visible = false; const e = S.gui.headG.localToWorld(new THREE.Vector3(0, .25, .1)); const P = S.tel.position; cam(cm, [e.x, e.y, e.z], [P.x, P.y, P.z], (t - 591.92) / 5.5, 0, 0); rosto(S.gui, null, t, 'feliz'); }
      else { S.gui.headG.visible = true; rosto(S.gui, null, t, 'medo', { look: [0, .5] }); UF.alvo.value = smooth(597.5, 598.6, t); set(.6, t); cam(cm, [[0, [-.4, 1.45, -.4]], [1, [-.3, 1.42, -.3]]], [0, 1.3, .3], (t - 597.4) / 2.04, 0, 0); } return { vig: .4 }; }; }),
  // J1 — "Ele larga o troféu na mesa do juiz e sai correndo, sem casaco": o troféu balança e cai
  mk(599.44, 602.80, { ...ESC, fov: 38 }, (c) => { const S = montaSalao(c); const tr = trofeu(1.5); c.add(tr); const mj = rb(.8, .05, .5, '#F4F1EA', 1.9, .75, -.2, { out: .006 }); c.add(mj); c.add(bx(.7, .72, .4, '#E8E2D6', 1.9, .36, -.2));
    return (t, u, cm) => { salaoUpd(S, t, 'aplauso'); const k = clamp((t - 600.6) / 1.8); S.gui.place(lerp(1.4, -3, k), lerp(-.2, 3.2, k), 0, k > 0 ? -.7 : Math.PI / 2); S.gui.pose(k > 0 ? correr(t, 3, 1) : { shR: [60, 4], elR: 30 }); rosto(S.gui, null, t, 'medo'); S.adv.root.visible = false;
      const cai = smooth(601.0, 601.5, t); tr.position.set(1.85 + cai * .12, .775 - cai * .0, -.2); tr.rotation.z = -cai * 1.5 + Math.sin(t * 20) * .1 * (cai < .1 && t > 600.6 ? 1 : 0); cam(cm, [[0, [2.6, 1.1, .8]], [1, [2.5, 1.05, .7]]], [1.85, .9, -.2], u / 3.36); return { vig: .35 }; }; }),
  // J2 — "Atravessa três ruas sem olhar pros lados": câmera de lado acompanhando a corrida, um carro freia
  mk(602.80, 605.09, { bg: '#BFE3F7', fov: 40 }, (c) => { const R = rua(c, { hora: 'dia', tipo: 'lojas' }); const g = ator(c, GUI, 0, 0, 0); const car = carroPop('#E2443A'); c.add(car);
    return (t, u, cm) => { const x = lerp(5.5, -5.5, u / 2.29); g.place(x, 0, x > 4 || x < -4 ? .16 : 0, -Math.PI / 2); g.pose(correr(t, 3.2, 1)); rosto(g, null, t, 'medo'); const fr = clamp((t - 603.4) / .6); car.position.set(-1.6, 0, lerp(-12, -2.2, easeOut(fr))); car.rotation.x = fr < 1 ? -fr * .05 : 0;
      cam(cm, [x + .5, 1.2, 4.5], [x, .9, 0], u / 2.29, 0, 0); return {}; }; }),
  // J3 — "sobe a ladeira, entra pelo portão da escola sem fôlego"
  mk(605.09, 607.45, { bg: '#BFE3F7', fov: 40 }, (c) => { const R = rua(c, { hora: 'dia', tipo: 'casas', incl: 8 }); const g = ator(c, GUI, 0, 0, 0); R.g.add(g.root);
    return (t, u, cm) => { const z = lerp(4, -6, u / 2.36); g.place(-5.2, z, .16, Math.PI); g.pose(soma(correr(t, 2.6, .9), { lean: 18 })); rosto(g, null, t, 'medo', { mouth: { open: .6, round: .5 } }); const w = R.w(-5.2, 1, z); cam(cm, [w[0] + 2.5, w[1] + 1.2, w[2] + 3], w, u / 2.36, 0, 0); return {}; }; }),
  // J4 — o corredor com as cartolinas: "minha mãe", "meu pai", "minha vó", "meu irmão"
  mk(607.45, 609.44, { bg: '#F7E7C8', fov: 44 }, (c) => { const C = corredorDavi(c); const g = ator(c, GUI, 0, 0, 0);
    return (t, u, cm) => { const z = lerp(2.5, -8, u / 1.99); g.place(0, z, 0, Math.PI); g.pose(correr(t, 3, 1)); rosto(g, null, t, 'medo'); cam(cm, [[0, [.6, 1.5, z + 2.5]], [1, [.5, 1.45, z + 2.2]]], [0, 1.2, z - 2], u / 1.99, 0, 0); return {}; }; }),
  // J5 — "e a sala já está vazia. Cadeirinhas coloridas empilhadas, cartolinas na parede"
  mk(609.44, 615.83, { bg: '#F7E7C8', fov: 44 }, (c) => { const S = salaDavi(c, { empilhadas: true }); const d = ator(c, DAVI, 0, 0, 0); sentar(d, 2.6, -2.3, -Math.PI * .8, .32); const m = mochila('#3E7CC8'); c.add(m);
    return (t, u, cm) => { S.porta.abre(smooth(609.5, 610.3, t)); d.pose(sentado({ shL: [40, -30], elL: 100, shR: [40, -30], elR: 100, headY: -40, knL: 88 + Math.sin(t * 3) * 15, knR: 88 - Math.sin(t * 3) * 15 })); rosto(d, null, t, 'triste', { look: [-.6, 0] }); naMao(m, d, 'R', [-.08, -.1, .1], false);
      if (t < 612.9) cam(cm, [[0, [-3.0, 1.5, 2.0]], [1, [-2.2, 1.5, 1.6]]], [[0, [-1.5, .4, 1.8]], [1, [-1, 1.6, -2.8]]], (t - 609.44) / 3.46); else cam(cm, [[0, [-1.6, 1.6, -1.4]], [1, [-1.0, 1.5, -1.8]]], [-1, 1.8, -3], (t - 612.9) / 2.93); return {}; }; }),
  // J6 — "E lá no canto, sentado sozinho numa cadeira pequena, com a mochila no colo, o Davi": a câmera atravessa a sala devagar
  mk(615.83, 620.96, { bg: '#F7E7C8', fov: 40 }, (c) => { const S = salaDavi(c, { empilhadas: true }); const d = ator(c, DAVI, 0, 0, 0); sentar(d, 2.6, -2.3, -Math.PI * .8, .32); const m = mochila('#3E7CC8'); c.add(m);
    return (t, u, cm) => { d.pose(sentado({ shL: [40, -30], elL: 100, shR: [40, -30], elR: 100, headY: -40, knL: 88 + Math.sin(t * 3) * 15, knR: 88 - Math.sin(t * 3) * 15 })); rosto(d, null, t, 'triste', { look: [-.6, 0] }); naMao(m, d, 'R', [-.08, -.1, .1], false);
      const k = easeIO(u / 5.13); cam(cm, [lerp(-1.8, 1.4, k), lerp(1.3, .85, k), lerp(1.2, -1.1, k)], [2.6, .55, -2.3], u / 5.13, 0, 0); return { tint: '#FFF0DC' }; }; }),
  // J7 — "Davi, desculpa, eu...": na porta, com a mão no batente, sem ar
  mk(620.96, 623.36, { bg: '#F7E7C8', fov: 40 }, (c) => { const S = salaDavi(c, { empilhadas: true }); S.porta.abre(1); const g = ator(c, GUI, -2.95, 2.0, Math.PI / 2);
    return (t, u, cm) => { const p = soma(G.desculpa, { lean: 12, bob: Math.sin(t * 6) * .01 }); fala(g, 'gui', t, 'preocupado', p, 0); g.pose(p); cam(cm, [[0, [-1.4, 1.35, 1.2]], [1, [-1.55, 1.32, 1.35]]], [-2.95, 1.2, 2.0], u / 2.4); return { tint: '#FFF0DC' }; }; }),
  // J8 — "Todo mundo trouxe o irmão.": o rosto virado pra janela, a mochila abraçada
  mk(623.36, 625.12, { bg: '#F7E7C8', fov: 32 }, (c) => { const S = salaDavi(c, { empilhadas: true }); const d = ator(c, DAVI, 0, 0, 0); sentar(d, 2.6, -2.3, -Math.PI * .8, .32); const m = mochila('#3E7CC8'); c.add(m);
    return (t, u, cm) => { const p = sentado({ shL: [50, -40], elL: 110, shR: [50, -40], elR: 110, headY: -60 }); fala(d, 'davi', t, 'triste', p, 0, { look: [-.8, 0] }); d.pose(p); naMao(m, d, 'R', [-.08, -.1, .1], false); cam(cm, [[0, [1.6, .85, -1.6]], [1, [1.7, .82, -1.7]]], [2.6, .65, -2.3], u / 1.76); return { tint: '#FFF0DC' }; }; }),
  // J9 — "Ele tinha ganhado de um campeão, decorado a Revolução Francesa, aprendido violão... e não tinha conseguido focar na única coisa que importava"
  mk(625.12, 635.44, { bg: '#0C0C12', fov: 40 }, (c) => { vazio(c, { cor: '#FFFFFF' }); c.add(new THREE.AmbientLight('#FFFFFF', .8)); const tr = trofeu(2.4); const pv = prova('10', '#2E5EC8'); pv.rotation.x = 0; pv.scale.setScalar(2.4); const vi = violao({}); vi.scale.setScalar(1.6); const d = ator(c, DAVI, 0, 0, 0); c.add(tr, pv, vi); const cad = cadeirinha('#F2C230'); c.add(cad); sentar(d, 0, 0, 0, .32);
    const cacos = [0, 1, 2].map((i) => { const cp = [0, 1, 0]; return { cp, f: particulas(c, cp, { n: 40, cor: '#E8F0FF', r: 1.2, tam: .04, g: -.8 }) }; }); const T = [626.44, 627.54, 629.44]; const E = [627.14, 629.04, 630.7];
    return (t, u, cm) => { [tr, pv, vi].forEach((o, i) => { o.visible = t >= T[i] - .4 && t < E[i]; o.position.set(0, [.45, 1, .95][i], 0); o.rotation.y = t; const q = clamp((t - E[i]) / .8); cacos[i].f(q > 0 && q < 1 ? q : 0); });
      d.root.visible = cad.visible = t > 630.7; d.pose(sentado({ shL: [40, -30], elL: 100, shR: [40, -30], elR: 100 })); rosto(d, null, t, 'triste', { look: [0, .2] });
      cam(cm, [[0, [0, 1.15, 1.8]], [1, [0, .95, 1.5]]], [0, t > 630.7 ? .55 : 1, 0], u / 10.32, 0, 0); return { vig: .55, bloom: .3 }; }; }),
  // J10 — "Então ele tirou o celular do bolso, desligou, guardou"
  mk(635.44, 638.75, { bg: '#F7E7C8', fov: 30, perto: true, limpa: false }, (c) => { const S = salaDavi(c, { empilhadas: true }); const g = ator(c, GUI, 1.3, -1.5, -2.2); const tel = celular(); c.add(tel);
    return (t, u, cm) => { const gu = t > 637.9; g.pose(gu ? { shL: [10, 20], elL: 30 } : { shL: [64, 4], elL: 76, headX: 22 }); rosto(g, null, t, 'triste', { look: [0, .5] }); if (!gu) { naMao(tel, g, 'L', [0, -.07, .06], false); g.headG.updateMatrixWorld(true); tel.lookAt(g.headG.localToWorld(new THREE.Vector3(0, .2, .25))); tel.tela(t > 637.0 ? 'apagada' : 'chamadas', 1, t > 637.0 ? 0 : 1); } else tel.visible = false;
      const P = tel.position; const F1 = frenteDe(g.root, 1.0, 1.25, -.55); cam(cm, [[0, F1], [1, [F1[0] * .95 + P.x * .05, F1[1], F1[2] * .95 + P.z * .05]]], [P.x, P.y + .05, P.z], u / 3.31, 0, 0); return { tint: '#FFF0DC' }; }; }),
  // J11 — "e sentou no chão na frente do irmão, na altura dele. E pela segunda vez naquela semana, focou 100% no Davi": foco dourado
  mk(638.75, 646.56, { bg: '#F7E7C8', fov: 38 }, (c) => { const S = salaDavi(c, { empilhadas: true }); const d = ator(c, DAVI, 0, 0, 0); sentar(d, 2.6, -2.3, -Math.PI * .8, .32); const m = mochila('#3E7CC8'); c.add(m); const g = ator(c, GUI, 0, 0, 0); const set = emFoco([d.root, g.root]);
    return (t, u, cm) => { const k = smooth(638.9, 640.2, t); g.place(lerp(1.3, 2.05, k), lerp(-1.5, -1.62, k), 0, -2.2 + .3); g.pose(k < 1 ? soma(parado(t, 1), { bob: -k * .2, knL: k * 60, knR: k * 60 }) : G.sentadoChao); rosto(g, null, t, 'preocupado', { look: [.3, .2] });
      d.pose(sentado({ shL: [50, -40], elL: 110, shR: [50, -40], elR: 110, headY: lerp(-60, 0, smooth(642, 643, t)) })); rosto(d, null, t, 'triste', { look: [0, .2] }); naMao(m, d, 'R', [-.08, -.1, .1], false);
      const o = smooth(643.3, 644.8, t); UF.mundo.value = o; UF.ouro.value = 1; set(o, t); fundo(c, '#F7E7C8', o, 1); cam(cm, [[0, [.4, 1.1, -.3]], [1, [.9, 1.0, -.5]]], [2.3, .65, -1.95], u / 7.81); return { bloom: .2 + o * .3, bloomT: .8 }; }; }),
];
