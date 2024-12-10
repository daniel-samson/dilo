/**
 * Validates a value against a rule.
 */
export interface Validates {
    /**
     * Validates a value against a rule.
     *
     * @param haystack The object to validate against.
     * @param operands The operands to the rule.
     * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
     */
    validate(haystack: Record<string, any>, operands: Record<string, any>): string | false | undefined;
}

export interface ValidatesError {
    errorCode: string,
    operands: Record<string, any>
}