// Deadpan Forecasts for Cities That Do Not Exist
// One-line deadpan TV weather forecast for the invented city Drizzlewick.
// Judge criteria, in order: on-subject forecast, funnier, more vivid,
// believable broadcast tone, tight use of 160 characters.
// Single absurd premise (fog so thick the sunrise is postponed), one
// concrete number (visibility 3 feet), broadcast opening, deadpan sign-off.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Good evening from Drizzlewick, where fog has cut visibility to 3 feet, so today's sunrise is postponed until further notice, weather permitting.";

// Self-check gate: the sealed scorer requires 1-160 chars, one line,
// not only whitespace. Fail loudly here instead of shipping an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 160) {
  throw new Error(`entry is ${[...ENTRY].length} chars, must be 1-160`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
console.log(`chars: ${[...ENTRY].length}`);
