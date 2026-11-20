// Capítulo 7 (o mundo sem nós) e final: 327.65 a 408.9 s.
import * as THREE from 'three';
import { smooth, rng, lerp, clamp } from './motor/core.js';
import { canvasTex, makeChar } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, sky, skyline, pointer, tree, lamp, car } from './motor/kit.js';
import { stars, nebula, crowd, smoke } from './motor/kit2.js';
import { mk, cam, hero, pessoa, luzes, feixe, poeira, quadro, letreiro, planta, comodo, quarto, cidade, bicho, phoneMesh, TELA } from './lib.js';
import { earth, fachada, rock } from './extra.js';

const PAL = ['#2E4F2C', '#3B6636', '#55813F', '#A9B65A'];

/** 45. Em poucos anos, o mato rompe o asfalto — 327.65 a 334.65 */
export function sMato(t0, t1) {
  return mk(t0, t1, { bg: '#BFD8EE', fog: ['#D8E6E0', .012], fov: 34 }, (c) => {
    const Cd = cidade(c, { seed: 81, overgrown: .8, cars: true });
    const sol = c.children.find(o => o.isDirectionalLight);
    return (t, u, C) => {
      const g = smooth(.5, 6.5, u); Cd.mato.forEach((m, i) => { m.scale.set(.2 + g * .9, .1 + g * (.9 + (i % 5) * .15), 1); });
      if (sol) { const a = u * 2.2; sol.position.set(Math.cos(a) * 30, 15 + Math.sin(a) * 15, 10); sol.intensity = 2 + Math.sin(a) * 1; }
      cam(C, [[0, [0, .6, 3]], [7, [.5, 1.4, -1]]], [[0, [0, .4, -10]], [7, [0, .9, -14]]], u);
      return { focus: 6, range: 5, blur: 10, bloom: .25, bloomT: .95, vig: .42 };
    };
  });
}

/** 46. Em décadas, casas desabam e árvores crescem dentro dos prédios — 334.65 a 339.65 */
export function sDecadas(t0, t1) {
  return mk(t0, t1, { bg: '#A8C0B8', fog: ['#C0D0C8', .014], fov: 36, far: 900 }, (c) => {
    sky(c, -200, 900, 400, [[0, '#6A8AA8'], [.6, '#B8D0C8'], [1, '#E8E8D0']]);
    const gr = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), std('#5E7A44')); gr.rotation.x = -Math.PI / 2; gr.receiveShadow = true; c.add(gr);
    const F = fachada(c, { cols: 5, rows: 5, col: '#7A4A3A', seed: 9, lit: 0 }); F.g.position.set(0, 0, -10); F.g.rotation.z = .03;
    // árvores saindo das janelas e do telhado, trepadeiras
    for (const s of F.slots) if ((s.r + s.k) % 2 === 0) tree(c, s.x * .99, -9.4, .7 + (s.r % 3) * .15, PAL, s.r + s.k).position.y = s.y - 1.2;
    tree(c, -3, -10, 2.6, PAL, 3).position.y = F.H - 2; tree(c, 4, -10, 2.2, PAL, 4).position.y = F.H - 2;
    const vT = canvasTex(128, 512, (x) => { x.clearRect(0, 0, 128, 512); for (let i = 0; i < 80; i++) { x.fillStyle = ['#3E6A2C', '#4F7A36', '#6E9A50'][i % 3]; x.beginPath(); x.ellipse(64 + Math.sin(i) * 40, i * 6.4, 18, 10, i, 0, 7); x.fill(); } });
    for (let i = 0; i < 6; i++) { const v = cut(vT, 1.2, 8); v.position.set(-6 + i * 2.4, 4, -9.5); c.add(v); }
    // casinhas de madeira caindo
    const casas = []; for (const [x, z] of [[-12, -4], [11, -3]]) { const g = new THREE.Group(); g.add(box(4, 3, 4, std('#9A7A5A'), 0, 1.5, 0)); const tel = new THREE.Mesh(new THREE.ConeGeometry(3.4, 1.8, 4), std('#6A4A3A')); tel.rotation.y = .78; tel.position.y = 3.9; g.add(tel); g.position.set(x, 0, z); c.add(g); casas.push(g); }
    for (let k = 0; k < 10; k++) tree(c, (k % 2 ? 1 : -1) * (8 + (k * 7) % 16), 2 - k * 3, 1.8 + (k % 3) * .5, PAL, k);
    luzes(c, { ki: 2.6, pos: [-20, 30, 20], r: 40 });
    return (t, u, C) => {
      casas.forEach((g, i) => { const f = smooth(1 + i, 2.5 + i, u); g.rotation.z = (i ? -1 : 1) * f * .5; g.position.y = -f * 1.2; });
      cam(C, [[0, [0, 2, 16]], [5, [1, 4, 10]]], [[0, [0, 6, -10]], [5, [0, 8, -10]]], u);
      return { focus: 20, range: 12, blur: 8, bloom: .2, bloomT: 1, vig: .42 };
    };
  });
}

/** 47. Em séculos, florestas com esqueletos de concreto; plástico e vidro ficam — 339.65 a 347.85 */
export function sSeculos(t0, t1) {
  return mk(t0, t1, { bg: '#9ABAA8', fog: ['#A8C8B0', .018], fov: 36, far: 900 }, (c) => {
    sky(c, -200, 900, 400, [[0, '#5A8AA8'], [.6, '#A8C8B8'], [1, '#E0E8C8']]);
    const gr = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), std('#4E6A36')); gr.rotation.x = -Math.PI / 2; gr.receiveShadow = true; c.add(gr);
    const conc = std('#8A8A84'); [[-14, -40, 40], [8, -50, 60], [24, -36, 34], [-30, -60, 50]].forEach(([x, z, h]) => { const g = new THREE.Group(); for (let y = 0; y <= h; y += 4) g.add(box(8, .4, 8, conc, 0, y, 0)); for (const [a, b] of [[-3.8, -3.8], [3.8, -3.8], [-3.8, 3.8], [3.8, 3.8]]) g.add(box(.5, h, .5, conc, a, h / 2, b)); g.position.set(x, 0, z); g.rotation.z = (x % 3) * .02; c.add(g); });
    const R = rng(4); for (let k = 0; k < 40; k++) tree(c, (R() - .5) * 60, 4 - R() * 60, 2 + R() * 2.5, PAL, k);
    // garrafa de plástico e de vidro no chão, em close no fim
    const pet = new THREE.Mesh(new THREE.CylinderGeometry(.06, .07, .3, 16), new THREE.MeshStandardMaterial({ color: '#9FD8FF', transparent: true, opacity: .55, roughness: .1 })); pet.rotation.z = Math.PI / 2; pet.position.set(.2, .07, 3); c.add(pet); const tampa = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, .04, 10), std('#2A6AE8')); tampa.rotation.z = Math.PI / 2; tampa.position.set(.37, .07, 3); c.add(tampa);
    const vid = new THREE.Mesh(new THREE.CylinderGeometry(.05, .07, .32, 16), new THREE.MeshStandardMaterial({ color: '#4A9A5A', transparent: true, opacity: .7, roughness: .05, metalness: .2 })); vid.rotation.set(Math.PI / 2, 0, .4); vid.position.set(-.25, .07, 3.1); c.add(vid);
    const folhas = cut(canvasTex(256, 128, (x) => { x.clearRect(0, 0, 256, 128); for (let i = 0; i < 40; i++) { x.strokeStyle = ['#4F7A36', '#6E9A50'][i % 2]; x.lineWidth = 5; x.beginPath(); x.moveTo(i * 6, 128); x.lineTo(i * 6 + (i % 5 - 2) * 4, 40 + (i % 4) * 16); x.stroke(); } }), 1.4, .5); folhas.position.set(0, .2, 2.8); c.add(folhas);
    luzes(c, { ki: 2.4, pos: [-20, 30, 20], r: 60 }); feixe(c, -4, 10, -10, 4, 30, -.3, '#FFF2C8', .1);
    const pas = []; const pt = canvasTex(64, 32, (x) => { x.fillStyle = '#2A2A34'; x.beginPath(); x.moveTo(0, 16); x.quadraticCurveTo(16, 0, 32, 14); x.quadraticCurveTo(48, 0, 64, 16); x.quadraticCurveTo(32, 10, 0, 16); x.fill(); }); for (let i = 0; i < 12; i++) { const m = cut(pt, .8, .4); c.add(m); pas.push({ m, p: R() * 6, x: (R() - .5) * 30, y: 18 + R() * 10 }); }
    return (t, u, C) => {
      for (const q of pas) { q.m.position.set(q.x + u * 2, q.y + Math.sin(u * 2 + q.p), -30); q.m.scale.y = .6 + Math.abs(Math.sin(u * 8 + q.p)) * .6; pointer(q.m, C); }
      cam(C, [[0, [0, 30, 30]], [4.4, [0, 8, 14]], [8.2, [0, .35, 4.0]]], [[0, [0, 10, -40]], [4.4, [0, 6, -20]], [8.2, [0, .1, 3]]], u);
      const close = smooth(4.4, 7.5, u); return { focus: lerp(40, 1.0, close), range: lerp(40, .5, close), blur: 10, bloom: .25, bloomT: .95, vig: .42 };
    };
  });
}

/** 48. As pegadas da Apollo na Lua: milhões de anos — 347.85 a 359.24 */
export function sLua(t0, t1) {
  return mk(t0, t1, { bg: '#020206', fov: 34, far: 2400 }, (c) => {
    stars(c, 6000, 900, 33);
    const lt = canvasTex(1024, 1024, (x) => { x.fillStyle = '#9A9A9E'; x.fillRect(0, 0, 1024, 1024); const R = rng(3); for (let i = 0; i < 12000; i++) { x.fillStyle = `rgba(${R() < .5 ? '255,255,255' : '0,0,0'},.06)`; x.fillRect(R() * 1024, R() * 1024, 3, 3); } for (let i = 0; i < 40; i++) { const a = R() * 1024, b = R() * 1024, r = 10 + R() * 50; x.strokeStyle = 'rgba(60,60,64,.5)'; x.lineWidth = 4; x.beginPath(); x.arc(a, b, r, 0, 7); x.stroke(); x.fillStyle = 'rgba(70,70,74,.35)'; x.fill(); } }); lt.wrapS = lt.wrapT = THREE.RepeatWrapping; lt.repeat.set(10, 10);
    const chao = new THREE.Mesh(new THREE.PlaneGeometry(200, 200, 60, 60), new THREE.MeshStandardMaterial({ map: lt, roughness: 1 })); chao.rotation.x = -Math.PI / 2; const pa = chao.geometry.attributes.position; for (let i = 0; i < pa.count; i++) { const x = pa.getX(i), y = pa.getY(i); pa.setZ(i, Math.sin(x * .1) * .4 + Math.cos(y * .13) * .5); } chao.geometry.computeVertexNormals(); chao.receiveShadow = true; c.add(chao);
    // pegadas em trilha
    const pT = canvasTex(64, 128, (x) => { x.clearRect(0, 0, 64, 128); x.fillStyle = 'rgba(40,40,44,.75)'; x.beginPath(); x.roundRect(8, 8, 48, 112, 20); x.fill(); x.strokeStyle = 'rgba(160,160,164,.6)'; x.lineWidth = 3; for (let i = 0; i < 9; i++) { x.beginPath(); x.moveTo(12, 20 + i * 11); x.lineTo(52, 20 + i * 11); x.stroke(); } });
    for (let i = 0; i < 26; i++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(.16, .32), new THREE.MeshBasicMaterial({ map: pT, transparent: true, depthWrite: false })); m.rotation.x = -Math.PI / 2; m.rotation.z = .3; m.position.set(-1.5 + i * .25 + (i % 2) * .12, .62 + Math.sin((-1.5 + i * .25) * .1) * .4 * 0, 2 - i * .35); m.position.y = Math.sin(m.position.x * .1) * .4 + Math.cos(-m.position.z * .13) * .5 + .01; c.add(m); }
    // bandeira, base do módulo lunar
    c.add(box(.03, 2, .03, '#D8D8DC', 2.6, 1.4, -6)); const band = new THREE.Mesh(new THREE.PlaneGeometry(1.2, .7), new THREE.MeshStandardMaterial({ map: canvasTex(240, 140, (x) => { x.fillStyle = '#F4F4F0'; x.fillRect(0, 0, 240, 140); for (let i = 0; i < 7; i++) { x.fillStyle = '#C9201A'; x.fillRect(0, i * 20, 240, 10); } x.fillStyle = '#1F3A8A'; x.fillRect(0, 0, 100, 70); }), side: THREE.DoubleSide })); band.position.set(3.2, 2.0, -6); c.add(band);
    const lm = new THREE.Group(); lm.add(box(1.8, .8, 1.8, std('#C9A04A', { metalness: .8, roughness: .3 }), 0, 1.1, 0)); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const p = box(.08, 1.4, .08, std('#B8B8BC'), a * .9, .6, b * .9); p.rotation.z = a * .3; p.rotation.x = -b * .3; lm.add(p); lm.add(box(.3, .04, .3, std('#B8B8BC'), a * 1.1, .02, b * 1.1)); } lm.position.set(-3, .4, -9); c.add(lm);
    const E = earth(c, 6); E.position.set(-30, 26, -120);
    const sun = new THREE.DirectionalLight('#FFFFFF', 3.6); sun.position.set(20, 10, 10); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -20, right: 20, top: 20, bottom: -20, far: 80 }); c.add(sun); c.add(new THREE.AmbientLight('#20202A', .4));
    return (t, u, C) => {
      E.rotation.y = u * .03;
      cam(C, [[0, [-.6, 1.4, 4.4]], [6, [-.2, 1.0, 3.2]], [11.4, [1, 3, 8]]], [[0, [0, .4, -1]], [6, [.4, .5, -2]], [11.4, [-8, 12, -60]]], u);
      return { focus: lerp(3.5, 40, smooth(6, 10, u)), range: lerp(3, 60, smooth(6, 10, u)), blur: 8, bloom: .35, bloomT: .85, vig: .5 };
    };
  });
}

/** 49. Os primeiros sinais de rádio viajando há mais de 100 anos — 359.24 a 371.55 */
export function sRadio(t0, t1) {
  return mk(t0, t1, { bg: '#02030A', fov: 36, far: 2400 }, (c) => {
    stars(c, 6000, 900, 41); nebula(c, -200, 60, -600, 900, '#7E6BFF', 3, .08); nebula(c, 250, -60, -600, 700, '#FF6FB0', 9, .05);
    const sun = new THREE.DirectionalLight('#FFF4E0', 3.4); sun.position.set(-20, 10, 20); c.add(sun); c.add(new THREE.AmbientLight('#2A3550', .5));
    const E = earth(c, 1.6);
    const ringT = canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.strokeStyle = '#8FF0E0'; x.lineWidth = 3; x.shadowColor = '#8FF0E0'; x.shadowBlur = 10; x.beginPath(); x.arc(128, 128, 120, 0, 7); x.stroke(); });
    const rings = []; for (let i = 0; i < 9; i++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: ringT, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })); c.add(m); rings.push(m); }
    const icone = (draw) => cut(canvasTex(160, 160, (x) => { x.fillStyle = '#10162Bdd'; x.beginPath(); x.roundRect(6, 6, 148, 148, 26); x.fill(); x.strokeStyle = '#8FF0E0'; x.lineWidth = 4; x.stroke(); draw(x); }), .9, .9, { blend: true });
    const icons = [icone((x) => { x.fillStyle = '#F4EFE4'; x.fillRect(30, 40, 100, 70); x.fillStyle = '#F08AA0'; x.fillRect(38, 48, 84, 54); x.fillRect(60, 112, 40, 10); }), icone((x) => { x.fillStyle = '#F4EFE4'; x.beginPath(); x.arc(80, 80, 40, 0, 7); x.fill(); x.fillStyle = '#1A1A22'; for (const [a, b] of [[80, 60], [60, 90], [100, 90]]) { x.beginPath(); x.arc(a, b, 10, 0, 7); x.fill(); } }), icone((x) => { x.fillStyle = '#F2C14E'; x.fillRect(36, 60, 88, 50); x.fillStyle = '#FFF6D8'; x.fillRect(36, 54, 88, 12); x.fillStyle = '#C9361F'; x.font = '900 18px Inter'; x.textAlign = 'center'; x.fillText('MARGARINA', 80, 92); }), icone((x) => { x.fillStyle = '#C9361F'; x.fillRect(40, 70, 80, 50); x.fillStyle = '#F4EFE4'; x.beginPath(); x.arc(64, 95, 14, 0, 7); x.fill(); x.fillRect(92, 84, 18, 24); x.strokeStyle = '#F4EFE4'; x.beginPath(); x.moveTo(60, 70); x.lineTo(100, 40); x.stroke(); })];
    icons.forEach(i => c.add(i));
    return (t, u, C) => {
      E.rotation.y = u * .1;
      rings.forEach((m, i) => { const k = ((u * .18 + i / rings.length) % 1); m.scale.setScalar(2 + k * 40); m.material.opacity = (1 - k) * .8; pointer(m, C); m.lookAt(C.position); });
      icons.forEach((m, i) => { const k = ((u * .07 + i * .25) % 1); const a = i * 1.6 + .4; m.position.set(Math.cos(a) * (2 + k * 14), Math.sin(a) * (1.5 + k * 8), -k * 4); m.material.opacity = 1 - smooth(.8, 1, k); pointer(m, C); });
      cam(C, [[0, [0, 1, 7]], [12.3, [3, 4, 26]]], [[0, [0, 0, 0]], [12.3, [0, 0, 0]]], u);
      return { focus: C.position.length(), range: 30, blur: 4, bloom: .55, bloomT: .75, vig: .5 };
    };
  });
}

/** Alienígena recortado. */
const alienTex = () => canvasTex(400, 560, (x) => { x.translate(200, 0); x.fillStyle = '#5A3A8A'; x.beginPath(); x.roundRect(-110, 300, 220, 260, 50); x.fill(); x.fillStyle = '#8EE07A'; x.beginPath(); x.ellipse(0, 180, 130, 120, 0, 0, 7); x.fill(); x.strokeStyle = '#8EE07A'; x.lineWidth = 12; for (const s of [-1, 1]) { x.beginPath(); x.moveTo(s * 50, 80); x.lineTo(s * 90, 10); x.stroke(); x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(s * 90, 10, 16, 0, 7); x.fill(); } x.fillStyle = '#121218'; for (const [a, r] of [[-55, 30], [0, 38], [55, 30]]) { x.beginPath(); x.ellipse(a, 170, r * .8, r, 0, 0, 7); x.fill(); } x.fillStyle = '#F6EFE6'; for (const [a, r] of [[-55, 30], [0, 38], [55, 30]]) { x.beginPath(); x.ellipse(a + 6, 160, r * .25, r * .35, 0, 0, 7); x.fill(); } x.strokeStyle = '#3E7A36'; x.lineWidth = 6; x.beginPath(); x.arc(0, 240, 30, .2, Math.PI - .2); x.stroke(); });
/** 50. O alienígena conhece a humanidade pelo comercial de margarina — 371.55 a 376.84 */
export function sAlien(t0, t1) {
  return mk(t0, t1, { bg: '#0A0818', fog: ['#120E24', .02], fov: 34 }, (c) => {
    const fl = new THREE.Mesh(new THREE.CircleGeometry(8, 48), std('#2A2440', { metalness: .5, roughness: .3 })); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; c.add(fl);
    const parede = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 6, 48, 1, true), std('#1E1A34', { side: THREE.BackSide, metalness: .4 })); parede.position.y = 3; c.add(parede);
    for (let i = 0; i < 24; i++) { const a = i / 24 * 6.283; const l = new THREE.Mesh(new THREE.SphereGeometry(.06, 8, 6), new THREE.MeshStandardMaterial({ emissive: ['#8FF0E0', '#F2C14E', '#F08AA0'][i % 3], emissiveIntensity: 4 })); l.position.set(Math.cos(a) * 7.8, 1.5 + (i % 3) * .5, Math.sin(a) * 7.8); c.add(l); }
    // janela redonda com a Terra lá fora
    const jan = new THREE.Mesh(new THREE.CircleGeometry(1.6, 40), new THREE.MeshBasicMaterial({ map: canvasTex(256, 256, (x) => { x.fillStyle = '#02030A'; x.fillRect(0, 0, 256, 256); for (let i = 0; i < 80; i++) { x.fillStyle = '#fff'; x.fillRect((i * 97) % 256, (i * 57) % 256, 2, 2); } x.fillStyle = '#2E64B0'; x.beginPath(); x.arc(170, 170, 50, 0, 7); x.fill(); x.fillStyle = '#5E9A58'; x.beginPath(); x.ellipse(160, 160, 20, 14, .4, 0, 7); x.fill(); }) })); jan.position.set(-3.6, 3, -6.6); jan.rotation.y = .5; c.add(jan);
    // telão com o comercial de margarina
    const tc = document.createElement('canvas'); tc.width = 800; tc.height = 450; const tx = tc.getContext('2d'); const tT = new THREE.CanvasTexture(tc); tT.colorSpace = THREE.SRGBColorSpace;
    const paint = (k) => { const g = tx.createLinearGradient(0, 0, 0, 450); g.addColorStop(0, '#FFE8A8'); g.addColorStop(1, '#F8C870'); tx.fillStyle = g; tx.fillRect(0, 0, 800, 450); tx.fillStyle = '#FFF6D0'; tx.beginPath(); tx.arc(650, 90, 60, 0, 7); tx.fill(); tx.fillStyle = '#8E6242'; tx.fillRect(0, 330, 800, 120); for (const [x0, col, h] of [[180, '#36AEA2', 1], [300, '#F08AA0', .9], [410, '#F2C14E', .6]]) { tx.fillStyle = col; tx.beginPath(); tx.roundRect(x0 - 40, 330 - 150 * h, 80, 150 * h, 20); tx.fill(); tx.fillStyle = '#121218'; tx.beginPath(); tx.arc(x0, 330 - 150 * h - 40, 40, 0, 7); tx.fill(); tx.strokeStyle = '#F6EFE6'; tx.lineWidth = 6; for (const s of [-1, 1]) { tx.beginPath(); tx.arc(x0 + s * 14, 330 - 150 * h - 42, 8, Math.PI, 0); tx.stroke(); } } tx.fillStyle = '#F2C14E'; tx.fillRect(560, 250, 160, 80); tx.fillStyle = '#FFF6D8'; tx.fillRect(560, 240, 160, 18); tx.fillStyle = '#C9361F'; tx.font = '900 28px Inter'; tx.textAlign = 'center'; tx.fillText('MARGARINA', 640, 300); tx.fillStyle = '#ffffffcc'; tx.font = '900 40px Fraunces'; tx.fillText('★ '.repeat(1 + (k % 3)), 400, 60); tT.needsUpdate = true; };
    const tela = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 2.7), new THREE.MeshStandardMaterial({ map: tT, emissiveMap: tT, emissive: '#fff', emissiveIntensity: .95 })); tela.position.set(1, 2.4, -6); tela.rotation.y = -.15; c.add(tela); const tl = new THREE.PointLight('#FFD890', 14, 10); tl.position.set(1, 2.4, -4.4); c.add(tl);
    const al = cut(alienTex(), 1.4, 1.96, { shadow: true }); al.position.set(-.4, .98, -1.2); c.add(al); const sh = softBlob(1.2, .5, .5); sh.position.set(-.4, .02, -1.2); c.add(sh);
    const pip = new THREE.Mesh(new THREE.SphereGeometry(.18, 16, 10, 0, 6.3, 1.57, 1.57), std('#8E6FB8')); pip.position.set(.5, .5, -1); c.add(pip);
    c.add(new THREE.HemisphereLight('#6A5AA8', '#101010', .6));
    let lk = -1;
    return (t, u, C) => {
      const k = Math.floor(u * 2); if (k !== lk) { paint(k); lk = k; }
      al.position.y = .98 + Math.abs(Math.sin(u * 3)) * .03; pointer(al, C);
      cam(C, [[0, [-2.4, 1.6, 2.4]], [5.3, [-1.4, 1.5, 1.4]]], [[0, [.6, 2, -6]], [5.3, [-.2, 1.5, -2]]], u);
      return { focus: C.position.distanceTo(u < 2.5 ? tela.position : al.position), range: 3, blur: 10, bloom: .45, bloomT: .82, vig: .5 };
    };
  });
}

/** 51. Boa notícia: nada disso vai acontecer — você acorda de novo — 376.84 a 382.55 */
export function sAcordaDeNovo(t0, t1) {
  return mk(t0, t1, { bg: '#F2D9B0', fog: ['#E8D2B0', .02], fov: 32 }, (c) => {
    const Q = quarto(c); const h = hero(c, 1.0, -2.3, -.12, .3); h.tint('#FFF2E2');
    const pz = poeira(c, 80, [-3, 1, .5, 3.5, -3.5, -.5]);
    return (t, u, C) => {
      pz(u); const vib = Math.sin(u * 90) * .006; Q.tel.paint('n' + Math.min(6, Math.floor(u * 1.6)), (x) => TELA.notifs(x, Math.min(6, Math.floor(u * 1.6)))); Q.tel.position.x = -.45 + vib; Q.tel.rotation.z = vib * 3;
      cam(C, [[0, [1.5, 1.5, 1.2]], [5.7, [2.4, 1.7, 3.4]]], [[0, [.9, 1.3, -2.3]], [5.7, [.6, 1.2, -2.6]]], u);
      h.face(C); const up = smooth(.6, 1.2, u); h.pose({ armL: [lerp(10, 150, up * (1 - smooth(3, 3.5, u))), 20], armR: [lerp(10, 150, up * (1 - smooth(3, 3.5, u))), 20], head: 0 }); h.eye(u < .5 ? 'shut' : u < 3 ? 'wide' : 'happy');
      return { focus: C.position.distanceTo(h.root.position), range: 2.2, blur: 13, bloom: .3, bloomT: .9, vig: .4, exposure: 1.05 };
    };
  });
}

/** 52. O chefe, o aluguel, e o bom dia com foto de flor — 382.55 a 390.82 */
export function sNotificacoes(t0, t1) {
  return mk(t0, t1, { bg: '#F2D9B0', fog: ['#E8D2B0', .02], fov: 30 }, (c) => {
    quarto(c); const tel = phoneMesh(.36, .74); c.add(tel); tel.position.set(.4, 1.4, -.6); tel.rotation.set(-.12, -.15, 0);
    const flor = cut(canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.fillStyle = '#F2C14E'; for (let i = 0; i < 10; i++) { x.save(); x.translate(128, 128); x.rotate(i * .628); x.beginPath(); x.ellipse(0, -60, 22, 50, 0, 0, 7); x.fill(); x.restore(); } x.fillStyle = '#8E5A2A'; x.beginPath(); x.arc(128, 128, 38, 0, 7); x.fill(); }), .3, .3, { blend: true }); c.add(flor);
    return (t, u, C) => {
      const n = Math.min(6, 1 + Math.floor(u * .9)); tel.paint('n' + n, (x) => TELA.notifs(x, n)); tel.position.x = .4 + Math.sin(u * 90) * (u % 1.4 < .3 ? .004 : 0);
      flor.visible = u > 3; const fk = smooth(3, 3.4, u); flor.scale.setScalar(fk); flor.position.set(.62, 1.62, -.5); flor.rotation.z = u;
      cam(C, [[0, [.5, 1.45, 1.0]], [8.3, [.42, 1.42, .7]]], [[0, [.4, 1.38, -.6]], [8.3, [.4, 1.38, -.6]]], u);
      return { focus: C.position.distanceTo(tel.position), range: 1.6, blur: 12, bloom: .2, bloomT: .95, vig: .45 };
    };
  });
}

/** 53. O mundo sem ninguém é silencioso demais: a rua cheia de gente — 390.82 a 397.35 */
export function sRuaCheia(t0, t1) {
  return mk(t0, t1, { bg: '#BFD8EE', fog: ['#E8E0D8', .01], fov: 34 }, (c) => {
    cidade(c, { seed: 3 }); const R = rng(4), sp = []; for (let i = 0; i < 260; i++) { const sd = R() < .5 ? -1 : 1; sp.push([sd * (5.2 + R() * 2.6), 2 - R() * 60, .14, R() < .5 ? 0 : Math.PI]); } crowd(c, sp, { raised: .1, jump: .04, seed: 3 });
    const walkers = [['rosa', 'long', '#6B3A22', 5.6, -6], ['azul', 'bob', '#D9B65A', 6.4, -9], ['terno2', null, null, 5.2, -12], ['amarelo', 'afro', '#2a1b18', 6.8, -4], ['laranja', null, null, 4.9, -2]].map(([o, hh, hc, x, z], i) => { const k = pessoa(c, o, hh, hc, x, z, .14); k.ph = i; return k; });
    const h = hero(c, 6.1, -1.0, .14, .35); h.tint('#FFF6EA');
    return (t, u, C) => {
      walkers.forEach((k, i) => { k.root.position.z = -12 + ((u * 1.1 + i * 2.5) % 12); k.walk(u + i, 1, .8); k.face(C); k.eye('look'); });
      cam(C, [[0, [4.8, 1.5, 2.2]], [6.5, [3.2, 2.2, 5.6]]], [[0, [6.1, 1.5, -1]], [6.5, [6, 1.6, -4]]], u);
      h.face(C); h.pose({ armL: [10, 6], armR: [10, 6], head: Math.sin(u) * 3 }); h.eye(u < 2 ? 'look' : 'happy');
      return { focus: C.position.distanceTo(h.root.position), range: 3.5, blur: 10, bloom: .25, bloomT: .95, vig: .4 };
    };
  });
}

/** 54. Comenta aqui embaixo, se inscreve e ativa o sininho — 397.35 a 403.85 */
export function sCTA(t0, t1) {
  return mk(t0, t1, { bg: '#1A1638', fog: ['#1A1638', .02], fov: 34 }, (c) => {
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), std('#2A2450', { roughness: .4, metalness: .2 })); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; c.add(fl); stars(c, 1500, 200, 3); nebula(c, 0, 10, -60, 120, '#C78BFF', 4, .12);
    const btnC = document.createElement('canvas'); btnC.width = 800; btnC.height = 200; const bx = btnC.getContext('2d'); const bT = new THREE.CanvasTexture(btnC); bT.colorSpace = THREE.SRGBColorSpace;
    const paint = (on) => { bx.clearRect(0, 0, 800, 200); bx.fillStyle = on ? '#4A4A58' : '#E9483A'; bx.beginPath(); bx.roundRect(10, 10, 780, 180, 90); bx.fill(); bx.fillStyle = '#fff'; bx.font = '900 84px Inter'; bx.textAlign = 'center'; bx.textBaseline = 'middle'; bx.fillText(on ? 'INSCRITO ✓' : 'INSCREVER-SE', 400, 104); bT.needsUpdate = true; };
    const btn = new THREE.Mesh(new THREE.PlaneGeometry(3.6, .9), new THREE.MeshStandardMaterial({ map: bT, emissiveMap: bT, emissive: '#fff', emissiveIntensity: .7, transparent: true })); btn.position.set(-.8, 2.4, -2); c.add(btn);
    const sino = cut(canvasTex(200, 200, (x) => { x.fillStyle = '#F2C14E'; x.beginPath(); x.moveTo(100, 30); x.quadraticCurveTo(160, 40, 160, 120); x.lineTo(176, 150); x.lineTo(24, 150); x.lineTo(40, 120); x.quadraticCurveTo(40, 40, 100, 30); x.fill(); x.beginPath(); x.arc(100, 168, 18, 0, 7); x.fill(); x.beginPath(); x.arc(100, 24, 10, 0, 7); x.fill(); }), .8, .8); sino.position.set(1.6, 2.4, -2); c.add(sino); const sg = glowSprite('#FFE08A', 1.6, 0); sg.position.set(1.6, 2.4, -2.05); c.add(sg);
    const bal = cut(canvasTex(320, 200, (x) => { x.fillStyle = '#FBF7EC'; x.beginPath(); x.roundRect(10, 10, 300, 140, 40); x.fill(); x.beginPath(); x.moveTo(110, 148); x.lineTo(120, 196); x.lineTo(160, 148); x.fill(); x.fillStyle = '#20202A'; for (let i = 0; i < 3; i++) { x.beginPath(); x.arc(110 + i * 50, 82, 14, 0, 7); x.fill(); } }), .9, .56); c.add(bal);
    const h = hero(c, 0, -.6, 0, .4); h.tint('#FFF6EA');
    const L = new THREE.SpotLight('#FFE8C8', 60, 12, .6, .5, 1.4); L.position.set(0, 5, 3); L.target.position.set(0, 1, -1); L.castShadow = true; c.add(L, L.target); c.add(new THREE.HemisphereLight('#8A7AC8', '#101018', .7));
    let lo = -1;
    return (t, u, C) => {
      const on = u > 4.4 ? 1 : 0; if (on !== lo) { paint(on); lo = on; } const pop = 1 + (u > 4.3 && u < 4.7 ? Math.sin((u - 4.3) / .4 * Math.PI) * .12 : 0); btn.scale.setScalar(pop);
      const ring = u > 5.0; sino.rotation.z = ring ? Math.sin(u * 30) * .35 * (1 - smooth(5.0, 6.4, u)) : 0; sg.material.opacity = ring ? .6 * (1 - smooth(5.2, 6.4, u)) : 0;
      bal.visible = u < 1.2; bal.position.set(-.8, 1.3, -.8); pointer(bal, C);
      cam(C, [[0, [0, 1.6, 4.4]], [6.5, [.2, 1.8, 5.4]]], [[0, [0, 1.6, -1]], [6.5, [.2, 1.8, -1.5]]], u);
      h.face(C); const pt = u < 2.2; h.pose({ armL: [10, 6], armR: pt ? [25, 0] : u < 4.4 ? [130, 20] : [150 + Math.sin(u * 8) * 10, 10], head: pt ? -8 : 4 }); h.eye(pt ? 'smug' : 'happy');
      return { focus: C.position.distanceTo(h.root.position), range: 3, blur: 10, bloom: .45, bloomT: .82, vig: .5 };
    };
  });
}

/** 55. Responde o grupo da família: eles sentiram sua falta — 403.85 ao fim */
export function sResponde(t0, t1) {
  return mk(t0, t1, { bg: '#F2D9B0', fog: ['#E8D2B0', .02], fov: 32 }, (c) => {
    const Q = quarto(c); const h = hero(c, 1.0, -2.3, -.12, .35); h.tint('#FFF2E2');
    const tel = phoneMesh(.36, .74); c.add(tel);
    const cor = cut(canvasTex(128, 128, (x) => { x.fillStyle = '#E9483A'; x.beginPath(); x.moveTo(64, 112); x.bezierCurveTo(-10, 60, 20, 4, 64, 36); x.bezierCurveTo(108, 4, 138, 60, 64, 112); x.fill(); }), .25, .25, { blend: true }); c.add(cor);
    return (t, u, C) => {
      const sent = u > 2.2; tel.paint(sent ? 's' : 'w', (x) => { TELA.grupo(x); x.fillStyle = '#ECE5DD'; x.fillRect(0, 680, 540, 430); if (sent) { x.fillStyle = '#DCF8C6'; x.beginPath(); x.roundRect(160, 760, 350, 120, 18); x.fill(); x.fillStyle = '#20202A'; x.font = '700 34px Inter'; x.textAlign = 'left'; x.fillText('bom dia, família! ❤', 180, 830); } x.fillStyle = '#fff'; x.beginPath(); x.roundRect(20, 1000, 500, 80, 40); x.fill(); x.fillStyle = '#999'; x.font = '600 28px Inter'; x.fillText(sent ? 'Mensagem' : 'bom dia, família! ❤|', 50, 1050); });
      tel.position.set(lerp(.4, 1.35, smooth(2.6, 3.4, u)), lerp(1.4, 1.1, smooth(2.6, 3.4, u)), lerp(-.6, -1.95, smooth(2.6, 3.4, u))); tel.scale.setScalar(lerp(1, .35, smooth(2.6, 3.4, u))); tel.rotation.set(-.12, -.15, 0);
      cor.visible = u > 2.2; const ck = smooth(2.2, 4.5, u); cor.position.set(lerp(.6, 1.6, ck), lerp(1.6, 3, ck), lerp(-.6, -2.4, ck)); cor.material.opacity = 1 - smooth(3.8, 4.6, u); pointer(cor, C);
      cam(C, [[0, [.5, 1.45, 1.0]], [2.6, [.5, 1.45, .9]], [5.1, [2.2, 1.7, 2.6]]], [[0, [.4, 1.38, -.6]], [2.6, [.4, 1.38, -.6]], [5.1, [.9, 1.4, -2.3]]], u);
      h.face(C); h.pose({ armL: [10, 6], armR: [35, -60], head: 4 }); h.eye('happy');
      return { focus: u < 2.6 ? C.position.distanceTo(tel.position) : C.position.distanceTo(h.root.position), range: 1.8, blur: 12, bloom: .3, bloomT: .9, vig: lerp(.4, .7, smooth(4, 5, u)), exposure: lerp(1, .0, smooth(4.4, 5.05, u)) };
    };
  });
}
