// Camada de tela de "E se você focasse 100%": cards de dia, fichas de nome, contador de vibração, flashes da abertura,
// rebobinar, 40 MIN, infográfico dos 11 minutos, círculo + 📌, timers, barra CARREGANDO, etiquetas, contadores, fichas de chefão,
// regra, CAMPEÃO, frases finais.
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
export function focoUI() {
  const H = [], J = [], R = []; let n = 0; const id = (p) => `${p}${n++}`;
  const fadeIn = (sel, a, from = '{opacity:0,y:-20}', to = '{opacity:1,y:0,duration:.35,ease:"back.out(2)"}') => J.push(`tl.fromTo("${sel}",${from},${to},${a});`);
  const fadeOut = (sel, b, d = .3) => J.push(`tl.to("${sel}",{opacity:0,duration:${d}},${(b - d).toFixed(2)});`);
  const clip = (cls, a, b, inner, style = '') => { const i = id(cls); H.push(`<div id="${i}" class="clip ${cls}" data-start="${a}" data-duration="${(b - a).toFixed(2)}" style="${style}">${inner}</div>`); return i; };

  // ---------- card de dia (canto superior esquerdo, com "tic") ----------
  const DIAS = [[35.96, 'DIA 0'], [128.96, 'DIA 1'], [234.68, 'DIA 2'], [318.38, 'DIA 3'], [367.28, 'DIA 4'], [443.52, 'DIA 5'], [492.32, 'DIA 6'], [530.8, 'DIA 7', '10:00']];
  DIAS.forEach(([a, txt, sub]) => { const b = a + 4.2; const i = clip('dia', a, b, `<div class="diab"><span class="diar">◷</span><span class="diat">${txt}</span>${sub ? `<span class="dias">– ${sub}</span>` : ''}</div>`);
    J.push(`tl.fromTo("#${i} .diab",{opacity:0,rotationX:-90,transformOrigin:"50% 0%"},{opacity:1,rotationX:0,duration:.4,ease:"back.out(2)"},${a});tl.fromTo("#${i} .diar",{rotation:-90},{rotation:0,duration:.5,ease:"back.out(3)"},${a});`); fadeOut(`#${i} .diab`, b); R.push({ id: 'dia', a, b, r: [50, 40, 520, 130] }); });

  // ---------- abertura ----------
  { const i = clip('big', 5.2, 8.6, `<span class="bigt" style="font-size:230px">7 DIAS</span>`); J.push(`tl.fromTo("#${i} .bigt",{scale:2.4,opacity:0},{scale:1,opacity:1,duration:.22,ease:"power4.in"},5.2);tl.to("#${i} .bigt",{keyframes:[{x:-14,duration:.04},{x:12,duration:.04},{x:-6,duration:.04},{x:0,duration:.04}]},5.42);`); fadeOut(`#${i} .bigt`, 8.6); }
  // contador de vibração (abertura e final)
  const vibra = (a, b, marcas, top = 420) => { const i = clip('vib', a, b, `<div class="vibb"><span class="vibi">📳</span><span class="vibn" id="vn${n}">0</span><span class="vibx">×</span></div>`, `top:${top}px`); const nid = `vn${n - 1}`;
    fadeIn(`#${i} .vibb`, a, '{opacity:0,scale:.5}', '{opacity:1,scale:1,duration:.3,ease:"back.out(2)"}'); marcas.forEach(([t, v]) => J.push(`tl.set("#${nid}",{textContent:"${v}"},${t});tl.fromTo("#${i} .vibb",{x:-10},{x:0,duration:.25,ease:"elastic.out(3,.2)"},${t});tl.fromTo("#${nid}",{scale:1.6,color:"#FF5A5A"},{scale:1,color:"#FFFFFF",duration:.3},${t});`)); fadeOut(`#${i} .vibb`, b); R.push({ id: 'vibra', a, b, r: [1300, top, 1860, top + 200] }); };
  vibra(13.9, 16.5, [[13.96, 1], [14.5, 3], [14.9, 5], [15.2, 7], [15.45, 10], [15.66, 12], [15.86, 14]]);
  vibra(562.2, 566.9, [[562.3, 1], [562.84, 2], [563.2, 5], [563.65, 10], [563.92, 14]], 60);
  // três textos piscando (14 LIGAÇÕES, 1 DESENHO, 20 MINUTOS)
  [[19.0, 23.4, '14 LIGAÇÕES', '#FF5A5A'], [24.2, 27.7, '1 DESENHO', '#7DF0A0'], [28.4, 31.3, '20 MINUTOS', '#FFD45A']].forEach(([a, b, t, cor]) => { const i = clip('big', a, b, `<span class="bigt" style="color:${cor};font-size:120px;top:120px">${t}</span>`); J.push(`tl.fromTo("#${i} .bigt",{opacity:0,scale:1.4,filter:"blur(12px)"},{opacity:1,scale:1,filter:"blur(0px)",duration:.25},${a});tl.to("#${i} .bigt",{opacity:.6,duration:.08,repeat:3,yoyo:true},${a + .4});`); fadeOut(`#${i} .bigt`, b); R.push({ id: 'flash', a, b, r: [300, 120, 1620, 280] }); });
  // rebobinar
  { const i = clip('vhs', 34.44, 35.96, `<div class="vhsl"></div><div class="vhst">◀◀ 7 DIAS ATRÁS</div>`); J.push(`tl.fromTo("#${i}",{opacity:0},{opacity:1,duration:.1},34.44);tl.fromTo("#${i} .vhsl",{backgroundPositionY:"0px"},{backgroundPositionY:"600px",duration:1.5,ease:"none"},34.44);`); fadeOut(`#${i}`, 35.96, .15); }

  // ---------- fichas de nome ----------
  const ficha = (a, b, nome, sub, cor = '#FFB43A', lado = 'esq', top = 640) => { const i = clip('fic', a, b, `<div class="ficb" style="border-color:${cor}"><div class="fict">${nome}</div><div class="fics" style="color:${cor}">${sub}</div></div>`, lado === 'esq' ? `left:80px;top:${top}px` : `right:80px;top:${top}px`);
    J.push(`tl.fromTo("#${i} .ficb",{opacity:0,x:${lado === 'esq' ? -60 : 60}},{opacity:1,x:0,duration:.35,ease:"power3.out"},${a});`); fadeOut(`#${i} .ficb`, b); R.push({ id: 'ficha', a, b, r: lado === 'esq' ? [80, top, 700, top + 150] : [1220, top, 1840, top + 150] }); };
  ficha(37.3, 39.1, 'GUILHERME', '17 ANOS', '#9FD8FF');
  ficha(40.0, 42.85, 'DONA ROSE', 'MÃE', '#F7A8C8', 'dir');
  ficha(44.6, 49.6, 'DAVI', '8 ANOS', '#FFE27A');
  // ---------- dia 0 ----------
  { const i = clip('selo', 67.0, 71.6, `<div class="selob">⏱ 40 MIN</div>`, 'left:80px;top:170px'); fadeIn(`#${i} .selob`, 67.0, '{opacity:0,scale:.4}', '{opacity:1,scale:1,duration:.3,ease:"back.out(3)"}'); fadeOut(`#${i} .selob`, 71.6); R.push({ id: '40min', a: 67, b: 71.6, r: [80, 170, 420, 260] }); }
  // infográfico: o cronômetro corre e as notificações quebram em 11:00
  { const a = 75.0, b = 82.4; const notif = Array.from({ length: 10 }, (_, k) => `<div class="notb" id="nt${k}" style="left:${[180, 1320, 260, 1420, 140, 1280, 360, 1500, 220, 1380][k]}px;top:${[200, 180, 520, 480, 360, 640, 700, 330, 820, 820][k]}px">🔔 ${['Tiago: kkk', 'Nova curtida', 'Vídeo novo!', 'Grupo da sala', '3 mensagens', 'Oferta!', 'Tiago: olha', 'Alguém te marcou', 'Story novo', 'Lembrete'][k]}</div>`).join('');
    const i = clip('info', a, b, `<div class="infobg"></div>${notif}<div class="infot" id="it">00:00</div><div class="infol">11 MINUTOS</div><div class="infof">Estudo de Gloria Mark (Universidade da Califórnia)</div><svg class="infoc" id="ic" viewBox="0 0 600 300"><path d="M300 150 L210 40 M300 150 L420 30 M300 150 L520 190 M300 150 L360 290 M300 150 L120 250 M300 150 L60 120" stroke="#fff" stroke-width="5" fill="none"/></svg>`);
    J.push(`tl.fromTo("#${i}",{opacity:0},{opacity:1,duration:.35},${a});`); for (let s = 0; s <= 30; s++) { const tt = a + .3 + s * .14; const sec = Math.round(s / 30 * 660); J.push(`tl.set("#it",{textContent:"${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}"},${tt.toFixed(2)});`); }
    for (let k = 0; k < 10; k++) J.push(`tl.fromTo("#nt${k}",{opacity:0,scale:.3},{opacity:1,scale:1,duration:.25,ease:"back.out(3)"},${(a + .6 + k * .32).toFixed(2)});`);
    J.push(`tl.fromTo("#ic",{opacity:0,scale:.6},{opacity:1,scale:1,duration:.15},${a + 4.6});tl.to("#it",{color:"#FF5A5A",keyframes:[{x:-12,duration:.05},{x:10,duration:.05},{x:0,duration:.05}]},${a + 4.6});tl.fromTo(".infol",{opacity:0,y:30},{opacity:1,y:0,duration:.35,ease:"back.out(2)"},${a + 4.75});tl.fromTo(".infof",{opacity:0},{opacity:1,duration:.4},${a + 5.1});`);
    fadeOut(`#${i}`, b, .35); R.push({ id: 'info', a, b, r: [0, 0, 1920, 880] }); }
  // círculo na folha + 📌 GUARDA ISSO
  const pin = (a, b, txt, x = 1240, y = 120) => { const i = clip('pin', a, b, `<div class="pinb">📌 ${txt}</div>`, `left:${x}px;top:${y}px`); J.push(`tl.fromTo("#${i} .pinb",{opacity:0,rotation:-12,scale:.4},{opacity:1,rotation:-4,scale:1,duration:.35,ease:"back.out(3)"},${a});`); fadeOut(`#${i} .pinb`, b); R.push({ id: 'pin', a, b, r: [x, y, x + 600, y + 110] }); };
  { const a = 101.45, b = 103.45; const i = clip('circ', a, b, `<svg viewBox="0 0 700 500"><ellipse id="ce" cx="350" cy="250" rx="300" ry="200" fill="none" stroke="#FF4A4A" stroke-width="12" stroke-dasharray="1600" stroke-dashoffset="1600" stroke-linecap="round"/></svg>`, 'left:610px;top:290px'); J.push(`tl.to("#ce",{attr:{"stroke-dashoffset":0},duration:.5,ease:"power2.out"},${a});`); fadeOut(`#${i}`, b); }
  pin(101.6, 103.45, 'GUARDA ISSO');
  // 3x riscados
  { const a = 112.6, b = 114.3; const i = clip('tres', a, b, `<span class="trn">3x</span><span class="trr" id="r0">/</span><span class="trr" id="r1">/</span><span class="trr" id="r2">/</span>`, 'right:120px;top:140px'); fadeIn(`#${i}`, a, '{opacity:0,scale:.5}', '{opacity:1,scale:1,duration:.25,ease:"back.out(3)"}'); [0, 1, 2].forEach((k) => J.push(`tl.fromTo("#r${k}",{opacity:0,scaleY:0},{opacity:1,scaleY:1,duration:.12},${(a + .4 + k * .25).toFixed(2)});`)); fadeOut(`#${i}`, b); }
  // linha branca atravessando a tela
  { const a = 128.25, b = 128.96; const i = clip('linha', a, b, `<div class="linb"></div>`); J.push(`tl.fromTo("#${i} .linb",{scaleX:0,transformOrigin:"0% 50%"},{scaleX:1,duration:.35,ease:"power3.in"},${a});tl.to("#${i} .linb",{opacity:0,duration:.2},${b - .2});`); }
  // ---------- dia 1 ----------
  const timer = (a, b, ate, x = 1500, y = 60, txt = '') => { const i = clip('tmr', a, b, `<div class="tmrb"><span class="tmri">⏱</span><span id="tm${n}" class="tmrn">0:00</span>${txt ? `<span class="tmrt">${txt}</span>` : ''}</div>`, `left:${x}px;top:${y}px`); const tid = `tm${n - 1}`; fadeIn(`#${i} .tmrb`, a);
    const N = 24; for (let s = 0; s <= N; s++) { const sec = Math.round(s / N * ate); J.push(`tl.set("#${tid}",{textContent:"${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}"},${(a + .3 + s * (b - a - 1.2) / N).toFixed(2)});`); } J.push(`tl.fromTo("#${i} .tmrb",{scale:1.25},{scale:1,duration:.35,ease:"back.out(3)"},${(b - .85).toFixed(2)});tl.to("#${tid}",{color:"#7DF0A0",duration:.2},${(b - .85).toFixed(2)});`); fadeOut(`#${i} .tmrb`, b); R.push({ id: 'timer', a, b, r: [x, y, x + 380, y + 100] }); };
  timer(142.2, 147.0, 120, 1460, 180);
  // CARREGANDO... 100%
  { const a = 176.9, b = 180.2; const i = clip('load', a, b, `<div class="loadb"><div class="loadt" id="lt">CARREGANDO...</div><div class="loadbar"><i id="li"></i></div></div>`); fadeIn(`#${i} .loadb`, a); J.push(`tl.to("#li",{width:"100%",duration:2.4,ease:"power1.in"},${a + .2});tl.set("#lt",{textContent:"DOWNLOAD COMPLETO ✓"},${a + 2.6});tl.to("#lt",{color:"#7DF0A0",duration:.2},${a + 2.6});`); fadeOut(`#${i} .loadb`, b); R.push({ id: 'load', a, b, r: [660, 120, 1260, 230] }); }
  // R$ 4,00
  { const a = 208.4, b = 210.9; const i = clip('preco', a, b, `<div class="precob">R$ 4,00</div>`, 'left:1240px;top:-200px'); J.push(`tl.fromTo("#${i} .precob",{y:0,rotation:-30},{y:520,rotation:-8,duration:.55,ease:"bounce.out"},${a});`); fadeOut(`#${i} .precob`, b); }
  // 1/30 ... 30/30 ✓
  { const a = 216.2, b = 224.9; const i = clip('cnt30', a, b, `<div class="cntb"><span id="c30">1/30</span></div>`, 'right:80px;top:180px'); fadeIn(`#${i} .cntb`, a); for (let q = 1; q <= 30; q++) J.push(`tl.set("#c30",{textContent:"${q}/30${q === 30 ? ' ✓' : ''}"},${(a + .2 + (q - 1) * .26).toFixed(2)});`); J.push(`tl.to("#c30",{color:"#7DF0A0",duration:.2},${(a + .2 + 29 * .26).toFixed(2)});`); fadeOut(`#${i} .cntb`, b); R.push({ id: 'c30', a, b, r: [1460, 180, 1840, 280] }); }
  pin(233.5, 234.66, 'LEMBRA DISSO', 1200, 120);
  // ---------- dia 2 ----------
  { const a = 254.3, b = 262.7; const i = clip('views', a, b, `<div class="viewsb"><div class="viewsn" id="vw">1 mil</div><div class="viewsl">VISUALIZAÇÕES</div></div>` + ['ensina pfv', 'toca Legião', 'é montagem', 'como assim', 'mano???', 'quero aula', 'TALENTO', 'faz mais'].map((s, k) => `<div class="comb" id="cm${k}" style="top:${[300, 420, 540, 360, 480, 600, 330, 450][k]}px">${s}</div>`).join(''));
    fadeIn(`#${i} .viewsb`, a); [[254.3, '1 mil'], [255.3, '12 mil'], [256.0, '50 mil'], [256.8, '120 mil'], [257.3, '200 mil']].forEach(([t, v]) => J.push(`tl.set("#vw",{textContent:"${v}"},${t});tl.fromTo("#vw",{scale:1.3},{scale:1,duration:.25,ease:"back.out(3)"},${t});`));
    for (let k = 0; k < 8; k++) J.push(`tl.fromTo("#cm${k}",{x:1900,opacity:1},{x:-500,opacity:1,duration:3.2,ease:"none"},${(258.3 + k * .45).toFixed(2)});`); fadeOut(`#${i}`, b); R.push({ id: 'views', a, b, r: [1300, 60, 1860, 260] }); }
  // contador de chamadas da mãe e 🔇
  { const a = 269.3, b = 278.4; const i = clip('cham', a, b, `<div class="chamb">🗣 CHAMOU <span id="ch">1</span>x</div>`, 'left:80px;top:180px'); fadeIn(`#${i} .chamb`, a); [[270.27, 1], [271.13, 2], [271.74, 5], [275.55, 6]].forEach(([t, v]) => J.push(`tl.set("#ch",{textContent:"${v}"},${t});tl.fromTo("#ch",{scale:1.6,color:"#FF5A5A"},{scale:1,color:"#FFFFFF",duration:.3},${t});`)); fadeOut(`#${i} .chamb`, b); }
  { const a = 289.0, b = 290.6; const i = clip('mudo', a, b, `<span>🔇</span>`); J.push(`tl.fromTo("#${i} span",{opacity:0,scale:2.5},{opacity:1,scale:1,duration:.25,ease:"back.out(2)"},${a});`); fadeOut(`#${i} span`, b); }
  { const i = clip('selo', 295, 303.5, `<div class="selob">⏱ 10 MIN</div>`, 'left:80px;top:170px'); fadeIn(`#${i} .selob`, 295, '{opacity:0,scale:.4}', '{opacity:1,scale:1,duration:.3,ease:"back.out(3)"}'); fadeOut(`#${i} .selob`, 303.5); }
  // ---------- dia 3 ----------
  const etiq = (a, b, txt, x, y, rot = -4) => { const i = clip('etq', a, b, `<div class="etqb" style="transform:rotate(${rot}deg)">${txt}</div>`, `left:${x}px;top:${y}px`); J.push(`tl.fromTo("#${i} .etqb",{opacity:0,scale:.5},{opacity:1,scale:1,duration:.3,ease:"back.out(3)"},${a});`); fadeOut(`#${i} .etqb`, b); R.push({ id: 'etq', a, b, r: [x, y, x + 520, y + 110] }); };
  etiq(347.4, 349.15, 'língua pra fora ✎', 1150, 230); etiq(349.3, 350.85, 'olho fechado ✎', 1150, 230, 3); etiq(350.95, 352.85, 'narrando ✎', 1150, 230, -2); etiq(353.95, 356.2, 'olhando pra ele ✎', 1150, 230, 4);
  timer(361.1, 367.2, 1200, 1460, 180, 'GUARDA');
  pin(362.8, 367.2, '20 MINUTOS', 1140, 320);
  // ---------- dia 4 ----------
  const chefe = (a, b, nome, linhas) => { const i = clip('boss', a, b, `<div class="bossb"><div class="bossh">⚔ CHEFÃO</div><div class="bossn">${nome}</div>${linhas.map((l) => `<div class="bossl">${l}</div>`).join('')}</div>`, 'right:80px;top:170px'); J.push(`tl.fromTo("#${i} .bossb",{opacity:0,x:120,skewX:-12},{opacity:1,x:0,skewX:0,duration:.4,ease:"power3.out"},${a});`); fadeOut(`#${i} .bossb`, b); R.push({ id: 'boss', a, b, r: [1240, 170, 1840, 470] }); };
  chefe(383.0, 388.3, 'CAIO', ['4 ANOS DE TREINO', 'CAMPEÃO DO CLUBE']);
  { const a = 391.4, b = 396.8; const i = clip('jog', a, b, `<div class="cntb">♟ <span id="jg">1</span> JOGADAS</div>`, 'left:80px;top:180px'); fadeIn(`#${i} .cntb`, a); for (let q = 1; q <= 23; q++) J.push(`tl.set("#jg",{textContent:"${q}"},${(391.5 + (q - 1) * .2 * (1 - (q - 1) * .012)).toFixed(2)});`); J.push(`tl.to("#jg",{color:"#FF5A5A",duration:.2},396);`); fadeOut(`#${i} .cntb`, b); }
  { const a = 434.9, b = 443.4; const i = clip('regra', a, b, `<div class="regrab"><span>FOCO EM UMA COISA</span><span class="regraeq">=</span><span>O RESTO DEIXA DE EXISTIR</span></div>`); fadeIn(`#${i} .regrab`, a, '{opacity:0,scale:.8}', '{opacity:1,scale:1,duration:.45,ease:"back.out(2)"}'); fadeOut(`#${i} .regrab`, b); R.push({ id: 'regra', a, b, r: [160, 380, 1760, 620] }); }
  // ---------- dia 5 ----------
  { const a = 445.0, b = 456.0; const i = clip('jog', a, b, `<div class="cntb">PARTIDAS: <span id="pt">1</span></div>`, 'right:80px;top:180px'); fadeIn(`#${i} .cntb`, a); [[445.2, 1], [446.5, 20], [447.48, 100], [447.72, 150], [447.95, 200], [452, 213]].forEach(([t, v]) => J.push(`tl.set("#pt",{textContent:"${v}"},${t});tl.fromTo("#pt",{scale:1.4},{scale:1,duration:.25},${t});`)); fadeOut(`#${i} .cntb`, b); }
  // ---------- dia 6 ----------
  { const a = 519.3, b = 520.5; const i = clip('f6', a, b, `<span>f6</span>`); J.push(`tl.fromTo("#${i} span",{opacity:0,scale:2},{opacity:1,scale:1,duration:.2,ease:"back.out(3)"},${a});`); fadeOut(`#${i} span`, b); }
  // ---------- dia 7 ----------
  chefe(544.2, 548.5, 'ADVERSÁRIO', ['19 ANOS', 'INVICTO EM FINAIS']);
  { const a = 575.1, b = 578.8; const i = clip('jog', a, b, `<div class="cntb">♟ <span id="j41">35</span> JOGADAS</div>`, 'left:80px;top:180px'); fadeIn(`#${i} .cntb`, a); [[575.2, 38], [575.6, 40], [576.05, 41]].forEach(([t, v]) => J.push(`tl.set("#j41",{textContent:"${v}"},${t});`)); fadeOut(`#${i} .cntb`, b); }
  { const a = 580.3, b = 584.5; const i = clip('camp', a, b, `<span>CAMPEÃO ESTADUAL</span>`); J.push(`tl.fromTo("#${i} span",{opacity:0,scale:2.2,letterSpacing:"40px"},{opacity:1,scale:1,letterSpacing:"6px",duration:.5,ease:"power4.out"},${a});`); fadeOut(`#${i} span`, b); R.push({ id: 'camp', a, b, r: [200, 120, 1720, 300] }); }
  // ---------- final ----------
  { const a = 672.35, b = 674.5; const i = clip('frase', a, b, `<span>O MELHOR DIA DA MINHA VIDA</span>`); J.push(`tl.fromTo("#${i} span",{opacity:0,y:30},{opacity:1,y:0,duration:.45,ease:"back.out(2)"},${a});`); fadeOut(`#${i} span`, b); }
  { const a = 707.3, b = 710.5; const i = clip('frase2', a, b, `<span>FOCO É ESCOLHER ONDE COLOCAR SUA VIDA</span>`); J.push(`tl.fromTo("#${i} span",{opacity:0,filter:"blur(10px)"},{opacity:1,filter:"blur(0px)",duration:.9},${a});`); fadeOut(`#${i} span`, b, .6); R.push({ id: 'frase2', a, b, r: [100, 380, 1820, 560] }); }
  // pergunta final (fundo preto com a pergunta em branco e o ícone de comentário pulsando)
  { const a = 737.4, b = 740.1; const i = clip('perg', a, b, `<div class="pergb"><div class="pergq">No que você focaria 100% hoje?</div><div class="pergi">💬</div></div>`); J.push(`tl.fromTo("#${i}",{opacity:0},{opacity:1,duration:.4},${a});tl.fromTo("#${i} .pergi",{scale:1},{scale:1.25,duration:.4,repeat:4,yoyo:true},${a + .3});`); fadeOut(`#${i}`, b); }

  const css = `
.dia{position:absolute;left:50px;top:40px;perspective:600px}
.diab{display:flex;align-items:center;gap:14px;background:#0B0F18EE;border:3px solid #FFB43A;border-radius:18px;padding:10px 26px;box-shadow:0 10px 30px #0008}
.diar{display:inline-block;font:900 44px Inter;color:#FFB43A}
.diat{font:900 54px Inter;color:#fff;letter-spacing:.04em}
.dias{font:800 40px Inter;color:#FFE7B8}
.big{position:absolute;inset:0}
.bigt{position:absolute;left:0;top:380px;width:1920px;text-align:center;font:900 160px Fraunces;color:#fff;text-shadow:0 10px 0 #000a,0 0 50px #000c}
.vib{position:absolute;right:80px;width:520px}
.vibb{display:flex;align-items:center;justify-content:center;gap:16px;background:#0B0F18EE;border:4px solid #FF5A5A;border-radius:26px;padding:18px 30px}
.vibi{font-size:84px}.vibn{display:inline-block;font:900 110px Inter;color:#fff;min-width:140px;text-align:center}.vibx{font:900 70px Inter;color:#FF9A9A}
.vhs{position:absolute;inset:0;pointer-events:none}
.vhsl{position:absolute;inset:0;background:repeating-linear-gradient(0deg,#ffffff00 0,#ffffff00 6px,#ffffff22 7px,#ffffff00 9px),linear-gradient(0deg,#ffffff00 0,#ffffff00 40%,#ffffff30 41%,#ffffff00 46%);mix-blend-mode:screen}
.vhst{position:absolute;left:60px;top:150px;font:900 54px 'IBM Plex Mono';color:#fff;text-shadow:3px 0 0 #E2443A,-3px 0 0 #3EA6FF}
.fic{position:absolute}
.ficb{background:#0B0F18E6;border-left:10px solid;border-radius:14px;padding:14px 30px 12px}
.fict{font:900 64px Inter;color:#fff;letter-spacing:.02em;line-height:1}
.fics{font:800 34px 'IBM Plex Mono';letter-spacing:.12em;margin-top:6px}
.selo{position:absolute}.selob{background:#0B0F18EE;border:3px solid #FFB43A;border-radius:16px;padding:10px 24px;font:900 52px Inter;color:#FFE7B8}
.info{position:absolute;inset:0}
.infobg{position:absolute;inset:0;background:radial-gradient(circle at 50% 45%,#1A2236E8,#07090FF0)}
.infot{position:absolute;left:0;top:300px;width:1920px;text-align:center;font:700 220px 'IBM Plex Mono';color:#fff}
.infol{position:absolute;left:0;top:560px;width:1920px;text-align:center;font:900 90px Inter;color:#FFB43A}
.infof{position:absolute;left:0;top:690px;width:1920px;text-align:center;font:600 34px Inter;color:#C9D2E8}
.infoc{position:absolute;left:660px;top:280px;width:600px;height:300px}
.notb{position:absolute;background:#F4F6FA;border-radius:18px;padding:12px 20px;font:700 30px Inter;color:#1A1E28;box-shadow:0 8px 24px #0008}
.pin{position:absolute}.pinb{background:#FFF3B8;border:3px solid #2A2A30;border-radius:8px;padding:12px 26px;font:900 50px Inter;color:#2A2A30;box-shadow:6px 8px 0 #0006}
.circ{position:absolute;width:700px;height:500px}.circ svg{width:100%;height:100%}
.tres{position:absolute;display:flex;align-items:center;gap:6px;background:#0B0F18EE;border-radius:18px;padding:8px 26px}
.trn{font:900 80px Inter;color:#fff;margin-right:14px}.trr{display:inline-block;font:900 90px Inter;color:#FF5A5A;transform-origin:50% 50%}
.linha{position:absolute;left:0;top:536px;width:1920px;height:8px}.linb{width:100%;height:100%;background:#fff;box-shadow:0 0 30px #fff,0 0 60px #9FD8FF}
.tmr{position:absolute}.tmrb{display:flex;align-items:center;gap:12px;background:#0B0F18EE;border:3px solid #ffffff44;border-radius:18px;padding:8px 24px}
.tmri{font-size:50px}.tmrn{font:700 66px 'IBM Plex Mono';color:#fff}.tmrt{font:900 32px Inter;color:#FFD45A;margin-left:10px}
.load{position:absolute;left:660px;top:120px;width:600px}.loadb{background:#0B0F18EE;border:3px solid #8FF0FF;border-radius:18px;padding:16px 24px}
.loadt{font:800 36px 'IBM Plex Mono';color:#8FF0FF;margin-bottom:10px}.loadbar{height:22px;border-radius:11px;background:#ffffff18;overflow:hidden}.loadbar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#3EA6FF,#7DF0A0)}
.preco{position:absolute}.precob{background:#FFF3B8;border:4px solid #C8302A;border-radius:12px;padding:14px 30px;font:900 70px Inter;color:#C8302A;box-shadow:6px 8px 0 #0006}
.cnt30,.jog{position:absolute}.cntb{background:#0B0F18EE;border:3px solid #ffffff44;border-radius:18px;padding:10px 28px;font:900 58px Inter;color:#fff}
.views{position:absolute;inset:0}.viewsb{position:absolute;right:80px;top:180px;background:#0B0F18EE;border:3px solid #F2546E;border-radius:18px;padding:12px 30px;text-align:center}
.viewsn{display:inline-block;font:900 90px Inter;color:#fff}.viewsl{font:800 28px 'IBM Plex Mono';letter-spacing:.12em;color:#F7A8C8}
.comb{position:absolute;left:0;background:#fff;border-radius:22px;padding:10px 24px;font:800 40px Inter;color:#1A1E28;box-shadow:0 6px 20px #0006;white-space:nowrap}
.cham{position:absolute}.chamb{background:#0B0F18EE;border:3px solid #F7A8C8;border-radius:18px;padding:10px 26px;font:900 52px Inter;color:#fff}
.mudo{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}.mudo span{font-size:260px;filter:drop-shadow(0 10px 30px #000)}
.etq{position:absolute}.etqb{background:#FFFDF4;border:3px solid #2A2A30;border-radius:10px;padding:8px 26px;font:700 66px Caveat;color:#2E5EC8;box-shadow:5px 6px 0 #0005}
.boss{position:absolute;width:600px}.bossb{background:linear-gradient(135deg,#2A0E14F0,#0B0F18F0);border:4px solid #FF5A5A;border-radius:18px;padding:16px 28px}
.bossh{font:900 30px 'IBM Plex Mono';letter-spacing:.2em;color:#FF5A5A}.bossn{font:900 76px Inter;color:#fff;line-height:1.05}.bossl{font:800 34px Inter;color:#FFD0D0;margin-top:4px}
.regra{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}.regrab{display:flex;flex-direction:column;align-items:center;background:#0B0F18F0;border:4px solid #fff;border-radius:24px;padding:26px 60px;font:900 64px Inter;color:#fff;text-align:center}
.regraeq{font-size:90px;color:#FF5A5A;line-height:1}
.f6{position:absolute;left:1200px;top:300px}.f6 span{display:inline-block;background:#FFD45A;border-radius:50%;width:150px;height:150px;line-height:150px;text-align:center;font:900 80px Inter;color:#1A1E28;box-shadow:0 0 40px #FFD45A}
.camp{position:absolute;left:0;top:130px;width:1920px;text-align:center}.camp span{display:inline-block;font:900 130px Fraunces;color:#FFD45A;text-shadow:0 6px 0 #8A5A10,0 0 40px #000c}
.frase{position:absolute;left:0;top:110px;width:1920px;text-align:center}.frase span{display:inline-block;font:700 110px Caveat;color:#2E5EC8;background:#FFFDF4E8;border-radius:18px;padding:4px 40px;box-shadow:0 0 50px #FFD45A}
.frase2{position:absolute;left:0;top:400px;width:1920px;text-align:center}.frase2 span{display:inline-block;font:900 86px Fraunces;color:#fff;text-shadow:0 6px 0 #000a,0 0 40px #000c;max-width:1600px}
.perg{position:absolute;inset:0;background:#06070C}.pergb{position:absolute;left:0;top:330px;width:1920px;text-align:center}.pergq{font:900 96px Fraunces;color:#fff}.pergi{display:inline-block;font-size:130px;margin-top:20px}
`;
  return { H, J, R, css };
}
