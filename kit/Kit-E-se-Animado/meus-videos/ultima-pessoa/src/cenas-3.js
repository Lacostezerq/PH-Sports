// Capítulos 3 (supermercado) e 4 (animais): 141.74 a 227.31 s.
import * as THREE from 'three';
import { smooth, rng, lerp, clamp } from './motor/core.js';
import { canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, sky, skyline, pointer, tree, lamp, dissolve } from './motor/kit.js';
import { stars, smoke, crowd } from './motor/kit2.js';
import { mk, cam, hero, pessoa, luzes, feixe, poeira, quadro, letreiro, planta, comodo, cidade, bicho, bichoTex } from './lib.js';
import { fachada } from './extra.js';

/** Corredor de supermercado: prateleiras cheias, placas, luzes. */
function mercado(c, o = {}) {
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(14, 60), new THREE.MeshStandardMaterial({ map: (() => { const t = canvasTex(256, 256, (x) => { x.fillStyle = '#E8E4DA'; x.fillRect(0, 0, 256, 256); x.fillStyle = '#D8D2C4'; x.fillRect(0, 0, 128, 128); x.fillRect(128, 128, 128, 128); }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(7, 30); return t; })(), roughness: .2, metalness: .1 })); fl.rotation.x = -Math.PI / 2; fl.position.z = -20; fl.receiveShadow = true; c.add(fl);
  c.add(box(14, .2, 60, std('#D8D8DC'), 0, 5.2, -20));
  const R = rng(o.seed || 3), cols = ['#E9483A', '#F2C14E', '#36AEA2', '#4A86C7', '#F4EFE4', '#D2728A', '#8EAE56', '#E9733C', '#7E5FA8'];
  const geo = new THREE.BoxGeometry(1, 1, 1); const prod = []; const total = 2 * 16 * 5 * 9;
  const mats = cols.map(k => std(k, { roughness: .5 })); const groups = cols.map(() => []);
  for (const sx of [-1, 1]) { for (let seg = 0; seg < 16; seg++) { const z = 2 - seg * 2.4; c.add(box(.9, 2.6, 2.4, std('#F4F4F0'), sx * 2.6, 1.3, z)); for (let s = 0; s < 5; s++) { c.add(box(.95, .04, 2.36, std('#D8D8DC'), sx * 2.15, .3 + s * .5, z, false)); let zz = z - 1.1; while (zz < z + 1.1) { const w = .12 + R() * .14, h = .18 + R() * .22, k = Math.floor(R() * cols.length); groups[k].push([sx * 2.2, .32 + s * .5 + h / 2, zz + w / 2, w, h]); zz += w + .02; } } } }
  groups.forEach((g, k) => { const im = new THREE.InstancedMesh(geo, mats[k], g.length); const d = new THREE.Object3D(); g.forEach(([x, y, z, w, h], i) => { d.position.set(x, y, z); d.scale.set(.32, h, w); d.updateMatrix(); im.setMatrixAt(i, d.matrix); }); im.castShadow = true; c.add(im); });
  const lights = []; for (let i = 0; i < 10; i++) { const l = new THREE.Mesh(new THREE.BoxGeometry(.4, .06, 3), new THREE.MeshStandardMaterial({ emissive: '#FFFFFF', emissiveIntensity: 2.4, color: '#fff' })); l.position.set(0, 5.05, 2 - i * 4.5); c.add(l); lights.push(l); }
  (o.placas || ['ENLATADOS', 'PADARIA', 'FRIOS', 'BEBIDAS']).forEach((t, i) => { const s = letreiro(t, 2.2, .5, '#1F5E8A', '#FFFFFF', .5, 'Inter'); s.position.set(0, 4.1, -2 - i * 9); c.add(s); c.add(box(.02, 1, .02, '#888', -.9, 4.7, -2 - i * 9, false)); c.add(box(.02, 1, .02, '#888', .9, 4.7, -2 - i * 9, false)); });
  c.add(new THREE.HemisphereLight('#FFFFFF', '#B8B0A0', 1.2)); const k = new THREE.DirectionalLight('#FFF4E0', 1.4); k.position.set(2, 10, 6); k.castShadow = true; k.shadow.mapSize.set(2048, 2048); Object.assign(k.shadow.camera, { left: -10, right: 10, top: 10, bottom: -10, far: 40 }); c.add(k);
  return { lights, key: k };
}
/** Carrinho de compras cheio. */
function carrinho(c, x, z, cheio = 1) { const g = new THREE.Group(); const m = std('#B8BCC4', { metalness: .7, roughness: .3 }); g.add(box(.6, .03, .9, m, 0, .5, 0)); for (const sx of [-1, 1]) g.add(box(.03, .45, .9, m, sx * .3, .72, 0)); g.add(box(.6, .45, .03, m, 0, .72, .45)); g.add(box(.6, .45, .03, m, 0, .72, -.45)); g.add(box(.6, .04, .04, std('#C9361F'), 0, 1.0, .55)); for (const [a, b] of [[-.25, -.38], [.25, -.38], [-.25, .38], [.25, .38]]) { g.add(box(.03, .45, .03, m, a, .25, b)); const w = new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, .04, 12), std('#1A1A22')); w.rotation.z = Math.PI / 2; w.position.set(a, .06, b); g.add(w); } const R = rng(5); for (let i = 0; i < 18 * cheio; i++) g.add(box(.12 + R() * .1, .12 + R() * .15, .1 + R() * .1, std(['#E9483A', '#F2C14E', '#36AEA2', '#4A86C7', '#F4EFE4'][i % 5]), (R() - .5) * .45, .62 + R() * .3, (R() - .5) * .75)); g.position.set(x, 0, z); c.add(g); return g; }

/** 22. O supermercado é seu: banquete — 141.74 a 150.25 */
export function sMercado(t0, t1) {
  return mk(t0, t1, { bg: '#E8E8EC', fog: ['#E8ECEE', .03], fov: 36 }, (c) => {
    mercado(c); const h = hero(c, -.4, -2, 0, .25); h.tint('#FFFFFF'); const cart = carrinho(c, .5, -1.6, 1); cart.rotation.y = -.4;
    const comida = cut(canvasTex(128, 128, (x) => { x.fillStyle = '#E9B44C'; x.beginPath(); x.moveTo(64, 10); x.lineTo(118, 118); x.lineTo(10, 118); x.fill(); x.fillStyle = '#C9361F'; for (let i = 0; i < 6; i++) { x.beginPath(); x.arc(40 + (i % 3) * 22, 70 + Math.floor(i / 3) * 24, 9, 0, 7); x.fill(); } }), .3, .3); c.add(comida);
    return (t, u, C) => {
      cam(C, [[0, [0, 1.8, 14]], [4.2, [0, 1.7, 4.5]], [8.5, [-.6, 1.6, 2.6]]], [[0, [0, 1.6, -10]], [4.2, [-.2, 1.4, -2]], [8.5, [-.4, 1.5, -2]]], u);
      h.face(C); const eat = u > 4.2; h.pose({ armL: [10, 6], armR: eat ? [40 + Math.sin(u * 10) * 6, -95] : [10, 6], head: eat ? Math.sin(u * 10) * 3 : 0, bob: eat ? Math.abs(Math.sin(u * 10)) * .015 : 0 }); h.eye(u < 4.2 ? 'wide' : 'happy');
      comida.visible = eat; comida.position.set(h.root.position.x + .2, 1.55, h.root.position.z + .15); pointer(comida, C);
      return { focus: C.position.distanceTo(h.root.position), range: lerp(14, 2.5, smooth(3, 5, u)), blur: 12, bloom: .3, bloomT: .92, vig: .4 };
    };
  });
}

/** 23. Os freezers desligam: o cheiro fica memorável — 150.25 a 158.77 */
export function sFreezer(t0, t1) {
  return mk(t0, t1, { bg: '#C8D0D8', fog: ['#C8D0D0', .03], fov: 34 }, (c) => {
    const M = mercado(c, { seed: 8, placas: ['FRIOS', 'AÇOUGUE', 'LATICÍNIOS'] });
    // freezers com porta de vidro, à esquerda
    const fz = []; for (let i = 0; i < 5; i++) { const g = new THREE.Group(); const bm = std('#E8E8EC'); g.add(box(1.6, 2.4, .1, bm, 0, 1.2, -.45)); g.add(box(.08, 2.4, .9, bm, -.78, 1.2, 0)); g.add(box(.08, 2.4, .9, bm, .78, 1.2, 0)); g.add(box(1.6, .3, .9, bm, 0, 2.35, 0)); g.add(box(1.6, .25, .9, bm, 0, .12, 0)); for (const xx of [-.39, .39]) g.add(box(.04, 2.1, .04, '#B8BCC4', xx, 1.25, .46)); const inn = box(1.4, 2.1, .05, new THREE.MeshStandardMaterial({ color: '#8AA8C0', emissive: '#BFE2FF', emissiveIntensity: .5 }), 0, 1.25, -.4, false); g.add(inn); for (let s = 0; s < 4; s++) for (let k = 0; k < 6; k++) g.add(box(.2, .3, .3, std(['#E9483A', '#F4EFE4', '#F2C14E'][(k + s) % 3]), -.55 + k * .22, .45 + s * .5, -.2)); const vid = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 2.2), new THREE.MeshStandardMaterial({ color: '#CFE8FF', transparent: true, opacity: .2, roughness: .05, depthWrite: false })); vid.position.set(0, 1.25, .46); g.add(vid); g.position.set(-1.4, 0, -3 - i * 1.7); g.rotation.y = Math.PI / 2; c.add(g); fz.push(inn); }
    const h = hero(c, .8, -4.5, 0, .25); h.tint('#FFFFFF');
    const nuvem = smoke(c, 20, [-.8, .8, -5.5], { col: '#9ACD5A', size: 2.6, rise: 2.8, spread: 2.5, seed: 4, life: 3 });
    const R = rng(3), moscas = []; for (let i = 0; i < 24; i++) { const m = new THREE.Mesh(new THREE.SphereGeometry(.02, 6, 4), std('#111')); c.add(m); moscas.push({ m, p: R() * 6, r: .3 + R() * .8, y: 1 + R() * 1.4, z: -4 - R() * 3 }); }
    return (t, u, C) => {
      const off = smooth(.4, 1.6, u); fz.forEach((m, i) => m.material.emissiveIntensity = .5 * (1 - smooth(.3 + i * .2, .6 + i * .2, u))); M.lights.forEach((l, i) => l.material.emissiveIntensity = i % 2 && u > 1 ? .2 : 2.4);
      const stink = u > 3.6; nuvem(stink ? u : -99); moscas.forEach(q => { q.m.visible = u > 3.2; q.m.position.set(-.6 + Math.cos(u * 4 + q.p) * q.r, q.y + Math.sin(u * 6 + q.p) * .2, q.z + Math.sin(u * 3 + q.p) * q.r); });
      cam(C, [[0, [1.6, 1.7, 1.5]], [8.5, [1.4, 1.6, -1.5]]], [[0, [-.6, 1.3, -6]], [8.5, [.6, 1.5, -4.6]]], u);
      h.face(C); const nose = u > 4.6; h.pose({ armL: nose ? [30, -150] : [10, 6], armR: nose ? [60, 40] : [10, 6], head: nose ? -8 : 0, lean: nose ? -4 : 0 }); h.eye(u < 4.4 ? 'look' : 'shut');
      return { focus: C.position.distanceTo(h.root.position), range: 2.5, blur: 12, bloom: .3, bloomT: .92, vig: .45, tint: stink ? '#E8FFD8' : '#ffffff', exposure: lerp(1, .9, off) };
    };
  });
}

/** 24. O pão mofa em uma semana — 158.77 a 163.75 */
export function sPao(t0, t1) {
  return mk(t0, t1, { bg: '#E8E0D0', fog: ['#E8E0D0', .03], fov: 32 }, (c) => {
    mercado(c, { seed: 12, placas: ['PADARIA'] });
    c.add(box(3, .9, 1, std('#8E6242'), 0, .45, -2.4)); c.add(box(3.1, .06, 1.1, std('#A87A52'), 0, .93, -2.4));
    const mofo = []; const paoT = (k) => canvasTex(256, 128, (x) => { x.fillStyle = '#D9A05A'; x.beginPath(); x.ellipse(128, 70, 120, 52, 0, 0, 7); x.fill(); x.fillStyle = '#B8783A'; for (let i = 0; i < 4; i++) { x.beginPath(); x.ellipse(60 + i * 45, 52, 14, 6, -.5, 0, 7); x.fill(); } });
    for (let i = 0; i < 7; i++) { const p = new THREE.Mesh(new THREE.CapsuleGeometry(.12, .35, 6, 12), std('#D9A05A')); p.rotation.z = Math.PI / 2; p.position.set(-1.2 + i * .4, 1.06, -2.4 + (i % 2) * .2); p.castShadow = true; c.add(p); const R = rng(i + 4); for (let k = 0; k < 6; k++) { const s = new THREE.Mesh(new THREE.SphereGeometry(.05 + R() * .04, 8, 6), std(['#7AA858', '#5E8A44', '#A8C878'][k % 3])); s.position.set(p.position.x + (R() - .5) * .35, 1.13 + R() * .04, p.position.z + (R() - .5) * .15); s.scale.setScalar(0); c.add(s); mofo.push({ s, d: R() }); } }
    const h = hero(c, 1.5, -1.6, 0, .25); h.tint('#FFFFFF'); const paoMao = new THREE.Mesh(new THREE.CapsuleGeometry(.1, .3, 6, 12), std('#9AAA6A')); c.add(paoMao);
    return (t, u, C) => {
      mofo.forEach(q => q.s.scale.setScalar(smooth(.3 + q.d * 1.6, 1 + q.d * 2, u)));
      cam(C, [[0, [-.2, 1.5, .4]], [5, [.9, 1.5, 1.8]]], [[0, [-.2, 1.05, -2.4]], [5, [.9, 1.15, -1.9]]], u);
      h.face(C); const hold = u > 2.6; h.pose({ armL: [10, 6], armR: hold ? [45, -40] : [10, 6], head: hold ? 6 : 0 }); h.eye(u < 2.6 ? 'look' : 'sad'); paoMao.visible = hold; paoMao.position.set(h.root.position.x + .45, 1.25, h.root.position.z + .15); paoMao.rotation.z = 1.2;
      return { focus: u < 2.5 ? 1.5 : C.position.distanceTo(h.root.position), range: 1.4, blur: 12, bloom: .25, bloomT: .95, vig: .45 };
    };
  });
}

/** 25. Você vai comer enlatado: a pirâmide de latas — 163.75 a 170.89 */
export function sLatas(t0, t1) {
  return mk(t0, t1, { bg: '#E8E8EC', fog: ['#E8ECEE', .03], fov: 34 }, (c) => {
    mercado(c, { seed: 21, placas: ['ENLATADOS'] });
    const rot = (txt, a, b) => canvasTex(256, 128, (x) => { x.fillStyle = a; x.fillRect(0, 0, 256, 128); x.fillStyle = b; x.fillRect(0, 40, 256, 48); x.fillStyle = '#fff'; x.font = '900 34px Inter'; x.textAlign = 'center'; x.fillText(txt, 128, 76); });
    const tipos = [rot('FEIJÃO', '#7A3A2A', '#C9361F'), rot('MILHO', '#2E7A3E', '#F2C14E'), rot('ATUM', '#1F5E8A', '#E9733C')];
    const latas = []; let n = 0; for (let row = 0; row < 5; row++) for (let i = 0; i < 5 - row; i++) { const m = new THREE.Mesh(new THREE.CylinderGeometry(.13, .13, .3, 20), [new THREE.MeshStandardMaterial({ map: tipos[n % 3], roughness: .4, metalness: .2 }), std('#C8CCD4', { metalness: .8 }), std('#C8CCD4', { metalness: .8 })]); m.castShadow = true; m.userData = { x: -.55 + i * .27 + row * .135, y: .15 + row * .31, k: n }; c.add(m); latas.push(m); n++; }
    const h = hero(c, .9, -.6, 0, .25); h.tint('#FFFFFF');
    return (t, u, C) => {
      latas.forEach((m) => { const a = .2 + m.userData.k * .3; const p = smooth(a, a + .25, u); m.visible = p > 0; m.position.set(lerp(h.root.position.x + .3, m.userData.x, p), m.userData.y + Math.sin(p * Math.PI) * .4, lerp(-.5, -1.2, p)); });
      cam(C, [[0, [.2, 1.2, 3.2]], [7.1, [-.1, 1.5, 2.3]]], [[0, [0, .8, -1.2]], [7.1, [.3, 1.0, -1]]], u);
      h.face(C); h.pose({ armL: [10, 6], armR: [40 + Math.sin(u * 6) * 20, -30], head: Math.sin(u * 3) * 3 }); h.eye(u < 4.4 ? 'flat' : 'look');
      return { focus: C.position.distanceTo(new THREE.Vector3(0, 1, -1)), range: 2.4, blur: 12, bloom: .25, bloomT: .95, vig: .42 };
    };
  });
}

/** 26. Mel com milhares de anos numa tumba egípcia — 170.89 a 179.75 */
export function sTumba(t0, t1) {
  return mk(t0, t1, { bg: '#2A1A10', fog: ['#3A2414', .04], fov: 34 }, (c) => {
    const pedra = canvasTex(1024, 512, (x) => { x.fillStyle = '#C9A46A'; x.fillRect(0, 0, 1024, 512); const R = rng(4); for (let r = 0, y = 0; y < 512; y += 64, r++) for (let i = (r % 2) * -60; i < 1024; i += 120) { x.strokeStyle = '#8E6A3A'; x.lineWidth = 3; x.strokeRect(i, y, 120, 64); } x.fillStyle = '#5A3A1E'; for (let i = 0; i < 70; i++) { const a = 40 + (i % 14) * 70, b = 60 + Math.floor(i / 14) * 90; const k = i % 5; x.save(); x.translate(a, b); if (k === 0) { x.beginPath(); x.ellipse(0, 0, 14, 22, 0, 0, 7); x.stroke(); x.fillRect(-2, 22, 4, 20); } else if (k === 1) { x.fillRect(-14, -2, 28, 4); x.beginPath(); x.arc(0, -10, 8, 0, 7); x.fill(); } else if (k === 2) { x.beginPath(); x.moveTo(-14, 16); x.lineTo(0, -16); x.lineTo(14, 16); x.fill(); } else if (k === 3) { x.beginPath(); x.arc(0, 0, 12, 0, 7); x.stroke(); x.beginPath(); x.arc(0, 0, 3, 0, 7); x.fill(); } else { x.beginPath(); x.moveTo(-14, 0); x.quadraticCurveTo(0, -20, 14, 0); x.stroke(); } x.restore(); } });
    pedra.wrapS = pedra.wrapT = THREE.RepeatWrapping; pedra.repeat.set(2, 1);
    const pm = new THREE.MeshStandardMaterial({ map: pedra, roughness: 1 });
    c.add(box(16, 5, .4, pm, 0, 2.5, -4)); for (const sx of [-1, 1]) { const w = box(.4, 5, 12, pm, sx * 5, 2.5, 0); c.add(w); }
    const chao = new THREE.Mesh(new THREE.PlaneGeometry(16, 16), std('#8E6A3A')); chao.rotation.x = -Math.PI / 2; chao.receiveShadow = true; c.add(chao);
    // sarcófago, vasos, baú dourado
    c.add(box(1.2, .9, 2.6, std('#D9A84A', { metalness: .5, roughness: .4 }), -2.6, .45, -2.4)); c.add(box(1.0, .2, 2.4, std('#2A6A8E', { metalness: .3 }), -2.6, .95, -2.4));
    for (const [x, z] of [[2.6, -3.2], [3.4, -2.8], [-4, -.5]]) { const v = new THREE.Mesh(new THREE.CylinderGeometry(.22, .3, .8, 16), std('#A8603A')); v.position.set(x, .4, z); c.add(v); }
    // pedestal e pote de mel brilhando
    c.add(box(.8, 1, .8, pm, .4, .5, -2.2)); const pote = new THREE.Mesh(new THREE.CylinderGeometry(.2, .24, .38, 20), new THREE.MeshStandardMaterial({ color: '#D99A2A', emissive: '#E8A030', emissiveIntensity: .5, roughness: .3, transparent: true, opacity: .92 })); pote.position.set(.4, 1.2, -2.2); c.add(pote); const tampa = new THREE.Mesh(new THREE.CylinderGeometry(.21, .21, .06, 20), std('#8E6A3A')); tampa.position.set(.4, 1.42, -2.2); c.add(tampa); const gl = glowSprite('#FFC060', 1.4, .5); gl.position.set(.4, 1.25, -2.2); c.add(gl);
    // tochas
    const fogos = []; for (const x of [-3.6, 3.6]) { c.add(box(.08, .6, .08, '#3A2414', x, 2.4, -3.75)); const f = glowSprite('#FFA040', .9, .9); f.position.set(x, 2.8, -3.7); c.add(f); const L = new THREE.PointLight('#FFA050', 12, 10, 1.5); L.position.set(x, 2.8, -3.4); L.castShadow = true; c.add(L); fogos.push([f, L]); }
    c.add(new THREE.HemisphereLight('#B08050', '#2a1a10', .5));
    const arq = pessoa(c, 'jaleco', null, null, 1.4, -1.5); arq.tint('#FFE0B0');
    const pz = (() => { const f = feixe(c, 0, 3, -2.5, 2, 6, -.25, '#FFD08A', .1); return f; })();
    return (t, u, C) => {
      fogos.forEach(([f, L], i) => { const k = .85 + Math.sin(u * 17 + i * 2) * .1 + Math.sin(u * 29 + i) * .05; f.scale.setScalar(.9 * k); L.intensity = 12 * k; });
      cam(C, [[0, [-1.2, 1.4, 4]], [8.9, [.2, 1.45, 1.6]]], [[0, [.4, 1.3, -2.2]], [8.9, [.8, 1.3, -1.9]]], u);
      arq.face(C); const lift = smooth(4.5, 5.2, u); arq.pose({ armL: [10, 6], armR: [lerp(10, 70, lift), lerp(6, -40, lift)] }); arq.eye(u < 4.5 ? 'look' : 'wide');
      if (lift > 0) { pote.position.set(lerp(.4, arq.root.position.x - .1, lift), lerp(1.2, 1.55, lift), lerp(-2.2, arq.root.position.z + .15, lift)); tampa.position.set(pote.position.x, pote.position.y + .22, pote.position.z); gl.position.copy(pote.position); }
      return { focus: C.position.distanceTo(pote.position), range: 2.4, blur: 12, bloom: .4, bloomT: .85, vig: .55, tint: '#FFE8C8', sat: .9 };
    };
  });
}

/** 27. Você vai ter que plantar — logo você, que matou o cacto — 179.75 a 187.15 */
export function sHorta(t0, t1) {
  return mk(t0, t1, { bg: '#BFD8EE', fog: ['#D8E6E8', .012], fov: 34, far: 900 }, (c) => {
    sky(c, -150, 600, 260, [[0, '#6FA7D8'], [.6, '#BFD8EE'], [1, '#FCE8C8']]); skyline(c, -120, 500, 60, ['#A8B4C8', '#9AA8BE', '#8E9CB4'], false, 4);
    const gr = canvasTex(512, 512, (x) => { x.fillStyle = '#6E9A50'; x.fillRect(0, 0, 512, 512); const R = rng(2); for (let i = 0; i < 4000; i++) { x.strokeStyle = R() < .5 ? '#5E8A44' : '#8BAF56'; x.globalAlpha = .4; x.beginPath(); const a = R() * 512, b = R() * 512; x.moveTo(a, b); x.lineTo(a, b - 8); x.stroke(); } }); gr.wrapS = gr.wrapT = THREE.RepeatWrapping; gr.repeat.set(30, 30); const g = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshStandardMaterial({ map: gr, roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
    const brotos = []; const bt = canvasTex(64, 64, (x) => { x.fillStyle = '#4E8A36'; x.beginPath(); x.ellipse(22, 30, 14, 7, -.6, 0, 7); x.ellipse(42, 30, 14, 7, .6, 0, 7); x.fill(); x.fillRect(30, 30, 4, 34); });
    for (let r = 0; r < 4; r++) { const lei = box(6, .2, .7, std('#5A3A22'), 0, .1, -2 - r * 1.1); c.add(lei); for (let i = 0; i < 9; i++) { const b = cut(bt, .3, .3); b.position.set(-2.6 + i * .65, .32, -2 - r * 1.1); c.add(b); brotos.push(b); } }
    // cerca, regador, enxada, espantalho
    for (let i = -6; i <= 6; i++) c.add(box(.1, 1, .1, '#B58A62', i * .9, .5, -6.8)); c.add(box(12, .08, .05, '#8E6948', 0, .8, -6.78));
    const reg = new THREE.Mesh(new THREE.CylinderGeometry(.18, .2, .3, 16), std('#36AEA2', { metalness: .3 })); reg.position.set(2.8, .15, -.6); c.add(reg);
    tree(c, -7, -9, 1.8, undefined, 1); tree(c, 7, -10, 2, undefined, 2);
    luzes(c, { ki: 3, pos: [-10, 14, 10], r: 20 });
    const h = hero(c, .4, -1.2, 0, .25); h.tint('#FFFFFF');
    const enx = box(.04, 1.4, .04, '#7A5238', 0, 0, 0); c.add(enx);
    // o cacto morto no vaso
    const vaso = new THREE.Group(); const vv = new THREE.Mesh(new THREE.CylinderGeometry(.12, .09, .18, 14), std('#C76B4A')); vv.position.y = .09; vaso.add(vv); const cac = new THREE.Mesh(new THREE.CapsuleGeometry(.05, .16, 4, 8), std('#8A7A3A')); cac.position.y = .25; cac.rotation.z = .9; vaso.add(cac); c.add(vaso);
    return (t, u, C) => {
      brotos.forEach((b, i) => { b.scale.setScalar(.6 + .4 * Math.sin(u + i)); pointer(b, C); });
      const cact = u > 4.4;
      cam(C, [[0, [2, 1.6, 3.5]], [4.4, [1.2, 1.5, 2.2]], [7.4, [.6, 1.5, .9]]], [[0, [0, .8, -2]], [4.4, [.4, 1.2, -1.2]], [7.4, [.6, 1.3, -1.2]]], u);
      h.face(C);
      if (!cact) { const dig = Math.sin(u * 5); h.pose({ armL: [40, -40 + dig * 20], armR: [40, -40 + dig * 20], head: 4, lean: dig * 3 }); h.eye('down'); enx.visible = true; enx.position.set(h.root.position.x + .55, .8, h.root.position.z + .1); enx.rotation.z = -.35 + dig * .15; vaso.visible = false; }
      else { enx.visible = false; vaso.visible = true; h.pose({ armL: [10, 6], armR: [40, -60], head: -4 }); h.eye(u < 5.6 ? 'sad' : 'flat'); vaso.position.set(h.root.position.x + .35, 1.05, h.root.position.z + .15); }
      return { focus: C.position.distanceTo(h.root.position), range: 2.4, blur: 12, bloom: .2, bloomT: 1, vig: .38 };
    };
  });
}

/** 28. Você não está sozinho: uns 900 milhões de cachorros — 187.15 a 194.95 */
export function sCaes(t0, t1) {
  return mk(t0, t1, { bg: '#F2D9B0', fog: ['#EAD8C0', .012], fov: 34 }, (c) => {
    cidade(c, { seed: 31, cars: false, skyStops: [[0, '#7FA8D8'], [.6, '#F2D0A8'], [1, '#FFE0B8']] }); const R = rng(4), caes = [];
    const cores = ['#C98A4A', '#F4EFE4', '#3A2A22', '#D9B07A', '#8E6A4A', '#E8C890', '#5A5A62'];
    for (let i = 0; i < 26; i++) { const w = .7 + R() * .6; const d = bicho(c, 'cao', (R() - .5) * 7, -2 - R() * 26, w, cores[i % cores.length]); caes.push({ d, x: d.position.x, z: d.position.z, sp: .6 + R() * .8, p: R() * 6, w }); }
    return (t, u, C) => {
      for (const q of caes) { const z = q.z + u * q.sp; q.d.position.set(q.x + Math.sin(u + q.p) * .3, q.w * .375 + Math.abs(Math.sin(u * 8 + q.p)) * .05, z); q.d.blob.position.set(q.d.position.x, .015, z); pointer(q.d, C); }
      cam(C, [[0, [0, .8, 6]], [7.8, [.4, 1.3, 3]]], [[0, [0, .6, -10]], [7.8, [0, .8, -10]]], u);
      return { focus: 7, range: 6, blur: 10, bloom: .25, bloomT: .95, vig: .4 };
    };
  });
}

/** 29. Os de apartamento aprendem a abrir porta; o gato nem percebe — 194.95 a 201.82 */
export function sPortaGato(t0, t1) {
  return mk(t0, t1, { bg: '#2A2030', fog: ['#2A2030', .02], fov: 34 }, (c) => {
    comodo(c, { wall: '#C9A46A', side: false });
    const porta = new THREE.Group(); porta.add(box(1.1, 2.2, .08, std('#6B3E26'), 0, 1.1, 0)); for (const [y, h] of [[.6, .8], [1.6, .8]]) porta.add(box(.8, h * .8, .02, std('#7A4A2E'), 0, y, .05, false)); const mac = new THREE.Group(); mac.add(box(.2, .04, .04, std('#D9B46A', { metalness: .8 }), .08, 0, 0)); mac.position.set(.38, 1.0, .1); porta.add(mac); porta.position.set(-2.2, 0, -3.8); c.add(porta); c.add(box(1.3, .1, .12, '#5A3A22', -2.2, 2.25, -3.82));
    const dog = bicho(c, 'cao', -2.0, -3.3, 1.0, '#D9B07A');
    const sofa = new THREE.Group(); const sf = std('#7E5FA8'); sofa.add(box(2.6, .46, 1, sf, 0, .3, 0)); sofa.add(box(2.6, .9, .3, sf, 0, .78, -.4)); for (const x of [-1.4, 1.4]) sofa.add(box(.3, .7, 1.05, std('#8E6FB8'), x, .42, 0)); sofa.position.set(2, 0, -3.2); c.add(sofa);
    const gato = bicho(c, 'gato', 2.2, -3.0, .7, '#E9A04A'); gato.position.y = .78; gato.blob.visible = false;
    quadro(c, 0, 2.4, -3.8, .8, .6, (x, w, h) => { x.fillStyle = '#36AEA2'; x.fillRect(0, 0, w, h); x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(128, 96, 40, 0, 7); x.fill(); }); planta(c, .2, -3.4, .9);
    c.add(new THREE.HemisphereLight('#FFE8C8', '#3a2a20', .9)); const L = new THREE.PointLight('#FFD5A0', 12, 10, 1.5); L.position.set(0, 3.4, -1); L.castShadow = true; c.add(L);
    return (t, u, C) => {
      const j = Math.max(0, Math.sin(u * 5)); dog.position.y = .375 + j * .55; dog.rotation.z = j * .3; pointer(dog, C); mac.rotation.z = -j * .5;
      gato.position.y = .78 + Math.sin(u * 1.5) * .01; pointer(gato, C);
      cam(C, [[0, [-1.6, 1.3, 1.6]], [2.6, [-1.4, 1.3, 1.2]], [4.4, [1.6, 1.2, 1.0]], [6.9, [2.0, 1.1, .4]]], [[0, [-2.1, 1.0, -3.6]], [2.6, [-2.1, 1.0, -3.6]], [4.4, [2.1, .9, -3]], [6.9, [2.2, .85, -3]]], u);
      return { focus: C.position.distanceTo(u < 3.5 ? dog.position : gato.position), range: 1.6, blur: 12, bloom: .25, bloomT: .95, vig: .45 };
    };
  });
}

/** 30. Sem carros, sem barulho: os bichos voltam para a cidade — 201.82 a 208.92 */
export function sBichosCidade(t0, t1) {
  return mk(t0, t1, { bg: '#BFD8EE', fog: ['#D8E6E0', .012], fov: 34 }, (c) => {
    cidade(c, { seed: 41, overgrown: .35 }); const R = rng(9); const B = [];
    [['cervo', -1.2, -6, 1.6, '#B8784A'], ['cervo', 1.4, -9, 1.5, '#A8683A'], ['javali', -.2, -4, 1.0, '#5A4A3A'], ['javali', 1.8, -5, .9, '#6A5442'], ['cervo', -2.4, -14, 1.5, '#B8784A']].forEach(([k, x, z, w, col], i) => { const b = bicho(c, k, x, z, w, col); B.push({ b, x, z, w, p: i }); });
    const pas = []; const pt = canvasTex(64, 32, (x) => { x.fillStyle = '#3A3A44'; x.beginPath(); x.moveTo(0, 16); x.quadraticCurveTo(16, 0, 32, 14); x.quadraticCurveTo(48, 0, 64, 16); x.quadraticCurveTo(32, 10, 0, 16); x.fill(); }); for (let i = 0; i < 14; i++) { const m = cut(pt, .4, .2); c.add(m); pas.push({ m, p: R() * 6, x: (R() - .5) * 10, y: 4 + R() * 4, z: -8 - R() * 10 }); }
    return (t, u, C) => {
      for (const q of B) { const z = q.z + u * .35; q.b.position.set(q.x, q.w * .375 + Math.abs(Math.sin(u * 4 + q.p)) * .03, z); q.b.blob.position.set(q.x, .015, z); pointer(q.b, C); }
      for (const q of pas) { q.m.position.set(q.x - u * 1.5, q.y + Math.sin(u * 2 + q.p) * .3, q.z); q.m.scale.y = .6 + Math.abs(Math.sin(u * 10 + q.p)) * .6; pointer(q.m, C); }
      cam(C, [[0, [-3, 1.1, 4]], [7.1, [-1, 1.4, 1.5]]], [[0, [0, 1, -8]], [7.1, [0, 1.1, -8]]], u);
      return { focus: 8, range: 6, blur: 10, bloom: .2, bloomT: 1, vig: .4 };
    };
  });
}

/** 31. Chernobyl: os lobos se multiplicaram — 208.92 a 220.25 */
export function sChernobyl(t0, t1) {
  return mk(t0, t1, { bg: '#A8B0A8', fog: ['#B8C0B4', .018], fov: 34, far: 900 }, (c) => {
    sky(c, -200, 900, 400, [[0, '#7A8A98'], [.6, '#B8C0B8'], [1, '#D8D8C8']]);
    const gr = canvasTex(512, 512, (x) => { x.fillStyle = '#5E7044'; x.fillRect(0, 0, 512, 512); const R = rng(2); for (let i = 0; i < 4000; i++) { x.strokeStyle = R() < .5 ? '#4E6034' : '#7E8A54'; x.globalAlpha = .4; x.beginPath(); const a = R() * 512, b = R() * 512; x.moveTo(a, b); x.lineTo(a, b - 10); x.stroke(); } }); gr.wrapS = gr.wrapT = THREE.RepeatWrapping; gr.repeat.set(30, 30); const g = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), new THREE.MeshStandardMaterial({ map: gr, roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
    // prédios soviéticos cinzas
    for (const [x, z, r] of [[-16, -30, .3], [10, -36, -.2], [30, -26, -.5]]) { const F = fachada(c, { cols: 6, rows: 7, col: '#8A8A8E', seed: 3, lit: 0 }); F.g.position.set(x, 0, z); F.g.rotation.y = r; }
    // roda-gigante amarela
    const roda = new THREE.Group(); const aro = new THREE.Mesh(new THREE.TorusGeometry(8, .15, 8, 64), std('#E9C84A', { metalness: .3 })); roda.add(aro); for (let i = 0; i < 16; i++) { const a = i / 16 * 6.283; const r = box(.1, 8, .1, std('#C9A83A'), Math.cos(a) * 4, Math.sin(a) * 4, 0, false); r.rotation.z = a + Math.PI / 2; roda.add(r); const cab = box(.9, 1, .9, std('#E9C84A'), Math.cos(a) * 8, Math.sin(a) * 8 - .8, 0); roda.add(cab); } roda.position.set(-4, 10, -24); c.add(roda); for (const sx of [-1, 1]) { const p = box(.3, 11, .3, '#B89A3A', -4 + sx * 2.5, 5, -24); p.rotation.z = sx * .22; c.add(p); }
    for (let k = 0; k < 18; k++) tree(c, (k % 2 ? 1 : -1) * (6 + (k * 13) % 20), -6 - k * 3, 1.4 + (k % 3) * .4, ['#3E5A2E', '#4E6A36', '#6E7A44', '#A8A85A'], k);
    luzes(c, { ki: 2, key: '#E8E8D8', pos: [-20, 30, 20], r: 50, hemi: 1 });
    const R = rng(5), lobos = []; for (let i = 0; i < 9; i++) { const w = 1.1 + R() * .3; const l = bicho(c, 'lobo', -3 + (R() - .5) * 5, -4 - i * 1.4, w, ['#8A8A90', '#6E6E76', '#A8A8AE'][i % 3]); lobos.push({ l, x: l.position.x, z: l.position.z, p: R() * 6, w }); }
    return (t, u, C) => {
      roda.rotation.z = u * .02;
      for (const q of lobos) { const x = q.x + u * 1.4; q.l.position.set(x, q.w * .375 + Math.abs(Math.sin(u * 9 + q.p)) * .08, q.z); q.l.blob.position.set(x, .015, q.z); q.l.scale.x = -1; pointer(q.l, C); }
      cam(C, [[0, [-10, 2.2, 10]], [11.3, [6, 1.6, 6]]], [[0, [-4, 4, -20]], [11.3, [8, 1.2, -8]]], u);
      return { focus: C.position.distanceTo(lobos[3].l.position), range: 8, blur: 10, bloom: .2, bloomT: 1, vig: .45, sat: .8, tint: '#F0F4E8' };
    };
  });
}

/** 32. Agora o ser humano é você: sozinho, de chinelo — 220.25 a 227.31 */
export function sChinelo(t0, t1) {
  return mk(t0, t1, { bg: '#0E1030', fog: ['#141838', .02], fov: 34 }, (c) => {
    cidade(c, { seed: 51, night: true, overgrown: .5, lampsOn: false, cars: false }); stars(c, 2000, 300, 6);
    const lua = new THREE.DirectionalLight('#A8B8FF', 1.4); lua.position.set(-10, 20, 10); c.add(lua);
    const h = hero(c, 0, -3, 0, .35); h.tint('#C8D0F0');
    for (const x of [-.12, .12]) { const ch = box(.12, .025, .26, std('#36AEA2'), x, .012, -2.95); c.add(ch); }
    const olhos = []; const R = rng(8); for (let i = 0; i < 16; i++) { const a = R() * Math.PI - Math.PI, r = 4 + R() * 6; const e1 = glowSprite('#F2D25A', .4, 1), e2 = glowSprite('#F2D25A', .4, 1); const sd = i % 2 ? 1 : -1; const x = sd * (1.6 + R() * 3.5), z = -4 - R() * 6, y = .6 + R() * .4; e1.position.set(x - .1, y, z); e2.position.set(x + .1, y, z); c.add(e1, e2); olhos.push({ e1, e2, p: R() * 6 }); }
    return (t, u, C) => {
      olhos.forEach(q => { const on = smooth(.5 + q.p * .3, .8 + q.p * .3, u) * (Math.sin(u * 2 + q.p * 3) > .97 ? 0 : 1); q.e1.material.opacity = on; q.e2.material.opacity = on; });
      cam(C, [[0, [0, 1.6, 2.4]], [3.4, [0, 1.3, .2]], [7.1, [0, .45, -1.6]]], [[0, [0, 1.3, -3]], [3.4, [0, 1.4, -3]], [7.1, [0, .1, -3]]], u);
      h.face(C); h.pose({ armL: [15, -40], armR: [15, -40], head: Math.sin(u * 6) * 4, bob: Math.sin(u * 30) * .004 }); h.eye(u < 3 ? 'look' : u < 5 ? 'lookl' : 'wide');
      return { focus: C.position.distanceTo(new THREE.Vector3(0, u < 5.5 ? 1.4 : .1, -3)), range: 2.2, blur: 12, bloom: .5, bloomT: .8, vig: .6 };
    };
  });
}
