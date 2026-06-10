import { content } from "@/lib/content";
import WaypointLabel from "@/components/ui/WaypointLabel";

export default function Contact() {
  const heading = content.contact.heading;
  const emberStart = heading.lastIndexOf("base camp");
  const lead = emberStart > 0 ? heading.slice(0, emberStart) : heading;
  const tail = emberStart > 0 ? heading.slice(emberStart) : "";

  return (
    <section id="contact" aria-label="Contact" className="relative">
      <div className="relative min-h-screen w-full overflow-hidden">
        <img
          src="/img/desk-night.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/55 via-bg/30 to-bg/80" />
        <div className="relative flex min-h-screen flex-col justify-center px-6 pb-[24vw] pt-28 md:px-16 md:pb-[18vw]">
          <WaypointLabel index={4} />
          <h2 className="mt-6 max-w-[820px] font-display text-4xl uppercase leading-[0.95] tracking-tight text-sand md:text-6xl">
            {lead}
            {tail ? <span className="text-ember">{tail}</span> : null}
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-6">
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
        <p
          aria-hidden="true"
          className="absolute bottom-10 left-0 right-0 flex items-end justify-between px-4 font-display uppercase leading-[0.8] tracking-tight text-sand md:px-8"
        >
          <span className="text-[clamp(4rem,15vw,14rem)]">Raj</span>
          <span className="text-[clamp(4rem,15vw,14rem)]">Sahu</span>
        </p>
        <footer className="absolute bottom-3 left-0 right-0 px-6 text-center">
          <p className="font-mono text-[11px] text-white/70">
            {content.contact.footer}
          </p>
        </footer>
      </div>
    </section>
  );
}
