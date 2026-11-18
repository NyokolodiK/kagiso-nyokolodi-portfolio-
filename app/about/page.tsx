import type { Metadata } from "next";
import Link from "next/link";
import s from "./about.module.css";
import { IdentityCard } from "@/components/IdentityCard";
import { SystemMap } from "@/components/AboutVisuals";
import { CareerTimeline } from "@/components/CareerTimeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kagiso Nyokolodi: Principal Software Engineer. Frontend architecture, applied AI and delivery across a connected product portfolio.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Kagiso Nyokolodi",
    description:
      "Principal Software Engineer: frontend architecture, applied AI and delivery across a connected product portfolio.",
    type: "website",
  },
};

const heroFacts = [
  ["Level", "Principal"],
  ["Discipline", "Frontend architecture"],
  ["Practice", "Applied AI"],
  ["Building since", "2013"],
];

const notes = [
  {
    index: "01",
    title: "Direction",
    body: "Set the frontend direction across a connected product portfolio — internal operations, partner portals and traveller-facing products.",
  },
  {
    index: "02",
    title: "Architecture",
    body: "Draw boundaries for data, state and responsibility that hold across React, Rails, FastAPI and MCP as the workflow changes.",
  },
  {
    index: "03",
    title: "Foundations",
    body: "Turn repeated product problems into shared foundations: a UI library, data-fetching standard, typed contracts and a coverage gate.",
  },
  {
    index: "04",
    title: "Teaching",
    body: "Raise the bar through review, tests and shared patterns, and make the work teachable across product teams.",
  },
];

const toolkit = [
  {
    label: "Interface",
    items: [
      "React",
      "TypeScript",
      "Preact",
      "Next.js",
      "Tailwind CSS",
      "Storybook",
      "TanStack Query",
      "Vite",
      "Accessibility",
    ],
  },
  {
    label: "Services",
    items: ["FastAPI", "Python", "Rails", "MCP", "PostgreSQL", "Redis"],
  },
  {
    label: "AI engineering",
    items: ["OpenAI", "Typed streaming", "LLM evaluations", "Semantic retrieval"],
  },
  {
    label: "Quality",
    items: ["Jest", "Vitest", "Playwright", "pytest", "ESLint", "CI/CD"],
  },
  {
    label: "Practice",
    items: [
      "Solution design",
      "Architecture",
      "Technical direction",
      "Delivery",
      "Mentoring",
    ],
  },
  {
    label: "Design collaboration",
    items: ["Figma implementation", "Interaction states", "Accessibility semantics"],
  },
];

export default function About() {
  return (
    <div className={s.about}>
      <section className={s.hero} aria-labelledby="about-title">
        <div className={s.heroTop}>
          <span className={s.label}>Profile / Kagiso Nyokolodi</span>
          <span className={s.heroIndex}>About / 2026</span>
        </div>

        <h1 id="about-title">
          Built for the
          <br />
          <em>difficult states.</em>
        </h1>

        <div className={s.heroBottom}>
          <p>
            Principal Software Engineer. I set frontend architecture and
            delivery across internal operations, partner portals and
            traveller-facing products.
          </p>
          <dl className={s.heroFacts}>
            {heroFacts.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={s.profile}>
        <div className={s.identity}>
          <IdentityCard />
        </div>

        <div className={s.bio}>
          <span className={s.label}>01 / Profile</span>
          <h2>
            Architecture and
            <br />
            product engineering.
          </h2>
          <p className={s.bioLead}>
            My work covers internal travel operations, partner portals and
            traveller-facing products. I set the architecture and standards, and
            I still ship the interface. I care about what happens between a
            user’s action and the system’s response, especially when that
            response is delayed, incomplete or shared across services.
          </p>
          <p>
            As principal at Nawiri, I led Quick Builder’s solution design,
            architecture and end-to-end implementation. I also lead Agent
            Assistant’s architecture and implementation across FastAPI, Preact,
            MCP and host application integration.
          </p>
          <p>
            I partner with UX, product and backend teams to turn design intent
            into a product that works through the difficult states. The engineer
            accountable for a workflow should also understand the foundations it
            stands on.
          </p>
          <p>
            I set technical direction through shared foundations: a Storybook UI
            library, TanStack Query, typed service contracts and a 70% backend
            coverage gate. I use Codex and Claude in my development workflow;
            architecture, review and validation remain engineering
            responsibilities.
          </p>
          <Link className={s.textLink} href="/#work">
            Explore selected work
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section
        id="approach"
        className={s.approach}
        aria-labelledby="approach-title"
      >
        <div className={s.approachInner}>
          <div className={s.approachLeft}>
            <span className={s.label}>02 / Engineering approach</span>
            <h2 id="approach-title">
              Design at the <em>boundaries.</em>
            </h2>
            <div className={s.mapWrap}>
              <SystemMap />
            </div>
          </div>

          <div className={s.approachRight}>
            <p className={s.lead}>
              A component boundary is useful only if the <span>data</span>,{" "}
              <span>state</span>, <span>responsibility</span> and{" "}
              <span>ownership</span> behind it are clear.
            </p>
            <p>
              My work spans frontend interactions, Rails integrations and
              Python services. In Quick Builder, I worked on shared
              accommodation usage, saved route boundaries and asynchronous
              pricing. In Agent Assistant, I worked on typed streaming,
              semantic discovery across Rails APIs and MCP, and the evidence
              behind an availability claim.
            </p>
            <p>
              My platform work applies the same discipline at a larger scale:
              a shared UI library, TanStack Query, typed service contracts and
              staged React, Tailwind and Vite migrations. The aim is a stronger
              baseline — every product change starts from there.
            </p>

            <div className={s.notes}>
              {notes.map((note) => (
                <article className={s.note} key={note.index}>
                  <span>{note.index}</span>
                  <div>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={s.career} aria-labelledby="experience-title">
        <CareerTimeline />
      </section>

      <section className={s.toolkit} aria-labelledby="toolkit-title">
        <div>
          <span className={s.label}>04 / Toolkit</span>
          <h2 id="toolkit-title">Toolkit</h2>
        </div>
        <div className={s.groups}>
          {toolkit.map((group) => (
            <div className={s.group} key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={s.education} aria-labelledby="education-title">
        <div>
          <span className={s.label}>05 / Education</span>
          <h2 id="education-title">Education</h2>
        </div>
        <div className={s.school}>
          <h3>Tshwane University of Technology</h3>
          <div className={s.degrees}>
            <p>BTech — IT, Web and Multimedia</p>
            <p>National Diploma — IT, Web and Multimedia</p>
          </div>
        </div>
      </section>

      <section id="about-contact" className={s.cta}>
        <div className={s.ctaInner}>
          <span className={`${s.label} ${s.ctaLabel}`}>Contact</span>
          <div className={s.ctaRow}>
            <h2>Get in touch.</h2>
            <div className={s.ctaBody}>
              <p>
                Principal Software Engineer.
                <br />
                Frontend architecture and applied AI for a connected product
                portfolio.
              </p>
              <a className={s.ctaButton} href="mailto:knyokolodi@gmail.com">
                Start a conversation
                <span aria-hidden="true">→</span>
              </a>
              <div className={s.ctaLinks}>
                <a href="mailto:knyokolodi@gmail.com">
                  knyokolodi@gmail.com ↗
                </a>
                <a href="/Kagiso_Nyokolodi_CV.pdf" download>
                  Download CV ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
