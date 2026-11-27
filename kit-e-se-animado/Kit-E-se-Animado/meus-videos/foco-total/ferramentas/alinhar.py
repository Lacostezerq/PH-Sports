# Alinha o roteiro (com quem fala) aos tempos do whisper (todas.json). Saída: assets/audio/transcript_final.json.
import json, re, sys, unicodedata, difflib
S, P = sys.argv[1], sys.argv[2]
W = json.load(open(S + '/todas.json'))
NUM = {'zero':'0','um':'1','uma':'1','dois':'2','duas':'2','tres':'3','quatro':'4','cinco':'5','seis':'6','sete':'7','oito':'8','nove':'9','dez':'10','catorze':'14','quatorze':'14','vinte':'20','f6':'f6'}
def norm(t):
    t = unicodedata.normalize('NFD', t.lower()); t = ''.join(c for c in t if unicodedata.category(c) != 'Mn')
    t = re.sub(r'[^a-z0-9]', '', t); return NUM.get(t, t)
R = []
for linha in open(P + '/ferramentas/roteiro_falas.txt'):
    if '|' not in linha: continue
    q, txt = linha.rstrip('\n').split('|', 1)
    for w in txt.split(): R.append({'text': w, 'quem': q})
a = [norm(r['text']) for r in R]; b = [norm(x['text']) for x in W]
sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
mapa = {}
for blk in sm.get_matching_blocks():
    for k in range(blk.size): mapa[blk.a + k] = blk.b + k
print('casadas', len(mapa), 'de', len(R), '| whisper', len(W))
for i, r in enumerate(R):
    if i in mapa: r['start'] = W[mapa[i]]['start']; r['end'] = W[mapa[i]]['end']
# sem par: interpola entre vizinhos casados
i = 0
while i < len(R):
    if 'start' in R[i]: i += 1; continue
    j = i
    while j < len(R) and 'start' not in R[j]: j += 1
    t0 = R[i - 1]['end'] if i > 0 else 0; t1 = R[j]['start'] if j < len(R) else t0 + .4 * (j - i)
    n = j - i; d = max(.05, (t1 - t0)) / n
    for k in range(n): R[i + k]['start'] = round(t0 + k * d, 3); R[i + k]['end'] = round(t0 + (k + 1) * d - .01, 3)
    i = j
# palavras do whisper que sobraram (o narrador falou algo fora do roteiro)
usadas = set(mapa.values()); sobra = [(k, W[k]['text'], W[k]['start']) for k in range(len(W)) if k not in usadas]
print('whisper sem par:', len(sobra)); print(sobra[:80])
json.dump(R, open(P + '/assets/audio/transcript_final.json', 'w'), ensure_ascii=False, indent=0)
json.dump(R, open(P + '/assets/audio/transcript.json', 'w'), ensure_ascii=False)
with open(P + '/ferramentas/PALAVRAS_IDX.txt', 'w') as f:
    for k, r in enumerate(R): f.write(f"{k}\t{r['start']:.2f}\t{r['quem']}\t{r['text']}\n")
