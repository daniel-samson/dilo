import { assertEquals } from "@std/assert/equals";
import { Uuid } from "./uuid.ts";

Deno.test("uuid", () => {
  const uuid = new Uuid();
  let actual = uuid.validate({ foo: "123e4567-e89b-12d3-a456-426614174000" }, {
    attribute: "foo",
  });
  assertEquals(actual, undefined);

  actual = uuid.validate({ foo: "01ARZ3NDEKCCKADXEYYDYNDP6" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.uuid");

  actual = uuid.validate({ foo: "01ARZ3NDEKCCKADXEYYDYNDP678" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.uuid");
});
