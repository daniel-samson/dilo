import type {Ruling} from "../../interfaces/ruling.ts";
import type { Operands } from "../../types.ts";

export class Contains implements Ruling {
  ruleName(): string {
    return "contains";
  }

  parseRule(rule: string): Operands {
    const [_, needle] = rule.split(":");

    if (rule.includes(":") === false || needle === undefined || needle === "") {
      throw new Error("Invalid rule: \"contains\" requires at least 1 operand eg. contains:foo,...");
    }

    return {
        values: needle.split(","),
    };
  }
}