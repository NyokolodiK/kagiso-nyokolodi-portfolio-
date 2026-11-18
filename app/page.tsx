import Link from "next/link";
import type { Metadata } from "next";
import { EngineeringLab } from "@/components/engineering-lab/EngineeringLab";
import { IdentityCard } from "@/components/IdentityCard";
import { SystemStack } from "@/components/SystemStack";
import { WorkIndex } from "@/components/WorkIndex";
import s from "./page.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const principles = [
  {
    number: "01",
    title: "Set the direction.",
    body: "I turn product strategy into architecture, standards and a delivery path across internal travel operations, partner portals and traveller-facing products.",
  },
  {
    number: "02",
    title: "Design the seams.",
    body: "I own the contracts across React and TypeScript interfaces, Rails APIs, FastAPI services and MCP tools. I treat state ownership, evidence and failure modes as part of the feature.",
  },
  {
    number: "03",
    title: "Build the foundations.",
    body: "I turn repeated product problems into shared foundations: a Storybook UI library, TanStack Query, compound forms, typed service contracts and a 70% backend coverage gate.",
  },
  {
    number: "04",
    title: "Make it teachable.",
    body: "I raise the bar through review, tests and shared patterns, and make the work teachable. I have mentored junior developers and supported multiple delivery streams.",
  },
];

const toolkit = [
  "React",
  "TypeScript",
  "Preact",
  "Next.js",
  "Tailwind",
  "Storybook",
  "TanStack Query",
  "FastAPI",
  "Python",
  "Rails",
  "MCP",
  "Playwright",
];

const trace = [
  { index: "01", label: "Read context", meta: "product state" },
  { index: "02", label: "Plan", meta: "typed steps" },
  { index: "03", label: "Call tools", meta: "MCP / APIs" },
  { index: "04", label: "Check evidence", meta: "live sources" },
  { index: "05", label: "Respond", meta: "streamed" },
];

export default function Home() {
  return (
    <>
      <section className={s.hero} aria-labelledby="home-title">
        <div className={s.heroGrid} aria-hidden="true" />

        <div className={s.heroInner}>
          <div className={s.heroMeta}>
            <span className={s.heroRole}>Portfolio / 2026</span>
            <span className={s.status}>
              <i aria-hidden="true" />
              Open to principal frontend roles
            </span>
            <span className={s.heroYear}>Johannesburg / ZA</span>
          </div>

          <div className={s.heroLead}>
            <div className={s.heroTitleWrap}>
              <div className={s.heroKicker}>
                <span className={s.heroLevel}>Principal Software Engineer</span>
                <span className={s.heroDiscipline}>
                  Frontend architecture × applied AI
                </span>
              </div>
              <h1 id="home-title">
                Frontend systems
                <br />
                for complex
                <br />
                <em>workflows.</em>
              </h1>
            </div>

            <div className={s.heroAside}>
              <p className={s.intro}>
                I lead frontend engineering across internal travel operations,
                partner portals and traveller-facing products. I set the
                architecture, standards and delivery path for React and
                TypeScript interfaces, the Python and Rails services behind
                them, and the contracts between each layer.
              </p>

              <div className={s.actions}>
                <Link className={s.primary} href="#work">
                  View case studies
                  <span aria-hidden="true">↓</span>
                </Link>
                <Link className={s.secondary} href="/about#approach">
                  Engineering approach
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <p className={s.heroAsideFoot}>
                Architecture / delivery / applied AI
              </p>
            </div>
          </div>

          <dl className={s.facts}>
            <div>
              <dt>Level</dt>
              <dd>Principal since 2022</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>Internal ops · partner portals · traveller-facing</dd>
            </div>
            <div>
              <dt>Systems</dt>
              <dd>Quick Builder · Agent Assistant · platform</dd>
            </div>
            <div>
              <dt>Foundations</dt>
              <dd>UI library · TanStack Query · 70% coverage gate</dd>
            </div>
          </dl>
        </div>

        <div className={s.heroFoot}>
          <span>Interfaces / state / contracts</span>
          <span className={s.heroRule} aria-hidden="true" />
          <span>Selected work below</span>
          <span aria-hidden="true">↓</span>
        </div>
      </section>

      <div className={s.stackRail}>
        <span className={s.stackLabel}>Working stack</span>
        <ul>
          {toolkit.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <span className={s.stackNote}>
          TypeScript strict · React 19 · accessible by default
        </span>
      </div>

      <section id="work" className={s.work} aria-labelledby="work-title">
        <header className={`${s.workHead} reveal`}>
          <span className={s.label}>
            <span>01</span>
            Selected work
          </span>
          <div className={s.headRow}>
            <h2 id="work-title">
              Case <em>studies.</em>
            </h2>
            <p>
              Three problems I owned as principal at Nawiri: shared itinerary
              state, AI tool contracts and the platform foundations that carry
              them.
            </p>
          </div>
        </header>
        <WorkIndex />
      </section>

      <section id="system" className={s.system} aria-labelledby="system-title">
        <div className={s.systemInner}>
          <div className={s.systemHead}>
            <span className={s.label}>
              <span>02</span>
              System map
            </span>
            <span className={s.explorerNote}>
              Conceptual model · drag to orbit · select a layer
            </span>
          </div>
          <h2 id="system-title" className="sr-only">
            System map
          </h2>
          <SystemStack />
          <ol className={s.trace} aria-label="Conceptual flow through the system">
            <li className={s.traceHead} aria-hidden="true">
              <span>Conceptual flow</span>
              <i />
              <span>05 steps</span>
            </li>
            {trace.map((step) => (
              <li key={step.index}>
                <span className={s.traceDot} aria-hidden="true" />
                <span className={s.traceIndex}>{step.index}</span>
                <span className={s.traceLabel}>{step.label}</span>
                <span className={s.traceMeta}>{step.meta}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="lab" className={s.live} aria-labelledby="live-title">
        <div className={s.liveInner}>
          <div className={`${s.liveHead} reveal`}>
            <span className={s.label}>
              <span>03</span>
              Interaction lab
            </span>
            <h2 id="live-title">
              A working <em>slice.</em>
            </h2>
            <p>
              The state problems from the case studies, reduced to a local demo.
              Switch between a frontend workflow and an AI-assisted flow, then
              step through each response.
            </p>
            <ul className={s.liveNotes}>
              <li>
                <span>01</span>
                Frontend and AI modes
              </li>
              <li>
                <span>02</span>
                Step-through state
              </li>
              <li>
                <span>03</span>
                Sample data only
              </li>
            </ul>
          </div>

          <div className={s.liveDemo}>
            <EngineeringLab />
            <p className={s.liveFootnote}>
              Built with local React state. No API calls leave the page.
            </p>
          </div>
        </div>
      </section>

      <section className={s.practice} aria-labelledby="practice-title">
        <div className={s.practiceInner}>
          <div className={`${s.practiceHead} reveal`}>
            <span className={s.label}>
              <span>04</span>
              Principal practice
            </span>
            <h2 id="practice-title">
              How I <em>lead.</em>
            </h2>
            <p>
              Principal work is not more code. It is the direction, architecture
              and foundations that let a delivery path stay coherent — and the
              judgement to keep it honest when the product changes.
            </p>
          </div>

          <div className={s.principles}>
            {principles.map((principle) => (
              <article className={s.principle} key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={s.manifesto}>
          <span>Working principle</span>
          <blockquote>
            “A workflow is only as coherent as the state transitions between its
            steps.”
          </blockquote>
          <span>Quick Builder / reflection</span>
        </div>
      </section>

      <section className={s.about} aria-labelledby="about-preview-title">
        <div className={`${s.aboutHead} reveal`}>
          <span className={s.label}>
            <span>05</span>
            Profile
          </span>
          <h2 id="about-preview-title">
            Principal scope,
            <br />
            <em>end to end.</em>
          </h2>
        </div>

        <div className={s.aboutCard}>
          <IdentityCard />
        </div>

        <div className={s.aboutBody}>
          <p className={s.aboutLead}>
            My work spans internal travel operations, partner portals and
            traveller-facing products: React and TypeScript interfaces, Python
            services and the Rails integrations behind them.
          </p>
          <p>
            I set technical direction through shared foundations — a Storybook
            UI library, TanStack Query, typed service contracts and a 70%
            backend coverage gate — and stay close enough to the code to keep
            those foundations honest.
          </p>
          <Link className={s.textLink} href="/about">
            More about my approach
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={s.stack}>
          <span className={s.stackLabel}>Working toolkit</span>
          <ul>
            {toolkit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className={s.contact}
        aria-labelledby="contact-title"
      >
        <div className={s.contactTop}>
          <span className={s.label}>
            <span>06</span>
            Contact
          </span>
          <div>
            <h2 id="contact-title">Let’s talk about frontend systems.</h2>
            <p>
              Open to principal frontend, frontend architecture and applied-AI
              roles.
            </p>
          </div>
        </div>

        <a className={s.email} href="mailto:knyokolodi@gmail.com">
          knyokolodi@gmail.com
          <span aria-hidden="true">↗</span>
        </a>

        <div className={s.contactFoot}>
          <p>
            Architecture, delivery,
            <br />
            and the details that make them work.
          </p>
          <div className={s.contactLinks}>
            <a
              href="https://www.linkedin.com/in/kagiso-nyokolodi/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="/Kagiso_Nyokolodi_CV.pdf" download>
              Download CV ↓
            </a>
          </div>
          <span className={s.contactMark}>KN / 2026</span>
        </div>
      </section>
    </>
  );
}
