import { Ruling } from "../../interfaces/ruling.ts";
import {Operands} from "../../types.ts";

export class Accepted implements Ruling {
    ruleName(): string {
        return "accepted";
    }

    parseRule(rule: string): Operands {
        if (rule.includes(":")) {
            throw new Error("Invalid rule: \"accepted\" does not accept operands");
        }

        return {};
    }
}

export class Declined implements Ruling {
    ruleName(): string {
        return "declined";
    }

    parseRule(rule: string): Operands {
        if (rule.includes(":")) {
            throw new Error("Invalid rule: \"declined\" does not accept operands");
        }

        return {};
    }
}