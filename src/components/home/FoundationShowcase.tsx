"use client";

import { Building2, Globe, LayoutGrid, ShieldCheck } from "lucide-react";
import { clsx } from "clsx";
import { ScrollReveal } from "@/components/ScrollReveal";

const FOUNDATION_ICONS = [Globe, Building2, LayoutGrid, ShieldCheck] as const;

const iconStyles = [
  "bg-gradient-to-br from-blue-500/12 to-cyan-400/10 text-blue-700 ring-blue-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]",
  "bg-gradient-to-br from-slate-500/12 to-slate-400/8 text-slate-800 ring-slate-300/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]",
  "bg-gradient-to-br from-indigo-500/14 to-blue-500/10 text-indigo-800 ring-indigo-200/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]",
  "bg-gradient-to-br from-emerald-500/12 to-teal-400/10 text-emerald-900 ring-emerald-200/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
];

export function FoundationShowcase({
  title,
  body,
  points,
  stepLabels
}: {
  title: string;
  body: string;
  points: string[];
  stepLabels: string[];
}) {
  return (
    <div className="relative">
      <ScrollReveal>
        <div className="mb-10 max-w-2xl">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-700 sm:text-base">
            {body}
          </p>
        </div>
      </ScrollReveal>

      {/* Layered shell: depth without heavy color */}
      <ScrollReveal delay={60}>
        <div className="relative mb-16">
          <div
            className="pointer-events-none absolute -inset-px rounded-[1.35rem] bg-gradient-to-br from-blue-200/50 via-slate-200/40 to-blue-100/30 opacity-80 blur-[1px]"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[1.25rem] border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/90 to-blue-50/50 p-4 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset] sm:p-5 md:p-6">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"
              aria-hidden
            />

            <div className="relative grid gap-3 sm:grid-cols-2 sm:gap-4">
              {points.map((point, i) => {
                const Icon = FOUNDATION_ICONS[i] ?? Globe;
                return (
                  <ScrollReveal key={`${point}-${i}`} delay={100 + i * 70}>
                    <div
                      className={clsx(
                        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/90 bg-white/85 p-5 shadow-md backdrop-blur-[2px]",
                        "transition duration-300 ease-out",
                        "hover:-translate-y-1 hover:border-blue-200/80 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5",
                        "focus-within:ring-2 focus-within:ring-blue-500/20"
                      )}
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, transparent 50%)"
                        }}
                      />
                      <div className="relative flex items-start gap-4">
                        <span
                          className={clsx(
                            "inline-flex size-12 shrink-0 items-center justify-center rounded-2xl ring-1",
                            iconStyles[i] ?? iconStyles[0]
                          )}
                        >
                          <Icon className="size-6" strokeWidth={1.65} aria-hidden />
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className="mb-1.5 block text-sm font-bold text-black">
                            {stepLabels[i] ?? `Steg ${i + 1}`}
                          </span>
                          <p className="text-sm font-medium leading-snug text-slate-800">
                            {point}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
