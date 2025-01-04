import type { Haystack, Operands, Validates } from "../mod.ts";

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
  validate(haystack: Haystack, operands: Operands): string | false | undefined {
    const needle = operands["attribute"] as string;
    if (needle in haystack) {
      return undefined;
    }

    return false;
  }
}
