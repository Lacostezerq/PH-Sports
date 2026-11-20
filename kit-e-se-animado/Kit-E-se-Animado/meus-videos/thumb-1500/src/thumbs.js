// Cenas paradas para as thumbnails (1 s cada).
import * as THREE from 'three';
import { rng } from './motor/core.js';
import { box, std, glowSprite, pointer } from './motor/kit.js';
import { stars, smoke, crowd } from './motor/kit2.js';
import { mk, cam, luzes, phoneMesh, TELA } from './lib.js';
import { heroi, gente, casa, calcada, fundoLisboa, nau } from './lx.js';
import { ape } from './cenas-c.js';

function rua(c, o = {}) { fundoLisboa(c, { z: -200, w: 600, y: -2, seed: o.seed || 12, noite: o.noite }); calcada(c, 20, 120, -40); for (let i = 0; i < 6; i++) for (const s of [-1, 1]) { const h = casa(70 + i * 2 + (s > 0 ? 1 : 0), 6, 2 + (i + (s > 0 ? 1 : 0)) % 2, { night: o.noite }); h.position.set(s * 6.2, 0, -4 - i * 6.4); h.rotation.y = -s * Math.PI / 2; c.add(h); } }
function celular(c) { const tel = phoneMesh(.24, .48); c.add(tel); const gl = new THREE.PointLight('#BFE0FF', 3, 2.5); c.add(gl); const halo = glowSprite('#9FD8FF', .9, .4); c.add(halo); return { tel, gl, halo, set(x, y, z) { tel.position.set(x, y, z); gl.position.set(x, y, z + .3); halo.position.set(x, y, z - .02); } }; }
const tela = (tel) => tel.paint('lock', (x) => TELA.bloqueio(x, '15:00', 100));

/** 1. Celular em 1500: rua de Lisboa de dia, todo mundo chocado. */
export function t1(t0, t1_) {
  return mk(t0, t1_, { bg: '#8EC6F0', fog: ['#BFDDF2', .006], fov: 34, far: 900 }, (c) => {
    rua(c); luzes(c, { ki: 3.2, key: '#FFE2B8', pos: [-10, 20, 14], r: 30, hemi: 1.2 });
    const h = heroi(c, .2, -2); const P = celular(c);
    const povo = [gente(c, 'campones', 'short', '#3A2418', -1.5, -3.6), gente(c, 'mercador', null, null, -2.6, -4.6), gente(c, 'mae', 'long', '#2A1810', 2.0, -3.8), gente(c, 'padre', null, null, 3.0, -5.2), gente(c, 'campones2', 'long', '#5A3A22', 1.1, -6)];
    return (t, u, C) => {
      cam(C, [[0, [.25, 1.45, 1.3]]], [[0, [.25, 1.35, -2.2]]], 0);
      h.face(C); h.pose({ armL: [20, -80], armR: [20, -80], head: -4 }); h.eye('smug'); tela(P.tel); P.set(.32, 1.2, -1.68); P.tel.rotation.set(-.15, 0, 0);
      povo.forEach((k, i) => { k.face(C); k.eye('wide'); k.pose({ armL: i % 2 ? [95, -30] : [20, 0], armR: i % 2 ? [20, 0] : [95, -30], head: 4 }); });
      return { focus: 3.3, range: 1.5, blur: 9, bloom: .6, bloomT: .8, vig: .3, sat: 1.25 };
    };
  });
}

/** 2. Bruxo? Noite, fogueira e inquisidores apontando. */
export function t2(t0, t1_) {
  return mk(t0, t1_, { bg: '#1A0810', fog: ['#2A0E10', .02], fov: 34, far: 600 }, (c) => {
    stars(c, 800, 200, 3); calcada(c, 60, 60, -10, '#6A5A4E');
    for (let i = 0; i < 5; i++) { const k = casa(90 + i, 7, 3, { night: true }); k.position.set(-14 + i * 7.2, 0, -14); c.add(k); }
    const pilha = new THREE.Group(); for (let i = 0; i < 18; i++) { const l = box(1.6, .14, .14, '#4A3220', 0, .1 + Math.floor(i / 6) * .14, 0); l.rotation.y = i * .52; pilha.add(l); } pilha.add(box(.18, 3.4, .18, '#3A2414', 0, 1.7, 0)); pilha.position.set(-1.6, 0, -7); c.add(pilha);
    for (let i = 0; i < 12; i++) { const f = glowSprite(i % 2 ? '#FF5A10' : '#FFC040', 1.3, .8); f.position.set(-1.6 + (i % 4 - 1.5) * .45, .5 + Math.floor(i / 4) * .55, -7); c.add(f); }
    const L = new THREE.PointLight('#FF6A20', 25, 30, 1.3); L.position.set(-1.6, 1.8, -6); c.add(L); smoke(c, 10, [-1.6, 2.5, -7], { col: '#3A2A2A', size: 4, rise: 10, spread: 1, seed: 6, life: 3 })(.5);
    const inq = [gente(c, 'inquisidor', null, null, -2.2, -3.6), gente(c, 'inquisidor', null, null, 2.1, -3.4), gente(c, 'padre', null, null, 3.2, -4.8)];
    const h = heroi(c, .2, -1.9); const P = celular(c);
    const R = rng(4), sp = []; for (let i = 0; i < 60; i++) { const a = Math.PI * 1.15 + R() * Math.PI * .7, r = 7 + R() * 4; sp.push([Math.cos(a) * r - 1.6, -7 + Math.sin(a) * r, 0, Math.atan2(-Math.cos(a), -Math.sin(a))]); } crowd(c, sp, { raised: .5, jump: 0, seed: 3, tint: '#C87A5A' });
    c.add(new THREE.HemisphereLight('#3A1A2A', '#0A0606', .5)); const fr = new THREE.DirectionalLight('#FFB070', .8); fr.position.set(2, 3, 5); c.add(fr);
    return (t, u, C) => {
      cam(C, [[0, [.25, 1.45, 1.3]]], [[0, [.25, 1.4, -2.2]]], 0);
      h.face(C); h.pose({ armL: [20, -80], armR: [20, -80], head: 0 }); h.eye('wide'); tela(P.tel); P.set(.32, 1.2, -1.58); P.tel.rotation.set(-.15, 0, 0);
      inq.forEach((k, i) => { k.face(C); k.eye('angry'); k.pose({ armL: i === 0 ? [20, 0] : [95, -20], armR: i === 0 ? [95, -20] : [20, 0] }); });
      return { focus: 3.3, range: 1.6, blur: 10, bloom: .45, bloomT: .85, vig: .5, sat: 1.1, exposure: .9 };
    };
  });
}

/** 3. Lado 1500: rua com naus ao fundo, herói olhando chocado. */
export function t3(t0, t1_) {
  return mk(t0, t1_, { bg: '#F0B070', fog: ['#F0C890', .008], fov: 34, far: 900 }, (c) => {
    rua(c, { seed: 4 }); luzes(c, { ki: 3, key: '#FFC890', pos: [-10, 10, 14], r: 30, hemi: 1.1, sky: '#FFD8A8' });
    const h = heroi(c, 0, -2);
    return (t, u, C) => { cam(C, [[0, [0, 1.75, 1.6]]], [[0, [0, 1.5, -2.2]]], 0); h.face(C); h.pose({ armL: [15, 0], armR: [15, 0], head: 0 }); h.eye('wide'); return { focus: 3.3, range: 3, blur: 5, bloom: .5, bloomT: .8, vig: .35, sat: 1.2 }; };
  });
}

/** 4. Lado 2026: apartamento, herói tranquilo com o celular. */
export function t4(t0, t1_) {
  return mk(t0, t1_, { bg: '#E8E0D0', fog: ['#E8E0D0', .01], fov: 34 }, (c) => {
    ape(c); const h = heroi(c, 1.0, -2.4); const P = celular(c);
    return (t, u, C) => { cam(C, [[0, [1.0, 1.75, 1.2]]], [[0, [1.0, 1.5, -2.6]]], 0); h.face(C); h.pose({ armL: [20, -80], armR: [20, -80] }); h.eye('smug'); tela(P.tel); P.set(1.12, 1.2, -2.08); P.tel.rotation.set(-.15, 0, 0); return { focus: 3.3, range: 3, blur: 5, bloom: .5, bloomT: .8, vig: .35, sat: 1.2 }; };
  });
}

/** 5. Porto com as naus e o herói apontando o celular para elas. */
export function t5(t0, t1_) {
  return mk(t0, t1_, { bg: '#7EC0F0', fog: ['#BFDDF2', .004], fov: 34, far: 900 }, (c) => {
    fundoLisboa(c, { z: -300, w: 800, y: -6, seed: 9 });
    const mar = new THREE.Mesh(new THREE.PlaneGeometry(800, 400), std('#2E7AA8', { roughness: .3 })); mar.rotation.x = -Math.PI / 2; mar.position.set(0, -.3, -200); c.add(mar);
    const cais = new THREE.Mesh(new THREE.PlaneGeometry(200, 30), std('#A89878')); cais.rotation.x = -Math.PI / 2; cais.position.set(0, 0, 10); c.add(cais); c.add(box(200, 1.2, 1, std('#8A7A60'), 0, -.4, -5));
    for (let i = 0; i < 9; i++) { const n = nau(1); n.position.set(-24 + i * 7, -.4, -26 - (i % 3) * 12); n.rotation.y = -Math.PI / 2 + .15; c.add(n); }
    luzes(c, { ki: 3.2, key: '#FFE2B8', pos: [-30, 40, 30], r: 60, hemi: 1.15 });
    const h = heroi(c, -.9, -1.6); const P = celular(c);
    return (t, u, C) => { cam(C, [[0, [-.4, 1.5, 1.9]]], [[0, [-.1, 1.5, -3]]], 0); h.face(C); h.pose({ armL: [20, -80], armR: [20, -80], head: -4 }); h.eye('smug'); tela(P.tel); P.set(-.78, 1.2, -1.28); P.tel.rotation.set(-.15, 0, 0); return { focus: 3.4, range: 2, blur: 6, bloom: .5, bloomT: .85, vig: .3, sat: 1.25 }; };
  });
}
