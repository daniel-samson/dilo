import { assertEquals, assertThrows } from "@std/assert";
import { Email } from "./email.ts";

Deno.test("Test email", () => {
  const email = new Email();
  const actual = email.parseRule("email");
  const expected = {};
  assertEquals(actual, expected);

  assertThrows(
    () => {
      email.parseRule("email:foo");
    },
    Error,
    'Invalid rule: "email"',
  );
});
