import type { Ruling } from "../../interfaces/ruling.ts";
import type { Operands } from "../../types.ts";

export class Ulid implements Ruling {
  ruleName(): string {
    return "ulid";
  }

  parseRule(rule: string): Operands {
    if (rule === "ulid") {
      return {};
    }

    throw new Error('Invalid rule: "ulid"');
  }
}
