import * as THREE from 'three';
import { makeShot, aim, keys, smooth, rng, lerp, clamp } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, sky, skyline, pointer, lamp, car, tree } from './motor/kit.js';
import { stars, nebula, uT } from './motor/kit2.js';
import { sala, rock, earth, fachada, meteors } from './extra.js';

/** 9. A boa notícia: nenhum grande conhecido vem para cá — 31.4 a 35.1 */
export function shotOrbitas(t0, t1) {
  const s = makeShot(t0, t1, '#03040C', 40), c = s.scene; s.camera.far = 2400; s.camera.updateProjectionMatrix();
  stars(c, 5200, 900, 13); nebula(c, -200, 60, -600, 900, '#5FD8FF', 5, .08); nebula(c, 260, -100, -560, 700, '#7E6BFF', 9, .08);
  const sun = new THREE.DirectionalLight('#FFF4E0', 3.8); sun.position.set(-30, 20, 30); c.add(sun); c.add(new THREE.AmbientLight('#2A3550', .6));
  const E = earth(c, 3);
  const R = rng(21), orbs = [];
  for (let i = 0; i < 9; i++) {
    const a = 9 + R() * 14, b = a * (.4 + R() * .35), cx = (R() < .5 ? -1 : 1) * (a * .55 + 3 + R() * 3), rot = R() * Math.PI, tilt = (R() - .5) * .5;
    const pts = []; for (let k = 0; k <= 160; k++) { const t = k / 160 * Math.PI * 2; pts.push(new THREE.Vector3(cx + Math.cos(t) * a, 0, Math.sin(t) * b)); }
    const grp = new THREE.Group(); grp.rotation.set(tilt, rot, 0); c.add(grp);
    const ln = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: i % 3 ? '#6FF0D8' : '#9FD8FF', transparent: true, opacity: .55 })); grp.add(ln);
    const rk = rock(60 + i, .25 + R() * .25); grp.add(rk); const gl = glowSprite('#AFFFF0', 1.2, .5); grp.add(gl);
    orbs.push({ grp, rk, gl, a, b, cx, sp: .25 + R() * .3, ph: R() * 6 });
  }
  s.update = (t, u) => {
    E.rotation.y = 1.5 + u * .1;
    for (const o of orbs) { const th = o.ph + u * o.sp; o.rk.position.set(o.cx + Math.cos(th) * o.a, 0, Math.sin(th) * o.b); o.rk.rotation.set(u, u * .7, 0); o.gl.position.copy(o.rk.position); }
    const K = smooth(0, 3.7, u); const an = lerp(.5, -.1, K), rr = lerp(46, 34, K);
    aim(s.camera, [Math.sin(an) * rr, lerp(30, 20, K), Math.cos(an) * rr], [0, lerp(-3, -1, K), 0], 0);
    return { focus: rr, range: 40, blur: 4, bloom: .5, bloomT: .82, vig: .5, exposure: 1.05 };
  };
  return s;
}

/** 10. Volta para a novela… e senta longe da janela — 35.1 a 38.1 */
export function shotLonge(t0, t1) {
  const s = makeShot(t0, t1, '#141228', 42), c = s.scene; c.fog = new THREE.FogExp2('#2B1E2E', .018);
  const S = sala(c);
  const hero = makeChar({ outfit: 'hero', glow: .2 }); c.add(hero.root); hero.tint('#F6E6DA');
  const tape = (x, y, rz) => { const m = box(3.3, .14, .02, '#E8D9B0', x, y, S.WZ + .2, false); m.rotation.z = rz; c.add(m); }; const cx = (S.X0 + S.X1) / 2, cy = (S.Y0 + S.Y1) / 2; tape(cx, cy, .62); tape(cx, cy, -.62);
  s.update = (t, u) => {
    S.setTV('novela', u); S.tvLight.color.set('#FFA0C8');
    const k = smooth(1.3, 2.4, u); const sx = lerp(-.55, -3.5, k), sz = lerp(-3.5, -1.3, k);
    S.sofa.position.set(sx, 0, sz); S.table.position.set(sx, 0, sz + 1.6); hero.place(sx + .1, sz + .72, -.12 + (k > 0 && k < 1 ? Math.abs(Math.sin(u * 16)) * .03 : 0));
    const K = smooth(0, 3.0, u); aim(s.camera, [lerp(-.4, -2.3, K), lerp(1.45, 2.1, K), lerp(3.4, 7.0, K)], [lerp(-.55, -3.0, K), lerp(1.5, 1.45, K), -2.5], 0);
    hero.face(s.camera);
    hero.pose({ armL: [12, 6], armR: k > .2 && k < 1 ? [40, -30] : [lerp(12, 60, smooth(2.4, 2.6, u)), lerp(6, -70, smooth(2.4, 2.6, u))], head: Math.sin(u * 1.5) * 2 }); hero.eye(u < 1.3 ? 'happy' : u < 2.4 ? 'smug' : 'happy');
    return { focus: s.camera.position.distanceTo(hero.root.position), range: 3.5, blur: 12, bloom: .3, bloomT: .92, vig: .48, exposure: 1.02 };
  };
  return s;
}

/** 11. O prédio inteiro na janela, o céu caindo em estrelas — 38.1 ao fim */
export function shotFinal(t0, t1) {
  const s = makeShot(t0, t1, '#141228', 40), c = s.scene; c.fog = new THREE.FogExp2('#2A2240', .006); s.camera.far = 900; s.camera.updateProjectionMatrix();
  stars(c, 3000, 300, 7); nebula(c, -20, 80, -200, 260, '#C78BFF', 7, .08); sky(c, -120, 500, 260, [[0, '#0E1040'], [.5, '#2E2462'], [.8, '#7A3E72'], [1, '#C46A6A']]);
  skyline(c, -80, 300, 40, ['#2F2748', '#3B2F54', '#4A3A5E'], true, 5);
  const F = fachada(c, { cols: 5, rows: 6, seed: 8, lit: .85 });
  const road = new THREE.Mesh(new THREE.PlaneGeometry(200, 60), new THREE.MeshStandardMaterial({ color: '#1E1E26', roughness: .8 })); road.rotation.x = -Math.PI / 2; road.position.z = 20; road.receiveShadow = true; c.add(road);
  c.add(box(60, .15, 4, '#8E8378', 0, .07, 2.2)); lamp(c, -4, 4.3, 1); lamp(c, 5, 4.3, 1); car(c, -2.5, 8, '#27425A', 1); car(c, 4, 9.5, '#8A2F2F', -1); tree(c, -8, 4.5, 1.4, undefined, 2); tree(c, 8.6, 4.5, 1.3, undefined, 3);
  const met = meteors(c, 26, [-60, 80, 30, 70, -60], { seed: 4, len: 7 });
  c.add(new THREE.HemisphereLight('#7E7AC0', '#2a1f28', .9)); const moon = new THREE.DirectionalLight('#B9B8F0', 1.3); moon.position.set(-12, 30, 22); moon.castShadow = true; moon.shadow.mapSize.set(2048, 2048); Object.assign(moon.shadow.camera, { left: -20, right: 20, top: 25, bottom: -5, far: 80 }); c.add(moon);
  const outs = ['rosa', 'azul', 'amarelo', 'laranja', 'roxo', 'terno2', 'verde', 'jaleco', 'terno3', 'avental', 'rosa', 'azul'], hairs = ['long', 'bob', 'afro', null, 'bun', null, 'long', 'bun', null, null, 'afro', 'long'], hcs = ['#6B3A22', '#D9B65A', '#2a1b18', '', '#3a2030', '', '#3a2418', '#22161a', '', '', '#1d1412', '#8a4a26'];
  const R = rng(3), ppl = []; let hero = null, hs = null;
  for (const sl of F.slots) {
    const isHero = sl.r === 1 && sl.k === 2; if (!isHero && (!sl.lit || R() < .2)) continue;
    const i = ppl.length % outs.length; const k = isHero ? makeChar({ outfit: 'hero', glow: .3 }) : makeChar({ outfit: outs[i], hair: hairs[i], hairc: hcs[i], lash: !!hairs[i] });
    k.place(sl.x + (isHero ? 0 : (R() - .5) * .3), -.45, sl.y - .78); k.tint(isHero ? '#FFF2E2' : '#F0DCC8'); c.add(k.root); k.ph = R() * 6; k.up = R() < .55;
    if (isHero) { hero = k; hs = sl; } else ppl.push(k);
  }
  s.update = (t, u) => {
    met(t);
    const A = smooth(0, 2.0, u), B = smooth(4.3, 9.3, u);
    const p0 = [hs.x + .15, hs.y + 1.35, 4.2], q0 = [hs.x, hs.y + 1.0, -.4];
    const p1 = [.5, 6.5, 34], q1 = [0, 15, -10];
    const P = p0.map((v, i) => lerp(v, p1[i], B)), Q = q0.map((v, i) => lerp(v, q1[i], B)); P[1] += A * .1; aim(s.camera, P, Q, 0);
    hero.face(s.camera); for (const k of ppl) k.face(s.camera);
    // herói: olha o céu, pergunta, aponta para os comentários, acena
    if (u < 2.25) { hero.pose({ armL: [10, 6], armR: [10, 6], head: Math.sin(u) * 3 }); hero.eye(u < 1.0 ? 'look' : 'smug'); }
    else if (u < 3.05) { const k = smooth(2.25, 2.45, u); hero.pose({ armL: [10, 6], armR: [lerp(10, 45, k), lerp(6, 0, k)], head: -4 }); hero.eye('happy'); }
    else if (u < 5.0) { hero.pose({ armL: [10, 6], armR: [150 + Math.sin(u * 9) * 18, 20 + Math.sin(u * 9) * 10], head: Math.sin(u * 9) * 3 }); hero.eye('happy'); }
    else { hero.pose({ armL: [10, 6], armR: [150, 6], head: 4 }); hero.eye('look'); }
    for (const k of ppl) { if (k.up && u > 3.5) { k.pose({ armR: [150 + Math.sin(u * 2 + k.ph) * 6, 8], armL: [10, 6], head: 3 }); k.eye('wide'); } else { k.pose({ armL: [10, 6], armR: [10, 6], head: Math.sin(u + k.ph) * 3 }); k.eye(u > 3 ? 'look' : 'open'); } }
    const focus = lerp(4.6, 34, B);
    return { focus, range: lerp(2.2, 30, B), blur: lerp(14, 6, B), bloom: .38, bloomT: .9, vig: .48, exposure: 1.02 };
  };
  return s;
}
