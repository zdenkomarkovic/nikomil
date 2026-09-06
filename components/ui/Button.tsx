import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-moss-dark shadow-card hover:shadow-lift hover:-translate-y-0.5",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ariaLabel,
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const external = /^(https?:|tel:|mailto:)/.test(href);

  if (external) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}
