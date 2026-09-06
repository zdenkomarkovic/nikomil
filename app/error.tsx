"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="u-container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <h1 className="text-2xl text-ink">Došlo je do greške</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        Nešto nije u redu. Pokušajte ponovo, a ako se problem nastavi pozovite nas na
        060 39 76 642.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-moss-dark"
      >
        Pokušaj ponovo
      </button>
    </div>
  );
}
