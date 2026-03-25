import type { Metadata } from "next";
import NewsContent from "./NewsContent";

export const metadata: Metadata = {
  title: "News | SireSCH Senior High School",
  description: "Latest news, announcements, and events at SireSCH Senior High School.",
  keywords: "SireSCH, news, announcements, events",
  alternates: { canonical: "https://sireSCH.edu.gh/news" },
};

export default function NewsPage() {
  return <NewsContent />;
}