const test = require("node:test");
const assert = require("node:assert/strict");
const { greet, add } = require("@demo/shared");

test("greet includes app name", () => {
  assert.match(greet("app-a", "Sam"), /app-a/);
});

test("add works", () => {
  assert.equal(add(2, 3), 5);
});
