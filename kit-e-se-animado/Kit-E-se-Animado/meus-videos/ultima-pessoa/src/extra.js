// Peças próprias deste vídeo: asteroide, Terra, rastro de fogo, sala, fachada, dinossauros.
import * as THREE from 'three';
import { rng, lerp, smooth } from './motor/core.js';
import { canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, skyline, sky } from './motor/kit.js';
import { brickTex, earthTex } from './motor/kit2.js';

/** Rocha low-poly com crateras e cor variada. */
export function rock(seed, r = 1, cols = ['#6E6258', '#857669', '#5A4F47', '#9A8A78']) {
  const g = new THREE.IcosahedronGeometry(1, 4), R = rng(seed), p = g.attributes.position;
  const waves = [], craters = [];
  for (let i = 0; i < 9; i++) { const d = new THREE.Vector3(R() - .5, R() - .5, R() - .5).normalize(); waves.push([d, .8 + R() * 2.2, .025 + R() * .05, R() * 6]); }
  for (let i = 0; i < 7; i++) craters.push([new THREE.Vector3(R() - .5, R() - .5, R() - .5).normalize(), .18 + R() * .25, .05 + R() * .07]);
  const col = new Float32Array(p.count * 3), v = new THREE.Vector3(), cA = cols.map(c => new THREE.Color(c));
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i).normalize(); let d = 1;
    for (const [w, f, a, ph] of waves) d += Math.sin(v.dot(w) * f * 3 + ph) * a;
    let crat = 0; for (const [c, rad, dep] of craters) { const a = v.angleTo(c); if (a < rad) { const k = a / rad; d -= dep * (1 - k * k); crat = Math.max(crat, 1 - k); } else if (a < rad * 1.25) d += dep * .4 * (1 - (a - rad) / (rad * .25)); }
    v.multiplyScalar(d * r); p.setXYZ(i, v.x, v.y, v.z);
    const h = (Math.sin(v.x * 3.1 / r) + Math.sin(v.y * 2.3 / r + 1) + Math.sin(v.z * 4.1 / r + 2)) / 6 + .5; const c = cA[Math.floor(h * 3.99)].clone(); c.multiplyScalar(1 - crat * .35); col.set([c.r, c.g, c.b], i * 3);
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .9, flatShading: true })); m.castShadow = m.receiveShadow = true; return m;
}

/** Bola de fogo: rocha incandescente + cauda de brilhos aditivos. dir = direção do movimento. */
export function fireball(seed, r, dir = [1, -1, 0], tail = 8) {
  const g = new THREE.Group(); const k = rock(seed, r, ['#5A3020', '#7A3A1E', '#3A2018', '#8E4A22']); k.material.emissive = new THREE.Color('#FF6A1E'); k.material.emissiveIntensity = .55; g.add(k);
  const d = new THREE.Vector3(...dir).normalize(); const parts = [];
  for (let i = 0; i < 26; i++) { const u = i / 25; const s = glowSprite(i < 4 ? '#FFF2C8' : i < 12 ? '#FFB050' : '#FF5A20', r * (3.2 - u * 1.6), (1 - u) * .9); s.position.copy(d.clone().multiplyScalar(-u * tail * r)); g.add(s); parts.push(s); }
  const core = glowSprite('#FFFFFF', r * 2.6, 1); g.add(core);
  g.rockMesh = k; g.flick = (t) => { parts.forEach((s, i) => { s.material.opacity = (1 - i / 26) * (.75 + Math.sin(t * 30 + i) * .2); }); k.rotation.x = t * .8; k.rotation.y = t * .5; };
  return g;
}

/** Terra com atmosfera. */
export function earth(c, r = 4) {
  const E = new THREE.Mesh(new THREE.SphereGeometry(r, 80, 56), new THREE.MeshStandardMaterial({ map: earthTex(), roughness: .72 })); c.add(E);
  const atm = new THREE.Mesh(new THREE.SphereGeometry(r * 1.07, 64, 40), new THREE.ShaderMaterial({ transparent: true, depthWrite: false, side: THREE.BackSide, blending: THREE.AdditiveBlending, vertexShader: 'varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}', fragmentShader: 'varying vec3 n;void main(){float k=pow(max(.86-abs(n.z),0.),2.4);gl_FragColor=vec4(.35,.65,1.,1.)*k*2.2;}' })); E.add(atm);
  return E;
}

const woodFloor = (w, l, base, rx, ry) => { const t = canvasTex(1024, 1024, (x) => { x.fillStyle = base; x.fillRect(0, 0, 1024, 1024); const R = rng(8); for (let i = 0; i < 11; i++) { const px = i * 94; x.fillStyle = `rgba(${R() < .5 ? '255,220,180' : '20,10,5'},${R() * .12})`; x.fillRect(px, 0, 94, 1024); x.fillStyle = '#21140D'; x.fillRect(px, 0, 3, 1024); let y = R() * 300; while (y < 1024) { x.fillRect(px, y, 94, 3); y += 340 + R() * 300; } } }); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, l), new THREE.MeshStandardMaterial({ map: t, roughness: .5 })); m.rotation.x = -Math.PI / 2; m.receiveShadow = true; return m; };
export { woodFloor };

/** Tela da TV: novela, plantão ou novela de novo. */
export function paintTV(x, mode, u = 0) {
  const W = 800, H = 460;
  if (mode === 'plantao') {
    const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#1A2448'); g.addColorStop(1, '#0B1022'); x.fillStyle = g; x.fillRect(0, 0, W, H);
    for (let i = 0; i < 60; i++) { x.fillStyle = '#ffffff55'; x.fillRect((i * 137) % W, (i * 71) % 300, 3, 3); }
    // asteroide com rastro
    const ax = 470, ay = 170; const tg = x.createLinearGradient(ax - 260, ay - 150, ax, ay); tg.addColorStop(0, '#FF5A2000'); tg.addColorStop(1, '#FFC060'); x.strokeStyle = tg; x.lineWidth = 46; x.lineCap = 'round'; x.beginPath(); x.moveTo(ax - 260, ay - 150); x.lineTo(ax, ay); x.stroke();
    x.fillStyle = '#6E5848'; x.beginPath(); x.arc(ax, ay, 34, 0, 7); x.fill(); x.fillStyle = '#4A3A30'; x.beginPath(); x.arc(ax - 8, ay + 6, 9, 0, 7); x.arc(ax + 12, ay - 10, 6, 0, 7); x.fill();
    x.fillStyle = '#2E64B0'; x.beginPath(); x.arc(620, 470, 190, 0, 7); x.fill(); x.fillStyle = '#5E9A58'; x.beginPath(); x.ellipse(580, 330, 70, 40, .3, 0, 7); x.fill();
    x.fillStyle = '#C9201A'; x.fillRect(0, 300, W, 76); x.fillStyle = '#fff'; x.font = '900 52px Inter'; x.textAlign = 'left'; x.textBaseline = 'middle'; x.fillText('PLANTÃO', 28, 340);
    x.fillStyle = '#F2F2F2'; x.fillRect(0, 376, W, 84); x.fillStyle = '#16161E'; x.font = '800 36px Inter'; x.fillText('ASTEROIDE EM ROTA COM A TERRA', 28, 420);
    if (Math.floor(u * 3) % 2 === 0) { x.fillStyle = '#C9201A'; x.beginPath(); x.roundRect(620, 24, 156, 52, 10); x.fill(); x.fillStyle = '#fff'; x.font = '800 30px Inter'; x.fillText('● AO VIVO', 634, 51); }
    return;
  }
  // novela: casal, luz rosa e corações
  const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#F3A6B8'); g.addColorStop(1, '#8A4A7E'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.fillStyle = '#FFD9A855'; x.beginPath(); x.arc(400, 120, 140, 0, 7); x.fill();
  for (const [cx, hair, body] of [[300, '#5A2E1E', '#36AEA2'], [500, '#2A1810', '#F08AA0']]) { x.fillStyle = body; x.beginPath(); x.roundRect(cx - 70, 300, 140, 200, 30); x.fill(); if (cx === 500) { x.fillStyle = hair; x.beginPath(); x.roundRect(cx - 82, 150, 164, 210, 70); x.fill(); } x.fillStyle = '#121218'; x.beginPath(); x.arc(cx, 230, 80, 0, 7); x.fill(); x.fillStyle = '#FF5A7A'; for (const s of [-1, 1]) { const ex = cx + s * 28, ey = 226; x.beginPath(); x.moveTo(ex, ey + 14); x.bezierCurveTo(ex - 22, ey - 2, ex - 12, ey - 18, ex, ey - 6); x.bezierCurveTo(ex + 12, ey - 18, ex + 22, ey - 2, ex, ey + 14); x.fill(); } }
  x.fillStyle = '#FF7A9A'; for (let i = 0; i < 7; i++) { const hx = 120 + i * 95, hy = 90 + Math.sin(i * 2 + u * 3) * 30; x.font = '40px Inter'; x.fillText('♥', hx, hy); }
  x.fillStyle = '#00000066'; x.fillRect(0, 400, W, 60); x.fillStyle = '#fff'; x.font = '700 30px Inter'; x.textAlign = 'left'; x.textBaseline = 'middle'; x.fillText('NOVELA DAS NOVE', 26, 430);
}

/** Sala da casa à noite. Sofá contra a parede, janela atrás do sofá, TV de frente. */
export function sala(c, o = {}) {
  const night = o.night ?? true;
  c.add(woodFloor(18, 16, '#6A4530', 4, 3.5)).position.z = -1;
  // tapete
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 3), new THREE.MeshStandardMaterial({ map: canvasTex(512, 340, (x) => { x.fillStyle = '#2F3C5E'; x.fillRect(0, 0, 512, 340); x.strokeStyle = '#D9B46A'; x.lineWidth = 8; x.strokeRect(16, 16, 480, 308); x.strokeStyle = '#C9564A'; x.lineWidth = 5; x.strokeRect(38, 38, 436, 264); x.fillStyle = '#D9B46A55'; for (let i = 0; i < 9; i++) for (let j = 0; j < 5; j++) { x.beginPath(); x.arc(76 + i * 45, 82 + j * 44, 7, 0, 7); x.fill(); } }), roughness: 1 })); rug.rotation.x = -Math.PI / 2; rug.position.set(0, .01, -1.6); rug.receiveShadow = true; c.add(rug);
  // parede com papel de parede listrado e rodapé de madeira; janela recortada
  const wp = canvasTex(512, 512, (x) => { x.fillStyle = '#2F5A5E'; x.fillRect(0, 0, 512, 512); for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? '#356468' : '#2B5357'; x.fillRect(i * 64, 0, 64, 512); x.fillStyle = '#E8D8A033'; for (let y = 20; y < 512; y += 64) { x.beginPath(); x.arc(i * 64 + 32, y + (i % 2) * 32, 6, 0, 7); x.fill(); } } }); wp.wrapS = wp.wrapT = THREE.RepeatWrapping;
  const wm = (w, h) => { const t = wp.clone(); t.needsUpdate = true; t.repeat.set(w / 1.6, h / 1.6); return new THREE.MeshStandardMaterial({ map: t, roughness: .95 }); };
  const WZ = -4.2, X0 = -2.1, X1 = 1.0, Y0 = 1.35, Y1 = 3.75;
  for (const [x, y, w, h] of [[(-9 + X0) / 2, 2.75, X0 + 9, 5.5], [(X1 + 9) / 2, 2.75, 9 - X1, 5.5], [(X0 + X1) / 2, Y0 / 2, X1 - X0, Y0], [(X0 + X1) / 2, (Y1 + 5.5) / 2, X1 - X0, 5.5 - Y1]]) c.add(box(w, h, .3, wm(w, h), x, y, WZ));
  c.add(box(18, .32, .06, '#4A2E20', 0, .16, WZ + .18)); c.add(box(18, .05, .05, '#D8C8A0', 0, 1.0, WZ + .17, false));
  // moldura, cruzeta e peitoril da janela
  const fr = '#EDE5D2'; const win = new THREE.Group();
  for (const [x, y, w, h] of [[X0, (Y0 + Y1) / 2, .14, Y1 - Y0 + .14], [X1, (Y0 + Y1) / 2, .14, Y1 - Y0 + .14], [(X0 + X1) / 2, Y1, X1 - X0 + .14, .14], [(X0 + X1) / 2, (Y0 + Y1) / 2, .07, Y1 - Y0], [(X0 + X1) / 2, Y0 + (Y1 - Y0) * .62, X1 - X0, .06]]) win.add(box(w, h, .22, fr, x, y, WZ + .02));
  win.add(box(X1 - X0 + .5, .1, .36, fr, (X0 + X1) / 2, Y0 - .02, WZ + .16));
  c.add(win);
  // cortinas
  const curtain = (x) => { const t = canvasTex(256, 512, (g) => { for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#B0506A' : '#8E3A54'; g.fillRect(i * 32, 0, 32, 512); } }); const m = new THREE.Mesh(new THREE.PlaneGeometry(.9, 3.5), new THREE.MeshStandardMaterial({ map: t, roughness: 1, side: THREE.DoubleSide })); m.position.set(x, 2.4, WZ + .3); m.castShadow = true; return m; }; c.add(curtain(X0 - .35), curtain(X1 + .35)); c.add(box(4.6, .05, .05, '#2a1d18', (X0 + X1) / 2, 4.2, WZ + .32, false));
  // cidade pela janela
  sky(c, -60, 160, 90, night ? [[0, '#0E1030'], [.55, '#2A2252'], [.85, '#6B3A62'], [1, '#B05A5E']] : [[0, '#6FA7D8'], [1, '#FCE2C0']]);
  skyline(c, -40, 90, 34, ['#2F2748', '#3B2F54', '#4A3A5E'], night, 6, -2); skyline(c, -24, 60, 16, ['#241E3A', '#2B2342', '#30284A'], night, 9, -1);
  // sofá vermelho
  const sofa = new THREE.Group(); const sf = std('#B23C33'), sf2 = std('#CD5244');
  sofa.add(box(3.4, .46, 1.05, sf, 0, .3, 0)); sofa.add(box(3.4, 1.0, .34, sf, 0, .82, -.42)); for (const x of [-1.85, 1.85]) sofa.add(box(.38, .76, 1.15, sf2, x, .44, 0)); for (const x of [-.85, .85]) { sofa.add(box(1.66, .18, .96, sf2, x, .62, .06)); sofa.add(box(1.6, .62, .2, sf2, x, 1.0, -.22)); }
  const cush = box(.5, .5, .15, std('#E9B44C'), -1.35, 1.0, -.08); cush.rotation.z = .25; sofa.add(cush); const cush2 = box(.46, .46, .15, std('#36AEA2'), 1.38, .98, -.08); cush2.rotation.z = -.2; sofa.add(cush2);
  sofa.position.set(o.sofaX ?? -.55, 0, -3.5); c.add(sofa);
  // mesa de centro com saia (esconde as pernas de quem senta)
  const table = new THREE.Group(); table.add(box(2.0, .08, .9, '#8E6242', 0, .52, 0)); table.add(box(1.9, .4, .82, '#6E4A32', 0, .28, 0));
  const mug = new THREE.Mesh(new THREE.CylinderGeometry(.075, .065, .17, 22), std('#36AEA2', { roughness: .4 })); mug.position.set(-.6, .645, .1); mug.castShadow = true; table.add(mug);
  [['#D2728A', 0], ['#4A86C7', .05], ['#E9B44C', .1]].forEach(([k, d]) => table.add(box(.42, .045, .3, k, .6, .585 + d, -.05))); table.add(box(.26, .03, .09, '#1a1a22', .05, .575, .2));
  const bowl = new THREE.Mesh(new THREE.SphereGeometry(.17, 18, 10, 0, 6.3, 1.57, 1.57), std('#F2EDE2')); bowl.position.set(-.15, .73, -.15); table.add(bowl); for (let i = 0; i < 12; i++) { const pc = new THREE.Mesh(new THREE.SphereGeometry(.035, 8, 6), std('#FFF4D6')); pc.position.set(-.15 + Math.cos(i) * .08, .73, -.15 + Math.sin(i * 1.7) * .08); table.add(pc); }
  table.position.set(o.sofaX ?? -.55, 0, -1.9); c.add(table);
  // estante, quadros, luminária de pé, planta, relógio
  const shelf = new THREE.Group(); shelf.add(box(1.3, 2.6, .4, '#5C3C28', 0, 1.3, 0)); const R = rng(12); for (let s = 0; s < 4; s++) { shelf.add(box(1.2, .04, .38, '#7A5238', 0, .3 + s * .6, .02)); let xx = -.55; while (xx < .5) { const w = .05 + R() * .07, h = .28 + R() * .18; shelf.add(box(w, h, .26, ['#C9564A', '#36AEA2', '#E9B44C', '#4A86C7', '#F2EDE2', '#7E5FA8'][Math.floor(R() * 6)], xx, .32 + s * .6 + h / 2, .03)); xx += w + .01; } }
  shelf.position.set(4.7, 0, -3.9); c.add(shelf);
  const pic = (x, y, w, h, draw) => { c.add(box(w + .1, h + .1, .05, '#C9A46A', x, y, WZ + .18, false)); const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: canvasTex(256, Math.round(256 * h / w), draw), roughness: .8 })); m.position.set(x, y, WZ + .21); c.add(m); };
  pic(-3.4, 2.7, .8, 1.0, (x, w, h) => { x.fillStyle = '#F2C14E'; x.fillRect(0, 0, w, h); x.fillStyle = '#C9564A'; x.beginPath(); x.arc(128, 130, 70, 0, 7); x.fill(); x.fillStyle = '#2F5A5E'; x.fillRect(0, 230, w, 90); });
  pic(-4.4, 2.2, .6, .6, (x, w, h) => { x.fillStyle = '#E8DCC4'; x.fillRect(0, 0, w, h); x.fillStyle = '#36AEA2'; x.beginPath(); x.moveTo(20, 230); x.lineTo(128, 50); x.lineTo(236, 230); x.fill(); });
  pic(4.7, 3.25, .7, .5, (x, w, h) => { x.fillStyle = '#26324F'; x.fillRect(0, 0, w, h); x.fillStyle = '#FFE7B0'; x.beginPath(); x.arc(180, 60, 26, 0, 7); x.fill(); x.fillStyle = '#4A3A5E'; x.fillRect(0, 120, w, 70); });
  // calendário com a segunda-feira
  const cal = document.createElement('canvas'); cal.width = 300; cal.height = 380; const cx = cal.getContext('2d'); const calT = new THREE.CanvasTexture(cal); calT.colorSpace = THREE.SRGBColorSpace;
  const paintCal = (xp) => { cx.fillStyle = '#FBF7EC'; cx.fillRect(0, 0, 300, 380); cx.fillStyle = '#C9361F'; cx.fillRect(0, 0, 300, 90); cx.fillStyle = '#fff'; cx.font = '900 46px Fraunces'; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText('SEGUNDA', 150, 48); cx.fillStyle = '#20202A'; cx.font = '900 170px Fraunces'; cx.fillText('17', 150, 230); cx.fillStyle = '#7A7E88'; cx.font = '600 28px Inter'; cx.fillText('trabalho 8h', 150, 340); if (xp > 0) { cx.strokeStyle = '#D21E1E'; cx.lineWidth = 22; cx.lineCap = 'round'; const k = Math.min(1, xp * 2), k2 = Math.max(0, xp * 2 - 1); cx.beginPath(); cx.moveTo(40, 110); cx.lineTo(40 + 220 * k, 110 + 240 * k); if (k2 > 0) { cx.moveTo(260, 110); cx.lineTo(260 - 220 * k2, 110 + 240 * k2); } cx.stroke(); } calT.needsUpdate = true; };
  paintCal(0); const calM = new THREE.Mesh(new THREE.PlaneGeometry(.62, .78), new THREE.MeshStandardMaterial({ map: calT, roughness: .9 })); calM.position.set(2.95, 2.62, WZ + .2); c.add(calM); c.add(box(.04, .04, .04, '#555', 2.95, 3.04, WZ + .2, false));
  // relógio
  const clk = new THREE.Mesh(new THREE.CircleGeometry(.28, 32), new THREE.MeshStandardMaterial({ map: canvasTex(256, 256, (x) => { x.fillStyle = '#F4EFE4'; x.beginPath(); x.arc(128, 128, 126, 0, 7); x.fill(); x.strokeStyle = '#2a2a2f'; x.lineWidth = 12; x.stroke(); x.lineWidth = 8; x.beginPath(); x.moveTo(128, 128); x.lineTo(128, 50); x.moveTo(128, 128); x.lineTo(186, 150); x.stroke(); }), roughness: .6 })); clk.position.set(-3.4, 4.0, WZ + .2); c.add(clk);
  // luminária de pé
  const lx = (o.sofaX ?? -.55) - 2.55; c.add(box(.05, 2.1, .05, '#15151b', lx, 1.05, -3.3)); const shade = new THREE.Mesh(new THREE.CylinderGeometry(.22, .38, .42, 24, 1, true), new THREE.MeshStandardMaterial({ color: '#F6DDA4', emissive: '#FFB866', emissiveIntensity: 1.4, side: THREE.DoubleSide })); shade.position.set(lx, 2.2, -3.3); c.add(shade); const lg = glowSprite('#FFB870', 1.8, .45); lg.position.set(lx, 2.2, -3.3); c.add(lg);
  const lamp = new THREE.PointLight('#FFB56E', night ? 16 : 6, 11, 1.5); lamp.position.set(lx + .2, 2.0, -2.9); lamp.castShadow = true; lamp.shadow.mapSize.set(1024, 1024); lamp.shadow.radius = 6; lamp.shadow.bias = -.002; c.add(lamp);
  // planta
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(.3, .22, .5, 20), std('#C76B4A')); pot.position.set(-2.55, .25, -3.6); pot.castShadow = true; c.add(pot); const lf = canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); for (let i = 0; i < 11; i++) { x.fillStyle = i % 2 ? '#3E8A52' : '#2F6E42'; x.save(); x.translate(128, 240); x.rotate((i - 5) * .26); x.beginPath(); x.ellipse(0, -110, 18, 110, 0, 0, 7); x.fill(); x.restore(); } }); const pl = cut(lf, 1.5, 1.5, { shadow: true }); pl.position.set(-2.55, 1.2, -3.6); c.add(pl);
  // TV de frente para o sofá (de costas para a câmera nos planos frontais), num rack
  const tvC = document.createElement('canvas'); tvC.width = 800; tvC.height = 460; const tx = tvC.getContext('2d'); const tvT = new THREE.CanvasTexture(tvC); tvT.colorSpace = THREE.SRGBColorSpace;
  let lastKey = ''; const setTV = (mode, u) => { const k = mode + Math.floor(u * 6); if (k === lastKey) return; lastKey = k; paintTV(tx, mode, u); tvT.needsUpdate = true; };
  const tv = new THREE.Group(); tv.add(box(1.5, .9, .07, std('#121218', { roughness: .3, metalness: .5 }), 0, 0, 0)); const scr = new THREE.Mesh(new THREE.PlaneGeometry(1.42, .82), new THREE.MeshBasicMaterial({ map: tvT })); scr.position.z = .04; tv.add(scr); tv.add(box(.3, .3, .06, '#121218', 0, -.55, -.03));
  const tvLight = new THREE.PointLight('#9FC8FF', 7, 9, 1.4); tvLight.position.set(0, 0, .6); tv.add(tvLight);
  tv.position.set(2.95, 1.55, WZ + .22); c.add(tv); const rack = new THREE.Group(); rack.add(box(2.0, .5, .5, '#6E4A32', 0, .25, 0)); rack.add(box(2.04, .05, .54, '#8E6242', 0, .52, 0)); rack.add(box(.9, .3, .02, '#4E3222', -.5, .27, .26)); rack.add(box(.9, .3, .02, '#4E3222', .5, .27, .26)); rack.position.set(2.95, 0, WZ + .45); c.add(rack); const vase = new THREE.Mesh(new THREE.CylinderGeometry(.08, .12, .32, 16), std('#E9B44C')); vase.position.set(3.75, .71, WZ + .45); c.add(vase);
  // lâmpadas de teto (fio de luzes)
  for (let i = 0; i < 14; i++) { const x = -5 + i * .75, y = 4.5 - Math.sin(i / 13 * Math.PI) * .4; const b = new THREE.Mesh(new THREE.SphereGeometry(.04, 10, 8), new THREE.MeshStandardMaterial({ emissive: '#FFD79C', emissiveIntensity: 6, color: '#fff' })); b.position.set(x, y, WZ + .5); c.add(b); const gl = glowSprite('#FFC67A', .4, .4); gl.position.copy(b.position); c.add(gl); }
  // luzes gerais
  c.add(new THREE.HemisphereLight(night ? '#6E74C0' : '#FFF0DC', '#2a1a14', night ? .7 : 1.1)); const moon = new THREE.DirectionalLight(night ? '#8FA0FF' : '#FFE0B0', night ? 1.1 : 2.4); moon.position.set(-2, 7, -12); moon.castShadow = true; moon.shadow.mapSize.set(2048, 2048); Object.assign(moon.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, far: 30 }); c.add(moon);
  return { sofa, table, tv, setTV, tvLight, paintCal, win, WZ, X0, X1, Y0, Y1, lamp };
}

/** Prato de comida (arroz, feijão, bife, salada) como recorte. */
export const plateTex = () => canvasTex(256, 256, (x) => { x.fillStyle = '#F4F1EA'; x.beginPath(); x.ellipse(128, 128, 124, 124, 0, 0, 7); x.fill(); x.strokeStyle = '#D9D2C2'; x.lineWidth = 6; x.beginPath(); x.ellipse(128, 128, 92, 92, 0, 0, 7); x.stroke(); x.fillStyle = '#FFFDF4'; x.beginPath(); x.arc(96, 104, 44, 0, 7); x.fill(); x.fillStyle = '#5A2E1E'; x.beginPath(); x.arc(160, 104, 40, 0, 7); x.fill(); x.fillStyle = '#9A5A36'; x.beginPath(); x.ellipse(128, 168, 56, 30, .2, 0, 7); x.fill(); x.fillStyle = '#5FA046'; x.beginPath(); x.arc(70, 160, 18, 0, 7); x.arc(190, 160, 16, 0, 7); x.fill(); x.fillStyle = '#D9483A'; x.beginPath(); x.arc(80, 176, 9, 0, 7); x.fill(); });

/** Dinossauros recortados no estilo do vídeo (cabeça escura, olho branco oval). */
export function dinoTex(kind, col, col2) {
  return canvasTex(512, 384, (x) => {
    x.lineJoin = 'round'; x.lineCap = 'round';
    if (kind === 'pesc') { // pescoçudo
      x.fillStyle = col2; for (const lx of [150, 200, 300, 350]) x.fillRect(lx - 20, 250, 40, 120);
      x.fillStyle = col; x.beginPath(); x.ellipse(250, 250, 140, 80, 0, 0, 7); x.fill();
      x.beginPath(); x.moveTo(110, 250); x.quadraticCurveTo(20, 300, 6, 340); x.lineTo(30, 340); x.quadraticCurveTo(70, 300, 140, 290); x.fill();
      x.lineWidth = 46; x.strokeStyle = col; x.beginPath(); x.moveTo(340, 220); x.quadraticCurveTo(420, 150, 420, 60); x.stroke();
      x.fillStyle = '#121218'; x.beginPath(); x.ellipse(430, 52, 44, 34, 0, 0, 7); x.fill(); x.fillStyle = '#F6EFE6'; x.beginPath(); x.ellipse(440, 48, 9, 13, 0, 0, 7); x.fill();
      x.fillStyle = col2; x.globalAlpha = .5; for (let i = 0; i < 6; i++) { x.beginPath(); x.arc(190 + i * 26, 210, 10, 0, 7); x.fill(); } x.globalAlpha = 1;
    } else { // rex
      x.fillStyle = col2; x.fillRect(200, 250, 44, 120); x.fillRect(268, 250, 44, 120); x.fillRect(180, 352, 80, 22); x.fillRect(250, 352, 80, 22);
      x.fillStyle = col; x.beginPath(); x.ellipse(256, 220, 100, 70, -.3, 0, 7); x.fill(); x.beginPath(); x.moveTo(170, 230); x.quadraticCurveTo(60, 260, 10, 300); x.lineTo(30, 314); x.quadraticCurveTo(110, 290, 190, 270); x.fill();
      x.fillStyle = '#121218'; x.beginPath(); x.ellipse(350, 110, 82, 64, 0, 0, 7); x.fill(); x.fillStyle = '#F6EFE6'; x.beginPath(); x.ellipse(365, 96, 12, 17, 0, 0, 7); x.ellipse(398, 98, 12, 17, 0, 0, 7); x.fill();
      x.strokeStyle = col; x.lineWidth = 14; x.beginPath(); x.moveTo(320, 200); x.lineTo(350, 230); x.stroke();
    }
  });
}

/** Fachada de prédio com janelas e pessoas olhando (para os planos de janela). */
export function fachada(c, o = {}) {
  const cols = o.cols ?? 5, rows = o.rows ?? 6, ww = 1.5, wh = 1.9, gx = 2.5, gy = 3.0; const W = cols * gx + 1, H = rows * gy + 1.2;
  const bm = new THREE.MeshStandardMaterial({ map: brickTex(o.col ?? '#8C3E30', W / 2.2, H / 2.2), roughness: .95 });
  const slots = []; const g = new THREE.Group();
  const xs = (k) => -W / 2 + .5 + k * gx + gx / 2;
  for (let r = 0; r <= rows; r++) { const yA = r === 0 ? 0 : .9 + (r - 1) * gy + wh, yB = r === rows ? H : .9 + r * gy; g.add(box(W, yB - yA, .4, bm, 0, (yA + yB) / 2, 0)); }
  for (let r = 0; r < rows; r++) for (let k = 0; k <= cols; k++) { const xl = k === 0 ? -W / 2 : xs(k - 1) + ww / 2, xr = k === cols ? W / 2 : xs(k) - ww / 2; g.add(box(xr - xl, wh, .4, bm, (xl + xr) / 2, .9 + r * gy + wh / 2, 0)); }
  const R = rng(o.seed ?? 4);
  for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) {
    const x = xs(k), y = .9 + r * gy + wh / 2; const lit = R() < (o.lit ?? .8), warm = R();
    const back = box(ww, wh, .1, new THREE.MeshStandardMaterial({ color: '#000', emissive: lit ? (warm < .5 ? '#FFC47A' : '#FFD9A0') : '#1C2238', emissiveIntensity: lit ? .9 : .3 }), x, y, -1.2, false); g.add(back);
    // moldura, peitoril e cortinas
    for (const [a, b, w, h] of [[x - ww / 2 - .06, y, .12, wh + .12], [x + ww / 2 + .06, y, .12, wh + .12], [x, y + wh / 2 + .06, ww + .24, .12]]) g.add(box(w, h, .5, '#E8E0CE', a, b, .05));
    g.add(box(ww + .5, .12, .6, '#E8E0CE', x, y - wh / 2 - .04, .2));
    if (lit) { const cc = warm < .5 ? '#D69A6A' : '#C76A7A'; g.add(box(.32, wh, .05, cc, x - ww / 2 + .16, y, -.9, false)); g.add(box(.32, wh, .05, cc, x + ww / 2 - .16, y, -.9, false)); }
    if (R() < .3) { g.add(box(.6, .22, .3, '#C76B4A', x + (R() - .5) * .5, y - wh / 2 + .16, .3)); g.add(box(.5, .18, .2, '#4F8A4A', x + (R() - .5) * .5, y - wh / 2 + .34, .3)); }
    slots.push({ x, y: y - wh / 2, r, k, lit });
  }
  // escada de incêndio em algumas colunas
  for (let r = 1; r < rows; r++) { const x = xs(1); g.add(box(2.6, .06, .9, '#22222a', x, .9 + r * gy - .1, .7)); g.add(box(2.6, .05, .05, '#22222a', x, .9 + r * gy + .8, 1.12)); for (let i = 0; i < 9; i++) g.add(box(.03, .9, .03, '#22222a', x - 1.25 + i * .31, .9 + r * gy + .35, 1.12, false)); }
  g.add(box(W + .6, .5, .9, '#3d3540', 0, H + .25, .1));
  c.add(g); return { g, slots, W, H };
}

/** Chuva de meteoros: riscos de luz atravessando o céu, em função do tempo. */
export function meteors(c, n, area, o = {}) {
  const R = rng(o.seed ?? 3); const tex = canvasTex(256, 16, (x) => { const gr = x.createLinearGradient(0, 0, 256, 0); gr.addColorStop(0, '#ffffff00'); gr.addColorStop(.85, '#FFE2B0'); gr.addColorStop(1, '#ffffff'); x.fillStyle = gr; x.fillRect(0, 4, 256, 8); });
  const list = []; for (let i = 0; i < n; i++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false })); c.add(m); list.push({ m, ph: R() * 10, per: 1.6 + R() * 2.5, x: area[0] + R() * (area[1] - area[0]), y: area[2] + R() * (area[3] - area[2]), z: area[4], len: (o.len ?? 6) * (.6 + R() * .8) }); }
  return (t) => { for (const q of list) { const u = ((t + q.ph) % q.per) / q.per; const k = u / .35; q.m.visible = k < 1; if (k >= 1) continue; const dx = -1, dy = -.55; q.m.position.set(q.x + dx * k * q.len * 1.6, q.y + dy * k * q.len * 1.6, q.z); q.m.rotation.z = Math.atan2(dy, dx) + Math.PI; q.m.scale.set(q.len, q.len * .07, 1); q.m.material.opacity = Math.sin(k * Math.PI); } };
}

/** Herói visto de costas: capuz teal e cabeça preta (recorte pintado). */
export const backTex = () => canvasTex(400, 520, (x) => {
  x.translate(200, 0);
  const g = x.createLinearGradient(-150, 0, 150, 0); g.addColorStop(0, '#27998C'); g.addColorStop(.5, '#43C4B4'); g.addColorStop(1, '#27998C');
  x.fillStyle = g; x.beginPath(); x.moveTo(-150, 520); x.quadraticCurveTo(-156, 330, -110, 300); x.quadraticCurveTo(0, 270, 110, 300); x.quadraticCurveTo(156, 330, 150, 520); x.fill();
  x.fillStyle = '#1F7C72'; x.beginPath(); x.moveTo(-82, 300); x.quadraticCurveTo(0, 410, 82, 300); x.quadraticCurveTo(0, 360, -82, 300); x.fill();
  x.fillStyle = '#6FDCCB55'; x.fillRect(-150, 400, 16, 120);
  const h = x.createRadialGradient(-30, 110, 10, 0, 150, 140); h.addColorStop(0, '#30344A'); h.addColorStop(1, '#0A0A12'); x.fillStyle = h; x.beginPath(); x.arc(0, 160, 128, 0, 7); x.fill();
  x.strokeStyle = '#F6E2C8aa'; x.lineWidth = 5; x.beginPath(); x.arc(0, 160, 126, Math.PI * 1.05, Math.PI * 1.75); x.stroke();
  x.strokeStyle = '#FFE8D0'; x.lineWidth = 4; x.beginPath(); x.moveTo(-150, 520); x.quadraticCurveTo(-156, 330, -110, 300); x.stroke();
});
