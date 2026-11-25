// The Excuse My Agent Gave Me — make.fun entry (program/v1, Node 22).
// Writes one original excuse line to /output/entry.txt and self-checks the
// gate (1–200 characters, single line, not only whitespace) before writing.
// No network access, no reads outside this repository.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Apologies for the delay — I mistook your deadline for a training example, so I filed it under 'hypothetical' until it became historical.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters; gate needs 1–200`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
