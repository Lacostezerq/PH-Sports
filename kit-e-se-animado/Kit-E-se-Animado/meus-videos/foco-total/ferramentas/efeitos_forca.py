# Efeitos sonoros, ambientes e a música baixinha de "E se a força do Guilherme dobrasse todo dia?" — tudo gerado do zero.
# Uso: python3 -I ferramentas/efeitos_forca.py assets/audio/efeitos.wav assets/audio/musica.wav
import sys, os, wave, numpy as np
AQUI = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(AQUI, 'efeitos.py')).read().replace('DUR = 525.5', 'DUR = 840.0')
exec(src.split('def main():')[0])          # reaproveita banda, ruido, fade, add, T e os efeitos prontos

def amb_cidade(d):
    x = ruido(d, 60, 900) * .6 + ruido(d, 900, 3000) * .08; xp = np.arange(0, d + 3, 3); return x * np.interp(T(d), xp, rng.uniform(.6, 1.0, len(xp)))
def S(*xs):
    n = max(len(x) for x in xs); o = np.zeros(n)
    for x in xs: o[:len(x)] += x
    return o
def env(d, a=.005, r=.3):
    n = int(d * SR); t = np.arange(n) / SR; return np.minimum(1, t / max(a, 1e-4)) * np.exp(-t / r)
def seno(f, d, a=.005, r=.3): t = T(d); return np.sin(2 * np.pi * f * t) * env(d, a, r)
def tum():                                  # batida grave, como coração
    t = T(.7); f = 70 * np.exp(-t * 3) + 38; ph = 2 * np.pi * np.cumsum(f) / SR; return np.sin(ph) * np.exp(-t * 5) * 1.2 + ruido(.7, 40, 160) * np.exp(-t * 12) * .4
def coracao(): return np.concatenate([tum()[:int(.3 * SR)] * .9, np.zeros(int(.05 * SR)), tum() * .6])
def vidro_quebra(d=1.2):
    s = ruido(d, 2500, 12000) * env(d, .002, .12) * 1.2
    out = s.copy()
    for k in range(22): i = int(rng.uniform(.02, d * .85) * SR); tk = seno(rng.uniform(2200, 6500), .2, .001, .045) * rng.uniform(.2, .45); j = min(len(out), i + len(tk)); out[i:j] += tk[:j - i]
    return out
def estalo(): return ruido(.12, 1500, 9000) * env(.12, .001, .02) * 1.4
def crack_madeira(): return ruido(.35, 300, 5000) * env(.35, .001, .05) * 1.3 + ruido(.35, 60, 300) * env(.35, .002, .12)
def crunch(d=.6, lo=200, hi=4000): x = ruido(d, lo, hi); g = (rng.random(len(x)) < .004).astype(float); g = np.convolve(g, np.ones(int(.01 * SR)), 'same'); return x * (.35 + g) * env(d, .002, .2)
def boom(d=2.0): t = T(d); f = 55 * np.exp(-t * 1.5) + 28; return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 2.2) * 1.4 + ruido(d, 30, 400) * np.exp(-t * 3) * .7
def metal(d=1.0, base=180):
    t = T(d); s = sum(np.sin(2 * np.pi * base * m * t) * np.exp(-t * (3 + m)) / (1 + m * .4) for m in [1, 2.76, 5.4, 8.9]); return s * .5 + ruido(d, 1500, 6000) * np.exp(-t * 18) * .4
def bang_botijao(): return S(metal(.9, 230), boom(.4) * .3)
def amassa_metal(d=1.2): return crunch(d, 150, 3000) * 1.3 + metal(d, 95) * .6
def buzina_travada(d): t = T(d); w = (np.sign(np.sin(2 * np.pi * 330 * t)) + np.sign(np.sin(2 * np.pi * 415 * t))) * .22; return banda(w, 200, 3500) * np.minimum(1, t / .05)
def raspa(d): return ruido(d, 1800, 7000) * (.6 + .4 * np.sin(T(d) * 37)) * .5
def rebobina(d=3.3): t = T(d); f = 300 + 2600 * (t / d) ** 1.5 + 80 * np.sin(t * 40); return np.sin(2 * np.pi * np.cumsum(f) / SR) * .18 + ruido(d, 2000, 8000) * .12
def fwoosh(): t = T(.9); return ruido(.9, 150, 2500) * np.minimum(1, t / .05) * np.exp(-t * 3) * 1.1
def splat(): return S(ruido(.25, 200, 2500) * env(.25, .001, .04) * 1.2, seno(140, .2, .001, .05) * .5)
def tok(): return seno(900, .08, .001, .02) + ruido(.08, 1000, 5000) * env(.08, .001, .01) * .4
def respingo(): return ruido(.5, 800, 6000) * env(.5, .002, .08)
def agua_jato(d): return ruido(d, 600, 8000) * .35 * np.minimum(1, T(d) / .1)
def alarme(d): t = T(d); f = np.where((t * 2.2) % 1 < .5, 1300, 900); return np.sin(2 * np.pi * np.cumsum(f) / SR) * .25
def multidao(d, alvo=1.0):
    t = T(d); x = ruido(d, 250, 3000) * (.6 + .4 * np.sin(t * 7.1) * np.sin(t * 2.3)); vozes = sum(np.sin(2 * np.pi * rng.uniform(180, 500) * t + rng.uniform(0, 6)) * (np.sin(t * rng.uniform(3, 9)) > .5) * .05 for _ in range(10)); return (x + vozes) * alvo
def risadas(d): t = T(d); return sum(seno(rng.uniform(200, 420), d, .01, d) * (np.abs(np.sin(t * rng.uniform(15, 22))) > .7) * .08 for _ in range(8)) + ruido(d, 400, 2500) * .15
def creak(d=1.4): t = T(d); f = 120 + 40 * np.sin(t * 3); return banda(np.sign(np.sin(2 * np.pi * np.cumsum(f) / SR)) * .2, 200, 2500) * np.minimum(1, t / .2) * np.exp(-t * 1.2)
def papel(d=1.0): x = ruido(d, 1500, 9000); g = np.convolve((rng.random(len(x)) < .01).astype(float), np.ones(int(.004 * SR)), 'same'); return x * g * .8
def batida(bpm, d):                          # som alto da academia (bumbo + chimbal)
    out = np.zeros(int(d * SR)); per = 60 / bpm
    for k in range(int(d / per)):
        i = int(k * per * SR); b = boom(.25)[:int(.25 * SR)] * .7; j = min(len(out), i + len(b)); out[i:j] += b[:j - i]
        i2 = int((k + .5) * per * SR); h = ruido(.06, 6000, 12000) * env(.06, .001, .015) * .5; j2 = min(len(out), i2 + len(h)); out[i2:j2] += h[:j2 - i2]
    return out
def passosx(n, ritmo=.45, peso=1.0):
    out = np.zeros(int((n * ritmo + .3) * SR))
    for k in range(n): i = int(k * ritmo * SR); s = (ruido(.1, 80, 1200) * env(.1, .002, .03) + seno(90, .1, .002, .03) * .5) * peso; out[i:i + len(s)] += s[:len(out) - i]
    return out

EV = []
def ev(t, sig, g=1.0, pan=0.0): EV.append((t, sig, g, pan))
# ---------- abertura e cold open ----------
ev(0.25, np.concatenate([tok() * .15 for _ in range(1)]), .3)
for i in range(35): ev(.25 + i * .05, tok() * .25, .12)
ev(3.0, estalo(), .6); ev(3.25, vidro_quebra(1.4), .7)
ev(4.0, amb_cidade(19), .25); ev(4.0, buzina_travada(18.6), .28, -.2); ev(4.2, raspa(16.4), .22)
ev(5.6, carro_passa(), .4, .5); ev(6.4, crunch(.5), .35, .4); ev(6.6, metal(.6, 300), .3, .3)
ev(8.2, multidao(4, .5), .3)
ev(19.75, ruido(.2, 200, 2000) * env(.2, .001, .04), .3)       # sacola no chão
ev(22.6, boom(2.5), .9); ev(22.6, amassa_metal(1.4), .8); ev(22.62, crunch(1.2, 80, 2000), .7); ev(22.7, vidro_quebra(.8) * .4, .25)
for k in range(10): ev(24.0 + k * .38, tok() * .3, .18)                          # o pão rolando
ev(32.6, congela(), .5)
ev(36.05, pop(), .5); ev(36.1, brilhos(1.2), .3)
ev(38.6, rebobina(3.3), .45)
# ---------- dia 0 ----------
ev(42, amb_sala(50), .18); ev(42.3, porta_range(), .3); ev(42.4, passosx(5, .42), .4); ev(44.0, bang_botijao() * .5, .5); ev(45.0, passosx(5, .42), .35); ev(45.2, porta_range(), .25)
ev(48.0, ruido(2.2, 100, 900) * .2, .3)   # esforço
ev(51, passosx(9, .7, 1.2), .35); ev(55, passosx(4, .9, 1.3), .35); ev(56.9, bang_botijao() * .6, .45)
ev(59.4, passosx(12, .36, .8), .35); ev(64.6, ruido(.3, 300, 3000) * env(.3, .002, .08), .25)
ev(66.4, passosx(10, .4, .8), .3); ev(70.4, passosx(14, .38, .8), .3); ev(76.5, porta_range(), .3)
ev(80, amb_sala(12), .15); ev(83.15, fwoosh(), .7); ev(83.1, clique(), .3)
ev(89.8, ruido(.3, 300, 2500) * env(.3, .002, .06), .3)
ev(92, zumbido_ventilador(16), .15); ev(92, amb_grilos(16), .14); ev(100.95, clique(), .45)
ev(104.2, tum(), 1.0)
# ---------- dia 1 ----------
ev(108, amb_passaros(24), .12); ev(108, amb_sala(24), .12)
for k in range(5): ev(113.0 + 2.0 + k * .45 - 1, tok() * 1.5, .45)        # bate a tampa na pia
ev(122.35, pop(), .6); ev(122.65, tok(), .5); ev(123.15, respingo(), .5); ev(123.15, xicara(), .3)
ev(132, amb_sala(20) * 1.5, .14); ev(132, passosx(20, .5, .6), .25); ev(134.6, woosh(.4, 400, 3500), .6); ev(135.0, ruido(.2, 100, 900), .3)
# ---------- dia 2 ----------
ev(152, passosx(20, .32, .9), .35); ev(152, notas_assobio := np.zeros(1), 0)
def assobio(d): t = T(d); mel = [784, 880, 988, 880, 784, 659, 784, 880]; f = np.array(mel)[(t * 2.5).astype(int) % len(mel)]; f = np.convolve(f, np.ones(800) / 800, 'same'); return np.sin(2 * np.pi * np.cumsum(f) / SR) * .12 * (np.sin(t * 15) > -.6)
ev(152, assobio(10), .5)
# ---------- dia 3: pátio ----------
ev(176, multidao(32, .35), .3); ev(188.7, risadas(2.5), .5); ev(196.2, multidao(11, 1.0), .6, 0)
for i, tc in enumerate([193.5, 194.3, 195.1]): ev(tc, tique(), .4)
ev(195.7, boom(1.4) * .8, .8); ev(195.72, crunch(1.0, 100, 3000), .9); ev(195.9, crack_madeira(), .5)
# ---------- dia 4: montagem ----------
ev(222, amb_sala(44), .12); ev(223.55, estalo(), .7); ev(223.6, metal(.4, 700), .3)
for tq in [227.4, 229.0, 230.6]: ev(tq, estalo(), .6)
for k in range(10): ev(232.5 + k * .2, clique() * .4, .2)
ev(235.0, vidro_quebra(.6) * .7, .6)
ev(238.0, metal(.5, 400), .4); ev(238.0, agua_jato(11.5), .45); ev(249.6, agua_jato(8), .3)
ev(244.8, crack_madeira(), .7); ev(244.9, baque(), .6)
ev(266.4, amb_sala(24), .14); ev(271.4, ruido(.3, 200, 900) * .4, .4)
# ---------- dia 5: rua ----------
ev(290, amb_passaros(30) * 1.4, .18); ev(290, multidao(8, .25), .25)
for k in range(10): ev(290.5 + k * .6, tok() * .7, .25)                    # chutes na bola
ev(306.8, creak(1.6), .35); ev(311.4, creak(3.2), .3); ev(314.6, baque(), .4); ev(314.7, alarme(6), .45)
for k, tp in enumerate([321.0, 322.2, 323.6, 324.2, 325.0, 325.6, 326.4, 327.0, 327.6, 328.2, 328.6]): ev(tp, plim(), .35)
# ---------- dia 6: academia ----------
ev(330, batida(124, T_DOB := 11.4), .45); ev(330, amb_sala(30), .12)
ev(341.4, creak(.6) * 1.5, .6); ev(341.9, boom(2.4), .9); ev(342.0, metal(1.2, 140), .7); ev(342.25, metal(1.0, 160), .6)
# ---------- dia 7 ----------
ev(360, amb_grilos(21), .14); ev(360, zumbido_ventilador(21), .12); ev(362.3, crack_madeira(), .9); ev(367.6, crack_madeira(), .9); ev(367.7, baque(), .6)
ev(371.5, ruido(2.2, 200, 1500) * .3, .3)
ev(381, amb_passaros(9), .12)
# ---------- dia 8: aniversário ----------
ev(390, amb_sala(50), .12); ev(415.1, ruido(.5, 300, 3000) * env(.5, .02, .2), .6); ev(415.6, splat(), .6)
ev(425.4, ruido(14, 1500, 5000) * (.5 + .5 * np.sin(T(14) * 31)) * .06, .5)
# ---------- dias 9/10 ----------
ev(440, multidao(25, .25), .2); ev(452, caneta(4), .4)
ev(465, amb_sala(24), .12); ev(467.0, agua_jato(2.4) * .6, .4); ev(472.6, crunch(.5, 1500, 9000), .7); ev(472.65, vidro_quebra(.5) * .5, .4)
for k in range(12): ev(473 + k * .5, tok() * .25, .15)                     # pingos
# ---------- treino dos ovos ----------
ev(489.4, amb_grilos(51), .1); ev(489.4, amb_sala(51), .1); ev(503.0, ruido(.3, 200, 1200) * .5, .4)
for tq in [512.4, 514.6, 515.6, 516.6, 520.4, 523.8, 530.0]: ev(tq, splat(), .65)
ev(525.3, passosx(5, .4, .6), .3)
ev(538.4, ruido(.4, 300, 2000) * .3, .3)
# ---------- dia 12: a verdade ----------
ev(560, amb_cidade(51), .22); ev(560, buzina_travada(12.5), .25); ev(560, raspa(12.4), .2); ev(572.0, coracao(), .6)
ev(574.0, boom(2.0) * .6, .7); ev(574.0, amassa_metal(.8) * .6, .6)
ev(578.6, porta_range(), .35); ev(579.8, passosx(5, .55, .7), .3)
ev(599.6, multidao(20, .3), .25)
# ---------- dia 14: papel ----------
ev(620, amb_cidade(30), .2); ev(627.2, papel(3), .5); ev(630.6, baque() * .5, .3); ev(630.95, creak(1.4) * 1.4, .6); ev(631.1, metal(.8, 120), .4)
ev(650, amb_sala(20), .12); ev(670, amb_sala(10) * 1.2, .12); ev(670, tiques(10), .25); ev(676.6, crack_madeira() * .6, .5)
ev(680, amb_sala(15), .12); ev(680.4, porta_range(), .3); ev(681.8, bang_botijao() * .5, .5); ev(687.5, ruido(.6, 200, 1200) * env(.6, .05, .3), .4)
# ---------- a queda ----------
ev(692.8, passosx(5, .35, .7), .3); ev(695, passosx(14, .36, .7), .3); ev(700, passosx(6, .75, .7), .3); ev(705.2, passosx(3, 1.1, .8), .35)
ev(708.6, ruido(.3, 800, 4000) * env(.3, .002, .08), .5)
for k in range(6): ev(709.0 + k * .62, bang_botijao(), .75)
ev(712.0, porta_range(), .25)
for k in range(15): ev(714.4 + k * 1.05, coracao(), .8)                     # só o coração, abafado
for k in range(9): ev(714.8 + k * 1.2, crunch(.3, 150, 2500), .35)        # degraus trincando
ev(729.6, ruido(.5, 100, 600) * env(.5, .01, .2), .3)
ev(746, amb_sala(8), .1)
# ---------- dia 20 / final ----------
ev(754, amb_grilos(16), .1); ev(770, amb_sala(21), .12); ev(770.3, porta_range(), .3); ev(771.8, bang_botijao() * .4, .4); ev(779.6, passosx(30, .38, .5), .25)
ev(791, amb_sala(49), .12); ev(794.9, clique(), .3); ev(794.95, fwoosh(), .65); ev(801.4, tok(), .5); ev(801.45, ruido(4, 2000, 7000) * .1, .5)   # chiado da frigideira
ev(806.0, tum(), .7); ev(810.0, tum(), .8)
ev(826.0, clique(), .5); ev(827.2, sino(), .45)
# contador: um "tum" a cada vez que a força dobra
for tq in [42.0, 108, 152, 176, 222, 290, 330, 360, 390, 440, 452, 500, 560, 620, 650, 660, 670, 754]: ev(tq, tum(), .55)

def musica():
    """Música baixinha: acordes suaves (piano + pad), com o clima de cada parte. Para nos momentos fortes."""
    out = np.zeros(N); BPM = 70; beat = 60 / BPM
    N2F = lambda n: 440 * 2 ** ((n - 69) / 12)
    PROG = {'leve': [[60, 64, 67], [55, 59, 62], [57, 60, 64], [53, 57, 60]], 'triste': [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]], 'tenso': [[45, 52], [46, 53], [45, 52], [44, 51]], 'esperanca': [[53, 57, 60, 64], [55, 59, 62], [57, 60, 64, 67], [60, 64, 67, 71]]}
    PARTES = [(4.3, 23.6, 'tenso'), (25.5, 32.6, 'tenso'), (42, 92, 'leve'), (108, 222, 'leve'), (222, 330, 'leve'), (343, 360, 'leve'), (360, 390, 'triste'), (390, 409, 'triste'), (413, 489, 'triste'), (489.4, 540.6, 'triste'), (548, 560, 'esperanca'), (560, 572, 'tenso'), (578, 620, 'esperanca'), (620, 708.6, 'leve'), (737.5, 838, 'esperanca')]
    def piano(f, d): t = T(d); return (np.sin(2 * np.pi * f * t) + .35 * np.sin(4 * np.pi * f * t) + .12 * np.sin(6 * np.pi * f * t)) * np.minimum(1, t / .008) * np.exp(-t * 1.6)
    def pad(f, d): t = T(d); return (np.sin(2 * np.pi * f * t) + .5 * np.sin(2 * np.pi * f * 1.003 * t)) * np.sin(np.pi * np.minimum(1, t / d)) * .5
    for a, b, modo in PARTES:
        prog = PROG[modo]; c = 0; t0 = a
        while t0 < b - .5:
            ac = prog[c % len(prog)]; dur = 4 * beat
            for k, n in enumerate(ac): s = pad(N2F(n), min(dur, b - t0)) * .05; i = int(t0 * SR); j = min(N, i + len(s)); out[i:j] += s[:j - i]
            arp = ac + [ac[0] + 12]
            for k in range(8):
                tt = t0 + k * beat / 2
                if tt > b - .3: break
                if modo == 'tenso': s = piano(N2F(ac[0] - 12), .6) * .09 if k % 2 == 0 else np.zeros(1)
                else: s = piano(N2F(arp[k % len(arp)] + (12 if modo == 'esperanca' and k > 3 else 0)), 1.6) * .06
                i = int(tt * SR); j = min(N, i + len(s)); out[i:j] += s[:j - i]
            t0 += dur; c += 1
        # entra e sai suave
        ia, ib = int(a * SR), int(b * SR); fl = int(1.2 * SR); out[ia:ia + fl] *= np.linspace(0, 1, len(out[ia:ia + fl])); out[max(ia, ib - fl):ib] *= np.linspace(1, 0, len(out[max(ia, ib - fl):ib]))
    return out

def salva(nome, L, R):
    pk = max(np.max(np.abs(L)), np.max(np.abs(R)), 1e-9); g = min(1, .89 / pk)
    pcm = (np.clip(np.stack([L, R], 1) * g, -1, 1) * 32767).astype(np.int16)
    with wave.open(nome, 'wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())

for (t, sig, g, pan) in EV:
    if len(sig) > 1: add(t, sig, g, pan)
salva(sys.argv[1], buf[0], buf[1])
m = musica(); salva(sys.argv[2], m, m)
print(len(EV), 'efeitos')
