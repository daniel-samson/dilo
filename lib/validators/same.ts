import type { Validates } from "../interfaces/validates.ts";
import type { Operands } from "../types.ts";

/**
 * Validates that a value is the same as another field.
 */
export class SameField implements Validates {
  /**
   * Validates that a value is the same as another field.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, unknown>,
    operands: Operands,
  ): string | false | undefined {
    const needle = operands["attribute"] as string;
    const other = operands["other"] as string;
    const value = haystack[needle];
    if (value !== haystack[other]) {
      return `${needle}.same_field`;
    }

    return undefined;
  }
}
