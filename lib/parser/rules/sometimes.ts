import {Ruling} from "../../interfaces/ruling.ts";

export class Sometimes implements Ruling {
    ruleName(): string {
        return "sometimes";
    }

    parseRule(rule: string): Record<string, any> {
        if (rule.includes(":")) {
            throw new Error("Invalid rule: \"sometimes\" does not accept operands");
        }

        return {};
    }
}