// Capítulo 2: as luzes se apagam (70.65 a 141.74 s).
import * as THREE from 'three';
import { smooth, rng, lerp, clamp } from './motor/core.js';
import { canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, sky, skyline, pointer, car, lamp, tree } from './motor/kit.js';
import { stars, nebula, smoke } from './motor/kit2.js';
import { mk, cam, hero, luzes, feixe, quadro, letreiro, planta, comodo, phoneMesh, TELA } from './lib.js';
import { earth } from './extra.js';

const terreno = (c, col, rep = 30, size = 400) => { const t = canvasTex(1024, 1024, (x) => { x.fillStyle = col; x.fillRect(0, 0, 1024, 1024); const R = rng(4); for (let i = 0; i < 6000; i++) { x.fillStyle = `rgba(${R() < .5 ? '255,255,255' : '0,0,0'},.05)`; x.fillRect(R() * 1024, R() * 1024, 4, 4); } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep, rep); const g = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshStandardMaterial({ map: t, roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g); return g; };
/** Torre de resfriamento (hiperboloide). */
export const torreResf = (r = 6, h = 16, col = '#C9C2B6') => { const pts = []; for (let i = 0; i <= 12; i++) { const y = i / 12 * h; const k = (y / h - .7); pts.push(new THREE.Vector2(r * (.62 + 1.1 * k * k), y)); } const m = new THREE.Mesh(new THREE.LatheGeometry(pts, 40), std(col, { side: THREE.DoubleSide })); m.castShadow = m.receiveShadow = true; return m; };
/** Poste de alta tensão. */
export const torreAlta = (h = 14) => { const g = new THREE.Group(); const m = std('#6E747E', { metalness: .4 }); for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { const l = box(.14, h, .14, m, x * .9, h / 2, z * .9); l.rotation.z = -x * .06; l.rotation.x = z * .06; g.add(l); } for (let i = 1; i < 6; i++) { const y = i * h / 6; const w = 1.9 - i * .18; g.add(box(w * 2, .08, .08, m, 0, y, w - .1, false)); g.add(box(w * 2, .08, .08, m, 0, y, -w + .1, false)); g.add(box(.08, .08, w * 2, m, w - .1, y, 0, false)); g.add(box(.08, .08, w * 2, m, -w + .1, y, 0, false)); } for (const y of [h * .78, h * .93]) g.add(box(6, .2, .2, m, 0, y, 0)); return g; };

/** 12. Usinas a carvão e gás: sem ninguém, desligam uma por uma — 70.65 a 80.85 */
export function sUsina(t0, t1) {
  return mk(t0, t1, { bg: '#3A2E4A', fog: ['#6A4A5A', .012], fov: 34, far: 900 }, (c) => {
    sky(c, -200, 900, 400, [[0, '#1A1838'], [.5, '#4A2E52'], [.8, '#A8546A'], [1, '#E8885A']]);
    terreno(c, '#4A4038');
    const lights = []; const winM = () => new THREE.MeshStandardMaterial({ color: '#000', emissive: '#FFC47A', emissiveIntensity: 1.1 });
    // prédios da usina
    [[-8, -20, 10, 8, 7], [5, -24, 14, 10, 9], [18, -30, 9, 12, 6]].forEach(([x, z, w, h, d]) => { c.add(box(w, h, d, std('#7A6E68'), x, h / 2, z)); for (let i = 0; i < Math.floor(w / 1.4); i++) for (let j = 0; j < 3; j++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(.8, .9), winM()); m.position.set(x - w / 2 + 1 + i * 1.4, 1.6 + j * 2.2, z + d / 2 + .02); c.add(m); lights.push(m); } });
    // chaminés listradas e fumaça
    const smk = []; [[-2, -34, 34], [3, -36, 30], [26, -40, 26]].forEach(([x, z, h], i) => { const ch = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.6, h, 24), std('#B8B0A8')); ch.position.set(x, h / 2, z); ch.castShadow = true; c.add(ch); for (let k = 0; k < 3; k++) { const r = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.2, 1.6, 24), std(k % 2 ? '#F4F0E8' : '#C9361F')); r.position.set(x, h - 1 - k * 3.2, z); c.add(r); } const led = new THREE.Mesh(new THREE.SphereGeometry(.25, 8, 6), new THREE.MeshStandardMaterial({ emissive: '#FF3A20', emissiveIntensity: 5, color: '#f00' })); led.position.set(x, h + .3, z); c.add(led); lights.push(led); smk.push(smoke(c, 14, [x, h + 1, z], { col: '#9A8A90', size: 8, rise: 26, spread: 2, seed: 4 + i, life: 4 })); });
    const t1m = torreResf(9, 22); t1m.position.set(-26, 0, -48); c.add(t1m); const t2m = torreResf(9, 22); t2m.position.set(-46, 0, -56); c.add(t2m); smk.push(smoke(c, 14, [-26, 22, -48], { col: '#E8E2DA', size: 14, rise: 30, spread: 5, seed: 9, life: 5 }));
    // monte de carvão e esteira
    const pile = new THREE.Mesh(new THREE.ConeGeometry(6, 4, 9), std('#1E1C22', { flatShading: true })); pile.position.set(12, 2, -8); c.add(pile); const belt = box(1.2, .3, 22, std('#3A3A42'), 6, 3, -12); belt.rotation.x = -.18; c.add(belt);
    // cerca, postes com luz
    for (let i = -20; i < 20; i++) c.add(box(.06, 1.8, .06, '#555', i * 1.2, .9, 4, false)); c.add(box(48, .05, .05, '#777', 0, 1.7, 4, false)); c.add(box(48, .05, .05, '#777', 0, .9, 4, false));
    const lamps = []; for (const x of [-12, -4, 4, 12]) { const L = lamp(c, x, 6, 1, true, 6); lamps.push(L); }
    const placa = letreiro('USINA TERMELÉTRICA', 8, 1.1, '#2A3550', '#F4EFE4', .5, 'Inter'); placa.position.set(-6, 5, 6); c.add(placa); c.add(box(.2, 4.5, .2, '#333', -9.5, 2.2, 5.9)); c.add(box(.2, 4.5, .2, '#333', -2.5, 2.2, 5.9));
    luzes(c, { night: true, ki: 1.4, key: '#FFB08A', pos: [30, 20, -40], r: 60, target: [0, 0, -10] });
    return (t, u, C) => {
      smk.forEach(f => f(u));
      lights.forEach((m, i) => { const off = 7.7 + (i % 9) * .2; m.material.emissiveIntensity = u > off ? .02 : (m.geometry.type === 'SphereGeometry' ? 5 : 1.1); });
      lamps.forEach((L, i) => { const on = u < 8.2 + i * .35; L.children.forEach(ch => { if (ch.isPointLight) ch.intensity = on ? 6 : 0; if (ch.isSprite) ch.visible = on; if (ch.material && ch.material.emissiveIntensity !== undefined && ch.material.emissive && ch.material.emissive.r > .5) ch.material.emissiveIntensity = on ? 2.2 : 0; }); });
      cam(C, [[0, [-14, 3, 16]], [10.2, [4, 4.5, 14]]], [[0, [-4, 8, -20]], [10.2, [6, 7, -20]]], u);
      return { focus: 30, range: 30, blur: 6, bloom: .45, bloomT: .85, vig: .5, exposure: lerp(1, .82, smooth(7.6, 10, u)) };
    };
  });
}

/** Textura da Terra à noite com luzes das cidades. */
const noiteTex = () => canvasTex(2048, 1024, (x) => { x.fillStyle = '#04081A'; x.fillRect(0, 0, 2048, 1024); const R = rng(77); const land = [[250, 200, 400, 200], [560, 640, 120, 260], [1000, 220, 180, 110], [1080, 520, 160, 220], [1500, 280, 420, 180], [1700, 680, 120, 60]]; x.fillStyle = '#0E1630'; for (const [a, b, w, h] of land) { x.beginPath(); x.ellipse(a, b, w, h, 0, 0, 7); x.fill(); } for (const [a, b, w, h] of land) for (let i = 0; i < w * 1.2; i++) { const an = R() * 6.28, rr = Math.sqrt(R()); const px = a + Math.cos(an) * w * rr, py = b + Math.sin(an) * h * rr; x.fillStyle = R() < .3 ? '#FFE0A0' : '#FFB860'; x.globalAlpha = .5 + R() * .5; x.fillRect(px, py, 2 + R() * 3, 2 + R() * 3); } x.globalAlpha = 1; });
/** 13. O planeta apagando à noite — 80.85 a 83.87 */
export function sTerraNoite(t0, t1) {
  return mk(t0, t1, { bg: '#020309', fov: 34, far: 2400 }, (c) => {
    stars(c, 5000, 900, 3); nebula(c, -200, 80, -600, 900, '#5E6BFF', 3, .06);
    const tx = noiteTex(); const E = new THREE.Mesh(new THREE.SphereGeometry(5, 80, 56), new THREE.MeshStandardMaterial({ map: tx, emissiveMap: tx, emissive: '#fff', emissiveIntensity: 1.2, roughness: .9 })); E.position.set(0, -1.5, 0); c.add(E);
    const atm = new THREE.Mesh(new THREE.SphereGeometry(5.35, 64, 40), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, side: THREE.BackSide, blending: THREE.AdditiveBlending, vertexShader: 'varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}', fragmentShader: 'varying vec3 n;void main(){float k=pow(max(.86-abs(n.z),0.),2.4);gl_FragColor=vec4(.3,.5,1.,1.)*k*1.6;}' })); atm.position.copy(E.position); c.add(atm);
    const sun = new THREE.DirectionalLight('#9FB8FF', .5); sun.position.set(-20, 5, -10); c.add(sun); c.add(new THREE.AmbientLight('#1A2040', .4));
    return (t, u, C) => { E.rotation.y = 1.0 + u * .05; E.material.emissiveIntensity = lerp(1.2, .05, smooth(.4, 2.8, u)); cam(C, [[0, [0, 2, 13]], [3, [0, 1.6, 11.5]]], [[0, [0, -.5, 0]], [3, [0, -.6, 0]]], u); return { focus: 11, range: 20, blur: 3, bloom: .6, bloomT: .6, vig: .5 }; };
  });
}

/** 14. No Brasil: a hidrelétrica segue girando… provavelmente — 83.87 a 93.45 */
export function sHidro(t0, t1) {
  return mk(t0, t1, { bg: '#9EC4E0', fog: ['#C8DCE8', .006], fov: 36, far: 900 }, (c) => {
    sky(c, -300, 1000, 400, [[0, '#4A86C7'], [.6, '#9EC4E0'], [1, '#EAF2E8']]);
    const hill = (x, z, r, h, col) => { const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, 9), std(col, { flatShading: true })); m.position.set(x, h / 2 - 2, z); c.add(m); }; for (let i = 0; i < 12; i++) hill(-90 + i * 16, -140 - (i % 3) * 20, 40, 30 + (i % 4) * 8, ['#4E7A44', '#5E8A50', '#3E6A3A'][i % 3]);
    // reservatório acima da barragem
    const wt = canvasTex(512, 512, (x) => { x.fillStyle = '#2E6A8E'; x.fillRect(0, 0, 512, 512); const R = rng(3); x.strokeStyle = '#ffffff33'; x.lineWidth = 3; for (let i = 0; i < 200; i++) { const a = R() * 512, b = R() * 512; x.beginPath(); x.moveTo(a, b); x.quadraticCurveTo(a + 10, b - 4, a + 20, b); x.stroke(); } }); wt.wrapS = wt.wrapT = THREE.RepeatWrapping; wt.repeat.set(20, 10);
    const res = new THREE.Mesh(new THREE.PlaneGeometry(400, 160), new THREE.MeshStandardMaterial({ map: wt, roughness: .2, metalness: .1 })); res.rotation.x = -Math.PI / 2; res.position.set(0, 18, -100); c.add(res);
    // barragem: paredão curvo de concreto
    const damT = canvasTex(1024, 256, (x) => { x.fillStyle = '#C9C2B6'; x.fillRect(0, 0, 1024, 256); x.strokeStyle = '#A8A094'; x.lineWidth = 4; for (let i = 0; i < 1024; i += 64) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 256); x.stroke(); } for (let i = 0; i < 256; i += 64) { x.beginPath(); x.moveTo(0, i); x.lineTo(1024, i); x.stroke(); } const R = rng(2); for (let i = 0; i < 300; i++) { x.fillStyle = 'rgba(90,80,70,' + (R() * .12) + ')'; x.fillRect(R() * 1024, R() * 256, 20 + R() * 60, 4 + R() * 30); } }); damT.wrapS = THREE.RepeatWrapping; damT.repeat.set(3, 1); const dam = new THREE.Mesh(new THREE.CylinderGeometry(60, 60, 20, 80, 1, true, -.55, 1.1), new THREE.MeshStandardMaterial({ map: damT, side: THREE.DoubleSide, roughness: .95 })); dam.rotation.y = Math.PI; dam.position.set(0, 10, 40); c.add(dam);
    c.add(box(70, 1, 3, std('#B8B0A4'), 0, 20.2, -20)); for (let i = -12; i <= 12; i++) c.add(box(.2, 1.4, .2, '#555', i * 2.6, 21.2, -19, false));
    // vertedouro: água descendo animada
    const ft = canvasTex(128, 512, (x) => { const g = x.createLinearGradient(0, 0, 0, 512); g.addColorStop(0, '#DDF2FF'); g.addColorStop(1, '#8FC8E8'); x.fillStyle = g; x.fillRect(0, 0, 128, 512); x.strokeStyle = '#ffffff99'; x.lineWidth = 4; const R = rng(5); for (let i = 0; i < 60; i++) { const a = R() * 128; x.beginPath(); x.moveTo(a, R() * 512); x.lineTo(a, R() * 512); x.stroke(); } }); ft.wrapS = ft.wrapT = THREE.RepeatWrapping; ft.repeat.set(4, 2);
    const fall = new THREE.Mesh(new THREE.PlaneGeometry(14, 22), new THREE.MeshStandardMaterial({ map: ft, emissive: '#5A8AA8', emissiveIntensity: .3, roughness: .3 })); fall.position.set(-14, 9.5, -18); fall.rotation.x = -.15; c.add(fall);
    const rio = new THREE.Mesh(new THREE.PlaneGeometry(60, 120), new THREE.MeshStandardMaterial({ map: wt.clone(), roughness: .2 })); rio.material.map.needsUpdate = true; rio.material.map.repeat.set(6, 12); rio.rotation.x = -Math.PI / 2; rio.position.set(-6, .1, 30); c.add(rio); terreno(c, '#6E8A50', 40);
    const spray = smoke(c, 14, [-14, 1, -14], { col: '#FFFFFF', size: 7, rise: 6, spread: 8, seed: 3, life: 3 });
    // casa de força acesa e linhas de transmissão
    c.add(box(16, 6, 8, std('#E8E2D6'), 10, 3, -12)); for (let i = 0; i < 6; i++) { const w = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.6), new THREE.MeshStandardMaterial({ color: '#000', emissive: '#FFD79A', emissiveIntensity: 1.2 })); w.position.set(4 + i * 2.4, 3.5, -7.98); c.add(w); }
    const sg = letreiro('HIDRELÉTRICA', 7, 1, '#1F5E8A', '#FFFFFF', .4, 'Inter'); sg.position.set(10, 6.8, -7.9); c.add(sg);
    for (const [x, z] of [[24, -4], [34, 10], [44, 24]]) { const tw = torreAlta(16); tw.position.set(x, 0, z); tw.rotation.y = -.9; c.add(tw); }
    luzes(c, { ki: 3, pos: [-30, 40, 30], r: 60 });
    const h = hero(c, 2, -18.6, 20.7, .3); h.tint('#FFFFFF');
    return (t, u, C) => {
      ft.offset.y = -u * 1.2; wt.offset.x = u * .02; spray(u);
      cam(C, [[0, [-30, 12, 40]], [6, [-8, 16, 14]], [9.6, [-1, 21.6, -12]]], [[0, [-6, 8, -14]], [6, [0, 14, -18]], [9.6, [2, 21.8, -18.6]]], u);
      h.face(C); const shrug = smooth(8.4, 8.7, u); h.pose({ armL: [lerp(10, 50, shrug), lerp(6, 110, shrug)], armR: [lerp(10, 50, shrug), lerp(6, 110, shrug)], head: shrug * 8 }); h.eye(u < 8.4 ? 'happy' : 'flat');
      return { focus: C.position.distanceTo(h.root.position), range: lerp(40, 3, smooth(6, 9, u)), blur: 8, bloom: .25, bloomT: .95, vig: .38 };
    };
  });
}

/** 15. A rede elétrica é um equilibrista: e quando cai, cai tudo junto — 93.45 a 99.94 */
export function sEquilibrista(t0, t1) {
  return mk(t0, t1, { bg: '#F2B48A', fog: ['#F0B88E', .008], fov: 34, far: 900 }, (c) => {
    sky(c, -200, 900, 400, [[0, '#4A4A8A'], [.5, '#C46A7E'], [.8, '#F7A773'], [1, '#FFE0A0']]); skyline(c, -160, 600, 70, ['#7A5A78', '#8A6A80', '#9A7A88'], true, 3);
    terreno(c, '#6E7A4A');
    const tA = torreAlta(16), tB = torreAlta(16); tA.position.set(-14, 0, -10); tB.position.set(14, 0, -10); c.add(tA, tB);
    const H = 16 * .93, sag = (x) => H - 1.6 * (1 - (x / 14) ** 2);
    const cabos = []; for (const dz of [-2.6, 0, 2.6]) { const pts = []; for (let i = 0; i <= 40; i++) { const x = -14 + i * .7; pts.push(new THREE.Vector3(x, sag(x) - (dz === 0 ? 0 : 1.5), -10 + dz)); } const l = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, .04, 6), std('#1A1A22')); c.add(l); cabos.push(l); }
    const sp = glowSprite('#9FE0FF', 2.5, 0); c.add(sp);
    luzes(c, { key: '#FFB98C', ki: 3, pos: [-20, 10, 20], r: 40 });
    const h = hero(c, -3, -10, sag(-3) - .02, .35); h.tint('#FFE6D0');
    const vara = box(3.2, .05, .05, '#5C3C28', 0, 0, 0, false); c.add(vara);
    return (t, u, C) => {
      const walk = clamp(u / 4) * 4; const x = -3 + walk * .6; const fall = smooth(4.4, 5.6, u);
      const wob = Math.sin(u * 3) * (6 + u * 3);
      h.root.position.set(x, lerp(sag(x) - .02, sag(x) - 12, fall * fall), -10); h.face(C); h.walk(u, u < 4.3 ? .5 : 0, .5); h.pose({ armL: [95, 0], armR: [95, 0], lean: u < 4.3 ? wob * .5 : 25 + fall * 80, head: -wob * .3, legL: [8, 10], legR: [-8, 10] }); h.eye(u < 2.4 ? 'look' : u < 4.4 ? 'wide' : 'shut');
      vara.position.set(x, h.root.position.y + 1.5, -9.95); vara.rotation.z = (u < 4.3 ? wob : 25 + fall * 80) * Math.PI / 180;
      const spark = u > 4.45 ? Math.abs(Math.sin(u * 30)) * (1 - smooth(4.5, 6.2, u)) : 0; sp.material.opacity = spark; sp.position.set(-14, H, -10); sp.scale.setScalar(2 + spark * 3);
      cabos.forEach((l, i) => { l.position.y = -fall * (i + 1) * .6; });
      cam(C, [[0, [-1, 13.5, 2]], [6.5, [1.5, 12, 4.5]]], [[0, [-2.5, 14.2, -10]], [6.5, [0, 11, -10]]], u);
      return { focus: C.position.distanceTo(new THREE.Vector3(x, 14, -10)), range: 6, blur: 10, bloom: .45, bloomT: .85, vig: .45, flash: spark * .15 };
    };
  });
}

/** 16. A cozinha morre: geladeira, torneira, wi-fi — 99.94 a 106.65 */
export function sCozinha(t0, t1) {
  return mk(t0, t1, { bg: '#2A3040', fog: ['#2A2A38', .02], fov: 34 }, (c) => {
    comodo(c, { win: [1.2, 3.4, 1.4, 3.4], wall: '#E8DCC4', side: false, floor: '#8E7A68' });
    const azul = canvasTex(256, 256, (x) => { x.fillStyle = '#F4F1EA'; x.fillRect(0, 0, 256, 256); x.strokeStyle = '#4A86C7'; x.lineWidth = 3; for (let i = 0; i <= 256; i += 32) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 256); x.moveTo(0, i); x.lineTo(256, i); x.stroke(); } }); azul.wrapS = azul.wrapT = THREE.RepeatWrapping; azul.repeat.set(4, 1.5); const az = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.2), new THREE.MeshStandardMaterial({ map: azul })); az.position.set(-2.2, 1.6, -3.83); c.add(az);
    sky(c, -30, 80, 50, [[0, '#1A1838'], [1, '#6B3A62']]); skyline(c, -24, 60, 18, ['#2F2748', '#3B2F54', '#4A3A5E'], true, 7, -3);
    // balcão, pia, torneira
    c.add(box(4.6, .9, .65, std('#5C7A8E'), -2.2, .45, -3.5)); c.add(box(4.7, .06, .72, std('#E8E4DA'), -2.2, .93, -3.48)); const pia = box(.8, .05, .45, std('#B8BCC4', { metalness: .6 }), -1.6, .92, -3.48); c.add(pia);
    const torn = new THREE.Group(); torn.add(box(.05, .35, .05, std('#C8CCD4', { metalness: .8 }), 0, .17, 0)); torn.add(box(.05, .05, .25, std('#C8CCD4', { metalness: .8 }), 0, .33, .1)); torn.position.set(-1.6, .95, -3.72); c.add(torn);
    const water = new THREE.Mesh(new THREE.CylinderGeometry(.015, .015, .3, 8), new THREE.MeshStandardMaterial({ color: '#BFE8FF', transparent: true, opacity: .8, emissive: '#5FA8D8', emissiveIntensity: .4 })); water.position.set(-1.6, 1.13, -3.5); c.add(water);
    // armários altos, panelas, fruteira
    for (let i = 0; i < 4; i++) c.add(box(1.1, .8, .4, std('#5C7A8E'), -3.9 + i * 1.15, 2.7, -3.62)); [['#C9361F', -3.3], ['#E9B44C', -2.8]].forEach(([k, x]) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(.18, .16, .2, 18), std(k, { metalness: .3, roughness: .4 })); p.position.set(x, 1.06, -3.5); c.add(p); }); for (let i = 0; i < 5; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(.07, 12, 8), std(['#E9483A', '#F2C14E', '#8EAE56'][i % 3])); f.position.set(-.6 + (i % 3) * .1, 1.03 + Math.floor(i / 3) * .08, -3.4); c.add(f); }
    // geladeira aberta com luz
    const fr = new THREE.Group(); fr.add(box(1.0, 2.1, .8, std('#F4F4F0', { roughness: .3 }), 0, 1.05, 0)); const inside = box(.9, 1.9, .05, new THREE.MeshStandardMaterial({ color: '#fff', emissive: '#E8F4FF', emissiveIntensity: 1 }), 0, 1.05, .36, false); fr.add(inside); const door = new THREE.Group(); door.add(box(.06, 2.0, 1.0, std('#F4F4F0', { roughness: .3 }), 0, 1.05, .5)); door.position.set(.5, 0, .42); door.rotation.y = -1.2; fr.add(door); for (let i = 0; i < 4; i++) fr.add(box(.86, .02, .5, '#DDE8F0', 0, .4 + i * .45, .1, false)); fr.add(box(.2, .3, .15, '#E9483A', -.2, .58, .1)); fr.add(box(.15, .25, .15, '#F4F0E0', .2, 1.02, .1)); fr.position.set(1.0, 0, -3.3); c.add(fr); const fl = new THREE.PointLight('#E8F4FF', 6, 4); fl.position.set(1.0, 1.2, -2.4); c.add(fl);
    // roteador com luzinhas
    c.add(box(.35, .06, .22, std('#1A1A22'), -3.4, 1.0, -3.4)); const leds = []; for (let i = 0; i < 4; i++) { const l = new THREE.Mesh(new THREE.SphereGeometry(.012, 6, 4), new THREE.MeshStandardMaterial({ color: '#000', emissive: '#4AFF8A', emissiveIntensity: 4 })); l.position.set(-3.52 + i * .07, 1.035, -3.28); c.add(l); leds.push(l); } c.add(box(.02, .2, .02, '#1A1A22', -3.25, 1.12, -3.45));
    const relog = new THREE.Mesh(new THREE.CircleGeometry(.25, 32), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (x) => { x.fillStyle = '#F4EFE4'; x.beginPath(); x.arc(128, 128, 126, 0, 7); x.fill(); x.strokeStyle = '#2a2a2f'; x.lineWidth = 8; x.beginPath(); x.moveTo(128, 128); x.lineTo(128, 50); x.moveTo(128, 128); x.lineTo(186, 150); x.stroke(); }) })); relog.position.set(-.3, 2.8, -3.84); c.add(relog);
    c.add(new THREE.HemisphereLight('#B8C0E8', '#3a2a20', .7)); const tl = new THREE.PointLight('#FFE8C8', 10, 9, 1.5); tl.position.set(-1.5, 3.6, -1); tl.castShadow = true; c.add(tl);
    const h = hero(c, -1.0, -2.6, 0, .22); h.tint('#F8F0E8'); const copo = new THREE.Mesh(new THREE.CylinderGeometry(.06, .05, .15, 14), new THREE.MeshStandardMaterial({ color: '#CDEBFF', transparent: true, opacity: .6 })); c.add(copo);
    return (t, u, C) => {
      const offNet = u > .2, offFr = u > .9, offW = u > 2.0;
      leds.forEach((l, i) => l.material.emissiveIntensity = offNet ? 0 : 4 * (Math.sin(u * 20 + i) > 0 ? 1 : .3)); inside.material.emissiveIntensity = offFr ? 0 : 1; fl.intensity = offFr ? 0 : 6; tl.intensity = offFr ? 2.5 : 10;
      water.visible = !offW || Math.floor(u * 5) % 3 === 0 && u < 2.8; water.scale.y = offW ? .3 : 1; water.position.y = offW ? 1.03 + ((u * 1.5) % .2) : 1.13;
      cam(C, [[0, [.6, 1.6, 2.6]], [6.7, [-.2, 1.5, 1.4]]], [[0, [-.6, 1.3, -3]], [6.7, [-1.0, 1.4, -3]]], u);
      h.face(C); h.pose({ armL: [10, 6], armR: [35, -60], head: u > 2.4 ? 6 : 0 }); h.eye(u < 1 ? 'look' : u < 2.4 ? 'wide' : 'flat'); copo.position.set(h.root.position.x + .32, 1.12, h.root.position.z + .12);
      return { focus: C.position.distanceTo(h.root.position), range: 2.4, blur: 12, bloom: .3, bloomT: .9, vig: .5, exposure: offFr ? .85 : 1 };
    };
  });
}

/** 17. Metrô de Nova York alagando sem bombas — 106.65 a 114.89 */
export function sMetro(t0, t1) {
  return mk(t0, t1, { bg: '#10141C', fog: ['#141C24', .03], fov: 36 }, (c) => {
    const tun = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 120, 32, 1, true, Math.PI * .5, Math.PI), new THREE.MeshStandardMaterial({ map: (() => { const t = canvasTex(512, 512, (x) => { x.fillStyle = '#4A4A52'; x.fillRect(0, 0, 512, 512); x.strokeStyle = '#3A3A42'; x.lineWidth = 6; for (let i = 0; i < 512; i += 64) { x.beginPath(); x.moveTo(0, i); x.lineTo(512, i); x.stroke(); } x.fillStyle = '#5A4A3A33'; for (let i = 0; i < 30; i++) x.fillRect((i * 97) % 512, (i * 53) % 512, 40, 90); }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(4, 20); return t; })(), side: THREE.BackSide, roughness: .9 }));
    tun.rotation.x = Math.PI / 2; tun.rotation.z = Math.PI; tun.position.set(0, 2, -50); c.add(tun);
    const chao = new THREE.Mesh(new THREE.PlaneGeometry(8, 120), std('#2A2A30')); chao.rotation.x = -Math.PI / 2; chao.position.set(0, 0, -50); c.add(chao);
    for (const x of [-.75, .75]) c.add(box(.1, .15, 120, std('#8A8A92', { metalness: .7 }), x, .08, -50)); for (let i = 0; i < 80; i++) c.add(box(2.2, .1, .25, '#3A2E28', 0, .03, 8 - i * 1.4));
    const lamps = []; for (let i = 0; i < 12; i++) { const l = new THREE.Mesh(new THREE.BoxGeometry(.2, .2, .5), new THREE.MeshStandardMaterial({ emissive: '#FFD79A', emissiveIntensity: 3, color: '#fff' })); l.position.set(-3.4, 3.2, 4 - i * 9); c.add(l); const p = new THREE.PointLight('#FFCF8E', 6, 9, 1.6); p.position.set(-3, 3, 4 - i * 9); c.add(p); lamps.push([l, p]); }
    const sinal = new THREE.Mesh(new THREE.SphereGeometry(.1, 10, 8), new THREE.MeshStandardMaterial({ emissive: '#FF3020', emissiveIntensity: 5 })); sinal.position.set(3.2, 2.5, -14); c.add(sinal); c.add(box(.4, .9, .3, '#1A1A22', 3.3, 2.4, -14.2));
    const placa = letreiro('LINHA 4', 1.8, .5, '#1A3A6A', '#F4EFE4', .5, 'Inter'); placa.position.set(3.6, 2.9, -6); placa.rotation.y = -Math.PI / 2; c.add(placa);
    // bomba d'água parada
    c.add(box(.8, .8, .8, std('#4A86C7', { metalness: .4 }), 3, .4, -3)); const cano = new THREE.Mesh(new THREE.CylinderGeometry(.12, .12, 3, 12), std('#7A8088', { metalness: .5 })); cano.position.set(3, 2, -3); c.add(cano);
    // água subindo
    const wt = canvasTex(512, 512, (x) => { x.fillStyle = '#2A5A6E'; x.fillRect(0, 0, 512, 512); const R = rng(3); x.strokeStyle = '#ffffff22'; x.lineWidth = 3; for (let i = 0; i < 160; i++) { const a = R() * 512, b = R() * 512; x.beginPath(); x.moveTo(a, b); x.quadraticCurveTo(a + 10, b - 4, a + 20, b); x.stroke(); } }); wt.wrapS = wt.wrapT = THREE.RepeatWrapping; wt.repeat.set(2, 30);
    const agua = new THREE.Mesh(new THREE.PlaneGeometry(8, 120), new THREE.MeshStandardMaterial({ map: wt, transparent: true, opacity: .85, roughness: .1, metalness: .2 })); agua.rotation.x = -Math.PI / 2; agua.position.set(0, 0, -50); c.add(agua);
    const gotas = []; const R = rng(6); for (let i = 0; i < 30; i++) { const g = new THREE.Mesh(new THREE.SphereGeometry(.03, 6, 4), new THREE.MeshStandardMaterial({ color: '#BFE8FF', emissive: '#5FA8D8', emissiveIntensity: .4 })); c.add(g); gotas.push({ g, x: (R() - .5) * 6, z: -R() * 30, p: R() }); }
    c.add(new THREE.HemisphereLight('#8090A8', '#101010', .5));
    return (t, u, C) => {
      const lv = smooth(.3, 8.2, u) * 1.4; agua.position.y = .02 + lv; wt.offset.y = u * .05; agua.visible = true;
      for (const q of gotas) { const k = ((u * .9 + q.p) % 1); q.g.position.set(q.x, 5.6 - k * (5.6 - lv), q.z); }
      lamps.forEach(([l, p], i) => { const on = !(u > 6 && (i % 3 === 0 || Math.sin(u * 30 + i) > .7)); l.material.emissiveIntensity = on ? 3 : .1; p.intensity = on ? 6 : 0; });
      cam(C, [[0, [.6, 1.7, 6]], [8.2, [.2, 2.4, 1.0]]], [[0, [0, 1.4, -20]], [8.2, [0, .8, -20]]], u);
      return { focus: 10, range: 10, blur: 8, bloom: .45, bloomT: .8, vig: .55 };
    };
  });
}

/** 18. O posto não bombeia gasolina: o carro mais caro do mundo, parado — 114.89 a 125.6 */
export function sPosto(t0, t1) {
  return mk(t0, t1, { bg: '#0E1030', fog: ['#1A1838', .012], fov: 34, far: 900 }, (c) => {
    stars(c, 2000, 300, 4); sky(c, -150, 500, 200, [[0, '#0E1030'], [.6, '#2A2252'], [1, '#5B3460']]); skyline(c, -120, 400, 50, ['#1E1A30', '#241E36', '#2A223E'], false, 3);
    terreno(c, '#2A2A32', 20, 200);
    // cobertura do posto, apagada
    const cov = box(14, .6, 8, std('#E8E8EC'), 0, 5, -2); c.add(cov); const faixa = box(14.1, .3, 8.1, std('#C9361F'), 0, 4.75, -2); c.add(faixa); for (const x of [-5, 5]) c.add(box(.5, 5, .5, std('#C8C8CC'), x, 2.5, -2));
    for (const x of [-2.4, 2.4]) { const b = new THREE.Group(); b.add(box(.9, 1.7, .5, std('#F4F4F0'), 0, .85, 0)); b.add(box(.92, .4, .52, std('#C9361F'), 0, 1.5, 0)); const sc = new THREE.Mesh(new THREE.PlaneGeometry(.5, .3), new THREE.MeshStandardMaterial({ color: '#0A0A0A' })); sc.position.set(0, 1.15, .26); b.add(sc); b.position.set(x, 0, -2); c.add(b); }
    const preco = new THREE.Group(); preco.add(box(2.4, 3.6, .3, std('#1A1A22'), 0, 5, 0)); preco.add(box(.3, 3.4, .3, '#555', 0, 1.7, 0)); const pt = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 3.2), new THREE.MeshStandardMaterial({ map: canvasTex(256, 384, (x) => { x.fillStyle = '#14141A'; x.fillRect(0, 0, 256, 384); x.fillStyle = '#3A3A44'; x.font = '900 60px Inter'; x.textAlign = 'center'; x.fillText('8,88', 128, 120); x.fillText('6,66', 128, 230); x.fillText('5,55', 128, 340); }) })); pt.position.set(0, 5, .16); preco.add(pt); preco.position.set(8.5, 0, 3); c.add(preco);
    const lojinha = box(5, 3, 4, std('#3A4A5A'), -9, 1.5, -5); c.add(lojinha); const lj = letreiro('CONVENIÊNCIA', 4.5, .6, '#1A1A22', '#555560', .1, 'Inter'); lj.position.set(-9, 3.4, -2.98); c.add(lj);
    // supercarro vermelho
    const sc = car(c, 0, -.2, '#C9201A', 1, false); sc.rotation.y = Math.PI / 2; sc.scale.set(1.05, .82, 1.15);
    const lan = new THREE.PointLight('#B8C8FF', 10, 14, 1.4); lan.position.set(2, 7, 4); lan.castShadow = true; c.add(lan); c.add(new THREE.HemisphereLight('#4A5490', '#101018', .8));
    const h = hero(c, 1.6, .9, 0, .25); h.tint('#C8D0F0');
    const bico = box(.08, .08, .4, '#2a2a2f', 0, 0, 0); c.add(bico); const mang = new THREE.Mesh(new THREE.TorusGeometry(.6, .03, 6, 20, 2.4), std('#1A1A22')); c.add(mang);
    return (t, u, C) => {
      cam(C, [[0, [4.2, 1.5, 5.6]], [5, [2.8, 1.5, 3.6]], [10.7, [7, 6, 16]]], [[0, [1.2, 1.2, .2]], [5, [1.6, 1.3, .9]], [10.7, [0, 2, -2]]], u);
      h.face(C); const squeeze = Math.sin(u * 8) > 0 && u > 1.5 && u < 4.5; h.pose({ armR: [50, squeeze ? -40 : -30], armL: [10, 6], head: u > 4.5 ? -5 : 0 }); h.eye(u < 1.4 ? 'happy' : u < 4.5 ? 'look' : u < 6 ? 'flat' : 'sad');
      bico.position.set(h.root.position.x + .5, 1.15, h.root.position.z + .15); bico.rotation.x = .3; mang.position.set(-.6, 1.3, -2); mang.visible = false;
      return { focus: C.position.distanceTo(h.root.position), range: lerp(2.5, 12, smooth(5, 10, u)), blur: 12, bloom: .35, bloomT: .9, vig: .55 };
    };
  });
}

/** 19. A bateria vai embora — 125.6 a 129.25 */
export function sBateria(t0, t1) {
  return mk(t0, t1, { bg: '#0B0B10', fog: ['#0B0B10', .03], fov: 30 }, (c) => {
    const tel = phoneMesh(.36, .74); tel.position.set(0, 1.4, 0); c.add(tel); const gl = new THREE.PointLight('#FFFFFF', 2, 2); gl.position.set(0, 1.4, .5); c.add(gl);
    c.add(box(4, .05, 3, std('#3A2A22'), 0, .95, 0)); c.add(new THREE.HemisphereLight('#40405A', '#101010', .4));
    return (t, u, C) => {
      const p = lerp(.23, .01, smooth(.2, 3.2, u)); const k = Math.round(p * 100); tel.paint('b' + k, (x) => TELA.bateria(x, p)); gl.color.set(p < .2 ? '#FF6A5A' : '#FFFFFF'); gl.intensity = u > 3.4 ? 0 : 2; tel.scr.visible = u < 3.45;
      cam(C, [[0, [.05, 1.42, .95]], [3.6, [.02, 1.41, .75]]], [[0, [0, 1.4, 0]], [3.6, [0, 1.4, 0]]], u, -.03);
      return { focus: C.position.z, range: 1.2, blur: 10, bloom: .35, bloomT: .85, vig: .55 };
    };
  });
}

/** 20. Loja de camping: carregador solar… e ninguém para ligar — 129.25 a 135.36 */
export function sCamping(t0, t1) {
  return mk(t0, t1, { bg: '#E8E0C8', fog: ['#E8DCC4', .02], fov: 34 }, (c) => {
    comodo(c, { win: [-1, 3, 1.2, 3.4], wall: '#4E6A3E', side: false, floor: '#7A6A58' });
    sky(c, -30, 80, 50, [[0, '#7FB2E0'], [1, '#F7E9C8']]); skyline(c, -24, 60, 18, ['#A8B4C8', '#9AA8BE', '#8E9CB4'], false, 7, -3);
    const sign = letreiro('AVENTURA CAMPING', 5.5, .7, '#2E4A2A', '#F4E8C8', .4); sign.position.set(-.5, 3.7, -3.82); c.add(sign);
    // barracas, mochilas, prateleiras com lanternas
    [[-3.6, -2.6, '#E9733C'], [3.6, -2.8, '#36AEA2']].forEach(([x, z, col]) => { const b = new THREE.Mesh(new THREE.ConeGeometry(1.1, 1.4, 4), std(col, { flatShading: true })); b.position.set(x, .7, z); b.rotation.y = .78; c.add(b); });
    for (let s = 0; s < 3; s++) { c.add(box(2.4, .05, .5, '#7A5238', -3.6, .6 + s * .6, -3.6)); for (let k = 0; k < 6; k++) { const l = new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, .3, 10), std(['#F2C14E', '#C9361F', '#4A86C7'][k % 3])); l.rotation.z = Math.PI / 2; l.position.set(-4.6 + k * .4, .7 + s * .6, -3.55); c.add(l); } }
    for (let k = 0; k < 4; k++) { const m = box(.5, .7, .3, std(['#4E6A3E', '#C9361F', '#2A4E7A', '#E9B44C'][k]), 2.5 + k * .55, .35, -3.5); c.add(m); }
    // mesa com carregador solar
    c.add(box(1.6, .06, .8, '#8E6242', .6, .9, -1.6)); for (const [x, z] of [[-.1, -1.9], [1.3, -1.9], [-.1, -1.3], [1.3, -1.3]]) c.add(box(.05, .88, .05, '#5C3C28', x, .44, z));
    const painel = new THREE.Group(); const pt = canvasTex(256, 192, (x) => { x.fillStyle = '#1A2A5A'; x.fillRect(0, 0, 256, 192); x.strokeStyle = '#7A9AD8'; x.lineWidth = 3; for (let i = 0; i <= 256; i += 32) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 192); x.stroke(); } for (let i = 0; i <= 192; i += 32) { x.beginPath(); x.moveTo(0, i); x.lineTo(256, i); x.stroke(); } }); painel.add(new THREE.Mesh(new THREE.PlaneGeometry(.7, .5), new THREE.MeshStandardMaterial({ map: pt, roughness: .2, metalness: .5 }))); painel.position.set(.9, 1.05, -1.5); painel.rotation.x = -1.1; c.add(painel);
    const tel = phoneMesh(.12, .25); tel.rotation.x = -Math.PI / 2; tel.position.set(.25, .945, -1.5); c.add(tel);
    luzes(c, { pos: [3, 6, -10], target: [0, 0, 0] }); feixe(c, 1.0, 2.2, -2.2, 1.6, 4.5, -.5, '#FFE2B0', .14);
    const h = hero(c, .5, -2.3, 0, .25); h.tint('#FFF6EA');
    return (t, u, C) => {
      const on = u > 1.4; tel.paint(on ? 'on' : 'off', (x) => { if (!on) { x.fillStyle = '#000'; x.fillRect(0, 0, 540, 1110); } else { x.fillStyle = '#0E0E14'; x.fillRect(0, 0, 540, 1110); x.fillStyle = '#fff'; x.font = '800 44px Inter'; x.textAlign = 'left'; x.fillText('Contatos', 30, 90); ['Mãe', 'Bia', 'Chefe', 'Tia Cida', 'Zé'].forEach((n, i) => { x.fillStyle = '#2A2A36'; x.beginPath(); x.arc(70, 190 + i * 130, 40, 0, 7); x.fill(); x.fillStyle = '#777'; x.font = '700 38px Inter'; x.fillText(n, 130, 202 + i * 130); x.fillStyle = '#C9361F'; x.font = '600 26px Inter'; x.fillText('indisponível', 330, 202 + i * 130); }); } });
      cam(C, [[0, [1.6, 1.8, 1.8]], [6.1, [.9, 1.7, .4]]], [[0, [.5, 1.2, -1.8]], [6.1, [.5, 1.3, -2]]], u);
      h.face(C); h.pose({ armL: [10, 6], armR: on ? [30, -60] : [10, 6], head: u > 3 ? 5 : 0 }); h.eye(u < 1.4 ? 'happy' : u < 3 ? 'down' : 'sad');
      return { focus: C.position.distanceTo(h.root.position), range: 2, blur: 12, bloom: .25, bloomT: .95, vig: .45 };
    };
  });
}

/** 21. A última foto da humanidade… um print de boleto — 135.36 a 141.74 */
export function sGaleria(t0, t1) {
  return mk(t0, t1, { bg: '#141228', fog: ['#1A1838', .02], fov: 32 }, (c) => {
    comodo(c, { wall: '#3A2A4A', side: false });
    const h = hero(c, 0, -1.6, 0, .25); h.tint('#C8C8E8');
    const tel = phoneMesh(.36, .74); c.add(tel); const gl = new THREE.PointLight('#DDE6FF', 4, 3); c.add(gl); c.add(new THREE.HemisphereLight('#4A4A7A', '#101010', .6));
    return (t, u, C) => {
      tel.paint('g', (x) => TELA.galeria(x)); tel.rotation.set(-.1, 0, 0); gl.position.set(0, 1.4, .4);
      const away = smooth(2.8, 4.0, u); tel.position.set(lerp(0, .42, away), lerp(1.35, 1.12, away), lerp(-.2, -1.35, away)); tel.scale.setScalar(lerp(1, .5, away));
      cam(C, [[0, [0, 1.36, 1.25]], [2.4, [0, 1.36, 1.1]], [4.2, [.3, 1.6, 2.6]], [6.4, [.2, 1.7, 2.2]]], [[0, [0, 1.35, -.2]], [2.4, [0, 1.35, -.2]], [4.2, [0, 1.6, -1.6]], [6.4, [0, 1.75, -1.6]]], u);
      h.face(C); const fp = smooth(4.4, 4.7, u); h.pose({ armL: [lerp(20, 150, fp), lerp(-60, 150, fp)], armR: [20, -60], head: fp * 10 }); h.eye(u < 4.4 ? 'down' : 'shut');
      const near = u < 3; return { focus: near ? C.position.distanceTo(tel.position) : C.position.distanceTo(h.root.position), range: near ? 1.2 : 2, blur: 12, bloom: .3, bloomT: .9, vig: .55 };
    };
  });
}
