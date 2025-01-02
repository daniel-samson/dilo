import type { Operands, Ruling } from "../../mod.ts";

export class Size implements Ruling {
  ruleName(): string {
    return "size";
  }

  parseRule(rule: string): Operands {
      const [_, size] = rule.split(":");

      if (rule.includes(":") === false || size === undefined || size === "") {
          throw new Error("Invalid rule: \"size\" requires 1 operand eg. size:10");
      }



    return {
      size: parseInt(size),
    };
  }
}