import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";

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
        <img
          src="/img/portrait.webp"
          alt="Portrait of Raj Sahu"
          width={1000}
          height={1250}
          loading="lazy"
          decoding="async"
          className="mx-auto aspect-[4/5] w-full max-w-[300px] rounded-lg border border-linelight object-cover shadow-lg"
        />
        <div>
          <h2 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
            {content.sections.about}
          </h2>
          <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-bg/85">
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
