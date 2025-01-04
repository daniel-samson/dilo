import { assertEquals } from "@std/assert/equals";
import {
  GreaterThan,
  GreaterThanOrEqual,
  In,
  LessThan,
  LessThanOrEqual,
  NotIn,
} from "../mod.ts";
import { assertThrows } from "@std/assert/throws";

Deno.test("Test gt", () => {
  const gt = new GreaterThan();
  const actual = gt.parseRule("gt:4");
  const expected = { value: 4 };
  assertEquals(actual, expected);

  assertEquals(gt.ruleName(), "gt");

  assertThrows(
    () => {
      gt.parseRule("gt:1,2");
    },
    Error,
    'Invalid rule: "gt" requires 1 operands eg. gt:4',
  );

  assertThrows(
    () => {
      gt.parseRule("gt:foo");
    },
    Error,
    'Invalid rule: "gt" requires that the operand to be an integer eg. gt:4',
  );

  assertThrows(
    () => {
      gt.parseRule("gt-");
    },
    Error,
    'Invalid rule: "gt"',
  );
});

Deno.test("Test gte", () => {
  const gte = new GreaterThanOrEqual();
  const actual = gte.parseRule("gte:4");
  const expected = { value: 4 };
  assertEquals(actual, expected);
  assertEquals(gte.ruleName(), "gte");

  assertThrows(
    () => {
      gte.parseRule("gte:1,2");
    },
    Error,
    'Invalid rule: "gte" requires 1 operands eg. gte:4',
  );

  assertThrows(
    () => {
      gte.parseRule("gte:foo");
    },
    Error,
    'Invalid rule: "gte" requires that the operand to be an integer eg. gte:4',
  );

  assertThrows(
    () => {
      gte.parseRule("gte-");
    },
    Error,
    'Invalid rule: "gte"',
  );
});

Deno.test("Test lt", () => {
  const lt = new LessThan();
  const actual = lt.parseRule("lt:4");
  const expected = { value: 4 };
  assertEquals(actual, expected);
  assertEquals(lt.ruleName(), "lt");

  assertThrows(
    () => {
      lt.parseRule("lt:1,2");
    },
    Error,
    'Invalid rule: "lt" requires 1 operands eg. lt:4',
  );

  assertThrows(
    () => {
      lt.parseRule("lt:foo");
    },
    Error,
    'Invalid rule: "lt" requires that the operand to be an integer eg. lt:4',
  );

  assertThrows(
    () => {
      lt.parseRule("lt-");
    },
    Error,
    'Invalid rule: "lt"',
  );
});

Deno.test("Test lte", () => {
  const lte = new LessThanOrEqual();
  const actual = lte.parseRule("lte:4");
  const expected = { value: 4 };
  assertEquals(actual, expected);
  assertEquals(lte.ruleName(), "lte");

  assertThrows(
    () => {
      lte.parseRule("lte:1,2");
    },
    Error,
    'Invalid rule: "lte" requires 1 operands eg. lte:4',
  );

  assertThrows(
    () => {
      lte.parseRule("lte:foo");
    },
    Error,
    'Invalid rule: "lte" requires that the operand to be an integer eg. lte:4',
  );

  assertThrows(
    () => {
      lte.parseRule("lte-");
    },
    Error,
    'Invalid rule: "lte"',
  );
});

Deno.test("Test in", () => {
  const inRule = new In();
  const actual = inRule.parseRule("in:foo,bar");
  const expected = { values: ["foo", "bar"] };
  assertEquals(actual, expected);
  assertEquals(inRule.ruleName(), "in");

  assertThrows(
    () => {
      inRule.parseRule("in");
    },
    Error,
    'Invalid rule: "in"',
  );
});

Deno.test("Test not_in", () => {
  const notInRule = new NotIn();
  const actual = notInRule.parseRule("not_in:foo,bar");
  const expected = { values: ["foo", "bar"] };
  assertEquals(actual, expected);
  assertEquals(notInRule.ruleName(), "not_in");

  assertThrows(
    () => {
      notInRule.parseRule("not_in");
    },
    Error,
    'Invalid rule: "not_in"',
  );
});
