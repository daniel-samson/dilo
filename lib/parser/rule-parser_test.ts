import { Required, RuleParser, Sometimes } from "./mod.ts";
import { assertEquals } from "@std/assert/equals";

Deno.test("RuleParser: empty rules", () => {
  const ruleParser = new RuleParser([]);
  const actual = ruleParser.parseFieldRules("foo", "|");
  assertEquals(actual, []);
});

Deno.test("RuleParser: register rules", () => {
  const ruleParser = new RuleParser([]);
  ruleParser.registerRules([
    new Required(),
    new Sometimes(),
  ]);

  const actual = ruleParser.parseFieldRules("foo", "required|sometimes");
  assertEquals(actual, [
    {
      rule: "required",
      operands: {
        attribute: "foo",
      },
    },
    {
      rule: "sometimes",
      operands: {
        attribute: "foo",
      },
    },
  ]);
});
