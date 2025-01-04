import type { Validates } from "../mod.ts";
import type { Operands, Value } from "../types.ts";

/**
 * Validates that a value is greater than a given value.
 */
export class GreaterThan implements Validates {
  /**
   * Validates that a value is greater than a given value.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, Value | Array<Value>>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];

    // field name support
    if ((operands["value"] as string in haystack)) {
      const fieldValue = haystack[operands["value"] as string];
      if (typeof fieldValue !== typeof value) {
        throw new Error("gt: operand must be of the same type as the value");
      }

      if (
        typeof value === "string" &&
        value.length > (fieldValue as string).length
      ) {
        return undefined;
      }

      if (Number.isFinite(value) && value as number > (fieldValue as number)) {
        return undefined;
      }

      if (
        Array.isArray(value) &&
        value.length > (fieldValue as Array<Value>).length
      ) {
        return undefined;
      }

      return `${needle}.gt`;
    }

    const compareValue = Number(operands["value"]);

    if (Number.isFinite(value) && (value as number) > compareValue) {
      return undefined;
    }

    if (value !== null && Array.isArray(value) && value.length > compareValue) {
      return undefined;
    }

    if (typeof value === "string" && value.length > compareValue) {
      return undefined;
    }

    return `${needle}.gt`;
  }
}

/**
 * Validates that a value is greater than or equal to a given value.
 */
export class GreaterThanOrEqual implements Validates {
  /**
   * Validates that a value is greater than or equal to a given value.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, Value | Array<Value>>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];

    // field name support
    if ((operands["value"] as string in haystack)) {
      const fieldValue = haystack[operands["value"] as string];
      if (typeof fieldValue !== typeof value) {
        throw new Error("gte: operand must be of the same type as the value");
      }

      if (
        typeof value === "string" &&
        value.length >= (fieldValue as string).length
      ) {
        return undefined;
      }

      if (
        Number.isFinite(value) && (value as number) >= (fieldValue as number)
      ) {
        return undefined;
      }

      if (
        Array.isArray(value) &&
        value.length >= (fieldValue as Array<Value>).length
      ) {
        return undefined;
      }

      return `${needle}.gte`;
    }

    const compareValue = Number(operands["value"]);

    if (Number.isFinite(value) && (value as number) >= compareValue) {
      return undefined;
    }

    if (
      value !== null && Array.isArray(value) && value.length >= compareValue
    ) {
      return undefined;
    }

    if (typeof value === "string" && value.length >= compareValue) {
      return undefined;
    }

    return `${needle}.gte`;
  }
}

/**
 * Validates that a value is less than a given value.
 */
export class LessThan implements Validates {
  /**
   * Validates that a value is less than a given value.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, Value | Array<Value>>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];

    // field name support
    if ((operands["value"] as string in haystack)) {
      const fieldValue = haystack[operands["value"] as string];
      if (typeof fieldValue !== typeof value) {
        throw new Error("lt: operand must be of the same type as the value");
      }

      if (
        typeof value === "string" &&
        value.length < (fieldValue as string).length
      ) {
        return undefined;
      }

      if (
        Number.isFinite(value) && (value as number) < (fieldValue as number)
      ) {
        return undefined;
      }

      if (
        Array.isArray(value) &&
        value.length < (fieldValue as Array<Value>).length
      ) {
        return undefined;
      }

      return `${needle}.lt`;
    }

    const compareValue = Number(operands["value"]);

    if (Number.isFinite(value) && (value as number) < compareValue) {
      return undefined;
    }

    if (value !== null && Array.isArray(value) && value.length < compareValue) {
      return undefined;
    }

    if (typeof value === "string" && value.length < compareValue) {
      return undefined;
    }

    return `${needle}.lt`;
  }
}

/**
 * Validates that a value is less than or equal to a given value.
 */
export class LessThanOrEqual implements Validates {
  /**
   * Validates that a value is less than or equal to a given value.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, Value | Array<Value>>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];

    // field name support
    if ((operands["value"] as string in haystack)) {
      const fieldValue = haystack[operands["value"] as string];
      if (typeof fieldValue !== typeof value) {
        throw new Error("lte: operand must be of the same type as the value");
      }

      if (
        typeof value === "string" &&
        value.length <= (fieldValue as string).length
      ) {
        return undefined;
      }

      if (
        Number.isFinite(value) && (value as number) <= (fieldValue as number)
      ) {
        return undefined;
      }

      if (
        Array.isArray(value) &&
        value.length <= (fieldValue as Array<Value>).length
      ) {
        return undefined;
      }

      return `${needle}.lte`;
    }

    const compareValue = Number(operands["value"]);

    if (Number.isFinite(value) && (value as number) <= compareValue) {
      return undefined;
    }

    if (
      value !== null && Array.isArray(value) && value.length <= compareValue
    ) {
      return undefined;
    }

    if (typeof value === "string" && value.length <= compareValue) {
      return undefined;
    }

    return `${needle}.lte`;
  }
}

/**
 * Validates that a value is in a given array.
 */
export class In implements Validates {
  /**
   * Validates that a value is in a given array.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, Value | Array<Value>>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const values = operands["values"] as unknown[];
    const value = haystack[needle] as unknown;
    if (value === null && values.includes("null")) {
      return undefined;
    }

    if (value === undefined && values.includes("undefined")) {
      return undefined;
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return `${needle}.in`;
      }

      for (const key of value) {
        if (key === null && values.includes("null")) {
          break;
        } else if (Number.isFinite(Number(key))) {
          if (!values.includes(String(key))) {
            return `${needle}.in`;
          }
        } else if (!values.includes(key)) {
          return `${needle}.in`;
        }
      }

      return undefined;
    }

    if (typeof value === "string" && values.includes(value)) {
      return undefined;
    }

    if (Number.isFinite(Number(value)) && values.includes(String(value))) {
      return undefined;
    }

    return `${needle}.in`;
  }
}

/**
 * Validates that a value is not in a given array.
 */
export class NotIn implements Validates {
  /**
   * Validates that a value is not in a given array.
   * @param haystack The object to validate against.
   * @param operands The operands to the rule.
   * @returns A string containing the error message if the value is invalid, false if the value is valid but validation should discontinue, or undefined if the value is valid.
   */
  validate(
    haystack: Record<string, Value | Array<Value>>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const validateIn = new In();
    const value = validateIn.validate(haystack, operands);
    if (value === undefined) {
      return `${needle}.not_in`;
    }

    return undefined;
  }
}
