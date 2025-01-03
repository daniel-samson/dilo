import { assertEquals } from "@std/assert";
import { Email } from "./email.ts";

Deno.test("email: is valid", () => {
  const email = new Email();
  let actual = email.validate({ foo: "foo+bar@bar.com" }, {
    attribute: "foo",
  });
  assertEquals(actual, undefined);

  actual = email.validate({ foo: "http://bar.com" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.email");

  actual = email.validate({ foo: false }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.email");
});
