import { sum } from "./index.js";
import test from "node:test";
import assert from "node:test";

test("test sum", () => {
  console.log(sum(5, 4));
  console.log(sum(2.8, 4.1));
  console.log(sum(1, 999));
  console.log(sum("2", 3));
});
