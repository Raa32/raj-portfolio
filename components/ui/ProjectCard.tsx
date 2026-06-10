import type { Project } from "@/lib/content";

function StatusBadge({ status }: { status: string }) {
  const live = status.toLowerCase().includes("production");
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${
        live
          ? "bg-ember text-bg"
          : "border border-linelight bg-paper text-bg/70"
      }`}
    >
      {status}
    </span>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-linelight bg-white shadow-[0_10px_40px_rgba(10,9,8,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_60px_rgba(10,9,8,0.14)]">
      {project.image ? (
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
      ) : (
        <div
          aria-hidden="true"
          className="flex aspect-[16/10] w-full flex-col justify-between border-b border-linelight bg-bg p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
            {project.status}
          </p>
          <p className="font-display text-3xl uppercase leading-[0.95] tracking-tight text-sand">
            {project.tagline}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-fog">
            {project.stack.slice(0, 4).join(" / ")}
          </p>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 text-bg">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-xl uppercase tracking-tight">
            {project.name}
          </h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-3 font-medium text-bg/90">{project.tagline}</p>
        <p className="mt-2 text-sm leading-relaxed text-bg/70">
          {project.description}
        </p>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-bg/55">
          {project.stack.join(" / ")}
        </p>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="mt-4 inline-block self-start font-mono text-sm font-medium text-bg underline decoration-ember decoration-2 underline-offset-4 hover:text-ember"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
