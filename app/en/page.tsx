"use client";

import { useTranslations } from "next-intl";
import { HomePage } from "../page";

export default function EnglishHomePage() {
  useTranslations("Home");
  return <HomePage />;
}
