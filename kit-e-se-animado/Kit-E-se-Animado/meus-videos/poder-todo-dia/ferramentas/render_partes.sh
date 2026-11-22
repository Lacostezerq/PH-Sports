#!/bin/bash
# Renderiza o vídeo em partes (processos separados, para não faltar memória), junta e coloca o áudio final.
# Uso: ferramentas/render_partes.sh [primeira_parte] [ultima_parte]
set -e; cd "$(dirname "$0")/.."
node build.mjs >/dev/null
mkdir -p renders/partes
CORTES=(0 60 120 180 240 300 360 420 480 525.5)
I0=${1:-0}; I1=${2:-8}
for i in $(seq $I0 $I1); do
  a=${CORTES[$i]}; b=${CORTES[$((i+1))]}
  echo "parte $i: $a a $b"
  npx --yes hyperframes@0.9.16 render --start $a --end $b -w 3 --quality high --quiet -o renders/partes/p$i.mp4 . || exit 1
done
