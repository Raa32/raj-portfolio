import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border border-line bg-bg/80 p-6">
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
    </article>
  );
}
