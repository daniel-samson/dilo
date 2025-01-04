import { assertEquals } from "@std/assert/equals";
import { Filled } from "./filled.ts";

Deno.test("filled: filled", () => {
  const filled = new Filled();
  let actual = filled.validate({ foo: "bar" }, { attribute: "foo" });
  assertEquals(actual, undefined);

  actual = filled.validate({ foo: true }, { attribute: "foo" });
  assertEquals(actual, undefined);

  actual = filled.validate({ foo: ["bar"] }, { attribute: "foo" });
  assertEquals(actual, undefined);

  actual = filled.validate({ foo: { bar: "baz" } }, { attribute: "foo" });
  assertEquals(actual, undefined);

  actual = filled.validate({ foo: {} }, { attribute: "foo" });
  assertEquals(actual, undefined);

  actual = filled.validate({ foo: 1 }, { attribute: "foo" });
  assertEquals(actual, undefined);
});

Deno.test("filled: not filled", () => {
  const filled = new Filled();
  let actual = filled.validate({ foo: null }, { attribute: "foo" });
  assertEquals(actual, "foo.filled");

  actual = filled.validate({}, { attribute: "foo" });
  assertEquals(actual, "foo.filled");

  actual = filled.validate({ foo: "" }, { attribute: "foo" });
  assertEquals(actual, "foo.filled");

  actual = filled.validate({ foo: false }, { attribute: "foo" });
  assertEquals(actual, "foo.filled");

  actual = filled.validate({ foo: [] }, { attribute: "foo" });
  assertEquals(actual, "foo.filled");
});
