export default function LoadingPage() {
  return (
    <div
      className="u-container flex min-h-[50vh] items-center justify-center py-20"
      aria-label="Učitavanje…"
      role="status"
    >
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-ink" />
    </div>
  );
}
