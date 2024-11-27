/**
 * A rule is a single validation rule that can be applied to a field.
 */
export interface Ruling {
    /**
     * The name of the rule.
     */
    ruleName(): string;
}