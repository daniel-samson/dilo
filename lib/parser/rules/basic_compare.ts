import type { Ruling } from "../../mod.ts";
import type { Operands } from "../../types.ts";
import { parseOperands } from "./common.ts";

/**
 * Parses a rule that checks if a value is greater than a given value.
 */
export class GreaterThan implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "gt";
  }

  /**
   * Parses a rule that checks if a value is greater than a given value. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("gt:")) {
      const operands = parseOperands(rule);

      if (operands.length !== 1) {
        throw new Error(
          'Invalid rule: "gt" requires 1 operands eg. gt:4',
        );
      }

      const value = Number(operands[0]);

      if (Number.isNaN(value) || !Number.isInteger(value)) {
        throw new Error(
          'Invalid rule: "gt" requires that the operand to be an integer eg. gt:4',
        );
      }

      return {
        value,
      };
    }

    throw new Error('Invalid rule: "gt"');
  }
}

/**
 * Parses a rule that checks if a value is greater than or equal to a given value.
 */
export class GreaterThanOrEqual implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "gte";
  }

  /**
   * Parses a rule that checks if a value is greater than or equal to a given value. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("gte:")) {
      const operands = parseOperands(rule);

      if (operands.length !== 1) {
        throw new Error(
          'Invalid rule: "gte" requires 1 operands eg. gte:4',
        );
      }

      const value = Number(operands[0]);

      if (Number.isNaN(value) || !Number.isInteger(value)) {
        throw new Error(
          'Invalid rule: "gte" requires that the operand to be an integer eg. gte:4',
        );
      }

      return {
        value,
      };
    }

    throw new Error('Invalid rule: "gte"');
  }
}

/**
 * Parses a rule that checks if a value is less than a given value.
 */
export class LessThan implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "lt";
  }

  /**
   * Parses a rule that checks if a value is less than a given value. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("lt:")) {
      const operands = parseOperands(rule);

      if (operands.length !== 1) {
        throw new Error(
          'Invalid rule: "lt" requires 1 operands eg. lt:4',
        );
      }

      const value = Number(operands[0]);

      if (Number.isNaN(value) || !Number.isInteger(value)) {
        throw new Error(
          'Invalid rule: "lt" requires that the operand to be an integer eg. lt:4',
        );
      }

      return {
        value,
      };
    }

    throw new Error('Invalid rule: "lt"');
  }
}

/**
 * Parses a rule that checks if a value is less than or equal to a given value.
 */
export class LessThanOrEqual implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "lte";
  }

  /**
   * Parses a rule that checks if a value is less than or equal to a given value. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("lte:")) {
      const operands = parseOperands(rule);

      if (operands.length !== 1) {
        throw new Error(
          'Invalid rule: "lte" requires 1 operands eg. lte:4',
        );
      }

      const value = Number(operands[0]);

      if (Number.isNaN(value) || !Number.isInteger(value)) {
        throw new Error(
          'Invalid rule: "lte" requires that the operand to be an integer eg. lte:4',
        );
      }

      return {
        value,
      };
    }

    throw new Error('Invalid rule: "lte"');
  }
}

/**
 * Parses a rule that checks if a value is in a given array.
 */
export class In implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "in";
  }

  /**
   * Parses a rule that checks if a value is in a given array. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("in:")) {
      const operands = parseOperands(rule);

      return {
        values: operands,
      };
    }

    throw new Error('Invalid rule: "in"');
  }
}

/**
 * Parses a rule that checks if a value is not in a given array.
 */
export class NotIn implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "not_in";
  }

  /**
   * Parses a rule that checks if a value is not in a given array. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("not_in:")) {
      const operands = parseOperands(rule);

      return {
        values: operands,
      };
    }

    throw new Error('Invalid rule: "not_in"');
  }
}
