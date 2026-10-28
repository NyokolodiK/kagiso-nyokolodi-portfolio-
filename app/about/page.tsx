import type { Metadata } from 'next';
import Link from 'next/link';
import s from './about.module.css';
import { IdentityCard } from '@/components/IdentityCard';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Kagiso Nyokolodi: Principal Software Engineer and Frontend Lead. Career, approach and education.',
};

const career = [
  ['2024 — Present', 'Nawiri', 'Principal Software Engineer'],
  ['Jul 2020 — 2024', 'NTT', 'Senior Frontend Engineer'],
  ['Apr — Jun 2020', 'OneCart', 'Software Engineer'],
  ['Oct 2018 — Mar 2020', 'Dimension Data', 'Senior Software Engineer'],
  ['Sep 2015 — Sep 2018', 'XPERTEK', 'Software Developer'],
  ['Apr 2013 — Aug 2015', 'IntelliLab', 'Web and Mobile Developer'],
];

export default function About() {
  return (
    <div className={s.about}>
      <section className={s.hero}>
        <div className={s.meta}>
          <span>
            <b>About</b> / Kagiso Nyokolodi
          </span>
          <span>2013 — Now</span>
        </div>
        <h1>
          Engineering <em>clarity.</em>
          <br />
          At every <em>layer.</em>
        </h1>
        <div className={s.heroFoot}>
          <span>Frontend architecture</span>
          <span>Product experience</span>
          <span>AI-enabled applications</span>
        </div>
      </section>

      <section className={s.opening}>
        <div className={s.cardWrap}>
          <IdentityCard />
        </div>
        <div className={s.bio}>
          <span className={s.label}>
            <b>01</b> Profile
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
          <p>
            I partner with UX designers who supply Figma designs, bringing engineering judgment to
            interaction design, state ownership, integration and implementation.
          </p>
          <Link href="/#work" className={s.textLink}>
            Explore my selected work <span aria-hidden="true">↗</span>
          </Link>
          <div className={s.stats}>
            <div>
              <span>Focus</span>
              <strong>Frontend architecture</strong>
            </div>
            <div>
              <span>Current</span>
              <strong>Principal Software Engineer, Nawiri</strong>
            </div>
            <div>
              <span>Since</span>
              <strong>2013</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={s.row}>
        <div className={s.rowLeft}>
          <span className={s.label}>
            <b>02</b> Approach
          </span>
          <h2>
            Lead through
            <br />
            the <em>work.</em>
          </h2>
        </div>
        <div className={s.rowRight}>
          <p className={s.lead}>
            Make responsibilities explicit. Keep shared primitives useful and focused. Treat
            accessibility, testing and recovery as part of the experience.
          </p>
          <p>
            My modernization work includes React upgrades, shared primitives and leading the
            migration from Moment.js to Day.js. These are practical investments in a codebase’s
            ability to evolve.
          </p>
          <p>
            I use Codex and Claude as development tools. That work is distinct from the AI-enabled
            applications I design and engineer.
          </p>
          <div className={s.approachTags}>
            <span>Boundaries before convenience</span>
            <span>Accessibility by default</span>
            <span>Recovery as design</span>
          </div>
        </div>
      </section>

      <section className={s.row}>
        <div className={s.rowLeft}>
          <span className={s.label}>
            <b>03</b> Experience
          </span>
          <h2>
            A career
            <br />
            in <em>building.</em>
          </h2>
        </div>
        <div className={s.experience}>
          {career.map(([date, company, title], index) => (
            <div className={s.job} key={company}>
              <span className={s.jobDate}>{date}</span>
              <h3>{company}</h3>
              <span className={s.jobTitle}>{title}</span>
              {index === 0 && (
                <span className={s.now} aria-label="Current role">
                  Now
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={s.row}>
        <div className={s.rowLeft}>
          <span className={s.label}>
            <b>04</b> Education
          </span>
          <h2>
            <em>Foundations.</em>
          </h2>
        </div>
        <div className={s.education}>
          <span className={s.school}>Tshwane University of Technology</span>
          <div className={s.degree}>
            <span>01</span>
            <strong>BTech — IT, Web and Multimedia</strong>
          </div>
          <div className={s.degree}>
            <span>02</span>
            <strong>National Diploma — IT, Web and Multimedia</strong>
          </div>
          <span className={s.eduMark} aria-hidden="true">
            TUT
          </span>
        </div>
      </section>

      <section className={s.cta}>
        <span className={s.ctaLabel}>Next / Contact</span>
        <h2>
          Let’s <em>connect.</em>
        </h2>
        <div className={s.ctaRow}>
          <a className={s.ctaEmail} href="mailto:Knyokolodi@gmail.com">
            Knyokolodi@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <a className={s.ctaCv} href="/Kagiso_Nyokolodi_CV.pdf" download>
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
    </div>
  );
}
