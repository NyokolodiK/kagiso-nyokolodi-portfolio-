import Link from 'next/link';
import s from './page.module.css';
import { BuilderVisual, AgentVisual } from '@/components/Visual';
import { IdentityCard } from '@/components/IdentityCard';

const tickerItems = [
  'Frontend architecture',
  'AI applications',
  'Design systems',
  'Product engineering',
  'Accessibility',
  'Modernization',
];

const principles = [
  [
    '01',
    'Architecture that holds',
    'Define ownership, state and data boundaries so complex experiences remain understandable as they evolve.',
  ],
  [
    '02',
    'Craft across disciplines',
    'Partner with UX designers working in Figma, connecting design intent with accessible, well-tested implementation.',
  ],
  [
    '03',
    'Modernization with purpose',
    'Lead focused improvements: React upgrades, shared primitives, and a Moment.js to Day.js migration.',
  ],
];

const toolkit = [
  'TypeScript',
  'React',
  'Next.js',
  'Preact',
  'Python',
  'FastAPI',
  'Server-sent events',
  'Playwright',
  'Figma',
  'Codex',
  'Claude',
];

export default function Home() {
  return (
    <>
      <section className={s.hero}>
        <div className={s.grid} aria-hidden="true" />
        <div className={s.heroInner}>
          <div className={s.meta}>
            <span className={s.metaLive}>
              <i className={s.pulse} aria-hidden="true" />
              Portfolio / 2026
            </span>
            <span>Principal Software Engineer</span>
            <span>Frontend Lead</span>
          </div>

          <h1 className={s.title}>
            <span className={s.line}>
              <span>Making</span>
            </span>
            <span className={s.line}>
              <span className={s.outline}>complexity</span>
            </span>
            <span className={s.line}>
              <span>
                feel <em>considered.</em>
              </span>
            </span>
          </h1>

          <div className={s.foot}>
            <p>
              I’m Kagiso. I shape frontend architecture, build complex product experiences, and
              turn AI capabilities into useful applications.
            </p>
            <div className={s.actions}>
              <Link href="#work" className={s.primary}>
                Explore selected work <span aria-hidden="true">↓</span>
              </Link>
              <a className={s.ghost} href="/Kagiso_Nyokolodi_CV.pdf" download>
                Download CV <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className={s.ticker} aria-hidden="true">
          <div className={s.tickerTrack}>
            {[0, 1].map((group) => (
              <div className={s.tickerGroup} key={group}>
                {tickerItems.map((item) => (
                  <span key={item}>
                    {item}
                    <i>✳</i>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className={s.work}>
        <div className={s.sectionBar}>
          <span className={s.label}>
            <b>01</b> Selected work
          </span>
          <span className={s.note}>Two projects / Nawiri</span>
        </div>

        <div className={s.sectionHead}>
          <h2>
            From the system.
            <br />
            To the smallest <em>detail.</em>
          </h2>
          <p>
            Two perspectives on the same craft:
            <br />
            clear boundaries behind the scenes,
            <br />
            clarity in the experience.
          </p>
        </div>

        <div className={s.projects}>
          <article className={s.project}>
            <Link
              href="/work/quick-builder"
              className={s.visual}
              aria-label="Read the Quick Builder case study"
            >
              <BuilderVisual />
              <span className={s.viewTag}>
                View case study <span aria-hidden="true">↗</span>
              </span>
            </Link>
            <div className={s.info}>
              <div className={s.infoTop}>
                <span>01 / Product engineering</span>
                <span>Nawiri</span>
              </div>
              <h3>
                <Link href="/work/quick-builder">Quick Builder</Link>
              </h3>
              <p>
                A modular itinerary workflow that brings accommodation, activities and transport
                into one considered journey.
              </p>
              <div className={s.tags}>
                <span>Frontend architecture</span>
                <span>End-to-end ownership</span>
              </div>
              <Link href="/work/quick-builder" className={s.caseLink}>
                Read case study <span aria-hidden="true">↗</span>
              </Link>
              <span className={s.ghostNum} aria-hidden="true">
                01
              </span>
            </div>
          </article>

          <article className={`${s.project} ${s.projectReverse}`}>
            <Link
              href="/work/agent-assistant"
              className={s.visual}
              aria-label="Read the Agent Assistant case study"
            >
              <AgentVisual />
              <span className={s.viewTag}>
                View case study <span aria-hidden="true">↗</span>
              </span>
            </Link>
            <div className={s.info}>
              <div className={s.infoTop}>
                <span>02 / AI application engineering</span>
                <span>Nawiri</span>
              </div>
              <h3>
                <Link href="/work/agent-assistant">Agent Assistant</Link>
              </h3>
              <p>
                Connecting an AI system to a real product through typed streaming, structured
                actions and deliberate recovery.
              </p>
              <div className={s.tags}>
                <span>FastAPI + Preact</span>
                <span>Streaming systems</span>
              </div>
              <Link href="/work/agent-assistant" className={s.caseLink}>
                Read case study <span aria-hidden="true">↗</span>
              </Link>
              <span className={s.ghostNum} aria-hidden="true">
                02
              </span>
            </div>
          </article>
        </div>
      </section>

      <section className={s.approach}>
        <div className={s.approachLeft}>
          <span className={s.label}>
            <b>02</b> How I lead
          </span>
          <h2>
            The decisions
            <br />
            behind the <em>interface.</em>
          </h2>
          <Link href="/about" className={s.textLink}>
            More about my approach <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={s.principles}>
          {principles.map(([n, title, body]) => (
            <div key={n} className={s.principle}>
              <span className={s.principleNum}>{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={s.toolkit}>
        <span className={s.toolkitLabel}>Toolkit / Daily</span>
        <div className={s.chips}>
          {toolkit.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>

      <section className={s.about}>
        <div className={s.aboutCard}>
          <IdentityCard />
        </div>
        <div className={s.aboutCopy}>
          <span className={s.label}>
            <b>03</b> About
          </span>
          <h2>
            I work where
            <br />
            systems meet <em>people.</em>
          </h2>
          <p>
            My focus is frontend architecture, complex product experiences and AI-enabled
            applications. I care about how a system is structured and how clearly someone can use
            it.
          </p>
          <p>
            At Nawiri, I led the solution design, architecture and end-to-end implementation of
            Quick Builder. I also lead Agent Assistant’s architecture, design and implementation,
            connecting AI capabilities to a real product experience.
          </p>
          <Link href="/about" className={s.textLink}>
            More about my approach <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section id="contact" className={s.contact}>
        <div className={s.contactInner}>
          <div className={s.contactMeta}>
            <span>
              <b>04</b> Contact
            </span>
            <span>Open to conversations</span>
          </div>
          <h2>
            Good work starts
            <br />
            with a <em>conversation.</em>
          </h2>
          <a className={s.email} href="mailto:Knyokolodi@gmail.com">
            Knyokolodi@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className={s.contactFoot}>
            <p>
              Architecture, product engineering,
              <br />
              and the details that make them work.
            </p>
            <div className={s.contactLinks}>
              <a href="https://www.linkedin.com/in/kagiso-nyokolodi/">
                Find me on LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="/Kagiso_Nyokolodi_CV.pdf" download>
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
