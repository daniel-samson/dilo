import { assertEquals } from "@std/assert";
import { Digits, DigitsBetween } from "./digits.ts";

Deno.test("validates digits", () => {
  const digits = new Digits();
  let actual = digits.validate({ foo: 1234 }, { attribute: "foo", value: 4 });
  assertEquals(actual, undefined);

  actual = digits.validate({ foo: -1234 }, { attribute: "foo", value: 4 });
  assertEquals(actual, undefined);

  actual = digits.validate({ foo: 1234 }, { attribute: "foo", value: 5 });
  assertEquals(actual, "foo.digits");

  actual = digits.validate({ foo: 1234 }, { attribute: "foo", value: 3 });
  assertEquals(actual, "foo.digits");

  actual = digits.validate({ foo: 1234 }, { attribute: "foo", value: 2 });
  assertEquals(actual, "foo.digits");

  actual = digits.validate({ foo: 1234 }, { attribute: "foo", value: 1 });
  assertEquals(actual, "foo.digits");

  actual = digits.validate({ foo: 1234 }, { attribute: "foo", value: 0 });
  assertEquals(actual, "foo.digits");
});

Deno.test("validates digits_between", () => {
  const digits = new DigitsBetween();
  let actual = digits.validate({ foo: 1234 }, {
    attribute: "foo",
    min: 4,
    max: 6,
  });
  assertEquals(actual, undefined);

  actual = digits.validate({ foo: -1234 }, {
    attribute: "foo",
    min: 3,
    max: 4,
  });
  assertEquals(actual, undefined);

  actual = digits.validate({ foo: 1234 }, { attribute: "foo", min: 5, max: 6 });
  assertEquals(actual, "foo.digits_between");

  actual = digits.validate({ foo: 1234 }, { attribute: "foo", min: 2, max: 3 });
  assertEquals(actual, "foo.digits_between");

  actual = digits.validate({ foo: 1234 }, { attribute: "foo", min: 1, max: 2 });
  assertEquals(actual, "foo.digits_between");

  actual = digits.validate({ foo: 1234 }, { attribute: "foo", min: 0, max: 1 });
  assertEquals(actual, "foo.digits_between");
});
