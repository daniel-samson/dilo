import type { Operands, Validates, Value } from "../mod.ts";

/**
 * Validates that a value is either "yes", "on", 1, "1", true, or "true".
 */
export class Accepted implements Validates {
  /**
   * Validates that a value is either "yes", "on", 1, "1", true, or "true".
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, Value>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];
    if (["yes", "on", 1, "1", true, "true"].includes(value as string)) {
      return undefined;
    }

    return `${needle}.accepted`;
  }
}

/**
 * Validates that a value is either "no", "off", 0, "0", false, or "false".
 */
export class Declined implements Validates {
  /**
   * Validates that a value is either "no", "off", 0, "0", false, or "false".
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, Value>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];
    if (["no", "off", 0, "0", false, "false"].includes(value as string)) {
      return undefined;
    }

    return `${needle}.accepted`;
  }
}
