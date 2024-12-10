import { assertEquals } from "@std/assert/equals";
import { DiloTranslator } from "./dilo-translator.ts";
import {en_us_translations} from "./en_us.ts";
import { ValidatesError } from "../mod.ts";

Deno.test("DiloTranslator: translate", () => {
    const translator = new DiloTranslator('en_us', {
        en_us: en_us_translations,
    });

    const error: ValidatesError = {
        errorCode: "foo.required",
        operands: { attribute: "foo" },
    };
    const actual = translator.translate(error.errorCode, error.operands);
    const expected = "foo field is required.";
    assertEquals(actual, expected);
});