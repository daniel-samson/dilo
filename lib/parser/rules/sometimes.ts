import type { Ruling } from "../../interfaces/ruling.ts";
import type { Operands } from "../../types.ts";

/**
 * Parses a rule that checks if a value when key is present.
 */
export class Sometimes implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "sometimes";
  }

  /**
   * Parses a rule that checks if a value when key is present. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.includes(":")) {
      throw new Error('Invalid rule: "sometimes" does not accept operands');
    }

    return {};
  }
}
