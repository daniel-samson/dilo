import { assertEquals } from "@std/assert";
import { Size } from "./size.ts";

Deno.test("size: is array", () => {
  const size = new Size();
  let actual = size.validate({ foo: ["bar"] }, { attribute: "foo", size: 1 });
  const expected = undefined;
  assertEquals(actual, expected);

  actual = size.validate({ foo: ["bar", "baz"] }, {
    attribute: "foo",
    size: 2,
  });
  assertEquals(actual, undefined);

  actual = size.validate({ foo: ["bar", "baz", "qux"] }, {
    attribute: "foo",
    size: 2,
  });
  assertEquals(actual, "foo.size");
});

Deno.test("size: is string", () => {
  const size = new Size();
  let actual = size.validate({ foo: "bar" }, { attribute: "foo", size: 3 });
  const expected = undefined;
  assertEquals(actual, expected);

  actual = size.validate({ foo: "barbaz" }, { attribute: "foo", size: 6 });
  assertEquals(actual, undefined);

  actual = size.validate({ foo: "barbazqux" }, { attribute: "foo", size: 3 });
  assertEquals(actual, "foo.size");
});

Deno.test("size: is integer", () => {
  const size = new Size();
  let actual = size.validate({ foo: 1 }, { attribute: "foo", size: 1 });
  const expected = undefined;
  assertEquals(actual, expected);

  actual = size.validate({ foo: 3 }, { attribute: "foo", size: 1 });
  assertEquals(actual, "foo.size");
});
