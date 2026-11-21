// Não precisa mexer: carrega as cenas de cenas.js e desenha cada quadro no tempo pedido pelo HyperFrames.
import { Stage } from '../../../mundo/base/core.js';
import { CENAS } from './cenas.js';
window.__hf = window.__hf || {}; window.__hf.buildReady = window.__hf.buildReady || {};
window.__hf.buildReady.film = (async () => {
  await Promise.all(["900 40px Fraunces", "700 40px Caveat", "700 40px Inter", "800 40px Inter"].map(f => document.fonts.load(f))).catch(() => {});
  const st = new Stage(document.getElementById('film3d'));
  for (const c of CENAS) st.add(c);
  window.addEventListener('hf-seek', (e) => st.render(e.detail.time)); st.render(0);
})();
