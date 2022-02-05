function expect(description, input, expected) {
  const output =
    input === expected ? "\x1b[32m✔ %s\x1b[0m" : "\x1b[31m✘ %s\x1b[0m";
  console.log(output, description);
}

expect("Test", 1, 1);
expect("Fake", 2, 1);
