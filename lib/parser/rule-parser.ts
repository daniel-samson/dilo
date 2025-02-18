import type { ParsedRule, Ruling } from "../interfaces/ruling.ts";
import type { RuleParserInterface } from "../mod.ts";

/**
 * A rule parser is used to parse a field's rules into a list of Ruling objects.
 */
export class RuleParser implements RuleParserInterface {
  /**
   * Creates a new RuleParser instance.
   * @param ruleParsers The list of rules to register.
   * @returns A new RuleParser instance.
   */
  constructor(private ruleParsers: Ruling[] = []) {}

  /**
   * Registers a list of rules with the parser.
   *
   * @param rules The list of rules to register.
   */
  registerRules(rules: Ruling[]): void {
    this.ruleParsers = [...this.ruleParsers, ...rules];
  }

  /**
   * Parses a string of rules into a list of Ruling objects.
   *
   * @param field The name of the field to parse.
   * @param rules The string of rules to parse.
   * @returns A list of validation errors.
   */
  parseFieldRules(field: string, rules: string): ParsedRule[] {
    const parsedRules: ParsedRule[] = [];

    const ruleList = rules.split("|");
    for (const rule of ruleList) {
      const trimmedRule = rule.trim();
      if (trimmedRule === "") {
        continue;
      }
      let ruleName = trimmedRule;
      if (trimmedRule.includes(":")) {
        ruleName = trimmedRule.split(":")[0];
      }

      if (
        !this.ruleParsers.find((ruleParser) =>
          ruleParser.ruleName() === ruleName
        )
      ) {
        console.warn(`Rule "${ruleName}" is not registered.`);
        continue;
      }

      // find the rule parser that matches the rule
      for (const ruleParser of this.ruleParsers) {
        if (ruleName === ruleParser.ruleName()) {
          const parsedOperands = ruleParser.parseRule(rule);
          parsedRules.push({
            rule: ruleParser.ruleName(),
            operands: { attribute: field, ...parsedOperands },
          });
          break;
        }
      }
    }

    return parsedRules;
  }
}
