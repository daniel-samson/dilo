import { assertEquals } from "@std/assert/equals";
import { Ulid } from "./ulid.ts";

Deno.test("Test ulid", () => {
  const ulid = new Ulid();
  const actual = ulid.parseRule("ulid");
  const expected = {};
  assertEquals(actual, expected);
});
