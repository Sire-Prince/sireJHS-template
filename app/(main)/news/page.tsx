import type { Metadata } from "next";
import NewsContent from "./NewsContent";

export const metadata: Metadata = {
  title: "News | sireJSH Senior High School",
  description: "Latest news, announcements, and events at sireJSH Senior High School.",
  keywords: "sireJSH, news, announcements, events",
  alternates: { canonical: "https://sireJSH.edu.gh/news" },
};

export default function NewsPage() {
  return <NewsContent />;
}