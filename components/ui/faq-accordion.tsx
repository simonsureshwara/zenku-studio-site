"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((item, i) => (
        <Accordion.Item
          key={item.question}
          value={`item-${i}`}
          className="overflow-hidden"
        >
          <Card className="px-5">
            <Accordion.Header>
              <Accordion.Trigger className="focus-ring flex w-full items-center justify-between py-4 text-left text-base font-medium leading-[1.3] text-text">
                {item.question}
                <ChevronDown className="h-4 w-4 text-muted" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="pb-4 text-base text-muted">{item.answer}</Accordion.Content>
          </Card>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
