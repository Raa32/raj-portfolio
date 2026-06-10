import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";
import RevealItem from "@/components/ui/RevealItem";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="bg-paper px-6 py-28 text-bg md:py-36"
    >
      <div className="mx-auto max-w-[860px] text-center">
        <WaypointLabel index={2} onPaper />
      </div>
      <div className="mx-auto mt-12 grid max-w-[880px] items-center gap-12 md:grid-cols-[300px_1fr]">
        <RevealItem>
          <video
            src="/video/portrait-loop.mp4"
            poster="/img/portrait.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Video portrait of Raj Sahu"
            className="mx-auto aspect-[4/5] w-full max-w-[300px] rounded-lg border border-linelight object-cover shadow-lg"
          />
        </RevealItem>
        <div>
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
            {content.sections.about}
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-bg/85">
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <dl className="mx-auto mt-20 grid max-w-[880px] grid-cols-2 gap-6 border-y border-linelight py-10 text-center md:grid-cols-4">
        {content.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="order-2 mt-1 font-mono text-[11px] uppercase tracking-widest text-bg/55">
              {stat.label}
            </dt>
            <dd className="font-display text-4xl tracking-tight text-bg md:text-5xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mx-auto mt-20 max-w-[880px]">
        <h3 className="text-center font-display text-2xl uppercase tracking-tight">
          What I work with
        </h3>
        <div className="mt-8 space-y-5">
          {content.skills.map((category) => (
            <div
              key={category.name}
              className="flex flex-col gap-2 border-b border-linelight pb-5 md:flex-row md:items-baseline md:gap-6"
            >
              <h4 className="w-44 shrink-0 font-mono text-xs uppercase tracking-widest text-bg/55">
                {category.name}
              </h4>
              <p className="text-sm leading-relaxed text-bg/85">
                {category.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
