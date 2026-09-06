import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-moss-dark">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="text-3xl text-ink sm:text-4xl">{title}</Tag>
      {intro ? (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{intro}</p>
      ) : null}
    </div>
  );
}
