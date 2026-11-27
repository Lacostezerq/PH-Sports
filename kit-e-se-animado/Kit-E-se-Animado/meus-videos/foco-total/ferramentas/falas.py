# Calcula a abertura da boca (30 fps) de cada fala de personagem a partir da voz. Pensamentos não mexem a boca.
import json, wave, sys, numpy as np
P = sys.argv[1]; TOTAL = float(sys.argv[2])
F = json.load(open(P + '/assets/audio/transcript_final.json'))
PENSA = []
for i, x in enumerate(F): x['pensa'] = any(a <= i <= b for a, b in PENSA)
json.dump(F, open(P + '/assets/audio/transcript_final.json', 'w'), ensure_ascii=False, indent=0)
json.dump(F, open(P + '/assets/audio/transcript.json', 'w'), ensure_ascii=False)
segs = []; cur = None
for i, x in enumerate(F):
    if cur and x['quem'] == cur['quem'] and x['pensa'] == cur['pensa'] and x['start'] - F[i - 1]['end'] < .6: cur['end'] = x['end']; cur['b'] = i
    else:
        if cur: segs.append(cur)
        cur = {'quem': x['quem'], 'pensa': x['pensa'], 'start': x['start'], 'end': x['end'], 'a': i, 'b': i}
segs.append(cur)
wv = wave.open(P + '/assets/audio/voz.wav'); sr = wv.getframerate(); n = wv.getnframes(); a = np.frombuffer(wv.readframes(n), dtype=np.int16).reshape(-1, wv.getnchannels()).mean(1) / 32768.0
hop = sr // 30; nf = len(a) // hop; fr = a[:nf * hop].reshape(nf, hop)
rms = np.sqrt((fr ** 2).mean(1) + 1e-12); zc = (np.abs(np.diff(np.sign(fr), axis=1)) > 0).mean(1); db = 20 * np.log10(rms + 1e-9)
falas = []
for s in segs:
    if s['quem'] == 'n' or s['pensa']: continue
    i0 = int((s['start'] - .05) * 30); i1 = int((s['end'] + .1) * 30) + 1
    d = db[i0:i1]; lo, hi = np.percentile(d, 15), np.percentile(d, 95)
    op = np.clip((d - lo) / max(6, hi - lo), 0, 1); op = np.convolve(op, [.25, .5, .25], 'same'); op[op < .12] = 0
    z = zc[i0:i1]; rnd = np.clip(1 - (z - .02) / .1, 0, 1) * (op > .3)
    falas.append({'quem': s['quem'], 'start': round(i0 / 30, 3), 'end': round(i1 / 30, 3), 'boca': [round(float(v), 2) for v in op], 'round': [round(float(v), 2) for v in rnd]})
json.dump({'total': TOTAL, 'segs': segs, 'falas': falas}, open(P + '/assets/audio/falas.json', 'w'))
print(len(F), 'palavras;', len(falas), 'falas com boca;', sum(1 for s in segs if s['pensa']), 'pensamentos')
