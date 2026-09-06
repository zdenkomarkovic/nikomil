import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { GALLERY } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const galleryImages = GALLERY.map((g) => `${SITE_URL}${g.src}`);

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: galleryImages.slice(0, 12),
    },
    {
      url: `${SITE_URL}/galerija`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: galleryImages,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
