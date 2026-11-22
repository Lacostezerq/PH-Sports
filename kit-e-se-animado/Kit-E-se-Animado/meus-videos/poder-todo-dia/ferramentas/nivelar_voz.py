# Deixa todas as falas na mesma altura: mede cada frase e ajusta o ganho (com transições suaves). Saída: assets/audio/voz.wav
import json, sys, wave, numpy as np
S, P = sys.argv[1], sys.argv[2]
x = np.load(S + '/bruto.npy'); sr = 48000
R = json.load(open(P + '/assets/audio/transcript_final.json'))
# frases: quebra em pontuação final, troca de voz ou pausa
fr = []; ini = 0
for i, w in enumerate(R):
    fim = i == len(R) - 1 or w['text'][-1] in '.!?:' or R[i + 1]['quem'] != w['quem'] or R[i + 1]['start'] - w['end'] > .35
    if fim: fr.append((R[ini]['start'], w['end'], w['quem'])); ini = i + 1
def lufs_aprox(seg):
    h = int(.03 * sr); n = len(seg) // h
    if n < 3: return None
    e = (seg[:n * h].reshape(n, h) ** 2).mean(1); db = 10 * np.log10(e + 1e-12)
    v = e[db > -48]
    if len(v) < 8: return None  # frase curta demais: deixa como está
    return float(10 * np.log10(v.mean()))
L = []
for a, b, q in fr:
    L.append(lufs_aprox(x[int(a * sr):int(b * sr)]))
alvo = float(np.median([l for l in L if l is not None]))
g = np.ones_like(x)
for (a, b, q), l in zip(fr, L):
    if l is None: continue
    db = float(np.clip(alvo - l, -13, 10)); k = 10 ** (db / 20)
    g[int(max(0, a - .06) * sr):int((b + .06) * sr)] = k
# suaviza as mudanças de ganho (80 ms)
k = int(.08 * sr); ker = np.ones(k) / k; g = np.convolve(g, ker, 'same')
y = x * g
pk = np.abs(y).max(); y = y / pk * .89 if pk > .89 else y
st = np.stack([y, y], 1)
w = wave.open(P + '/assets/audio/voz.wav', 'wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(sr); w.writeframes((st * 32767).astype(np.int16).tobytes()); w.close()
ds = [alvo - l for l in L if l is not None]
print('frases', len(fr), '| ajuste min/max dB', round(min(ds), 1), round(max(ds), 1), '| fora de ±3 dB:', sum(abs(d) > 3 for d in ds))
