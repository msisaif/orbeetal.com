export function BackgroundGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 bg-bg-dark bg-grid-dots opacity-[0.65]"
      aria-hidden
    />
  );
}
