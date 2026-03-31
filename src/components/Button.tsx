import Link from "next/link";
import type { ComponentProps } from "react";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-[15px] font-semibold tracking-tight transition duration-200 ease-out will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-px hover:-translate-y-[2px]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white shadow-md ring-1 ring-blue-700/15 hover:bg-blue-700 hover:shadow-lg",
  secondary:
    "border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:shadow-card",
  ghost: "text-slate-900 hover:bg-slate-100"
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  return (
    <Link className={clsx(base, variants[variant], className)} {...props} />
  );
}
