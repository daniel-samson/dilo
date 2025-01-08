import { assertEquals } from "@std/assert/equals";
import { MacAddress } from "./mac-address.ts";

Deno.test("Test mac_address", () => {
  const macAddress = new MacAddress();
  const actual = macAddress.parseRule("mac_address");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(macAddress.ruleName(), "mac_address");
});
