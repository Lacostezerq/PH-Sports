// Camada de tela própria deste vídeo: frase da abertura que quebra como vidro, contador de força (dia + kg, "tum" e tremida),
// silhuetas de comparação, contagem 3-2-1, contador de tentativas, rebobinar (VHS) e o mundo de papel.
const fmt = (n) => '\u200B' + n.toLocaleString('pt-BR'); // caractere invisível: impede o GSAP de ler "204.800" como o número 204.8
// [instante, dia, kg]
export const FORCA = [[4.3, 12, 204800], [42, 0, 50], [104.2, 0, 100], [108, 1, 100], [152, 2, 200], [176, 3, 400], [222, 4, 800], [290, 5, 1600], [330, 6, 3200], [360, 7, 6400], [390, 8, 12800],
  [440, 9, 25600], [452, 10, 51200], [500, 11, 102400], [560, 12, 204800], [620, 14, 819200], [650, 15, 1638400], [660, 16, 3276800], [670, 17, 6553600], [754, 20, 52428800], [806, 20, 52428800]];
// janelas em que o contador aparece
const JANELAS = [[4.3, 38.6], [38.6, 42], [42, 92], [102.6, 108], [108, 320.4], [330, 489.4], [489.4, 800], [806, 810.3]];
// silhuetas: [início, fim, tipo, legenda]
const SIL = [[71.4, 77, 'cimento', 'SACO DE CIMENTO · 50 kg'], [347.6, 355, 'carros', '3 CARROS POPULARES'], [360.6, 368, 'elefante', 'UM ELEFANTE · 6 t'], [636.8, 643, 'cristo', 'CRISTO REDENTOR · 635 t'], [754, 762, 'titanic', 'TITANIC · 52 mil t']];
const TENT = [[510.4, 1], [513.6, 2], [514.8, 3], [515.9, 4], [517.6, 10], [521.6, 18], [525, 25], [528.6, 30], [532.6, 38], [536.6, 44], [540.6, 47]];
const SVG = {
  cimento: '<svg viewBox="0 0 220 160"><path d="M30 30 Q110 10 190 30 L200 135 Q110 152 20 135Z" fill="#E8E2D4"/><path d="M30 30 Q110 10 190 30" stroke="#B8B0A0" stroke-width="6" fill="none"/><text x="110" y="95" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="#5A5246">CIMENTO</text><text x="110" y="125" text-anchor="middle" font-family="Inter" font-weight="800" font-size="22" fill="#8A8070">50 kg</text></svg>',
  carro: '<path d="M8 70 L20 46 Q30 30 52 30 L108 30 Q124 30 136 46 L152 58 Q170 60 172 74 L172 86 L8 86Z" fill="#E8E2D4"/><circle cx="44" cy="88" r="15" fill="#E8E2D4" stroke="#0E1422" stroke-width="6"/><circle cx="136" cy="88" r="15" fill="#E8E2D4" stroke="#0E1422" stroke-width="6"/><path d="M34 50 L46 36 L78 36 L78 52Z M86 36 L110 36 L126 52 L86 52Z" fill="#0E1422"/>',
  elefante: '<svg viewBox="0 0 220 160"><path d="M40 60 Q40 20 100 20 Q170 18 178 70 L182 128 L160 128 L156 100 L120 102 L118 130 L96 130 L94 100 Q70 100 66 110 Q66 132 54 140 Q40 140 46 120 Q50 100 40 88 Q22 84 20 104 L12 104 Q12 70 40 60Z" fill="#E8E2D4"/><circle cx="62" cy="52" r="5" fill="#0E1422"/><path d="M78 40 Q100 30 112 60 Q100 80 80 70Z" fill="#CFC8BA"/></svg>',
  cristo: '<svg viewBox="0 0 220 160"><path d="M104 20 a10 10 0 1 1 12 0 L118 34 L200 42 L200 52 L124 54 L128 120 L134 150 L86 150 L92 120 L96 54 L20 52 L20 42 L102 34Z" fill="#E8E2D4"/><path d="M60 150 L160 150 L150 140 L70 140Z" fill="#CFC8BA"/></svg>',
  titanic: '<svg viewBox="0 0 260 160"><path d="M10 96 L250 96 L230 130 L28 130Z" fill="#E8E2D4"/><rect x="40" y="72" width="170" height="24" fill="#CFC8BA"/>' + [70, 105, 140, 175].map((x) => `<rect x="${x}" y="34" width="18" height="40" fill="#E8E2D4"/><rect x="${x}" y="34" width="18" height="10" fill="#0E1422"/>`).join('') + '<path d="M0 138 Q30 130 60 138 T120 138 T180 138 T260 138 L260 160 L0 160Z" fill="#3EA6FF66"/></svg>',
};
SVG.carros = `<svg viewBox="0 0 560 120">${[0, 190, 380].map((x) => `<g transform="translate(${x},10)">${SVG.carro}</g>`).join('')}</svg>`;

export function forcaUI() {
  const H = [], J = [], R = [];
  // ---------- abertura: a frase aparece letra por letra, racha no meio como vidro e cai em pedaços ----------
  const frase = 'E se a sua força dobrasse todo dia?'; const letras = [...frase].map((ch, i) => `<span class="abl" id="abl${i}">${ch === ' ' ? '&nbsp;' : ch}</span>`).join('');
  const P = [[0, 0, 22, 0, 18, 55, 0, 60], [22, 0, 48, 0, 40, 48, 18, 55], [48, 0, 72, 0, 64, 52, 40, 48], [72, 0, 100, 0, 100, 50, 64, 52], [0, 60, 18, 55, 26, 100, 0, 100], [18, 55, 40, 48, 52, 100, 26, 100], [40, 48, 64, 52, 74, 100, 52, 100], [64, 52, 100, 50, 100, 100, 74, 100]];
  const cacos = P.map((q, k) => `<div class="abc" id="abc${k}" style="clip-path:polygon(${q[0]}% ${q[1]}%,${q[2]}% ${q[3]}%,${q[4]}% ${q[5]}%,${q[6]}% ${q[7]}%)"><div class="abt">${frase}</div></div>`).join('');
  H.push(`<div id="abre" class="clip abre" data-start="0" data-duration="4.05"><div class="abw"><div class="abt" id="abtx">${letras}</div><div id="abcacos" style="opacity:0">${cacos}</div><svg id="abrach" class="abr" viewBox="0 0 1600 200"><path d="M10 120 L180 96 L260 130 L420 88 L520 118 L700 80 L820 112 L980 74 L1100 110 L1260 84 L1400 116 L1590 92" stroke="#FFFFFF" stroke-width="5" fill="none"/><path d="M420 88 L440 40 M700 80 L690 150 M980 74 L1010 20 M1260 84 L1240 160" stroke="#FFFFFFAA" stroke-width="3" fill="none"/></svg></div></div>`);
  [...frase].forEach((ch, i) => J.push(`tl.fromTo("#abl${i}",{opacity:0,y:10},{opacity:1,y:0,duration:.08},${(.25 + i * .05).toFixed(3)});`));
  J.push(`tl.fromTo("#abrach",{opacity:0,clipPath:"inset(0 100% 0 0)"},{opacity:1,clipPath:"inset(0 0% 0 0)",duration:.18,ease:"none"},3.0);tl.set("#abtx",{opacity:0},3.25);tl.set("#abcacos",{opacity:1},3.25);tl.to("#abrach",{opacity:0,duration:.15},3.3);`);
  P.forEach((q, k) => { const dx = (k % 4 - 1.5) * 60, rot = (k % 2 ? 1 : -1) * (18 + k * 7); J.push(`tl.to("#abc${k}",{x:${dx},y:${700 + k * 30},rotation:${rot},opacity:0,duration:.75,ease:"power2.in"},${(3.28 + (k % 4) * .03).toFixed(3)});`); });
  // ---------- contador de força ----------
  H.push(`<div id="cf" class="clip cf" data-start="0" data-duration="840"><div class="cfb" id="cfb"><div class="cfd" id="cfd">DIA 12</div><div class="cfn"><span id="cfn">204.800</span><span class="cfu"> kg</span></div><div class="cfbar"><i id="cfbi"></i></div></div></div>`);
  J.push(`tl.set("#cfb",{opacity:0},0);`);
  for (const [a, b] of JANELAS) { J.push(`tl.to("#cfb",{opacity:1,duration:.25},${a});`); J.push(`tl.to("#cfb",{opacity:0,duration:.25},${(b - .25).toFixed(2)});`); }
  const nv = (kg) => Math.min(100, Math.log2(kg / 50) / Math.log2(52428800 / 50) * 100);
  FORCA.forEach(([t, d, kg], i) => {
    J.push(`tl.set("#cfd",{textContent:"DIA ${d}"},${t});tl.set("#cfn",{textContent:"${fmt(kg)}"},${t});tl.to("#cfbi",{width:"${nv(kg).toFixed(1)}%",duration:.4,ease:"back.out(2)"},${t});`);
    if (i > 0) J.push(`tl.fromTo("#cfb",{scale:1.28},{scale:1,duration:.45,ease:"back.out(3)"},${t});tl.to("#cf",{keyframes:[{x:-9,duration:.04},{x:8,duration:.04},{x:-6,duration:.04},{x:4,duration:.04},{x:-2,duration:.04},{x:0,duration:.05}]},${t});`);
  });
  // rebobinando: o número gira ao contrário até o dia 0
  for (let k = 0; k <= 32; k++) { const tt = 38.7 + k * .1; const kg = Math.round(204800 * Math.pow(50 / 204800, Math.pow(k / 32, 1.6))); J.push(`tl.set("#cfn",{textContent:"${fmt(kg)}"},${tt.toFixed(2)});tl.set("#cfd",{textContent:"DIA ${Math.max(0, Math.round(Math.log2(kg / 50)))}"},${tt.toFixed(2)});`); }
  // no quarto escuro: o contador pisca (50 -> 100)
  J.push(`tl.fromTo("#cfb",{opacity:.25},{opacity:1,duration:.12,repeat:5,yoyo:true},103.0);`);
  // fim: aparece uma última vez e some com um tum
  J.push(`tl.to("#cfb",{scale:1.35,opacity:0,duration:.3,ease:"power2.in"},810.0);`);
  R.push({ id: 'contador', a: 0, b: 810.5, r: [1460, 30, 1880, 200] });
  // ---------- silhuetas de comparação (embaixo do contador) ----------
  SIL.forEach(([a, b, tipo, txt], i) => { const id = `sil${i}`; H.push(`<div id="${id}" class="clip silw" data-start="${a}" data-duration="${(b - a).toFixed(2)}"><div class="silb" id="${id}_b"><div class="sils">${SVG[tipo]}</div><div class="silt">= ${txt}</div></div></div>`);
    J.push(`tl.fromTo("#${id}_b",{opacity:0,x:60},{opacity:1,x:0,duration:.4,ease:"back.out(1.8)"},${a});tl.to("#${id}_b",{opacity:0,x:40,duration:.3},${(b - .3).toFixed(2)});`); });
  // ---------- 3, 2, 1 ----------
  [[193.5, '3'], [194.3, '2'], [195.1, '1']].forEach(([a, n], i) => { H.push(`<div id="cnt${i}" class="clip cnt" data-start="${a}" data-duration=".75">${n}</div>`); J.push(`tl.fromTo("#cnt${i}",{opacity:0,scale:2.2},{opacity:1,scale:1,duration:.25,ease:"back.out(2)"},${a});tl.to("#cnt${i}",{opacity:0,scale:.8,duration:.25},${a + .5});`); });
  // ---------- tentativas (canto de baixo) ----------
  H.push(`<div id="tt" class="clip tt" data-start="510.4" data-duration="42.6"><span class="tth">TENTATIVA</span> <span id="ttn" class="ttn">1</span></div>`);
  J.push(`tl.fromTo("#tt",{opacity:0,x:-30},{opacity:1,x:0,duration:.3},510.4);tl.to("#tt",{opacity:0,duration:.3},552.7);`);
  TENT.forEach(([t, n]) => J.push(`tl.set("#ttn",{textContent:"${n}"},${t});tl.fromTo("#ttn",{scale:1.6,color:"#FFD45A"},{scale:1,color:"${n === 47 ? '#7DF0A0' : '#FFFFFF'}",duration:.35,ease:"back.out(3)"},${t});`));
  R.push({ id: 'tentativas', a: 510.4, b: 553, r: [60, 780, 520, 870] });
  // ---------- rebobinar (VHS) ----------
  H.push(`<div id="vhs" class="clip vhs" data-start="38.6" data-duration="3.4"><div class="vhsl"></div><div class="vhst">◀◀ REBOBINANDO</div></div>`);
  J.push(`tl.fromTo("#vhs",{opacity:0},{opacity:1,duration:.15},38.6);tl.fromTo("#vhs .vhsl",{backgroundPositionY:"0px"},{backgroundPositionY:"600px",duration:3.4,ease:"none"},38.6);tl.to("#vhs",{opacity:0,duration:.2},41.8);tl.fromTo("#vhs .vhst",{opacity:1},{opacity:.3,duration:.25,repeat:12,yoyo:true},38.7);`);
  // ---------- mundo de papel (3 s) ----------
  H.push(`<div id="papel" class="clip papel" data-start="627.2" data-duration="3.2"><svg width="1920" height="1080"><filter id="amassa"><feTurbulence type="fractalNoise" baseFrequency=".012 .02" numOctaves="4" seed="7"/><feDiffuseLighting lighting-color="#FFF7E6" surfaceScale="9"><feDistantLight azimuth="225" elevation="48"/></feDiffuseLighting></filter><rect width="1920" height="1080" filter="url(#amassa)"/></svg></div>`);
  J.push(`tl.fromTo("#papel",{opacity:0},{opacity:.85,duration:.5},627.2);tl.to("#papel",{opacity:0,duration:.5},629.9);`);
  const css = `
.abre{position:absolute;inset:0;background:#000}
.abw{position:absolute;left:0;top:430px;width:1920px;height:200px}
.abt{position:absolute;left:0;top:0;width:1920px;text-align:center;font:900 92px Fraunces;color:#fff;letter-spacing:.005em;line-height:200px;white-space:nowrap}
.abl{display:inline-block}
.abc{position:absolute;left:0;top:0;width:1920px;height:200px}
.abr{position:absolute;left:160px;top:0;width:1600px;height:200px;filter:drop-shadow(0 0 6px #fff)}
.cf{position:absolute;right:40px;top:30px;width:400px;height:180px}
.cfb{position:absolute;right:0;top:0;width:400px;background:#0B0F18EE;border:3px solid #ffffff2e;border-radius:20px;padding:12px 22px 16px;box-shadow:0 10px 30px #0008;transform-origin:85% 30%}
.cfd{font:700 24px 'IBM Plex Mono';letter-spacing:.18em;color:#FFB43A}
.cfn{font:900 64px/1.05 Inter;color:#fff;letter-spacing:-.02em;white-space:nowrap;margin-top:2px}
.cfu{font:800 32px Inter;color:#C9C2B2}
.cfbar{height:10px;border-radius:5px;background:#ffffff18;margin-top:10px;overflow:hidden}
.cfbar i{display:block;height:100%;width:0;border-radius:5px;background:linear-gradient(90deg,#FFB43A,#FF5A3A)}
.silw{position:absolute;right:40px;top:232px;width:400px}
.silb{background:#0B0F18E6;border:3px solid #FFB43A66;border-radius:18px;padding:14px 18px 12px;text-align:center}
.sils svg{width:100%;height:130px}
.silt{font:800 24px Inter;color:#FFE7B8;margin-top:4px}
.cnt{position:absolute;left:0;top:300px;width:1920px;text-align:center;font:900 260px Fraunces;color:#fff;text-shadow:0 8px 0 #0008,0 0 40px #000a}
.tt{position:absolute;left:60px;top:790px;background:#0B0F18EE;border:3px solid #ffffff33;border-radius:18px;padding:10px 28px;display:flex;align-items:baseline;gap:16px}
.tth{font:700 28px 'IBM Plex Mono';letter-spacing:.16em;color:#C9C2B2}
.ttn{display:inline-block;font:900 64px Inter;color:#fff;min-width:80px}
.vhs{position:absolute;inset:0;pointer-events:none}
.vhsl{position:absolute;inset:0;background:repeating-linear-gradient(0deg,#ffffff00 0,#ffffff00 6px,#ffffff22 7px,#ffffff00 9px),linear-gradient(0deg,#ffffff00 0,#ffffff00 40%,#ffffff30 41%,#ffffff00 46%);mix-blend-mode:screen}
.vhst{position:absolute;left:60px;top:50px;font:900 54px 'IBM Plex Mono';color:#fff;text-shadow:3px 0 0 #E2443A,-3px 0 0 #3EA6FF}
.papel{position:absolute;inset:0;mix-blend-mode:multiply;pointer-events:none}
`;
  return { H, J, R, css };
}
