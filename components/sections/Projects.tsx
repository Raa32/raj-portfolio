import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-16"
    >
      <div className="max-w-[720px]">
        <WaypointLabel index={2} />
        <h2 className="mt-6 font-display text-3xl uppercase tracking-tight text-sand md:text-5xl">
          {content.sections.projects}
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2" role="list">
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
