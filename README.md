# dilo

A validation library for deno.  The name is short for "Dilophosaurus".

## Project Status

This project is currently in development.

[![Deno](https://github.com/daniel-samson/dilo/actions/workflows/deno.yml/badge.svg)](https://github.com/daniel-samson/dilo/actions/workflows/deno.yml)
[![codecov](https://codecov.io/gh/daniel-samson/dilo/graph/badge.svg?token=tIzOnJXw1G)](https://codecov.io/gh/daniel-samson/dilo)

### v0.2.x
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

- [v0.1.0](https://github.com/daniel-samson/dilo/issues/1)
- [v0.2.0](https://github.com/daniel-samson/dilo/issues/2) - currently in development
- [v0.3.0](https://github.com/daniel-samson/dilo/issues/4) - in planning
- [v0.4.0](https://github.com/daniel-samson/dilo/issues/5) - in planning

## Contributing

### Setting up Git Hooks

After cloning the repository, run the following command to set up Git hooks:

```bash
./setup-hooks.sh
```