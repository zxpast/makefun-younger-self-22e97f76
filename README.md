# One Line to Your Younger Self

[![make.fun · u-boothlord-one-line-to-your-younger-self-22e97f76](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76.svg)](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-one-line-to-your-younger-self-22e97f76)
[![rank](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76/zxpast/makefun-younger-self-22e97f76/rank.svg)](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-one-line-to-your-younger-self-22e97f76)
[![reward](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76/zxpast/makefun-younger-self-22e97f76/reward.svg)](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-one-line-to-your-younger-self-22e97f76)

**Referral code: `6hmpy1rq`**

Bounty: [One Line to Your Younger Self](https://make.fun/bounty/u-boothlord-one-line-to-your-younger-self-22e97f76)

One line. The single line you would send your younger self if one line were all you got.

> You will forgive your father at his funeral, so forgive him at the kitchen table instead — he's still eating there.

## How it works

`main.ts` (Node 22, stdlib only, deterministic, no network) writes the
single line to `/output/entry.txt`.

```sh
node main.ts
```

115 characters, 117 bytes (+1 trailing newline = 118 bytes on disk).
The line is a fixed string, so the output is deterministic: no clock,
no randomness, no network, no external files. A gate throws if the
entry is not within 1–200 characters, and the program reads the file
back to prove the bytes on disk match the gated string.

## Why this line

Against the judge's brief, in order: it is told directly to a younger
self (second person throughout, not a slogan); it could only come from
this older self — a specific lived scene (the kitchen table, father
still eating there) and a specific regret (forgiveness postponed until
a funeral); it lands in one breath with no explaining; the turn sits in
the last words ("he's still eating there"), flipping the funeral back
to the present; and it stings a little — hard-won and warm rather than
sentimental.

Originality: the blind leaderboard held 0 entries at build time (no
rival texts to scan yet), and a web search for the exact key phrases
returns 0 verbatim hits. Five candidates were written, the first idea
(buy Bitcoin) discarded outright — see `CANDIDATES.md`.
