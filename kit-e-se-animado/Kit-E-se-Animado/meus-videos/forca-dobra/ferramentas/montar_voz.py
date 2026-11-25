# Monta a voz do vídeo de 14 min: corta cada fala do áudio do ElevenLabs (tudo colado) e coloca no tempo da cena.
# Saídas: assets/audio/voz.wav (48 kHz, mono), transcript.json (palavras com tempo e quem fala), falas.json (boca a 30 fps).
# Uso: python3 ferramentas/montar_voz.py <pasta_whisper> <pasta_projeto> <audio_original>
import json, sys, subprocess, numpy as np
S, P, ORIG = sys.argv[1], sys.argv[2], sys.argv[3]
TOTAL = 840.0; SR = 48000

# texto certo de cada trecho (o whisper errou alguns) — na ordem do áudio
TXT = ["Sai da frente, moleque!", "Duzentas toneladas de força,", "e doze dias atrás, esse menino não conseguia subir quatro andares com um botijão de gás.",
 "Deixa o like aí, prometo que ele não quebra seu celular.", "Bora voltar doze dias.", "Só um minutinho...", "Esse é o Guilherme.",
 "A força dele era a de um adolescente normal, uns 50 quilos,", "o peso de um saco de cimento,", "e nem isso ele conseguia levar até em cima.",
 "Pelo menos o pão chegou inteiro!", "Ué?", "Eu só girei!", "Pequeno, quase nada,", "mas o corpo dele já sabia de alguma coisa que ele ainda não sabia.",
 "Tá tomando o quê escondido de mim?", "Vem, magrelo, vai ser rapidinho!", "Mano, tu quebrou a mesa! Tu quebrou a mesa!", "Fecha o registro, menino!",
 "E aí ele descobriu o problema que ninguém pensa:", "a força dele dobrava,", "mas o mundo continuava do mesmo tamanho,", "e o mundo é feito de coisa muito fraca.",
 "Isso aí é de aço...", "Três toneladas.", "No sexto dia, ele levantava o equivalente a três carros populares,", "e ainda tinha catorze dias pela frente.",
 "Me dá um abraço,", "hoje é meu dia!", "Não dá, vó...", "Se eu te abraço, eu te machuco.", "Ele conseguia levantar um caminhão,",
 "mas não conseguia abraçar a única pessoa que carregou ele a vida inteira.", "Gui, em um mês a gente fica rico!", "Tiago, eu não consigo nem beber água.",
 "E foi aí que ele entendeu:", "força nunca foi o problema,", "o problema era controle.", "Pega um. Sem quebrar.", "Agora todo dia,", "porque amanhã você tá mais forte.",
 "Moleque, tu é o quê?", "Neto da Dona Cida.", "Se ele tivesse segurado com toda a força,", "a carreta teria virado lata,", "e o motorista junto.",
 "Oitocentas toneladas,", "mais que o Cristo Redentor,", "e o mundo inteiro tinha virado papel.", "Sempre levei sozinha.", "Vó!",
 "Seis mil e quinhentas toneladas de força.", "Se segurar forte demais, quebra ela.", "Se segurar fraco, ela cai.", "Te peguei, vó.", "Falei que você não era fraco!",
 "Cinquenta e duas mil toneladas,", "o peso do Titanic.", "Guilherme podia levantar um navio.", "Porque força nunca foi levantar o mundo,", "é segurar o que importa sem quebrar.",
 "E você? Se sua força dobrasse todo dia,", "qual seria a primeira coisa que você faria?", "Escreve aqui embaixo.", "E me conta qual, e se você quer ver no canal.",
 "Se inscreve, que o próximo pode ser a sua ideia."]
# (trechos, quem, tempo no vídeo)
GR = [([0], 'mot', 12.0), ([1, 2], 'n', 25.5), ([3, 4], 'n', 33.6), ([5], 'gui', 58.0), ([6, 7, 8, 9], 'n', 66.0), ([10], 'cida', 84.0),
 ([11], 'cida', 124.0), ([12], 'gui', 125.4), ([13, 14], 'n', 143.0), ([15], 'cida', 170.0), ([16], 'rafa', 186.0), ([17], 'tiago', 208.0),
 ([18], 'cida', 249.0), ([19, 20, 21, 22], 'n', 255.0), ([23], 'dono', 343.0), ([24, 25, 26], 'n', 347.0), ([27, 28], 'cida', 398.0), ([29, 30], 'gui', 405.0),
 ([31, 32], 'n', 418.0), ([33], 'tiago', 456.0), ([34], 'gui', 476.0), ([35, 36, 37], 'n', 483.0), ([38], 'cida', 508.0), ([39, 40], 'cida', 553.0),
 ([41], 'mot', 593.0), ([42], 'gui', 597.6), ([43, 44, 45], 'n', 605.0), ([46, 47, 48], 'n', 636.0), ([49], 'cida', 688.0), ([50], 'gui', 713.0),
 ([51, 52, 53], 'n', 722.0), ([54], 'gui', 736.0), ([55], 'cida', 746.0), ([56, 57, 58], 'n', 754.0), ([59, 60], 'n', 785.0), ([61, 62, 63], 'n', 812.0), ([64, 65], 'n', 822.0)]

raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', ORIG, '-ar', str(SR), '-ac', '1', '-f', 'f32le', '-'], capture_output=True).stdout
x = np.frombuffer(raw, dtype=np.float32).astype(np.float64); DUR = len(x) / SR
W = [w for w in json.load(open(S + '/pal.json'))['transcription'] if w['text'].strip()]
seg = json.load(open(S + '/seg.json'))['transcription']
assert len(seg) == len(TXT), (len(seg), len(TXT))
sil = [tuple(map(float, l.split())) for l in open(S + '/sil.txt')]
# início de cada trecho = primeira palavra do whisper dentro do segmento; corte = meio do silêncio mais perto
# início de cada trecho, medido à mão em cima das pausas reais (cada pedaço entre pausas foi transcrito em separado)
cortes = [0.0, 1.95, 3.95, 9.35, 12.28, 14.38, 15.82, 16.98, 20.80, 23.00, 25.37, 28.43, 29.19, 30.60, 32.52, 36.73, 39.02, 41.53, 44.96, 46.93,
 49.88, 52.20, 55.08, 58.16, 59.89, 61.11, 65.15, 67.71, 69.15, 70.58, 72.01, 74.32, 76.52, 80.97, 83.71, 86.57, 88.35, 90.75, 92.81, 94.81, 96.40,
 99.04, 101.36, 102.98, 105.52, 107.47, 109.03, 110.77, 112.57, 114.85, 116.56, 117.48, 120.89, 123.85, 126.05, 127.42, 130.58, 133.38, 135.29,
 137.78, 141.09, 143.66, 146.75, 149.12, 150.42, 153.40]
assert len(cortes) == len(TXT)
cortes.append(DUR)
# ponta de fala real (sem silêncio) de cada trecho, para as legendas e a boca
def ativo(a, b):
    i0, i1 = int(a * SR), int(b * SR); h = int(.01 * SR); e = x[i0:i1]; n = len(e) // h
    v = np.sqrt((e[:n * h].reshape(n, h) ** 2).mean(1)); db = 20 * np.log10(v + 1e-9); on = np.where(db > -42)[0]
    return (a + on[0] * .01, a + (on[-1] + 1) * .01) if len(on) else (a, b)
y = np.zeros(int(TOTAL * SR)); palavras = []; blocos = []
for idx, quem, t0 in GR:
    a, b = cortes[idx[0]], cortes[idx[-1] + 1]; clip = x[int(a * SR):int(b * SR)].copy()
    f = int(.012 * SR); clip[:f] *= np.linspace(0, 1, f); clip[-f:] *= np.linspace(1, 0, f)
    # nivela: cada bloco no mesmo volume (RMS das partes faladas)
    h = int(.03 * SR); n = len(clip) // h; e = (clip[:n * h].reshape(n, h) ** 2).mean(1); db = 10 * np.log10(e + 1e-12); v = e[db > -45]
    lv = 10 * np.log10(v.mean()) if len(v) else -20; clip *= 10 ** ((-20 - lv) / 20)
    s0 = int(t0 * SR); y[s0:s0 + len(clip)] += clip; blocos.append({'quem': quem, 'start': t0, 'end': round(t0 + len(clip) / SR, 3), 'trechos': idx})
    for i in idx:
        sa, sb = ativo(cortes[i], cortes[i + 1]); ws = TXT[i].split(); pes = np.array([len(w) + 2 for w in ws], float); pes /= pes.sum()
        c = np.concatenate([[0], np.cumsum(pes)]) * (sb - sa)
        for k, wd in enumerate(ws): palavras.append({'text': wd, 'start': round(t0 + (sa - a) + c[k], 3), 'end': round(t0 + (sa - a) + c[k + 1] - .02, 3), 'quem': quem})
pk = np.abs(y).max(); y = y / pk * .89
pcm = (np.clip(y, -1, 1) * 32767).astype(np.int16).tobytes()
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 's16le', '-ar', str(SR), '-ac', '1', '-i', '-', P + '/assets/audio/voz.wav'], input=pcm, check=True)
json.dump(palavras, open(P + '/assets/audio/transcript.json', 'w'), ensure_ascii=False)
# boca (30 fps) de cada fala de personagem
hop = SR // 30; nf = len(y) // hop; fr = y[:nf * hop].reshape(nf, hop)
rms = np.sqrt((fr ** 2).mean(1) + 1e-12); zc = (np.abs(np.diff(np.sign(fr), axis=1)) > 0).mean(1); dbf = 20 * np.log10(rms + 1e-9)
falas = []
for bl in blocos:
    if bl['quem'] == 'n': continue
    i0 = int((bl['start'] - .05) * 30); i1 = int((bl['end'] + .1) * 30) + 1; d = dbf[i0:i1]; lo, hi = np.percentile(d, 15), np.percentile(d, 95)
    op = np.clip((d - lo) / max(6, hi - lo), 0, 1); op = np.convolve(op, [.25, .5, .25], 'same'); op[op < .12] = 0
    z = zc[i0:i1]; rnd = np.clip(1 - (z - .02) / .1, 0, 1) * (op > .3)
    falas.append({'quem': bl['quem'], 'start': round(i0 / 30, 3), 'end': round(i1 / 30, 3), 'boca': [round(float(v), 2) for v in op], 'round': [round(float(v), 2) for v in rnd]})
json.dump({'total': TOTAL, 'segs': blocos, 'falas': falas}, open(P + '/assets/audio/falas.json', 'w'))
with open(P + '/ferramentas/falas_tempo.txt', 'w') as f:
    for bl in blocos: f.write(f"{bl['start']:7.2f} {bl['end']:7.2f} {bl['quem']:5s} {' '.join(TXT[i] for i in bl['trechos'])}\n")
# confere: nenhum bloco pode encostar no próximo
for p, q in zip(blocos, blocos[1:]):
    if q['start'] < p['end'] + .3: print('SOBREPOSTO', p['start'], p['end'], q['start'])
print(len(palavras), 'palavras,', len(falas), 'falas com boca, fim da voz', blocos[-1]['end'])
