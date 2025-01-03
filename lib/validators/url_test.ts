import { assertEquals } from "@std/assert/equals";
import { Url } from "./url.ts";

Deno.test("url: is valid", () => {
  const url = new Url();
  let actual = url.validate({ foo: "http://bar.com" }, {
    attribute: "foo",
  });
  assertEquals(actual, undefined);

  actual = url.validate({ foo: "ftp://ftp.bar.com" }, {
    attribute: "foo",
  });
  assertEquals(actual, undefined);

  actual = url.validate({ foo: "foo+bar@bar.com" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.url");

  actual = url.validate({ foo: "bar.com" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.url");
});
