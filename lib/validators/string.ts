import type { Validates } from "../interfaces/validates.ts";

export class StartsWith implements Validates {
  /**
   * Validates that a value starts with one of the given values.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, string>,
    operands: Record<string, string | string[]>,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const values = operands["values"] as string[];
    const value = haystack[needle];

    const filteredValues = values.filter((v) => value.startsWith(v));
    if (filteredValues.length > 0) {
      return undefined;
    }

    return `${needle}.starts_with`;
  }
}

export class EndsWith implements Validates {
  /**
   * Validates that a value ends with one of the given values.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, string>,
    operands: Record<string, string | string[]>,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const values = operands["values"] as string[];
    const value = haystack[needle];
    const filteredValues = values.filter((v) => value.endsWith(v));
    if (filteredValues.length > 0) {
      return undefined;
    }

    return `${needle}.ends_with`;
  }
}

export class DoesntStartsWith implements Validates {
  /**
   * Validates that a value doesn't start with one of the given values.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, string>,
    operands: Record<string, string | string[]>,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const values = operands["values"] as string[];
    const value = haystack[needle];
    const filteredValues = values.filter((v) => value.startsWith(v));
    if (filteredValues.length === 0) {
      return undefined;
    }

    return `${needle}.doesnt_starts_with`;
  }
}

export class DoesntEndsWith implements Validates {
  /**
   * Validates that a value doesn't end with one of the given values.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, string>,
    operands: Record<string, string | string[]>,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const values = operands["values"] as string[];
    const value = haystack[needle];
    const filteredValues = values.filter((v) => value.endsWith(v));
    if (filteredValues.length === 0) {
      return undefined;
    }

    return `${needle}.doesnt_ends_with`;
  }
}
