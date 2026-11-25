// ATO 3A — dia 5 e dia 6 (290 a 360 s): a bola embaixo do carro, o vídeo viral no celular do Tiago
// e a academia (a barra entorta em U, as anilhas caem, "Isso aí é de aço").
import * as THREE from 'three';
import { mk, cam, camT, ator, rosto } from './base.js';
import { GUI, TIAGO, DONO, crianca, pessoa } from './gente.js';
import { rua, academia } from './lugares2.js';
import { celular, dobrarBarra, anilha } from './objs.js';
import { naMao, respingo } from './fx2.js';
import { G, soma, vivo, treme, andar, parado, kf, kv, mix, rir, pular, correr } from './mov.js';
import { clamp, smooth, easeOut, easeIn, lerp } from './motor/core.js';
import { cyl, sph, rb, bx, toon } from './motor/toon.js';

const SOL = { tint: '#FFFAF0', bloom: .25 };
// ---------- rua do bairro ----------
const CX = 2.9, CZ = -1;              // carro parado no meio-fio (frente para +z)
const BOLA0 = [1.2, .1, -1.2], BOLA_CARRO = [2.75, .1, -1.9];
function montaRua(c) {
  const L = rua(c, { incl: 0, hora: 'manha', tipo: 'casas', faixa: false, z0: -60, z1: 50, seed: 44, carros: [[-1, -12, '#F4F1EA'], [1, 15, '#5AA84E'], [-1, 20, '#2A2A30']] });
  // o carro que vai subir: num pivô no eixo da frente
  const piv = new THREE.Group(); piv.position.set(CX, .32, CZ + 1.15); L.g.add(piv);
  const ca = criaCarro(); ca.position.set(0, -.32, -1.15); piv.add(ca);
  // gols de chinelo
  for (const z of [-6.5, 4.5]) for (const s of [-1, 1]) for (const d of [-.07, .07]) { const ch = rb(.1, .025, .24, ['#2D8CD6', '#E2443A'][s > 0 ? 0 : 1], -.6 + s * .7 + d, .012, z); L.g.add(ch); }
  const kids = [0, 1, 2, 3].map((i) => { const k = ator(L.g, crianca(i), [-.5, .4, 1.1, -1.2][i], [-2.5, -.2, -3.5, 1.2][i], 0); return k; });
  const bola = sph(.09, '#F4F1EA', 0, 0, 0, { seg: 14, out: .006 }); L.g.add(bola); const fx = sph(.091, '#1E1E22', 0, 0, 0, { seg: 6 }); fx.material.wireframe = true; bola.add(fx);
  const vass = cyl(.012, .012, 1.3, '#C89A5A', 0, 0, 0, { seg: 6 }); L.g.add(vass);
  const gui = ator(L.g, GUI, 1.6, -9, 0); const tia = ator(L.g, TIAGO, -2.6, 2.8, Math.PI - .6); const fone = celular((x, w, h) => { x.fillStyle = '#1A1A20'; x.fillRect(0, 0, w, h); x.fillStyle = '#E2443A'; x.beginPath(); x.arc(40, 40, 14, 0, 7); x.fill(); }); L.g.add(fone);
  return { L, piv, ca, kids, bola, vass, gui, tia, fone };
}
function criaCarro() { const g = new THREE.Group(); const cor = '#C0392B';
  g.add(rb(1.7, .55, 3.7, cor, 0, .5, 0, { out: .012, r: .12 })); g.add(rb(1.5, .5, 2.0, cor, 0, 1.0, -.25, { out: .01, r: .14 }));
  const vid = new THREE.MeshToonMaterial({ color: '#2A3A4E' }); for (const [w, h, x, y, z, ry] of [[1.38, .38, 0, 1.02, .76, 0], [1.38, .36, 0, 1.02, -1.26, Math.PI]]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), vid); p.position.set(x, y, z); p.rotation.y = ry; g.add(p); }
  for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(1.8, .36), vid); p.position.set(s * .76, 1.02, -.25); p.rotation.y = s * Math.PI / 2; g.add(p); }
  for (const [x, z] of [[-.78, 1.15], [.78, 1.15], [-.78, -1.2], [.78, -1.2]]) { g.add(cyl(.32, .32, .22, '#1E1E22', x, .32, z, { rot: [0, 0, Math.PI / 2], seg: 18, out: .006 })); g.add(cyl(.16, .16, .23, '#B9BEC6', x, .32, z, { rot: [0, 0, Math.PI / 2], seg: 12 })); }
  const luz = []; for (const s of [-1, 1]) { g.add(bx(.3, .14, .04, '#F4F1EA', s * .55, .62, 1.86)); const l = new THREE.Mesh(new THREE.BoxGeometry(.26, .12, .04), new THREE.MeshToonMaterial({ color: '#E2443A', emissive: '#FF3A2A', emissiveIntensity: 0 })); l.position.set(s * .58, .66, -1.86); g.add(l); luz.push(l); }
  g.add(bx(1.6, .14, .14, '#2A2A30', 0, .3, 1.88)); g.add(bx(1.6, .14, .14, '#2A2A30', 0, .3, -1.88)); g.userData.luz = luz; return g; }
const ANG = .27; // ângulo máximo (traseira na altura do peito)
/** Estado da rua: bola, crianças, carro, Guilherme e Tiago no tempo t. */
function ruaUpd(S, t) {
  const { piv, ca, kids, bola, vass, gui, tia, fone } = S;
  // bola: jogo (290–296), rola pra baixo do carro (296–298), um menino pega correndo (309.6)
  const pega = t > 309.6;
  if (t < 296) { const k = (t - 290); bola.position.set(.3 + Math.sin(k * 1.3) * 1.3, .09 + Math.abs(Math.sin(k * 3.2)) * .25, -1.2 + Math.sin(k * .9) * 2.3); }
  else if (t < 298) { const k = easeOut((t - 296) / 2); const p0 = [.3 + Math.sin(6 * 1.3) * 1.3, .09, -1.2 + Math.sin(6 * .9) * 2.3]; bola.position.set(lerp(p0[0], BOLA_CARRO[0], k), .09, lerp(p0[2], BOLA_CARRO[2], k)); }
  else if (!pega) bola.position.set(...BOLA_CARRO);
  bola.rotation.set(t * 6, t * 4, 0);
  // carro sobe 306.8–308.4, fica no alto, desce devagar 311.4–314.6
  const sobe = easeOut(clamp((t - 306.8) / 1.6)) * (1 - easeIn(clamp((t - 311.4) / 3.2))); piv.rotation.x = ANG * sobe;
  const al = t > 314.6 && t < 330; ca.userData.luz.forEach((l) => { l.material.emissiveIntensity = al && Math.sin(t * 14) > 0 ? 2.2 : 0; });
  // crianças: jogando -> agachadas tentando pegar -> paradas de boca aberta
  kids.forEach((k, i) => { const base = [[-.5, -2.5], [.4, -.2], [1.1, -3.5], [-1.2, 1.2]][i];
    if (t < 298) { const ph = t * 1.4 + i * 1.7; k.place(base[0] + Math.sin(ph) * .6, base[1] + Math.cos(ph * .8) * .6, 0, Math.atan2(bola.position.x - k.root.position.x, bola.position.z - k.root.position.z)); k.pose(correr(t + i * .4, 2.6, .8)); rosto(k, null, t, 'feliz'); }
    else { const alvo = [[2.05, -2.2], [2.0, -1.5], [1.75, -2.75], [1.5, -.9]][i]; const ch = clamp((t - 298 - i * .25) / 1.4); k.place(lerp(base[0], alvo[0], ch), lerp(base[1], alvo[1], ch), 0, ch < 1 ? Math.atan2(alvo[0] - base[0], alvo[1] - base[1]) : Math.PI / 2 + (i - 1.5) * .3);
      const agach = t > 300 && t < 308.6; const arr = t > 308.6 ? smooth(308.6, 309.2, t) : 0;
      let p = ch < 1 ? correr(t + i, 2.8, .8) : agach ? (i === 0 ? soma(G.pegaChao, { lean: 62, shR: [95, 4], elR: 4, bob: -.24 }) : i === 2 ? soma(G.ajoelhado, { shR: [60, 10], elR: 30, shL: [60, 10], elL: 30, lean: 16 }) : soma(G.pegaChao, { lean: 50 })) : soma(parado(t, i), mix({}, { shL: [40, 30], elL: 80, shR: [40, 30], elR: 80, lean: -10, headX: -14 }, arr));
      if (i === 1 && t > 309.4) { const cor = clamp((t - 309.4) / 1.4); k.place(lerp(2.0, -.6, cor), lerp(-1.5, -.2, cor), 0, -Math.PI / 2 - .3); p = cor < 1 ? correr(t, 3) : soma(parado(t, 1), { shL: [140, 30], shR: [140, 30], elL: 30, elR: 30 }); }
      k.pose(p); rosto(k, null, t, t > 314.6 ? 'surpreso' : agach ? 'preocupado' : 'neutro', { mouth: t > 314.8 ? { open: .8 } : undefined }); } });
  if (pega) naMao(bola, kids[1], 'R', [0, -.1, .06], false);
  // cabo de vassoura do menino 3 (302–306)
  vass.visible = t > 302 && t < 308.5; if (vass.visible) { naMao(vass, kids[2], 'R', [0, -.05, 0]); vass.rotateX(1.2); }
  // Guilherme: vem andando (303–306.4), segura o para-choque, levanta como caixa de sapato, segura, abaixa devagar
  const anda = clamp((t - 302.8) / 3.6); gui.place(lerp(1.6, CX, smooth(0, 1, anda)), lerp(-9, CZ - 2.35, anda), 0, anda < 1 ? Math.atan2(CX - 1.6, 6.65) : 0);
  const pegaC = kf(t, [[306.2, soma(parado(t, 2), G.maosBolso)], [306.7, { lean: 30, bob: -.08, knL: 30, knR: 30, hipL: [30, 6], hipR: [30, 6], shL: [55, 0], shR: [55, 0], elL: 5, elR: 5, headX: -10 }], [308.4, soma(parado(t, 2), { shL: [60, -4], shR: [60, -4], elL: 70, elR: 70, lean: -3 })], [311.4, soma(parado(t, 2), { shL: [60, -4], shR: [60, -4], elL: 70, elR: 70, lean: -3 })], [314.6, { lean: 30, bob: -.08, knL: 30, knR: 30, hipL: [30, 6], hipR: [30, 6], shL: [55, 0], shR: [55, 0], elL: 5, elR: 5 }], [315.4, soma(parado(t, 2), G.maosBolso)]]);
  gui.pose(anda < 1 ? andar(t, { maos: 'bolso', f: 1.7 }) : pegaC); rosto(gui, null, t, t > 314.6 ? 'vergonha' : 'neutro', { look: t > 308 && t < 312 ? [-.6, .2] : [0, 0] });
  tia.pose(soma(parado(t, 5), G.filmar)); naMao(fone, tia, 'R', [0, -.09, .03]); rosto(tia, null, t, t > 308 ? 'surpreso' : 'feliz');
}

// ---------- academia ----------
function montaAcad(c) {
  const A = academia(c); const B = A.supino.userData.barra; const sup = A.supino;
  const gui = ator(c, GUI, .3, 3.3, Math.PI); const tia = ator(c, TIAGO, .7, 3.6, Math.PI); const dono = ator(c, DONO, -2.6, .3, Math.PI / 2 - .3);
  const bone = new THREE.Group(); bone.add(sph(.32, '#2A2A30', 0, 0, 0, { seg: 20 })); bone.children[0].scale.set(1, .55, 1); bone.add(rb(.36, .03, .22, '#2A2A30', 0, -.02, .32)); dono.headG.add(bone); bone.position.set(0, .3, -.01);
  const extras = [ator(c, pessoa(2), 3.0, -1.2, -Math.PI / 2 - .4), ator(c, pessoa(5, { camisa: '#E57AA0' }), -3.6, 1.2, Math.PI / 2), ator(c, pessoa(4), 2.4, 1.6, -Math.PI / 2 - .8)];
  const hal = cyl(.012, .012, .3, '#9EA4AC', 0, 0, 0, { seg: 6 }); c.add(hal); const fone = celular((x, w, h) => { x.fillStyle = '#1A1A20'; x.fillRect(0, 0, w, h); x.fillStyle = '#E2443A'; x.beginPath(); x.arc(40, 40, 14, 0, 7); x.fill(); }); c.add(fone);
  // anilhas que caem: cópias no mundo, partindo de onde estariam com a barra em U
  sup.updateMatrixWorld(true); const an = sup.userData.anilhas; const caem = an.map((a, i) => { const m = a.clone(); c.add(m); m.visible = false; return m; });
  return { A, B, sup, gui, tia, dono, bone, extras, hal, fone, an, caem };
}
const T_ERGUE = 340.2, T_DOBRA = 341.4, T_CAI = 341.9;
function acadUpd(S, t) {
  const { B, sup, gui, tia, dono, bone, extras, hal, fone, an, caem } = S;
  // Tiago puxa o Guilherme pelo braço (335–338.5); Guilherme vai até o supino
  const ent = clamp((t - 335) / 3.2); const vai = clamp((t - 338.4) / 1.4);
  const gp = vai > 0 ? [lerp(.15, .25, vai), lerp(1.2, -.3, vai)] : [lerp(.3, .15, ent), lerp(3.3, 1.2, ent)];
  gui.place(gp[0], gp[1], 0, Math.PI); tia.place(lerp(.7, .85, ent), lerp(3.6, 1.0, ent), 0, Math.PI + .3 * (t > 338.5));
  const anda = (ent > 0 && ent < 1) || (vai > 0 && vai < 1);
  const ergue = smooth(T_ERGUE - .4, T_ERGUE + .5, t); const dob = easeOut(clamp((t - T_DOBRA) / .35));
  let pg = anda ? andar(t, { f: 1.7 }) : parado(t, 2);
  if (t > T_ERGUE - .6) pg = soma(parado(t, 2), { shR: [lerp(70, 168, ergue), 4], elR: lerp(30, 5, ergue), lean: -2, headX: -20 * ergue }, treme(t, .1));
  if (ent > 0 && ent < 1) pg = soma(pg, { shL: [50, 10], elL: 20 });
  gui.pose(pg); rosto(gui, null, t, t > T_CAI + .4 ? 'vergonha' : t > T_DOBRA ? 'surpreso' : 'neutro', { look: t > T_DOBRA ? [0, -.7] : [0, 0] });
  tia.pose(t < 338.5 ? soma(andar(t, { f: 1.8 }), { shR: [60, -10], elR: 20 }) : soma(parado(t, 5), G.filmar)); naMao(fone, tia, 'R', [0, -.09, .03]); rosto(tia, null, t, t > T_DOBRA ? 'surpreso' : 'feliz');
  // barra: no suporte -> na mão dele, acima da cabeça -> dobra em U; anilhas escorregam e caem (BUM)
  if (t < T_ERGUE - .2) { B.position.set(0, 1.15, -.55); B.rotation.set(0, 0, 0); }
  else { gui.root.updateMatrixWorld(true); const h = gui.hands.R.localToWorld(new THREE.Vector3(0, -.05, 0)); sup.worldToLocal(h); B.position.copy(h); B.rotation.set(0, 0, 0); }
  dobrarBarra(B, dob); const cai = t > T_CAI; an.forEach((a) => { a.visible = !cai; });
  caem.forEach((m, i) => { m.visible = cai; if (!cai) return; const a = an[i]; const s = Math.sign(a.userData.x0 ?? a.position.x); const k = t - T_CAI; const y0 = B.position.y - .35, x0 = s * (.35 + (i % 6) * .04);
    const y = Math.max(.22 - (i % 6) * .02, y0 - 4.9 * k * k + (k > .45 ? 0 : 0)); m.position.set(x0 + s * k * .8, y, -.5 + (i % 6) * .03 - .55 + .3); m.rotation.set(Math.min(1.57, k * 4), 0, Math.PI / 2 + s * Math.min(1.2, k * 3)); });
  // dono da academia: olhando; tira o boné devagar
  const tira = smooth(342.4, 343.6, t); dono.pose(soma(parado(t, 6), { shR: [lerp(0, 150, tira * (1 - smooth(343.6, 344.6, t))), 20], elR: lerp(10, 60, tira), headX: -6 }));
  if (tira > .5) { naMao(bone, dono, 'R', [0, -.06, .06]); if (bone.parent !== dono.headG.parent?.parent && bone.parent === dono.headG) { dono.headG.remove(bone); gui.root.parent.add(bone); } }
  rosto(dono, 'dono', t, t > T_DOBRA ? 'surpreso' : 'neutro', { look: [.5, 0] });
  // gente treinando: rosca, agachamento, esteira (param quando o Tiago entra)
  const para = smooth(336, 337, t);
  extras.forEach((k, i) => { const tr = Math.sin(t * 2.6 + i); let p = i === 0 ? soma(parado(t, i), { shR: [10, 10], elR: 60 + 50 * tr }) : i === 1 ? soma(parado(t, i), { bob: -.12 * (1 + tr), knL: 50 * (1 + tr), knR: 50 * (1 + tr), hipL: [40 * (1 + tr), 8], hipR: [40 * (1 + tr), 8], lean: 20 * (1 + tr), shL: [80, 6], shR: [80, 6] }) : soma(parado(t, i), { shL: [20, 10], shR: [20, 10] });
    k.pose(mix(p, soma(parado(t, i), t > T_DOBRA ? G.maosCabeca : {}), para)); rosto(k, null, t, t > T_DOBRA ? 'surpreso' : para > .5 ? 'desconfiado' : 'determinado', { mouth: t > T_DOBRA + .3 ? { open: .7 } : undefined }); });
  naMao(hal, extras[0], 'R', [0, -.04, 0]); hal.rotateZ(Math.PI / 2);
}

export const ATO3A = [
  // R1 — rua do bairro, dia 5: molecada jogando bola com chinelo de trave
  mk(290, 296, { bg: '#CFE4EE', fov: 40 }, (c) => { const S = montaRua(c); return (t, u, cm) => { ruaUpd(S, t); cam(cm, [[0, [-4.6, 2.4, 5.5]], [1, [-3.8, 1.9, 4.2]]], [[0, [.3, .4, -1]], [1, [.6, .5, -1.3]]], u / 6); return SOL; }; }),
  // R2 — a bola rola pra debaixo do carro estacionado
  mk(296, 300, { bg: '#CFE4EE', fov: 38 }, (c) => { const S = montaRua(c); return (t, u, cm) => { ruaUpd(S, t); cam(cm, [[0, [.6, .35, -4.4]], [1, [.9, .3, -4.0]]], [[0, [1.6, .2, -1.6]], [1, [2.5, .15, -1.9]]], u / 4); return { ...SOL, focus: 2.5, range: 1.5, blur: 4 }; }; }),
  // R3 — a molecada se abaixa, tenta com o braço, com um cabo de vassoura, e não alcança
  mk(300, 305.6, { bg: '#CFE4EE', fov: 40 }, (c) => { const S = montaRua(c); return (t, u, cm) => { ruaUpd(S, t); cam(cm, [[0, [.2, .9, -4.6]], [1, [.4, .8, -4.3]]], [[0, [2.2, .3, -2.0]], [1, [2.3, .3, -1.9]]], u / 5.6); return SOL; }; }),
  // R4 — Guilherme passa, segura o para-choque e levanta o carro até o peito como uma caixa de sapato; um menino pega a bola
  mk(305.6, 311.4, { bg: '#CFE4EE', fov: 40 }, (c) => { const S = montaRua(c); return (t, u, cm) => { ruaUpd(S, t); cam(cm, [[0, [.0, 1.2, -6.2]], [.5, [.4, 1.0, -5.4]], [1, [.9, .95, -5.2]]], [[0, [1.8, .9, -4.0]], [.5, [2.6, .7, -3.2]], [1, [2.5, .7, -2.6]]], u / 5.8); return SOL; }; }),
  // R5 — abaixa o carro devagar; o alarme dispara
  mk(311.4, 316, { bg: '#CFE4EE', fov: 38 }, (c) => { const S = montaRua(c); return (t, u, cm) => { ruaUpd(S, t); cam(cm, [[0, [1.0, 1.15, -5.6]], [1, [1.2, 1.1, -5.3]]], [[0, [2.8, .75, -3.0]], [1, [2.8, .65, -2.6]]], u / 4.6); return SOL; }; }),
  // R6 — as crianças paradas de boca aberta; ao fundo, o Tiago filmando tudo
  mk(316, 320.4, { bg: '#CFE4EE', fov: 36 }, (c) => { const S = montaRua(c); return (t, u, cm) => { ruaUpd(S, t); cam(cm, [[0, [.2, 1.05, -5.0]], [1, [.1, 1.0, -4.7]]], [[0, [1.6, .55, -2.0]], [1, [.0, .8, .6]]], u / 4.4); return SOL; }; }),
  // V1 — tela do celular do Tiago: vídeo postado, visualizações subindo, comentários rolando (plim plim)
  mk(320.4, 330, { bg: '#CFE4EE', fov: 30 }, (c) => { const S = montaRua(c); const f = celular(); f.scale.setScalar(4.2); S.L.g.add(f); let last = '';
    const fmt = (n) => n >= 1e6 ? (n / 1e6).toFixed(1).replace('.', ',').replace(',0', '') + ' milhões' : n >= 1000 ? Math.round(n / 1000) + ' mil' : String(Math.round(n));
    const COM = [[322.2, 'É fake', '#E2443A'], [323.6, 'Montagem', '#3E7CC8'], [325.0, 'Onde esse cara mora??', '#5AA84E'], [326.4, 'Quero ver levantar um ônibus', '#F2994A'], [327.6, 'kkkkkk o alarme', '#9B6CC4'], [328.6, 'MANO???', '#2FB5A8']];
    return (t, u, cm) => { ruaUpd(S, 316); const v = t < 321 ? 10000 : t < 324 ? 10000 * Math.pow(30, (t - 321) / 3) : t < 327 ? 300000 * Math.pow(6.67, (t - 324) / 3) : 2000000 + (t - 327) * 120000;
      const vis = COM.filter(([tc]) => t > tc); const key = fmt(v) + vis.length + Math.floor((t * 10) % 3); if (key !== last) { last = key; f.desenha((x, w, h) => {
        x.fillStyle = '#101014'; x.fillRect(0, 0, w, h); x.fillStyle = '#C8D8E0'; x.fillRect(0, 50, w, 190); x.fillStyle = '#C0392B'; x.save(); x.translate(w * .62, 170); x.rotate(-.18); x.fillRect(-60, -24, 120, 40); x.restore(); x.fillStyle = '#8A8A8A'; x.fillRect(0, 210, w, 30); x.fillStyle = '#959BA3'; x.fillRect(w * .4, 120, 22, 60); x.fillStyle = '#E3AE86'; x.beginPath(); x.arc(w * .4 + 11, 112, 16, 0, 7); x.fill();
        x.fillStyle = 'rgba(0,0,0,.5)'; x.beginPath(); x.arc(w / 2, 145, 26, 0, 7); x.fill(); x.fillStyle = '#FFF'; x.beginPath(); x.moveTo(w / 2 - 8, 131); x.lineTo(w / 2 + 14, 145); x.lineTo(w / 2 - 8, 159); x.fill();
        x.fillStyle = '#FFF'; x.font = '800 20px Inter'; x.fillText('levantou o carro na rua 😳', 12, 270); x.fillStyle = '#AAB'; x.font = '600 17px Inter'; x.fillText('@tiago23', 12, 294);
        x.fillStyle = '#FFF'; x.font = '900 34px Inter'; x.fillText('👁 ' + fmt(v), 12, 340);
        vis.slice(-5).forEach(([tc, txt, cor], i) => { const y = 380 + i * 44; x.fillStyle = cor; x.beginPath(); x.arc(26, y, 14, 0, 7); x.fill(); x.fillStyle = '#FFF'; x.font = '600 19px Inter'; x.fillText(txt, 48, y + 7); }); }); }
      naMao(f, S.tia, 'R', [0, -.12, .08], [-.4, 0, 0]); S.tia.pose(soma(parado(t, 5), { shR: [62, -6], elR: 80, shL: [55, -6], elL: 75, headX: 22 })); rosto(S.tia, null, t, 'feliz', { look: [0, .8] });
      const p = S.tia.headG.localToWorld(new THREE.Vector3(.3, .55, -.55)); S.tia.fixo = true; const q = f.position.clone(); cam(cm, [p.x, p.y, p.z], [q.x, q.y, q.z], u / 9.6, 0, .3); return { ...SOL, focus: .55, range: .25, blur: 10 }; }; }),
  // A1 — academia de bairro: espelho grande, música alta, gente treinando
  mk(330, 335.2, { bg: '#2A2A30', fov: 42 }, (c) => { const S = montaAcad(c); return (t, u, cm) => { acadUpd(S, t); cam(cm, [[0, [-1.4, 2.3, 3.6]], [1, [-1.0, 2.0, 3.2]]], [[0, [1, 1.0, -1]], [1, [.6, 1.0, -1.2]]], u / 5.2); return { bloom: .3 }; }; }),
  // A2 — o Tiago entra puxando o Guilherme pelo braço; todo mundo para e olha
  mk(335.2, 339.6, { bg: '#2A2A30', fov: 40 }, (c) => { const S = montaAcad(c); return (t, u, cm) => { acadUpd(S, t); cam(cm, [[0, [-.8, 1.5, -1.8]], [1, [-.6, 1.45, -1.5]]], [[0, [.4, 1.0, 2.8]], [1, [.3, 1.0, 1.6]]], u / 4.4); return { bloom: .3 }; }; }),
  // A3 — ele pega a barra com uma mão e levanta; a barra entorta em U; as anilhas escorregam e caem. BUM.
  mk(339.6, 342.6, { bg: '#2A2A30', fov: 40 }, (c) => { const S = montaAcad(c); return (t, u, cm) => { acadUpd(S, t); const k = Math.max(0, t - T_CAI - .3);
    camT(cm, [[0, [-1.6, 1.4, 1.6]], [1, [-1.45, 1.55, 1.45]]], [[0, [.2, 1.3, -.5]], [1, [.2, 1.6, -.4]]], u / 3, t > T_CAI + .3 ? .04 * Math.exp(-k * 5) : 0); return { bloom: .3 }; }; }),
  // A4 — a música para. O dono tira o boné devagar: "Isso aí é de aço..."
  mk(342.6, 346.6, { bg: '#2A2A30', fov: 32 }, (c) => { const S = montaAcad(c); return (t, u, cm) => { acadUpd(S, t); cam(cm, [[0, [-1.0, 1.35, 1.6]], [1, [-1.15, 1.32, 1.45]]], [[0, [-2.6, 1.2, .3]], [1, [-2.6, 1.22, .3]]], u / 4); return { bloom: .2 }; }; }),
  // A5 — "Três toneladas..." — a câmera gira devagar em volta dele com a barra em U; queixos caídos
  mk(346.6, 355, { bg: '#2A2A30', fov: 40 }, (c) => { const S = montaAcad(c); return (t, u, cm) => { acadUpd(S, t); const a = (t - 346.6) / 8.4; const ang = 2.3 + a * 1.6;
    cam(cm, [.25 + Math.sin(ang) * 2.6, 1.3 + a * .3, -.3 + Math.cos(ang) * 2.6], [.25, 1.35, -.3], u / 8.4, 0, .3); return { bloom: .25 }; }; }),
  // A6 — o Tiago filmando, empolgado; o Guilherme sem graça, ainda com a barra
  mk(355, 360, { bg: '#2A2A30', fov: 36 }, (c) => { const S = montaAcad(c); return (t, u, cm) => { acadUpd(S, t); S.tia.pose(soma(pular(t, 2.2), G.filmar)); cam(cm, [[0, [1.9, 1.4, -1.2]], [1, [1.8, 1.38, -1.0]]], [[0, [.6, 1.1, .6]], [1, [.6, 1.1, .7]]], u / 5); return { bloom: .25 }; }; }),
];
