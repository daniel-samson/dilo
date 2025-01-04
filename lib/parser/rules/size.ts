import type { Operands, Ruling } from "../../mod.ts";

/**
 * Parses a rule that checks the size of a value.
 */
export class Size implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "size";
  }

  /**
   * Parses a rule that checks the size of a value. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    const [_, size] = rule.split(":");

    if (rule.includes(":") === false || size === undefined || size === "") {
      throw new Error('Invalid rule: "size" requires 1 operand eg. size:10');
    }

    return {
      size: parseInt(size),
    };
  }
}
