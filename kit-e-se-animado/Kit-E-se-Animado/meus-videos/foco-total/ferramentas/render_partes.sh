#!/bin/bash
# Renderiza o vídeo em pedaços de 10 s (um navegador por vez: pedaços curtos saem bem mais rápidos que partes longas).
# Pula os pedaços que já existem, então pode ser chamado de novo para continuar.
# Uso: ferramentas/render_partes.sh [primeiro] [ultimo]   (índices 0..52)
set -e; cd "$(dirname "$0")/.."
node build.mjs >/dev/null
mkdir -p renders/partes
FIM=840; N=$(python3 -c "import math;print(math.ceil($FIM/10))")
I0=${1:-0}; I1=${2:-$((N-1))}
for i in $(seq $I0 ${PASSO:-1} $I1); do
  a=$((i*10)); b=$(python3 -c "print(min($FIM,($i+1)*10))"); f=renders/partes/p$(printf %02d $i).mp4
  if [ -s $f ]; then echo "pedaco $i ja existe"; continue; fi
  s=$(date +%s); echo "pedaco $i: $a a $b"
  npx --yes hyperframes@0.9.16 render --start $a --end $b -w ${W:-1} --quality high --quiet -o renders/partes/tmp_$i.mp4 . > renders/partes/log_$i.txt 2>&1 || { tail -5 renders/partes/log_$i.txt; exit 1; }
  mv renders/partes/tmp_$i.mp4 $f; echo "pedaco $i pronto em $(( $(date +%s)-s )) s"
done
echo "render completo"
