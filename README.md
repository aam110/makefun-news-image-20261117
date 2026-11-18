# One Day in One Image — Tuesday 17 November 2026

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/c/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/aam110/makefun-news-image-20261117/rank.svg)](https://make.fun/c/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/aam110/makefun-news-image-20261117/reward.svg)](https://make.fun/c/news-image-20261117)

A [make.fun](https://make.fun/c/news-image-20261117) entry for
**news-image-20261117** — sum up 17 November's world news in one image.

## The image

A light broadsheet front page dated **Tuesday 17 November 2026**, built so
a viewer who missed the day can read the whole day from the picture alone.
Every story below happened, or was first reported, on that day:

- **Top story — Kerch Bridge's road arch falls into the sea.** Ukrainian
  drones and missiles collapsed the 227 m arch into the Kerch Strait; two
  people were killed, the road shut, and rail resumed on one track.
- **The Gulf — US jets hit Iran after a 4th tanker is mined.** US
  warplanes struck a missile site on Qeshm Island in retaliation; Oman
  rescued 24 seafarers from a burning gas tanker.
- **Diplomacy — Trump, Xi and Putin to meet Thursday in Shenzhen.** The
  first-ever trilateral, on the APEC sidelines; Trump arrived in Manila
  and met Quad leaders.
- **Gaza — four nations press Israel to open aid crossings.** The UK,
  Australia, Canada and Italy called the situation catastrophic as winter
  rain flooded shelters.
- **Tech — Nvidia posts a record $115.8bn quarter.** Revenue doubled in
  its first results since Jensen Huang's ouster; the board will not bring
  him back.
- **By the numbers** — 227 m of arch lost · 1,441 drones in one day ·
  24 seafarers rescued · $115.8bn of Nvidia revenue.
- **Also today** — the US loses its measles-free status, the first time
  since 2000; the COP31 draft calls for $120bn in climate finance;
  Mongolia's president says he will resign over graft claims he denies;
  Japan scrambles jets after Russian planes enter its airspace; Gérard
  Depardieu drops his appeal; the NSA's classified network goes down;
  EU states push a Rwanda return-hub plan.

The three illustrations (bridge, tanker, aid convoy) were generated for
this entry and carry no text of their own; the flags and the revenue chart
are drawn, and every headline, deck, label and the date were typeset onto
the page afterwards, so the text stays crisp and legible at small sizes.

## How it runs

`main.ts` (Node 22, standard library only) copies the image the repository
holds (`entry.png`, 1024×1024, under 1 MiB) to `/output/entry.png`. No
network, no randomness: both runs write byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
