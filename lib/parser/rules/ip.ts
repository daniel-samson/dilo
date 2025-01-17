import type { Ruling } from "../../mod.ts";
import type { Operands } from "../../types.ts";

/**
 * Parses a rule that checks if a value is a valid IPv4 address.
 */
export class Ipv4 implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "ipv4";
  }

  /**
   * Parses a rule that checks if a value is a valid IPv4 address. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule === "ipv4") {
      return {};
    }

    throw new Error('Invalid rule: "ipv4"');
  }
}

/**
 * Parses a rule that checks if a value is a valid IPv6 address.
 */
export class Ipv6 implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "ipv6";
  }

  /**
   * Parses a rule that checks if a value is a valid IPv6 address. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule === "ipv6") {
      return {};
    }

    throw new Error('Invalid rule: "ipv6"');
  }
}

/**
 * Parses a rule that checks if a value is a valid IP address.
 */
export class Ip implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "ip";
  }

  /**
   * Parses a rule that checks if a value is a valid IP address. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule === "ip") {
      return {};
    }

    throw new Error('Invalid rule: "ip"');
  }
}
