import { Dilo } from "./dilo.ts";

Deno.bench("Dilo", () => {
  const rules = {
    foo: "required|numeric|gt:0",
    bar: "sometimes|string",
    baz: "nullable|boolean",
  };

  const dilo = Dilo.make(rules);
  dilo.validate({ foo: 1, bar: "bar", baz: true });
});
