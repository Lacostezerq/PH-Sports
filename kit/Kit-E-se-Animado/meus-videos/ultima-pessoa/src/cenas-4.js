// Capítulos 5 (o perigo que ninguém desligou) e 6 (a solidão): 227.31 a 327.65 s.
import * as THREE from 'three';
import { smooth, rng, lerp, clamp } from './motor/core.js';
import { canvasTex, makeChar } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, sky, skyline, pointer, tree, lamp } from './motor/kit.js';
import { stars, nebula, smoke } from './motor/kit2.js';
import { mk, cam, hero, luzes, feixe, poeira, quadro, letreiro, planta, comodo, cidade, bicho, phoneMesh } from './lib.js';
import { torreResf } from './cenas-2.js';
import { earth, fireball, backTex, woodFloor } from './extra.js';

const triT = () => canvasTex(256, 256, (x) => { x.fillStyle = '#F2C14E'; x.beginPath(); x.moveTo(128, 10); x.lineTo(246, 236); x.lineTo(10, 236); x.closePath(); x.fill(); x.strokeStyle = '#1A1A22'; x.lineWidth = 12; x.stroke(); x.fillStyle = '#1A1A22'; x.beginPath(); x.arc(128, 160, 14, 0, 7); x.fill(); for (let i = 0; i < 3; i++) { x.beginPath(); x.moveTo(128, 160); x.arc(128, 160, 58, -Math.PI / 2 + i * 2.094 - .5, -Math.PI / 2 + i * 2.094 + .5); x.fill(); } });

/** 33. Mais de 400 reatores no mundo — 227.31 a 233.35 */
export function sNuclear(t0, t1) {
  return mk(t0, t1, { bg: '#C8B8C0', fog: ['#D8C8C0', .003], fov: 36, far: 900 }, (c) => {
    sky(c, -250, 1000, 400, [[0, '#5A6A9A'], [.5, '#B8A8C0'], [.85, '#F2C8A8'], [1, '#FFE8C8']]);
    const g = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), std('#8A9A6A')); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
    const fum = []; [[-18, -40], [6, -46]].forEach(([x, z], i) => { const t = torreResf(10, 26, '#D8D2C8'); t.position.set(x, 0, z); c.add(t); fum.push(smoke(c, 18, [x, 26, z], { col: '#F4F2EE', size: 18, rise: 30, spread: 6, seed: 3 + i, life: 5 })); });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(7, 40, 20, 0, 6.3, 0, 1.57), std('#E8E4DC')); dome.position.set(24, 8, -30); c.add(dome); c.add(new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 8, 40), std('#D8D2C8'))).position.set(24, 4, -30);
    c.add(box(20, 7, 10, std('#B8B0A8'), 26, 3.5, -12)); for (let i = 0; i < 10; i++) { const w = new THREE.Mesh(new THREE.PlaneGeometry(1, .8), new THREE.MeshStandardMaterial({ color: '#000', emissive: '#FFD79A', emissiveIntensity: .6 })); w.position.set(17.5 + i * 1.8, 4.5, -6.98); c.add(w); }
    for (let i = -24; i < 24; i++) c.add(box(.06, 2.2, .06, '#666', i * 1.4, 1.1, 2, false)); for (const y of [.6, 1.4, 2.1]) c.add(box(68, .04, .04, '#777', 0, y, 2, false));
    const ps = cut(triT(), 1.4, 1.4); ps.position.set(-4, 2.6, 2.1); c.add(ps); c.add(box(.1, 2, .1, '#555', -4, 1, 2.05));
    luzes(c, { ki: 2.6, key: '#FFE0C0', pos: [-40, 30, 40], r: 70, hemi: 1 });
    return (t, u, C) => { fum.forEach(f => f(u)); cam(C, [[0, [-14, 3, 22]], [6, [-4, 3.5, 14]]], [[0, [-6, 10, -40]], [6, [4, 9, -35]]], u); return { focus: 40, range: 40, blur: 5, bloom: .25, bloomT: .95, vig: .4 }; };
  });
}

/** 34. Piscina de combustível: o diesel acaba, a água para — 233.35 a 244.95 */
export function sPiscina(t0, t1) {
  return mk(t0, t1, { bg: '#0A1428', fog: ['#0E1A30', .025], fov: 34 }, (c) => {
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), std('#3A4048', { roughness: .4, metalness: .3 })); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; c.add(fl);
    c.add(box(30, 9, .3, std('#2A3240'), 0, 4.5, -9)); c.add(box(.3, 9, 20, std('#2A3240'), -9, 4.5, 0));
    // piscina azul brilhando
    const pt = canvasTex(512, 512, (x) => { const g = x.createRadialGradient(256, 256, 20, 256, 256, 300); g.addColorStop(0, '#8FE8FF'); g.addColorStop(1, '#1A6AC8'); x.fillStyle = g; x.fillRect(0, 0, 512, 512); x.strokeStyle = '#0A3A7A'; x.lineWidth = 6; for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) x.strokeRect(40 + i * 54, 40 + j * 54, 44, 44); });
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(9, 7), new THREE.MeshStandardMaterial({ map: pt, emissiveMap: pt, emissive: '#fff', emissiveIntensity: 1.1, roughness: .1 })); pool.rotation.x = -Math.PI / 2; pool.position.set(0, .02, -3.5); c.add(pool); const pl = new THREE.PointLight('#5AC8FF', 30, 14, 1.4); pl.position.set(0, 2, -3.5); c.add(pl);
    c.add(box(9.6, .3, .3, std('#E8C84A'), 0, .15, .1)); c.add(box(9.6, .3, .3, std('#E8C84A'), 0, .15, -7.1));
    // ponte rolante
    c.add(box(11, .5, .5, std('#E9733C'), 0, 7, -3.5)); c.add(box(1.2, .8, 1.2, std('#E9733C'), 1, 6.4, -3.5)); c.add(box(.05, 4, .05, '#222', 1, 4.2, -3.5));
    // bomba e cano de água
    const cano = new THREE.Mesh(new THREE.CylinderGeometry(.25, .25, 8, 16), std('#7A8088', { metalness: .6 })); cano.rotation.z = Math.PI / 2; cano.position.set(5, .6, 1.2); c.add(cano); c.add(box(1.2, 1.2, 1.2, std('#4A86C7', { metalness: .4 }), 8.5, .6, 1.2));
    // gerador a diesel com medidor
    const ger = new THREE.Group(); ger.add(box(3, 1.8, 1.6, std('#C9C2B6'), 0, .9, 0)); ger.add(box(3.1, .2, 1.7, std('#E9B44C'), 0, 1.9, 0)); const mt = document.createElement('canvas'); mt.width = 256; mt.height = 256; const mx = mt.getContext('2d'); const mT = new THREE.CanvasTexture(mt); mT.colorSpace = THREE.SRGBColorSpace; const med = new THREE.Mesh(new THREE.CircleGeometry(.35, 32), new THREE.MeshBasicMaterial({ map: mT })); med.position.set(-.6, 1.1, .81); ger.add(med); const lab = letreiro('DIESEL', 1, .3, '#1A1A22', '#F2C14E', .4, 'Inter'); lab.position.set(.6, 1.1, .81); ger.add(lab); ger.position.set(-5.5, 0, .5); ger.rotation.y = .4; c.add(ger);
    const paintM = (p) => { mx.fillStyle = '#F4F0E4'; mx.beginPath(); mx.arc(128, 128, 126, 0, 7); mx.fill(); mx.strokeStyle = '#C9361F'; mx.lineWidth = 16; mx.beginPath(); mx.arc(128, 140, 92, Math.PI * 1.1, Math.PI * 1.3); mx.stroke(); mx.fillStyle = '#1A1A22'; mx.font = '900 30px Inter'; mx.textAlign = 'center'; mx.fillText('E', 50, 170); mx.fillText('F', 206, 170); const a = Math.PI * (1.1 + .8 * p); mx.strokeStyle = '#1A1A22'; mx.lineWidth = 8; mx.beginPath(); mx.moveTo(128, 140); mx.lineTo(128 + Math.cos(a) * 85, 140 + Math.sin(a) * 85); mx.stroke(); mT.needsUpdate = true; };
    const alarmes = []; for (const x of [-6, 6]) { const s = new THREE.Mesh(new THREE.SphereGeometry(.25, 16, 10), new THREE.MeshStandardMaterial({ color: '#600', emissive: '#FF2A12', emissiveIntensity: 0 })); s.position.set(x, 6, -8.8); c.add(s); const L = new THREE.PointLight('#FF3A20', 0, 16); L.position.set(x, 5.8, -8); c.add(L); alarmes.push([s, L]); }
    const ps = cut(triT(), 1.2, 1.2); ps.position.set(4, 3, -8.8); c.add(ps);
    c.add(new THREE.HemisphereLight('#6A8AC8', '#101418', .7));
    let lp = -1;
    return (t, u, C) => {
      const p = Math.round(lerp(.9, 0, smooth(5.5, 10.5, u)) * 40) / 40; if (p !== lp) { paintM(p); lp = p; }
      const al = u > 9.5; alarmes.forEach(([s, L], i) => { const on = al && Math.sin(u * 8 + i * 3) > 0; s.material.emissiveIntensity = on ? 5 : 0; L.intensity = on ? 60 : 0; });
      pool.material.emissiveIntensity = 1.1 + Math.sin(u * 2) * .1;
      cam(C, [[0, [3, 5, 9]], [5.2, [-1, 3, 6]], [11.6, [-3.5, 1.6, 3.6]]], [[0, [0, 0, -3.5]], [5.2, [-3, 1, -1]], [11.6, [-5.3, 1.1, .9]]], u);
      return { focus: u < 5 ? 11 : C.position.distanceTo(new THREE.Vector3(-5.3, 1.1, .9)), range: 4, blur: 10, bloom: .5, bloomT: .78, vig: .55, tint: al ? '#FFD8D0' : '#ffffff' };
    };
  });
}

/** 35. O mapa ganha pontos proibidos. Dica: não more perto de usina — 244.95 a 254.2 */
export function sMapa(t0, t1) {
  return mk(t0, t1, { bg: '#14141E', fog: ['#1A1A26', .02], fov: 34 }, (c) => {
    comodo(c, { wall: '#2A3A4A', side: false, floor: '#3A3030' });
    const mc = document.createElement('canvas'); mc.width = 1600; mc.height = 800; const mx = mc.getContext('2d'); const mT = new THREE.CanvasTexture(mc); mT.colorSpace = THREE.SRGBColorSpace;
    const pts = [[330, 250], [370, 270], [300, 300], [800, 230], [830, 250], [780, 270], [870, 210], [1290, 290], [1330, 300], [1250, 330], [1400, 260], [520, 600], [900, 560], [1100, 330], [1480, 520]];
    const paint = (k) => { mx.fillStyle = '#E8DCC0'; mx.fillRect(0, 0, 1600, 800); mx.fillStyle = '#B8D0C8'; mx.fillRect(0, 0, 1600, 800); mx.fillStyle = '#D9C89A'; [[220, 150, 360, 260], [440, 430, 160, 300], [700, 160, 260, 160], [740, 330, 200, 300], [1000, 140, 520, 280], [1380, 520, 180, 120]].forEach(([a, b, w, h]) => { mx.beginPath(); mx.ellipse(a + w / 2, b + h / 2, w / 2, h / 2, 0, 0, 7); mx.fill(); }); mx.strokeStyle = '#8A7A5A'; mx.lineWidth = 2; for (let i = 0; i < 1600; i += 100) { mx.beginPath(); mx.moveTo(i, 0); mx.lineTo(i, 800); mx.stroke(); } for (let i = 0; i < 800; i += 100) { mx.beginPath(); mx.moveTo(0, i); mx.lineTo(1600, i); mx.stroke(); }
      const n = Math.floor(k * pts.length); for (let i = 0; i < n; i++) { const [a, b] = pts[i]; const g = mx.createRadialGradient(a, b, 0, a, b, 60); g.addColorStop(0, '#E9483Acc'); g.addColorStop(1, '#E9483A00'); mx.fillStyle = g; mx.beginPath(); mx.arc(a, b, 60, 0, 7); mx.fill(); mx.strokeStyle = '#C9201A'; mx.lineWidth = 5; mx.beginPath(); mx.arc(a, b, 30, 0, 7); mx.stroke(); mx.beginPath(); mx.moveTo(a - 20, b - 20); mx.lineTo(a + 20, b + 20); mx.stroke(); } mT.needsUpdate = true; };
    const mapa = new THREE.Mesh(new THREE.PlaneGeometry(6, 3), new THREE.MeshStandardMaterial({ map: mT, roughness: .8 })); mapa.position.set(0, 2.4, -3.78); c.add(mapa); c.add(box(6.2, 3.2, .05, '#5A3A22', 0, 2.4, -3.82));
    const ps = cut(triT(), .9, .9); ps.position.set(3.8, 2.6, -3.75); c.add(ps);
    const L = new THREE.SpotLight('#FFE8C8', 60, 12, .6, .5, 1.4); L.position.set(0, 4.5, 1); L.target.position.set(0, 2.2, -3.8); L.castShadow = true; c.add(L, L.target); c.add(new THREE.HemisphereLight('#6A6A9A', '#202020', .6));
    const h = hero(c, 2.7, -2.6, 0, .25); h.tint('#FFFFFF');
    let lk = -1;
    return (t, u, C) => {
      const k = Math.round(smooth(.4, 4.5, u) * 15) / 15; if (k !== lk) { paint(k); lk = k; }
      cam(C, [[0, [0, 2.4, 2.4]], [5, [.6, 2.2, 3.4]], [9.3, [1.8, 1.7, 1.6]]], [[0, [0, 2.4, -3.8]], [5, [.6, 2.2, -3.8]], [9.3, [2.6, 1.6, -2.8]]], u);
      h.face(C); const point = u > 5.6; h.pose({ armL: point ? [80, 0] : [10, 6], armR: [10, 6], head: point ? -5 : 0 }); h.eye(u < 5.6 ? 'look' : u < 7.2 ? 'smug' : 'wide');
      return { focus: C.position.distanceTo(u < 5 ? mapa.position : h.root.position), range: 2.5, blur: 12, bloom: .3, bloomT: .9, vig: .5 };
    };
  });
}

/** Estação espacial: treliça, painéis solares, módulos. */
function estacao() { const g = new THREE.Group(); const m = std('#D8D8DC', { metalness: .4, roughness: .4 }), ouro = std('#C9A04A', { metalness: .8, roughness: .3 });
  g.add(box(14, .25, .25, m, 0, 0, 0)); for (let i = -6; i <= 6; i += 1) g.add(box(.05, .4, .4, m, i, 0, 0, false));
  const pT = canvasTex(256, 512, (x) => { x.fillStyle = '#1A2A5A'; x.fillRect(0, 0, 256, 512); x.strokeStyle = '#C9A04A'; x.lineWidth = 3; for (let i = 0; i <= 256; i += 32) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 512); x.stroke(); } for (let i = 0; i <= 512; i += 32) { x.beginPath(); x.moveTo(0, i); x.lineTo(256, i); x.stroke(); } });
  for (const sx of [-6, -4.6, 4.6, 6]) for (const sz of [-1, 1]) { const p = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 4.2), new THREE.MeshStandardMaterial({ map: pT, metalness: .5, roughness: .3, side: THREE.DoubleSide })); p.rotation.x = -Math.PI / 2; p.position.set(sx, 0, sz * 2.4); g.add(p); }
  for (const [x, z, l] of [[0, 0, 4], [0, -2.4, 2], [1.2, 0, 1.5]]) { const mo = new THREE.Mesh(new THREE.CylinderGeometry(.45, .45, l, 18), m); mo.rotation.x = Math.PI / 2; mo.position.set(x, -.6, z); g.add(mo); }
  const rad = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1), std('#F4F4F0', { side: THREE.DoubleSide })); rad.position.set(-2, -.6, 1.5); g.add(rad); g.add(box(.5, .5, .5, ouro, 0, -.6, 2.3)); return g; }

/** 36. A estação espacial vai sentir a sua falta — 254.2 a 262.45 */
export function sEstacao(t0, t1) {
  return mk(t0, t1, { bg: '#02030A', fov: 34, far: 2400 }, (c) => {
    stars(c, 5000, 900, 21); nebula(c, -200, 60, -600, 900, '#5FD8FF', 5, .06);
    const sun = new THREE.DirectionalLight('#FFF4E0', 4); sun.position.set(30, 20, 20); c.add(sun); c.add(new THREE.AmbientLight('#2A3550', .5));
    const E = earth(c, 60); E.position.set(0, -68, -30);
    const iss = estacao(); c.add(iss); const puff = glowSprite('#FFFFFF', 1, 0); c.add(puff);
    return (t, u, C) => {
      E.rotation.y = 1 + u * .02; iss.position.set(0, lerp(0, -.6, u / 8.3), 0); iss.rotation.set(.2, u * .03, .05);
      const pp = u > 4.6 && u < 5.4 ? Math.sin((u - 4.6) / .8 * Math.PI) : 0; puff.material.opacity = pp * .8; puff.position.set(0, -.6, 3.4 + pp * .5); puff.scale.setScalar(.5 + pp * 1.5);
      cam(C, [[0, [10, 4, 14]], [8.3, [3, 2, 10]]], [[0, [0, -.4, 0]], [8.3, [0, -1.2, 0]]], u);
      return { focus: C.position.length(), range: 12, blur: 4, bloom: .5, bloomT: .8, vig: .5 };
    };
  });
}

/** 37. A estrela cadente mais cara da história — e só você vai ver — 262.45 a 271.81 */
export function sCadente(t0, t1) {
  return mk(t0, t1, { bg: '#0A0C24', fog: ['#141838', .002], fov: 36, far: 900 }, (c) => {
    stars(c, 3000, 300, 9); sky(c, -200, 800, 300, [[0, '#0A0C24'], [.6, '#24205A'], [.9, '#5A3A6A'], [1, '#8A5A6A']]);
    const gr = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), std('#2A3A2A')); gr.rotation.x = -Math.PI / 2; c.add(gr);
    const colina = new THREE.Mesh(new THREE.SphereGeometry(30, 40, 20, 0, 6.3, 0, .5), std('#3A4A30')); colina.position.set(0, -26.5, -8); colina.receiveShadow = true; c.add(colina);
    skyline(c, -120, 500, 40, ['#141228', '#18142E', '#1C1834'], true, 4);
    tree(c, -6, -12, 2, ['#1A2A1A', '#22321E', '#2A3A24', '#4A5A34'], 1); tree(c, 7, -14, 2.4, ['#1A2A1A', '#22321E', '#2A3A24', '#4A5A34'], 2);
    const lua = new THREE.DirectionalLight('#A8B8FF', 1); lua.position.set(-10, 20, 10); c.add(lua); c.add(new THREE.HemisphereLight('#4A4A8A', '#101010', .5));
    // a estação pegando fogo em pedaços
    const pedacos = []; for (let i = 0; i < 5; i++) { const f = fireball(30 + i, 2.6 - i * .35, [-1, -.35, 0], 12); c.add(f); pedacos.push(f); }
    const back = cut(backTex(), 1.1, 1.43); back.position.set(.3, 1.5, -6.5); c.add(back);
    return (t, u, C) => {
      const k = smooth(.5, 9, u); pedacos.forEach((f, i) => { f.flick(u + i); const dv = i * .6 * smooth(2.5, 9, u); f.position.set(lerp(80, -60, k) + dv * 3, lerp(55, 18, k) - dv, -150 - i * 3); });
      cam(C, [[0, [0, 1.9, -3]], [9.4, [.6, 1.6, -4.4]]], [[0, [0, 6, -40]], [9.4, [-5, 8, -40]]], u);
      return { focus: 3.4, range: 60, blur: 6, bloom: .6, bloomT: .75, vig: .55 };
    };
  });
}

/** 38. A solidão: os primeiros meses passam na correria — 271.81 a 280.95 */
export function sCorreria(t0, t1) {
  return mk(t0, t1, { bg: '#F2D9B0', fog: ['#EAD8C0', .012], fov: 34 }, (c) => {
    cidade(c, { seed: 61, overgrown: .2, skyStops: [[0, '#8AA8D8'], [.6, '#F2C8A0'], [1, '#FFD8A8']] });
    const h = hero(c, 0, -4, 0, .25); h.tint('#FFF0E0');
    const galao = new THREE.Mesh(new THREE.CylinderGeometry(.16, .16, .45, 16), new THREE.MeshStandardMaterial({ color: '#8FC8F0', transparent: true, opacity: .8 })); c.add(galao); const cx = box(.5, .4, .4, std('#B8864A'), 0, 0, 0); c.add(cx);
    const pilha = []; for (let i = 0; i < 8; i++) { const b = box(.5, .4, .4, std(i % 2 ? '#B8864A' : '#A8764A'), 2.4 + (i % 3) * .52, .2 + Math.floor(i / 3) * .41, -5); c.add(b); pilha.push(b); } for (let i = 0; i < 4; i++) { const g = new THREE.Mesh(new THREE.CylinderGeometry(.16, .16, .45, 16), new THREE.MeshStandardMaterial({ color: '#8FC8F0', transparent: true, opacity: .8 })); g.position.set(-2.4 + i * .36, .23, -5); c.add(g); }
    return (t, u, C) => {
      const z = -9 + u * 1.1; h.root.position.set(Math.sin(u * .7) * .4, 0, z); h.walk(u, 1.4, 1.1); h.face(C); h.pose({ armL: [30, -80], armR: [30, -80], legL: [Math.sin(u * 9) * 15, Math.max(0, -Math.sin(u * 9)) * 26], legR: [-Math.sin(u * 9) * 15, Math.max(0, Math.sin(u * 9)) * 26], bob: Math.abs(Math.cos(u * 9)) * .03 }); h.eye(u < 5 ? 'down' : 'flat');
      cx.position.set(h.root.position.x, 1.05, z + .2); galao.position.set(h.root.position.x - .42, .62, z + .1);
      cam(C, [[0, [1.5, 1.4, -1]], [9.1, [1, 1.5, 3.5]]], [[0, [0, 1.2, -9]], [9.1, [0, 1.2, -1]]], u);
      return { focus: C.position.distanceTo(h.root.position), range: 3, blur: 12, bloom: .25, bloomT: .95, vig: .42 };
    };
  });
}

/** 39. A bola de vôlei: conversa, nome, briga — 280.95 a 287.75 */
export function sBola(t0, t1) {
  return mk(t0, t1, { bg: '#2A2030', fog: ['#2A2030', .02], fov: 34 }, (c) => {
    comodo(c, { win: [-2.6, -.4, 1.2, 3.2], wall: '#5A4A3A', side: false });
    sky(c, -30, 80, 50, [[0, '#2A2252'], [1, '#C46A5E']]); skyline(c, -24, 60, 18, ['#2F2748', '#3B2F54', '#4A3A5E'], true, 7, -3);
    const tbT = canvasTex(512, 256, (x) => { x.fillStyle = '#F4F0E0'; x.fillRect(0, 0, 512, 256); x.strokeStyle = '#2A6AA8'; x.lineWidth = 14; x.beginPath(); x.moveTo(0, 90); x.quadraticCurveTo(256, 30, 512, 90); x.stroke(); x.strokeStyle = '#E9B44C'; x.beginPath(); x.moveTo(0, 170); x.quadraticCurveTo(256, 230, 512, 170); x.stroke(); x.fillStyle = '#9A3A2A'; x.save(); x.translate(256, 128); x.beginPath(); x.ellipse(0, 10, 34, 40, 0, 0, 7); x.fill(); for (let i = 0; i < 5; i++) { x.save(); x.rotate(-.7 + i * .35); x.beginPath(); x.ellipse(0, -50, 9, 26, 0, 0, 7); x.fill(); x.restore(); } x.restore(); x.fillStyle = '#1A1A22'; x.beginPath(); x.arc(236, 120, 6, 0, 7); x.arc(276, 120, 6, 0, 7); x.fill(); });
    const bola = new THREE.Mesh(new THREE.SphereGeometry(.3, 32, 20), new THREE.MeshStandardMaterial({ map: tbT, roughness: .6 })); bola.castShadow = true; c.add(bola);
    const nome = letreiro('JORGE', .8, .24, '#F4F0E0', '#C9361F', 0, 'Caveat'); c.add(nome);
    c.add(box(1.4, .4, .9, std('#8E6242'), .3, .2, -2.6)); planta(c, 2.4, -3.3, .9);
    const vela = glowSprite('#FFC67A', .5, .8); vela.position.set(.6, .55, -2.6); c.add(vela); const L = new THREE.PointLight('#FFB060', 10, 6, 1.5); L.position.set(1.2, 1.8, .2); L.intensity = 4; L.castShadow = true; c.add(L); c.add(new THREE.HemisphereLight('#8A7AA8', '#2a1a14', .6));
    const h = hero(c, -1.0, -1.6, 0, .25); h.tint('#FFE8D0');
    return (t, u, C) => {
      const briga = u > 5.0; const b = briga ? Math.abs(Math.sin(u * 7)) * .25 : 0;
      bola.position.set(.5, .3 + b, -1.5); bola.rotation.y = 1.57 + (briga ? Math.sin(u * 7) * .3 : 0); nome.visible = u > 3.1; nome.position.set(.5, .78 + b, -1.5); pointer(nome, C);
      cam(C, [[0, [-.2, 1.2, 2.6]], [6.8, [-.3, 1.1, 1.4]]], [[0, [-.3, .8, -1.6]], [6.8, [-.3, .8, -1.6]]], u);
      h.face(C); if (!briga) { h.pose({ armL: [10, 6], armR: [30 + Math.sin(u * 5) * 15, -40], head: Math.sin(u * 3) * 4 }); h.eye(u < 3.1 ? 'happy' : 'smug'); } else { const f = Math.sin(u * 9); h.pose({ armL: [70 + f * 30, 30], armR: [70 - f * 30, 30], head: f * 5, lean: f * 3 }); h.eye('angry'); }
      return { focus: C.position.distanceTo(h.root.position), range: 2.4, blur: 12, bloom: .35, bloomT: .88, vig: .5 };
    };
  });
}

/** Mercado simples para a conversa sozinho. */
function corredor(c) { const fl = new THREE.Mesh(new THREE.PlaneGeometry(14, 40), std('#D8D2C4', { roughness: .3 })); fl.rotation.x = -Math.PI / 2; fl.position.z = -12; fl.receiveShadow = true; c.add(fl); const R = rng(7); for (const sx of [-1, 1]) for (let s = 0; s < 10; s++) { const z = 2 - s * 2.4; c.add(box(.9, 2.4, 2.4, std('#F4F4F0'), sx * 2.4, 1.2, z)); for (let k = 0; k < 4; k++) for (let j = 0; j < 8; j++) { const h = .2 + R() * .2; c.add(box(.3, h, .24, ['#E9483A', '#F2C14E', '#36AEA2', '#4A86C7', '#F4EFE4'][(j + k + s) % 5], sx * 1.95, .3 + k * .5 + h / 2, z - 1 + j * .28)); } } c.add(new THREE.HemisphereLight('#FFFFFF', '#B8B0A0', 1.2)); const k = new THREE.DirectionalLight('#FFF4E0', 1.2); k.position.set(2, 10, 6); c.add(k); }

/** 40. Você fala sozinho no supermercado — 287.75 a 291.95 */
export function sFalaSozinho(t0, t1) {
  return mk(t0, t1, { bg: '#E8E8EC', fog: ['#E8ECEE', .035], fov: 34 }, (c) => {
    corredor(c); const h = hero(c, 0, -3, 0, .25); h.tint('#FFFFFF');
    const bal = (tx) => cut(canvasTex(320, 200, (x) => { x.fillStyle = '#FBF7EC'; x.beginPath(); x.roundRect(10, 10, 300, 140, 40); x.fill(); x.beginPath(); x.moveTo(110, 148); x.lineTo(120, 196); x.lineTo(160, 148); x.fill(); x.fillStyle = '#20202A'; x.font = '900 64px Fraunces'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(tx, 160, 84); }), .9, .56);
    const B = [bal('...'), bal('né?'), bal('pois é')]; B.forEach(b => c.add(b));
    return (t, u, C) => {
      cam(C, [[0, [.8, 1.5, 2]], [4.2, [.4, 1.5, 1]]], [[0, [0, 1.5, -3]], [4.2, [0, 1.6, -3]]], u);
      h.face(C); h.pose({ armL: [20 + Math.sin(u * 4) * 20, -20], armR: [30 + Math.cos(u * 4) * 20, -30], head: Math.sin(u * 3) * 5 }); h.eye(Math.floor(u * 2) % 2 ? 'look' : 'lookl');
      B.forEach((b, i) => { const a = .2 + i * 1.2; const p = smooth(a, a + .15, u) * (1 - smooth(a + 1.1, a + 1.3, u)); b.visible = p > .02; b.scale.setScalar(p); b.position.set(-.6 + i * .6, 2.4, -3); pointer(b, C); });
      return { focus: C.position.distanceTo(h.root.position), range: 2.4, blur: 12, bloom: .25, bloomT: .95, vig: .42 };
    };
  });
}

/** 41. Aniversário sozinho: parabéns, é pique — 291.95 a 297.32 */
export function sAniversario(t0, t1) {
  return mk(t0, t1, { bg: '#0E0C18', fog: ['#120E1C', .03], fov: 32 }, (c) => {
    comodo(c, { wall: '#3A2A4A', side: false });
    c.add(box(1.6, .06, 1, std('#8E6242'), 0, .9, -1.6)); for (const [x, z] of [[-.7, -2], [.7, -2], [-.7, -1.2], [.7, -1.2]]) c.add(box(.05, .88, .05, '#5C3C28', x, .44, z));
    const bolo = new THREE.Group(); const b1 = new THREE.Mesh(new THREE.CylinderGeometry(.3, .3, .22, 28), std('#F4D0D8')); b1.position.y = .11; bolo.add(b1); const b2 = new THREE.Mesh(new THREE.CylinderGeometry(.31, .31, .04, 28), std('#D2728A')); b2.position.y = .23; bolo.add(b2); for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283; const s = new THREE.Mesh(new THREE.SphereGeometry(.03, 8, 6), std(['#F2C14E', '#36AEA2', '#E9483A'][i % 3])); s.position.set(Math.cos(a) * .24, .26, Math.sin(a) * .24); bolo.add(s); } bolo.add(box(.02, .14, .02, '#4A86C7', 0, .33, 0, false)); bolo.position.set(0, .93, -1.6); c.add(bolo);
    const chama = glowSprite('#FFC67A', .3, 1); chama.position.set(0, 1.35, -1.6); c.add(chama); const L = new THREE.PointLight('#FFB060', 6, 5, 1.5); L.position.set(0, 1.45, -1.5); L.castShadow = true; c.add(L);
    const chapeu = (tex) => tex('chapeu', 300, 300, (x) => { x.translate(150, 150); x.fillStyle = '#F2C14E'; x.beginPath(); x.moveTo(-60, -110); x.lineTo(0, -250); x.lineTo(60, -110); x.fill(); x.fillStyle = '#E9483A'; for (let i = 0; i < 3; i++) { x.beginPath(); x.arc(-20 + i * 20, -150 - i * 20, 8, 0, 7); x.fill(); } x.beginPath(); x.arc(0, -250, 14, 0, 7); x.fill(); });
    const h = makeChar({ outfit: 'hero', glow: .25, hat: chapeu }); h.place(0, -2.3, -.2); c.add(h.root); h.tint('#FFE0C0');
    c.add(new THREE.HemisphereLight('#3A3050', '#101010', .4));
    return (t, u, C) => {
      const blow = u > 3.4, out = u > 4.1; chama.visible = !out; L.intensity = out ? 0 : 6 + Math.sin(u * 20) * 1; chama.scale.setScalar(blow ? .3 * (1 - smooth(3.4, 4.1, u)) : .3 + Math.sin(u * 17) * .03);
      cam(C, [[0, [.3, 1.5, 1.4]], [5.4, [.1, 1.5, .6]]], [[0, [0, 1.3, -1.8]], [5.4, [0, 1.45, -2]]], u);
      h.face(C); h.pose({ armL: [20 + (u < 3 ? Math.abs(Math.sin(u * 6)) * 30 : 0), -40], armR: [20 + (u < 3 ? Math.abs(Math.sin(u * 6)) * 30 : 0), -40], head: blow ? -6 : Math.sin(u * 3) * 4, lean: blow ? -4 : 0 }); h.eye(u < 2 ? 'happy' : u < 3.4 ? 'smug' : u < 4.1 ? 'shut' : 'sad');
      return { focus: C.position.distanceTo(h.root.position), range: 1.8, blur: 13, bloom: .55, bloomT: .75, vig: .6, exposure: out ? .7 : 1 };
    };
  });
}

/** 42. O pior castigo é o silêncio: grades de luz, isolamento — 297.32 a 309.35 */
export function sSilencio(t0, t1) {
  return mk(t0, t1, { bg: '#0C0E1A', fog: ['#10121E', .03], fov: 34 }, (c) => {
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), std('#2A2A34', { roughness: .8 })); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; c.add(fl);
    c.add(box(40, 10, .3, std('#22222C'), 0, 5, -6));
    // janela alta com grade: luz projeta barras no chão
    const jan = new THREE.Group(); for (let i = 0; i < 6; i++) jan.add(box(.08, 2.2, .3, '#111', -1.25 + i * .5, 0, 0)); jan.add(box(2.7, .1, .3, '#111', 0, 1.1, 0)); jan.add(box(2.7, .1, .3, '#111', 0, -1.1, 0)); jan.position.set(0, 4.5, -5.8); c.add(jan);
    const luz = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.2), new THREE.MeshBasicMaterial({ color: '#BFD0FF' })); luz.position.set(0, 4.5, -5.95); c.add(luz);
    const sp = new THREE.SpotLight('#BFD0FF', 160, 22, .45, .3, 1.2); sp.position.set(0, 5, -7.5); sp.target.position.set(0, 0, 1.5); sp.castShadow = true; sp.shadow.mapSize.set(2048, 2048); c.add(sp, sp.target);
    feixe(c, 0, 2.6, -3, 2.6, 6, 0, '#BFD0FF', .08).rotation.x = -.9;
    const pz = poeira(c, 120, [-2, 2, 0, 4.5, -5, 2], 5, '#CFDCFF');
    c.add(new THREE.HemisphereLight('#2A2A4A', '#080808', .4));
    const h = hero(c, 0, .6, 0, .2); h.tint('#C8D4FF');
    return (t, u, C) => {
      pz(u);
      cam(C, [[0, [0, 1.5, 3.4]], [6, [0, 2.2, 7]], [12, [0, 4.5, 12]]], [[0, [0, 1.3, .6]], [6, [0, 1.2, .6]], [12, [0, 1, -1]]], u);
      h.face(C); h.pose({ armL: [6, 4], armR: [6, 4], head: -6 + Math.sin(u * .5) * 2, squash: -.02 }); h.eye(u < 4 ? 'flat' : u < 8 ? 'sad' : 'down'); if (Math.floor(u * 10) % 47 === 0) h.eye('shut');
      return { focus: C.position.distanceTo(h.root.position), range: 3, blur: 10, bloom: .45, bloomT: .8, vig: .65, sat: .7 };
    };
  });
}

/** 43. A rotina: varre a calçada, dá bom dia aos pombos — 309.35 a 318.5 */
export function sRotina(t0, t1) {
  return mk(t0, t1, { bg: '#F6C89A', fog: ['#F2C8A0', .012], fov: 34 }, (c) => {
    cidade(c, { seed: 71, overgrown: .25, skyStops: [[0, '#6A8AC8'], [.55, '#E8A88A'], [.85, '#FCC88A'], [1, '#FFE0A8']] });
    const h = hero(c, 5.6, -3, .14, .3); h.tint('#FFE8D0');
    const vassoura = new THREE.Group(); vassoura.add(box(.04, 1.3, .04, '#B8864A', 0, .65, 0)); vassoura.add(box(.36, .14, .08, '#E9B44C', 0, .05, 0)); c.add(vassoura);
    const R = rng(5), pombos = []; for (let i = 0; i < 7; i++) { const p = bicho(c, 'pombo', 4.2 + R() * 3, -4.6 - R() * 2, .45); p.position.y += .14; p.blob.position.y = .155; pombos.push({ p, x: p.position.x, z: p.position.z, ph: R() * 6 }); }
    const poeiraV = poeira(c, 40, [5, 6.5, .15, .5, -3.3, -2.6], 9, '#E8D8B0');
    return (t, u, C) => {
      poeiraV(u);
      for (const q of pombos) { q.p.position.set(q.x + Math.sin(u * .8 + q.ph) * .2, .14 + .17 + Math.abs(Math.sin(u * 6 + q.ph)) * .02, q.z); q.p.rotation.z = Math.sin(u * 5 + q.ph) * .1; pointer(q.p, C); }
      const wave = u > 4.4; const sw = Math.sin(u * 4);
      h.face(C); if (!wave) { h.pose({ armL: [30, -60], armR: [30, -60], head: 4, lean: sw * 4 }); h.eye('down'); vassoura.visible = true; vassoura.position.set(h.root.position.x + .25 + sw * .25, .14, h.root.position.z + .2); vassoura.rotation.z = -.3 - sw * .2; }
      else { vassoura.position.set(h.root.position.x - .5, .14, h.root.position.z - .1); vassoura.rotation.z = .15; h.pose({ armL: [10, 6], armR: [150 + Math.sin(u * 9) * 15, 20], head: 6 }); h.eye(u < 7 ? 'happy' : 'flat'); }
      cam(C, [[0, [3.2, 1.4, 1.5]], [9.2, [3.8, 1.3, .2]]], [[0, [5.6, 1.1, -3.4]], [9.2, [5.2, .9, -3.8]]], u);
      return { focus: C.position.distanceTo(h.root.position), range: 2.8, blur: 12, bloom: .35, bloomT: .9, vig: .42 };
    };
  });
}

/** 44. Uma conta que não fecha: precisaria de mais uma pessoa — 318.5 a 327.65 */
export function sConta(t0, t1) {
  return mk(t0, t1, { bg: '#2A3A2E', fog: ['#2A3030', .02], fov: 34 }, (c) => {
    comodo(c, { wall: '#C9B88A', side: false, floor: '#6A4A32' });
    const qc = document.createElement('canvas'); qc.width = 1024; qc.height = 512; const qx = qc.getContext('2d'); const qT = new THREE.CanvasTexture(qc); qT.colorSpace = THREE.SRGBColorSpace;
    const boneco = (x, y, s, col = '#F4F4EC') => { qx.strokeStyle = col; qx.lineWidth = 6; qx.beginPath(); qx.arc(x, y, 22 * s, 0, 7); qx.stroke(); qx.beginPath(); qx.moveTo(x, y + 22 * s); qx.lineTo(x, y + 90 * s); qx.moveTo(x - 30 * s, y + 50 * s); qx.lineTo(x + 30 * s, y + 50 * s); qx.moveTo(x, y + 90 * s); qx.lineTo(x - 22 * s, y + 140 * s); qx.moveTo(x, y + 90 * s); qx.lineTo(x + 22 * s, y + 140 * s); qx.stroke(); };
    const paint = (k, chk) => { qx.fillStyle = '#1E3A2A'; qx.fillRect(0, 0, 1024, 512); qx.strokeStyle = '#3A2A1A'; qx.lineWidth = 24; qx.strokeRect(0, 0, 1024, 512); boneco(170, 140, 1.4); qx.fillStyle = '#F4F4EC'; qx.font = '700 110px Caveat'; qx.textAlign = 'center'; qx.fillText('+', 330, 280); if (k > 0) { qx.font = '700 160px Caveat'; qx.fillText('?', 470, 290); } if (k > 1) { qx.font = '700 110px Caveat'; qx.fillText('=', 620, 280); qx.font = '700 64px Caveat'; qx.fillText('humanidade', 830, 280); } for (let i = 0; i < chk; i++) { qx.strokeStyle = '#8FE08A'; qx.lineWidth = 10; qx.beginPath(); qx.moveTo(120 + i * 110, 430); qx.lineTo(150 + i * 110, 470); qx.lineTo(210 + i * 110, 390); qx.stroke(); } qT.needsUpdate = true; };
    const lousa = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 2.2), new THREE.MeshStandardMaterial({ map: qT, roughness: .9 })); lousa.position.set(-.4, 2.2, -3.78); c.add(lousa);
    const L = new THREE.SpotLight('#FFE8C8', 50, 12, .6, .5, 1.4); L.position.set(0, 4.5, 1.5); L.target.position.set(0, 1.6, -3.5); L.castShadow = true; c.add(L, L.target); c.add(new THREE.HemisphereLight('#8A8A6A', '#202020', .6));
    const h = hero(c, 2.4, -2.8, 0, .25); h.tint('#FFF4E0'); const giz = box(.03, .1, .03, '#F4F4EC', 0, 0, 0); c.add(giz);
    let lk = '';
    return (t, u, C) => {
      const k = u < 1.8 ? 0 : u < 3.4 ? 1 : 2, chk = u > 6.6 ? Math.min(3, Math.floor((u - 6.6) / .5) + 1) : 0; const key = k + '_' + chk; if (key !== lk) { paint(k, chk); lk = key; }
      cam(C, [[0, [-.4, 2.1, 2.6]], [5.5, [.4, 1.9, 3.4]], [9.2, [1.4, 1.7, 1.4]]], [[0, [-.4, 2.2, -3.8]], [5.5, [.4, 2, -3.6]], [9.2, [2.1, 1.6, -3]]], u);
      h.face(C); const write = (u > 1.6 && u < 3.6) || u > 6.4; h.pose({ armL: [10, 6], armR: write ? [100 + Math.sin(u * 14) * 6, -20] : [10, 6], head: write ? -4 : 6 }); h.eye(u < 6.4 ? 'look' : u < 8.2 ? 'down' : 'sad'); giz.visible = write; giz.position.set(h.root.position.x - .55, 2.0, h.root.position.z + .1);
      return { focus: C.position.distanceTo(u < 5.5 ? lousa.position : h.root.position), range: 2.6, blur: 11, bloom: .3, bloomT: .9, vig: .48 };
    };
  });
}
