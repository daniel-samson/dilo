import { assertEquals } from "@std/assert/equals";
import { Sometimes } from "./sometimes.ts";

Deno.test("sometimes: is present", () => {
    const sometimes = new Sometimes();
    const actual = sometimes.validate({ foo: "" }, { attribute: 'foo' });
    assertEquals(actual, undefined);
});

Deno.test("sometimes: not present", () => {
    const sometimes = new Sometimes();
    const actual = sometimes.validate({ }, { attribute: 'foo' });
    assertEquals(actual, false);
});