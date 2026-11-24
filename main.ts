import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
const line =
  "My sensors said 'debris'. Your sock said nothing. I stand by my work.";

if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
