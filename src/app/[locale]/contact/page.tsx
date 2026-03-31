import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getMessages, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return {
    title: messages.nav.contact,
    alternates: { canonical: `/${locale}/contact` }
  };
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const m = await getMessages(locale);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-slate-100" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/12 blur-3xl" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          <ScrollReveal className="lg:col-span-5">
            <p className="scp-badge inline-flex">{m.contact.badge}</p>
            <h1 className="mt-5 text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {m.contact.title}
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
              {m.contact.intro}
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
                <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-200">
                  <Mail className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Email
                  </div>
                  <Link
                    href={`mailto:${site.email}`}
                    className="mt-0.5 block font-medium text-slate-900 underline-offset-4 transition hover:text-blue-700 hover:underline"
                  >
                    {site.email}
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
                <span className="mt-0.5 inline-flex size-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200">
                  <Phone className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Phone
                  </div>
                  <span className="mt-0.5 block font-medium text-slate-900">
                    {site.phone}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80} className="lg:col-span-7">
            <Card variant="gradientBorder" title={m.contact.cardTitle}>
              <ContactForm locale={locale} />
            </Card>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
