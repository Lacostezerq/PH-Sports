// MAPA DE PEDRA ALTA — cidade do interior de São Paulo, inventada.
// Medidas em metros. x cresce para o LESTE, z cresce para o SUL. O chão é y = 0; a calçada fica 0,15 m acima.
//
//            NORTE (serra e a Pedra Alta ao fundo)
//   x:  -150   -90   -30    30    90   150
//  z=-120 ┼─────┼─────┼─────┼─────┼─────┼   Rua da Serra
//         │ res │ res │ com │ STC │ rod │      (STC = Santa Casa, rod = rodoviária)
//  z=-60  ┼─────┼─────┼─────┼─────┼─────┼   Rua Sete de Setembro
//         │ res │ com │PRAÇA│ com │ res │
//  z=0    ┼─────┼─────┼─────┼─────┼─────┼   Avenida Brasil (principal)
//         │ res │ESCOL│ com │ res │posto│
//  z=60   ┼─────┼─────┼─────┼─────┼─────┼   Rua das Flores (casa da família)
//         │ res │ res │ res │ res │campo│
//  z=120  ┼─────┼─────┼─────┼─────┼─────┼   Rua do Lago
//            SUL (orla do lago)

export const RUA = 10;          // largura do asfalto
export const CALC = 3;          // largura da calçada
export const MEIOFIO = .15;     // altura da calçada
export const XS = [-150, -90, -30, 30, 90, 150];   // ruas norte-sul (eixo)
export const ZS = [-120, -60, 0, 60, 120];          // ruas leste-oeste (eixo)
export const NOMES_X = ['Rua do Ipê', 'Rua Tiradentes', 'Rua da Matriz', 'Rua São Benedito', 'Rua dos Tropeiros', 'Estrada Velha'];
export const NOMES_Z = ['Rua da Serra', 'Rua Sete de Setembro', 'Avenida Brasil', 'Rua das Flores', 'Rua do Lago'];
export const QUADRA = 60 - RUA - 2 * CALC; // 44 m de lado útil

/** Centro de cada quadra: col 0..4 (oeste→leste), lin 0..3 (norte→sul). */
export const qx = (col) => (XS[col] + XS[col + 1]) / 2;
export const qz = (lin) => (ZS[lin] + ZS[lin + 1]) / 2;

// tipo de cada quadra [lin][col]
export const QUADRAS = [
  ['res', 'res', 'comN', 'santaCasa', 'rodoviaria'],
  ['res', 'comW', 'praca', 'comE', 'res'],
  ['res', 'escola', 'comS', 'res', 'posto'],
  ['res', 'res', 'res', 'res', 'campo'],
];

const LW = QUADRA / 4, LD = QUADRA / 2; // lote padrão 11 x 22 m

/**
 * Lista de lotes: { tipo, nome, x, z, w, d, frente, seed }.
 * frente = lado que dá para a rua ('n','s','e','w'). Cada construtor desenha o lote com a frente em +z local.
 */
export function lotes() {
  const L = []; let seed = 1;
  const fila = (cx, cz, tipos, nomes = []) => {
    // 4 lotes virados para o norte (metade de cima) e 4 para o sul (metade de baixo)
    for (let i = 0; i < 4; i++) { const x = cx - QUADRA / 2 + LW * (i + .5);
      L.push({ tipo: tipos[i] || 'casa', nome: nomes[i], x, z: cz - LD / 2, w: LW, d: LD, frente: 'n', seed: seed++ });
      L.push({ tipo: tipos[i + 4] || 'casa', nome: nomes[i + 4], x, z: cz + LD / 2, w: LW, d: LD, frente: 's', seed: seed++ }); }
  };
  for (let lin = 0; lin < 4; lin++) for (let col = 0; col < 5; col++) {
    const t = QUADRAS[lin][col], cx = qx(col), cz = qz(lin);
    if (t === 'res') {
      // a casa da família fica na Rua das Flores (quadra lin 3, col 1), segundo lote, virada para o norte
      if (lin === 3 && col === 1) fila(cx, cz, ['casa', 'casaFamilia', 'casa', 'sobrado', 'casa', 'casa', 'sobrado', 'casa'], [null, 'casaFamilia']);
      else fila(cx, cz, (seed % 3 === 0) ? ['casa', 'sobrado', 'casa', 'casa', 'casa', 'casa', 'sobrado', 'casa'] : ['casa', 'casa', 'sobrado', 'casa', 'sobrado', 'casa', 'casa', 'casa']);
    } else if (t === 'comW') fila(cx, cz, ['casa', 'sobrado', 'casa', 'casa', 'casa', 'casa', 'sobrado', 'casa']) ;
    else if (t === 'comE') fila(cx, cz, ['casa', 'casa', 'sobrado', 'casa', 'casa', 'sobrado', 'casa', 'casa']);
    else if (t === 'comS') fila(cx, cz, ['casa', 'sobrado', 'casa', 'casa', 'casa', 'casa', 'casa', 'sobrado']);
    else if (t === 'comN') fila(cx, cz, ['sobrado', 'casa', 'casa', 'sobrado', 'casa', 'casa', 'casa', 'casa']);
    else L.push({ tipo: t, nome: t, x: cx, z: cz, w: QUADRA, d: QUADRA, frente: 's', seed: seed++ });
  }
  // As lojas ficam de frente para a praça: troca os lotes certos por comércio.
  const troca = (x, z, tipo, nome, extra = {}) => { const i = L.findIndex(l => Math.abs(l.x - x) < 1 && Math.abs(l.z - z) < 1); if (i >= 0) Object.assign(L[i], { tipo, nome, ...extra }); };
  // Quadra oeste da praça (comW, centro -60,-30): lotes da fila sul (z = -19) dão para a Avenida Brasil; usa a fila norte p/ Rua Sete
  const cW = qx(1), cE = qx(3), zN = qz(1) - LD / 2, zS = qz(1) + LD / 2;
  troca(cW - QUADRA / 2 + LW * 3.5, zS, 'padaria', 'padaria');
  troca(cW - QUADRA / 2 + LW * 2.5, zS, 'farmacia', 'farmacia');
  troca(cW - QUADRA / 2 + LW * 1.5, zS, 'loterica', 'loterica');
  troca(cW - QUADRA / 2 + LW * 3.5, zN, 'lanchonete', 'lanchonete');
  troca(cE - QUADRA / 2 + LW * .5, zS, 'banco', 'banco');
  troca(cE - QUADRA / 2 + LW * 1.5, zS, 'mercado', 'mercado', { w: LW * 2, x: cE - QUADRA / 2 + LW * 2 });
  L.splice(L.findIndex(l => Math.abs(l.x - (cE - QUADRA / 2 + LW * 2.5)) < 1 && Math.abs(l.z - zS) < 1), 1);
  troca(cE - QUADRA / 2 + LW * 3.5, zS, 'sorveteria', 'sorveteria');
  troca(cE - QUADRA / 2 + LW * .5, zN, 'lojaRoupas', 'lojaRoupas');
  const cS = qx(2), zS2 = qz(2) - LD / 2; // quadra sul da praça, fila norte = Av. Brasil
  troca(cS - QUADRA / 2 + LW * .5, zS2, 'bar', 'bar');
  troca(cS - QUADRA / 2 + LW * 1.5, zS2, 'prefeitura', 'prefeitura', { w: LW * 2, x: cS - QUADRA / 2 + LW * 2 });
  L.splice(L.findIndex(l => Math.abs(l.x - (cS - QUADRA / 2 + LW * 2.5)) < 1 && Math.abs(l.z - zS2) < 1), 1);
  troca(cS - QUADRA / 2 + LW * 3.5, zS2, 'lojaMateriais', 'lojaMateriais');
  return L;
}

/** Ponto de ônibus, semáforos e faixas de pedestre. */
export const SEMAFOROS = [[-30, -60], [30, -60], [-30, 0], [30, 0]];
export const PONTOS_ONIBUS = [{ x: -10, z: 6.6, ry: Math.PI, nome: 'pontoPraca' }, { x: 36.6, z: -30, ry: -Math.PI / 2, nome: 'pontoRodoviaria' }];
