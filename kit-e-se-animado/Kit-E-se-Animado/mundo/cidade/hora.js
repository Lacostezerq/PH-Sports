// Hora do dia: céu, sol, cor da luz, neblina, postes e janelas acesas à noite.
import * as THREE from 'three';
import { clamp, lerp, smooth } from '../base/core.js';

const C3 = (h) => new THREE.Color(h);
// paleta por hora: [hora, topo do céu, horizonte, luz do sol, intensidade sol, céu (hemi), chão (hemi), hemi]
const PAL = [
  [0, '#0B1430', '#1E2C55', '#7F93D6', .35, '#4A5B92', '#2A2A3A', .55],
  [5, '#1A2350', '#5A4E7A', '#9A8AC8', .4, '#5A6292', '#3A3446', .6],
  [6.3, '#5E8CC8', '#F4B48A', '#FFB078', 1.4, '#C8C8E8', '#8E7C70', 1.0],
  [8, '#6FB4EC', '#CBE8F7', '#FFF0D8', 2.1, '#EAF2FF', '#C9BCAE', 1.4],
  [12, '#5FAEEB', '#D2ECF8', '#FFF6E8', 2.4, '#EAF2FF', '#C9BCAE', 1.5],
  [16, '#68AEE6', '#DCEBF2', '#FFE8C8', 2.2, '#EAF0FF', '#C9BCAE', 1.4],
  [17.6, '#7A9CD6', '#F7B27A', '#FFAE66', 1.7, '#E0C8D8', '#A08070', 1.15],
  [18.4, '#4A5C9E', '#E8806A', '#F2865A', 1.0, '#9A88B8', '#6A5262', .85],
  [19.3, '#1C2556', '#4A3E6E', '#8A86C8', .45, '#5A6292', '#3A3446', .62],
  [24, '#0B1430', '#1E2C55', '#7F93D6', .35, '#4A5B92', '#2A2A3A', .55],
];
function paleta(h) {
  h = ((h % 24) + 24) % 24; let i = 1; while (i < PAL.length - 1 && PAL[i][0] < h) i++;
  const a = PAL[i - 1], b = PAL[i], u = clamp((h - a[0]) / (b[0] - a[0]));
  const mix = (k) => C3(a[k]).lerp(C3(b[k]), u);
  return { topo: mix(1), hor: mix(2), sol: mix(3), si: lerp(a[4], b[4], u), hs: mix(5), hc: mix(6), hi: lerp(a[7], b[7], u) };
}
/** Quanto é noite (0 = dia, 1 = noite fechada). */
export const noite = (h) => { h = ((h % 24) + 24) % 24; return h < 12 ? 1 - smooth(5.2, 6.6, h) : smooth(17.8, 19.2, h); };

export function montarHora(C, o) {
  const c = C.cena;
  // cúpula do céu (degradê + sol + estrelas)
  const U = { topo: { value: C3('#5FAEEB') }, hor: { value: C3('#D2ECF8') }, sol: { value: new THREE.Vector3(0, 1, 0) }, corSol: { value: C3('#FFF6E8') }, noite: { value: 0 } };
  const ceu = new THREE.Mesh(new THREE.SphereGeometry(1800, 32, 16), new THREE.ShaderMaterial({ uniforms: U, side: THREE.BackSide, depthWrite: false, fog: false,
    vertexShader: 'varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `varying vec3 vP;uniform vec3 topo,hor,corSol,sol;uniform float noite;
      float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
      void main(){float y=max(vP.y,0.);vec3 c=mix(hor,topo,pow(y,.55));if(vP.y<0.)c=hor*.9;
        float d=max(dot(vP,normalize(sol)),0.);c+=corSol*(pow(d,900.)*2.5+pow(d,12.)*.25)*(1.-noite*.7);
        vec3 q=floor(vP*260.);float s=step(.997,h(q))*noite*smoothstep(.05,.3,y);c+=vec3(s);
        gl_FragColor=vec4(pow(c,vec3(1./2.2))*0.+c,1.);}` }));
  ceu.renderOrder = -10; ceu.frustumCulled = false; c.add(ceu); C.ceu = ceu;
  c.background = null;
  const hemi = new THREE.HemisphereLight('#EAF2FF', '#B9A898', 1.5); c.add(hemi);
  const amb = new THREE.AmbientLight('#FFF4E6', 0); c.add(amb);
  /** Liga uma luz extra para cenas dentro de casa/loja (deixa paredes e teto claros como no desenho). */
  C.luzDentro = (v = 1) => { C._dentro = v; acerta(); };
  const acerta = () => { const n = C.n || 0, v = C._dentro || 0; amb.intensity = v * (.75 + n * 1.1); amb.color.set(n > .5 ? '#FFE2B8' : '#FFF4E6'); };
  const sol = new THREE.DirectionalLight('#FFF6E8', 2.4); sol.castShadow = true; c.add(sol); c.add(sol.target);
  const R = o.sombra || 45; sol.shadow.mapSize.set(4096, 4096); Object.assign(sol.shadow.camera, { left: -R, right: R, top: R, bottom: -R, near: 1, far: 600 }); sol.shadow.bias = -.0005; sol.shadow.normalBias = .03; sol.shadow.radius = 3;
  c.fog = new THREE.Fog('#D2ECF8', o.neblina?.[0] ?? 260, o.neblina?.[1] ?? 1500);
  // luzes de poste perto da câmera (só as mais próximas, para ficar leve)
  const pts = []; for (let i = 0; i < 6; i++) { const p = new THREE.PointLight('#FFD98A', 0, 22, 1.6); c.add(p); pts.push(p); }
  C.luz = { hemi, sol, pts };
  C.hora = (h) => {
    C.h = h; const P = paleta(h), n = noite(h); C.n = n;
    U.topo.value.copy(P.topo); U.hor.value.copy(P.hor); U.corSol.value.copy(P.sol); U.noite.value = n;
    // sol: nasce no leste (+x) às 6h, se põe no oeste às 18h; um pouco ao norte (hemisfério sul)
    const a = (h - 6) / 12 * Math.PI; const alt = Math.sin(a), sd = new THREE.Vector3(Math.cos(a) * .9, Math.max(alt, .12) * 1.1, .38).normalize();
    U.sol.value.copy(sd.y > 0 && alt > -.1 ? sd : new THREE.Vector3(-.3, .6, .3)); // à noite a "luz" vira a lua
    hemi.color.copy(P.hs); hemi.groundColor.copy(P.hc); hemi.intensity = P.hi; sol.color.copy(P.sol); sol.intensity = P.si;
    C._solDir = alt > -.1 ? sd : new THREE.Vector3(-.35, .8, .4).normalize();
    c.fog.color.copy(P.hor);
    for (const [m, f] of C._acesos) m.emissiveIntensity = f * n;
    acerta();
    for (const f of C._noiteFn) f(n, h);
    if (C.matNuvem) { C.matNuvem.color.copy(P.hor).lerp(C3('#FFFFFF'), .55 - n * .4); C.matNuvem.emissive.copy(P.hor); C.matNuvem.emissiveIntensity = .3; }
  };
  /** Move a sombra e as luzes de poste para perto de onde a câmera está olhando. */
  C.focar = (x, z) => {
    const d = C._solDir || new THREE.Vector3(.5, .8, -.3); sol.target.position.set(x, 0, z); sol.position.set(x + d.x * 200, d.y * 200, z + d.z * 200);
    const lista = C.postes.map(p => [p, (p[0] - x) ** 2 + (p[2] - z) ** 2]).sort((a, b) => a[1] - b[1]);
    pts.forEach((pl, i) => { const p = lista[i]?.[0]; if (!p) return; pl.position.set(p[0], p[1] - .3, p[2]); pl.intensity = (C.n || 0) * 40; });
  };
}
