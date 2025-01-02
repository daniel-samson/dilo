import type { Ruling } from "../../interfaces/ruling.ts";
import type { Operands } from "../../types.ts";
import { parseOperands } from "./common.ts";
export class Digits implements Ruling {
  ruleName(): string {
    return "digits";
  }

  parseRule(rule: string): Operands {
    if (rule.startsWith("digits:")) {
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
