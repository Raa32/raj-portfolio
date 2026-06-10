import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen flex-col justify-end px-6 pb-28 md:px-16 md:pb-24"
    >
      <div className="max-w-[920px]">
        <WaypointLabel index={0} />
        <p className="mt-4 font-mono text-sm uppercase tracking-widest text-fog">
          {content.identity.title} / {content.identity.location}
        </p>
        <h1 className="mt-6 font-display uppercase leading-[0.85] tracking-tight text-sand">
          <span className="block text-[clamp(4rem,17vw,15rem)]">Raj</span>{" "}
          <span className="block text-[clamp(4rem,17vw,15rem)]">Sahu</span>
        </h1>
        <p className="mt-8 max-w-[34rem] text-lg text-white">
          {content.identity.brandLine}
        </p>
      </div>
      <div
        data-testid="scroll-hint"
        aria-hidden="true"
        className="absolute bottom-8 right-6 font-mono text-xs uppercase tracking-[0.3em] text-fog md:right-16"
      >
        Scroll, the day is long
        <span className="mt-2 block h-8 w-px animate-pulse bg-sand" />
      </div>
    </section>
  );
}
