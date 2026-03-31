import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LocaleHtmlLang } from "@/components/LocaleHtmlLang";
import { getMessages, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const messages = await getMessages(locale);

  return {
    title: {
      default: site.name,
      template: `%s · ${site.name}`
    },
    description: site.description,
    alternates: { canonical: `/${locale}` },
    openGraph: {
      title: site.name,
      description: site.description,
      type: "website",
      locale: locale === "no" ? "nb_NO" : "en_US"
    },
    other: {
      "x-default-locale": locale
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const messages = await getMessages(locale);

  return (
    <div className="flex min-h-dvh flex-col">
      <LocaleHtmlLang lang={locale} />
      <Navbar
        locale={locale}
        labels={{
          home: messages.nav.home,
          services: messages.nav.services,
          about: messages.nav.about,
          contact: messages.nav.contact
        }}
      />
      <main className="flex-1">{children}</main>
      <Footer
        locale={locale}
        labels={{
          pagesTitle: messages.common.pagesTitle,
          contactTitle: messages.common.contactTitle,
          getInTouch: messages.common.getInTouch,
          nav: {
            home: messages.nav.home,
            services: messages.nav.services,
            about: messages.nav.about,
            contact: messages.nav.contact
          }
        }}
      />
    </div>
  );
}

