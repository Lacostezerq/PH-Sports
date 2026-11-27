# Efeitos sonoros e ambientes gerados do zero (sem música, sem direitos autorais).
# Tudo baixinho: o ambiente combina com a hora e o lugar de cada cena.
# Uso: python3 -I ferramentas/efeitos.py assets/audio/efeitos.wav
import sys, wave, numpy as np

SR = 48000
DUR = 525.5
N = int(SR * DUR)
rng = np.random.default_rng(11)
buf = np.zeros((2, N))

def banda(x, lo, hi):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    m = np.clip((f - lo * .8) / (lo * .2 + 1e-9), 0, 1) * np.clip((hi * 1.25 - f) / (hi * .25), 0, 1)
    return np.fft.irfft(X * m, len(x))

def ruido(d, lo, hi):
    return banda(rng.standard_normal(int(d * SR)), lo, hi)

def norm(x):
    p = np.max(np.abs(x)) + 1e-9; return x / p

def fade(x, a=.05, b=.05):
    n = len(x); e = np.ones(n); ia, ib = int(a * SR), int(b * SR)
    if ia: e[:ia] = np.linspace(0, 1, ia)
    if ib: e[-ib:] = np.minimum(e[-ib:], np.linspace(1, 0, ib))
    return x * e

def add(t, sig, g=1.0, pan=0.0):
    i = int(t * SR)
    if i >= N: return
    if i < 0: sig = sig[-i:]; i = 0
    j = min(N, i + len(sig)); sig = sig[:j - i]
    l = np.cos((pan + 1) * np.pi / 4) * 1.414; r = np.sin((pan + 1) * np.pi / 4) * 1.414
    buf[0, i:j] += sig * g * l; buf[1, i:j] += sig * g * r

def T(d): return np.arange(int(d * SR)) / SR

# ---------------------------------------------------------------- AMBIENTES
def amb_passaros(d, dens=.6):
    x = ruido(d, 200, 2500) * .05
    t0 = 0.0
    while t0 < d - 1:
        t0 += rng.uniform(.6, 2.6) / dens; f0 = rng.uniform(2600, 4200); k = rng.integers(2, 5)
        for q in range(k):
            dd = rng.uniform(.06, .12); tt = T(dd); f = f0 * (1 + .25 * np.sin(np.pi * tt / dd)) * (1 + q * .03)
            s = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.sin(np.pi * tt / dd) ** 2
            i = int((t0 + q * .14) * SR)
            if i + len(s) < len(x): x[i:i + len(s)] += s * rng.uniform(.15, .35)
    return x

def amb_cidade(d):
    x = ruido(d, 60, 900) * .6 + ruido(d, 900, 3000) * .08
    lento = np.interp(T(d), np.arange(0, d + 3, 3), rng.uniform(.6, 1.0, int(d / 3) + 2))
    return x * lento

def amb_grilos(d):
    x = ruido(d, 100, 600) * .04; tt = T(d)
    for f, ph, rate in ((4300, 0, 2.3), (4700, 1.3, 1.9)):
        pulso = (np.sin(2 * np.pi * 28 * tt) > .2) * (np.sin(2 * np.pi * rate * tt + ph) > .3)
        x += np.sin(2 * np.pi * f * tt) * pulso * .12
    return x

def amb_sala(d): return ruido(d, 80, 500) * .25
def amb_vento(d):
    tt = T(d); x = ruido(d, 150, 1400); return x * (.6 + .4 * np.sin(2 * np.pi * .21 * tt) ** 2)
def amb_chuva(d):
    x = ruido(d, 1200, 9000) * .5 + ruido(d, 200, 1200) * .2
    for _ in range(int(d * 40)):
        i = rng.integers(0, len(x) - 400); x[i:i + 300] += np.exp(-np.arange(300) / 40) * rng.uniform(-.6, .6)
    return x
def amb_parado(d): return ruido(d, 300, 2200) * .12  # ar parado, quase silêncio
def zumbido_ventilador(d):
    tt = T(d); return (np.sin(2 * np.pi * 95 * tt) * .3 + ruido(d, 100, 700) * .7) * (1 + .15 * np.sin(2 * np.pi * 2.2 * tt))
def motor_onibus(d):
    tt = T(d); return (np.sin(2 * np.pi * 48 * tt) + .5 * np.sin(2 * np.pi * 96 * tt)) * .3 + ruido(d, 40, 400) * .7

AMB = {'passaros': amb_passaros, 'cidade': amb_cidade, 'grilos': amb_grilos, 'sala': amb_sala, 'vento': amb_vento, 'chuva': amb_chuva, 'parado': amb_parado, 'ventilador': zumbido_ventilador, 'onibus': motor_onibus}
# [início, fim, tipo, ganho]
AMBIENTES = [
    [0, 52.5, 'passaros', .5], [0, 44.3, 'ventilador', .35],
    [52.5, 73.8, 'vento', .45], [52.5, 73.8, 'passaros', .4], [73.8, 81.4, 'cidade', .55], [81.4, 93.6, 'sala', .5],
    [93.6, 113.5, 'passaros', .35], [113.5, 126.0, 'cidade', .5], [126.0, 135.4, 'onibus', .4], [126.0, 135.4, 'cidade', .25],
    [135.4, 140.4, 'sala', .5], [140.4, 161.5, 'cidade', .35], [140.4, 161.5, 'passaros', .3], [161.5, 167.7, 'grilos', .45],
    [167.7, 177.3, 'passaros', .35], [177.3, 200.1, 'cidade', .5], [200.1, 221.4, 'sala', .55],
    [221.4, 252.3, 'passaros', .3], [252.3, 255.7, 'sala', .4], [255.7, 258.9, 'passaros', .45], [258.9, 262.9, 'grilos', .5], [262.9, 278.1, 'passaros', .3],
    [278.1, 313.0, 'parado', .6], [313.0, 314.5, 'cidade', .5], [313.0, 314.5, 'passaros', .5], [314.5, 353.3, 'parado', .6],
    [353.3, 365.6, 'passaros', .35], [365.6, 369.3, 'sala', .4], [369.3, 373.7, 'chuva', .35], [373.7, 383.6, 'chuva', .6],
    [383.6, 398.6, 'sala', .5], [398.6, 441.9, 'passaros', .3], [441.9, 447.3, 'cidade', .5], [447.3, 468.9, 'sala', .55],
    [468.9, 503.4, 'grilos', .35], [503.4, 521.2, 'passaros', .3], [521.2, 525.5, 'passaros', .3],
]

# ---------------------------------------------------------------- EFEITOS PONTUAIS
def boing():
    d = .7; tt = T(d); f = 180 + 260 * np.exp(-tt * 5) * (1 + .5 * np.sin(2 * np.pi * 9 * tt))
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 4.5) * .9
def baque():
    d = .3; tt = T(d); return (np.sin(2 * np.pi * np.cumsum(70 + 60 * np.exp(-tt * 25)) / SR) * .8 + ruido(d, 80, 900) * .5) * np.exp(-tt * 14)
def porta_range():
    d = 1.1; tt = T(d); f = 380 + 140 * np.sin(2 * np.pi * 1.3 * tt) + 60 * np.sin(2 * np.pi * 7 * tt)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * (.5 + .5 * np.sign(np.sin(2 * np.pi * 33 * tt))) * .3
    return fade(banda(s, 250, 3000), .1, .3)
def plim():
    tt = T(1.4); return (np.sin(2 * np.pi * 1318 * tt) + .5 * np.sin(2 * np.pi * 1975 * tt) + .3 * np.sin(2 * np.pi * 2637 * tt)) * np.exp(-tt * 3.5) * .35
def pop():
    tt = T(.12); return np.sin(2 * np.pi * np.cumsum(500 + 900 * tt / .12) / SR) * np.exp(-tt * 40) * .6
def woosh(d=.6, lo=300, hi=3000):
    tt = T(d); return ruido(d, lo, hi) * np.sin(np.pi * tt / d) ** 2
def asas():
    d = .8; tt = T(d); return ruido(d, 300, 2500) * (.5 + .5 * np.sign(np.sin(2 * np.pi * 11 * tt))) * np.exp(-tt * 2.5)
def penas():
    a = asas() * .8; b = baque(); a[:len(b)] += b * .5; return a
def buzina(f=420, d=.35):
    tt = T(d); s = np.sign(np.sin(2 * np.pi * f * tt)) * .5 + np.sign(np.sin(2 * np.pi * f * 1.26 * tt)) * .5
    return fade(banda(s, 300, 2500), .01, .05) * .35
def tique():
    tt = T(.025); return ruido(.025, 2000, 8000) * np.exp(-tt * 300)
def tiques(d, por_s=1):
    x = np.zeros(int(d * SR) + 2000); k = 0.0
    while k < d: i = int(k * SR); s = tique(); x[i:i + len(s)] += s; k += 1 / por_s
    return x
def congela():
    d = 1.2; tt = T(d); f = 1600 * np.exp(-tt * 2.5) + 120
    return (np.sin(2 * np.pi * np.cumsum(f) / SR) * .3 + ruido(d, 2000, 8000) * .25 * np.exp(-tt * 3)) * np.exp(-tt * 2)
def descongela(): return congela()[::-1] * .9
def brilhos(d=1.5):
    x = np.zeros(int(d * SR));
    for k in range(14):
        tt = T(.35); f = rng.uniform(2200, 4200); s = np.sin(2 * np.pi * f * tt) * np.exp(-tt * 14); i = int(rng.uniform(0, d - .35) * SR); x[i:i + len(s)] += s * .3
    return x
def xicara():
    tt = T(.6); clink = (np.sin(2 * np.pi * 2900 * tt) + .6 * np.sin(2 * np.pi * 4100 * tt)) * np.exp(-tt * 18)
    sp = ruido(.6, 400, 4000) * np.exp(-tt * 6) * .7; return clink * .5 + sp
def caneta(d):
    tt = T(d); return ruido(d, 1500, 6000) * (.5 + .5 * np.abs(np.sin(2 * np.pi * 6 * tt))) * .5
def freio_ar():
    d = 1.0; tt = T(d); return ruido(d, 1500, 7000) * np.exp(-tt * 3) * .8
def porta_auto():
    d = 1.2; tt = T(d); return ruido(d, 200, 1500) * np.sin(np.pi * tt / d) * .6
def notificacao():
    tt = T(.5); return (np.sin(2 * np.pi * 988 * tt) * (tt < .12) + np.sin(2 * np.pi * 1318 * tt) * (tt >= .12)) * np.exp(-(tt % .12) * 8) * .35
def clique():
    tt = T(.04); return ruido(.04, 1000, 6000) * np.exp(-tt * 200) * .8
def sino():
    tt = T(1.6); s = np.zeros(len(tt))
    for k in range(4): s += np.roll(np.sin(2 * np.pi * 1760 * tt) * np.exp(-tt * 9) + .5 * np.sin(2 * np.pi * 2637 * tt) * np.exp(-tt * 12), int(k * .16 * SR)) * (1 - k * .2)
    return s * .3
def latido():
    d = .22; tt = T(d); f = 520 - 200 * tt / d
    return (np.sign(np.sin(2 * np.pi * np.cumsum(f) / SR)) * .3 + ruido(d, 300, 2000) * .5) * np.sin(np.pi * tt / d) ** .5 * .6
def carro_passa():
    d = 1.6; tt = T(d); return ruido(d, 80, 1500) * np.exp(-((tt - .8) / .35) ** 2)
def passos(n, ritmo=.45):
    x = np.zeros(int((n * ritmo + .3) * SR))
    for k in range(n):
        tt = T(.08); s = ruido(.08, 100, 1200) * np.exp(-tt * 50); i = int(k * ritmo * SR); x[i:i + len(s)] += s
    return x
def coo():
    tt = T(.5); return np.sin(2 * np.pi * (300 + 40 * np.sin(2 * np.pi * 4 * tt)) * tt) * np.sin(np.pi * tt / .5) * .5

# [tempo, som, ganho, pan]
EV = [
    # dia 1
    (40.93, boing(), .7, 0), (41.6, porta_range(), .5, -.5), (52.5, plim(), .5, 0), (54.0, woosh(1.2), .5, .3),
    (62.0, coo(), .25, .5), (67.55, penas(), .8, 0), (75.2, buzina(420), .5, -.4), (78.4, buzina(360, .5), .45, .5),
    (82.4, tique(), .6, 0), (90.1, woosh(1.0, 100, 800), .5, 0),
    # dia 2
    (111.5, plim(), .5, 0), (116.2, pop(), .4, .5), (164.55, tique(), .8, 0), (164.6, woosh(1.3, 300, 4000), .4, 0),
    # dia 3
    (174.9, plim(), .5, 0), (185.0, carro_passa(), .8, 0), (201.3, porta_auto(), .5, 0),
    # dia 4
    (225.0, baque(), .7, 0), (226.2, latido(), .35, .3), (235.1, plim(), .5, 0), (238.0, pop(), .4, .5), (256.3, coo(), .3, -.3), (257.1, coo(), .3, .4),
    # dia 5 (tempo parado)
    (278.1, congela(), .45, 0), (292.4, plim(), .5, 0), (303.3, pop(), .5, 0), (306.2, clique(), .6, 0), (306.25, brilhos(1.2), .4, 0),
    (312.95, descongela(), .5, 0), (313.05, asas(), .6, -.3), (313.25, asas(), .5, .4), (313.4, asas(), .45, 0),
    (330.0, congela() * .6, .35, 0),
    # dia 6
    (364.55, xicara(), .75, -.2), (365.6, tiques(3.7, 1), .4, .4), (371.2, plim(), .5, 0), (378.1, pop(), .4, .5),
    (383.6, brilhos(2.0), .35, 0), (393.0, tiques(5.6, 6), .35, -.3),
    # dia 7
    (398.6, plim(), .5, 0), (405.6, brilhos(1.0), .25, 0), (424.4, pop(), .4, .5), (439.3, caneta(1.6), .6, 0),
    (442.2, motor_onibus(3.0) * np.linspace(.3, 1, int(3.0 * SR)), .35, -.5), (444.6, freio_ar(), .45, -.3), (445.0, porta_auto(), .4, -.2),
    (447.4, passos(7, .48), .35, .2), (450.6, baque() * .4, .3, 0), (460.6, woosh(.3, 800, 3000), .2, .3),
    (467.9, brilhos(.8), .25, 0), (468.2, woosh(.4, 300, 2000), .2, 0),
    (469.6, passos(7, .55), .3, -.2), (472.6, woosh(2.0, 800, 5000), .35, 0), (474.6, plim(), .45, 0), (474.6, brilhos(1.4), .35, 0),
    (486.4, notificacao(), .4, .2), (496.9, brilhos(1.2), .3, 0),
    (503.4, pop(), .5, 0), (511.3, pop(), .4, 0), (511.9, clique(), .6, 0), (513.1, sino(), .45, 0),
    (518.0, woosh(1.0, 300, 2000), .3, 0), (520.55, boing(), .75, 0), (522.4, latido(), .35, .2), (522.9, latido(), .3, .2),
]

def main():
    out = sys.argv[1]
    for a, b, tipo, g in AMBIENTES:
        s = norm(AMB[tipo](b - a)) * g * .35; add(a, fade(s, .35, .35), 1.0, 0)
    for t, s, g, p in EV:
        if g > 0: add(t, norm(s) * g, 1.0, p)
    mx = np.max(np.abs(buf)); print('pico', mx)
    buf2 = buf / max(1.0, mx / .9)
    pcm = (np.clip(buf2.T, -1, 1) * 32767).astype('<i2')
    with wave.open(out, 'wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())

main()
