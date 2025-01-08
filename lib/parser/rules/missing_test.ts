import { assertEquals } from "@std/assert/equals";
import { Missing } from "./mod.ts";

Deno.test("Test missing", () => {
  const missing = new Missing();
  const actual = missing.parseRule("missing");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(missing.ruleName(), "missing");
});
