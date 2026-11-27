// Monta este projeto (1920x1080): junta as cenas 3D em assets/js/film.js e gera compositions/ui.html
// (legendas, etiquetas, cartões de fatos, medidor da carteira, placar, gráfico).
// Rode da pasta do kit: node meus-videos/foco-total/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const P = path.dirname(fileURLToPath(import.meta.url));
const KIT = path.resolve(P, '..', '..');
const require = createRequire(path.join(KIT, 'package.json'));
const esbuild = require('esbuild');
const out = path.join(P, 'assets', 'js', 'film.js');
if (!process.argv.includes('--so-ui')) {
  esbuild.buildSync({ entryPoints: [path.join(P, 'src', 'main.js')], bundle: true, minify: !process.env.DEV, sourcemap: process.env.DEV ? 'inline' : false, format: 'iife', outfile: out, logLevel: 'error', nodePaths: [path.join(KIT, 'node_modules')] });
  let s = fs.readFileSync(out, 'utf8');
  s = 'var __srv=1;function __sr(){__srv=(__srv*16807)%2147483647;return __srv/2147483647}function __noRaf(){return 0}function __noCaf(){}\n' + s.replaceAll('Math.random()', '__sr()').replaceAll('performance.now()', '0').replaceAll('requestAnimationFrame', '__noRaf').replaceAll('cancelAnimationFrame', '__noCaf');
  fs.writeFileSync(out, s);
}
if (!fs.existsSync(path.join(P, 'assets', 'audio', 'transcript_final.json'))) { console.log('✓ 3D montado (sem UI ainda)'); process.exit(0); }
const { gerarUI } = await import('./gerar-ui.mjs');
const n = gerarUI(P);
console.log(`✓ 3D montado · ✓ UI com ${n.leg} legendas e ${n.el} elementos`);
for (const a of n.avisos) console.log('  ⚠ ' + a);
