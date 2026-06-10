import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";

export default function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="relative">
      <div className="relative h-[92vh] w-full overflow-hidden">
        <img
          src="/img/desk-day.webp"
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/15 to-bg/70" />
        <div className="absolute left-6 top-24 max-w-[26rem] [text-shadow:0_1px_18px_rgba(10,9,8,0.55)] md:left-12 md:top-28 md:max-w-[34rem]">
          <WaypointLabel index={0} />
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.25em] text-white">
            {content.identity.title} / {content.identity.location}
          </p>
          <p className="mt-6 text-2xl font-medium leading-snug text-white md:text-[1.9rem]">
            {content.identity.brandLine}
          </p>
        </div>
        <h1 className="absolute bottom-2 left-0 right-0 flex items-end justify-between px-4 font-display uppercase leading-[0.8] tracking-tight text-sand md:px-8">
          <span className="text-[clamp(4rem,15vw,14rem)]">Raj</span>{" "}
          <span className="text-[clamp(4rem,15vw,14rem)]">Sahu</span>
        </h1>
        <div
          data-testid="scroll-hint"
          aria-hidden="true"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/70"
        >
          Scroll
        </div>
      </div>
    </section>
  );
}
