import { Required } from "./required.ts";
import { assertEquals, assertThrows } from "@std/assert";

Deno.test("required: parse rule", () => {
    const required = new Required();
    const actual = required.parseRule('required');
    const expected = {};
    assertEquals(actual, expected);
});

Deno.test("required: parse rule with operands", () => {
    const required = new Required();
    assertThrows(() => {
        required.parseRule('required:foo');
    }, Error, 'Invalid rule: "required" does not accept operands');
});