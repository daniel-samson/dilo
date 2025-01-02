export function parseOperands(rule: string): string[] {
  const keys = rule.split(":")[1].split(",");
  const regex = /^\s*$/;
  if (keys.length === 0 || keys.length === 1 && regex.test(keys[0])) {
    throw new Error("Invalid rule: requires at least one key");
  }
  return keys;
}
