import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-card-lg">
          <p className="text-sm font-medium text-slate-600">404</p>
          <h1 className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-slate-900">
            Page not found
          </h1>
          <p className="mt-3 text-sm text-slate-700">
            The page you’re looking for doesn’t exist.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/">Go to home</Button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
