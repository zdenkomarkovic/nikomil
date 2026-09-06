// Globalne konstante sajta
// Ove vrednosti se koriste za SEO, metadata, structured data i UI.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "NIKOMIL";

export const SITE_DESCRIPTION =
  "NIKOMIL izrađuje metalne žardinjere po meri od čeličnog lima debljine 2 mm, " +
  "sa plastifikacijom i farbanjem u bilo kojoj nijansi RAL karte. Proizvodnja, " +
  "dostava i postavljanje na terenu — Beograd i cela Srbija.";

// ─── Kontakt / NAP (Name, Address, Phone) ─────────────────────────────────────
export const CONTACT = {
  company: "NIKOMIL",
  legalNote: "Mašinska obrada metala i izrada metalnih proizvoda",
  founded: 2015,
  street: "Lukićeva 12",
  area: "Sremčica",
  city: "Beograd",
  postalCode: "11253",
  country: "Srbija",
  phoneDisplay: "060 39 76 642",
  phoneHref: "+381603976642",
  email: "nikomilbg@gmail.com",
  // Približne koordinate naselja Sremčica (Beograd)
  geo: { lat: 44.7331, lng: 20.3669 },
  hours: "Ponedeljak–Subota: 08–18h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Luki%C4%87eva+12+Srem%C4%8Dica+Beograd",
} as const;

export const SOCIAL = {
  // Popuniti kada budu dostupni nalozi
  instagram: "",
  facebook: "",
} as const;
