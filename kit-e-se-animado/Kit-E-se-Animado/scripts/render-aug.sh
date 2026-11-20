#!/bin/bash
# renderiza partes para FORA do projeto ($S/partes_aug) para não estourar o limite de 2 GB do plano
KIT=$(cd "$(dirname "$0")/.." && pwd); PROJ=${PROJ:-augusto}; S=${SAIDA:-/tmp/kit-saida}; mkdir -p $S
P=$KIT/meus-videos/$PROJ; O=$S/partes_aug
cd $P; mkdir -p partes $O; export NODE_USE_ENV_PROXY=1
B=(0 60 120 180 240 300 360 420 480 516.63)
for i in "$@"; do out=$O/parte_$i.mp4; [ -s "$out" ] && { echo "parte $i já existe" >> partes/log.txt; continue; }
  echo "$(date +%H:%M:%S) começando parte $i (${B[$i]}-${B[$((i+1))]})" >> partes/log.txt; rm -f $O/_tmp_$i.mp4
  npx --yes hyperframes@0.9.16 render --output $O/_tmp_$i.mp4 --quality high --fps 24 --start ${B[$i]} --end ${B[$((i+1))]} > $O/render_$i.log 2>&1 && mv $O/_tmp_$i.mp4 "$out"
  echo "$(date +%H:%M:%S) fim parte $i status=$?" >> partes/log.txt; done
