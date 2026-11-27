// ATO 5 — dia 4 (367 a 443 s): xadrez no pátio, o Caio, a inscrição, os troféus e a sombra, a bicicleta.
// ATO 6 — dia 5 (443 a 492 s): 200 partidas, o aniversário esquecido do Tiago, "você tá em casa mas não tá aqui", a folha no fundo da mochila.
// ATO 7 — dia 6 (492 a 531 s): a mãe pede, ele diz "uhum", o cavalo em f6, o Davi ensaiando do outro lado da parede.
import * as THREE from 'three';
import { alcanca, levaBoca, naCabeca, palma } from './ik.js';
import { frenteDe, mk, cam, ator, rosto, fala, sentar, icone, UF, emFoco, fundo, celular, particulas, papelPicado, vibra, soma, vivo, parado, andar, correr, G, sentado, clamp, smooth, lerp, easeIO, easeOut, easeIn, kv, naMao, rir, pular } from './cf.js';
import { montaCasa, sentaMesa, telNaMao, relogioParede, sentadoCel } from './casa_cena.js';
import { patio, rua } from './lugares2.js';
import { salinha } from './lugares.js';
import { vazio } from './lugares_foco.js';
import { GUI, DAVI, ROSE, ROSECASA, TIAGO, PROFEF, CAIO, CICLISTA, aluno, pessoa } from './elenco_foco.js';
import { folha, tabuleiro, peca, prova, trofeu, bicicleta, bilhete } from './pecas_foco.js';
import { bolo, mochila, carroPop } from './objs.js';
import { fantasma } from './pecas.js';
import { deitar } from './lib.js';
import { rb, bx, cyl, sph, toon, ctex, toonTex } from './motor/toon.js';

const DIA = { bloom: .22 };
// ---------------- pátio ----------------
function montaPatio(c, o = {}) {
  const P = patio(c); const T = tabuleiro(.05); T.g.position.set(0, .835, 0); c.add(T.g);
  const g = ator(c, GUI, 0, .75, Math.PI); sentar(g, 0, .75, Math.PI, .48); const op = ator(c, o.op || TIAGO, 0, -.75, 0); sentar(op, 0, -.75, 0, .48);
  const pub = []; for (let i = 0; i < (o.pub ?? 6); i++) { const a = ator(c, aluno(i + 3), (i > 2 ? 1 : -1) * (1.25 + (i % 2) * .3), .55 - (i % 3) * .55, i > 2 ? -Math.PI / 2 : Math.PI / 2); a.seed = i; pub.push(a); }
  return { P, T, g, op, pub };
}
const jogaPose = (t, s = 1) => sentado(soma({ shR: [48, 6], elR: 96, shL: [40, 6], elL: 90, lean: 12, headX: 18 }, vivo(t, s, .3)));
/** Move a peça i (lista de lances [de, para, t0]) no tempo t. */
function lances(T, t, L, dur = .35) { for (const [de, para, t0] of L) { const p = T.P[de]; if (!p) continue; const u = clamp((t - t0) / dur); if (u <= 0) continue; T.move(p, de, para, u); if (T.P[para] && T.P[para] !== p && u >= 1) T.P[para].visible = false; } }
const pubUpd = (S, t, emo = 'neutro') => S.pub.forEach((a, i) => { a.pose(soma(parado(t, i), G.bracoCruzado)); rosto(a, null, t, emo); });

export const ATO5 = [
  // F1 — "Dia quatro. Ele nunca tinha jogado xadrez, mas o professor de educação física deixa um tabuleiro aberto no pátio"
  mk(367.28, 375.08, { bg: '#BFE3F7', fov: 42 }, (c) => { const S = montaPatio(c, { pub: 0 }); S.g.root.visible = S.op.root.visible = false; const pf = ator(c, PROFEF, 0, 0, 0); const g2 = ator(c, GUI, 0, 0, 0);
    return (t, u, cm) => { const k = clamp((t - 367.6) / 2.6); pf.place(lerp(-4, -1.05, easeOut(k)), lerp(-3, -.1, k), 0, k < 1 ? 1.0 : Math.PI / 2); pf.pose(k < 1 ? andar(t, { f: 1.8 }) : t < 372.6 ? { shR: [60, 4], elR: 40, shL: [60, 4], elL: 40, lean: 20 } : soma(parado(t, 3), G.maosCintura)); rosto(pf, null, t, 'feliz');
      S.T.g.visible = t > 371.4; S.T.g.position.y = .835 + (t < 372.2 ? (372.2 - t) * .3 : 0); const k2 = clamp((t - 372.4) / 2.6); g2.place(lerp(3.5, .7, k2), lerp(2.0, .9, k2), 0, -2.2); g2.pose(k2 < 1 && k2 > 0 ? andar(t, { f: 1.7 }) : parado(t, 1)); rosto(g2, null, t, 'surpreso', { look: [-.4, .5] });
      cam(cm, [[0, [-2.6, 1.8, 3.6]], [1, [-2.0, 1.6, 3.0]]], [0, .8, 0], u / 7.8); return DIA; }; }),
  // F3 — "e o Guilherme lê as regras em 5 minutos": foco na folha de regras, as peças saem do papel e se mexem no ar
  mk(375.08, 377.82, { bg: '#BFE3F7', fov: 36, limpa: false }, (c) => { const S = montaPatio(c, { pub: 0 }); S.op.root.visible = false; const reg = new THREE.Mesh(new THREE.PlaneGeometry(.21, .29), toonTex(ctex(256, 352, (x) => { x.fillStyle = '#FBF8EE'; x.fillRect(0, 0, 256, 352); x.fillStyle = '#2A2A30'; x.font = '900 26px Inter'; x.fillText('REGRAS', 70, 40); x.font = '600 15px Inter'; ['♙ anda 1 casa', '♖ linha reta', '♘ em L', '♗ diagonal', '♕ tudo', '♔ 1 casa'].forEach((s, i) => x.fillText(s, 24, 90 + i * 40)); })));
    c.add(reg); const PC = ['p', 't', 'c', 'b', 'd', 'r'].map((tp) => { const p = peca(tp, true, 2.2); c.add(p); return p; }); const set = emFoco([reg, ...PC]);
    return (t, u, cm) => { S.g.pose(sentado({ shR: [70, 6], elR: 100, shL: [70, 6], elL: 100, headX: 26, lean: 8 })); rosto(S.g, null, t, 'determinado', { look: [0, .6] }); naMao(reg, S.g, 'R', [.08, -.06, .08], [-.9, 0, 0]);
      const rp = reg.position; PC.forEach((p, i) => { const a = t * 1.5 + i * 1.05, sai = clamp((t - 375.4 - i * .2) / .5); p.position.set(rp.x + Math.cos(a) * .28 * sai, rp.y + .1 + sai * .18 + Math.sin(t * 3 + i) * .03, rp.z - .15 + Math.sin(a) * .15 * sai); p.rotation.y = t * 2; p.visible = sai > 0; });
      UF.mundo.value = smooth(375.2, 375.6, t); set(1, t); fundo(c, '#BFE3F7', UF.mundo.value); cam(cm, [[0, [.15, 1.12, -.45]], [1, [.12, 1.1, -.3]]], [0, 1.1, .5], u / 2.74, 0, 0); return { focus: .5, range: .3, blur: 8 }; }; }),
  // F4 — "ganha do Tiago em 6 jogadas": o Tiago bate a testa na mesa
  mk(377.82, 379.88, { bg: '#BFE3F7', fov: 40 }, (c) => { const S = montaPatio(c);
    return (t, u, cm) => { lances(S.T, t, [['e2', 'e4', 377.9], ['e7', 'e5', 378.15], ['f1', 'c4', 378.4], ['b8', 'c6', 378.65], ['d1', 'h5', 378.9], ['g8', 'f6', 379.1], ['h5', 'f7', 379.3]], .2); S.g.pose(jogaPose(t)); rosto(S.g, null, t, 'determinado', { look: [0, .5] });
      const bate = smooth(379.4, 379.6, t); S.op.pose(sentado({ lean: 10 + bate * 40, headX: 10 + bate * 30, shL: [40, 20], elL: 60, shR: [40, 20], elR: 60 })); rosto(S.op, null, t, bate > .5 ? 'choro' : 'preocupado'); pubUpd(S, t, 'surpreso');
      cam(cm, [[0, [1.3, 1.5, -1.3]], [1, [1.15, 1.45, -1.15]]], [0, .9, 0], u / 2.06); return DIA; }; }),
  // F5 — "ganha do professor": o professor derruba o próprio rei
  mk(379.88, 381.19, { bg: '#BFE3F7', fov: 38 }, (c) => { const S = montaPatio(c, { op: PROFEF });
    return (t, u, cm) => { S.g.pose(jogaPose(t)); rosto(S.g, null, t, 'feliz'); const r = S.T.P.e8; const k = smooth(380.2, 380.6, t); r.rotation.x = -k * 1.4; S.op.pose(sentado({ shR: [60, 4], elR: 30 - k * 10, lean: 14 })); rosto(S.op, null, t, k > .5 ? 'feliz' : 'preocupado'); pubUpd(S, t, 'surpreso');
      cam(cm, [[0, [-.75, 2.05, .05]], [1, [-.65, 1.95, 0]]], [0, .88, -.3], u / 1.31); return DIA; }; }),
  // F6 — "no fim da tarde aparece o Caio, do terceiro ano, campeão do clube da escola": entrada em câmera lenta, ajeita os óculos, o sol brilha na lente
  mk(381.19, 388.48, { bg: '#F2B070', fov: 36 }, (c) => { const S = montaPatio(c, { pub: 6 }); S.op.root.visible = false; const ca = ator(c, CAIO, 0, 0, 0); const br = icone('✦', .15); br.material.color.set('#FFFFFF'); c.add(br);
    return (t, u, cm) => { const tl = 381.19 + (t - 381.19) * .4; const k = clamp((t - 381.3) / 5.4); ca.place(lerp(-3.5, -.9, k), lerp(-3, -1.2, k), 0, .7); const aj = t > 386.0; ca.pose(aj ? { shL: [10, 9], elL: 12 } : andar(tl, { f: 1.7 })); if (aj) alcanca(ca, 'R', naCabeca(ca, -.02, .3 + Math.max(0, Math.sin((t - 386) * 3)) * .02, .34), { shL: [10, 9], elL: 12 }); rosto(ca, null, t, 'desconfiado', { look: [.4, 0] });
      ca.headG.updateMatrixWorld(true); const e = ca.headG.localToWorld(new THREE.Vector3(.1, .28, .3)); br.position.copy(e); const b = clamp((t - 386.6) / .6); br.visible = b > 0 && b < 1; br.scale.setScalar(.15 * Math.sin(b * Math.PI) + .001); br.material.rotation = b * 3;
      S.g.pose(jogaPose(t)); rosto(S.g, null, t, 'neutro', { look: [-.6, 0] }); pubUpd(S, t, 'surpreso'); cam(cm, [[0, [.1, 1.2, -.25]], [1, [-.05, 1.15, -.4]]], [ca.root.position.x, 1.0, ca.root.position.z], u / 7.29); S.pub.forEach((p) => { p.root.visible = p.root.position.distanceTo(cm.position) > 2.7; }); return { tint: '#FFD8A8', bloom: .4 }; }; }),
  // F7 — "Aprendeu hoje? Vai ser rápido.": arruma as peças com dois dedos, sorriso de lado
  mk(388.48, 391.28, { bg: '#F2B070', fov: 36 }, (c) => { const S = montaPatio(c, { op: CAIO });
    return (t, u, cm) => { const p = sentado({ shR: [55, 6], elR: 80, lean: 14, headX: 10 }); fala(S.op, 'caio', t, 'desconfiado', p, 0, { mouth: undefined, smile: .5, look: [0, -.2] }); S.op.pose(p); S.g.pose(jogaPose(t)); rosto(S.g, null, t, 'neutro', { look: [0, .3] }); pubUpd(S, t);
      cam(cm, [[0, [.4, 1.25, .5]], [1, [.35, 1.22, .35]]], [0, 1.15, -.75], u / 2.8); return { tint: '#FFD8A8' }; }; }),
  // F8 — "Foi rápido mesmo, 23 jogadas": peças sendo comidas, acelerando
  mk(391.28, 396.91, { bg: '#F2B070', fov: 34 }, (c) => { const S = montaPatio(c, { op: CAIO }); const L = [['e2', 'e4'], ['e7', 'e5'], ['g1', 'f3'], ['b8', 'c6'], ['f1', 'b5'], ['a7', 'a6'], ['b5', 'c6'], ['d7', 'c6'], ['d2', 'd3'], ['f8', 'd6'], ['c1', 'g5'], ['g8', 'e7'], ['f3', 'h4'], ['h7', 'h6'], ['g5', 'e7'], ['d8', 'e7'], ['d1', 'h5'], ['c8', 'e6'], ['h4', 'f5'], ['e6', 'f5'], ['e4', 'f5'], ['e7', 'g5'], ['h5', 'f7']].map(([a, b], i) => [a, b, 391.5 + i * .2 * (1 - i * .012)]);
    return (t, u, cm) => { lances(S.T, t, L, .15); S.g.pose(jogaPose(t)); rosto(S.g, null, t, 'determinado', { look: [0, .5] }); S.op.pose(jogaPose(t, 3)); rosto(S.op, null, t, t > 394 ? 'preocupado' : 'desconfiado', { look: [0, .5] }); pubUpd(S, t, t > 394 ? 'surpreso' : 'neutro');
      const a = (t - 391.28) * .5; cam(cm, [Math.sin(a) * 1.0, 2.05, Math.cos(a) * 1.0], [0, .86, 0], u / 5.63, 0, 0); return { tint: '#FFD8A8' }; }; }),
  // F9 — "com a mão parada no ar em cima do rei": freeze, a mão tremendo, os óculos escorregando
  mk(396.91, 398.98, { bg: '#F2B070', fov: 30 }, (c) => { const S = montaPatio(c, { op: CAIO });
    return (t, u, cm) => { S.op.pose(sentado({ shR: [70 + Math.sin(t * 40) * 1.5, 6], elR: 60, lean: 16, headX: 22 })); rosto(S.op, null, t, 'medo', { look: [0, .6] }); S.g.pose(jogaPose(397)); rosto(S.g, null, 397, 'neutro'); pubUpd(S, 397, 'surpreso');
      S.op.headG.position.y += 0; cam(cm, [[0, [1.0, 1.2, -.15]], [1, [.92, 1.18, -.22]]], [0, 1.0, -.45], u / 2.07, 0, 0); return { tint: '#FFD8A8', vig: .5 }; }; }),
  // F10 — "Guilherme, tem campeonato estadual no domingo, eu vou te inscrever agora!": o professor correndo com a ficha, alunos filmando
  mk(398.98, 403.34, { bg: '#F2B070', fov: 40 }, (c) => { const S = montaPatio(c, { op: CAIO, pub: 6 }); const pf = ator(c, PROFEF, 0, 0, 0); const fic = rb(.21, .29, .005, '#FBF8EE', 0, 0, 0); c.add(fic); const tels = S.pub.map(() => { const x = celular(); c.add(x); return x; });
    return (t, u, cm) => { const k = clamp((t - 399) / 2.2); pf.place(lerp(-3.5, -.6, easeOut(k)), lerp(-1.5, .9, k), 0, .9); const p = k < 1 ? correr(t, 2.6, .8) : { shR: [100, 10], elR: 20, shL: [30, 9], elL: 20 }; fala(pf, 'pef', t, 'feliz', p, 0); pf.pose(p); naMao(fic, pf, 'R', [0, -.06, .06], [-1.4, 0, 0]);
      S.g.pose(jogaPose(t)); rosto(S.g, null, t, 'surpreso', { look: [-.6, 0] }); S.op.pose(sentado({ lean: 30, headX: 30 })); rosto(S.op, null, t, 'triste'); S.pub.forEach((a, i) => { a.pose(soma(parado(t, i), G.filmar)); rosto(a, null, t, 'feliz'); naMao(tels[i], a, 'R', [0, -.08, .05], [0, 0, Math.PI / 2]); tels[i].tela('views', .05); });
      cam(cm, [[0, [2.2, 1.6, 2.8]], [1, [1.8, 1.5, 2.4]]], [-.4, .9, .2], u / 4.36); return { tint: '#FFD8A8' }; }; }),
  // F11 — "Melhor aluno da sala, viral tocando violão, e agora finalista de xadrez": três troféus imaginários
  mk(403.64, 411.20, { bg: '#14141C', fov: 36 }, (c) => { vazio(c, { cor: '#F2C230' }); c.add(new THREE.AmbientLight('#FFF0D8', .8)); const base = []; const it = [];
    for (let i = 0; i < 3; i++) { const b = cyl(.28, .32, .8, '#2A2A34', -1.0 + i, .4, 0, { out: .006, seg: 24 }); c.add(b); base.push(b); const L = new THREE.SpotLight('#FFF0C8', 2.2, 6, .35, .6, 1.2); L.position.set(-1.0 + i, 3, 1); L.target.position.set(-1.0 + i, .9, 0); c.add(L, L.target); }
    const p10 = prova('10', '#2E5EC8'); p10.rotation.set(-.3, 0, 0); p10.scale.setScalar(1.6); c.add(p10); const tel = celular(); tel.scale.setScalar(3); c.add(tel); tel.tela('views', 1); const T = tabuleiro(.035); c.add(T.g); it.push(p10, tel, T.g);
    const ch = new THREE.Mesh(new THREE.PlaneGeometry(10, 6), new THREE.MeshToonMaterial({ color: '#2A2A34' })); ch.rotation.x = -Math.PI / 2; c.add(ch); const pa = new THREE.Mesh(new THREE.PlaneGeometry(10, 5), new THREE.MeshToonMaterial({ color: '#3A3A48' })); pa.position.set(0, 2.5, -1.6); c.add(pa);
    return (t, u, cm) => { it.forEach((o, i) => { const k = easeOut(clamp((t - [404, 405.2, 406.6][i]) / .5)); o.position.set(-1 + i, .95 + .15 * k + Math.sin(t * 2 + i) * .02, 0); o.rotation.y = i === 2 ? t * .5 : Math.sin(t + i) * .3; o.visible = k > 0; o.scale.setScalar([1.6, 3, 1][i] * k + .001); });
      cam(cm, [[0, [0, 1.45, 3.2]], [1, [.3, 1.4, 2.6]]], [0, 1.15, 0], u / 7.56); return { bloom: .12, bloomT: .92, exposure: .8 }; }; }),
  // F12 — "Mas todo poder cobra alguma coisa, e esse estava cobrando calado": a câmera passa por trás, a sombra comprida na parede
  mk(411.20, 416.06, { bg: '#0C0C12', fov: 40 }, (c) => { c.add(new THREE.AmbientLight('#FFFFFF', .7)); c.add(new THREE.HemisphereLight('#E8E0FF', '#2A2A34', .6)); const it = [];
    for (let i = 0; i < 3; i++) { const b = cyl(.28, .32, .8, '#2A2A34', -1.0 + i, .4, 0, { out: .006, seg: 24 }); b.castShadow = true; c.add(b); }
    const p10 = prova('10', '#2E5EC8'); p10.rotation.set(-.3, 0, 0); p10.scale.setScalar(1.6); p10.position.set(-1, 1.1, 0); c.add(p10); const tel = celular(); tel.scale.setScalar(3); tel.position.set(0, 1.1, 0); c.add(tel); tel.tela('views', 1); const T = tabuleiro(.035); T.g.position.set(1, 1.1, 0); c.add(T.g);
    c.traverse((n) => { if (n.isMesh) n.castShadow = true; }); const ch = new THREE.Mesh(new THREE.PlaneGeometry(10, 6), new THREE.MeshToonMaterial({ color: '#2A2A34' })); ch.rotation.x = -Math.PI / 2; ch.receiveShadow = true; c.add(ch); const pa = new THREE.Mesh(new THREE.PlaneGeometry(12, 6), new THREE.MeshToonMaterial({ color: '#C8C0B0' })); pa.position.set(0, 3, -1.6); pa.receiveShadow = true; c.add(pa);
    const L = new THREE.SpotLight('#FFE8C0', 60, 14, .8, .3, 1); L.position.set(0, .6, 4); L.target.position.set(0, 1.2, -1.6); L.castShadow = true; L.shadow.mapSize.set(2048, 2048); c.add(L, L.target);
    return (t, u, cm) => { cam(cm, [[0, [2.4, 1.2, 1.8]], [.6, [1.6, 1.4, -1.0]], [1, [.4, 1.5, -1.3]]], [[0, [0, 1.1, 0]], [1, [0, 2.2, -1.6]]], u / 4.86, 0, 0); return { vig: .55 }; }; }),
  // F13 — "Na volta pra casa, ele vinha andando estudando abertura de xadrez no celular, foco total na tela"
  mk(416.06, 421.63, { bg: '#F0C49A', fov: 38 }, (c) => { const R = rua(c, { hora: 'tarde', tipo: 'casas' }); const g = ator(c, GUI, -5.2, 0, Math.PI, .16); const tel = celular(); c.add(tel); const set = emFoco([g.root, tel]);
    return (t, u, cm) => { const z = -(t - 416.06) * .9; g.place(-5.2, z, .16, Math.PI); g.pose(soma(andar(t, { f: 1.6 }), { shL: [64, 4], elL: 76, shR: [40, 12], elR: 70, headX: 26 })); rosto(g, null, t, 'determinado', { look: [0, .6] }); telNaMao(tel, g); tel.tela('xadrez', u / 5.57);
      const k = smooth(419.8, 420.6, t); UF.mundo.value = k; set(k, t); fundo(c, '#F0C49A', k); cam(cm, [[0, [-4.3, 1.5, z - 2.2]], [1, [-4.4, 1.45, z - 1.8]]], [-5.2, 1.1, z], u / 5.57, 0, 0); return { tint: '#FFE0C0' }; }; }),
  // F14 — "e não ouviu a buzina, não ouviu o grito da mulher na calçada, não ouviu a bicicleta": tudo cinza, sem som
  mk(421.63, 425.62, { bg: '#F0C49A', fov: 40 }, (c) => { const R = rua(c, { hora: 'tarde', tipo: 'casas' }); const g = ator(c, GUI, -5.2, 0, Math.PI, .16); const tel = celular(); c.add(tel); const set = emFoco([g.root, tel]);
    const car = carroPop('#3E7CC8'); c.add(car); const mu = ator(c, pessoa(1), 0, 0, 0); const bk = bicicleta('#2E5EB8'); c.add(bk); const ci = ator(c, CICLISTA, 0, 0, 0);
    return (t, u, cm) => { const z = -(t - 416.06) * .9; g.place(-5.2, z, .16, Math.PI); g.pose(soma(andar(t, { f: 1.6 }), { shL: [64, 4], elL: 76, shR: [40, 12], elR: 70, headX: 26 })); rosto(g, null, t, 'determinado', { look: [0, .6] }); telNaMao(tel, g); tel.tela('xadrez', .5 + u / 8);
      car.position.set(-2.0, 0, z - 6 + (t - 421.63) * 3); car.rotation.y = 0; mu.place(-6.2, z - 4, .16, .5); mu.pose(t > 423.3 ? { shR: [150, 20], elR: 30, shL: [120, 30], elL: 40, lean: -6 } : parado(t, 4)); rosto(mu, null, t, t > 423.3 ? 'medo' : 'neutro', { mouth: t > 423.3 ? { open: .9, round: .6 } : undefined });
      const bz = z + 9 - (t - 421.63) * 4.2; bk.position.set(-4.75, .16, bz); bk.rotation.y = Math.PI; bk.userData.gira(t * 10); ci.place(-4.75, bz + .05, .16 + .42, Math.PI); ci.pose({ hipL: [70 + Math.sin(t * 10) * 25, 6], hipR: [70 - Math.sin(t * 10) * 25, 6], knL: 70, knR: 70, shL: [60, 10], shR: [60, 10], elL: 20, elR: 20, lean: 20 }); rosto(ci, null, t, 'bravo');
      UF.mundo.value = 1; set(1, t); fundo(c, '#F0C49A', 1); cam(cm, [[0, [-3.0, 1.6, z - 3.5]], [1, [-3.2, 1.55, z - 3.0]]], [-4.8, 1.0, z + 1], u / 3.99, 0, 0); return { tint: '#FFE0C0' }; }; }),
  // F15 — "que passou a um palmo dele, raspou no braço e derrubou o celular no chão": câmera lenta, o celular voando, o som volta
  mk(425.62, 430.49, { bg: '#F0C49A', fov: 34, limpa: false }, (c) => { const R = rua(c, { hora: 'tarde', tipo: 'casas' }); const g = ator(c, GUI, -5.2, 0, Math.PI, .16); const tel = celular(); c.add(tel); const set = emFoco([g.root, tel]); const bk = bicicleta('#2E5EB8'); c.add(bk); const ci = ator(c, CICLISTA, 0, 0, 0);
    const z0 = -(425.62 - 416.06) * .9;
    return (t, u, cm) => { const lento = t < 428.9 ? .25 : 1; const tt = 425.62 + Math.min(t - 425.62, 3.3) * .25 + Math.max(0, t - 428.92); const z = z0 - (tt - 425.62) * .9; g.place(-5.2, z, .16, Math.PI); const bate = tt > 426.4;
      g.pose(bate ? { shL: [40, 50], elL: 30, shR: [60, 20], elR: 110, lean: -8, headX: -10 } : soma(andar(tt, { f: 1.6 }), { shL: [64, 4], elL: 76, headX: 26 })); rosto(g, null, t, bate ? 'medo' : 'determinado', { look: bate ? [.5, 0] : [0, .6] });
      const bz = z + 1.8 - (tt - 425.62) * 4.2 * 1.2; bk.position.set(-4.72, .16, bz); bk.rotation.y = Math.PI; bk.userData.gira(tt * 10); ci.place(-4.72, bz + .05, .58, Math.PI); ci.pose({ hipL: [70 + Math.sin(tt * 10) * 25, 6], hipR: [70 - Math.sin(tt * 10) * 25, 6], knL: 70, knR: 70, shL: [60, 10], shR: [60, 10], elL: 20, elR: 20, lean: 20 }); rosto(ci, null, t, 'bravo');
      if (!bate) { telNaMao(tel, g); tel.tela('xadrez', .8); } else { const v = clamp((tt - 426.4) / .7); tel.position.set(-5.4 - v * .5, .16 + Math.max(.012, 1.0 + v * .5 - v * v * 1.6), z - .3 - v * .4); tel.rotation.set(v * 9, v * 5, 0); tel.tela(v >= 1 ? 'chamadas' : 'xadrez', .2); }
      const off = smooth(428.9, 429.2, t); UF.mundo.value = 1 - off; set(1 - off, t); fundo(c, '#F0C49A', 1 - off);
      cam(cm, [[0, [-3.9, .95, z - 1.2]], [1, [-3.7, .9, z - 1.8]]], [-5.2, .75, z], u / 4.87, 0, 0); return { tint: '#FFE0C0' }; }; }),
  // F16 — "Tá surdo, moleque?": o ciclista olhando pra trás enquanto pedala, braço levantado
  mk(430.49, 431.47, { bg: '#F0C49A', fov: 36 }, (c) => { const R = rua(c, { hora: 'tarde', tipo: 'casas' }); const bk = bicicleta('#2E5EB8'); c.add(bk); const ci = ator(c, CICLISTA, 0, 0, 0);
    return (t, u, cm) => { const bz = -14 - (t - 430.49) * 4; bk.position.set(-4.72, .16, bz); bk.rotation.y = Math.PI; bk.userData.gira(t * 10); ci.place(-4.72, bz + .05, .58, Math.PI); const p = { hipL: [70 + Math.sin(t * 10) * 25, 6], hipR: [70 - Math.sin(t * 10) * 25, 6], knL: 70, knR: 70, shL: [60, 10], elL: 20, shR: [160, 20], elR: 20, headY: 110 };
      fala(ci, 'cic', t, 'bravo', p, 0); ci.pose(p); cam(cm, [-4.0, 1.3, bz - 3.2], [-4.72, 1.0, bz], u, 0, 0); return { tint: '#FFE0C0' }; }; }),
  // F17 — "E ele entendeu a regra que ninguém tinha avisado": mão no braço arranhado, o celular trincado no chão
  mk(431.47, 439.98, { bg: '#F0C49A', fov: 38 }, (c) => { const R = rua(c, { hora: 'tarde', tipo: 'casas' }); const z = -(426.4 - 416.06) * .9; const g = ator(c, GUI, -5.2, z, Math.PI, .16); const tel = celular(); c.add(tel); tel.position.set(-5.9, .175, z - .7); tel.rotation.set(-Math.PI / 2, 0, .6); tel.tela('chamadas', 0);
    const ar = rb(.08, .015, .005, '#E2443A', 0, 0, 0); c.add(ar);
    return (t, u, cm) => { const pb = { shL: [55, 25], elL: 70, lean: 10, headX: 30, headY: 15 }; g.pose(pb); g.root.updateMatrixWorld(true); const cot = g.arms.L.el.getWorldPosition(new THREE.Vector3()); const pu = g.hands.L.getWorldPosition(new THREE.Vector3()); const mid = cot.clone().lerp(pu, .45); alcanca(g, 'R', mid, pb); rosto(g, null, t, 'triste', { look: [.3, .7] }); ar.position.copy(mid); ar.lookAt(cot);
      cam(cm, [[0, [-4.4, 1.65, z - 2.3]], [1, [-4.45, 1.6, z - 2.15]]], [-5.3, .85, z - .2], u / 8.51); return { tint: '#FFE0C0' }; }; }),
  // F18 — "O perigo, as pessoas, e até quem você ama": três flashes (bicicleta, a mãe batendo na porta, o Davi cinza com a folha)
  mk(439.98, 443.52, { bg: '#C8C0B8', fov: 40, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.tel.visible = false; const r = ator(c, ROSECASA, -2.0, .85, Math.PI / 2); const d = ator(c, DAVI, .4, .6, -2.4); const f = folha(); f.scale.setScalar(.7); c.add(f); const bk = bicicleta('#2E5EB8'); c.add(bk); bk.position.set(-.2, 0, -.4); bk.rotation.y = .8;
    const set = emFoco([d.root, f]);
    return (t, u, cm) => { const i = t < 440.69 ? 0 : t < 441.7 ? 1 : 2; bk.visible = i === 0; r.root.visible = i === 1; d.root.visible = f.visible = i === 2; bk.userData.gira(t * 8);
      r.pose({ shR: [90, 0], elR: 60 + Math.abs(Math.sin(t * 14)) * 40 }); rosto(r, null, t, 'preocupado'); d.pose({ shL: [30, -40], elL: 120, shR: [30, -40], elR: 120, headX: 10 }); rosto(d, null, t, 'triste', { look: [0, .3] }); d.root.updateMatrixWorld(true); const a = d.hands.L.localToWorld(new THREE.Vector3(0, -.04, .04)), b = d.hands.R.localToWorld(new THREE.Vector3(0, -.04, .04)); f.position.copy(a).add(b).multiplyScalar(.5); f.quaternion.copy(d.root.quaternion); f.set(0);
      UF.mundo.value = 1; UF.alvo.value = i === 2 ? .85 : 0; set(i === 2 ? 1 : 0, t); fundo(c, '#C8C0B8', 1);
      if (i === 0) cam(cm, [.9, 1.0, .9], [-.2, .5, -.4], (t - 439.98) / .7, 0, 0); else if (i === 1) cam(cm, [-3.0, 1.4, .3], [-2.0, 1.2, .85], (t - 440.69) / 1, 0, 0); else cam(cm, [[0, [-.4, 1.1, -.3]], [1, [-.3, 1.05, -.2]]], [.4, .75, .6], (t - 441.7) / 1.8, 0, 0); return { tint: '#E0DCF4', vig: .5 }; }; }),
];

// ================================================================ DIA 5
export const ATO6 = [
  // G1 — "Dia cinco. Ele passou o dia inteiro treinando partidas no celular": time-lapse fixo, o sol atravessa, as pessoas passam como fantasmas
  mk(443.52, 456.23, { bg: '#DDE6EE', fov: 46, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); const g = ator(c, GUI, 0, 0, 0); sentar(g, .85, -.1, -Math.PI / 2, .42); const sol = K.luzes.sol;
    const fs = [ator(c, ROSECASA, 0, 0, 0), ator(c, DAVI, 0, 0, 0), ator(c, ROSECASA, 0, 0, 0)]; fs.forEach((k) => fantasma(k, .35)); const pr = cyl(.11, .09, .02, '#F4F1EA', 0, 0, 0); c.add(pr);
    return (t, u, cm) => { const k = u / 12.71; g.pose(sentadoCel(t * 4)); rosto(g, null, t, 'determinado', { look: [0, .6] }); telNaMao(K.tel, g); K.tel.tela('xadrez', k); sol.position.set(.4 + lerp(-2, 2, k), 2.3, -2.1); sol.color.set(k > .7 ? '#FF9A60' : '#FFF0D0'); sol.intensity = k > .85 ? 4 : 10; K.luzes.LG.intensity = k > .8 ? 2 : 0;
      fs.forEach((f, i) => { const a = clamp((t - (446 + i * 3.2)) / 1.6); f.root.visible = a > 0 && a < 1; f.place(lerp(-1.4, 1.4, a), .9 - i * .1, 0, Math.PI / 2); f.pose(andar(t * 3, { f: 2 })); rosto(f, null, t, 'triste'); }); naMao(pr, fs[0], 'R', [0, -.06, .1], false);
      cam(cm, [[0, [-1.15, 2.0, 1.3]], [1, [-1.05, 1.9, 1.15]]], [.7, .8, -.1], k, 0, 0); return { tint: k > .7 ? '#FFD8B0' : '#FFF4E8' }; }; }),
  // G2 — "Naquele dia era o aniversário do Tiago": bolo pequeno com vela, três amigos cantando, o Tiago olhando pra porta
  mk(456.23, 462.08, { bg: '#E8D8B8', fov: 40 }, (c) => { const S = salinha(c); const bo = bolo(); bo.position.set(.2, .76, .35); c.add(bo); const ti = ator(c, TIAGO, .2, -.25, 0); const am = [0, 1, 2].map((i) => ator(c, aluno(i + 5, { camisa: ['#E57AA0', '#3E7CC8', '#F2994A'][i] }), -.5 + i * .7, 1.0, Math.PI));
    return (t, u, cm) => { ti.pose(soma(parado(t, 3), { headY: 50 })); rosto(ti, null, t, 'triste', { look: [.8, 0] }); am.forEach((a, i) => { a.pose(soma(parado(t, i), { shL: [40, -10], shR: [40, -10], elL: 60, elR: 60 })); rosto(a, null, t, 'neutro', { mouth: { open: Math.abs(Math.sin(t * 4 + i)) * .5 } }); });
      if (bo.userData.chama) bo.userData.chama.scale.y = 1 + Math.sin(t * 15) * .2; cam(cm, [[0, [.35, 1.85, 1.55]], [1, [.3, 1.75, 1.45]]], [.2, .9, -.05], u / 5.85); return { tint: '#FFE8C8', sat: .85 }; }; }),
  // G3 — "o mesmo Tiago que filmou o violão, que comemorou o 10, que inscreveu ele no grupo de xadrez": flashes, e a conversa sem resposta
  mk(462.08, 467.68, { bg: '#DDE6EE', fov: 30, limpa: false }, (c) => { vazio(c, { cor: '#9FD8FF' }); const tel = celular(); tel.scale.setScalar(5); tel.position.set(0, 1, 0); c.add(tel);
    return (t, u, cm) => { tel.tela('conversa'); tel.rotation.y = Math.sin(t * .6) * .15; cam(cm, [[0, [0, 1.05, 1.6]], [1, [0, 1.0, 1.25]]], [0, .98, 0], u / 5.6, 0, 0); return { vig: .5 }; }; }),
  // G5 — "Suave, mano. Tu tá ocupado demais pra gente agora. Boa sorte no campeonato.": o áudio e o Tiago apagando a vela sozinho
  mk(467.68, 472.84, { bg: '#E8D8B8', fov: 36 }, (c) => { const S = salinha(c); const bo = bolo(); bo.position.set(.2, .76, .35); c.add(bo); const ti = ator(c, TIAGO, .2, -.25, 0); const tel = celular(); c.add(tel);
    return (t, u, cm) => { const sopra = t > 471.2; const p = sopra ? { lean: 20, headX: 20, shL: [20, 10], shR: [20, 10] } : { shR: [80, 10], elR: 110, headX: 10 }; fala(ti, 'tiago', t, 'triste', p, 0, { mouth: sopra ? { open: .4, round: 1 } : undefined }); ti.pose(p);
      if (!sopra) { naMao(tel, ti, 'R', [0, -.06, .06], false); tel.lookAt(cm.position); tel.tela('audio', (t - 467.68) / 3.5); tel.visible = true; } else tel.visible = false; if (bo.userData.chama) bo.userData.chama.visible = t < 471.7;
      cam(cm, [[0, [.8, 1.25, 1.3]], [1, [.65, 1.2, 1.1]]], [.2, 1.0, .1], u / 5.16); return { tint: '#FFE0C0', sat: .7, vig: .5 }; }; }),
  // G6 — "Você tá em casa, filho, mas não tá aqui.": ela colorida no batente, ele cinza
  mk(472.84, 475.86, { bg: '#C8C0B8', fov: 40 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.luzes.LG.intensity = 1.6; K.portaK.abre(1); const r = ator(c, ROSE, -1.15, .8, Math.PI / 2 - .3); const g = ator(c, GUI, 0, 0, 0); sentar(g, .85, -.1, -Math.PI / 2, .42); const set = emFoco([r.root]);
    return (t, u, cm) => { const p = soma(G.bracoCruzado, { tilt: 6 }); fala(r, 'mae', t, 'triste', p, 0); r.pose(p); g.pose(sentadoCel(t)); rosto(g, null, t, 'determinado', { look: [0, .6] }); telNaMao(K.tel, g); K.tel.tela('xadrez', .7);
      UF.mundo.value = 1; set(.3, t); fundo(c, '#C8C0B8', 1); cam(cm, [[0, [1.4, 1.55, -1.3]], [1, [1.3, 1.5, -1.2]]], [-.3, 1.0, .45], u / 3.02); return { tint: '#E8E2FF' }; }; }),
  // G7 — "Mãe, é só até domingo.": só a luz do celular no rosto, a mãe sai, a porta fecha devagar
  mk(475.86, 477.53, { bg: '#1A1A22', fov: 40 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const r = ator(c, ROSE, -1.75, .85, -Math.PI / 2 + .3); const g = ator(c, GUI, 0, 0, 0); sentar(g, .85, -.1, -Math.PI / 2, .42);
    return (t, u, cm) => { const p = sentadoCel(t); fala(g, 'gui', t, 'tedio', p, 0, { look: [0, .6] }); g.pose(p); telNaMao(K.tel, g); K.tel.tela('xadrez', .75); const sai = clamp((t - 476.4) / .8); r.place(-1.75 - sai * .6, .85, 0, Math.PI / 2 * (sai > 0 ? -1 : -1) - Math.PI); r.pose(andar(t, { f: 1.5 })); rosto(r, null, t, 'triste'); K.portaK.abre(1 - clamp((t - 476.8) / .7));
      cam(cm, [[0, [-.15, 1.3, -.95]], [1, [-.1, 1.28, -.85]]], [.75, 1.05, -.1], u / 1.67); return { tint: '#C8D4FF', exposure: .75 }; }; }),
  // G8 — "E o Davi parou de pedir. Não bateu mais na porta": passa reto pela porta
  mk(477.53, 482.48, { bg: '#2A2A34', fov: 40, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'noite', corte: true }); K.luzes.LG.intensity = 1.6; const g = ator(c, GUI, 0, 0, 0); sentar(g, .85, -.1, -Math.PI / 2, .42); const d = ator(c, DAVI, 0, 0, 0); K.portaD.abre(0);
    return (t, u, cm) => { g.pose(sentadoCel(t)); rosto(g, null, t, 'determinado', { look: [0, .6] }); telNaMao(K.tel, g); K.tel.tela('xadrez', .8); const k = clamp((t - 478.2) / 3.5); d.place(lerp(4.0, 1.8, k), lerp(1.2, .6, k), 0, -Math.PI / 2 - .4); d.pose(k < 1 ? andar(t, { f: 1.4, amp: .6 }) : parado(t, 2)); rosto(d, null, t, 'triste', { look: [-.5, .3] });
      cam(cm, [[0, [1.6, 1.5, 4.2]], [1, [1.7, 1.4, 3.8]]], [1.6, 1.0, .2], u / 4.95, 0, 0); return { tint: '#E8E2FF' }; }; }),
  // G9 — "e a folha dobrada foi parar no fundo da mochila dele, debaixo do estojo"
  mk(482.48, 487.35, { bg: '#E8D8B8', fov: 38 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.luzes.LD.intensity = 1.6; K.mochila.visible = false; const d = ator(c, DAVI, 0, 0, 0); sentar(d, 3.4, .5, -Math.PI / 2 + .2, .36); const m = mochila('#3E7CC8'); m.position.set(2.85, .1, .5); m.rotation.y = Math.PI / 2; m.scale.setScalar(1.3); c.add(m); const f = folha(); f.scale.setScalar(.6); c.add(f); const est = rb(.2, .04, .07, '#F2546E', 0, 0, 0, { out: .003 }); c.add(est);
    return (t, u, cm) => { const k = clamp((t - 483.5) / 2.0); d.pose(sentado({ shL: [lerp(30, 70, k), -20], elL: lerp(110, 30, k), shR: [40, -10], elR: 80, lean: k * 24, headX: 20 })); rosto(d, null, t, 'triste', { look: [-.3, .7] }); d.root.updateMatrixWorld(true); const a = d.hands.L.localToWorld(new THREE.Vector3(0, -.04, .04)); f.position.lerpVectors(a, new THREE.Vector3(2.85, .25, .5), k); f.rotation.set(0, Math.PI / 2, 0); f.set(0); f.visible = k < .95;
      est.position.set(2.85, lerp(.75, .3, clamp((t - 485.6) / .8)), .5); est.visible = t > 485.4; cam(cm, [[0, [2.2, 1.2, 1.35]], [1, [2.3, 1.1, 1.2]]], [3.05, .45, .5], u / 4.87); return { tint: '#FFE0C0' }; }; }),
  // G10 — "junto com um bilhete da escola escrito dia da família que ninguém leu": close no bilhete, o zíper fechando
  mk(487.35, 492.32, { bg: '#E8D8B8', fov: 30, perto: true, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.luzes.LD.intensity = 1.6; K.mochila.visible = false; const m = mochila('#3E7CC8'); m.position.set(2.85, .1, .5); m.rotation.y = Math.PI / 2; m.scale.setScalar(1.3); c.add(m); const bi = bilhete(.2, .14); bi.position.set(2.85, .62, .52); bi.rotation.set(-.6, 0, 0); c.add(bi);
    const zip = rb(.02, .03, .02, '#C9CED6', 0, 0, 0); c.add(zip);
    return (t, u, cm) => { const z = clamp((t - 489.6) / 2.2); zip.position.set(2.85, .43, lerp(.32, .68, z)); bi.visible = z < .7;
      if (t < 489.6) cam(cm, [[0, [2.85, 1.05, .85]], [1, [2.85, .9, .75]]], [2.85, .42, .5], (t - 487.35) / 2.25, 0, 0); else cam(cm, [2.7, .9, .85], [2.85, .42, .5], (t - 489.6) / 2.7, 0, 0); return { tint: '#FFE0C0', vig: .5 }; }; }),
];

// ================================================================ DIA 6
export const ATO7 = [
  // H1 — "Dia seis, véspera da final. A Dona Rose entra no quarto, senta na beira da cama e fala devagar": segura a mão dele
  mk(492.32, 500.32, { bg: '#DDE6EE', fov: 42 }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); K.tel.visible = false; const g = ator(c, GUI, 0, 0, 0); sentar(g, .85, -.55, -Math.PI / 2, .42); const T = tabuleiro(.04); T.g.position.set(.75, .45, .15); c.add(T.g); const r = ator(c, ROSE, 0, 0, 0); K.portaK.abre(1);
    return (t, u, cm) => { g.pose(sentado({ shR: [40, 10], elR: 60, shL: [30, 10], elL: 40, lean: 18, headX: 30 })); rosto(g, null, t, 'determinado', { look: [0, .8] }); const k = clamp((t - 492.6) / 3); const sen = t > 495.8;
      if (!sen) { r.place(lerp(-1.6, .4, k), lerp(.85, .6, k), 0, .6); r.pose(andar(t, { f: 1.5 })); } else { sentar(r, .55, .45, -2.6, .42); r.pose(sentado({ shL: [50, -20], elL: 40, shR: [20, 10], elR: 30 })); } rosto(r, null, t, 'preocupado', { look: [.3, 0] });
      cam(cm, [[0, [-.6, 1.5, 1.3]], [1, [-.45, 1.4, 1.1]]], [.6, .85, 0], u / 8); return DIA; }; }),
  // H2 — "Amanhã às 10 tem o dia da família na escola do Davi...": close na mãe, o rosto dela vai ficando cinza e desfocado
  mk(500.32, 510.64, { bg: '#DDE6EE', fov: 36 }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); K.tel.visible = false; const g = ator(c, GUI, 0, 0, 0); sentar(g, .85, -.55, -Math.PI / 2, .42); const T = tabuleiro(.04); T.g.position.set(.75, .45, .15); c.add(T.g); const r = ator(c, ROSE, 0, 0, 0); sentar(r, .55, .45, -2.6, .42); const set = emFoco([T.g]);
    return (t, u, cm) => { g.pose(sentado({ shR: [40, 10], elR: 60, shL: [30, 10], elL: 40, lean: 18, headX: 30 })); rosto(g, null, t, 'determinado', { look: [0, .8] }); const p = sentado({ shL: [50, -20], elL: 40, shR: [30, 10], elR: 60 }); fala(r, 'mae', t, 'preocupado', p, .3); r.pose(p);
      const k = smooth(502, 509, t); UF.mundo.value = k; set(k, t); fundo(c, '#DDE6EE', k); cam(cm, [[0, [1.0, 1.3, -.4]], [1, [1.0, 1.25, -.25]]], [.5, 1.1, .45], u / 10.32); return { ...DIA, focus: lerp(5, .3, k), range: .3, blur: k * 16 }; }; }),
  // H3 — "Uhum, vou sim.": só os olhos dele, refletindo o tabuleiro
  mk(510.64, 512.06, { bg: '#DDE6EE', fov: 22, perto: true, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); K.tel.visible = false; const g = ator(c, GUI, 0, 0, 0); sentar(g, .85, -.55, -Math.PI / 2, .42);
    return (t, u, cm) => { const p = sentado({ shR: [40, 10], elR: 60, lean: 18, headX: 30 }); fala(g, 'gui', t, 'determinado', p, 0, { look: [0, .8] }); g.pose(p); g.headG.updateMatrixWorld(true); const h = g.headG.localToWorld(new THREE.Vector3(0, .28, .25)); const f = g.headG.localToWorld(new THREE.Vector3(0, .26, .85));
      cam(cm, [f.x, f.y, f.z], [h.x, h.y, h.z], u / 1.42, 0, 0); return DIA; }; }),
  // H4 — "Ele respondeu, ela saiu aliviada": beija a testa dele e sai sorrindo
  mk(512.06, 514.84, { bg: '#DDE6EE', fov: 40 }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); K.tel.visible = false; const g = ator(c, GUI, 0, 0, 0); sentar(g, .85, -.55, -Math.PI / 2, .42); const T = tabuleiro(.04); T.g.position.set(.75, .45, .15); c.add(T.g); const r = ator(c, ROSE, 0, 0, 0); K.portaK.abre(1);
    return (t, u, cm) => { g.pose(sentado({ shR: [40, 10], elR: 60, lean: 18, headX: 30 })); rosto(g, null, t, 'determinado', { look: [0, .8] }); const k = clamp((t - 513.2) / 1.6);
      if (t < 513.2) { r.place(.6, -.35, 0, -Math.PI / 2 - .3); r.pose({ lean: 30, headX: 10, shL: [40, 10], shR: [40, 10] }); rosto(r, null, t, 'feliz', { blink: 1 }); } else { r.place(lerp(.6, -1.2, k), lerp(-.35, .8, k), 0, 2.4); r.pose(andar(t, { f: 1.6 })); rosto(r, null, t, 'feliz'); }
      cam(cm, [[0, [-.15, 1.5, -1.35]], [1, [-.05, 1.45, -1.25]]], [.7, 1.0, -.4], u / 2.78); return DIA; }; }),
  // H5 — "porque estava focado 100% num cavalo preto na casa f6": zoom seco no cavalo brilhando
  mk(514.84, 520.55, { bg: '#1A1A22', fov: 30, perto: true, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); K.tel.visible = false; const g = ator(c, GUI, 0, 0, 0); sentar(g, .85, -.55, -Math.PI / 2, .42); const T = tabuleiro(.04); T.g.position.set(.75, .45, .15); c.add(T.g); const cv = T.P.g8; const set = emFoco([cv]);
    return (t, u, cm) => { g.pose(sentado({ shR: [40, 10], elR: 60, lean: 18, headX: 30 })); rosto(g, null, t, 'determinado', { look: [0, .8] }); T.move(cv, 'g8', 'f6', clamp((t - 515.2) / .6)); UF.mundo.value = .9; set(1, t); fundo(c, '#1A1A22', .9); T.g.updateMatrixWorld(true);
      const p = cv.getWorldPosition(new THREE.Vector3()); const k = easeOut(clamp((t - 517.8) / .35)); cam(cm, [p.x + lerp(.6, .22, k), p.y + lerp(.5, .14, k), p.z + lerp(.6, .2, k)], [p.x, p.y + .03, p.z], u / 5.71, 0, 0); return { vig: .55, focus: lerp(.9, .3, k), range: .15, blur: 10 }; }; }),
  // H6 — "E do outro lado da parede, o Davi ensaiava baixinho sozinho no quarto, segurando a folha": a casa em corte, a parede no meio
  mk(520.55, 530.80, { bg: '#2A2A34', fov: 40, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'noite', corte: true }); K.luzes.LG.intensity = 1.6; K.luzes.LD.intensity = 1.6; K.tel.visible = false; const g = ator(c, GUI, 0, 0, 0); sentar(g, .85, -.55, -Math.PI / 2, .42); const T = tabuleiro(.04); T.g.position.set(.75, .45, .15); c.add(T.g);
    const d = ator(c, DAVI, 2.1, -.7, Math.PI); const f = folha(); f.scale.setScalar(.6); c.add(f);
    return (t, u, cm) => { g.pose(sentado({ shR: [40, 10], elR: 60, lean: 18, headX: 30 })); rosto(g, null, t, 'determinado', { look: [0, .8] }); const recomeca = Math.floor((t - 520.5) / 2.3) % 2 === 1;
      d.pose(soma(parado(t, 2), { shL: [70, -10], elL: 60, shR: [70, -10], elR: 60, headX: recomeca ? 10 : -4 })); rosto(d, null, t, recomeca ? 'preocupado' : 'feliz', { mouth: { open: Math.abs(Math.sin(t * 8)) * .35 } }); d.root.updateMatrixWorld(true);
      const a = d.hands.L.localToWorld(new THREE.Vector3(0, -.04, .04)), b = d.hands.R.localToWorld(new THREE.Vector3(0, -.04, .04)); f.position.copy(a).add(b).multiplyScalar(.5); f.quaternion.copy(d.root.quaternion); f.rotateY(Math.PI); f.set(0);
      if (t < 527) cam(cm, [[0, [1.5, 1.6, 4.4]], [1, [1.5, 1.5, 4.0]]], [1.5, 1.0, -.3], (t - 520.55) / 6.45, 0, 0); else cam(cm, [[0, [2.45, 1.05, -1.35]], [1, [2.4, 1.0, -1.3]]], [2.1, .78, -.7], (t - 527) / 3.8, 0, 0); return { tint: '#E8E2FF' }; }; }),
];
