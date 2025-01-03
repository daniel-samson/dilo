# dilo

A validation library for deno. The name is short for "Dilophosaurus".

## Project Status

This project is currently in development.

[![Deno](https://github.com/daniel-samson/dilo/actions/workflows/deno.yml/badge.svg)](https://github.com/daniel-samson/dilo/actions/workflows/deno.yml)
[![codecov](https://codecov.io/gh/daniel-samson/dilo/graph/badge.svg?token=tIzOnJXw1G)](https://codecov.io/gh/daniel-samson/dilo)

### v0.2.x

[![Deno](https://github.com/daniel-samson/dilo/actions/workflows/deno.yml/badge.svg?branch=epic%2F0.2.x)](https://github.com/daniel-samson/dilo/actions/workflows/deno.yml)
[![codecov](https://codecov.io/gh/daniel-samson/dilo/branch/epic%2F0.2.x/graph/badge.svg?token=tIzOnJXw1G)](https://codecov.io/gh/daniel-samson/dilo)

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

## Documentation

- [version 0.1.x](https://github.com/daniel-samson/dilo/issues/1) (Current
  version)
- [version 0.2.x](https://github.com/daniel-samson/dilo/issues/2) - Work In
  Progress
- [version 0.3.x](https://github.com/daniel-samson/dilo/issues/4) - In planning
- [version 0.4.x](https://github.com/daniel-samson/dilo/issues/5) - In planning

## Contributing

### Setting up Git Hooks

After cloning the repository, run the following command to set up Git hooks:

```bash
./setup-hooks.sh
```
