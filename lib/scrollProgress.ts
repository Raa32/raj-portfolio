export function computeScrollProgress(
  scrollTop: number,
  scrollHeight: number,
  viewportHeight: number
): number {
  const maxScroll = scrollHeight - viewportHeight;
  if (maxScroll <= 0) return 0;
  return Math.min(Math.max(scrollTop / maxScroll, 0), 1);
}

export function observeScrollProgress(
  onChange: (progress: number) => void
): () => void {
  let ticking = false;
  let disposed = false;
  let rafId = 0;

  const read = () => {
    ticking = false;
    if (disposed) return;
    onChange(
      computeScrollProgress(
        window.scrollY,
        document.documentElement.scrollHeight,
        window.innerHeight
      )
    );
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    rafId = requestAnimationFrame(read);
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  // Initial synchronous emit so consumers start from the real position.
  read();

  return () => {
    disposed = true;
    window.removeEventListener("scroll", onScroll);
    cancelAnimationFrame(rafId);
  };
}
