import type { Ruling } from "../../mod.ts";
import type { Operands } from "../../types.ts";

/**
 * Parses a rule that checks if a value is a valid UUID.
 */
export class Uuid implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "uuid";
  }

  /**
   * Parses a rule that checks if a value is a valid UUID. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule === "uuid") {
      return {};
    }

    throw new Error('Invalid rule: "uuid"');
  }
}
