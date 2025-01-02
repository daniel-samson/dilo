import { assertEquals } from "@std/assert/equals";
import { Nullable } from "./nullable.ts";

Deno.test("nullable: null is present", () => {
  const nullable = new Nullable();
  const actual = nullable.validate({ foo: null }, { attribute: "foo" });
  assertEquals(actual, false);
});

Deno.test("nullable: value is present", () => {
  const nullable = new Nullable();
  const actual = nullable.validate({ foo: false }, { attribute: "foo" });
  assertEquals(actual, undefined);
});
