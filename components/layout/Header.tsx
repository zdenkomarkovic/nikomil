"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/constants";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-paper/95 backdrop-blur"
          : "border-b border-transparent bg-paper/0"
      )}
    >
      <div className="u-container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label="NIKOMIL — početna">
          <Image
            src="/logo.png"
            alt="NIKOMIL — metalne žardinjere po meri"
            width={705}
            height={701}
            priority
            className="h-20 w-20 rounded-md object-cover"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-extrabold tracking-[0.12em] text-ink">
              NIKOMIL
            </span>
            <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
              Metalne žardinjere po meri
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Glavna navigacija">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active ? "text-ink" : "text-ink-muted hover:text-ink"
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-moss-dark sm:inline-flex"
          >
            <PhoneIcon />
            {CONTACT.phoneDisplay}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink md:hidden"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper md:hidden">
          <nav className="u-container flex flex-col py-3" aria-label="Mobilna navigacija">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-ink/5"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-base font-semibold text-paper"
            >
              <PhoneIcon />
              {CONTACT.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1A18 18 0 0 1 2 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1L6.6 10.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
