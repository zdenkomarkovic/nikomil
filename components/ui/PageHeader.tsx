import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  crumbs?: Crumb[];
}) {
  return (
    <header className="border-b border-line bg-paper-dim">
      <div className="u-container py-14 sm:py-20">
        {crumbs && crumbs.length > 0 ? (
          <nav aria-label="Putanja" className="mb-5 text-sm text-ink-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-ink">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ink">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 ? <span aria-hidden="true">/</span> : null}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-moss-dark">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-extrabold text-ink sm:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-lg text-ink-muted">{intro}</p>
        ) : null}
      </div>
    </header>
  );
}
