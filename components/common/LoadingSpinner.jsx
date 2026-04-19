export function LoadingSpinner({ label = "Loading" }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 py-16 text-text-secondary"
      role="status"
      aria-live="polite"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-secondary border-t-transparent" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
