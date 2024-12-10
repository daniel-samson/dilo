import { assertEquals } from "@std/assert/equals";
import { DiloTranslator } from "./dilo-translator.ts";
import {en_us_translations} from "./en_us.ts";

Deno.test("DiloTranslator: translate", () => {
    const translator = new DiloTranslator('en_us', {
        en_us: en_us_translations,
    });

    const actual = translator.translate("foo.required", { attribute: "foo" });
    const expected = "foo field is required.";
    assertEquals(actual, expected);
});