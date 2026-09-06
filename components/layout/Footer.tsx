import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { NAV } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-paper-dim">
      <div className="u-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NIKOMIL — metalne žardinjere po meri"
              width={705}
              height={701}
              className="h-48 w-48 rounded-md object-cover"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-extrabold tracking-[0.12em] text-ink">
                NIKOMIL
              </span>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
                Sremčica, Beograd
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
            Mašinska obrada metala i izrada metalnih žardinjera po meri od 2015. godine.
            Pravougaone, kvadratne, okrugle, ovalne i konusne žardinjere od čeličnog lima,
            plastificirane i farbane po RAL karti.
          </p>
        </div>

        <nav aria-label="Podnožje — navigacija">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">Stranice</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">Kontakt</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            <li>
              <a href={`tel:${CONTACT.phoneHref}`} className="hover:text-ink">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-ink">
                {CONTACT.email}
              </a>
            </li>
            <li>
              {CONTACT.street}, {CONTACT.area}
            </li>
            <li>
              {CONTACT.city}, {CONTACT.country}
            </li>
            <li>{CONTACT.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="u-container flex flex-col gap-2 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} NIKOMIL. Sva prava zadržana.</p>
          <p>
            Izrada sajta{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink hover:text-moss-dark"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
