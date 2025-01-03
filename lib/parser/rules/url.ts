import type { Ruling } from "../../interfaces/ruling.ts";
import type { Operands } from "../../types.ts";

export class Url implements Ruling {
  ruleName(): string {
    return "url";
  }

  parseRule(rule: string): Operands {
    if (rule === "url") {
      return {};
    }

    throw new Error('Invalid rule: "url"');
  }
}
