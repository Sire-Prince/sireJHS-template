import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import WhatsAppButton from "@/components/ui/whatsappbutton";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        
        <WhatsAppButton 
        />
      </body>
    </html>
  );
}