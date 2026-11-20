#!/bin/bash
# Mixagem final: voz + música (só nos trechos importantes, abaixa na fala) + efeitos (baixos), -16 LUFS.
set -e; cd "$(dirname "$0")/../assets/audio"
python3 ../../ferramentas/musica_trechos.py musica.wav musica_trechos.wav
F='[0:a]aformat=channel_layouts=stereo,asplit=3[v][vk][vk2];[1:a]volume=0.30[m];[m][vk]sidechaincompress=threshold=0.02:ratio=8:attack=40:release=450:makeup=1[md];[2:a]volume=0.20[f0];[f0][vk2]sidechaincompress=threshold=0.03:ratio=3:attack=30:release=400:makeup=1[fx];[v][md][fx]amix=inputs=3:normalize=0:duration=first[mix]'
ffmpeg -y -v error -i voz.wav -i musica_trechos.wav -i efeitos.wav -filter_complex "$F" -map "[mix]" -ar 48000 pre_mix.wav
G=${1:-5.8}
ffmpeg -y -v error -i pre_mix.wav -af "volume=${G}dB,alimiter=limit=0.78:attack=5:release=60:level=disabled" -ar 48000 mix_final.wav
ffmpeg -i mix_final.wav -af ebur128=peak=true -f null - 2>&1 | grep -E "^ +(I|Peak):"
