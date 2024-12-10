import { Validates } from "../mod.ts";

/**
 * Validates that a value when key is present.
 */
export class Sometimes implements Validates {
    /**
     * Validates that a value when key is present.
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
     */
    validate(haystack: Record<string, any>,  operands: Record<string, any>): string | false | undefined {
        const needle = operands['attribute'];
        if (haystack.hasOwnProperty(needle)) {
            return undefined;
        }

        return false;
    }
}