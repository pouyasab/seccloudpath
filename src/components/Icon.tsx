import type { ReactNode } from "react";
import { clsx } from "clsx";

type IconSize = "md" | "lg" | "xl";

export function Icon({
  children,
  className,
  size = "md"
}: {
  children: ReactNode;
  className?: string;
  size?: IconSize;
}) {
  const sizes =
    size === "xl"
      ? "size-14 rounded-2xl [&>svg]:size-7"
      : size === "lg"
        ? "size-12 rounded-2xl [&>svg]:size-6"
        : "size-10 rounded-xl [&>svg]:size-5";

  return (
    <span
      className={clsx(
        "inline-flex shrink-0 items-center justify-center bg-slate-50 text-blue-700 ring-1 ring-slate-200",
        sizes,
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </span>
  );
}
