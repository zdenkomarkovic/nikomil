import Image from "next/image";
import { SITE_URL } from "@/lib/constants";
import { CLIENT_LOGOS, TESTIMONIALS } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = {
  eyebrow?: string;
  title?: string;
  intro?: string;
};

const reviewsLd = TESTIMONIALS.map((t) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  reviewBody: t.quote,
  author: { "@type": "Person", name: t.name },
  itemReviewed: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#business`,
    name: "NIKOMIL",
  },
  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  publisher: { "@type": "Organization", name: t.company },
}));

export function Testimonials({
  eyebrow = "Utisci klijenata",
  title = "Šta kažu firme sa kojima sarađujemo",
  intro = "Investitori, pejzažne kompanije i ugostitelji koji su svoje prostore opremili našim žardinjerama.",
}: Props) {
  return (
    <section className="bg-paper-dim py-16 sm:py-24">
      {reviewsLd.map((ld) => (
        <JsonLd key={ld.reviewBody.slice(0, 40)} data={ld} />
      ))}

      <div className="u-container">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-line bg-paper p-6 shadow-card sm:p-7"
            >
              <svg
                className="h-7 w-7 shrink-0 text-moss"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.5 6C6.46 7.6 4.5 10.6 4.5 14v4h5v-6H7c0-2.4 1.2-4.2 3.2-5.3L9.5 6Zm9 0c-3.04 1.6-5 4.6-5 8v4h5v-6h-2.5c0-2.4 1.2-4.2 3.2-5.3L18.5 6Z" />
              </svg>

              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-muted">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 border-t border-line pt-4">
                <span className="block font-display text-sm font-semibold text-ink">
                  {t.name}
                </span>
                <span className="mt-0.5 block text-sm text-ink-muted">{t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {CLIENT_LOGOS.length > 0 ? (
          <div className="mt-14 border-t border-line pt-10">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Radili smo za
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-16">
              {CLIENT_LOGOS.map((logo) => (
                <li key={logo.src}>
                  <Image
                    src={logo.src}
                    alt={`Logo — ${logo.name}`}
                    width={240}
                    height={240}
                    sizes="240px"
                    className="h-24 w-auto max-w-[240px] object-contain opacity-70 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0 sm:h-28"
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
