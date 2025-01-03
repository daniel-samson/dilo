import type { Ruling } from "../../interfaces/ruling.ts";
import type { Operands } from "../../types.ts";

export class Email implements Ruling {
  ruleName(): string {
    return "email";
  }

  parseRule(rule: string): Operands {
    if (rule === "email") {
      return {};
    }

    throw new Error('Invalid rule: "email"');
  }
}
