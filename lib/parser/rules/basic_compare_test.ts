import { assertEquals } from "@std/assert/equals";
import {
  GreaterThan,
  GreaterThanOrEqual,
  In,
  LessThan,
  LessThanOrEqual,
  NotIn,
} from "../mod.ts";

Deno.test("Test gt", () => {
  const gt = new GreaterThan();
  const actual = gt.parseRule("gt:4");
  const expected = { value: 4 };
  assertEquals(actual, expected);
});

Deno.test("Test gte", () => {
  const gte = new GreaterThanOrEqual();
  const actual = gte.parseRule("gte:4");
  const expected = { value: 4 };
  assertEquals(actual, expected);
});

Deno.test("Test lt", () => {
  const lt = new LessThan();
  const actual = lt.parseRule("lt:4");
  const expected = { value: 4 };
  assertEquals(actual, expected);
});

Deno.test("Test lte", () => {
  const lte = new LessThanOrEqual();
  const actual = lte.parseRule("lte:4");
  const expected = { value: 4 };
  assertEquals(actual, expected);
});

Deno.test("Test in", () => {
  const inRule = new In();
  const actual = inRule.parseRule("in:foo,bar");
  const expected = { values: ["foo", "bar"] };
  assertEquals(actual, expected);
});

Deno.test("Test not_in", () => {
  const notInRule = new NotIn();
  const actual = notInRule.parseRule("not_in:foo,bar");
  const expected = { values: ["foo", "bar"] };
  assertEquals(actual, expected);
});
