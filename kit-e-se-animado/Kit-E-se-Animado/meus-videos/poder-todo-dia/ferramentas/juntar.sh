#!/bin/bash
# Junta as partes e troca o áudio pela mixagem final (voz + efeitos, -16 LUFS).
set -e; cd "$(dirname "$0")/.."
rm -f renders/partes/lista.txt; for i in 0 1 2 3 4 5 6 7 8; do echo "file 'p$i.mp4'" >> renders/partes/lista.txt; done
ffmpeg -y -v error -f concat -safe 0 -i renders/partes/lista.txt -an -c:v copy renders/video_sem_audio.mp4
ffmpeg -y -v error -i renders/video_sem_audio.mp4 -i assets/audio/mix_final.wav -map 0:v -map 1:a -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -r 30 -movflags +faststart -c:a aac -b:a 192k -ar 48000 -t 525.5 renders/poder-todo-dia.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 renders/poder-todo-dia.mp4
