// ATO 9 — o desenho (646 a 747 s): "me mostra o desenho", a revelação, os 20 minutos, a frase ensaiada, o abraço,
// a coxinha com o Tiago, a volta pra casa, a geladeira e o encerramento.
import * as THREE from 'three';
import { frenteDe, mk, cam, ator, rosto, fala, sentar, icone, UF, emFoco, fundo, celular, particulas, papelPicado, cronometro, soma, vivo, parado, andar, correr, G, sentado, clamp, smooth, lerp, easeIO, easeOut, easeIn, kv, naMao, rir, pular } from './cf.js';
import { montaSalao, salaoUpd } from './salao_cena.js';
import { montaCasa } from './casa_cena.js';
import { vazio, salaDavi, campinho } from './lugares_foco.js';
import { rua } from './lugares2.js';
import { GUI, DAVI, TIAGO, PROFEF } from './elenco_foco.js';
import { folha, trofeu, prova, violao, bola } from './pecas_foco.js';
import { mochila } from './objs.js';
import { rb, bx, cyl, sph, toon, luzToon } from './motor/toon.js';

const OURO = (c, k = 1, cor = '#F7E7C8') => { UF.mundo.value = k; UF.ouro.value = 1; fundo(c, cor, k, 1); };
const FX = { bloom: .45, bloomT: .8 };
/** Sala do Davi com os dois: Davi na cadeirinha do canto, Gui sentado no chão na frente dele. */
function montaFinal(c) { const S = salaDavi(c, { empilhadas: true }); const d = ator(c, DAVI, 0, 0, 0); sentar(d, 2.6, -2.3, -Math.PI * .8, .32); const g = ator(c, GUI, 2.05, -1.62, -1.9); const m = mochila('#3E7CC8'); c.add(m); const f = folha(); f.scale.setScalar(.8); c.add(f); const set = emFoco([d.root, g.root, m, f]); return { S, d, g, m, f, set }; }
const davSent = (t, o = {}) => sentado({ shL: [50, -40], elL: 110, shR: [50, -40], elR: 110, ...o });

export const ATO9 = [
  // K1 — "Me mostra o desenho.": close nos olhos dele, olhando só pro Davi
  mk(646.56, 648.00, { bg: '#F7E7C8', fov: 30 }, (c) => { const F = montaFinal(c); F.f.visible = false;
    return (t, u, cm) => { const p = G.sentadoChao; fala(F.g, 'gui', t, 'preocupado', p, 0, { look: [.5, -.3] }); F.g.pose(p); F.d.pose(davSent(t)); rosto(F.d, null, t, 'triste'); naMao(F.m, F.d, 'R', [-.08, -.1, .1], false); OURO(c); F.set(1, t);
      F.g.headG.updateMatrixWorld(true); const h = F.g.headG.localToWorld(new THREE.Vector3(0, .26, .2)), e = F.g.headG.localToWorld(new THREE.Vector3(-.15, .3, .95)); cam(cm, [e.x, e.y, e.z], [h.x, h.y, h.z], u / 1.44, 0, 0); return FX; }; }),
  // K2 — "Não precisa mais, já acabou.": aperta a mochila contra o peito
  mk(648.00, 650.32, { bg: '#F7E7C8', fov: 32 }, (c) => { const F = montaFinal(c); F.f.visible = false;
    return (t, u, cm) => { const p = davSent(t, { shL: [60, -50], elL: 125, shR: [60, -50], elR: 125, lean: 6 }); fala(F.d, 'davi', t, 'triste', p, 0, { look: [-.3, .2] }); F.d.pose(p); naMao(F.m, F.d, 'R', [-.12, -.06, .12], false); F.g.pose(G.sentadoChao); rosto(F.g, null, t, 'preocupado'); OURO(c); F.set(1, t);
      cam(cm, [[0, [1.7, .85, -1.3]], [1, [1.8, .82, -1.45]]], [2.6, .65, -2.3], u / 2.32); return FX; }; }),
  // K3 — "Precisa sim, eu quero ver.": estende a mão aberta
  mk(650.32, 652.48, { bg: '#F7E7C8', fov: 36 }, (c) => { const F = montaFinal(c); F.f.visible = false;
    return (t, u, cm) => { const k = smooth(650.6, 651.4, t); const p = soma(G.sentadoChao, { shR: [lerp(-30, 70, k), 10], elR: lerp(10, 15, k) }); fala(F.g, 'gui', t, 'feliz', p, 0); F.g.pose(p); F.d.pose(davSent(t)); rosto(F.d, null, t, 'surpreso', { look: [.3, .4] }); naMao(F.m, F.d, 'R', [-.08, -.1, .1], false); OURO(c); F.set(1, t);
      cam(cm, [[0, [1.0, .9, -1.0]], [1, [1.1, .85, -1.1]]], [2.3, .55, -1.95], u / 2.16); return FX; }; }),
  // K4 — "O Davi abriu a mochila, tirou a folha dobrada lá do fundo, toda amassada, e entregou": o zíper abrindo, as mãos desdobrando
  mk(652.48, 658.32, { bg: '#F7E7C8', fov: 30, perto: true, limpa: false }, (c) => { const F = montaFinal(c); const zip = rb(.02, .03, .02, '#C9CED6', 0, 0, 0); c.add(zip);
    return (t, u, cm) => { F.d.pose(davSent(t, { shL: [55, -20], elL: 80, shR: [40, -30], elR: 100 })); rosto(F.d, null, t, 'vergonha', { look: [0, .6] }); naMao(F.m, F.d, 'R', [-.08, -.1, .1], false); F.m.updateMatrixWorld(true); const mp = F.m.getWorldPosition(new THREE.Vector3());
      const zk = clamp((t - 652.9) / 1.0); zip.position.set(mp.x, mp.y + .12, mp.z); zip.position.x += lerp(.12, -.12, zk);
      const sai = clamp((t - 654.0) / 1.2); const entrega = clamp((t - 656.8) / .8); F.g.pose(soma(G.sentadoChao, { shR: [70, 10], elR: 20, shL: [70, -10], elL: 30 })); rosto(F.g, null, t, 'preocupado', { look: [0, .5] });
      F.g.root.updateMatrixWorld(true); const gh = F.g.hands.R.localToWorld(new THREE.Vector3(0, -.05, .05)); const pa = mp.clone().add(new THREE.Vector3(0, .1 + sai * .15, 0)); F.f.position.lerpVectors(pa, gh, entrega); F.f.quaternion.copy(F.g.root.quaternion); F.f.rotateY(Math.PI); F.f.rotateX(-.3 * entrega);
      F.f.set(t > 657.6 ? clamp((t - 657.6) / .7) * .5 : 0); F.f.rotation.z += Math.sin(t * 9) * .03 * (1 - entrega); F.f.visible = sai > 0; OURO(c); F.set(1, t);
      const tgt = t < 656.8 ? [mp.x, mp.y + .1, mp.z] : [F.f.position.x, F.f.position.y, F.f.position.z]; const fr = frenteDe(F.d.root, 1.0, .45); cam(cm, [lerp(fr[0], tgt[0], .25), fr[1], lerp(fr[2], tgt[2], .25)], tgt, u / 5.84, 0, 0); return FX; }; }),
  // K5 — "E no desenho tinha dois meninos jogando bola num campinho de giz de cera verde... o melhor dia da minha vida": a revelação em tela cheia
  mk(658.32, 674.56, { bg: '#F7E7C8', fov: 30, perto: true, limpa: false }, (c) => { luzToon(c, { r: 4, pos: [1, 3, 4], ki: 1.0, hemi: 1.6 }); const f = folha(); f.scale.setScalar(4); f.position.set(0, 1, 0); c.add(f); f.set(1); const w = .3 * 4, h = .225 * 4;
    const P = (u_, v_) => [(u_ - .5) * w, 1 + (.5 - v_) * h]; const pp = particulas(c, [0, 1.55, .1], { n: 50, cor: '#FFE08A', r: .5, tam: .02 });
    const K = [[658.32, [.5, .5], 1.25], [660.9, [.45, .78], .62], [663.2, [.32, .55], .55], [663.9, [.64, .62], .5], [665.3, [.64, .5], .3], [667.4, [.32, .4], .45], [669.9, [.5, .17], .55], [672.3, [.5, .17], .5], [674.56, [.5, .3], .9]];
    return (t, u, cm) => { let a = K[0], b = K[0]; for (let i = 0; i < K.length - 1; i++) if (t >= K[i][0]) { a = K[i]; b = K[i + 1]; } const k = easeIO(clamp((t - a[0]) / Math.max(.4, Math.min(1.2, b[0] - a[0])))); const uu = lerp(a[1][0], b[1][0], k), vv = lerp(a[1][1], b[1][1], k), d = lerp(a[2], b[2], k); const [x, y] = P(uu, vv);
      const br = smooth(672.3, 673.4, t); f.set(1, Math.round(br * 10) / 10); pp(br > 0 ? ((t - 672.3) / 2) % 1 : 0); f.rotation.z = Math.sin(t * .5) * .01; cam(cm, [x + Math.sin(t * .3) * .02, y, d], [x, y, 0], u / 16.24, 0, 0); return { bloom: .3 + br * .3, bloomT: .8, vig: .35 }; }; }),
  // K6 — "Era isso que eu ia apresentar. A professora pediu o melhor dia."
  mk(674.56, 678.72, { bg: '#F7E7C8', fov: 34 }, (c) => { const F = montaFinal(c); F.f.set(1);
    return (t, u, cm) => { const p = davSent(t, { shL: [30, 10], elL: 40, shR: [30, 10], elR: 40 }); fala(F.d, 'davi', t, 'vergonha', p, .3, { look: [.3, .3] }); F.d.pose(p); naMao(F.m, F.d, 'R', [-.08, -.1, .1], false); F.g.pose(soma(G.sentadoChao, { shR: [60, 10], elR: 30, shL: [60, -10], elL: 30 })); rosto(F.g, null, t, 'feliz', { lagrima: true });
      F.g.root.updateMatrixWorld(true); const a = F.g.hands.L.localToWorld(new THREE.Vector3(0, -.05, .05)), b = F.g.hands.R.localToWorld(new THREE.Vector3(0, -.05, .05)); F.f.position.copy(a).add(b).multiplyScalar(.5); F.f.quaternion.copy(F.g.root.quaternion); F.f.rotateX(-.4); OURO(c); F.set(1, t);
      cam(cm, [[0, [1.5, 1.0, -.9]], [1, [1.6, .95, -1.1]]], [2.4, .7, -2.1], u / 4.16); return FX; }; }),
  // K7 — "Foi o dia que você olhou pra mim.": flashback real do dia três, mesmo enquadramento do desenho
  mk(678.72, 681.40, { bg: '#BFE3F7', fov: 40 }, (c) => { const P = campinho(c); const d = ator(c, DAVI, 4.4, .2, Math.PI / 2); const g = ator(c, GUI, 3.4, .5, Math.PI / 2); const set = emFoco([d.root, g.root]); const B = bola(.35); c.add(B); B.position.set(5.5, 0, .2);
    return (t, u, cm) => { d.pose(soma(pular(t, 2.2), { shR: [40, 30], elR: 30 })); rosto(d, null, t, 'rindo', { lingua: true, pisca1: true }); g.pose(soma(G.comemora, pular(t, 1.6))); rosto(g, null, t, 'rindo'); OURO(c, 1, '#BFE3F7'); set(1, t);
      cam(cm, [[0, [3.9, .9, 4.2]], [1, [3.9, .85, 3.7]]], [3.9, .7, .3], u / 2.68); return { ...FX, vig: .45 }; }; }),
  // K8 — "Os 20 minutos de sábado... não foi o troféu, nem o 10, nem o violão": o cronômetro no centro, o resto encolhendo até sumir
  mk(681.40, 693.52, { bg: '#0C0A06', fov: 36 }, (c) => { vazio(c, { cor: '#F2C230' }); c.add(new THREE.AmbientLight('#FFF0D8', .8)); const cr = cronometro(2.2); cr.position.set(0, 1, 0); c.add(cr); const tr = trofeu(1.6), pv = prova('10', '#2E5EC8'), vi = violao({}); pv.rotation.x = 0; pv.scale.setScalar(1.6); vi.scale.setScalar(.9); c.add(tr, pv, vi); const pt = particulas(c, [0, 1, 0], { n: 50, cor: '#FFD86A', r: 1.2, tam: .025 });
    return (t, u, cm) => { cr.set(1200, .5 + .3 * Math.sin(t * 2)); cr.rotation.y = Math.sin(t * .6) * .15; pt(((t - 681.4) / 3) % 1); const T = [687.95, 689.02, 689.71];
      [tr, pv, vi].forEach((o, i) => { const a = t * .5 + i * 2.09; const enc = clamp((t - T[i]) / 1.0); o.position.set(Math.cos(a) * 1.0, 1 + Math.sin(a) * .5, Math.sin(a) * .4 - .3); o.scale.setScalar([1.6, 1.6, .9][i] * (1 - enc) + .001); o.visible = t > 684 && enc < 1; o.rotation.y = t; });
      cam(cm, [[0, [0, 1.05, 2.4]], [1, [0, 1.02, 1.6]]], [0, 1, 0], u / 12.12, 0, 0); return { bloom: .35, bloomT: .8, vig: .5 }; }; }),
  // K9 — "Me ensina a frase que você ia falar?": olhos cheios, sorrindo
  mk(693.52, 696.64, { bg: '#F7E7C8', fov: 30 }, (c) => { const F = montaFinal(c); F.f.set(1);
    return (t, u, cm) => { const p = soma(G.sentadoChao, { shR: [60, 10], elR: 30, shL: [60, -10], elL: 30 }); fala(F.g, 'gui', t, 'feliz', p, 0, { lagrima: true, look: [.5, -.3], olhosAbertos: true }); F.g.pose(p); F.d.pose(davSent(t)); rosto(F.d, null, t, 'feliz'); naMao(F.m, F.d, 'R', [-.08, -.1, .1], false);
      F.g.root.updateMatrixWorld(true); const a = F.g.hands.L.localToWorld(new THREE.Vector3(0, -.05, .05)); F.f.position.copy(a); F.f.quaternion.copy(F.g.root.quaternion); OURO(c); F.set(1, t);
      F.g.headG.updateMatrixWorld(true); const h = F.g.headG.localToWorld(new THREE.Vector3(0, .26, .2)), e = F.g.headG.localToWorld(new THREE.Vector3(-.25, .32, 1.15)); cam(cm, [e.x, e.y, e.z], [h.x, h.y, h.z], u / 3.12, 0, 0); return FX; }; }),
  // K10 — "Meu irmão é o melhor do mundo quando ele tá aqui.": de pé na cadeirinha, apresenta só pra ele; o Guilherme aplaude de pé
  mk(696.64, 699.92, { bg: '#F7E7C8', fov: 38 }, (c) => { const F = montaFinal(c); F.f.set(1); F.d.place(2.6, -2.3, .32, -Math.PI * .8); F.m.position.set(2.3, 0, -2.6);
    return (t, u, cm) => { const p = { shL: [80, -10], elL: 40, shR: [80, -10], elR: 40 }; fala(F.d, 'davi', t, 'feliz', p, 0, { look: [0, .2] }); F.d.pose(p); F.d.root.updateMatrixWorld(true); const a = F.d.hands.L.localToWorld(new THREE.Vector3(0, -.03, .05)), b = F.d.hands.R.localToWorld(new THREE.Vector3(0, -.03, .05)); F.f.position.copy(a).add(b).multiplyScalar(.5); F.f.quaternion.copy(F.d.root.quaternion); F.f.rotateY(Math.PI);
      const pe = t > 698.9; F.g.place(1.95, -1.55, 0, -1.9); const bat = Math.abs(Math.sin(t * 9)); F.g.pose(pe ? { shL: [70, -10], shR: [70, -10], elL: 60 + bat * 30, elR: 60 + bat * 30 } : soma(G.sentadoChao, { shL: [60, -10], elL: 50, shR: [60, -10], elR: 50 })); if (pe) F.g.root.position.y = 0; rosto(F.g, null, t, pe ? 'rindo' : 'feliz', { lagrima: true });
      OURO(c); F.set(1, t); cam(cm, [[0, [3.0, 1.15, -.75]], [1, [2.95, 1.12, -.7]]], [2.25, .9, -1.9], u / 3.28); return FX; }; }),
  // K11 — "Ninguém sabe se o poder foi embora depois daquele dia": o abraço, a câmera girando devagar em volta
  mk(699.92, 703.28, { bg: '#F7E7C8', fov: 38 }, (c) => { const F = montaFinal(c); F.f.visible = false; F.m.position.set(2.3, 0, -2.6);
    return (t, u, cm) => { F.g.place(2.25, -1.85, 0, -2.3); F.g.pose(soma(G.abraco, { lean: 14, knL: 40, knR: 40, bob: -.15 })); rosto(F.g, null, t, 'feliz', { blink: 1 }); F.d.place(2.55, -2.2, .32, -2.3 + Math.PI); F.d.pose(G.abraco); rosto(F.d, null, t, 'feliz', { blink: 1 }); OURO(c); F.set(1, t);
      const a = lerp(-.8, .4, u / 3.36); cam(cm, [2.4 + Math.sin(a) * 1.5, 1.2, -2.0 + Math.cos(a) * 1.5], [2.4, .85, -2.0], u / 3.36, 0, 0); return FX; }; }),
  // K12 — "mas o Guilherme descobriu que foco nunca foi um poder. Foco é só escolher onde colocar a sua vida": plano aberto, o dourado se desfaz em partículas
  mk(703.28, 710.56, { bg: '#F7E7C8', fov: 44 }, (c) => { const F = montaFinal(c); F.f.visible = false; F.m.position.set(2.3, 0, -2.6); const pt = particulas(c, [1.5, 1.5, -1], { n: 90, cor: '#FFE08A', r: 2.6, tam: .03, sobe: 1.5 });
    return (t, u, cm) => { F.g.place(2.25, -1.85, 0, -2.3); F.g.pose(soma(G.abraco, { lean: 14, knL: 40, knR: 40, bob: -.15 })); rosto(F.g, null, t, 'feliz', { blink: 1 }); F.d.place(2.55, -2.2, .32, -2.3 + Math.PI); F.d.pose(G.abraco); rosto(F.d, null, t, 'feliz', { blink: 1 }); const k = 1 - smooth(705.5, 709.5, t); OURO(c, k); F.set(k, t); pt(clamp((t - 705) / 4.5));
      cam(cm, [[0, [-2.0, 1.8, 2.2]], [1, [-2.6, 2.0, 2.6]]], [1.6, .8, -1.6], u / 7.28); return { bloom: .3, bloomT: .8 }; }; }),
  // K13 — "Naquela tarde, ele mandou mensagem pro Tiago pedindo desculpa e chamando pra comer uma coxinha": a foto da coxinha, o Tiago lendo e sorrindo
  mk(710.56, 716.48, { bg: '#E8D8B8', fov: 34, limpa: false }, (c) => { vazio(c, { cor: '#FFE0B0' }); c.add(new THREE.AmbientLight('#FFFFFF', .8)); const tel = celular(); tel.scale.setScalar(5); tel.position.set(0, 1, 0); c.add(tel); const ti = ator(c, TIAGO, 0, 0, 0); const t2 = celular(); c.add(t2);
    return (t, u, cm) => { const a = t < 713.6; tel.visible = a; ti.root.visible = !a; tel.tela('coxinha', clamp((t - 711) / 2)); ti.pose({ shR: [64, 4], elR: 76, shL: [30, 10], elL: 30, headX: 20 }); rosto(ti, null, t, t > 714.6 ? 'feliz' : 'neutro', { look: [0, .5] }); naMao(t2, ti, 'R', [0, -.07, .06], false); ti.headG.updateMatrixWorld(true); t2.lookAt(ti.headG.localToWorld(new THREE.Vector3(0, .2, .25))); t2.tela('coxinha', 1);
      if (a) cam(cm, [[0, [0, 1.0, 1.5]], [1, [0, 1.0, 1.2]]], [0, 1, 0], (t - 710.56) / 3.04, 0, 0); else cam(cm, [[0, [.9, 1.3, 1.6]], [1, [.75, 1.28, 1.4]]], [0, 1.1, 0], (t - 713.6) / 2.88); return { tint: '#FFF0DC' }; }; }),
  // K14 — "buscou o troféu": o professor entrega o troféu
  mk(716.48, 719.68, { bg: '#121218', fov: 36 }, (c) => { const S = montaSalao(c, { semGente: true }); const tr = trofeu(1.5); c.add(tr); S.adv.root.visible = S.juiz.root.visible = false;
    return (t, u, cm) => { const k = smooth(717.2, 718.2, t); S.gui.place(.4, 2.0, 0, Math.PI * 1.2); S.gui.pose({ shL: [lerp(10, 70, k), -10], elL: 30, shR: [lerp(10, 70, k), -10], elR: 30 }); rosto(S.gui, null, t, 'feliz'); S.prof.place(-.2, 1.5, 0, .9); S.prof.pose({ shR: [70, 0], elR: 20, shL: [70, 0], elL: 20 }); rosto(S.prof, null, t, 'feliz');
      naMao(tr, k < .5 ? S.prof : S.gui, k < .5 ? 'R' : 'L', [0, -.05, .1], false); cam(cm, [[0, [1.7, 1.3, .7]], [1, [1.55, 1.25, .85]]], [.1, 1.1, 1.75], u / 3.2); return { vig: .4 }; }; }),
  // K15 — "e voltou pra casa a pé com o Davi, chutando uma pedra pela calçada, com o celular desligado no bolso"
  mk(719.68, 725.44, { bg: '#F0C49A', fov: 40 }, (c) => { const R = rua(c, { hora: 'tarde', tipo: 'casas', incl: 4 }); const g = ator(c, GUI, 0, 0, 0); const d = ator(c, DAVI, 0, 0, 0); R.g.add(g.root, d.root); const pd = sph(.035, '#8A8278', 0, 0, 0); R.g.add(pd);
    return (t, u, cm) => { const z = -(t - 719.68) * .8; g.place(-5.0, z, .16, Math.PI); d.place(-5.6, z - .2, .16, Math.PI); g.pose(andar(t, { f: 1.5 })); d.pose(andar(t + .3, { f: 1.9 })); rosto(g, null, t, 'feliz', { look: [-.5, 0] }); rosto(d, null, t, 'rindo', { look: [.5, 0] });
      const pk = ((t - 719.68) * .8) % 1.6; pd.position.set(-5.3 + Math.sin(t) * .2, .18 + Math.max(0, Math.sin(pk / 1.6 * Math.PI)) * .05, z - .6 - pk * .3);
      if (t < 723.6) { const w = R.w(-5.3, 1.0, z); cam(cm, [w[0] + 1.6, w[1] + .7, w[2] + 3.2], w, u / 5.76, 0, 0); } else { g.root.updateMatrixWorld(true); const b = g.legs.L.hp.localToWorld(new THREE.Vector3(.08, -.1, .04)); cam(cm, [b.x + .5, b.y + .1, b.z + .25], [b.x, b.y, b.z], (t - 723.6) / 1.84, 0, 0); } return { tint: '#FFD8B0', bloom: .35 }; }; }),
  // K16 — "E na geladeira de casa, até hoje, o troféu fica do lado. Mas o desenho fica no meio."
  mk(725.44, 732.20, { bg: '#E8E0D0', fov: 36, perto: true, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); K.tel.visible = false; const tr = trofeu(1.2); tr.position.set(-1.98, 1.8, -1.05); c.add(tr); const f = folha(); f.scale.setScalar(1.35); f.position.set(-1.98, 1.15, -.765); f.set(1); c.add(f); const im = sph(.03, '#E2443A', -1.98, 1.42, -.75, { seg: 10, out: .003 }); c.add(im); c.add(cyl(.004, .004, .03, '#5AA84E', -1.98, 1.46, -.75, { seg: 6 }));
    return (t, u, cm) => { const br = smooth(730.3, 731.2, t) * (1 - smooth(731.6, 732.2, t)); f.set(1, Math.round(br * 10) / 10); const k = easeIO(u / 6.76); cam(cm, [lerp(-2.6, -1.95, k), lerp(1.5, 1.25, k), lerp(.9, -.1, k)], [-1.98, lerp(1.45, 1.18, k), -.77], u / 6.76, 0, 0); return { tint: '#FFF0DC', bloom: .2 + br * .4, bloomT: .8 }; }; }),
  // K17 — "E você, se pudesse focar 100% em uma coisa só hoje, no que você focaria?": close no Guilherme olhando pra câmera (a pergunta vem na tela)
  mk(732.20, 740.14, { bg: '#121218', fov: 32 }, (c) => { vazio(c, { cor: '#C8D4FF' }); c.add(new THREE.AmbientLight('#FFFFFF', .7)); const g = ator(c, GUI, 0, 0, 0);
    return (t, u, cm) => { g.pose(soma(parado(t, 1), G.maosBolso)); rosto(g, null, t, 'feliz', { look: [0, 0] }); cam(cm, [[0, [0, 1.25, 2.4]], [1, [0, 1.22, 2.0]]], [0, 1.1, 0], u / 7.94, 0, 0); return { vig: .55, exposure: lerp(1, .55, smooth(737.5, 738.3, t)) }; }; }),
  // K18 — "Se inscreve, que o próximo pode ser a sua ideia": o Davi passa correndo chutando a bola murcha, que bate no botão
  mk(740.14, 747.0, { bg: '#F7E7C8', fov: 36 }, (c) => { luzToon(c, { r: 6, pos: [2, 6, 4], ki: 1.4, hemi: 1.5 }); const ch = new THREE.Mesh(new THREE.PlaneGeometry(30, 20), new THREE.MeshToonMaterial({ color: '#E8D8B8' })); ch.rotation.x = -Math.PI / 2; c.add(ch); const pa = new THREE.Mesh(new THREE.PlaneGeometry(30, 10), new THREE.MeshToonMaterial({ color: '#F7E7C8' })); pa.position.set(0, 5, -3); c.add(pa);
    const d = ator(c, DAVI, 0, 0, 0); const B = bola(.35); c.add(B);
    return (t, u, cm) => { const x = lerp(-3.2, 1.6, clamp((t - 740.4) / 2.2)); d.place(x, 0, 0, Math.PI / 2); const ch2 = 741.8; d.pose(t < ch2 ? correr(t, 2.8, .9) : t < ch2 + .3 ? { hipR: [-30 + clamp((t - ch2) / .25) * 90, 0], knR: 20, shL: [40, 30], shR: [40, 30] } : soma(pular(t, 2.2), G.comemora)); rosto(d, null, t, t > ch2 + .4 ? 'rindo' : 'feliz', { lingua: t < ch2, pisca1: t > ch2 - .2 && t < ch2 + .3 });
      if (t < ch2) B.position.set(x + .3, 0, .15); else { const k = clamp((t - ch2) / .5); B.position.set(lerp(x + .3, 2.6, k), Math.sin(k * Math.PI * .8) * 1.4 + k * .4, lerp(.15, -.2, k)); B.visible = k < 1; } B.rotation.z = -t * 8;
      cam(cm, [[0, [x * .6, .9, 2.8]], [1, [x * .6, .9, 2.7]]], [x * .6, .6, 0], u / 6.86); return { bloom: .2 }; }; }),
];
