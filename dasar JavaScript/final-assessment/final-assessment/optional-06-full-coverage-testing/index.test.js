import test from "node:test";
import sum from "./index.js";

test("test 1", () => {
  console.log(sum(5, 4));
});

test("test 2", () => {
  console.log(sum(0, 0));
});

test("test 3", () => {
  console.log(sum('0', 3));
});

test("test 4", () => {
  console.log(sum(2, 'z'));
});

test("test 5", () => {
  console.log(sum(2, -99));
});

test("test 6", () => {
  console.log(sum(-2, -99));
});

test("test 7", () => {
  console.log(sum(null, 2));
});

test("test 8", () => {
  console.log(sum(null, null));
});
