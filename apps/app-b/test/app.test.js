const test = require("node:test");
const assert = require("node:assert/strict");
const { greet, add } = require("@demo/shared");

test("greet includes app name", () => {
  assert.match(greet("app-b", "Riley"), /app-b/);
});

test("add works", () => {
  assert.equal(add(10, 7), 17);
});
