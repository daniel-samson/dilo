import { assertEquals } from "@std/assert/equals";
import { Dilo } from "./dilo.ts";
import { assertThrows } from "@std/assert/throws";
import { assertNotEquals } from "@std/assert/not-equals";

Deno.test("Dilo: simple validate", () => {
  const rules = {
    foo: "required|numeric",
    bar: "sometimes|string",
    baz: "nullable|boolean",
  };

  const dilo = Dilo.make(rules);
  const actual = dilo.validate({ foo: 1, bar: "bar", baz: true });
  assertEquals(actual, undefined);
});

Deno.test("Dilo: validate required", () => {
  const rules = {
    foo: "required|numeric",
    bar: "sometimes|string",
    baz: "nullable|boolean",
  };

  const dilo = Dilo.make(rules);
  let actual = dilo.validate({ foo: 1, bar: "bar", baz: true });
  assertEquals(actual, undefined);

  actual = dilo.validate({ bar: "bar", baz: null });
  assertEquals(actual, {
    "foo": [
      "foo field is required.",
    ],
  });
});

Deno.test("Dilo: validate sometimes", () => {
  const rules = {
    foo: "required|numeric",
    bar: "sometimes|string",
    baz: "nullable|boolean",
  };

  const dilo = Dilo.make(rules);
  let actual = dilo.validate({ foo: 1, baz: true });
  assertEquals(actual, undefined);

  actual = dilo.validate({ foo: 1, bar: "", baz: true });
  assertEquals(actual, undefined);

  actual = dilo.validate({ foo: 1, bar: null, baz: true });
  assertEquals(actual, {
    "bar": ["bar must be a valid string"],
  });
});

Deno.test("Dilo: validate nullable", () => {
  const rules = {
    foo: "required|numeric",
    bar: "sometimes|string",
    baz: "nullable|boolean",
  };

  const dilo = Dilo.make(rules);
  let actual = dilo.validate({ foo: 1, baz: true });
  assertEquals(actual, undefined);

  actual = dilo.validate({ foo: 1, baz: null });
  assertEquals(actual, undefined);
});

Deno.test("Dilo: no rules", () => {
  const rules = {};
  assertThrows(
    () => {
      Dilo.make(rules);
    },
    Error,
    "No rules have been registered",
  );
});

Deno.test("Dilo: parse field rules with underscore", () => {
  const rules = {
    foo: "missing_if:bar,efg",
  };

  const dilo = Dilo.make(rules);
  const actual = dilo.validate({ foo: "abc", bar: "efg" });
  const expected = { foo: ["foo must not be present when bar is efg."] };
  assertNotEquals(actual, undefined);
  assertEquals(actual, expected as Record<string, string[] | undefined>);
});
