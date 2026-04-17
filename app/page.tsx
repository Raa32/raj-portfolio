import ScrollReveal from "@/components/scroll-reveal";
import Counter from "@/components/counter";
import VideoBg from "@/components/video-bg";
import { experiences, projects, stack, status } from "@/lib/data";

export default function Home() {
  return (
    <>
      <VideoBg />

      <div className="max-w-[1100px] mx-auto px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">

          {/* ── HERO TILE ─────────────────────────────────────── */}
          <ScrollReveal className="sm:col-span-2 sm:row-span-2">
            <div className="glass rounded-2xl p-8 min-h-[380px] flex flex-col justify-end glow-hover">
              <div className="mb-auto flex items-center gap-2 font-mono text-xs text-ink-3">
                <span
                  className="w-2 h-2 rounded-full bg-green text-green animate-[pulse_2s_ease_infinite]"
                  style={{ boxShadow: "0 0 8px #39ff14" }}
                />
                open to junior frontend roles
              </div>
              <h1 className="font-display text-[clamp(32px,4.5vw,52px)] leading-[1.08] tracking-tight text-ink font-bold">
                Hi, I&apos;m Raj.
                <br />
                I build{" "}
                <em
                  className="not-italic text-accent"
                  style={{ textShadow: "0 0 20px rgba(0,229,255,0.5)" }}
                >
                  thoughtful
                </em>
                <br />
                web software.
              </h1>
              <p className="text-[15px] text-ink-2 mt-3.5 leading-relaxed max-w-[400px]">
                Software engineer in Dublin. React, TypeScript, Spring Boot.
                Clean code and tools people actually want to use.
              </p>
            </div>
          </ScrollReveal>

          {/* ── CURRENTLY TILE ────────────────────────────────── */}
          <ScrollReveal delay={60}>
            <div className="glass rounded-2xl p-6 h-full">
              <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-4"
                  style={{ textShadow: "0 0 10px rgba(0,229,255,0.4)" }}>
                / currently
              </h3>
              <ul className="space-y-0">
                {status.map((s) => (
                  <li
                    key={s.key}
                    className="flex justify-between py-2.5 border-b border-white/5 last:border-0 text-sm"
                  >
                    <span className="text-ink-3 font-mono text-xs">{s.key}</span>
                    <span className="text-ink font-medium text-xs">{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* ── LOCATION TILE ─────────────────────────────────── */}
          <ScrollReveal delay={120}>
            <div
              className="glass-bright rounded-2xl p-6 flex flex-col justify-between min-h-[160px]"
              style={{ boxShadow: "0 0 30px rgba(0,229,255,0.06)" }}
            >
              <span className="font-mono text-[11px] text-accent/60 uppercase tracking-widest">
                dublin, ireland
              </span>
              <span
                className="font-mono text-[32px] leading-tight text-accent font-bold"
                style={{ textShadow: "0 0 20px rgba(0,229,255,0.4)" }}
              >
                53.3&deg;N
                <br />
                6.2&deg;W
              </span>
            </div>
          </ScrollReveal>

          {/* ── CODE TILE ─────────────────────────────────────── */}
          <ScrollReveal className="sm:col-span-2">
            <div className="glass rounded-2xl p-5 glow-hover">
              <pre className="font-mono text-[13px] text-code-ink leading-[1.8] whitespace-pre-wrap">
                <span className="text-code-kw">const</span>{" "}
                <span className="text-accent">raj</span>
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
                <span className="text-code-s">&quot;BEng Software Engineering&quot;</span>
                {",\n"}
                {"  "}
                <span className="text-code-v">stack</span>
                {":\u00A0\u00A0\u00A0\u00A0\u00A0 ["}
                <span className="text-code-s">&quot;react&quot;</span>
                {", "}
                <span className="text-code-s">&quot;typescript&quot;</span>
                {", "}
                <span className="text-code-s">&quot;next.js&quot;</span>
                {"],\n"}
                {"  "}
                <span className="text-code-v">available</span>
                {":\u00A0 "}
                <span className="text-code-kw">true</span>
                {",\n};"}
                <span
                  className="inline-block w-2 h-[15px] bg-accent animate-[blink_1s_steps(1)_infinite] align-text-bottom ml-0.5"
                  style={{ boxShadow: "0 0 8px #00e5ff" }}
                />
              </pre>
            </div>
          </ScrollReveal>

          {/* ── STACK TILE ────────────────────────────────────── */}
          <ScrollReveal delay={60}>
            <div className="glass rounded-2xl p-6 h-full">
              <h3 className="font-mono text-[11px] text-accent/70 uppercase tracking-widest mb-4">
                / stack
              </h3>
              <div className="flex flex-wrap gap-[7px]">
                {stack.map((s) => (
                  <span key={s} className="tag cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── CTA TILE ──────────────────────────────────────── */}
          <ScrollReveal delay={120}>
            <a
              href="#contact"
              className="glass rounded-2xl p-6 flex items-center justify-center min-h-[160px] group glow-hover"
              style={{ transition: "all 0.3s ease" }}
            >
              <span
                className="font-mono text-sm font-medium text-accent group-hover:text-glow"
                style={{ letterSpacing: "0.05em" }}
              >
                let&apos;s talk{" "}
                <span className="inline-block ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  &#8599;
                </span>
              </span>
            </a>
          </ScrollReveal>

          {/* ── SECTION LABEL: music ──────────────────────────── */}
          <ScrollReveal className="col-span-full">
            <p className="font-mono text-xs text-ink-3 pt-8 pb-1">
              <span className="text-accent" style={{ textShadow: "0 0 8px rgba(0,229,255,0.5)" }}>#</span>{" "}
              what i&apos;m listening to
            </p>
          </ScrollReveal>

          <ScrollReveal className="sm:col-span-2">
            <div className="glass rounded-2xl overflow-hidden">
              <iframe
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full min-h-[152px] border-0 rounded-2xl"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <div
              className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center"
              style={{ boxShadow: "0 0 20px rgba(57,255,20,0.05)" }}
            >
              <Counter
                target={847}
                className="font-mono text-5xl font-bold text-green"
                style={{ textShadow: "0 0 16px rgba(57,255,20,0.5)" }}
              />
              <span className="font-mono text-[10px] text-ink-3 uppercase tracking-widest mt-2">
                cups of chai this year
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div
              className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center"
              style={{ boxShadow: "0 0 20px rgba(191,95,255,0.05)" }}
            >
              <span
                className="font-mono text-5xl font-bold text-purple"
                style={{ textShadow: "0 0 16px rgba(191,95,255,0.5)" }}
              >
                2025
              </span>
              <span className="font-mono text-[10px] text-ink-3 uppercase tracking-widest mt-2">
                BEng graduated
              </span>
            </div>
          </ScrollReveal>

          {/* ── SECTION LABEL: experience ─────────────────────── */}
          <ScrollReveal className="col-span-full">
            <p
              id="work"
              className="font-mono text-xs text-ink-3 pt-8 pb-1 scroll-mt-20"
            >
              <span className="text-accent" style={{ textShadow: "0 0 8px rgba(0,229,255,0.5)" }}>#</span>{" "}
              experience
            </p>
          </ScrollReveal>

          {experiences.map((exp, i) => (
            <ScrollReveal
              key={exp.company}
              delay={i * 60}
              className="sm:col-span-2"
            >
              <div className="glass rounded-2xl p-6 grid grid-cols-[120px_1fr] sm:grid-cols-[140px_1fr] gap-5 glow-hover h-full">
                <span className="font-mono text-[11px] text-ink-3 pt-0.5 leading-relaxed">
                  {exp.dates}
                </span>
                <div>
                  <p className="font-semibold text-[17px] text-ink">{exp.company}</p>
                  <p className="text-ink-2 text-sm mt-0.5">{exp.role}</p>
                  <p className="font-mono text-[11px] text-ink-3 mt-1">{exp.location}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* ── EDUCATION ─────────────────────────────────────── */}
          <ScrollReveal className="sm:col-span-2">
            <div className="glass rounded-2xl p-6 flex items-center gap-5 glow-hover h-full">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center font-mono text-2xl font-bold text-accent shrink-0"
                style={{
                  background: "rgba(0,229,255,0.08)",
                  border: "1px solid rgba(0,229,255,0.2)",
                  textShadow: "0 0 12px rgba(0,229,255,0.6)",
                }}
              >
                T
              </div>
              <div>
                <p className="font-semibold text-ink">
                  Technological University of the Shannon
                </p>
                <p className="text-sm text-ink-2 mt-0.5">
                  B.Eng (Hons) Software Engineering
                </p>
                <p className="font-mono text-[11px] text-ink-3 mt-1">
                  2021 — 2025 · athlone, ie
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ── SECTION LABEL: projects ───────────────────────── */}
          <ScrollReveal className="col-span-full">
            <p
              id="projects"
              className="font-mono text-xs text-ink-3 pt-8 pb-1 scroll-mt-20"
            >
              <span className="text-accent" style={{ textShadow: "0 0 8px rgba(0,229,255,0.5)" }}>#</span>{" "}
              projects
            </p>
          </ScrollReveal>

          {projects.map((proj, i) => (
            <ScrollReveal key={proj.title} delay={i * 60}>
              <a
                href={proj.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 flex flex-col glow-hover h-full group"
              >
                <h4 className="font-mono text-[18px] font-semibold text-ink flex justify-between items-baseline">
                  {proj.title}
                  <span className="text-ink-3 text-base group-hover:text-accent transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block transition-transform">
                    &#8599;
                  </span>
                </h4>
                <p className="text-sm text-ink-2 leading-relaxed mt-2 flex-1">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {proj.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            </ScrollReveal>
          ))}

          {/* ── SECTION LABEL: about ──────────────────────────── */}
          <ScrollReveal className="col-span-full">
            <p
              id="about"
              className="font-mono text-xs text-ink-3 pt-8 pb-1 scroll-mt-20"
            >
              <span className="text-accent" style={{ textShadow: "0 0 8px rgba(0,229,255,0.5)" }}>#</span>{" "}
              about
            </p>
          </ScrollReveal>

          <ScrollReveal className="sm:col-span-2 lg:col-span-3">
            <div className="glass rounded-2xl p-6 space-y-3 text-ink-2 leading-[1.7]">
              <p>
                I&apos;m a software engineer based in Dublin, recently graduated
                with a{" "}
                <span
                  className="text-accent font-medium"
                  style={{ textShadow: "0 0 8px rgba(0,229,255,0.3)" }}
                >
                  BEng in Software Engineering
                </span>{" "}
                from TUS Athlone. Currently looking for a junior frontend or
                full-stack role.
              </p>
              <p>
                My professional path so far has been in client implementation —
                helping SaaS companies get products into customers&apos; hands.
                That taught me to read requirements carefully, write clean docs,
                and ship things that don&apos;t break in front of people.
              </p>
              <p>
                On the engineering side I&apos;ve been building depth in{" "}
                <span
                  className="text-accent font-medium"
                  style={{ textShadow: "0 0 8px rgba(0,229,255,0.3)" }}
                >
                  React, TypeScript, and the JVM ecosystem
                </span>{" "}
                — most recently through a focused bootcamp shipping a
                containerised Spring Boot API on AWS.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <div
              className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center"
              style={{ boxShadow: "0 0 20px rgba(0,229,255,0.04)" }}
            >
              <span
                className="font-mono text-5xl font-bold text-accent"
                style={{ textShadow: "0 0 20px rgba(0,229,255,0.5)" }}
              >
                7
              </span>
              <span className="font-mono text-[10px] text-ink-3 uppercase tracking-widest mt-2">
                day cloud bootcamp
              </span>
            </div>
          </ScrollReveal>

          {/* ── CONTACT ───────────────────────────────────────── */}
          <ScrollReveal className="col-span-full">
            <div
              id="contact"
              className="glass rounded-2xl p-8 sm:p-10 mt-4 scroll-mt-20"
              style={{
                borderColor: "rgba(0,229,255,0.12)",
                boxShadow: "0 0 60px rgba(0,229,255,0.04)",
              }}
            >
              <h2 className="font-mono text-4xl font-bold text-ink">
                Let&apos;s{" "}
                <span
                  className="text-accent"
                  style={{ textShadow: "0 0 20px rgba(0,229,255,0.4)" }}
                >
                  build something
                </span>{" "}
                together.
              </h2>
              <p className="text-ink-2 mt-2 max-w-[480px] text-[15px]">
                Actively looking for junior frontend or full-stack roles in
                Dublin. Email is fastest — I usually reply within a day.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-6">
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
                    className="contact-link font-mono text-[13px] px-4 py-2.5 rounded-lg text-ink-2 inline-flex items-center gap-2"
                  >
                    {link.label}{" "}
                    <span className="opacity-50">&#8599;</span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <p className="text-center font-mono text-[11px] text-ink-3 py-8 mt-8 tracking-widest uppercase">
          &copy; 2026 raj sahu &nbsp;·&nbsp; next.js · typescript · tailwind
        </p>
      </div>
    </>
  );
}
