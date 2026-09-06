"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  GALLERY,
  GALLERY_FILTERS,
  type GalleryCategory,
  type GalleryImage,
} from "@/lib/site";
import { cn } from "@/lib/utils";

type FilterKey = GalleryCategory | "sve";

export function GalleryGrid({
  initial = "sve",
  limit,
}: {
  initial?: FilterKey;
  limit?: number;
}) {
  const [filter, setFilter] = useState<FilterKey>(initial);
  const [active, setActive] = useState<number | null>(null);

  const fullList = useMemo(
    () =>
      filter === "sve" ? GALLERY : GALLERY.filter((g) => g.category === filter),
    [filter]
  );
  const items = useMemo(
    () => (limit ? fullList.slice(0, limit) : fullList),
    [fullList, limit]
  );

  // Kada je prikaz skraćen (početna strana) i ima još slika — dodaj "nastavi" slajd
  const showMore = limit != null && fullList.length > items.length;
  const remaining = fullList.length - items.length;
  const slideCount = items.length + (showMore ? 1 : 0);

  const go = useCallback(
    (dir: number) => {
      setActive((i) =>
        i === null ? i : (i + dir + slideCount) % slideCount
      );
    },
    [slideCount]
  );

  useEffect(() => {
    setActive(null);
  }, [filter]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, go]);

  // Swipe (mobilni)
  const touch = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (!t) return;
    touch.current = { x: t.clientX, y: t.clientY };
    swiped.current = false;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touch.current;
    const t = e.changedTouches[0];
    touch.current = null;
    if (!start || !t) return;
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      swiped.current = true;
      go(dx < 0 ? 1 : -1);
    }
  };

  const onOverlayClick = () => {
    if (swiped.current) {
      swiped.current = false;
      return;
    }
    setActive(null);
  };

  const onCtaSlide = active !== null && showMore && active === items.length;
  const current: GalleryImage | null =
    active === null || onCtaSlide ? null : items[active] ?? null;

  return (
    <div>
      {!limit ? (
        <div className="mb-8 flex flex-wrap gap-2">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                filter === f.key
                  ? "bg-ink text-paper"
                  : "border border-line text-ink-muted hover:border-ink hover:text-ink"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      ) : null}

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {items.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-xl bg-paper-dim"
              aria-label={`Uvećaj: ${img.alt}`}
            >
              <span className="block aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
            </button>
          </li>
        ))}
      </ul>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[70] flex select-none items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current ? current.alt : "Galerija"}
          onClick={onOverlayClick}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper/20 sm:right-4 sm:top-4"
            aria-label="Zatvori"
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {slideCount > 1 ? (
            <>
              <button
                type="button"
                className="absolute left-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper/20 sm:left-4 sm:h-12 sm:w-12"
                aria-label="Prethodna slika"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 5l-7 7 7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="absolute right-2 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper/20 sm:right-4 sm:h-12 sm:w-12"
                aria-label="Sledeća slika"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          ) : null}

          {onCtaSlide ? (
            <div
              className="mx-auto flex max-w-md flex-col items-center gap-5 px-6 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-display text-2xl font-semibold text-paper sm:text-3xl">
                To je samo deo naših radova
              </p>
              <p className="text-paper/70">
                U galeriji je još {remaining} fotografija — terase, krovne bašte,
                kancelarije, lokali i dvorišta.
              </p>
              <Link
                href="/galerija"
                className="inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-base font-medium text-ink transition-colors hover:bg-moss hover:text-paper"
              >
                Pogledaj sve slike
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : current ? (
            <figure
              className="relative w-full max-w-4xl px-10 sm:px-14"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative mx-auto aspect-[3/2] max-h-[78vh] w-full">
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="90vw"
                  className="rounded-xl object-contain"
                  priority
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-paper/80">
                {current.alt}
                {items.length > 1 ? (
                  <span className="mt-1 block text-xs text-paper/50">
                    {(active ?? 0) + 1} / {items.length}
                  </span>
                ) : null}
              </figcaption>
            </figure>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
