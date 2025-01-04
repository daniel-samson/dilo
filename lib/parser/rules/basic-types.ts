import type { Ruling } from "../../interfaces/ruling.ts";
import { parseOperands } from "./common.ts";
import type { Operands } from "../../types.ts";

/**
 * Parses a rule that checks if a value is an array.
 */
export class ArrayType implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "array";
  }

  /**
   * Parses a rule that checks if a value is an array. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule === "array") {
      return {};
    }

    throw new Error('Invalid rule: "array"');
  }
}

/**
 * Parses a rule that checks if a value is an object.
 */
export class ObjectType implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "object";
  }

  /**
   * Parses a rule that checks if a value is an object. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("object:")) {
      const keys = parseOperands(rule);
      return { keys };
    }

    if (rule === "object") {
      return {};
    }

    throw new Error('Invalid rule: "object"');
  }
}

/**
 * Parses a rule that checks if a value is a boolean.
 */
export class BooleanType implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "boolean";
  }

  /**
   * Parses a rule that checks if a value is a boolean. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule === "boolean") {
      return {};
    }

    throw new Error('Invalid rule: "boolean"');
  }
}

/**
 * Parses a rule that checks if a value is a date.
 */
export class DateType implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "date";
  }

  /**
   * Parses a rule that checks if a value is a date. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule === "date") {
      return {};
    }

    throw new Error('Invalid rule: "date"');
  }
}

/**
 * Parses a rule that checks if a value is a decimal.
 */
export class DecimalType implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "decimal";
  }

  /**
   * Parses a rule that checks if a value is a decimal. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule.startsWith("decimal:")) {
      const places = parseOperands(rule);

      if (places.length > 2) {
        throw new Error(
          'Invalid rule: "decimal" requires you to specify decimal places eg. decimal:1,4 or decimal:2',
        );
      }

      for (const place of places) {
        if (Number.isNaN(Number(place))) {
          throw new Error(
            'Invalid rule: "decimal" requires you to specify decimal places eg. decimal:1,4 or decimal:2',
          );
        }
      }

      if (places.length === 1) {
        return { placesTo: Number(places[0]) };
      }

      return { placesFrom: Number(places[0]), placesTo: Number(places[1]) };
    }

    throw new Error('Invalid rule: "decimal"');
  }
}

/**
 * Parses a rule that checks if a value is an integer.
 */
export class IntegerType implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "integer";
  }

  /**
   * Parses a rule that checks if a value is an integer. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule === "integer") {
      return {};
    }

    throw new Error('Invalid rule: "integer"');
  }
}

/**
 * Parses a rule that checks if a value is a JSON string.
 */
export class JsonType implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "json";
  }

  /**
   * Parses a rule that checks if a value is a JSON string. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule === "json") {
      return {};
    }

    throw new Error('Invalid rule: "json"');
  }
}

/**
 * Parses a rule that checks if a value is a numeric value.
 */
export class NumericType implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "numeric";
  }

  /**
   * Parses a rule that checks if a value is a numeric value. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule === "numeric") {
      return {};
    }

    throw new Error('Invalid rule: "numeric"');
  }
}

/**
 * Parses a rule that checks if a value is a string.
 */
export class StringType implements Ruling {
  /**
   * The name of the rule.
   */
  ruleName(): string {
    return "string";
  }

  /**
   * Parses a rule that checks if a value is a string. It breaks the rule into operands and returns them.
   * @param rule The rule to parse.
   * @returns The operands of the rule.
   * @throws Error when the rule does not accept operands
   */
  parseRule(rule: string): Operands {
    if (rule === "string") {
      return {};
    }

    throw new Error('Invalid rule: "string"');
  }
}
