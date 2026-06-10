import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-16"
    >
      <div className="max-w-[720px]">
        <WaypointLabel index={3} />
        <h2 className="mt-6 font-display text-3xl uppercase tracking-tight text-sand md:text-5xl">
          {content.sections.experience}
        </h2>
        <ol className="mt-8 space-y-8 border-l border-line pl-6" role="list">
          {content.experience.map((entry) => (
            <li key={`${entry.company}-${entry.role}`}>
              <p className="font-mono text-xs uppercase tracking-widest text-fog">
                {entry.period}
              </p>
              <h3 className="mt-1 text-lg font-medium text-sand">
                {entry.role}, {entry.company}
              </h3>
              <p className="mt-1 text-white">{entry.summary}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <h3 className="font-mono text-xs uppercase tracking-widest text-fog">
            Certifications
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-white" role="list">
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
