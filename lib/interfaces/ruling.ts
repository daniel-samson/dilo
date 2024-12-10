import {Operands} from "../types.ts";

/**
 * A rule is a single validation rule that can be applied to a field.
 */
export interface Ruling {
    /**
     * The name of the rule.
     */
    ruleName(): string;

    parseRule(rule: string): Operands;
}

export interface ParsedRule {
    rule: string;
    operands: Operands;
}