import type { Operands } from "../../types.ts";
import { parseOperands } from "./common.ts";
import type { Ruling } from "../../interfaces/ruling.ts";

/**
 * Parses a rule that checks if a value starts with one of the given values.
 */
export class StartsWith implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "starts_with";
  }

  /**
   * Parses a rule that checks if a value starts with one of the given values. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("starts_with:")) {
      const operands = parseOperands(rule);

      return {
        values: operands,
      };
    }

    throw new Error('Invalid rule: "starts_with"');
  }
}

/**
 * Parses a rule that checks if a value ends with one of the given values.
 */
export class EndsWith implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "ends_with";
  }

  /**
   * Parses a rule that checks if a value ends with one of the given values. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("ends_with:")) {
      const operands = parseOperands(rule);

      return {
        values: operands,
      };
    }

    throw new Error('Invalid rule: "ends_with"');
  }
}

/**
 * Parses a rule that checks if a value doesn't start with one of the given values.
 */
export class DoesntStartsWith implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "doesnt_starts_with";
  }

  /**
   * Parses a rule that checks if a value doesn't start with one of the given values. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("doesnt_starts_with:")) {
      const operands = parseOperands(rule);

      return {
        values: operands,
      };
    }

    throw new Error('Invalid rule: "doesnt_starts_with"');
  }
}

/**
 * Parses a rule that checks if a value doesn't end with one of the given values.
 */
export class DoesntEndsWith implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "doesnt_ends_with";
  }

  /**
   * Parses a rule that checks if a value doesn't end with one of the given values. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("doesnt_ends_with:")) {
      const operands = parseOperands(rule);

      return {
        values: operands,
      };
    }

    throw new Error('Invalid rule: "doesnt_ends_with"');
  }
}

/**
 * Parses a rule that checks if a value is uppercase.
 */
export class Uppercase implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "uppercase";
  }

  /**
   * Parses a rule that checks if a value is uppercase. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule == "uppercase") {
      return {};
    }

    throw new Error('Invalid rule: "uppercase"');
  }
}

/**
 * Parses a rule that checks if a value is lowercase.
 */
export class Lowercase implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "lowercase";
  }

  /**
   * Parses a rule that checks if a value is lowercase. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule == "lowercase") {
      return {};
    }

    throw new Error('Invalid rule: "lowercase"');
  }
}
