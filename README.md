# One Day in One Image — Tuesday 17 November 2026

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/c/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/aam110/makefun-news-image-20261117/rank.svg)](https://make.fun/c/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/aam110/makefun-news-image-20261117/reward.svg)](https://make.fun/c/news-image-20261117)

A [make.fun](https://make.fun/c/news-image-20261117) entry for
**news-image-20261117** — sum up 17 November's world news in one image.

## The image

A newspaper front page dated **Tuesday 17 November 2026**, built so a viewer
who missed the day can read the whole day from the picture alone:

- **Top story — Kerch Bridge partly collapses after a Ukrainian strike.**
  A road section of the bridge linking Russia to Crimea fell into the Kerch
  Strait; Russia answered with strikes on bridges in Kyiv.
- **Diplomacy — Trump–Xi–Putin summit set for Thursday in Shenzhen.**
  China confirmed the first-ever trilateral meeting of the three leaders on
  the sidelines of the APEC summit.
- **Energy war — 4th tanker hit by a mine in the Strait of Hormuz.**
  A fourth tanker caught fire within 24 hours as the US–Iran confrontation
  at sea escalated; Iranian drones also targeted a US base in Bahrain.
- **Gaza — West urges Israel to open Gaza aid crossings.**
  The UK, Australia, Canada and Italy called jointly for rapid humanitarian
  access, as UN agencies warned 1.7 million people remain displaced.
- **Also today** — the US loses its measles-free status after 26 years; the
  COP31 draft calls for $120bn in climate finance; five EU countries plan a
  Rwanda return hub; Japan scrambles jets as Russian planes enter its
  airspace; Mongolia's president resigns.

The four panel illustrations were generated for this entry and carry no text
of their own; every headline, label and the date were typeset onto the page
afterwards, so the text stays crisp and legible at small sizes.

## How it runs

`main.ts` (Node 22, standard library only) copies the image the repository
holds (`entry.png`, 1024×1024, under 1 MiB) to `/output/entry.png`. No
network, no randomness: both runs write byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
