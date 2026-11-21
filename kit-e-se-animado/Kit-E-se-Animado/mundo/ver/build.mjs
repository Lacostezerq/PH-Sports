// Monta a prévia: node mundo/ver/build.mjs  (depois abra mundo/ver/ver.html no navegador)
import path from 'node:path'; import { fileURLToPath } from 'node:url'; import { createRequire } from 'node:module';
const P = path.dirname(fileURLToPath(import.meta.url)), KIT = path.resolve(P, '..', '..');
const esbuild = createRequire(path.join(KIT, 'package.json'))('esbuild');
esbuild.buildSync({ entryPoints: [path.join(P, 'main.js')], bundle: true, minify: !process.argv.includes('--dev'), sourcemap: process.argv.includes('--dev') ? 'inline' : false, format: 'iife', outfile: path.join(P, 'ver.js'), logLevel: 'error', nodePaths: [path.join(KIT, 'node_modules')] });
console.log('✓ prévia montada');
