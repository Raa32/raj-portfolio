import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border border-line bg-bg/85 transition-colors duration-300 hover:border-sand/60">
      <div className="overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl uppercase tracking-tight text-sand">
          {project.name}
        </h3>
        <p className="mt-2 text-white">{project.description}</p>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-fog">
          {project.stack.join(" / ")}
        </p>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="mt-4 inline-block font-mono text-sm text-sand underline underline-offset-4 hover:text-white"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
