// Gera compositions/ui.html (1920x1080) a partir de assets/audio/transcript_final.json e ui.json.
// Tipos: etiqueta, capitulo, fato (valor/texto ou barras), placa, pill, burst, carteira (medidor), placar, grafico, lista.
// Também confere sobreposição entre elementos (avisos no console).
import fs from 'node:fs';
import path from 'node:path';
export function gerarUI(P) {
  const cfg = JSON.parse(fs.readFileSync(path.join(P, 'ui.json'), 'utf8'));
  const T = cfg.duracao;
  const W = JSON.parse(fs.readFileSync(path.join(P, 'assets', 'audio', 'transcript_final.json'), 'utf8'));
  const destaques = new Set((cfg.destaques || []).map(s => s.toLowerCase()));
  const limpa = (s) => s.toLowerCase().replace(/[.,!?;:…"]/g, '');
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const H = [], J = [], R = [], avisos = [];
  // ---------- legendas: até N palavras, quebra em pontuação/pausa/troca de voz ----------
  const grupos = []; let g = [];
  const sem = new Set((cfg.semLegenda || []).flatMap(([a, b]) => Array.from({ length: b - a + 1 }, (_, i) => a + i)));
  for (let i = 0; i < W.length; i++) {
    if (sem.has(i)) { if (g.length) { grupos.push(g); g = []; } continue; }
    g.push(W[i]); const fim = /[.,!?;:]$/.test(W[i].text), pausa = W[i + 1] && W[i + 1].start - W[i].end > .2, troca = W[i + 1] && W[i + 1].quem !== W[i].quem;
    if (fim || pausa || troca || g.length >= (cfg.palavrasPorLegenda || 3) || i === W.length - 1) { grupos.push(g); g = []; }
  }
  // junta legendas curtas demais (< .5 s) com a seguinte, pra nunca aparecerem duas ao mesmo tempo
  for (let i = 0; i < grupos.length - 1; i++) { const g0 = grupos[i], g1 = grupos[i + 1]; if (g1[0].start - g0[0].start < .5 && g0[0].quem === g1[0].quem && g0.length + g1.length <= 6) { grupos.splice(i, 2, [...g0, ...g1]); i--; } }
  const COR = cfg.corVoz || {};
  grupos.forEach((g, i) => {
    const a = g[0].start, nxt = grupos[i + 1] ? grupos[i + 1][0].start : T - .3;
    const end = Math.min(g.at(-1).end + .35, nxt);
    const quem = g[0].quem || 'n';
    const sp = g.map(x => `<span style="color:${destaques.has(limpa(x.text)) ? '#FFB43A' : (COR[quem] || '#fff')}">${esc(x.text)}</span>`).join(' ');
    H.push(`<div id="cap${i}" class="clip capg" data-start="${a.toFixed(3)}" data-duration="${Math.max(.2, end - a).toFixed(3)}">${sp}</div>`);
  });
  R.push(...grupos.map((g, i) => ({ id: 'legenda', a: g[0].start, b: g.at(-1).end, r: [210, 905, 1710, 1005] })));
  // ---------- elementos ----------
  const larg = (s, px) => String(s).length * px;
  for (const [n, e] of (cfg.elementos || []).entries()) {
    if (e.tipo === 'lista' && e.itens.length && e.itens[0][1] > e.inicio + .3) e.inicio = e.itens[0][1] - .3;
    const id = `el${n}`, a = e.inicio, b = e.fim, dur = (b - a).toFixed(3); const nome = `${e.tipo}@${a}`;
    if (e.tipo === 'etiqueta') {
      const top = e.topo ?? 50; H.push(`<div id="${id}" class="clip tag" data-start="${a}" data-duration="${dur}" style="top:${top}px">${esc(e.texto)}</div>`);
      J.push(`tl.fromTo("#${id}",{opacity:0,x:-30},{opacity:1,x:0,duration:.35,ease:"power3.out"},${a});tl.to("#${id}",{opacity:0,duration:.3},${b - .3});`);
      R.push({ id: nome, a, b, r: [60, top, 60 + larg(e.texto, 27) + 50, top + 72] });
    } else if (e.tipo === 'capitulo') {
      const top = e.topo ?? 230; H.push(`<div id="${id}" class="clip cap" data-start="${a}" data-duration="${dur}" style="top:${top}px"><div class="capi"><div class="capn">${esc(e.numero)}</div>${e.texto ? `<div class="capt">${esc(e.texto)}</div>` : ''}</div></div>`);
      J.push(`tl.fromTo("#${id} .capi",{opacity:0,y:24,scale:.96},{opacity:1,y:0,scale:1,duration:.45,ease:"power3.out"},${a});tl.to("#${id} .capi",{opacity:0,duration:.35},${b - .4});`);
      const w = Math.max(larg(e.numero, 62), larg(e.texto || '', 34)) + 160; R.push({ id: nome, a, b, r: [960 - w / 2, top, 960 + w / 2, top + (e.texto ? 200 : 130)] });
    } else if (e.tipo === 'fato') {
      const top = e.topo ?? 150, dir = e.lado === 'direita'; const pos = dir ? `right:60px;top:${top}px` : `left:60px;top:${top}px`;
      let inner = `<div class="fh">${esc(e.titulo)}</div>`; let h = 70;
      if (e.valor) { inner += `<div class="fv"${e.corValor ? ` style="color:${e.corValor}"` : ''}>${esc(e.valor)}</div>`; h += 86; }
      if (e.texto) { inner += `<div class="ft">${esc(e.texto)}</div>`; h += 42 * Math.ceil(e.texto.length / 30); }
      if (e.barras) { const mx = Math.max(...e.barras.map(x => x.valor)); e.barras.forEach((x, k) => { inner += `<div id="${id}_r${k}" class="fbr"><div class="fbl">${esc(x.rotulo)}</div><div class="fbt"><div id="${id}_b${k}" class="fbb" style="width:${Math.max(2, 100 * x.valor / mx).toFixed(1)}%;background:${x.cor || '#FFB43A'}"></div></div><div class="fbv">${esc(x.texto)}</div></div>`; J.push(`tl.fromTo("#${id}_b${k}",{scaleX:0,transformOrigin:"0% 50%"},{scaleX:1,duration:.8,ease:"power2.out"},${x.t ?? (a + .25 + k * .25)});`); if (x.t) J.push(`tl.fromTo("#${id}_r${k}",{opacity:.15},{opacity:1,duration:.3},${x.t});`); h += 56; }); }
      if (e.fonte) { inner += `<div class="ff">${esc(e.fonte)}</div>`; h += 34; }
      H.push(`<div id="${id}" class="clip fato" data-start="${a}" data-duration="${dur}" style="${pos}">${inner}</div>`);
      J.push(`tl.fromTo("#${id}",{opacity:0,x:${dir ? 40 : -40}},{opacity:1,x:0,duration:.35,ease:"power3.out"},${a});tl.to("#${id}",{opacity:0,duration:.3},${b - .32});`);
      R.push({ id: nome, a, b, r: dir ? [1860 - 640, top, 1860, top + h] : [60, top, 700, top + h] });
    } else if (e.tipo === 'placa') {
      const top = e.topo ?? 60; H.push(`<div id="${id}" class="clip pq" data-start="${a}" data-duration="${dur}" style="top:${top}px"><div class="pqi"><div id="${id}_n" class="pqn">${esc(e.numero)}</div>${e.rotulo ? `<div class="pql">${esc(e.rotulo)}</div>` : ''}</div></div>`);
      J.push(`tl.fromTo("#${id} .pqi",{opacity:0,scale:.9},{opacity:1,scale:1,duration:.2,ease:"back.out(2)"},${a});tl.to("#${id} .pqi",{opacity:0,duration:.25},${b - .25});`);
      const w = Math.max(larg(e.numero, 56), larg(e.rotulo || '', 17)) + 100; R.push({ id: nome, a, b, r: [960 - w / 2, top, 960 + w / 2, top + 160] });
    } else if (e.tipo === 'pill') {
      const top = e.topo ?? 170; H.push(`<div id="${id}" class="clip pill" data-start="${a}" data-duration="${dur}" style="top:${top}px"><span>${esc(e.texto)}</span></div>`);
      J.push(`tl.fromTo("#${id} span",{opacity:0,y:16},{opacity:1,y:0,duration:.35,ease:"power3.out"},${a});tl.to("#${id} span",{opacity:0,duration:.3},${b - .3});`);
      const w = Math.min(1500, larg(e.texto, 31) + 100); R.push({ id: nome, a, b, r: [960 - w / 2, top, 960 + w / 2, top + 96] });
    } else if (e.tipo === 'burst') {
      const left = e.esquerda ?? 120, top = e.topo ?? 200; const pts = []; for (let k = 0; k < 28; k++) { const an = Math.PI * k / 14 - Math.PI / 2, r = k % 2 ? 165 : 250; pts.push(`${(270 + r * 1.2 * Math.cos(an)).toFixed(0)},${(240 + r * .82 * Math.sin(an)).toFixed(0)}`); }
      const fs_ = e.texto.length > 8 ? 70 : 96;
      H.push(`<svg id="${id}" class="clip" data-start="${a}" data-duration="${dur}" width="540" height="480" viewBox="0 0 540 480" style="position:absolute;left:${left}px;top:${top}px;overflow:visible;transform:scale(${e.escala ?? 1});transform-origin:0 0"><g id="${id}g"><polygon points="${pts.join(' ')}" fill="#FFD45A" stroke="#C9472F" stroke-width="6" stroke-linejoin="round"/><text x="270" y="${240 + fs_ * .34}" text-anchor="middle" font-family="Fraunces" font-weight="900" font-size="${fs_}" fill="#C9361F">${esc(e.texto)}</text></g></svg>`);
      J.push(`tl.fromTo("#${id}g",{scale:.35,rotation:-9,transformOrigin:"50% 50%"},{scale:1,rotation:-5,duration:.18,ease:"back.out(2)"},${a});tl.to("#${id}g",{rotation:-2,duration:${(b - a - .5).toFixed(2)},ease:"sine.inOut"},${a + .2});tl.to("#${id}g",{scale:.6,opacity:0,duration:.25},${b - .25});`);
      const es = e.escala ?? 1; R.push({ id: nome, a, b, r: [left - 30 * es, top + 20 * es, left + 570 * es, top + 460 * es] });
    } else if (e.tipo === 'carteira') {
      // medidor fixo no canto superior direito: 100 BTC e o valor em reais
      const de = e.de ?? 0, ate = e.ate ?? de; const fmt = e.formato || 'reais';
      H.push(`<div id="${id}" class="clip cart" data-start="${a}" data-duration="${dur}"><div class="ch">CARTEIRA DO GUILHERME</div><div class="cb"><span class="cbi">₿</span> ${esc(e.btc || '100 BTC')}</div><div class="cl">VALE HOJE</div><div id="${id}_n" class="cn"${e.cor ? ` style="color:${e.cor}"` : ''}>${esc(e.texto ?? '')}</div><div id="${id}_s" class="cs"${e.corStatus ? ` style="color:${e.corStatus}"` : ''}>${esc(e.status || '')}</div><div class="ca">${esc(e.ano || '')}</div></div>`);
      J.push(`tl.fromTo("#${id}",{opacity:0,y:-20},{opacity:1,y:0,duration:.35,ease:"power3.out"},${a});tl.to("#${id}",{opacity:0,duration:.3},${b - .3});`);
      if (e.texto === undefined) J.push(`(function(){var o={v:${de}},el=document.querySelector("#${id}_n");function f(v){${fmt === 'reais' ? `if(v>=1e6)return "R$ "+(v/1e6).toFixed(v>=1e7?0:1).replace(".",",")+" mi";return "R$ "+String(Math.round(v)).replace(/\\B(?=(\\d{3})+(?!\\d))/g,".");` : 'return String(Math.round(v));'}}if(el)el.textContent=f(${de});tl.fromTo(o,{v:${de}},{v:${ate},duration:${e.duracaoConta ?? 1.6},ease:"power2.out",immediateRender:false,onUpdate:function(){if(el)el.textContent=f(o.v);}},${a + (e.atraso ?? .3)});})();`);
      if (e.pisca) J.push(`tl.fromTo("#${id}",{boxShadow:"0 0 0px #FF4A3A00"},{boxShadow:"0 0 46px #FF4A3AFF",duration:.4,repeat:${Math.max(1, Math.floor((b - a) / .8) - 1)},yoyo:true},${a + .4});`);
      R.push({ id: nome, a, b, r: [1520, 30, 1880, 330] });
    } else if (e.tipo === 'placar') {
      H.push(`<div id="${id}" class="clip placar" data-start="${a}" data-duration="${dur}"><div class="pt">COPA 2014 · SEMIFINAL</div><div class="pr"><span class="pe">BRASIL</span><span class="pg">${e.casa ?? 0}</span><span class="px">×</span><span class="pg" style="position:relative">${[0,...(e.gols||[])].map((_,k)=>`<span id="${id}_g${k}" style="position:absolute;left:0;right:0;opacity:${k?0:1}">${k}</span>`).join("")}&nbsp;</span><span class="pe">ALEMANHA</span></div><div class="pm" style="position:relative;height:26px">${[e.minuto||"",...(e.gols||[]).map(g=>g[1])].map((m,k)=>`<span id="${id}_m${k}" style="position:absolute;left:0;right:0;opacity:${k?0:1}">${esc(m)}</span>`).join("")}</div></div>`);
      J.push(`tl.fromTo("#${id}",{opacity:0,y:-20},{opacity:1,y:0,duration:.35},${a});tl.to("#${id}",{opacity:0,duration:.3},${b - .3});`);
      (e.gols || []).forEach(([t, min], k) => J.push(`tl.set(["#${id}_g${k}","#${id}_m${k}"],{opacity:0},${t});tl.set(["#${id}_g${k + 1}","#${id}_m${k + 1}"],{opacity:1},${t});tl.fromTo("#${id}_g${k + 1}",{scale:1.9,color:"#FF5A4A"},{scale:1,color:"#FFFFFF",duration:.5,ease:"back.out(2)"},${t});`));
      R.push({ id: nome, a, b, r: [610, 36, 1310, 196] });
    } else if (e.tipo === 'grafico') {
      // gráfico de linha que se desenha: pontos [[rótulo, valor]], escala log opcional
      const w = 700, h = 330, pad = 50; const vs = e.pontos.map(p => e.log ? Math.log10(p[1]) : p[1]); const mn = Math.min(...vs), mx = Math.max(...vs);
      const xy = e.pontos.map((p, k) => [pad + k * (w - 2 * pad) / (e.pontos.length - 1), h - 40 - (vs[k] - mn) / (mx - mn) * (h - 90)]);
      const d = xy.map((p, k) => `${k ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
      const lab = e.pontos.map((p, k) => `<text x="${xy[k][0]}" y="${h - 8}" text-anchor="middle" class="gx">${esc(p[0])}</text>`).join('');
      const dots = e.pontos.map((p, k) => (e.marcar || []).includes(k) ? `<circle id="${id}_d${k}" cx="${xy[k][0]}" cy="${xy[k][1]}" r="9" fill="#FFB43A" stroke="#fff" stroke-width="3"/><text id="${id}_t${k}" x="${xy[k][0] + (k === e.pontos.length - 1 ? -12 : 12)}" y="${xy[k][1] - 16}" text-anchor="${k === e.pontos.length - 1 ? 'end' : 'start'}" class="gv">${esc(p[2] || '')}</text>` : '').join('');
      const left = e.lado === 'direita' ? 1860 - w - 40 : 60, top = e.topo ?? 150;
      H.push(`<div id="${id}" class="clip graf" data-start="${a}" data-duration="${dur}" style="left:${left}px;top:${top}px"><div class="fh">${esc(e.titulo)}</div><svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><line x1="${pad}" y1="${h - 40}" x2="${w - pad}" y2="${h - 40}" stroke="#ffffff33" stroke-width="2"/><path id="${id}_p" d="${d}" fill="none" stroke="#FFB43A" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/>${dots}${lab}</svg>${e.fonte ? `<div class="ff">${esc(e.fonte)}</div>` : ''}</div>`);
      J.push(`tl.fromTo("#${id}",{opacity:0,y:20},{opacity:1,y:0,duration:.35},${a});tl.to("#${id}",{opacity:0,duration:.3},${b - .3});tl.fromTo("#${id}_p",{attr:{"stroke-dashoffset":1}},{attr:{"stroke-dashoffset":0},duration:${e.duracaoLinha ?? 2.2},ease:"power1.inOut"},${a + .3});`);
      (e.marcar || []).forEach((k) => { const tk = a + .3 + (e.duracaoLinha ?? 2.2) * k / (e.pontos.length - 1); J.push(`tl.fromTo(["#${id}_d${k}","#${id}_t${k}"],{opacity:0},{opacity:1,duration:.25},${tk.toFixed(2)});`); });
      R.push({ id: nome, a, b, r: [left, top, left + w + 40, top + h + 110] });
    } else if (e.tipo === 'like') {
      // botão de like grande: aparece, o cursor clica (enche de azul e solta faíscas) e some
      const top = e.topo ?? 150, tc = e.clique ?? a + 1.5; const raios = Array.from({ length: 12 }, (_, k) => `<div class="lkr" id="${id}_r${k}" style="transform:rotate(${k * 30}deg)"><i></i></div>`).join('');
      H.push(`<div id="${id}" class="clip lkw" data-start="${a}" data-duration="${dur}" style="top:${top}px"><div class="lkb" id="${id}_b"><div class="lkraios">${raios}</div><svg class="lks" viewBox="0 0 120 120"><path id="${id}_m" d="M18 54h18v50H18zM42 104V56l22-40c10 0 14 8 12 18l-5 16h28c8 0 13 7 11 14l-9 32c-2 6-7 8-12 8z" fill="#FFFFFF" stroke="#1B1420" stroke-width="7" stroke-linejoin="round"/></svg><div class="lkt" id="${id}_t">${esc(e.texto || 'DEIXA SEU LIKE')}</div></div><svg class="lkc" id="${id}_c" viewBox="0 0 60 80"><path d="M6 4l44 36-20 3 12 26-10 5-12-26-14 14z" fill="#fff" stroke="#1B1420" stroke-width="5" stroke-linejoin="round"/></svg></div>`);
      J.push(`tl.fromTo("#${id}_b",{opacity:0,scale:.4},{opacity:1,scale:1,duration:.45,ease:"back.out(2.2)"},${a});tl.to("#${id}_b",{scale:1.04,duration:.5,repeat:${Math.max(1, Math.floor((tc - a - .5) / .5))},yoyo:true,ease:"sine.inOut"},${a + .45});`);
      J.push(`tl.fromTo("#${id}_c",{opacity:0,x:260,y:200},{opacity:1,x:0,y:0,duration:.7,ease:"power2.out"},${tc - .8});tl.to("#${id}_c",{scale:.8,duration:.08,yoyo:true,repeat:1},${tc});tl.to("#${id}_c",{opacity:0,duration:.3},${tc + .6});`);
      J.push(`tl.to("#${id}_m",{attr:{fill:"#3EA6FF"},duration:.1},${tc});tl.fromTo("#${id}_b",{scale:.86},{scale:1.12,duration:.25,ease:"back.out(3)"},${tc});tl.to("#${id}_b",{scale:1,duration:.3},${tc + .25});tl.set("#${id}_t",{textContent:${JSON.stringify(e.depois || 'VALEU!')}},${tc});`);
      J.push(`tl.fromTo("#${id} .lkr i",{scaleY:0,opacity:1},{scaleY:1,opacity:0,duration:.6,ease:"power2.out"},${tc});tl.to("#${id}_b",{opacity:0,scale:.7,duration:.3},${b - .3});`);
      R.push({ id: nome, a, b, r: [960 - 280, top, 960 + 280, top + 420] });
    } else if (e.tipo === 'pergunta') {
      const top = e.topo ?? 70; const ops = (e.opcoes || []).map((o, k) => `<span id="${id}_o${k}" class="pgo">${esc(o)}</span>`).join('');
      H.push(`<div id="${id}" class="clip pgw" data-start="${a}" data-duration="${dur}" style="top:${top}px"><div class="pgb" id="${id}_b"><div class="pgh">${esc(e.titulo || 'COMENTA AQUI')}</div><div class="pgq">${esc(e.texto)}</div><div class="pgl">${ops}</div></div></div>`);
      J.push(`tl.fromTo("#${id}_b",{opacity:0,y:-30,scale:.92},{opacity:1,y:0,scale:1,duration:.45,ease:"back.out(1.8)"},${a});tl.to("#${id}_b",{opacity:0,y:-20,duration:.3},${b - .3});`);
      (e.opcoes || []).forEach((o, k) => J.push(`tl.fromTo("#${id}_o${k}",{opacity:0,y:12},{opacity:1,y:0,duration:.25,ease:"back.out(2)"},${(e.tOpcoes ?? a + .8) + k * .22});`));
      R.push({ id: nome, a, b, r: [960 - 760, top, 960 + 760, top + 300] });
    } else if (e.tipo === 'inscrever') {
      const top = e.topo ?? 90, tc = e.clique ?? a + .8, ts = e.sino ?? tc + 1;
      H.push(`<div id="${id}" class="clip insw" data-start="${a}" data-duration="${dur}" style="top:${top}px"><div class="insb" id="${id}_b"><span id="${id}_x" class="insx">INSCREVER-SE</span><svg id="${id}_s" class="inss" viewBox="0 0 100 100"><path d="M50 10c-16 0-26 12-26 28v18l-10 14h72L76 56V38c0-16-10-28-26-28z" fill="#FFD45A" stroke="#1B1420" stroke-width="7" stroke-linejoin="round"/><circle cx="50" cy="82" r="9" fill="#FFD45A" stroke="#1B1420" stroke-width="6"/></svg></div><svg class="lkc" id="${id}_c" viewBox="0 0 60 80" style="left:880px;top:78px"><path d="M6 4l44 36-20 3 12 26-10 5-12-26-14 14z" fill="#fff" stroke="#1B1420" stroke-width="5" stroke-linejoin="round"/></svg></div>`);
      J.push(`tl.fromTo("#${id}_b",{opacity:0,y:-30},{opacity:1,y:0,duration:.4,ease:"back.out(2)"},${a});tl.to("#${id}_b",{opacity:0,y:-20,duration:.3},${b - .3});`);
      J.push(`tl.fromTo("#${id}_c",{opacity:0,x:240,y:160},{opacity:1,x:0,y:0,duration:.55,ease:"power2.out"},${tc - .6});tl.to("#${id}_c",{scale:.8,duration:.08,yoyo:true,repeat:1},${tc});tl.set("#${id}_x",{textContent:"INSCRITO ✓"},${tc});tl.to("#${id}_x",{backgroundColor:"#5A5F6A",duration:.15},${tc});tl.to("#${id}_c",{x:255,y:-5,duration:.4,ease:"power2.inOut"},${ts - .45});tl.to("#${id}_c",{scale:.8,duration:.08,yoyo:true,repeat:1},${ts});tl.to("#${id}_c",{opacity:0,duration:.3},${ts + .5});`);
      J.push(`tl.fromTo("#${id}_s",{rotation:0,transformOrigin:"50% 10%"},{rotation:22,duration:.09,repeat:9,yoyo:true,ease:"sine.inOut"},${ts});tl.to("#${id}_s",{rotation:0,duration:.1},${ts + .9});`);
      R.push({ id: nome, a, b, r: [960 - 330, top, 960 + 330, top + 160] });
    } else if (e.tipo === 'lista') {
      const top = e.topo ?? 150, dir = e.lado === 'direita'; const pos = dir ? `right:60px;top:${top}px` : `left:60px;top:${top}px`;
      const itens = e.itens.map(([txt, t], k) => `<div id="${id}_i${k}" class="li" style="height:0;margin-top:0;opacity:0;overflow:hidden"><span class="lk">${k + 1}</span>${esc(txt)}</div>`).join('');
      H.push(`<div id="${id}" class="clip lista" data-start="${a}" data-duration="${dur}" style="${pos}"><div class="fh">${esc(e.titulo)}</div>${itens}</div>`);
      J.push(`tl.fromTo("#${id}",{opacity:0,x:${dir ? 40 : -40}},{opacity:1,x:0,duration:.35,ease:"power3.out"},${a});tl.to("#${id}",{opacity:0,duration:.3},${b - .3});`);
      e.itens.forEach(([txt, t], k) => J.push(`tl.fromTo("#${id}_i${k}",{opacity:0,x:-16,height:0,marginTop:0},{opacity:1,x:0,height:54,marginTop:14,duration:.3,immediateRender:false},${Math.max(a, t)});`));
      R.push({ id: nome, a, b, r: dir ? [1220, top, 1860, top + 80 + 64 * e.itens.length] : [60, top, 700, top + 80 + 64 * e.itens.length] });
    }
  }
  // ---------- conferência de sobreposição ----------
  const inter = (p, q) => p.r[0] < q.r[2] && q.r[0] < p.r[2] && p.r[1] < q.r[3] && q.r[1] < p.r[3] && p.a < q.b - .05 && q.a < p.b - .05;
  for (let i = 0; i < R.length; i++) for (let j = i + 1; j < R.length; j++) if (inter(R[i], R[j]) && !(R[i].id === 'legenda' && R[j].id === 'legenda')) avisos.push(`${R[i].id} cobre ${R[j].id}`);
  const html = `<template>
<style>
@font-face{font-family:'Fraunces';src:url('assets/fonts/fraunces-black.ttf');font-weight:900}
#root{position:absolute;inset:0}
.capg{position:absolute;left:210px;width:1500px;top:900px;height:105px;display:flex;align-items:center;justify-content:center;gap:0 16px;flex-wrap:wrap;text-align:center;font:800 56px/1.05 Inter;letter-spacing:-.01em;text-shadow:0 3px 0 #000a,0 0 18px #000c,0 6px 26px #0008}
.capg span{display:inline-block}
.tag{position:absolute;left:60px;font:900 42px Fraunces;color:#FFE7B8;background:#2A1C12EB;border:3px solid #FFB43A99;border-radius:12px;padding:6px 24px;letter-spacing:.01em}
.cap{position:absolute;left:0;width:1920px;text-align:center}
.capi{display:inline-block;background:#120F1CEB;border:3px solid #FFB43A77;border-radius:16px;padding:26px 74px 30px;box-shadow:0 0 70px #FFB43A33}
.capn{font:900 96px Fraunces;color:#FFB43A;text-shadow:0 0 26px #FFB43A77;line-height:1}
.capt{font:700 46px 'IBM Plex Mono';letter-spacing:.12em;color:#F6E7CF;margin-top:12px}
.fato,.lista,.graf{position:absolute;width:640px;background:#0E1422EE;border-left:9px solid #FFB43A;border-radius:16px;padding:18px 26px 20px;box-shadow:0 10px 30px #0007}
.graf{width:auto}
.fh{font:700 27px 'IBM Plex Mono';letter-spacing:.1em;color:#FFB43A}
.fv{font:900 76px Fraunces;color:#fff;line-height:1.05;margin-top:6px}
.ft{font:700 33px/1.22 Inter;color:#E8E3D8;margin-top:6px}
.ff{font:600 20px 'IBM Plex Mono';color:#9AA3B2;margin-top:10px;letter-spacing:.04em}
.fbr{display:flex;align-items:center;gap:12px;margin-top:12px}
.fbl{width:230px;font:800 26px Inter;color:#fff;text-align:right}
.fbt{flex:1;height:32px;background:#ffffff18;border-radius:13px;overflow:hidden}
.fbb{height:100%;border-radius:13px}
.fbv{width:140px;font:800 26px 'IBM Plex Mono';color:#FFB43A}
.li{font:800 38px/1.2 Inter;color:#fff;margin-top:14px;display:flex;align-items:center;gap:16px}
.lk{display:inline-block;width:52px;height:52px;border-radius:50%;background:#FFB43A;color:#1B1420;font:900 32px Fraunces;text-align:center;line-height:54px;flex:none}
.pq{position:absolute;left:0;width:1920px;text-align:center}
.pqi{display:inline-block;background:#0E1422EE;border:2px solid #FFB43A66;border-radius:18px;padding:12px 44px 12px}
.pqn{font:900 92px Fraunces;color:#FFB43A;text-shadow:0 0 22px #FFB43A88;line-height:1.05}
.pql{font:600 25px 'IBM Plex Mono';letter-spacing:.14em;color:#E2DCCD;margin-top:4px}
.pill{position:absolute;left:0;width:1920px;text-align:center}
.pill span{display:inline-block;background:#FFD45AF4;color:#1B1420;font:900 50px/1.1 Inter;letter-spacing:-.01em;padding:16px 44px;border-radius:48px;border:5px solid #1B1420;box-shadow:0 8px 0 #1B142088;max-width:1500px}
.cart{position:absolute;right:40px;top:30px;width:360px;height:300px;background:#0E1422E6;border:3px solid #FFB43A88;border-radius:22px;text-align:center;box-shadow:0 10px 30px #0007}
.ch{font:700 19px 'IBM Plex Mono';letter-spacing:.12em;color:#C9C2B2;margin-top:18px}
.cb{font:900 46px Fraunces;color:#fff;margin-top:6px}
.cbi{display:inline-block;width:54px;height:54px;border-radius:50%;background:#FFB43A;color:#1B1420;font:900 38px Inter;line-height:56px;vertical-align:4px}
.cl{font:700 18px 'IBM Plex Mono';letter-spacing:.2em;color:#9AA3B2;margin-top:10px}
.cn{font:900 56px Fraunces;color:#7DF0A0;margin-top:2px;text-shadow:0 0 18px #7DF0A055;white-space:nowrap}
.cs{font:800 22px Inter;color:#FFB43A;letter-spacing:.04em;margin-top:2px}
.ca{position:absolute;left:16px;bottom:10px;font:800 18px 'IBM Plex Mono';color:#FFB43A}
.placar{position:absolute;left:610px;top:36px;width:700px;height:160px;background:#0E1422F0;border:3px solid #ffffff44;border-radius:18px;text-align:center}
.pt{font:700 20px 'IBM Plex Mono';letter-spacing:.14em;color:#C9C2B2;margin-top:12px}
.pr{display:flex;justify-content:center;align-items:center;gap:22px;margin-top:4px}
.pe{font:900 34px Inter;color:#fff;width:200px}
.pg{font:900 72px Fraunces;color:#fff;display:inline-block;width:60px}
.px{font:900 40px Inter;color:#9AA3B2}
.pm{font:800 22px 'IBM Plex Mono';color:#FFB43A;margin-top:-4px}
.lkw{position:absolute;left:0;width:1920px;height:420px}
.lkb{position:absolute;left:760px;top:0;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,#1E2A44F4 0,#0E1422F0 70%);border:6px solid #3EA6FF;box-shadow:0 0 60px #3EA6FF66;display:flex;flex-direction:column;align-items:center;justify-content:center}
.lks{width:210px;height:210px;margin-top:-10px}
.lkt{font:900 40px Inter;color:#fff;letter-spacing:.01em;margin-top:2px;text-shadow:0 3px 0 #0008}
.lkraios{position:absolute;left:50%;top:50%;width:0;height:0}
.lkr{position:absolute;left:0;top:0;width:0;height:0}
.lkr i{position:absolute;left:-7px;top:-290px;width:14px;height:70px;border-radius:7px;background:#FFD45A;transform-origin:50% 100%;opacity:0}
.lkc{position:absolute;left:968px;top:150px;width:70px;height:94px;filter:drop-shadow(0 4px 6px #0008)}
.pgw{position:absolute;left:0;width:1920px;text-align:center}
.pgb{display:inline-block;max-width:1520px;background:#0E1422F0;border:4px solid #FFB43A;border-radius:24px;padding:20px 50px 26px;box-shadow:0 12px 40px #0008}
.pgh{font:700 28px 'IBM Plex Mono';letter-spacing:.12em;color:#FFB43A}
.pgq{font:900 66px/1.1 Fraunces;color:#fff;margin-top:8px}
.pgl{display:flex;flex-wrap:wrap;justify-content:center;gap:12px 14px;margin-top:18px}
.pgo{display:inline-block;font:800 30px Inter;color:#1B1420;background:#FFD45A;border-radius:30px;padding:8px 22px;border:3px solid #1B1420}
.insw{position:absolute;left:0;width:1920px;height:200px}
.insb{position:absolute;left:640px;width:640px;height:150px;display:flex;align-items:center;justify-content:center;gap:30px;background:#0E1422EE;border-radius:28px;border:3px solid #ffffff33}
.insx{font:900 50px Inter;color:#fff;background:#E2202A;border-radius:16px;padding:16px 34px;letter-spacing:.01em}
.inss{width:96px;height:96px}
.gx{font:700 22px 'IBM Plex Mono';fill:#C9C2B2}
.gv{font:900 30px Inter;fill:#fff}
</style>
<div id="root" data-composition-id="ui" data-width="1920" data-height="1080" data-layout-allow-overlap>
${H.join('\n')}
</div>
<script>
const tl=gsap.timeline({paused:true});
tl.set({},{},${T});
${J.join('\n')}
window.__timelines["ui"]=tl;
</script>
</template>
`;
  fs.writeFileSync(path.join(P, 'compositions', 'ui.html'), html);
  return { leg: grupos.length, el: (cfg.elementos || []).length, avisos };
}
