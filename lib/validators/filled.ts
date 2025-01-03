import type { Haystack, Operands, Validates } from "../mod.ts";

/**
 * Validates that a value is filled in.
 */
export class Filled implements Validates {
  /**
   * Validates that a value is filled in when key is present.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
   */
  validate(haystack: Haystack, operands: Operands): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];
    // if value is present and value is empty
    if (
      Object.hasOwn(haystack, needle) && value === null ||
      value === undefined ||
      (typeof value === "string" && value.length === 0) ||
      (Array.isArray(value) && value.length === 0) || value === false
    ) {
      return `${needle}.filled`;
    }

    return undefined;
  }
}
