import { assertEquals, assertThrows } from "@std/assert";
import {
  DoesntEndsWith,
  DoesntStartsWith,
  EndsWith,
  StartsWith,
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
});
