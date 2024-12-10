import { Ruling } from "../../interfaces/ruling.ts";

export class Required implements Ruling {
    ruleName(): string {
        return "required";
    }

    parseRule(rule: string): Record<string, any> {
        if (rule.includes(":")) {
            throw new Error("Invalid rule: \"required\" does not accept operands");
        }

        return {};
    }
}