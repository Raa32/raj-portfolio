import { content } from "@/lib/content";

// Full-bleed photo band mid-page, juanmora-style: one bold statement
// over the work-setup shot.
export default function StatementBand() {
  return (
    <section aria-label="Statement" className="relative h-[72vh] overflow-hidden">
      <img
        src="/img/setup.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-bg/55" />
      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/80">
          {content.statements.partner}
        </p>
        <p className="mt-4 max-w-[900px] font-display text-4xl uppercase leading-[0.95] tracking-tight text-ember md:text-7xl">
          {content.statements.partnerPunch}
        </p>
      </div>
    </section>
  );
}
