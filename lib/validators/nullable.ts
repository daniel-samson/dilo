import {Haystack, Operands, Validates} from "../mod.ts";

/**
 * Validates that a value maybe null.
 */
export class Nullable implements Validates {
    /**
     * Validates that a value maybe null.
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
     */
    validate(haystack: Haystack,  operands: Operands): string | false | undefined {
        const needle = operands['attribute'] as string;
        const value = haystack[needle];
        if ((needle in haystack) && value !== null) {
            return undefined;
        }

        return false;
    }
}