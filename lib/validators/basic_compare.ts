import type { Validates } from "../mod.ts";
import type { Operands, Value } from "../types.ts";

export class GreaterThan implements Validates {
  validate(
    haystack: Record<string, Value | Array<Value>>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];

    if (value === null && operands["value"] === undefined) {
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

export class GreaterThanOrEqual implements Validates {
  validate(
    haystack: Record<string, Value | Array<Value>>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];

    if (value === null && operands["value"] === undefined) {
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

export class LessThan implements Validates {
  validate(
    haystack: Record<string, Value | Array<Value>>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];

    if (value === null && operands["value"] === undefined) {
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

export class LessThanOrEqual implements Validates {
  validate(
    haystack: Record<string, Value | Array<Value>>,
    operands: Operands,
  ): string | undefined {
    const needle = operands["attribute"] as string;
    const value = haystack[needle];

    if (value === null && operands["value"] === undefined) {
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

export class In implements Validates {
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
        if (Number.isFinite(Number(key))) {
          if (!values.includes(String(key))) {
            return `${needle}.in`;
          }
        } else if (key === null && values.includes("null")) {
          break;
        } else if (key === undefined && values.includes("undefined")) {
          break;
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

export class NotIn implements Validates {
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
