import { Container } from "@/components/Container";

export default function Loading() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-4">
          <div className="h-6 w-64 animate-pulse rounded-lg bg-mist-100" />
          <div className="h-4 w-full max-w-xl animate-pulse rounded-lg bg-mist-100" />
          <div className="h-4 w-full max-w-md animate-pulse rounded-lg bg-mist-100" />
        </div>
      </Container>
    </section>
  );
}

