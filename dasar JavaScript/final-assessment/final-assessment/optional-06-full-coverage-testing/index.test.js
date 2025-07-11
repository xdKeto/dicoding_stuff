import test from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("test 1", () => {
  assert.strictEqual(sum(5, 4), 9);
});

test("test 2", () => {
  assert.strictEqual(sum(0, 0), 0);
});

test("test 3", () => {``
  assert.strictEqual(sum("0", 3), 0);
});

test("test 4", () => {
  assert.strictEqual(sum(2, "z"), 0);
});

test("test 5", () => {
  assert.strictEqual(sum(2, -99), 0);
});

test("test 6", () => {
  assert.strictEqual(sum(-2, -99), 0);
});

test("test 7", () => {
  assert.strictEqual(sum(null, 2), 0);
});

test("test 8", () => {
  assert.strictEqual(sum(null, null), 0);
});
