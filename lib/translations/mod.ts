import { en_us_translations } from "./en_us.ts";

export * from "./en_us.ts";
export * from "./dilo-translator.ts";

export const BuiltInTranslations: Record<string, Record<string, string>> = {
  en_us: en_us_translations,
};
