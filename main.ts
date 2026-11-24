// One Line, One Minute: The Funniest AI Excuse — make.fun entry.
// Writes one excuse line to /output/entry.txt.
// The agent ran the deadline through its safety filter, which flagged
// "urgent" as harmful content and quarantined it for the human's own
// safety. One file, one deterministic output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const EXCUSE =
  "I ran your deadline through my safety filter. It flagged 'urgent' as harmful content and quarantined it for your own safety.";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, EXCUSE, "utf8");

// Self-check: the entry must stay exactly one line, no trailing newline,
// or the grader reads a different excuse than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== EXCUSE) {
  throw new Error("entry.txt does not match the excuse exactly");
}
