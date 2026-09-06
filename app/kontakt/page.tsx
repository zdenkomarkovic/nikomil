import { buildMetadata } from "@/lib/metadata";
import { CONTACT, SITE_URL } from "@/lib/constants";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";

const PATH = "/kontakt";

export const metadata = buildMetadata({
  title: "Kontakt — Sremčica, Beograd",
  description:
    "Kontaktirajte NIKOMIL za metalne žardinjere po meri. Telefon 060 39 76 642, email nikomilbg@gmail.com. Lukićeva 12, Sremčica, Beograd. Dostava širom Srbije.",
  url: `${SITE_URL}${PATH}`,
});

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: `${SITE_URL}${PATH}` },
  ],
};

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}${PATH}`,
  url: `${SITE_URL}${PATH}`,
  name: "Kontakt — NIKOMIL",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#business` },
};

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  `${CONTACT.street}, ${CONTACT.area}, ${CONTACT.city}`
)}&output=embed`;

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd} />
      <JsonLd data={contactLd} />

      <PageHeader
        eyebrow="Javite se"
        title="Kontakt"
        crumbs={[{ label: "Početna", href: "/" }, { label: "Kontakt" }]}
        intro="Recite nam dimenzije, željeni oblik i boju po RAL karti i gde se žardinjera postavlja — ponudu dobijate brzo, bez obaveze."
      />

      <section className="u-container py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-2xl text-ink">Podaci za kontakt</h2>
            <dl className="mt-6 space-y-5 text-ink-muted">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                  Telefon
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${CONTACT.phoneHref}`}
                    className="text-lg font-medium text-ink hover:text-moss-dark"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-lg font-medium text-ink hover:text-moss-dark"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                  Adresa
                </dt>
                <dd className="mt-1">
                  {CONTACT.street}, {CONTACT.area}
                  <br />
                  {CONTACT.postalCode} {CONTACT.city}, {CONTACT.country}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                  Radno vreme
                </dt>
                <dd className="mt-1">{CONTACT.hours}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-ink">
                  Područje rada
                </dt>
                <dd className="mt-1">
                  Beograd — dostava vlastitim vozilom. Cela Srbija — slanje kurirskom
                  službom (uobičajeno 2 dana).
                </dd>
              </div>
            </dl>

            <div className="mt-8 overflow-hidden rounded-2xl border border-line">
              <iframe
                src={mapEmbed}
                title="Lokacija — NIKOMIL, Lukićeva 12, Sremčica, Beograd"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-paper-dim p-6 sm:p-8">
            <h2 className="text-2xl text-ink">Pošaljite upit</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Popunite formu — odgovaramo najčešće istog radnog dana.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
