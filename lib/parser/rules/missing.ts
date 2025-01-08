import type { Ruling } from "../../mod.ts";
import type { Operands } from "../../types.ts";
import { parseOperands } from "./common.ts";

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

/**
 * Parses a rule that checks if a value must not be present only if any of the other specified fields are present.
 */
export class MissingWith implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "missing_with";
  }

  /**
   * Parses a rule that checks if a value must not be present only if any of the other specified fields are present. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("missing_with:")) {
      const operands = parseOperands(rule);

      return {
        values: operands,
      };
    }

    throw new Error('Invalid rule: "missing_with"');
  }
}

/**
 * Parses a rule that checks if a value must not be present only if all of the other specified fields are present.
 */
export class MissingWithAll implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "missing_with_all";
  }

  /**
   * Parses a rule that checks if a value must not be present only if all of the other specified fields are present. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("missing_with_all:")) {
      const operands = parseOperands(rule);

      return {
        values: operands,
      };
    }

    throw new Error('Invalid rule: "missing_with_all"');
  }
}
