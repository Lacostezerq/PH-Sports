// Abertura e capítulo 1 (0 a 70.6 s).
import * as THREE from 'three';
import { smooth, rng, lerp, clamp, keys } from './motor/core.js';
import { canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, tree, sky, skyline, pointer, car, lamp } from './motor/kit.js';
import { stars } from './motor/kit2.js';
import { mk, cam, hero, luzes, feixe, poeira, quadro, letreiro, planta, comodo, quarto, phoneMesh, TELA, cidade } from './lib.js';
import { sala, woodFloor } from './extra.js';

/** 1. Acordando: o celular está estranho — 0 a 3.36 */
export function sAcorda(t0, t1) {
  return mk(t0, t1, { bg: '#F2D9B0', fog: ['#E8D2B0', .02], fov: 32 }, (c) => {
    const Q = quarto(c); const h = hero(c, 1.0, -2.3, -.12); h.tint('#FFF2E2');
    const pz = poeira(c, 80, [-3, 1, .5, 3.5, -3.5, -.5]);
    return (t, u, C) => {
      pz(u); Q.tel.paint('b', (x) => TELA.bloqueio(x));
      const pick = smooth(1.9, 2.6, u); Q.tel.position.set(lerp(-.45, .78, pick), lerp(.615, 1.25, pick), lerp(-3.05, -2.0, pick)); Q.tel.rotation.x = lerp(-Math.PI / 2, -.25, pick);
      cam(C, [[0, [2.6, 1.7, 3.6]], [3.4, [1.5, 1.5, 1.2]]], [[0, [.6, 1.2, -2.6]], [3.4, [.9, 1.3, -2.3]]], u);
      h.face(C); h.eye(u < .7 ? 'shut' : u < 1.0 ? 'flat' : u < 2.0 ? 'open' : 'down'); h.pose({ armR: [lerp(10, 40, pick), lerp(6, -70, pick)], armL: [10, 6], head: u < 1 ? -6 : 0, squash: u < .7 ? -.02 : 0 });
      return { focus: C.position.distanceTo(h.root.position), range: 2.2, blur: 14, bloom: .3, bloomT: .9, vig: .4, exposure: 1.05 };
    };
  });
}

/** 2. Tela do celular: nenhuma notificação, grupo da família quieto — 3.36 a 9.05 */
export function sTela(t0, t1) {
  return mk(t0, t1, { bg: '#F2D9B0', fog: ['#E8D2B0', .02], fov: 30 }, (c) => {
    const Q = quarto(c); const tel = phoneMesh(.36, .74); c.add(tel); tel.position.set(.4, 1.4, -.6); tel.rotation.set(-.12, -.15, 0);
    const hand = box(.08, .3, .06, '#1C1C25', .2, 1.15, -.58); c.add(hand); const hand2 = box(.08, .3, .06, '#1C1C25', .6, 1.15, -.58); c.add(hand2);
    const glow = new THREE.PointLight('#AFC8FF', 3, 2); glow.position.set(.4, 1.4, -.2); c.add(glow);
    return (t, u, C) => {
      const g = u > 2.35; tel.paint(g ? 'g' : 'b', (x) => g ? TELA.grupo(x) : TELA.bloqueio(x)); tel.position.y = 1.4 + Math.sin(u * 1.3) * .006;
      cam(C, [[0, [.5, 1.45, .95]], [5.7, [.42, 1.42, .62]]], [[0, [.4, 1.4, -.6]], [5.7, [.4, 1.38, -.6]]], u, .01);
      return { focus: C.position.distanceTo(tel.position), range: 1.6, blur: 12, bloom: .2, bloomT: .95, vig: .45 };
    };
  });
}

/** 3. A rua vazia: nenhum carro, nenhum vizinho, só a moto do motoboy — 9.05 a 15.51 */
export function sRuaVazia(t0, t1) {
  return mk(t0, t1, { bg: '#BFD8EE', fog: ['#E8E0D8', .012], fov: 34 }, (c) => {
    cidade(c, { seed: 3 });
    // moto de entrega abandonada, com caixa
    const moto = new THREE.Group(); for (const z of [-.6, .6]) { const w = new THREE.Mesh(new THREE.TorusGeometry(.3, .09, 10, 24), std('#15151b')); w.rotation.y = Math.PI / 2; w.position.set(0, .3, z); moto.add(w); }
    moto.add(box(.25, .3, 1.1, '#C9361F', 0, .55, 0)); moto.add(box(.2, .15, .5, '#1C1C25', 0, .78, .15)); moto.add(box(.04, .5, .04, '#888', 0, .85, -.55)); moto.add(box(.5, .04, .04, '#888', 0, 1.1, -.55));
    const bx = box(.55, .5, .5, std('#E9483A'), 0, 1.05, .55); moto.add(bx); const lbl = new THREE.Mesh(new THREE.PlaneGeometry(.5, .2), new THREE.MeshStandardMaterial({ map: canvasTex(256, 100, (x) => { x.fillStyle = '#E9483A'; x.fillRect(0, 0, 256, 100); x.fillStyle = '#fff'; x.font = '900 52px Inter'; x.textAlign = 'center'; x.fillText('ENTREGA', 128, 70); }) })); lbl.position.set(.28, 1.05, .55); lbl.rotation.y = Math.PI / 2; moto.add(lbl);
    moto.rotation.z = .12; moto.position.set(2.8, 0, -3); c.add(moto); const sh = softBlob(1, 2, .5); sh.position.set(2.8, .02, -3); c.add(sh);
    // capacete no chão, folhas voando
    const cap = new THREE.Mesh(new THREE.SphereGeometry(.17, 18, 12, 0, 6.3, 0, 1.6), std('#F2C14E', { roughness: .3 })); cap.position.set(2.1, .1, -2.4); c.add(cap);
    const R = rng(4), leaves = []; const lt = canvasTex(32, 32, (x) => { x.fillStyle = '#B5862E'; x.beginPath(); x.ellipse(16, 16, 14, 7, .5, 0, 7); x.fill(); }); for (let i = 0; i < 30; i++) { const m = cut(lt, .12, .12); c.add(m); leaves.push({ m, x: (R() - .5) * 10, z: -R() * 20, p: R() * 6 }); }
    return (t, u, C) => {
      for (const l of leaves) { l.m.position.set(l.x + ((u * .8 + l.p) % 6) - 3, .1 + Math.abs(Math.sin(u * 2 + l.p)) * .4, l.z); l.m.rotation.z = u * 3 + l.p; }
      cam(C, [[0, [-1.5, 1.3, 9]], [3.5, [0, 1.6, 4.5]], [6.5, [1.4, 1.1, 1.0]]], [[0, [0, 2.5, -40]], [3.5, [.5, 1.8, -20]], [6.5, [2.8, .7, -3]]], u);
      return { focus: lerp(30, 4.2, smooth(3.6, 6, u)), range: lerp(30, 2.5, smooth(3.6, 6, u)), blur: 10, bloom: .2, bloomT: 1, vig: .38 };
    };
  });
}

/** 4. Você é a última pessoa da Terra: de perto para o alto — 15.51 a 22.13 */
export function sUltima(t0, t1) {
  return mk(t0, t1, { bg: '#BFD8EE', fog: ['#E8E0D8', .006], fov: 36, far: 900 }, (c) => {
    cidade(c, { seed: 9, cars: true }); const h = hero(c, 0, -10, 0, .3); h.tint('#FFF6EA');
    const pombos = []; const pt = canvasTex(64, 32, (x) => { x.fillStyle = '#5A6070'; x.beginPath(); x.moveTo(0, 16); x.quadraticCurveTo(16, 0, 32, 14); x.quadraticCurveTo(48, 0, 64, 16); x.quadraticCurveTo(32, 10, 0, 16); x.fill(); }); const R = rng(2); for (let i = 0; i < 9; i++) { const m = cut(pt, .5, .25); c.add(m); pombos.push({ m, p: R() * 6, x: (R() - .5) * 8, y: 6 + R() * 5 }); }
    return (t, u, C) => {
      for (const q of pombos) { q.m.position.set(q.x + u * 1.6, q.y + Math.sin(u * 2 + q.p) * .3, -18 - q.p); q.m.scale.y = .6 + Math.abs(Math.sin(u * 10 + q.p)) * .6; pointer(q.m, C); }
      cam(C, [[0, [.3, 1.55, -6.8]], [2.2, [.3, 2.2, -4.5]], [6.6, [0, 26, 14]]], [[0, [0, 1.5, -10]], [2.2, [0, 1.3, -10]], [6.6, [0, 0, -14]]], u);
      h.face(C); h.eye(u < 1.5 ? 'wide' : u < 3.5 ? 'small' : 'sad'); h.pose({ armL: [12, 6], armR: [12, 6], head: Math.sin(u * 1.2) * 3 });
      return { focus: C.position.distanceTo(h.root.position), range: lerp(2, 20, smooth(2, 5, u)), blur: 10, bloom: .2, bloomT: 1, vig: .45, sat: lerp(1, .9, u / 6.6) };
    };
  });
}

/** 5. Ninguém escondido: você chama, o eco responde — 22.13 a 27.29 */
export function sEco(t0, t1) {
  return mk(t0, t1, { bg: '#BFD8EE', fog: ['#E8E0D8', .01], fov: 34 }, (c) => {
    cidade(c, { seed: 5 }); const h = hero(c, -1.2, -4, 0, .25); h.tint('#FFF6EA');
    const lixo = new THREE.Group(); lixo.add(box(.7, .9, .6, '#3E7A5C', 0, .45, 0)); const tampa = box(.74, .06, .64, '#2E6A4C', 0, .93, 0); lixo.add(tampa); lixo.position.set(1.4, 0, -4.3); c.add(lixo);
    const bal = (txt, s) => cut(canvasTex(320, 200, (x) => { x.fillStyle = '#FBF7EC'; x.beginPath(); x.roundRect(10, 10, 300, 140, 40); x.fill(); x.beginPath(); x.moveTo(110, 148); x.lineTo(120, 196); x.lineTo(160, 148); x.fill(); x.fillStyle = '#20202A'; x.font = `900 ${s}px Fraunces`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(txt, 160, 84); }), 1, .62);
    const B = [bal('ALÔ?', 80), bal('ALÔ?', 70), bal('alô?', 60)]; B.forEach(b => c.add(b));
    return (t, u, C) => {
      cam(C, [[0, [-.4, 1.5, 1.4]], [5.2, [-.8, 1.55, .2]]], [[0, [-.6, 1.5, -4]], [5.2, [-.4, 1.5, -4.2]]], u);
      h.face(C); const call = u > .3 && u < 2.6; h.pose({ armL: call ? [100, 140] : [12, 6], armR: call ? [100, 140] : (u > 3.2 ? [40, -30] : [12, 6]), head: call ? -6 : 0, lean: u > 3.2 ? 4 : 0 }); h.eye(call ? 'wide' : u < 3.2 ? 'look' : 'lookl');
      tampa.rotation.x = -smooth(3.2, 3.6, u) * 1.2; tampa.position.z = -smooth(3.2, 3.6, u) * .3;
      B.forEach((b, i) => { const a = .45 + i * .55; const p = smooth(a, a + .15, u) * (1 - smooth(a + 1.4, a + 1.7, u)); b.visible = p > .02; b.scale.setScalar((1 - i * .2) * p); b.position.set(-1.2 + i * .9, 2.6 + i * .25, -4.3 - i * 2.5); pointer(b, C); });
      return { focus: C.position.distanceTo(h.root.position), range: 2.4, blur: 12, bloom: .2, bloomT: 1, vig: .42 };
    };
  });
}

/** 6. Deixa um like: telão na praça — 27.29 a 33.1 */
export function sLike(t0, t1) {
  return mk(t0, t1, { bg: '#BFD8EE', fog: ['#E8E0D8', .01], fov: 34 }, (c) => {
    cidade(c, { seed: 11 }); const h = hero(c, .8, -3, 0, .3); h.tint('#FFF6EA');
    const tela = document.createElement('canvas'); tela.width = 800; tela.height = 450; const tx = tela.getContext('2d'); const tt = new THREE.CanvasTexture(tela); tt.colorSpace = THREE.SRGBColorSpace;
    const paint = (k) => { tx.fillStyle = '#10162B'; tx.fillRect(0, 0, 800, 450); tx.fillStyle = '#E9483A'; tx.beginPath(); tx.roundRect(250, 70, 300, 300, 40); tx.fill(); tx.fillStyle = '#fff'; tx.save(); tx.translate(400, 220); tx.scale(1 + k * .1, 1 + k * .1); tx.beginPath(); tx.roundRect(-70, -10, 50, 100, 10); tx.roundRect(-10, -20, 100, 110, 20); tx.fill(); tx.beginPath(); tx.roundRect(-10, -100, 46, 100, 20); tx.fill(); tx.restore(); tx.fillStyle = '#fff'; tx.font = '900 46px Inter'; tx.textAlign = 'center'; tt.needsUpdate = true; };
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 3.6), new THREE.MeshStandardMaterial({ map: tt, emissiveMap: tt, emissive: '#fff', emissiveIntensity: .9 })); scr.position.set(-1.2, 5.8, -9); c.add(scr); c.add(box(6.7, 3.9, .3, '#15151b', -1.2, 5.8, -9.2)); c.add(box(.3, 4, .3, '#15151b', -1.2, 2, -9.3));
    let last = -1;
    return (t, u, C) => {
      const k = Math.round(Math.abs(Math.sin(u * 4)) * 4) / 4; if (k !== last) { paint(k); last = k; }
      cam(C, [[0, [2.2, 1.4, 3.5]], [5.8, [1.6, 1.6, 1.8]]], [[0, [-.4, 3.2, -6]], [5.8, [.2, 2.6, -5]]], u);
      h.face(C); h.pose({ armL: [10, 6], armR: u > 1.2 ? [140, 10] : [12, 6], head: u > 3.6 ? 5 : 0 }); h.eye(u < 3.6 ? 'happy' : 'smug');
      return { focus: C.position.distanceTo(h.root.position), range: 3.5, blur: 12, bloom: .35, bloomT: .9, vig: .42 };
    };
  });
}

/** 7. Capítulo 1: pânico, depois liberdade — os boletos voam — 33.1 a 43.58 */
export function sLiberdade(t0, t1) {
  return mk(t0, t1, { bg: '#F2D9B0', fog: ['#E8D2B0', .018], fov: 34 }, (c) => {
    comodo(c, { win: [-2.4, .6, 1.2, 3.6], wall: '#7A3E4E', side: false });
    sky(c, -30, 80, 50, [[0, '#7FB2E0'], [.7, '#F7D9B0'], [1, '#FFE9C8']]); skyline(c, -24, 60, 18, ['#A8B4C8', '#9AA8BE', '#8E9CB4'], false, 7, -3);
    const sofa = new THREE.Group(); const sf = std('#36AEA2'), sf2 = std('#43C4B4'); sofa.add(box(3.2, .46, 1.0, sf, 0, .3, 0)); sofa.add(box(3.2, .95, .34, sf, 0, .8, -.4)); for (const x of [-1.75, 1.75]) sofa.add(box(.36, .74, 1.1, sf2, x, .44, 0)); sofa.position.set(-.9, 0, -3.3); c.add(sofa);
    quadro(c, 2.2, 2.5, -3.8, 1.0, .7, (x, w, h) => { x.fillStyle = '#F2C14E'; x.fillRect(0, 0, w, h); x.fillStyle = '#C9564A'; x.beginPath(); x.arc(128, 90, 50, 0, 7); x.fill(); }); planta(c, 2.9, -3.4); planta(c, -3.4, -3.2, .8, '#36AEA2');
    luzes(c, { pos: [-3, 6, -10], target: [0, 0, 0] }); feixe(c, -1.2, 2.2, -2.4, 1.6, 4.5, -.5, '#FFE2B0', .14);
    const h = hero(c, -.9, -2.4, 0, .25); h.tint('#FFF2E2');
    const pap = canvasTex(128, 160, (x) => { x.fillStyle = '#FBF7EC'; x.fillRect(0, 0, 128, 160); x.fillStyle = '#20202A'; x.font = '900 22px Inter'; x.fillText('BOLETO', 12, 30); for (let i = 0; i < 16; i++) x.fillRect(12 + i * 6, 120, i % 3 ? 2 : 4, 30); x.fillStyle = '#9aa'; for (let i = 0; i < 4; i++) x.fillRect(12, 50 + i * 14, 100, 5); });
    const aluguel = canvasTex(128, 160, (x) => { x.fillStyle = '#FFF4D6'; x.fillRect(0, 0, 128, 160); x.fillStyle = '#C9361F'; x.font = '900 20px Inter'; x.fillText('ALUGUEL', 12, 30); x.fillStyle = '#9aa'; for (let i = 0; i < 6; i++) x.fillRect(12, 50 + i * 14, 100, 5); });
    const R = rng(9), papers = []; for (let i = 0; i < 40; i++) { const m = cut(i % 3 ? pap : aluguel, .32, .4); c.add(m); papers.push({ m, vx: (R() - .5) * 3, vy: 2 + R() * 2.5, vz: R() * 1.5, r: R() * 6, d: R() * .8 }); }
    return (t, u, C) => {
      cam(C, [[0, [-.6, 1.5, 3.2]], [3, [-.8, 1.5, 2.2]], [10.5, [-.5, 1.7, 3.6]]], [[0, [-.9, 1.4, -2.4]], [10.5, [-.8, 1.9, -2.6]]], u);
      h.face(C); const panic = u < 2.9;
      if (panic) { h.pose({ armL: [150 + Math.sin(u * 20) * 10, 30], armR: [150 - Math.sin(u * 20) * 10, 30], head: Math.sin(u * 18) * 5, bob: Math.abs(Math.sin(u * 14)) * .04 }); h.eye('wide'); }
      else if (u < 4.2) { h.pose({ armL: [10, 6], armR: [10, 6], head: 8 }); h.eye('look'); }
      else { h.cheer(u, 0, .8); h.eye('happy'); }
      for (const p of papers) { const e = Math.max(0, u - 4.3 - p.d); p.m.visible = e > 0; p.m.position.set(-.9 + p.vx * e, 1.6 + p.vy * e - .9 * e * e, -2.3 + p.vz * e); p.m.rotation.set(e * 3 + p.r, e * 2, e * 4); if (p.m.position.y < .02) p.m.position.y = .02; }
      return { focus: C.position.distanceTo(h.root.position), range: 2.2, blur: 12, bloom: .25, bloomT: .95, vig: .42 };
    };
  });
}

/** 8. O mundo inteiro é seu: terraço ao nascer do sol — 43.58 a 48.59 */
export function sTerraco(t0, t1) {
  return mk(t0, t1, { bg: '#F6B07A', fog: ['#F2B48A', .007], fov: 36, far: 900 }, (c) => {
    sky(c, -200, 900, 400, [[0, '#3A4A8A'], [.45, '#C46A7E'], [.75, '#F7A773'], [1, '#FFE0A0']]); const sol = glowSprite('#FFD9A0', 60, .9); sol.position.set(-30, 18, -190); sol.material.fog = false; c.add(sol);
    skyline(c, -160, 700, 110, ['#7A5A78', '#8A6A80', '#9A7A88'], false, 4); skyline(c, -90, 420, 60, ['#5A4A6A', '#634F70', '#6E5878'], false, 12); skyline(c, -50, 260, 34, ['#463A58', '#4E405E', '#584866'], false, 21);
    const deck = new THREE.Mesh(new THREE.PlaneGeometry(30, 20), new THREE.MeshStandardMaterial({ color: '#8A7A70', roughness: .9 })); deck.rotation.x = -Math.PI / 2; deck.receiveShadow = true; c.add(deck);
    c.add(box(30, .9, .25, '#6E5A50', 0, .45, -6)); for (const [x, z] of [[-4, -3], [3.5, -4]]) { c.add(box(1.4, 1.2, 1.4, '#9AA0A8', x, .6, z)); c.add(box(1.5, .1, 1.5, '#7A8088', x, 1.25, z)); }
    const caixa = new THREE.Mesh(new THREE.CylinderGeometry(.8, .8, 1.6, 20), std('#C9C2B6')); caixa.position.set(-5, 2.6, -4.5); c.add(caixa); for (const x of [-5.6, -4.4]) c.add(box(.1, 1.8, .1, '#5A4A44', x, .9, -4.5));
    for (let i = 0; i < 20; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(.05, 8, 6), new THREE.MeshStandardMaterial({ emissive: '#FFD79C', emissiveIntensity: 4, color: '#fff' })); b.position.set(-6 + i * .6, 2.6 - Math.sin(i / 19 * Math.PI) * .5, -2); c.add(b); }
    luzes(c, { key: '#FFB98C', ki: 3, pos: [-20, 8, -30], target: [0, 0, 0], hemi: 1 });
    const h = hero(c, 0, -3.5, 0, .4); h.tint('#FFE6D0');
    return (t, u, C) => {
      cam(C, [[0, [0, 1.2, -1.2]], [5, [0, 2.4, 3.6]]], [[0, [0, 1.6, -3.5]], [5, [0, 2.6, -8]]], u);
      h.face(C); const k = smooth(.3, 1.2, u); h.pose({ armL: [lerp(10, 115, k), lerp(6, 10, k)], armR: [lerp(10, 115, k), lerp(6, 10, k)], head: 0 }); h.eye(u > 1.5 ? 'happy' : 'open');
      return { focus: C.position.distanceTo(h.root.position), range: 4, blur: 10, bloom: .45, bloomT: .85, vig: .4, exposure: 1.02 };
    };
  });
}

/** 9. Concessionária: a chave está no balcão — 48.59 a 54.29 */
export function sConcessionaria(t0, t1) {
  return mk(t0, t1, { bg: '#DDE3EA', fog: ['#E4E8EE', .02], fov: 34 }, (c) => {
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(40, 30), new THREE.MeshStandardMaterial({ map: canvasTex(512, 512, (x) => { x.fillStyle = '#E8E8EC'; x.fillRect(0, 0, 512, 512); x.strokeStyle = '#C8C8D0'; x.lineWidth = 3; for (let i = 0; i <= 512; i += 128) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 512); x.moveTo(0, i); x.lineTo(512, i); x.stroke(); } }), roughness: .12, metalness: .2 })); fl.material.map.wrapS = fl.material.map.wrapT = THREE.RepeatWrapping; fl.material.map.repeat.set(8, 6); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; c.add(fl);
    c.add(box(40, 6, .3, std('#2E3442'), 0, 3, -8)); const sign = letreiro('AUTO PRIME', 7, 1.2, '#14171e', '#F2C14E', .9); sign.position.set(0, 4.6, -7.8); c.add(sign);
    for (let i = -3; i <= 3; i++) { const l = new THREE.Mesh(new THREE.BoxGeometry(2.4, .05, .3), new THREE.MeshStandardMaterial({ emissive: '#FFFFFF', emissiveIntensity: 2.4, color: '#fff' })); l.position.set(i * 3.2, 5.9, -3); c.add(l); }
    // carros em plataformas giratórias
    const plats = []; [[-4.2, -4.2, '#2A2E3A'], [0.4, -3.2, '#C9201A'], [4.8, -4.6, '#F2C14E']].forEach(([x, z, col], i) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, .15, 48), std('#B8BCC4', { metalness: .4, roughness: .3 })); p.position.set(x, .075, z); c.add(p); const g = new THREE.Group(); g.position.set(x, .15, z); c.add(g); const k = car(g, 0, 0, col, 1, false); k.scale.set(1.05, .85, 1.1); plats.push(g); if (i === 1) { const sp = new THREE.SpotLight('#FFFFFF', 80, 12, .4, .5, 1.2); sp.position.set(x, 6, z + 2); sp.target.position.set(x, 0, z); sp.castShadow = true; c.add(sp, sp.target); } });
    // balcão com a chave
    c.add(box(2.4, 1.05, .8, std('#1C2029'), -2.2, .52, .8)); c.add(box(2.5, .06, .9, std('#E8E8EC', { metalness: .2, roughness: .2 }), -2.2, 1.08, .8)); const key = box(.12, .04, .22, std('#C9201A', { metalness: .5 }), -2.0, 1.13, .8); c.add(key); const kg = glowSprite('#FFE9B0', .5, .5); kg.position.set(-2.0, 1.2, .8); c.add(kg);
    c.add(box(.5, .3, .02, '#F4EFE4', -2.8, 1.25, .5));
    // vidro e cidade lá fora
    sky(c, -40, 200, 60, [[0, '#7FB2E0'], [1, '#F4E9D8']]); skyline(c, -30, 120, 20, ['#A8B4C8', '#9AA8BE', '#8E9CB4'], false, 3, -1);
    luzes(c, { pos: [6, 12, 8], ki: 2, hemi: 1.2 });
    const h = hero(c, -2.2, 1.7, 0, .25); h.tint('#FFFFFF');
    return (t, u, C) => {
      plats.forEach((g, i) => g.rotation.y = u * .25 + i);
      cam(C, [[0, [-5.5, 1.5, 6.5]], [5.7, [-3.4, 1.6, 4.2]]], [[0, [-.5, 1, -2]], [5.7, [-2.1, 1.25, 1]]], u);
      h.face(C); const grab = smooth(2.3, 2.7, u); h.pose({ armR: [lerp(10, 60, grab), lerp(6, -20, grab)], armL: [10, 6] }); h.eye(u < 2.3 ? 'look' : u < 4 ? 'smug' : 'happy');
      if (u > 2.6) { key.position.set(h.root.position.x + .45, lerp(1.13, 1.5, smooth(2.6, 3.2, u)), h.root.position.z + .1); kg.position.copy(key.position); }
      return { focus: C.position.distanceTo(h.root.position), range: 3, blur: 12, bloom: .3, bloomT: .9, vig: .38 };
    };
  });
}

/** 10. Mansão: a cama mais macia, a TV sem nada — 54.29 a 62.05 */
export function sMansao(t0, t1) {
  return mk(t0, t1, { bg: '#2A1E2A', fog: ['#3A2830', .02], fov: 34 }, (c) => {
    comodo(c, { w: 16, wall: '#5A2E3E', side: false, floor: '#4A2E22' });
    for (const x of [-5, -1.7, 1.7, 5]) { const col = new THREE.Mesh(new THREE.CylinderGeometry(.22, .26, 4.2, 20), std('#E8DCC4')); col.position.set(x, 2.1, -3.7); col.castShadow = true; c.add(col); }
    // cama gigante com dossel
    const bed = new THREE.Group(); bed.add(box(3.8, .45, 3.2, '#3A2418', 0, .3, 0)); bed.add(box(3.6, .35, 3, std('#F4EFE4'), 0, .7, .05)); bed.add(box(3.66, .14, 2.2, std('#8E2A3A'), 0, .92, .45)); bed.add(box(3.9, 2.0, .2, '#6E3A2A', 0, 1.3, -1.6)); for (const x of [-.9, 0, .9]) { const pw = box(.9, .28, .5, std('#FBF7EC'), x, 1.0, -1.1); pw.rotation.x = -.3; bed.add(pw); } for (const [x, z] of [[-1.85, -1.5], [1.85, -1.5], [-1.85, 1.5], [1.85, 1.5]]) bed.add(box(.12, 3.4, .12, '#3A2418', x, 1.7, z)); bed.add(box(3.9, .1, 3.2, '#8E2A3A', 0, 3.4, 0)); bed.position.set(0, 0, -1.6); c.add(bed);
    // lustre
    const lu = new THREE.Group(); for (let i = 0; i < 10; i++) { const a = i / 10 * 6.283; const b = new THREE.Mesh(new THREE.SphereGeometry(.07, 10, 8), new THREE.MeshStandardMaterial({ emissive: '#FFD79C', emissiveIntensity: 5, color: '#fff' })); b.position.set(Math.cos(a) * .6, 0, Math.sin(a) * .6); lu.add(b); } lu.add(new THREE.Mesh(new THREE.TorusGeometry(.6, .03, 8, 40), std('#D9B46A', { metalness: .7 }))).rotation.x = Math.PI / 2; lu.position.set(0, 3.9, 1.2); c.add(lu); const lg = glowSprite('#FFD79C', 3, .5); lg.position.copy(lu.position); c.add(lg); const pl = new THREE.PointLight('#FFD5A0', 14, 12, 1.5); pl.position.set(0, 3.5, 1.2); pl.castShadow = true; c.add(pl);
    // TV na parede do lado, de frente para a cama (em ângulo)
    const tvC = document.createElement('canvas'); tvC.width = 640; tvC.height = 360; const tx = tvC.getContext('2d'); const tvT = new THREE.CanvasTexture(tvC); tvT.colorSpace = THREE.SRGBColorSpace;
    const tv = new THREE.Group(); tv.add(box(2.4, 1.4, .08, std('#0E0E14', { metalness: .5 }), 0, 0, 0)); const scr = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 1.3), new THREE.MeshBasicMaterial({ map: tvT })); scr.position.z = .045; tv.add(scr); tv.position.set(3.4, 2.1, 1.5); tv.rotation.y = -1.2; c.add(tv); const tl = new THREE.PointLight('#9FB8FF', 6, 7); tl.position.set(2.6, 2, 1.5); c.add(tl);
    planta(c, -3.4, -3.3, 1.2); planta(c, 3.4, -3.3, 1.2);
    quadro(c, -3.4, 2.5, -3.8, 1.0, 1.3, (x, w, h) => { x.fillStyle = '#2A3A5A'; x.fillRect(0, 0, w, h); x.fillStyle = '#E9B44C'; x.beginPath(); x.arc(128, 150, 60, 0, 7); x.fill(); }, 0, '#D9B46A');
    c.add(new THREE.HemisphereLight('#B08AA0', '#2a1a14', .7));
    const h = hero(c, 0, -.95, .35, .25); h.tint('#FFE8D8');
    let lk = '';
    return (t, u, C) => {
      const static_ = u > 4.25; const k = static_ ? 's' + Math.floor(u * 12) : 'p'; if (k !== lk) { lk = k; if (!static_) { const g = tx.createLinearGradient(0, 0, 0, 360); g.addColorStop(0, '#F3A6B8'); g.addColorStop(1, '#8A4A7E'); tx.fillStyle = g; tx.fillRect(0, 0, 640, 360); tx.fillStyle = '#fff'; tx.font = '800 40px Inter'; tx.fillText('NOVELA', 30, 60); } else { const R = rng(Math.floor(u * 12)); const id = tx.createImageData(640, 360); for (let i = 0; i < id.data.length; i += 4) { const v = R() * 255; id.data[i] = id.data[i + 1] = id.data[i + 2] = v; id.data[i + 3] = 255; } tx.putImageData(id, 0, 0); tx.fillStyle = '#000000aa'; tx.fillRect(170, 140, 300, 80); tx.fillStyle = '#fff'; tx.font = '800 44px Inter'; tx.textAlign = 'center'; tx.fillText('SEM SINAL', 320, 196); tx.textAlign = 'left'; } tvT.needsUpdate = true; }
      tl.color.set(static_ ? '#DDDDEE' : '#FFA0C8');
      cam(C, [[0, [-1.5, 2.0, 5.5]], [7.8, [-.8, 1.7, 3.2]]], [[0, [.5, 1.4, -1]], [7.8, [.4, 1.5, -1]]], u);
      h.face(C); const drop = smooth(.2, .8, u); h.root.position.y = lerp(1.6, -.05, drop) + (u < 1.4 ? Math.abs(Math.sin(u * 9)) * .1 * (1 - smooth(.8, 1.4, u)) : 0); h.pose({ armL: [lerp(150, 60, drop), 10], armR: u > 2.6 ? [70, -40] : [lerp(150, 60, drop), 10], head: static_ ? 6 : 0 }); h.eye(u < 2.5 ? 'happy' : static_ ? 'flat' : 'look');
      return { focus: C.position.distanceTo(h.root.position), range: 2.5, blur: 12, bloom: .35, bloomT: .88, vig: .5 };
    };
  });
}

/** 11. Ainda tem internet: filme de graça… o que poderia dar errado? — 62.05 a 70.65 */
export function sInternet(t0, t1) {
  return mk(t0, t1, { bg: '#141228', fog: ['#2B1E2E', .02], fov: 32 }, (c) => {
    const S = sala(c); const h = hero(c, -.45, -2.75, -.12, .2); h.tint('#E8E0F0');
    const lap = new THREE.Group(); lap.add(box(.7, .03, .48, std('#B8BCC4', { metalness: .6 }), 0, 0, 0)); const scrC = document.createElement('canvas'); scrC.width = 400; scrC.height = 260; const sx = scrC.getContext('2d'); const sT = new THREE.CanvasTexture(scrC); sT.colorSpace = THREE.SRGBColorSpace; const scr = new THREE.Mesh(new THREE.PlaneGeometry(.66, .43), new THREE.MeshBasicMaterial({ map: sT })); const lid = new THREE.Group(); lid.add(box(.7, .46, .02, std('#B8BCC4', { metalness: .6 }), 0, .23, -.01)); scr.position.set(0, .23, .005); lid.add(scr); lid.position.z = -.24; lid.rotation.x = -.25; lap.add(lid); lap.position.set(-.45, .58, -1.9); c.add(lap);
    const lg = new THREE.PointLight('#9FC8FF', 3, 3); lg.position.set(-.45, 1.1, -1.5); c.add(lg);
    const capa = (i) => { sx.fillStyle = '#0B0B14'; sx.fillRect(0, 0, 400, 260); sx.fillStyle = '#E9483A'; sx.font = '900 28px Inter'; sx.fillText('FILMES GRÁTIS', 16, 36); const cols = ['#36AEA2', '#F2C14E', '#D2728A', '#4A86C7', '#8EAE86', '#E9733C']; for (let k = 0; k < 6; k++) { sx.fillStyle = cols[(k + i) % 6]; sx.fillRect(16 + k * 64, 60, 56, 84); sx.fillStyle = cols[(k + i + 2) % 6]; sx.fillRect(16 + k * 64, 160, 56, 84); } sT.needsUpdate = true; };
    let li = -1;
    return (t, u, C) => {
      S.setTV('novela', 0); const i = Math.floor(u * 1.2) % 6; if (i !== li) { capa(i); li = i; }
      const end = smooth(6.3, 7.6, u);
      cam(C, [[0, [.6, 1.4, 1.8]], [6.3, [.1, 1.45, .6]], [8.6, [-.4, 1.62, -.9]]], [[0, [-.45, 1.2, -2.6]], [8.6, [-.45, 1.6, -2.75]]], u);
      h.face(C); h.pose({ armL: [20, -70], armR: [20, -70], head: end > .5 ? 0 : Math.sin(u) * 2 }); h.eye(u < 6.6 ? (Math.floor(u * 2) % 5 === 0 ? 'happy' : 'down') : 'smug');
      const fl = u > 7.9 ? (Math.sin(u * 40) > .3 ? .55 : 1) : 1; S.lamp.intensity = 16 * fl;
      return { focus: C.position.distanceTo(h.root.position), range: lerp(2.4, 1.2, end), blur: 13, bloom: .3, bloomT: .92, vig: lerp(.45, .65, end), exposure: fl > .9 ? 1 : .8 };
    };
  });
}
