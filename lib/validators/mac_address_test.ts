import { assertEquals } from "@std/assert/equals";
import { MacAddress } from "./mac_address.ts";

Deno.test("mac_address: is valid", () => {
  const macAddress = new MacAddress();
  let actual = macAddress.validate({ foo: "01:23:45:67:89:ab" }, {
    attribute: "foo",
  });
  assertEquals(actual, undefined);

  actual = macAddress.validate({ foo: "01:23:45:67:89:ab:cd" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.mac_address");

  actual = macAddress.validate({ foo: "01:23:45:67:89:ab:cd:ef" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.mac_address");

  actual = macAddress.validate({ foo: "00-B0-D0-63-C2-26-A0-F0" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.mac_address");

  actual = macAddress.validate({ foo: "00-B0-D0-63-C2-26" }, {
    attribute: "foo",
  });
  assertEquals(actual, undefined);

  actual = macAddress.validate({ foo: "0123456789abcd" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.mac_address");

  actual = macAddress.validate({ foo: "0123456789az" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.mac_address");

  actual = macAddress.validate({ foo: "0123456789ab" }, {
    attribute: "foo",
  });
  assertEquals(actual, undefined);

  actual = macAddress.validate({ foo: false }, {
    attribute: "foo",
  });
  assertEquals(actual, `foo.mac_address`);

  actual = macAddress.validate({ foo: null }, {
    attribute: "foo",
  });
  assertEquals(actual, `foo.mac_address`);

  actual = macAddress.validate({ foo: undefined }, {
    attribute: "foo",
  });
  assertEquals(actual, `foo.mac_address`);
});
