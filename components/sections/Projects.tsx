import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-24 md:px-16"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-12 select-none font-display text-[26vw] uppercase leading-none tracking-tight text-sand/[0.04]"
      >
        Work
      </span>
      <div className="relative max-w-[1100px]">
        <WaypointLabel index={2} />
        <h2 className="mt-6 font-display text-3xl uppercase tracking-tight text-sand md:text-5xl">
          {content.sections.projects}
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2" role="list">
          {content.projects.map((project) => (
            <li key={project.name}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
