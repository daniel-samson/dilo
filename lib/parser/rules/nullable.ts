import {Ruling} from "../../interfaces/ruling.ts";

export class Nullable implements Ruling {
    ruleName(): string {
        return "nullable";
    }

    parseRule(rule: string): Record<string, any> {
        if (rule.includes(":")) {
            throw new Error("Invalid rule: \"nullable\" does not accept operands");
        }

        return {};
    }
}