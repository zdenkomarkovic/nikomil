"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "ok" | "error";

const fieldBase =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:border-ink focus:outline-none focus:ring-2 focus:ring-moss/30";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!res.ok) {
        throw new Error(json.message || "Slanje nije uspelo. Pokušajte ponovo.");
      }

      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Došlo je do greške.");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-moss/30 bg-moss-tint p-6">
        <p className="font-display text-lg font-semibold text-moss-dark">
          Hvala! Poruka je poslata.
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          Javljamo vam se u najkraćem roku. Za hitne upite pozovite 060 39 76 642.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-moss-dark underline"
        >
          Pošalji novu poruku
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm font-medium text-ink">Ime i prezime</span>
          <input
            name="name"
            required
            autoComplete="name"
            className={fieldBase}
            placeholder="Vaše ime"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-medium text-ink">Telefon</span>
          <input
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            className={fieldBase}
            placeholder="06x xxx xxxx"
          />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className="text-sm font-medium text-ink">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldBase}
          placeholder="vas@email.rs"
        />
      </label>

      <label className="grid gap-1.5">
        <span className="text-sm font-medium text-ink">Poruka</span>
        <textarea
          name="message"
          required
          rows={5}
          className={cn(fieldBase, "resize-y")}
          placeholder="Dimenzije, oblik, boja po RAL karti, lokacija postavljanja…"
        />
      </label>

      {/* honeypot — sakriveno polje protiv spama */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Firma
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" ? (
        <p className="rounded-lg bg-ember/10 px-4 py-3 text-sm text-ember">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-medium text-paper transition-colors hover:bg-moss-dark disabled:opacity-60"
      >
        {status === "sending" ? "Šaljem…" : "Pošalji upit"}
      </button>

      <p className="text-xs text-ink-muted">
        Slanjem prihvatate da vas kontaktiramo povodom vašeg upita. Podatke ne delimo
        sa trećim stranama.
      </p>
    </form>
  );
}
