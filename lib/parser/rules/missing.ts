import type { Ruling } from "../../mod.ts";
import type { Operands } from "../../types.ts";

/**
 * Parses a rule that checks if a value is missing.
 */
export class Missing implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "missing";
  }

  /**
   * Parses a rule that checks if a value is missing. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.includes(":")) {
      throw new Error('Invalid rule: "missing" does not accept operands');
    }

    return {};
  }
}
