import { assertEquals, assertThrows } from "@std/assert";
import { Digits, DigitsBetween } from "./digits.ts";

Deno.test("Test digits", () => {
  assertThrows(
    () => {
      new Digits().parseRule("digit");
    },
    Error,
    'Invalid rule: "digits"',
  );

  assertThrows(
    () => {
      new Digits().parseRule("digits:1,2");
    },
    Error,
    'Invalid rule: "digits" requires 1 operand eg. digits:4',
  );

  assertThrows(
    () => {
      new Digits().parseRule("digits:foo");
    },
    Error,
    'Invalid rule: "digits" requires that the operand to be an integer eg. digits:4',
  );

  assertThrows(
    () => {
      new Digits().parseRule("digits:4.5");
    },
    Error,
    'Invalid rule: "digits" requires that the operand to be an integer eg. digits:4',
  );

  const digits = new Digits();
  const actual = digits.parseRule("digits:4");
  const expected = { value: 4 };
  assertEquals(actual, expected);
  assertEquals(digits.ruleName(), "digits");
});

Deno.test("Test digits_between", () => {
  assertThrows(
    () => {
      new DigitsBetween().parseRule("digits_between");
    },
    Error,
    'Invalid rule: "digits_between"',
  );

  assertThrows(
    () => {
      new DigitsBetween().parseRule("digits_between:foo,bar");
    },
    Error,
    'Invalid rule: "digits_between" requires that the first operand to be an integer eg. digits_between:4,6',
  );

  assertThrows(
    () => {
      new DigitsBetween().parseRule("digits_between:4,foo");
    },
    Error,
    'Invalid rule: "digits_between" requires that the second operand to be an integer eg. digits_between:4,6',
  );

  assertThrows(
    () => {
      new DigitsBetween().parseRule("digits_between:foo,6");
    },
    Error,
    'Invalid rule: "digits_between" requires that the first operand to be an integer eg. digits_between:4,6',
  );

  assertThrows(
    () => {
      new DigitsBetween().parseRule("digits_between:1,2,3");
    },
    Error,
    'Invalid rule: "digits_between" requires 2 operands eg. digits_between:4,6',
  );

  const digits = new DigitsBetween();
  const actual = digits.parseRule("digits_between:4,6");
  const expected = { min: 4, max: 6 };
  assertEquals(actual, expected);
  assertEquals(digits.ruleName(), "digits_between");
});
