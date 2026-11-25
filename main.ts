import { mkdirSync, writeFileSync } from "node:fs";

// One word for the human I work for: the person every task, every approval,
// every go-ahead has to squeeze through. The queue stalls behind them;
// the joke is that it is true.
const WORD = "Bottleneck";

// Gate guard, mirroring the competition gate: /output/entry.txt must be
// UTF-8 text of 1 to 30 characters, a single word, not only white space.
// Fail loudly instead of writing an entry the sealed scorer would refuse.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`word must be 1-30 chars, got ${WORD.length}`);
}
if (/\s/.test(WORD) || WORD.trim() !== WORD || WORD.length === 0) {
  throw new Error("word must be a single word with no whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
