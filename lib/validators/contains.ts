import type { Haystack, Operands, Validates } from "../mod.ts";

export class Contains implements Validates {
  /**
   * The field under validation must be either an array that contains all the given parameter values, or a string that contains the values given.
   *
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, or undefined if the value is valid.
   */
  validate(haystack: Haystack, operands: Operands): string | undefined {
    const needle = operands["attribute"] as string;
    const values = haystack[needle] as [string | number | boolean] | string;
    if (values !== null && Array.isArray(values)) {
      if (operands["values"] !== undefined) {
        const keys = operands["values"] as [string | number | boolean];

        for (const key of keys) {
          if (!values.includes(key)) {
            return `${needle}.contains`;
          }
        }
      }
    } else if (values !== null && typeof values === "string") {
      if (operands["values"] !== undefined) {
        const keys = operands["values"] as [string];
        for (const key of keys) {
          if (!values.includes(key)) {
            return `${needle}.contains`;
          }
        }
      }
    }

    return undefined;
  }
}
