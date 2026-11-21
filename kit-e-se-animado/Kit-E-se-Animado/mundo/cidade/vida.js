// Vida da cidade: carros e ônibus que respeitam semáforo e não batem, pedestres nas calçadas, figurantes
// (atendentes, gente sentada na praça), cachorro no quintal e passarinhos. Tudo depende só do tempo t
// (o mesmo quadro sempre fica igual, como o vídeo precisa).
import * as THREE from 'three';
import { XS, ZS, RUA, MEIOFIO, SEMAFOROS, qx, qz } from './mapa.js';
import { sinal, restoAmarelo } from './ruas.js';
import { carro } from './moveis.js';
import { onibusParado } from './publicos.js';
import { fundir, tm, bx, sph, cyl, rb } from './util.js';
import { povo } from '../base/elenco.js';
import { walk, idle, sentado } from '../base/char3d.js';
import { rng } from '../base/core.js';

const FAIXA = 2.5, VMAX = 8.5, VCURVA = 4.2, DT = .1, PARA = 7.2;

/** Rota fechada de carro passando pelos cruzamentos dados ([[col,lin],...] = índices em XS/ZS). */
function rota(nos) {
  // inclui todos os cruzamentos do caminho (não só as esquinas onde vira), para o carro ver cada semáforo
  const todos = []; for (let k = 0; k < nos.length; k++) { const [i0, j0] = nos[k], [i1, j1] = nos[(k + 1) % nos.length]; const n = Math.max(Math.abs(i1 - i0), Math.abs(j1 - j0)); for (let m = 0; m < n; m++) todos.push([i0 + Math.sign(i1 - i0) * m, j0 + Math.sign(j1 - j0) * m]); }
  const P = todos.map(([i, j]) => [XS[i], ZS[j]]), pts = [], curva = [];
  const n = P.length;
  for (let s = 0; s < n; s++) {
    const A = P[s], B = P[(s + 1) % n], Cc = P[(s + 2) % n];
    const d = norm([B[0] - A[0], B[1] - A[1]]), d2 = norm([Cc[0] - B[0], Cc[1] - B[1]]), o = dir(d), o2 = dir(d2);
    const a = [A[0] + d[0] * PARA + o[0], A[1] + d[1] * PARA + o[1]], b = [B[0] - d[0] * PARA + o[0], B[1] - d[1] * PARA + o[1]];
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]); for (let k = 0; k < L; k += .5) { pts.push([a[0] + d[0] * k, a[1] + d[1] * k, B]); curva.push(0); }
    // cruzamento: reta se segue em frente, curva (bezier) se vira
    const c = [B[0] + d2[0] * PARA + o2[0], B[1] + d2[1] * PARA + o2[1]], ctl = d[0] * d2[0] + d[1] * d2[1] > .9 ? [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2] : [B[0] + o[0] + o2[0], B[1] + o[1] + o2[1]];
    const vira = d[0] * d2[0] + d[1] * d2[1] < .9;
    for (let k = 0; k < 1; k += 1 / 28) { const u = 1 - k; pts.push([u * u * b[0] + 2 * u * k * ctl[0] + k * k * c[0], u * u * b[1] + 2 * u * k * ctl[1] + k * k * c[1], null]); curva.push(vira ? 1 : 0); }
  }
  const L = [0]; for (let i = 1; i <= pts.length; i++) { const p = pts[i - 1], q = pts[i % pts.length]; L.push(L[i - 1] + Math.hypot(q[0] - p[0], q[1] - p[1])); }
  return { pts, curva, L, tot: L[pts.length] };
}
const norm = (v) => { const l = Math.hypot(v[0], v[1]) || 1; return [v[0] / l, v[1] / l]; };
const dir = (d) => [-d[1] * FAIXA, d[0] * FAIXA]; // mão direita (z cresce para o sul)
function amostra(R, s) { s = ((s % R.tot) + R.tot) % R.tot; let lo = 0, hi = R.pts.length; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (R.L[m] <= s) lo = m; else hi = m; } const p = R.pts[lo], q = R.pts[(lo + 1) % R.pts.length], u = (s - R.L[lo]) / Math.max(1e-6, R.L[lo + 1] - R.L[lo]); return { x: p[0] + (q[0] - p[0]) * u, z: p[1] + (q[1] - p[1]) * u, ang: Math.atan2(q[0] - p[0], q[1] - p[1]), i: lo }; }

export function montarVida(C, o = {}) {
  const foco = C.foco, perto = (x, z, r) => Math.hypot(x - foco[0], z - foco[1]) < r;
  C._perto = []; // pedestres e figurantes: somem se ficarem colados na câmera (nunca aparece boneco cortado na frente da lente)
  // ---------------- TRÂNSITO ----------------
  const ROTAS = [
    rota([[0, 0], [5, 0], [5, 4], [0, 4]]),               // volta na cidade inteira (horário)
    rota([[0, 4], [5, 4], [5, 0], [0, 0]]),               // volta na cidade inteira (anti-horário)
    rota([[2, 1], [3, 1], [3, 2], [2, 2]]),               // em volta da praça
    rota([[0, 2], [5, 2], [5, 3], [0, 3]]),               // Av. Brasil / Rua das Flores
    rota([[1, 1], [1, 3], [4, 3], [4, 1]]),               // miolo
    rota([[5, 2], [0, 2], [0, 1], [5, 1]]),               // Av. Brasil sentido oeste / Rua Sete
  ];
  const nCarros = o.carros ?? 26, R = rng(2026);
  const carros = [];
  for (let i = 0; i < nCarros; i++) { const r = i % ROTAS.length; carros.push({ r, s: (ROTAS[r].tot * (Math.floor(i / ROTAS.length) / Math.ceil(nCarros / ROTAS.length))) + R() * 8, v: 0, id: i, cor: ['#E2443A', '#3E7CC8', '#F4F1EA', '#2A2A30', '#9AA0A8', '#F2C230', '#2E9C6A', '#8E6CC4', '#F08A2C'][i % 9], onibus: i === 3 }); }
  // simulação passo a passo (guardada para qualquer tempo pedido)
  const hist = []; let tSim = -30; const estado = () => carros.map(c => [c.s, c.v]);
  const pos = carros.map(() => null);
  // cada cruzamento só tem um carro por vez (reserva); semáforo vermelho = para na faixa
  const reserva = new Map(); const chave = (B) => B[0] + ',' + B[1];
  const FREIO = 4.5;
  const passo = (t) => {
    for (const c of carros) { const p = amostra(ROTAS[c.r], c.s); c._p = p; }
    // libera a reserva de quem já saiu do cruzamento
    for (const [k, id] of reserva) { const c = carros[id], [X, Z] = k.split(',').map(Number); const R = ROTAS[c.r], nb = R.pts[(c._p.i + 1) % R.pts.length][2]; if (Math.hypot(c._p.x - X, c._p.z - Z) > PARA + .6 && !(nb && nb[0] === X && nb[1] === Z)) reserva.delete(k); }
    for (const c of carros) {
      const Rr = ROTAS[c.r], p = c._p, comp = c.onibus ? 12 : 4.2;
      let alvo = Rr.curva[p.i] || Rr.curva[(p.i + 6) % Rr.pts.length] ? VCURVA : VMAX; if (c.onibus) alvo *= .8;
      const hx = Math.sin(p.ang), hz = Math.cos(p.ang);
      // carro mais perto na frente, na mesma faixa
      let frente = Infinity; for (const q of carros) { if (q === c) continue; const dx = q._p.x - p.x, dz = q._p.z - p.z, fr = dx * hx + dz * hz, lat = Math.abs(-dx * hz + dz * hx); if (fr > 0 && fr < 40 && lat < 2.0 && Math.cos(q._p.ang - p.ang) > .5) frente = Math.min(frente, fr - (comp + (q.onibus ? 12 : 4.2)) / 2); }
      const B = Rr.pts[(p.i + 1) % Rr.pts.length][2];
      if (B) { // chegando num cruzamento
        const dLinha = Math.hypot(B[0] - p.x, B[1] - p.z) - (RUA / 2 + 4.6) - comp / 2; // quanto falta para a frente do carro chegar na linha de parada (antes da faixa de pedestre)
        const parar = () => { alvo = Math.min(alvo, Math.sqrt(2 * FREIO * Math.max(0, dLinha - .2))); };
        const sem = SEMAFOROS.some(([x, z]) => x === B[0] && z === B[1]);
        const k = chave(B), minha = reserva.get(k) === c.id;
        if (!minha && dLinha < 40) {
          let pode = true;
          if (sem) { const eixo = Math.abs(hx) > .7 ? 'x' : 'z'; const f = sinal(t, eixo, B[0], B[1]); if (f === 'vermelho' || (f === 'amarelo' && (dLinha + comp + 9) / Math.max(c.v, 1) > restoAmarelo(t, eixo, B[0], B[1]))) pode = false; } // no amarelo só entra se dá tempo de atravessar
          if (reserva.has(k)) pode = false;
          if (frente < dLinha + 3) pode = false; // tem carro na frente esperando: ele entra primeiro
          if (pode) { const E = amostra(Rr, c.s + dLinha + comp + 2 * PARA + 4); for (const q of carros) if (q !== c && q.v < 1.5 && Math.cos(q._p.ang - E.ang) > .7 && Math.hypot(q._p.x - E.x, q._p.z - E.z) < comp / 2 + 3.5) pode = false; } // não entra se não tem espaço do outro lado
          if (pode && dLinha < Math.max(2.5, c.v * c.v / (2 * FREIO) + 2)) reserva.set(k, c.id); // entra: reserva o cruzamento
          else if (!pode) parar();
        }
      }
      // carro (ou ônibus) na frente, na mesma faixa
      for (const q of carros) { if (q === c) continue; const dx = q._p.x - p.x, dz = q._p.z - p.z, fr = dx * hx + dz * hz, lat = Math.abs(-dx * hz + dz * hx);
        const mesmaMao = Math.cos(q._p.ang - p.ang) > .5, colado = fr - (comp + (q.onibus ? 12 : 4.2)) / 2 < 1.2 && lat < 1.6;
        if (fr > 0 && fr < 30 && ((lat < 2.0 && mesmaMao) || colado)) { const folga = fr - (comp + (q.onibus ? 12 : 4.2)) / 2 - 2.0; alvo = Math.min(alvo, Math.sqrt(2 * FREIO * Math.max(0, folga)) + Math.min(q.v, Math.max(0, folga))); } }
      // gente atravessando a rua na frente: o carro para
      for (const A of C.andantes) { if (A.calcada || A.desligado) continue; const q = A.pos(t); const dx = q[0] - p.x, dz = q[1] - p.z, fr = dx * hx + dz * hz, lat = Math.abs(-dx * hz + dz * hx); if (fr > 0 && fr < 16 && lat < 2.4) alvo = Math.min(alvo, Math.sqrt(2 * FREIO * Math.max(0, fr - comp / 2 - 1.8))); }
      if (c.onibus) { for (const pt of C.pontosOnibus || []) { const d = (pt[0] - p.x) * hx + (pt[1] - p.z) * hz; const fase = ((t + 400) % 90); if (Math.hypot(pt[0] - p.x, pt[1] - p.z) < 16 && d > -1 && fase < 9) alvo = Math.min(alvo, Math.sqrt(2 * FREIO * Math.max(0, d))); } }
      c.v += Math.max(-7 * DT, Math.min(2.4 * DT, alvo - c.v)); c.v = Math.max(0, c.v); }
    for (const c of carros) c.s += c.v * DT;
  };
  const ate = (t) => { while (tSim < t) { hist.push(estado()); passo(tSim); tSim += DT; } };
  const estadoEm = (t) => { ate(t + DT); const k = (t + 30) / DT, i = Math.max(0, Math.min(hist.length - 2, Math.floor(k))), u = k - i; return hist[i].map((a, n) => [a[0] + (hist[i + 1][n][0] - a[0]) * u, a[1]]); };
  C.pontosOnibus = [[-10, 2.5], [96.6 - 2, -30]];
  // modelos
  const objs = carros.map((c) => {
    const g = c.onibus ? onibusParado('#2E9C6A', 'CIRCULAR - CENTRO') : carro(c.cor, c.id);
    const rodas = []; g.traverse(m => { if (m.userData.roda) { m.userData.vivo = true; rodas.push(m); } });
    const f = fundir(g); f.userData.rodas = []; f.traverse(m => { if (m.userData.roda) f.userData.rodas.push(m); });
    f.traverse(m => { if (m.material && m.material.emissive && m.material.color && m.material.color.getHexString() === 'fff6d8') { C.acender(m.material, 2.5); } });
    C.cena.add(f); return f; });
  C.vivos.push((t) => { const E = estadoEm(t); E.forEach(([s, v], n) => { const c = carros[n], p = amostra(ROTAS[c.r], s), g = objs[n]; g.position.set(p.x, 0, p.z); g.rotation.y = p.ang; for (const r of g.userData.rodas) r.rotation.x = s / .34; }); });
  C.carros_debug = (t) => { ate(t); return { carros: carros.map(c => ({ id: c.id, r: c.r, x: +c._p.x.toFixed(1), z: +c._p.z.toFixed(1), v: +c.v.toFixed(2), ang: +c._p.ang.toFixed(2) })), reserva: [...reserva] }; };
  C.carros = { pos: (n, t) => { const E = estadoEm(t); const p = amostra(ROTAS[carros[n].r], E[n][0]); return [p.x, p.z, p.ang]; }, n: carros.length, objs };

  // ---------------- PEDESTRES NAS CALÇADAS ----------------
  const nPed = o.pedestres ?? 16; const peds = [];
  const quadras = []; for (let c = 0; c < 5; c++) for (let l = 0; l < 4; l++) quadras.push([qx(c), qz(l)]);
  quadras.sort((a, b) => Math.hypot(a[0] - foco[0], a[1] - foco[1]) - Math.hypot(b[0] - foco[0], b[1] - foco[1]));
  for (let i = 0; i < nPed; i++) {
    const [cx, cz] = quadras[i % Math.min(5, quadras.length)], sentido = i % 2 ? 1 : -1, r = sentido > 0 ? 23.7 : 22.8;
    const k = povo(i + 3); k.root.scale.setScalar(.9 + (i % 4) * .04); C.cena.add(k.root); k.seed = i;
    const per = 8 * r, vel = 1.0 + (i % 5) * .08, s0 = (i * 37.3) % per;
    const base = (s, rr) => { s = ((s % per) + per) % per; const lado = Math.floor(s / (2 * r)), u = (s % (2 * r)) - r; const P = [[u, -rr], [rr, u], [-u, rr], [-rr, -u]][lado]; return [cx + P[0], cz + P[1]]; };
    // desvio: onde a calçada tem algo (ponto de ônibus, poste...), a pessoa passa um pouco para o lado
    const N = Math.ceil(per / .5), off = new Float32Array(N);
    for (let n = 0; n < N; n++) { const s = n * .5; if (C.livre(...base(s, r), .3)) continue; for (const d of [-.5, .5, -1, 1, -1.5, 1.5, -2]) { if (r + d > 24.4 || r + d < 22.2) continue; if (C.livre(...base(s, r + d), .3)) { off[n] = d; break; } } }
    const suave = new Float32Array(N); for (let n = 0; n < N; n++) { let m = 0; for (let k = -6; k <= 6; k++) { const v = off[(n + k + N) % N]; if (Math.abs(v) > Math.abs(m)) m = v * (1 - Math.abs(k) / 7); } suave[n] = m; }
    const onde = (s) => { s = ((s % per) + per) % per; const f = s / .5, n0 = Math.floor(f) % N, n1 = (n0 + 1) % N, u = f - Math.floor(f); return base(s, r + suave[n0] * (1 - u) + suave[n1] * u); };
    const A = { pos: (t) => onde(s0 + sentido * vel * t), desligado: false, calcada: true }; C.andantes.push(A);
    const desvia = (p, t) => { for (const A of C.andantes) { if (A.calcada || A.desligado) continue; const o = A.pos(t), dx = p[0] - o[0], dz = p[1] - o[1], d = Math.hypot(dx, dz); if (d < 1.4 && d > 1e-4) { const f = (1.4 - d) / d; p = [p[0] + dx * f, p[1] + dz * f]; } } return p; }; // abre espaço para quem está andando
    C.vivos.push((t) => { const p = desvia(onde(s0 + sentido * vel * t), t), q = onde(s0 + sentido * vel * (t + .4)); k.place(p[0], p[1], MEIOFIO, Math.atan2(q[0] - p[0], q[1] - p[1])); k.pose(walk(t + i, 1.7, .9)); k.face({ emo: 'neutro', blink: (t * .37 + i * .13) % 1 < .04 ? 1 : 0 }); });
    peds.push(k); C._perto.push(k);
  }
  // ---------------- FIGURANTES (só perto da câmera) ----------------
  const lista = (C.figurantes || []).filter(F => F.nivel === 'perto').sort((a, b) => Math.hypot(a.x - foco[0], a.z - foco[1]) - Math.hypot(b.x - foco[0], b.z - foco[1]));
  let nf = 0; for (const F of lista) { if (nf >= (o.figurantes ?? 30)) break; nf++;
    const k = povo(nf * 5 + 1, F.roupa || {}); k.seed = nf; C.cena.add(k.root);
    if (F.sentado) { k.place(F.x, F.z, F.y + (F.assento ?? .46) - .28, F.ry); k.sombra.visible = false; } else k.place(F.x, F.z, F.y, F.ry); C._perto.push(k);
    C.vivos.push((t) => { if (F.sentado) k.pose({ ...sentado, ...(F.pose || {}), headX: Math.sin(t * .7 + nf) * 3 }); else k.pose({ ...idle(t, nf), ...(F.pose || {}) }); k.face({ emo: F.emo || 'neutro', blink: (t * .41 + nf * .17) % 1 < .04 ? 1 : 0, look: [Math.sin(t * .3 + nf) * .6, 0] }); });
  }
  // ---------------- PASSARINHOS ----------------
  const bando = new THREE.Group(); const aves = [];
  for (let i = 0; i < 9; i++) { const a = new THREE.Group(); a.add(sph(.12, '#2A2A30', 0, 0, 0, { seg: 6 })); for (const s of [-1, 1]) { const asa = bx(.36, .02, .14, '#2A2A30', s * .2, 0, 0); asa.userData.s = s; a.add(asa); } bando.add(a); aves.push(a); }
  C.cena.add(bando);
  C.vivos.push((t) => { const a0 = t * .12; bando.position.set(foco[0] + Math.cos(a0) * 35, 24 + Math.sin(t * .3) * 3, foco[1] + Math.sin(a0) * 35); bando.rotation.y = -a0;
    aves.forEach((a, i) => { a.position.set((i % 3) * 1.6 - 1.6, Math.sin(t + i) * .4, Math.floor(i / 3) * 1.4); a.children.forEach(c => { if (c.userData.s) c.rotation.z = c.userData.s * Math.sin(t * 14 + i) * .6; }); }); });
  // ---------------- CACHORRO da casa da família ----------------
  const cf = C.pontos['casaFamilia.quintal']; if (cf && perto(cf.x, cf.z, 120)) { const d = cachorro(); C.cena.add(d.g);
    C.vivos.push((t) => { const fase = (t % 16) / 16, a = fase * Math.PI * 2; const ox = Math.cos(a) * 1.6, oz = Math.sin(a) * .7; const ry0 = cf.ry; const cs = Math.cos(ry0), sn = Math.sin(ry0);
      d.g.position.set(cf.x + ox * cs + oz * sn, MEIOFIO + .02, cf.z - ox * sn + oz * cs); d.g.rotation.y = ry0 + Math.atan2(-Math.sin(a) * 1.6, Math.cos(a) * .7) + Math.PI / 2; d.anda(t); }); }
}

/** Cachorro caramelo (o vira-lata da família). */
export function cachorro(cor = '#C98A4A') {
  const g = new THREE.Group(); const corpo = new THREE.Group(); g.add(corpo);
  corpo.add(rb(.62, .3, .28, cor, 0, .42, 0, { out: .012, r: .12 })); const cab = new THREE.Group(); cab.position.set(.38, .62, 0); corpo.add(cab);
  cab.add(rb(.26, .24, .24, cor, 0, 0, 0, { out: .012, r: .1 })); cab.add(rb(.14, .11, .14, '#E8C090', .15, -.05, 0, { out: .01, r: .05 })); cab.add(sph(.03, '#1B1420', .23, -.01, 0)); for (const s of [-1, 1]) { cab.add(sph(.025, '#1B1420', .1, .05, s * .07)); const o = rb(.06, .14, .1, '#8E5A2A', -.02, .13, s * .1, { r: .03 }); o.rotation.x = s * .3; cab.add(o); }
  const rabo = new THREE.Group(); rabo.position.set(-.3, .5, 0); rabo.add(cyl(.025, .035, .26, cor, 0, .12, 0, { seg: 6 })); rabo.rotation.z = .6; corpo.add(rabo);
  const pernas = []; for (const [x, z] of [[.2, .09], [.2, -.09], [-.2, .09], [-.2, -.09]]) { const p = new THREE.Group(); p.position.set(x, .32, z); p.add(cyl(.04, .035, .3, cor, 0, -.15, 0, { seg: 6 })); corpo.add(p); pernas.push(p); }
  return { g, anda: (t) => { rabo.rotation.x = Math.sin(t * 14) * .5; pernas.forEach((p, i) => p.rotation.z = Math.sin(t * 8 + (i % 2 ? 0 : Math.PI) + (i > 1 ? Math.PI : 0)) * .4); corpo.position.y = Math.abs(Math.sin(t * 8)) * .02; cab.rotation.z = Math.sin(t * 2) * .08; } };
}
