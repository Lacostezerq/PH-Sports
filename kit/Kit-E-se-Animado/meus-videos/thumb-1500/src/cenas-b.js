// Sobreviver e ficar rico (59.66 a 133.69 s).
import * as THREE from 'three';
import { smooth, rng, lerp, clamp } from './motor/core.js';
import { canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, sky, pointer, tree } from './motor/kit.js';
import { smoke } from './motor/kit2.js';
import { mk, cam, luzes, feixe, poeira, letreiro } from './lib.js';
import { heroi, crianca, gente, casa, calcada, fundoLisboa, interior, vela, pergaminho, nau } from './lx.js';
import { icone } from './cenas-a.js';

/** 10. Sobreviver à infância: o pequeno cemitério — 59.66 a 73.03 */
export function sCemiterio(t0, t1) {
  return mk(t0, t1, { bg: '#9AA4B0', fog: ['#B0B8C0', .02], fov: 34, far: 600 }, (c) => {
    sky(c, -120, 500, 260, [[0, '#6A7488'], [.6, '#A8B0BC'], [1, '#D8D4CC']]);
    const gr = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), std('#5E6A44')); gr.rotation.x = -Math.PI / 2; gr.receiveShadow = true; c.add(gr);
    // capela de pedra com sino
    const cap = new THREE.Group(); cap.add(box(8, 6, 6, std('#C8BCA8'), 0, 3, 0)); for (const s of [-1, 1]) { const r = box(8.4, .2, 4.2, std('#9A4A2E'), 0, 6.9, s * 1.6); r.rotation.x = s * .55; cap.add(r); } cap.add(box(1.6, 3, 1.6, std('#C8BCA8'), 0, 8.5, 2.2)); cap.add(box(.12, 1.2, .12, '#3A2A1A', 0, 10.6, 2.2)); cap.add(box(.7, .12, .12, '#3A2A1A', 0, 10.8, 2.2)); const sino = new THREE.Mesh(new THREE.CylinderGeometry(.2, .35, .5, 12), std('#8A6A3A', { metalness: .7 })); sino.position.set(0, 8.6, 3.0); cap.add(sino); cap.add(box(1.4, 2.4, .1, std('#4A3220'), 0, 1.2, 3.02)); cap.position.set(-4, 0, -14); c.add(cap);
    c.add(box(30, 1.2, .5, std('#9A9082'), 0, .6, -9)); for (let i = 0; i < 12; i++) tree(c, -14 + i * 2.6, -12 - (i % 2) * 3, 1.2 + (i % 3) * .3, ['#3E4E34', '#4E5E3E', '#5E6E46', '#8A8A5A'], i);
    // cruzinhas de madeira com flores
    const R = rng(3), cruzes = []; for (let i = 0; i < 28; i++) { const x = -6 + (i % 7) * 1.6 + (R() - .5) * .3, z = -1 - Math.floor(i / 7) * 1.7; const g = new THREE.Group(); g.add(box(.08, .7, .06, '#6A4A2E', 0, .35, 0)); g.add(box(.36, .07, .06, '#6A4A2E', 0, .52, 0)); g.position.set(x, 0, z); g.rotation.z = (R() - .5) * .15; c.add(g); cruzes.push(g); const m = new THREE.Mesh(new THREE.SphereGeometry(.06, 8, 6), std(['#E8E0D0', '#D2728A', '#F2C14E'][i % 3])); m.position.set(x + .15, .06, z + .15); c.add(m); }
    const mae = gente(c, 'mae', 'long', '#3A2418', 1.6, .6); mae.tint('#D8D8E0');
    luzes(c, { ki: 1.4, key: '#D8DCE8', pos: [-10, 20, 10], r: 20, hemi: .9 });
    const nev = []; for (let i = 0; i < 60; i++) { const m = new THREE.Mesh(new THREE.SphereGeometry(.02, 4, 3), new THREE.MeshBasicMaterial({ color: '#E8ECF0' })); c.add(m); nev.push({ m, x: (R() - .5) * 14, z: -R() * 10, p: R() * 6 }); }
    return (t, u, C) => {
      nev.forEach(q => q.m.position.set(q.x + Math.sin(u + q.p) * .3, 4 - ((u * .6 + q.p) % 4), q.z));
      cam(C, [[0, [-1, 1.2, 6]], [6, [0, 1.4, 4]], [13.4, [2.4, 1.5, 3.4]]], [[0, [-2, 1, -6]], [6, [0, .6, -2]], [13.4, [1.6, 1.2, .4]]], u);
      mae.face(C); mae.eye(u < 7 ? 'sad' : 'shut'); mae.pose({ armL: [20, -110], armR: [20, -110], head: -8 });
      return { focus: lerp(8, C.position.distanceTo(mae.root.position), smooth(5, 9, u)), range: 4, blur: 10, bloom: .15, bloomT: 1, vig: .5, sat: .65 };
    };
  });
}

/** 11. Febre, água suja… e não tem farmácia — 73.03 a 80.25 */
export function sDoente(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .03], fov: 32 }, (c) => {
    const I = interior(c, { lareiraX: 3.6, noite: true });
    c.add(box(1.8, .35, 1, std('#6A4A2E'), -1.2, .18, -2.4)); c.add(box(1.7, .18, .95, std('#E2D6C0'), -1.2, .44, -2.4)); c.add(box(1.7, .1, .7, std('#7A5A8A'), -.9, .55, -2.3));
    const filho = gente(c, 'campones2', null, null, -1.5, -2.2, -.35, .6); filho.tint('#F0D8C8'); const febre = glowSprite('#FF5A3A', .5, .4); c.add(febre);
    const mae = gente(c, 'mae', 'long', '#3A2418', -.1, -1.9); mae.tint('#FFE0C8'); const pano = box(.2, .06, .14, '#F4EEDC', 0, 0, 0); c.add(pano);
    const balde = new THREE.Mesh(new THREE.CylinderGeometry(.22, .18, .3, 14), std('#6A4A2E')); balde.position.set(.6, .15, -1.4); c.add(balde); const agua = new THREE.Mesh(new THREE.CircleGeometry(.2, 16), std('#5A5A3A', { roughness: .2 })); agua.rotation.x = -Math.PI / 2; agua.position.set(.6, .29, -1.4); c.add(agua);
    const farm = letreiro('+', .9, .9, '#14141A', '#3ADE6A', 1.2, 'Inter'); farm.position.set(1.4, 2.3, -1); c.add(farm); const vs = [vela(c, -2.4, .9, -3)]; c.add(box(.4, .9, .4, std('#5A3A22'), -2.4, .45, -3));
    return (t, u, C) => {
      I.upd(u); vs.forEach(v => v.upd(u)); cam(C, [[0, [0, 1.5, 2.2]], [7.2, [.4, 1.5, 1.4]]], [[0, [-1, .8, -2.3]], [7.2, [.4, 1.5, -1.4]]], u);
      filho.face(C); filho.eye('shut'); filho.pose({ head: Math.sin(u * 8) * 3, bob: Math.abs(Math.sin(u * 4)) * .01 }); febre.position.set(-1.5, .55, -2.0); febre.material.opacity = .3 + Math.sin(u * 3) * .1;
      mae.face(C); mae.eye('sad'); mae.pose({ armL: [10, 6], armR: [55, -30] }); pano.position.set(-.4, 1.0, -1.8);
      const fs = u > 5.75 ? (u < 6.3 ? (Math.sin(u * 60) > 0 ? 1 : 0) : 0) : smooth(4.9, 5.3, u); farm.visible = fs > .5; pointer(farm, C);
      return { focus: C.position.distanceTo(new THREE.Vector3(-.8, 1, -2)), range: 2.2, blur: 13, bloom: .45, bloomT: .8, vig: .6 };
    };
  });
}

/** 12. Você ferve a água antes de beber — 80.25 a 87.84 */
export function sFerve(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .025], fov: 32 }, (c) => {
    const I = interior(c, { lareiraX: -1.2 });
    const kid = crianca(c, -.2, -2.6); const colher = box(.04, .8, .04, '#7A5232', 0, 0, 0); c.add(colher);
    const vap = smoke(c, 18, [-1.2, 1.0, -3.2], { col: '#FFFFFF', size: .9, rise: 2.4, spread: .25, seed: 7, life: 2 });
    const bolhas = []; for (let i = 0; i < 10; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(.035, 8, 6), new THREE.MeshStandardMaterial({ color: '#CFE8FF', transparent: true, opacity: .7 })); c.add(b); bolhas.push(b); }
    return (t, u, C) => {
      I.upd(u); vap(u); bolhas.forEach((b, i) => { const k = (u * 1.5 + i * .1) % 1; b.position.set(-1.2 + Math.cos(i * 2) * .2, .82 + k * .1, -3.3 + Math.sin(i * 2) * .15); b.scale.setScalar(1 - k); });
      cam(C, [[0, [.8, 1.2, .6]], [7.6, [.2, 1.1, -.6]]], [[0, [-.8, .9, -3.2]], [7.6, [-.6, .9, -3]]], u);
      kid.face(C); const st = Math.sin(u * 4); kid.pose({ armL: [10, 6], armR: [60 + st * 10, -40], head: 6 }); kid.eye(u < 3.5 ? 'down' : 'happy'); colher.position.set(kid.root.position.x - .38 + st * .05, .95, kid.root.position.z - .5); colher.rotation.z = .9;
      return { focus: C.position.distanceTo(kid.root.position), range: 1.6, blur: 13, bloom: .5, bloomT: .75, vig: .55 };
    };
  });
}

/** 13. A mãe acha esquisito, o pai doente, a vizinha coisa do demônio… e os irmãos copiam — 87.84 a 98.06 */
export function sFamilia(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .02], fov: 34 }, (c) => {
    const I = interior(c, { lareiraX: -3.4 });
    const kid = crianca(c, .3, -1.8); const mae = gente(c, 'mae', 'long', '#3A2418', -1.4, -2.6); mae.tint('#FFE0C8'); const pai = gente(c, 'campones', null, null, 3.4, -2.0); pai.tint('#FFE0C8');
    const viz = gente(c, 'parteira', 'bun', '#5A3A22', 4.2, -4.5, .9); viz.tint('#FFE8D0');
    const irmaos = [gente(c, 'campones2', null, null, -.6, -1.2, 0, .55), gente(c, 'mae', 'bob', '#3A2418', 1.2, -1.1, 0, .5)]; irmaos.forEach(k => k.tint('#FFE0C8'));
    const copos = irmaos.map(() => { const m = new THREE.Mesh(new THREE.CylinderGeometry(.05, .04, .1, 10), std('#B8683A')); c.add(m); return m; });
    return (t, u, C) => {
      I.upd(u);
      const P = [[0, [-1.4, 1.6, .4]], [1.8, [-1.2, 1.6, .2]], [2.4, [3.0, 1.6, 1.4]], [3.6, [3.2, 1.6, 1.2]], [4.0, [4.0, 2.2, -1.2]], [5.6, [4.0, 2.2, -1.5]], [6.4, [.4, 1.3, 2.4]], [10.2, [.3, 1.2, 1.6]]];
      const Q = [[0, [-1.4, 1.5, -2.6]], [1.8, [-1.4, 1.5, -2.6]], [2.4, [3.4, 1.5, -2.0]], [3.6, [3.4, 1.5, -2.0]], [4.0, [4.2, 2.4, -4.5]], [5.6, [4.2, 2.4, -4.5]], [6.4, [.3, .8, -1.4]], [10.2, [.3, .8, -1.4]]];
      cam(C, P, Q, u);
      mae.face(C); mae.eye('look'); mae.pose({ armL: [20, -100], armR: [20, -100], head: 8 }); pai.face(C); pai.eye(u < 3 ? 'small' : 'flat'); pai.pose({ armL: [10, 6], armR: [50, -150], head: -6 });
      viz.face(C); viz.eye('wide'); viz.pose({ armL: [60, -150], armR: [10, 6], lean: -4 }); kid.face(C); kid.eye('happy'); kid.pose({ armR: [40, -90] });
      irmaos.forEach((k, i) => { k.face(C); k.eye(u > 7 ? 'happy' : 'look'); const d = u > 7 + i * .4; k.pose({ armR: d ? [50, -120] : [10, 6] }); copos[i].visible = d; copos[i].position.set(k.root.position.x + .2, d ? .9 : .5, k.root.position.z + .1); });
      return { focus: u < 6 ? 3 : C.position.distanceTo(kid.root.position), range: 2.2, blur: 12, bloom: .4, bloomT: .82, vig: .55 };
    };
  });
}

/** 14. O que você sabe pode salvar gente — 98.06 a 103.83 */
export function sSalvar(t0, t1) {
  return mk(t0, t1, { bg: '#F2D9B0', fog: ['#E8D0A8', .02], fov: 32 }, (c) => {
    const I = interior(c, { lareiraX: -3.4 }); const kid = crianca(c, 0, -2); kid.root.children.forEach(m => {});
    const luz = new THREE.SpotLight('#FFE2B0', 80, 12, .4, .5, 1.2); luz.position.set(3, 5, 2); luz.target.position.set(0, .6, -2); c.add(luz, luz.target);
    const pz = poeira(c, 120, [-1.5, 1.5, .2, 2.5, -3, -.5], 4, '#FFE8B0');
    return (t, u, C) => { I.upd(u); pz(u); cam(C, [[0, [0, 1.0, 1.6]], [5.8, [0, .95, .4]]], [[0, [0, .95, -2]], [5.8, [0, 1.0, -2]]], u); kid.face(C); const k = smooth(.8, 1.6, u); kid.pose({ armL: [lerp(10, 40, k), lerp(6, -100, k)], armR: [lerp(10, 40, k), lerp(6, -100, k)], head: -k * 4 }); kid.eye(u < 1.6 ? 'down' : u < 3 ? 'wide' : 'happy'); return { focus: C.position.distanceTo(kid.root.position), range: 1.4, blur: 12, bloom: .55, bloomT: .72, vig: .5, exposure: 1.05 }; };
  });
}

/** 15. Ficar rico: chuva de moedas no sótão — 103.83 a 110.89 */
export function sRico(t0, t1) {
  return mk(t0, t1, { bg: '#2A1A10', fog: ['#2A1A10', .025], fov: 34 }, (c) => {
    const I = interior(c, { lareiraX: -3.4, parede: '#B8A080' }); const kid = crianca(c, .2, -1.8);
    const mt = canvasTex(64, 64, (x) => { const g = x.createRadialGradient(26, 26, 2, 32, 32, 30); g.addColorStop(0, '#FFF0A0'); g.addColorStop(1, '#C9902A'); x.fillStyle = g; x.beginPath(); x.arc(32, 32, 30, 0, 7); x.fill(); x.strokeStyle = '#8A6010'; x.lineWidth = 3; x.beginPath(); x.arc(32, 32, 22, 0, 7); x.stroke(); });
    const R = rng(5), M = []; for (let i = 0; i < 80; i++) { const m = cut(mt, .14, .14); c.add(m); M.push({ m, x: -2 + R() * 4.4, z: -3 + R() * 2.4, p: R() * 3, s: 1 + R() }); }
    const pilha = new THREE.Mesh(new THREE.ConeGeometry(.6, .4, 16), std('#D9A83A', { metalness: .8, roughness: .3 })); pilha.position.set(.2, .2, -1.4); c.add(pilha); const gl = glowSprite('#FFD870', 2.4, .4); gl.position.set(.2, .5, -1.4); c.add(gl);
    return (t, u, C) => {
      I.upd(u); M.forEach(q => { const y = 4 - ((u * q.s + q.p) % 4.2); q.m.position.set(q.x, Math.max(.05, y), q.z); q.m.rotation.y = u * 4 + q.p; });
      pilha.scale.set(1, smooth(0, 6, u) + .2, 1); cam(C, [[0, [.2, 1.3, 2]], [7, [.2, 1.6, 3.2]]], [[0, [.2, 1, -1.8]], [7, [.2, 1.3, -1.8]]], u);
      kid.face(C); kid.cheer(u, 0, .8); kid.eye('happy'); return { focus: C.position.distanceTo(kid.root.position), range: 2, blur: 12, bloom: .55, bloomT: .72, vig: .5 };
    };
  });
}

/** 16. Açúcar, especiarias, rotas: você sabe o futuro — 110.89 a 120.46 */
export function sArmazem(t0, t1) {
  return mk(t0, t1, { bg: '#2A1A10', fog: ['#3A2414', .02], fov: 34 }, (c) => {
    const I = interior(c, { lareiraX: -9, parede: '#C8B090' });
    const caixa = (x, z, txt, col) => { const t = canvasTex(256, 192, (q) => { q.fillStyle = '#9A7A52'; q.fillRect(0, 0, 256, 192); q.strokeStyle = '#6A4A2E'; q.lineWidth = 8; q.strokeRect(4, 4, 248, 184); q.fillStyle = col; q.font = '900 46px Fraunces'; q.textAlign = 'center'; q.fillText(txt, 128, 112); }); const m = new THREE.Mesh(new THREE.BoxGeometry(.9, .7, .7), new THREE.MeshStandardMaterial({ map: t })); m.position.set(x, .35, z); m.castShadow = true; c.add(m); return m; };
    for (let i = 0; i < 6; i++) { caixa(-3.4 + (i % 3) * .95, -3.2 + Math.floor(i / 3) * .8, 'AÇÚCAR', '#F4EEDC'); } for (let i = 0; i < 3; i++) caixa(-3.4 + i * .95, -3.2, 'AÇÚCAR', '#F4EEDC').position.y = 1.05;
    [['#2A1A14', 'PIMENTA'], ['#8A4A22', 'CANELA'], ['#E9A830', 'AÇAFRÃO'], ['#5A3A1A', 'CRAVO']].forEach(([k, n], i) => { const s = new THREE.Mesh(new THREE.CylinderGeometry(.35, .42, .7, 16), std('#C8B08A')); s.position.set(-.2 + i * .9, .35, -2.6); c.add(s); const m = new THREE.Mesh(new THREE.ConeGeometry(.34, .3, 16), std(k)); m.position.set(-.2 + i * .9, .85, -2.6); c.add(m); const l = letreiro(n, .7, .16, '#F4EEDC', '#3A2414', 0, 'Inter'); l.position.set(-.2 + i * .9, .45, -2.24); c.add(l); });
    const baú = new THREE.Group(); baú.add(box(1.2, .6, .7, std('#5A3A22'), 0, .3, 0)); baú.add(box(1.24, .08, .74, std('#C9A04A', { metalness: .7 }), 0, .62, 0)); for (let i = 0; i < 30; i++) { const m = new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, .02, 12), std('#E9B84A', { metalness: .8, roughness: .3 })); m.position.set(-.45 + (i % 8) * .13, .66 + Math.floor(i / 8) * .02, -.2 + (i % 3) * .15); baú.add(m); } baú.position.set(3.4, 0, -2.4); c.add(baú); const og = glowSprite('#FFD870', 2, .35); og.position.set(3.4, .9, -2.4); c.add(og);
    const mapa = pergaminho(c, 3, 2, (x, p, W, H) => { x.fillStyle = '#B89A6A'; [[700, 200, 90, 130], [760, 520, 120, 180], [200, 500, 120, 200], [880, 640, 60, 90]].forEach(([a, b, w, h]) => { x.beginPath(); x.ellipse(a, b, w, h, 0, 0, 7); x.fill(); }); x.strokeStyle = '#2A6A3A'; x.lineWidth = 6; x.setLineDash([14, 10]); x.beginPath(); x.moveTo(690, 240); x.quadraticCurveTo(500, 600, 760, 700); x.quadraticCurveTo(900, 640, 960, 420); x.stroke(); x.beginPath(); x.moveTo(690, 240); x.quadraticCurveTo(400, 420, 260, 480); x.stroke(); x.setLineDash([]); if (p > .5) { x.strokeStyle = '#C21A1A'; x.lineWidth = 12; x.beginPath(); x.moveTo(520, 360); x.lineTo(580, 420); x.moveTo(580, 360); x.lineTo(520, 420); x.stroke(); } x.fillStyle = '#3A2A10'; x.font = '700 48px Caveat'; x.fillText('Índia', 900, 380); x.fillText('Brasil', 200, 480); x.fillText('Lisboa', 640, 190); });
    mapa.position.set(1.4, 2.4, -3.82);
    return (t, u, C) => { I.upd(u); mapa.paint(smooth(5.5, 6.5, u)); cam(C, [[0, [-3, 1.6, 1.6]], [3.4, [-.6, 1.4, 1.2]], [6, [3, 1.5, 1.2]], [9.6, [1.4, 2.4, .6]]], [[0, [-3, .7, -3]], [3.4, [.8, .7, -2.6]], [6, [3.4, .6, -2.4]], [9.6, [1.4, 2.4, -3.8]]], u); og.material.opacity = .3 + Math.sin(u * 3) * .1; return { focus: 3.6, range: 2.4, blur: 11, bloom: .45, bloomT: .78, vig: .5 }; };
  });
}

/** 17. Você tem 9 anos: ninguém empresta dinheiro a uma criança — 120.46 a 126.33 */
export function sMercador(t0, t1) {
  return mk(t0, t1, { bg: '#2A1A10', fog: ['#3A2414', .02], fov: 32 }, (c) => {
    const I = interior(c, { lareiraX: -9, parede: '#C8B090' });
    c.add(box(3, 1.1, .7, std('#5A3A22'), .6, .55, -2.2)); c.add(box(3.1, .08, .8, std('#7A5232'), .6, 1.12, -2.2)); const bal = new THREE.Group(); bal.add(box(.04, .5, .04, '#C9A04A', 0, .25, 0)); bal.add(box(.6, .03, .03, '#C9A04A', 0, .5, 0)); for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(.12, .1, .03, 14), std('#C9A04A', { metalness: .7 })); p.position.set(s * .3, .3, 0); bal.add(p); } bal.position.set(1.4, 1.16, -2.2); c.add(bal);
    const merc = gente(c, 'mercador', null, null, .9, -2.9); merc.tint('#FFE8D0'); const kid = crianca(c, -1.3, -1.5);
    return (t, u, C) => { I.upd(u); cam(C, [[0, [-1.8, 1.2, 1.4]], [5.9, [-1.2, 1.3, .8]]], [[0, [.3, 1.2, -2.2]], [5.9, [.4, 1.3, -2.4]]], u); kid.face(C); kid.pose({ armL: [60 + Math.sin(u * 6) * 20, -20], armR: [60 - Math.sin(u * 6) * 20, -20], head: -6 }); kid.eye(u < 3 ? 'look' : 'sad'); merc.face(C); const ri = u > 2.6; merc.pose({ armL: ri ? [40, -120] : [10, 6], armR: ri ? [40, -120] : [10, 6], head: ri ? Math.sin(u * 14) * 5 : 0, bob: ri ? Math.abs(Math.sin(u * 14)) * .02 : 0 }); merc.eye(ri ? 'happy' : 'smug'); return { focus: C.position.distanceTo(merc.root.position), range: 2.4, blur: 12, bloom: .4, bloomT: .82, vig: .5 }; };
  });
}

/** Igreja por dentro: arcos, altar, velas, vitral com feixes. */
export function igreja(c) {
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(20, 30), std('#9A8A78', { roughness: .6 })); fl.rotation.x = -Math.PI / 2; fl.position.z = -6; fl.receiveShadow = true; c.add(fl);
  const pm = std('#C8BCA8'); c.add(box(20, 12, .4, pm, 0, 6, -14)); for (const s of [-1, 1]) c.add(box(.4, 12, 30, pm, s * 7, 6, -4));
  for (let i = 0; i < 4; i++) for (const s of [-1, 1]) { const col = new THREE.Mesh(new THREE.CylinderGeometry(.35, .4, 7, 16), pm); col.position.set(s * 4.2, 3.5, -2 - i * 3.4); c.add(col); const arc = new THREE.Mesh(new THREE.TorusGeometry(1.7, .25, 8, 20, Math.PI), pm); arc.position.set(s * 4.2, 7, -3.7 - i * 3.4); arc.rotation.y = Math.PI / 2; c.add(arc); }
  c.add(box(3, 1.2, 1.2, std('#E8DCC4'), 0, .6, -12.4)); c.add(box(3.2, .1, 1.3, std('#C9A04A', { metalness: .6 }), 0, 1.25, -12.4)); c.add(box(.12, 1.6, .1, std('#C9A04A', { metalness: .7 }), 0, 2.1, -12.6)); c.add(box(.9, .12, .1, std('#C9A04A', { metalness: .7 }), 0, 2.5, -12.6));
  const vit = new THREE.Mesh(new THREE.CircleGeometry(1.6, 24), new THREE.MeshBasicMaterial({ map: canvasTex(256, 256, (x) => { x.translate(128, 128); for (let i = 0; i < 12; i++) { x.save(); x.rotate(i * .5236); x.fillStyle = ['#C9361F', '#2A6AC8', '#F2C14E', '#3E9A5A'][i % 4]; x.beginPath(); x.moveTo(0, 0); x.lineTo(-30, -120); x.lineTo(30, -120); x.fill(); x.restore(); } x.strokeStyle = '#1A1A22'; x.lineWidth = 8; x.beginPath(); x.arc(0, 0, 124, 0, 7); x.stroke(); }) })); vit.position.set(0, 8, -13.78); c.add(vit);
  feixe(c, 0, 5, -10, 3, 12, .35, '#FFE0C0', .12).rotation.x = -.5;
  const vs = []; for (const x of [-1.2, -.6, .6, 1.2]) vs.push(vela(c, x, 1.3, -12.2, 1.2));
  for (let i = 0; i < 5; i++) for (const s of [-1, 1]) { c.add(box(2.6, .5, .5, std('#5A3A22'), s * 1.9, .25, -1 - i * 1.6)); c.add(box(2.6, .9, .1, std('#4A3220'), s * 1.9, .7, -.75 - i * 1.6)); }
  c.add(new THREE.HemisphereLight('#B8A890', '#2A2018', .6)); const k = new THREE.SpotLight('#FFE0C0', 120, 30, .5, .5, 1.2); k.position.set(0, 10, -11); k.target.position.set(0, 0, -4); k.castShadow = true; c.add(k, k.target);
  return { vs, upd(u) { vs.forEach(v => v.upd(u)); } };
}

/** 18. Explicar a internet ao padre… dez ave-marias — 126.33 a 133.69 */
export function sPadre(t0, t1) {
  return mk(t0, t1, { bg: '#2A2018', fog: ['#3A2E24', .02], fov: 34 }, (c) => {
    const G = igreja(c); const padre = gente(c, 'padre', null, null, .1, -7.6); padre.tint('#FFE8D0'); const kid = crianca(c, -.3, -6.1);
    const terco = cut(canvasTex(128, 128, (x) => { x.clearRect(0, 0, 128, 128); x.fillStyle = '#5A3A22'; for (let i = 0; i < 20; i++) { const a = i / 20 * 6.283; x.beginPath(); x.arc(64 + Math.cos(a) * 40, 50 + Math.sin(a) * 30, 5, 0, 7); x.fill(); } x.fillRect(60, 80, 8, 30); x.fillRect(50, 90, 28, 6); }), .25, .25); c.add(terco);
    const ic = icone('internet', .7); c.add(ic);
    return (t, u, C) => {
      G.upd(u); cam(C, [[0, [.2, 1.6, -2.2]], [7.4, [.1, 1.4, -3.2]]], [[0, [.1, 1.2, -6]], [7.4, [.1, 1.1, -6]]], u);
      const ajoelha = u > 3.4; kid.face(C); kid.root.position.y = ajoelha ? -.35 : 0; kid.pose(ajoelha ? { armL: [30, -130], armR: [30, -130], head: 8 } : { armL: [80 + Math.sin(u * 7) * 25, -20], armR: [80 - Math.sin(u * 7) * 25, -20] }); kid.eye(ajoelha ? 'shut' : 'happy');
      padre.face(C); padre.pose({ armL: [10, 6], armR: u > 2.7 ? [70, 0] : [20, -60], head: u < 2.7 ? Math.sin(u * 1.5) * 3 : 0 }); padre.eye(u < 2.7 ? 'flat' : 'smug');
      ic.visible = u < 2.8; ic.position.set(-.3, 1.9, -6.1); ic.scale.setScalar(.7 + Math.sin(u * 4) * .05); pointer(ic, C);
      terco.visible = ajoelha; terco.position.set(kid.root.position.x, .78, kid.root.position.z + .1); pointer(terco, C);
      return { focus: C.position.distanceTo(kid.root.position), range: 2.6, blur: 12, bloom: .45, bloomT: .8, vig: .5 };
    };
  });
}
