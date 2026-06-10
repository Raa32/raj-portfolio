import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-linelight bg-white shadow-[0_10px_40px_rgba(10,9,8,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_60px_rgba(10,9,8,0.14)]">
      <div className="overflow-hidden border-b border-linelight bg-bg">
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
      <div className="p-6 text-bg">
        <h3 className="font-display text-xl uppercase tracking-tight">
          {project.name}
        </h3>
        <p className="mt-2 text-bg/80">{project.description}</p>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-bg/55">
          {project.stack.join(" / ")}
        </p>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="mt-4 inline-block font-mono text-sm font-medium text-bg underline decoration-ember decoration-2 underline-offset-4 hover:text-ember"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
