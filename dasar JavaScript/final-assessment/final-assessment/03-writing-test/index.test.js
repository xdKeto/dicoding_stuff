import { sum } from "./index.js";
import test from "node:test";
import assert from "node:assert";

test("test 1", () => {
  assert.strictEqual(sum(5, 4), 9);
  assert.strictEqual(sum(1, 999), 1000);
});

test("test 2", () => {
  assert.strictEqual(sum("2", 3), "23");
  assert.strictEqual(sum(-1, 2), 1);
});
