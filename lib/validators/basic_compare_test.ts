import { assertEquals } from "@std/assert/equals";
import {
  GreaterThan,
  GreaterThanOrEqual,
  In,
  LessThan,
  LessThanOrEqual,
  NotIn,
} from "./basic_compare.ts";
import { assertThrows } from "@std/assert/throws";
Deno.test("GreaterThan", () => {
  const greaterThan = new GreaterThan();
  let actual = greaterThan.validate({ foo: 1 }, { attribute: "foo", value: 0 });
  assertEquals(actual, undefined);
  actual = greaterThan.validate({ foo: "ab" }, { attribute: "foo", value: 1 });
  assertEquals(actual, undefined);

  actual = greaterThan.validate({ foo: [1, 2] }, {
    attribute: "foo",
    value: 1,
  });
  assertEquals(actual, undefined);

  actual = greaterThan.validate({ foo: 2 }, { attribute: "foo", value: 2 });
  assertEquals(actual, "foo.gt");

  actual = greaterThan.validate({ foo: "a" }, { attribute: "foo", value: 1 });
  assertEquals(actual, "foo.gt");

  actual = greaterThan.validate({ foo: [1] }, { attribute: "foo", value: 1 });
  assertEquals(actual, "foo.gt");

  actual = greaterThan.validate({ foo: null }, { attribute: "foo", value: 2 });
  assertEquals(actual, "foo.gt");

  actual = greaterThan.validate({}, { attribute: "foo", value: 2 });
  assertEquals(actual, "foo.gt");

  actual = greaterThan.validate({ foo: false }, { attribute: "foo", value: 2 });
  assertEquals(actual, "foo.gt");
});

Deno.test("GreaterThan: field name", () => {
  const greaterThan = new GreaterThan();
  let actual = greaterThan.validate({ foo: 3, bar: 2 }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = greaterThan.validate({ foo: 2, bar: 3 }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, "foo.gt");

  actual = greaterThan.validate({ foo: "ab", bar: "a" }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = greaterThan.validate({ foo: "a", bar: "a" }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, "foo.gt");

  actual = greaterThan.validate({ foo: [1, 2], bar: [1] }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = greaterThan.validate({ foo: [1], bar: [1] }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, "foo.gt");

  // exceptions
  assertThrows(
    () => {
      greaterThan.validate({ foo: 3, bar: "2" }, {
        attribute: "foo",
        value: "bar",
      });
    },
    Error,
    "gt: operand must be of the same type as the value",
  );
});

Deno.test("GreaterThanOrEqual", () => {
  const greaterThanOrEqual = new GreaterThanOrEqual();
  let actual = greaterThanOrEqual.validate({ foo: 1 }, {
    attribute: "foo",
    value: 0,
  });
  assertEquals(actual, undefined);

  actual = greaterThanOrEqual.validate({ foo: 1 }, {
    attribute: "foo",
    value: 1,
  });
  assertEquals(actual, undefined);

  actual = greaterThanOrEqual.validate({ foo: "ab" }, {
    attribute: "foo",
    value: 2,
  });
  assertEquals(actual, undefined);

  actual = greaterThanOrEqual.validate({ foo: [1, 2] }, {
    attribute: "foo",
    value: 2,
  });
  assertEquals(actual, undefined);

  actual = greaterThanOrEqual.validate({ foo: null }, {
    attribute: "foo",
    value: 2,
  });
  assertEquals(actual, "foo.gte");

  actual = greaterThanOrEqual.validate({}, { attribute: "foo", value: 2 });
  assertEquals(actual, "foo.gte");

  actual = greaterThanOrEqual.validate({ foo: false }, {
    attribute: "foo",
    value: 2,
  });
  assertEquals(actual, "foo.gte");
});

Deno.test("GreaterThanOrEqual: field name", () => {
  const greaterThanOrEqual = new GreaterThanOrEqual();
  let actual = greaterThanOrEqual.validate({ foo: 3, bar: 2 }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = greaterThanOrEqual.validate({ foo: 2, bar: 2 }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = greaterThanOrEqual.validate({ foo: "ab", bar: "a" }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = greaterThanOrEqual.validate({ foo: "a", bar: "a" }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = greaterThanOrEqual.validate({ foo: [1, 2], bar: [1] }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = greaterThanOrEqual.validate({ foo: [1], bar: [1] }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  // exceptions
  assertThrows(
    () => {
      greaterThanOrEqual.validate({ foo: 3, bar: "2" }, {
        attribute: "foo",
        value: "bar",
      });
    },
    Error,
    "gte: operand must be of the same type as the value",
  );
});

Deno.test("LessThan", () => {
  const lessThan = new LessThan();
  let actual = lessThan.validate({ foo: 1 }, { attribute: "foo", value: 0 });
  assertEquals(actual, "foo.lt");
  actual = lessThan.validate({ foo: "ab" }, { attribute: "foo", value: 1 });
  assertEquals(actual, "foo.lt");

  actual = lessThan.validate({ foo: [1, 2] }, { attribute: "foo", value: 1 });
  assertEquals(actual, "foo.lt");

  actual = lessThan.validate({ foo: 2 }, { attribute: "foo", value: 3 });
  assertEquals(actual, undefined);

  actual = lessThan.validate({ foo: "a" }, { attribute: "foo", value: 2 });
  assertEquals(actual, undefined);

  actual = lessThan.validate({ foo: [1] }, { attribute: "foo", value: 2 });
  assertEquals(actual, undefined);

  actual = lessThan.validate({ foo: null }, { attribute: "foo", value: 2 });
  assertEquals(actual, "foo.lt");

  actual = lessThan.validate({}, { attribute: "foo", value: 2 });
  assertEquals(actual, "foo.lt");

  actual = lessThan.validate({ foo: false }, { attribute: "foo", value: 2 });
  assertEquals(actual, "foo.lt");
});

Deno.test("LessThan: field name", () => {
  const lessThan = new LessThan();
  let actual = lessThan.validate({ foo: 1, bar: 2 }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = lessThan.validate({ foo: 2, bar: 2 }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, "foo.lt");

  actual = lessThan.validate({ foo: "a", bar: "ab" }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = lessThan.validate({ foo: "ab", bar: "a" }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, "foo.lt");

  actual = lessThan.validate({ foo: [1], bar: [1, 2] }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = lessThan.validate({ foo: [1], bar: [1] }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, "foo.lt");

  // exceptions
  assertThrows(
    () => {
      lessThan.validate({ foo: 1, bar: "2" }, {
        attribute: "foo",
        value: "bar",
      });
    },
    Error,
    "lt: operand must be of the same type as the value",
  );
});

Deno.test("LessThanOrEqual", () => {
  const lessThanOrEqual = new LessThanOrEqual();
  let actual = lessThanOrEqual.validate({ foo: 1 }, {
    attribute: "foo",
    value: 0,
  });
  assertEquals(actual, "foo.lte");
  actual = lessThanOrEqual.validate({ foo: "ab" }, {
    attribute: "foo",
    value: 1,
  });
  assertEquals(actual, "foo.lte");

  actual = lessThanOrEqual.validate({ foo: [1, 2] }, {
    attribute: "foo",
    value: 1,
  });
  assertEquals(actual, "foo.lte");

  actual = lessThanOrEqual.validate({ foo: 2 }, { attribute: "foo", value: 2 });
  assertEquals(actual, undefined);

  actual = lessThanOrEqual.validate({ foo: "a" }, {
    attribute: "foo",
    value: 1,
  });
  assertEquals(actual, undefined);

  actual = lessThanOrEqual.validate({ foo: [1] }, {
    attribute: "foo",
    value: 1,
  });
  assertEquals(actual, undefined);

  actual = lessThanOrEqual.validate({ foo: null }, {
    attribute: "foo",
    value: 2,
  });
  assertEquals(actual, "foo.lte");

  actual = lessThanOrEqual.validate({}, { attribute: "foo", value: 2 });
  assertEquals(actual, "foo.lte");

  actual = lessThanOrEqual.validate({ foo: false }, {
    attribute: "foo",
    value: 2,
  });
  assertEquals(actual, "foo.lte");
});

Deno.test("LessThanOrEqual: field name", () => {
  const lessThanOrEqual = new LessThanOrEqual();
  let actual = lessThanOrEqual.validate({ foo: 1, bar: 2 }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = lessThanOrEqual.validate({ foo: 2, bar: 2 }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = lessThanOrEqual.validate({ foo: "a", bar: "ab" }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = lessThanOrEqual.validate({ foo: "a", bar: "a" }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = lessThanOrEqual.validate({ foo: "ab", bar: "a" }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, "foo.lte");

  actual = lessThanOrEqual.validate({ foo: [1], bar: [1, 2] }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  actual = lessThanOrEqual.validate({ foo: [1], bar: [1] }, {
    attribute: "foo",
    value: "bar",
  });
  assertEquals(actual, undefined);

  // exceptions
  assertThrows(
    () => {
      lessThanOrEqual.validate({ foo: 1, bar: "2" }, {
        attribute: "foo",
        value: "bar",
      });
    },
    Error,
    "lte: operand must be of the same type as the value",
  );
});

Deno.test("In", () => {
  const inRule = new In();
  let actual = inRule.validate({ foo: "bar" }, {
    attribute: "foo",
    values: ["bar"],
  });
  assertEquals(actual, undefined);

  actual = inRule.validate({ foo: "bar" }, {
    attribute: "foo",
    values: ["baz"],
  });
  assertEquals(actual, "foo.in");

  actual = inRule.validate({ foo: "bar" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, undefined);

  actual = inRule.validate({ foo: "baz" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, undefined);

  actual = inRule.validate({ foo: "qux" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, "foo.in");

  actual = inRule.validate({ foo: 1 }, { attribute: "foo", values: ["1"] });
  assertEquals(actual, undefined);

  actual = inRule.validate({ foo: 1 }, { attribute: "foo", values: ["2"] });
  assertEquals(actual, "foo.in");

  actual = inRule.validate({ foo: 1 }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, undefined);

  actual = inRule.validate({ foo: 2 }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, undefined);

  actual = inRule.validate({ foo: [1, 2] }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, undefined);

  actual = inRule.validate({ foo: [1] }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, undefined);

  actual = inRule.validate({ foo: ["1", "2"] }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, undefined);

  actual = inRule.validate({ foo: ["1", "2"] }, {
    attribute: "foo",
    values: ["1"],
  });
  assertEquals(actual, "foo.in");

  actual = inRule.validate({ foo: null }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, "foo.in");

  actual = inRule.validate({ foo: null }, {
    attribute: "foo",
    values: ["1", "null"],
  });
  assertEquals(actual, undefined);

  actual = inRule.validate({}, { attribute: "foo", values: ["1", "2"] });
  assertEquals(actual, "foo.in");

  actual = inRule.validate({}, {
    attribute: "foo",
    values: ["1", "undefined"],
  });
  assertEquals(actual, undefined);

  actual = inRule.validate({ foo: [] }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, "foo.in");

  actual = inRule.validate({ foo: false }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, "foo.in");
});

Deno.test("NotIn", () => {
  const notInRule = new NotIn();
  let actual = notInRule.validate({ foo: "bar" }, {
    attribute: "foo",
    values: ["bar"],
  });
  assertEquals(actual, "foo.not_in");

  actual = notInRule.validate({ foo: "bar" }, {
    attribute: "foo",
    values: ["baz"],
  });
  assertEquals(actual, undefined);

  actual = notInRule.validate({ foo: "bar" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, "foo.not_in");

  actual = notInRule.validate({ foo: "baz" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, "foo.not_in");

  actual = notInRule.validate({ foo: "qux" }, {
    attribute: "foo",
    values: ["bar", "baz"],
  });
  assertEquals(actual, undefined);

  actual = notInRule.validate({ foo: 1 }, { attribute: "foo", values: ["1"] });
  assertEquals(actual, "foo.not_in");

  actual = notInRule.validate({ foo: 1 }, { attribute: "foo", values: ["2"] });
  assertEquals(actual, undefined);

  actual = notInRule.validate({ foo: 1 }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, "foo.not_in");

  actual = notInRule.validate({ foo: 2 }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, "foo.not_in");

  actual = notInRule.validate({ foo: null }, {
    attribute: "foo",
    values: ["1", "null"],
  });
  assertEquals(actual, "foo.not_in");

  actual = notInRule.validate({ foo: null }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, undefined);

  actual = notInRule.validate({}, {
    attribute: "foo",
    values: ["1", "undefined"],
  });
  assertEquals(actual, "foo.not_in");

  actual = notInRule.validate({}, { attribute: "foo", values: ["1", "2"] });
  assertEquals(actual, undefined);

  actual = notInRule.validate({ foo: [] }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, undefined);

  actual = notInRule.validate({ foo: ["1"] }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, "foo.not_in");

  actual = notInRule.validate({ foo: [1] }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, "foo.not_in");

  actual = notInRule.validate({ foo: false }, {
    attribute: "foo",
    values: ["1", "false"],
  });
  assertEquals(actual, "foo.not_in");

  actual = notInRule.validate({ foo: false }, {
    attribute: "foo",
    values: ["1", "2"],
  });
  assertEquals(actual, undefined);
});
