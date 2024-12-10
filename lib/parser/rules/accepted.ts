import { Ruling } from "../../interfaces/ruling.ts";

export class Accepted implements Ruling {
    ruleName(): string {
        return "accepted";
    }

    parseRule(rule: string): Record<string, any> {
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

    parseRule(rule: string): Record<string, any> {
        if (rule.includes(":")) {
            throw new Error("Invalid rule: \"declined\" does not accept operands");
        }

        return {};
    }
}