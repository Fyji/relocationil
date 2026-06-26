import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

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
  metadataBase: new URL("https://relocationil.com"),
  title: {
    default: "Relocation IL — לימודים והגירה לניו זילנד ואוסטרליה | ייעוץ לישראלים",
    template: "%s | Relocation IL",
  },
  description:
    "מסלול מוכח מלימודים לאזרחות. תואר שני בניו זילנד ואוסטרליה עם ויזת עבודה, תושבות קבועה, ופתרון לכל המשפחה. ייעוץ מקצועי לישראלים.",
  keywords: [
    "הגירה לניו זילנד",
    "לימודים בניו זילנד",
    "הגירה לאוסטרליה",
    "לימודים באוסטרליה",
    "ויזת עבודה ניו זילנד",
    "ויזת עבודה אוסטרליה",
    "תושבות קבועה",
    "אזרחות דרך לימודים",
    "ייעוץ הגירה לישראלים",
    "relocation to new zealand",
    "study in australia",
    "israel to nz immigration",
    "work visa new zealand",
    "תואר שני בניו זילנד",
    "תואר שני באוסטרליה",
    "רילוקיישן מישראל",
  ],
  authors: [{ name: "Relocation IL" }],
  creator: "Relocation IL",
  publisher: "Relocation IL",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Relocation IL — המסלול שלך לחיים חדשים בניו זילנד ואוסטרליה",
    description:
      "לימודים → ויזת עבודה → תושבות → אזרחות. ניו זילנד ואוסטרליה. ייעוץ מקצועי לישראלים.",
    type: "website",
    locale: "he_IL",
    url: "https://relocationil.com",
    siteName: "Relocation IL",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Relocation IL — לימודים והגירה לניו זילנד ואוסטרליה",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relocation IL — לימודים והגירה לניו זילנד ואוסטרליה",
    description:
      "מסלול מוכח מלימודים לאזרחות. ייעוץ מקצועי לישראלים.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://relocationil.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
  category: "education",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Relocation IL",
  url: "https://relocationil.com",
  logo: "https://relocationil.com/images/logo.png",
  description:
    "ייעוץ מקצועי לישראלים בתהליך הגירה לניו זילנד ואוסטרליה דרך מסלול לימודים אקדמיים.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@relocationil.com",
    contactType: "customer service",
    areaServed: "IL",
    availableLanguage: ["Hebrew", "English"],
  },
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tel Aviv",
    addressCountry: "IL",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Relocation IL",
  url: "https://relocationil.com",
  description:
    "מסלול מוכח מלימודים לאזרחות בניו זילנד ואוסטרליה. ייעוץ מקצועי לישראלים.",
  inLanguage: "he",
  publisher: {
    "@type": "Organization",
    name: "Relocation IL",
    url: "https://relocationil.com",
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
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
