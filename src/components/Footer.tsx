import Link from "next/link";
import { Container } from "@/components/Container";
import { type Locale, withLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

type FooterLabels = {
  pagesTitle: string;
  contactTitle: string;
  getInTouch: string;
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
};

export function Footer({
  locale,
  labels
}: {
  locale: Locale;
  labels: FooterLabels;
}) {
  const year = new Date().getFullYear();

  const items = [
    { href: "/", label: labels.nav.home },
    { href: "/services", label: labels.nav.services },
    { href: "/about", label: labels.nav.about },
    { href: "/contact", label: labels.nav.contact }
  ] as const;

  return (
    <footer className="relative border-t border-slate-200 bg-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
      <Container className="py-14">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="text-sm font-semibold tracking-tight text-slate-900">
              {site.name}
            </div>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-700">
              IT advisory focused on security, structure, and long-term clarity.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              {labels.pagesTitle}
            </div>
            <nav className="mt-4 grid gap-1" aria-label="Footer">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={withLocale(locale, item.href)}
                  className="w-fit rounded-lg px-2 py-1.5 text-sm text-slate-700 transition duration-200 ease-out hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              {labels.contactTitle}
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <div>
                <span className="font-medium text-slate-900">Email: </span>
                <Link
                  href={`mailto:${site.email}`}
                  className="underline-offset-4 transition hover:text-blue-700 hover:underline"
                >
                  {site.email}
                </Link>
              </div>
              <div>
                <span className="font-medium text-slate-900">Phone: </span>
                <span>{site.phone}</span>
              </div>
              <div>
                <span className="font-medium text-slate-900">Location: </span>
                <span>Norway</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-600">
            © {year} {site.name}. All rights reserved.
          </div>
          <div className="text-sm text-slate-600">
            <Link
              href={withLocale(locale, "/contact")}
              className="rounded-lg px-2 py-1 font-medium text-slate-800 underline-offset-4 transition hover:bg-white hover:text-slate-900 hover:underline"
            >
              {labels.getInTouch}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
