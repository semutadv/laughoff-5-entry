// Entry runner for "One-Line Laugh-Off" (zkhiel).
// Exactly one funny line: the modern morning routine, in which a person
// finally achieves consistency — wake, phone, and a formal written
// apology to the sleep schedule that was promised eight hours and
// delivered four. Placed at /output/entry.txt, solo.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I finally have a morning routine: I wake up, check my phone, and apologise to my sleep schedule in writing.";

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  for (const name of readdirSync(out)) {
    rmSync(join(out, name), { recursive: true, force: true });
  }
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();
