// ATO 3B — dias 7 a 10 (360 a 489 s): a cama quebrando à noite, as mãos marcadas no batente, o aniversário de 72 anos
// ("Se eu te abraço, eu te machuco"), a fila na escada e o copo que vira pó.
import * as THREE from 'three';
import { mk, cam, camT, ator, rosto, icone } from './base.js';
import { GUI, CIDA, CIDAFESTA, TIAGO, pessoa, crianca } from './gente.js';
import { escada, subir, FH, XA, XB, ZA0, ZLAND } from './comum.js';
import { quarto, salinha, cozinha } from './lugares.js';
import { bolo, copo, celular, marcaMao, rachadura } from './objs.js';
import { naMao, jato, respingo, pinga } from './fx2.js';
import { poeira, sprite } from './efeitos.js';
import { G, soma, vivo, treme, andar, parado, kf, kv, mix, rir } from './mov.js';
import { clamp, smooth, easeOut, easeIn, lerp } from './motor/core.js';
import { cyl, sph, rb, bx, toon, ctex } from './motor/toon.js';

const NOITE = { tint: '#C8D0FF', exposure: .8, vig: .5 };
// ---------- quarto ----------
/** Guilherme deitado de costas na cama (rolar = ângulo de lado). */
function deita(c, x = .62, y = .5, z = .42) { const g = ator(c, GUI, x, z, 0); g.sombra.visible = false; g._b = [x, y, z]; return g; }
const deitPose = (g, rolar = 0, dy = 0) => { const [x, y, z] = g._b; g.root.rotation.set(-Math.PI / 2, rolar, 0, 'XZY'); g.root.rotation.order = 'XYZ'; g.root.rotation.set(-Math.PI / 2, 0, 0); g.root.rotateY(rolar); g.root.position.set(x, y + dy + Math.abs(Math.sin(rolar)) * .08, z); };
function montaQuarto(c, hora = 'noite') { const Q = quarto(c, { hora }); Q.luz.intensity = 0; Q.lamp.userData.bulbo.material.emissiveIntensity = 0; Q.rua.intensity = hora === 'noite' ? 26 : 6; return Q; }

// ---------- aniversário ----------
function montaSala(c) {
  const S = salinha(c); const b = bolo(); b.position.set(.2, .765, .35); c.add(b); const ch = b.userData.chama, cob = b.userData.cobertura;
  const L = new THREE.PointLight('#FFB45A', 1.6, 2.5, 1.6); L.position.set(.2, 1.15, .35); c.add(L);
  const ci = ator(c, CIDAFESTA, -.45, .5, Math.PI / 2 - .25); const gui = ator(c, GUI, .95, .55, -Math.PI / 2 + .1);
  // a metade da cobertura que voa e cola na parede
  const voa = new THREE.Mesh(new THREE.SphereGeometry(.13, 14, 8, 0, Math.PI), toon('#3A1E10')); voa.scale.set(1, .25, 1); c.add(voa); voa.visible = false;
  const mancha = new THREE.Mesh(new THREE.CircleGeometry(.16, 18), new THREE.MeshToonMaterial({ color: '#3A1E10', transparent: true, polygonOffset: true, polygonOffsetFactor: -2 })); mancha.position.set(-1.785, 1.15, .25); mancha.rotation.y = Math.PI / 2; mancha.scale.set(1.3, 1, 1); c.add(mancha); mancha.visible = false;
  const pingos = []; for (let i = 0; i < 4; i++) { const p = new THREE.Mesh(new THREE.CircleGeometry(.025, 8), mancha.material); p.position.set(-1.784, 1.0 - i * .05, .2 + i * .05); p.rotation.y = Math.PI / 2; p.scale.set(1, 2 + i, 1); c.add(p); pingos.push(p); }
  return { S, b, ch, cob, L, ci, gui, voa, mancha, pingos };
}
const T_SOPRA = 415.2;
function salaUpd(S, t, limpa = 0) {
  const sop = t - T_SOPRA; const apag = sop > .15;
  S.ch.visible = !apag; S.ch.scale.set(1, 1 + .2 * Math.sin(t * 17), 1); S.L.intensity = apag ? 0 : 1.6 * (.9 + .1 * Math.sin(t * 13)); if (!apag && sop > 0) S.ch.rotation.z = -sop * 6;
  // metade da cobertura voa (415.3 – 415.7) e gruda na parede
  const k = clamp((sop - .1) / .4); S.voa.visible = k > 0 && k < 1; if (S.voa.visible) S.voa.position.set(lerp(.2, -1.75, k), lerp(.95, 1.15, k) + Math.sin(k * Math.PI) * .25, lerp(.35, .25, k)); S.cob.scale.set(1, 1, k > 0 ? .5 : 1); S.cob.position.z = k > 0 ? .08 : 0;
  const m = sop > .5 && limpa < 1; S.mancha.visible = m; S.mancha.material.opacity = 1 - limpa; S.pingos.forEach((p, i) => { p.visible = m; p.position.y = 1.0 - i * .05 - Math.min(.1, Math.max(0, sop - .5) * .01); });
}

// ---------- fila na escada ----------
function montaFila(c) {
  const P = escada(c); const Y = 4 * FH;
  // fila: do patamar do 4º andar descendo o lance B do 3º andar e o patamar do meio
  const pos = [[.15, Y, 2.0], [XB, Y - .2, 1.2], [XB, Y - .55, .7], [XB, Y - .9, .15], [XB, Y - 1.25, -.4], [.3, 3 * FH + 1.4, -1.25], [-.3, 3 * FH + 1.4, -1.25]];
  const defs = [pessoa(3, { camisa: '#8E6A3A', calca: '#6A4A2A', estampa: (x, w, h) => { x.fillStyle = '#5A3A1A'; for (let i = 0; i < 30; i++) { x.beginPath(); x.arc((i * 131) % w, h * .5 + (i * 61) % (h * .5), 14, 0, 7); x.fill(); } } }), pessoa(1), pessoa(0), { ...pessoa(2), camisa: '#2A2E38', calca: '#2A2E38', estampa: (x, w, h) => { x.fillStyle = '#F4F1EA'; x.beginPath(); x.moveTo(w / 2 - 40, 0); x.lineTo(w / 2, h * .4); x.lineTo(w / 2 + 40, 0); x.fill(); x.fillStyle = '#C0392B'; x.fillRect(w / 2 - 8, 0, 16, h * .45); } }, crianca(1), pessoa(4), pessoa(5), pessoa(6), pessoa(7)];
  const ks = pos.map(([x, y, z], i) => ator(c, defs[i], x, z, i < 5 ? Math.PI : i < 7 ? (i === 5 ? -Math.PI / 2 : -Math.PI / 2) : Math.PI, y));
  ks[0].place(-.3, 1.75, Y, -.79); // o vizinho da chave fica de frente pra porta, longe da câmera do alto
  const chave = bx(.03, .06, .01, '#C9CED6', 0, 0, 0); c.add(chave); const tel = celular((x, w, h) => { x.fillStyle = '#F4F6FA'; x.fillRect(0, 0, w, h); x.fillStyle = '#C8CDD4'; x.fillRect(90, 120, 120, 300); x.fillStyle = '#9AA0A8'; x.fillRect(90, 260, 120, 6); x.fillRect(190, 160, 8, 60); x.fillStyle = '#2A2A30'; x.font = '700 26px Inter'; x.fillText('geladeira 😩', 60, 480); }); tel.scale.setScalar(1.5); c.add(tel);
  const marreta = new THREE.Group(); marreta.add(cyl(.015, .015, .6, '#B8864A', 0, -.2, 0, { seg: 6 })); marreta.add(bx(.14, .07, .07, '#3A3A44', 0, .1, 0)); c.add(marreta);
  const cartao = bx(.07, .045, .004, '#F4F1EA', 0, 0, 0); c.add(cartao);
  const tia = ator(c, TIAGO, -.9, 2.35, .3, Y); const cad = rb(.15, .2, .02, '#E8D8A0', 0, 0, 0); c.add(cad); const can = cyl(.006, .006, .12, '#2A4AA8', 0, 0, 0, { seg: 6 }); c.add(can);
  return { P, ks, chave, tel, marreta, cartao, tia, cad, can, Y };
}
function filaUpd(F, t) {
  const { ks, chave, tel, marreta, cartao, tia, cad, can } = F;
  ks.forEach((k, i) => { let p = soma(parado(t, i), { lean: 4 });
    if (i === 0) p = soma(p, { shR: [60, 6], elR: 40 }); if (i === 1) p = soma(p, { shR: [70, -6], elR: 70, headX: 10 }); if (i === 2) p = soma(p, { shR: [30 + 20 * Math.max(0, Math.sin(t * 2)), 10], elR: 90, shL: [85, 30], elL: 5 });
    if (i === 3) p = soma(p, { shR: [75, 0], elR: 20 }); if (i === 4) p = soma(p, { shL: [140, 20], elL: 30, bob: Math.abs(Math.sin(t * 6)) * .04 });
    k.pose(p); rosto(k, null, t, i === 4 ? 'feliz' : i === 2 ? 'bravo' : i === 3 ? 'feliz' : 'neutro', { look: [Math.sin(t * .7 + i) * .4, -.3] }); });
  naMao(chave, ks[0], 'R', [0, -.06, .03]); naMao(tel, ks[1], 'R', [0, -.08, .05], [-.5, 0, 0]); naMao(marreta, ks[2], 'R', [0, -.05, 0]); naMao(cartao, ks[3], 'R', [0, -.06, .04]);
  const esc = Math.max(0, Math.sin(t * 3)); tia.pose(soma(parado(t, 5), { shL: [55, -6], elL: 80, shR: [50, -4], elR: 85 + 10 * esc, headX: 14 })); naMao(cad, tia, 'L', [0, -.06, .06], [-1.2, 0, 0]); naMao(can, tia, 'R', [0, -.04, .05], [-.8, 0, .4]);
}

// ---------- copo ----------
function montaCopo(c) { const K = cozinha(c, { hora: 'tarde' }); const fita = cyl(.024, .024, .03, '#9AA0A8', 0, 0, 0, { seg: 10 }); fita.rotation.x = Math.PI / 2; fita.position.set(.075, 1.05, -1.55); c.add(fita);
  K.cad2.position.z = .08; const gui = ator(c, GUI, .1, -.7, Math.PI); const cp = copo(); c.add(cp); const tia = ator(c, TIAGO, -1.45, .9, Math.PI / 2 - .2); const cad = rb(.15, .2, .02, '#E8D8A0', 0, 0, 0); c.add(cad);
  const enche = jato(c, [.075, 1.02, -1.48], [0, -.4, 0], { n: 20, tam: .02, vida: .25, abre: .05 }); const pp = [0, 0, 0]; const po = respingo(c, pp, { t0: 472.6, cores: ['#E8F4FF', '#FFFFFF', '#BFE4FF'], n: 40, v: .9, tam: .018, vida: 1.2, chao: 0 });
  const gotas = []; for (let i = 0; i < 16; i++) { const s = sprite('#8FCBEA', .03, .9, false); s.userData = { ph: i / 16 }; c.add(s); gotas.push(s); }
  return { K, gui, cp, tia, cad, enche, po, pp, gotas };
}
const T_PO = 472.6;
function copoUpd(C, t) {
  const { gui, cp, tia, cad, enche, gotas } = C; const a = t;
  // vira para a pia, enche (467–469.5), vira e leva à boca (470–472.5), o copo vira pó (472.6)
  const vira = smooth(469.6, 470.4, a); gui.place(.1, lerp(-.7, -.55, vira), 0, lerp(Math.PI, Math.PI * .25, vira));
  const boca = smooth(470.8, 472.4, a), seg = a > T_PO; const olha = smooth(473.2, 474.2, a);
  gui.pose(soma(parado(t, 2, .6), { shR: [lerp(55, 95, boca) - 30 * olha, 6], elR: lerp(30, 95, boca) - 20 * olha, headX: -8 * boca * (seg ? 0 : 1) + 22 * olha, lean: 2 }));
  cp.visible = !seg; if (!seg) naMao(cp, gui, 'R', [0, -.08, .05], false);
  cp.userData.agua.scale.y = Math.max(.05, smooth(467.2, 469.4, a)); enche(t, a > 467 && a < 469.4 ? 1 : 0);
  gui.root.updateMatrixWorld(true); const h = gui.hands.R.localToWorld(new THREE.Vector3(0, -.08, .05)); if (a < T_PO) C.pp.splice(0, 3, h.x, h.y, h.z);
  gotas.forEach((s) => { const q = s.userData, k = ((t * 1.6 + q.ph) % 1); s.visible = seg && t < 482; s.position.set(h.x + (q.ph - .5) * .05, Math.max(0, h.y - k * h.y), h.z); s.scale.setScalar(.03 * (1 - k * .5)); });
  rosto(gui, a > 476 && a < 479 ? 'gui' : null, t, seg ? 'triste' : 'neutro', { look: seg ? [0, .7 * olha] : [0, 0], olhosAbertos: true });
  const desce = smooth(479.2, 481, a); tia.pose(soma(parado(t, 5), { shL: [lerp(55, 5, desce), -6], elL: lerp(80, 20, desce), headX: 6 })); naMao(cad, tia, 'L', [0, -.06, .06], [-1.2, 0, 0]); rosto(tia, null, t, a > 473 ? 'preocupado' : 'feliz');
}

export const ATO3B = [
  // Q1 — dia 7, quarto escuro, só a luz da rua: ele vira na cama e o estrado quebra (crack)
  mk(360, 366, { bg: '#08080E', fov: 40 }, (c) => { const Q = montaQuarto(c); const g = deita(c); const po = poeira(c, [[.62, .3, -.3], [.62, .3, .3]], { n: 16, size: .5, life: 2, op: .4, sp: .8 });
    return (t, u, cm) => { Q.ventilador.girar(t); const rol = kv(t, [[361.2, 0], [361.9, 1.2]]); const cai = easeIn(clamp((t - 362.3) / .15)); deitPose(g, rol, -.08 * cai); Q.colchao.position.y = .39 - .08 * cai; Q.travesseiro.position.y = .5 - .08 * cai; Q.lencol = Q.lencol;
      g.pose({ shL: [30, 10], elL: 60, shR: [20, 14], elR: 30, hipL: [30, 4], hipR: [20, 4], knL: 40, knR: 30 }); rosto(g, null, t, t > 362.4 ? 'surpreso' : 'sono', { blink: t < 362.3 ? 1 : undefined }); po(t - 362.3);
      camT(cm, [[0, [-.9, 1.9, 1.3]], [1, [-.7, 1.7, 1.0]]], [[0, [.62, .4, -.2]], [1, [.62, .45, -.25]]], u / 6, t > 362.3 ? .02 * Math.exp(-(t - 362.3) * 6) : 0); return NOITE; }; }),
  // Q2 — vira de novo e quebra o pé da cama, que fica torta
  mk(366, 371, { bg: '#08080E', fov: 40 }, (c) => { const Q = montaQuarto(c); const g = deita(c);
    return (t, u, cm) => { Q.ventilador.girar(t); Q.colchao.position.y = .31; Q.travesseiro.position.y = .42; const rol = kv(t, [[366.6, 1.2], [367.4, -1.1]]); const tort = easeOut(clamp((t - 367.6) / .2));
      Q.cama.rotation.z = .1 * tort; Q.cama.position.y = -.05 * tort; deitPose(g, rol, -.08 - .03 * tort); g.root.position.x += .03 * tort;
      g.pose({ shL: [20, 14], elL: 30, shR: [30, 10], elR: 60, hipL: [20, 4], hipR: [30, 4], knL: 30, knR: 40 }); rosto(g, null, t, t > 367.7 ? 'medo' : 'sono', { blink: t < 367.6 && t > 366.2 ? .6 : undefined });
      camT(cm, [[0, [1.3, 1.1, 1.4]], [1, [1.25, 1.05, 1.3]]], [[0, [.62, .3, .2]], [1, [.62, .35, -.1]]], u / 5, t > 367.6 ? .015 * Math.exp(-(t - 367.6) * 6) : 0); return NOITE; }; }),
  // Q3 — ele desce pro chão e puxa o colchão
  mk(371, 375.2, { bg: '#08080E', fov: 40 }, (c) => { const Q = montaQuarto(c); Q.cama.rotation.z = .1; Q.cama.position.y = -.05; const g = ator(c, GUI, .0, -.1, Math.PI / 2);
    return (t, u, cm) => { Q.ventilador.girar(t); const a = t - 371; const pux = smooth(1.2, 3.2, a); Q.colchao.position.set(lerp(0, -1.07, pux), lerp(.31, .1, pux), 0); Q.travesseiro.position.set(lerp(0, -1.07, pux), lerp(.42, .22, pux), -.8);
      g.place(lerp(-.75, -1.15, pux), .35, 0, Math.PI / 2); g.pose(soma(G.pegaChao, { lean: 40, shL: [60, 6], shR: [60, 6] }, { bob: -.1 })); rosto(g, null, t, 'triste');
      cam(cm, [[0, [-1.1, 1.5, 1.3]], [1, [-1.0, 1.4, 1.15]]], [[0, [.2, .3, -.3]], [1, [-.2, .3, -.3]]], u / 4.2); return NOITE; }; }),
  // Q4 — deitado no colchão no chão, sem se mexer, braços cruzados no peito, olhando o teto
  mk(375.2, 381, { bg: '#08080E', fov: 40 }, (c) => { const Q = montaQuarto(c); Q.cama.rotation.z = .1; Q.cama.position.y = -.05; Q.colchao.position.set(-1.07, .1, 0); Q.travesseiro.position.set(-1.07, .22, -.8); const g = deita(c, -.45, .22, .42);
    return (t, u, cm) => { Q.ventilador.girar(t); deitPose(g, 0, 0); g.pose(soma(G.bracoCruzado, { lean: 0, headX: -4 })); rosto(g, null, t, 'triste', { look: [0, 0], olhosAbertos: true, lento: .3 });
      cam(cm, [[0, [-.45, 2.2, .95]], [1, [-.45, 2.1, .8]]], [[0, [-.45, 0, -.3]], [1, [-.45, 0, -.4]]], u / 5.8); return { ...NOITE, exposure: .75 }; }; }),
  // B1 — manhã: close no batente da porta: a marca das duas mãos afundadas na madeira; ele passa o dedo, preocupado
  mk(381, 390, { bg: '#C8D8E0', fov: 44, limpa: false, perto: true }, (c) => { const Q = montaQuarto(c, 'manha'); Q.luz.intensity = 3; const ms = [[1.38, .5], [1.12, .55]].map(([y, z]) => { const m = marcaMao(); m.position.set(-1.373, y, z); m.rotation.y = Math.PI / 2; m.scale.setScalar(.85); c.add(m); return m; });
    const g = ator(c, GUI, -.95, .88, -Math.PI / 2 - .64);
    return (t, u, cm) => { const a = t - 381; const dedo = smooth(3.5, 4.5, a); g.pose(soma(parado(t, 2, .6), { shR: [lerp(10, 92, dedo), lerp(10, -10, dedo)], elR: lerp(10, 20, dedo) + 8 * Math.sin(t * 1.3) * dedo, headY: 15, headX: 6 })); rosto(g, null, t, 'preocupado', { look: [.4, 0] });
      cam(cm, [[0, [-.3, 1.4, -.05]], [.35, [-.25, 1.4, -.1]], [1, [-.12, 1.45, -.2]]], [[0, [-1.25, 1.2, .62]], [.35, [-1.22, 1.18, .64]], [1, [-1.15, 1.12, .72]]], u / 9, 0, .3); return { tint: '#FFF4E4' }; }; }),
  // S1 — sala, dia 8: bolo de chocolate com vela 72 acesa; Dona Cida de vestido de sair, sorrindo; ela abre os braços
  mk(390, 398, { bg: '#3A3028', fov: 40 }, (c) => { const S = montaSala(c);
    return (t, u, cm) => { salaUpd(S, t); const ab = smooth(395.5, 397, t); S.ci.pose(soma(parado(t, 3), mix({}, G.bracosAbertos, ab))); rosto(S.ci, null, t, 'feliz', { smile: .8 }); S.gui.pose(soma(parado(t, 2), G.maosBolso)); rosto(S.gui, null, t, 'neutro');
      cam(cm, [[0, [1.5, 1.7, 1.7]], [.5, [1.0, 1.5, 1.6]], [1, [.5, 1.35, 1.6]]], [[0, [.0, .8, .3]], [1, [-.35, 1.0, .45]]], u / 8); return { bloom: .3 }; }; }),
  // S2 — "Me dá um abraço, hoje é meu dia!"
  mk(398, 401.2, { bg: '#3A3028', fov: 34 }, (c) => { const S = montaSala(c);
    return (t, u, cm) => { salaUpd(S, t); S.ci.pose(soma(parado(t, 3), G.bracosAbertos, { shL: [55 + 6 * Math.sin(t * 3), 55], shR: [55 + 6 * Math.sin(t * 3 + 1), 55] })); rosto(S.ci, 'cida', t, 'feliz', { smile: .8 }); S.gui.pose(soma(parado(t, 2), G.maosBolso));
      cam(cm, [[0, [.3, 1.2, 1.45]], [1, [.25, 1.18, 1.4]]], [[0, [-.45, .92, .5]], [1, [-.45, .92, .5]]], u / 3.2); return { bloom: .3 }; }; }),
  // S3 — ele dá um passo pra trás; pela janela, ao fundo, o portão do prédio amassado pra dentro
  mk(401.2, 405, { bg: '#3A3028', fov: 36 }, (c) => { const S = montaSala(c);
    return (t, u, cm) => { salaUpd(S, t); const pas = smooth(401.6, 402.4, t); S.gui.place(lerp(.95, 1.25, pas), lerp(.55, .45, pas), 0, -Math.PI / 2 + .1); S.gui.pose(pas > 0 && pas < 1 ? andar(t, { f: 1.4, amp: .6 }) : soma(parado(t, 2), G.maosBolso, { lean: -6 }));
      rosto(S.gui, null, t, 'triste', { look: [0, .2] }); S.ci.pose(soma(parado(t, 3), G.bracosAbertos)); rosto(S.ci, null, t, 'feliz');
      cam(cm, [[0, [-.4, 1.25, -.3]], [1, [-.35, 1.22, -.35]]], [[0, [1.4, 1.1, .35]], [1, [1.6, 1.15, .22]]], u / 3.8); return { bloom: .3 }; }; }),
  // S4 — "Não dá, vó... Se eu te abraço, eu te machuco." (voz embargada)
  mk(405, 409, { bg: '#3A3028', fov: 32 }, (c) => { const S = montaSala(c); S.gui.place(1.25, .45, 0, -Math.PI / 2 + .1);
    return (t, u, cm) => { salaUpd(S, t); S.gui.pose(soma(parado(t, 2, .6), G.maosBolso, { headX: 10, lean: -4 })); rosto(S.gui, 'gui', t, 'triste', { lagrima: t > 406.5, look: [0, .3] }); S.ci.pose(soma(parado(t, 3), G.bracosAbertos));
      cam(cm, [[0, [.3, 1.15, .75]], [1, [.35, 1.13, .72]]], [[0, [1.25, 1.0, .45]], [1, [1.25, 1.0, .45]]], u / 4); return { bloom: .3 }; }; }),
  // S5 — o sorriso dela vai sumindo devagar; os braços descem. Silêncio, só a vela queimando
  mk(409, 413, { bg: '#3A3028', fov: 32, perto: true }, (c) => { const S = montaSala(c); S.gui.place(1.25, .45, 0, -Math.PI / 2 + .1);
    return (t, u, cm) => { salaUpd(S, t); const d = smooth(409.3, 412.2, t); S.ci.pose(soma(parado(t, 3, .4), mix(G.bracosAbertos, { shL: [5, 10], shR: [5, 10], elL: 20, elR: 20 }, d))); rosto(S.ci, null, t, d > .6 ? 'triste' : 'feliz', { smile: .8 * (1 - d), lento: .4 }); S.gui.pose(soma(parado(t, 2), G.maosBolso));
      cam(cm, [[0, [.95, 1.05, .95]], [1, [.88, 1.04, .9]]], [[0, [-.45, .9, .5]], [1, [-.3, .9, .45]]], u / 4); return { bloom: .3 }; }; }),
  // S6 — ele se inclina e sopra a vela de longe: a vela apaga, metade da cobertura voa e cola na parede
  mk(413, 418, { bg: '#3A3028', fov: 38 }, (c) => { const S = montaSala(c); S.gui.place(1.25, .45, 0, -Math.PI / 2 + .1);
    return (t, u, cm) => { salaUpd(S, t); const sop = kv(t, [[414.3, 0], [415.0, 1], [415.6, 1], [416.4, 0]]); S.gui.pose(soma(parado(t, 2), G.maosBolso, { lean: 18 * sop, headX: 8 * sop })); rosto(S.gui, null, t, 'triste', { mouth: t > 415 && t < 415.5 ? { open: .3, round: 1 } : undefined });
      const p = smooth(415.2, 415.8, t); S.ci.pose(soma(parado(t, 3), { headY: 30 * p, lean: -4 * p })); rosto(S.ci, null, t, t > 415.4 ? 'surpreso' : 'triste', { look: [-.5 * p, 0] });
      cam(cm, [[0, [.35, 1.35, 1.75]], [1, [.3, 1.3, 1.65]]], [[0, [-.4, .95, .35]], [1, [-.6, 1.0, .3]]], u / 5); return { bloom: .3 }; }; }),
  // S7 — ninguém ri. "Ele conseguia levantar um caminhão, mas não conseguia abraçar a única pessoa que carregou ele a vida inteira"
  mk(418, 425.4, { bg: '#3A3028', fov: 38 }, (c) => { const S = montaSala(c); S.gui.place(1.25, .45, 0, -Math.PI / 2 + .1);
    return (t, u, cm) => { salaUpd(S, t); S.ci.pose(soma(parado(t, 3, .4), { headX: 10 })); rosto(S.ci, null, t, 'triste', { lento: .4, look: [0, .4] }); S.gui.pose(soma(parado(t, 2, .4), G.maosBolso, { headX: 16 })); rosto(S.gui, null, t, 'triste', { lagrima: true, lento: .4 });
      cam(cm, [[0, [.2, 2.0, 2.0]], [1, [.25, 1.6, 1.4]]], [[0, [.3, .8, .4]], [1, [.3, .9, .4]]], u / 7.4); return { bloom: .25, sat: .85 }; }; }),
  // S8 — Dona Cida sozinha limpando a cobertura da parede com um pano; ele de longe, mãos fechadas
  mk(425.4, 440, { bg: '#3A3028', fov: 38 }, (c) => { const S = montaSala(c); S.ci.place(-1.4, .3, 0, -Math.PI / 2); S.gui.place(1.5, 1.35, 0, -Math.PI / 2 - .5); const pano = rb(.12, .1, .03, '#F2C230', 0, 0, 0); c.add(pano);
    return (t, u, cm) => { const lim = smooth(427, 438, t); salaUpd(S, t, lim * .95); const esf = Math.sin(t * 5); S.ci.pose(soma(parado(t, 3, .4), { shR: [100 + 12 * esf, 10 + 10 * esf], elR: 40, headX: -8, lean: 4 })); naMao(pano, S.ci, 'R', [0, -.07, .02]); rosto(S.ci, null, t, 'triste', { lento: .5 });
      S.gui.pose(soma(parado(t, 2, .4), { shL: [6, 10], shR: [6, 10], elL: 20, elR: 20 })); S.gui.hands.L.scale.set(.9, .7, 1.05); S.gui.hands.R.scale.set(.9, .7, 1.05); rosto(S.gui, null, t, 'triste', { lagrima: true });
      cam(cm, [[0, [1.6, 1.5, 1.1]], [1, [1.55, 1.45, 1.0]]], [[0, [-.6, 1.0, .3]], [1, [-1.0, 1.05, .3]]], u / 14.6); return { bloom: .25, sat: .85 }; }; }),
  // F1 — dias 9 e 10: fila descendo a escada — vizinho de chave e roupa de barro, mulher com a foto da geladeira, homem com marreta, cara de terno, criança
  mk(440, 446.5, { bg: '#2A2420', fov: 58 }, (c) => { const F = montaFila(c); return (t, u, cm) => { filaUpd(F, t); const Y = F.Y; cam(cm, [[0, [1.0, Y + 2.55, 2.75]], [1, [.95, Y + 2.5, 2.65]]], [[0, [XB, Y - 1.3, -.3]], [1, [.3, Y - 1.6, -1.0]]], u / 6.5); return { tint: '#FFF4E4' }; }; }),
  mk(446.5, 452, { bg: '#2A2420', fov: 48 }, (c) => { const F = montaFila(c); return (t, u, cm) => { filaUpd(F, t); const Y = F.Y; cam(cm, [[0, [-.75, Y - .6, -.9]], [1, [-.75, Y - .55, -.6]]], [[0, [XB, Y - .5, 1.0]], [1, [XB, Y - .9, -.2]]], u / 5.5); return { tint: '#FFF4E4' }; }; }),
  // T1 — na porta, o Tiago com caderno e caneta organizando a fila e anotando "cinquenta reais"
  mk(452, 456, { bg: '#2A2420', fov: 36 }, (c) => { const F = montaFila(c); return (t, u, cm) => { filaUpd(F, t); F.ks[0].root.visible = false; rosto(F.tia, null, t, 'feliz', { look: [0, .6] }); const Y = F.Y; cam(cm, [[0, [-.3, Y + 1.25, 1.45]], [1, [-.35, Y + 1.22, 1.55]]], [[0, [-.85, Y + .95, 2.35]], [1, [-.85, Y + .9, 2.35]]], u / 4); return { tint: '#FFF4E4' }; }; }),
  // T2 — "Gui, em um mês a gente fica rico!"
  mk(456, 459.4, { bg: '#2A2420', fov: 34 }, (c) => { const F = montaFila(c); return (t, u, cm) => { filaUpd(F, t); F.ks[0].root.visible = false; F.tia.pose(soma(parado(t, 5), { shL: [55, -6], elL: 80, shR: [70 + 20 * Math.sin(t * 4), 20], elR: 60, lean: -4 })); rosto(F.tia, 'tiago', t, 'feliz', { look: [.4, 0] }); const Y = F.Y;
    cam(cm, [[0, [-.15, Y + 1.2, 1.4]], [1, [-.2, Y + 1.18, 1.5]]], [[0, [-.85, Y + 1.0, 2.35]], [1, [-.85, Y + 1.0, 2.35]]], u / 3.4); return { tint: '#FFF4E4' }; }; }),
  mk(459.4, 465, { bg: '#2A2420', fov: 44 }, (c) => { const F = montaFila(c); return (t, u, cm) => { filaUpd(F, t); rosto(F.tia, null, t, 'feliz'); const Y = F.Y; cam(cm, [[0, [1.0, Y + 2.0, 2.6]], [1, [.95, Y + 2.5, 2.65]]], [[0, [-.7, Y + .8, 2.2]], [1, [.3, Y - 1.6, -1.0]]], u / 5.6); return { tint: '#FFF4E4' }; }; }),
  // C1 — cozinha: enche o copo na torneira nova, remendada com fita; leva à boca; o copo vira pó de vidro; a água escorre pelos dedos
  mk(465, 470.6, { bg: '#3A3028', fov: 38 }, (c) => { const C = montaCopo(c); return (t, u, cm) => { copoUpd(C, t); cam(cm, [[0, [.85, 1.3, .3]], [1, [.75, 1.25, .1]]], [[0, [.1, 1.0, -1.1]], [1, [.1, 1.0, -1.0]]], u / 5.6); return { tint: '#FFF0DC' }; }; }),
  mk(470.6, 476, { bg: '#3A3028', fov: 34 }, (c) => { const C = montaCopo(c); return (t, u, cm) => { copoUpd(C, t); C.po(t); cam(cm, [[0, [.75, 1.2, .55]], [.5, [.6, 1.15, .4]], [1, [.55, 1.05, .35]]], [[0, [.1, 1.05, -.45]], [.5, [.15, .95, -.4]], [1, [.15, .85, -.35]]], u / 5.4); return { tint: '#FFF0DC', focus: 1.0, range: .6, blur: 6 }; }; }),
  // C2 — "Tiago, eu não consigo nem beber água." O Tiago na porta, com o caderno; depois abaixa o caderno devagar
  mk(476, 483, { bg: '#3A3028', fov: 36 }, (c) => { const C = montaCopo(c); return (t, u, cm) => { copoUpd(C, t); cam(cm, [[0, [-.7, 1.3, .6]], [.55, [-.75, 1.3, .55]], [1, [.7, 1.25, .2]]], [[0, [.1, 1.05, -.55]], [.55, [.1, 1.05, -.55]], [1, [-1.4, 1.0, .9]]], u / 7, 0, .3); return { tint: '#FFF0DC' }; }; }),
  // C3 — "E foi aí que ele entendeu: força nunca foi o problema, o problema era controle." — a mão molhada, o rosto
  mk(483, 489.4, { bg: '#3A3028', fov: 30 }, (c) => { const C = montaCopo(c); return (t, u, cm) => { copoUpd(C, t); C.gui.pose(soma(parado(t, 2, .4), { shR: [70, 6], elR: 80, headX: 18 })); rosto(C.gui, null, t, 'determinado', { look: [0, .5] });
    cam(cm, [[0, [.55, 1.05, .2]], [1, [.4, 1.15, .1]]], [[0, [.15, .9, -.35]], [1, [.1, 1.05, -.5]]], u / 6.4); return { tint: '#FFF0DC', focus: .8, range: .4, blur: 8 }; }; }),
];
