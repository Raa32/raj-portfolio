"use client";

import VideoBg from "@/components/video-bg";
import Sidebar from "@/components/sidebar";
import ProjectsCarousel from "@/components/projects-carousel";
import ExperienceSlider from "@/components/experience-slider";
import Counter from "@/components/counter";
import { stack, status } from "@/lib/data";

export default function Home() {
  return (
    <>
      <VideoBg />
      <Sidebar />

      {/* ── Scroll container ─────────────────────────── */}
      <div
        id="scroll-root"
        className="h-screen overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory" }}
      >

        {/* ════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════ */}
        <section
          id="hero"
          className="snap-section pl-20 pr-8 sm:pl-24 sm:pr-16 flex items-center"
        >
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — intro */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-ink-3 mb-6">
                <span
                  className="w-2 h-2 rounded-full bg-green"
                  style={{ boxShadow: "0 0 8px #39ff14", animation: "pulse 2s ease infinite" }}
                />
                available for junior roles
              </div>

              <h1
                className="font-mono font-bold leading-[1.08] tracking-tight text-ink"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
              >
                Hi, I&apos;m{" "}
                <span
                  className="text-accent"
                  style={{ textShadow: "0 0 24px rgba(0,229,255,0.5)" }}
                >
                  Raj.
                </span>
                <br />
                I build
                <br />
                <span className="text-ink/60">thoughtful</span>
                <br />
                web software.
              </h1>

              <p className="text-ink-2 mt-6 text-[15px] leading-relaxed max-w-md">
                Software engineer in Dublin. React, TypeScript, Spring Boot.
                Clean code and tools people actually want to use.
              </p>

              <div className="flex gap-3 mt-8">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("scroll-root")
                      ?.scrollTo({
                        top:
                          (document.getElementById("contact")?.offsetTop ?? 0),
                        behavior: "smooth",
                      });
                  }}
                  className="font-mono text-sm px-6 py-3 rounded-xl text-black font-semibold transition-all duration-300"
                  style={{
                    background: "#00e5ff",
                    boxShadow: "0 0 20px rgba(0,229,255,0.3)",
                  }}
                >
                  get in touch ↗
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("scroll-root")
                      ?.scrollTo({
                        top:
                          (document.getElementById("projects")?.offsetTop ?? 0),
                        behavior: "smooth",
                      });
                  }}
                  className="font-mono text-sm px-6 py-3 rounded-xl text-ink-2 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  view work
                </a>
              </div>
            </div>

            {/* Right — status card */}
            <div className="glass rounded-2xl p-6 hidden lg:block">
              <p className="font-mono text-[11px] text-accent/70 uppercase tracking-widest mb-4">
                / currently
              </p>
              <ul className="space-y-0 mb-6">
                {status.map((s) => (
                  <li
                    key={s.key}
                    className="flex justify-between py-3 border-b border-white/5 last:border-0 text-sm"
                  >
                    <span className="font-mono text-xs text-ink-3">{s.key}</span>
                    <span className="font-mono text-xs text-ink font-medium">{s.value}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(57,255,20,0.07)", border: "1px solid rgba(57,255,20,0.15)" }}
                >
                  <Counter
                    target={847}
                    className="font-mono text-2xl font-bold text-green block"
                    style={{ textShadow: "0 0 12px rgba(57,255,20,0.5)" }}
                  />
                  <span className="font-mono text-[10px] text-ink-3 uppercase tracking-wider">
                    chais this year
                  </span>
                </div>
                <div
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(191,95,255,0.07)", border: "1px solid rgba(191,95,255,0.15)" }}
                >
                  <span
                    className="font-mono text-2xl font-bold text-purple block"
                    style={{ textShadow: "0 0 12px rgba(191,95,255,0.5)" }}
                  >
                    2025
                  </span>
                  <span className="font-mono text-[10px] text-ink-3 uppercase tracking-wider">
                    BEng grad
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-3">scroll</span>
            <div className="w-px h-8 bg-white/20" />
          </div>
        </section>

        {/* ════════════════════════════════════════════
            STACK
        ════════════════════════════════════════════ */}
        <section
          id="stack"
          className="snap-section pl-20 pr-8 sm:pl-24 sm:pr-16 flex items-center"
        >
          <div className="w-full max-w-5xl mx-auto">
            <SectionLabel>/ stack</SectionLabel>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 items-start">
              {/* Tech tags */}
              <div>
                <p className="font-mono text-[11px] text-ink-3 uppercase tracking-widest mb-4">
                  technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((s) => (
                    <span key={s} className="tag cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code block */}
              <div className="glass rounded-2xl p-5">
                <pre className="font-mono text-[12px] text-code-ink leading-[1.8] whitespace-pre-wrap">
                  <span className="text-code-kw">const</span>{" "}
                  <span className="text-accent">raj</span>
                  {" = {\n"}
                  {"  "}
                  <span className="text-code-v">role</span>
                  {":\u00A0\u00A0\u00A0 "}
                  <span className="text-code-s">&quot;frontend engineer&quot;</span>
                  {",\n"}
                  {"  "}
                  <span className="text-code-v">based</span>
                  {":\u00A0\u00A0 "}
                  <span className="text-code-s">&quot;dublin, ie&quot;</span>
                  {",\n"}
                  {"  "}
                  <span className="text-code-v">stack</span>
                  {":\u00A0\u00A0 ["}
                  <span className="text-code-s">&quot;react&quot;</span>
                  {", "}
                  <span className="text-code-s">&quot;typescript&quot;</span>
                  {", "}
                  <span className="text-code-s">&quot;next.js&quot;</span>
                  {"],\n"}
                  {"  "}
                  <span className="text-code-v">open</span>
                  {":\u00A0\u00A0\u00A0 "}
                  <span className="text-code-kw">true</span>
                  {",\n};"}
                  <span
                    className="inline-block w-2 h-[13px] bg-accent animate-[blink_1s_steps(1)_infinite] align-text-bottom ml-0.5"
                    style={{ boxShadow: "0 0 8px #00e5ff" }}
                  />
                </pre>
              </div>
            </div>

            {/* Spotify */}
            <div className="mt-10 glass rounded-2xl overflow-hidden max-w-md">
              <p className="font-mono text-[10px] text-ink-3 uppercase tracking-widest px-4 pt-4 pb-2">
                / what i&apos;m listening to
              </p>
              <iframe
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full min-h-[80px] border-0"
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            EXPERIENCE
        ════════════════════════════════════════════ */}
        <section
          id="experience"
          className="snap-section pl-20 pr-8 sm:pl-24 sm:pr-16 flex items-center"
        >
          <div className="w-full max-w-5xl mx-auto">
            <SectionLabel>/ experience</SectionLabel>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-start">
              <ExperienceSlider />

              {/* Education */}
              <div>
                <p className="font-mono text-[11px] text-ink-3 uppercase tracking-widest mb-4">
                  education
                </p>
                <div className="glass rounded-2xl p-6 flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-mono text-xl font-bold text-accent shrink-0"
                    style={{
                      background: "rgba(0,229,255,0.08)",
                      border: "1px solid rgba(0,229,255,0.2)",
                      textShadow: "0 0 12px rgba(0,229,255,0.6)",
                    }}
                  >
                    T
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">
                      Technological University of the Shannon
                    </p>
                    <p className="text-xs text-ink-2 mt-0.5">
                      B.Eng (Hons) Software Engineering
                    </p>
                    <p className="font-mono text-[11px] text-ink-3 mt-1">
                      2021 — 2025 · athlone, ie
                    </p>
                  </div>
                </div>

                <div
                  className="glass rounded-2xl p-5 mt-4"
                  style={{ boxShadow: "0 0 20px rgba(0,229,255,0.03)" }}
                >
                  <p className="font-mono text-[11px] text-accent/70 uppercase tracking-widest mb-3">
                    / about me
                  </p>
                  <p className="text-ink-2 text-sm leading-relaxed">
                    Recently graduated from TUS Athlone. My background in client
                    implementation taught me to ship things that don&apos;t
                    break in front of people. Now focused on{" "}
                    <span className="text-accent">React, TypeScript,</span> and
                    the JVM ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            PROJECTS
        ════════════════════════════════════════════ */}
        <section
          id="projects"
          className="snap-section pl-20 pr-8 sm:pl-24 sm:pr-16 flex items-center"
        >
          <div className="w-full max-w-5xl mx-auto">
            <SectionLabel>/ projects</SectionLabel>
            <div className="mt-8">
              <ProjectsCarousel />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            CONTACT
        ════════════════════════════════════════════ */}
        <section
          id="contact"
          className="snap-section pl-20 pr-8 sm:pl-24 sm:pr-16 flex items-center"
        >
          <div className="w-full max-w-5xl mx-auto">
            <SectionLabel>/ contact</SectionLabel>

            <h2
              className="font-mono font-bold text-ink mt-6"
              style={{ fontSize: "clamp(28px,4vw,52px)", lineHeight: 1.1 }}
            >
              Let&apos;s build something
              <br />
              <span
                className="text-accent"
                style={{ textShadow: "0 0 24px rgba(0,229,255,0.4)" }}
              >
                together.
              </span>
            </h2>

            <p className="text-ink-2 mt-4 max-w-md text-[15px] leading-relaxed">
              Actively looking for junior frontend or full-stack roles in Dublin.
              Email is fastest — I usually reply within a day.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: "rajsahuire@outlook.com", href: "mailto:rajsahuire@outlook.com" },
                { label: "LinkedIn", href: "https://linkedin.com/in/rajsahu-ie" },
                { label: "GitHub", href: "https://github.com/Raa32" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link font-mono text-[13px] px-5 py-3 rounded-xl text-ink-2 inline-flex items-center gap-2"
                >
                  {link.label} <span className="opacity-50">↗</span>
                </a>
              ))}
            </div>

            <p className="font-mono text-[11px] text-ink-3 mt-16 tracking-widest uppercase">
              &copy; 2026 raj sahu &nbsp;·&nbsp; next.js · typescript · tailwind
            </p>
          </div>
        </section>

      </div>
    </>
  );
}

/* Small helper — keeps section labels DRY */
function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs text-ink-3 flex items-center gap-2">
      <span
        className="text-accent text-base"
        style={{ textShadow: "0 0 8px rgba(0,229,255,0.5)" }}
      >
        {children.split(" ")[0]}
      </span>
      <span>{children.split(" ").slice(1).join(" ")}</span>
      <span className="flex-1 h-px bg-white/5 ml-2" />
    </p>
  );
}
