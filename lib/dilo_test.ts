import { assertEquals } from "@std/assert/equals";
import {Dilo} from "./dilo.ts";

Deno.test("Dilo: simple validate", () => {
    const rules = {
        foo: "required|numeric",
        bar: "sometimes|string",
        baz: "nullable|boolean",
    };

    const dilo = Dilo.make(rules);
    const actual = dilo.validate({ foo: 1, bar: "bar", baz: true });
    assertEquals(actual, undefined);
});

Deno.test("Dilo: validate required", () => {
    const rules = {
        foo: "required|numeric",
        bar: "sometimes|string",
        baz: "nullable|boolean",
    };

    const dilo = Dilo.make(rules);
    let actual = dilo.validate({ foo: 1, bar: "bar", baz: true });
    assertEquals(actual, undefined);

    actual = dilo.validate({ bar: "bar", baz: null });
    assertEquals(actual, {
        "foo":[
            "foo field is required.",
        ]
    });
});

Deno.test("Dilo: validate sometimes", () => {
    const rules = {
        foo: "required|numeric",
        bar: "sometimes|string",
        baz: "nullable|boolean",
    };

    const dilo = Dilo.make(rules);
    let actual = dilo.validate({ foo: 1, baz: true });
    assertEquals(actual, undefined);

    actual = dilo.validate({ foo: 1, bar: "", baz: true });
    assertEquals(actual, undefined);

    actual = dilo.validate({ foo: 1, bar: null, baz: true });
    assertEquals(actual, {
        "bar": ["bar must be a valid string"],
    });

});

Deno.test("Dilo: validate nullable", () => {
    const rules = {
        foo: "required|numeric",
        bar: "sometimes|string",
        baz: "nullable|boolean",
    };

    const dilo = Dilo.make(rules);
    let actual = dilo.validate({foo: 1, baz: true});
    assertEquals(actual, undefined);

    actual = dilo.validate({foo: 1, baz: null});
    assertEquals(actual, undefined);
});