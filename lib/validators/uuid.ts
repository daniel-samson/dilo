import type { Validates } from "../mod.ts";
import type { Operands } from "../types.ts";

/**
 * Validates that a value is a valid UUID.
 */
export class Uuid implements Validates {
  /**
   * Validates that a value is a valid UUID.
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
      return `${needle}.uuid`;
    }

    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    return uuidRegex.test(value) ? undefined : `${needle}.uuid`;
  }
}
