import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2, "Ime mora imati najmanje 2 karaktera").max(120),
  email: z.string().email("Unesite ispravnu email adresu"),
  phone: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(10, "Poruka mora imati najmanje 10 karaktera").max(4000),
  company: z.string().optional(), // honeypot — proverava se u handleru
});

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Neispravan zahtev." }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Proverite unete podatke.";
    return NextResponse.json({ message: first }, { status: 422 });
  }

  const { name, email, phone, message, company } = parsed.data;

  // Honeypot popunjen -> tiho "uspeh", bez slanja
  if (company) {
    return NextResponse.json({ message: "ok" }, { status: 200 });
  }

  const apiKey = process.env.MAILJET_API_KEY;
  const secretKey = process.env.MAILJET_SECRET_KEY;
  const sender = process.env.SITE_MAIL_SENDER;
  const senderName = process.env.SITE_MAIL_SENDER_NAME ?? "NIKOMIL sajt";
  const receiver = process.env.SITE_MAIL_RECEIVER;

  if (!apiKey || !secretKey || !sender || !receiver) {
    console.error("Kontakt forma: nedostaju Mailjet env varijable.");
    return NextResponse.json(
      { message: "Slanje trenutno nije moguće. Pozovite nas na 060 39 76 642." },
      { status: 500 }
    );
  }

  const textBody = [
    `Ime: ${name}`,
    `Email: ${email}`,
    `Telefon: ${phone || "-"}`,
    "",
    "Poruka:",
    message,
  ].join("\n");

  const htmlBody = `
    <h2 style="font-family:Arial,sans-serif;margin:0 0 12px">Novi upit sa sajta NIKOMIL</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0"><strong>Ime</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Telefon</strong></td><td>${escapeHtml(phone || "-")}</td></tr>
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">${escapeHtml(
      message
    )}</p>
  `;

  try {
    const res = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${apiKey}:${secretKey}`).toString("base64"),
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: sender, Name: senderName },
            To: [{ Email: receiver, Name: "NIKOMIL" }],
            ReplyTo: { Email: email, Name: name },
            Subject: `Upit sa sajta — ${name}`,
            TextPart: textBody,
            HTMLPart: htmlBody,
          },
        ],
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Mailjet greška:", res.status, detail);
      return NextResponse.json(
        { message: "Slanje nije uspelo. Pokušajte ponovo ili nas pozovite." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (err) {
    console.error("Kontakt forma greška:", err);
    return NextResponse.json(
      { message: "Slanje nije uspelo. Pokušajte ponovo ili nas pozovite." },
      { status: 500 }
    );
  }
}
