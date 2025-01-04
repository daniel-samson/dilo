import type { Validates } from "../interfaces/validates.ts";
import type { Operands, Value } from "../types.ts";

/**
 * Validates that a value is a valid number of digits.
 */
export class Digits implements Validates {
  /**
   * Validates that a value is a valid number of digits.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, Value>,
    operands: Operands,
  ): string | false | undefined {
    const needle = operands["attribute"] as string;
    const numOfDigits = operands["value"] as number;
    const value = haystack[needle] as number;

    if (
      Number.isInteger(value) && String(Math.abs(value)).length === numOfDigits
    ) {
      return undefined;
    }

    return `${needle}.digits`;
  }
}

/**
 * Validates that a value is a valid number of digits between a given range.
 */
export class DigitsBetween implements Validates {
  /**
   * Validates that a value is a valid number of digits.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, Value>,
    operands: Operands,
  ): string | false | undefined {
    const needle = operands["attribute"] as string;
    const min = operands["min"] as number;
    const max = operands["max"] as number;
    const value = haystack[needle] as number;

    if (
      Number.isInteger(value) && String(Math.abs(value)).length >= min &&
      String(Math.abs(value)).length <= max
    ) {
      return undefined;
    }

    return `${needle}.digits_between`;
  }
}
