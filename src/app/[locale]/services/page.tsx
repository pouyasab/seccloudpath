import type { Metadata } from "next";
import {
  Activity,
  Building2,
  LayoutGrid,
  MessagesSquare,
  Shield,
  Smartphone
} from "lucide-react";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { FeatureIcon } from "@/components/FeatureIcon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/Section";
import { getMessages, withLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return {
    title: messages.nav.services,
    alternates: { canonical: `/${locale}/services` }
  };
}

function ServiceCard({
  title,
  description,
  bullets,
  icon
}: {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
}) {
  return (
    <Card variant="elevated" className="h-full">
      <div className="flex items-start gap-4">
        {icon}
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{description}</p>
        </div>
      </div>

      <ul className="mt-5 grid gap-2 border-t border-slate-200 pt-5">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2.5 text-sm text-slate-700">
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600 shadow-[0_0_0_3px_rgba(37,99,235,0.15)]"
              aria-hidden
            />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const m = await getMessages(locale);

  const areasLabel =
    locale === "no" ? "Tjenesteområder" : "Service areas";

  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-12 sm:pb-10 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-slate-50 to-white" />
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl" />

        <Container>
          <div className="grid max-w-3xl gap-6">
            <ScrollReveal>
              <p className="scp-badge inline-flex">
                {m.services.badge}
              </p>
              <h1 className="mt-5 text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                {m.services.title}
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
                {m.services.intro}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <Section tone="muted" divider pad="lg">
        <Container>
          <ScrollReveal delay={80}>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              {areasLabel}
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <ServiceCard
                title={m.services.items.iamTitle}
                description={m.services.items.iamDesc}
                bullets={m.services.items.iamBullets}
                icon={<FeatureIcon icon={Shield} />}
              />
            </ScrollReveal>

            <ScrollReveal delay={60}>
              <ServiceCard
                title={m.services.items.mdmTitle}
                description={m.services.items.mdmDesc}
                bullets={m.services.items.mdmBullets}
                icon={<FeatureIcon icon={Smartphone} tone="ocean" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={30}>
              <ServiceCard
                title={m.services.items.msTitle}
                description={m.services.items.msDesc}
                bullets={m.services.items.msBullets}
                icon={<FeatureIcon icon={LayoutGrid} />}
              />
            </ScrollReveal>

            <ScrollReveal delay={50}>
              <ServiceCard
                title={m.services.items.collabTitle}
                description={m.services.items.collabDesc}
                bullets={m.services.items.collabBullets}
                icon={<FeatureIcon icon={MessagesSquare} tone="ocean" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={75}>
              <ServiceCard
                title={m.services.items.groundworkTitle}
                description={m.services.items.groundworkDesc}
                bullets={m.services.items.groundworkBullets}
                icon={<FeatureIcon icon={Building2} tone="ocean" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={90}>
              <ServiceCard
                title={m.services.items.securityMonitoringTitle}
                description={m.services.items.securityMonitoringDesc}
                bullets={m.services.items.securityMonitoringBullets}
                icon={<FeatureIcon icon={Activity} />}
              />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      <Section pad="md" divider tone="default">
        <Container>
          <ScrollReveal>
            <div className="scp-cta-strip relative grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="relative z-10 lg:col-span-8">
                <h2 className="text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
                  {m.services.ctaTitle}
                </h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-white/85 sm:text-base">
                  {m.services.ctaBody}
                </p>
              </div>
              <div className="relative z-10 lg:col-span-4 lg:flex lg:justify-end">
                <Button
                  href={withLocale(locale, "/contact")}
                  variant="secondary"
                  className="w-full border border-white/20 shadow-lg sm:w-auto"
                >
                  {m.common.contactUs}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
