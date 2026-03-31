import type { Metadata } from "next";
import {
  Activity,
  CheckCircle2,
  Laptop,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FeatureIcon } from "@/components/FeatureIcon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/Section";
import { FoundationShowcase } from "@/components/home/FoundationShowcase";
import { getMessages, withLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return { title: messages.nav.home, alternates: { canonical: `/${locale}` } };
}

function ValueCard({
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

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const m = await getMessages(locale);

  const trust = [
    locale === "no" ? "Microsoft-økosystem" : "Microsoft ecosystem",
    locale === "no" ? "Identitet & tilgang" : "Identity & access",
    locale === "no" ? "Enhetsstyring" : "Device management"
  ];

  const highlights =
    locale === "no"
      ? [
          {
            t: "Ryddig og strukturert",
            d: "Identitet, enheter og sikkerhet i samme retning."
          },
          {
            t: "Praktisk veiledning",
            d: "Tydelige steg — uten unødvendig kompleksitet."
          },
          {
            t: "Bygget for vekst",
            d: "En grunnmur som skalerer med virksomheten."
          }
        ]
      : [
          {
            t: "Clean, structured setup",
            d: "Identity, devices, and security aligned."
          },
          {
            t: "Practical guidance",
            d: "Clear steps — no unnecessary complexity."
          },
          {
            t: "Built for growth",
            d: "A foundation that scales with your business."
          }
        ];

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-14">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-slate-50 to-white" />
        <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/12 blur-3xl" />

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="scp-badge animate-fade-up">
                <Sparkles className="size-3.5 text-blue-600" aria-hidden />
                {m.common.companyBadge}
              </p>
              <h1 className="mt-5 max-w-xl text-pretty text-4xl font-semibold tracking-tight text-slate-900 animate-fade-up [animation-delay:90ms] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
                {m.home.heroTitle}
              </h1>
              <p className="mt-5 max-w-prose text-pretty text-base leading-relaxed text-slate-700 animate-fade-up [animation-delay:160ms] sm:text-lg">
                {m.home.heroSubtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 animate-fade-up [animation-delay:220ms]">
                {trust.map((label) => (
                  <span key={label} className="scp-trust">
                    <CheckCircle2
                      className="size-3.5 shrink-0 text-blue-600"
                      aria-hidden
                    />
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up [animation-delay:280ms]">
                <Button href={withLocale(locale, "/contact")}>
                  {m.common.contactUs}
                </Button>
                <Button
                  href={withLocale(locale, "/services")}
                  variant="secondary"
                >
                  {m.common.viewServices}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="scp-hero-shell relative p-6 sm:p-8 animate-fade-up [animation-delay:120ms]">
                <div className="scp-hero-glow" />
                <div className="scp-hero-grid rounded-[1.75rem]" />

                <div className="relative flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-red-400/90" />
                    <span className="size-2.5 rounded-full bg-amber-400/90" />
                    <span className="size-2.5 rounded-full bg-emerald-400/90" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    {locale === "no" ? "Kontrollpanel" : "Control plane"}
                  </div>
                </div>

                <div className="relative mt-6 space-y-3">
                  <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-200">
                        <ShieldCheck className="size-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {locale === "no" ? "Sikker tilgang" : "Secure access"}
                        </div>
                        <div className="text-xs text-slate-700">
                          {locale === "no"
                            ? "Policy og MFA på plass"
                            : "Policy and MFA in place"}
                        </div>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
                      OK
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200">
                        <Laptop className="size-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {locale === "no" ? "Enheter" : "Devices"}
                        </div>
                        <div className="text-xs text-slate-700">
                          {locale === "no"
                            ? "MDM og compliance"
                            : "MDM and compliance"}
                        </div>
                      </div>
                    </div>
                    <Activity
                      className="size-5 text-blue-600"
                      strokeWidth={1.75}
                    />
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-card">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-slate-100 text-slate-900 ring-1 ring-slate-200">
                        <Lock className="size-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {locale === "no" ? "Data & sporbarhet" : "Data & traceability"}
                        </div>
                        <div className="text-xs text-slate-700">
                          {locale === "no"
                            ? "Kontinuerlig overvåkning"
                            : "Continuous oversight"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
                  {highlights.map((h) => (
                    <div
                      key={h.t}
                      className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                    >
                      <div className="text-xs font-semibold text-slate-900">
                        {h.t}
                      </div>
                      <div className="mt-1 text-xs leading-relaxed text-slate-700">
                        {h.d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="muted" divider>
        <Container>
          <FoundationShowcase
            title={m.home.foundationTitle}
            body={m.home.foundationBody}
            points={m.home.foundationPoints}
          />

          <ScrollReveal>
            <h2 className="mb-8 text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {m.home.valueTitle}
            </h2>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal>
              <ValueCard
                title={m.home.value.devicesTitle}
                description={m.home.value.devicesDesc}
                icon={<FeatureIcon icon={Laptop} />}
              />
            </ScrollReveal>
            <ScrollReveal delay={70}>
              <ValueCard
                title={m.home.value.securityTitle}
                description={m.home.value.securityDesc}
                icon={<FeatureIcon icon={ShieldCheck} />}
              />
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <ValueCard
                title={m.home.value.usersTitle}
                description={m.home.value.usersDesc}
                icon={<FeatureIcon icon={UsersRound} />}
              />
            </ScrollReveal>
            <ScrollReveal delay={210}>
              <ValueCard
                title={m.home.value.scaleTitle}
                description={m.home.value.scaleDesc}
                icon={<FeatureIcon icon={Layers} />}
              />
            </ScrollReveal>
            <ScrollReveal delay={280}>
              <ValueCard
                title={m.home.value.monitoringTitle}
                description={m.home.value.monitoringDesc}
                icon={<FeatureIcon icon={Activity} />}
              />
            </ScrollReveal>
            <ScrollReveal delay={350}>
              <ValueCard
                title={m.home.value.standardsTitle}
                description={m.home.value.standardsDesc}
                icon={<FeatureIcon icon={CheckCircle2} />}
              />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      <Section tone="default" divider>
        <Container>
          <div className="scp-surface-accent relative overflow-hidden rounded-[1.75rem] p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-start">
              <ScrollReveal className="lg:col-span-5">
                <h2 className="text-pretty text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  {m.home.whyTitle}
                </h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-700 sm:text-base">
                  {m.home.whyLead}
                </p>
              </ScrollReveal>
              <div className="lg:col-span-7">
                <ScrollReveal delay={60}>
                  <p className="text-pretty text-sm leading-relaxed text-slate-700 sm:text-base">
                    {m.home.whyBody}
                  </p>
                </ScrollReveal>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <ScrollReveal>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-card-lg">
                      <div className="text-sm font-semibold text-slate-900">
                        {m.home.whyPoints.riskTitle}
                      </div>
                      <div className="mt-1 text-sm text-slate-700">
                        {m.home.whyPoints.riskDesc}
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={70}>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-card-lg">
                      <div className="text-sm font-semibold text-slate-900">
                        {m.home.whyPoints.timeTitle}
                      </div>
                      <div className="mt-1 text-sm text-slate-700">
                        {m.home.whyPoints.timeDesc}
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={140}>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-card-lg">
                      <div className="text-sm font-semibold text-slate-900">
                        {m.home.whyPoints.controlTitle}
                      </div>
                      <div className="mt-1 text-sm text-slate-700">
                        {m.home.whyPoints.controlDesc}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section pad="md" divider tone="muted" className="pb-24">
        <Container>
          <ScrollReveal>
            <div className="scp-cta-strip relative grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="relative z-10 lg:col-span-8">
                <h2 className="text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
                  {m.home.ctaTitle}
                </h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
                  {m.home.ctaBody}
                </p>
              </div>
              <div className="relative z-10 lg:col-span-4 lg:flex lg:justify-end">
                <Button
                  href={withLocale(locale, "/contact")}
                  variant="secondary"
                  className="w-full border border-white/15 shadow-lift sm:w-auto"
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
