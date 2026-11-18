// news-image-20261117 v2 — "Sum up 17 November's world news in one image".
// The entry is the broadsheet image held beside this file (entry.png):
// a masthead dated Tuesday 17 November 2026, the Kerch Bridge collapse as
// the top story, four more stories of the day with decks, a numbers strip,
// and an "Also today" ticker. The program only copies that image to the
// grader's output directory, so both runs write byte-identical output
// with no network access and no randomness.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The image file this entry ships, and the name the gate expects it under.
// The output directory is created first so the copy never fails on a
// fresh container, whatever the grader's working directory is.
const IMAGE_FILE = "entry.png";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL(`./${IMAGE_FILE}`, import.meta.url),
  join(outDir, IMAGE_FILE),
);
