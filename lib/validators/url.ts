import type { Validates } from "../mod.ts";
import type { Operands } from "../types.ts";

export class Url implements Validates {
  /**
   * Validates that a value is a valid URL.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, string>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];
    if (typeof value !== "string") {
      return `${needle}.url`;
    }

    try {
      new URL(value);
    } catch (_) {
      return `${needle}.url`;
    }

    return undefined;
  }
}
