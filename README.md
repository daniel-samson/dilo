# dilo

A validation library for deno.  The name is short for "Dilophosaurus".

## Project Status

This project is currently in development.

[![Deno](https://github.com/daniel-samson/dilo/actions/workflows/deno.yml/badge.svg)](https://github.com/daniel-samson/dilo/actions/workflows/deno.yml)

## Installation

```sh
deno install -A https://deno.land/x/dilo@v0.0.1
```

## Usage

```ts
import { Dilo } from "https://deno.land/x/dilo@v0.0.1/mod.ts";

const rules = {
  foo: "required|numeric",
  bar: "sometimes|string",
  baz: "nullable|boolean",
};

const dilo = Dilo.make(rules);
const errors = dilo.validate({ foo: 1, bar: "bar", baz: true });

if (errors) {
  for (const field of Object.keys(errors)) {
    console.log(field, errors[field]);
  }
}
```
