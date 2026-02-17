import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { loadMessages } from "@/lib/i18n/load-messages";

export default async function EnglishLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const messages = await loadMessages("en");

  return (
    <NextIntlClientProvider locale="en" messages={messages}>
      <section lang="en">{children}</section>
    </NextIntlClientProvider>
  );
}
