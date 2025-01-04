import type { Operands } from "../types.ts";

/**
 * Validates that a value is a valid ULID.
 */
export class Ulid {
  /**
   * Validates that a value is a valid ULID.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, unknown>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];
    if (typeof value !== "string") {
      return `${needle}.ulid`;
    }

    const ulidRegex = /^[0-9A-HJ-KMNP-TV-Z]{26}$/;
    return ulidRegex.test(value) ? undefined : `${needle}.ulid`;
  }
}
