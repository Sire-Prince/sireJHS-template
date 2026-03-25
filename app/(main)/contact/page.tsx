import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | sireJSH Senior High School",
  description: "Get in touch with sireJSH Senior High School. Find contact information, location, and send a message.",
  keywords: "sireJSH, contact, address, phone, email, map",
  alternates: { canonical: "https://sireJSH.edu.gh/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}