# Pedra Alta: a cidade 3D dos vídeos

Pedra Alta é uma cidade do interior de São Paulo **inventada**. Ela foi feita para servir de cenário em qualquer vídeo do kit. Fica guardada nesta pasta (`mundo/`) e vai junto para o GitHub.

## O que tem na cidade

**Mapa:** 5 x 4 quadras, com ruas com nome, calçadas, faixas de pedestre, postes, placas de rua, semáforos e pontos de ônibus. Em volta:
- a serra com a **Pedra Alta**, a pedra famosa da cidade;
- morros com mata e antenas;
- o **lago**, com orla, deck, quiosques e pedalinhos.

**Casas** (mais de 100):
- Todas têm muro, portão de garagem, portão social, jardim, carro ou bicicleta, telhado de telha ou laje, e quintal com churrasqueira, mesa, varal e casinha de cachorro.
- **Por dentro**, todas têm sala, cozinha, área de serviço, banheiro, corredor e dois quartos, com todos os móveis: sofá, TV ligada, estante, ventilador girando, fogão, geladeira, pia, mesa, camas, guarda-roupa, computador, quadros e cortinas.
- **Os sobrados** têm o andar de cima com quartos e varanda.
- **A casa da família** fica na Rua das Flores. É a casa do Guilherme, do Seu Marcos e da Dona Regina, e tem o cachorro caramelo no quintal.

**Centro:**
- **Praça da Matriz:** igreja com torre, sino, relógio, vitrais, bancos e altar por dentro. Tem também coreto, fonte com água, parquinho com balanço, banca de jornal, pipoqueiro, pombos, ipês e palmeiras.
- **Lojas,** todas com o lado de dentro montado: padaria, farmácia, lotérica, lanchonete, banco, supermercado, sorveteria, loja de roupas, bar com sinuca e loja de materiais.
- **Prefeitura:** colunas, escadaria e bandeiras balançando.

**Outros lugares:**
- **Escola:** salas de aula com alunos, lousa e carteiras, além de pátio, cantina, quadra coberta e bandeira.
- **Santa Casa (hospital):** recepção, sala de espera, consultório, enfermaria com leitos e ambulância com a sirene piscando.
- **Rodoviária:** guichês, quadro de horários, ônibus na plataforma e ponto de táxi.
- **Posto de gasolina:** bombas, loja de conveniência, lava-rápido e totem de preços.
- **Campo de futebol de várzea:** traves, arquibancada, refletores e vestiário.

## O que funciona sozinho

- **Hora do dia:** céu, sol, sombras, pôr do sol e noite com estrelas. À noite acendem os postes, as luzes das casas, os letreiros e os refletores.
- **Carros e ônibus** andam pelas ruas na mão certa. Param no semáforo vermelho, não batem um no outro e fazem curva nas esquinas. O ônibus para no ponto.
- **Pedestres** andam nas calçadas.
- **Figurantes:** atendentes nas lojas, pessoas sentadas na praça, na igreja e no hospital, e alunos na escola.
- **Personagens desviam de tudo:** quando um personagem anda, ele mesmo acha o caminho. Desvia de parede, móvel, carro e árvore, passa pelas portas e atravessa a rua pela faixa. **As portas abrem sozinhas** quando alguém chega perto.
- **Coisas que se mexem:**
  - as TVs trocam de canal;
  - os ventiladores giram;
  - os relógios marcam a hora da cidade;
  - a fonte jorra água e o lago tem ondinhas;
  - os pedalinhos boiam e as bandeiras balançam;
  - os passarinhos voam, os pombos andam e o cachorro abana o rabo;
  - a senha do banco muda e a cruz da farmácia pisca à noite.

## Como ver a cidade

Na pasta do kit, rode `node mundo/ver/build.mjs` e depois abra `mundo/ver/ver.html` no navegador. No fim do endereço você pode pôr:
- `?vista=praca` mostra uma vista pronta. A lista de vistas está abaixo.
- `?vista=sala&hora=20` mostra a mesma vista em outra hora.
- `?livre=1&cx=60&cy=40&cz=60` deixa você girar a câmera com o mouse.

## Como usar num vídeo

```js
import { cenaCidade, ator } from '../../../mundo/cidade/video.js';
import { GUI30 } from '../../../mundo/base/elenco.js';

export const CENAS = [
  cenaCidade(0, 5, { vista: 'casaFrente' }),                              // vista pronta
  cenaCidade(5, 12, { vista: 'sala', mover: [[0, 'sala'], [7, 'salaTV']] }), // câmera passeando
  cenaCidade(12, 20, { vista: 'casaFrente' }, (C) => {                    // Guilherme chega em casa
    const k = ator(C, GUI30);
    C.andar(k, ['casaFamilia.rua', 'casaFamilia.portao', 'casaFamilia.sala'], 12.5);
  }),
];
```

## Vistas prontas

- **Casa da família:** `casaFrente`, `portao`, `sala`, `salaTV`, `cozinha`, `mesaJantar`, `quartoFilho`, `quartoCasal`, `banheiro`, `servico`, `quintal`.
- **Centro:**
  - praça: `praca`, `pracaChao`, `igreja`, `igrejaDentro`, `coreto`, `fonte`, `parquinho`;
  - rua: `avenida`;
  - lojas: `padaria`, `padariaFrente`, `farmacia`, `loterica`, `lanchonete`, `banco`, `mercado`, `sorveteria`, `lojaRoupas`, `bar`;
  - prédio público: `prefeitura`.
- **Escola:** `escola`, `salaDeAula`, `quadra`.
- **Hospital:** `hospital`, `salaEspera`, `enfermaria`, `consultorio`.
- **Outros lugares:** `rodoviaria`, `plataforma`, `posto`, `campo`.
- **Paisagens:** `cidadeAerea`, `pedraAlta`, `lago`, `ruaDasFlores`, `noitePraca`.

## Lugares para os personagens irem

Os lugares têm o nome no formato `lugar.parte`.
- **Casa da família:** `casaFamilia.rua`, `casaFamilia.portao`, `casaFamilia.frente`, `casaFamilia.garagem`, `casaFamilia.sala`, `casaFamilia.cozinha`, `casaFamilia.quarto1`, `casaFamilia.quarto2`, `casaFamilia.banheiro`, `casaFamilia.quintal`.
- **Praça:** `praca.centro`, `praca.coreto`, `praca.fonte`, `praca.igrejaFrente`, `praca.igrejaDentro`, `praca.altar`, `praca.parquinho`, `praca.banca`.
- **Lojas:** `padaria.entrada`, `padaria.dentro` e o mesmo para todas as lojas.
- **Escola:** `escola.portao`, `escola.patio`, `escola.quadra`, `escola.sala1`.
- **Santa Casa:** `santaCasa.entrada`, `santaCasa.espera`, `santaCasa.consultorio`, `santaCasa.enfermaria`.
- **Rodoviária:** `rodoviaria.entrada`, `rodoviaria.plataforma`.
- **Posto:** `posto.bombas`, `posto.loja`.
- **Campo:** `campo.meio`, `campo.arquibancada`.
- **Outros:** `pontoPraca` (ponto de ônibus) e `lago.deck`.

## Como a cidade foi feita (para quem programa)

| Arquivo | O que tem |
|---|---|
| `cidade/mapa.js` | ruas, quadras e o que fica em cada lote |
| `cidade/casas.js` | casas e sobrados com a planta e os móveis |
| `cidade/lojas.js` | comércio e prefeitura |
| `cidade/publicos.js` | praça, igreja, escola, hospital, rodoviária, posto e campo |
| `cidade/moveis.js` | todos os móveis e objetos |
| `cidade/construcao.js` | paredes, portas, janelas, telhados |
| `cidade/natureza.js` | árvores, serra, lago, nuvens |
| `cidade/ruas.js` | asfalto, calçadas, postes, semáforos, placas |
| `cidade/hora.js` | céu e luz conforme a hora |
| `cidade/vida.js` | trânsito, pedestres, figurantes, animais |
| `cidade/nav.js` | caminhos, colisão e portas automáticas |
| `cidade/vistas.js` | vistas prontas |
| `cidade/video.js` | atalho para usar nos vídeos |
| `base/` | cópia do motor do kit (o original não foi alterado) |

Para o vídeo ficar leve, a cidade inteira é montada só por fora. O lado de dentro é montado apenas perto de onde a câmera está filmando. Por isso o `foco` (ou a `vista`) diz onde fica a cena.
