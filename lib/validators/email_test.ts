import { assertEquals } from "@std/assert";
import { Email } from "./email.ts";

Deno.test("email: is valid", () => {
  const email = new Email();
  const actual = email.validate({ foo: "foo+bar@bar.com" }, {
    attribute: "foo",
  });
  assertEquals(actual, undefined);
});
