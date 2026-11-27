#!/bin/bash
# Mixagem final: voz + efeitos (abaixam quando alguém fala) + música baixinha (abaixa mais ainda na voz), -16 LUFS.
set -e; cd "$(dirname "$0")/../assets/audio"
F='[0:a]aformat=channel_layouts=stereo,acompressor=threshold=0.08:ratio=3:attack=5:release=120:makeup=2,asplit=3[v][vk][vk2];[1:a]volume=0.30[f0];[f0][vk]sidechaincompress=threshold=0.03:ratio=4:attack=30:release=400:makeup=1[fx];[2:a]volume=0.30[m0];[m0][vk2]sidechaincompress=threshold=0.02:ratio=6:attack=40:release=600:makeup=1[mu];[v][fx][mu]amix=inputs=3:normalize=0:duration=first[mix]'
ffmpeg -y -v error -i voz.wav -i efeitos.wav -i musica.wav -filter_complex "$F" -map "[mix]" -ar 48000 pre_mix.wav
I=$(ffmpeg -i pre_mix.wav -af ebur128 -f null - 2>&1 | grep -E "^ +I:" | tail -1 | awk '{print $2}')
G=$(python3 -c "print(round(-16-($I),2))")
ffmpeg -y -v error -i pre_mix.wav -af "volume=${G}dB,alimiter=limit=0.79:attack=5:release=60:level=disabled" -ar 48000 mix_final.wav
ffmpeg -i mix_final.wav -af ebur128=peak=true -f null - 2>&1 | grep -E "^ +(I|Peak):"
