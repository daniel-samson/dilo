import { assertEquals, assertThrows } from "jsr:@std/assert";
import {
    ArrayType,
    BooleanType,
    DateType,
    DecimalType,
    IntegerType,
    JsonType,
    NullableType,
    NumericType,
    StringType
} from "./basic-types.ts";

Deno.test("basic-types: is array", () => {
    const arrayType = new ArrayType();
    const actual = arrayType.validate( {"foo": ["bar"]}, { attribute: 'foo' });
    const expected = undefined;
    assertEquals(actual, expected);
});

Deno.test("basic-types: is not array", () => {
    const arrayType = new ArrayType();
    const actual = arrayType.validate({"foo": "bar"}, { attribute: 'foo' });
    const expected = "foo.array";
    assertEquals(actual, expected);
});

Deno.test("basic-types: is boolean", () => {
    const booleanType = new BooleanType();
    let actual = booleanType.validate({"foo": true}, { attribute: 'foo' });
    let expected = undefined;
    assertEquals(actual, expected);

    actual = booleanType.validate({"foo": "true"}, { attribute: 'foo' });
    expected = undefined;
    assertEquals(actual, expected);

    actual = booleanType.validate({"foo": false}, { attribute: 'foo' });
    expected = undefined;
    assertEquals(actual, expected);

    actual = booleanType.validate({"foo": "false"}, { attribute: 'foo' });
    expected = undefined;
    assertEquals(actual, expected);

    actual = booleanType.validate({"foo": 1}, { attribute: 'foo' });
    expected = undefined;
    assertEquals(actual, expected);

    actual = booleanType.validate({"foo": "1"}, { attribute: 'foo' });
    expected = undefined;
    assertEquals(actual, expected);

    actual = booleanType.validate({"foo": 0}, { attribute: 'foo' });
    expected = undefined;
    assertEquals(actual, expected);

    actual = booleanType.validate({"foo": "0"}, { attribute: 'foo' });
    expected = undefined;
    assertEquals(actual, expected);
});

Deno.test("basic-types: is not boolean", () => {
    const booleanType = new BooleanType();
    let actual = booleanType.validate({"foo": "bar"}, { attribute: 'foo' });
    let expected = "foo.boolean";
    assertEquals(actual, expected);

    actual = booleanType.validate({"foo": null}, { attribute: 'foo' });
    expected = "foo.boolean";
    assertEquals(actual, expected);

    actual = booleanType.validate({"foo": undefined}, { attribute: 'foo' });
    expected = "foo.boolean";
    assertEquals(actual, expected);

    actual = booleanType.validate({"foo": []}, { attribute: 'foo' });
    expected = "foo.boolean";
    assertEquals(actual, expected);

    actual = booleanType.validate({ "foo": {} }, { attribute: 'foo' });
    expected = "foo.boolean";
    assertEquals(actual, expected);

    actual = booleanType.validate( {"foo": new Date()}, { attribute: 'foo' });
    expected = "foo.boolean";
    assertEquals(actual, expected);

    actual = booleanType.validate( {"foo": 7}, { attribute: 'foo' });
    assertEquals(actual, expected);
});

Deno.test("basic-types: is date", () => {
    const dateType = new DateType();
    const actual = dateType.validate({"foo": new Date()}, { attribute: 'foo' });
    const expected = undefined;
    assertEquals(actual, expected);

    const actual2 = dateType.validate({"foo": "2022-01-01"}, { attribute: 'foo' });
    const expected2 = undefined;
    assertEquals(actual2, expected2);
});

Deno.test("basic-types: is not date", () => {
    const dateType = new DateType();
    const actual = dateType.validate({"foo": "bar"}, { attribute: 'foo' });
    const expected = "foo.date";
    assertEquals(actual, expected);
});

Deno.test("basic-types: is decimal", () => {
    const decimalType = new DecimalType();
    let actual = decimalType.validate({"foo": 1.31}, {
        attribute: 'foo',
        placesTo: 2, // decimal:2
    });
    const expected = undefined;
    assertEquals(actual, expected);

    actual = decimalType.validate({"foo": 3.14234}, {
        attribute: 'foo',
        placesFrom: 1,
        placesTo: 5, // decimal:1,5
    });
    assertEquals(actual, expected);

    actual = decimalType.validate({"foo": -3.14234}, {
        attribute: 'foo',
        placesFrom: 1,
        placesTo: 5, // decimal:1,5
    });
    assertEquals(actual, expected);
});

Deno.test("basic-types: is not decimal", () => {
    const decimalType = new DecimalType();
    let actual = decimalType.validate({"foo": "bar"}, {
        attribute: 'foo' ,
        placesTo: 1
    });
    const expected = "foo.decimal";
    assertEquals(actual, expected);

    actual = decimalType.validate({"foo": 1}, {
        attribute: 'foo',
        placesFrom: 1,
        placesTo: 2,
    });
    assertEquals(actual, expected);

    actual = decimalType.validate({"foo": 1.123}, {
        attribute: 'foo',
        placesFrom: 1,
        placesTo: 2,
    });
    assertEquals(actual, expected);

    actual = decimalType.validate({"foo": 1.1}, {
        attribute: 'foo',
        placesFrom: 2,
        placesTo: 3,
    });
    assertEquals(actual, expected);
});

Deno.test("basic-types: not provided decimal places", () => {
    const decimalType = new DecimalType();
    assertThrows(() => {
            decimalType.validate(
                {"foo": 1},
                {
                attribute: 'foo',
                placesFrom: 1,
                });
        },
        Error,
        'decimal requires you to specify decimal places eg. decimal:1,4 or decimal:2'
    );
});

Deno.test("basic-types: is integer", () => {
    const integerType = new IntegerType();
    let actual = integerType.validate({"foo": 1}, { attribute: 'foo' });
    const expected = undefined;
    assertEquals(actual, expected);

    actual = integerType.validate({"foo": -1}, { attribute: 'foo' });
    assertEquals(actual, expected);
});

Deno.test("basic-types: is not an integer", () => {
    const integerType = new IntegerType();
    let actual = integerType.validate({"foo": 1.1}, { attribute: 'foo' });
    const expected = "foo.integer";
    assertEquals(actual, expected);

    actual = integerType.validate({"foo": "bar"}, { attribute: 'foo' });
    assertEquals(actual, expected);
});

Deno.test("basic-types: is json", () => {
    const jsonType = new JsonType();
    let actual = jsonType.validate({"foo": '{"foo": "bar"}'}, { attribute: 'foo' });
    const expected = undefined;
    assertEquals(actual, expected);

    actual = jsonType.validate({"foo": '{"foo": "bar"}'}, { attribute: 'foo' });
    assertEquals(actual, expected);
});

Deno.test("basic-types: is not json", () => {
    const jsonType = new JsonType();
    let actual = jsonType.validate({"foo": "bar"}, { attribute: 'foo' });
    const expected = "foo.json";
    assertEquals(actual, expected);

    actual = jsonType.validate({"foo": '{"foo": "bar"'}, { attribute: 'foo' });
    assertEquals(actual, expected);
});

Deno.test("basic-types: is nullable", () => {
    const nullableType = new NullableType();
    let actual = nullableType.validate({"foo": null}, { attribute: 'foo' });
    const expected = undefined;
    assertEquals(actual, expected);

    actual = nullableType.validate({"foo": "null"}, { attribute: 'foo' });
    assertEquals(actual, expected);
});

Deno.test("basic-types: is not nullable", () => {
    const nullableType = new NullableType();
    let actual = nullableType.validate({"foo": "bar"}, { attribute: 'foo' });
    const expected = "foo.nullable";
    assertEquals(actual, expected);

    actual = nullableType.validate({"foo": undefined}, { attribute: 'foo' });
    assertEquals(actual, expected);
});

Deno.test("basic-types: is numeric", () => {
    const numericType = new NumericType();
    let actual = numericType.validate({"foo": 1}, {attribute: 'foo'});
    const expected = undefined;
    assertEquals(actual, expected);

    actual = numericType.validate({"foo": -1}, {attribute: 'foo'});
    assertEquals(actual, expected);

    actual = numericType.validate({"foo": 1.1}, {attribute: 'foo'});
    assertEquals(actual, expected);

    actual = numericType.validate({"foo": -1.1}, {attribute: 'foo'});
    assertEquals(actual, expected);

    actual = numericType.validate({"foo": 0x10100111001}, {attribute: 'foo'});
    assertEquals(actual, expected);
});

Deno.test("basic-types: is not numeric", () => {
    const numericType = new NumericType();
    let actual = numericType.validate({"foo": "bar"}, {attribute: 'foo'});
    const expected = "foo.numeric";
    assertEquals(actual, expected);

    actual = numericType.validate({"foo": null}, {attribute: 'foo'});
    assertEquals(actual, expected);

    actual = numericType.validate({"foo": undefined}, {attribute: 'foo'});
    assertEquals(actual, expected);
});

Deno.test("basic-types: is string", () => {
    const stringType = new StringType();
    let actual = stringType.validate({"foo": "bar"}, {attribute: 'foo'});
    const expected = undefined;
    assertEquals(actual, expected);
});

Deno.test("basic-types: is not string", () => {
    const stringType = new StringType();
    let actual = stringType.validate({"foo": 1}, {attribute: 'foo'});
    const expected = "foo.string";
    assertEquals(actual, expected);
});