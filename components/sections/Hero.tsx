import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen flex-col justify-center px-6 md:px-16"
    >
      <div className="max-w-[720px]">
        <WaypointLabel index={0} />
        <h1 className="mt-6 font-display text-5xl uppercase leading-none tracking-tight text-sand md:text-8xl">
          {content.identity.name}
        </h1>
        <p className="mt-4 font-mono text-sm uppercase tracking-widest text-fog">
          {content.identity.title} / {content.identity.location}
        </p>
        <p className="mt-8 max-w-[36rem] text-lg text-white">
          {content.identity.brandLine}
        </p>
      </div>
      <div
        data-testid="scroll-hint"
        aria-hidden="true"
        className="absolute bottom-8 left-6 font-mono text-xs uppercase tracking-[0.3em] text-fog md:left-16"
      >
        Scroll to begin the ascent
        <span className="mt-2 block h-8 w-px animate-pulse bg-sand" />
      </div>
    </section>
  );
}
