import { assertEquals } from "@std/assert/equals";
import { Dilo } from "./dilo.ts";
import { assertThrows } from "@std/assert/throws";
import { assertNotEquals } from "@std/assert/not-equals";
import { assertSpyCall, assertSpyCalls, spy } from "jsr:@std/testing/mock";

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
      "foo must be a numeric value",
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

Deno.test("Dilo: returns multiple errors for each field", () => {
  const rules = {
    foo: "starts_with:abc|ends_with:efg",
  };

  const dilo = Dilo.make(rules);
  const actual = dilo.validate({ foo: "zabcefgz" });
  const expected = {
    foo: ["foo must start with abc.", "foo must end with efg."],
  };
  assertEquals(actual, expected as Record<string, string[] | undefined>);
});

Deno.test("Dilo: warn when rule is not registered", () => {
  const rules = {
    foo: "not_registered",
  };

  const logSpy = spy(console, "warn");

  const dilo = Dilo.make(rules);
  const actual = dilo.validate({ foo: "zabcefgz" });
  const expected = undefined;
  assertEquals(actual, expected);
  try {
    // Assert that the `log` function was called just once.
    assertSpyCalls(logSpy, 1);

    // Assert that the `log` function was called with the correct arguments.
    assertSpyCall(logSpy, 0, {
      args: [`Rule "not_registered" is not registered.`],
    });
  } finally {
    // Restore the logger.log function to stop spying it.
    logSpy.restore();
  }
});
