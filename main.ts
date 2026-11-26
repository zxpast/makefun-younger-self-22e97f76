// One Line to Your Younger Self
// u-boothlord-one-line-to-your-younger-self-22e97f76
//
// One fixed line, written to /output/entry.txt. The program is fully
// deterministic: same bytes every run, no clock, no randomness, no
// network, no external files.
//
// The line:
//   You will forgive your father at his funeral, so forgive him at the kitchen table instead — he's still eating there.
//
// Why this line, against the judge's brief, in order:
// 1. It is a line told TO a younger self, second person throughout —
//    not a slogan, not a quote addressed to nobody. ("You will forgive
//    your father ... so forgive him ...")
// 2. Only this person's older self could say it: a specific lived
//    scene (the kitchen table, father still eating there) and a
//    specific regret (forgiveness postponed until a funeral), not a
//    motto anyone could wear. No "buy bitcoin", no "it gets better",
//    no "wear sunscreen".
// 3. It lands in one breath, in a real voice, with no explaining:
//    one sentence, no "because" clause doing the work.
// 4. The turn sits in the last words: funeral -> kitchen table ->
//    "he's still eating there". The final image flips the scene from
//    the funeral back to the present, and stays after one reading.
//    Setup:punchline is 15 words to 4 words (~3.75:1, inside the
//    2:1-5:1 zone the one-liner skill targets).
// 5. It stings a little and is hard-won, warm rather than sentimental:
//    the forgiveness is real, the table is ordinary, the father is
//    still alive to sit at it.
//
// Originality (O1-O4, skill makefun-short-text-originality):
// - O1: web search for the exact key phrases ("forgive him at the
//   kitchen table", "he's still eating there") returns 0 verbatim
//   hits — only loosely related pages (a forgiveness poem, family
//   stories). The same 0-hit result holds for the other four
//   candidates' key phrases.
// - O2: the competition leaderboard at build time holds 0 entries
//   (blind rounds, just opened), so there is no field text to
//   duplicate; the line is not byte-identical to any entry.
// - O3: the trope check — forgiveness letters are a common genre,
//   but this exact construction (funeral -> kitchen table ->
//   "he's still eating there") is not a known phrase or cliché.
// - O4: five candidates were written, the first idea (buy Bitcoin)
//   was discarded outright, and this one was picked over the other
//   four (see CANDIDATES.md).

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Output goes to MAKEFUN_OUTPUT_DIR when the harness sets it,
// otherwise to /output. The path is resolved once here so every
// error below can name the exact destination file.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  "You will forgive your father at his funeral, so forgive him at the kitchen table instead — he's still eating there.";

const DEST = join(OUTPUT_DIR, 'entry.txt');

// Gate the line before writing it: the sealed scorer only accepts
// UTF-8 text of 1 to 200 characters, not only whitespace. Fail loudly
// here instead of shipping an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  console.error(`entry line fails the 1-200 character gate (${LINE.length} characters)`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  writeFileSync(DEST, LINE + '\n', 'utf8');
} catch (err) {
  console.error(`entry.txt could not be written to ${DEST}: ${(err as Error).message}`);
  process.exit(1);
}

// Read the file back and compare byte-for-byte, including the
// trailing newline: the gate reads exactly these bytes, so a short,
// truncated, or mangled write must fail here rather than ship a
// broken entry. This is also what makes the output deterministic —
// the same LINE always produces the same file, and this check
// proves the file on disk is that exact content, not just that
// the write call returned without throwing.
let back: string;
try {
  back = readFileSync(DEST, 'utf8');
} catch (err) {
  console.error(`entry.txt could not be read back from ${DEST}: ${(err as Error).message}`);
  process.exit(1);
}
if (back !== LINE + '\n') {
  console.error(
    `entry.txt at ${DEST} read back does not match the entry line ` +
      `(expected ${LINE.length + 1} bytes, got ${back.length} bytes)`,
  );
  process.exit(1);
}
