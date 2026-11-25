import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I texted my wife 'Pick up milk on your way home' — autocorrect sent 'Pick up Mike on your way home.'";

// Self-checking gate: the competition gate is 1-199 chars, single line, non-blank.
if (entry.length < 1 || entry.length > 199) {
  throw new Error(`entry is ${entry.length} chars, must be 1-199`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
