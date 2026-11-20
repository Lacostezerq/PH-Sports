// Personagem 3D "de desenho": cabeça esférica com rosto pintado (olhos, sobrancelhas, boca com sincronia labial),
// corpo articulado (tronco, braços e pernas com juntas), contorno preto e sombreamento toon.
import * as THREE from 'three';
import { toon, toonTex, outline, rbox, ctex, blob } from './toon.js';
import { clamp, lerp } from './core.js';

const D = Math.PI / 180;
const R = .3; // raio da cabeça
const OUTW = .012;

// ---------- rosto ----------
const FACE = { phi0: Math.PI / 2 - 1.0, phiL: 2.0, th0: .62, thL: 1.55, W: 1024, H: 512 };
const fx = (dphi) => FACE.W / 2 + dphi / FACE.phiL * FACE.W;              // dphi: radianos a partir do centro (+ = direita da tela)
const fy = (th) => (th - FACE.th0) / FACE.thL * FACE.H;                  // th: ângulo polar (0 = topo da cabeça)
const sx = (r) => r / FACE.phiL * FACE.W, sy = (r) => r / FACE.thL * FACE.H;
const INK = '#1B1420';

function drawFace(x, s, look) {
  x.clearRect(0, 0, FACE.W, FACE.H);
  x.lineCap = 'round'; x.lineJoin = 'round';
  const E = s.emo || 'neutro';
  const EY = 1.45, EX = .31; // posição dos olhos
  // bochechas
  if (s.blush || E === 'feliz' || E === 'apaixonado' || E === 'vergonha') { x.fillStyle = 'rgba(240,110,110,' + (E === 'vergonha' ? .55 : .3) + ')'; for (const k of [-1, 1]) { x.beginPath(); x.ellipse(fx(k * .44), fy(1.7), sx(.075), sy(.045), 0, 0, 7); x.fill(); } }
  // olhos
  const lid = clamp(Math.max(s.blink || 0, E === 'sono' ? .55 : E === 'triste' || E === 'choro' ? .22 : E === 'bravo' ? .25 : E === 'desconfiado' ? .4 : E === 'tedio' ? .5 : 0));
  const big = E === 'surpreso' || E === 'medo' ? 1.15 : 1;
  for (const k of [-1, 1]) {
    const cx = fx(k * EX), cy = fy(EY), rx = sx(.128) * big, ry = sy(.158) * big;
    if (E === 'feliz' && !s.olhosAbertos || (s.blink || 0) > .92) { // olho fechado / feliz ^ ^
      x.strokeStyle = INK; x.lineWidth = 11; x.beginPath();
      if (E === 'feliz' || E === 'rindo') x.arc(cx, cy + ry * .25, rx * .85, Math.PI * 1.12, Math.PI * 1.88); else { x.moveTo(cx - rx * .9, cy + ry * .15); x.quadraticCurveTo(cx, cy + ry * .55, cx + rx * .9, cy + ry * .15); }
      x.stroke(); continue;
    }
    x.save(); x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, 7); x.clip();
    x.fillStyle = '#FFFFFF'; x.fillRect(cx - rx, cy - ry, rx * 2, ry * 2);
    const pr = (E === 'surpreso' || E === 'medo' ? .55 : .68), lx = clamp(look[0], -1, 1), ly = clamp(look[1], -1, 1);
    const px = cx + lx * rx * .38, py = cy + ly * ry * .32 + ry * .06;
    x.fillStyle = '#231A26'; x.beginPath(); x.ellipse(px, py, rx * pr, ry * pr * .98, 0, 0, 7); x.fill();
    x.fillStyle = '#FFFFFF'; x.beginPath(); x.ellipse(px - rx * .22, py - ry * .28, rx * .2, ry * .17, 0, 0, 7); x.fill();
    x.beginPath(); x.ellipse(px + rx * .2, py + ry * .22, rx * .08, ry * .07, 0, 0, 7); x.fill();
    // pálpebra superior (corte)
    const ang = E === 'bravo' ? -k * .45 : (E === 'triste' || E === 'choro' || E === 'preocupado') ? k * .35 : 0;
    if (lid > .02 || ang) {
      const ly0 = cy - ry + ry * 2 * lid; x.fillStyle = s.pele || '#C98B5E';
      x.beginPath(); x.moveTo(cx - rx * 1.2, cy - ry * 1.3); x.lineTo(cx + rx * 1.2, cy - ry * 1.3); x.lineTo(cx + rx * 1.2, ly0 + Math.tan(ang) * rx * 1.2); x.lineTo(cx - rx * 1.2, ly0 - Math.tan(ang) * rx * 1.2); x.closePath(); x.fill();
      x.strokeStyle = INK; x.lineWidth = 8; x.beginPath(); x.moveTo(cx - rx * 1.1, ly0 - Math.tan(ang) * rx * 1.1); x.lineTo(cx + rx * 1.1, ly0 + Math.tan(ang) * rx * 1.1); x.stroke();
    }
    x.restore();
    x.strokeStyle = INK; x.lineWidth = 8; x.beginPath(); x.ellipse(cx, cy, rx, ry, 0, 0, 7); x.stroke();
    if (s.cilios) { x.lineWidth = 7; x.beginPath(); x.moveTo(cx + k * rx * .7, cy - ry * .72); x.lineTo(cx + k * rx * 1.15, cy - ry * 1.02); x.stroke(); }
  }
  // lágrimas
  if (E === 'choro' || s.lagrima) { x.fillStyle = 'rgba(120,200,255,.85)'; for (const k of [-1, 1]) { const cx = fx(k * EX), cy = fy(EY) + sy(.12); x.beginPath(); x.moveTo(cx - sx(.02), cy); x.quadraticCurveTo(cx, cy + sy(.22), cx + sx(.02), cy); x.fill(); x.beginPath(); x.ellipse(cx, cy + sy(.2), sx(.028), sy(.035), 0, 0, 7); x.fill(); } }
  // sobrancelhas
  const BR = { neutro: [0, 0], feliz: [.04, -.1], rindo: [.04, -.1], triste: [.02, .45], choro: [.03, .5], bravo: [-.03, -.55], surpreso: [.09, 0], medo: [.08, .4], preocupado: [.04, .38], desconfiado: [-.01, -.2], sono: [-.01, .1], vergonha: [.03, .3], determinado: [-.02, -.35], tedio: [-.01, .05], apaixonado: [.05, .2] }[E] || [0, 0];
  const up = BR[0] + (s.brow || 0) * .05, tilt = BR[1];
  x.strokeStyle = s.sobr || INK; x.lineWidth = s.sobrW || 15;
  for (const k of [-1, 1]) { const cx = fx(k * EX), cy = fy(EY - .2 - up), w = sx(.085); const a = k * tilt * .5; x.beginPath(); x.moveTo(cx - w * Math.cos(a), cy - w * Math.sin(a) * (k < 0 ? 1 : 1)); x.quadraticCurveTo(cx, cy - sy(.025), cx + w * Math.cos(a), cy + w * Math.sin(a)); x.stroke(); }
  // rugas
  if (s.rugas) { x.strokeStyle = 'rgba(90,50,40,.5)'; x.lineWidth = 5; for (const k of [-1, 1]) { const cx = fx(k * (EX + .17)); for (let i = 0; i < 3; i++) { x.beginPath(); x.moveTo(cx, fy(EY - .05 + i * .06)); x.lineTo(cx + k * sx(.05), fy(EY - .07 + i * .07)); x.stroke(); } } x.beginPath(); x.moveTo(fx(-.12), fy(1.12)); x.quadraticCurveTo(fx(0), fy(1.09), fx(.12), fy(1.12)); x.stroke(); }
  // óculos escuros
  if (s.oculosEscuros) { x.fillStyle = '#15121A'; for (const k of [-1, 1]) { x.beginPath(); x.ellipse(fx(k * EX), fy(EY + .02), sx(.16), sy(.13), 0, 0, 7); x.fill(); } x.strokeStyle = '#15121A'; x.lineWidth = 10; x.beginPath(); x.moveTo(fx(-EX + .14), fy(EY)); x.lineTo(fx(EX - .14), fy(EY)); x.stroke(); x.fillStyle = 'rgba(255,255,255,.35)'; for (const k of [-1, 1]) { x.beginPath(); x.ellipse(fx(k * EX - .05), fy(EY - .03), sx(.04), sy(.025), -.5, 0, 7); x.fill(); } }
  // óculos
  if (s.oculos) { x.strokeStyle = '#6A4A3A'; x.lineWidth = 8; for (const k of [-1, 1]) { x.beginPath(); x.ellipse(fx(k * EX), fy(EY), sx(.15), sy(.16), 0, 0, 7); x.stroke(); } x.beginPath(); x.moveTo(fx(-EX + .15), fy(EY - .02)); x.quadraticCurveTo(fx(0), fy(EY - .08), fx(EX - .15), fy(EY - .02)); x.stroke(); }
  // nariz
  if (s.nariz) { x.strokeStyle = 'rgba(60,30,30,.55)'; x.lineWidth = 7; x.beginPath(); x.arc(fx(0), fy(1.66), sx(.035), .2, Math.PI - .2); x.stroke(); }
  // boca
  const m = s.mouth || {}; const open = clamp(m.open || 0), round = clamp(m.round || 0); let smile = m.smile ?? ({ feliz: .8, rindo: .9, triste: -.6, choro: -.7, bravo: -.4, medo: -.3, preocupado: -.35, apaixonado: .6, vergonha: .3, determinado: -.05, desconfiado: -.15, tedio: -.2 }[E] || 0);
  const MY = fy(s.bigode ? 1.93 : 1.88), MX = fx(0);
  const mw = sx(.15 + .05 * (1 - round) + (E === 'rindo' ? .04 : 0));
  const top = MY - smile * sy(.035);
  if (open < .07) {
    x.strokeStyle = INK; x.lineWidth = 11; x.beginPath(); x.moveTo(MX - mw * .85, top); x.quadraticCurveTo(MX, MY + smile * sy(.075), MX + mw * .85, top); x.stroke();
  } else {
    const h = sy(.05 + .2 * open), w = mw * (1 - .38 * round);
    x.beginPath();
    if (round > .55) x.ellipse(MX, MY + h * .35, w * .75, h * .62, 0, 0, 7);
    else { x.moveTo(MX - w, top); x.quadraticCurveTo(MX, MY + smile * sy(.03) - h * .12, MX + w, top); x.bezierCurveTo(MX + w * .95, top + h * 1.25, MX - w * .95, top + h * 1.25, MX - w, top); x.closePath(); }
    x.fillStyle = '#5A1E2A'; x.fill(); x.save(); x.clip();
    if (open > .28 && round < .55) { x.fillStyle = '#FFFFFF'; x.fillRect(MX - w, top - h, w * 2, h * 1.18); }
    x.fillStyle = '#E8707E'; x.beginPath(); x.ellipse(MX, top + h * 1.05, w * .58, h * .42, 0, 0, 7); x.fill(); x.restore();
    x.strokeStyle = INK; x.lineWidth = 9; x.stroke();
  }
  // bigode
  if (s.bigode) { x.fillStyle = s.bigode; x.strokeStyle = INK; x.lineWidth = 6; x.beginPath(); x.moveTo(fx(0), fy(1.76)); x.bezierCurveTo(fx(.12), fy(1.7), fx(.24), fy(1.76), fx(.27), fy(1.9)); x.bezierCurveTo(fx(.17), fy(1.84), fx(.08), fy(1.87), fx(0), fy(1.83)); x.bezierCurveTo(fx(-.08), fy(1.87), fx(-.17), fy(1.84), fx(-.27), fy(1.9)); x.bezierCurveTo(fx(-.24), fy(1.76), fx(-.12), fy(1.7), fx(0), fy(1.76)); x.fill(); x.stroke(); }
}

// ---------- geometrias ----------
const GC = {};
let LOD = 0;
const cap = (r, l) => { const k = 'c' + r + l + LOD; return GC[k] || (GC[k] = new THREE.CapsuleGeometry(r, l, LOD ? 3 : 6, LOD ? 10 : 18)); };
function lathe(pts, sz = .82, seg = 36) {
  const g = new THREE.LatheGeometry(pts.map(([a, b]) => new THREE.Vector2(a, b)), seg, Math.PI, Math.PI * 2);
  g.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, sz));
  const p = g.attributes.position, uv = g.attributes.uv; let y0 = 1e9, y1 = -1e9; for (let i = 0; i < p.count; i++) { y0 = Math.min(y0, p.getY(i)); y1 = Math.max(y1, p.getY(i)); }
  for (let i = 0; i < p.count; i++) uv.setY(i, (p.getY(i) - y0) / (y1 - y0)); g.computeVertexNormals(); return g;
}
const TORSO = {
  magro: [[0, .5], [.14, .5], [.165, .53], [.172, .62], [.172, .72], [.165, .8], [.14, .86], [.09, .895], [.04, .905], [0, .906]],
  barriga: [[0, .47], [.16, .47], [.2, .52], [.225, .6], [.225, .68], [.205, .77], [.17, .845], [.11, .89], [.04, .905], [0, .906]],
  senhora: [[0, .5], [.15, .5], [.17, .55], [.175, .64], [.17, .74], [.16, .81], [.13, .865], [.08, .898], [0, .906]],
};
const SAIA = [[0, .24], [.25, .24], [.245, .26], [.22, .36], [.19, .5], [.165, .62], [0, .62]];

/** Cria um personagem.
 * o: { pele, camisa, calca, tenis, cabelo:'cacheado'|'tigela'|'coque'|'careca'|'rabo'|null, corCabelo, tronco:'magro'|'barriga'|'senhora',
 *      manga:'curta'|'longa', saia, estampa(ctx,w,h), olhos..., oculos, bigode, nariz, cilios, escala } */
export function makeChar3D(o = {}) {
  LOD = o.simples ? 1 : 0;
  const pele = o.pele || '#C98B5E', camisa = o.camisa || '#E8453C', calca = o.calca || '#2E4A7A', tenis = o.tenis || '#F4F1EA';
  const root = new THREE.Group(), pelvis = new THREE.Group(); root.add(pelvis);
  const torsoG = new THREE.Group(); torsoG.position.y = .52; pelvis.add(torsoG);
  const add = (par, geo, mat, pos, out = OUTW) => { const m = new THREE.Mesh(geo, typeof mat === 'string' ? toon(mat) : mat); m.castShadow = true; m.receiveShadow = true; if (pos) m.position.set(...pos); if (out) outline(m, out); par.add(m); return m; };
  // tronco com estampa
  const tex = ctex(1024, 512, (x, w, h) => { x.fillStyle = camisa; x.fillRect(0, 0, w, h); if (o.estampa) o.estampa(x, w, h); });
  const tm = toonTex(tex);
  const torso = add(torsoG, lathe(TORSO[o.tronco || 'magro']), tm, [0, -.52, 0]);
  if (o.saia) add(torsoG, lathe(SAIA, .86), o.saia, [0, -.52, 0]);
  add(torsoG, new THREE.CylinderGeometry(.06, .065, .1, 16), pele, [0, .4, 0], 0);
  // cabeça
  const headG = new THREE.Group(); headG.position.y = .38; torsoG.add(headG);
  const head = add(headG, new THREE.SphereGeometry(R, LOD ? 24 : 48, LOD ? 16 : 32), pele, [0, R * .86, 0]);
  for (const k of [-1, 1]) { const e = add(headG, new THREE.SphereGeometry(.055, 16, 12), pele, [k * R * .96, R * .82, -.01]); e.scale.set(.6, 1, .9); }
  const fcv = document.createElement('canvas'); fcv.width = FACE.W >> LOD; fcv.height = FACE.H >> LOD; const fctx = fcv.getContext('2d'); if (LOD) fctx.scale(.5, .5); const ftex = new THREE.CanvasTexture(fcv); ftex.colorSpace = THREE.SRGBColorSpace; ftex.anisotropy = 8;
  const faceM = new THREE.MeshToonMaterial({ map: ftex, gradientMap: toon('#fff').gradientMap, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
  const face = new THREE.Mesh(new THREE.SphereGeometry(R * 1.002, LOD ? 24 : 48, LOD ? 16 : 32, FACE.phi0, FACE.phiL, FACE.th0, FACE.thL), faceM); face.position.y = R * .86; face.renderOrder = 2; headG.add(face);
  // cabelo
  const hc = o.corCabelo || '#1E1618', hair = new THREE.Group(); hair.position.y = R * .86; headG.add(hair);
  if (o.cabelo === 'cacheado') {
    const g = new THREE.SphereGeometry(1, LOD ? 8 : 14, LOD ? 6 : 10); let n = 0;
    for (let i = 0; i < 70; i++) { const th = Math.acos(1 - 2 * ((i + .5) / 70)), ph = i * 2.39996; const y = Math.cos(th), xz = Math.sin(th), px = Math.cos(ph) * xz, pz = Math.sin(ph) * xz;
      if (y < .28 && pz > -.2) continue; if (y < -.25) continue; if (pz > .55 && y < .62) continue; if (Math.abs(px) > .8 && y < .45 && pz > -.5) continue;
      const rr = .075 + ((i * 37) % 10) / 10 * .03; const m = add(hair, g, hc, [px * R * .98, y * R * .98 + .01, pz * R * .98], .009); m.scale.setScalar(rr); m.castShadow = false; n++; }
  } else if (o.cabelo === 'tigela' || o.cabelo === 'rabo' || o.cabelo === 'coque') {
    add(hair, new THREE.SphereGeometry(R * 1.04, 40, 28), hc, [0, .055, -.065]);
    if (o.cabelo === 'rabo') { const pr = add(hair, cap(.085, .26), hc, [0, .06, -.42]); pr.rotation.x = .75; const p2 = add(hair, new THREE.SphereGeometry(.1, 18, 14), hc, [0, -.07, -.5]); add(hair, new THREE.SphereGeometry(.065, 16, 12), o.laco || '#F25C8A', [0, .22, -.31]); for (const k of [-1, 1]) { const l = add(hair, cap(.06, .2), hc, [k * .27, -.08, .02]); l.rotation.z = -k * .08; } }
    if (o.cabelo === 'coque') add(hair, new THREE.SphereGeometry(.12, 24, 16), hc, [0, .3, -.12]);
    for (let k = -2; k <= 2; k++) { const b = add(hair, new THREE.SphereGeometry(.075, 16, 12), hc, [k * .07, .2 - Math.abs(k) * .025, .2 - Math.abs(k) * .02], .008); b.scale.set(1, .8, .7); }
  } else if (o.cabelo === 'careca') {
    for (const k of [-1, 1]) for (let i = 0; i < 4; i++) { const a = -.6 - i * .35; const m = add(hair, new THREE.SphereGeometry(.07, 14, 10), hc, [k * Math.cos(a) * R * .93 * (i < 3 ? 1 : .9), -.02, Math.sin(a) * R * .93 + .12], .008); m.scale.set(1, 1.2, 1); }
  }
  if (o.bone) { const b = add(hair, new THREE.SphereGeometry(R * 1.05, 32, 16, 0, Math.PI * 2, 0, 1.25), o.bone, [0, .03, -.01]); const aba = add(hair, rbox(.36, .03, .22, .012), o.bone, [0, .12, o.boneTras ? -.32 : .3]); }
  // braços
  const arm = (k) => {
    const sh = new THREE.Group(); sh.position.set(k * .185, .3, 0); torsoG.add(sh);
    const curta = (o.manga || 'curta') === 'curta';
    add(sh, cap(curta ? .064 : .058, curta ? .07 : .17), camisa, [0, curta ? -.055 : -.1, 0]);
    if (curta) add(sh, cap(.05, .15), pele, [0, -.11, 0]);
    const el = new THREE.Group(); el.position.y = -.21; sh.add(el);
    add(el, cap(.048, .14), curta ? pele : camisa, [0, -.085, 0]);
    const hand = new THREE.Group(); hand.position.y = -.2; el.add(hand);
    const hg = new THREE.SphereGeometry(.062, 20, 14); const h = add(hand, hg, o.luva || pele, [0, -.01, 0]); h.scale.set(.85, 1.05, .8);
    add(hand, new THREE.SphereGeometry(.026, 12, 10), o.luva || pele, [-k * .045, .02, .03], .007);
    return { sh, el, hand };
  };
  const AL = arm(1), AR = arm(-1);
  // pernas
  const leg = (k) => {
    const hp = new THREE.Group(); hp.position.set(k * .085, .52, 0); pelvis.add(hp);
    add(hp, cap(.07, .17), o.saia ? pele : calca, [0, -.11, 0]);
    const kn = new THREE.Group(); kn.position.y = -.22; hp.add(kn);
    add(kn, cap(.063, .16), o.meia || (o.saia ? pele : calca), [0, -.1, 0]);
    const an = new THREE.Group(); an.position.y = -.22; kn.add(an);
    const sh = add(an, rbox(.13, .095, .23, .045), tenis, [0, -.037, .035]);
    if (o.sola !== false) add(an, rbox(.135, .03, .235, .014), o.sola || '#FFFFFF', [0, -.075, .035], .006);
    return { hp, kn, an };
  };
  const LL = leg(1), LR = leg(-1);
  const sombra = blob(.36, .4); sombra.position.y = .006; root.add(sombra);
  if (o.escala) root.scale.setScalar(o.escala);

  const st = { look: [0, 0], key: '' };
  const c = {
    root, pelvis, torsoG, headG, head, hair, torso, hands: { L: AL.hand, R: AR.hand }, arms: { L: AL, R: AR }, legs: { L: LL, R: LR }, sombra,
    place(x, z, y = 0, ry = 0) { root.position.set(x, y, z); root.rotation.y = ry; return c; },
    /** Pose em graus. sh/hip: [frente, abrir]; el/kn: dobra. */
    pose(p = {}) {
      pelvis.position.y = p.bob || 0; pelvis.position.z = p.dz || 0;
      torsoG.rotation.set((p.lean || 0) * D, (p.twist || 0) * D, (p.tilt || 0) * D);
      headG.rotation.set((p.headX || 0) * D, (p.headY || 0) * D, (p.headZ || 0) * D);
      const S = (A, s, e, w) => { A.sh.rotation.set(-(s[0] || 0) * D, (s[2] || 0) * D * w, w * (s[1] ?? 8) * D); A.el.rotation.set(-(e || 0) * D, 0, 0); };
      S(AL, p.shL || [0, 8], p.elL ?? 8, 1); S(AR, p.shR || [0, 8], p.elR ?? 8, -1);
      const L = (A, h, k, w) => { A.hp.rotation.set(-(h[0] || 0) * D, 0, w * (h[1] || 0) * D); A.kn.rotation.set((k || 0) * D, 0, 0); A.an.rotation.set(-(h[0] || 0) * D * .0 + ((k || 0) * D) * -.4 * (h[2] ?? 1), 0, 0); };
      L(LL, p.hipL || [0, 0], p.knL || 0, 1); L(LR, p.hipR || [0, 0], p.knR || 0, -1);
      return c;
    },
    /** Estado do rosto: { emo, blink, look:[x,y], mouth:{open,round,smile}, brow } */
    face(s = {}) {
      const look = s.look || [0, 0]; const m = s.mouth || {};
      const q = (v, n = 20) => Math.round((v || 0) * n);
      const key = [s.emo, q(s.blink, 10), q(look[0], 8), q(look[1], 8), q(m.open, 12), q(m.round, 6), m.smile === undefined ? 'u' : q(m.smile, 8), q(s.brow, 6), s.lagrima ? 1 : 0, s.olhosAbertos ? 1 : 0].join('|');
      if (key !== st.key) { st.key = key; drawFace(fctx, { ...o.rosto, ...s, pele, oculos: o.oculos, rugas: o.rugas, oculosEscuros: o.oculosEscuros, bigode: o.bigode, nariz: o.nariz, cilios: o.cilios, sobr: o.sobr, sobrW: o.sobrW }, look); ftex.needsUpdate = true; }
      return c;
    },
    /** Vira o corpo para olhar (x,z). */
    faceTo(x, z) { root.rotation.y = Math.atan2(x - root.position.x, z - root.position.z); return c; },
    hold(obj, side = 'R') { c.hands[side].add(obj); return obj; },
  };
  /** Vira estátua de pedra (troca todos os materiais por cinza). */
  c.estatua = (cor = '#A9A49C') => { c.congelado = true; const m = toon(cor); root.traverse((n) => { if (n.isMesh && !n.userData.isOutline && n !== sombra && n !== face) n.material = m; }); faceM.color.set('#B8B4AC'); return c; };
  c.pose({}); c.face({});
  return c;
}

// ---------- ciclos de animação (retornam objetos de pose) ----------
export const idle = (t, ph = 0, amp = 1) => { const b = Math.sin((t + ph) * 2.1); return { bob: b * .006 * amp, headX: b * 1.5 * amp, shL: [b * 2, 8 + b * 1.5], shR: [-b * 2, 8 + b * 1.5], elL: 10, elR: 10 }; };
export function walk(t, f = 1.8, amp = 1, ph = 0) {
  const p = (t * f + ph) * Math.PI * 2, s = Math.sin(p), c2 = Math.cos(p);
  return { bob: Math.abs(Math.cos(p)) * .025 * amp - .012, lean: 4 * amp, twist: s * 4 * amp, hipL: [28 * s * amp, 0], hipR: [-28 * s * amp, 0], knL: Math.max(0, -c2) * 45 * amp + 5, knR: Math.max(0, c2) * 45 * amp + 5,
    shL: [-24 * s * amp, 7], shR: [24 * s * amp, 7], elL: 18 + Math.max(0, -s) * 18, elR: 18 + Math.max(0, s) * 18, headX: -2 };
}
export function run(t, f = 2.9, amp = 1, ph = 0) {
  const p = (t * f + ph) * Math.PI * 2, s = Math.sin(p), c2 = Math.cos(p);
  return { bob: Math.abs(Math.cos(p)) * .06 * amp - .02, lean: 16 * amp, twist: s * 7 * amp, hipL: [50 * s * amp + 8, 0], hipR: [-50 * s * amp + 8, 0], knL: (Math.max(0, -c2) * 85 + 18) * amp, knR: (Math.max(0, c2) * 85 + 18) * amp,
    shL: [-45 * s * amp, 10], shR: [45 * s * amp, 10], elL: 85, elR: 85, headX: -10 * amp };
}
export function pedal(t, f = 1.1, ph = 0) {
  const p = (t * f + ph) * Math.PI * 2;
  return { bob: -.12, lean: 22, hipL: [62 + 22 * Math.sin(p), 0], hipR: [62 - 22 * Math.sin(p), 0], knL: 70 + 25 * Math.cos(p), knR: 70 - 25 * Math.cos(p), shL: [62, 10], shR: [62, 10], elL: 25, elR: 25, headX: -14 };
}
export const sentado = (o = {}) => ({ bob: -.17, dz: -.02, hipL: [88, 4], hipR: [88, 4], knL: 88, knR: 88, shL: [12, 8], shR: [12, 8], elL: 30, elR: 30, ...o });
export function mixPose(a, b, u) {
  const r = {}; const ks = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const k of ks) { const x = a[k], y = b[k]; if (Array.isArray(x) || Array.isArray(y)) { const X = x || [0, 8], Y = y || [0, 8]; r[k] = X.map((v, i) => lerp(v, Y[i] ?? v, u)); } else r[k] = lerp(x ?? 0, y ?? 0, u); }
  return r;
}
/** Piscada automática: devolve 0..1. */
export function pisca(t, seed = 0) { const per = 3.1 + (seed % 5) * .37; const ph = ((t + seed * .77) % per) / per * per; return ph < .07 ? ph / .07 : ph < .14 ? 1 - (ph - .07) / .07 : 0; }
