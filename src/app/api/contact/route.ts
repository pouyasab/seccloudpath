import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function sanitize(value: string) {
  return value.replace(/\r/g, "").trim();
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = sanitize(body.name ?? "");
    const email = sanitize(body.email ?? "");
    const message = sanitize(body.message ?? "");

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        { ok: false, error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL ?? site.email;
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "SecCloudPath Kontakt <onboarding@resend.dev>";

    const subject = `Ny henvendelse fra ${name}`;
    const text = [
      `Navn: ${name}`,
      `E-post: ${email}`,
      "",
      "Melding:",
      message
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text
      })
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      return NextResponse.json(
        { ok: false, error: `Email send failed: ${resendError}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload" },
      { status: 400 }
    );
  }
}

