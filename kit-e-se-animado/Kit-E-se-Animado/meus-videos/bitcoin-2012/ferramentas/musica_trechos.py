# Deixa a música tocar só nos momentos importantes (com fade), silêncio no resto.
import wave, numpy as np, sys
TRECHOS = [  # (início, fim) em segundos
    (0.0, 23.5),     # gancho: caminhão de lixo, 37 milhões
    (48.0, 57.6),    # a voz do pai depois de 7 anos / volta no tempo
    (136.4, 141.9),  # a compra dos 100 bitcoins
    (184.0, 209.2),  # 7x1 no bar
    (220.6, 236.7),  # 2017: o bitcoin explode
    (250.8, 257.0),  # 14/03/2019, a data
    (313.4, 336.3),  # corrida pro hospital e o infarto
    (351.8, 368.3),  # item 3: salvar o meu pai
    (405.3, 414.9),  # ele ri: o pai está vivo
    (456.2, 480.7),  # mensagem final
]
F = 1.2  # segundos de fade
src, dst = sys.argv[1], sys.argv[2]
w = wave.open(src); sr = w.getframerate(); ch = w.getnchannels(); n = w.getnframes()
x = np.frombuffer(w.readframes(n), '<i2').reshape(-1, ch).astype(np.float32)
t = np.arange(len(x)) / sr; env = np.zeros(len(x), np.float32)
for a, b in TRECHOS:
    up = np.clip((t - a) / F, 0, 1); down = np.clip((b - t) / F, 0, 1)
    env = np.maximum(env, np.minimum(up, down))
y = (x * env[:, None]).astype('<i2')
o = wave.open(dst, 'wb'); o.setnchannels(ch); o.setsampwidth(2); o.setframerate(sr); o.writeframes(y.tobytes())
print('ok', len(TRECHOS), 'trechos')
