import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — metalne žardinjere po meri`,
    short_name: SITE_NAME,
    description:
      "Izrada metalnih žardinjera po meri od čeličnog lima 2 mm, plastifikacija i farbanje po RAL karti. Beograd i cela Srbija.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f4f0",
    theme_color: "#1b1e21",
    lang: "sr-RS",
    icons: [
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
      { src: "/logo.png", sizes: "192x192", type: "image/png" },
      { src: "/logo.png", sizes: "any", type: "image/png", purpose: "any" },
    ],
  };
}
