import type { Validates } from "../mod.ts";
import type { Operands } from "../types.ts";

/**
 * Validates that a value is a valid IPv4 address.
 */
export class Ipv4 implements Validates {
  /**
   * Validates that a value is a valid IPv4 address.
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
      return `${needle}.ip`;
    }

    return value.match(/^([0-9]{1,3}\.){3}[0-9]{1,3}$/i)
      ? undefined
      : `${needle}.ip`;
  }
}

/**
 * Validates that a value is a valid IPv6 address.
 */
export class Ipv6 implements Validates {
  /**
   * Validates that a value is a valid IPv6 address.
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
      return `${needle}.ip`;
    }

    return value.match(
        /^(((?:[0-9A-Fa-f]{1,4}))*((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))*((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7})(\/([1-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])){0,1}$/,
      )
      ? undefined
      : `${needle}.ip`;
  }
}

/**
 * Validates that a value is a valid IP address.
 */
export class Ip implements Validates {
  /**
   * Validates that a value is a valid IP address.
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
      return `${needle}.ip`;
    }

    const isIpv6 = value.match(
      /^(((?:[0-9A-Fa-f]{1,4}))*((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))*((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7})(\/([1-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])){0,1}$/,
    );
    const isIpv4 = value.match(/^([0-9]{1,3}\.){3}[0-9]{1,3}$/i);
    if (isIpv6 || isIpv4) {
      return undefined;
    }

    return `${needle}.ip`;
  }
}
