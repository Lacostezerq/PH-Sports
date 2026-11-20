# Trilha original e efeitos sonoros gerados do zero (sem direitos autorais).
# Uso: python3 -I ferramentas/trilha.py <pasta_saida>
import sys, wave, numpy as np

SR = 44100
DUR = 480.7
N = int(SR * DUR)
rng = np.random.default_rng(7)
OUT = sys.argv[1] if len(sys.argv) > 1 else 'assets/audio'

def hz(m):
    return 440.0 * 2 ** ((m - 69) / 12)

def lp_fast(x, fc):
    # aproximação: média móvel em cascata (rápida e suave)
    w = max(1, int(SR / (fc * 2.2)))
    k = np.ones(w) / w
    y = np.convolve(x, k, mode='same')
    return np.convolve(y, k, mode='same')

def env_adsr(n, a=.01, d=.2, s=.6, r=.3):
    t = np.arange(n) / SR; L = n / SR
    e = np.where(t < a, t / a, np.where(t < a + d, 1 - (1 - s) * (t - a) / d, s))
    rel = np.clip((L - t) / r, 0, 1)
    return e * rel

mus = np.zeros((2, N))

def add(buf, start, sig, pan=0.0, gain=1.0):
    i = int(start * SR)
    if i >= N or i + len(sig) <= 0: return
    j = min(N, i + len(sig)); sig = sig[:j - i]
    l = np.cos((pan + 1) * np.pi / 4); r = np.sin((pan + 1) * np.pi / 4)
    buf[0, i:j] += sig * gain * l * 1.414
    buf[1, i:j] += sig * gain * r * 1.414

def pad(m, dur, bright=1.0):
    n = int(dur * SR); t = np.arange(n) / SR
    s = np.zeros(n)
    for det in (-0.08, 0.0, 0.07):
        f = hz(m + det)
        # serra suave por soma de harmônicos
        for h in range(1, 7):
            s += np.sin(2 * np.pi * f * h * t + h * 1.3) / h * (0.75 ** (h - 1)) * (bright if h > 2 else 1)
    e = env_adsr(n, a=min(1.2, dur * .3), d=.5, s=.85, r=min(1.5, dur * .35))
    return s * e / 6

def piano(m, dur=1.6, vel=1.0):
    n = int(dur * SR); t = np.arange(n) / SR; f = hz(m)
    s = (np.sin(2 * np.pi * f * t) + .45 * np.sin(2 * np.pi * 2 * f * t) * np.exp(-t * 3) + .2 * np.sin(2 * np.pi * 3 * f * t) * np.exp(-t * 5) + .08 * np.sin(2 * np.pi * 4.01 * f * t) * np.exp(-t * 7))
    e = np.exp(-t * 2.2) * np.clip(t / .004, 0, 1) * np.clip((dur - t) / .08, 0, 1)
    return s * e * vel * .5

def pluck(m, dur=.5, vel=1.0):
    n = int(dur * SR); t = np.arange(n) / SR; f = hz(m)
    s = np.sin(2 * np.pi * f * t + 2.5 * np.exp(-t * 18) * np.sin(2 * np.pi * f * 2 * t))
    return s * np.exp(-t * 7) * np.clip(t / .003, 0, 1) * vel * .45

def bass(m, dur, vel=1.0):
    n = int(dur * SR); t = np.arange(n) / SR; f = hz(m)
    s = np.sin(2 * np.pi * f * t) + .3 * np.sin(2 * np.pi * 2 * f * t)
    return s * env_adsr(n, a=.01, d=.3, s=.7, r=.15) * vel * .55

def kick():
    n = int(.35 * SR); t = np.arange(n) / SR
    f = 50 + 90 * np.exp(-t * 30)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 9) * .9

def hat(open_=False):
    n = int((.18 if open_ else .05) * SR); t = np.arange(n) / SR
    x = rng.standard_normal(n); x = x - lp_fast(x, 3000)
    return x * np.exp(-t * (18 if open_ else 70)) * .25

def snare():
    n = int(.22 * SR); t = np.arange(n) / SR
    x = rng.standard_normal(n); x = x - lp_fast(x, 600)
    return (x * .5 + np.sin(2 * np.pi * 190 * t) * .5) * np.exp(-t * 16) * .5

def tick():
    n = int(.03 * SR); t = np.arange(n) / SR
    return np.sin(2 * np.pi * 1800 * t) * np.exp(-t * 200) * .3

KICK, HAT, HATO, SNARE = kick(), hat(), hat(True), snare()

# acordes (nota fundamental MIDI + tipo)
CH = {'Am': (57, [0, 3, 7]), 'F': (53, [0, 4, 7]), 'C': (48, [0, 4, 7]), 'G': (55, [0, 4, 7]), 'E': (52, [0, 4, 7]), 'Em': (52, [0, 3, 7]),
      'Dm': (50, [0, 3, 7]), 'Bb': (46, [0, 4, 7]), 'Gm': (55, [0, 3, 7]), 'A': (57, [0, 4, 7]), 'D': (50, [0, 4, 7])}

# seções: (início, fim, bpm, acordes, estilo, volume)
SEC = [
    (0.0, 24.2, 96, ['Am', 'F', 'C', 'G'], 'pulso', .9),
    (24.2, 50.6, 70, ['Am', 'F', 'C', 'E'], 'triste', .8),
    (50.6, 87.2, 76, ['C', 'G', 'Am', 'F'], 'magia', .85),
    (87.2, 179.0, 104, ['F', 'G', 'Em', 'Am'], 'leve', .8),
    (179.0, 209.3, 88, ['Dm', 'Bb', 'Gm', 'A'], 'tensao', .85),
    (209.3, 220.6, 110, ['C', 'G', 'Am', 'F'], 'leve', .85),
    (220.6, 250.7, 112, ['C', 'G', 'Am', 'F'], 'festa', .9),
    (250.7, 287.2, 70, ['Am', 'Dm', 'E', 'Am'], 'triste', .8),
    (287.2, 313.4, 92, ['Am', 'F', 'Dm', 'E'], 'pulso', .85),
    (313.4, 321.5, 132, ['Am', 'F', 'Dm', 'E'], 'corrida', 1.0),
    (321.5, 341.4, 66, ['Dm', 'Am', 'E', 'Am'], 'drone', .8),
    (341.4, 368.3, 72, ['F', 'C', 'G', 'Am'], 'emocao', .9),
    (368.3, 386.7, 84, ['Dm', 'Am', 'Bb', 'A'], 'pulso', .7),
    (386.7, 405.3, 128, ['Am', 'F', 'Dm', 'E'], 'corrida', .95),
    (405.3, 414.9, 72, ['F', 'C', 'G', 'Am'], 'emocao', .8),
    (414.9, 463.2, 80, ['C', 'Am', 'F', 'G'], 'quente', .85),
    (463.2, 480.7, 92, ['C', 'G', 'Am', 'F'], 'final', .9),
]

def secao(a, b, bpm, prog, est, vol):
    buf = np.zeros((2, N)); beat = 60 / bpm; bar = beat * 4
    nb = int(np.ceil((b - a) / bar)) + 1
    for k in range(nb):
        t0 = a + k * bar
        if t0 >= b: break
        root, iv = CH[prog[k % len(prog)]]
        notas = [root + 12 + i for i in iv]
        if est in ('triste', 'magia', 'emocao', 'quente', 'drone', 'tensao', 'final', 'pulso', 'leve', 'festa', 'corrida'):
            for m in notas:
                add(buf, t0, pad(m, bar + .6, .7 if est in ('triste', 'drone') else 1.0), pan=rng.uniform(-.4, .4), gain=.16 if est != 'drone' else .22)
        if est != 'drone':
            add(buf, t0, bass(root - 12 + 12 * (root < 50), bar * .95), gain=.5 if est not in ('triste',) else .35)
        if est in ('triste', 'magia', 'emocao', 'quente', 'final'):
            arp = notas + [notas[0] + 12, notas[1] + 12]
            pat = [0, 2, 1, 3, 2, 4, 1, 3]
            for i, p in enumerate(pat):
                add(buf, t0 + i * beat / 2, piano(arp[p] + 12, 1.8, .55 + .25 * (i % 2 == 0)), pan=-.3 + .6 * (i % 2), gain=.33)
        if est in ('leve', 'festa', 'final'):
            arp = notas + [notas[0] + 12]
            for i in range(8):
                add(buf, t0 + i * beat / 2, pluck(arp[(i * 3) % 4] + 12, .45, .8), pan=.35 if i % 2 else -.35, gain=.3)
            for i in range(4):
                add(buf, t0 + i * beat, KICK if i % 2 == 0 else SNARE, gain=.38 if est != 'leve' else .28)
                add(buf, t0 + i * beat + beat / 2, HAT, pan=.3, gain=.5)
        if est == 'festa':
            for i in range(4): add(buf, t0 + i * beat + beat * .75, HAT, pan=-.3, gain=.35)
        if est in ('pulso', 'corrida'):
            sub = 4 if est == 'corrida' else 2
            for i in range(4 * sub):
                add(buf, t0 + i * beat / sub, pluck(notas[0] if i % 4 else notas[0] + 12, .25, .7), pan=.4 if i % 2 else -.4, gain=.26)
            for i in range(4):
                add(buf, t0 + i * beat, KICK, gain=.42 if est == 'corrida' else .3)
                if est == 'corrida': add(buf, t0 + i * beat + beat / 2, SNARE if i % 2 else HAT, gain=.32)
        if est == 'tensao':
            for i in range(4): add(buf, t0 + i * beat, KICK, gain=.22)  # batida de coração no grave
            for i in range(8): add(buf, t0 + i * beat / 2, tick(), pan=.2, gain=.6)
    # janela da seção com fade
    t = np.arange(N) / SR
    w = np.clip((t - a + 1.0) / 1.2, 0, 1) * np.clip((b + .9 - t) / 1.2, 0, 1)
    return buf * w * vol

for s in SEC:
    mus += secao(*s)
    print('seção', s[0], s[4], flush=True)

# pausas dramáticas: a música some em momentos-chave
t = np.arange(N) / SR
def buraco(a, b, f=.15, nivel=.15):
    global mus
    g = 1 - (1 - nivel) * np.clip((t - a) / f, 0, 1) * np.clip((b - t) / f, 0, 1)
    mus *= g
buraco(200.4, 202.3, .3, .1)   # o bar inteiro fica em silêncio
buraco(330.4, 331.6, .1, .2)   # e cai
buraco(357.3, 359.0, .3, .4)   # item 3
buraco(409.4, 410.4, .2, .3)
mus *= np.clip((DUR - t) / 3.5, 0, 1)
mus = np.tanh(mus * 1.2) / 1.2

# ---------------- efeitos ----------------
fx = np.zeros((2, N))
def whoosh(dur=.9, sobe=True):
    n = int(dur * SR); tt = np.arange(n) / SR
    x = rng.standard_normal(n); lo = lp_fast(x, 400); hi = lp_fast(x, 2500)
    k = tt / dur if sobe else 1 - tt / dur
    y = lo * (1 - k) + hi * k
    return y * np.sin(np.pi * tt / dur) ** 2 * .9
def ding(f=1568, dur=1.2):
    n = int(dur * SR); tt = np.arange(n) / SR
    return (np.sin(2 * np.pi * f * tt) + .5 * np.sin(2 * np.pi * f * 2.76 * tt) * np.exp(-tt * 6) + .3 * np.sin(2 * np.pi * f * 5.4 * tt) * np.exp(-tt * 10)) * np.exp(-tt * 3.5) * .35
def moedas(n_=10):
    out = np.zeros(int(1.4 * SR))
    for i in range(n_):
        d = ding(rng.uniform(1800, 3200), .5) * rng.uniform(.3, .7); j = int(rng.uniform(0, .8) * SR); out[j:j + len(d)] += d[:len(out) - j]
    return out
def pop():
    n = int(.25 * SR); tt = np.arange(n) / SR
    return np.sin(2 * np.pi * (300 + 900 * np.exp(-tt * 25)) * tt) * np.exp(-tt * 14) * .6
def rabisco(dur=.6):
    n = int(dur * SR); tt = np.arange(n) / SR; x = rng.standard_normal(n); x = x - lp_fast(x, 1500)
    return x * (.5 + .5 * np.sin(2 * np.pi * 9 * tt) ** 2) * np.sin(np.pi * tt / dur) * .12
def tecla():
    n = int(.04 * SR); tt = np.arange(n) / SR; x = rng.standard_normal(n)
    return (x * .4 + np.sin(2 * np.pi * 900 * tt)) * np.exp(-tt * 120) * .25
def erro():
    n = int(.6 * SR); tt = np.arange(n) / SR
    return np.sign(np.sin(2 * np.pi * 110 * tt)) * .18 * np.clip((.6 - tt) / .05, 0, 1) * (tt % .3 < .22)
def multidao(dur, humor=0):
    n = int(dur * SR); tt = np.arange(n) / SR; x = rng.standard_normal(n); y = lp_fast(x, 900) - lp_fast(x, 150)
    mod = .6 + .4 * np.sin(2 * np.pi * .4 * tt + 1) * np.sin(2 * np.pi * .23 * tt)
    return y * mod * np.clip(tt / .4, 0, 1) * np.clip((dur - tt) / .5, 0, 1) * 2.2
def lamento():  # torcida reagindo ao gol (aaah descendo)
    n = int(1.4 * SR); tt = np.arange(n) / SR; x = rng.standard_normal(n)
    y = lp_fast(x, 700) - lp_fast(x, 120)
    tom = sum(np.sin(2 * np.pi * (f0 * (1 - .25 * tt / 1.4)) * tt) for f0 in (220, 262, 330, 392)) * .03
    return (y * 3 + tom) * np.exp(-tt * 1.4) * np.clip(tt / .08, 0, 1)
def coracao():
    n = int(.6 * SR); tt = np.arange(n) / SR
    b = lambda d: np.sin(2 * np.pi * 55 * (tt - d)) * np.exp(-np.clip(tt - d, 0, None) * 18) * (tt >= d)
    return (b(0) + .7 * b(.22)) * .9
def bip():
    n = int(.12 * SR); tt = np.arange(n) / SR
    return np.sin(2 * np.pi * 1000 * tt) * np.clip((.12 - tt) / .02, 0, 1) * .12
def buzina():
    n = int(.6 * SR); tt = np.arange(n) / SR
    s = np.sign(np.sin(2 * np.pi * 400 * tt)) * .5 + np.sign(np.sin(2 * np.pi * 500 * tt)) * .5
    return lp_fast(s, 2500) * np.clip(tt / .02, 0, 1) * np.clip((.6 - tt) / .05, 0, 1) * .22
def pneu():
    n = int(.9 * SR); tt = np.arange(n) / SR; x = rng.standard_normal(n); y = lp_fast(x, 3500) - lp_fast(x, 1200)
    return (y + .3 * np.sin(2 * np.pi * (1300 - 300 * tt) * tt)) * np.sin(np.pi * tt / .9) * .35
def motor(dur, f0=45):
    n = int(dur * SR); tt = np.arange(n) / SR; x = rng.standard_normal(n)
    s = np.sin(2 * np.pi * f0 * tt + 3 * np.sin(2 * np.pi * 7 * tt)) * .5 + lp_fast(x, 200) * 1.5
    return s * np.clip(tt / .5, 0, 1) * np.clip((dur - tt) / .8, 0, 1) * .3
def brilho(dur=1.6):
    out = np.zeros(int(dur * SR))
    for i in range(14):
        d = ding(rng.choice([2093, 2349, 2637, 3136, 3520]), .7) * .35; j = int(i / 14 * (dur - .7) * SR); out[j:j + len(d)] += d
    return out
def passaros(dur):
    out = np.zeros(int(dur * SR))
    for i in range(int(dur / 2.5)):
        n = int(.25 * SR); tt = np.arange(n) / SR; f = rng.uniform(2500, 4200)
        s = np.sin(2 * np.pi * (f + 600 * np.sin(2 * np.pi * 18 * tt)) * tt) * np.sin(np.pi * tt / .25) * .05
        j = int(rng.uniform(0, dur - .3) * SR); out[j:j + n] += s
    return out

for tt_ in (24.4, 65.85, 105.3, 186.47, 220.67, 253.75, 287.19, 414.9): add(fx, tt_ - .45, whoosh(), gain=.55)
for tt_ in (14.5, 140.8, 226.1, 123.5): add(fx, tt_, moedas(), gain=.7)
add(fx, 50.9, whoosh(2.6, False), gain=.5); add(fx, 52.6, brilho(), gain=.6)
for tt_ in (92.3, 94.45, 97.1, 152.0, 153.0): add(fx, tt_, rabisco(), gain=1.0)
for i in range(22): add(fx, 136.5 + i * .11 + rng.uniform(0, .04), tecla(), pan=.2, gain=.9)
add(fx, 149.85, erro(), gain=.8)
for tt_ in (184.06, 209.4, 215.5, 469.14): add(fx, tt_, pop(), gain=.8)
add(fx, 188.2, multidao(12.2), gain=.5)
for g in (194.22, 195.19, 195.72, 196.38, 196.97): add(fx, g, lamento(), pan=rng.uniform(-.3, .3), gain=.9)
for i in range(6): add(fx, 321.5 + i * .83, bip(), pan=-.3, gain=1)
for i in range(4): add(fx, 328.4 + i * .7, coracao(), gain=.9)
add(fx, 313.5, motor(8.0, 48), gain=.9); add(fx, 316.1, pneu(), gain=.8); add(fx, 316.81, buzina(), gain=.9); add(fx, 317.6, buzina(), gain=.7)
for i in range(7): add(fx, 362.2 + i * .94, bip(), pan=-.3, gain=.8)
add(fx, 357.4, brilho(2.0), gain=.6)
add(fx, 386.8, motor(9.2, 38), gain=1.0); add(fx, 1.0, motor(13.0, 38), gain=.8)
add(fx, 383.8, whoosh(.7), gain=.35)
add(fx, 414.9, passaros(65.0), gain=1.0)

def grava(nome, x):
    x = np.clip(x, -1, 1); y = (x.T * 32767).astype('<i2')
    with wave.open(f'{OUT}/{nome}', 'wb') as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(y.tobytes())
pk = np.abs(mus).max(); grava('musica.wav', mus / pk * .8)
pk = np.abs(fx).max(); grava('efeitos.wav', fx / pk * .8)
print('ok', flush=True)
