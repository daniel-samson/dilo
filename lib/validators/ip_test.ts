import { assertEquals } from "@std/assert/equals";
import { Ip, Ipv4, Ipv6 } from "./ip.ts";

Deno.test("ipv4: is valid", () => {
  const ipv4 = new Ipv4();
  let actual = ipv4.validate({ foo: "127.0.0.1" }, { attribute: "foo" });
  assertEquals(actual, undefined);

  actual = ipv4.validate({ foo: "127.0.0.1:8080" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv4.validate({ foo: "127.0.0.1.8080" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv4.validate({ foo: "127.0.0.1." }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv4.validate({ foo: "127.0.0" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv4.validate({ foo: "127.0" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv4.validate({ foo: "127" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv4.validate({ foo: "127.0.0.1.8080.8080.8080.8080" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ipv4.validate({ foo: "127.0.0.1.8080.8080.8080.8080." }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ipv4.validate({ foo: false }, { attribute: "foo" });
  assertEquals(actual, `foo.ip`);

  actual = ipv4.validate({ foo: null }, { attribute: "foo" });
  assertEquals(actual, `foo.ip`);

  actual = ipv4.validate({ foo: undefined }, { attribute: "foo" });
  assertEquals(actual, `foo.ip`);
});

Deno.test("ipv6: is valid", () => {
  const ipv6 = new Ipv6();
  let actual = ipv6.validate(
    { foo: "2001:0db8:85a3:0000:0000:8a2e:0370:7334" },
    {
      attribute: "foo",
    },
  );
  assertEquals(actual, undefined);

  actual = ipv6.validate({
    foo: "2001:0db8:85a3:0000:0000:8a2e:0370:7334:8080",
  }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "2001:0db8:85a3:0000:0000:8a2e:0370:7334." }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({
    foo: "2001:0db8:85a3:0000:0000:8a2e:0370:7334.8080",
  }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "::1" }, { attribute: "foo" });
  assertEquals(actual, undefined);

  actual = ipv6.validate({ foo: ":1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, undefined);

  actual = ipv6.validate({ foo: "1:1:1:1:1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1:1:1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1:1:1:1:1:1:1:1" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1:1:1:1:1:1:1:1:1" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1:1:1:1:1:1:1:1:1:1" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1:1:1:1:1:1:1:1:1:1:1" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1:1:1:1:1:1:1:1:1:1:1:1" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1:1:1:1:1:1:1:1:1:1:1:1:1" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ipv6.validate({ foo: "1:1:1:1:1:1:1:1:1:1:1:1:1:1:1:1:1" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");
  actual = ipv6.validate({ foo: false }, { attribute: "foo" });
  assertEquals(actual, `foo.ip`);

  actual = ipv6.validate({ foo: null }, { attribute: "foo" });
  assertEquals(actual, `foo.ip`);

  actual = ipv6.validate({ foo: undefined }, { attribute: "foo" });
  assertEquals(actual, `foo.ip`);
});

Deno.test("ip: is valid", () => {
  const ip = new Ip();
  let actual = ip.validate({ foo: "127.0.0.1" }, { attribute: "foo" });
  assertEquals(actual, undefined);

  actual = ip.validate({ foo: "127.0.0.1:8080" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "127.0.0.1.8080" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "127.0.0.1." }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "127.0.0" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "127.0" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "127" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "127.0.0.1.8080.8080.8080.8080" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "127.0.0.1.8080.8080.8080.8080." }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "2001:0db8:85a3:0000:0000:8a2e:0370:7334" }, {
    attribute: "foo",
  });
  assertEquals(actual, undefined);

  actual = ip.validate(
    { foo: "2001:0db8:85a3:0000:0000:8a2e:0370:7334:8080" },
    {
      attribute: "foo",
    },
  );
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "::1" }, { attribute: "foo" });
  assertEquals(actual, undefined);

  actual = ip.validate({ foo: ":1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1:1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1:1:1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, undefined);

  actual = ip.validate({ foo: "1:1:1:1:1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1:1:1:1:1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1:1:1:1:1:1:1:1:1:1" }, { attribute: "foo" });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1:1:1:1:1:1:1:1:1:1:1" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1:1:1:1:1:1:1:1:1:1:1:1" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1:1:1:1:1:1:1:1:1:1:1:1:1" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: "1:1:1:1:1:1:1:1:1:1:1:1:1:1:1" }, {
    attribute: "foo",
  });
  assertEquals(actual, "foo.ip");

  actual = ip.validate({ foo: false }, { attribute: "foo" });
  assertEquals(actual, `foo.ip`);

  actual = ip.validate({ foo: null }, { attribute: "foo" });
  assertEquals(actual, `foo.ip`);

  actual = ip.validate({ foo: undefined }, { attribute: "foo" });
  assertEquals(actual, `foo.ip`);
});
