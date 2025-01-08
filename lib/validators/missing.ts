import type { Validates } from "../mod.ts";
import type { Haystack, Operands } from "../types.ts";

export class Missing implements Validates {
  /**
   * Validates that a value is not present.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Haystack,
    operands: Operands,
  ): string | false | undefined {
    const needle = operands["attribute"] as string;
    if (needle in haystack) {
      return `${needle}.missing`;
    }

    return undefined;
  }
}

/**
 * Validates that a value is not present only if any of the other specified fields are present.
 */
export class MissingWith implements Validates {
  /**
   * Validates that a value is not present only if any of the other specified fields are present.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Haystack,
    operands: Operands,
  ): string | false | undefined {
    const needle = operands["attribute"] as string;
    const values = operands["values"] as string[];
    const keys = Object.keys(haystack);
    const valuesInHaystack = keys.filter((key) => values.includes(key));

    if (keys.includes(needle) && valuesInHaystack.length === 0) {
      return undefined;
    }

    if (!keys.includes(needle) && valuesInHaystack.length > 0) {
      return undefined;
    }

    return `${needle}.missing_with`;
  }
}

/**
 * Validates that a value must not be present only if all of the other specified fields are present..
 */
export class MissingWithoutAll implements Validates {
  /**
   * Validates that a value is not present only if all of the other specified fields are present.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Haystack,
    operands: Operands,
  ): string | false | undefined {
    const needle = operands["attribute"] as string;
    const values = operands["values"] as string[];
    const keys = Object.keys(haystack);
    const valuesInHaystack = keys.filter((key) => values.includes(key));

    if (keys.includes(needle) && valuesInHaystack.length === 0) {
      return undefined;
    }

    if (!keys.includes(needle) && valuesInHaystack.length === values.length) {
      return undefined;
    }

    return `${needle}.missing_without_all`;
  }
}
