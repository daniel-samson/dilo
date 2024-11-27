/**
 * Validates a value against a rule.
 */
export interface Validates {
    /**
     * Validates a value against a rule.
     *
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
     */
    validate(haystack: Record<string, any>, operands: Record<string, any>): string | undefined;
}