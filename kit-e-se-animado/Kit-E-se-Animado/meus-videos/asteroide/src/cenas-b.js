import * as THREE from 'three';
import { makeShot, aim, keys, smooth, rng, lerp, clamp } from './motor/core.js';
import { makeChar, canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, sky, skyline, pointer } from './motor/kit.js';
import { stars, nebula, probe, crowd, uT } from './motor/kit2.js';
import { sala, rock, fireball, backTex } from './extra.js';

const ringLine = (r, col, op = .8) => { const pts = []; for (let i = 0; i <= 128; i++) { const a = i / 128 * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r)); } const g = new THREE.BufferGeometry().setFromPoints(pts); const l = new THREE.Line(g, new THREE.LineDashedMaterial({ color: col, dashSize: .5, gapSize: .35, transparent: true, opacity: op })); l.computeLineDistances(); return l; };

/** 5. A NASA bate uma nave na pedra (DART, 2022) — 14.2 a 20.8 */
export function shotDart(t0, t1) {
  const s = makeShot(t0, t1, '#03040C', 40), c = s.scene; s.camera.far = 2400; s.camera.updateProjectionMatrix();
  stars(c, 5200, 900, 4); nebula(c, -200, 60, -600, 900, '#7E6BFF', 3, .09); nebula(c, 260, -100, -560, 700, '#5FD8FF', 8, .06);
  const sun = new THREE.DirectionalLight('#FFF4E0', 4); sun.position.set(30, 20, 25); c.add(sun); c.add(new THREE.AmbientLight('#2A3550', .6));
  const big = rock(11, 3, ['#8A7A6A', '#A39080', '#6E6258', '#B8A48E']); c.add(big);
  const small = rock(23, .9, ['#7E7468', '#9A8C7C', '#62584E', '#AFA08A']); c.add(small);
  const r1 = ringLine(7, '#9FD8FF', .55), r2 = ringLine(6.55, '#F2C14E', .95); c.add(r1, r2);
  const pr = probe(); pr.scale.setScalar(.16); c.add(pr); const prL = new THREE.PointLight('#FFFFFF', 6, 4); c.add(prL);
  const flash = glowSprite('#FFF2C8', 1, 0); c.add(flash); const flash2 = glowSprite('#FFB060', 1, 0); c.add(flash2);
  // nuvem de detritos
  const R = rng(3), N = 700, dg = new THREE.BufferGeometry(), dp = new Float32Array(N * 3), dd = []; for (let i = 0; i < N; i++) { const v = new THREE.Vector3(R() - .5, R() - .5, R() * .9 + .1).normalize(); dd.push([v, .6 + R() * 2.4]); } dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
  const debris = new THREE.Points(dg, new THREE.PointsMaterial({ color: '#D8C8B0', size: .025, transparent: true, depthWrite: false })); debris.frustumCulled = false; c.add(debris);
  const IMP = 1.8; const ang0 = .9;
  const posSmall = (u) => { const rr = u < IMP ? 7 : lerp(7, 6.55, smooth(3.4, 5.4, u)); const a = ang0 + u * .06 + (u > IMP ? (u - IMP) * .05 : 0); return new THREE.Vector3(Math.cos(a) * rr, 0, Math.sin(a) * rr); };
  s.update = (t, u) => {
    const D = posSmall(u), Di = posSmall(IMP); small.position.copy(D); small.rotation.set(u * .3, u * .5, 0); big.rotation.y = u * .12;
    const off = new THREE.Vector3(-.2, .5, 20); const k = clamp(u / IMP); const P = Di.clone().add(off.clone().multiplyScalar(1 - Math.pow(k, 1.4))); pr.position.copy(P); pr.visible = u < IMP; pr.rotation.y = Math.PI / 2; prL.position.set(P.x + 1, P.y + 1, P.z + 1);
    const fl = smooth(IMP, IMP + .08, u) * (1 - smooth(IMP + .15, IMP + 1.2, u)); flash.position.copy(Di); flash.scale.setScalar(1 + fl * 6); flash.material.opacity = fl; flash2.position.copy(Di); flash2.scale.setScalar(2 + smooth(IMP, IMP + 1.5, u) * 4); flash2.material.opacity = fl * .45;
    const e = clamp((u - IMP) / 3); for (let i = 0; i < N; i++) { const [v, sp] = dd[i]; const d = e > 0 ? (1 - Math.pow(1 - e, 2)) * sp * 3 : 0; dp[i * 3] = Di.x + v.x * d; dp[i * 3 + 1] = Di.y + v.y * d; dp[i * 3 + 2] = Di.z + v.z * d; } dg.attributes.position.needsUpdate = true; debris.visible = u > IMP; debris.material.opacity = 1 - smooth(4, 6.6, u) * .6;
    r2.visible = u > 3.3; r2.material.opacity = smooth(3.3, 3.9, u) * .95; r2.scale.setScalar(lerp(7, 6.55, smooth(3.4, 5.4, u)) / 6.55); r1.material.opacity = .55;
    const A = smooth(0, IMP, u), B = smooth(IMP + .3, 4.2, u);
    const camA = P.clone().add(new THREE.Vector3(1.6, 1.0, 6.5)), tA = Di.clone();
    const camB = new THREE.Vector3(4, 13, 21), tB = new THREE.Vector3(1.5, -1, 0);
    const cp = u < IMP ? camA : camA.clone().lerp(camB, B), ct = u < IMP ? tA : tA.clone().lerp(tB, B);
    const shake = fl * .08 * Math.sin(u * 60); aim(s.camera, [cp.x + shake, cp.y + shake, cp.z], [ct.x, ct.y, ct.z], 0);
    return { focus: cp.distanceTo(ct), range: 30, blur: 5, bloom: .55, bloomT: .8, vig: .5, exposure: 1.05, flash: smooth(IMP, IMP + .05, u) * (1 - smooth(IMP + .05, IMP + .35, u)) * .5 };
  };
  return s;
}

/** 6. Sala de controle: o plano precisa de anos, o seu foi descoberto ontem — 20.8 a 25.3 */
export function shotControle(t0, t1) {
  const s = makeShot(t0, t1, '#0B1224', 40), c = s.scene; c.fog = new THREE.FogExp2('#0E1830', .025);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(26, 20), new THREE.MeshStandardMaterial({ color: '#1C2436', roughness: .32, metalness: .35 })); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; c.add(floor);
  c.add(box(26, 7, .3, std('#141D30'), 0, 3.5, -6)); for (let i = -3; i < 4; i++) { const l = new THREE.Mesh(new THREE.BoxGeometry(2.4, .05, .3), new THREE.MeshStandardMaterial({ emissive: '#BFE6FF', emissiveIntensity: 2.2, color: '#fff' })); l.position.set(i * 3.2, 6.1, -2); c.add(l); }
  const scrC = document.createElement('canvas'); scrC.width = 1400; scrC.height = 760; const sx = scrC.getContext('2d'), scr = new THREE.CanvasTexture(scrC); scr.colorSpace = THREE.SRGBColorSpace;
  const big = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 2.5), new THREE.MeshBasicMaterial({ map: scr })); big.position.set(-.05, 3.3, -5.8); c.add(big); c.add(box(4.8, 2.7, .1, '#0a0f1a', -.05, 3.3, -5.88, false));
  let lastK = ''; const paint = (bar, alarm) => { const key = Math.round(bar * 40) + '_' + alarm; if (key === lastK) return; lastK = key;
    sx.fillStyle = alarm ? '#2A0A10' : '#071226'; sx.fillRect(0, 0, 1400, 760); sx.strokeStyle = alarm ? '#4A1820' : '#17304F'; sx.lineWidth = 2; for (let a = 0; a < 1400; a += 70) { sx.beginPath(); sx.moveTo(a, 0); sx.lineTo(a, 760); sx.stroke(); }
    sx.textAlign = 'left'; sx.font = "600 44px 'IBM Plex Mono'"; sx.fillStyle = '#EAF6FF'; sx.fillText('DEFESA PLANETÁRIA', 60, 80);
    sx.fillStyle = '#9BB3CF'; sx.font = "600 36px 'IBM Plex Mono'"; sx.fillText('AVISO QUE O PLANO PRECISA', 60, 200);
    sx.fillStyle = '#17304F'; sx.fillRect(60, 230, 1280, 90); sx.fillStyle = '#6FF0D8'; sx.shadowColor = '#6FF0D8'; sx.shadowBlur = 20; sx.fillRect(60, 230, 1280 * bar, 90); sx.shadowBlur = 0; sx.fillStyle = '#071226'; sx.font = "900 60px Fraunces"; if (bar > .3) sx.fillText('ANOS', 90, 296);
    sx.fillStyle = '#9BB3CF'; sx.font = "600 36px 'IBM Plex Mono'"; sx.fillText('AVISO QUE VOCÊ TEVE', 60, 440);
    sx.fillStyle = '#17304F'; sx.fillRect(60, 470, 1280, 90); if (bar > .95) { sx.fillStyle = '#FF4A3A'; sx.shadowColor = '#FF4A3A'; sx.shadowBlur = 20; sx.fillRect(60, 470, 14, 90); sx.shadowBlur = 0; sx.fillStyle = '#FF8A7A'; sx.font = "900 60px Fraunces"; sx.fillText('1 DIA', 100, 536); }
    if (alarm) { sx.fillStyle = '#FF4A3A'; sx.font = "900 70px Fraunces"; sx.textAlign = 'center'; sx.fillText('⚠ DESCOBERTO ONTEM', 700, 690); }
    scr.needsUpdate = true; };
  const mon = (x, y, z, ry, seed, sc = 1) => { const t = canvasTex(320, 200, (g) => { const R = rng(seed); g.fillStyle = '#081528'; g.fillRect(0, 0, 320, 200); g.strokeStyle = ['#6FF0D8', '#F2C14E', '#F08AA0'][seed % 3]; g.lineWidth = 3; g.beginPath(); for (let a = 0; a < 320; a += 8) g.lineTo(a, 100 + (R() - .5) * 110); g.stroke(); g.fillStyle = '#9BB3CF'; for (let i = 0; i < 4; i++) g.fillRect(12, 150 + i * 11, 90 + R() * 200, 4); }); const m = new THREE.Mesh(new THREE.PlaneGeometry(1.5 * sc, .95 * sc), new THREE.MeshBasicMaterial({ map: t })); m.position.set(x, y, z); m.rotation.y = ry; c.add(m); const b = box(1.6 * sc, 1.04 * sc, .06, '#111722', x, y, z - .04, false); b.rotation.y = ry; c.add(b); };
  [[-4.2, -3.6, .5], [-2.1, -4, .2], [2.1, -4, -.2], [4.2, -3.6, -.5]].forEach(([x, z, r], i) => { const b = box(1.9, .9, .8, std('#27324A', { roughness: .45 }), x, .45, z); b.rotation.y = r; c.add(b); mon(x - .45, 1.36, z, r, i * 2 + 1, .75); mon(x + .45, 1.36, z, r, i * 2 + 2, .75); });
  // mesa da frente com papéis e café (primeiro plano desfocado)
  c.add(box(3.6, .1, 1.2, std('#2E3A56', { roughness: .4 }), -.4, 1.0, 2.6)); const cof = new THREE.Mesh(new THREE.CylinderGeometry(.07, .06, .16, 16), std('#F2EDE2')); cof.position.set(-.9, 1.13, 2.5); c.add(cof); c.add(box(.5, .01, .36, '#F7F2E8', .2, 1.06, 2.5));
  // sirene
  const siren = new THREE.Mesh(new THREE.SphereGeometry(.22, 20, 12, 0, 6.3, 0, 1.57), new THREE.MeshStandardMaterial({ color: '#600', emissive: '#FF2A12', emissiveIntensity: 0 })); siren.position.set(3.2, 6.0, -3); c.add(siren); const sL = new THREE.SpotLight('#FF3A20', 0, 20, .5, .6, 1.2); sL.position.set(3.2, 5.9, -3); c.add(sL, sL.target);
  const key = new THREE.SpotLight('#CFE8FF', 90, 18, .5, .5, 1.3); key.position.set(-2.6, 5.8, 3.4); key.target.position.set(.2, 1.1, -1); key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.radius = 5; c.add(key, key.target); c.add(new THREE.HemisphereLight('#5E7AB8', '#10131e', 1.1)); const fill = new THREE.PointLight('#6FE0FF', 14, 13, 1.5); fill.position.set(0, 3, -3.6); c.add(fill);
  const boss = makeChar({ outfit: 'jaleco', hair: 'bun', hairc: '#2a1b18', lash: true, glow: .18, glasses: true }); boss.place(.55, -1.1); c.add(boss.root); boss.tint('#EEF3FA');
  const hero = makeChar({ outfit: 'hero', glow: .2 }); hero.place(-.75, -.8); c.add(hero.root); hero.tint('#EEF3FA');
  const clip = cut(canvasTex(240, 320, (x) => { x.fillStyle = '#8A5A36'; x.fillRect(0, 0, 240, 320); x.fillStyle = '#FBF7EC'; x.fillRect(16, 34, 208, 270); x.fillStyle = '#C9C5BA'; x.fillRect(82, 12, 76, 34); x.fillStyle = '#20202a'; x.font = '900 30px Fraunces'; x.textAlign = 'center'; x.fillText('PLANO', 120, 88); x.fillStyle = '#7A7E88'; for (let i = 0; i < 7; i++) x.fillRect(38, 112 + i * 24, 164, 6); }), .36, .48); c.add(clip);
  s.update = (t, u) => {
    const bar = smooth(.2, 1.4, u), alarm = u > 3.6 && Math.floor(u * 4) % 2 === 0; paint(bar, u > 3.6 ? (alarm ? 1 : 0) : 0);
    const al = u > 3.6 ? 1 : 0; siren.material.emissiveIntensity = al * 4; sL.intensity = al * 160; sL.target.position.set(Math.cos(u * 9) * 6, 0, -2 + Math.sin(u * 9) * 4);
    const K = smooth(0, 4.5, u); aim(s.camera, [lerp(.5, -.05, K), lerp(1.65, 1.6, K), lerp(6.2, 4.6, K)], [lerp(.2, -.05, K), lerp(2.1, 1.75, K), -2], .006);
    hero.face(s.camera); boss.face(s.camera);
    const drop = smooth(3.6, 3.85, u); boss.pose({ armL: [lerp(20, 100, drop), lerp(-95, 10, drop)], armR: [lerp(10, 100, drop), lerp(6, 10, drop)], head: lerp(-4, 0, drop) }); boss.eye(u < 1.7 ? 'down' : u < 3.6 ? 'look' : 'wide');
    clip.position.set(boss.root.position.x - .22 + drop * .1, lerp(1.2, .05, smooth(3.65, 3.95, u)), boss.root.position.z + .12); clip.rotation.z = drop * 1.2; pointer(clip, s.camera);
    hero.pose({ armL: [lerp(10, 120, drop), lerp(6, 40, drop)], armR: [lerp(10, 120, drop), lerp(6, 40, drop)], head: u < 3.6 ? Math.sin(u * 2) * 2 : 0 }); hero.eye(u < 1.5 ? 'open' : u < 3.6 ? 'smug' : 'wide');
    return { focus: s.camera.position.z + .9, range: 4.5, blur: 9, bloom: .38, bloomT: .9, vig: .48, exposure: 1.04, tint: u > 3.6 ? '#FFD8D0' : '#ffffff' };
  };
  return s;
}

/** 7. Você corre para a janela. A bola de fogo passa. O vidro estoura — 25.3 a 28.8 */
export function shotJanela(t0, t1) {
  const s = makeShot(t0, t1, '#141228', 44), c = s.scene; c.fog = new THREE.FogExp2('#2B1E2E', .008);
  const S = sala(c);
  const cx = (S.X0 + S.X1) / 2, cy = (S.Y0 + S.Y1) / 2;
  // vidro da janela, e os cacos
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(S.X1 - S.X0, S.Y1 - S.Y0), new THREE.MeshStandardMaterial({ color: '#BFE8FF', transparent: true, opacity: .14, roughness: .05, metalness: .3, depthWrite: false })); glass.position.set(cx, cy, S.WZ + .01); c.add(glass);
  const R = rng(17), shT = canvasTex(64, 64, (x) => { x.fillStyle = '#DDF4FF'; x.beginPath(); x.moveTo(4, 60); x.lineTo(32, 2); x.lineTo(60, 44); x.closePath(); x.fill(); x.strokeStyle = '#ffffff'; x.lineWidth = 4; x.stroke(); });
  const shards = []; for (let i = 0; i < 70; i++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(.18 + R() * .2, .18 + R() * .2), new THREE.MeshBasicMaterial({ map: shT, transparent: true, opacity: .85, side: THREE.DoubleSide, depthWrite: false })); c.add(m); shards.push({ m, x: cx + (R() - .5) * (S.X1 - S.X0), y: cy + (R() - .5) * (S.Y1 - S.Y0), vx: (R() - .5) * 2.5, vy: R() * 1.5 - .3, vz: 3 + R() * 5, rx: R() * 9, ry: R() * 9 }); }
  // herói de costas em pé no sofá, olhando a janela
  const back = cut(backTex(), 1.1, 1.43); c.add(back);
  // bola de fogo cruzando o céu sobre a cidade
  const fb = fireball(5, 1.4, [-1, -.42, 0], 10); c.add(fb);
  const glow = new THREE.DirectionalLight('#FFB070', 0); glow.position.set(cx, 8, -30); glow.target.position.set(cx, 0, 0); c.add(glow, glow.target); const pl = new THREE.PointLight('#FFC080', 0, 14, 1.2); pl.position.set(cx, cy, S.WZ + .5); c.add(pl);
  const IMP = 2.42;
  s.update = (t, u) => {
    const run = smooth(0, .7, u); back.position.set(lerp(cx + 1.6, cx - .1, run), lerp(.95, 1.55, smooth(.4, .8, u)) + (u < .8 ? Math.abs(Math.sin(u * 14)) * .06 : 0), -3.05); back.scale.setScalar(1);
    const fk = smooth(.3, IMP, u); fb.position.set(lerp(45, -10, fk), lerp(30, 6, fk), -40); fb.flick(u); fb.visible = u < IMP + .3;
    const L = smooth(1.2, IMP, u); glow.intensity = L * 4; pl.intensity = L * 25;
    const br = u > IMP; glass.visible = !br; const e = Math.max(0, u - IMP);
    for (const q of shards) { q.m.visible = br; if (!br) continue; q.m.position.set(q.x + q.vx * e, q.y + q.vy * e - 2.5 * e * e, S.WZ + .05 + q.vz * e); q.m.rotation.set(q.rx + e * 9, q.ry + e * 7, 0); }
    if (br) { const k = smooth(IMP, IMP + .4, u); back.position.set(lerp(cx - .1, cx + .3, k), lerp(1.55, 1.2, k), lerp(-3.05, -2.1, k)); back.rotation.z = -k * .5; }
    const shake = br ? Math.sin(u * 61) * .06 * (1 - smooth(IMP, IMP + 1, u)) : 0;
    const K = smooth(0, 3.5, u); aim(s.camera, [cx + .5 + shake, lerp(1.55, 1.75, K) + shake, lerp(.6, -.3, K)], [cx, lerp(2.6, 2.9, K), -40], shake);
    return { focus: lerp(3.6, 3.0, K), range: 1.6, blur: 12, bloom: .5, bloomT: .82, vig: .52, exposure: 1 + L * .15, flash: smooth(IMP - .03, IMP, u) * (1 - smooth(IMP, IMP + .45, u)) * .95 };
  };
  return s;
}

/** 8. A pedra de 2013 era menor que uma piscina olímpica — 28.8 a 31.4 */
export function shotPiscina(t0, t1) {
  const s = makeShot(t0, t1, '#BFD8EE', 42), c = s.scene; c.fog = new THREE.FogExp2('#D8E6F2', .006); s.camera.far = 900; s.camera.updateProjectionMatrix();
  sky(c, -240, 900, 300, [[0, '#6FA7D8'], [.6, '#BFD8EE'], [1, '#F4EDE2']]); skyline(c, -200, 700, 60, ['#A8B4C8', '#9AA8BE', '#8E9CB4'], false, 11);
  const snow = canvasTex(1024, 1024, (x) => { x.fillStyle = '#E9EEF2'; x.fillRect(0, 0, 1024, 1024); const R = rng(2); for (let i = 0; i < 4000; i++) { x.fillStyle = `rgba(${R() < .5 ? '255,255,255' : '150,170,190'},.12)`; x.fillRect(R() * 1024, R() * 1024, 3, 3); } }); snow.wrapS = snow.wrapT = THREE.RepeatWrapping; snow.repeat.set(20, 20);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), new THREE.MeshStandardMaterial({ map: snow, roughness: 1 })); g.rotation.x = -Math.PI / 2; g.receiveShadow = true; c.add(g);
  const P = new THREE.Group(); P.rotation.y = Math.PI / 2; c.add(P);
  // piscina olímpica 50 x 25
  const deck = canvasTex(1024, 512, (x) => { x.fillStyle = '#D9D2C2'; x.fillRect(0, 0, 1024, 512); x.strokeStyle = '#BFB6A4'; x.lineWidth = 2; for (let i = 0; i < 1024; i += 32) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 512); x.stroke(); } for (let i = 0; i < 512; i += 32) { x.beginPath(); x.moveTo(0, i); x.lineTo(1024, i); x.stroke(); } x.fillStyle = '#2A4E7A'; x.font = '900 70px Fraunces'; x.textAlign = 'center'; x.fillText('50 M', 512, 70); });
  const dk = new THREE.Mesh(new THREE.PlaneGeometry(60, 34), new THREE.MeshStandardMaterial({ map: deck, roughness: .9 })); dk.rotation.x = -Math.PI / 2; dk.position.set(0, .02, 0); dk.receiveShadow = true; P.add(dk);
  const water = canvasTex(1024, 512, (x) => { const gr = x.createLinearGradient(0, 0, 0, 512); gr.addColorStop(0, '#3FB6D8'); gr.addColorStop(1, '#2A8EC0'); x.fillStyle = gr; x.fillRect(0, 0, 1024, 512); x.fillStyle = '#1E5E8A'; for (let i = 0; i < 10; i++) x.fillRect(0, 22 + i * 51, 1024, 6); x.strokeStyle = '#ffffff44'; x.lineWidth = 3; const R = rng(5); for (let i = 0; i < 160; i++) { const a = R() * 1024, b = R() * 512; x.beginPath(); x.moveTo(a, b); x.quadraticCurveTo(a + 12, b - 6, a + 24, b); x.stroke(); } });
  const wm = new THREE.Mesh(new THREE.PlaneGeometry(50, 25), new THREE.MeshStandardMaterial({ map: water, roughness: .15, metalness: .1, emissive: '#1E6A90', emissiveIntensity: .25 })); wm.rotation.x = -Math.PI / 2; wm.position.set(0, .05, 0); P.add(wm);
  for (let i = 0; i <= 10; i++) { const z = -12.5 + i * 2.5; const rope = new THREE.Mesh(new THREE.CylinderGeometry(.08, .08, 50, 8), std(i % 2 ? '#E9483A' : '#F2C14E')); rope.rotation.z = Math.PI / 2; rope.position.set(0, .1, z); P.add(rope); }
  for (let i = 0; i < 10; i++) { P.add(box(.7, .7, .7, '#F4F4F0', -25.6, .35, -11.25 + i * 2.5)); P.add(box(.5, .1, .5, ['#2A4E7A', '#E9483A'][i % 2], -25.6, .75, -11.25 + i * 2.5)); }
  P.add(box(51, .4, .4, '#F4F4F0', 0, .2, -12.7)); P.add(box(51, .4, .4, '#F4F4F0', 0, .2, 12.7));
  // gente na beira, para escala
  const spots = []; const R = rng(4); for (let i = 0; i < 90; i++) { const sd = R() < .5 ? -1 : 1; spots.push([sd * (14 + R() * 3), -24 + R() * 48]); } crowd(c, spots, { raised: .6, jump: .08, seed: 3 });
  // a pedra, 20 m, ao lado
  const pedra = rock(41, 9.5, ['#6E6258', '#857669', '#5A4F47', '#9A8A78']); pedra.position.set(0, 9.3, -42); c.add(pedra); const sh = softBlob(26, 22, .55); sh.position.set(1, .05, -41); c.add(sh);
  // régua de escala
  const ruler = (z0, z1, x, y, col) => { c.add(box(.25, .25, z1 - z0, col, x, y, (z0 + z1) / 2, false)); c.add(box(.25, 1.6, .25, col, x, y, z0, false)); c.add(box(.25, 1.6, .25, col, x, y, z1, false)); }; ruler(-25, 25, -15, 1.2, '#2A4E7A'); ruler(-51.5, -32.5, -13, 1.2, '#C9361F');
  c.add(new THREE.HemisphereLight('#EAF2FF', '#A8B0B8', 1.2)); const sun = new THREE.DirectionalLight('#FFF0D8', 3.2); sun.position.set(-40, 50, 30); sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096); Object.assign(sun.shadow.camera, { left: -70, right: 70, top: 70, bottom: -70, far: 200 }); sun.shadow.bias = -.0004; c.add(sun);
  s.update = (t, u) => {
    uT.value = t; const K = smooth(0, 2.6, u); pedra.rotation.y = u * .05;
    aim(s.camera, [lerp(18, 26, K), lerp(34, 52, K), lerp(52, 58, K)], [lerp(2, 0, K), 0, lerp(-14, -12, K)], 0);
    return { focus: s.camera.position.distanceTo(new THREE.Vector3(0, 0, -14)), range: 60, blur: 6, bloom: .2, bloomT: 1, vig: .36, exposure: 1.02 };
  };
  return s;
}
