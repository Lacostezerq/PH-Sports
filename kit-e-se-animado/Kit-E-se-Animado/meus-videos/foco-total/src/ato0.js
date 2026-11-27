// ATO 0 — abertura (0 a 36 s): a final do campeonato no clímax, o celular vibrando 14 vezes, três mistérios e a rebobinada.
import * as THREE from 'three';
import { mk, cam, ator, rosto, sentar, UF, emFoco, fundo, rampa, celular, cronometro, particulas, vibra, soma, vivo, G, sentado, clamp, smooth, lerp, easeIO, easeOut } from './cf.js';
import { montaSalao, salaoUpd, celNoBolso, HS } from './salao_cena.js';
import { vazio } from './lugares_foco.js';
import { DAVI } from './elenco_foco.js';
import { folha } from './pecas_foco.js';
import { rb, bx } from './motor/toon.js';

const ESC = { bg: '#121218', far: 120 };
const PULSOS = [13.96, 14.25, 14.5, 14.72, 14.9, 15.05, 15.2, 15.33, 15.45, 15.56, 15.66, 15.76, 15.86, 15.95];
/** Rosto do Guilherme jogando: olhar fixo no tabuleiro. */
const guiJoga = (S, t, emo = 'determinado', o = {}) => { S.gui.pose(sentado(soma({ shR: [48, 6], elR: 96, shL: [44, 6], elL: 98, lean: 12, headX: 16 }, o.parado ? {} : vivo(t, 1, .3)))); rosto(S.gui, null, t, emo, { look: [0, .45], vivo: !o.parado, blink: o.parado ? 0 : undefined }); };
const advJoga = (S, t) => { S.adv.pose(sentado(soma({ shR: [40, 6], elR: 100, shL: [30, 6], elL: 90, lean: 10, headX: 14 }, vivo(t, 4, .4)))); rosto(S.adv, null, t, 'determinado', { look: [0, .4] }); };

export const ATO0 = [
  // A1a — escuro: o relógio de xadrez batendo, close
  mk(0, 1.05, { ...ESC, fov: 30 }, (c) => { const S = montaSalao(c, { semGente: true }); S.holo.intensity = 30;
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t); salaoUpd(S, t); const s = 600 - t; S.rel.userData.set('09:5' + Math.floor(9 - t * 3), '10:00', 0);
      cam(cm, [.75, 1.32, .35], [.46, 1.1, -.02], u / 1.05, 0, 0); return { exposure: .7, vig: .6 }; }; }),
  // A1b — close extremo no rosto do Guilherme, luz dura de cima, o tabuleiro brilhando nos olhos
  mk(1.05, 3.36, { ...ESC, fov: 24, perto: true, limpa: false }, (c) => { const S = montaSalao(c, { semGente: true });
    S.holo.intensity = 22;
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t); S.adv.root.visible = false; const g = S.gui; g.headG.updateMatrixWorld(true); const h = g.headG.localToWorld(new THREE.Vector3(0, .26, .3));
      cam(cm, [[0, [h.x + .05, h.y + .02, h.z - .95]], [1, [h.x + .02, h.y, h.z - .6]]], [h.x, h.y - .02, h.z + .2], u / 2.3, 0, 0); return { exposure: .78, vig: .6 }; }; }),
  // A2 — "conseguiu isso por sete dias": os dois na mesa, câmera girando devagar
  mk(3.36, 5.92, { ...ESC, fov: 34 }, (c) => { const S = montaSalao(c);
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t); salaoUpd(S, t); const a = lerp(-.9, -.5, u / 2.56);
      cam(cm, [Math.sin(a) * 2.2, 1.55, Math.cos(a) * 2.2], [0, 1.05, 0], u / 2.56, 0, 0); return { vig: .45 }; }; }),
  // A3 — "final do campeonato estadual": grua abre e mostra o salão, os holofotes e as 50 mesas
  mk(5.92, 9.84, { ...ESC, fov: 40 }, (c) => { const S = montaSalao(c);
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t); salaoUpd(S, t); const k = easeIO(u / 3.92);
      cam(cm, [lerp(1.2, 7.5, k), lerp(1.5, 7.5, k), lerp(1.6, 11, k)], [0, lerp(1.0, .4, k), lerp(0, -2.5, k)], u / 3.92, 0, 0);
      const f = smooth(8.7, 9.6, t); UF.mundo.value = f; return { vig: .4 }; }; }),
  // A4 — "relógio correndo": efeito foco ligado, só o tabuleiro e o relógio coloridos
  mk(9.84, 11.44, { ...ESC, fov: 28, limpa: false }, (c) => { const S = montaSalao(c); const set = emFoco([S.T.g, S.rel]);
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t); salaoUpd(S, t); const s = Math.max(0, 9 * 60 + 41 - Math.floor((t - 9.84) * 6)); S.rel.userData.set('0' + Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'), '10:00', 0);
      UF.mundo.value = 1; set(1, t); fundo(c, '#121218', 1); cam(cm, [[0, [.9, 1.3, .55]], [1, [.75, 1.22, .4]]], [.42, 1.09, -.02], u / 1.6, 0, 0); return { focus: 1.0, range: .3, blur: 10, vig: .5 }; }; }),
  // A5 — "silêncio absoluto... o celular vibrando no bolso 14 vezes": a câmera desce do rosto pro bolso
  mk(11.44, 16.56, { ...ESC, fov: 32, perto: true, limpa: false }, (c) => { const S = montaSalao(c); const set = emFoco([S.tel]);
    const luzTel = new THREE.PointLight('#9FD8FF', 0, 1, 2); c.add(luzTel);
    return (t, u, cm) => { guiJoga(S, t); advJoga(S, t); salaoUpd(S, t); const vb = vibra(t, PULSOS); celNoBolso(S, t, vb); const on = PULSOS.some((p) => t >= p && t < p + .3);
      S.tel.tela(on ? 'chamadasBorrado' : 'apagada', 0); luzTel.position.copy(S.tel.position); luzTel.position.y += .08; luzTel.intensity = on ? 2.5 : 0;
      UF.mundo.value = 1; set(1, t); fundo(c, '#121218', 1); const k = easeIO(clamp((u - 1.2) / 2.6));
      const p = S.tel.position; cam(cm, [lerp(-1.1, -.6, k), lerp(1.42, 1.02, k), lerp(.2, .52, k)], [lerp(0, p.x, k), lerp(1.25, p.y, k), lerp(.62, p.z, k)], u / 5.12, 0, 0); return { focus: lerp(.95, .55, k), range: .25, blur: 12, vig: .5 }; }; }),
  // A6 — "e ele não sentiu nenhuma": freeze no rosto imóvel
  mk(16.56, 18.36, { ...ESC, fov: 26, perto: true, limpa: false }, (c) => { const S = montaSalao(c); const set = emFoco([S.gui.root]);
    return (t, u, cm) => { guiJoga(S, 16.6, 'determinado', { parado: true }); advJoga(S, 16.6); salaoUpd(S, 16.6); S.juiz.root.visible = false; UF.mundo.value = 1; set(.6, t); fundo(c, '#121218', 1);
      cam(cm, [[0, [-.4, 1.4, -.42]], [1, [-.34, 1.38, -.34]]], [0, 1.27, .62], u / 1.8, 0, 0); return { vig: .55, exposure: .95 }; }; }),
  // A7 — flash: tela trincada com 14 chamadas perdidas (borrado)
  mk(18.36, 23.52, { bg: '#08080C', fov: 30 }, (c) => { const V = vazio(c, { cor: '#8890B0' }); const tel = celular(); tel.position.set(0, .5, 0); tel.rotation.set(-Math.PI / 2 + .25, 0, .25); c.add(tel); const mesa = rb(1.2, .04, .8, '#3A2A22', 0, .47, 0); c.add(mesa);
    const luz = new THREE.PointLight('#FF6A6A', 2, 1.5, 2); luz.position.set(0, .7, .1); c.add(luz);
    return (t, u, cm) => { const vb = vibra(t, [18.6, 19.6, 20.6, 21.6, 22.6], .4); tel.position.x = vb; tel.tela('chamadasBorrado', 0); luz.intensity = 1.5 + Math.sin(t * 6) * .5;
      cam(cm, [[0, [.03, .8, .3]], [1, [.01, .66, .16]]], [0, .5, 0], u / 5.16, 0, 0); return { vig: .65, focus: .4, range: .2, blur: 8 }; }; }),
  // A8 — flash: a mãozinha do Davi segurando a folha dobrada, que começa a abrir... corta antes
  mk(23.52, 27.84, { bg: '#0E0C14', fov: 30 }, (c) => { vazio(c, { cor: '#C8B8FF' }); const d = ator(c, DAVI, 0, 0, 0); const f = folha(); c.add(f); f.scale.setScalar(.8);
    const luz = new THREE.SpotLight('#FFE8C0', 8, 4, .5, .8, 1.5); luz.position.set(.4, 1.6, 1.2); luz.target.position.set(0, .55, 0); c.add(luz, luz.target);
    return (t, u, cm) => { d.pose({ shL: [62, -14], elL: 70, shR: [62, -14], elR: 70, headX: 18 }); rosto(d, null, t, 'neutro', { look: [0, .5] }); d.root.updateMatrixWorld(true);
      const a = d.hands.L.localToWorld(new THREE.Vector3(0, -.05, .03)), b = d.hands.R.localToWorld(new THREE.Vector3(0, -.05, .03)); f.position.copy(a).add(b).multiplyScalar(.5); f.position.z += .03; f.rotation.set(-.35, 0, 0);
      f.set(clamp((t - 25.2) / 4) * .35);
      cam(cm, [[0, [.25, .8, .75]], [1, [.12, .72, .5]]], [f.position.x, f.position.y, f.position.z], u / 4.32, 0, 0); return { vig: .6, exposure: .85 }; }; }),
  // A9 — flash: cronômetro dourado parando em 20:00
  mk(27.84, 31.44, { bg: '#0C0A06', fov: 30 }, (c) => { vazio(c, { cor: '#F2C230' }); const cr = cronometro(2.2); cr.position.set(0, 1, 0); c.add(cr); const pt = particulas(c, [0, 1, 0], { n: 60, cor: '#FFD86A', r: 1.2, tam: .025 });
    const luz = new THREE.PointLight('#FFD86A', 4, 4, 2); luz.position.set(.5, 1.5, 1.2); c.add(luz);
    return (t, u, cm) => { const k = clamp((t - 28) / 2.3); const seg = k < 1 ? 1200 * easeOut(k) : 1200; cr.set(seg, t > 30.3 ? clamp((t - 30.3) * 2) * .6 : 0); cr.rotation.y = Math.sin(t * .8) * .25 * (1 - k * .6); pt(((t - 27.84) / 3.6) % 1);
      cam(cm, [[0, [.15, 1.08, 1.6]], [1, [.05, 1.02, 1.2]]], [0, 1, 0], u / 3.6, 0, 0); return { bloom: .25, bloomT: .9, vig: .5, exposure: .85 }; }; }),
  // A10 — "já merece deixar o like": volta o freeze do Guilherme (o botão de like vem na tela)
  mk(31.44, 34.44, { ...ESC, fov: 30, perto: true, limpa: false }, (c) => { const S = montaSalao(c); const set = emFoco([S.gui.root]);
    return (t, u, cm) => { guiJoga(S, 16.6, 'determinado', { parado: true }); advJoga(S, 16.6); salaoUpd(S, 16.6); S.juiz.root.visible = false; UF.mundo.value = .85; set(.5, t); fundo(c, '#121218', .85);
      cam(cm, [[0, [-.95, 1.48, -.42]], [1, [-.85, 1.45, -.32]]], [-.1, 1.25, .62], u / 3, 0, 0); return { vig: .45 }; }; }),
  // A11 — "bora voltar sete dias": rebobina — as peças voltam, o público senta de ré
  mk(34.44, 35.96, { ...ESC, fov: 38 }, (c) => { const S = montaSalao(c); const P = Object.values(S.T.P);
    return (t, u, cm) => { const r = 34.44 + (35.96 - t) * 3; guiJoga(S, r * 3); advJoga(S, r * 3); salaoUpd(S, r * 4, 'aplauso');
      P.forEach((p, i) => { p.position.y = .021 + Math.abs(Math.sin(t * 14 + i)) * .03 * (1 - u / 1.52); p.rotation.y = t * 20 * (i % 2 ? 1 : -1); });
      const a = lerp(.3, -.6, u / 1.52); cam(cm, [Math.sin(a) * 4, 2.4, Math.cos(a) * 4], [0, .9, 0], u / 1.52, Math.sin(t * 30) * .01, 0); return { sat: .55, tint: '#C8D8FF', vig: .5 }; }; }),
];
