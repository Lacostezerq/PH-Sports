// Inventar, ficar calado, ficar famoso (133.69 a 254.97 s).
import * as THREE from 'three';
import { smooth, rng, lerp, clamp } from './motor/core.js';
import { canvasTex } from './motor/char.js';
import { box, std, cut, glowSprite, softBlob, sky, pointer, tree } from './motor/kit.js';
import { smoke, crowd, stars } from './motor/kit2.js';
import { mk, cam, luzes, feixe, poeira, letreiro, comodo, planta, quadro, phoneMesh, TELA } from './lib.js';
import { heroi, crianca, gente, casa, calcada, fundoLisboa, interior, vela, pergaminho } from './lx.js';
import { icone } from './cenas-a.js';
import { igreja } from './cenas-b.js';

/** Oficina no sótão: mesa de trabalho, ferramentas, velas. */
function oficina(c) { const I = interior(c, { lareiraX: -9, noite: true, parede: '#A89070' }); c.add(box(2.6, .1, 1.2, std('#6A4A2E'), 0, .9, -2.4)); for (const [x, z] of [[-1.2, -2.9], [1.2, -2.9], [-1.2, -1.9], [1.2, -1.9]]) c.add(box(.08, .88, .08, '#4A3220', x, .44, z)); const fer = [['#8A8A92', -.8], ['#6A4A2E', -.5], ['#8A8A92', .9]]; fer.forEach(([k, x]) => c.add(box(.3, .04, .08, std(k, { metalness: .5 }), x, .97, -2.2))); const vs = [vela(c, -1.0, .95, -2.6, 1.2), vela(c, 1.1, .95, -2.7, 1.2)]; for (let i = 0; i < 6; i++) { const l = box(.22, .3, .16, ['#7A2A2A', '#2A4A6A', '#6A5A2A'][i % 3], -3 + i * .24, 1.6, -3.7); c.add(l); } c.add(box(1.6, .05, .3, '#5A3A22', -2.4, 1.44, -3.7)); return { I, vs, upd(u) { I.upd(u); vs.forEach(v => v.upd(u)); } }; }

/** 19. Inventar: celular, lâmpada, motor — 133.69 a 141.77 */
export function sInventar(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .025], fov: 34 }, (c) => {
    const O = oficina(c); const kid = crianca(c, 0, -1.5);
    const N = ['celular', 'lampada', 'motor']; const I = N.map(n => { const m = icone(n, .7); c.add(m); return m; }); const T = [2.1, 2.7, 3.2];
    return (t, u, C) => {
      O.upd(u); cam(C, [[0, [0, 1.3, 2.2]], [8.1, [0, 1.5, 1.2]]], [[0, [0, 1.3, -1.6]], [8.1, [0, 1.6, -1.6]]], u);
      kid.face(C); kid.pose({ armL: [10, 6], armR: [u > 1.4 ? 140 : 10, 10], head: -6 }); kid.eye(u < 1.5 ? 'look' : 'happy');
      I.forEach((m, i) => { const p = smooth(T[i], T[i] + .3, u); m.visible = p > .02; m.scale.setScalar(p * (1 + Math.sin(u * 3 + i) * .05)); m.position.set(-.9 + i * .9, 2.2 + Math.sin(u * 2 + i) * .08, -1.6); pointer(m, C); });
      return { focus: C.position.distanceTo(kid.root.position), range: 2, blur: 12, bloom: .5, bloomT: .75, vig: .55 };
    };
  });
}

/** 20. O desenho do celular no pergaminho… como funciona? — 141.77 a 155.34 */
export function sDesenho(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .02], fov: 30 }, (c) => {
    const O = oficina(c); const kid = crianca(c, 0, -3.1);
    const M = pergaminho(c, 1.4, 1.0, (x, p, W, H) => { x.strokeStyle = '#2A1A10'; x.lineWidth = 7; x.lineCap = 'round'; const k = smooth(.0, .35, p); x.beginPath(); x.roundRect(380, 120, 260 * Math.min(1, k * 1.5), 480 * k, 30); x.stroke(); if (p > .3) { x.strokeRect(410, 170, 200, 360); x.beginPath(); x.arc(510, 570, 16, 0, 7); x.stroke(); }
      const L = [[.45, 'tela?', 190, 260, 410, 300], [.6, 'bateria?', 700, 180, 610, 300], [.72, 'fio?', 700, 540, 620, 560], [.82, 'eletricidade?', 150, 640, 390, 560]];
      x.font = '700 64px Caveat'; x.fillStyle = '#7A1A10'; x.strokeStyle = '#7A1A10'; x.lineWidth = 4; for (const [a, txt, tx, ty, ax, ay] of L) if (p > a) { x.fillText(txt, tx, ty); x.beginPath(); x.moveTo(tx + 60, ty + 12); x.lineTo(ax, ay); x.stroke(); } });
    M.rotation.x = -Math.PI / 2 + .35; M.position.set(0, 1.0, -2.3); const pena = box(.02, .4, .02, '#F4EEDC', 0, 0, 0); c.add(pena);
    return (t, u, C) => {
      O.upd(u); const p = smooth(.2, 11.6, u); M.paint(p); pena.position.set(lerp(-.2, .3, Math.sin(u * 2) * .5 + .5), 1.2, -2.2); pena.rotation.z = .5;
      cam(C, [[0, [0, 2.95, -.85]], [11.5, [0, 2.85, -.95]], [13.6, [1.4, 1.35, -1.3]]], [[0, [0, 1.0, -2.3]], [11.5, [0, 1.0, -2.3]], [13.6, [0, 1.05, -3.1]]], u);
      kid.face(C); kid.eye(u > 11.7 ? 'flat' : 'down'); kid.pose({ armR: [40, -70] });
      return { focus: u < 11.5 ? C.position.distanceTo(M.position) : C.position.distanceTo(kid.root.position), range: 1.2, blur: 11, bloom: .4, bloomT: .82, vig: .55 };
    };
  });
}

/** Sala de apartamento de 2026. */
export function ape(c) {
  comodo(c, { win: [-3.2, -.6, 1.2, 3.4], wall: '#E8E4DC', floor: '#B89878', cur1: '#B8C4D0', cur2: '#A8B4C0', side: false });
  sky(c, -30, 80, 50, [[0, '#7FB2E0'], [1, '#F7E9C8']]);
  const bancada = new THREE.Group(); bancada.add(box(3, .9, .6, std('#4A5A6A'), 0, .45, 0)); bancada.add(box(3.1, .05, .65, std('#E8E4DA'), 0, .92, 0)); bancada.position.set(1.8, 0, -3.5); c.add(bancada);
  const mo = new THREE.Group(); mo.add(box(.7, .42, .45, std('#D8DCE2', { metalness: .4 }), 0, .21, 0)); const porta = new THREE.Mesh(new THREE.PlaneGeometry(.42, .32), new THREE.MeshStandardMaterial({ color: '#1A1A22', emissive: '#FFC870', emissiveIntensity: 0 })); porta.position.set(-.08, .21, .226); mo.add(porta); const botao = new THREE.Mesh(new THREE.CircleGeometry(.03, 12), new THREE.MeshStandardMaterial({ color: '#333', emissive: '#4AFF8A', emissiveIntensity: .8 })); botao.position.set(.25, .2, .226); mo.add(botao); mo.position.set(2.4, .95, -3.5); c.add(mo);
  planta(c, -3.8, -3.4, 1.1); quadro(c, 2.0, 2.6, -3.83, 1.2, .8, (x, w, h) => { x.fillStyle = '#36AEA2'; x.fillRect(0, 0, w, h); x.fillStyle = '#F2C14E'; x.beginPath(); x.arc(80, 70, 34, 0, 7); x.fill(); });
  luzes(c, { pos: [-3, 6, -10], target: [0, 0, 0] }); feixe(c, -1.9, 2.2, -2.4, 1.4, 4.5, -.5, '#FFE2B0', .12);
  return { porta, botao };
}
/** 21. Você passou a vida usando tudo e nunca aprendeu a fazer nada: era mágica — 155.34 a 168.97 */
export function sMagica(t0, t1) {
  return mk(t0, t1, { bg: '#E8E0D0', fog: ['#E8E0D0', .015], fov: 34 }, (c) => {
    const A = ape(c); const h = heroi(c, 1.0, -2.6); const tel = phoneMesh(.18, .36); c.add(tel); const tv = icone('internet', .6); c.add(tv);
    const brilho = (pos) => { const g = new THREE.Group(); for (let i = 0; i < 10; i++) { const s = glowSprite(['#FFE8A0', '#AFFFF0', '#F8B0E0'][i % 3], .2, 1); s.userData.a = i / 10 * 6.283; g.add(s); } g.position.set(...pos); c.add(g); return g; };
    const B = [brilho([1.45, 1.4, -2.4]), brilho([.3, 2.2, -2.6]), brilho([2.4, 1.2, -3.4])]; const T = [8.1, 9.5, 11.1];
    return (t, u, C) => {
      tel.paint('b', (x) => TELA.bloqueio(x, '10:30', 96)); tel.position.set(1.45, 1.35, -2.45); tel.rotation.x = -.2;
      B.forEach((g, i) => { const p = smooth(T[i], T[i] + .2, u) * (1 - smooth(T[i] + .9, T[i] + 1.3, u)); g.visible = p > .02; g.children.forEach((s, k) => { const a = s.userData.a + u * 3; s.position.set(Math.cos(a) * .35 * p, Math.sin(a) * .35 * p, 0); s.material.opacity = p; }); });
      tv.position.set(.3, 2.2, -2.6); tv.visible = u > 9.3 && u < 10.8; pointer(tv, C);
      const press = u > 11.8; A.porta.material.emissiveIntensity = press ? 1.2 : 0;
      cam(C, [[0, [-.4, 1.5, 2.6]], [7.5, [.6, 1.5, 1.4]], [13.6, [1.8, 1.4, -1.4]]], [[0, [.8, 1.3, -2.6]], [7.5, [1.2, 1.4, -2.6]], [13.6, [2.3, 1.1, -3.4]]], u);
      h.face(C); h.pose({ armL: [10, 6], armR: press ? [70, -10] : [40, -70], head: u > 6 && u < 7.8 ? -6 : 0 }); h.eye(u < 2.4 ? 'look' : u < 6 ? 'down' : 'happy');
      return { focus: C.position.distanceTo(h.root.position), range: 2.4, blur: 12, bloom: .5, bloomT: .78, vig: .42 };
    };
  });
}

/** 22. A pessoa mais avançada de 1500 não faz nem um isqueiro — 168.97 a 174.08 */
export function sIsqueiro(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .025], fov: 32 }, (c) => {
    const O = oficina(c); const kid = crianca(c, 0, -1.6); const pedra = box(.12, .1, .1, '#5A5A62', 0, 0, 0); c.add(pedra);
    const R = rng(3), fa = []; for (let i = 0; i < 16; i++) { const s = glowSprite('#FFD070', .08, 1); c.add(s); fa.push({ s, vx: (R() - .5) * 1.2, vy: R() * 1.2, p: R() }); }
    const palha = new THREE.Mesh(new THREE.ConeGeometry(.2, .12, 10), std('#C8A860')); palha.position.set(0, .97, -1.9); c.add(palha);
    return (t, u, C) => {
      O.upd(u); const hit = (u * 2.2) % 1; cam(C, [[0, [.3, 1.2, .6]], [5.1, [.2, 1.15, .1]]], [[0, [0, 1.0, -1.7]], [5.1, [0, 1.0, -1.7]]], u);
      kid.face(C); kid.pose({ armL: [40, -60], armR: [lerp(60, 30, hit), -70] }); kid.eye(u < 2.5 ? 'down' : u < 4 ? 'angry' : 'sad');
      pedra.position.set(.2, 1.1 - hit * .1, -1.5);
      fa.forEach(q => { const e = hit * .3; q.s.visible = hit < .35; q.s.position.set(.2 + q.vx * e, 1.05 + q.vy * e - e * e * 3, -1.5); q.s.material.opacity = 1 - hit * 3; });
      return { focus: C.position.distanceTo(kid.root.position), range: 1.4, blur: 12, bloom: .5, bloomT: .75, vig: .6 };
    };
  });
}

/** 23. Qual invenção você tentaria primeiro? A "geladeira" de 1500 — 174.08 a 185.53 */
export function sGeladeira(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .02], fov: 34 }, (c) => {
    const O = oficina(c); const h = heroi(c, -1.2, -1.8);
    const gel = new THREE.Group(); gel.add(box(1.0, 1.9, .7, std('#7A5232'), 0, .95, 0)); const porta = new THREE.Group(); porta.add(box(.06, 1.8, .9, std('#8A6242'), 0, .95, .45)); porta.position.set(.5, 0, .35); gel.add(porta); for (let i = 0; i < 4; i++) gel.add(box(.9, .05, .02, '#C9A04A', 0, .3 + i * .5, .36, false));
    const gelo = []; for (let i = 0; i < 4; i++) { const g = new THREE.Mesh(new THREE.BoxGeometry(.3, .25, .3), new THREE.MeshStandardMaterial({ color: '#CFEFFF', transparent: true, opacity: .75, roughness: .1 })); g.position.set(-.2 + (i % 2) * .4, .5 + Math.floor(i / 2) * .6, 0); gel.add(g); gelo.push(g); }
    const rotulo = letreiro('GELADEIRA', .9, .2, '#F4EEDC', '#3A2414', 0, 'Caveat'); rotulo.position.set(0, 1.75, .36); gel.add(rotulo); gel.position.set(.9, 0, -2.6); c.add(gel);
    const poca = new THREE.Mesh(new THREE.CircleGeometry(.6, 24), std('#9FD8F0', { roughness: .1, transparent: true, opacity: .7 })); poca.rotation.x = -Math.PI / 2; poca.position.set(.9, .015, -1.9); c.add(poca);
    return (t, u, C) => {
      O.upd(u); const ab = smooth(7.8, 8.3, u); porta.rotation.y = -ab * 1.4; gelo.forEach((g, i) => g.scale.setScalar(lerp(1, .5, smooth(0, 11, u)))); poca.scale.setScalar(lerp(.3, 1.4, smooth(0, 11, u)));
      cam(C, [[0, [-.2, 1.5, 2.4]], [7.6, [-.4, 1.5, 1.4]], [11.5, [.2, 1.4, 1.6]]], [[0, [-.4, 1.4, -2]], [7.6, [-.8, 1.5, -1.8]], [11.5, [.6, 1.1, -2.4]]], u);
      h.face(C); const q = u < 5; h.pose({ armL: q ? [30, -40] : [10, 6], armR: q ? [80, 30] : (u > 8 ? [70, 0] : [10, 6]), head: q ? 6 : 0 }); h.eye(u < 5 ? 'look' : u < 8 ? 'smug' : 'wide');
      return { focus: C.position.distanceTo(h.root.position), range: 2.4, blur: 12, bloom: .45, bloomT: .8, vig: .55 };
    };
  });
}

/** 24. Os anos passam; você vira adulto — 185.53 a 191.92 */
export function sAnos(t0, t1) {
  return mk(t0, t1, { bg: '#A8CCE8', fog: ['#D8D0C0', .012], fov: 34, far: 900 }, (c) => {
    fundoLisboa(c, { z: -200, w: 600, y: -2, seed: 12 }); calcada(c, 20, 120, -40);
    for (let i = 0; i < 8; i++) for (const s of [-1, 1]) { const h = casa(70 + i * 2 + (s > 0 ? 1 : 0), 6, 2 + (i + (s > 0 ? 1 : 0)) % 2); h.position.set(s * 6.2, 0, -4 - i * 6.4); h.rotation.y = -s * Math.PI / 2; c.add(h); }
    const sol = luzes(c, { ki: 3, pos: [-10, 20, 10], r: 40, hemi: 1 }); const R = rng(2);
    const k = crianca(c, 0, -6); const a = heroi(c, 0, -6); a.root.visible = false;
    return (t, u, C) => {
      const ang = u * 1.6; sol.position.set(Math.cos(ang) * 30, 12 + Math.sin(ang) * 14, 10); sol.intensity = 2 + Math.sin(ang);
      const cresce = smooth(2.2, 4.4, u); k.root.visible = cresce < .5; a.root.visible = cresce >= .5; const z = -6 + u * .9; for (const ch of [k, a]) { ch.root.position.z = z; ch.walk(u, 1, 1); ch.face(C); ch.eye('look'); }
      k.root.scale.setScalar(lerp(.62, 1, cresce)); a.root.scale.setScalar(lerp(.62, 1, cresce));
      cam(C, [[0, [1.4, 1.4, 1.6]], [6.4, [1.2, 1.6, 2.4]]], [[0, [0, 1.1, -6]], [6.4, [0, 1.3, -1]]], u);
      return { focus: C.position.distanceTo(a.root.position), range: 3, blur: 10, bloom: .25, bloomT: .95, vig: .4 };
    };
  });
}

/** 25. 1536: a Inquisição chega a Portugal — 191.92 a 199.26 */
export function sInquisicao(t0, t1) {
  return mk(t0, t1, { bg: '#0E0A0C', fog: ['#140E10', .03], fov: 34 }, (c) => {
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), std('#3A3230', { roughness: .7 })); fl.rotation.x = -Math.PI / 2; fl.receiveShadow = true; c.add(fl); c.add(box(20, 8, .3, std('#2A2224'), 0, 4, -6));
    c.add(box(5, .9, 1.2, std('#5A1A1A'), 0, .45, -3.6)); c.add(box(5.2, .08, 1.3, std('#7A2A2A'), 0, .92, -3.6));
    const cruz = new THREE.Group(); cruz.add(box(.25, 3, .15, std('#3A2414'), 0, 0, 0)); cruz.add(box(1.4, .25, .15, std('#3A2414'), 0, .6, 0)); cruz.position.set(0, 4, -5.8); c.add(cruz);
    const inq = [-1.6, 0, 1.6].map((x, i) => { const k = gente(c, 'inquisidor', 'bob', '#1A1A22', x, -4.4, .3); k.tint('#E8D8C8'); return k; });
    const vs = [vela(c, -2.2, .95, -3.4, 1.4), vela(c, 2.2, .95, -3.4, 1.4)]; const h = heroi(c, 0, -.6);
    const sp = new THREE.SpotLight('#FFD8A8', 60, 14, .4, .5, 1.3); sp.position.set(0, 7, 2); sp.target.position.set(0, 0, -.6); sp.castShadow = true; c.add(sp, sp.target); c.add(new THREE.HemisphereLight('#4A3A40', '#0A0808', .4));
    return (t, u, C) => {
      vs.forEach(v => v.upd(u)); cam(C, [[0, [0, 2.4, 4.4]], [7.3, [.4, 1.6, 2.2]]], [[0, [0, 1.6, -4]], [7.3, [0, 1.4, -2]]], u);
      inq.forEach((k, i) => { k.face(C); k.eye(u > 6.2 ? 'angry' : 'flat'); k.pose({ armL: [20, -110], armR: u > 6.2 && i === 1 ? [100, 0] : [20, -110] }); }); h.face(C); h.eye(u > 6.2 ? 'wide' : 'look'); h.pose({ head: u > 6.2 ? -6 : 0 });
      return { focus: C.position.distanceTo(new THREE.Vector3(0, 1.5, -3)), range: 4, blur: 11, bloom: .45, bloomT: .78, vig: .65, flash: smooth(6.3, 6.4, u) * (1 - smooth(6.4, 6.9, u)) * .3, tint: u > 6.3 ? '#FFB8A8' : '#ffffff' };
    };
  });
}

/** 26. A Terra gira em volta do Sol, doença de bicho invisível, gente voando — 199.26 a 205.85 */
export function sIdeias(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .02], fov: 32 }, (c) => {
    const O = oficina(c); const h = heroi(c, -1.4, -2.0);
    const sol = new THREE.Mesh(new THREE.SphereGeometry(.14, 20, 14), new THREE.MeshStandardMaterial({ color: '#F2C14E', emissive: '#FFB040', emissiveIntensity: 1.2 })); sol.position.set(-.3, 1.3, -2.4); c.add(sol); const pls = [['#4A86C7', .32, .05], ['#C8643A', .48, .04], ['#8EAE56', .64, .035]].map(([k, r, s]) => { const p = new THREE.Mesh(new THREE.SphereGeometry(s, 14, 10), std(k)); c.add(p); return [p, r]; }); for (const [, r] of pls) { const an = new THREE.Mesh(new THREE.TorusGeometry(r, .004, 4, 60), std('#C9A04A', { metalness: .7 })); an.rotation.x = Math.PI / 2; an.position.copy(sol.position); c.add(an); }
    const mic = cut(canvasTex(256, 256, (x) => { x.fillStyle = '#E8F4D8'; x.beginPath(); x.arc(128, 128, 120, 0, 7); x.fill(); x.strokeStyle = '#5A3A22'; x.lineWidth = 10; x.stroke(); const R = rng(4); for (let i = 0; i < 9; i++) { x.fillStyle = ['#7AC85A', '#C85A9A', '#5A8AC8'][i % 3]; x.beginPath(); x.ellipse(60 + R() * 130, 60 + R() * 130, 14, 8, R() * 3, 0, 7); x.fill(); } }), .5, .5); mic.material.color.set('#B8B8A8'); mic.position.set(.6, 1.5, -2.4); c.add(mic);
    const aviao = new THREE.Group(); aviao.add(box(.5, .06, .08, std('#E8E4DA'), 0, 0, 0)); aviao.add(box(.1, .02, .6, std('#E8E4DA'), .05, 0, 0)); aviao.add(box(.06, .14, .02, std('#C9361F'), -.22, .06, 0)); c.add(aviao);
    return (t, u, C) => {
      O.upd(u); pls.forEach(([p, r], i) => { const a = u * (1.6 - i * .4); p.position.set(sol.position.x + Math.cos(a) * r, 1.3, sol.position.z + Math.sin(a) * r); });
      mic.visible = u > 2.1; mic.scale.setScalar(smooth(2.1, 2.4, u)); pointer(mic, C);
      aviao.visible = u > 4.4; const a = (u - 4.4) * 1.2; aviao.position.set(Math.cos(a) * 1.2, 2.2 + Math.sin(a * 2) * .1, -2.2 + Math.sin(a) * .5); aviao.rotation.y = -a - Math.PI / 2;
      cam(C, [[0, [.2, 1.6, 0]], [2.1, [.3, 1.6, -.3]], [6.6, [-.4, 1.7, 1.2]]], [[0, [-.3, 1.3, -2.4]], [2.1, [.4, 1.4, -2.4]], [6.6, [-.6, 1.6, -2.2]]], u);
      h.face(C); h.pose({ armL: [10, 6], armR: [70, 10] }); h.eye('happy');
      return { focus: C.position.distanceTo(new THREE.Vector3(0, 1.4, -2.4)), range: 1.6, blur: 12, bloom: .45, bloomT: .8, vig: .55 };
    };
  });
}

/** 27. Qualquer frase dessas pode te levar para a fogueira — 205.85 a 209.05 */
export function sFogueira(t0, t1) {
  return mk(t0, t1, { bg: '#0E0810', fog: ['#1A0E14', .02], fov: 34, far: 600 }, (c) => {
    stars(c, 1500, 200, 3); calcada(c, 60, 60, -10, '#7A6A5E');
    for (let i = 0; i < 6; i++) { const h = casa(90 + i, 7, 3, { night: true }); h.position.set(-18 + i * 7.2, 0, -16); c.add(h); }
    const pilha = new THREE.Group(); for (let i = 0; i < 18; i++) { const l = box(1.6, .14, .14, '#4A3220', 0, .1 + Math.floor(i / 6) * .14, 0); l.rotation.y = i * .52; pilha.add(l); } pilha.add(box(.18, 3.4, .18, '#3A2414', 0, 1.7, 0)); pilha.position.set(0, 0, -6); c.add(pilha);
    const fogo = []; for (let i = 0; i < 9; i++) { const f = glowSprite(i % 2 ? '#FF6A20' : '#FFC050', 1.2, .9); f.position.set((i % 3 - 1) * .4, .5 + Math.floor(i / 3) * .4, -6); c.add(f); fogo.push(f); }
    const L = new THREE.PointLight('#FF7A30', 60, 30, 1.4); L.position.set(0, 1.5, -5.4); L.castShadow = true; c.add(L); const fum = smoke(c, 18, [0, 2, -6], { col: '#3A2A2A', size: 4, rise: 10, spread: 1, seed: 6, life: 3 });
    const R = rng(4), sp = []; for (let i = 0; i < 160; i++) { const a = Math.PI * 1.08 + R() * Math.PI * .84, r = 3.5 + R() * 5; sp.push([Math.cos(a) * r, -6 + Math.sin(a) * r, 0, Math.atan2(-Math.cos(a), -Math.sin(a))]); } crowd(c, sp, { raised: .15, jump: .02, seed: 3, tint: '#C87A5A' });
    c.add(new THREE.HemisphereLight('#2A1A2A', '#0A0606', .4));
    return (t, u, C) => { fum(u); fogo.forEach((f, i) => { const k = .8 + Math.sin(u * 17 + i * 2) * .15; f.scale.setScalar(1.2 * k); f.position.y = .5 + Math.floor(i / 3) * .4 + Math.sin(u * 9 + i) * .05; }); L.intensity = 60 * (.85 + Math.sin(u * 13) * .1); cam(C, [[0, [0, 1.6, 6]], [3.2, [0, 1.8, 4]]], [[0, [0, 1.6, -6]], [3.2, [0, 2, -6]]], u); return { focus: 10, range: 6, blur: 10, bloom: .6, bloomT: .7, vig: .65 }; };
  });
}

/** 28. Você aprende a ficar calado — 209.05 a 213.32 */
export function sCalado(t0, t1) {
  return mk(t0, t1, { bg: '#0E0A0C', fog: ['#140E10', .03], fov: 32 }, (c) => {
    const O = oficina(c); const h = heroi(c, 0, -1.6); const jan = new THREE.SpotLight('#AFC0FF', 40, 10, .3, .6, 1.3); jan.position.set(3, 3, 1); jan.target.position.set(0, 1.4, -1.6); c.add(jan, jan.target);
    return (t, u, C) => { O.upd(u); cam(C, [[0, [.3, 1.5, .8]], [4.3, [.15, 1.55, .1]]], [[0, [0, 1.5, -1.6]], [4.3, [0, 1.55, -1.6]]], u); h.face(C); h.pose({ armL: [10, 6], armR: [40, -150], head: Math.sin(u * 2) * 2 }); h.eye(Math.floor(u * 1.5) % 2 ? 'look' : 'lookl'); return { focus: C.position.distanceTo(h.root.position), range: 1.2, blur: 13, bloom: .4, bloomT: .82, vig: .7, sat: .8 }; };
  });
}

/** 29. Ficar famoso: escrever Os Lusíadas antes de Camões — 213.32 a 226.25 */
export function sFama(t0, t1) {
  return mk(t0, t1, { bg: '#2A1A10', fog: ['#3A2414', .02], fov: 34 }, (c) => {
    const O = oficina(c); const h = heroi(c, -1.2, -1.9);
    const livro = new THREE.Group(); livro.add(box(.8, 1.1, .16, std('#6A1A1A'), 0, 0, 0)); const capa = new THREE.Mesh(new THREE.PlaneGeometry(.72, 1.0), new THREE.MeshStandardMaterial({ map: canvasTex(256, 360, (x) => { x.fillStyle = '#6A1A1A'; x.fillRect(0, 0, 256, 360); x.strokeStyle = '#D9B46A'; x.lineWidth = 8; x.strokeRect(16, 16, 224, 328); x.fillStyle = '#E9C870'; x.font = '900 40px Fraunces'; x.textAlign = 'center'; x.fillText('OS', 128, 130); x.fillText('LUSÍADAS', 128, 180); x.font = '700 30px Caveat'; x.fillText('por… você?', 128, 260); }), emissive: '#3A1A0A', emissiveIntensity: .3 })); capa.position.z = .085; livro.add(capa); livro.position.set(.6, 2.1, -2.2); c.add(livro); const lg = glowSprite('#FFD870', 2.4, .5); lg.position.copy(livro.position); c.add(lg);
    const R = rng(3), sp = []; for (let i = 0; i < 80; i++) sp.push([-3 + R() * 6, -3.2 - R() * .4, 0, 0]);
    const lauro = cut(canvasTex(256, 256, (x) => { x.clearRect(0, 0, 256, 256); x.strokeStyle = '#7AA84A'; x.lineWidth = 10; x.beginPath(); x.arc(128, 128, 90, Math.PI * .6, Math.PI * 2.4); x.stroke(); x.fillStyle = '#8AC85A'; for (let i = 0; i < 16; i++) { const a = Math.PI * .6 + i * .11 * 1.6; x.beginPath(); x.ellipse(128 + Math.cos(a) * 90, 128 + Math.sin(a) * 90, 16, 7, a, 0, 7); x.fill(); } }), .9, .9); c.add(lauro);
    return (t, u, C) => { O.upd(u); livro.rotation.y = Math.sin(u) * .2; livro.position.y = 2.1 + Math.sin(u * 1.5) * .05; lauro.position.set(-1.2, 2.0, -1.9); lauro.visible = u > 3 && u < 9; pointer(lauro, C); cam(C, [[0, [-.4, 1.6, 2.0]], [12.9, [0, 1.8, .8]]], [[0, [-.3, 1.7, -2]], [12.9, [.4, 1.9, -2.2]]], u); h.face(C); h.cheer(u, 0, u > 3 && u < 9 ? .6 : 0); if (!(u > 3 && u < 9)) h.pose({ armR: [60, -20] }); h.eye(u > 9 ? 'smug' : 'happy'); return { focus: C.position.distanceTo(h.root.position), range: 2.4, blur: 12, bloom: .5, bloomT: .75, vig: .55 }; };
  });
}

/** 30. "As armas e os barões assinalados"… e é só isso que você lembra — 226.25 a 240.31 */
export function sPrimeiraLinha(t0, t1) {
  return mk(t0, t1, { bg: '#1A0C08', fog: ['#2A1410', .02], fov: 30 }, (c) => {
    const O = oficina(c); const h = heroi(c, 0, -3.2);
    const M = pergaminho(c, 1.5, 1.05, (x, p, W, H) => { const txt = 'As armas e os barões assinalados'; const n = Math.floor(smooth(.08, .42, p) * txt.length); x.fillStyle = '#2A1A10'; x.font = '700 64px Caveat'; x.fillText(txt.slice(0, n), 70, 170); x.strokeStyle = '#C8A86A88'; x.lineWidth = 3; for (let i = 0; i < 9; i++) { x.beginPath(); x.moveTo(60, 230 + i * 60); x.lineTo(W - 60, 230 + i * 60); x.stroke(); } if (p > .7) { x.fillStyle = '#5A3A1A'; x.beginPath(); x.ellipse(520, 330, 30, 22, .3, 0, 7); x.fill(); } });
    M.rotation.x = -Math.PI / 2 + .35; M.position.set(0, 1.0, -2.3); const pena = box(.02, .4, .02, '#F4EEDC', 0, 0, 0); c.add(pena);
    const vc = vela(c, .8, .95, -2.2, 1.6); const base = box(.06, .25, .06, '#F4EEDC', .8, 1.07, -2.2, false); c.add(base);
    return (t, u, C) => {
      O.upd(u); vc.upd(u); const p = smooth(0, 14, u); M.paint(p); const wr = u < 5.8; pena.position.set(wr ? lerp(-.5, .4, smooth(1, 5.6, u)) : .5, wr ? 1.12 + Math.abs(Math.sin(u * 14)) * .02 : 1.25, -2.25); pena.rotation.z = .5;
      const queima = smooth(7, 14, u); base.scale.y = lerp(1, .25, queima); base.position.y = .95 + .125 * base.scale.y; vc.f.position.y = .95 + .25 * base.scale.y + .05; vc.L.position.y = vc.f.position.y + .1;
      cam(C, [[0, [0, 2.95, -.85]], [6, [0, 2.85, -.95]], [7.4, [0, 1.4, -.5]], [14, [.2, 1.5, .4]]], [[0, [0, 1.0, -2.3]], [6, [0, 1.0, -2.3]], [7.4, [0, 1.3, -3.2]], [14, [0, 1.4, -3.2]]], u);
      h.face(C); h.eye(u < 6.4 ? 'down' : u < 9 ? 'flat' : 'sad'); h.pose({ armR: wr ? [40, -70] : [10, 6], head: u > 9 ? -6 : 0 });
      return { focus: u < 6.6 ? C.position.distanceTo(M.position) : C.position.distanceTo(h.root.position), range: 1.2, blur: 12, bloom: .45, bloomT: .8, vig: .6 };
    };
  });
}

/** 31. 1572: o livro de verdade é publicado; você lê inteiro — 240.31 a 247.82 */
export function sLivraria(t0, t1) {
  return mk(t0, t1, { bg: '#2A1A10', fog: ['#3A2414', .02], fov: 34 }, (c) => {
    const I = interior(c, { lareiraX: -9, parede: '#C8B090' });
    for (let s = 0; s < 4; s++) { c.add(box(5, .06, .5, '#5A3A22', 0, .5 + s * .7, -3.7)); for (let i = 0; i < 22; i++) c.add(box(.16, .5, .32, ['#6A1A1A', '#2A3A5A', '#5A4A2A', '#3A5A3A'][(i + s) % 4], -2.3 + i * .22, .78 + s * .7, -3.6)); }
    const prensa = new THREE.Group(); prensa.add(box(1.2, 1.6, .8, std('#5A3A22'), 0, .8, 0)); prensa.add(box(.1, 1.2, .1, std('#3A2414'), 0, 2.2, 0)); prensa.add(box(1.0, .1, .1, std('#3A2414'), 0, 2.4, 0)); prensa.position.set(3.4, 0, -2.2); c.add(prensa);
    const merc = gente(c, 'mercador', null, null, -2.4, -2.8); merc.tint('#FFE8D0'); const h = heroi(c, -.4, -1.6); const liv = box(.3, .4, .06, std('#6A1A1A'), 0, 0, 0); c.add(liv);
    return (t, u, C) => { I.upd(u); cam(C, [[0, [-1, 1.5, 2.4]], [7.5, [-.4, 1.4, 1.2]]], [[0, [-1.2, 1.2, -2.4]], [7.5, [-.4, 1.4, -1.6]]], u); merc.face(C); merc.eye('happy'); merc.pose({ armR: u < 3 ? [60, -20] : [10, 6] }); h.face(C); const lendo = u > 3; h.pose({ armL: lendo ? [30, -110] : [10, 6], armR: [40, -100], head: lendo ? 8 : 0 }); h.eye(lendo ? 'down' : 'happy'); liv.position.set(h.root.position.x + (lendo ? 0 : .3), lendo ? 1.25 : 1.0, h.root.position.z + .2); liv.rotation.x = lendo ? -.6 : 0; return { focus: C.position.distanceTo(h.root.position), range: 2.4, blur: 12, bloom: .4, bloomT: .82, vig: .5 }; };
  });
}

/** 32. Se inscreve: o momento mais importante ainda não chegou — 247.82 a 254.97 */
export function sInscreve(t0, t1) {
  return mk(t0, t1, { bg: '#1A1210', fog: ['#1A1210', .02], fov: 34 }, (c) => {
    const G = igreja(c); const h = heroi(c, 0, -5);
    const bc = document.createElement('canvas'); bc.width = 800; bc.height = 200; const bx = bc.getContext('2d'); const bT = new THREE.CanvasTexture(bc); bT.colorSpace = THREE.SRGBColorSpace;
    const paint = (on) => { bx.clearRect(0, 0, 800, 200); bx.fillStyle = on ? '#4A4A58' : '#C21A1A'; bx.beginPath(); bx.roundRect(10, 10, 780, 180, 90); bx.fill(); bx.fillStyle = '#fff'; bx.font = '900 80px Inter'; bx.textAlign = 'center'; bx.textBaseline = 'middle'; bx.fillText(on ? 'INSCRITO ✓' : 'INSCREVER-SE', 400, 104); bT.needsUpdate = true; };
    const btn = new THREE.Mesh(new THREE.PlaneGeometry(3, .75), new THREE.MeshStandardMaterial({ map: bT, emissiveMap: bT, emissive: '#fff', emissiveIntensity: .6, transparent: true })); btn.position.set(0, 3.2, -6); c.add(btn);
    let lo = -1;
    return (t, u, C) => { G.upd(u); const on = u > 2.6 ? 1 : 0; if (on !== lo) { paint(on); lo = on; } btn.scale.setScalar(1 + (u > 2.5 && u < 2.9 ? Math.sin((u - 2.5) / .4 * Math.PI) * .1 : 0)); cam(C, [[0, [0, 2.2, 0]], [7.2, [0, 2.0, -1.2]]], [[0, [0, 2.4, -6]], [7.2, [0, 2.2, -6]]], u); h.face(C); h.pose({ armL: [10, 6], armR: u < 2.6 ? [130, 20] : [10, 6] }); h.eye(u < 4 ? 'happy' : 'smug'); return { focus: C.position.distanceTo(h.root.position), range: 3, blur: 10, bloom: .45, bloomT: .8, vig: .5 }; };
  });
}
