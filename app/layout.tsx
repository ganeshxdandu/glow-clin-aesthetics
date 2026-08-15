import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glow Clin Aesthetic — Skin & Aesthetic Clinic in Kumaraswamy Layout, Bengaluru",
  description:
    "Glow Clin Aesthetic is a professional skin care and aesthetic clinic in Kumaraswamy Layout, Bengaluru. Offering personalised laser, skin, hair, and wellness treatments. Book a consultation today.",
  keywords: [
    "skin clinic Kumaraswamy Layout",
    "aesthetic clinic Bengaluru",
    "skin care clinic Bengaluru",
    "aesthetic treatments Bengaluru",
    "laser treatment Bengaluru",
    "skin clinic near me Kumaraswamy Layout",
    "Glow Clin Aesthetic",
  ],
  authors: [{ name: "Glow Clin Aesthetic" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://glowclinaesthetic.in",
    title: "Glow Clin Aesthetic — Skin & Aesthetic Clinic in Bengaluru",
    description:
      "Personalised skin care and aesthetic treatments in Kumaraswamy Layout, Bengaluru. 4.9 ★ Google Rating.",
    siteName: "Glow Clin Aesthetic",
    images: [
      {
        url: "/images/reception.jpg",
        width: 1200,
        height: 630,
        alt: "Glow Clin Aesthetic reception — Kumaraswamy Layout, Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Clin Aesthetic — Skin & Aesthetic Clinic",
    description:
      "Personalised skin care and aesthetic clinic in Bengaluru. 4.9 ★ rating.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Glow Clin Aesthetic",
  description:
    "Skin care and aesthetic clinic in Kumaraswamy Layout, Bengaluru offering personalised laser, skin, hair, and wellness treatments.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "50 Feet Main Rd, 1st Stage",
    addressLocality: "Kumaraswamy Layout",
    addressRegion: "Karnataka",
    postalCode: "560078",
    addressCountry: "IN",
  },
  telephone: "+916363114579",
  url: "https://glowclinaesthetic.in",
  sameAs: ["https://www.instagram.com/glowclinaesthetic/"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "12",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
