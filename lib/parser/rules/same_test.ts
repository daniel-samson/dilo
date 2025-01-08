import { assertEquals } from "@std/assert/equals";
import { Same } from "./same.ts";

Deno.test("Test same_field", () => {
  const sameField = new Same();
  const actual = sameField.parseRule("same:foo");
  const expected = { other: "foo" };
  assertEquals(actual, expected);
  assertEquals(sameField.ruleName(), "same");
});
