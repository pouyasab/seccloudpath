"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { withLocale, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

type NavLabels = {
  home: string;
  services: string;
  about: string;
  contact: string;
};

function stripLocale(pathname: string) {
  return pathname.replace(/^\/(en|no)(\/|$)/, "/");
}

export function Navbar({
  locale,
  labels
}: {
  locale: Locale;
  labels: NavLabels;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const basePath = stripLocale(pathname || "/");
  const otherLocale: Locale = locale === "no" ? "en" : "no";

  const items = [
    { href: "/", label: labels.home },
    { href: "/services", label: labels.services },
    { href: "/about", label: labels.about },
    { href: "/contact", label: labels.contact }
  ] as const;

  const contactHref = withLocale(locale, "/contact");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
        <Link
          href={withLocale(locale, "/")}
          className="inline-flex shrink-0 items-center rounded-lg px-1 py-1 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/seccloudpath-logo.png"
            alt={`${site.name} logo`}
            width={480}
            height={180}
            priority
            className="h-20 w-auto md:h-20"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <nav className="flex items-center gap-0.5" aria-label="Main">
            {items.map((item) => {
              const isActive = basePath === item.href;
              return (
                <Link
                  key={item.href}
                  href={withLocale(locale, item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative rounded-lg px-3.5 py-2 text-sm font-medium tracking-tight transition-colors duration-200",
                    isActive
                      ? "text-slate-900"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  ].join(" ")}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive ? (
                    <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.35)]" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="ml-4 flex items-center gap-2 border-l border-slate-200 pl-4">
            <Link
              href={withLocale(otherLocale, basePath)}
              className="rounded-lg px-2.5 py-2 text-xs font-bold tracking-wider text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              aria-label={
                otherLocale === "no" ? "Bytt til norsk" : "Switch to English"
              }
            >
              {otherLocale.toUpperCase()}
            </Link>

            <Link
              href={contactHref}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md ring-1 ring-blue-700/20 transition duration-200 hover:-translate-y-px hover:bg-blue-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              {labels.contact}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={withLocale(otherLocale, basePath)}
            className="rounded-lg px-2.5 py-2 text-xs font-bold tracking-wider text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label={
              otherLocale === "no" ? "Bytt til norsk" : "Switch to English"
            }
          >
            {otherLocale.toUpperCase()}
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls={panelId}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
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
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div id={panelId} className={open ? "md:hidden" : "hidden"}>
        <div className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
            <nav aria-label="Mobile" className="grid gap-1">
              {items.map((item) => {
                const isActive = basePath === item.href;
                return (
                  <Link
                    key={item.href}
                    href={withLocale(locale, item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "rounded-xl px-4 py-3 text-[15px] font-medium tracking-tight transition-colors",
                      isActive
                        ? "bg-blue-50 text-slate-900 ring-1 ring-blue-100"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href={contactHref}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md ring-1 ring-blue-700/20 transition hover:bg-blue-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                {labels.contact}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
