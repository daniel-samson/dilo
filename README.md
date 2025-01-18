# dilo

A validation library for deno. The name is short for "Dilophosaurus". It is
essentially a port of laravel's validation library.

## Project Status

This project is currently in active development. It follows the practices of
[Semantic Versioning](https://semver.org/).

[![Deno](https://github.com/daniel-samson/dilo/actions/workflows/deno.yml/badge.svg)](https://github.com/daniel-samson/dilo/actions/workflows/deno.yml)
[![codecov](https://codecov.io/gh/daniel-samson/dilo/graph/badge.svg?token=tIzOnJXw1G)](https://codecov.io/gh/daniel-samson/dilo)
[![JSR](https://jsr.io/badges/@danielsamson/dilo)](https://jsr.io/@danielsamson/dilo)
[![JSR Score](https://jsr.io/badges/@danielsamson/dilo/score)](https://jsr.io/@danielsamson/dilo>)

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

You can find the documentation for the latest version at
[read the docs](https://dilo.readthedocs.io/en/latest/).

## Contributing

### Setting up Git Hooks

After cloning the repository, run the following command to set up Git hooks:

```bash
./setup-hooks.sh
```
