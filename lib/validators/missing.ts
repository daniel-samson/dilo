import type { Validates } from "../mod.ts";
import type { Haystack, Operands, Value } from "../types.ts";

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
 * Validates that a value is not present only if all the other specified fields are present.
 */
export class MissingWithAll implements Validates {
  /**
   * Validates that a value is not present only if all the other specified fields are present.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Haystack,
    operands: Operands,
  ): string | false | undefined {
    const needle = operands["attribute"] as string;
    const keys = operands["values"] as string[];
    const keysInHaystack = Object.keys(haystack);

    let inCount = 0;
    for (const key of keys) {
      if (keysInHaystack.includes(key)) {
        inCount++;
      }
    }

    if (keysInHaystack.includes(needle) && inCount === keys.length) {
      return `${needle}.missing_with_all`;
    }

    return undefined;
  }
}

/**
 * Validates that a value must not be present if the another field is equal to any value.
 */
export class MissingIf implements Validates {
  /**
   * Validates that a value must not be present if the another field is equal to any value.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Haystack,
    operands: Operands,
  ): string | false | undefined {
    const needle = operands["attribute"] as string;
    const keyValuePairs = operands["keyValuePairs"] as [string, Value];
    const keysInHaystack = Object.keys(haystack);

    for (let i = 0; i < keyValuePairs.length; i += 2) {
      const key = keyValuePairs[i] as string;
      let value = keyValuePairs[i + 1];

      if (value === null || value === "null") {
        value = null;
      } else if (!Number.isNaN(Number(value))) {
        value = Number(value);
      } else if (value === "true" || value === "false") {
        value = value === "true";
      } else {
        value = value as string;
      }

      if (
        keysInHaystack.includes(needle) && keysInHaystack.includes(key) &&
        haystack[key] === value
      ) {
        // add other and value to operands for translated error message
        operands["other"] = key;
        operands["value"] = value;
        return `${needle}.missing_if`;
      }
    }

    return undefined;
  }
}
