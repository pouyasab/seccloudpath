import type { ReactNode } from "react";
import { clsx } from "clsx";
import { Container } from "@/components/Container";

type SectionTone = "default" | "muted" | "wash";

/** Alternating page rhythm: white → slate-100 (#f1f5f9) → slate-50 */
const toneClass: Record<SectionTone, string> = {
  default: "bg-white",
  muted: "bg-slate-100",
  wash: "bg-slate-50"
};

export function Section({
  children,
  tone = "default",
  className,
  divider = false,
  pad = "lg"
}: {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
  /** Soft top separator (skip on first section of a page) */
  divider?: boolean;
  pad?: "md" | "lg" | "xl";
}) {
  const padClass =
    pad === "xl"
      ? "py-24 sm:py-28"
      : pad === "md"
        ? "py-16 sm:py-20"
        : "py-20 sm:py-24";

  return (
    <section className={clsx("relative", toneClass[tone], padClass, className)}>
      {divider ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
          aria-hidden
        />
      ) : null}
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="scp-badge mb-4 inline-flex">{eyebrow}</p>
      ) : null}
      <h2 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-700 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function SectionContainer({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return <Container className={className}>{children}</Container>;
}
