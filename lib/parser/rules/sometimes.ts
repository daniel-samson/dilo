import type {Ruling} from "../../interfaces/ruling.ts";
import type {Operands} from "../../types.ts";

export class Sometimes implements Ruling {
    ruleName(): string {
        return "sometimes";
    }

    parseRule(rule: string): Operands {
        if (rule.includes(":")) {
            throw new Error("Invalid rule: \"sometimes\" does not accept operands");
        }

        return {};
    }
}