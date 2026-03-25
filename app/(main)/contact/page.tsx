import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | SireSCH Senior High School",
  description: "Get in touch with SireSCH Senior High School. Find contact information, location, and send a message.",
  keywords: "SireSCH, contact, address, phone, email, map",
  alternates: { canonical: "https://sireSCH.edu.gh/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}