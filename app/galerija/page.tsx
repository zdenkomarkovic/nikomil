import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { GALLERY } from "@/lib/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactCta } from "@/components/sections/ContactCta";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { JsonLd } from "@/components/seo/JsonLd";

const PATH = "/galerija";

export const metadata = buildMetadata({
  title: "Galerija — metalne žardinjere u realnim prostorima",
  description:
    "Fotografije realizovanih projekata NIKOMIL: metalne žardinjere po meri na terasama, krovnim baštama, u kancelarijama, lokalima i dvorištima širom Beograda.",
  url: `${SITE_URL}${PATH}`,
});

const galleryLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Galerija — NIKOMIL metalne žardinjere",
  url: `${SITE_URL}${PATH}`,
  image: GALLERY.slice(0, 12).map((g) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${g.src}`,
    caption: g.alt,
  })),
};

export default function GalerijaPage() {
  return (
    <>
      <JsonLd data={galleryLd} />

      <PageHeader
        eyebrow="Realizovani projekti"
        title="Galerija"
        crumbs={[{ label: "Početna", href: "/" }, { label: "Galerija" }]}
        intro="Metalne žardinjere po meri u stvarnim prostorima — terase, krovne bašte, kancelarije, ugostiteljski objekti i dvorišta. Kliknite na fotografiju za uvećani prikaz."
      />

      <section className="u-container py-14 sm:py-20">
        <GalleryGrid />
      </section>

      <div className="pb-16 sm:pb-24">
        <ContactCta title="Sviđa vam se neko rešenje?" text="Pošaljite nam fotografiju prostora i mere — predlažemo žardinjeru i dajemo cenu." />
      </div>
    </>
  );
}
