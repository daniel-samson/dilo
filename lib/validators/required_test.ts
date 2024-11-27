import { assertEquals } from "jsr:@std/assert";
import { Required } from "./required.ts";

Deno.test("required: empty string", () => {
    const required = new Required();
    const actual = required.validate({ foo: "" }, { attribute: 'foo' });
    const expected = "foo.required";
    assertEquals(actual, expected);
});

Deno.test("required: undefined", () => {
    const required = new Required();
    const actual = required.validate({ foo: undefined }, { attribute: 'foo' });
    const expected = "foo.required";
    assertEquals(actual, expected);
});

Deno.test("required: null", () => {
    const required = new Required();
    const actual = required.validate({ foo: null }, { attribute: 'foo' });
    const expected = "foo.required";
    assertEquals(actual, expected);
});

Deno.test("required: false", () => {
    const required = new Required();
    const actual = required.validate({ foo: false }, { attribute: 'foo' });
    const expected = "foo.required";
    assertEquals(actual, expected);
});

Deno.test("required: empty array", () => {
    const required = new Required();
    const actual = required.validate({ foo: false }, { attribute: 'foo' });
    const expected = "foo.required";
    assertEquals(actual, expected);
});

Deno.test("required: full array", () => {
    const required = new Required();
    const actual = required.validate({ foo: ["foo"] }, { attribute: 'foo' });
    assertEquals(actual, undefined);
});

Deno.test("required: full string", () => {
    const required = new Required();
    const actual = required.validate({ foo: "foo" }, { attribute: 'foo' });
    assertEquals(actual, undefined);
});

Deno.test("required: full number", () => {
    const required = new Required();
    const actual = required.validate({ foo: 1 }, { attribute: 'foo' });
    assertEquals(actual, undefined);
});

Deno.test("required: full boolean", () => {
    const required = new Required();
    const actual = required.validate({ foo: true }, { attribute: 'foo' });
    assertEquals(actual, undefined);
});

Deno.test("required: full object", () => {
    const required = new Required();
    const actual = required.validate({ foo: { foo: "foo" } }, { attribute: 'foo' });
    assertEquals(actual, undefined);
});