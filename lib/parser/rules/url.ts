import type { Ruling } from "../../interfaces/ruling.ts";
import type { Operands } from "../../types.ts";

/**
 * Parses a rule that checks if a value is a valid URL.
 */
export class Url implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "url";
  }

  /**
   * Parses a rule that checks if a value is a valid URL. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule === "url") {
      return {};
    }

    throw new Error('Invalid rule: "url"');
  }
}
