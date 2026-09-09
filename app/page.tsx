import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT, SITE_URL } from "@/lib/constants";
import {
  FAQ,
  GALLERY,
  HERO_IMAGE,
  HIGHLIGHTS,
  MATERIAL_POINTS,
  OTHER_PRODUCTS,
  PROCESS,
  PRODUCTION_IMAGE,
  RAL_COLORS,
  SERVICES,
  SHAPES,
  USE_CASES,
  WHY_US,
} from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Faq } from "@/components/sections/Faq";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCta } from "@/components/sections/ContactCta";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "Metalne žardinjere po meri u Beogradu",
  description:
    "Izrada metalnih žardinjera po meri od čeličnog lima 2 mm, plastifikacija i farbanje po RAL karti. Za terase, dvorišta i enterijere. Dostava i postavljanje — Beograd i cela Srbija.",
  url: "/",
});

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Metalne žardinjere po meri",
  description:
    "Žardinjere od čeličnog lima debljine 2 mm, plastificirane i farbane po RAL karti, izrađene po meri za spoljašnji i unutrašnji prostor.",
  brand: { "@type": "Brand", name: "NIKOMIL" },
  manufacturer: { "@id": `${SITE_URL}/#business` },
  category: "Metalne žardinjere",
  material: "Čelični lim 2 mm",
  image: [
    `${SITE_URL}/galerija/metalne-zardinjere-antracit-dvoriste-ograda.jpg`,
    `${SITE_URL}/galerija/bela-metalna-zardinjera-kancelarija.jpg`,
    `${SITE_URL}/galerija/metalna-zardinjera-po-meri-terasa-kafic.jpg`,
  ],
  areaServed: "Srbija",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "RSD",
    price: "0",
    priceSpecification: {
      "@type": "PriceSpecification",
      description: "Cena se formira po meri — na osnovu dimenzija, oblika i boje.",
    },
    seller: { "@type": "Organization", name: "NIKOMIL" },
  },
};

const servicesLd = SERVICES.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.title,
  description: s.short,
  provider: { "@type": "Organization", name: "NIKOMIL", url: SITE_URL },
  areaServed: { "@type": "Country", name: "Srbija" },
  serviceType: "Metalne žardinjere",
}));

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  izrada: {
    src: "/galerija/metalne-zardinjere-antracit-dvoriste-ograda.jpg",
    alt: "Gotove metalne žardinjere od lima u antracit boji po RAL karti",
  },
  teren: {
    src: "/galerija/montaza-zardinjera-na-licu-mesta.jpg",
    alt: "Montaža žardinjera i sadnja zelenila na licu mesta",
  },
  dostava: {
    src: "/galerija/crne-zardinjere-spremne-za-isporuku.jpg",
    alt: "Metalne žardinjere zapakovane i spremne za isporuku",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={productLd} />
      {servicesLd.map((ld) => (
        <JsonLd key={ld.name} data={ld} />
      ))}

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden  text-paper">
        <Image
          src={HERO_IMAGE}
          alt="Metalna žardinjera po meri u antracit boji, bašta restorana u Beogradu"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-70"
        />
        <div className="-z-10 absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/60" />

        <div className="u-container u-reveal py-20 sm:py-28 lg:py-36">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-paper/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            Sremčica, Beograd · od 2015.
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Metalne žardinjere po meri - Nikomil Beograd
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-paper sm:text-xl">
            Projektujemo i izrađujemo žardinjere od čeličnog lima debljine 2 mm — u dimenziji,
            obliku i boji po RAL karti koje tačno odgovaraju vašem prostoru. Za dvorišta, terase,
            krovne bašte, lokale i enterijere.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/kontakt" size="lg">
              Zatražite ponudu
            </Button>
            <Button
              href={`tel:${CONTACT.phoneHref}`}
              size="lg"
              variant="outline"
              className="border-paper/50 text-paper hover:bg-paper hover:text-ink"
            >
              {CONTACT.phoneDisplay}
            </Button>
          </div>

          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.value} className="border-l border-paper/40 pl-4">
                <dt className="font-display text-2xl font-bold text-paper">{h.value}</dt>
                <dd className="mt-1 text-sm text-paper">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── O nama / proizvodnja ─────────────────────────────────────────── */}
      <section id="zardinjere" className="scroll-mt-24 py-16 sm:py-24">
        <div className="u-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-paper-dim">
            <Image
              src={PRODUCTION_IMAGE}
              alt="Izrada metalnih žardinjera od pocinkovanog lima u radionici NIKOMIL"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Naša proizvodnja"
              title="Izrada metalnih žardinjera po meri"
              intro="NIKOMIL je kompanija iz Sremčice (Beograd), osnovana 2015. godine i specijalizovana za mašinsku obradu metala. Glavna delatnost nam je izrada žardinjera različitih dimenzija, oblika i boja."
            />
            <div className="u-prose mt-5 text-ink-muted">
              <p>
                Žardinjere izrađujemo od čeličnog lima debljine 2 mm, što obezbeđuje izuzetnu
                čvrstinu, stabilnost i otpornost na sve vremenske uslove. Zaštitni sloj i završna
                obrada — plastifikacija i farbanje po RAL karti — daju zaštitu od korozije i rđe, uz
                elegantan i moderan izgled koji se lako uklapa u svaki prostor.
              </p>
              <p>
                Kombinacijom iskustva, precizne obrade i modernih tehnika isporučujemo proizvode
                koji spajaju funkcionalnost, dugotrajnost i dizajn.
              </p>
            </div>
            <ul className="mt-7 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {MATERIAL_POINTS.map((m) => (
                <li key={m.title} className="flex items-start gap-3">
                  <CheckIcon />
                  <span>
                    <span className="font-display text-sm font-semibold text-ink">{m.title}</span>
                    <span className="mt-0.5 block text-sm text-ink-muted">{m.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Oblici / opcije ──────────────────────────────────────────────── */}
      <section className="bg-paper-dim py-16 sm:py-24">
        <div className="u-container">
          <SectionHeading
            eyebrow="Personalizacija"
            title="Oblik, dimenzija i boja — po vašoj želji"
            intro="Ne biramo iz kataloga gotovih mera. Svaku žardinjeru prilagođavamo prostoru i nameni."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SHAPES.map((shape) => (
              <div
                key={shape.name}
                className="rounded-2xl border border-line bg-paper p-6 shadow-card"
              >
                <h3 className="font-display text-lg font-semibold text-ink">{shape.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{shape.description}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-moss/25 bg-moss-tint p-6">
              <h3 className="font-display text-lg font-semibold text-moss-dark">
                Dimenzije bez ograničenja
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                Od manjih dekorativnih žardinjera do velikih modela za drveće u saksiji i duge
                pregrade — visinu i dužinu prilagođavamo milimetarski.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-display text-xl font-semibold text-ink">Boje po RAL karti</h3>
            <p className="mt-2 max-w-2xl text-ink-muted">
              Boju birate slobodno — od diskretnih tonova koji se stapaju sa prostorom do izražene
              boje vašeg brenda, u mat ili sjajnoj završnici.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {RAL_COLORS.map((c) => (
                <div key={c.name} className="rounded-2xl border border-line bg-paper p-5">
                  <h4 className="font-display text-base font-semibold text-ink">{c.name}</h4>
                  <p className="mt-1.5 text-sm text-ink-muted">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Primena ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="u-container">
          <SectionHeading
            eyebrow="Primena"
            title="Gde se žardinjere najčešće postavljaju"
            intro="Ista izrada, prilagođena vrlo različitim prostorima."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((u) => (
              <div key={u.title} className="rounded-2xl border border-line bg-paper p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{u.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vaša ideja ──────────────────────────────────────────────────── */}
      <section className="border-y border-moss/15 bg-moss-tint py-14 sm:py-20">
        <div className="u-container max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-moss-dark">
            Po meri, bez ograničenja
          </p>
          <h2 className="text-3xl text-ink sm:text-4xl">Vi imate ideju — mi je pravimo</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Skica na papiru, fotografija sa interneta ili samo slika u glavi — dovoljno je
            da krenemo. Žardinjeru izrađujemo tačno po vašoj zamisli: dimenzije, oblik i
            boja po RAL karti. Ako se pravi od lima, napravićemo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/kontakt" size="lg">
              Pošaljite nam ideju
            </Button>
            <Button
              href={`tel:${CONTACT.phoneHref}`}
              size="lg"
              variant="outline"
            >
              {CONTACT.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      {/* ── Proces izrade ────────────────────────────────────────────────── */}
      <section className="bg-paper-dim py-16 sm:py-24">
        <div className="u-container">
          <SectionHeading
            eyebrow="Kako nastaje žardinjera"
            title="Šest koraka do gotovog proizvoda"
            intro="Ceo proces obavljamo u sopstvenoj proizvodnji — bez posrednika i bez kompromisa na kvalitetu."
          />
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p) => (
              <li key={p.step} className="border-t border-ink pt-5">
                <span className="font-display text-sm font-bold tracking-widest text-moss-dark">
                  {p.step}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-ink-muted">{p.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Usluge ───────────────────────────────────────────────────────── */}
      <section id="usluge" className="scroll-mt-24 bg-ink py-16 text-paper sm:py-24">
        <div className="u-container">
          <SectionHeading
            eyebrow="Usluge"
            title={<span className="text-paper">Kompletno rešenje za žardinjere</span>}
            intro={
              <span className="text-paper/75">
                Od merenja i proizvodnje, preko dostave, do postavljanja i dekoracije sadnim
                materijalom na licu mesta.
              </span>
            }
          />

          <div className="mt-14 space-y-14 sm:space-y-20">
            {SERVICES.map((s, i) => {
              const img = SERVICE_IMAGES[s.slug];
              const flip = i % 2 === 1;
              return (
                <article key={s.slug} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={flip ? "lg:order-2" : undefined}>
                    <span className="font-display text-sm font-bold text-moss">0{i + 1}</span>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-paper sm:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-paper/75">{s.short}</p>
                    <ul className="mt-5 space-y-2.5">
                      {s.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-paper/80">
                          <span
                            className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-moss text-paper"
                            aria-hidden="true"
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M20 6L9 17l-5-5"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {img ? (
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink-soft ${
                        flip ? "lg:order-1" : ""
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 1024px) 45vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ostali proizvodi ─────────────────────────────────────────────── */}
      <section id="ostali-proizvodi" className="scroll-mt-24 py-16 sm:py-24">
        <div className="u-container">
          <SectionHeading
            eyebrow="Ostali proizvodi od lima"
            title="Više od žardinjera"
            intro="Pored žardinjera, izrađujemo i druge proizvode od lima koji kombinuju praktičnost i moderan dizajn."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OTHER_PRODUCTS.map((p) => (
              <div key={p.name} className="rounded-2xl border border-line bg-paper p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galerija ─────────────────────────────────────────────────────── */}
      <section className="bg-paper-dim py-16 sm:py-24">
        <div className="u-container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Realizovani projekti"
              title="Iz naše galerije"
              intro="Terase, krovne bašte, kancelarije, lokali i dvorišta širom Beograda."
            />
            <Button href="/galerija" variant="outline">
              Cela galerija
            </Button>
          </div>
          <div className="mt-12">
            <GalleryGrid limit={8} />
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <Button href="/galerija" size="lg" className="w-full sm:w-auto">
              Pogledajte svih {GALLERY.length} fotografija
              <span aria-hidden="true">→</span>
            </Button>
            <p className="text-sm text-ink-muted">
              Prikazano je samo {8} od {GALLERY.length} radova iz naše galerije.
            </p>
          </div>
        </div>
      </section>

      {/* ── Zašto NIKOMIL ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="u-container">
          <SectionHeading eyebrow="Zašto NIKOMIL" title="Razlozi zbog kojih nam kupci veruju" />
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w) => (
              <div key={w.title}>
                <h3 className="flex items-start gap-2 font-display text-lg font-semibold text-ink">
                  <CheckIcon />
                  {w.title}
                </h3>
                <p className="mt-2 pl-7 text-ink-muted">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Utisci klijenata ─────────────────────────────────────────────── */}
      <Testimonials />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="u-container max-w-3xl">
          <SectionHeading eyebrow="Česta pitanja" title="Sve što kupci najčešće pitaju" />
          <div className="mt-10">
            <Faq items={FAQ} />
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <ContactCta />
      </div>
    </>
  );
}

function CheckIcon() {
  return (
    <span
      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-moss text-paper"
      aria-hidden="true"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 6L9 17l-5-5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
