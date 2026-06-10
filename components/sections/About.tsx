import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-16"
    >
      <div className="grid max-w-[1000px] items-center gap-10 md:grid-cols-[1fr_320px]">
        <div className="max-w-[720px]">
          <WaypointLabel index={1} />
          <h2 className="mt-6 font-display text-3xl uppercase tracking-tight text-sand md:text-5xl">
            {content.sections.about}
          </h2>
          <div className="mt-8 space-y-5 text-white">
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <img
          src="/img/portrait.webp"
          alt="Portrait of Raj Sahu"
          width={1000}
          height={1250}
          loading="lazy"
          decoding="async"
          className="hidden aspect-[4/5] w-full border border-line object-cover md:block"
        />
      </div>
    </section>
  );
}
