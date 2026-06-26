import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Relocation IL — לימודים והגירה לניו זילנד ואוסטרליה | ייעוץ לישראלים",
  description:
    "מסלול מוכח מלימודים לאזרחות. תואר שני בניו זילנד ואוסטרליה עם ויזת עבודה, תושבות קבועה, ופתרון לכל המשפחה. ייעוץ מקצועי לישראלים.",
  openGraph: {
    title: "Relocation IL — המסלול שלך לחיים חדשים",
    description:
      "לימודים → ויזת עבודה → תושבות → אזרחות. ניו זילנד ואוסטרליה. ייעוץ מקצועי לישראלים.",
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-heebo)] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
