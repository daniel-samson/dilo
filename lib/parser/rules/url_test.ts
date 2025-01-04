import { assertEquals } from "@std/assert/equals";
import { Url } from "./url.ts";
import { assertThrows } from "@std/assert/throws";

Deno.test("Test url", () => {
  const url = new Url();
  const actual = url.parseRule("url");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(url.ruleName(), "url");

  assertThrows(
    () => {
      url.parseRule("url:foo");
    },
    Error,
    'Invalid rule: "url"',
  );
});
