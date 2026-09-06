import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

type Props = {
  title?: string;
  text?: string;
};

export function ContactCta({
  title = "Spremni za žardinjere po meri?",
  text = "Pošaljite dimenzije, željeni oblik i boju po RAL karti — predlažemo rešenje i cenu bez obaveze.",
}: Props) {
  return (
    <section className="u-container">
      <div className="overflow-hidden rounded-3xl bg-ink px-6 py-14 text-paper sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-paper/75">{text}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={`tel:${CONTACT.phoneHref}`}
              size="lg"
              className="bg-paper text-ink hover:bg-moss hover:text-paper"
            >
              Pozovite {CONTACT.phoneDisplay}
            </Button>
            <Button
              href="/kontakt"
              size="lg"
              variant="outline"
              className="border-paper/30 text-paper hover:bg-paper hover:text-ink"
            >
              Zatražite ponudu
            </Button>
          </div>
          <p className="mt-6 text-sm text-paper/60">
            Ili pišite na{" "}
            <a href={`mailto:${CONTACT.email}`} className="underline hover:text-paper">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
