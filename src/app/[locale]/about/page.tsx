import type { Metadata } from "next";
import {
  Boxes,
  CheckCircle2,
  Layers,
  ShieldCheck
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
    title: messages.nav.about,
    alternates: { canonical: `/${locale}/about` }
  };
}

function PillarCard({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card variant="elevated">
      <div className="flex items-start gap-4">
        {icon}
        <div>
          <h3 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">{description}</p>
        </div>
      </div>
    </Card>
  );
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const m = await getMessages(locale);

  return (
    <>
      <section className="relative overflow-hidden pb-12 pt-12 sm:pb-16 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-slate-50 to-white" />
        <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />

        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
            <ScrollReveal className="lg:col-span-5">
              <p className="scp-badge inline-flex">
                {m.about.badge}
              </p>
              <h1 className="mt-5 text-pretty text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                {m.about.title}
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
                {m.about.intro}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80} className="lg:col-span-7">
              <Card variant="gradientBorder" padding="lg" title={m.about.cardTitle}>
                <p>{m.about.cardBody1}</p>
                <p className="mt-3">{m.about.cardBody2}</p>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <Section tone="muted" divider>
        <Container>
          <ScrollReveal>
            <div className="max-w-2xl">
              <h2 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {m.about.approachTitle}
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-700 sm:text-base">
                {m.about.approachIntro}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal>
              <PillarCard
                title={m.about.pillars.practicalTitle}
                description={m.about.pillars.practicalDesc}
                icon={<FeatureIcon icon={CheckCircle2} />}
              />
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <PillarCard
                title={m.about.pillars.securityTitle}
                description={m.about.pillars.securityDesc}
                icon={<FeatureIcon icon={ShieldCheck} tone="ocean" />}
              />
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <PillarCard
                title={m.about.pillars.structureTitle}
                description={m.about.pillars.structureDesc}
                icon={<FeatureIcon icon={Boxes} />}
              />
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <PillarCard
                title={m.about.pillars.scaleTitle}
                description={m.about.pillars.scaleDesc}
                icon={<FeatureIcon icon={Layers} tone="neutral" />}
              />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      <Section tone="default" divider pad="md">
        <Container>
          <ScrollReveal>
            <div className="scp-surface-accent relative overflow-hidden rounded-[1.75rem] p-8 sm:p-10">
              <div className="pointer-events-none absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <h2 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    {m.about.partnerTitle}
                  </h2>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-700 sm:text-base">
                    {m.about.partnerBody1}
                  </p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-700 sm:text-base">
                    {m.about.partnerBody2}
                  </p>
                </div>
                <div className="lg:col-span-5 lg:flex lg:justify-end">
                  <Button
                    href={withLocale(locale, "/contact")}
                    className="w-full sm:w-auto"
                  >
                    {m.common.contactUs}
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
