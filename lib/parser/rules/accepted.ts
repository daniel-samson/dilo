import type { Ruling } from "../../interfaces/ruling.ts";
import type { Operands } from "../../types.ts";

/**
 * Parses a rule that checks if a value is accepted.
 */
export class Accepted implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "accepted";
  }

  /**
   * Parses a rule that checks if a value is accepted. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   */
  parseRule(rule: string): Operands {
    if (rule.includes(":")) {
      throw new Error('Invalid rule: "accepted" does not accept operands');
    }

    return {};
  }
}

/**
 * Parses a rule that checks if a value is declined.
 */
export class Declined implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "declined";
  }

  /**
   * Parses a rule that checks if a value is declined. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.includes(":")) {
      throw new Error('Invalid rule: "declined" does not accept operands');
    }

    return {};
  }
}
