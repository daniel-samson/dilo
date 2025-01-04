import type { Ruling } from "../../interfaces/ruling.ts";
import type { Operands } from "../../types.ts";
import { parseOperands } from "./common.ts";

/**
 * Parses a rule that checks if a value is a valid number of digits.
 */
export class Digits implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "digits";
  }

  /**
   * Parses a rule that checks if a value is a valid number of digits. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("digits")) {
      const operands = parseOperands(rule);

      if (operands.length !== 1) {
        throw new Error(
          'Invalid rule: "digits" requires 1 operand eg. digits:4',
        );
      }

      const value = Number(operands[0]);

      if (Number.isNaN(value) || !Number.isInteger(value)) {
        throw new Error(
          'Invalid rule: "digits" requires that the operand to be an integer eg. digits:4',
        );
      }

      return {
        value,
      };
    }

    throw new Error('Invalid rule: "digits"');
  }
}

/**
 * Parses a rule that checks if a value is a valid number of digits between a given range.
 */
export class DigitsBetween implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "digits_between";
  }

  /**
   * Parses a rule that checks if a value is a valid number of digits between a given range. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("digits_between:")) {
      const operands = parseOperands(rule);

      if (operands.length !== 2) {
        throw new Error(
          'Invalid rule: "digits_between" requires 2 operands eg. digits_between:4,6',
        );
      }

      const min = Number(operands[0]);

      if (Number.isNaN(min) || !Number.isInteger(min)) {
        throw new Error(
          'Invalid rule: "digits_between" requires that the first operand to be an integer eg. digits_between:4,6',
        );
      }

      const max = Number(operands[1]);

      if (Number.isNaN(max) || !Number.isInteger(max)) {
        throw new Error(
          'Invalid rule: "digits_between" requires that the second operand to be an integer eg. digits_between:4,6',
        );
      }

      return {
        min,
        max,
      };
    }

    throw new Error('Invalid rule: "digits_between"');
  }
}
