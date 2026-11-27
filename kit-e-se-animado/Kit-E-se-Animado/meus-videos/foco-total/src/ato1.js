// ATO 1 — dia 0 (36 a 129 s): a família, o Guilherme que não presta atenção em nada, o desenho do Davi, o gás, e o pedido antes de dormir.
import * as THREE from 'three';
import { apoia } from './ik.js';
import { frenteDe, mk, cam, ator, rosto, fala, sentar, icone, UF, emFoco, fundo, celular, particulas, vibra, soma, vivo, vivoS, parado, andar, correr, G, sentado, clamp, smooth, lerp, easeIO, easeOut, kv, naMao } from './cf.js';
import { ombro, montaCasa, sentaMesa, telNaMao, paginaUm, relogioParede, capa, carregando, sentadoCel, MESA, CAD } from './casa_cena.js';
import { mercado } from './lugares_foco.js';
import { salinha } from './lugares.js';
import { GUI, DAVI, DAVIPIJAMA, ROSE, pessoa } from './elenco_foco.js';
import { folha } from './pecas_foco.js';
import { deitar } from './lib.js';
import { rb, bx, cyl, sph, toon, ctex, luzToon } from './motor/toon.js';

const DIA = { tint: '#FFF8EC', bloom: .2 };
const NOITE = { tint: '#C8D4FF', exposure: .8 };
/** Guilherme deitado de costas na cama (cabeça na cabeceira). */
const deitaCama = (g) => { deitar(g, .95, .43, -.02); g.root.position.y = .43 + .2; return g; };

export const ATO1 = [
  // B1 — "Dia zero. Esse é o Guilherme, 17 anos": deitado na cama mexendo no celular
  mk(35.96, 39.12, { bg: '#DDE6EE', fov: 38, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); const g = ator(c, GUI, 0, 0, 0); deitaCama(g);
    return (t, u, cm) => { g.pose({ shR: [100, 8], elR: 35, shL: [10, 70], elL: 20, headX: 8 }); rosto(g, null, t, 'tedio', { look: [0, -.6] }); naMao(K.tel, g, 'R', [0, -.06, .05], false); g.headG.updateMatrixWorld(true); K.tel.up.set(0, 1, 0); K.tel.lookAt(g.headG.localToWorld(new THREE.Vector3(0, .2, .25))); K.tel.tela('foto', ((t * .7) % 1));
      cam(cm, [[0, [-.4, 2.2, .9]], [1, [-.15, 1.9, .6]]], [.95, .55, -.4], u / 3.16, 0, 0); return DIA; }; }),
  // B2 — "Mora com a mãe, a Dona Rose, que trabalha de caixa no mercado do bairro"
  mk(39.12, 42.88, { bg: '#F4F4F0', fov: 36 }, (c) => { const M = mercado(c); const r = ator(c, ROSE, -.05, -.56, 0); const cli = ator(c, pessoa(4), 1.6, 1.05, Math.PI + .3); const cx = cyl(.06, .06, .12, '#3E7CC8', 0, 0, 0, { out: .004 }); c.add(cx);
    return (t, u, cm) => { const f = (t * 1.25) % 1; const p = M.prods[Math.floor(t * 1.25) % 5]; r.pose({ shR: [55 + Math.sin(f * 6.28) * 10, 30 - f * 40], elR: 60, shL: [30, 10], elL: 70, lean: 6, headX: 10, twist: Math.sin(f * 6.28) * 10 });
      rosto(r, null, t, 'neutro', { look: [.3, .4] }); naMao(cx, r, 'R', [0, -.06, .05]); M.laser.material.opacity = f > .45 && f < .6 ? .9 : .3; M.telaM.paint(String(Math.floor(t * 1.25)), (x, W, H) => { x.fillStyle = '#1E3A5A'; x.fillRect(0, 0, W, H); x.fillStyle = '#9FE8B0'; x.font = "700 40px 'IBM Plex Mono'"; x.fillText('R$ ' + (12.5 + Math.floor(t * 1.25) * 4.9).toFixed(2), 20, H / 2); });
      cli.pose(parado(t, 3)); rosto(cli, null, t, 'neutro', { look: [-.3, .2] });
      cam(cm, [[0, [1.3, 1.45, 2.0]], [1, [.9, 1.35, 1.6]]], [0, 1.0, -.1], u / 3.76); return {}; }; }),
  // B3 — "e com o irmão mais novo, o Davi, 8 anos, banguela": correndo pela sala com capa de toalha
  mk(42.88, 46.44, { bg: '#E8D8B8', fov: 40 }, (c) => { const S = salinha(c); const d = ator(c, DAVI, 0, 0, 0); const cp = capa(d, '#E2443A');
    return (t, u, cm) => { const a = (t - 42.88) * 1.6; const x = .2 + Math.cos(a) * .95, z = .35 + Math.sin(a) * .7; d.place(x, z, 0, Math.atan2(-Math.sin(a), Math.cos(a))); d.pose(soma(correr(t, 3.2, 1), { shR: [150, 20], elR: 10 })); cp.vento(t, 1);
      rosto(d, null, t, 'feliz', { mouth: { open: .5, smile: .9 } }); cam(cm, [[0, [.2, 1.6, 1.45]], [1, [.25, 1.5, 1.35]]], [x * .5 + .1, .45, z * .5 + .1], u / 3.56); return DIA; }; }),
  // B4 — "que acha que o irmão mais velho é a pessoa mais legal do planeta": olhos brilhando, coração
  mk(46.44, 49.72, { bg: '#E8D8B8', fov: 62 }, (c) => { const S = salinha(c); const d = ator(c, DAVI, .55, .9, -2.5); const cp = capa(d, '#E2443A'); const g = ator(c, GUI, -.3, -1.0, 0); sentar(g, -.4, -.9, 0, .64); const tel = celular(); c.add(tel); const co = icone('coracao', .22); c.add(co);
    return (t, u, cm) => { d.pose(soma(parado(t, 2), { shL: [40, 10], elL: 90, shR: [40, 10], elR: 90, headX: -8, bob: Math.abs(Math.sin(t * 6)) * .02 })); cp.vento(t, .2); rosto(d, null, t, 'apaixonado', { look: [-.5, -.2] });
      g.pose(sentadoCel(t)); apoia(g, sentadoCel(t), .64); rosto(g, null, t, 'tedio', { look: [0, .6] }); naMao(tel, g, 'R', [0, -.07, .04], [-1.35, 0, 0]); tel.tela('chat', .5);
      const k = clamp((t - 47.4) / .5); co.visible = t > 47.4; d.headG.updateMatrixWorld(true); const hp = d.headG.localToWorld(new THREE.Vector3(.15, .55, 0)); co.position.copy(hp); co.position.y += k * .15; co.scale.setScalar(.22 * (k < 1 ? easeOut(k) * 1.2 : 1 + Math.sin(t * 9) * .08));
      cam(cm, [[0, [1.72, 1.5, .02]], [1, [1.66, 1.45, -.04]]], [.05, .75, -.12], u / 3.28); return DIA; }; }),
  // B5 — "o mesmo problema que quase todo mundo tem hoje": na escrivaninha, a cabeça vira pra cada barulho
  mk(49.72, 53.24, { bg: '#DDE6EE', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); const rel = relogioParede(); rel.position.set(.3, 2.0, 1.47); rel.rotation.y = Math.PI; c.add(rel);
    return (t, u, cm) => { const vira = kv(t, [[49.7, 0], [50.3, 0], [50.6, 1], [51.4, 1], [51.7, -1], [52.4, -1], [52.7, .4]]); g.pose(sentado({ shR: [50, 6], elR: 84, shL: [44, 6], elL: 80, lean: 8, headX: 6, headY: vira * 55 }));
      rosto(g, null, t, 'neutro', { look: [vira * .6, 0] }); telNaMao(K.tel, g, 'L'); K.tel.tela('apagada'); paginaUm(K, 0); K.telaTV.paint('tv' + Math.floor(t * 3), (x, W, H) => { x.fillStyle = ['#3E7CC8', '#F2C230', '#E2443A'][Math.floor(t * 3) % 3]; x.fillRect(0, 0, W, H); x.fillStyle = '#FFF'; x.beginPath(); x.arc(W * (.3 + (t % 1) * .4), H / 2, 30, 0, 7); x.fill(); });
      cam(cm, [[0, [-.9, 1.55, 1.35]], [1, [-.95, 1.5, 1.2]]], [-.75, 1.0, .15], u / 3.52); return DIA; }; }),
  // B6 — "ele não conseguia prestar atenção em nada": close, a cabeça vai de um lado pro outro
  mk(53.24, 56.04, { bg: '#DDE6EE', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g);
    return (t, u, cm) => { const vira = Math.sin((t - 53.24) * 4.2); g.pose(sentado({ shR: [50, 6], elR: 84, shL: [44, 6], elL: 80, lean: 8, headX: 6, headY: vira * 50 })); rosto(g, null, t, 'preocupado', { look: [vira * .8, 0] }); paginaUm(K, 0);
      cam(cm, [[0, [-1.38, 1.55, -1.38]], [1, [-1.3, 1.5, -1.25]]], [-.7, 1.1, .25], u / 2.8); return DIA; }; }),
  // B7 — "senta pra fazer a lição... escreve o número 1. O celular acende"
  mk(56.04, 60.16, { bg: '#DDE6EE', fov: 46, limpa: false, perto: true }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); const cn = cyl(.006, .006, .14, '#2E5EC8', 0, 0, 0, { out: .002 }); c.add(cn);
    K.tel.position.set(-1.02, .79, -.12); K.tel.rotation.set(-Math.PI / 2, 0, -Math.PI / 2);
    return (t, u, cm) => { g.pose(sentado(soma({ shR: [58, 4], elR: 92, shL: [44, 6], elL: 84, lean: 14, headX: 26 }, t > 59 && t < 60 ? { shR: [58 + Math.sin(t * 20) * 3, 4] } : {}))); rosto(g, null, t, 'neutro', { look: [0, .7] });
      naMao(cn, g, 'R', [0, -.05, .04], [.6, 0, 0]); paginaUm(K, clamp((t - 59.1) / .9)); const on = t > 60.0; K.tel.tela(on ? 'bloqueio' : 'apagada', 0);
      cam(cm, [[0, [-1.05, 1.22, 1.45]], [1, [-1.02, 1.16, 1.3]]], [-.88, .88, .1], u / 4.12, 0, 0); return DIA; }; }),
  // B8 — "ele pega só pra ver rapidinho. Responde, curte, abre um vídeo": por cima do ombro, a tela do celular
  mk(60.16, 66.84, { bg: '#DDE6EE', fov: 46, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); paginaUm(K, 1);
    return (t, u, cm) => { const pega = clamp((t - 62.2) / .6); g.pose(sentado(soma({ shR: [lerp(40, 66, pega), 6], elR: lerp(80, 108, pega), shL: [44, 6], elL: 84, lean: 10, headX: 24 }, vivoS(t, 1, .2)))); rosto(g, null, t, 'neutro', { look: [0, .6] });
      if (t < 62.2) { K.tel.position.set(-1.02, .79, -.12); K.tel.rotation.set(-Math.PI / 2, 0, -Math.PI / 2); K.tel.tela('bloqueio'); } else { telNaMao(K.tel, g); const tela = t < 63.7 ? ['bloqueio', 0] : t < 65.1 ? ['chat', (t - 63.7) / 1.4] : t < 66 ? ['foto', (t - 65.1) / .9] : ['tapete', 0]; K.tel.tela(tela[0], tela[1]); }
      const P = K.tel.position; if (t < 62.6) cam(cm, [[0, [-1.08, 1.24, 1.62]], [1, [-1.05, 1.2, 1.45]]], [-.88, .9, .1], (t - 60.16) / 2.44, 0, 0); else { g.headG.visible = false; g.headG.updateMatrixWorld(true); const e = g.headG.localToWorld(new THREE.Vector3(0, .3, .05)); cam(cm, [e.x, e.y, e.z], [P.x, P.y, P.z], (t - 62.6) / 4.2, 0, 0); } return { ...DIA, focus: .45, range: .25, blur: 6 }; }; }),
  // B9 — "40 minutos depois, assistindo um cara limpar um tapete": relógio girando, rosto hipnotizado com a luz do celular
  mk(66.84, 71.64, { bg: '#C8C0B8', fov: 46, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); paginaUm(K, 1); const rel = relogioParede(); rel.position.set(-.5, 2.0, -1.47); c.add(rel);
    const luz = new THREE.PointLight('#9FD8FF', .6, 1.2, 2); c.add(luz);
    return (t, u, cm) => { g.pose(sentadoCel(t)); rosto(g, null, t, 'tedio', { look: [0, .55], blink: 0 }); telNaMao(K.tel, g); K.tel.tela('tapete', ((t - 66.84) / 4.8)); luz.position.copy(K.tel.position); luz.position.x += .12;
      const m = clamp((t - 66.9) / 1.4) * 40; rel.hora(19, 20 + m); K.luzAbaj.intensity = 1.2; K.luzes.LG.intensity = 1.8;
      if (t < 68) cam(cm, [-.6, 1.95, -.6], [-.5, 2.0, -1.47], (t - 66.84) / 1.16, 0, 0); else cam(cm, [[0, [-1.4, 1.5, -1.38]], [1, [-1.32, 1.45, -1.22]]], [-.66, 1.12, .25], (t - 68) / 3.64, 0, 0);
      return { tint: '#D8E2FF', exposure: .9 }; }; }),
  // B10 — "e o caderno continua com o número 1": corte seco, zoom dramático no 1 sozinho
  mk(71.64, 73.72, { bg: '#C8C0B8', fov: 46, limpa: false, perto: true }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); paginaUm(K, 1); K.luzAbaj.intensity = .8; K.luzes.LG.intensity = 1.5;
    return (t, u, cm) => { g.pose(sentadoCel(t)); const k = easeOut(clamp((t - 71.7) / .5)); cam(cm, [lerp(-.98, -1.05, k), lerp(1.3, 1.02, k), lerp(.45, .32, k)], [-1.08, .79, .3], u / 2.08, 0, 0); return { tint: '#E8E2FF', vig: .55, exposure: .85 }; }; }),
  // B11 — "um estudo... 11 minutos numa tarefa antes de serem interrompidas": o quarto vira fundo desfocado do infográfico
  mk(73.72, 82.44, { bg: '#C8C0B8', fov: 46, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); paginaUm(K, 1); K.luzAbaj.intensity = 1.2; K.luzes.LG.intensity = 1.8;
    return (t, u, cm) => { g.pose(sentadoCel(t)); rosto(g, null, t, 'tedio', { look: [0, .55] }); telNaMao(K.tel, g); K.tel.tela('tapete', .5 + ((t * .2) % .5)); const a = lerp(.3, 1.0, u / 8.72);
      cam(cm, [-.62 + Math.cos(a) * 1.6, 1.5, .25 + Math.sin(a) * 1.6], [-.62, 1.0, .25], u / 8.72, 0, 0); return { tint: '#D0D8F0', exposure: .7, focus: .5, range: .2, blur: 16 }; }; }),
  // B12 — "e muitas vezes, quem interrompe é a gente mesmo": no espelho, o reflexo está mexendo no celular (ele não)
  mk(82.44, 85.48, { bg: '#B8D0DC', fov: 46, limpa: false }, (c) => { luzToon(c, { r: 5, pos: [3, 6, 3], ki: .9, hemi: 1.2, key: '#E8E8FF' }); c.add(new THREE.AmbientLight('#C8D0F0', .4));
    const pm = new THREE.MeshToonMaterial({ color: '#9AB4C4' }); const piso = new THREE.MeshToonMaterial({ color: '#8A5E3A' });
    const pl = (w, h, m, x, y, z, rx, ry) => { const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m); p.position.set(x, y, z); p.rotation.set(rx, ry, 0); c.add(p); };
    pl(6, 6, piso, 0, 0, 0, -Math.PI / 2, 0); for (const [w, h, y, z] of [[4, .95, .475, 0], [4, 1.6, 2.5, 0], [1.6, .8, 1.3, -1.15], [1.6, .8, 1.3, .95]]) pl(w, h, pm, -1.5, y, z, 0, Math.PI / 2);
    pl(4, 3.3, pm, -3.6, 1.6, 0, 0, Math.PI / 2); pl(4, 3.3, pm, 1.5, 1.6, 0, 0, -Math.PI / 2); pl(3, 3.3, pm, 0, 1.6, -2, 0, 0); pl(3, 3.3, pm, -2.5, 1.6, -2, 0, 0); pl(3, 3.3, pm, -2.5, 1.6, 2, 0, Math.PI);
    const mold = new THREE.Group(); mold.position.set(-1.49, 1.3, -.1); mold.rotation.y = Math.PI / 2; c.add(mold); for (const [w, h, x, y] of [[.74, .06, 0, .42], [.74, .06, 0, -.42], [.06, .9, -.35, 0], [.06, .9, .35, 0]]) mold.add(rb(w, h, .05, '#7A5236', x, y, 0, { out: .004 }));
    const g = ator(c, GUI, -.95, -.1, -Math.PI / 2); const r = ator(c, GUI, -2.05, -.1, Math.PI / 2); const tr = celular(); c.add(tr);
    return (t, u, cm) => { g.pose(parado(t, 1)); rosto(g, null, t, t > 83.6 ? 'surpreso' : 'neutro', { look: [0, 0] });
      r.pose({ shR: [62, 6], elR: 100, shL: [50, 14], elL: 92, headX: 22 }); rosto(r, null, t, 'tedio', { look: [0, .6] }); naMao(tr, r, 'R', [0, -.07, .04], [-1.35, 0, 0]); tr.tela('tapete', (t * .3) % 1);
      cam(cm, [[0, [.4, 1.5, 1.05]], [1, [.25, 1.48, .95]]], [-1.6, 1.22, -.1], u / 3.04, 0, 0); return NOITE; }; }),
  // B13 — "Gui, Gui, olha meu desenho!": o Davi de pijama entra com a folha e puxa a manga
  mk(85.48, 87.32, { bg: '#C8C0B8', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); paginaUm(K, 1); K.luzAbaj.intensity = 1.2; K.luzes.LG.intensity = 1.8; const d = ator(c, DAVIPIJAMA, 0, 0, 0); const f = folha(); c.add(f); f.scale.setScalar(.6); K.portaD.abre(1);
    return (t, u, cm) => { g.pose(sentadoCel(t)); rosto(g, null, t, 'tedio', { look: [0, .55] }); telNaMao(K.tel, g); K.tel.tela('tapete', .7);
      const k = clamp((t - 85.48) / 1.0); const x = lerp(1.5, -.5, easeOut(k)), z = lerp(.85, .8, k); d.place(x, z, 0, k < 1 ? -Math.PI / 2 : Math.PI); d.pose(k < 1 ? soma(andar(t, { f: 2.2 }), { shL: [70, -10], elL: 80 }) : { shR: [70, 20], elR: 30, shL: [60, -12], elL: 80, lean: 6 }); fala(d, 'davi', t, 'feliz', k < 1 ? andar(t, { f: 2.2 }) : { shR: [80 + Math.sin(t * 14) * 6, 20], elR: 30, shL: [60, -12], elL: 80 });
      naMao(f, d, 'L', [0, -.05, .04], [-.3, 0, 0]); f.set(0); cam(cm, [[0, [.7, 1.5, 1.35]], [1, [.6, 1.45, 1.3]]], [-.45, .95, .55], u / 1.84); return { tint: '#E8E2F8' }; }; }),
  // B14 — "Depois, Davi.": close no rosto iluminado pela tela, sem virar
  mk(87.32, 88.52, { bg: '#C8C0B8', fov: 46, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); const luz = new THREE.PointLight('#9FD8FF', 0, 1, 2); c.add(luz);
    return (t, u, cm) => { g.pose(sentadoCel(t)); fala(g, 'gui', t, 'tedio', sentadoCel(t), .2, { look: [0, .6] }); g.pose(sentadoCel(t)); telNaMao(K.tel, g); K.tel.tela('tapete', .75); luz.position.copy(K.tel.position);
      cam(cm, [[0, [-1.5, 1.32, -.85]], [1, [-1.42, 1.3, -.76]]], [-.66, 1.1, .25], u / 1.2, 0, 0); return { tint: '#D8E2FF', exposure: .85 }; }; }),
  // B15 — "É rapidinho, eu fiz pra...": o Davi começa a desdobrar a folha (pontinha de giz verde)
  mk(88.52, 90.24, { bg: '#C8C0B8', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const d = ator(c, DAVIPIJAMA, -.5, .8, Math.PI); const f = folha(); c.add(f); f.scale.setScalar(.6);
    return (t, u, cm) => { fala(d, 'davi', t, 'feliz', { shL: [62, -14], elL: 70, shR: [62, -14], elR: 70, headX: 12 }, .3); d.root.updateMatrixWorld(true); const a = d.hands.L.localToWorld(new THREE.Vector3(0, -.05, .03)), b = d.hands.R.localToWorld(new THREE.Vector3(0, -.05, .03));
      f.position.copy(a).add(b).multiplyScalar(.5); f.quaternion.copy(d.root.quaternion); f.rotateX(-.4); f.set(clamp((t - 89.1) / 1.6) * .3);
      cam(cm, [[0, [.3, 1.08, .3]], [1, [.2, 1.02, .38]]], [f.position.x, f.position.y, f.position.z], u / 1.72, 0, 0); return { tint: '#E8E2F8' }; }; }),
  // B16 — "Depois, já falei.": a mão faz "vai", a folha fecha de novo
  mk(90.24, 92.04, { bg: '#C8C0B8', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); paginaUm(K, 1); K.luzAbaj.intensity = 1.2; K.luzes.LG.intensity = 1.8; const d = ator(c, DAVIPIJAMA, -.5, .8, Math.PI); const f = folha(); c.add(f); f.scale.setScalar(.6);
    return (t, u, cm) => { const vai = Math.max(0, Math.sin((t - 90.4) * 9)) * (t > 90.4 && t < 91.4 ? 1 : 0); const pg = sentado({ shR: [62, 6], elR: 100, shL: [70 + vai * 20, 40 + vai * 20], elL: 20 + vai * 40, lean: 8, headX: 22 }); fala(g, 'gui', t, 'bravo', pg, 0, { look: [0, .6] }); g.pose(pg); telNaMao(K.tel, g); K.tel.tela('tapete', .8);
      d.pose({ shL: [62, -14], elL: 70, shR: [62, -14], elR: 70, headX: 4, lean: -4 }); rosto(d, null, t, t > 91 ? 'triste' : 'surpreso', { look: [-.6, -.1] }); d.root.updateMatrixWorld(true); const a = d.hands.L.localToWorld(new THREE.Vector3(0, -.05, .03)), b = d.hands.R.localToWorld(new THREE.Vector3(0, -.05, .03));
      f.position.copy(a).add(b).multiplyScalar(.5); f.quaternion.copy(d.root.quaternion); f.rotateX(-.4); f.set(.3 * (1 - clamp((t - 91.2) / .6)));
      cam(cm, [[0, [.7, 1.5, 1.35]], [1, [.6, 1.45, 1.3]]], [-.45, .95, .55], u / 1.8); return { tint: '#E8E2F8' }; }; }),
  // B17 — "O Davi ficou parado um tempo do lado da cama, segurando uma folha dobrada no peito"
  mk(92.04, 98.04, { bg: '#C8C0B8', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); paginaUm(K, 1); K.luzAbaj.intensity = 1.2; K.luzes.LG.intensity = 1.8; const d = ator(c, DAVIPIJAMA, .3, .2, -Math.PI / 2 - .6); const f = folha(); c.add(f); f.scale.setScalar(.6);
    return (t, u, cm) => { g.pose(sentadoCel(t)); rosto(g, null, t, 'tedio', { look: [0, .55] }); telNaMao(K.tel, g); K.tel.tela('tapete', .9);
      d.pose(soma({ shL: [30, -40], elL: 120, shR: [30, -40], elR: 120, headX: 8 }, vivo(t, 3, .5))); rosto(d, null, t, 'triste', { look: [-.7, 0] }); d.root.updateMatrixWorld(true); const a = d.hands.L.localToWorld(new THREE.Vector3(0, -.04, .04)), b = d.hands.R.localToWorld(new THREE.Vector3(0, -.04, .04));
      f.position.copy(a).add(b).multiplyScalar(.5); f.quaternion.copy(d.root.quaternion); f.set(0);
      cam(cm, [[0, [.55, 1.15, -1.2]], [1, [.45, 1.1, -1.05]]], [.1, .75, .25], u / 6, 0, .6); return { tint: '#E0DCF4' }; }; }),
  // B18 — "E depois voltou pro quarto dele, arrastando o chinelo": close no chinelo, a porta fecha
  mk(98.04, 101.40, { bg: '#C8C0B8', fov: 46, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const d = ator(c, DAVIPIJAMA, 0, 0, 0); const f = folha(); c.add(f); f.scale.setScalar(.6);
    return (t, u, cm) => { const k = clamp((t - 98.2) / 2.4); const k1 = clamp(k / .3), k2 = clamp((k - .3) / .7); const x = lerp(.3, 1.95, k2), z = lerp(.2, .85, k1); d.place(x, z, 0, k < .3 ? 0 : Math.PI / 2); d.pose(k < 1 ? soma(andar(t, { f: 1.4, amp: .5 }), { shL: [30, -40], elL: 120, shR: [30, -40], elR: 120 }) : parado(t, 2)); rosto(d, null, t, 'triste', { look: [0, .4] });
      d.root.updateMatrixWorld(true); const a = d.hands.L.localToWorld(new THREE.Vector3(0, -.04, .04)), b = d.hands.R.localToWorld(new THREE.Vector3(0, -.04, .04)); f.position.copy(a).add(b).multiplyScalar(.5); f.quaternion.copy(d.root.quaternion); f.set(0);
      K.portaD.abre(1 - clamp((t - 100.65) / .7)); if (t < 99.7) cam(cm, [[0, [-.35, .32, 1.35]], [1, [.25, .3, 1.38]]], [x, .14, z], u / 2.2, 0, 0); else cam(cm, [[0, [-.4, 1.15, 1.4]], [1, [-.2, 1.1, 1.4]]], [1.5, .8, .85], (t - 99.7) / 1.7, 0, 0); return { tint: '#E0DCF4' }; }; }),
  // B19 — "Guarda esse desenho, ele vai voltar": freeze na folha (o círculo vem na tela)
  mk(101.40, 103.48, { bg: '#2A2A34', fov: 30, limpa: false, perto: true }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.portaD.abre(0); const d = ator(c, DAVIPIJAMA, 2.3, .6, -2.2); const f = folha(); c.add(f); f.scale.setScalar(1.0); const set = emFoco([f]);
    return (t, u, cm) => { d.pose({ shL: [30, -40], elL: 120, shR: [30, -40], elR: 120, headX: 14 }); rosto(d, null, 101.4, 'triste', { look: [0, .5], vivo: false }); d.root.updateMatrixWorld(true); const a = d.hands.L.localToWorld(new THREE.Vector3(0, -.04, .04)), b = d.hands.R.localToWorld(new THREE.Vector3(0, -.04, .04));
      f.position.copy(a).add(b).multiplyScalar(.5); f.quaternion.copy(d.root.quaternion); f.set(0); UF.mundo.value = .9; set(1, t); fundo(c, '#2A2A34', .9);
      const F = frenteDe(d.root, .75 - u * .05, .5); cam(cm, F, [f.position.x, f.position.y, f.position.z], u / 2.08, 0, 0); return { vig: .5 }; }; }),
  // B20 — "Guilherme, você ouviu o que eu falei?": a Dona Rose na cozinha mexendo a panela, vira pra porta
  mk(103.48, 105.84, { bg: '#E8E0D0', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const r = ator(c, ROSE, -3.9, -.6, Math.PI); const col = cyl(.01, .01, .25, '#9A6236', 0, 0, 0); c.add(col); const fum = particulas(c, [-4.12, 1.08, -1.2], { n: 20, cor: '#F4F4F4', r: .25, g: .3, sobe: 1.2, tam: .05 });
    return (t, u, cm) => { const vira = smooth(103.6, 104.1, t); r.root.rotation.y = lerp(Math.PI, Math.PI * .35, vira); const p = soma({ shR: [55 - vira * 20, 10], elR: 70 + Math.sin(t * 7) * 15 * (1 - vira), shL: [20, 10], elL: 40 }); fala(r, 'mae', t, 'bravo', p, .6); r.pose(p); naMao(col, r, 'R', [0, -.08, .04]); fum((t * .5) % 1);
      cam(cm, [[0, [-2.2, 1.45, 1.1]], [1, [-2.4, 1.4, .95]]], [-3.8, 1.15, -.8], u / 2.36); return { tint: '#FFF0DC' }; }; }),
  // B21 — "Ouvi, mãe.": o Guilherme aparece na porta, balançando a cabeça, celular na mão
  mk(105.84, 106.88, { bg: '#E8E0D0', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.portaK.abre(1); const g = ator(c, GUI, -1.75, .85, -Math.PI / 2);
    return (t, u, cm) => { const p = { shR: [62, 6], elR: 100, shL: [20, 8], elL: 30, headX: 14 + Math.sin(t * 9) * 8 }; fala(g, 'gui', t, 'tedio', p, 0, { look: [0, .5] }); g.pose(p); telNaMao(K.tel, g); K.tel.tela('tapete', .9);
      cam(cm, [[0, [-3.3, 1.35, .6]], [1, [-3.15, 1.33, .65]]], [-1.75, 1.2, .85], u / 1.04); return { tint: '#FFF0DC' }; }; }),
  // B22 — "Então o que eu falei?": cruza os braços com a colher, zoom rápido no rosto
  mk(106.88, 108.28, { bg: '#E8E0D0', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const r = ator(c, ROSE, -3.6, -.6, Math.PI * .35); const col = cyl(.01, .01, .25, '#9A6236', 0, 0, 0); c.add(col);
    return (t, u, cm) => { fala(r, 'mae', t, 'desconfiado', G.bracoCruzado, 0); r.pose(G.bracoCruzado); naMao(col, r, 'R', [0, -.06, .04]); const k = easeOut(clamp((t - 107.2) / .3));
      cam(cm, [lerp(-2.4, -3.0, k), lerp(1.3, 1.25, k), lerp(.6, -.05, k)], [-3.6, 1.18, -.6], u / 1.4, 0, 0); return { tint: '#FFF0DC' }; }; }),
  // B23 — "Que... que é pra...": close, olhos mexendo, roda de carregamento na cabeça
  mk(108.28, 110.56, { bg: '#E8E0D0', fov: 46, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.portaK.abre(1); const g = ator(c, GUI, -1.75, .85, -Math.PI / 2); const ld = carregando(); c.add(ld);
    return (t, u, cm) => { const p = { shR: [62, 6], elR: 100, shL: [20, 8], elL: 30, headX: 4 }; fala(g, 'gui', t, 'preocupado', p, 0, { look: [Math.sin(t * 7) * .8, -.3] }); g.pose(p); telNaMao(K.tel, g); K.tel.tela('apagada');
      g.headG.updateMatrixWorld(true); const h = g.headG.localToWorld(new THREE.Vector3(0, .75, 0)); ld.position.copy(h); ld.material.rotation = -t * 6;
      cam(cm, [[0, [-2.75, 1.3, .95]], [1, [-2.6, 1.28, .92]]], [-1.75, 1.25, .85], u / 2.28, 0, 0); return { tint: '#FFF0DC' }; }; }),
  // B24 — "Que o gás tá acabando, filho. Eu falei três vezes.": aponta o fogão, a chama azul fraquinha
  mk(110.56, 114.32, { bg: '#E8E0D0', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const r = ator(c, ROSE, -3.6, -.42, Math.PI * .7); const col = cyl(.01, .01, .25, '#9A6236', 0, 0, 0); c.add(col);
    return (t, u, cm) => { const p = t < 112.3 ? G.apontar : { shR: [40, 20], elR: 60, shL: [70, 10], elL: 20 + Math.abs(Math.sin(t * 6)) * 20, headX: 4 }; fala(r, 'mae', t, 'preocupado', p, .3); r.pose(p); naMao(col, r, 'R', [0, -.06, .04]);
      const fr = .35 + Math.abs(Math.sin(t * 13)) * .25 * (Math.sin(t * 3) > -.2 ? 1 : .1); K.chama.forEach((f) => { f.scale.set(1, fr, 1); f.material.opacity = .4 + fr; });
      if (t < 112.3) cam(cm, [[0, [-3.0, 1.3, .35]], [1, [-3.4, 1.15, -.5]]], [[0, [-3.6, 1.1, -.6]], [1, [-4.0, .95, -1.2]]], (t - 110.56) / 1.74, 0, 0); else cam(cm, [-2.6, 1.35, -.85], [-3.6, 1.1, -.42], (t - 112.3) / 2, 0, 0); return { tint: '#FFF0DC' }; }; }),
  // B25 — "Ele não ouviu nenhuma das três": flashback rápido, três vezes a mãe falando e ele no celular
  mk(114.32, 116.80, { bg: '#E8E0D0', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'tarde' }); const r = ator(c, ROSE, -2.1, .2, -Math.PI / 2 + .3); const g = ator(c, GUI, 0, 0, 0); sentaMesa(g); K.portaK.abre(1); K.PK.frente.visible = K.PG.frente.visible = false;
    return (t, u, cm) => { const i = Math.min(2, Math.floor((t - 114.32) / .83)); const tt = t - 114.32 - i * .83; r.place([-2.1, -1.9, -2.3][i], [.2, -.3, .7][i], 0, -Math.PI / 2 + .3); r.pose(soma(G.apontar, { shR: [80 + Math.sin(tt * 12) * 10, 6] })); rosto(r, null, t, 'bravo', { mouth: { open: Math.abs(Math.sin(tt * 14)) * .6 } });
      g.pose(sentadoCel(t)); rosto(g, null, t, 'tedio', { look: [0, .6] }); telNaMao(K.tel, g); K.tel.tela('tapete', tt);
      cam(cm, [[0, [-1.0, 1.7, 3.2]], [1, [-1.0, 1.65, 3.0]]], [-1.1, 1.0, .2], u / 2.48, 0, 0); return { sat: .35, tint: '#F4DDB8', vig: .55 }; }; }),
  // B26 — "Naquela noite, deitado, olhando pro caderno aberto com só o número 1 escrito": quarto escuro, luar no caderno
  mk(116.80, 122.16, { bg: '#0A0C18', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.luzes.sol.intensity = 14; K.luzes.sol.target.position.set(-1.1, .78, .25); const g = ator(c, GUI, 0, 0, 0); deitaCama(g); g.root.rotation.z = -.5; K.tel.visible = false;
    return (t, u, cm) => { g.pose({ shR: [20, 10], elR: 40, shL: [20, 10], elL: 40, headY: -30 }); rosto(g, null, t, 'preocupado', { look: [-.8, 0] }); paginaUm(K, 1, .4 + Math.sin(t * 2) * .2);
      if (t < 119.8) cam(cm, [[0, [-.3, 1.5, 1.0]], [1, [-.6, 1.25, .7]]], [-1.1, .8, .25], (t - 116.8) / 3, 0, 0); else cam(cm, [[0, [.2, 1.7, 1.2]], [1, [.3, 1.6, 1.0]]], [.9, .7, -.3], (t - 119.8) / 2.36, 0, 0); return { tint: '#B8C8FF', exposure: .75, vig: .5 }; }; }),
  // B27 — "ele falou baixinho que queria conseguir focar de verdade. Só uma vez na vida.": olhando pro teto, a boca mexe
  mk(122.16, 127.04, { bg: '#0A0C18', fov: 46, limpa: false }, (c) => { const K = montaCasa(c, { hora: 'noite' }); K.luzes.sol.intensity = 10; const g = ator(c, GUI, 0, 0, 0); deitaCama(g); K.tel.visible = false;
    return (t, u, cm) => { g.pose({ shR: [10, 10], elR: 30, shL: [10, 10], elL: 30 }); const m = (t > 122.3 && t < 126.6) ? Math.abs(Math.sin(t * 11)) * .25 : 0; rosto(g, null, t, 'preocupado', { look: [0, -.2], mouth: { open: m } }); g.headG.updateMatrixWorld(true); const h = g.headG.localToWorld(new THREE.Vector3(0, .26, 0));
      cam(cm, [[0, [h.x + .05, h.y + 1.25, h.z + .3]], [1, [h.x + .03, h.y + 1.05, h.z + .22]]], [h.x, h.y, h.z], u / 4.88, 0, 0); return { tint: '#B8C8FF', exposure: .75, vig: .55 }; }; }),
  // B28 — "Desligou a luz e dormiu": clique do abajur, escuridão
  mk(127.04, 128.96, { bg: '#020206', fov: 46 }, (c) => { const K = montaCasa(c, { hora: 'noite' }); const g = ator(c, GUI, 0, 0, 0); deitaCama(g); K.tel.visible = false;
    return (t, u, cm) => { const on = t < 127.9; K.luzAbaj.intensity = on ? 3 : 0; K.luzes.sol.intensity = on ? 8 : 1.5; g.pose({ shR: [10, 10], elR: 30, shL: [10, 10], elL: 30 }); rosto(g, null, t, 'sono', { blink: t > 128.2 ? 1 : .5 });
      cam(cm, [[0, [-.2, 1.8, 1.3]], [1, [-.1, 1.75, 1.2]]], [.4, .6, -.2], u / 1.92, 0, 0); return { tint: '#B8C8FF', exposure: on ? .8 : .25, vig: .7 }; }; }),
];
