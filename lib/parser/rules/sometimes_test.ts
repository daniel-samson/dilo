import { assertEquals, assertThrows } from "@std/assert";
import { Sometimes } from "./sometimes.ts";

Deno.test("sometimes rule parser: sometimes parse rule", () => {
    const sometimes = new Sometimes();
    const actual = sometimes.parseRule('sometimes');
    const expected = {};
    assertEquals(actual, expected);

    assertThrows(() => {
        sometimes.parseRule('sometimes:foo');
    },
        Error,
        'Invalid rule: "sometimes" does not accept operands'
    );
});