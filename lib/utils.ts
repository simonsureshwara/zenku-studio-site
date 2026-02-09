import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Zenku Studio",
  url: "https://zenku.studio",
  description:
    "Zenku Studio entwickelt performante Websites, die aus Besuchern qualifizierte Anfragen machen.",
  email: "hello@zenku.studio",
  calendlyUrl: "https://calendly.com/zenku-studio/strategie-call",
};
