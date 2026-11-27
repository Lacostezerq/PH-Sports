# Efeitos sonoros e as quatro trilhas de "E se você focasse 100%?" — tudo gerado do zero (sem direitos autorais).
# T1 tensão (pulso grave + tique), T2 cotidiano (lo-fi com violão abafado), T3 poder (synth brilhante + bateria), T4 coração (piano + cordas).
# Uso: python3 -I ferramentas/efeitos_foco.py assets/audio/efeitos.wav assets/audio/musica.wav
import sys, os, wave, numpy as np
AQUI = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(AQUI, 'efeitos.py')).read().replace('DUR = 525.5', 'DUR = 747.0')
exec(src.split('def main():')[0])

def S(*xs):
    n = max(len(x) for x in xs); o = np.zeros(n)
    for x in xs: o[:len(x)] += x
    return o
def env(d, a=.005, r=.3): n = int(d * SR); t = np.arange(n) / SR; return np.minimum(1, t / max(a, 1e-4)) * np.exp(-t / r)
def seno(f, d, a=.005, r=.3): t = T(d); return np.sin(2 * np.pi * f * t) * env(d, a, r)
def tum():
    t = T(.7); f = 70 * np.exp(-t * 3) + 38; return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 5) * 1.2 + ruido(.7, 40, 160) * np.exp(-t * 12) * .4
def coracao(): return np.concatenate([tum()[:int(.3 * SR)] * .9, np.zeros(int(.05 * SR)), tum() * .6])
def bzz(d=.32): t = T(d); return banda(np.sign(np.sin(2 * np.pi * 160 * t)) * (np.sin(2 * np.pi * 22 * t) > 0), 80, 900) * .6 * np.minimum(1, t / .01) * np.minimum(1, (d - t) / .03)
def fuum(): t = T(1.4); f = 140 * np.exp(-t * 2.2) + 40; return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.minimum(1, t / .15) * np.exp(-t * 1.4) + ruido(1.4, 60, 400) * np.exp(-t * 2) * .5
def defuum(): return fuum()[::-1] * .7
def caixinha(n=3, base=84):   # "plim" de caixinha de música
    N2F = lambda m: 440 * 2 ** ((m - 69) / 12); notas = [base, base + 4, base + 7, base + 12][:n]; out = np.zeros(int((n * .16 + 1.2) * SR))
    for k, m in enumerate(notas): s = (seno(N2F(m), 1.2, .002, .35) + .3 * seno(N2F(m) * 2.01, 1.2, .002, .15)); i = int(k * .16 * SR); out[i:i + len(s)] += s
    return out
def ting(): return S(seno(2600, .8, .001, .25), seno(3900, .8, .001, .18) * .5)
def vidro(d=1.0):
    s = ruido(d, 2500, 12000) * env(d, .002, .1) * 1.2; out = s.copy()
    for k in range(18): i = int(rng.uniform(.02, d * .8) * SR); tk = seno(rng.uniform(2200, 6500), .2, .001, .045) * rng.uniform(.2, .45); j = min(len(out), i + len(tk)); out[i:j] += tk[:j - i]
    return out
def impacto(): t = T(1.6); f = 50 * np.exp(-t * 1.5) + 30; return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 2.5) * 1.4 + ruido(1.6, 30, 300) * np.exp(-t * 4) * .6
def clack(): return S(seno(1400, .1, .001, .02) * .6, ruido(.1, 1500, 7000) * env(.1, .001, .012))
def whoosh(): t = T(.7); return ruido(.7, 300, 4000) * np.sin(np.pi * t / .7) ** 2
def dundun(): return np.concatenate([seno(98, .45, .005, .3) * 1.2, np.zeros(int(.1 * SR)), seno(82, .7, .005, .4) * 1.3])
def trava(): t = T(1.2); return banda(np.sign(np.sin(2 * np.pi * (300 + 40 * np.sin(t * 30)) * t)) * .25 * (np.sin(t * 50) > -.2), 300, 3000) * np.exp(-t * .8)
def buzzer(): t = T(.6); return banda(np.sign(np.sin(2 * np.pi * 110 * t)) * .5, 80, 2000) * np.minimum(1, (.6 - t) / .05)
def fomfom(): N2F = lambda m: 440 * 2 ** ((m - 69) / 12); return np.concatenate([banda(np.sign(np.sin(2 * np.pi * N2F(m) * T(.35))) * .3 * env(.35, .01, .3), 100, 3000) for m in [55, 54, 53]] + [banda(np.sign(np.sin(2 * np.pi * N2F(52) * T(.9))) * .3 * env(.9, .01, .6), 100, 3000)])
def ding(): return S(seno(1568, 1.2, .002, .5), seno(2349, 1.2, .002, .35) * .5)
def coral(): t = T(2.0); return sum(np.sin(2 * np.pi * f * t) * .2 for f in [523, 659, 784, 1047]) * np.sin(np.pi * t / 2.0) * (1 + .1 * np.sin(t * 30))
def crocante(): x = ruido(.5, 1500, 9000); g = np.convolve((rng.random(len(x)) < .01).astype(float), np.ones(int(.004 * SR)), 'same'); return x * g * 1.2
def acorde_drama(): N2F = lambda m: 440 * 2 ** ((m - 69) / 12); t = T(1.8); return sum(np.sin(2 * np.pi * N2F(m) * t) for m in [45, 52, 57, 60, 64]) * np.exp(-t * 1.2) * .25
def download(): return S(seno(880, .15, .002, .1), np.concatenate([np.zeros(int(.12 * SR)), seno(1320, .3, .002, .2)]))
def notificacoes(n, d): out = np.zeros(int(d * SR) + SR);
def notif(): return S(seno(1318, .25, .002, .08), np.concatenate([np.zeros(int(.08 * SR)), seno(1760, .3, .002, .1)]))
def bump(): return impacto() * .5
def zipper(d=1.2): x = ruido(d, 2000, 9000); g = (np.sin(T(d) * 2 * np.pi * 40) > .6).astype(float); return x * g * .8
def chinelo(n=4): out = np.zeros(int((n * .55 + .4) * SR))
def arrasto(d): return ruido(d, 400, 3000) * (.5 + .5 * np.abs(np.sin(T(d) * 3.5))) * .5
def portaFecha(): return S(ruido(.3, 80, 900) * env(.3, .002, .08) * 1.2, seno(70, .3, .002, .1))
def bate_porta(): out = np.zeros(int(1.2 * SR))
def toc(): return S(ruido(.1, 200, 1500) * env(.1, .001, .02) * 1.4, seno(140, .1, .001, .03))
def panela(): return S(ruido(1.5, 3000, 9000) * .15, ruido(1.5, 200, 800) * .1)
def apito(): t = T(.5); return np.sin(2 * np.pi * (2800 + 300 * np.sin(t * 60)) * t) * .4 * np.minimum(1, (.5 - t) / .05)
def buzina2(): t = T(.8); return banda((np.sign(np.sin(2 * np.pi * 370 * t)) + np.sign(np.sin(2 * np.pi * 466 * t))) * .25, 200, 3500) * np.minimum(1, t / .02) * np.minimum(1, (.8 - t) / .05)
def grito(): t = T(.9); f = 650 + 200 * np.sin(t * 7); return banda(np.sin(2 * np.pi * np.cumsum(f) / SR) * (1 + .3 * np.sin(t * 40)), 400, 3500) * .3 * np.sin(np.pi * t / .9)
def freio(): t = T(1.0); return banda(np.sin(2 * np.pi * (2200 + 300 * np.sin(t * 25)) * t), 1500, 5000) * .3 * np.exp(-t * 1.5)
def celular_chao(): return S(ruido(.25, 1500, 8000) * env(.25, .001, .03) * 1.3, seno(900, .15, .001, .03) * .4, vidro(.4) * .4)
def aplauso(d): t = T(d); x = np.zeros(len(t)); idx = (rng.random(len(t)) < .03); x[idx] = rng.standard_normal(idx.sum()); return banda(np.convolve(x, np.exp(-np.arange(400) / 60), 'same'), 800, 7000) * np.minimum(1, t / .4) * .8
def flash(): return S(seno(3000, .12, .001, .03) * .3, ruido(.12, 2000, 8000) * env(.12, .001, .02))
def passos_corrida(d): out = np.zeros(int(d * SR))
def respira(d): t = T(d); return ruido(d, 300, 2500) * (.5 + .5 * np.sin(t * 2 * np.pi * 1.6)) ** 2 * .4
def risada_crianca(d=1.2): t = T(d); return sum(seno(rng.uniform(500, 800), d, .01, d) * (np.abs(np.sin(t * rng.uniform(14, 20))) > .6) * .12 for _ in range(4))
def estadio_apito(): return S(apito(), np.concatenate([np.zeros(int(.6 * SR)), apito()]))
def plop(): return S(seno(400, .15, .001, .05) * 1.2, seno(800, .1, .001, .03) * .4)
def fita_rebobina(d=1.5): t = T(d); f = 400 + 3000 * (t / d) ** 1.5; return np.sin(2 * np.pi * np.cumsum(f) / SR) * .2 + ruido(d, 2000, 8000) * .12
def latido2(): return latido()
def papel(d=1.0): x = ruido(d, 1500, 9000); g = np.convolve((rng.random(len(x)) < .01).astype(float), np.ones(int(.004 * SR)), 'same'); return x * g * .8
def risadas(d): t = T(d); return sum(seno(rng.uniform(200, 420), d, .01, d) * (np.abs(np.sin(t * rng.uniform(15, 22))) > .7) * .08 for _ in range(8)) + ruido(d, 400, 2500) * .15

EV = []
def ev(t, sig, g=1.0, pan=0.0): EV.append((t, sig, g, pan))
# ---------------- ambientes (bem baixos) ----------------
AMBIENTES = [(0, 18.3, 'parado', .5), (36, 49.7, 'cidade', .35), (49.7, 103.4, 'sala', .4), (103.5, 116.8, 'sala', .4), (116.8, 129, 'grilos', .5), (129, 160.5, 'sala', .4), (160.5, 192.8, 'sala', .4), (192.8, 215.4, 'cidade', .3),
  (215.5, 234.7, 'grilos', .4), (234.7, 266.8, 'passaros', .35), (266.8, 318.4, 'grilos', .35), (318.4, 330.6, 'passaros', .4), (330.6, 367.3, 'passaros', .55), (367.3, 403.4, 'passaros', .45), (416, 443.5, 'cidade', .45),
  (443.5, 456, 'sala', .35), (456, 472.8, 'sala', .35), (472.8, 530.8, 'grilos', .35), (530.8, 549.4, 'parado', .5), (580.2, 599.4, 'sala', .3), (602.8, 607.4, 'cidade', .45), (607.4, 646, 'parado', .45), (646, 703, 'passaros', .25),
  (719.7, 725.4, 'passaros', .4), (725.4, 732, 'sala', .3)]
# ---------------- abertura ----------------
for k in range(36): ev(k * .5, tique(), .35)                      # tique de relógio de xadrez
for p in [13.96, 14.25, 14.5, 14.72, 14.9, 15.05, 15.2, 15.33, 15.45, 15.56, 15.66, 15.76, 15.86, 15.95]: ev(p, bzz(.22), .55)
ev(9.2, fuum(), .6); ev(16.6, impacto(), .7)
ev(18.4, whoosh(), .5); ev(23.5, whoosh(), .5); ev(24.6, caixinha(2), .3); ev(27.85, whoosh(), .5); ev(30.3, ting(), .35)
ev(33.6, plop(), .6); ev(34.44, fita_rebobina(1.5), .5)
# ---------------- dia 0 ----------------
ev(35.96, tique(), .7); ev(37.3, tique(), .5); ev(40.0, tique(), .5); ev(44.6, tique(), .5)
for k in range(4): ev(39.5 + k * .8, seno(2400, .12, .001, .05), .25)  # bipe do caixa
ev(47.6, pop(), .4)
ev(50.4, latido(), .35, -.6); ev(51.5, carro_passa(), .35, .6); ev(52.6, notif(), .3)
ev(54.0, S(latido(), carro_passa(), notif()), .3)
ev(60.1, notif(), .45); ev(64.3, notif(), .3); ev(65.2, pop(), .3); ev(66.1, clique(), .3)
ev(68.2, ruido(3.4, 300, 3000) * .3, .25)                          # lavadora de pressão (do vídeo)
ev(71.7, tum(), .6)
for k in range(30): ev(75.4 + k * .14, tique(), .2)
for k in range(10): ev(75.6 + k * .32, notif(), .22, (k % 2) * 1.2 - .6)
ev(79.6, vidro(1.0), .4)
ev(85.5, caixinha(3), .35); ev(89.4, caixinha(2), .3)
ev(98.3, arrasto(2.0), .3); ev(100.9, portaFecha(), .5); ev(101.4, caixinha(3), .3)
ev(103.5, panela(), .3); ev(107.3, dundun(), .5); ev(108.4, trava(), .4); ev(114.5, buzzer(), .45)
ev(127.85, clique(), .6); ev(128.2, S(seno(3000, .7, .3, .2) * .4), .3)
# ---------------- dia 1 ----------------
ev(128.96, tique(), .7); ev(134.3, fuum(), .55)
for k in range(12): ev(136.8 + k * .13, pop(), .25)
ev(139.4, brilhos(1.5), .35); ev(145.2, defuum(), .45)
ev(147.3, fuum(), .45); ev(153.2, ting(), .45); ev(155.0, caixinha(2), .25)
ev(159.9, crocante(), .5)
ev(169.3, fuum(), .4)
for k, tq in enumerate([171.15, 172.6, 173.1, 174.5]): ev(tq, whoosh(), .35)
ev(179.6, download(), .45); ev(180.5, impacto(), .6); ev(180.6, papel(1.2), .35)
ev(186.5, fomfom(), .4); ev(188.1, ding(), .4)
ev(194.3, crocante(), .6); ev(194.4, coral(), .35)
ev(200.0, crocante(), .5)
ev(214.9, acorde_drama(), .45)
for p in [217, 218.3, 219.1, 220.4, 221.2, 222.5, 223.3, 224.1]: ev(p, bzz(.25), .2)
ev(228.4, bzz(.3), .5); ev(233.5, bzz(.5), .55)
# ---------------- dia 2 ----------------
ev(234.68, tique(), .7); ev(235.3, portaFecha(), .4); ev(239.4, ruido(.8, 200, 3000) * env(.8, .05, .3), .35)
ev(243.4, fuum(), .4)
for k in range(10): ev(254.4 + k * .4 * (1 - k * .05), notif(), .2)
ev(262.8, S(seno(55, 3.5, .1, 2.0) * .5), .5)
ev(266.9, panela(), .2)
for tq in [275.1, 275.4, 275.7]: ev(tq, toc(), .35, -.5)
ev(290.2, caixinha(2), .25); ev(309.3, caixinha(1), .2)
ev(316.6, caixinha(3), .25)
# ---------------- dia 3 ----------------
ev(318.38, tique(), .7); ev(334.5, fuum(), .3)
ev(339.5, baque(), .35); ev(339.9, risadas(1.6), .3); ev(342.0, estadio_apito(), .35); ev(342.2, risada_crianca(1.4), .35)
ev(356.3, risada_crianca(1.2), .4); ev(360.2, baque(), .35); ev(360.5, risada_crianca(1.5), .35); ev(361.2, caixinha(3), .3)
# ---------------- dia 4 ----------------
ev(367.28, tique(), .7); ev(375.2, fuum(), .35)
for tq in [377.9, 378.15, 378.4, 378.65, 378.9, 379.1, 379.3]: ev(tq, clack(), .4)
ev(379.5, baque(), .4); ev(380.4, clack(), .4)
ev(386.7, ting(), .4)
for k in range(23): ev(391.5 + k * .2 * (1 - k * .012), clack(), .35)
ev(396.2, impacto(), .5); ev(399.1, apito(), .3)
for k in range(3): ev(404.0 + k * 1.3, ding(), .3)
ev(411.3, S(seno(48, 4, .2, 3) * .7), .5)
ev(420.0, fuum(), .5)
ev(426.3, S(seno(60, 2.5, .1, 1.5) * .6), .4)
ev(428.9, buzina2(), .55, .4); ev(428.95, grito(), .4, -.3); ev(429.0, freio(), .45); ev(429.1, celular_chao(), .55)
ev(430.5, S(ruido(1.0, 400, 3000) * .3), .3)
# ---------------- dia 5 ----------------
ev(443.52, tique(), .7)
for k in range(40): ev(445 + k * .27, clack(), .12)
ev(466.3, S(seno(330, .4, .01, .3), seno(392, .4, .01, .3)) * .2, .3)
ev(471.4, S(ruido(.6, 300, 2500) * env(.6, .05, .3)), .35)
ev(477.2, portaFecha(), .35)
ev(485.6, S(ruido(.5, 200, 1500) * env(.5, .01, .15)), .3); ev(489.6, zipper(2.2), .45); ev(490.6, caixinha(2)[:int(.5 * SR)], .15)
# ---------------- dia 6 ----------------
ev(492.32, tique(), .7); ev(502.0, fuum(), .3); ev(515.8, dundun()[:int(.6 * SR)], .5)
ev(518.0, ting(), .3); ev(520.6, caixinha(2), .25)
# ---------------- dia 7 ----------------
ev(530.8, tique(), .7)
for k in range(36): ev(539.0 + k * .5, tique(), .3)
ev(549.1, clack(), .6); ev(549.6, fuum(), .55)
for k in range(10): ev(552.8 + k * .66, coracao(), .45)
for p in [560.0, 560.6, 561.0, 562.3, 562.84, 563.2, 563.65, 563.92]: ev(p, bzz(.28), .6)
for (a_, b_, c_) in [('e2', 'e4', 567.3), (0, 0, 567.6), (0, 0, 567.9), (0, 0, 568.2), (0, 0, 568.5), (0, 0, 568.8), (0, 0, 569.1), (0, 0, 569.6), (0, 0, 570.3), (0, 0, 570.8), (0, 0, 571.3)]: ev(c_, clack(), .45)
for k in range(6): ev(573.2 + k * .6, coracao(), .45)
ev(579.0, clack(), .8); ev(579.1, impacto(), .8)
ev(580.3, aplauso(7.5), .6)
for k in range(10): ev(580.5 + k * .55, flash(), .25)
ev(592.0, S(seno(3200, 3.5, .1, 3.0) * .15), .35)
for k in range(6): ev(593.0 + k * .7, coracao(), .45)
ev(601.0, S(metal(.8, 400) if 'metal' in dir() else ding(), baque()), .5)
ev(602.8, respira(4.6), .35); ev(603.9, freio(), .45, -.3); ev(603.95, buzina2(), .35, -.3)
ev(609.5, S(ruido(.8, 200, 1500) * env(.8, .05, .3)), .3)
ev(623.5, caixinha(1), .2)
ev(626.6, vidro(.9), .35); ev(627.9, vidro(.9), .35); ev(629.9, vidro(.9), .35)
ev(637.0, clique(), .4); ev(643.3, fuum(), .3)
# ---------------- final ----------------
ev(652.9, zipper(1.0), .4); ev(657.6, papel(1.2), .35)
ev(658.4, caixinha(4), .3); ev(672.3, caixinha(4, 79), .4)
ev(678.7, risada_crianca(1.6), .35)
ev(696.8, S(aplauso(2.5) * .4), .3)
ev(710.6, notif(), .35); ev(714.6, notif(), .3)
for k in range(6): ev(720.3 + k * .8, toc(), .12)
ev(731.0, caixinha(4), .3)
ev(737.4, tum(), .4); ev(742.25, plop(), .6); ev(742.3, risada_crianca(1.4), .35); ev(743.2, sino(), .35)

def musica():
    out = np.zeros(N); N2F = lambda m: 440 * 2 ** ((m - 69) / 12)
    def piano(f, d, br=1.6): t = T(d); return (np.sin(2 * np.pi * f * t) + .35 * np.sin(4 * np.pi * f * t) + .12 * np.sin(6 * np.pi * f * t)) * np.minimum(1, t / .008) * np.exp(-t * br)
    def pad(f, d): t = T(d); return (np.sin(2 * np.pi * f * t) + .5 * np.sin(2 * np.pi * f * 1.003 * t) + .3 * np.sin(2 * np.pi * f * .997 * t)) * np.sin(np.pi * np.minimum(1, t / d)) * .5
    def saw(f, d): t = T(d); return banda(((t * f) % 1 * 2 - 1) * .5 + ((t * f * 1.006) % 1 * 2 - 1) * .5, 80, 4000) * np.minimum(1, t / .01) * np.exp(-t * 3)
    def kick(): t = T(.3); return np.sin(2 * np.pi * np.cumsum(60 + 90 * np.exp(-t * 30)) / SR) * np.exp(-t * 9)
    def snare(): return S(ruido(.18, 1500, 7000) * env(.18, .001, .05), seno(200, .1, .001, .04) * .4)
    def hat(): return ruido(.05, 6000, 12000) * env(.05, .001, .012)
    def violao_(f, d): t = T(d); return banda(sum(np.sin(2 * np.pi * f * m * t) / m for m in [1, 2, 3, 4]), 100, 2500) * np.minimum(1, t / .004) * np.exp(-t * 4)
    def put(t0, s, g=1.0):
        i = int(t0 * SR); j = min(N, i + len(s)); out[i:j] += s[:j - i] * g
    def T1(a, b, g=1.0):   # tensão: pulso grave a 60 bpm + nota sustentada
        beat = 1.0; t0 = a
        while t0 < b: put(t0, seno(41, .6, .01, .35) * .35 * g); put(t0, ruido(.05, 3000, 9000) * env(.05, .001, .01) * .15 * g); t0 += beat
        put(a, pad(N2F(38), b - a) * .08 * g); put(a, pad(N2F(45), b - a) * .05 * g)
    def T2(a, b, g=1.0):   # cotidiano lo-fi: 85 bpm, acordes + violão abafado + bateria leve
        bpm = 85; beat = 60 / bpm; prog = [[60, 64, 67, 71], [57, 60, 64, 67], [53, 57, 60, 64], [55, 59, 62, 65]]; t0 = a; c = 0
        while t0 < b - .2:
            ac = prog[c % 4]
            for k in range(8):
                tt = t0 + k * beat / 2
                if tt > b: break
                put(tt, violao_(N2F(ac[k % 4] - 12), .5) * .07 * g);
                if k % 4 == 0: put(tt, kick() * .22 * g)
                if k % 4 == 2: put(tt, snare() * .1 * g)
                put(tt, hat() * .05 * g)
            for m in ac: put(t0, pad(N2F(m), min(4 * beat, b - t0)) * .025 * g)
            t0 += 4 * beat; c += 1
    def T3(a, b, g=1.0):   # poder: 120 bpm, synth brilhante em arpejo + bateria
        bpm = 120; beat = 60 / bpm; prog = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]]; t0 = a; c = 0
        while t0 < b - .2:
            ac = prog[c % 4] + [prog[c % 4][0] + 12]
            for k in range(16):
                tt = t0 + k * beat / 4
                if tt > b: break
                put(tt, saw(N2F(ac[k % 4] + 12), .2) * .04 * g)
                if k % 4 == 0: put(tt, kick() * .28 * g)
                if k % 8 == 4: put(tt, snare() * .14 * g)
                if k % 2 == 1: put(tt, hat() * .06 * g)
            put(t0, saw(N2F(prog[c % 4][0] - 12), 4 * beat) * .05 * g)
            t0 += 4 * beat; c += 1
    def T4(a, b, g=1.0, alegre=False):  # coração: piano simples + cordas suaves
        bpm = 66 if not alegre else 84; beat = 60 / bpm; prog = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]] if not alegre else [[60, 64, 67], [55, 59, 62], [57, 60, 64], [53, 57, 60]]; t0 = a; c = 0
        while t0 < b - .3:
            ac = prog[c % 4]; arp = ac + [ac[0] + 12, ac[1] + 12]
            for m in ac: put(t0, pad(N2F(m - 12), min(4 * beat, b - t0)) * .04 * g)
            for k in range(8):
                tt = t0 + k * beat / 2
                if tt > b - .2: break
                put(tt, piano(N2F(arp[k % 5] + (0 if k % 2 else 12)), 1.8) * (.07 if k % 2 == 0 else .045) * g)
            t0 += 4 * beat; c += 1
    def envolve(a, b, fa=1.0, fb=1.2):
        ia, ib = int(a * SR), int(b * SR); la, lb = int(fa * SR), int(fb * SR)
        seg = out[ia:ib]; seg[:la] *= np.linspace(0, 1, len(seg[:la])); seg[max(0, len(seg) - lb):] *= np.linspace(1, 0, len(seg[max(0, len(seg) - lb):]))
    PARTES = [(T1, 0, 16.6, {}), (T1, 18.3, 34.4, {'g': .8}), (T2, 36.3, 85.4, {}), (T4, 92.0, 103.4, {'g': .8}), (T2, 103.5, 116.8, {'g': .7}),
      (T3, 129.2, 192.8, {'g': .8}), (T3, 192.8, 214.9, {'g': .6}), (T3, 215.6, 233.4, {'g': .8}), (T2, 234.8, 249.5, {}), (T3, 243.4, 262.7, {'g': .9}),
      (T4, 290.2, 318.3, {'g': .85}), (T4, 318.5, 330.4, {'alegre': True}), (T4, 330.6, 367.2, {'alegre': True, 'g': 1.1}),
      (T3, 367.4, 411.1, {}), (T1, 416.1, 428.8, {'g': .7}), (T4, 431.5, 443.4, {'g': .8}), (T1, 443.6, 456.1, {'g': .7}), (T4, 456.2, 491.7, {'g': .75}),
      (T1, 492.4, 520.5, {'g': .6}), (T4, 520.6, 530.7, {'g': .8}), (T1, 530.9, 579.0, {}), (T3, 580.2, 591.5, {'g': 1.1}), (T4, 599.5, 623.2, {'g': .6}),
      (T4, 635.5, 703.5, {'g': .9}), (T4, 703.5, 710.5, {'g': .7}), (T2, 710.6, 737.3, {'g': .7}), (T2, 740.1, 747, {'g': .9})]
    for f, a, b, kw in PARTES:
        f(a, b, **kw); envolve(a, b)
    return out

def salva(nome, L, R):
    pk = max(np.max(np.abs(L)), np.max(np.abs(R)), 1e-9); g = min(1, .89 / pk)
    pcm = (np.clip(np.stack([L, R], 1) * g, -1, 1) * 32767).astype(np.int16)
    with wave.open(nome, 'wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())

for a, b, tipo, g in AMBIENTES:
    s = norm(AMB[tipo](b - a)) * g * .35; add(a, fade(s, .35, .35), 1.0, 0)
for (t, sig, g, pan) in EV:
    if sig is not None and len(sig) > 1: add(t, norm(sig), g, pan)
salva(sys.argv[1], buf[0], buf[1])
m = musica(); salva(sys.argv[2], m, m)
print(len(EV), 'efeitos')
