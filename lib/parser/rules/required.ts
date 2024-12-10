import { Ruling } from "../../interfaces/ruling.ts";
import {Operands} from "../../types.ts";

export class Required implements Ruling {
    ruleName(): string {
        return "required";
    }

    parseRule(rule: string): Operands {
        if (rule.includes(":")) {
            throw new Error("Invalid rule: \"required\" does not accept operands");
        }

        return {};
    }
}