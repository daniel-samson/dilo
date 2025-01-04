/**
 * Parses a rule into operands.
 * @param rule The rule to parse.
 * @returns The operands of the rule.
 * @throws Error when the rule does not accept operands
 */
export function parseOperands(rule: string): string[] {
  const keys = rule.split(":")[1].split(",");
  const regex = /^\s*$/;
  if (keys.length === 0 || keys.length === 1 && regex.test(keys[0])) {
    throw new Error("Invalid rule: requires at least one key");
  }
  return keys;
}
