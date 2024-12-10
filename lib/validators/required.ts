import { Validates } from "../interfaces/validates.ts";

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
        haystack: Record<string, any>,
        operands: Record<string, any>,
    ): string | false | undefined {
        const needle = operands['attribute'];
        if (
            [undefined, null, "", false].includes(haystack[needle]) ||
            (Array.isArray(haystack[needle]) && haystack[needle].length === 0)
        ) {
            return `${needle}.required`;
        }
    }
}
