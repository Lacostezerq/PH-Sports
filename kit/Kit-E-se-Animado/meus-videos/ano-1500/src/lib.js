// Biblioteca deste vídeo: atalhos de cena, cômodos, rua, telas de celular, bichos.
import * as THREE from 'three';
import { makeShot, aim, keys, smooth, rng, lerp, clamp } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, building, street, lamp, tree, car, skyline, sky, pointer } from './motor/kit.js';
import { uT, brickTex, crowd, stars } from './motor/kit2.js';
import { woodFloor } from './extra.js';

/** Atalho de plano: build(c, s) devolve upd(t, u, cam) => efeitos. */
export function mk(t0, t1, o, build) {
  const s = makeShot(t0, t1, o.bg || '#141228', o.fov || 34), c = s.scene;
  if (o.fog) c.fog = new THREE.FogExp2(o.fog[0], o.fog[1]);
  if (o.far) { s.camera.far = o.far; s.camera.updateProjectionMatrix(); }
  const U = build(c, s) || (() => ({}));
  s.update = (t, u) => { uT.value = t; const r = U(t, u, s.camera) || {}; return { focus: 6, range: 3, blur: 12, bloom: .3, bloomT: .92, vig: .45, exposure: 1, ...r }; };
  return s;
}
/** Câmera por chaves: P e Q são listas [[u, [x,y,z]], ...]. */
export function cam(c, P, Q, u, roll = 0) { aim(c, keys(P, u), keys(Q, u), roll); }
export const hero = (c, x, z, y = 0, glow = .22) => { const h = makeChar({ outfit: 'hero', glow }); h.place(x, z, y); c.add(h.root); return h; };
export const pessoa = (c, outfit, hair, hairc, x, z, y = 0) => { const k = makeChar({ outfit, hair, hairc, lash: !!hair }); k.place(x, z, y); c.add(k.root); return k; };
export function luzes(c, o = {}) {
  const night = o.night ?? false; c.add(new THREE.HemisphereLight(o.sky || (night ? '#6E74C0' : '#FFF0DC'), o.ground || '#3a2a20', o.hemi ?? (night ? .75 : 1.1)));
  const k = new THREE.DirectionalLight(o.key || (night ? '#8FA0FF' : '#FFE2B8'), o.ki ?? (night ? 1.1 : 2.8)); k.position.set(...(o.pos || [-8, 12, 8])); k.castShadow = true; k.shadow.mapSize.set(2048, 2048); const r = o.r || 14; Object.assign(k.shadow.camera, { left: -r, right: r, top: r, bottom: -r, far: 80 }); k.shadow.bias = -.0005; k.shadow.radius = 4; c.add(k); if (o.target) { k.target.position.set(...o.target); c.add(k.target); } return k;
}
/** Feixe de luz diagonal (janela, persiana): plano aditivo em degradê. */
export function feixe(c, x, y, z, w, h, rz = -.5, col = '#FFE2B0', op = .22) {
  const t = canvasTex(64, 256, (g) => { const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#ffffffcc'); gr.addColorStop(1, '#ffffff00'); g.fillStyle = gr; g.fillRect(0, 0, 64, 256); });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, color: col, transparent: true, opacity: op, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false })); m.position.set(x, y, z); m.rotation.z = rz; c.add(m); return m;
}
/** Partículas de poeira flutuando na luz. */
export function poeira(c, n, box3, seed = 2, col = '#FFE8C0') {
  const R = rng(seed), g = new THREE.BufferGeometry(), p = new Float32Array(n * 3), d = []; for (let i = 0; i < n; i++) d.push([box3[0] + R() * (box3[1] - box3[0]), box3[2] + R() * (box3[3] - box3[2]), box3[4] + R() * (box3[5] - box3[4]), R() * 6]);
  g.setAttribute('position', new THREE.BufferAttribute(p, 3)); const dot = canvasTex(32, 32, (x) => { const r = x.createRadialGradient(16, 16, 0, 16, 16, 16); r.addColorStop(0, '#fff'); r.addColorStop(1, '#ffffff00'); x.fillStyle = r; x.fillRect(0, 0, 32, 32); });
  const pts = new THREE.Points(g, new THREE.PointsMaterial({ map: dot, color: col, size: .035, transparent: true, opacity: .7, depthWrite: false, blending: THREE.AdditiveBlending })); pts.frustumCulled = false; c.add(pts);
  return (u) => { for (let i = 0; i < n; i++) { const q = d[i]; p[i * 3] = q[0] + Math.sin(u * .3 + q[3]) * .15; p[i * 3 + 1] = q[1] + Math.sin(u * .2 + q[3] * 2) * .1; p[i * 3 + 2] = q[2]; } g.attributes.position.needsUpdate = true; };
}
/** Placa/quadro pintado na parede. */
export function quadro(c, x, y, z, w, h, draw, ry = 0, moldura = '#C9A46A') { const g = new THREE.Group(); g.add(box(w + .08, h + .08, .04, moldura, 0, 0, -.02, false)); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: canvasTex(256, Math.max(16, Math.round(256 * h / w)), draw), roughness: .8 })); m.position.z = .005; g.add(m); g.position.set(x, y, z); g.rotation.y = ry; c.add(g); return g; }
/** Placa luminosa (letreiro) com texto. */
export function letreiro(texto, w, h, bg, fg, emi = .8, font = 'Fraunces') { const t = canvasTex(1024, Math.round(1024 * h / w), (x, W, H) => { x.fillStyle = bg; x.fillRect(0, 0, W, H); x.fillStyle = fg; x.shadowColor = fg; x.shadowBlur = 20; x.font = `900 ${Math.round(H * .62)}px ${font}`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(texto, W / 2, H * .54); }); return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: '#fff', emissiveIntensity: emi })); }
/** Planta em vaso. */
export function planta(c, x, z, sc = 1, pot = '#C76B4A') { const p = new THREE.Mesh(new THREE.CylinderGeometry(.28 * sc, .2 * sc, .45 * sc, 18), std(pot)); p.position.set(x, .225 * sc, z); p.castShadow = true; c.add(p); const lf = canvasTex(256, 256, (g) => { g.clearRect(0, 0, 256, 256); for (let i = 0; i < 11; i++) { g.fillStyle = i % 2 ? '#3E8A52' : '#2F6E42'; g.save(); g.translate(128, 250); g.rotate((i - 5) * .26); g.beginPath(); g.ellipse(0, -100, 17, 100, 0, 0, 7); g.fill(); g.restore(); } }); const m = cut(lf, 1.3 * sc, 1.3 * sc, { shadow: true }); m.position.set(x, .45 * sc + .6 * sc, z); c.add(m); return m; }

/** Caixa de cômodo: chão, parede do fundo com janela opcional e parede lateral. */
export function comodo(c, o = {}) {
  const W = o.w ?? 12, D = o.d ?? 9, Hh = o.h ?? 4.2, WZ = o.wz ?? -4, wall = o.wall ?? '#2F5A5E';
  c.add(woodFloor(W + 6, D + 8, o.floor ?? '#6A4530', 4, 3.5)).position.z = WZ + D / 2;
  const wp = canvasTex(512, 512, (x) => { x.fillStyle = wall; x.fillRect(0, 0, 512, 512); const c2 = new THREE.Color(wall); const l = '#' + c2.clone().offsetHSL(0, 0, .03).getHexString(), d = '#' + c2.clone().offsetHSL(0, 0, -.03).getHexString(); for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? l : d; x.fillRect(i * 64, 0, 64, 512); x.fillStyle = '#E8D8A022'; for (let y = 20; y < 512; y += 64) { x.beginPath(); x.arc(i * 64 + 32, y + (i % 2) * 32, 6, 0, 7); x.fill(); } } }); wp.wrapS = wp.wrapT = THREE.RepeatWrapping;
  const wm = (w, h) => { const t = wp.clone(); t.needsUpdate = true; t.repeat.set(w / 1.6, h / 1.6); return new THREE.MeshStandardMaterial({ map: t, roughness: .95 }); };
  const win = o.win; // [x0, x1, y0, y1]
  if (win) { const [X0, X1, Y0, Y1] = win; for (const [x, y, w, h] of [[(-W + X0) / 2, Hh / 2, X0 + W, Hh], [(X1 + W) / 2, Hh / 2, W - X1, Hh], [(X0 + X1) / 2, Y0 / 2, X1 - X0, Y0], [(X0 + X1) / 2, (Y1 + Hh) / 2, X1 - X0, Hh - Y1]]) c.add(box(w, h, .3, wm(w, h), x, y, WZ));
    for (const [x, y, w, h] of [[X0, (Y0 + Y1) / 2, .14, Y1 - Y0 + .14], [X1, (Y0 + Y1) / 2, .14, Y1 - Y0 + .14], [(X0 + X1) / 2, Y1, X1 - X0 + .14, .14], [(X0 + X1) / 2, (Y0 + Y1) / 2, .07, Y1 - Y0], [(X0 + X1) / 2, Y0 + (Y1 - Y0) * .62, X1 - X0, .06]]) c.add(box(w, h, .22, '#EDE5D2', x, y, WZ + .02));
    c.add(box(X1 - X0 + .5, .1, .36, '#EDE5D2', (X0 + X1) / 2, Y0 - .02, WZ + .16));
    const cur = (x) => { const t = canvasTex(256, 512, (g) => { for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? (o.cur1 ?? '#B0506A') : (o.cur2 ?? '#8E3A54'); g.fillRect(i * 32, 0, 32, 512); } }); const m = new THREE.Mesh(new THREE.PlaneGeometry(.8, Y1 - Y0 + .9), new THREE.MeshStandardMaterial({ map: t, roughness: 1, side: THREE.DoubleSide })); m.position.set(x, (Y0 + Y1) / 2 + .1, WZ + .3); m.castShadow = true; c.add(m); }; cur(X0 - .3); cur(X1 + .3); c.add(box(X1 - X0 + 1.6, .05, .05, '#2a1d18', (X0 + X1) / 2, Y1 + .45, WZ + .32, false));
  } else c.add(box(W * 2, Hh, .3, wm(W * 2, Hh), 0, Hh / 2, WZ));
  c.add(box(W * 2, .3, .06, '#4A2E20', 0, .15, WZ + .18)); c.add(box(W * 2, .05, .05, '#D8C8A0', 0, 1.0, WZ + .17, false));
  if (o.side !== false) { const sx = o.sideX ?? W / 2; const sw = box(.3, Hh, D + 4, wm(D + 4, Hh), sx, Hh / 2, WZ + (D + 4) / 2); c.add(sw); }
  return { WZ, W, D, Hh };
}

/** Quarto com cama, criado-mudo, celular, janela de manhã. */
export function quarto(c, o = {}) {
  const R = comodo(c, { win: [-3.4, -.6, 1.1, 3.5], wall: o.wall ?? '#4A5F86', cur1: '#E9D8B0', cur2: '#D8C49A', side: true, sideX: 4.2 });
  // cama
  const bed = new THREE.Group(); bed.add(box(2.2, .35, 2.6, '#6E4A32', 0, .25, 0)); bed.add(box(2.3, 1.3, .14, '#5C3C28', 0, .75, -1.32)); bed.add(box(2.1, .28, 2.45, std('#F4EFE4'), 0, .55, .05));
  const blanket = box(2.16, .12, 1.7, std(o.blanket ?? '#D2728A'), 0, .74, .45); bed.add(blanket); bed.add(box(2.18, .02, .3, '#F4EFE4', 0, .81, -.32, false));
  for (const x of [-.52, .52]) { const pw = box(.9, .2, .5, std('#FBF7EC'), x, .82, -.9); pw.rotation.x = -.2; bed.add(pw); }
  bed.position.set(1.0, 0, -2.6); c.add(bed);
  // criado-mudo, abajur, celular, despertador, livros
  const ns = new THREE.Group(); ns.add(box(.6, .6, .5, '#8E6242', 0, .3, 0)); ns.add(box(.5, .03, .02, '#C9A46A', 0, .4, .26, false));
  const lb = new THREE.Mesh(new THREE.CylinderGeometry(.1, .14, .25, 16), std('#36AEA2')); lb.position.set(-.12, .73, -.05); ns.add(lb); const sh = new THREE.Mesh(new THREE.CylinderGeometry(.13, .2, .2, 18, 1, true), new THREE.MeshStandardMaterial({ color: '#F6DDA4', emissive: '#FFB866', emissiveIntensity: o.lampOn ? 1.2 : .1, side: THREE.DoubleSide })); sh.position.set(-.12, .95, -.05); ns.add(sh);
  ns.add(box(.2, .05, .3, '#4A86C7', .15, .63, 0)); ns.add(box(.2, .05, .3, '#E9B44C', .15, .68, 0));
  ns.position.set(-.55, 0, -3.2); c.add(ns);
  const tel = phoneMesh(.13, .27); tel.rotation.x = -Math.PI / 2; tel.position.set(-.45, .615, -3.05); c.add(tel);
  // tapete, quadros, estante, roupa na cadeira
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(3, 2), new THREE.MeshStandardMaterial({ map: canvasTex(512, 340, (x) => { x.fillStyle = '#E2C48E'; x.fillRect(0, 0, 512, 340); x.strokeStyle = '#B2563E'; x.lineWidth = 10; x.strokeRect(20, 20, 472, 300); for (let i = 0; i < 6; i++) { x.fillStyle = '#B2563E55'; x.fillRect(60 + i * 70, 60, 30, 220); } }), roughness: 1 })); rug.rotation.x = -Math.PI / 2; rug.position.set(1, .01, -.4); rug.receiveShadow = true; c.add(rug);
  quadro(c, 1.0, 2.6, R.WZ + .2, 1.2, .8, (x, w, h) => { x.fillStyle = '#26324F'; x.fillRect(0, 0, w, h); x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(70, 60, 30, 0, 7); x.fill(); x.fillStyle = '#4A3A5E'; for (let i = 0; i < 8; i++) x.fillRect(i * 32, 100 + (i % 3) * 20, 28, 120); });
  quadro(c, 2.4, 2.3, R.WZ + .2, .5, .7, (x, w, h) => { x.fillStyle = '#F08AA0'; x.fillRect(0, 0, w, h); x.fillStyle = '#FBF7EC'; x.font = '900 70px Fraunces'; x.textAlign = 'center'; x.fillText('☺', 128, 200); });
  const shelf = new THREE.Group(); shelf.add(box(1.0, 1.8, .35, '#5C3C28', 0, .9, 0)); const Rr = rng(4); for (let s = 0; s < 3; s++) { shelf.add(box(.92, .04, .33, '#7A5238', 0, .3 + s * .55, .01)); let xx = -.4; while (xx < .38) { const w = .05 + Rr() * .06, h = .22 + Rr() * .14; shelf.add(box(w, h, .22, ['#C9564A', '#36AEA2', '#E9B44C', '#4A86C7', '#F2EDE2'][Math.floor(Rr() * 5)], xx, .32 + s * .55 + h / 2, .03)); xx += w + .01; } } shelf.position.set(3.4, 0, -3.7); c.add(shelf);
  planta(c, -3.9, -3.4, 1.1);
  const chair = new THREE.Group(); chair.add(box(.55, .06, .5, '#D9483A', 0, .5, 0)); chair.add(box(.55, .6, .06, '#D9483A', 0, .82, -.23)); for (const [x, z] of [[-.24, -.2], [.24, -.2], [-.24, .2], [.24, .2]]) chair.add(box(.04, .5, .04, '#2a2a2f', x, .25, z)); chair.add(box(.5, .3, .1, '#36AEA2', 0, .7, -.12)); chair.position.set(3.0, 0, -1.6); chair.rotation.y = -.6; c.add(chair);
  // luz da manhã entrando
  sky(c, -30, 80, 50, o.night ? [[0, '#0E1030'], [1, '#6B3A62']] : [[0, '#7FB2E0'], [.7, '#F7D9B0'], [1, '#FFE9C8']]); skyline(c, -24, 60, 18, o.night ? ['#2F2748', '#3B2F54', '#4A3A5E'] : ['#A8B4C8', '#9AA8BE', '#8E9CB4'], !!o.night, 7, -3);
  const sun = luzes(c, { night: !!o.night, pos: [-5, 6, -10], key: '#FFD9A0', ki: o.night ? .8 : 3, target: [0, 0, -1] });
  if (!o.night) { feixe(c, -2.0, 2.2, -2.2, 1.4, 4.5, -.55, '#FFE2B0', .14); feixe(c, -1.0, 2.0, -1.6, .8, 4.5, -.55, '#FFE2B0', .1); }
  return { ...R, bed, tel, ns, sun };
}

/** Celular 3D com tela pintável (desenho em canvas 540x1110). */
export function phoneMesh(w = .36, h = .74) {
  const g = new THREE.Group(); const cv = document.createElement('canvas'); cv.width = 540; cv.height = 1110; const x = cv.getContext('2d'); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  g.add(box(w, h, .03, std('#15151C', { roughness: .25, metalness: .6 }), 0, 0, 0)); const scr = new THREE.Mesh(new THREE.PlaneGeometry(w * .92, h * .95), new THREE.MeshBasicMaterial({ map: t })); scr.position.z = .017; g.add(scr);
  let last = ''; g.paint = (key, fn) => { if (key === last) return; last = key; fn(x); t.needsUpdate = true; }; g.scr = scr; return g;
}
const bgGrad = (x, a = '#2B3A72', b = '#10152C') => { const g = x.createLinearGradient(0, 0, 0, 1110); g.addColorStop(0, a); g.addColorStop(1, b); x.fillStyle = g; x.fillRect(0, 0, 540, 1110); };
export const TELA = {
  bloqueio(x, hora = '07:12', bat = 84) { bgGrad(x); x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = '700 120px Inter'; x.fillText(hora, 270, 260); x.font = '600 34px Inter'; x.fillStyle = '#C8D0E8'; x.fillText('segunda-feira', 270, 320); x.font = '600 30px Inter'; x.fillStyle = '#8E9AC0'; x.fillText('Nenhuma notificação', 270, 620); x.fillStyle = '#fff'; x.font = '700 26px Inter'; x.textAlign = 'right'; x.fillText(bat + '%', 500, 50); x.strokeStyle = '#fff'; x.lineWidth = 3; x.strokeRect(420, 30, 30, 16); x.fillRect(422, 32, 26 * bat / 100, 12); },
  grupo(x, n = 0) { x.fillStyle = '#ECE5DD'; x.fillRect(0, 0, 540, 1110); x.fillStyle = '#1F7C72'; x.fillRect(0, 0, 540, 150); x.fillStyle = '#fff'; x.font = '800 40px Inter'; x.textAlign = 'left'; x.fillText('Família ❤', 120, 92); x.font = '600 24px Inter'; x.fillText('ninguém online', 120, 128); x.beginPath(); x.arc(70, 85, 34, 0, 7); x.fillStyle = '#F2C14E'; x.fill();
    const msgs = [['Tia Cida', 'Bom dia! 🌻', '#fff'], ['Mãe', 'Vai almoçar aqui domingo?', '#fff'], ['Você', 'vou sim', '#DCF8C6']]; msgs.forEach(([a, b, k], i) => { const y = 220 + i * 150, me = a === 'Você'; x.fillStyle = k; x.beginPath(); x.roundRect(me ? 180 : 30, y, 330, 120, 18); x.fill(); x.fillStyle = '#1F7C72'; x.font = '700 24px Inter'; x.fillText(a, (me ? 200 : 50), y + 38); x.fillStyle = '#20202A'; x.font = '600 30px Inter'; x.fillText(b, (me ? 200 : 50), y + 86); });
    x.fillStyle = '#C9C2B6'; x.beginPath(); x.roundRect(150, 700, 240, 50, 25); x.fill(); x.fillStyle = '#555'; x.font = '600 24px Inter'; x.textAlign = 'center'; x.fillText('HOJE', 270, 733); x.fillStyle = '#8A8478'; x.font = '600 28px Inter'; x.fillText('...silêncio...', 270, 860); },
  bateria(x, p) { x.fillStyle = '#0B0B10'; x.fillRect(0, 0, 540, 1110); x.strokeStyle = p < .2 ? '#E9483A' : '#fff'; x.lineWidth = 12; x.strokeRect(150, 380, 220, 380); x.fillStyle = x.strokeStyle; x.fillRect(220, 350, 80, 30); x.fillRect(166, 396 + 348 * (1 - p), 188, 348 * p); x.fillStyle = '#fff'; x.font = '800 60px Inter'; x.textAlign = 'center'; x.fillText(Math.round(p * 100) + '%', 270, 880); },
  galeria(x) { x.fillStyle = '#0E0E14'; x.fillRect(0, 0, 540, 1110); x.fillStyle = '#fff'; x.font = '800 40px Inter'; x.textAlign = 'left'; x.fillText('Galeria', 30, 80); const R = rng(3); for (let i = 0; i < 9; i++) { const xx = 20 + (i % 3) * 170, yy = 120 + Math.floor(i / 3) * 170; x.fillStyle = ['#F2C14E', '#36AEA2', '#D2728A', '#4A86C7', '#E9483A', '#8EAE86'][Math.floor(R() * 6)]; x.fillRect(xx, yy, 160, 160); }
    x.fillStyle = '#fff'; x.fillRect(30, 660, 480, 400); x.fillStyle = '#20202A'; x.font = '900 46px Inter'; x.fillText('BOLETO', 60, 730); x.font = '600 26px Inter'; x.fillText('Vencimento: 10/11', 60, 790); x.fillText('Valor: R$ 289,90', 60, 840); for (let i = 0; i < 40; i++) { x.fillRect(60 + i * 10, 900, i % 3 ? 4 : 7, 110); } x.fillStyle = '#E9483A'; x.font = '800 24px Inter'; x.fillText('ÚLTIMA FOTO', 60, 1050); },
  notifs(x, n) { bgGrad(x, '#3A4A88', '#141A34'); x.fillStyle = '#fff'; x.textAlign = 'center'; x.font = '700 110px Inter'; x.fillText('07:12', 270, 200); const L = [['Família ❤', 'Bom dia!! 🌻🌻', '#F2C14E'], ['Chefe', 'Reunião às 9h', '#C9361F'], ['Banco', 'Seu boleto vence hoje', '#4A86C7'], ['Tia Cida', '[foto de flor]', '#F2C14E'], ['Mãe', 'acordou?', '#D2728A'], ['Grupo do trampo', '47 mensagens', '#36AEA2']]; for (let i = 0; i < Math.min(n, L.length); i++) { x.save(); x.translate(26, 270 + i * 136); x.fillStyle = 'rgba(245,247,250,.96)'; x.beginPath(); x.roundRect(0, 0, 488, 118, 24); x.fill(); x.fillStyle = L[i][2]; x.beginPath(); x.roundRect(16, 20, 74, 74, 18); x.fill(); x.fillStyle = '#1A1A24'; x.textAlign = 'left'; x.font = '800 30px Inter'; x.fillText(L[i][0], 108, 50); x.font = '600 28px Inter'; x.fillStyle = '#3a3a48'; x.fillText(L[i][1], 108, 92); x.restore(); } },
};

/** Rua da cidade: dia, noite ou tomada pelo mato (overgrown 0..1). */
export function cidade(c, o = {}) {
  const night = !!o.night, og = o.overgrown ?? 0;
  if (!o.noSky) { sky(c, -170, 600, 300, night ? [[0, '#0E1030'], [.55, '#2A2252'], [.85, '#6B3A62'], [1, '#B05A5E']] : (o.skyStops || [[0, '#6FA7D8'], [.55, '#BFD8EE'], [.85, '#F8DDB8'], [1, '#FFE9C8']])); skyline(c, -150, 500, 160, night ? ['#2F2748', '#3B2F54', '#4A3A5E'] : ['#A8B4C8', '#9AA8BE', '#8E9CB4'], night, 6); }
  street(c, night);
  const shops = o.shops || [{ name: 'PADARIA', bg: '#6C4A2C', fg: '#FFE7B8', awning: '#3E7A5C' }, { name: 'FARMÁCIA', bg: '#2E7A5E', fg: '#F4FFF6' }, { name: 'LUNA CAFÉ', bg: '#A85A36', fg: '#FFE3C8', awning: '#D94F58', font: 'Caveat', size: 120 }, { name: 'LIVROS', bg: '#3A4F7A', fg: '#FFF0C8', awning: '#E9B44C' }, { name: 'PIZZARIA', bg: '#8E2A22', fg: '#FFE7B8', awning: '#F4EEDF' }];
  let z = 8, i = 0; while (z > -110) { const d = 7 + (i * 37 % 5); c.add(building(100 + i + (o.seed || 0), { x: 13, z: z - d / 2, w: 8, d, floors: 4 + i % 3, side: -1, night, lit: o.lit ?? .4, shop: shops[i % shops.length] })); c.add(building(200 + i + (o.seed || 0), { x: -13, z: z - d / 2, w: 8, d, floors: 5 + i % 3, side: 1, night, lit: o.lit ?? .4, shop: shops[(i + 2) % shops.length] })); z -= d; i++; }
  const pal = og > .5 ? ['#2E4F2C', '#3B6636', '#55813F', '#A9B65A'] : undefined;
  for (let k = 0; k < 9; k++) { lamp(c, 5, 4 - k * 12, -1, night && (o.lampsOn ?? true), 5); lamp(c, -5, -2 - k * 12, 1, night && (o.lampsOn ?? true), 5); tree(c, 5.6, -2 - k * 12, 1.05 + og * 1.2, pal, k); tree(c, -5.6, -8 - k * 12, 1.05 + og * 1.2, pal, k + 3); }
  const mato = [];
  const cars = []; if (o.cars !== false) [[-2.6, -6, '#27425A', 1], [2.6, -14, '#8A2F2F', -1], [-2.6, -24, '#D7D7D2', 1], [2.6, -33, '#3E7A5C', -1], [-2.6, -45, '#E9B44C', 1]].forEach(([x, zz, col, d]) => cars.push(car(c, x, zz, col, d, night)));
  if (og > 0) { // mato nas rachaduras, trepadeiras
    const gr = canvasTex(256, 128, (x) => { x.clearRect(0, 0, 256, 128); for (let k = 0; k < 40; k++) { x.strokeStyle = ['#4F7A36', '#6E9A50', '#3E6A2C'][k % 3]; x.lineWidth = 5; x.beginPath(); const a = 10 + k * 6; x.moveTo(a, 128); x.quadraticCurveTo(a + (k % 5 - 2) * 6, 70, a + (k % 7 - 3) * 8, 20 + (k % 4) * 18); x.stroke(); } });
    const R = rng(8); const nn = Math.floor(og * 160); for (let k = 0; k < nn; k++) { const m = cut(gr, 1.2 + R() * 1.4 * og, .6 + R() * .8 * og); m.position.set((R() - .5) * 18, .3 + og * .2, 4 - R() * 70); m.rotation.y = R() * 3; c.add(m); mato.push(m); }
  }
  luzes(c, { night, pos: night ? [-14, 26, 10] : [-20, 22, 14], ki: night ? 1 : 3, r: 40 });
  return { cars, mato };
}

/** Bichos recortados: cachorro, gato, lobo, pombo, cervo, javali. */
export function bichoTex(kind, col = '#C98A4A', col2) {
  col2 = col2 || new THREE.Color(col).offsetHSL(0, 0, -.12).getStyle();
  return canvasTex(384, 288, (x) => {
    x.lineJoin = 'round'; x.lineCap = 'round';
    const leg = (a, b, w = 20, h = 90) => { x.fillStyle = col2; x.fillRect(a - w / 2, b, w, h); };
    if (kind === 'cao' || kind === 'lobo') { leg(120, 170); leg(150, 175); leg(250, 170); leg(280, 175); x.fillStyle = col; x.beginPath(); x.ellipse(200, 165, 105, 52, 0, 0, 7); x.fill(); x.strokeStyle = col; x.lineWidth = 18; x.beginPath(); x.moveTo(98, 150); x.quadraticCurveTo(60, kind === 'lobo' ? 170 : 110, 46, kind === 'lobo' ? 200 : 96); x.stroke();
      x.fillStyle = '#121218'; x.beginPath(); x.ellipse(300, 100, 58, 50, 0, 0, 7); x.fill(); x.beginPath(); x.moveTo(262, 70); x.lineTo(272, kind === 'lobo' ? 18 : 40); x.lineTo(292, 60); x.fill(); x.beginPath(); x.moveTo(318, 60); x.lineTo(336, kind === 'lobo' ? 16 : 40); x.lineTo(344, 72); x.fill(); x.beginPath(); x.ellipse(350, 118, 28, 18, 0, 0, 7); x.fill();
      x.fillStyle = kind === 'lobo' ? '#F2D25A' : '#F6EFE6'; x.beginPath(); x.ellipse(290, 96, 9, 13, 0, 0, 7); x.ellipse(318, 96, 9, 13, 0, 0, 7); x.fill(); if (kind === 'cao') { x.fillStyle = '#D9483A'; x.fillRect(250, 136, 40, 12); } }
    else if (kind === 'gato') { x.fillStyle = col; x.beginPath(); x.ellipse(190, 200, 90, 60, 0, 0, 7); x.fill(); x.strokeStyle = col; x.lineWidth = 16; x.beginPath(); x.moveTo(110, 220); x.quadraticCurveTo(40, 230, 60, 150); x.stroke(); x.fillStyle = '#121218'; x.beginPath(); x.arc(250, 130, 52, 0, 7); x.fill(); x.beginPath(); x.moveTo(210, 100); x.lineTo(214, 50); x.lineTo(244, 84); x.fill(); x.beginPath(); x.moveTo(286, 100); x.lineTo(290, 50); x.lineTo(258, 84); x.fill(); x.fillStyle = '#9BE07A'; x.beginPath(); x.ellipse(232, 128, 8, 4, 0, 0, 7); x.ellipse(270, 128, 8, 4, 0, 0, 7); x.fill(); }
    else if (kind === 'pombo') { x.fillStyle = '#8E95A6'; x.beginPath(); x.ellipse(190, 190, 90, 56, -.2, 0, 7); x.fill(); x.fillStyle = '#6E7486'; x.beginPath(); x.ellipse(160, 180, 60, 30, -.3, 0, 7); x.fill(); x.fillStyle = '#121218'; x.beginPath(); x.arc(270, 130, 36, 0, 7); x.fill(); x.fillStyle = '#E9A43C'; x.beginPath(); x.moveTo(300, 130); x.lineTo(330, 140); x.lineTo(300, 146); x.fill(); x.fillStyle = '#F6EFE6'; x.beginPath(); x.ellipse(278, 124, 7, 10, 0, 0, 7); x.fill(); x.fillStyle = '#E9733C'; x.fillRect(180, 240, 8, 40); x.fillRect(210, 240, 8, 40); }
    else if (kind === 'cervo') { leg(140, 150, 16, 120); leg(170, 155, 16, 115); leg(260, 150, 16, 120); leg(290, 155, 16, 115); x.fillStyle = col; x.beginPath(); x.ellipse(215, 145, 100, 46, 0, 0, 7); x.fill(); x.lineWidth = 30; x.strokeStyle = col; x.beginPath(); x.moveTo(290, 130); x.lineTo(320, 70); x.stroke(); x.fillStyle = '#121218'; x.beginPath(); x.ellipse(330, 60, 40, 32, 0, 0, 7); x.fill(); x.strokeStyle = '#E8D8B0'; x.lineWidth = 6; x.beginPath(); x.moveTo(318, 32); x.lineTo(300, 0); x.moveTo(306, 16); x.lineTo(290, 14); x.moveTo(342, 32); x.lineTo(360, 0); x.moveTo(354, 16); x.lineTo(372, 12); x.stroke(); x.fillStyle = '#F6EFE6'; x.beginPath(); x.ellipse(336, 56, 7, 10, 0, 0, 7); x.fill(); }
    else if (kind === 'javali') { leg(130, 190, 22, 70); leg(160, 195, 22, 66); leg(250, 190, 22, 70); leg(280, 195, 22, 66); x.fillStyle = col; x.beginPath(); x.ellipse(205, 180, 110, 60, 0, 0, 7); x.fill(); x.fillStyle = '#121218'; x.beginPath(); x.ellipse(310, 170, 54, 46, 0, 0, 7); x.fill(); x.fillStyle = '#F6EFE6'; x.beginPath(); x.moveTo(340, 190); x.lineTo(356, 160); x.lineTo(348, 194); x.fill(); x.beginPath(); x.ellipse(306, 158, 7, 10, 0, 0, 7); x.fill(); }
  });
}
/** Recorte de bicho sempre virado para a câmera, com sombrinha. */
export function bicho(c, kind, x, z, w = 1, col, col2) { const m = cut(bichoTex(kind, col, col2), w, w * .75, { shadow: true }); m.position.set(x, w * .375 - .02, z); c.add(m); const b = softBlob(w * .9, w * .35, .45); b.position.set(x, .015, z); c.add(b); m.blob = b; return m; }
