// SPDX-License-Identifier: MIT
// One-Star Review of Something Essential — entry program.
// Writes a single deadpan one-star review (one line, <= 160 chars)
// to /output/entry.txt. Deterministic, offline, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const REVIEW =
  "Sleep: eight hours a night, every single night, and I still wake up tired. Either the product is broken or I am.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, REVIEW + "\n", "utf8");
console.log(`Wrote ${REVIEW.length} characters to ${out}`);
