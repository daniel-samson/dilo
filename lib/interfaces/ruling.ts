import type { Operands } from "../types.ts";

/**
 * A rule is a single validation rule that can be applied to a field.
 */
export interface Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string;

  /**
   * Parses a rule. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   */
  parseRule(rule: string): Operands;
}

/**
 * A parsed rule is a rule and its operands.
 */
export interface ParsedRule {
  rule: string;
  operands: Operands;
}
