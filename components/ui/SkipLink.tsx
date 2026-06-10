export default function SkipLink() {
  return (
    <a
      href="#content"
      className="sr-only z-[60] bg-sand px-4 py-2 font-mono text-sm text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      Skip to content
    </a>
  );
}
