# Melhorias da versão 2 (vídeo "E se a velocidade dobrasse toda semana")

Este kit já vem com as correções e melhorias. O projeto `meus-videos/augusto` é o modelo completo para seguir o mesmo estilo (1920x1080, YouTube):

- `src/motor/toon.js`: corrige o contorno dos personagens, que fazia faixas pretas passarem na tela.
- `src/lib.js`: a câmera se mexe o tempo todo e chega mais perto nas cenas longas.
- `src/vida.js`: personagens respirando e piscando, mais vida nos cenários (passarinhos, vapor, ventilador, fogo).
- `src/interiores.js`, `src/cenas*.js`: cenários mais detalhados e sem sombras ou objetos flutuando.
- `compositions/` + `ui.json`: cartões de fatos e o velocímetro (tipos `fato` e `velocimetro`).
- `scripts/render-aug.sh` e `scripts/montar-aug.sh`: renderizam em partes de 60 s e montam com voz, música e efeitos (-16 LUFS).
  Use `PROJ=<pasta do projeto> SAIDA=<pasta temporária>` antes do comando.

Os vídeos, as partes e os áudios (voz.wav) não foram salvos aqui por serem grandes demais.
Para um canal novo: copie a pasta `meus-videos/augusto` com outro nome e crie personagens novos em `src/elenco.js`.
