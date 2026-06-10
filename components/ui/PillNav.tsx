export default function PillNav() {
  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-1/2 top-4 z-40 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-linelight bg-paper/90 px-2 py-1.5 shadow-sm backdrop-blur">
        <a
          href="#about"
          className="rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-bg hover:bg-linelight/60"
        >
          About
        </a>
        <a
          href="#hero"
          aria-label="Back to top"
          className="rounded-full bg-bg px-3 py-1.5 font-display text-sm uppercase tracking-tight text-sand"
        >
          RS
        </a>
        <a
          href="#projects"
          className="rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-bg hover:bg-linelight/60"
        >
          Work
        </a>
      </div>
    </nav>
  );
}
