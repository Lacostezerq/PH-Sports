// Monta o tour: node meus-videos/tour-pedra-alta/build.mjs (da pasta do kit)
import fs from 'node:fs'; import path from 'node:path'; import { createRequire } from 'node:module'; import { fileURLToPath } from 'node:url';
const P = path.dirname(fileURLToPath(import.meta.url)), KIT = path.resolve(P, '..', '..');
const esbuild = createRequire(path.join(KIT, 'package.json'))('esbuild');
const out = path.join(P, 'assets', 'js', 'film.js');
esbuild.buildSync({ entryPoints: [path.join(P, 'src', 'main.js')], bundle: true, minify: true, format: 'iife', outfile: out, logLevel: 'error', nodePaths: [path.join(KIT, 'node_modules')] });
let s = fs.readFileSync(out, 'utf8');
s = 'var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}\n' + s.replaceAll('Math.random()', '__sr()').replaceAll('performance.now()', '0').replaceAll('requestAnimationFrame', '__noRaf').replaceAll('cancelAnimationFrame', '__noCaf');
fs.writeFileSync(out, s);

// legenda com o nome de cada lugar
const leg = (await import(path.join(P, 'src', 'legendas.mjs'))).default;
const L = leg.L, D = leg.D;
let html = `<template>\n<style>\n@font-face{font-family:'Fraunces';src:url('assets/fonts/fraunces-black.ttf');font-weight:900}\n#root{position:absolute;inset:0}\n.lg{position:absolute;left:70px;bottom:80px;opacity:0}\n.lg .n{font:900 74px Fraunces;color:#fff;text-shadow:0 4px 0 #0008,0 0 26px #000a;letter-spacing:.01em}\n.lg .s{font:700 34px Inter;color:#FFE7B8;text-shadow:0 2px 0 #000a,0 0 14px #000c;margin-top:4px}\n.lg .b{width:120px;height:8px;background:#F2C230;border-radius:4px;margin-bottom:14px}\n</style>\n<div id="root" data-composition-id="ui" data-width="1920" data-height="1080">\n`;
L.forEach(([a, b, n, s2], i) => { html += `<div class="lg" id="l${i}"><div class="b"></div><div class="n">${n}</div>${s2 ? `<div class="s">${s2}</div>` : ''}</div>\n`; });
html += `</div>\n<script>\nconst tl=gsap.timeline({paused:true});\n`;
L.forEach(([a, b], i) => { html += `tl.fromTo("#l${i}",{opacity:0,x:-30},{opacity:1,x:0,duration:.5,ease:"power3.out"},${a});tl.to("#l${i}",{opacity:0,duration:.4},${b - .4});\n`; });
html += `tl.set({}, {}, ${D});\nwindow.__timelines["ui"]=tl;\n</script>\n</template>\n`;
fs.writeFileSync(path.join(P, 'compositions', 'ui.html'), html);
console.log('✓ tour montado');
