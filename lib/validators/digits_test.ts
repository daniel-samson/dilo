import { assertEquals } from "@std/assert";
import {Digits} from "./digits.ts";

Deno.test("validates digits", () => {
    const digits = new Digits();
    let actual = digits.validate({ foo: 1234 }, { attribute: "foo", value: 4 });
    assertEquals(actual, undefined);

    actual = digits.validate({ foo: -1234 }, { attribute: "foo", value: 4 })
    assertEquals(actual, undefined);

    actual = digits.validate({ foo: 1234 }, { attribute: "foo", value: 5 });
    assertEquals(actual, "foo.digits");

    actual = digits.validate({ foo: 1234 }, { attribute: "foo", value: 3 });
    assertEquals(actual, "foo.digits");

    actual = digits.validate({ foo: 1234 }, { attribute: "foo", value: 2 });
    assertEquals(actual, "foo.digits");

    actual = digits.validate({ foo: 1234 }, { attribute: "foo", value: 1 });
    assertEquals(actual, "foo.digits");

    actual = digits.validate({ foo: 1234 }, { attribute: "foo", value: 0 });
    assertEquals(actual, "foo.digits");
});