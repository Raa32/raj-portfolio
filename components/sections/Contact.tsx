import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";

export default function Contact() {
  const heading = content.contact.heading;
  const emberStart = heading.lastIndexOf("base camp");
  const lead = emberStart > 0 ? heading.slice(0, emberStart) : heading;
  const tail = emberStart > 0 ? heading.slice(emberStart) : "";

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative flex min-h-screen flex-col justify-center px-6 md:px-16"
    >
      <div className="max-w-[820px]">
        <WaypointLabel index={4} />
        <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight text-sand md:text-7xl">
          {lead}
          {tail ? <span className="text-ember">{tail}</span> : null}
        </h2>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${content.identity.links.email}`}
            className="bg-ember px-8 py-4 font-mono text-sm uppercase tracking-widest text-bg hover:opacity-90"
          >
            {content.contact.cta}
          </a>
          <a
            href={content.identity.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm uppercase tracking-widest text-sand underline underline-offset-4 hover:text-white"
          >
            GitHub
          </a>
          <a
            href={content.identity.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm uppercase tracking-widest text-sand underline underline-offset-4 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <footer className="absolute bottom-8 left-6 right-6 md:left-16">
        <p className="font-mono text-xs text-fog">{content.contact.footer}</p>
      </footer>
    </section>
  );
}
