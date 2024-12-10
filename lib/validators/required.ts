import type { Validates } from "../interfaces/validates.ts";
import type {Haystack, Operands} from "../types.ts";

/**
 * Validates that a value is present and is not an empty string, array, or object.
 */
export class Required implements Validates {
    /**
     * Validates that a value is present and is not an empty string, array, or object.
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
     */
    validate(
        haystack: Haystack,
        operands: Operands,
    ): string | false | undefined {
        const needle = operands['attribute'] as string;
        const value = haystack[needle];
        if (
            [undefined, null, "", false].includes(value as string | boolean | null | undefined) ||
            (Array.isArray(haystack[needle]) && haystack[needle].length === 0)
        ) {
            return `${needle}.required`;
        }
    }
}
