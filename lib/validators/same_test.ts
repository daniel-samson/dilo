import { assertEquals } from "@std/assert/equals";
import { SameField } from "./same.ts";

Deno.test("same_field: is present", () => {
  const sameField = new SameField();
  let actual = sameField.validate({ foo: "abc", bar: "efg" }, {
    attribute: "foo",
    other: "bar",
  });
  assertEquals(actual, "foo.same_field");

  actual = sameField.validate({ foo: "abc", bar: "abc" }, {
    attribute: "foo",
    other: "bar",
  });
  assertEquals(actual, undefined);
});
