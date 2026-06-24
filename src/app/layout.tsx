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
  metadataBase: new URL("https://triveni-art-house.netlify.app"),
  title: "Triveni Art House | Premium Mehndi, Paintings, Sketches, Fashion & Home Decor",
  description:
    "Where Art, Tradition & Creativity Come Together. Premium Mehndi, Paintings, Sketches, Art & Craft, Dress Designing, Handmade Gifts & Home Decor by Three Sisters. Book your consultation today.",
  keywords: [
    "mehndi artist",
    "bridal mehndi",
    "henna artist",
    "painting artist",
    "portrait sketch artist",
    "canvas painting",
    "charcoal sketch",
    "art and craft",
    "handmade gifts",
    "dress designing",
    "home decoration",
    "creative studio",
    "custom artwork",
    "Triveni Art House",
  ],
  authors: [{ name: "Triveni Art House" }],
  creator: "Triveni Art House",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://triveni-art-house.netlify.app",
    title: "Triveni Art House | Premium Mehndi, Paintings, Sketches, Fashion & Home Decor",
    description:
      "Premium Mehndi, Paintings, Sketches, Art & Craft, Dress Designing, Handmade Gifts & Home Decor by Three Sisters. A Complete Creative Studio.",
    siteName: "Triveni Art House",
    images: [
      {
        url: "/images/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Triveni Art House — Premium Creative Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triveni Art House",
    description:
      "Premium Mehndi, Paintings, Sketches, Fashion, Crafts, Gifts & Home Decor by Three Sisters.",
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
      <body className="min-h-screen flex flex-col font-body antialiased overflow-x-hidden w-full relative">
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
