import { assertEquals } from "@std/assert/equals";
import { assertThrows } from "@std/assert/throws";
import { Ip, Ipv4, Ipv6 } from "./ip.ts";

Deno.test("Test ipv4", () => {
  const ipv4 = new Ipv4();
  const actual = ipv4.parseRule("ipv4");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(ipv4.ruleName(), "ipv4");

  assertThrows(
    () => {
      ipv4.parseRule("ipv4:foo");
    },
    Error,
    'Invalid rule: "ipv4"',
  );
});

Deno.test("Test ipv6", () => {
  const ipv6 = new Ipv6();
  const actual = ipv6.parseRule("ipv6");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(ipv6.ruleName(), "ipv6");

  assertThrows(
    () => {
      ipv6.parseRule("ipv6:foo");
    },
    Error,
    'Invalid rule: "ipv6"',
  );
});

Deno.test("Test ip", () => {
  const ip = new Ip();
  const actual = ip.parseRule("ip");
  const expected = {};
  assertEquals(actual, expected);
  assertEquals(ip.ruleName(), "ip");

  assertThrows(
    () => {
      ip.parseRule("ip:foo");
    },
    Error,
    'Invalid rule: "ip"',
  );
});
