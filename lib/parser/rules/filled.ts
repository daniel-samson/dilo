import type { Ruling } from "../../mod.ts";
import type { Operands } from "../../types.ts";

export class Filled implements Ruling {
  ruleName(): string {
    return "filled";
  }

  parseRule(rule: string): Operands {
    if (rule === "filled") {
      return {};
    }

    throw new Error('Invalid rule: "filled"');
  }
}
