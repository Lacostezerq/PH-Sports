// Cenários do prédio antigo da Dona Cida: portaria, escada de 4 andares (sem elevador) e o apartamento (cozinha, quarto, banheiro, sala).
import * as THREE from 'three';
import { toon, tm, rb, bx, cyl, sph, ctex, toonTex, luzToon } from './motor/toon.js';
import { rng } from './motor/core.js';
import * as M from '../../../mundo/cidade/moveis.js';
import { piso as pisoTex, reboco, azulejo } from '../../../mundo/cidade/texturas.js';
import { lampada, torneira, ventiladorPe, botijao, cadeiraPlastico, marcaMao } from './objs.js';

const rep = (t, a, b) => { const n = t.clone(); n.wrapS = n.wrapT = THREE.RepeatWrapping; n.repeat.set(a, b); n.needsUpdate = true; return n; };
const plano = (w, h, mat, x, y, z, rx = 0, ry = 0) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); m.position.set(x, y, z); m.rotation.set(rx, ry, 0); m.receiveShadow = true; return m; };
/** Textura de azulejo velho com algumas rachaduras e manchas. */
const _AZ = {};
function azulejoVelho(seed = 1, base = '#E8E2CF', junta = '#B9B09A') {
  const key = seed + base + junta; if (_AZ[key]) return _AZ[key];
  return _AZ[key] = ctex(512, 512, (x) => { const R = rng(seed); x.fillStyle = junta; x.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { const v = (R() - .5) * 14; const c = new THREE.Color(base).offsetHSL(0, 0, v / 255); x.fillStyle = c.getStyle(); x.fillRect(i * 64 + 2, j * 64 + 2, 60, 60); }
    x.strokeStyle = '#6E665488'; x.lineWidth = 2; for (let k = 0; k < 5; k++) { let px = R() * 512, py = R() * 512; x.beginPath(); x.moveTo(px, py); for (let s = 0; s < 6; s++) { px += (R() - .5) * 50; py += R() * 40; x.lineTo(px, py); } x.stroke(); }
    for (let k = 0; k < 6; k++) { x.fillStyle = '#8E846833'; x.beginPath(); x.ellipse(R() * 512, R() * 512, 20 + R() * 40, 10 + R() * 30, R() * 3, 0, 7); x.fill(); } });
}
const parede = (cor) => toonTex(rep(reboco(cor), 1, 1));
const matAz = (w, h, seed, base) => toonTex(rep(azulejoVelho(seed, base), w / 1.6, h / 1.6));

// ===================================================================== PRÉDIO
export const FH = 2.8, RISE = .175, RUN = .27, NDEG = 8, XA = -.62, XB = .62, ZA0 = 1.5, ZLAND = ZA0 - NDEG * RUN; // ZLAND = -0.66
export const ANDARES = 4;
/** Portaria + caixa de escada. Origem: chão da portaria (y = 0). Escada sobe para -z (lance A, x<0) e volta para +z (lance B, x>0).
 * Portaria em z de 2.9 a 7.2; porta da rua em z = 7.2. Apartamento 41 no 4º andar (y = 11.2), porta em x = -0.6 na parede z = 2.9. */
export function predio(c, o = {}) {
  const g = new THREE.Group(); c.add(g);
  c.add(new THREE.HemisphereLight('#FFF1D6', '#5A4E40', .75)); c.add(new THREE.AmbientLight('#FFE9C4', .35));
  const degrauM = toon('#B8B0A4'), bordaM = toon('#8E8678'), lajeM = toon('#A8A094');
  const H = (ANDARES + 1) * FH;
  for (let n = 0; n < ANDARES; n++) {
    const y0 = n * FH;
    for (let k = 0; k < NDEG; k++) { // lance A (sobe para -z)
      const zt = ZA0 - (k + .5) * RUN, yt = y0 + (k + 1) * RISE; const d = tm(new THREE.BoxGeometry(1.06, RISE + .16, RUN), degrauM, { pos: [XA, yt - (RISE + .16) / 2, zt], out: .006 }); g.add(d); g.add(bx(1.06, .02, .03, '#7A7266', XA, yt - .01, zt + RUN / 2 - .015));
    }
    g.add(tm(new THREE.BoxGeometry(2.4, .22, 1.24), lajeM, { pos: [0, y0 + 1.4 - .11, ZLAND - .62], out: .006 })); // patamar do meio
    for (let k = 0; k < NDEG; k++) { // lance B (sobe para +z)
      const zt = ZLAND + (k + .5) * RUN, yt = y0 + 1.4 + (k + 1) * RISE; g.add(tm(new THREE.BoxGeometry(1.06, RISE + .16, RUN), degrauM, { pos: [XB, yt - (RISE + .16) / 2, zt], out: .006 })); g.add(bx(1.06, .02, .03, '#7A7266', XB, yt - .01, zt - RUN / 2 + .015));
    }
    g.add(tm(new THREE.BoxGeometry(2.4, .22, 1.4), lajeM, { pos: [0, y0 + FH - .11, ZA0 + .7], out: .006 })); // patamar do andar
    // corrimão de ferro descascado (borda de dentro dos dois lances)
    for (const [x, zA, zB, yA, yB] of [[XA + .55, ZA0, ZLAND, y0, y0 + 1.4], [XB - .55, ZLAND, ZA0, y0 + 1.4, y0 + FH]]) {
      const len = Math.hypot(zB - zA, yB - yA); const ang = Math.atan2(yB - yA, Math.abs(zB - zA)) * Math.sign(zA - zB);
      const r = cyl(.025, .025, len, '#2F4A3A', x, (yA + yB) / 2 + .9, (zA + zB) / 2, { rot: [Math.PI / 2 + ang, 0, 0], seg: 8, out: .004 }); g.add(r);
      for (let i = 0; i <= 8; i++) { const u = i / 8; g.add(cyl(.012, .012, .9, '#2F4A3A', x, yA + (yB - yA) * u + .45, zA + (zB - zA) * u, { seg: 6 })); }
    }
    // lâmpada no patamar do meio e no do andar
    const l1 = lampada(.25); l1.position.set(0, y0 + 1.4 + 2.6, ZLAND - .7); g.add(l1);
  }
  // paredes da caixa da escada (azulejo velho embaixo, reboco encardido em cima: usamos azulejo até o topo, mais simples e encardido)
  const azm = matAz(H, H, 3, '#E2DCC4');
  g.add(plano(4.8, H, matAz(4.8, H, 4, '#E2DCC4'), -1.2, H / 2, .5, 0, Math.PI / 2)); // parede esquerda
  const pd = plano(4.8, H, azm, 1.2, H / 2, .5, 0, -Math.PI / 2); g.add(pd); // parede direita
  g.add(plano(2.4, H, matAz(2.4, H, 5, '#E2DCC4'), 0, H / 2, -1.9)); // fundo
  // parede da frente de cada andar (com a porta do apartamento) — a portaria fica aberta no térreo
  const portas = [];
  for (let n = 1; n <= ANDARES; n++) {
    const y0 = n * FH; const mz = matAz(2.4, FH, 10 + n, '#E2DCC4');
    // parede com o vão da porta (x de -1.05 a -.15) e um pedacinho do apartamento lá dentro
    g.add(plano(.15, FH, mz, -1.125, y0 + FH / 2, 2.9, 0, Math.PI)); g.add(plano(1.35, FH, mz, .525, y0 + FH / 2, 2.9, 0, Math.PI)); g.add(plano(.9, FH - 2.12, mz, -.6, y0 + 2.12 + (FH - 2.12) / 2, 2.9, 0, Math.PI));
    g.add(plano(2.0, 2.4, toon('#D8C8A8'), -.6, y0 + 1.2, 4.2, 0, Math.PI)); g.add(plano(1.4, 2.0, toon('#B89A70'), -.6, y0 + .002, 3.55, -Math.PI / 2)); for (const sx of [-1.05, -.15]) g.add(plano(1.3, 2.12, toon('#CDBB98'), sx, y0 + 1.06, 3.55, 0, sx < -.6 ? Math.PI / 2 : -Math.PI / 2));
    const p = new THREE.Group(); p.position.set(-1.05, y0, 2.88); g.add(p); const pp = new THREE.Group(); pp.position.x = .45; p.add(pp); pp.add(bx(.9, 2.1, .05, '#7A5236', 0, 1.05, 0, { out: .008 })); pp.add(sph(.03, '#C9A030', .33, 1.0, -.04, { seg: 8 }));
    const num = new THREE.Mesh(new THREE.PlaneGeometry(.18, .12), toonTex(ctex(120, 80, (x) => { x.fillStyle = '#C9A030'; x.fillRect(0, 0, 120, 80); x.fillStyle = '#2A1E14'; x.font = '900 56px Inter'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(n + '1', 60, 42); }))); num.position.set(0, 1.75, -.03); num.rotation.y = Math.PI; pp.add(num);
    g.add(bx(.06, 2.2, .1, '#5E3E26', -1.08, y0 + 1.1, 2.88)); g.add(bx(.06, 2.2, .1, '#5E3E26', -.12, y0 + 1.1, 2.88)); g.add(bx(1.02, .08, .1, '#5E3E26', -.6, y0 + 2.16, 2.88));
    portas.push(p);
    const l2 = lampada(.2); l2.position.set(0, y0 + FH - .02, ZA0 + .7); g.add(l2);
    // tapetinho na porta
    g.add(bx(.6, .01, .35, ['#8E3A2E', '#3E5A7A', '#5A7A3E', '#7A5A2E'][n % 4], -.6, y0 + .005, 2.6));
  }
  // portaria (térreo, z de 2.9 a 7.2; x de -1.2 a 3.6)
  const pis = toonTex(rep(pisoTex('granilite', '#CFC8B8', '#8E8678'), 4, 4)); g.add(plano(4.8, 5.8, pis, 1.2, .001, 4.3, -Math.PI / 2));
  g.add(plano(4.8, 2.8, parede('#D8CDB4'), 1.2, 1.4, 7.2, 0, Math.PI));
  g.add(plano(4.3, 2.8, matAz(4.3, 2.8, 7, '#DCD5BE'), 3.6, 1.4, 5.05, 0, -Math.PI / 2));
  g.add(plano(4.3, 2.8, matAz(4.3, 2.8, 8, '#DCD5BE'), -1.2, 1.4, 5.05, 0, Math.PI / 2));
  g.add(plano(2.4, 2.8, matAz(2.4, 2.8, 9, '#DCD5BE'), 2.4, 1.4, 2.9)); // parede atrás da portaria (ao lado da escada)
  const teto = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 4.3), toon('#E8E2D4')); teto.rotation.x = Math.PI / 2; teto.position.set(1.2, 2.8, 5.05); g.add(teto);
  // porta de ferro e vidro da rua
  const pr = new THREE.Group(); pr.position.set(1.6, 0, 7.17); g.add(pr); pr.add(bx(1.4, 2.3, .05, '#2F4A3A', 0, 1.15, 0, { out: .008 }));
  const vid = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.4), new THREE.MeshToonMaterial({ color: '#CDE3EA', emissive: '#FFE9B8', emissiveIntensity: .45 })); vid.position.set(0, 1.45, -.03); vid.rotation.y = Math.PI; pr.add(vid);
  for (let i = 0; i < 5; i++) pr.add(bx(.02, 1.4, .02, '#2F4A3A', -.5 + i * .25, 1.45, -.04));
  // caixas de correio, balcão do porteiro, extintor, quadro de avisos
  for (let i = 0; i < 8; i++) g.add(rb(.3, .2, .12, '#9A8A6A', 3.55, 1.2 + (i % 2) * .24, 3.6 + Math.floor(i / 2) * .34, { out: .004 }));
  const bal = rb(1.1, 1.0, .5, '#7A5236', 2.7, .5, 5.6, { out: .01 }); g.add(bal); g.add(bx(1.2, .04, .6, '#5E3E26', 2.7, 1.02, 5.6));
  g.add(cyl(.08, .08, .4, '#C0392B', -1.1, 1.0, 4.2, { seg: 12, out: .005 }));
  const av = new THREE.Mesh(new THREE.PlaneGeometry(.6, .45), toonTex(ctex(300, 220, (x) => { x.fillStyle = '#C9A06A'; x.fillRect(0, 0, 300, 220); x.fillStyle = '#F4F1EA'; x.fillRect(20, 20, 120, 80); x.fillRect(160, 40, 110, 70); x.fillRect(40, 120, 130, 80); x.fillStyle = '#2A2A30'; x.font = '700 18px Inter'; x.fillText('AVISO', 40, 50); x.fillText('ÁGUA', 175, 70); x.fillText('REUNIÃO', 52, 150); })));
  av.position.set(-1.19, 1.6, 5.6); av.rotation.y = Math.PI / 2; g.add(av);
  const l0 = lampada(.25); l0.position.set(1.2, 2.8, 4.6); g.add(l0);
  // luzes amarelas fracas (uma por andar)
  const luzes = [];
  for (let n = 0; n <= ANDARES; n++) { const L = new THREE.PointLight('#FFD89A', 6, 6.5, 1.6); L.position.set(0, n * FH + 2.2, .3); g.add(L); luzes.push(L); }
  const lp = new THREE.PointLight('#FFE2AE', 5, 7, 1.6); lp.position.set(1.2, 2.4, 4.8); g.add(lp); luzes.push(lp);
  const lamps = []; g.traverse((m) => { if (m.userData.bulbo) lamps.push(m.userData.bulbo); });
  return { g, portas, luzes, lamps, portaRua: pr, paredeDir: pd };
}
/** Caminho de quem sobe a escada (pontos [x, y, z]); de `deAndar` até `ateAndar` (0 = térreo). Começa na portaria se deAndar = 0. */
export function trajetoEscada(deAndar = 0, ateAndar = ANDARES, o = {}) {
  const P = [];
  if (deAndar === 0 && o.portaria !== false) P.push([o.x0 ?? 1.4, 0, o.z0 ?? 5.0], [XA, 0, 2.3]);
  for (let n = deAndar; n < ateAndar; n++) {
    const y0 = n * FH; P.push([XA, y0, ZA0 + .05], [XA, y0 + 1.4, ZLAND - .05], [XA + .15, y0 + 1.4, ZLAND - .6], [XB - .15, y0 + 1.4, ZLAND - .6], [XB, y0 + 1.4, ZLAND - .05], [XB, y0 + FH, ZA0 + .05]);
    if (n < ateAndar - 1) P.push([XB - .1, y0 + FH, ZA0 + .6], [XA + .1, y0 + FH, ZA0 + .6]);
  }
  if (o.porta) P.push([XB - .2, ateAndar * FH, ZA0 + .8], [-.6, ateAndar * FH, 2.5]);
  return P;
}
/** Anda num caminho 3D com velocidade v (m/s) a partir de t0. Devolve fn(t) => { p:[x,y,z], ry, sobe(bool), fim }. */
export function andarPor(P, t0, v = .7) {
  const L = [0]; for (let i = 1; i < P.length; i++) L.push(L[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], (P[i][1] - P[i - 1][1]) * .3, P[i][2] - P[i - 1][2]));
  const tot = L.at(-1);
  const em = (d) => { d = Math.max(0, Math.min(tot, d)); let i = 1; while (i < L.length - 1 && L[i] < d) i++; const u = (d - L[i - 1]) / Math.max(1e-6, L[i] - L[i - 1]); return { p: P[i - 1].map((a, k) => a + (P[i][k] - a) * u), i }; };
  let ry = 0;
  return (t, vv = v) => { const d = (t - t0) * vv; const a = em(d), b = em(d + .35); const dx = b.p[0] - a.p[0], dz = b.p[2] - a.p[2]; if (Math.hypot(dx, dz) > 1e-3) ry = Math.atan2(dx, dz);
    const sobe = Math.abs(P[a.i][1] - P[a.i - 1][1]) > .01; return { p: a.p, ry, sobe, fim: d >= tot, prog: d / tot, tot }; };
}
/** Pose de subir degrau (joelho alto, tronco pra frente). */
export function poseSubir(t, f = 1.6, amp = 1, carga = 0) {
  const p = t * f * Math.PI * 2, s = Math.sin(p), c2 = Math.cos(p);
  return { bob: Math.abs(c2) * .03 - .02, lean: 10 + carga * 6, twist: s * 3, hipL: [40 * Math.max(0, s) * amp + 8, 0], hipR: [40 * Math.max(0, -s) * amp + 8, 0], knL: 55 * Math.max(0, s) * amp + 6, knR: 55 * Math.max(0, -s) * amp + 6, shL: [-14 * s, 8], shR: [14 * s, 8], elL: 20, elR: 20, headX: 4 };
}

// ===================================================================== APARTAMENTO
/** Cômodo fechado (chão, 4 paredes, teto). o.azulejo: altura do azulejo nas paredes. */
function comodo(c, w, d, h, o = {}) {
  const g = new THREE.Group(); c.add(g);
  g.add(plano(w, d, toonTex(rep(pisoTex(...(o.piso || ['ceramica', '#D8CFBE', '#C4B9A4'])), w * 1.2, d * 1.2)), 0, 0, 0, -Math.PI / 2));
  const pm = o.azul ? toonTex(rep(azulejo('#F6F4EE', '#E2E6E4', '#B8C8C8'), w / .8, h / .8)) : parede(o.parede || '#EDE6D6');
  const paredes = [[w, 0, -d / 2, 0], [w, 0, d / 2, Math.PI], [d, -w / 2, 0, Math.PI / 2], [d, w / 2, 0, -Math.PI / 2]].map(([L, x, z, ry]) => { const p = plano(L, h, pm, x, h / 2, z, 0, ry); g.add(p); return p; });
  const teto = new THREE.Mesh(new THREE.PlaneGeometry(w, d), toon('#F4F0E8')); teto.rotation.x = Math.PI / 2; teto.position.y = h; g.add(teto);
  for (const [x, z, ww, dd] of [[0, -d / 2 + .01, w, .02], [0, d / 2 - .01, w, .02], [-w / 2 + .01, 0, .02, d], [w / 2 - .01, 0, .02, d]]) g.add(bx(ww, .08, dd, '#C8BEAE', x, .04, z, { shadow: false }));
  return { g, paredes };
}
/** Janela com o céu e prédios lá fora. hora: 'manha' | 'tarde' | 'noite' | 'madrugada'. */
export function janela(w, h, hora = 'manha', seed = 1) {
  const cores = { manha: ['#8CC8F0', '#E8F4FA', '#F4E0B0'], tarde: ['#F2A65A', '#F7D28A', '#E8B070'], noite: ['#141A38', '#2A2E58', '#F2C76A'], madrugada: ['#2E3A6A', '#6A6E9A', '#E8C88A'] }[hora];
  const t = ctex(512, 360, (x) => { const gr = x.createLinearGradient(0, 0, 0, 360); gr.addColorStop(0, cores[0]); gr.addColorStop(1, cores[1]); x.fillStyle = gr; x.fillRect(0, 0, 512, 360); const R = rng(seed);
    for (let i = 0; i < 9; i++) { const bw = 40 + R() * 40, bh = 120 + R() * 160, bx_ = i * 58 - 10; x.fillStyle = hora === 'noite' || hora === 'madrugada' ? '#1E2238' : ['#D8CDB8', '#C8B8A0', '#E2D2BC', '#B8A890'][i % 4]; x.fillRect(bx_, 360 - bh, bw, bh);
      for (let a = 0; a < 6; a++) for (let b = 0; b < 3; b++) { x.fillStyle = (hora === 'noite' || hora === 'madrugada') ? (R() > .55 ? cores[2] : '#2A2E44') : '#8EA6B8'; x.fillRect(bx_ + 6 + b * (bw / 3), 360 - bh + 12 + a * 24, bw / 3 - 10, 12); } } });
  const g = new THREE.Group(); const v = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t })); g.add(v);
  for (const s of [-1, 1]) g.add(bx(.05, h + .05, .06, '#E8E2D6', s * w / 2, 0, .02)); g.add(bx(w, .05, .06, '#E8E2D6', 0, h / 2, .02)); g.add(bx(w + .14, .05, .14, '#E8E2D6', 0, -h / 2, .06)); g.add(bx(.03, h, .03, '#E8E2D6', 0, 0, .02));
  g.userData.vidro = v; return g;
}
/** Cozinha pequena: azulejo branco, fogão de 4 bocas, pia com torneira, mesa com toalha de plástico xadrez, 2 cadeiras de plástico.
 * Origem no centro do chão. Fogão no fundo à esquerda; mesa no meio-frente. */
export function cozinha(c, o = {}) {
  const hora = o.hora || 'manha';
  luzToon(c, { r: 6, pos: hora === 'noite' ? [1, 6, 2] : [-2, 6, -5], ki: hora === 'noite' ? .7 : 1.5, hemi: hora === 'noite' ? 1.0 : 1.6, key: hora === 'noite' ? '#FFD9A0' : '#FFF2DC' });
  c.add(new THREE.AmbientLight(hora === 'noite' ? '#FFD49A' : '#FFF4E6', hora === 'noite' ? .55 : .5));
  const W = 3.4, D = 3.2, Hh = 2.6; const { g } = comodo(c, W, D, Hh, { azul: true, piso: ['ceramica', '#C9BBA4', '#B5A68C'] });
  const jan = janela(1.0, .9, hora, 2); jan.position.set(.4, 1.6, -D / 2 + .02); c.add(jan);
  const fog = M.fogao('#F4F1EA'); fog.position.set(-1.05, 0, -D / 2 + .34); c.add(fog);
  const bot = botijao(); bot.scale.setScalar(.65); bot.position.set(-1.5, 0, -D / 2 + .25); c.add(bot);
  const pia = M.bancadaPia(1.5, '#F4F1EA', '#8E8678'); pia.position.set(.45, 0, -D / 2 + .32); c.add(pia);
  pia.children.forEach((m) => { if (m.isGroup && Math.abs(m.position.y - .9) < .01) m.visible = false; }); // a torneira de bancada sai: fica só a de parede
  const tor = torneira(); tor.position.set(.45 - .375, 1.05, -D / 2 + .02); c.add(tor);
  const ger = M.geladeira('#F4F1EA'); ger.position.set(1.32, 0, -D / 2 + .38); c.add(ger);
  const arm = M.armarioAereo(1.6, '#F4F1EA'); arm.position.set(-.3, 2.05, -D / 2 + .18); c.add(arm);
  // mesa com toalha de plástico xadrez
  const mesa = new THREE.Group(); mesa.position.set(.15, 0, .45); c.add(mesa);
  const xad = ctex(256, 256, (x) => { for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { x.fillStyle = (i + j) % 2 ? '#E2443A' : '#F6F2EA'; x.fillRect(i * 32, j * 32, 32, 32); } });
  const toal = new THREE.Mesh(new THREE.BoxGeometry(1.12, .012, .82), toonTex(rep(xad, 2, 1.5))); toal.position.y = .77; mesa.add(toal);
  for (const s of [-1, 1]) { const ab = new THREE.Mesh(new THREE.PlaneGeometry(1.12, .14), toonTex(rep(xad, 2, .3), { side: THREE.DoubleSide })); ab.position.set(0, .7, s * .41); mesa.add(ab); const ab2 = new THREE.Mesh(new THREE.PlaneGeometry(.82, .14), toonTex(rep(xad, 1.5, .3), { side: THREE.DoubleSide })); ab2.position.set(s * .56, .7, 0); ab2.rotation.y = Math.PI / 2; mesa.add(ab2); }
  mesa.add(rb(1.0, .04, .7, '#B87A4A', 0, .745, 0)); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) mesa.add(bx(.05, .72, .05, '#9A6236', a * .44, .36, b * .29));
  const cad1 = cadeiraPlastico(); cad1.position.set(.15, 0, 1.12); cad1.rotation.y = Math.PI; c.add(cad1);
  const cad2 = cadeiraPlastico(); cad2.position.set(.15, 0, -.22); c.add(cad2);
  // porta para o corredor (parede da esquerda) e calendário, pano de prato, relógio
  const pt = new THREE.Group(); pt.position.set(-W / 2 + .01, 0, .9); c.add(pt); pt.add(bx(.04, 2.1, .85, '#8A6040', 0, 1.05, 0)); pt.add(bx(.06, 2.2, .06, '#6A4630', 0, 1.1, -.45)); pt.add(bx(.06, 2.2, .06, '#6A4630', 0, 1.1, .45));
  const cal = new THREE.Mesh(new THREE.PlaneGeometry(.32, .42), toonTex(ctex(160, 210, (x) => { x.fillStyle = '#F6F2EA'; x.fillRect(0, 0, 160, 210); x.fillStyle = '#C0392B'; x.fillRect(0, 0, 160, 46); x.fillStyle = '#FFF'; x.font = '900 26px Inter'; x.textAlign = 'center'; x.fillText('MERCADO', 80, 32); x.fillStyle = '#2A2A30'; x.font = '700 14px Inter'; for (let i = 0; i < 5; i++) for (let j = 0; j < 7; j++) x.fillText(String(i * 7 + j + 1), 14 + j * 22, 72 + i * 28); })));
  cal.position.set(W / 2 - .02, 1.6, .2); cal.rotation.y = -Math.PI / 2; c.add(cal);
  const lamp = lampada(.3); lamp.position.set(0, Hh, .2); c.add(lamp);
  const L = new THREE.PointLight('#FFE2AE', hora === 'noite' ? 7 : 2.5, 6, 1.6); L.position.set(0, 2.1, .2); c.add(L);
  return { g, fogao: fog, botijao: bot, pia, torneira: tor, mesa, cad1, cad2, W, D, Hh, janela: jan, luz: L, lamp };
}
/** Quarto apertado do Guilherme: colchão fino em cama de madeira, ventilador velho, janela com luz da rua, porta com batente. */
export function quarto(c, o = {}) {
  const hora = o.hora || 'noite'; const noite = hora === 'noite' || hora === 'madrugada';
  luzToon(c, { r: 6, pos: [3, 6, -2], ki: noite ? .5 : 1.4, hemi: noite ? .55 : 1.5, sky: noite ? '#8E9CD0' : '#EAF2FF', key: noite ? '#9FB4F0' : '#FFF2DC' });
  c.add(new THREE.AmbientLight(noite ? '#5A6AA8' : '#FFF4E6', noite ? .35 : .5));
  const W = 2.8, D = 3.0, Hh = 2.6; const { g } = comodo(c, W, D, Hh, { parede: '#C9D6C8', piso: ['madeira', '#9A6A42', '#8A5E3A'] });
  const cama = new THREE.Group(); cama.position.set(.62, 0, -.35); c.add(cama);
  cama.add(rb(.95, .32, 1.95, '#8A5A36', 0, .18, 0, { out: .01 })); cama.add(rb(.95, .7, .06, '#7A4E2E', 0, .55, -.98, { out: .01 }));
  const colchao = rb(.88, .1, 1.85, '#7FA6C9', 0, .39, 0, { out: .008 }); cama.add(colchao);
  const trav = rb(.6, .14, .3, '#F4F1EA', 0, .5, -.8, { out: .006 }); cama.add(trav);
  const lencol = rb(.9, .04, 1.1, '#E8B86A', 0, .45, .35, { out: .006 }); cama.add(lencol);
  const vent = ventiladorPe(); vent.position.set(-.9, 0, -1.1); vent.rotation.y = .6; c.add(vent);
  const jan = janela(.9, .9, hora, 4); jan.position.set(.6, 1.55, -D / 2 + .02); c.add(jan);
  // luz da rua entrando pela janela
  const rua = new THREE.SpotLight(noite ? '#FFC870' : '#FFF4DC', noite ? 18 : 6, 7, .6, .6, 1.4); rua.position.set(.6, 2.2, -D / 2 - .5); rua.target.position.set(.4, 0, .4); c.add(rua, rua.target);
  // porta com batente (onde ficam as marcas das mãos)
  const porta = new THREE.Group(); porta.position.set(-W / 2 + .01, 0, .75); c.add(porta);
  porta.add(bx(.03, 2.05, .8, '#8A6040', 0, 1.03, 0)); const bat = bx(.08, 2.15, .08, '#B88A5E', .02, 1.08, -.44, { out: .006 }); porta.add(bat); porta.add(bx(.08, 2.15, .08, '#B88A5E', .02, 1.08, .44, { out: .006 })); porta.add(bx(.08, .08, .96, '#B88A5E', .02, 2.15, 0));
  // pôster, prateleira, roupa na cadeira
  const pos = new THREE.Mesh(new THREE.PlaneGeometry(.5, .7), toonTex(ctex(250, 350, (x) => { x.fillStyle = '#1E2A44'; x.fillRect(0, 0, 250, 350); x.fillStyle = '#F2C230'; x.font = '900 46px Inter'; x.textAlign = 'center'; x.fillText('TREINO', 125, 70); x.fillStyle = '#E2443A'; x.beginPath(); x.arc(125, 200, 70, 0, 7); x.fill(); x.fillStyle = '#F4F1EA'; x.font = '900 60px Inter'; x.fillText('10', 125, 222); })));
  pos.position.set(W / 2 - .02, 1.6, .2); pos.rotation.y = -Math.PI / 2; c.add(pos);
  const prat = M.comoda(.7, '#B87A4A'); prat.position.set(-.85, 0, 1.15); prat.rotation.y = Math.PI; c.add(prat);
  const lamp = lampada(.25); lamp.position.set(0, Hh, 0); c.add(lamp);
  const L = new THREE.PointLight('#FFE2AE', noite ? 0 : 3, 5, 1.6); L.position.set(0, 2.2, 0); c.add(L);
  return { g, cama, colchao, travesseiro: trav, ventilador: vent, janela: jan, porta, batente: bat, luz: L, lamp, rua, W, D, Hh };
}
/** Banheiro pequeno: pia com espelho, torneira, copo com escovas, porta com maçaneta. */
export function banheiro(c) {
  luzToon(c, { r: 5, pos: [2, 6, 3], ki: 1.2, hemi: 1.5 }); c.add(new THREE.AmbientLight('#FFF4E6', .5));
  const W = 2.0, D = 2.2, Hh = 2.5; const { g } = comodo(c, W, D, Hh, { azul: true, piso: ['ceramica', '#B8C8C8', '#A0B4B4'] });
  const pia = M.pia(true); pia.position.set(.3, 0, -D / 2 + .25); c.add(pia);
  const vaso = M.vaso(); vaso.position.set(-.55, 0, -D / 2 + .35); c.add(vaso);
  const copoE = cyl(.03, .025, .09, '#3EA6FF', .55, .925, -D / 2 + .2, { seg: 10, out: .003 }); c.add(copoE);
  const porta = new THREE.Group(); porta.position.set(0, 0, D / 2 - .02); c.add(porta); porta.add(bx(.8, 2.05, .04, '#E8E2D6', 0, 1.03, 0, { out: .006 }));
  const mac = new THREE.Group(); mac.position.set(-.3, 1.0, -.04); porta.add(mac); mac.add(cyl(.02, .02, .05, '#C9A030', 0, 0, 0, { rot: [Math.PI / 2, 0, 0], seg: 8 })); mac.add(bx(.12, .02, .02, '#C9A030', .05, 0, -.03));
  const tor = torneira(); tor.position.set(.3, .98, -D / 2 + .05); c.add(tor);
  const lamp = lampada(.15); lamp.position.set(0, Hh, 0); c.add(lamp);
  return { g, pia, porta, macaneta: mac, torneira: tor, copo: copoE, W, D };
}
/** Sala pequena: sofá com manta, TV antiga, mesa com o bolo; janela com o portão do prédio lá embaixo. */
export function salinha(c, o = {}) {
  luzToon(c, { r: 6, pos: [2, 6, 4], ki: 1.0, hemi: 1.3, key: '#FFE8C8' }); c.add(new THREE.AmbientLight('#FFE9D0', .5));
  const W = 3.6, D = 3.2, Hh = 2.6; const { g } = comodo(c, W, D, Hh, { parede: '#E8D8B8', piso: ['madeira', '#A87A4E', '#966A42'] });
  const sofa = M.sofa(1.8, '#7A6A5A'); sofa.position.set(-.6, 0, -D / 2 + .5); c.add(sofa);
  const manta = rb(1.0, .04, .7, '#C84E4E', -.9, .78, -D / 2 + .62, { out: .005 }); manta.rotation.x = -.5; c.add(manta);
  const rack = M.rackTV(1.0, '#7A5236'); rack.position.set(1.2, 0, D / 2 - .3); rack.rotation.y = Math.PI; c.add(rack);
  const tv = new THREE.Group(); tv.position.set(1.2, .5, D / 2 - .32); tv.rotation.y = Math.PI; c.add(tv); tv.add(rb(.62, .5, .45, '#3A3A40', 0, .25, -.05, { out: .008 })); const tel = new THREE.Mesh(new THREE.PlaneGeometry(.48, .36), new THREE.MeshToonMaterial({ color: '#5A6A7A', emissive: '#3A4A5A', emissiveIntensity: .4 })); tel.position.set(0, .26, .18); tv.add(tel);
  const mesa = new THREE.Group(); mesa.position.set(.2, 0, .35); c.add(mesa); mesa.add(rb(.9, .04, .6, '#9A6236', 0, .74, 0, { out: .008 })); mesa.add(bx(.86, .01, .58, '#F4F1EA', 0, .765, 0)); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) mesa.add(bx(.05, .72, .05, '#7A4E2E', a * .38, .36, b * .24));
  const jan = janela(1.1, 1.0, 'tarde', 6); jan.position.set(W / 2 - .02, 1.55, -.4); jan.rotation.y = -Math.PI / 2; c.add(jan);
  // o portão amassado lá embaixo aparece na janela (desenhado por cima)
  const port = new THREE.Mesh(new THREE.PlaneGeometry(.5, .3), new THREE.MeshBasicMaterial({ transparent: true, map: ctex(250, 150, (x) => { x.strokeStyle = '#2F4A3A'; x.lineWidth = 6; for (let i = 0; i < 9; i++) { x.beginPath(); x.moveTo(20 + i * 26, 10); x.quadraticCurveTo(30 + i * 26 + (i > 2 && i < 7 ? 30 : 0), 80, 20 + i * 26, 145); x.stroke(); } x.beginPath(); x.moveTo(10, 14); x.quadraticCurveTo(125, 60, 240, 14); x.stroke(); x.beginPath(); x.moveTo(10, 140); x.lineTo(240, 140); x.stroke(); }) }));
  port.position.set(W / 2 - .04, 1.25, -.35); port.rotation.y = -Math.PI / 2; c.add(port);
  for (let i = 0; i < 2; i++) { const q = M.quadro(.5, .4, 30 + i, 'paisagem'); q.position.set(-W / 2 + .02, 1.7, -.6 + i * .9); q.rotation.y = Math.PI / 2; c.add(q); }
  const pl = M.planta(.9, 4); pl.position.set(-W / 2 + .35, 0, D / 2 - .35); c.add(pl);
  const lamp = lampada(.3); lamp.position.set(0, Hh, .2); c.add(lamp);
  return { g, mesa, sofa, tv, janela: jan, W, D, Hh };
}
export { marcaMao };
