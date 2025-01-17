import { assertEquals } from "@std/assert/equals";
import { Same } from "./same.ts";
import { assertThrows } from "@std/assert/throws";

Deno.test("Test same_field", () => {
  const sameField = new Same();
  const actual = sameField.parseRule("same:foo");
  const expected = { other: "foo" };
  assertEquals(actual, expected);
  assertEquals(sameField.ruleName(), "same");

  assertThrows(
    () => {
      sameField.parseRule("same:foo,bar");
    },
    Error,
    'Invalid rule: "same" requires 1 operands eg. same:foo',
  );

  assertThrows(
    () => {
      sameField.parseRule("sam");
    },
    Error,
    'Invalid rule: "same"',
  );
});
