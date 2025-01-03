import type { Ruling } from "../../mod.ts";
import type { Operands } from "../../types.ts";
import { parseOperands } from "./common.ts";

export class GreaterThan implements Ruling {
  ruleName(): string {
    return "gt";
  }

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

export class GreaterThanOrEqual implements Ruling {
  ruleName(): string {
    return "gte";
  }

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

export class LessThan implements Ruling {
  ruleName(): string {
    return "lt";
  }

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

export class LessThanOrEqual implements Ruling {
  ruleName(): string {
    return "lte";
  }

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

export class In implements Ruling {
  ruleName(): string {
    return "in";
  }

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

export class NotIn implements Ruling {
  ruleName(): string {
    return "not_in";
  }

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
