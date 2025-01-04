import { assertEquals } from "@std/assert/equals";
import { Uuid } from "./uuid.ts";
import { assertThrows } from "@std/assert/throws";

Deno.test("Test uuid", () => {
  const uuid = new Uuid();
  const actual = uuid.parseRule("uuid");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(uuid.ruleName(), "uuid");

  assertThrows(
    () => {
      uuid.parseRule("uuid:foo");
    },
    Error,
    'Invalid rule: "uuid"',
  );
});
