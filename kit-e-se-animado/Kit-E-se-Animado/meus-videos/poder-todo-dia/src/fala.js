// Sincronia labial: abertura/arredondamento da boca a 30 fps, calculados do áudio de cada fala.
import F from '../assets/audio/falas.json';
import W from '../assets/audio/transcript.json';
export const TOTAL = F.total;
export const SEGS = F.segs;
/** Boca de `quem` no tempo absoluto t (s). lento>1 estica o movimento (fala arrastada). */
export function boca(quem, t) {
  for (const f of F.falas) {
    if (f.quem !== quem || t < f.start - .05 || t > f.end + .05) continue;
    const x = (t - f.start) * 30, i = Math.floor(x), k = x - i; const a = f.boca[Math.max(0, Math.min(f.boca.length - 1, i))] || 0, b = f.boca[Math.max(0, Math.min(f.boca.length - 1, i + 1))] || 0;
    const r = f.round[Math.max(0, Math.min(f.round.length - 1, Math.round(x)))] || 0;
    return { open: a + (b - a) * k, round: r };
  }
  return { open: 0, round: 0 };
}
export const falando = (quem, t) => F.falas.some(f => f.quem === quem && t >= f.start && t <= f.end);
/** Tempo de início da palavra de índice i (ver PALAVRAS_IDX.txt). */
export const w = (i) => W[i].start;
export const we = (i) => W[i].end;
