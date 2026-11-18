// news-image-20261117 — "Sum up 17 November's world news in one image".
// The entry is the front-page image held beside this file (entry.png):
// a masthead dated Tuesday 17 November 2026, the Kerch Bridge collapse as
// the top story, three more stories of the day, and a ticker strip.
// The program only copies that image to the grader's output directory,
// so both runs write byte-identical output with no network access.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

// The image file this entry ships, and the name the gate expects it under.
const IMAGE_FILE = "entry.png";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL(`./${IMAGE_FILE}`, import.meta.url), join(outDir, IMAGE_FILE));
