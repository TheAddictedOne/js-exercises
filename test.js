import ERROR from "./errors.js";
import string from "./string.js";

function expect(description, input, expected) {
  if (input === expected) {
    return console.log("\x1b[32m✔ %s\x1b[0m", description);
  }

  console.log("\x1b[31m✘ %s", description);
  console.log('  Expected: "%s"', expected);
  console.log('  Got:      "%s"', input);
  console.log("\x1b[0m");
}

/*
 * charAt
 */
expect(
  "charAt -1 returns OUT_OF_BOUND",
  string.charAt("Marie", -1),
  ERROR.OUT_OF_BOUND
);
expect("charAt 0 returns M", string.charAt("Marie", 0), "M");
expect("charAt 4 returns e", string.charAt("Marie", 4), "e");
expect(
  "charAt 5 returns OUT_OF_BOUND",
  string.charAt("Marie", 5),
  ERROR.OUT_OF_BOUND
);
