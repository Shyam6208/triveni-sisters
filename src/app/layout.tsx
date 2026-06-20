import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { generateSchemaMarkup } from "@/lib/metadata";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Triveni Art House | Premium Mehndi, Handmade Crafts & Dress Designing",
  description:
    "Where Art, Tradition & Creativity Come Together. Premium Mehndi, Handmade Crafts, Dress Designing & Creative Gifts by Three Sisters. Book your consultation today.",
  keywords: [
    "mehndi design",
    "bridal mehndi",
    "henna artist",
    "handmade gifts",
    "dress designing",
    "art and craft",
    "custom orders",
    "Indian wedding",
    "Triveni Art House",
  ],
  authors: [{ name: "Triveni Art House" }],
  creator: "Triveni Art House",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://triveniarthhouse.com",
    title: "Triveni Art House | Premium Mehndi, Handmade Crafts & Dress Designing",
    description:
      "Where Art, Tradition & Creativity Come Together. Premium Mehndi, Handmade Crafts, Dress Designing & Creative Gifts by Three Sisters.",
    siteName: "Triveni Art House",
    images: [
      {
        url: "/images/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Triveni Art House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triveni Art House",
    description:
      "Premium Mehndi, Handmade Crafts, Dress Designing & Creative Gifts by Three Sisters.",
    images: ["/images/hero-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = generateSchemaMarkup();

  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
