import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict mode za React - hvata potencijalne probleme ranije
  reactStrictMode: true,

  // Optimizacija slika - dodaj domene po potrebi
  images: {
    remotePatterns: [
      // Primer:
      // {
      //   protocol: "https",
      //   hostname: "example.com",
      // },
    ],
  },

  async redirects() {
    return [
      // Kanonski domen: www.nikomilbg.com -> nikomilbg.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nikomilbg.com" }],
        destination: "https://nikomilbg.com/:path*",
        permanent: true,
      },
      // Stare zasebne stranice su spojene sa početnom
      {
        source: "/zardinjere-po-meri",
        destination: "/#zardinjere",
        permanent: true,
      },
      {
        source: "/usluge",
        destination: "/#usluge",
        permanent: true,
      },
    ];
  },

  // Headers za bolju sigurnost
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
