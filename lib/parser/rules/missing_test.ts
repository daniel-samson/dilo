import { assertEquals } from "@std/assert/equals";
import { Missing } from "./mod.ts";
import { assertThrows } from "@std/assert/throws";

Deno.test("Test missing", () => {
  const missing = new Missing();
  const actual = missing.parseRule("missing");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(missing.ruleName(), "missing");

  assertThrows(
    () => {
      missing.parseRule("missing:foo,bar");
    },
    Error,
    'Invalid rule: "missing" does not accept operands',
  );
});
