import type { Ruling } from "../../interfaces/ruling.ts";
import type { Operands } from "../../types.ts";

/**
 * Parses a rule that checks if a value contains a given value.
 */
export class Contains implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "contains";
  }

  /**
   * Parses a rule that checks if a value contains a given value. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    const [_, needle] = rule.split(":");

    if (rule.includes(":") === false || needle === undefined || needle === "") {
      throw new Error(
        'Invalid rule: "contains" requires at least 1 operand eg. contains:foo,...',
      );
    }

    return {
      values: needle.split(","),
    };
  }
}
