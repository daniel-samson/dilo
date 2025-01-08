import { assertEquals } from "@std/assert/equals";
import { Missing } from "./missing.ts";

Deno.test("missing: is present", () => {
  const missing = new Missing();
  let actual = missing.validate({ foo: "bar" }, { attribute: "foo" });
  assertEquals(actual, "foo.missing");

  actual = missing.validate({ bar: true }, { attribute: "foo" });
  assertEquals(actual, undefined);
});
