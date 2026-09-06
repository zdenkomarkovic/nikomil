import { buildMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Stranica nije pronađena",
  noIndex: true,
});

export default function NotFoundPage() {
  return (
    <div className="u-container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl font-extrabold text-ink">404</p>
      <h1 className="mt-4 text-2xl text-ink">Stranica nije pronađena</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        Link je možda zastareo ili je stranica premeštena. Vratite se na početnu ili
        pogledajte galeriju realizovanih žardinjera.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Početna</Button>
        <Button href="/galerija" variant="outline">
          Galerija
        </Button>
      </div>
    </div>
  );
}
