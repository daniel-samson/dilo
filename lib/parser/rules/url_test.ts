import { assertEquals } from "@std/assert/equals";
import { Url } from "./url.ts";

Deno.test("Test url", () => {
  const url = new Url();
  const actual = url.parseRule("url");
  const expected = {};
  assertEquals(actual, expected);
});
