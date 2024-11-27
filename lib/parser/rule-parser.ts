import {Ruling} from "../interfaces/ruling.ts";

export class RuleParser {
    constructor(private rules: Ruling[] = []) {}

    /**
     * Registers a list of rules with the parser.
     *
     * @param rules The list of rules to register.
     */
    registerRules(rules: Ruling[]): void {
        this.rules = rules;
    }
    /**
     * Parses a string of rules into a list of Ruling objects.
     *
     * @param rules The string of rules to parse.
     * @returns A list of Ruling objects.
     */
    parseFieldRules(field: string, rules: string): Ruling[] {
        const parsedRules: Ruling[] = [];

        if (typeof rules === "string") {
            const ruleList = rules.split("|");
            for (const rule of ruleList) {
                const ruleParts = rule.split(":");
                if (ruleParts.length !== 2) {
                    throw new Error(`Invalid rule: ${rule}`);
                }
                const ruleName = ruleParts[0];
                const ruleOperands = ruleParts[1].split(",");
                const ruleValidator = this.rules.find((r) => r.ruleName() === ruleName);
                if (!ruleValidator) {
                    throw new Error(`Invalid rule: ${rule}`);
                    return [];
                }
                parsedRules.push(ruleValidator);
            }
        }

        return [];
    }
}