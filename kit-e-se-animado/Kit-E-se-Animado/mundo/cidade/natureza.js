// Natureza: árvores (ipê, mangueira, palmeira, pinheiro), arbustos, grama em volta, serra com a Pedra Alta, lago e nuvens.
import * as THREE from 'three';
import { toon, tm, bx, cyl, sph, rb, piso, fundir, D, pega } from './util.js';
import { grama, agua, repetir, terra } from './texturas.js';
import { toonTex, outline, gradTex } from '../base/toon.js';
import { rng } from '../base/core.js';

const ICO = new Map();
const copa = (r, det = 1) => { const k = r + '_' + det; if (!ICO.has(k)) ICO.set(k, new THREE.IcosahedronGeometry(r, det)); return ICO.get(k); };

/** Árvore toon. tipo: 'ipeRoxo' | 'ipeAmarelo' | 'mangueira' | 'palmeira' | 'pinheiro' | 'quaresmeira' | 'comum'. */
export function arvore(tipo = 'comum', s = 1, seed = 0) {
  const g = new THREE.Group(), R = rng(seed * 31 + 7);
  if (tipo === 'palmeira') {
    let y = 0; const n = 7; for (let i = 0; i < n; i++) { const seg = cyl(.16 - i * .008, .18 - i * .008, 1.05, '#A88A62', Math.sin(i * .35) * .25, y + .52, 0, { out: .01, seg: 10 }); seg.rotation.z = Math.cos(i * .4) * .05; g.add(seg); y += 1.0; }
    for (let k = 0; k < 9; k++) { const f = new THREE.Group(); f.position.set(.2, y, 0); f.rotation.y = k / 9 * Math.PI * 2;
      const fo = tm(new THREE.ConeGeometry(.5, 3.2, 4), k % 2 ? '#4E9A48' : '#5FAE52', { out: .012 }); fo.scale.set(1, 1, .18); fo.rotation.z = -Math.PI / 2 - .5; fo.position.set(1.5, -.35, 0); f.add(fo); g.add(f); }
    g.add(sph(.32, '#8A6A3E', .2, y - .1, 0, { seg: 10 }));
  } else if (tipo === 'pinheiro') {
    g.add(cyl(.16, .24, 2.2, '#6E4A2E', 0, 1.1, 0, { out: .012, seg: 10 }));
    for (let i = 0; i < 4; i++) g.add(tm(new THREE.ConeGeometry(2.2 - i * .45, 2.4, 9), i % 2 ? '#2F7A4A' : '#3A8A55', { out: .016, pos: [0, 2.4 + i * 1.35, 0] }));
  } else {
    const cor = { ipeRoxo: ['#B566C9', '#9A4FB3', '#CF8ADE'], ipeAmarelo: ['#F2C230', '#E2A91E', '#F8D860'], quaresmeira: ['#8E5BC4', '#A877D6', '#7646AE'], mangueira: ['#3E8A40', '#4E9C4C', '#2F7434'], comum: ['#5AA84E', '#4A9644', '#6CB85C'] }[tipo] || ['#5AA84E', '#4A9644', '#6CB85C'];
    const alto = tipo === 'mangueira' ? 1.15 : 1, h = (2.3 + R() * .6) * alto;
    const tronco = cyl(.17, .27, h, '#7A5233', 0, h / 2, 0, { out: .012, seg: 10 }); g.add(tronco);
    for (const a of [0, 2.1, 4.2]) { const gal = cyl(.07, .1, 1.3, '#7A5233', Math.cos(a) * .35, h + .25, Math.sin(a) * .35, { seg: 8 }); gal.rotation.set(Math.sin(a) * .6, 0, -Math.cos(a) * .6); g.add(gal); }
    const n = tipo === 'mangueira' ? 6 : 5;
    for (let i = 0; i < n; i++) { const a = i / n * 6.283 + R(), r = 1.1 + R() * .5, rr = (1.05 + R() * .45) * (tipo === 'mangueira' ? 1.2 : 1);
      g.add(tm(copa(rr, 1), cor[i % 3], { out: .02, pos: [Math.cos(a) * r * .8, h + .9 + R() * .9, Math.sin(a) * r * .8] })); }
    g.add(tm(copa(1.45 * (tipo === 'mangueira' ? 1.25 : 1), 1), cor[0], { out: .02, pos: [0, h + 1.8, 0] }));
    if (tipo.startsWith('ipe') || tipo === 'quaresmeira') { // flores caídas no chão
      const fl = new THREE.Mesh(new THREE.CircleGeometry(2.1, 20), new THREE.MeshToonMaterial({ color: cor[2], transparent: true, opacity: .55, depthWrite: false })); fl.rotation.x = -Math.PI / 2; fl.position.y = .02; g.add(fl); }
  }
  g.scale.setScalar(s); return g;
}
/** Arbusto/cerca viva. */
export function arbusto(w = 1.2, h = .9, d = .9, cor = '#4E9A48', seed = 0) {
  const g = new THREE.Group(), R = rng(seed + 3); const n = Math.max(2, Math.round(w / .6));
  for (let i = 0; i < n; i++) g.add(tm(copa(.5, 1), i % 2 ? cor : '#5FAE52', { out: .014, pos: [-w / 2 + w * (i + .5) / n, h * .55, (R() - .5) * d * .3] }));
  g.children.forEach(m => m.scale.set(w / n * 1.5, h * 1.25, d * 1.1)); return g;
}
/** Flores de canteiro. */
export function canteiro(w, d, seed = 0) {
  const g = new THREE.Group(), R = rng(seed + 9);
  g.add(bx(w, .25, d, '#8E5A3A', 0, .125, 0)); g.add(piso(w - .1, d - .1, toon('#5A3A24'), 0, .26, 0));
  const cores = ['#F2546E', '#F2C230', '#FFFFFF', '#B566C9', '#F08A2C'];
  for (let i = 0; i < Math.round(w * d * 4); i++) { const x = (R() - .5) * (w - .3), z = (R() - .5) * (d - .3);
    g.add(cyl(.012, .012, .22, '#3E8A40', x, .37, z, { shadow: false, seg: 5 })); g.add(sph(.07, pega(R, cores), x, .5, z, { seg: 8, shadow: false })); }
  return g;
}

/** Terreno em volta da cidade, morros, serra e a Pedra Alta (a pedra famosa da cidade). */
export function paisagem(C) {
  const g = new THREE.Group(); g.name = 'paisagem';
  const mg = toonTex(repetir(grama(), 300, 300));
  const chao = new THREE.Shape(); chao.moveTo(-700, -700); chao.lineTo(700, -700); chao.lineTo(700, 700); chao.lineTo(-700, 700); chao.lineTo(-700, -700);
  const buraco = new THREE.Path(); buraco.absellipse(0, -223, 206, 96, 0, Math.PI * 2, true); chao.holes.push(buraco); // o lago
  const cg = new THREE.ShapeGeometry(chao, 48); const uv = cg.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 3, uv.getY(i) / 3);
  const gm = new THREE.Mesh(cg, toonTex(grama())); gm.material.map.repeat.set(1, 1); gm.rotation.x = -Math.PI / 2; gm.position.y = -.03; gm.receiveShadow = true; g.add(gm);
  // morros perto (verde) e serra longe (azulada), em volta da cidade inteira
  const R = rng(77);
  const morro = (x, z, r, h, cor, seg = 12) => { const m = tm(new THREE.SphereGeometry(1, seg, 8, 0, Math.PI * 2, 0, Math.PI / 2), cor, { shadow: false }); m.scale.set(r, h, r * (.7 + R() * .5)); m.position.set(x, -1, z); m.rotation.y = R() * 3; g.add(m); return m; };
  for (let i = 0; i < 34; i++) { const a = i / 34 * Math.PI * 2, d = 360 + R() * 90, r = 80 + R() * 60, h = 40 + R() * 45; const norte = Math.abs(a - Math.PI * 1.5) < .45; morro(Math.cos(a) * d, Math.sin(a) * d, r, norte ? h * .35 : h, i % 2 ? '#6FA866' : '#7DB572'); } // ao norte os morros são baixos para a Pedra Alta aparecer
  for (let i = 0; i < 26; i++) { const a = i / 26 * Math.PI * 2 + .1, d = 620 + R() * 120; morro(Math.cos(a) * d, Math.sin(a) * d, 170 + R() * 90, 110 + R() * 90, i % 2 ? '#8DB3C9' : '#9DBFD2'); }
  // a Pedra Alta: um paredão de pedra no topo da serra, ao norte
  const pedra = new THREE.Group(); pedra.position.set(60, 0, -540);
  morro(60, -540, 210, 120, '#5E9A5C', 16);
  const rocha = tm(new THREE.DodecahedronGeometry(1, 1), '#9E9A94', { out: .004 }); rocha.scale.set(85, 120, 65); rocha.position.set(0, 135, 10); pedra.add(rocha);
  const rocha2 = tm(new THREE.DodecahedronGeometry(1, 1), '#8E8A84', { out: .004 }); rocha2.scale.set(44, 70, 40); rocha2.position.set(-55, 100, 0); pedra.add(rocha2);
  const listra = tm(new THREE.DodecahedronGeometry(1, 1), '#B4AEA6'); listra.scale.set(30, 50, 30); listra.position.set(28, 150, 40); pedra.add(listra);
  g.add(pedra);
  // antenas no morro (cidade do interior)
  for (let i = 0; i < 3; i++) { const a = cyl(.6, 1.2, 40, i ? '#E8443A' : '#F4F1EA', -260 + i * 14, 95, -420, { seg: 6 }); g.add(a); }
  // mata: grupos de árvores nos morros perto da cidade
  const mata = new THREE.Group();
  for (let i = 0; i < 140; i++) { const a = R() * Math.PI * 2, d = 200 + R() * 140, x = Math.cos(a) * d * 1.1, z = Math.sin(a) * d;
    if (z > 120 && Math.abs(x) < 240) continue; // não cobre o lago
    if (Math.abs(x - 150) < 14) continue; // nem a estrada
    const t = arvore(pega(R, ['comum', 'comum', 'mangueira', 'pinheiro', 'ipeAmarelo', 'ipeRoxo']), 1.4 + R() * .8, i); t.position.set(x, 0, z); mata.add(t); }
  g.add(mata);
  C.cena.add(fundir(g));
}

/** Lago ao sul da cidade, com orla, deck, quiosques e pedalinhos. */
export function lago(C) {
  const g = new THREE.Group(); g.name = 'lago';
  const z0 = 127; // começo da orla
  // calçadão da orla
  g.add(bx(330, .15, 9, '#D9D2C5', 0, .075, z0 + 4.5));
  g.add(piso(330, 9, toonTex(repetir(C.tex.ondas(), 165, 4.5)), 0, .152, z0 + 4.5));
  g.add(bx(330, .5, .3, '#B9B3AA', 0, .25, z0 + 9)); // mureta
  // água (forma oval)
  const forma = new THREE.Shape(); forma.absellipse(0, 0, 200, 90, 0, Math.PI * 2);
  const mAgua = toonTex(repetir(agua(), 20, 9)); mAgua.transparent = false;
  const ag = new THREE.Mesh(new THREE.ShapeGeometry(forma, 64), mAgua); ag.rotation.x = -Math.PI / 2; ag.position.set(0, -.3, z0 + 96); ag.receiveShadow = true; ag.userData.vivo = true; g.add(ag);
  const margem = new THREE.Mesh(new THREE.ShapeGeometry((() => { const s = new THREE.Shape(); s.absellipse(0, 0, 206, 96, 0, Math.PI * 2); return s; })(), 64), toon('#D8C49A')); margem.rotation.x = -Math.PI / 2; margem.position.set(0, -.7, z0 + 96); g.add(margem);
  // corta a grama do lago: pinta a grama por cima com a margem (água fica acima dela)
  C.vivos.push((t) => { mAgua.map.offset.set(t * .01, Math.sin(t * .3) * .02); });
  // deck de madeira com guarda-corpo
  const deck = new THREE.Group(); deck.position.set(-40, 0, z0 + 9);
  deck.add(bx(4, .2, 22, '#9A6A3E', 0, .1, 11)); for (let i = 0; i < 6; i++) { deck.add(cyl(.12, .12, 1.4, '#7A5233', -1.9, -.4, 1 + i * 4, { seg: 8 })); deck.add(cyl(.12, .12, 1.4, '#7A5233', 1.9, -.4, 1 + i * 4, { seg: 8 })); }
  deck.add(bx(.08, .08, 22, '#7A5233', -1.95, 1.05, 11)); deck.add(bx(.08, .08, 22, '#7A5233', 1.95, 1.05, 11));
  for (let i = 0; i <= 11; i++) { deck.add(bx(.06, 1, .06, '#7A5233', -1.95, .6, i * 2)); deck.add(bx(.06, 1, .06, '#7A5233', 1.95, .6, i * 2)); }
  g.add(deck); C.colisores.push({ x: -40 - 2.1, z: z0 + 20, w: .2, d: 22, h: 1.1 }, { x: -40 + 2.1, z: z0 + 20, w: .2, d: 22, h: 1.1 });
  C.pontos['lago.deck'] = { x: -40, z: z0 + 28, y: .2, ry: 0 };
  // quiosques
  for (const [x, cor, nome] of [[30, '#E2443A', 'COCO GELADO'], [75, '#2E9C6A', 'PASTEL'], [-95, '#F08A2C', 'MILHO']]) {
    const q = new THREE.Group(); q.position.set(x, .15, z0 + 4);
    q.add(rb(3.2, 1.1, 2, '#F4F1EA', 0, .55, 0, { out: .014 })); q.add(bx(3.3, .08, 2.1, '#9A6A3E', 0, 1.14, 0));
    for (const [a, b] of [[-1.5, -.9], [1.5, -.9], [-1.5, .9], [1.5, .9]]) q.add(cyl(.05, .05, 1.5, '#7A5233', a, 1.9, b, { seg: 6 }));
    const tel = tm(new THREE.ConeGeometry(2.6, 1.2, 4), cor, { out: .016, pos: [0, 3.2, 0], rot: [0, Math.PI / 4, 0] }); tel.scale.set(1, 1, .8); q.add(tel);
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(2.6, .5), toonTex(C.tex.letreiroTex(nome, { fundo: '#F4F1EA', cor })));  pl.position.set(0, 2.35, 1.1); q.add(pl);
    for (let i = 0; i < 2; i++) { const m = new THREE.Group(); m.position.set(-3 + i * 6, 0, 3); m.add(cyl(.5, .5, .05, '#F4F1EA', 0, .75, 0)); m.add(cyl(.04, .04, .75, '#C9C2B6', 0, .37, 0, { seg: 6 })); for (const a of [0, 2.1, 4.2]) m.add(cyl(.22, .22, .45, '#E2443A', Math.cos(a) * .8, .22, Math.sin(a) * .8, { seg: 10 })); q.add(m); C.colisores.push({ x: x - 3 + i * 6, z: z0 + 7, w: 1.1, d: 1.1, h: .8 }); }
    g.add(q); C.colisores.push({ x, z: z0 + 4, w: 3.3, d: 2.2, h: 1.2 });
  }
  // bancos e postes na orla, árvores
  for (let i = 0; i < 11; i++) { const x = -150 + i * 30; if (Math.abs(x + 40) < 6) continue; g.add(arvore(i % 3 ? 'palmeira' : 'ipeRoxo', 1, 300 + i).translateX(x).translateZ(z0 + 1.2).translateY(.15)); C.colisores.push({ x, z: z0 + 1.2, w: .5, d: .5, h: 3 }); }
  C.cena.add(fundir(g));
  // pedalinhos (vivos: boiam e andam devagar)
  for (let i = 0; i < 4; i++) {
    const p = new THREE.Group(); const cor = ['#F2F2F0', '#F2C230', '#5DB4D8', '#F2546E'][i];
    const casco = tm(new THREE.SphereGeometry(1, 16, 10), cor, { out: .014 }); casco.scale.set(1.3, .45, .8); p.add(casco);
    const pesc = cyl(.18, .22, 1.3, cor, .95, .75, 0, { out: .014 }); pesc.rotation.z = .25; p.add(pesc);
    p.add(sph(.36, cor, 1.15, 1.45, 0, { out: .014 })); p.add(tm(new THREE.ConeGeometry(.12, .4, 8), '#F08A2C', { pos: [1.55, 1.42, 0], rot: [0, 0, -Math.PI / 2] }));
    p.add(sph(.06, '#1B1420', 1.35, 1.6, .26)); p.add(sph(.06, '#1B1420', 1.35, 1.6, -.26));
    p.add(bx(1, .5, 1.1, '#F4F1EA', -.3, .55, 0)); p.add(bx(.08, .5, 1.1, cor, -.8, .95, 0));
    C.cena.add(p);
    const cx = -20 + i * 35, cz = z0 + 70 + (i % 2) * 22, r = 10 + i * 3;
    C.vivos.push((t) => { const a = t * .03 * (i % 2 ? 1 : -1) + i; p.position.set(cx + Math.cos(a) * r, -.25 + Math.sin(t * 1.3 + i) * .05, cz + Math.sin(a) * r * .6); p.rotation.y = -a + (i % 2 ? -Math.PI / 2 : Math.PI / 2); p.rotation.z = Math.sin(t * 1.1 + i) * .03; });
  }
}

/** Nuvens grandes e fofas que andam devagar. */
export function nuvens(C) {
  const R = rng(55), grupo = new THREE.Group(); const m = new THREE.MeshToonMaterial({ color: '#FFFFFF', gradientMap: gradTex(), emissive: '#FFFFFF', emissiveIntensity: .25, fog: false });
  C.matNuvem = m;
  for (let i = 0; i < 22; i++) { const n = new THREE.Group(); const k = 3 + (R() * 3 | 0);
    for (let j = 0; j < k; j++) { const s = new THREE.Mesh(copa(1, 2), m); s.scale.set(18 + R() * 10, 10 + R() * 6, 14 + R() * 6); s.position.set(j * 18 - k * 9, R() * 6, R() * 8); n.add(s); }
    const a = R() * Math.PI * 2, d = 400 + R() * 500; n.position.set(Math.cos(a) * d, 140 + R() * 80, Math.sin(a) * d); n.userData.base = n.position.clone(); grupo.add(n); }
  C.cena.add(grupo);
  C.vivos.push((t) => { for (const n of grupo.children) n.position.x = n.userData.base.x + ((t * 1.5 + 2000) % 4000) * .05; });
}
