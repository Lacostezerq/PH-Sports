// Cenários de "E se você focasse 100%": a casa da família (cozinha | quarto do Guilherme | quarto do Davi, lado a lado),
// o caixa do mercado, a cantina da escola, o campinho de terra, o salão do campeonato, a escola do Davi e o vazio do foco profundo.
import * as THREE from 'three';
import { toon, tm, rb, bx, cyl, sph, ctex, toonTex, luzToon } from './motor/toon.js';
import { rng } from './motor/core.js';
import * as M from '../../../mundo/cidade/moveis.js';
import { piso as pisoTex, reboco, azulejo, terra, grama, tijolo, calcada } from '../../../mundo/cidade/texturas.js';
import { ceu } from './lugares2.js';
import { janela } from './lugares.js';
import { lampada, mochila, botijao, carteira, cadeiraPlastico } from './objs.js';
import { passaros } from './vida.js';
import { tabuleiro, relogioXadrez, violao, cadeirinha, cartolina, balao, folha, trofeu } from './pecas_foco.js';
import { cadernoAberto, tela } from './objetos.js';

const rep = (t, a, b) => { const n = t.clone(); n.wrapS = n.wrapT = THREE.RepeatWrapping; n.repeat.set(a, b); n.needsUpdate = true; return n; };
const plano = (w, h, mat, x, y, z, rx = 0, ry = 0) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); m.position.set(x, y, z); m.rotation.set(rx, ry, 0); m.receiveShadow = true; return m; };
const parede = (cor, a = 1, b = 1) => toonTex(rep(reboco(cor), a, b));
const txt = (x, s, cx, cy, size, cor, peso = 900, al = 'center', fonte = 'Inter') => { x.fillStyle = cor; x.font = `${peso} ${size}px ${fonte}`; x.textAlign = al; x.textBaseline = 'middle'; x.fillText(s, cx, cy); };
export { tela };

// ===================================================================== CASA
/** Paredes de um cômodo retangular centrado em (cx, 0): chão, paredes (a da frente some com o.corte), teto. */
function sala(g, cx, w, d, h, o = {}) {
  const pisoM = toonTex(rep(pisoTex(...(o.piso || ['madeira', '#A87A4E', '#966A42'])), w * 1.1, d * 1.1)); g.add(plano(w, d, pisoM, cx, 0, 0, -Math.PI / 2));
  const pm = o.azul ? toonTex(rep(azulejo('#F6F4EE', '#E2E6E4', '#B8C8C8'), w / .8, h / .8)) : parede(o.parede || '#EDE6D6');
  const P = {};
  P.fundo = plano(w, h, pm, cx, h / 2, -d / 2, 0, 0); g.add(P.fundo);
  P.frente = plano(w, h, pm, cx, h / 2, d / 2, 0, Math.PI); g.add(P.frente);
  // parede lateral; com o.porta.{esq|dir} = z, deixa um vão de porta (0,8 x 2,12) centrado nesse z
  const lateral = (x, ry, zc) => { if (zc === undefined) return plano(d, h, pm, x, h / 2, 0, 0, ry); const G = new THREE.Group(), a0 = zc - .42, a1 = zc + .42;
    G.add(plano(a0 + d / 2, h, pm, x, h / 2, (-d / 2 + a0) / 2, 0, ry)); G.add(plano(d / 2 - a1, h, pm, x, h / 2, (a1 + d / 2) / 2, 0, ry)); G.add(plano(.84, h - 2.12, pm, x, (h + 2.12) / 2, zc, 0, ry)); return G; };
  const po = o.porta || {};
  P.esq = lateral(cx - w / 2, Math.PI / 2, po.esq); g.add(P.esq);
  P.dir = lateral(cx + w / 2, -Math.PI / 2, po.dir); g.add(P.dir);
  P.teto = plano(w, d, toon('#F4F0E8'), cx, h, 0, Math.PI / 2); g.add(P.teto);
  for (const [x, z, ww, dd] of [[cx, -d / 2 + .01, w, .02], [cx - w / 2 + .01, 0, .02, d], [cx + w / 2 - .01, 0, .02, d]]) g.add(bx(ww, .08, dd, '#C8BEAE', x, .04, z, { shadow: false }));
  return P;
}
/** Porta numa parede lateral (x fixo), aberta de `abre` (0..1). Devolve o grupo com .folha (gira). */
function portaLado(g, x, z, lado = 1, cor = '#8A6040') {
  const p = new THREE.Group(); p.position.set(x, 0, z); g.add(p);
  for (const s of [-1, 1]) p.add(bx(.1, 2.12, .07, '#B88A5E', 0, 1.06, s * .44, { out: .005 })); p.add(bx(.1, .07, .95, '#B88A5E', 0, 2.12, 0, { out: .005 }));
  const fo = new THREE.Group(); fo.position.set(0, 0, -.4); p.add(fo); fo.add(bx(.035, 2.05, .8, cor, 0, 1.03, .4, { out: .005 })); fo.add(sph(.025, '#C9A030', lado * .03, 1.0, .72, { seg: 8 }));
  p.folha = fo; p.abre = (k) => { fo.rotation.y = -lado * k * 1.6; }; return p;
}
/** Casa da família. Cômodos ao longo de x: cozinha (-4.6..-1.6) | quarto do Guilherme (-1.5..1.5) | quarto do Davi (1.6..4.1).
 * Profundidade 3 (z -1.5..1.5), pé-direito 2.6. o.hora: manha | tarde | noite; o.corte: some a parede da frente (casa de boneca). */
export function casa(c, o = {}) {
  const hora = o.hora || 'manha', noite = hora === 'noite';
  const L = luzToon(c, { r: 9, pos: noite ? [2, 6, 3] : [3, 8, 6], ki: noite ? .45 : 1.5, hemi: noite ? .7 : 1.5, sky: noite ? '#8E9CD0' : '#EAF2FF', key: noite ? '#9FB4F0' : '#FFF2DC' });
  c.add(new THREE.AmbientLight(noite ? '#6A78B8' : '#FFF4E6', noite ? .35 : .45));
  const g = new THREE.Group(); c.add(g); const D = 3, H = 2.6;
  // ---------- cozinha ----------
  const PK = sala(g, -3.1, 3.0, D, H, { porta: { dir: .85 }, azul: true, piso: ['ceramica', '#C9BBA4', '#B5A68C'] });
  const fog = M.fogao('#F4F1EA'); fog.position.set(-4.0, 0, -D / 2 + .34); g.add(fog);
  const chama = []; for (let i = 0; i < 2; i++) { const f = new THREE.Mesh(new THREE.ConeGeometry(.035, .06, 10, 1, true), new THREE.MeshBasicMaterial({ color: '#5AB0FF', transparent: true, opacity: .85 })); f.position.set(-4.12 + i * .24, .93, -D / 2 + .3); g.add(f); chama.push(f); }
  const panela = new THREE.Group(); panela.position.set(-4.12, .92, -D / 2 + .3); g.add(panela); panela.add(cyl(.11, .1, .12, '#9EA6B0', 0, .06, 0, { out: .004, seg: 16 })); panela.add(bx(.18, .015, .02, '#2A2A30', .17, .1, 0));
  const bot = botijao(); bot.scale.setScalar(.65); bot.position.set(-4.45, 0, -D / 2 + .25); g.add(bot);
  const pia = M.bancadaPia(1.3, '#F4F1EA', '#8E8678'); pia.position.set(-2.85, 0, -D / 2 + .32); g.add(pia);
  const ger = M.geladeira('#F4F1EA'); ger.position.set(-1.98, 0, -D / 2 + .38); g.add(ger);
  const jk = janela(.9, .8, hora, 2); jk.position.set(-3.1, 1.6, -D / 2 + .02); g.add(jk);
  const mesa = new THREE.Group(); mesa.position.set(-3.0, 0, .45); g.add(mesa);
  const xad = ctex(256, 256, (x) => { for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { x.fillStyle = (i + j) % 2 ? '#3E7CC8' : '#F6F2EA'; x.fillRect(i * 32, j * 32, 32, 32); } });
  { const tl = new THREE.Mesh(new THREE.BoxGeometry(1.12, .012, .82), toonTex(rep(xad, 2, 1.5))); tl.position.y = .77; mesa.add(tl); }
  mesa.add(rb(1.0, .04, .7, '#B87A4A', 0, .745, 0)); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) mesa.add(bx(.05, .72, .05, '#9A6236', a * .44, .36, b * .29));
  const cadK = [[-.55, 0, Math.PI / 2], [.55, 0, -Math.PI / 2], [0, -.62, 0]].map(([x, z, ry]) => { const k = cadeiraPlastico(); k.position.set(-3.0 + x, 0, .45 + z); k.rotation.y = ry; g.add(k); return k; });
  const lk = lampada(.3); lk.position.set(-3.1, H, .2); g.add(lk); const LK = new THREE.PointLight('#FFE2AE', noite ? 6 : 2, 6, 1.6); LK.position.set(-3.1, 2.1, .2); g.add(LK);
  // ---------- quarto do Guilherme ----------
  const PG = sala(g, 0, 3.0, D, H, { porta: { esq: .85, dir: .85 }, parede: '#B8D0DC', piso: ['madeira', '#9A6A42', '#8A5E3A'] });
  const cama = new THREE.Group(); cama.position.set(.95, 0, -.45); g.add(cama);
  cama.add(rb(.95, .3, 1.95, '#8A5A36', 0, .17, 0, { out: .01 })); cama.add(rb(.95, .7, .06, '#7A4E2E', 0, .55, -.98, { out: .01 }));
  cama.add(rb(.88, .1, 1.85, '#F4F1EA', 0, .37, 0, { out: .008 })); const trav = rb(.6, .14, .3, '#F4F1EA', 0, .49, -.8, { out: .006 }); cama.add(trav);
  const coberta = rb(.92, .05, 1.2, '#3E6EC8', 0, .44, .3, { out: .006 }); cama.add(coberta);
  // escrivaninha encostada na parede da esquerda, de frente para a parede: cadeira, caderno, celular, abajur
  const esc = new THREE.Group(); esc.position.set(-1.12, 0, .2); g.add(esc);
  esc.add(rb(.6, .04, 1.05, '#F4F1EA', 0, .74, 0, { out: .008 })); for (const [a, b] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) esc.add(bx(.04, .72, .04, '#C9CED6', a * .26, .36, b * .48));
  const cad = cadernoAberto(); cad.position.set(.02, .76, .05); cad.rotation.y = -Math.PI / 2; cad.scale.setScalar(.8); esc.add(cad);
  const abaj = new THREE.Group(); abaj.position.set(-.16, .76, -.38); esc.add(abaj); abaj.add(cyl(.06, .07, .02, '#2A2A30', 0, .01, 0)); abaj.add(cyl(.01, .01, .3, '#2A2A30', 0, .16, 0)); const cup = cyl(.05, .1, .12, '#F2C230', 0, .32, 0, { out: .004 }); abaj.add(cup);
  const luzAbaj = new THREE.PointLight('#FFD89A', 0, 3, 1.6); luzAbaj.position.set(-.1, 1.0, -.2); esc.add(luzAbaj);
  const cadEsc = M.cadeira('#3E6EC8'); cadEsc.position.set(-.55, 0, .25); cadEsc.rotation.y = -Math.PI / 2; g.add(cadEsc);
  const jg = janela(.9, .9, hora, 4); jg.position.set(.4, 1.55, -D / 2 + .02); g.add(jg);
  const sol = new THREE.SpotLight(noite ? '#B8C8FF' : '#FFF0D0', noite ? 8 : 10, 7, .55, .6, 1.4); sol.position.set(.4, 2.3, -D / 2 - .6); sol.target.position.set(.2, 0, .6); g.add(sol, sol.target);
  const portaG = portaLado(g, 1.5, .9, -1); // porta para o quarto do Davi? não: porta para o corredor fica na parede da frente; esta liga os quartos (fechada)
  const vio = violao({ teia: true, semCorda: 2 }); vio.position.set(-1.36, .22, 1.36); vio.rotation.set(0, Math.PI / 2, Math.PI / 2 - .2); g.add(vio);
  const esp = new THREE.Group(); esp.position.set(-1.48, 1.35, -.95); esp.rotation.y = Math.PI / 2; g.add(esp); esp.add(rb(.5, .8, .03, '#7A5236', 0, 0, 0, { out: .005 })); const vid = new THREE.Mesh(new THREE.PlaneGeometry(.44, .74), new THREE.MeshBasicMaterial({ color: '#9AB0C0' })); vid.position.z = .017; esp.add(vid);
  const tv = new THREE.Group(); tv.position.set(-.3, 0, -1.25); g.add(tv); const rack = M.comoda(.8, '#B87A4A'); tv.add(rack); tv.add(rb(.5, .34, .06, '#2A2A30', 0, 1.06, -.02, { out: .006 })); const telaTV = tela(.44, .28, 256); telaTV.position.set(0, 1.06, .015); tv.add(telaTV);
  const pos = new THREE.Mesh(new THREE.PlaneGeometry(.45, .6), toonTex(ctex(225, 300, (x) => { x.fillStyle = '#2A2E44'; x.fillRect(0, 0, 225, 300); x.fillStyle = '#F2C230'; x.beginPath(); x.arc(112, 130, 70, 0, 7); x.fill(); txt(x, 'ROCK', 112, 250, 50, '#F4F1EA'); })));
  pos.position.set(1.0, 1.7, -D / 2 + .02); g.add(pos);
  const lg = lampada(.25); lg.position.set(0, H, 0); g.add(lg); const LG = new THREE.PointLight('#FFE2AE', noite ? 0 : 1.5, 5, 1.6); LG.position.set(0, 2.2, 0); g.add(LG);
  // ---------- quarto do Davi ----------
  const PD = sala(g, 2.85, 2.5, D, H, { porta: { esq: .85 }, parede: '#F2D89A', piso: ['madeira', '#B88A5A', '#A87A4A'] });
  const camaD = new THREE.Group(); camaD.position.set(3.55, 0, -.55); g.add(camaD); camaD.add(rb(.75, .26, 1.6, '#E2443A', 0, .15, 0, { out: .008 })); camaD.add(rb(.7, .09, 1.5, '#F4F1EA', 0, .32, 0, { out: .006 }));
  const travD = rb(.45, .12, .24, '#F4F1EA', 0, .42, -.6, { out: .005 }); camaD.add(travD); const cobD = rb(.72, .045, 1.0, '#F2C230', 0, .39, .2, { out: .005 }); camaD.add(cobD);
  for (let i = 0; i < 9; i++) { const st = new THREE.Mesh(new THREE.CircleGeometry(.04, 5), new THREE.MeshBasicMaterial({ color: '#FFF2A0' })); st.position.set(2.0 + (i % 3) * .5, 1.7 + Math.floor(i / 3) * .25, -D / 2 + .015); g.add(st); }
  const espD = new THREE.Group(); espD.position.set(2.1, 1.0, -D / 2 + .03); g.add(espD); espD.add(rb(.45, .9, .03, '#F2546E', 0, 0, 0, { out: .005 })); { const ev = new THREE.Mesh(new THREE.PlaneGeometry(.39, .84), new THREE.MeshBasicMaterial({ color: '#A8C0D0' })); ev.position.z = .017; espD.add(ev); }
  const moch = mochila('#3E7CC8'); moch.position.set(2.15, .19, .9); moch.rotation.y = .6; g.add(moch);
  const desenhos = []; for (let i = 0; i < 3; i++) { const d2 = new THREE.Mesh(new THREE.PlaneGeometry(.3, .22), toonTex(ctex(150, 110, (x) => { x.fillStyle = '#FBF7EC'; x.fillRect(0, 0, 150, 110); x.strokeStyle = ['#E2443A', '#3E7CC8', '#5AA84E'][i]; x.lineWidth = 6; x.beginPath(); x.arc(75, 50, 26, 0, 7); x.stroke(); x.beginPath(); x.moveTo(20, 95); x.lineTo(130, 90); x.stroke(); }))); d2.position.set(4.08, 1.5, -.4 + i * .4); d2.rotation.y = -Math.PI / 2; g.add(d2); desenhos.push(d2); }
  const jd = janela(.7, .7, hora, 7); jd.position.set(3.3, 1.6, -D / 2 + .02); g.add(jd);
  const ld = lampada(.22); ld.position.set(2.85, H, 0); g.add(ld); const LD = new THREE.PointLight('#FFE2AE', noite ? 0 : 1.5, 5, 1.6); LD.position.set(2.85, 2.2, 0); g.add(LD);
  // paredes divisórias com espessura (para o corte)
  for (const x of [-1.55, 1.55]) { g.add(bx(.1, H, .85 - .42 + D / 2, '#E8E0D0', x, H / 2, (-D / 2 + .85 - .42) / 2)); g.add(bx(.1, H, D / 2 - .85 - .42, '#E8E0D0', x, H / 2, (.85 + .42 + D / 2) / 2)); g.add(bx(.1, H - 2.12, .84, '#E8E0D0', x, (H + 2.12) / 2, .85)); }
  const portaK = portaLado(g, -1.55, .85, 1); // cozinha <-> quarto do Guilherme
  const portaD = portaLado(g, 1.55, .85, -1); // quarto do Guilherme <-> quarto do Davi
  portaG.visible = false;
  if (o.corte) for (const P of [PK, PG, PD]) { P.frente.visible = false; P.teto.visible = false; }
  if (o.semTeto) for (const P of [PK, PG, PD]) P.teto.visible = false;
  return { g, D, H, PK, PG, PD, fogao: fog, chama, panela, geladeira: ger, mesa, cadK, cama, coberta, trav, escrivaninha: esc, caderno: cad, abajur: abaj, luzAbaj, cadEsc, janela: jg, violao: vio, espelho: esp, tv, telaTV, camaD, travD, cobD, mochila: moch, espelhoD: espD, portaK, portaD, luzes: { LK, LG, LD, sol }, luz: L };
}

// ===================================================================== MERCADO
/** Caixa do mercado "Bom Preço": esteira, leitor, monitor, prateleiras coloridas ao fundo. Caixa em (0,0), cliente do lado +x. */
export function mercado(c) {
  luzToon(c, { r: 10, pos: [3, 9, 5], ki: 1.2, hemi: 1.6 }); c.add(new THREE.AmbientLight('#FFFFFF', .5));
  const g = new THREE.Group(); c.add(g); const R = rng(41);
  g.add(plano(20, 16, toonTex(rep(pisoTex('ceramica', '#E8E4DC', '#D8D2C6'), 14, 12)), 0, 0, -3, -Math.PI / 2));
  g.add(plano(20, 5, parede('#F4EEDC', 6, 2), 0, 2.5, -9)); const tetoM = plano(20, 16, toon('#F4F4F0'), 0, 3.6, -3, Math.PI / 2); g.add(tetoM);
  for (let i = 0; i < 6; i++) { const l = bx(1.6, .05, .25, '#FFFFF4', -6 + i * 2.6, 3.55, -2); l.material = toon('#FFFFF4', { emissive: '#FFFFF4', emissiveIntensity: .8 }); g.add(l); }
  // prateleiras ao fundo
  for (let r = 0; r < 3; r++) { const z = -3.5 - r * 1.8; for (const s of [-1, 1]) { const pr = new THREE.Group(); pr.position.set(s * 3.2, 0, z); g.add(pr); pr.add(bx(4.5, 1.7, .5, '#C9CED6', 0, .85, 0, { out: .008 }));
    for (let k = 0; k < 4; k++) for (let j = 0; j < 14; j++) pr.add(bx(.22, .2 + R() * .1, .14, ['#E2443A', '#F2C230', '#3E7CC8', '#5AA84E', '#F2546E', '#F4F1EA', '#9B6CC4'][(j + k * 3 + r) % 7], -2.05 + j * .31, .3 + k * .42, .3)); } }
  const pl = new THREE.Mesh(new THREE.PlaneGeometry(5, .9), toonTex(ctex(1000, 180, (x) => { x.fillStyle = '#C8302A'; x.fillRect(0, 0, 1000, 180); txt(x, 'MERCADO BOM PREÇO', 500, 95, 92, '#FFE08A'); }))); pl.position.set(0, 3.0, -8.95); g.add(pl);
  // caixa: balcão + esteira + leitor + monitor
  const cx = new THREE.Group(); g.add(cx);
  cx.add(rb(2.4, .85, .7, '#3A3A44', .5, .425, .2, { out: .01 }));
  const est = new THREE.Mesh(new THREE.BoxGeometry(1.5, .02, .5), toonTex(rep(ctex(64, 64, (x) => { x.fillStyle = '#2A2A30'; x.fillRect(0, 0, 64, 64); x.fillStyle = '#3A3A44'; x.fillRect(0, 0, 64, 8); }), 8, 1))); est.position.set(.95, .86, .2); cx.add(est);
  const leitor = new THREE.Group(); leitor.position.set(.05, .86, .2); cx.add(leitor); leitor.add(rb(.3, .02, .3, '#5A5A66', 0, 0, 0)); const laser = new THREE.Mesh(new THREE.PlaneGeometry(.24, .24), new THREE.MeshBasicMaterial({ color: '#FF3A3A', transparent: true, opacity: .5 })); laser.rotation.x = -Math.PI / 2; laser.position.y = .012; leitor.add(laser);
  const mon = new THREE.Group(); mon.position.set(-.5, .86, .05); cx.add(mon); mon.add(cyl(.02, .02, .3, '#2A2A30', 0, .15, 0)); mon.add(rb(.32, .24, .04, '#2A2A30', 0, .4, 0, { out: .005 })); const telaM = tela(.28, .2, 256); telaM.position.set(0, .4, .022); mon.add(telaM);
  const lampCx = new THREE.Group(); lampCx.position.set(-.5, 0, -.3); cx.add(lampCx); lampCx.add(cyl(.03, .03, 2.0, '#9EA6B0', 0, 1.0, 0, { seg: 8 })); const num = cyl(.14, .14, .08, '#C8302A', 0, 2.05, 0, { rot: [Math.PI / 2, 0, 0], out: .004 }); lampCx.add(num);
  const prods = []; for (let i = 0; i < 5; i++) { const p = rb(.12, .16, .1, ['#F2C230', '#3E7CC8', '#E2443A', '#5AA84E', '#F4F1EA'][i], 1.6 - i * .2, .95, .2, { out: .004 }); g.add(p); prods.push(p); }
  return { g, leitor, laser, telaM, prods, esteira: est };
}

// ===================================================================== CANTINA
/** Cantina da escola: balcão com vitrine de salgados, mesas compridas com bancos, cartaz de preços. */
export function cantina(c) {
  luzToon(c, { r: 9, pos: [4, 8, 5], ki: 1.4, hemi: 1.5 }); c.add(new THREE.AmbientLight('#FFF4E6', .45));
  const g = new THREE.Group(); c.add(g); const W = 9, D = 8, H = 3.2;
  const P = sala(g, 0, W, D, H, { parede: '#F2E6C8', piso: ['ceramica', '#D8CDB4', '#C4B89E'] }); P.frente.visible = false;
  g.add(plano(W, 1.2, toon('#E2843A'), 0, .6, -D / 2 + .01));
  const balc = rb(3.6, 1.0, .7, '#E2843A', -1.4, .5, -D / 2 + .7, { out: .01 }); g.add(balc);
  const vit = new THREE.Mesh(new THREE.BoxGeometry(3.4, .4, .5), new THREE.MeshToonMaterial({ color: '#CFE6F4', transparent: true, opacity: .45 })); vit.position.set(-1.4, 1.2, -D / 2 + .7); g.add(vit);
  for (let i = 0; i < 12; i++) { const s = sph(.05, ['#D9892E', '#C9A050', '#E8B060'][i % 3], -2.9 + i * .26, 1.07, -D / 2 + .6 + (i % 2) * .15, { seg: 8 }); s.scale.set(1, .8, 1.3); g.add(s); }
  const cart = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.0), toonTex(ctex(480, 300, (x) => { x.fillStyle = '#2E2A26'; x.fillRect(0, 0, 480, 300); txt(x, 'CANTINA', 240, 50, 50, '#F2C230'); const L = [['Coxinha', 'R$ 4,00'], ['Pastel', 'R$ 5,00'], ['Suco', 'R$ 3,00'], ['Pão de queijo', 'R$ 2,50']]; L.forEach(([a, b], i) => { txt(x, a, 40, 110 + i * 46, 34, '#F4F1EA', 700, 'left', 'Caveat'); txt(x, b, 440, 110 + i * 46, 34, '#F4F1EA', 700, 'right', 'Caveat'); }); })));
  cart.position.set(-1.4, 2.3, -D / 2 + .02); g.add(cart);
  const mesas = []; for (let i = 0; i < 2; i++) { const m = new THREE.Group(); m.position.set(1.4, 0, -1.2 + i * 2.4); g.add(m); m.add(rb(2.4, .06, .8, '#F4F1EA', 0, .74, 0, { out: .008 })); for (const s of [-1, 1]) { m.add(bx(.06, .72, .7, '#9EA6B0', s * 1.0, .36, 0)); m.add(rb(2.4, .05, .3, '#3E7CC8', 0, .44, s * .65, { out: .006 })); m.add(bx(.05, .42, .25, '#9EA6B0', s * 1.0, .21, .65)); m.add(bx(.05, .42, .25, '#9EA6B0', s * 1.0, .21, -.65)); } mesas.push(m); }
  for (let i = 0; i < 3; i++) { const j = janela(1.4, 1.0, 'manha', 10 + i); j.position.set(W / 2 - .02, 1.8, -2.5 + i * 2.4); j.rotation.y = -Math.PI / 2; g.add(j); }
  return { g, mesas, W, D };
}

// ===================================================================== CAMPINHO
/** Campinho de terra com duas pedras de trave, grama em volta, muro e casas ao fundo. Campo ao longo de x (-6..6), centro (0,0). */
export function campinho(c, o = {}) {
  ceu(c, [[0, '#5EA8E8'], [.45, '#A8D6F4'], [.55, '#F4EAD2'], [1, '#D8E6EE']]);
  const L = luzToon(c, { r: 14, pos: [-6, 9, 7], ki: 2.1, hemi: 1.4, key: '#FFE8C0' }); c.add(new THREE.AmbientLight('#FFF4E0', .3));
  const g = new THREE.Group(); c.add(g); const R = rng(77);
  g.add(plano(60, 60, toonTex(rep(grama('#78B85A'), 20, 20)), 0, -.01, 0, -Math.PI / 2));
  g.add(plano(13, 8, toonTex(rep(terra(), 5, 3)), 0, 0, 0, -Math.PI / 2));
  const traves = []; for (const x of [-5.6, 5.6]) for (const z of [-.9, .9]) { const p = sph(.18, '#9A968E', x, .1, z, { out: .006, seg: 10 }); p.scale.set(1.2, .7, 1); g.add(p); traves.push(p); }
  // muro baixo de tijolo e casas ao fundo
  g.add(tm(new THREE.BoxGeometry(30, 1.4, .25), toonTex(rep(tijolo('#B5603E'), 10, 1)), { pos: [0, .7, -6.5], out: .01 }));
  const cores = ['#E8C88A', '#9CC4B0', '#E8A08A', '#B8C8E8', '#F2E0B0', '#D8B8D8'];
  for (let i = 0; i < 8; i++) { const w = 3 + R() * 1.5, h = 3 + R() * 2.5; const cs = new THREE.Group(); cs.position.set(-14 + i * 4, 0, -9 - R() * 2); g.add(cs); cs.add(tm(new THREE.BoxGeometry(w, h, 3), toonTex(rep(reboco(cores[i % 6]), 2, 2)), { pos: [0, h / 2, 0], out: .01 })); cs.add(tm(new THREE.BoxGeometry(w + .3, .25, 3.3), toon('#B8643C'), { pos: [0, h + .1, 0], out: .008 })); for (let j = 0; j < 2; j++) cs.add(plano(.7, .7, toon('#7E98B0'), -w / 4 + j * w / 2, h * .6, 1.51)); }
  for (let i = 0; i < 5; i++) { const a = new THREE.Group(); a.position.set(-10 + i * 5 + R() * 2, 0, -5 - R() * 1); g.add(a); a.add(cyl(.1, .14, 2.2, '#6A4A30', 0, 1.1, 0, { seg: 8, out: .006 })); for (let k = 0; k < 3; k++) a.add(sph(.7 + R() * .3, ['#4C8A3E', '#5DA04A', '#3E7A34'][k], (R() - .5), 2.6 + R() * .6, (R() - .5), { seg: 10, out: .01 })); }
  // tufos de grama na terra
  for (let i = 0; i < 40; i++) { const t = new THREE.Mesh(new THREE.ConeGeometry(.04, .12, 4), toon('#5A9A44')); t.position.set((R() - .5) * 12, .05, (R() - .5) * 7); g.add(t); }
  passaros(c, { centro: [0, 14, -14], raio: 12, n: 5 });
  return { g, traves, luz: L };
}

// ===================================================================== SALÃO DO CAMPEONATO
/** Salão do campeonato: 50 mesas (5 x 10) com tabuleiros e jogadores, mesa da final num tablado no centro (0, 0.3, 0),
 * holofotes, faixa, arquibancada com público. Jogador da casa (Guilherme) em z = +0.55 olhando para -z. */
export function salao(c, o = {}) {
  luzToon(c, { r: 18, pos: [4, 14, 6], ki: .6, hemi: .55, sky: '#C8D0E8', ground: '#5A5048' }); c.add(new THREE.AmbientLight('#B8C0D8', .25));
  const g = new THREE.Group(); c.add(g); const R = rng(5);
  g.add(plano(40, 40, toonTex(rep(pisoTex('madeira', '#8A6A4A', '#7A5A3E'), 16, 16)), 0, 0, 0, -Math.PI / 2));
  g.add(plano(40, 12, parede('#3A3A48', 8, 3), 0, 6, -16)); g.add(plano(40, 12, parede('#3A3A48', 8, 3), -16, 6, 0, 0, Math.PI / 2)); g.add(plano(40, 12, parede('#3A3A48', 8, 3), 16, 6, 0, 0, -Math.PI / 2)); g.add(plano(40, 12, parede('#3A3A48', 8, 3), 0, 6, 16, 0, Math.PI));
  g.add(plano(40, 40, toon('#2A2A34'), 0, 11, 0, Math.PI / 2));
  const fx = new THREE.Mesh(new THREE.PlaneGeometry(12, 1.6), toonTex(ctex(1500, 200, (x) => { x.fillStyle = '#1E3A6A'; x.fillRect(0, 0, 1500, 200); txt(x, 'CAMPEONATO ESTADUAL DE XADREZ', 750, 80, 84, '#F2C230'); txt(x, 'FINAL', 750, 165, 52, '#F4F1EA'); }))); fx.position.set(0, 7, -15.9); g.add(fx);
  // tablado da final
  const tab = rb(4.2, .3, 3.2, '#5A2A2A', 0, .15, 0, { out: .01 }); g.add(tab); g.add(plano(4.0, 3.0, toon('#8E1E2A'), 0, .305, 0, -Math.PI / 2));
  const mesaF = new THREE.Group(); mesaF.position.set(0, .3, 0); g.add(mesaF); mesaF.add(rb(1.0, .05, .8, '#F4F1EA', 0, .74, 0, { out: .008 })); mesaF.add(bx(.9, .7, .34, '#E8E2D6', 0, .37, 0));
  const T = tabuleiro(.055); T.g.position.set(0, .765, 0); mesaF.add(T.g);
  const rel = relogioXadrez(); rel.position.set(.42, .765, -.02); rel.rotation.y = Math.PI / 2; rel.scale.setScalar(1.1); mesaF.add(rel);
  for (const z of [.62, -.62]) { const cd = M.cadeira('#2A2A30'); cd.position.set(0, .3, z); cd.rotation.y = z > 0 ? Math.PI : 0; g.add(cd); }
  // holofotes sobre a mesa da final
  const holo = new THREE.SpotLight('#FFF4E0', 60, 20, .32, .5, 1.2); holo.position.set(0, 9, 1.5); holo.target.position.set(0, .8, 0); holo.castShadow = true; g.add(holo, holo.target);
  const cone = new THREE.Mesh(new THREE.ConeGeometry(2.4, 8.5, 32, 1, true), new THREE.MeshBasicMaterial({ color: '#FFF4D8', transparent: true, opacity: .07, depthWrite: false, side: THREE.DoubleSide })); cone.position.set(0, 4.9, .7); cone.rotation.x = -.17; g.add(cone);
  // 50 mesas em volta (sem a do centro)
  const mesas = []; for (let i = 0; i < 5; i++) for (let j = 0; j < 10; j++) { const x = -11 + j * 2.45, z = -12 + i * 3.1; if (Math.abs(x) < 3.2 && Math.abs(z) < 3) continue; const m = new THREE.Group(); m.position.set(x, 0, z); g.add(m); m.add(rb(.9, .05, .7, '#F4F1EA', 0, .74, 0, { out: .006 })); m.add(bx(.8, .7, .6, '#E8E2D6', 0, .37, 0)); const tb = tabuleiro(.045); tb.g.position.y = .765; m.add(tb.g); mesas.push(m); }
  for (let i = 0; i < 8; i++) { const l = new THREE.PointLight('#FFE8C8', 9, 10, 1.6); l.position.set(-10 + i * 3, 6, -8 + (i % 2) * 8); g.add(l); }
  // arquibancada de cadeiras (plateia em pé atrás da corda)
  for (let i = 0; i < 20; i++) g.add(cyl(.03, .03, .9, '#C9A030', -4 + i * .42, .45, 2.4, { seg: 6 })); g.add(cyl(.015, .015, 8, '#C8302A', 0, .85, 2.4, { rot: [0, 0, Math.PI / 2], seg: 6 }));
  return { g, T, rel, mesaF, mesas, holo, cone, tab };
}

// ===================================================================== ESCOLA DO DAVI
/** Sala do 2º ano: cadeirinhas coloridas, cartolinas de famílias na parede, papel picado, balão murcho, janela. Centro (0,0), porta em z = +3. */
export function salaDavi(c, o = {}) {
  luzToon(c, { r: 8, pos: [4, 7, 2], ki: 1.3, hemi: 1.5 }); c.add(new THREE.AmbientLight('#FFF4E6', .45));
  const g = new THREE.Group(); c.add(g); const W = 6.5, D = 6, H = 3; const R = rng(13);
  const P = sala(g, 0, W, D, H, { parede: '#F7E7C8', piso: ['ceramica', '#D8E0C8', '#C4CEB4'] });
  g.add(plano(W, 1.0, toon('#7FC0A8'), 0, .5, -D / 2 + .01));
  const titulos = ['minha mãe', 'meu pai', 'minha vó', 'meu irmão', 'minha família', 'meu tio', 'minha irmã'];
  const carts = titulos.map((t, i) => { const m = cartolina(t, i, ['#F7E7A0', '#C8E8F8', '#F8D0D8', '#D8F0C8'][i % 4]); m.position.set(-2.7 + i * .9, 1.85 + (i % 2) * .12, -D / 2 + .02); m.rotation.z = (R() - .5) * .08; g.add(m); return m; });
  const quadro = bx(2.2, 1.0, .04, '#2E5A44', 0, 1.0, -D / 2 + .05, { out: .006 }); quadro.position.set(2.2, 1.6, -D / 2 + .03); quadro.visible = false;
  // cadeirinhas: empilhadas ou em fileira
  const cads = []; const cores = ['#E2443A', '#3E7CC8', '#F2C230', '#5AA84E', '#9B6CC4', '#F2994A'];
  for (let i = 0; i < 18; i++) { const k = cadeirinha(cores[i % 6]); g.add(k); cads.push(k); }
  const fila = () => cads.forEach((k, i) => { k.position.set(-2.2 + (i % 6) * .8, 0, -.6 + Math.floor(i / 6) * .9); k.rotation.set(0, Math.PI, 0); });
  const pilhas = () => cads.forEach((k, i) => { const p = i % 3, n = Math.floor(i / 3); k.position.set(-2.6 + p * .45, n * .12, 2.3 - (i % 2) * .05); k.rotation.set(0, Math.PI + (R() - .5) * .2, 0); });
  if (o.empilhadas) pilhas(); else fila();
  const canto = cadeirinha('#F2C230'); canto.position.set(2.6, 0, -2.3); canto.rotation.y = -Math.PI * .8; g.add(canto);
  const picado = []; for (let i = 0; i < 80; i++) { const p = new THREE.Mesh(new THREE.PlaneGeometry(.03, .02), new THREE.MeshBasicMaterial({ color: cores[i % 6], side: THREE.DoubleSide })); p.rotation.set(-Math.PI / 2, 0, R() * 6); p.position.set((R() - .5) * 5.5, .003, (R() - .5) * 5); g.add(p); picado.push(p); }
  const bal = balao('#E2443A', .85); bal.position.set(1.2, 0, .6); g.add(bal); const bal2 = balao('#3E7CC8', .9); bal2.position.set(-1.6, 0, 1.4); g.add(bal2);
  for (let i = 0; i < 2; i++) { const j = janela(1.3, 1.1, 'manha', 20 + i); j.position.set(W / 2 - .02, 1.8, -1.6 + i * 2.2); j.rotation.y = -Math.PI / 2; g.add(j); }
  const sol = new THREE.SpotLight('#FFE8C0', 18, 12, .7, .6, 1.2); sol.position.set(W / 2 + 2, 3.5, -1); sol.target.position.set(1.5, 0, -1.5); c.add(sol, sol.target);
  const porta = portaLado(g, -W / 2, 2.0, 1, '#3E7CC8');
  const varal = []; for (let i = 0; i < 10; i++) { const b = new THREE.Mesh(new THREE.ConeGeometry(.07, .14, 3), toon(cores[i % 6])); b.rotation.x = Math.PI; b.position.set(-2.8 + i * .62, 2.6 - Math.sin(i / 9 * Math.PI) * .2, -1); g.add(b); varal.push(b); }
  return { g, cads, canto, carts, picado, porta, fila, pilhas, W, D, H, P };
}
/** Corredor da escola do Davi com cartolinas dos dois lados ("minha mãe", "meu pai"...). Ao longo de z (de 3 a -12). */
export function corredorDavi(c) {
  luzToon(c, { r: 10, pos: [3, 8, 4], ki: 1.0, hemi: 1.4 }); c.add(new THREE.AmbientLight('#FFF4E6', .45));
  const g = new THREE.Group(); c.add(g); const W = 3, L = 16, H = 3;
  g.add(plano(W, L, toonTex(rep(pisoTex('ceramica', '#D8E0C8', '#C4CEB4'), 3, 16)), 0, 0, -4.5, -Math.PI / 2));
  for (const s of [-1, 1]) { g.add(plano(L, 1.0, toon('#7FC0A8'), s * W / 2, .5, -4.5, 0, -s * Math.PI / 2)); g.add(plano(L, 2.0, parede('#F7E7C8', 6, 1), s * W / 2, 2.0, -4.5, 0, -s * Math.PI / 2)); }
  g.add(plano(W, L, toon('#F4F0E8'), 0, H, -4.5, Math.PI / 2)); g.add(plano(W, H, parede('#F7E7C8'), 0, H / 2, -12.5));
  const tit = ['minha mãe', 'meu pai', 'minha vó', 'meu irmão', 'minha família', 'meu cachorro', 'minha tia', 'meu avô'];
  tit.forEach((t, i) => { const s = i % 2 ? 1 : -1; const m = cartolina(t, i, ['#F7E7A0', '#C8E8F8', '#F8D0D8', '#D8F0C8'][i % 4]); m.position.set(s * (W / 2 - .02), 1.6, 1.5 - Math.floor(i / 2) * 3); m.rotation.y = -s * Math.PI / 2; g.add(m); });
  for (let i = 0; i < 4; i++) { const l = new THREE.PointLight('#FFF2D8', 3, 6, 1.6); l.position.set(0, 2.7, 2 - i * 4.5); g.add(l); g.add(bx(1.2, .04, .2, '#FFFDF0', 0, H - .02, 2 - i * 4.5)); }
  const pv = portaLado(g, W / 2, -10, -1, '#3E7CC8');
  return { g, W, L, porta: pv };
}

// ===================================================================== VAZIO DO FOCO
/** Vazio preto com poeira de luz (foco profundo / abertura). */
export function vazio(c, o = {}) {
  c.add(new THREE.AmbientLight('#FFFFFF', .6)); const k = new THREE.DirectionalLight('#FFF4E0', 1.6); k.position.set(3, 8, 4); c.add(k);
  const g = new THREE.Group(); c.add(g); const R = rng(99);
  const pts = new THREE.BufferGeometry(); const n = 400, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = (R() - .5) * 40; a[i * 3 + 1] = (R() - .2) * 20; a[i * 3 + 2] = (R() - .5) * 40; } pts.setAttribute('position', new THREE.BufferAttribute(a, 3));
  const p = new THREE.Points(pts, new THREE.PointsMaterial({ color: o.cor || '#C8D4FF', size: .06, transparent: true, opacity: .6 })); g.add(p);
  return { g, pontos: p };
}
