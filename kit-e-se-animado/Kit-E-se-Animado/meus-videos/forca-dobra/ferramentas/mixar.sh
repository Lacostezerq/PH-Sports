#!/bin/bash
# Mixagem final: voz + efeitos sonoros (baixos, abaixam quando alguém fala), sem música, -16 LUFS.
set -e; cd "$(dirname "$0")/../assets/audio"
F='[0:a]aformat=channel_layouts=stereo,asplit=2[v][vk];[1:a]volume=0.22[f0];[f0][vk]sidechaincompress=threshold=0.03:ratio=4:attack=30:release=400:makeup=1[fx];[v][fx]amix=inputs=2:normalize=0:duration=first[mix]'
ffmpeg -y -v error -i voz.wav -i efeitos.wav -filter_complex "$F" -map "[mix]" -ar 48000 pre_mix.wav
G=${1:-7.6}
ffmpeg -y -v error -i pre_mix.wav -af "volume=${G}dB,alimiter=limit=0.85:attack=5:release=60:level=disabled" -ar 48000 mix_final.wav
ffmpeg -i mix_final.wav -af ebur128=peak=true -f null - 2>&1 | grep -E "^ +(I|Peak|LRA):"
