import type { Operands, Value } from "../types.ts";

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
  validate(
    haystack: Record<string, Value>,
    operands: Operands,
  ): string | false | undefined;
}

/**
 * A validates error is an error message and its operands which is used to populate placeholders in the error message.
 */
export interface ValidatesError {
  errorCode: string;
  operands: Operands;
  translation: string;
}
