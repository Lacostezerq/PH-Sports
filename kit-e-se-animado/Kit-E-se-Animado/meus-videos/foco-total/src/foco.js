// Efeito Foco: o mundo fica cinza (ou dourado) e só o que está em foco continua colorido, com uma borda branca pulsando.
// Funciona trocando o fim do shader de todos os materiais: cada material lê um "quanto cinza" (mundo ou foco).
import * as THREE from 'three';
import { outlineMat } from './motor/toon.js';

/** Quanto o mundo está cinza (0..1), quanto está dourado (0..1) e quanto o que está em foco está cinza (efeito ao contrário). */
export const UF = { mundo: { value: 0 }, ouro: { value: 0 }, alvo: { value: 0 }, claro: { value: 0 } };

const FIM = `{ float l_ = dot(gl_FragColor.rgb, vec3(.2126,.7152,.0722));
  vec3 cinza_ = vec3(l_) * .7 + .08;
  vec3 ouro_ = vec3(l_) * vec3(1.08, .84, .46) + vec3(.07, .04, .0);
  vec3 alvo_ = mix(cinza_, ouro_, uOuro);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, alvo_, uCinza); }
#include <dithering_fragment>`;

function patch(m, qual) {
  if (!m || m.userData.fpOk === m.uuid || m.isShaderMaterial || m.isRawShaderMaterial || m.isLineBasicMaterial) return;
  if (m.userData.fp && m.userData.fp !== qual && m.userData.fpOk === m.uuid) return; m.userData.fp = m.userData.fp === 'alvo' ? 'alvo' : qual; qual = m.userData.fp; m.userData.fpOk = m.uuid;
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uCinza = qual === 'alvo' ? UF.alvo : UF.mundo; sh.uniforms.uOuro = qual === 'alvo' ? UF.claro : UF.ouro;
    sh.fragmentShader = 'uniform float uCinza; uniform float uOuro;\n' + sh.fragmentShader.replace('#include <dithering_fragment>', FIM);
  };
  m.customProgramCacheKey = () => 'foco-' + qual;
  m.needsUpdate = true;
}

/** Marca objetos como "em foco": os materiais deles viram cópias próprias e ganham a borda branca. Chame antes de focoCena. */
export function emFoco(objs, o = {}) {
  const borda = outlineMat(o.borda ?? .03, o.cor || '#FFFFFF', 3.2).clone(); borda.uniforms.res.value.set(1920, 1080);
  const bordas = [];
  for (const obj of [].concat(objs)) {
    const malhas = []; obj.traverse((n) => { if (n.isMesh && !n.userData.isOutline && !n.userData.borda) malhas.push(n); });
    for (const n of malhas) {
      n.material = [].concat(n.material).map((m) => { if (m.userData.fp === 'alvo' && m.userData.fpOk === m.uuid) return m; const c = m.clone(); c.userData = { ...m.userData }; c.userData.fp = 'alvo'; delete c.userData.fpOk; patch(c, 'alvo'); return c; });
      if (n.material.length === 1) n.material = n.material[0];
      if (o.semBorda || n.isSkinnedMesh || (n.material.transparent && !n.material.alphaTest)) continue;
      if (n.geometry && n.geometry.attributes.normal && !n.userData.semBorda) { const b = new THREE.Mesh(n.geometry, borda); b.userData.isOutline = true; b.userData.borda = true; b.renderOrder = -1; n.add(b); bordas.push(b); }
    }
  }
  /** Liga/desliga a borda (k de 0 a 1) com pulso. */
  const set = (k, t = 0) => { const on = k > .02; for (const b of bordas) b.visible = on; borda.uniforms.w.value = (o.borda ?? .03) * k * (.75 + .25 * Math.sin(t * 6)); };
  set(0); return set;
}

/** Aplica o efeito em todos os materiais da cena (os do foco já foram marcados). Chame no fim da montagem da cena. */
export function focoCena(c) { c.traverse((n) => { if ((n.isMesh || n.isSprite || n.isPoints) && !n.userData.isOutline) for (const m of [].concat(n.material)) patch(m, 'mundo'); }); }

/** Fundo da cena acompanha o cinza/dourado. */
export function fundo(c, cor, k, ouro = 0) {
  const a = new THREE.Color(cor); const l = a.r * .2126 + a.g * .7152 + a.b * .0722;
  const g = new THREE.Color(l * .7 + .08, l * .7 + .08, l * .7 + .08), d = new THREE.Color(l * 1.08 + .07, l * .84 + .04, l * .46);
  g.lerp(d, ouro); c.background = a.clone().lerp(g, k);
}

/** Zera os uniformes (cada plano define os seus). */
export function focoZera() { UF.mundo.value = 0; UF.ouro.value = 0; UF.alvo.value = 0; UF.claro.value = 0; }
