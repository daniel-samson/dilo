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
