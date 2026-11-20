# Corrige a transcrição, marca quem fala e calcula a abertura da boca (30 fps) de cada fala a partir da voz.
import json, wave, re, sys, os
import numpy as np
P = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W = json.load(open(P + '/assets/audio/palavras_whisper.json'))
W = W[:1441]  # tira a alucinação final do whisper
def reparte(ini, fim, a, b):
    c = [len(W[i]['text']) + 1.5 for i in range(ini, fim + 1)]; s = sum(c); t = a
    for k, i in enumerate(range(ini, fim + 1)):
        d = (b - a) * c[k] / s; W[i]['start'] = round(t, 3); W[i]['end'] = round(t + d, 3); t += d
reparte(625, 632, 209.39, 211.56)
NOME = {'bilhérme': 'Guilherme', 'Billernie': 'Guilherme', 'Villerme': 'Guilherme', 'bilherme': 'Guilherme', 'Bitcoin': 'bitcoin', 'Arter': 'artéria', 'assenando,': 'acenando,', 'gásis,': 'gases,', 'juros': 'julho', 'Haha,': '', '"Olha': 'olha', 'tempo"': 'tempo,', '"então': '“Então', 'quiser".': 'quiser”.', '"Item': 'Item', '2019"': '2019.', 'Pra': 'Pra', 'deixe': 'deixa', 'assenando': 'acenando', 'país': 'País', '"dividente",': 'vidente.'}
for x in W:
    t = x['text']; k = re.sub(r'[.,!?;:]+$', '', t); p = t[len(k):]
    if t in NOME: x['text'] = NOME[t]
    elif k in NOME: x['text'] = NOME[k] + p
def setw(i, s): W[i]['text'] = s
# correções pontuais (índices do whisper)
for i in range(len(W)):
    t = W[i]['text']
    if t == 'seu' and W[i + 1]['text'].lower().startswith('marcos'): W[i]['text'] = 'Seu'; W[i + 1]['text'] = 'Marcos' + W[i + 1]['text'][6:]
    if t == 'dona' and W[i + 1]['text'].startswith('Regina'): W[i]['text'] = 'Dona'
def find(seq, start=0):
    for i in range(start, len(W) - len(seq) + 1):
        if all(W[i + k]['text'] == s for k, s in enumerate(seq)): return i
    raise Exception('não achei ' + ' '.join(seq))
i = find(['E', 'tem', 'um,']); setw(i, 'Item'); setw(i + 1, '1:'); setw(i + 2, '')
i = find(['E', 'tem', 'dois,']); setw(i, 'Item'); setw(i + 1, '2:'); setw(i + 2, '')
i = find(['Viu', 'a', 'sombração?']); setw(i + 1, 'assombração?'); setw(i + 2, '')
i = find(['vi', 'dente,']); setw(i, 'vidente,'); setw(i + 1, '')
i = find(['Um', 'barlotado.']); setw(i, 'Um bar'); setw(i + 1, 'lotado,')
i = find(['1,', '0,']); setw(i, '1 a 0,'); setw(i + 1, ''); setw(i + 5, '5,')
i = find(['do', 'do', 'vira']); setw(i, 'Dudu'); setw(i + 1, '')
i = find(['tem', 'moço']); setw(i, 'teimoso'); setw(i + 1, '')
i = find(['o', 'fegante...']); setw(i, 'ofegante,'); setw(i + 1, '')
i = find(['Carrega', 'o', 'saco']); setw(i, 'Carrego'); setw(i + 1, '')
i = find(['era', 'pai,', 'mas', 'sem']); setw(i, 'Era,'); setw(i + 1, 'pai,'); setw(i + 3, '100')
i = find(['Em', '2026,', 'domingo,']); setw(i, '')
i = find(['A', 'última', 'coisa']); 
# quem fala (intervalos de índices do whisper, inclusivos)
FALAS = [('regina', 166, 175), ('marcos', 239, 246), ('gui', 247, 253), ('marcos', 254, 260), ('marcos', 377, 391), ('gui', 392, 395), ('marcos', 396, 405),
         ('dudu', 548, 562), ('gui', 563, 565), ('gui', 784, 793), ('marcos', 794, 808), ('gui', 809, 811), ('marcos', 812, 820), ('gui', 911, 918), ('marcos', 919, 934),
         ('marcos', 1270, 1286), ('gui', 1287, 1297), ('marcos', 1298, 1307), ('gui', 1308, 1317)]
for x in W: x['quem'] = 'n'
for q, a, b in FALAS:
    for k in range(a, b + 1): W[k]['quem'] = q
# fala do Dudu que o whisper perdeu ("Cara, quem é você?")
extra = [{'text': 'Cara,', 'start': 206.17, 'end': 206.82, 'quem': 'dudu'}, {'text': 'quem', 'start': 207.21, 'end': 207.47, 'quem': 'dudu'}, {'text': 'é', 'start': 207.47, 'end': 207.6, 'quem': 'dudu'}, {'text': 'você?', 'start': 207.6, 'end': 208.03, 'quem': 'dudu'}]
W = W[:625] + extra + W[625:]
F = [x for x in W if x['text'].strip()]
for x in F: x['text'] = x['text'].strip()
json.dump(F, open(P + '/assets/audio/transcript_final.json', 'w'), ensure_ascii=False, indent=0)
# índice para o plano de cenas
with open(P + '/PALAVRAS_IDX.txt', 'w') as o:
    linha = []; q0 = None
    for i, x in enumerate(F):
        if x['quem'] != q0 and linha: o.write(f'[{q0}] ' + ' '.join(linha) + '\n'); linha = []
        q0 = x['quem']; linha.append(f"{i}:{x['text']}@{x['start']:.2f}")
    o.write(f'[{q0}] ' + ' '.join(linha) + '\n')
# segmentos de fala (troca de voz ou pausa > 0.6 s)
segs = []; cur = None
for i, x in enumerate(F):
    if cur and x['quem'] == cur['quem'] and x['start'] - F[i - 1]['end'] < .6: cur['end'] = x['end']; cur['b'] = i
    else:
        if cur: segs.append(cur)
        cur = {'quem': x['quem'], 'start': x['start'], 'end': x['end'], 'a': i, 'b': i}
segs.append(cur)
# boca: energia da voz a 30 fps
wv = wave.open(P + '/assets/audio/voz.wav'); sr = wv.getframerate(); n = wv.getnframes(); a = np.frombuffer(wv.readframes(n), dtype=np.int16).reshape(-1, wv.getnchannels()).mean(1) / 32768.0
hop = sr // 30; nf = len(a) // hop; fr = a[:nf * hop].reshape(nf, hop)
rms = np.sqrt((fr ** 2).mean(1) + 1e-12); zc = (np.abs(np.diff(np.sign(fr), axis=1)) > 0).mean(1)
db = 20 * np.log10(rms + 1e-9)
falas = []
for s in segs:
    if s['quem'] == 'n': continue
    i0 = int((s['start'] - .05) * 30); i1 = int((s['end'] + .1) * 30) + 1
    d = db[i0:i1]; lo, hi = np.percentile(d, 15), np.percentile(d, 95)
    op = np.clip((d - lo) / max(6, hi - lo), 0, 1); op = np.convolve(op, [.25, .5, .25], 'same'); op[op < .12] = 0
    z = zc[i0:i1]; rnd = np.clip(1 - (z - .02) / .1, 0, 1) * (op > .3)
    falas.append({'quem': s['quem'], 'start': round(i0 / 30, 3), 'end': round(i1 / 30, 3), 'boca': [round(float(v), 2) for v in op], 'round': [round(float(v), 2) for v in rnd]})
json.dump({'total': 480.7, 'segs': [{k: v for k, v in s.items()} for s in segs], 'falas': falas}, open(P + '/assets/audio/falas.json', 'w'))
print(len(F), 'palavras;', len(falas), 'falas de personagens')
for f in falas: print(f"  {f['quem']:7s} {f['start']:7.2f}-{f['end']:7.2f}")
