import * as THREE from 'three';
import { makeShot, aim, keys, smooth, rng, lerp, clamp } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, tree, sky, skyline, pointer, dissolve } from './motor/kit.js';
import { stars, nebula, smoke, uT } from './motor/kit2.js';
import { sala, rock, fireball, earth, plateTex, dinoTex, backTex } from './extra.js';

/** 1. Jantando na frente da TV: a novela vira plantão — 0 a 2.9 */
export function shotTV(t0, t1) {
  const s = makeShot(t0, t1, '#141228', 44), c = s.scene; c.fog = new THREE.FogExp2('#2B1E2E', .02);
  const S = sala(c);
  // herói de costas, em primeiro plano
  const back = cut(backTex(), 1.0, 1.3); back.position.set(2.62, .95, -.9); c.add(back);
  const plate = cut(plateTex(), .4, .4); plate.rotation.x = -Math.PI / 2; plate.position.set(2.75, .8, -1.75); c.add(plate);
  // mesinha com o prato
  c.add(box(.9, .05, .5, '#8E6242', 2.75, .76, -1.8)); for (const x of [-.4, .4]) c.add(box(.05, .74, .05, '#5C3C28', 2.75 + x, .37, -1.8));
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(.05, .045, .16, 16), std('#D9483A', { roughness: .3 })); cup.position.set(3.1, .87, -1.75); c.add(cup);
  s.update = (t, u) => {
    const news = u > 1.85; S.setTV(news ? 'plantao' : 'novela', u);
    S.tvLight.color.set(news ? '#FF5A40' : '#FFA0C8'); S.tvLight.intensity = news ? 9 + Math.sin(u * 20) * 2 : 6;
    const K = smooth(0, 2.9, u);
    aim(s.camera, [lerp(3.2, 3.0, K), lerp(1.3, 1.36, K), lerp(1.6, .7, K)], [2.95, lerp(1.62, 1.66, K), -4.2], .004);
    back.position.y = .95 + (news ? smooth(1.9, 2.1, u) * .04 : Math.sin(u * 3) * .01); back.rotation.z = news ? 0 : Math.sin(u * 1.5) * .02;
    const flash = smooth(1.82, 1.87, u) * (1 - smooth(1.87, 2.05, u));
    return { focus: lerp(5.8, 4.9, K), range: 1.8, blur: 16, bloom: .32, bloomT: .9, vig: .5, exposure: 1, flash: flash * .25 };
  };
  return s;
}

/** 2. A pedra vindo direto para a Terra — 2.9 a 4.8 */
export function shotRumo(t0, t1) {
  const s = makeShot(t0, t1, '#03040C', 40), c = s.scene; s.camera.far = 2400; s.camera.updateProjectionMatrix();
  stars(c, 5200, 900, 9); nebula(c, 130, 80, -640, 900, '#7E6BFF', 11, .1); nebula(c, -300, -40, -540, 760, '#FF6FB0', 12, .07);
  const sun = new THREE.DirectionalLight('#FFF4E0', 4.2); sun.position.set(40, 25, 30); c.add(sun); c.add(new THREE.AmbientLight('#2A3550', .5));
  const E = earth(c, 20); E.position.set(0, -6, -90); const moon = new THREE.Mesh(new THREE.SphereGeometry(2.2, 36, 24), std('#A5A5A8')); moon.position.set(-34, 18, -140); c.add(moon);
  const a = rock(31, 1.6, ['#8A7A6A', '#A39080', '#6E6258', '#B8A48E']); c.add(a); const rimL = new THREE.PointLight('#9FC8FF', 60, 20); c.add(rimL);
  const sm = glowSprite('#FFE7C0', 60, .5); sm.position.set(220, 80, -600); c.add(sm);
  s.update = (t, u) => {
    const K = smooth(0, 1.9, u); E.rotation.y = 2.4 + u * .05;
    a.position.set(lerp(1.2, .4, K), lerp(1.8, .3, K), lerp(-6, -40, K)); a.rotation.set(u * .5, u * .7, 0); rimL.position.set(a.position.x - 6, a.position.y + 3, a.position.z + 2);
    aim(s.camera, [lerp(-1.5, -.2, K), lerp(2.4, 1.4, K), lerp(6, -14, K)], [lerp(.8, .2, K), lerp(.6, -2, K), lerp(-40, -90, K)], lerp(-.08, 0, K));
    return { focus: lerp(12, 30, K), range: 40, blur: 6, bloom: .5, bloomT: .82, vig: .55, exposure: 1.05 };
  };
  return s;
}

/** 3. Primeira reação: segunda-feira cancelada — 4.8 a 8.6 */
export function shotSegunda(t0, t1) {
  const s = makeShot(t0, t1, '#141228', 42), c = s.scene; c.fog = new THREE.FogExp2('#2B1E2E', .02);
  const S = sala(c);
  const hero = makeChar({ outfit: 'hero', glow: .22 }); hero.place(1.2, -2.45); c.add(hero.root); hero.tint('#F6E6DA');
  // confete quando comemora
  const R = rng(5), N = 260, cg = new THREE.BufferGeometry(), cp = new Float32Array(N * 3), cc = new Float32Array(N * 3), cd = [];
  const K2 = [[.21, .68, .63], [.95, .75, .3], [.91, .4, .5], [.98, .95, .86], [.29, .53, .78]]; for (let i = 0; i < N; i++) { cd.push([(R() - .5) * 4, 2.5 + R() * 2.5, -1 - R() * 3, .5 + R() * .8, R() * 6]); cc.set(K2[Math.floor(R() * 5)], i * 3); }
  cg.setAttribute('position', new THREE.BufferAttribute(cp, 3)); cg.setAttribute('color', new THREE.BufferAttribute(cc, 3)); const conf = new THREE.Points(cg, new THREE.PointsMaterial({ size: .05, vertexColors: true })); conf.frustumCulled = false; c.add(conf);
  let lastX = -1;
  s.update = (t, u) => {
    S.setTV('plantao', u); S.tvLight.color.set('#FF6A50');
    const xp = Math.round(smooth(1.1, 1.9, u) * 30) / 30; if (xp !== lastX) { S.paintCal(xp); lastX = xp; }
    const K = smooth(0, 3.8, u); aim(s.camera, [lerp(1.5, 1.35, K), lerp(1.45, 1.55, K), lerp(3.4, 2.3, K)], [lerp(1.75, 1.55, K), lerp(1.95, 1.8, K), -3], -.006);
    hero.face(s.camera);
    const party = u > 1.0 && u < 2.5;
    if (party) { hero.cheer(u, 0, 1); hero.eye('happy'); }
    else if (u <= 1.0) { hero.pose({ armL: [12, 8], armR: [lerp(12, 40, smooth(.2, .6, u)), lerp(6, -60, smooth(.2, .6, u))], head: 4 }); hero.eye(u < .5 ? 'wide' : 'look'); }
    else { const k = smooth(2.5, 2.75, u); hero.pose({ armL: [lerp(150, 10, k), 6], armR: [lerp(150, 10, k), 6], head: lerp(0, -4, k) }); hero.eye(u < 3.2 ? 'smug' : 'flat'); }
    const pos = cg.attributes.position; for (let i = 0; i < N; i++) { const d = cd[i], yy = d[1] - (u - 1.0) * d[3] * 1.4; pos.setXYZ(i, 1.2 + d[0] + Math.sin(u * 3 + d[4]) * .2, u > 1.0 ? Math.max(.02, yy) : -9, d[2]); } pos.needsUpdate = true;
    return { focus: s.camera.position.z + 2.45, range: 1.8, blur: 14, bloom: .3, bloomT: .92, vig: .48, exposure: 1.02 };
  };
  return s;
}

/** 4. O asteroide dos dinossauros — 8.6 a 14.2 */
export function shotDinos(t0, t1) {
  const s = makeShot(t0, t1, '#E07A4A', 46), c = s.scene; c.fog = new THREE.FogExp2('#E89A6A', .016); s.camera.far = 900; s.camera.updateProjectionMatrix();
  sky(c, -160, 520, 260, [[0, '#3A1E4A'], [.45, '#A8405A'], [.75, '#F08A4A'], [1, '#FFD08A']]);
  const gT = canvasTex(1024, 1024, (x) => { x.fillStyle = '#7A8A3E'; x.fillRect(0, 0, 1024, 1024); const R = rng(4); for (let i = 0; i < 9000; i++) { x.strokeStyle = R() < .5 ? '#5E7230' : '#9AA650'; x.globalAlpha = .45; x.lineWidth = 2; const a = R() * 1024, b = R() * 1024; x.beginPath(); x.moveTo(a, b); x.lineTo(a + (R() - .5) * 8, b - 12); x.stroke(); } x.globalAlpha = 1; for (let i = 0; i < 40; i++) { x.fillStyle = '#8E6A44'; x.globalAlpha = .4; x.beginPath(); x.ellipse(R() * 1024, R() * 1024, 30 + R() * 60, 10 + R() * 20, 0, 0, 7); x.fill(); } x.globalAlpha = 1; }); gT.wrapS = gT.wrapT = THREE.RepeatWrapping; gT.repeat.set(14, 14);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), new THREE.MeshStandardMaterial({ map: gT, roughness: 1 })); g.rotation.x = -Math.PI / 2; g.position.z = -100; g.receiveShadow = true; c.add(g);
  // vulcões e montanhas
  for (const [x, z, r, h, col] of [[-30, -110, 22, 34, '#5A3A4A'], [34, -130, 30, 40, '#4E3446'], [6, -150, 26, 30, '#6A4252'], [-60, -140, 30, 26, '#5E4050']]) { const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), std(col, { flatShading: true })); m.position.set(x, h / 2 - 1, z); c.add(m); }
  const lava = glowSprite('#FF7A30', 10, .9); lava.position.set(-30, 32, -110); c.add(lava); const smk = smoke(c, 16, [-30, 33, -110], { col: '#4A3040', size: 16, rise: 40, spread: 4, seed: 6, life: 4 });
  // árvores e samambaias
  const palm = ['#2E4F2C', '#3B6636', '#55813F', '#B9B65A']; for (let k = 0; k < 14; k++) { const x = (k % 2 ? 1 : -1) * (6 + (k * 7) % 14), z = -4 - k * 4.5; tree(c, x, z, 1.6 + (k % 3) * .4, palm, k); }
  const fern = canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); for (let i = 0; i < 9; i++) { x.save(); x.translate(128, 250); x.rotate((i - 4) * .3); x.fillStyle = i % 2 ? '#4E7A36' : '#3E6A2C'; x.beginPath(); x.ellipse(0, -100, 14, 100, 0, 0, 7); x.fill(); x.restore(); } }); const ferns = []; const R = rng(9); for (let i = 0; i < 30; i++) { const f = cut(fern, 1.2, 1.2, { shadow: true }); let x = (R() - .5) * 16; if (Math.abs(x) < 3.5) x = Math.sign(x || 1) * (3.5 + R() * 3); f.position.set(x, .5, 3 - R() * 18); c.add(f); ferns.push(f); }
  const fgF = cut(fern, 2.2, 2.2); fgF.position.set(-1.6, .4, 5.8); c.add(fgF);
  c.add(new THREE.HemisphereLight('#FFD0B0', '#5A3A2A', 1.1)); const sun = new THREE.DirectionalLight('#FFB070', 3.2); sun.position.set(-10, 12, -20); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -20, right: 20, top: 20, bottom: -20, far: 70 }); c.add(sun);
  // dinossauros
  const dinos = [['pesc', '#6FA08A', '#4E7E6A', -2.6, -9, 6.0], ['rex', '#C9764A', '#A55A34', 1.7, -4.2, 2.8], ['pesc', '#8AA0C8', '#6A80A8', 3.4, -13, 4.4], ['rex', '#D9A84A', '#B5862E', -1.0, -1.6, 1.4]].map(([k, a, b, x, z, w], i) => { const m = cut(dinoTex(k, a, b), w, w * .75, { shadow: true }); m.position.set(x, w * .375 - .05, z); c.add(m); const d = dissolve(c, { n: 160, pos: [x, w * .37, z], spread: w * .35, rise: 3, t0: 4.75 + i * .08, dur: 1.1, color: '#FFD7A0', size: .09, seed: i + 3 }); return { m, d, x, z, w, ph: i }; });
  const fb = fireball(7, 3.6, [-1, -.62, 0], 8); c.add(fb); const fbL = new THREE.PointLight('#FF8A40', 0, 300, 1.2); c.add(fbL);
  const dome = glowSprite('#FF9A50', 1, 0); dome.position.set(-8, 0, -95); c.add(dome);
  s.update = (t, u) => {
    const K = smooth(0, 5.6, u); const fk = clamp(u / 4.4);
    fb.position.set(lerp(40, -8, fk), lerp(60, 0, fk), lerp(-90, -95, fk)); fb.flick(u); fb.visible = u < 4.4; fbL.position.copy(fb.position); fbL.intensity = fb.visible ? lerp(200, 1600, fk) : 0;
    const boom = smooth(4.35, 4.6, u); dome.material.opacity = boom * .55; dome.scale.setScalar(lerp(4, 60, smooth(4.35, 5.6, u)));
    sun.intensity = 3.2 + boom * 1.2;
    smk(u);
    for (const q of dinos) { q.d(u); q.m.visible = u < 4.85 + q.ph * .08; pointer(q.m, s.camera); q.m.position.y = q.w * .375 - .05 + Math.abs(Math.sin(u * 3 + q.ph)) * .04; }
    for (const f of ferns) pointer(f, s.camera); pointer(fgF, s.camera);
    const shake = u > 4.35 ? Math.sin(u * 47) * .05 * (1 - smooth(4.4, 5.6, u)) : 0;
    aim(s.camera, [lerp(.5, -.3, K) + shake, lerp(1.0, 1.4, K) + shake, lerp(8, 10.5, K)], [lerp(.6, 0, K), lerp(5.5, 4.2, K), -30], shake * .5);
    return { focus: lerp(13, 15, K), range: 9, blur: 10, bloom: .45, bloomT: .85, vig: .45, exposure: 1.02, flash: smooth(4.33, 4.4, u) * (1 - smooth(4.4, 4.8, u)) * .4, tint: u > 4.4 ? '#FFD0B0' : '#ffffff' };
  };
  return s;
}
