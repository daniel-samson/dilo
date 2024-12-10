import { assertEquals, assertThrows } from "@std/assert";
import {
    ArrayType,
    BooleanType,
    DateType,
    DecimalType,
    IntegerType,
    JsonType,
    NumericType,
    ObjectType,
    StringType
} from "./basic-types.ts";

Deno.test("basic-types parser: array parse rule", () => {
    const arrayType = new ArrayType();
    const actual = arrayType.parseRule('array');
    const expected = {};
    assertEquals(actual, expected);

    assertThrows(() => {
            arrayType.parseRule('foo:');
        },
        Error,
        'Invalid rule: "array"'
    );
});

Deno.test("basic-types parser: object parse rule", () => {
    const objectType = new ObjectType();
    let actual = objectType.parseRule('object');
    let expected = {};
    assertEquals(actual, expected);

    actual = objectType.parseRule('object:foo');
    expected = { keys: ['foo'] };
    assertEquals(actual, expected);

    actual = objectType.parseRule('object:foo,bar');
    expected = { keys: ['foo', 'bar'] };
    assertEquals(actual, expected);

    assertThrows(() => {
        objectType.parseRule('object:');
    },
        Error,
        'Invalid rule: requires at least one key'
    );

    assertThrows(() => {
            objectType.parseRule('foo:');
        },
        Error,
        'Invalid rule: "object"'
    );
});

Deno.test("basic-types parser: boolean parse rule", () => {
    const booleanType = new BooleanType();
    const actual = booleanType.parseRule('boolean');
    const expected = {};
    assertEquals(actual, expected);

    assertThrows(() => {
        booleanType.parseRule('foo');
    },
        Error,
        'Invalid rule: "boolean"'
    );
});

Deno.test("basic-types parser: date parse rule", () => {
    const dateType = new DateType();
    const actual = dateType.parseRule('date');
    const expected = {};
    assertEquals(actual, expected);

    assertThrows(() => {
        dateType.parseRule('foo');
    },
        Error,
        'Invalid rule: "date"'
    );
});

Deno.test("basic-types parser: decimal parse rule", () => {
    const decimalType = new DecimalType();
    type expectedType = { placesFrom?: number, placesTo: number };
    let actual = decimalType.parseRule('decimal:1');
    let expected: expectedType = { placesTo: 1 };
    assertEquals(actual, expected);

    actual = decimalType.parseRule('decimal:1,2');
    expected = { placesFrom: 1, placesTo: 2 };
    assertEquals(actual, expected);

    assertThrows(() => {
            decimalType.parseRule('decimal');
        },
        Error,
        'Invalid rule: "decimal"'
    );

    assertThrows(() => {
        decimalType.parseRule('');
    },
        Error,
        'Invalid rule: "decimal"'
    );

    assertThrows(() => {
        decimalType.parseRule('decimal:foo');
    },
        Error,
        'Invalid rule: "decimal" requires you to specify decimal places eg. decimal:1,4 or decimal:2'
    );

    assertThrows(() => {
        decimalType.parseRule('decimal:1,foo');
    },
        Error,
        'Invalid rule: "decimal" requires you to specify decimal places eg. decimal:1,4 or decimal:2'
    );
    assertThrows(() => {
            decimalType.parseRule('decimal:');
        },
        Error,
        "Invalid rule: requires at least one key"
    );
});

Deno.test("basic-types parser: integer parse rule", () => {
    const integerType = new IntegerType();
    const actual = integerType.parseRule('integer');
    const expected = {};
    assertEquals(actual, expected);

    assertThrows(() => {
        integerType.parseRule('foo');
    },
        Error,
        'Invalid rule: "integer"'
    );
});

Deno.test("basic-types parser: json parse rule", () => {
    const jsonType = new JsonType();
    const actual = jsonType.parseRule('json');
    const expected = {};
    assertEquals(actual, expected);

    assertThrows(() => {
        jsonType.parseRule('foo');
    },
        Error,
        'Invalid rule: "json"'
    );
});

Deno.test("basic-types parser: numeric parse rule", () => {
    const numericType = new NumericType();
    const actual = numericType.parseRule('numeric');
    const expected = {};
    assertEquals(actual, expected);

    assertThrows(() => {
        numericType.parseRule('foo');
    },
        Error,
        'Invalid rule: "numeric"'
    );
});

Deno.test("basic-types parser: string parse rule", () => {
    const stringType = new StringType();
    const actual = stringType.parseRule('string');
    const expected = {};
    assertEquals(actual, expected);

    assertThrows(() => {
        stringType.parseRule('foo');
    },
        Error,
        'Invalid rule: "string"'
    );
});