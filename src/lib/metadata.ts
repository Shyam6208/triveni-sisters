import type { Metadata } from "next";

const SITE_URL = "https://triveni-art-house.netlify.app";
const SITE_NAME = "Triveni Art House";
const DEFAULT_DESCRIPTION =
  "Premium Mehndi, Paintings, Sketches, Rangoli Art, Art & Craft, Dress Designing, Handmade Gifts & Home Decor by Three Sisters. A Complete Creative Studio Where Art, Tradition & Creativity Come Together.";

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/images/hero-banner.png",
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const desc = description || DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description: desc,
    keywords: [
      "mehndi artist",
      "bridal mehndi",
      "henna artist",
      "painting artist",
      "portrait sketch artist",
      "canvas painting",
      "acrylic painting",
      "charcoal sketch",
      "pencil sketch",
      "digital artwork",
      "rangoli artist",
      "wedding rangoli",
      "festival rangoli",
      "floral rangoli",
      "traditional rangoli",
      "custom rangoli design",
      "event decoration",
      "handmade rangoli art",
      "art and craft",
      "handmade gifts",
      "dress designing",
      "custom artwork",
      "home decoration",
      "handmade home decor",
      "wall decor",
      "festival decorations",
      "creative studio",
      "custom orders",
      "Indian wedding",
      "Triveni Art House",
      "handcrafted",
      "women-led business",
    ],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      title: fullTitle,
      description: desc,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [`${SITE_URL}${image}`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateSchemaMarkup() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    telephone: "+919953889028",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    image: `${SITE_URL}/images/hero-banner.png`,
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://instagram.com/triveni.arthouse",
      "https://facebook.com/triveniarthhouse",
      "https://youtube.com/@triveniarthhouse",
    ],
  };
}
