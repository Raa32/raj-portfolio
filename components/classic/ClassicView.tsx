import { content } from "@/lib/content";

export default function ClassicView() {
  return (
    <main id="content" className="mx-auto max-w-[720px] px-6 py-16">
      <header>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-fog">
          {content.identity.title} / {content.identity.location}
        </p>
        <h1 className="mt-4 font-display text-5xl uppercase leading-none tracking-tight text-sand">
          {content.identity.name}
        </h1>
        <p className="mt-6 text-lg text-white">{content.identity.brandLine}</p>
      </header>

      <section aria-labelledby="classic-about" className="mt-16">
        <h2
          id="classic-about"
          className="font-display text-2xl uppercase tracking-tight text-sand"
        >
          {content.sections.about}
        </h2>
        <div className="mt-4 space-y-4">
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="classic-projects" className="mt-16">
        <h2
          id="classic-projects"
          className="font-display text-2xl uppercase tracking-tight text-sand"
        >
          {content.sections.projects}
        </h2>
        <ul className="mt-4 space-y-8" role="list">
          {content.projects.map((project) => (
            <li key={project.name} className="border-l border-line pl-5">
              <h3 className="text-lg font-medium text-sand">{project.name}</h3>
              <p className="mt-1">{project.description}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-fog">
                {project.stack.join(" / ")}
              </p>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="mt-2 inline-block font-mono text-sm text-sand underline underline-offset-4"
                >
                  GitHub
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="classic-experience" className="mt-16">
        <h2
          id="classic-experience"
          className="font-display text-2xl uppercase tracking-tight text-sand"
        >
          {content.sections.experience}
        </h2>
        <ol className="mt-4 space-y-6" role="list">
          {content.experience.map((entry) => (
            <li key={`${entry.company}-${entry.role}`}>
              <p className="font-mono text-xs uppercase tracking-widest text-fog">
                {entry.period}
              </p>
              <h3 className="mt-1 text-lg font-medium text-sand">
                {entry.role}, {entry.company}
              </h3>
              <p className="mt-1">{entry.summary}</p>
            </li>
          ))}
        </ol>
        <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-fog">
          Certifications
        </h3>
        <ul className="mt-2 space-y-1 text-sm" role="list">
          {content.certifications.map((cert) => (
            <li key={cert.name}>
              {cert.name} ({cert.date})
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="classic-contact" className="mt-16">
        <h2
          id="classic-contact"
          className="font-display text-2xl uppercase tracking-tight text-sand"
        >
          {content.sections.contact}
        </h2>
        <p className="mt-4 text-lg">{content.contact.heading}</p>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <a
            href={`mailto:${content.identity.links.email}`}
            className="bg-ember px-6 py-3 font-mono text-sm uppercase tracking-widest text-bg"
          >
            {content.contact.cta}
          </a>
          <a
            href={content.identity.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm uppercase tracking-widest text-sand underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href={content.identity.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm uppercase tracking-widest text-sand underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="mt-20 border-t border-line pt-6">
        <p className="font-mono text-xs text-fog">{content.contact.footer}</p>
      </footer>
    </main>
  );
}
