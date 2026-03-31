import type { ReactNode } from "react";
import { clsx } from "clsx";

export type CardVariant = "default" | "elevated" | "gradientBorder";

const variantClass: Record<CardVariant, string> = {
  default:
    "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:shadow-card-lg hover:border-slate-300/90",
  elevated:
    "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card-lg transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lift hover:border-slate-300/80",
  gradientBorder:
    "group rounded-[1.15rem] border border-blue-200/80 bg-gradient-to-br from-blue-100/50 via-slate-100/90 to-slate-200/50 p-px shadow-card transition duration-300 ease-out hover:-translate-y-1 hover:shadow-card-lg"
};

export function Card({
  title,
  children,
  className,
  variant = "default",
  padding = "md"
}: {
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  padding?: "md" | "lg";
}) {
  const innerPadding = padding === "lg" ? "p-7 sm:p-8" : "p-6";

  const inner = (
    <>
      {title ? (
        <h3 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
          {title}
        </h3>
      ) : null}
      <div
        className={clsx(
          title ? "mt-2" : "",
          "text-sm leading-relaxed text-slate-700"
        )}
      >
        {children}
      </div>
    </>
  );

  if (variant === "gradientBorder") {
    return (
      <div className={clsx(variantClass.gradientBorder, className)}>
        <div
          className={clsx(
            "relative z-10 rounded-[1.05rem] border border-slate-100 bg-white shadow-card-lg",
            innerPadding
          )}
        >
          {inner}
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(variantClass[variant], innerPadding, className)}>
      <div className="pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 -top-px z-10 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
      <div className="relative z-10">{inner}</div>
    </div>
  );
}
