import { assertEquals } from "@std/assert/equals";
import { Ulid } from "./ulid.ts";

Deno.test("ulid: is valid", () => {
  const ulid = new Ulid();
  let actual = ulid.validate({ foo: "01ARZ3NDEKCCKADXEYYDYNDP67" }, {
    attribute: "foo",
  });
  assertEquals(actual, undefined);

  actual = ulid.validate({ foo: "01ARZ3NDEKCCKADXEYYDYNDP6" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ulid");

  actual = ulid.validate({ foo: "01ARZ3NDEKCCKADXEYYDYNDP678" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ulid");
});

Deno.test("ulid: is not a string", () => {
  const ulid = new Ulid();
  let actual = ulid.validate({ foo: false }, { attribute: "foo" });
  const expected = "foo.ulid";
  assertEquals(actual, expected);

  actual = ulid.validate({ foo: null }, { attribute: "foo" });
  assertEquals(actual, "foo.ulid");

  actual = ulid.validate({ foo: undefined }, { attribute: "foo" });
  assertEquals(actual, "foo.ulid");
  assertEquals(actual, expected);
});
