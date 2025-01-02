# dilo

A validation library for deno.  The name is short for "Dilophosaurus".

## Project Status

This project is currently in development.

[![Deno](https://github.com/daniel-samson/dilo/actions/workflows/deno.yml/badge.svg)](https://github.com/daniel-samson/dilo/actions/workflows/deno.yml)


## Usage

```ts
import { Dilo } from "@danielsamson/dilo";

const rules = {
  foo: "required|numeric",
  bar: "sometimes|string",
  baz: "nullable|boolean",
};

const request = Dilo.make(rules);
const errors = request.validate({ foo: "1", bar: "bar", baz: true });

if (errors) {
  for (const field of Object.keys(errors)) {
    console.log(field, errors[field]);
  }
}
```

Output:
```shell
foo [ "foo must be a numeric value" ]
```

## Contributing

### Setting up Git Hooks

After cloning the repository, run the following command to set up Git hooks:

```bash
./setup-hooks.sh
```