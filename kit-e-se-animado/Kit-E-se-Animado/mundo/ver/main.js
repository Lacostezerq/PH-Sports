// Prévia da cidade: abre ver.html?cx=..&cy=..&cz=..&tx=..&ty=..&tz=..&fov=..&hora=..&t=..  ou ?vista=nome  ou ?livre=1 (girar com o mouse)
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Stage, makeShot } from '../base/core.js';
import { FX } from '../base/toon.js';
import { montarCidade, VISTAS } from '../cidade/index.js';
import { GUI30 } from '../base/elenco.js';
import { makeChar3D } from '../base/char3d.js';
const q = new URLSearchParams(location.search), n = (k, d) => q.has(k) ? +q.get(k) : d;
const v = VISTAS[q.get('vista')] || null;
const cam = v ? v.cam : [n('cx', 60), n('cy', 40), n('cz', 60)], alvo = v ? v.alvo : [n('tx', 0), n('ty', 0), n('tz', 0)];
const t0 = performance.now();
const st = new Stage(document.getElementById('c'));
const s = makeShot(0, 1e6, '#BFE3F7', n('fov', v?.fov || 40)); s.camera.near = .1; s.camera.far = 3000; s.camera.updateProjectionMatrix();
const C = montarCidade(s.scene, { foco: q.has('fx') ? [n('fx'), n('fz')] : [alvo[0], alvo[2]], hora: n('hora', v?.hora ?? 15), raio: n('raio', 70), vida: q.get('vida') !== '0', dentro: q.has('dentro') ? q.get('dentro') === '1' : v?.dentro });
st.add(s); s.camera.position.set(...cam); s.camera.lookAt(...alvo);
if (q.get('andar')) { const k = makeChar3D(GUI30); s.scene.add(k.root); window.__rota = C.andar(k, q.get('andar').split(','), 0); }
if (q.get('checar')) { const raio = n('raio', 70), f = C.foco, perto = (p) => Math.hypot(p.x - f[0], p.z - f[1]) < raio * .8;
  const fig = (C.figurantes || []).filter(F => !F.sentado && F.nivel === 'perto' && !C.livre(F.x, F.z, .12)).map(F => [F.lote, +F.x.toFixed(1), +F.z.toFixed(1)]);
  const pts = Object.entries(C.pontos).filter(([k, p]) => perto(p) && !C.livre(p.x, p.z, .15)).map(([k]) => k);
  const rotas = []; const lista = (q.get('checar') === '1' ? [] : q.get('checar').split(','));
  for (let i = 0; i < lista.length - 1; i++) { const a = C.ponto(lista[i]), b = C.ponto(lista[i + 1]); const r = C.caminho(a, b); rotas.push([lista[i], lista[i + 1], r.falhou ? 'FALHOU' : 'ok', r.length]); }
  window.__check = { figurantesPresos: fig, pontosPresos: pts, rotas }; }
let info = 0; s.scene.traverse(o => { if (o.isMesh) info++; });
const T = n('t', 10);
s.update = (t) => { C.atualizar(t, s.camera); return FX({}); };
if (q.get('livre')) { const oc = new OrbitControls(s.camera, st.r.domElement); oc.target.set(...alvo); oc.update(); let t = T; const go = () => { t += 1 / 30; st.render(t); requestAnimationFrame(go); }; go(); }
else { st.render(T); }
window.__info = { check: window.__check, malhas: info, colisores: C.colisores.length, ms: Math.round(performance.now() - t0), draw: st.r.info.render.calls, tri: st.r.info.render.triangles };
window.pronto = true;
