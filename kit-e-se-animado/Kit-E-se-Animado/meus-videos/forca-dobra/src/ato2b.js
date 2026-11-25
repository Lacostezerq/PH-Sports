// ATO 2B — dia 3 e dia 4 (176 a 290 s): braço de ferro no pátio (a mesa de concreto racha), a montagem das coisas
// quebrando em casa (maçaneta, escovas, celular, torneira, cadeira) e o aperto de mão com o porteiro.
import * as THREE from 'three';
import { mk, cam, camT, ator, rosto, sentar } from './base.js';
import { GUI, CIDA, TIAGO, RAFA, PORTEIRO, aluno, pessoa } from './gente.js';
import { escada } from './comum.js';
import { cozinha, banheiro } from './lugares.js';
import { patio } from './lugares2.js';
import { celular, escova, cadeiraPlastico, torneira, rachadura } from './objs.js';
import { naMao, jato, respingo, pinga } from './fx2.js';
import { poeira, sprite } from './efeitos.js';
import { G, soma, vivo, treme, ofego, andar, parado, kf, kv, mix, rir, pular, sacode } from './mov.js';
import { clamp, smooth, easeOut, easeIn, lerp, rng } from './motor/core.js';
import { cyl, rb } from './motor/toon.js';

const DIA = { tint: '#FFFBF2', bloom: .22 };
const T_BATE = 195.7; // a mão do Rafa bate na mesa
// ---------- pátio ----------
const RODA = Array.from({ length: 11 }, (_, i) => { const a = -2.4 + i * (4.8 / 10); return [Math.sin(a) * 2.25, Math.cos(a) * 2.25 * .9 - .1, a]; });
/** Pátio com a roda de alunos, o Rafa sentado, o Tiago e o Guilherme. */
function montaPatio(c) {
  const P = patio(c); const mesa = P.mesa; const { A, B } = mesa.userData;
  const rafa = ator(c, RAFA, .2, -.75, 0); sentar(rafa, .2, -.75, 0, .48);
  const gui = ator(c, GUI, 1.1, 1.75, Math.PI + .5); const tia = ator(c, TIAGO, 1.55, 1.5, Math.PI + .7);
  const fone = celular((x, w, h) => { x.fillStyle = '#1A1A20'; x.fillRect(0, 0, w, h); x.fillStyle = '#E2443A'; x.beginPath(); x.arc(40, 40, 14, 0, 7); x.fill(); x.fillStyle = '#FFF'; x.font = '700 30px Inter'; x.fillText('REC', 64, 50); }); c.add(fone);
  const alunos = RODA.map(([x, z, a], i) => { const k = ator(c, aluno(i), x, z, Math.atan2(-x, -z + .1)); return k; }).filter((k, i) => i !== 6 && i !== 7);
  const rach = rachadura(.8, 3, '#3A3430'); rach.rotation.set(-Math.PI / 2, 0, 0); rach.position.set(0, .835, 0); c.add(rach);
  const po = poeira(c, [[0, .8, 0], [-.3, .5, 0], [.3, .5, 0]], { n: 30, size: .7, life: 2.5, op: .6, sp: .4, cor: '#B8B2A8' });
  const pedra = respingo(c, [0, .84, 0], { t0: T_BATE + .05, cor: '#A9A49C', n: 30, v: 2.2, tam: .05, chao: .02, vida: 1.2 });
  return { P, mesa, A, B, rafa, gui, tia, fone, alunos, rach, po, pedra };
}
/** Atualiza a mesa (racha e as duas metades caem para os lados). */
function mesaUpd(S, t) { const k = t - T_BATE; S.rach.crescer(clamp(k / .12)); const q = easeIn(clamp((k - .15) / .45));
  S.A.rotation.z = q * .9; S.A.position.set(-.12 * q, -.32 * q, 0); S.B.rotation.z = -q * .9; S.B.position.set(.12 * q, -.32 * q, 0); S.rach.visible = k > 0 && k < .2; S.po(k); S.pedra(t); }
// braço de ferro sentados: cotovelo na mesa, antebraço em pé, mãos se encontrando no meio
const BRACO = (lado = 1) => ({ bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: 22, shR: [72, -8, -25], elR: 112, shL: [62, 22], elL: 70 });
/** O Guilherme sentado no banco de frente para o Rafa. */
const guiSentado = (S) => { sentar(S.gui, -.2, .75, Math.PI, .48); };
function bracoUpd(S, t, k = 0) { // k: 0 = travado no meio, 1 = braço do Rafa batido na mesa
  const bR = soma(BRACO(), treme(t, k < .05 ? .8 : 0), { shR: [-25 * k, 50 * k], elR: -60 * k, tilt: -10 * k, lean: -6 * k });
  const bG = soma(BRACO(), treme(t, k < .05 ? .15 : 0), { shR: [-10 * k, -30 * k], elR: -30 * k, lean: 4 * k });
  S.rafa.pose(bR); S.gui.pose(bG);
}
const alunosUpd = (S, t, modo) => S.alunos.forEach((k, i) => { const p = modo === 'pula' ? (i % 3 === 0 ? soma(parado(t, i), G.maosCabeca, { bob: Math.abs(Math.sin(t * 5 + i)) * .05 }) : pular(t, 2.1 + (i % 3) * .2, i * .37)) : modo === 'ri' ? soma(parado(t, i), rir(t + i * .2, 1)) : soma(parado(t, i), i % 2 ? G.bracoCruzado : {}, { lean: 6 });
  k.pose(p); rosto(k, null, t, modo === 'pula' ? (i % 2 ? 'surpreso' : 'feliz') : modo === 'ri' ? 'rindo' : 'feliz'); });

// ---------- casa ----------
function agua(c, p, d, o) { return jato(c, p, d, { n: 70, tam: .045, vida: .5, abre: .4, ...o }); }

export const ATO2B = [
  // F1 — intervalo: roda de alunos em volta da mesa de concreto, o Rafa sentado chamando
  mk(176, 181.5, { bg: '#CFE4EE', fov: 40 }, (c) => { const S = montaPatio(c);
    return (t, u, cm) => { S.rafa.pose(soma(BRACO(), { shR: [40 + 30 * Math.max(0, Math.sin(t * 4)), 10], elR: 60 + 40 * Math.max(0, Math.sin(t * 4)), headY: Math.sin(t * .8) * 25 })); rosto(S.rafa, null, t, 'feliz', { smile: .6 });
      alunosUpd(S, t, 'olha'); S.gui.pose(soma(G.maosBolso, vivo(t, 2))); rosto(S.gui, null, t, 'neutro'); S.tia.pose(soma(parado(t, 5), G.celular)); naMao(S.fone, S.tia, 'R', [0, -.09, .03]); rosto(S.tia, null, t, 'feliz'); mesaUpd(S, t);
      cam(cm, [[0, [4.5, 3.2, 4.8]], [1, [3.6, 2.4, 3.9]]], [[0, [0, .6, 0]], [1, [0, .8, 0]]], u / 5.5); return DIA; }; }),
  // F2 — o Rafa chama: "Vem, magrelo, vai ser rapidinho!"
  mk(181.5, 188.7, { bg: '#CFE4EE', fov: 55 }, (c) => { const S = montaPatio(c);
    return (t, u, cm) => { const fl = t > 186; S.rafa.pose(soma(BRACO(), { shL: [70 + 20 * Math.max(0, Math.sin(t * 5)), 10], elL: 50 + 50 * Math.max(0, Math.sin(t * 5)), headY: fl ? 22 : Math.sin(t) * 15, headX: -4 })); rosto(S.rafa, 'rafa', t, fl ? 'desconfiado' : 'feliz', { smile: .7, look: fl ? [.6, 0] : [0, 0] });
      alunosUpd(S, t, 'olha'); S.gui.pose(soma(G.maosBolso, vivo(t, 2))); rosto(S.gui, null, t, 'preocupado'); S.tia.pose(soma(parado(t, 5), G.celular)); naMao(S.fone, S.tia, 'R', [0, -.09, .03]); rosto(S.tia, null, t, 'feliz'); mesaUpd(S, t);
      cam(cm, [[0, [-.7, 1.35, 1.15]], [.6, [-.6, 1.3, 1.05]], [1, [-.6, 1.28, 1.0]]], [[0, [.2, .95, -.7]], [1, [.2, 1.0, -.75]]], u / 7.2); return DIA; }; }),
  // F3 — a galera ri; o Tiago empurra o Guilherme pra frente e levanta o celular pra filmar
  mk(188.7, 192.6, { bg: '#CFE4EE', fov: 40 }, (c) => { const S = montaPatio(c);
    return (t, u, cm) => { const a = t - 188.7; alunosUpd(S, t, a < 2.4 ? 'ri' : 'olha'); S.rafa.pose(soma(BRACO(), rir(t, .6))); rosto(S.rafa, null, t, 'rindo');
      const emp = kv(a, [[.6, 0], [.9, 1], [1.3, 1], [1.8, 0]]); S.tia.pose(a < 1.9 ? soma(parado(t, 5), { shL: [80 * emp, 10], elL: 20, shR: [80 * emp, 10], elR: 20, lean: 15 * emp }) : soma(parado(t, 5), G.filmar)); naMao(S.fone, S.tia, 'R', [0, -.09, .03]); rosto(S.tia, null, t, 'rindo');
      const anda = clamp((a - .85) / 2.2); S.gui.place(lerp(1.1, -.2, anda), lerp(1.75, 1.15, anda), 0, lerp(Math.PI + .5, Math.PI, anda)); S.gui.pose(anda > 0 && anda < 1 ? soma(andar(t, { f: 1.5 }), { lean: 12 * (1 - anda) }) : parado(t, 2)); rosto(S.gui, null, t, 'preocupado', { look: [-.3, 0] }); mesaUpd(S, t);
      cam(cm, [[0, [1.9, 2.4, 2.6]], [1, [1.75, 2.3, 2.4]]], [[0, [.4, .8, .8]], [1, [0, .8, .6]]], u / 3.9); return DIA; }; }),
  // F4 — as mãos se encostam. Close nas mãos: três, dois, um
  mk(192.6, 195.6, { bg: '#CFE4EE', fov: 45 }, (c) => { const S = montaPatio(c); guiSentado(S);
    return (t, u, cm) => { bracoUpd(S, t, 0); rosto(S.rafa, null, t, 'determinado', { look: [-.2, .2] }); rosto(S.gui, null, t, 'preocupado', { look: [0, .4] }); alunosUpd(S, t, 'olha'); S.tia.pose(soma(parado(t, 5), G.filmar)); naMao(S.fone, S.tia, 'R', [0, -.09, .03]); rosto(S.tia, null, t, 'feliz'); mesaUpd(S, t);
      const k = smooth(192.6, 193.6, t); cam(cm, [[0, [1.2, 2.0, .6]], [1, [.15, 1.95, .35]]], [[0, [0, 1.0, 0]], [1, [0, .95, 0]]], k, 0, .3); return { ...DIA, focus: .8, range: .5, blur: 6 }; }; }),
  // F5 — um segundo só: o braço do Rafa vai pro lado e bate na mesa; a mesa racha no meio e as metades caem
  mk(195.6, 197.6, { bg: '#CFE4EE', fov: 40 }, (c) => { const S = montaPatio(c); guiSentado(S);
    return (t, u, cm) => { const k = easeOut(clamp((t - 195.62) / .1)); bracoUpd(S, t, k); rosto(S.rafa, null, t, t > T_BATE ? 'medo' : 'determinado'); rosto(S.gui, null, t, t > T_BATE ? 'surpreso' : 'neutro');
      alunosUpd(S, t, t > 196.2 ? 'pula' : 'olha'); S.tia.pose(soma(parado(t, 5), G.filmar)); naMao(S.fone, S.tia, 'R', [0, -.09, .03]); rosto(S.tia, null, t, 'surpreso'); mesaUpd(S, t);
      const dI = Math.max(0, t - T_BATE); camT(cm, [[0, [1.2, 1.9, 2.2]], [1, [1.3, 2.0, 2.35]]], [[0, [0, .75, 0]], [1, [0, .7, 0]]], u / 2, .05 * Math.exp(-dI * 7) * (t > T_BATE)); return { ...DIA, flash: t > T_BATE ? .35 * Math.exp(-dI * 14) : 0 }; }; }),
  // F6 — a roda explode em grito: gente pulando, mão na cabeça
  mk(197.6, 208, { bg: '#CFE4EE', fov: 38 }, (c) => { const S = montaPatio(c); guiSentado(S);
    return (t, u, cm) => { bracoUpd(S, t, 1); S.rafa.pose(soma(parado(t, 1), { bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: -14, shL: [60, -10, -40], elL: 95, shR: [20, 20], elR: 30 })); rosto(S.rafa, null, t, 'medo', { look: [0, -.2] });
      S.gui.pose(soma(parado(t, 2), { bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, shR: [40, 10], elR: 60, lean: -4 })); rosto(S.gui, null, t, 'surpreso', { look: [Math.sin(t * 1.5) * .6, 0] });
      alunosUpd(S, t, 'pula'); S.tia.pose(soma(pular(t, 2.3), G.filmar)); naMao(S.fone, S.tia, 'R', [0, -.09, .03]); rosto(S.tia, null, t, 'feliz', { mouth: { open: .7 } }); mesaUpd(S, t);
      cam(cm, [[0, [.3, 3.4, 3.2]], [.5, [1.6, 2.9, 2.4]], [1, [2.3, 2.6, .9]]], [[0, [0, .7, 0]], [1, [0, .8, 0]]], u / 10.4); return DIA; }; }),
  // F7 — Tiago: "Mano, tu quebrou a mesa! Tu quebrou a mesa!"
  mk(208, 211.8, { bg: '#CFE4EE', fov: 40 }, (c) => { const S = montaPatio(c); guiSentado(S); S.tia.place(.9, .9, 0, Math.PI + 1.0); S.gui.root.visible = false; S.gui.fixo = true;
    return (t, u, cm) => { bracoUpd(S, t, 1); S.tia.pose(soma(pular(t, 2.6), G.filmar, { shL: [120, 40], elL: 40 })); naMao(S.fone, S.tia, 'R', [0, -.09, .03]); rosto(S.tia, 'tiago', t, 'feliz', { look: [-.4, 0] }); alunosUpd(S, t, 'pula'); mesaUpd(S, t);
      S.gui.pose(soma(parado(t, 2), { bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, shR: [40, 10], elR: 60 })); rosto(S.gui, null, t, 'surpreso'); S.rafa.pose(soma(BRACO(), { lean: -14, shL: [60, -10, -40], elL: 95, shR: [20, 20], elR: 30 })); rosto(S.rafa, null, t, 'medo');
      cam(cm, [[0, [-.95, 1.4, -.3]], [1, [-.9, 1.38, -.22]]], [[0, [.9, 1.12, .9]], [1, [.9, 1.12, .9]]], u / 3.8); return DIA; }; }),
  // F8 — o Rafa segurando o próprio braço, olhando pro Guilherme com medo
  mk(211.8, 216, { bg: '#CFE4EE', fov: 32 }, (c) => { const S = montaPatio(c); guiSentado(S);
    return (t, u, cm) => { S.rafa.pose(soma(parado(t, 1, .6), { bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, lean: -10, shL: [60, -10, -40], elL: 95, shR: [30, 10], elR: 40 }, treme(t, .3))); rosto(S.rafa, null, t, 'medo', { look: [0, .1] });
      S.gui.pose(soma(parado(t, 2), { bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88 })); rosto(S.gui, null, t, 'preocupado'); alunosUpd(S, t, 'olha'); S.tia.pose(soma(parado(t, 5), G.filmar)); naMao(S.fone, S.tia, 'R', [0, -.09, .03]); mesaUpd(S, t);
      cam(cm, [[0, [-.75, 1.2, .85]], [1, [-.7, 1.18, .75]]], [[0, [.2, .95, -.75]], [1, [.2, .95, -.75]]], u / 4.2); return DIA; }; }),
  // F9 — close na mão do Guilherme: nem marca vermelha. Ele esconde a mão no bolso do moletom
  mk(216, 222, { bg: '#CFE4EE', fov: 30 }, (c) => { const S = montaPatio(c); guiSentado(S);
    return (t, u, cm) => { const a = t - 216; const esc = smooth(3.0, 4.0, a);
      S.gui.pose(soma(parado(t, 2, .5), { bob: -.17, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88 }, mix({ shR: [60, 4], elR: 70, headX: 22, headY: -10 }, G.maosBolso, esc))); S.gui.hands.R.rotation.y = Math.sin(a * 1.5) * .8 * (1 - esc);
      rosto(S.gui, null, t, esc > .5 ? 'preocupado' : 'desconfiado', { look: esc > .5 ? [.5, 0] : [-.2, .7] }); S.rafa.pose(BRACO()); alunosUpd(S, t, 'olha'); mesaUpd(S, t);
      cam(cm, [[0, [-.05, 1.0, .02]], [.5, [-.05, 1.0, .05]], [1, [-.1, 1.15, -.15]]], [[0, [-.28, .8, .55]], [.5, [-.28, .8, .55]], [1, [-.2, 1.0, .75]]], u / 6); return { ...DIA, focus: .7, range: .5, blur: 6 }; }; }),
  // M1 — dia 4: ele abre a porta do banheiro e a maçaneta fica na mão
  mk(222, 226.6, { bg: '#C8D8E0', fov: 55 }, (c) => { const B = banheiro(c); const gui = ator(c, GUI, -.15, .55, 0); const mac = B.macaneta; const fake = mac.clone(); c.add(fake); fake.visible = false;
    return (t, u, cm) => { const a = t - 222; const puxa = kv(a, [[.8, 0], [1.3, 1], [1.6, 1], [1.9, .3]]); const solta = a > 1.55;
      gui.pose(soma(parado(t, 2), { shR: [55 + 10 * puxa, 0], elR: 30 + 15 * puxa, lean: -8 * puxa * (solta ? 1.5 : 1), headX: solta ? 15 : 0 })); mac.visible = !solta; fake.visible = solta; if (solta) { naMao(fake, gui, 'R', [0, -.05, .04]); }
      rosto(gui, null, t, solta ? 'surpreso' : 'sono', { look: solta ? [.2, .6] : [0, 0] });
      cam(cm, [[0, [.8, 1.25, .9]], [1, [.75, 1.22, .85]]], [[0, [-.2, 1.0, .5]], [1, [-.2, 1.0, .5]]], u / 4.6); return DIA; }; }),
  // M2 — pega a escova e ela parte ao meio; pega outra e quebra; a terceira e quebra
  mk(226.6, 232, { bg: '#C8D8E0', fov: 64 }, (c) => { const B = banheiro(c); const gui = ator(c, GUI, .3, -.45, Math.PI); const cores = ['#3EA6FF', '#E2443A', '#5AA84E'];
    const E = cores.map((k, i) => { const e = escova(k); c.add(e); const meta = escova(k); meta.userData.cabo.visible = false; c.add(meta); return { e, meta, t0: 227.4 + i * 1.6 }; });
    return (t, u, cm) => { const a = t - 226.6;
      E.forEach(({ e, meta, t0 }, i) => { const pega = t > t0 - .4, quebra = t > t0;
        if (!pega) { e.position.set(.55 + (i - 1) * .012, .93, -.9); e.rotation.set(0, 0, (i - 1) * .2); meta.visible = false; }
        else if (!quebra) { naMao(e, gui, 'R', [0, -.06, .05]); meta.visible = false; e.userData.ponta.visible = true; }
        else { naMao(e, gui, 'R', [0, -.06, .05]); e.userData.ponta.visible = false; e.visible = t < t0 + 1.2; meta.visible = true; const q = t - t0; meta.position.set(.35 + i * .03, Math.max(.84, 1.05 - 4.9 * q * q), -.75); meta.rotation.set(q * 6, 0, q * 4); } });
      const ciclo = ((a - .4) % 1.6) / 1.6; gui.pose(soma(parado(t, 2), { shR: [40 + 30 * Math.sin(ciclo * Math.PI), 6], elR: 70, headX: 16 })); rosto(gui, null, t, a > 3.4 ? 'tedio' : 'surpreso', { look: [0, .6] });
      cam(cm, [[0, [.92, 1.5, -1.0]], [1, [.9, 1.48, -.98]]], [[0, [.25, 1.0, -.4]], [1, [.25, 1.0, -.4]]], u / 5.4); return DIA; }; }),
  // M3 — digita "bom dia vó" no celular e a tela trinca inteira
  mk(232, 236.6, { bg: '#2A2420', fov: 30 }, (c) => { const K = cozinha(c, { hora: 'manha' }); const gui = ator(c, GUI, .1, .2, Math.PI); const f = celular(); c.add(f); f.scale.setScalar(1.3); let last = -1;
    const tela = (n, rach) => f.desenha((x, w, h) => { x.fillStyle = '#ECE5DD'; x.fillRect(0, 0, w, h); x.fillStyle = '#075E54'; x.fillRect(0, 0, w, 70); x.fillStyle = '#FFF'; x.font = '700 30px Inter'; x.fillText('Vó ❤', 20, 46);
      x.fillStyle = '#FFF'; x.beginPath(); x.roundRect(20, h - 90, w - 40, 60, 28); x.fill(); x.fillStyle = '#2A2A30'; x.font = '500 28px Inter'; x.fillText('bom dia vó'.slice(0, n) + (n < 10 ? '|' : ''), 40, h - 50);
      if (rach) { x.strokeStyle = 'rgba(255,255,255,.95)'; x.lineWidth = 3; const R = rng(4); for (let i = 0; i < 16; i++) { let px = w * .55, py = h * .4, a = i / 16 * 6.283; x.beginPath(); x.moveTo(px, py); for (let k = 0; k < 7; k++) { a += (R() - .5) * .7; px += Math.cos(a) * 40; py += Math.sin(a) * 40; x.lineTo(px, py); } x.stroke(); } x.strokeStyle = 'rgba(0,0,0,.5)'; x.lineWidth = 1.5; for (let i = 0; i < 10; i++) { x.beginPath(); x.arc(w * .55, h * .4, 20 + i * 22, 0, 7); x.stroke(); } } });
    return (t, u, cm) => { const a = t - 232; const n = Math.min(10, Math.floor(Math.max(0, a - .5) * 5)), rach = a > 3.0; const key = n + (rach ? 100 : 0); if (key !== last) { tela(n, rach); last = key; }
      gui.pose(soma(parado(t, 2), { shR: [62, -6], elR: 70 + (a < 2.8 ? Math.max(0, Math.sin(t * 16)) * 6 : 0), shL: [55, -6], elL: 75, headX: 24 })); naMao(f, gui, 'L', [-.05, -.06, .06], [-.6, .7, 0]);
      rosto(gui, null, t, rach ? 'surpreso' : 'sono', { look: [0, .8] });
      cam(cm, [[0, [.8, 1.2, -.35]], [1, [.75, 1.15, -.3]]], [[0, [.05, .88, -.05]], [1, [.05, .88, -.05]]], u / 4.6, 0, .4); return { ...DIA, focus: .45, range: .25, blur: 10 }; }; }),
  // M4 — abre a torneira: ela sai da parede e a água espirra na cara dele
  mk(236.6, 241.6, { bg: '#C8D8E0', fov: 40 }, (c) => { const K = cozinha(c, { hora: 'manha' }); const gui = ator(c, GUI, .075, -.72, Math.PI); const T0 = K.torneira; const tn = torneira(); c.add(tn); tn.visible = false;
    const j = agua(c, [.075, 1.05, -1.56], [0, 1.2, 3.2]); const pg = pinga(c, gui, { chao: 0 });
    return (t, u, cm) => { const a = t - 236.6; const sai = a > 1.4; T0.visible = !sai; tn.visible = sai; if (sai) naMao(tn, gui, 'R', [0, -.06, .04]);
      gui.pose(sai ? soma(parado(t, 2), { shR: [50, 10], elR: 40, shL: [60, 30], elL: 120, lean: -14, headX: -10, headY: Math.sin(t * 7) * 15 }) : soma(parado(t, 2), { shR: [75 * smooth(.3, 1, a), 0], elR: 20, lean: 6 }));
      j(t, sai ? 1 : 0); if (a > 1.8) pg(t); rosto(gui, null, t, sai ? 'medo' : 'sono', { blink: sai ? 1 : undefined, mouth: sai ? { open: .6 } : undefined });
      cam(cm, [[0, [.65, 1.3, -.15]], [1, [.6, 1.28, -.2]]], [[0, [.05, 1.0, -.75]], [1, [.05, 1.02, -.75]]], u / 5); return DIA; }; }),
  // M5 — senta na cadeira de plástico: as quatro pernas abrem pra fora, ele cai sentado no chão (ainda com a torneira)
  mk(241.6, 249, { bg: '#C8D8E0', fov: 40 }, (c) => { const K = cozinha(c, { hora: 'manha' }); K.torneira.visible = false; const gui = ator(c, GUI, .1, -.5, Math.PI * .9); const tn = torneira(); c.add(tn); const cad = K.cad2; cad.position.set(.15, 0, -.2); cad.rotation.y = Math.PI;
    const j = agua(c, [.075, 1.05, -1.56], [0, .9, 2.6]); const pg = pinga(c, gui, { chao: 0 });
    return (t, u, cm) => { const a = t - 241.6; const vai = clamp((a - .5) / 1.2); gui.place(lerp(.1, .15, vai), lerp(-.5, -.12, vai), 0, lerp(Math.PI * .9, 0, smooth(.6, 1.4, a)));
      const senta = smooth(2.2, 2.8, a), cai = easeIn(clamp((a - 3.2) / .35)); cad.abrir(cai);
      const sent = { bob: -.17 - .3 * cai, hipL: [88, 4 + 14 * cai], hipR: [88, 4 + 14 * cai], knL: 88 - 50 * cai, knR: 88 - 50 * cai, lean: -6 - 10 * cai, shR: [30, 20], elR: 50, shL: [20 + 40 * cai, 30], elL: 20 };
      gui.pose(a < 1.7 ? andar(t, { f: 1.6 }) : mix(parado(t, 2), sent, senta)); naMao(tn, gui, 'R', [0, -.06, .04]); j(t, 1); pg(t);
      rosto(gui, null, t, cai > .5 ? 'surpreso' : 'tedio', { lagrima: false });
      cam(cm, [[0, [-.75, 1.75, .45]], [1, [-.7, 1.65, .35]]], [[0, [.1, .7, -.45]], [1, [.12, .65, -.4]]], u / 7.4); return DIA; }; }),
  // M6 — Dona Cida grita de longe: "Fecha o registro, menino!" — ele encharcado no chão, no meio da cadeira aberta, segurando a torneira
  mk(249, 255, { bg: '#C8D8E0', fov: 36 }, (c) => { const K = cozinha(c, { hora: 'manha' }); K.torneira.visible = false; const gui = ator(c, GUI, .15, -.12, 0); const tn = torneira(); c.add(tn); const cad = K.cad2; cad.position.set(.15, 0, -.2); cad.rotation.y = Math.PI; cad.abrir(1);
    const j = agua(c, [.075, 1.05, -1.56], [0, .9, 2.6]); const pg = pinga(c, gui, { chao: 0 }); const poca = new THREE.Mesh(new THREE.CircleGeometry(.9, 24), new THREE.MeshToonMaterial({ color: '#9EC8E8', transparent: true, opacity: .45 })); poca.rotation.x = -Math.PI / 2; poca.position.set(.15, .004, -.4); c.add(poca);
    return (t, u, cm) => { gui.pose(soma(parado(t, 2, .4), { bob: -.47, hipL: [88, 18], hipR: [88, 18], knL: 38, knR: 38, lean: -16, shR: [30, 20], elR: 50, shL: [60, 30], elL: 20, headY: t > 249.2 ? -40 : 0 })); naMao(tn, gui, 'R', [0, -.06, .04]); j(t, 1); pg(t);
      rosto(gui, null, t, 'tedio', { look: [-.6, 0] }); poca.scale.setScalar(.8 + .2 * smooth(249, 255, t));
      cam(cm, [[0, [-.7, .95, -.55]], [1, [-.65, .92, -.5]]], [[0, [.12, .45, -.15]], [1, [.12, .45, -.15]]], u / 6); return DIA; }; }),
  // M7 — "...o mundo é feito de coisa muito fraca": a cozinha alagada, a maçaneta, as escovas, o celular trincado na mesa
  mk(255, 266.4, { bg: '#C8D8E0', fov: 40 }, (c) => { const K = cozinha(c, { hora: 'manha' }); K.torneira.visible = false; const gui = ator(c, GUI, .15, -.34, 0); const cad = K.cad2; cad.position.set(.15, 0, -.42); cad.rotation.y = Math.PI; cad.abrir(1);
    const ci = ator(c, CIDA, -1.3, .9, Math.PI / 2); const j = agua(c, [.075, 1.05, -1.56], [0, .9, 2.6]); const pg = pinga(c, gui, { chao: 0 });
    const f = celular((x, w, h) => { x.fillStyle = '#1A1A20'; x.fillRect(0, 0, w, h); x.strokeStyle = '#FFF'; x.lineWidth = 3; for (let i = 0; i < 12; i++) { x.beginPath(); x.moveTo(160, 240); x.lineTo(160 + Math.cos(i) * 300, 240 + Math.sin(i * 1.3) * 300); x.stroke(); } }); f.position.set(.35, .79, .55); f.rotation.x = -Math.PI / 2; c.add(f);
    const esc = [0, 1, 2].map((i) => { const e = escova(['#3EA6FF', '#E2443A', '#5AA84E'][i]); e.position.set(-.05 + i * .06, .79, .6); e.rotation.set(Math.PI / 2, 0, i * .7); c.add(e); return e; });
    const mac = cyl(.02, .02, .06, '#C9A030', .15, .8, .35, { rot: [Math.PI / 2, 0, .5] }); c.add(mac);
    return (t, u, cm) => { const a = t - 255; const fecha = t > 257.5; j(t, fecha ? Math.max(0, 1 - (t - 257.5) * 2) : 1); pg(t);
      const anda = clamp((a - .3) / 2); ci.place(lerp(-1.3, -1.05, anda), lerp(.9, -1.1, anda), 0, anda < 1 ? Math.PI * .9 : Math.PI); ci.pose(anda < 1 ? andar(t, { f: 2.2 }) : soma(G.pegaChao, { lean: 40 })); rosto(ci, null, t, 'bravo');
      gui.pose(soma(parado(t, 2, .4), { bob: -.47, hipL: [88, 18], hipR: [88, 18], knL: 38, knR: 38, lean: -16, shR: [20, 20], elR: 30, shL: [20, 30], elL: 20 })); rosto(gui, null, t, 'triste', { lento: .5 });
      cam(cm, [[0, [1.35, 1.9, 1.3]], [.45, [1.2, 1.9, 1.25]], [.6, [1.5, .78, .15]], [1, [1.45, .76, .12]]], [[0, [-.1, .4, -.3]], [.45, [.2, .8, .35]], [.6, [.15, .62, -.05]], [1, [.15, .6, -.05]]], u / 11.4, 0, .3); return DIA; }; }),
  // H1 — portaria: estende a mão pro porteiro, que aperta
  mk(266.4, 271, { bg: '#2A2420', fov: 38 }, (c) => { const P = escada(c); const gui = ator(c, GUI, 1.0, 4.4, Math.PI / 2); const por = ator(c, PORTEIRO, 2.0, 4.4, -Math.PI / 2);
    return (t, u, cm) => { const a = t - 266.4; const est = smooth(.8, 1.4, a); const ap = a > 1.6;
      gui.pose(soma(parado(t, 2), { shR: [55 * est, 4], elR: 15 + (ap ? Math.sin(t * 9) * 4 : 0) })); por.pose(soma(parado(t, 4), { shR: [55 * smooth(1.1, 1.6, a), 4], elR: 15 + (ap ? Math.sin(t * 9) * 4 : 0) }));
      rosto(gui, null, t, 'feliz'); rosto(por, null, t, 'feliz');
      cam(cm, [[0, [1.5, 1.4, 2.2]], [1, [1.5, 1.35, 2.45]]], [[0, [1.5, 1.0, 4.4]], [1, [1.5, 1.0, 4.4]]], u / 4.6); return { tint: '#FFF4E4' }; }; }),
  // H2 — o porteiro arregala os olhos e faz cara de dor
  mk(271, 275, { bg: '#2A2420', fov: 30 }, (c) => { const P = escada(c); const gui = ator(c, GUI, 1.0, 4.4, Math.PI / 2); const por = ator(c, PORTEIRO, 2.0, 4.4, -Math.PI / 2);
    return (t, u, cm) => { gui.pose(soma(parado(t, 2), { shR: [55, 4], elR: 15 })); por.pose(soma(parado(t, 4), { shR: [55, 4], elR: 15, lean: 8 * smooth(271.3, 272, t), bob: -.06 * smooth(271.3, 272, t) }, treme(t, .8 * smooth(271.3, 272, t))));
      rosto(gui, null, t, 'feliz'); rosto(por, null, t, t > 271.4 ? 'medo' : 'feliz', { mouth: t > 271.6 ? { open: .5, smile: -.8 } : undefined });
      cam(cm, [[0, [1.5, 1.4, 2.6]], [1, [1.52, 1.38, 2.75]]], [[0, [2.0, 1.1, 4.4]], [1, [2.0, 1.1, 4.4]]], u / 4); return { tint: '#FFF4E4' }; }; }),
  // H3 — ele solta na hora, pede desculpa com as mãos, enfia as mãos nos bolsos; o porteiro balança a mão no ar
  mk(275, 290, { bg: '#2A2420', fov: 38 }, (c) => { const P = escada(c); const gui = ator(c, GUI, 1.0, 4.4, Math.PI / 2); const por = ator(c, PORTEIRO, 2.0, 4.4, -Math.PI / 2);
    return (t, u, cm) => { const a = t - 275; const desc = kv(a, [[.2, 0], [.6, 1], [2.6, 1], [3.2, 0]]); const bolso = smooth(3.0, 3.6, a); const sai = clamp((a - 6) / 4);
      gui.place(lerp(1.0, 1.5, sai), lerp(4.4, 6.8, sai), 0, sai > 0 ? lerp(Math.PI / 2, 0, smooth(0, .2, sai)) : Math.PI / 2);
      gui.pose(sai > 0 ? andar(t, { maos: 'bolso', f: 1.9 }) : soma(parado(t, 2), mix(mix({}, soma(G.desculpa, { shL: [55, 22 + Math.sin(t * 8) * 8], shR: [55, 22 - Math.sin(t * 8) * 8] }), desc), G.maosBolso, bolso))); rosto(gui, null, t, 'vergonha', { mouth: desc > .5 ? { open: .2 + .2 * Math.sin(t * 9) } : undefined });
      por.pose(soma(parado(t, 4), sacode(t))); rosto(por, null, t, a < 4 ? 'medo' : 'surpreso', { look: [sai > 0 ? .5 : 0, 0] }); P.portaRua.rotation.y = -1.2 * smooth(8.5, 9.2, a);
      cam(cm, [[0, [1.5, 1.4, 2.2]], [.5, [1.45, 1.4, 2.2]], [1, [1.0, 1.5, 2.3]]], [[0, [1.5, 1.0, 4.4]], [.5, [1.6, 1.0, 4.6]], [1, [1.6, 1.0, 5.8]]], u / 15); return { tint: '#FFF4E4' }; }; }),
];
