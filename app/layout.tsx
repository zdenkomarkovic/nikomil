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

const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Metalne žardinjere po meri — NIKOMIL, Beograd",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "metalne žardinjere",
    "žardinjere po meri",
    "žardinjere Beograd",
    "žardinjere od lima",
    "žardinjere za terasu",
    "žardinjere za dvorište",
    "žardinjere za kancelariju",
    "žardinjere od pocinkovanog lima",
    "plastifikacija žardinjera",
    "RAL karta",
    "izrada žardinjera",
    "maske za klima uređaje",
    "NIKOMIL",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "/",
    siteName: SITE_NAME,
    title: "Metalne žardinjere po meri — NIKOMIL, Beograd",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Metalne žardinjere po meri — NIKOMIL, Beograd",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(GOOGLE_VERIFICATION && {
    verification: { google: GOOGLE_VERIFICATION },
  }),
};

const businessLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: "NIKOMIL",
  alternateName: "NIKOMIL žardinjere",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: CONTACT.phoneHref,
  email: CONTACT.email,
  foundingDate: String(CONTACT.founded),
  image: `${SITE_URL}/opengraph-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  priceRange: "$$",
  currenciesAccepted: "RSD",
  paymentAccepted: "Gotovina, uplata na račun",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Beograd" },
    { "@type": "Country", name: "Srbija" },
  ],
  knowsAbout: [
    "Metalne žardinjere po meri",
    "Žardinjere od pocinkovanog lima",
    "Plastifikacija i farbanje lima po RAL karti",
    "Mašinska obrada metala",
    "Maske za klima uređaje",
    "Metalne ograde i kapije",
    "Drvene žardinjere",
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

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "sr-RS",
  publisher: { "@id": `${SITE_URL}/#business` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr-RS" className={`${inter.variable} ${archivo.variable}`}>
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
        <JsonLd data={businessLd} />
        <JsonLd data={websiteLd} />
      </body>
    </html>
  );
}
