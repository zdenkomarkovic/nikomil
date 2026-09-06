import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  /** Apsolutna URL slike za OG (ako nije navedena, koristi se app/opengraph-image.jpg) */
  image?: string;
  /** Canonical URL - ako nije naveden, koristi SITE_URL */
  url?: string;
  /** Da li da noindex ova stranica */
  noIndex?: boolean;
  /** Tip stranice za OG */
  type?: "website" | "article";
  /** Datum objave (za blog postove) */
  publishedTime?: string;
}

/**
 * Helper za generisanje Next.js Metadata objekta.
 * Koristiti u svakom page.tsx fajlu.
 *
 * OG slika se podrazumevano preuzima iz app/opengraph-image.jpg (Next konvencija);
 * prosledi `image` samo ako želiš drugačiju sliku za konkretnu stranicu.
 *
 * @example
 * export const metadata = buildMetadata({
 *   title: "O nama",
 *   description: "Kratki opis stranice",
 * });
 */
export function buildMetadata({
  title,
  description,
  image,
  url,
  noIndex = false,
  type = "website",
  publishedTime,
}: BuildMetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = url ?? "/";

  return {
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "sr_RS",
      type,
      ...(image && { images: [{ url: image, width: 1200, height: 630, alt: fullTitle }] }),
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image && { images: [image] }),
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
