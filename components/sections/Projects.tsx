import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import RevealItem from "@/components/ui/RevealItem";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative overflow-hidden bg-paper px-6 pb-32 pt-24 text-bg md:pt-32"
    >
      <p className="relative z-10 mx-auto max-w-[760px] text-center font-display text-3xl uppercase leading-[1.05] tracking-tight md:text-5xl">
        {content.statements.intro}
      </p>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none font-display text-[30vw] uppercase leading-none tracking-tight text-sand/25"
      >
        Work
      </span>
      <div className="relative mx-auto max-w-[1100px]">
        <div className="pt-[16vw] text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-bg/60">
            {content.statements.workTease}
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-tight md:text-6xl">
            {content.sections.projects}
          </h2>
          <div className="mt-3 flex justify-center">
            <WaypointLabel index={1} onPaper />
          </div>
        </div>
        <ul className="mt-16 grid gap-8 md:grid-cols-2" role="list">
          {content.projects.map((project, i) => (
            <li key={project.name}>
              <RevealItem delay={(i % 2) * 0.12}>
                <ProjectCard project={project} />
              </RevealItem>
            </li>
          ))}
        </ul>
        <p
          aria-hidden="true"
          className="mt-16 text-center font-mono text-xs uppercase tracking-[0.25em] text-bg/50"
        >
          {content.statements.workHint}
        </p>
      </div>
    </section>
  );
}
