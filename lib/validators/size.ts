import {Validates} from "../interfaces/validates.ts";
import {Haystack, Operands} from "../types.ts";

export class Size implements Validates {
  /**
   * The field under validation must have a size matching the given value.
   * For string data, value corresponds to the number of characters.
   * For numeric data, value corresponds to a given integer value (the attribute must also have the numeric or integer rule).
   * For an array, size corresponds to the count of the array.
   *
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
   */
  validate(haystack: Haystack, operands: Operands): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];
    if (value !== null && (Array.isArray(value) || typeof value === "string")) {
      if (operands["size"] !== undefined) {
        if (value.length === operands["size"]) {
          return undefined;
        }

        return `${needle}.size`;
      }
    }

    if (value !== null && Number.isInteger(value)) {
      if (operands["size"] !== undefined) {
        if (value === operands["size"]) {
          return undefined;
        }

        return `${needle}.size`;
      }
    }

    return `${needle}.size`;
  }
}
