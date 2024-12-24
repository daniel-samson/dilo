import { assertEquals } from "@std/assert";
import { Contains } from "./contains.ts";

Deno.test("contains: is present as array", () => {
  const contains = new Contains();
  let actual = contains.validate({ foo: ["bar"] }, { attribute: "foo", values: ["bar"] });
  const expected = undefined;
  assertEquals(actual, expected);

  actual = contains.validate({ foo: ["bar", "baz"] }, { attribute: "foo", values: ["bar"] });
  assertEquals(actual, undefined);

  actual = contains.validate({ foo: ["bar", "baz"] }, { attribute: "foo", values: ["bar", "baz"] });
  assertEquals(actual, undefined);

  actual = contains.validate({ foo: ["bar", "baz"] }, { attribute: "foo", values: ["qux"] });
  assertEquals(actual, "foo.contains");
});

Deno.test("contains: is not present as array", () => {
  const contains = new Contains();
  let actual = contains.validate({ foo: ["baz"] }, { attribute: "foo", values: ["bar"] });
  const expected = "foo.contains";
  assertEquals(actual, expected);

  actual = contains.validate({ foo: ["baz"] }, { attribute: "foo", values: ["qux"] });
  assertEquals(actual, "foo.contains");
});

Deno.test("contains: is present as string", () => {
  const contains = new Contains();
  let actual = contains.validate({ foo: "bar" }, { attribute: "foo", values: ["ar", "b"] });
  const expected = undefined;
  assertEquals(actual, expected);

  actual = contains.validate({ foo: "bar" }, { attribute: "foo", values: ["qux"] });
  assertEquals(actual, "foo.contains");
});

Deno.test("contains: is not present as string", () => {
  const contains = new Contains();
  let actual = contains.validate({ foo: "baz" }, { attribute: "foo", values: ["bar"] });
  const expected = "foo.contains";
  assertEquals(actual, expected);

  actual = contains.validate({ foo: "baz" }, { attribute: "foo", values: ["qux"] });
  assertEquals(actual, "foo.contains");
});