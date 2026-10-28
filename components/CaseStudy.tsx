import Link from 'next/link';
import s from './CaseStudy.module.css';

const sections = [
  ['context', 'Context'],
  ['role', 'My role'],
  ['constraints', 'Constraints'],
  ['decisions', 'Decisions / trade-offs'],
  ['implementation', 'Implementation'],
  ['evidence', 'Evidence / results'],
  ['lessons', 'Lessons'],
];

type Props = {
  number: string;
  title: string;
  intro: string;
  discipline: string;
  visual: React.ReactNode;
  children: React.ReactNode;
  nextHref: string;
  nextTitle: string;
};

export function CaseStudy({
  number,
  title,
  intro,
  discipline,
  visual,
  children,
  nextHref,
  nextTitle,
}: Props) {
  return (
    <article className={s.case}>
      <div className={s.top}>
        <Link href="/#work" className={s.back}>
          ← All work
        </Link>
        <span className={s.count}>
          Case study {number} / 02 <i>·</i> Nawiri
        </span>
      </div>

      <header className={s.heading}>
        <span className={s.kicker}>
          <b>Selected work</b> / {discipline}
        </span>
        <h1>{title}</h1>
        <div className={s.introRow}>
          <p className={s.intro}>{intro}</p>
          <dl className={s.facts}>
            <div>
              <dt>Ownership</dt>
              <dd>Solution design, architecture &amp; implementation</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{discipline}</dd>
            </div>
            <div>
              <dt>Collaboration</dt>
              <dd>UX team · Figma design input</dd>
            </div>
          </dl>
        </div>
      </header>

      <figure className={s.feature}>
        <div className={s.featureBar}>
          <span>Fig. {number} / System view</span>
          <span>Original conceptual visual</span>
        </div>
        <div className={s.featureVisual}>{visual}</div>
        <span className={s.cornerA} aria-hidden="true" />
        <span className={s.cornerB} aria-hidden="true" />
      </figure>

      <div className={s.body}>
        <aside className={s.contents}>
          <span className={s.contentsLabel}>In this case study</span>
          <nav aria-label="Case study sections">
            {sections.map(([id, name], index) => (
              <a href={`#${id}`} key={id}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {name}
              </a>
            ))}
          </nav>
          <p>
            Original conceptual visuals.
            <br />
            No proprietary screenshots.
          </p>
        </aside>
        <div className={s.prose}>{children}</div>
      </div>

      <Link className={s.next} href={nextHref}>
        <div>
          <span className={s.nextLabel}>Next case study</span>
          <h2>{nextTitle}</h2>
        </div>
        <span className={s.nextArrow} aria-hidden="true">
          ↗
        </span>
      </Link>
    </article>
  );
}
