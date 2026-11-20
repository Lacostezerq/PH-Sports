// Abertura: nascimento em Lisboa, 1500 (0 a 59.66 s).
import * as THREE from 'three';
import { smooth, rng, lerp, clamp } from './motor/core.js';
import { canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, sky, pointer } from './motor/kit.js';
import { stars, nebula, crowd } from './motor/kit2.js';
import { mk, cam, luzes, feixe, poeira } from './lib.js';
import { heroi, gente, casa, calcada, fundoLisboa, rio, nau, interior, bebe, banguela, pergaminho, vela } from './lx.js';

/** Quarto do parto à luz de velas, com cama de palha. */
function quartoParto(c, o = {}) {
  const I = interior(c, { lareiraX: 3.6, noite: true, parede: '#C8B494' });
  const cama = new THREE.Group(); cama.add(box(2.2, .4, 1.6, std('#6A4A2E'), 0, .2, 0)); cama.add(box(2.1, .2, 1.5, std('#E8DCC0'), 0, .5, 0)); cama.add(box(2.1, .08, 1.2, std('#B8483A'), 0, .62, .1)); cama.add(box(.6, .16, .9, std('#F4EEDC'), -.75, .66, 0)); cama.position.set(-1.6, 0, -2.6); c.add(cama);
  const vs = [vela(c, -3.0, .9, -3.2), vela(c, .2, .9, -2.4), vela(c, 1.6, .9, -2.4)]; c.add(box(.5, .9, .5, std('#5A3A22'), -3.0, .45, -3.2));
  const bacia = new THREE.Mesh(new THREE.CylinderGeometry(.35, .25, .2, 20), std('#B8683A')); bacia.position.set(-.2, .1, -1.4); c.add(bacia); const ag = new THREE.Mesh(new THREE.CircleGeometry(.3, 20), std('#9A2A2A', { roughness: .2 })); ag.rotation.x = -Math.PI / 2; ag.position.set(-.2, .19, -1.4); c.add(ag);
  return { I, vs, upd(u) { I.upd(u); vs.forEach(v => v.upd(u)); } };
}

/** 1. Sangue: a primeira coisa que você vê — 0 a 3.74 */
export function sSangue(t0, t1) {
  return mk(t0, t1, { bg: '#1A0808', fog: ['#2A1010', .03], fov: 34 }, (c) => {
    const Q = quartoParto(c); const p = gente(c, 'parteira', 'bun', '#C8C8C8', -.4, -1.6); p.tint('#FFD8C0');
    // pálpebras: duas faixas pretas presas à câmera
    const pal = []; for (const s of [-1, 1]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(4, 1.2), new THREE.MeshBasicMaterial({ color: '#000', fog: false, depthTest: false })); m.renderOrder = 99; pal.push([m, s]); c.add(m); }
    return (t, u, C) => {
      Q.upd(u); cam(C, [[0, [-.4, 1.5, .6]], [3.74, [-.4, 1.55, .3]]], [[0, [-.4, 1.4, -1.6]], [3.74, [-.4, 1.5, -1.6]]], u, Math.sin(u * 2) * .04);
      p.face(C); p.eye('open'); p.pose({ armL: [40, -60], armR: [40, -60], head: Math.sin(u * 2) * 4 });
      const ab = smooth(.3, 2.6, u) + Math.sin(u * 3) * .04 * (1 - smooth(2, 3, u)); pal.forEach(([m, s]) => { const d = .5; const dir = new THREE.Vector3(); C.getWorldDirection(dir); m.position.copy(C.position).addScaledVector(dir, d); m.quaternion.copy(C.quaternion); m.translateY(s * lerp(.6, .82, ab)); });
      return { focus: lerp(.3, 2.1, smooth(.4, 3, u)), range: lerp(.3, 1.5, smooth(.4, 3, u)), blur: lerp(30, 12, smooth(.4, 3, u)), bloom: .5, bloomT: .7, vig: .7, tint: u < 2.2 ? '#FF6050' : '#FFC8B0', sat: 1.2, exposure: lerp(.6, 1, smooth(0, 2, u)) };
    };
  });
}

/** 2. A parteira sem dente sorrindo: calma, você acabou de nascer — 3.74 a 10.17 */
export function sParteira(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .03], fov: 32 }, (c) => {
    const Q = quartoParto(c); const p = gente(c, 'parteira', 'bun', '#C8C8C8', -.4, -1.6); p.tint('#FFE0C8'); banguela(p);
    const b = bebe(c, -.4, 1.05, -1.35, 1.0); const mae = gente(c, 'mae', 'long', '#3A2418', -1.7, -2.4, .25); mae.tint('#F0D0C0');
    return (t, u, C) => {
      Q.upd(u); cam(C, [[0, [-.4, 1.62, .25]], [3.3, [-.35, 1.6, .2]], [6.4, [.6, 1.6, 1.8]]], [[0, [-.4, 1.52, -1.6]], [3.3, [-.4, 1.52, -1.6]], [6.4, [-.6, 1.2, -1.8]]], u);
      p.face(C); p.eye(u < 3.2 ? 'happy' : 'smug'); p.pose({ armL: [30, -80], armR: [30, -80], head: Math.sin(u * 3) * 5 });
      b.face(C); b.olhos(u < 3.3 ? 'wide' : 'cry'); b.position.y = 1.05 + Math.sin(u * 12) * .006;
      mae.face(C); mae.eye('shut'); mae.pose({ armL: [10, 6], armR: [10, 6], head: -8 });
      return { focus: C.position.distanceTo(p.root.position) - .2, range: 1.4, blur: 14, bloom: .45, bloomT: .78, vig: .6, tint: '#FFE4D0' };
    };
  });
}

/** 3. Lisboa, 9 de março de 1500 — 10.17 a 12.85 */
export function sLisboa(t0, t1) {
  return mk(t0, t1, { bg: '#A8CCE8', fog: ['#C8DCE8', .004], fov: 36, far: 900 }, (c) => {
    fundoLisboa(c, { z: -260, w: 700, y: -4 }); const T = rio(c, 600, 260, -140, 0);
    const naus = []; for (let i = 0; i < 13; i++) { const n = nau(.7 + (i % 3) * .1); n.position.set(-40 + i * 7 + (i % 2) * 3, 0, -90 - (i % 4) * 14); n.rotation.y = -.2; c.add(n); naus.push(n); }
    // margem com casas
    const gr = new THREE.Mesh(new THREE.PlaneGeometry(400, 60), std('#B8A888')); gr.rotation.x = -Math.PI / 2; gr.position.set(0, .3, -2); c.add(gr);
    for (let i = 0; i < 14; i++) { const h = casa(40 + i, 5 + (i % 3), 2 + (i % 2)); h.position.set(-36 + i * 5.6, .3, -14 - (i % 2) * 2); h.rotation.y = Math.PI; c.add(h); }
    luzes(c, { ki: 3, key: '#FFE2B8', pos: [-40, 40, 30], r: 100, hemi: 1.1 });
    return (t, u, C) => { T.offset.x = u * .03; naus.forEach((n, i) => { n.position.y = Math.sin(u * 1.4 + i) * .12; n.rotation.z = Math.sin(u * 1.1 + i) * .02; }); cam(C, [[0, [-6, 14, 30]], [2.7, [2, 12, 22]]], [[0, [0, 4, -100]], [2.7, [4, 3, -100]]], u); return { focus: 90, range: 120, blur: 4, bloom: .2, bloomT: 1, vig: .38 }; };
  });
}

/** 4. Bebê chorando no colo de uma mãe que você nunca viu — 12.85 a 19.81 */
export function sColo(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .03], fov: 32 }, (c) => {
    const Q = quartoParto(c); const mae = gente(c, 'mae', 'long', '#3A2418', -1.1, -1.8); mae.tint('#FFE0C8');
    const b = bebe(c, -1.0, 1.15, -1.55, 1.1);
    return (t, u, C) => {
      Q.upd(u); cam(C, [[0, [-1.0, 1.25, .2]], [7, [-.8, 1.4, 1.2]]], [[0, [-1.0, 1.2, -1.6]], [7, [-1.0, 1.35, -1.8]]], u);
      mae.face(C); mae.eye(u < 3.2 ? 'happy' : 'look'); mae.pose({ armL: [30, -100], armR: [30, -100], head: Math.sin(u * 1.5) * 5 }); b.position.y = 1.15 + Math.sin(u * 3) * .02; b.rotation.z = Math.sin(u * 3) * .05; b.face(C);
      b.olhos(u < 3.4 ? 'cry' : u < 5 ? 'wide' : 'open');
      return { focus: C.position.distanceTo(b.position), range: 1.2, blur: 14, bloom: .45, bloomT: .78, vig: .6, tint: '#FFE4D0' };
    };
  });
}

/** Ícones de 2026 pintados. */
export const ICONES = {
  celular: (x) => { x.fillStyle = '#15151C'; x.beginPath(); x.roundRect(46, 14, 68, 132, 12); x.fill(); x.fillStyle = '#4A86C7'; x.fillRect(52, 26, 56, 104); x.fillStyle = '#F2C14E'; x.fillRect(58, 36, 18, 18); x.fillStyle = '#36AEA2'; x.fillRect(82, 36, 18, 18); x.fillStyle = '#E9483A'; x.fillRect(58, 60, 18, 18); },
  internet: (x) => { x.strokeStyle = '#8FF0E0'; x.lineWidth = 10; x.lineCap = 'round'; for (const r of [20, 40, 60]) { x.beginPath(); x.arc(80, 120, r, -2.4, -.75); x.stroke(); } x.fillStyle = '#8FF0E0'; x.beginPath(); x.arc(80, 120, 8, 0, 7); x.fill(); },
  pix: (x) => { x.save(); x.translate(80, 80); x.rotate(Math.PI / 4); x.strokeStyle = '#4AD8B8'; x.lineWidth = 12; x.strokeRect(-34, -34, 68, 68); x.restore(); x.fillStyle = '#4AD8B8'; x.beginPath(); x.arc(80, 80, 10, 0, 7); x.fill(); },
  vacina: (x) => { x.save(); x.translate(80, 80); x.rotate(-.7); x.fillStyle = '#E8F4FF'; x.fillRect(-14, -50, 28, 80); x.fillStyle = '#9FD8FF'; x.fillRect(-10, -30, 20, 50); x.fillStyle = '#C8CCD4'; x.fillRect(-3, 30, 6, 30); x.fillRect(-20, -56, 40, 8); x.restore(); },
  microondas: (x) => { x.fillStyle = '#D8DCE2'; x.beginPath(); x.roundRect(14, 40, 132, 84, 10); x.fill(); x.fillStyle = '#2A2A36'; x.fillRect(24, 50, 84, 64); x.fillStyle = '#F2C14E'; x.fillRect(32, 70, 30, 24); x.fillStyle = '#4A4A58'; for (let i = 0; i < 3; i++) { x.beginPath(); x.arc(126, 62 + i * 20, 6, 0, 7); x.fill(); } },
  lampada: (x) => { x.fillStyle = '#FFE8A0'; x.beginPath(); x.arc(80, 66, 40, 0, 7); x.fill(); x.fillStyle = '#B8BCC4'; x.fillRect(60, 102, 40, 30); },
  motor: (x) => { x.fillStyle = '#B8BCC4'; x.save(); x.translate(80, 80); for (let i = 0; i < 8; i++) { x.rotate(Math.PI / 4); x.fillRect(-10, -60, 20, 24); } x.beginPath(); x.arc(0, 0, 42, 0, 7); x.fill(); x.fillStyle = '#4A4A58'; x.beginPath(); x.arc(0, 0, 14, 0, 7); x.fill(); x.restore(); },
};
export function icone(nome, s = .8) { return cut(canvasTex(160, 160, (x) => { const g = x.createRadialGradient(80, 80, 10, 80, 80, 80); g.addColorStop(0, '#2A3A6Acc'); g.addColorStop(1, '#2A3A6A00'); x.fillStyle = g; x.fillRect(0, 0, 160, 160); ICONES[nome](x); }), s, s, { blend: true, add: true }); }

/** 5. Memórias de 2026 dentro da cabeça de um bebê — 19.81 a 30.42 */
export function sMemorias(t0, t1) {
  return mk(t0, t1, { bg: '#0A0818', fov: 34, far: 900 }, (c) => {
    stars(c, 2500, 200, 7); nebula(c, 0, 0, -60, 120, '#7E6BFF', 3, .25); nebula(c, 30, 10, -70, 100, '#FF6FB0', 5, .15);
    const b = bebe(c, 0, 0, 0, 2.2); const halo = glowSprite('#AFC8FF', 3, .4); halo.position.set(0, .6, -.2); c.add(halo);
    const nomes = ['celular', 'internet', 'pix', 'vacina', 'microondas']; const tempos = [2.55, 3.15, 4.0, 4.55, 5.2]; const I = nomes.map(n => { const m = icone(n, .9); c.add(m); return m; });
    const anel = cut(canvasTex(512, 512, (x) => { x.clearRect(0, 0, 512, 512); x.strokeStyle = '#8FF0E088'; x.lineWidth = 4; x.setLineDash([12, 14]); x.beginPath(); x.arc(256, 256, 240, 0, 7); x.stroke(); }), 4.4, 4.4, { blend: true, add: true }); anel.position.set(0, .6, -.1); c.add(anel);
    return (t, u, C) => {
      cam(C, [[0, [0, .7, 5]], [10.6, [0, .65, 3.4]]], [[0, [0, .6, 0]], [10.6, [0, .6, 0]]], u);
      b.olhos(u < 2.4 ? 'open' : u < 7 ? 'wide' : 'flat'); const wob = u > 7.2 ? Math.sin(u * 5) * .25 : 0; b.cab.rotation.z = wob; b.cab.position.x = Math.sin(u * 5) * (u > 7.2 ? .05 : 0); for (const k in b.ests) { b.ests[k].rotation.z = wob; b.ests[k].position.x = b.cab.position.x; }
      I.forEach((m, i) => { const p = smooth(tempos[i], tempos[i] + .3, u); m.visible = p > .02; const a = i / 5 * 6.283 + u * .35; m.position.set(Math.cos(a) * 2.1, .6 + Math.sin(a) * 1.4, Math.sin(a) * .3); m.scale.setScalar(p * (1 + Math.sin(u * 4 + i) * .04)); pointer(m, C); });
      anel.rotation.z = u * .1; anel.material.opacity = smooth(2.5, 4, u) * .8; halo.material.opacity = .3 + Math.sin(u * 2) * .1;
      return { focus: C.position.z, range: 3, blur: 6, bloom: .6, bloomT: .6, vig: .55 };
    };
  });
}

/** 6. Deixa o like como quem levanta a mão (o bebê também levanta) — 30.42 a 40.14 */
export function sLikeBebe(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .03], fov: 32 }, (c) => {
    const I = interior(c, { lareiraX: -3.4, noite: true });
    const berco = new THREE.Group(); berco.add(box(1.2, .5, .7, std('#7A5232'), 0, .55, 0)); berco.add(box(1.1, .1, .6, std('#E8DCC0'), 0, .78, 0)); for (const [x, z] of [[-.55, -.3], [.55, -.3], [-.55, .3], [.55, .3]]) berco.add(box(.06, .5, .06, '#4A3220', x, .25, z)); for (const s of [-1, 1]) { const r = new THREE.Mesh(new THREE.TorusGeometry(.35, .04, 6, 16, Math.PI), std('#5A3A22')); r.rotation.y = Math.PI / 2; r.position.set(s * .6, .8, 0); berco.add(r); } berco.position.set(.4, 0, -1.8); c.add(berco);
    const b = bebe(c, .4, .95, -1.7, 1.0); const vs = [vela(c, 1.4, .9, -2.6)]; c.add(box(.4, .9, .4, std('#5A3A22'), 1.4, .45, -2.6));
    return (t, u, C) => {
      I.upd(u); vs.forEach(v => v.upd(u)); cam(C, [[0, [.6, 1.6, 1.4]], [9.7, [.45, 1.35, .3]]], [[0, [.4, .95, -1.7]], [9.7, [.4, 1.05, -1.7]]], u);
      b.face(C); const up = smooth(1.4, 1.8, u) * (1 - smooth(6.0, 6.4, u)); b.mao.visible = up > .05; b.mao.position.set(.18, .2 + up * .28, .03); b.mao.rotation.z = -.2;
      b.olhos(u < 1.4 ? 'open' : u < 6.3 ? 'happy' : 'flat');
      return { focus: C.position.distanceTo(b.position), range: 1.2, blur: 13, bloom: .45, bloomT: .8, vig: .55 };
    };
  });
}

/** 7. Treze navios saem do Tejo; a multidão no porto — 40.14 a 50.53 */
export function sPorto(t0, t1) {
  return mk(t0, t1, { bg: '#A8CCE8', fog: ['#C8DCE8', .006], fov: 34, far: 900 }, (c) => {
    fundoLisboa(c, { z: -320, w: 800, y: -6, seed: 9 }); const T = rio(c, 600, 300, -150, -.4);
    const cais = new THREE.Mesh(new THREE.PlaneGeometry(200, 30), new THREE.MeshStandardMaterial({ color: '#A89878', roughness: 1 })); cais.rotation.x = -Math.PI / 2; cais.position.set(0, 0, 10); cais.receiveShadow = true; c.add(cais); c.add(box(200, 1.2, 1, std('#8A7A60'), 0, -.4, -5));
    for (let i = 0; i < 20; i++) { c.add(box(.3, 1.2, .3, '#5A3A22', -40 + i * 4.2, .3, -4.8)); }
    const naus = []; for (let i = 0; i < 13; i++) { const n = nau(1); n.position.set(-30 + (i % 5) * 14 + Math.floor(i / 5) * 6, -.4, -30 - Math.floor(i / 5) * 22 - (i % 2) * 6); n.rotation.y = -Math.PI / 2 + .15; c.add(n); naus.push(n); }
    const R = rng(4), sp = []; for (let i = 0; i < 420; i++) { const x = (R() - .5) * 50; if (Math.abs(x) < 2.4 && R() < .8) continue; sp.push([x, -3.4 + R() * 5.6, 0, Math.PI + (R() - .5) * .4]); } crowd(c, sp, { raised: .55, jump: .12, seed: 5, tint: '#F4E8D8' });
    const mae = gente(c, 'mae', 'long', '#3A2418', .6, 3.2); mae.tint('#FFFFFF'); const b = bebe(c, .62, 1.18, 3.42, .9);
    const band = []; for (let i = 0; i < 10; i++) { const f = new THREE.Mesh(new THREE.PlaneGeometry(1, .6), std(i % 2 ? '#C21A1A' : '#F4EEDC', { side: THREE.DoubleSide })); f.position.set(-20 + i * 4.4, 3, -4); c.add(f); c.add(box(.06, 3, .06, '#5A3A22', -20.5 + i * 4.4, 1.5, -4)); band.push(f); }
    luzes(c, { ki: 3.2, key: '#FFE2B8', pos: [-30, 40, 30], r: 80, hemi: 1.1 });
    return (t, u, C) => {
      T.offset.x = u * .03; naus.forEach((n, i) => { n.position.x += 0; n.position.z = (-30 - Math.floor(i / 5) * 22 - (i % 2) * 6) - u * 1.2; n.position.y = -.4 + Math.sin(u * 1.4 + i) * .12; });
      band.forEach((f, i) => f.rotation.y = Math.sin(u * 3 + i) * .3);
      cam(C, [[0, [3.5, 1.8, 7.5]], [5, [1.6, 2.2, 6.2]], [10.4, [-2, 6, 14]]], [[0, [.6, 1.3, 3.2]], [5, [.4, 1.5, 0]], [10.4, [-4, 3, -40]]], u);
      mae.face(C); mae.eye(u < 6 ? 'happy' : 'look'); mae.pose({ armL: [30, -100], armR: u > 2 && u < 5 ? [140, 10] : [30, -100] }); b.face(C); b.olhos(u > 6.4 ? 'wide' : 'open');
      return { focus: lerp(C.position.distanceTo(mae.root.position), 40, smooth(4, 8, u)), range: lerp(2, 40, smooth(4, 8, u)), blur: 10, bloom: .25, bloomT: .95, vig: .38 };
    };
  });
}

/** 8. O mapa: um lugar que um dia vai se chamar Brasil — 50.53 a 56.81 */
export function sMapa(t0, t1) {
  return mk(t0, t1, { bg: '#1A1008', fog: ['#2A1A10', .03], fov: 30 }, (c) => {
    c.add(box(6, .1, 4, std('#5A3A22'), 0, .9, -1.6));
    const M = pergaminho(c, 4.2, 2.8, (x, p, W, H) => { x.strokeStyle = '#8A6A3A'; x.lineWidth = 3; for (let i = 0; i < W; i += 64) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, H); x.stroke(); }
      x.fillStyle = '#B89A6A'; x.beginPath(); x.moveTo(650, 120); x.lineTo(760, 110); x.lineTo(800, 220); x.lineTo(720, 300); x.lineTo(660, 260); x.fill(); x.beginPath(); x.moveTo(690, 320); x.lineTo(820, 360); x.lineTo(870, 520); x.lineTo(760, 640); x.lineTo(700, 520); x.fill(); x.fillStyle = '#6A4A2A'; x.font = '700 44px Caveat'; x.fillText('Lisboa', 640, 205);
      if (p > .55) { x.globalAlpha = smooth(.55, .8, p); x.fillStyle = '#7A9A5A'; x.beginPath(); x.moveTo(160, 360); x.lineTo(300, 340); x.lineTo(360, 420); x.lineTo(300, 600); x.lineTo(200, 640); x.lineTo(150, 520); x.fill(); x.fillStyle = '#3A2A10'; x.font = '700 60px Caveat'; x.fillText('Brasil', 180, 500); x.globalAlpha = 1; }
      x.strokeStyle = '#C21A1A'; x.lineWidth = 6; x.setLineDash([16, 12]); x.beginPath(); const pts = [[690, 230], [600, 330], [480, 420], [360, 440]]; const n = Math.max(1, Math.floor(p * 1.6 * pts.length)); x.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < Math.min(n, pts.length); i++) x.lineTo(pts[i][0], pts[i][1]); x.stroke(); x.setLineDash([]);
      x.save(); x.translate(820, 560); x.strokeStyle = '#6A4A2A'; x.lineWidth = 3; for (let i = 0; i < 16; i++) { x.rotate(Math.PI / 8); x.beginPath(); x.moveTo(0, 0); x.lineTo(0, i % 2 ? 40 : 70); x.stroke(); } x.restore(); });
    M.rotation.x = -Math.PI / 2; M.position.set(0, .96, -1.6);
    const v = vela(c, 2.2, .95, -1.0, 1.4); const nv = nau(.05); nv.position.set(.6, 1.0, -1.7); c.add(nv);
    c.add(new THREE.HemisphereLight('#A88A60', '#1A1008', .5));
    return (t, u, C) => { v.upd(u); M.paint(smooth(.2, 4.5, u)); const p = smooth(.2, 4, u); nv.position.set(lerp(.9, -.75, p), 1.0, lerp(-2.0, -1.4, p)); cam(C, [[0, [.2, 4.6, 1.2]], [6.3, [-.2, 4.0, .6]]], [[0, [0, .96, -1.6]], [6.3, [-.3, .96, -1.5]]], u); return { focus: C.position.distanceTo(new THREE.Vector3(0, .96, -1.6)), range: 2.5, blur: 10, bloom: .4, bloomT: .8, vig: .6 }; };
  });
}

/** 9. Você tenta falar… sai "agu" — 56.81 a 59.66 */
export function sAgu(t0, t1) {
  return mk(t0, t1, { bg: '#A8CCE8', fog: ['#C8DCE8', .006], fov: 32, far: 900 }, (c) => {
    fundoLisboa(c, { z: -300, w: 800, y: -6, seed: 9 }); rio(c, 600, 300, -150, -.4);
    const cais = new THREE.Mesh(new THREE.PlaneGeometry(200, 30), std('#A89878')); cais.rotation.x = -Math.PI / 2; cais.position.set(0, 0, 10); c.add(cais);
    const mae = gente(c, 'mae', 'long', '#3A2418', 0, 0); mae.tint('#FFFFFF'); const b = bebe(c, .02, 1.18, .22, .9);
    const bal = cut(canvasTex(320, 200, (x) => { x.fillStyle = '#FBF7EC'; x.beginPath(); x.roundRect(10, 10, 300, 140, 40); x.fill(); x.beginPath(); x.moveTo(110, 148); x.lineTo(120, 196); x.lineTo(160, 148); x.fill(); x.fillStyle = '#20202A'; x.font = '900 84px Fraunces'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('agu', 160, 84); }), .5, .31); c.add(bal);
    luzes(c, { ki: 3, pos: [-30, 40, 30], r: 30 });
    return (t, u, C) => { cam(C, [[0, [.4, 1.35, 3.0]], [2.9, [.25, 1.3, 2.5]]], [[0, [0, 1.3, .2]], [2.9, [0, 1.35, .2]]], u); mae.face(C); mae.pose({ armL: [30, -100], armR: [30, -100] }); mae.eye('look'); b.face(C); b.olhos(u < 1.4 ? 'wide' : u < 2.2 ? 'happy' : 'flat'); const p = smooth(1.9, 2.1, u); bal.visible = p > .02; bal.scale.setScalar(p); bal.position.set(.35, 1.6, .25); pointer(bal, C); return { focus: C.position.distanceTo(b.position), range: 1.2, blur: 12, bloom: .25, bloomT: .95, vig: .4 }; };
  });
}
