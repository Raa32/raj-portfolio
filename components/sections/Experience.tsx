import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="bg-paper px-6 py-28 text-bg md:py-36"
    >
      <div className="mx-auto max-w-[760px]">
        <WaypointLabel index={3} onPaper />
        <h2 className="mt-6 font-display text-3xl uppercase tracking-tight md:text-5xl">
          {content.sections.experience}
        </h2>
        <ol className="mt-12 space-y-10 border-l-2 border-linelight pl-8" role="list">
          {content.experience.map((entry) => (
            <li key={`${entry.company}-${entry.role}`}>
              <p className="font-mono text-xs uppercase tracking-widest text-bg/55">
                {entry.period}
              </p>
              <h3 className="mt-1 text-xl font-medium">
                {entry.role}, {entry.company}
              </h3>
              <p className="mt-1 text-bg/80">{entry.summary}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14">
          <h3 className="font-mono text-xs uppercase tracking-widest text-bg/55">
            Certifications
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-bg/85" role="list">
            {content.certifications.map((cert) => (
              <li key={cert.name}>
                {cert.name} ({cert.date})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
