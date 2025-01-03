import { assertEquals } from "@std/assert/equals";
import { Size } from "../mod.ts";
import { assertThrows } from "@std/assert/throws";

Deno.test("size: parse rule", () => {
  const size = new Size();
  const actual = size.parseRule("size:10");
  const expected = { size: 10 };
  assertEquals(actual, expected);
  assertEquals(size.ruleName(), "size");
});

Deno.test("size: parse rule with operands", () => {
  const size = new Size();
  assertThrows(
    () => {
      size.parseRule("size:");
    },
    Error,
    'Invalid rule: "size" requires 1 operand eg. size:10',
  );

  assertThrows(
    () => {
      size.parseRule("size");
    },
    Error,
    'Invalid rule: "size" requires 1 operand eg. size:10',
  );
});
