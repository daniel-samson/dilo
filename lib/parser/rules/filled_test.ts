import { assertThrows } from "@std/assert/throws";
import { assertEquals } from "@std/assert/equals";
import { Filled } from "./filled.ts";

Deno.test("Test filled", () => {
  const filled = new Filled();
  const actual = filled.parseRule("filled");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(filled.ruleName(), "filled");

  assertThrows(
    () => {
      filled.parseRule("filled:foo");
    },
    Error,
    'Invalid rule: "filled"',
  );
});
