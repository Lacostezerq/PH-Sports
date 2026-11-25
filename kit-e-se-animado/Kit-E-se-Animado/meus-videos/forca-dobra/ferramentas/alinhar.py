# Alinha o roteiro (com quem fala) aos tempos do whisper. Saída: transcript_final.json (texto do roteiro, tempos da voz).
import json, re, sys, unicodedata, difflib
S, P = sys.argv[1], sys.argv[2]
W = json.load(open(S + '/whisper_todo.json'))
def norm(t):
    t = unicodedata.normalize('NFD', t.lower()); t = ''.join(c for c in t if unicodedata.category(c) != 'Mn')
    t = t.replace('6.200', '6200').replace('%', ''); return re.sub(r'[^a-z0-9]', '', t)
R = []
for linha in open(P + '/ferramentas/roteiro_falas.txt'):
    if '|' not in linha: continue
    q, txt = linha.rstrip('\n').split('|', 1)
    for w in txt.split(): R.append({'text': w, 'quem': q})
# whisper às vezes cola "E" na palavra seguinte ("Eno", "Evoar"): separa quando ajuda
W2 = []
for x in W:
    t = x['text']; k = norm(t)
    if len(k) > 2 and k[0] == 'e' and k[1:] in {norm(r['text']) for r in R} and k not in {norm(r['text']) for r in R}:
        m = x['start'] + (x['end'] - x['start']) * .15
        W2.append({'text': 'E', 'start': x['start'], 'end': m}); W2.append({'text': t[1:], 'start': m, 'end': x['end']})
    else: W2.append(x)
W = W2
a = [norm(r['text']) for r in R]; b = [norm(x['text']) for x in W]
sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
mapa = {}
for blk in sm.get_matching_blocks():
    for k in range(blk.size): mapa[blk.a + k] = blk.b + k
print('casadas', len(mapa), 'de', len(R), '| whisper', len(W))
# preenche tempos
for i, r in enumerate(R):
    if i in mapa: r['start'] = W[mapa[i]]['start']; r['end'] = W[mapa[i]]['end']
i = 0
while i < len(R):
    if 'start' in R[i]: i += 1; continue
    j = i
    while j < len(R) and 'start' not in R[j]: j += 1
    t0 = R[i - 1]['end'] if i > 0 else 0.5; t1 = R[j]['start'] if j < len(R) else t0 + .4 * (j - i)
    # usa os tempos dos tokens do whisper entre as âncoras, se houver
    wa = mapa.get(i - 1, -1) + 1 if i > 0 else 0; wb = mapa.get(j, len(W))
    if wb > wa: t0 = W[wa]['start']; t1 = W[wb - 1]['end']
    c = [len(R[k]['text']) + 1 for k in range(i, j)]; s = sum(c); t = t0
    for k, ck in zip(range(i, j), c): d = (t1 - t0) * ck / s; R[k]['start'] = round(t, 3); R[k]['end'] = round(t + d, 3); t += d
    i = j
ruins = [(i, R[i]['text']) for i in range(len(R)) if i not in mapa]
print('sem par no whisper:', len(ruins)); print(ruins[:80])
for i in range(1, len(R)):
    if R[i]['start'] < R[i - 1]['start']: print('ORDEM?', i, R[i])
json.dump(R, open(P + '/assets/audio/transcript_final.json', 'w'), ensure_ascii=False, indent=0)
# índice
with open(P + '/PALAVRAS_IDX.txt', 'w') as o:
    linha = []; q0 = None
    for i, x in enumerate(R):
        if x['quem'] != q0 and linha: o.write(f'[{q0}] ' + ' '.join(linha) + '\n'); linha = []
        q0 = x['quem']; linha.append(f"{i}:{x['text']}@{x['start']:.2f}")
    o.write(f'[{q0}] ' + ' '.join(linha) + '\n')
