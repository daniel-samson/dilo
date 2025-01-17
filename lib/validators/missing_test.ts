import { assertEquals } from "@std/assert/equals";
import { Missing, MissingIf, MissingWith, MissingWithAll } from "./missing.ts";

Deno.test("missing: is present", () => {
  const missing = new Missing();
  let actual = missing.validate({ foo: "bar" }, { attribute: "foo" });
  assertEquals(actual, "foo.missing");

  actual = missing.validate({ bar: true }, { attribute: "foo" });
  assertEquals(actual, undefined);
});

Deno.test("missing_with: is present", () => {
  const missingWith = new MissingWith();
  let actual = missingWith.validate({ foo: "bar" }, {
    attribute: "foo",
    values: ["bar"],
  });
  assertEquals(actual, undefined);

  actual = missingWith.validate({ bar: true }, {
    attribute: "foo",
    values: ["bar"],
  });
  assertEquals(actual, undefined);

  actual = missingWith.validate({ foo: "bar", bar: true }, {
    attribute: "foo",
    values: ["bar"],
  });
  assertEquals(actual, "foo.missing_with");

  actual = missingWith.validate({ foo: "bar", bar: true }, {
    attribute: "foo",
    values: ["baz"],
  });
  assertEquals(actual, undefined);

  actual = missingWith.validate({ foo: "bar", baz: true }, {
    attribute: "foo",
    values: ["bar"],
  });
  assertEquals(actual, undefined);
});

Deno.test("missing_with_all: is present", () => {
  const missingWithAll = new MissingWithAll();
  let actual = missingWithAll.validate({ foo: "abc" }, {
    attribute: "foo",
    values: ["bar"],
  });
  assertEquals(actual, undefined);

  actual = missingWithAll.validate({ foo: "abc", bar: "efg" }, {
    attribute: "foo",
    values: ["bar"],
  });
  assertEquals(actual, "foo.missing_with_all");

  actual = missingWithAll.validate({ foo: "abc", bar: "efg", baz: "hij" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, "foo.missing_with_all");
});

Deno.test("missing_if: is present", () => {
  const missingIf = new MissingIf();
  let actual = missingIf.validate({ foo: "abc", bar: "efg" }, {
    attribute: "foo",
    keyValuePairs: ["bar", "hij"],
  });
  assertEquals(actual, undefined);

  actual = missingIf.validate({ bar: true }, {
    attribute: "foo",
    keyValuePairs: ["bar", "true"],
  });
  assertEquals(actual, undefined);

  actual = missingIf.validate({ bar: false }, {
    attribute: "foo",
    keyValuePairs: ["bar", "false"],
  });
  assertEquals(actual, undefined);

  actual = missingIf.validate({ foo: "abc", bar: 123 }, {
    attribute: "foo",
    keyValuePairs: ["bar", "123"],
  });
  assertEquals(actual, "foo.missing_if");

  actual = missingIf.validate({ foo: "abc", bar: "123" }, {
    attribute: "foo",
    keyValuePairs: ["bar", "456"],
  });
  assertEquals(actual, undefined);

  actual = missingIf.validate({ foo: "abc", bar: 123 }, {
    attribute: "foo",
    keyValuePairs: ["bar", "123", "baz", "456"],
  });
  assertEquals(actual, "foo.missing_if");

  actual = missingIf.validate({ baz: "456" }, {
    attribute: "foo",
    keyValuePairs: ["bar", "123", "baz", "456"],
  });
  assertEquals(actual, undefined);

  actual = missingIf.validate({ foo: "abc", bar: null }, {
    attribute: "foo",
    keyValuePairs: ["bar", "null", "baz", "456"],
  });
  assertEquals(actual, "foo.missing_if");
});
