import { assertEquals, assertThrows } from "@std/assert";
import { Nullable } from "./nullable.ts";

Deno.test("nullable: parse rule", () => {
  const nullable = new Nullable();
  const actual = nullable.parseRule("nullable");
  const expected = {};
  assertEquals(actual, expected);

  assertThrows(
    () => {
      nullable.parseRule("nullable:foo");
    },
    Error,
    'Invalid rule: "nullable" does not accept operands',
  );
});
