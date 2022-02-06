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
  'charAt("Marie", -1) returns OUT_OF_BOUND',
  string.charAt("Marie", -1),
  ERROR.OUT_OF_BOUND
);
expect('charAt("Marie", 0) returns M', string.charAt("Marie", 0), "M");
expect('charAt("Marie", 4) returns e', string.charAt("Marie", 4), "e");
expect(
  'charAt("Marie", 5) returns OUT_OF_BOUND',
  string.charAt("Marie", 5),
  ERROR.OUT_OF_BOUND
);

/*
 * concat
 */
expect("concat() returns an empty string", string.concat(), "");
expect('concat("Marie") returns "Marie"', string.concat("Marie"), "Marie");
expect(
  'concat("Marie ", "is ", "da ", "best ", "waifu") returns "Marie is da best waifu"',
  string.concat("Marie ", "is ", "da ", "best ", "waifu"),
  "Marie is da best waifu"
);
