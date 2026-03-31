import type { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

export type FeatureIconTone = "accent" | "ocean" | "neutral";

const toneClass: Record<FeatureIconTone, string> = {
  accent:
    "bg-gradient-to-br from-blue-50 to-white text-blue-700 ring-blue-200/90",
  ocean:
    "bg-gradient-to-br from-cyan-50 to-white text-cyan-700 ring-cyan-200/90",
  neutral:
    "bg-gradient-to-br from-slate-100 to-white text-slate-800 ring-slate-300/90"
};

export function FeatureIcon({
  icon: Icon,
  tone = "accent",
  className
}: {
  icon: LucideIcon;
  tone?: FeatureIconTone;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex size-14 shrink-0 items-center justify-center rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] ring-1",
        toneClass[tone],
        className
      )}
    >
      <Icon className="size-7" strokeWidth={1.65} aria-hidden />
    </span>
  );
}
