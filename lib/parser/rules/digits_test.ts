import { assertEquals, assertThrows } from "@std/assert";
import {Digits} from "./digits.ts";

Deno.test("Test digits", () => {
    assertThrows(() => {
        new Digits().parseRule('digits:1,2');
    }, Error, "Invalid rule: \"digits\" requires 1 operand eg. digits:4");

    assertThrows(() => {
        new Digits().parseRule('digits:foo');
    }, Error, "Invalid rule: \"digits\" requires that the operand to be an integer eg. digits:4");

    assertThrows(() => {
        new Digits().parseRule('digits:4.5');
    }, Error, "Invalid rule: \"digits\" requires that the operand to be an integer eg. digits:4");

    const digits = new Digits();
    const actual = digits.parseRule('digits:4');
    const expected = { value: 4 };
    assertEquals(actual, expected);
});