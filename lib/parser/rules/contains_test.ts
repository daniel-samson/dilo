import { assertEquals, assertThrows } from "@std/assert";
import { Contains } from "./contains.ts";

Deno.test("contains: parse rule", () => {
  const contains = new Contains();
  const actual = contains.parseRule("contains:foo,bar");
  const expected = { values: ["foo", "bar"] };
  assertEquals(actual, expected);
});

Deno.test("contains: parse rule without operands", () => {
  const contains = new Contains();
  assertThrows(
    () => {
      contains.parseRule("contains:");
    },
    Error,
    'Invalid rule: "contains" requires at least 1 operand eg. contains:foo,...',
  );

  assertThrows(
    () => {
      contains.parseRule("contains");
    },
    Error,
    'Invalid rule: "contains" requires at least 1 operand eg. contains:foo,...',
  );
});
