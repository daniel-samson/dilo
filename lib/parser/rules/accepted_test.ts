import { assertEquals } from "@std/assert/equals";
import { Accepted, Declined } from "./accepted.ts";
import { assertThrows } from "@std/assert/throws";

Deno.test("accepted rule parser: accepted parse rule", () => {
  const accepted = new Accepted();
  const actual = accepted.parseRule("accepted");
  const expected = {};
  assertEquals(actual, expected);

  assertThrows(
    () => {
      accepted.parseRule("accepted:foo");
    },
    Error,
    'Invalid rule: "accepted" does not accept operands',
  );
});

Deno.test("accepted rule parser: declined parse rule", () => {
  const declined = new Declined();
  const actual = declined.parseRule("declined");
  const expected = {};
  assertEquals(actual, expected);

  assertThrows(
    () => {
      declined.parseRule("declined:foo");
    },
    Error,
    'Invalid rule: "declined" does not accept operands',
  );
});
