import type { Ruling } from "../../mod.ts";
import type { Operands } from "../../types.ts";
import { parseOperands } from "./common.ts";

/**
 * Parses a rule that checks if a value is the same as another field.
 */
export class Same implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "same";
  }

  /**
   * Parses a rule that checks if a value is the same as another field. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("same:")) {
      const operands = parseOperands(rule);

      if (operands.length !== 1) {
        throw new Error(
          'Invalid rule: "same" requires 1 operands eg. same:foo',
        );
      }

      return {
        other: operands[0],
      };
    }

    throw new Error('Invalid rule: "same"');
  }
}
