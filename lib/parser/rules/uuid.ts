import type { Ruling } from "../../mod.ts";
import type { Operands } from "../../types.ts";

export class Uuid implements Ruling {
  ruleName(): string {
    return "uuid";
  }

  parseRule(rule: string): Operands {
    if (rule === "uuid") {
      return {};
    }

    throw new Error('Invalid rule: "uuid"');
  }
}
