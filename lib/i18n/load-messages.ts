import type { AbstractIntlMessages } from "next-intl";
import de from "@/messages/de.json";
import en from "@/messages/en.json";

const localeMessages = {
  de,
  en,
} as const;

export type AppLocale = keyof typeof localeMessages;

export async function loadMessages(locale: AppLocale): Promise<AbstractIntlMessages> {
  return localeMessages[locale] as unknown as AbstractIntlMessages;
}
