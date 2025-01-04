import { assertEquals } from "@std/assert/equals";
import { Ulid } from "./ulid.ts";
import { assertThrows } from "@std/assert/throws";

Deno.test("Test ulid", () => {
  const ulid = new Ulid();
  const actual = ulid.parseRule("ulid");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(ulid.ruleName(), "ulid");

  assertThrows(
    () => {
      ulid.parseRule("ulid:foo");
    },
    Error,
    'Invalid rule: "ulid"',
  );
});
