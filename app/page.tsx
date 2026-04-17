import ScrollReveal from "@/components/scroll-reveal";
import Counter from "@/components/counter";
import { experiences, projects, stack, status } from "@/lib/data";

export default function Home() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">

        {/* ======== HERO TILE — dark, 2 col, 2 row ======== */}
        <ScrollReveal className="sm:col-span-2 sm:row-span-2">
          <div className="bg-code-bg border border-[#2a2520] rounded-2xl p-8 min-h-[380px] flex flex-col justify-end">
            <div className="mb-auto flex items-center gap-2 font-mono text-xs text-code-ink/50">
              <span className="w-2 h-2 rounded-full bg-green animate-[pulse_2s_ease_infinite]" />
              open to junior frontend roles
            </div>
            <h1 className="font-display text-[clamp(32px,4.5vw,52px)] leading-[1.08] tracking-tight text-code-ink">
              Hi, I&apos;m Raj.
              <br />
              I build <em className="italic text-accent">thoughtful</em>
              <br />
              web software.
            </h1>
            <p className="text-[15px] text-code-ink/55 mt-3.5 leading-relaxed max-w-[400px]">
              Software engineer in Dublin. React, TypeScript, Spring Boot. I care
              about clean code and tools people actually want to use.
            </p>
          </div>
        </ScrollReveal>

        {/* ======== CURRENTLY TILE ======== */}
        <ScrollReveal delay={60}>
          <div className="bg-card border border-line rounded-2xl p-6">
            <h3 className="font-display italic text-xl text-accent mb-3.5">
              Currently
            </h3>
            <ul className="space-y-0">
              {status.map((s) => (
                <li
                  key={s.key}
                  className="flex justify-between py-2 border-b border-dashed border-line last:border-0 text-sm"
                >
                  <span className="text-ink-3">{s.key}</span>
                  <span className="text-ink font-medium">{s.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* ======== LOCATION TILE ======== */}
        <ScrollReveal delay={120}>
          <div className="bg-accent border border-accent rounded-2xl p-6 flex flex-col justify-between min-h-[160px] text-white">
            <span className="font-mono text-[13px] text-white/65">
              dublin, ireland
            </span>
            <span className="font-display text-[32px] leading-tight">
              53.3&deg;N
              <br />
              6.2&deg;W
            </span>
          </div>
        </ScrollReveal>

        {/* ======== CODE TILE — dark, 2 col ======== */}
        <ScrollReveal className="sm:col-span-2">
          <div className="bg-code-bg border border-[#2a2520] rounded-2xl p-5">
            <pre className="font-mono text-[13px] text-code-ink leading-[1.75] whitespace-pre-wrap">
              <span className="text-code-kw">const</span>{" "}
              <span className="text-code-v">raj</span>
              {" = {\n"}
              {"  "}
              <span className="text-code-v">role</span>
              {":\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 "}
              <span className="text-code-s">&quot;frontend engineer&quot;</span>
              {",\n"}
              {"  "}
              <span className="text-code-v">based</span>
              {":\u00A0\u00A0\u00A0\u00A0\u00A0 "}
              <span className="text-code-s">&quot;dublin, ie&quot;</span>
              {",\n"}
              {"  "}
              <span className="text-code-v">degree</span>
              {":\u00A0\u00A0\u00A0\u00A0 "}
              <span className="text-code-s">
                &quot;BEng Software Engineering&quot;
              </span>
              {",\n"}
              {"  "}
              <span className="text-code-v">stack</span>
              {":\u00A0\u00A0\u00A0\u00A0\u00A0 ["}
              <span className="text-code-s">&quot;react&quot;</span>
              {", "}
              <span className="text-code-s">&quot;typescript&quot;</span>
              {", "}
              <span className="text-code-s">&quot;next.js&quot;</span>
              {", "}
              <span className="text-code-s">&quot;spring boot&quot;</span>
              {"],\n"}
              {"  "}
              <span className="text-code-v">available</span>
              {":\u00A0 "}
              <span className="text-code-kw">true</span>
              {",\n};"}
              <span className="inline-block w-2 h-[15px] bg-code-v animate-[blink_1s_steps(1)_infinite] align-text-bottom ml-0.5" />
            </pre>
          </div>
        </ScrollReveal>

        {/* ======== STACK TILE ======== */}
        <ScrollReveal delay={60}>
          <div className="bg-card border border-line rounded-2xl p-6">
            <h3 className="font-mono text-[11px] text-ink-3 uppercase tracking-wider mb-3.5">
              Tech stack
            </h3>
            <div className="flex flex-wrap gap-[7px]">
              {stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-3 py-1.5 rounded-md bg-bg border border-line text-ink-2 hover:bg-accent-soft hover:border-accent hover:text-accent hover:scale-105 transition-all cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ======== CTA TILE ======== */}
        <ScrollReveal delay={120}>
          <a
            href="#contact"
            className="bg-card border border-line rounded-2xl p-6 flex items-center justify-center min-h-[160px] group hover:bg-ink hover:border-ink transition-all"
          >
            <span className="font-mono text-sm font-medium text-ink group-hover:text-bg transition-colors">
              let&apos;s talk{" "}
              <span className="inline-block ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                &#8599;
              </span>
            </span>
          </a>
        </ScrollReveal>

        {/* ======== SPOTIFY SECTION ======== */}
        <ScrollReveal className="col-span-full">
          <p className="font-mono text-xs text-ink-3 pt-8 pb-1">
            <span className="text-accent font-medium">#</span> what i&apos;m
            listening to
          </p>
        </ScrollReveal>

        <ScrollReveal className="sm:col-span-2">
          <div className="bg-[#191414] border border-[#282828] rounded-2xl overflow-hidden">
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full min-h-[152px] border-0 rounded-2xl"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <div className="bg-green-soft border border-green/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <Counter target={847} className="font-display text-5xl text-green" />
            <span className="font-mono text-[11px] text-ink-3 uppercase tracking-wider mt-2">
              cups of chai this year
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="bg-accent-soft border border-accent/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <span className="font-display text-5xl text-accent">2025</span>
            <span className="font-mono text-[11px] text-ink-3 uppercase tracking-wider mt-2">
              BEng graduated
            </span>
          </div>
        </ScrollReveal>

        {/* ======== EXPERIENCE SECTION ======== */}
        <ScrollReveal className="col-span-full">
          <p
            id="work"
            className="font-mono text-xs text-ink-3 pt-8 pb-1 scroll-mt-20"
          >
            <span className="text-accent font-medium">#</span> experience
          </p>
        </ScrollReveal>

        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.company} delay={i * 60} className="sm:col-span-2">
            <div className="bg-card border border-line rounded-2xl p-6 grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-5">
              <span className="font-mono text-xs text-ink-3 pt-0.5">
                {exp.dates}
              </span>
              <div>
                <p className="font-medium text-[17px]">{exp.company}</p>
                <p className="text-ink-2 text-sm mt-0.5">{exp.role}</p>
                <p className="font-mono text-xs text-ink-3 mt-1">
                  {exp.location}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-bg text-ink-3"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}

        {/* ======== EDUCATION ======== */}
        <ScrollReveal className="sm:col-span-2">
          <div className="bg-card border border-line rounded-2xl p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-accent-soft text-accent flex items-center justify-center font-display text-2xl italic shrink-0">
              T
            </div>
            <div>
              <p className="font-medium">
                Technological University of the Shannon
              </p>
              <p className="text-sm text-ink-2 mt-0.5">
                B.Eng (Hons) Software Engineering
              </p>
              <p className="font-mono text-xs text-ink-3 mt-1">
                2021 — 2025 · athlone, ie
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ======== PROJECTS SECTION ======== */}
        <ScrollReveal className="col-span-full">
          <p
            id="projects"
            className="font-mono text-xs text-ink-3 pt-8 pb-1 scroll-mt-20"
          >
            <span className="text-accent font-medium">#</span> projects
          </p>
        </ScrollReveal>

        {projects.map((proj, i) => (
          <ScrollReveal key={proj.title} delay={i * 60}>
            <a
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card border border-line rounded-2xl p-6 hover:border-accent hover:-translate-y-1 transition-all group h-full"
            >
              <h4 className="font-display text-[22px] flex justify-between items-baseline">
                {proj.title}
                <span className="text-ink-3 text-base group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  &#8599;
                </span>
              </h4>
              <p className="text-sm text-ink-2 leading-relaxed mt-2">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3.5">
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-bg text-ink-3"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </a>
          </ScrollReveal>
        ))}

        {/* ======== ABOUT SECTION ======== */}
        <ScrollReveal className="col-span-full">
          <p
            id="about"
            className="font-mono text-xs text-ink-3 pt-8 pb-1 scroll-mt-20"
          >
            <span className="text-accent font-medium">#</span> about
          </p>
        </ScrollReveal>

        <ScrollReveal className="sm:col-span-2 lg:col-span-3">
          <div className="bg-card border border-line rounded-2xl p-6 space-y-3 text-ink-2 leading-[1.7]">
            <p>
              I&apos;m a software engineer based in Dublin, recently graduated
              with a{" "}
              <span className="text-accent font-medium">
                BEng in Software Engineering
              </span>{" "}
              from TUS Athlone. I&apos;m currently looking for a junior
              frontend or full-stack role.
            </p>
            <p>
              My professional path so far has been in client implementation —
              helping SaaS companies get their products into customers&apos;
              hands. That taught me to read requirements carefully, write clean
              docs, and ship things that don&apos;t break in front of people.
            </p>
            <p>
              On the engineering side I&apos;ve been building depth in{" "}
              <span className="text-accent font-medium">
                React, TypeScript, and the JVM ecosystem
              </span>{" "}
              — most recently through a focused bootcamp shipping a
              containerised Spring Boot API on AWS. I&apos;m now turning that
              energy toward frontend craft.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <div className="bg-card border border-line rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <span className="font-display text-5xl text-code-v">7</span>
            <span className="font-mono text-[11px] text-ink-3 uppercase tracking-wider mt-2">
              day cloud bootcamp
            </span>
          </div>
        </ScrollReveal>

        {/* ======== CONTACT ======== */}
        <ScrollReveal className="col-span-full">
          <div
            id="contact"
            className="bg-card border border-line rounded-2xl p-8 sm:p-10 mt-4 scroll-mt-20"
          >
            <h2 className="font-display text-4xl italic">
              Let&apos;s{" "}
              <span className="text-accent">build something</span> together.
            </h2>
            <p className="text-ink-2 mt-2 max-w-[480px] text-[15px]">
              I&apos;m actively looking for junior frontend or full-stack roles
              in Dublin. Email is fastest — I usually reply within a day.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-5">
              {[
                {
                  label: "rajsahuire@outlook.com",
                  href: "mailto:rajsahuire@outlook.com",
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/rajsahu-ie",
                },
                { label: "GitHub", href: "https://github.com/Raa32" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] px-4 py-2.5 rounded-lg border border-line-2 text-ink hover:bg-ink hover:text-bg hover:border-ink transition-all inline-flex items-center gap-2"
                >
                  {link.label} <span className="text-ink-3">&#8599;</span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <p className="text-center font-mono text-xs text-ink-3 py-8 mt-8">
        &copy; 2026 raj sahu · built with next.js, typescript, tailwind
      </p>
    </div>
  );
}