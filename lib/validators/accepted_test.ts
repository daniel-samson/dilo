import { assertEquals } from "jsr:@std/assert";
import { Accepted, Declined } from "./accepted.ts";

Deno.test("accepted: no", () => {
  const accepted = new Accepted();
  const actual = accepted.validate({ foo: "no" }, { attribute: "foo" });
  const expected = "foo.accepted";
  assertEquals(actual, expected);
});

Deno.test("accepted: off", () => {
  const accepted = new Accepted();
  const actual = accepted.validate({ foo: "off" }, { attribute: "foo" });
  const expected = "foo.accepted";
  assertEquals(actual, expected);
});

Deno.test("accepted: 0", () => {
  const accepted = new Accepted();
  const actual = accepted.validate({ foo: 0 }, { attribute: "foo" });
  const expected = "foo.accepted";
  assertEquals(actual, expected);
});

Deno.test("accepted: false", () => {
  const accepted = new Accepted();
  const actual = accepted.validate({ foo: false }, { attribute: "foo" });
  const expected = "foo.accepted";
  assertEquals(actual, expected);
});

Deno.test("accepted: 'false'", () => {
  const accepted = new Accepted();
  const actual = accepted.validate({ foo: "false" }, { attribute: "foo" });
  const expected = "foo.accepted";
  assertEquals(actual, expected);
});

Deno.test("accepted: yes", () => {
  const accepted = new Accepted();
  const actual = accepted.validate({ foo: "yes" }, { attribute: "foo" });
  const expected = undefined;
  assertEquals(actual, expected);
});

Deno.test("accepted: on", () => {
  const accepted = new Accepted();
  const actual = accepted.validate({ foo: "on" }, { attribute: "foo" });
  const expected = undefined;
  assertEquals(actual, expected);
});

Deno.test("accepted: 1", () => {
  const accepted = new Accepted();
  const actual = accepted.validate({ foo: 1 }, { attribute: "foo" });
  const expected = undefined;
  assertEquals(actual, expected);
});

Deno.test("accepted: true", () => {
  const accepted = new Accepted();
  const actual = accepted.validate({ foo: true }, { attribute: "foo" });
  const expected = undefined;
  assertEquals(actual, expected);
});

Deno.test("accepted: 'true'", () => {
  const accepted = new Accepted();
  const actual = accepted.validate({ foo: "true" }, { attribute: "foo" });
  const expected = undefined;
  assertEquals(actual, expected);
});

Deno.test("declined: no", () => {
  const declined = new Declined();
  const actual = declined.validate({ foo: "no" }, { attribute: "foo" });
  const expected = undefined;
  assertEquals(actual, expected);
});

Deno.test("declined: off", () => {
  const declined = new Declined();
  const actual = declined.validate({ foo: "off" }, { attribute: "foo" });
  const expected = undefined;
  assertEquals(actual, expected);
});

Deno.test("declined: 0", () => {
  const declined = new Declined();
  const actual = declined.validate({ foo: 0 }, { attribute: "foo" });
  const expected = undefined;
  assertEquals(actual, expected);
});

Deno.test("declined: false", () => {
  const declined = new Declined();
  const actual = declined.validate({ foo: false }, { attribute: "foo" });
  const expected = undefined;
  assertEquals(actual, expected);
});

Deno.test("declined: 'false'", () => {
  const declined = new Declined();
  const actual = declined.validate({ foo: "false" }, { attribute: "foo" });
  const expected = undefined;
  assertEquals(actual, expected);
});

Deno.test("declined: yes", () => {
  const declined = new Declined();
  const actual = declined.validate({ foo: "yes" }, { attribute: "foo" });
  const expected = "foo.accepted";
  assertEquals(actual, expected);
});

Deno.test("declined: on", () => {
  const declined = new Declined();
  const actual = declined.validate({ foo: "on" }, { attribute: "foo" });
  const expected = "foo.accepted";
  assertEquals(actual, expected);
});

Deno.test("declined: 1", () => {
  const declined = new Declined();
  const actual = declined.validate({ foo: 1 }, { attribute: "foo" });
  const expected = "foo.accepted";
  assertEquals(actual, expected);
});

Deno.test("declined: true", () => {
  const declined = new Declined();
  const actual = declined.validate({ foo: true }, { attribute: "foo" });
  const expected = "foo.accepted";
  assertEquals(actual, expected);
});

Deno.test("declined: 'true'", () => {
  const declined = new Declined();
  const actual = declined.validate({ foo: true }, { attribute: "foo" });
  const expected = "foo.accepted";
  assertEquals(actual, expected);
});
