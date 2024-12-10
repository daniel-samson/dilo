import type {Ruling} from "../../interfaces/ruling.ts";
import type {Operands} from "../../types.ts";

export class Nullable implements Ruling {
    ruleName(): string {
        return "nullable";
    }

    parseRule(rule: string): Operands {
        if (rule.includes(":")) {
            throw new Error("Invalid rule: \"nullable\" does not accept operands");
        }

        return {};
    }
}