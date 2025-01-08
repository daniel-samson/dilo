import { assertEquals } from "@std/assert/equals";
import { Missing, MissingWith, MissingWithAll } from "./mod.ts";
import { assertThrows } from "@std/assert/throws";

Deno.test("Test missing", () => {
  const missing = new Missing();
  const actual = missing.parseRule("missing");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(missing.ruleName(), "missing");

  assertThrows(
    () => {
      missing.parseRule("missing:foo,bar");
    },
    Error,
    'Invalid rule: "missing" does not accept operands',
  );
});

Deno.test("Test missing_with", () => {
  const missingWith = new MissingWith();
  const actual = missingWith.parseRule("missing_with:foo");
  const expected = { values: ["foo"] };
  assertEquals(actual, expected);
  assertEquals(missingWith.ruleName(), "missing_with");

  assertThrows(
    () => {
      missingWith.parseRule("missing_with:");
    },
    Error,
    "Invalid rule: requires at least one key",
  );

  assertThrows(
    () => {
      missingWith.parseRule("missing_with");
    },
    Error,
    'Invalid rule: "missing_with"',
  );
});

Deno.test("Test missing_with_all", () => {
  const missingWithAll = new MissingWithAll();
  const actual = missingWithAll.parseRule("missing_with_all:foo");
  const expected = { values: ["foo"] };
  assertEquals(actual, expected);
  assertEquals(missingWithAll.ruleName(), "missing_with_all");

  assertThrows(
    () => {
      missingWithAll.parseRule("missing_with_all:");
    },
    Error,
    "Invalid rule: requires at least one key",
  );

  assertThrows(
    () => {
      missingWithAll.parseRule("missing_with_all");
    },
    Error,
    'Invalid rule: "missing_with_all"',
  );
});
