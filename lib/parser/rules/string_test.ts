import { assertEquals, assertThrows } from "@std/assert";
import {
  DoesntEndsWith,
  DoesntStartsWith,
  EndsWith,
  Lowercase,
  StartsWith,
  Uppercase,
} from "./string.ts";

Deno.test("Test starts_with", () => {
  assertThrows(
    () => {
      new StartsWith().parseRule("starts_with");
    },
    Error,
    'Invalid rule: "starts_with"',
  );

  const startsWith = new StartsWith();
  let actual = startsWith.parseRule("starts_with:foo");
  let expected = { values: ["foo"] };
  assertEquals(actual, expected);

  actual = startsWith.parseRule("starts_with:foo,bar");
  expected = { values: ["foo", "bar"] };
  assertEquals(actual, expected);
  assertEquals(startsWith.ruleName(), "starts_with");
});

Deno.test("Test ends_with", () => {
  assertThrows(
    () => {
      new EndsWith().parseRule("ends_with");
    },
    Error,
    'Invalid rule: "ends_with"',
  );

  const endsWith = new EndsWith();
  let actual = endsWith.parseRule("ends_with:foo");
  let expected = { values: ["foo"] };
  assertEquals(actual, expected);

  actual = endsWith.parseRule("ends_with:foo,bar");
  expected = { values: ["foo", "bar"] };
  assertEquals(actual, expected);
  assertEquals(endsWith.ruleName(), "ends_with");
});

Deno.test("Test doesnt_starts_with", () => {
  assertThrows(
    () => {
      new DoesntStartsWith().parseRule("doesnt_starts_with");
    },
    Error,
    'Invalid rule: "doesnt_starts_with"',
  );

  const doesntStartsWith = new DoesntStartsWith();
  let actual = doesntStartsWith.parseRule("doesnt_starts_with:foo");
  let expected = { values: ["foo"] };
  assertEquals(actual, expected);

  actual = doesntStartsWith.parseRule("doesnt_starts_with:foo,bar");
  expected = { values: ["foo", "bar"] };
  assertEquals(actual, expected);
  assertEquals(doesntStartsWith.ruleName(), "doesnt_starts_with");
});

Deno.test("Test doesnt_ends_with", () => {
  assertThrows(
    () => {
      new DoesntEndsWith().parseRule("doesnt_ends_with");
    },
    Error,
    'Invalid rule: "doesnt_ends_with"',
  );

  const doesntEndsWith = new DoesntEndsWith();
  let actual = doesntEndsWith.parseRule("doesnt_ends_with:foo");
  let expected = { values: ["foo"] };
  assertEquals(actual, expected);

  actual = doesntEndsWith.parseRule("doesnt_ends_with:foo,bar");
  expected = { values: ["foo", "bar"] };
  assertEquals(actual, expected);
  assertEquals(doesntEndsWith.ruleName(), "doesnt_ends_with");
});

Deno.test("Test uppercase", () => {
  const uppercase = new Uppercase();
  const actual = uppercase.parseRule("uppercase");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(uppercase.ruleName(), "uppercase");

  assertThrows(
    () => {
      uppercase.parseRule("uppercase:foo");
    },
    Error,
    'Invalid rule: "uppercase"',
  );
});

Deno.test("Test lowercase", () => {
  const lowercase = new Lowercase();
  const actual = lowercase.parseRule("lowercase");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(lowercase.ruleName(), "lowercase");

  assertThrows(
    () => {
      lowercase.parseRule("lowercase:foo");
    },
    Error,
    'Invalid rule: "lowercase"',
  );
});
