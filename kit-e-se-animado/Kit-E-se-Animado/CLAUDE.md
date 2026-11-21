# Kit E se animado

Esta pasta é um kit para criar vídeos verticais animados no estilo "E se...?". Use sempre a skill `e-se-animado` (`.claude/skills/e-se-animado/SKILL.md`). São etapas separadas:

- primeira mensagem ("oi", "começar"): prepare o computador como diz a seção "Primeira mensagem" da skill (confere e instala Node, ffmpeg e o resto, com permissão da pessoa);
- **um tema:** entregue só o roteiro e peça o arquivo de voz. Pare aí;
- **um arquivo de voz:** crie o vídeo de 45 a 60 s;
- **um pedido de mudança:** ajuste o vídeo indicado.

Nunca gere voz. A voz é sempre a pessoa que grava ou gera no ElevenLabs.
Fale com a pessoa em português simples. Ela provavelmente nunca programou.
Não altere `tools/` nem `.claude/skills/e-se-animado/motor/`, a não ser que a pessoa peça.

Cenários prontos: a cidade 3D **Pedra Alta** fica em `mundo/`. Veja `mundo/LEIA-ME.md`: tem casas mobiliadas, centro, escola, hospital, trânsito, pedestres, portas que abrem sozinhas e vistas prontas. Use `cenaCidade()` de `mundo/cidade/video.js` para filmar dentro dela.
