#!/bin/bash
set -e
KIT=$(cd "$(dirname "$0")/.." && pwd); PROJ=${PROJ:-augusto}; S=${SAIDA:-/tmp/kit-saida}; mkdir -p $S
cd $S/partes_aug; for i in 0 1 2 3 4 5 6 7 8; do [ -s parte_$i.mp4 ] || { echo "falta parte $i"; exit 1; }; done
ls parte_*.mp4 | sort -V | sed "s/^/file '/; s/\$/'/" > lista.txt
ffmpeg -v error -y -f concat -safe 0 -i lista.txt -c:v copy -an video.mp4
ffmpeg -v error -y -i $P/assets/audio/voz.wav -i $S/audioAug/musica.wav -i $S/audioAug/efeitos.wav -filter_complex "[0]aresample=48000,volume=1.9dB,apad,atrim=0:516.63,asplit=2[v][vsc];[1]volume=-10dB[m];[m][vsc]sidechaincompress=threshold=0.05:ratio=3:attack=20:release=500[md];[2]volume=-8dB[f];[v][md][f]amix=inputs=3:normalize=0:duration=first,alimiter=limit=0.84:attack=5:release=120:level=false,afade=t=out:st=514.3:d=2.3[a]" -map "[a]" -ac 2 -c:a pcm_s16le mix.wav
ffmpeg -v error -y -i video.mp4 -i mix.wav -map 0:v -map 1:a -c:v libx264 -preset slow -tune animation -crf 20 -pix_fmt yuv420p -profile:v high -level 4.1 -c:a aac -b:a 192k -ar 48000 -movflags +faststart -shortest $P/augusto.mp4
ls -la $P/augusto.mp4; ffmpeg -nostats -i $P/augusto.mp4 -af ebur128=peak=true -f null - 2>&1 | grep -A14 Summary | grep -E " I:|Peak:"
echo pronto
