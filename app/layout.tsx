import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Metalne žardinjere po meri — NIKOMIL, Beograd",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "metalne žardinjere",
    "žardinjere po meri",
    "žardinjere Beograd",
    "žardinjere od lima",
    "žardinjere za terasu",
    "žardinjere za dvorište",
    "žardinjere za kancelariju",
    "plastifikacija žardinjera",
    "RAL karta",
    "izrada žardinjera",
    "NIKOMIL",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Metalne žardinjere po meri — NIKOMIL, Beograd",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/galerija/metalna-zardinjera-antracit-terasa-restoran.jpg",
        width: 1600,
        height: 740,
        alt: "Metalna žardinjera po meri u antracit boji, NIKOMIL",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: "NIKOMIL",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: CONTACT.phoneHref,
  email: CONTACT.email,
  foundingDate: String(CONTACT.founded),
  image: `${SITE_URL}/galerija/metalna-zardinjera-antracit-terasa-restoran.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.street,
    addressLocality: `${CONTACT.area}, ${CONTACT.city}`,
    postalCode: CONTACT.postalCode,
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CONTACT.geo.lat,
    longitude: CONTACT.geo.lng,
  },
  areaServed: [
    { "@type": "City", name: "Beograd" },
    { "@type": "Country", name: "Srbija" },
  ],
  knowsAbout: [
    "Metalne žardinjere po meri",
    "Plastifikacija i farbanje lima",
    "Mašinska obrada metala",
    "Maske za klima uređaje",
    "Metalne ograde i kapije",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: "Metalne žardinjere po meri",
      material: "Čelični lim 2 mm",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${inter.variable} ${archivo.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#sadrzaj"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Preskoči na sadržaj
        </a>
        <Header />
        <main id="sadrzaj">{children}</main>
        <Footer />
        <JsonLd data={orgLd} />
      </body>
    </html>
  );
}
