import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="flex min-h-screen flex-col justify-center px-6 md:px-16"
    >
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
    </section>
  );
}
