import { assertEquals } from "@std/assert";
import {
  DoesntEndsWith,
  DoesntStartsWith,
  EndsWith,
  Lowercase,
  StartsWith,
  Uppercase,
} from "./string.ts";

Deno.test("starts_with: is present as string", () => {
  const startsWith = new StartsWith();
  let actual = startsWith.validate({ foo: "barabc" }, {
    attribute: "foo",
    values: ["bar"],
  });
  const expected = undefined;
  assertEquals(actual, expected);

  actual = startsWith.validate({ foo: "bazabc" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, undefined);

  actual = startsWith.validate({ foo: "barabc" }, {
    attribute: "foo",
    values: ["baz"],
  });
  assertEquals(actual, "foo.starts_with");

  actual = startsWith.validate({ foo: "grogabc" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, "foo.starts_with");
});

Deno.test("ends_with: is present as string", () => {
  const endsWith = new EndsWith();
  let actual = endsWith.validate({ foo: "abcbar" }, {
    attribute: "foo",
    values: ["bar"],
  });
  const expected = undefined;
  assertEquals(actual, expected);

  actual = endsWith.validate({ foo: "abcbaz" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, undefined);

  actual = endsWith.validate({ foo: "abcbar" }, {
    attribute: "foo",
    values: ["baz"],
  });
  assertEquals(actual, "foo.ends_with");

  actual = endsWith.validate({ foo: "abcgrog" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, "foo.ends_with");
});

Deno.test("doesnt_starts_with: is present as string", () => {
  const doesntStartsWith = new DoesntStartsWith();
  let actual = doesntStartsWith.validate({ foo: "bazabc" }, {
    attribute: "foo",
    values: ["bar"],
  });
  const expected = undefined;
  assertEquals(actual, expected);

  actual = doesntStartsWith.validate({ foo: "fooabc" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, undefined);

  actual = doesntStartsWith.validate({ foo: "bazabc" }, {
    attribute: "foo",
    values: ["baz"],
  });
  assertEquals(actual, "foo.doesnt_starts_with");

  actual = doesntStartsWith.validate({ foo: "barabc" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, "foo.doesnt_starts_with");
});

Deno.test("doesnt_ends_with: is present as string", () => {
  const doesntEndsWith = new DoesntEndsWith();
  let actual = doesntEndsWith.validate({ foo: "abcbaz" }, {
    attribute: "foo",
    values: ["bar"],
  });
  const expected = undefined;
  assertEquals(actual, expected);

  actual = doesntEndsWith.validate({ foo: "abcfoo" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, undefined);

  actual = doesntEndsWith.validate({ foo: "abcbaz" }, {
    attribute: "foo",
    values: ["baz"],
  });
  assertEquals(actual, "foo.doesnt_ends_with");

  actual = doesntEndsWith.validate({ foo: "abcbar" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, "foo.doesnt_ends_with");
});

Deno.test("uppercase: is present as string", () => {
  const uppercase = new Uppercase();
  let actual = uppercase.validate({ foo: "bar" }, { attribute: "foo" });
  assertEquals(actual, "foo.uppercase");

  actual = uppercase.validate({ foo: "BAR" }, { attribute: "foo" });
  assertEquals(actual, undefined);
});

Deno.test("lowercase: is present as string", () => {
  const lowercase = new Lowercase();
  let actual = lowercase.validate({ foo: "bar" }, { attribute: "foo" });
  assertEquals(actual, undefined);

  actual = lowercase.validate({ foo: "BAR" }, { attribute: "foo" });
  assertEquals(actual, "foo.lowercase");
});
