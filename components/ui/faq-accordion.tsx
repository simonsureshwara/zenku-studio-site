"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((item, i) => (
        <Accordion.Item
          key={item.question}
          value={`item-${i}`}
          className="rounded-2xl border border-black/10 bg-white/70 px-5 dark:border-white/10 dark:bg-white/5"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left font-medium">
              {item.question}
              <ChevronDown className="h-4 w-4" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-4 text-sm text-zinc-600 dark:text-zinc-300">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
