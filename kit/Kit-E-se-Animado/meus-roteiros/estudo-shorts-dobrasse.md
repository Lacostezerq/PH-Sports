# Estudo: shorts "E se... DOBRASSE"

Vídeos analisados quadro a quadro, 1 quadro por segundo, mais detecção de cortes e análise de áudio:

- **"E se você DOBRASSE de tamanho todo dia?"**: 1min43s, 31 cortes.
- **"E se o seu DINHEIRO dobrasse a cada hora?"**: 1min21s, 13 cortes.

Os dois são verticais, 720x1280 e 30 fps. Os dois arquivos também trazem embutida uma capa horizontal de 1280x720.

---

## 1. A fórmula do roteiro

1. **Gancho escrito, de 0 a 2s.** A pergunta aparece no topo da tela, em letras grandes, com a palavra-chave em amarelo: "E SE VOCÊ **DOBRASSE DE TAMANHO** A CADA DIA?". Ao mesmo tempo já começa uma cena com conflito, alguém chamando o personagem de "tampinha".
2. **Apresentação do problema, de 2 a 15s.** Quem é o personagem e por que ele quer mudar: "17 anos, 1,50 m, baixinho".
3. **O gatilho, de 15 a 20s.** Algo mágico faz a regra começar: "uma noite… uma pílula vermelha… no sonho".
4. **A escada de dobras, a parte principal.** Cada dobra ganha uma cena nova, um número e uma comparação com algo que todo mundo conhece:
   - **Tamanho:** 1,50 → 3 m (cama) → 6 m (quadra de basquete) → 12 m (proibido na liga) → 24 m (prédio de 8 andares) → 48 m (Cristo Redentor) → 96 m (Estátua da Liberdade) → 178 m (pirâmide) → 384 m (Torre Eiffel) → 98 km (espaço) → maior que a Terra.
   - **Dinheiro:** R$ 1 → R$ 32 → conta de luz paga → carro zero → casa vendida → milionário → no jornal → TV → capa de revista → lista dos mais ricos → mais que o PIB do mundo.
5. **O lado ruim, no meio.** Toda vantagem vira problema: proibido de jogar, cada passo vira terremoto, a sombra apaga a cidade, os ossos não aguentam o peso (aparece uma placa com "peso ×8, osso ×4", ciência simples).
6. **O final em loop.** O vídeo volta para a cena do começo ou termina numa frase que fecha a ideia: "melhor ser baixinho" ou de volta para R$ 1,00. Por isso o vídeo dá vontade de rever.
7. **Propaganda no meio.** O vídeo do dinheiro coloca o anúncio do próprio curso em outdoors do cenário e num cartão no final, com "link no perfil".

**Ritmo:** acontece um marco novo a cada 3 a 6 segundos, e nunca passam mais de 5 segundos sem um número novo na tela.

## 2. O que aparece na tela (os "gráficos")

- **Painel fixo no canto de cima à esquerda**, que conta a história sozinho:
  - **Tamanho:** "DIA 3 · 12,00 m", com uma mini-régua comparando o personagem com um objeto (pessoa, prédio, Cristo, pirâmide, Terra).
  - **Dinheiro:** um contador "R$ 8.192,00" que sobe sem parar.
- **Legenda palavra por palavra no meio da tela.** Fonte grossa, branca, com contorno preto e só a palavra-chave em amarelo. Aparecem de 2 a 4 palavras por vez.
- **Placas que surgem no cenário:** manchete de jornal ("CAMPEÃO SEM SUAR"), aviso ("LIGA ESTUDANTIL · PROIBIDO"), notificação de celular ("CONTA DE LUZ · PAGO"), capa de revista ("OS MAIS RICOS DO MUNDO"), placa de "VENDIDO" e TV com "AO VIVO".
- **Celular em close** com o saldo do banco, para os números grandes.
- **Balão de pensamento** para mostrar lembrança ou sonho.

## 3. Câmera e animação

- **Corte a cada 2 a 4 segundos.** No vídeo do dinheiro, cada cena dura mais e a câmera se mexe dentro dela.
- **Ângulos que mostram escala:** câmera baixa olhando para cima quando ele é gigante, câmera de cima vendo a cidade pequena e plano geral com o objeto de comparação ao lado.
- **Close no rosto nas reações**, com olhos e sobrancelhas bem expressivos: surpresa, raiva, deboche, tristeza.
- **Os mesmos 2 ou 3 cenários reaproveitados** (escola, quadra, rua, casa), o que deixa a produção rápida.
- **Pessoas pequenas no fundo**, para dar noção de tamanho e de multidão.
- **Desfoque de movimento** nas transições rápidas.

## 4. Áudio

- **Volume alto: -14 LUFS**, o nível normal dos Shorts e do TikTok, mais alto que os -16 que usamos no YouTube horizontal.
- **Nenhum silêncio.** A música de fundo toca o tempo todo, e o ponto mais baixo fica só uns 8 dB abaixo da média.
- **Efeitos rápidos e frequentes:** whoosh nos cortes, "pop" nas placas e "pling" nos números.
- **Narração rápida e animada**, com vozes de personagens nas falas: "Tampinha?", "Gui?!", "Olha onde pisa!".

## 5. A capa (thumbnail)

Os arquivos trazem uma capa horizontal embutida, no mesmo estilo das thumbs do canal: uma ou duas palavras enormes e o personagem com expressão forte.

## 6. Como isso se encaixa no nosso Kit

| O que eles fazem | Temos no Kit? | Observação |
|---|---|---|
| 3D com cenários simples e bonecos | Sim | O motor three.js que já usamos |
| Legenda palavra por palavra com destaque amarelo | Sim | `ui-h.mjs` / `legendas.mjs`, precisa adaptar para vertical |
| Placas, jornal, notificação, etiqueta | Sim | Elementos `placa`, `etiqueta`, `destaque` |
| Painel fixo "DIA X · tamanho" com régua | Falta | Componente novo, fácil de criar |
| Contador de dinheiro subindo | Quase | Existe o `contador`; falta deixar fixo no canto |
| Celular com tela | Sim | `phoneMesh` + `TELA` |
| Balão de pensamento | Falta | Fácil de criar |
| Áudio a -14 LUFS, música contínua e efeitos rápidos | Sim | É só mudar a mixagem |
| Personagem com rosto muito expressivo | Parcial | O nosso tem olhos expressivos; dá para adicionar sobrancelhas e boca |

**Importante:** o personagem, os nomes e a marca desse canal são deles. Quando você quiser fazer, usamos o mesmo formato (gancho, escada de dobras, painel, legenda), mas com o **seu** personagem e as suas ideias.

## 7. Ideias no mesmo formato (para quando quiser)

- E se a sua **força** dobrasse todo dia?
- E se a sua **velocidade** dobrasse a cada hora? (o canal já tem esse, então seria melhor outro ângulo)
- E se os seus **seguidores** dobrassem todo dia?
- E se o **calor** da Terra dobrasse todo dia?
- E se você **encolhesse pela metade** todo dia? (a versão invertida)

---

## 8. Estudo técnico do 3D: como é feito e como aplicar no nosso

Análise feita em quadros na resolução cheia (720x1280).

### Personagens: 3D de verdade, não recorte
- **Cabeça:** uma esfera de verdade, que gira e recebe luz. O rosto é uma textura pintada na esfera: olhos pretos ovais com ponto de brilho branco, sobrancelhas e boca pequena. As expressões são feitas trocando essa textura (raiva, deboche, surpresa, sono).
- **Corpo de boneco articulado:** tronco em forma de moletom arredondado, braços e pernas em tubos (cápsulas) com juntas, mãos de luva preta sem dedos e tênis grossos.
- **Cabelo:** uma mecha 3D (o topete espetado) ou uma "tigela" de cabelo nos outros personagens.
- **Contorno preto grosso só nos personagens.** O cenário quase não tem contorno, e por isso os personagens se destacam do fundo. É a técnica do "casco invertido": uma cópia preta do modelo, um pouco maior e virada do avesso.
- **Sombreamento "toon" (cel shading):** 2 ou 3 faixas de tom com corte nítido entre luz e sombra, bem visível na cabeça e no moletom. Sem degradê realista.
- **Quadradinho cinza embaixo de cada pé:** é a sombra de contato, um plano sob o pé. Nos vídeos ela aparece quadrada, o que parece um pequeno defeito. No nosso dá para fazer redonda e suave.

### Cenários: "low poly" limpo
- Objetos montados com formas simples (caixas com quina levemente arredondada, cilindros), cada peça com uma cor lisa e quase sem textura.
- Texturas só onde ajudam a ler a cena: piso de azulejo, grama com manchas, faixas da rua, telhas.
- Árvores de bolinhas facetadas (low poly), casas de caixa com telhado de duas águas e prédios com janelas em grade.
- **Cores pastel e alegres:** azul-claro, amarelo, verde-menta, rosa e terracota.

### Luz e acabamento
- **Bem clara e com pouco contraste:** muita luz ambiente, um sol suave com sombra macia e quase sem área escura.
- Leve brilho geral (glow suave), vinheta fraca e um pouco de granulação.
- **Pouco desfoque de fundo:** tudo fica legível no celular.
- **Isso é o contrário do nosso estilo atual**, que é escuro e cinematográfico, com muito desfoque, bloom e vinheta forte.

### Câmera
- Lente grande-angular. O personagem ocupa de 40 a 70% da tela vertical.
- **Para mostrar escala:** câmera baixa olhando para cima (gigante), câmera de cima vendo a cidade como maquete, e plano geral com o objeto de comparação ao lado.
- Close extremo no rosto nas reações.
- Movimentos curtos e retos (avança, sobe, gira um pouco) e corte seco a cada 2 a 4 segundos.

### Multidões
Muitas pessoas pequenas, todas do mesmo boneco simples com cores diferentes de roupa e cabelo. Dão escala e vida à cena sem pesar no render.

### Como aplicar no nosso motor (three.js)
| Recurso deles | Como fazemos | Esforço |
|---|---|---|
| Personagem 3D (esfera + cápsulas articuladas) | Novo `char3d.js` com `SphereGeometry`, `CapsuleGeometry` e juntas (grupos) para pose | Médio |
| Rosto com expressões | Textura de rosto em canvas na esfera (já desenhamos olhos assim em `char.js`); trocar a textura por expressão | Baixo |
| Contorno preto | Casco invertido: cópia com `BackSide`, preta, escala 1.04, só nos personagens | Baixo |
| Cel shading | `MeshToonMaterial` com `gradientMap` de 3 tons | Baixo |
| Cenário low poly pastel | Já temos `box`, `casa`, `tree`; falta uma paleta pastel e quinas arredondadas | Baixo |
| Luz clara e suave | Novo preset de luz "dia de desenho": hemisfério forte, sol suave, sombra macia | Baixo |
| Acabamento limpo | Preset de pós-processamento: bloom fraco, desfoque quase zero, vinheta .2 | Baixo |
| Sombra de contato | Disco com degradê sob cada pé | Baixo |
| Multidão | Já existe `crowd()`; trocar pelo boneco 3D simplificado | Médio |

**Plano sugerido:**
1. Criar o personagem 3D com contorno e cel shading.
2. Fazer **uma imagem de teste** com o seu personagem nesse estilo, para você aprovar o visual.
3. Só depois disso usar o estilo num vídeo.
