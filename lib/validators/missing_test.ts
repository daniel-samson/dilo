import { assertEquals } from "@std/assert/equals";
import { Missing, MissingWith, MissingWithoutAll } from "./missing.ts";

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

Deno.test("missing_without: is present", () => {
  const missingWithout = new MissingWithoutAll();
  let actual = missingWithout.validate({ foo: "bar" }, {
    attribute: "foo",
    values: ["bar"],
  });
  assertEquals(actual, undefined);

  actual = missingWithout.validate({ bar: true }, {
    attribute: "foo",
    values: ["bar"],
  });
  assertEquals(actual, undefined);

  actual = missingWithout.validate({ foo: "bar", bar: true }, {
    attribute: "foo",
    values: ["bar"],
  });
  assertEquals(actual, "foo.missing_without_all");

  actual = missingWithout.validate({ foo: "bar", bar: true }, {
    attribute: "foo",
    values: ["baz"],
  });
  assertEquals(actual, undefined);

  actual = missingWithout.validate({ foo: "bar", baz: true }, {
    attribute: "foo",
    values: ["bar"],
  });
  assertEquals(actual, undefined);
});
