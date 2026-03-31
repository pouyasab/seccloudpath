export const locales = ["no", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "no";

import en from "@/messages/en.json";
import no from "@/messages/no.json";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getMessages(locale: string) {
  if (locale === "en") return en;
  return no;
}

export function withLocale(locale: Locale, href: string) {
  const path = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${path === "/" ? "" : path}`;
}

