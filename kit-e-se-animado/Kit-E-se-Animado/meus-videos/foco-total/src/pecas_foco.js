// Objetos deste vídeo: tabuleiro e peças de xadrez, relógio de xadrez, violão, bola murcha, folha dobrada com o desenho,
// troféu, bicicleta, coxinha, prova, cadeirinha colorida, cartolinas, balão murcho, bilhete, geladeira com ímã.
import * as THREE from 'three';
import { tm, rb, bx, cyl, sph, ctex, toonTex, toon, outline } from './motor/toon.js';
import { clamp, lerp, easeIO } from './motor/core.js';

const lathe = (pts, cor, seg = 20) => tm(new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg), cor, { out: .004 });
/** Peça de xadrez (tipo: p, t, c, b, d, r) na cor branca ou preta. Altura do rei ~ 0.095 (tabuleiro de mesa). */
export function peca(tipo, branca = true, e = 1) {
  const cor = branca ? '#F2EBDA' : '#2A2630'; const g = new THREE.Group();
  const base = [[0, 0], [.018, 0], [.018, .006], [.014, .009], [.011, .012]];
  if (tipo === 'p') g.add(lathe([...base, [.007, .03], [.009, .032], [0, .033]], cor)), g.add(sph(.0095, cor, 0, .04, 0, { out: .003, seg: 14 }));
  else if (tipo === 't') g.add(lathe([...base, [.011, .042], [.014, .044], [.014, .056], [0, .056]], cor));
  else if (tipo === 'c') { g.add(lathe([...base, [.01, .03], [0, .03]], cor)); const h = rb(.016, .036, .03, cor, 0, .046, .002, { out: .003, r: .006 }); h.rotation.x = -.35; g.add(h); g.add(rb(.014, .014, .024, cor, 0, .056, .016, { out: .003, r: .005 })); }
  else if (tipo === 'b') { g.add(lathe([...base, [.007, .044], [.011, .05], [.006, .064], [0, .066]], cor)); g.add(sph(.0035, cor, 0, .069, 0, { seg: 8 })); }
  else if (tipo === 'd') { g.add(lathe([...base, [.008, .052], [.013, .058], [.011, .066], [.006, .07], [0, .072]], cor)); for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; g.add(sph(.003, cor, Math.cos(a) * .011, .069, Math.sin(a) * .011, { seg: 6 })); } }
  else if (tipo === 'r') { g.add(lathe([...base, [.008, .056], [.013, .062], [.011, .07], [0, .072]], cor)); g.add(bx(.004, .02, .004, cor, 0, .082, 0, { out: .002 })); g.add(bx(.014, .004, .004, cor, 0, .084, 0, { out: .002 })); }
  g.scale.setScalar(e); g.userData = { tipo, branca }; return g;
}
const INICIAL = ['tcbdrbct', 'pppppppp', '', '', '', '', 'pppppppp', 'tcbdrbct'];
/** Tabuleiro com peças. s = lado da casa. Casas por nome ("e4"). Devolve { g, P (mapa casa->peça), casa(n), move(peça, de, para, u) }. */
export function tabuleiro(s = .045, o = {}) {
  const g = new THREE.Group(); const L = s * 8;
  g.add(rb(L + s * .8, .02, L + s * .8, o.borda || '#6A4022', 0, .01, 0, { out: .006, r: .006 }));
  const tex = ctex(512, 512, (x, W) => { for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { x.fillStyle = (i + j) % 2 ? (o.escura || '#7A9A5A') : (o.clara || '#EEE8D0'); x.fillRect(i * W / 8, j * W / 8, W / 8, W / 8); } });
  const top = new THREE.Mesh(new THREE.PlaneGeometry(L, L), toonTex(tex)); top.rotation.x = -Math.PI / 2; top.position.y = .0205; g.add(top);
  const casa = (n) => { const f = n.charCodeAt(0) - 97, r = +n[1] - 1; return new THREE.Vector3((f - 3.5) * s, .021, (3.5 - r) * s); };
  const P = {}; const e = s / .045;
  if (o.pecas !== false) INICIAL.forEach((lin, r) => { [...lin].forEach((tp, f) => { const n = String.fromCharCode(97 + f) + (8 - r); const branca = r >= 4; const p = peca(tp, branca, e); p.position.copy(casa(n)); if (tp === 'c') p.rotation.y = branca ? 0 : Math.PI; g.add(p); P[n] = p; }); });
  /** Move uma peça entre casas com um arco (u 0..1). */
  const move = (p, de, para, u) => { const a = casa(de), b = casa(para), k = easeIO(clamp(u)); p.position.lerpVectors(a, b, k); p.position.y += Math.sin(Math.PI * k) * s * .9; };
  g.userData = { P, casa, s }; return { g, P, casa, move, s };
}
/** Relógio de xadrez com dois mostradores (texto) e dois botões. set(a, b, lado) atualiza. */
export function relogioXadrez() {
  const g = new THREE.Group(); const corpo = rb(.2, .08, .08, '#2A2630', 0, .04, 0, { out: .005, r: .012 }); corpo.rotation.x = 0; g.add(corpo);
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 160; const x = cv.getContext('2d'); const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace;
  const tela = new THREE.Mesh(new THREE.PlaneGeometry(.18, .056), new THREE.MeshBasicMaterial({ map: tx })); tela.position.set(0, .045, .041); g.add(tela);
  const bot = [-.05, .05].map((px) => { const b = cyl(.012, .012, .02, '#E2443A', px, .085, 0, { out: .003, seg: 12 }); g.add(b); return b; });
  const set = (a, b, lado = 0) => { x.fillStyle = '#1A1A1E'; x.fillRect(0, 0, 512, 160); for (const [i, s] of [[0, a], [1, b]]) { x.fillStyle = '#B8E8C8'; x.fillRect(16 + i * 256, 16, 224, 128); x.fillStyle = '#16301E'; x.font = "700 86px 'IBM Plex Mono'"; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(s, 128 + i * 256, 84); } tx.needsUpdate = true; bot[0].position.y = lado === 0 ? .08 : .086; bot[1].position.y = lado === 1 ? .08 : .086; };
  set('10:00', '10:00'); g.userData.set = set; return g;
}
/** Violão (corpo de madeira, braço, cordas). Origem no centro do corpo, braço para +x. */
export function violao(o = {}) {
  const g = new THREE.Group(); const cor = o.cor || '#C9893E';
  const corpo = new THREE.Group(); g.add(corpo);
  for (const [r, x] of [[.17, -.02], [.13, .2]]) { const c = cyl(r, r, .09, cor, x, 0, 0, { rot: [Math.PI / 2, 0, 0], out: .006, seg: 28 }); corpo.add(c); }
  const tampo = cyl(.055, .055, .002, '#2A1A12', .07, 0, .046, { rot: [Math.PI / 2, 0, 0], seg: 20 }); corpo.add(tampo);
  corpo.add(bx(.03, .1, .012, '#4A2A16', -.09, 0, .05));
  const braco = bx(.5, .05, .025, '#5A361E', .58, 0, .03, { out: .005 }); g.add(braco); g.add(rb(.12, .07, .03, '#3A2214', .88, 0, .03, { out: .005 }));
  for (let i = 0; i < 6; i++) { if (o.semCorda === i) continue; g.add(bx(.86, .0025, .0025, '#E8E0C8', .44, -.018 + i * .0072, .052, { shadow: false })); }
  if (o.teia) { const tw = new THREE.Mesh(new THREE.PlaneGeometry(.3, .3), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, map: ctex(256, 256, (x) => { x.strokeStyle = 'rgba(240,240,240,.8)'; x.lineWidth = 2; for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; x.beginPath(); x.moveTo(128, 128); x.lineTo(128 + Math.cos(a) * 128, 128 + Math.sin(a) * 128); x.stroke(); } for (let r = 20; r < 128; r += 22) { x.beginPath(); x.arc(128, 128, r, 0, 7); x.stroke(); } }) })); tw.position.set(-.1, .1, .05); g.add(tw); g.userData.teia = tw; }
  g.userData.corpo = corpo; return g;
}
/** Bola de futebol murcha (achatada embaixo). m = quanto murcha (0..1). */
export function bola(m = .35) { const g = new THREE.Group(); const b = sph(.11, '#F4F1EA', 0, .11 * (1 - m * .3), 0, { out: .006, seg: 18 }); b.scale.set(1 + m * .12, 1 - m * .3, 1 + m * .12); g.add(b);
  for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283, p = sph(.032, '#2A2A30', Math.cos(a) * .085 * (1 + m * .12), .11 * (1 - m * .3) + Math.sin(i * 1.7) * .04, Math.sin(a) * .085 * (1 + m * .12), { seg: 8 }); p.scale.set(1, .5, 1); p.lookAt(0, .11, 0); g.add(p); } g.userData.b = b; return g; }

/** Desenho do Davi (giz de cera): campinho verde, menino grande de moletom cinza com braços pra cima, menino pequeno de amarelo
 * com a língua pra fora e um olho fechado, a bola, e "O MELHOR DIA DA MINHA VIDA" em letra azul torta. k = quanto da frase brilha. */
export function desenhoDavi(x, W, H, o = {}) {
  x.fillStyle = '#FBF7EC'; x.fillRect(0, 0, W, H);
  const giz = (cor, w = 10) => { x.strokeStyle = cor; x.fillStyle = cor; x.lineWidth = w * W / 1024; x.lineCap = 'round'; x.lineJoin = 'round'; };
  const sx = (v) => v * W / 1024, sy = (v) => v * H / 768;
  // campinho verde (rabiscos)
  giz('#4FB04A', 14); for (let i = 0; i < 70; i++) { const yy = 520 + (i % 14) * 16; x.beginPath(); x.moveTo(sx(60 + (i * 37) % 60), sy(yy)); x.lineTo(sx(960 - (i * 53) % 70), sy(yy + Math.sin(i) * 8)); x.stroke(); }
  // traves de pedra
  giz('#8A8A8A', 10); for (const px of [120, 900]) { x.beginPath(); x.arc(sx(px), sy(520), sx(22), 0, 7); x.fill(); }
  // sol
  giz('#F2C230', 10); x.beginPath(); x.arc(sx(900), sy(110), sx(55), 0, 7); x.fill(); for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283; x.beginPath(); x.moveTo(sx(900 + Math.cos(a) * 70), sy(110 + Math.sin(a) * 70)); x.lineTo(sx(900 + Math.cos(a) * 100), sy(110 + Math.sin(a) * 100)); x.stroke(); }
  // menino grande (moletom cinza), braços pra cima
  const boneco = (cx, base, alt, corpo, braçosCima, pequeno) => { const cab = alt * .22; giz('#2A2A30', 9);
    x.beginPath(); x.moveTo(sx(cx - alt * .08), sy(base)); x.lineTo(sx(cx - alt * .04), sy(base - alt * .38)); x.moveTo(sx(cx + alt * .08), sy(base)); x.lineTo(sx(cx + alt * .04), sy(base - alt * .38)); x.stroke();
    giz(corpo, 12); x.beginPath(); x.moveTo(sx(cx - alt * .13), sy(base - alt * .36)); x.lineTo(sx(cx + alt * .13), sy(base - alt * .36)); x.lineTo(sx(cx + alt * .11), sy(base - alt * .72)); x.lineTo(sx(cx - alt * .11), sy(base - alt * .72)); x.closePath(); x.fill();
    giz('#E3AE86', 9); const sh = base - alt * .68;
    if (braçosCima) { x.beginPath(); x.moveTo(sx(cx - alt * .11), sy(sh)); x.lineTo(sx(cx - alt * .3), sy(sh - alt * .3)); x.moveTo(sx(cx + alt * .11), sy(sh)); x.lineTo(sx(cx + alt * .3), sy(sh - alt * .3)); x.stroke(); }
    else { x.beginPath(); x.moveTo(sx(cx - alt * .11), sy(sh)); x.lineTo(sx(cx - alt * .26), sy(sh + alt * .2)); x.moveTo(sx(cx + alt * .11), sy(sh)); x.lineTo(sx(cx + alt * .28), sy(sh + alt * .12)); x.stroke(); }
    const hy = base - alt * .72 - cab; x.fillStyle = '#E3AE86'; x.beginPath(); x.arc(sx(cx), sy(hy), sx(cab), 0, 7); x.fill(); giz('#2A2A30', 6); x.beginPath(); x.arc(sx(cx), sy(hy), sx(cab), 0, 7); x.stroke();
    giz('#4A2A18', 14); x.beginPath(); x.arc(sx(cx), sy(hy - cab * .2), sx(cab * .95), Math.PI * 1.05, Math.PI * 1.95); x.stroke();
    giz('#2A2A30', 7);
    if (pequeno) { x.beginPath(); x.arc(sx(cx - cab * .35), sy(hy - cab * .05), sx(5), 0, 7); x.fill(); x.beginPath(); x.moveTo(sx(cx + cab * .2), sy(hy - cab * .05)); x.lineTo(sx(cx + cab * .5), sy(hy - cab * .05)); x.stroke();
      x.beginPath(); x.arc(sx(cx), sy(hy + cab * .35), sx(cab * .35), 0, Math.PI); x.stroke(); giz('#F2546E', 8); x.beginPath(); x.ellipse(sx(cx + cab * .05), sy(hy + cab * .72), sx(cab * .14), sy(cab * .2), 0, 0, 7); x.fill(); }
    else { for (const k of [-1, 1]) { x.beginPath(); x.arc(sx(cx + k * cab * .35), sy(hy - cab * .05), sx(5), 0, 7); x.fill(); } x.beginPath(); x.arc(sx(cx), sy(hy + cab * .2), sx(cab * .45), .2, Math.PI - .2); x.stroke(); } };
  boneco(330, 600, 330, '#8E949C', true, false);
  boneco(640, 610, 210, '#F2C230', false, true);
  giz('#2A2A30', 6); x.fillStyle = '#FFFFFF'; x.beginPath(); x.arc(sx(745), sy(590), sx(26), 0, 7); x.fill(); x.stroke(); x.fillStyle = '#2A2A30'; x.beginPath(); x.arc(sx(745), sy(590), sx(9), 0, 7); x.fill();
  // frase
  const k = o.brilho || 0; x.save(); x.translate(sx(512), sy(120)); x.rotate(-.04);
  if (k > 0) { x.shadowColor = `rgba(255,220,120,${k})`; x.shadowBlur = 40 * k * W / 1024; }
  x.fillStyle = '#2E5EC8'; x.font = `700 ${Math.round(74 * W / 1024)}px Caveat`; x.textAlign = 'center'; x.textBaseline = 'middle';
  const fr = 'o melhor dia da minha vida'; let px = -x.measureText(fr).width / 2; for (let i = 0; i < fr.length; i++) { const ch = fr[i]; const w = x.measureText(ch).width; x.save(); x.translate(px + w / 2, Math.sin(i * 1.7) * 6 * W / 1024); x.rotate(Math.sin(i * 2.3) * .08); x.fillText(ch, 0, 0); x.restore(); px += w; }
  x.restore();
}
/** Folha de papel com o desenho do Davi. aberta: 0 = dobrada em 4 (quadradinho), 1 = aberta. Devolve o grupo com set(aberta, brilho). */
export function folha(o = {}) {
  const w = o.w || .3, h = o.h || .225; const g = new THREE.Group();
  const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 768; const x = cv.getContext('2d'); desenhoDavi(x, 1024, 768, {}); const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace;
  const verso = ctex(64, 64, (c) => { c.fillStyle = '#F4EFE0'; c.fillRect(0, 0, 64, 64); c.fillStyle = '#4FB04A55'; c.fillRect(40, 40, 24, 24); });
  // quatro quartos: cada um gira na dobra
  const Q = []; const mk = (ix, iy) => { const geo = new THREE.PlaneGeometry(w / 2, h / 2); const uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) + ix) / 2, (uv.getY(i) + iy) / 2); const m = new THREE.Mesh(geo, [new THREE.MeshToonMaterial({ map: tx, side: THREE.FrontSide })][0]); const b = new THREE.Mesh(geo, new THREE.MeshToonMaterial({ map: verso, side: THREE.BackSide })); m.add(b); outline(m, .002); return m; };
  // pivôs: dobra vertical no meio (x=0) e horizontal (y=0)
  const pv = new THREE.Group(); g.add(pv); const direita = new THREE.Group(); pv.add(direita); const esquerda = new THREE.Group(); pv.add(esquerda);
  for (const [lado, gx] of [[esquerda, 0], [direita, 1]]) { const baixo = new THREE.Group(); lado.add(baixo); const cima = new THREE.Group(); lado.add(cima);
    const mb = mk(gx, 0); mb.position.set((gx ? 1 : -1) * w / 4, -h / 4, 0); baixo.add(mb); const mc = mk(gx, 1); mc.position.set((gx ? 1 : -1) * w / 4, h / 4, 0); cima.add(mc); Q.push({ lado, baixo, cima }); }
  const fech = new THREE.Group(); g.add(fech); const fq = rb(w / 2, h / 2, .006, '#F4EFE0', -w / 4, -h / 4, 0, { out: .002, r: .002 }); fech.add(fq);
  const vin = new THREE.Mesh(new THREE.PlaneGeometry(w / 2 * .9, .002), new THREE.MeshBasicMaterial({ color: '#C8C0A8' })); vin.position.set(-w / 4, -h / 4, .0035); fech.add(vin); const verde = new THREE.Mesh(new THREE.PlaneGeometry(.02, .015), new THREE.MeshBasicMaterial({ color: '#4FB04A' })); verde.position.set(-w / 2 + .015, -h / 2 + .012, .0035); fech.add(verde);
  const set = (a = 0, brilho = 0) => { a = clamp(a); const fechada = a < .015; fech.visible = fechada; pv.visible = !fechada; const k1 = easeIO(clamp(a * 2)), k2 = easeIO(clamp(a * 2 - 1));
    // primeiro abre a dobra horizontal (metade de cima desce), depois a vertical (metade direita abre)
    for (const q of Q) { q.cima.rotation.x = -(1 - k1) * Math.PI * .98; q.cima.position.z = (1 - k1) * .002; }
    Q[1].lado.rotation.y = -(1 - k2) * Math.PI * .98; Q[1].lado.position.z = (1 - k2) * .004;
    if (brilho !== g.userData.br) { g.userData.br = brilho; desenhoDavi(x, 1024, 768, { brilho }); tx.needsUpdate = true; } };
  set(o.aberta ?? 0); g.userData.set = set; g.set = set; return g;
}
/** Troféu dourado. */
export function trofeu(e = 1) { const g = new THREE.Group(); const ouro = toon('#F2C230', { emissive: '#7A5A10', emissiveIntensity: .25 });
  g.add(rb(.14, .05, .14, '#2A2630', 0, .025, 0, { out: .004 })); g.add(cyl(.02, .03, .1, ouro, 0, .1, 0, { out: .004, seg: 12 }));
  g.add(tm(new THREE.LatheGeometry([[0, 0], [.03, 0], [.07, .04], [.085, .12], [.09, .16], [0, .16]].map(([a, b]) => new THREE.Vector2(a, b)), 22), ouro, { out: .004, pos: [0, .15, 0] }));
  for (const s of [-1, 1]) { const a = tm(new THREE.TorusGeometry(.04, .008, 8, 16, Math.PI), ouro, { out: .003 }); a.position.set(s * .09, .25, 0); a.rotation.z = s > 0 ? -Math.PI / 2 : Math.PI / 2; g.add(a); }
  g.scale.setScalar(e); return g; }
/** Bicicleta com ciclista montado opcional (rodas giram com gira(ang)). Frente para +z. */
export function bicicleta(cor = '#2E5EB8') { const g = new THREE.Group(); const rodas = [];
  for (const z of [-.5, .5]) { const r = new THREE.Group(); r.position.set(0, .33, z); g.add(r); r.add(tm(new THREE.TorusGeometry(.31, .022, 8, 26), '#1E1E22', { out: .004, rot: [0, Math.PI / 2, 0] })); for (let i = 0; i < 6; i++) { const s = bx(.006, .6, .006, '#C9CED6', 0, 0, 0); s.rotation.x = i / 6 * Math.PI; r.add(s); } rodas.push(r); }
  const q = (a, b, esp = .03) => { const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b); const m = cyl(esp / 2, esp / 2, A.distanceTo(B), cor, 0, 0, 0, { out: .004, seg: 8 }); m.position.copy(A).add(B).multiplyScalar(.5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.clone().sub(A).normalize()); g.add(m); };
  q([0, .33, -.5], [0, .62, -.05]); q([0, .33, -.5], [0, .36, .02]); q([0, .36, .02], [0, .62, -.05]); q([0, .62, -.05], [0, .72, .38]); q([0, .36, .02], [0, .7, .4]); q([0, .7, .4], [0, .33, .5]);
  g.add(rb(.08, .03, .18, '#2A2A30', 0, .68, -.08, { out: .003 })); g.add(cyl(.012, .012, .44, '#2A2A30', 0, .86, .42, { rot: [0, 0, Math.PI / 2], out: .003 })); q([0, .72, .38], [0, .86, .42], .025);
  g.userData.gira = (a) => rodas.forEach((r) => (r.rotation.x = a)); return g; }
/** Coxinha (gota dourada) com mordida opcional e catupiry. */
export function coxinha(mordida = 0) { const g = new THREE.Group(); const m = tm(new THREE.LatheGeometry([[0, 0], [.035, .006], [.045, .025], [.04, .05], [.022, .075], [.006, .09], [0, .092]].map(([a, b]) => new THREE.Vector2(a, b)), 18), '#D9892E', { out: .004 }); g.add(m);
  const mord = sph(.03, '#F4E6C0', .02, .06, .02, { seg: 12 }); mord.visible = false; g.add(mord); const cat = sph(.012, '#FFF8E8', .03, .055, .03, { seg: 10 }); cat.visible = false; g.add(cat);
  g.userData.morde = (k) => { mord.visible = k > 0; cat.visible = k > .5; cat.position.y = .055 - (k - .5) * .03; }; g.userData.morde(mordida); return g; }
/** Prova em papel com a nota grande (cor). */
export function prova(nota, cor, w = .21, h = .297) { const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), toonTex(ctex(512, 724, (x, W, H) => { x.fillStyle = '#FBF8EE'; x.fillRect(0, 0, W, H); x.fillStyle = '#2A2A30'; x.font = '800 34px Inter'; x.fillText('PROVA — HISTÓRIA', 40, 60); x.strokeStyle = '#B8BCC4'; x.lineWidth = 3; for (let y = 120; y < H - 40; y += 44) { x.beginPath(); x.moveTo(40, y); x.lineTo(W - 40, y); x.stroke(); }
  x.strokeStyle = cor; x.lineWidth = 10; x.beginPath(); x.arc(W - 120, 150, 80, 0, 7); x.stroke(); x.fillStyle = cor; x.font = "700 120px Caveat"; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(nota, W - 120, 158); }))); p.rotation.x = -Math.PI / 2; return p; }
/** Cadeirinha escolar colorida (pequena). */
export function cadeirinha(cor = '#E2443A') { const g = new THREE.Group(); g.add(rb(.3, .025, .3, cor, 0, .32, 0, { out: .004 })); g.add(rb(.3, .22, .025, cor, 0, .45, -.14, { out: .004 })); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) g.add(cyl(.01, .01, .32, '#9EA6B0', a * .13, .16, b * .13, { seg: 6 })); return g; }
/** Cartolina na parede com um desenho de família e o título. */
export function cartolina(titulo, seed = 0, cor = '#F7E7A0') { return new THREE.Mesh(new THREE.PlaneGeometry(.66, .5), toonTex(ctex(512, 388, (x, W, H) => { x.fillStyle = cor; x.fillRect(0, 0, W, H); x.fillStyle = '#2E5EC8'; x.font = '700 54px Caveat'; x.textAlign = 'center'; x.fillText(titulo, W / 2, 60);
  const cores = ['#E2443A', '#3E7CC8', '#5AA84E', '#9B6CC4', '#F2994A']; const n = 2 + seed % 3; for (let i = 0; i < n; i++) { const cx = W * (i + 1) / (n + 1), al = (i % 2 ? 150 : 200) - seed % 2 * 20; x.fillStyle = '#E8B48C'; x.beginPath(); x.arc(cx, H - 40 - al, 26, 0, 7); x.fill(); x.fillStyle = cores[(i + seed) % 5]; x.fillRect(cx - 24, H - 40 - al + 26, 48, al * .55); x.strokeStyle = '#2A2A30'; x.lineWidth = 6; x.beginPath(); x.moveTo(cx - 12, H - 40 - al * .4); x.lineTo(cx - 16, H - 30); x.moveTo(cx + 12, H - 40 - al * .4); x.lineTo(cx + 16, H - 30); x.stroke(); } }))); }
/** Balão de festa (cheio ou murcho). */
export function balao(cor = '#E2443A', murcho = 0) { const g = new THREE.Group(); const b = sph(.12, cor, 0, .5, 0, { out: .004, seg: 16 }); b.scale.set(1 - murcho * .35, 1.2 - murcho * .7, 1 - murcho * .35); b.position.y = .5 - murcho * .38; g.add(b); g.add(cyl(.002, .002, .45 - murcho * .35, '#F4F1EA', 0, .22 - murcho * .17, 0, { seg: 4 })); return g; }
/** Bilhete da escola (papel). */
export function bilhete(w = .16, h = .11) { const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), toonTex(ctex(512, 352, (x, W, H) => { x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, W, H); x.fillStyle = '#E2443A'; x.fillRect(0, 0, W, 26); x.fillStyle = '#2A2A30'; x.textAlign = 'center'; x.font = '900 52px Inter'; x.fillText('DIA DA FAMÍLIA', W / 2, 110); x.font = '700 36px Inter'; x.fillText('DOMINGO, 10H', W / 2, 180); x.font = '700 30px Inter'; x.fillText('TRAGA QUEM VOCÊ AMA', W / 2, 250); x.fillStyle = '#E2443A'; x.beginPath(); x.moveTo(W / 2, 320); x.bezierCurveTo(W / 2 - 40, 290, W / 2 - 20, 260, W / 2, 285); x.bezierCurveTo(W / 2 + 20, 260, W / 2 + 40, 290, W / 2, 320); x.fill(); }))); return p; }
/** Pão francês aberto com manteiga (k = quanto da manteiga já foi passada, brilho no fim). */
export function paoManteiga() { const g = new THREE.Group(); const p = sph(.06, '#D9A050', 0, .02, 0, { out: .004, seg: 16 }); p.scale.set(1.4, .4, .8); g.add(p); const miolo = bx(.15, .004, .08, '#F4E6C0', 0, .04, 0); g.add(miolo);
  const mant = bx(.14, .003, .074, '#FFE680', 0, .043, 0); mant.material = toon('#FFE680', { emissive: '#FFE680', emissiveIntensity: .1 }); g.add(mant); g.userData.passa = (k) => { mant.scale.x = Math.max(.01, k); mant.position.x = -.07 + .07 * k; }; return g; }
/** Faca de mesa. */
export function faca() { const g = new THREE.Group(); g.add(bx(.08, .004, .016, '#C9CED6', .05, 0, 0, { out: .002 })); g.add(bx(.07, .012, .014, '#3A2A20', -.03, 0, 0, { out: .002 })); return g; }
