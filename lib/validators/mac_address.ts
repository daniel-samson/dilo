import type { Validates } from "../mod.ts";
import type { Operands } from "../types.ts";

/**
 * Validates that a value is a valid MAC address.
 */
export class MacAddress implements Validates {
  /**
   * Validates that a value is a valid MAC address.
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
      return `${needle}.mac_address`;
    }

    if (value.length === 12) {
      return value.match(/[0-9A-F]{12}/i) ? undefined : `${needle}.mac_address`;
    }

    return value.match(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/i)
      ? undefined
      : `${needle}.mac_address`;
  }
}
