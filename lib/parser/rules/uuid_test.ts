import { assertEquals } from "@std/assert/equals";
import { Uuid } from "./uuid.ts";

Deno.test("Test uuid", () => {
  const uuid = new Uuid();
  const actual = uuid.parseRule("uuid");
  const expected = {};
  assertEquals(actual, expected);
});
