import Link from "next/link";
import type { ReactNode } from "react";
import { CaseStudyNav } from "./CaseStudyNav";
import s from "./CaseStudy.module.css";

const sections = [
  ["context", "The problem"],
  ["role", "My responsibility"],
  ["constraints", "The constraints"],
  ["decisions", "Key decisions"],
  ["implementation", "Delivery & validation"],
  ["leverage", "Scope & leverage"],
  ["evidence", "What changed"],
  ["lessons", "Reflection"],
] as const;

type Props = {
  number: string;
  title: string;
  intro: string;
  discipline: string;
  scope: string;
  status: string;
  leverage: string;
  outcomes: string[];
  visual: ReactNode;
  children: ReactNode;
  nextHref: string;
  nextTitle: string;
};

export function CaseStudy({
  number,
  title,
  intro,
  discipline,
  scope,
  status,
  leverage,
  outcomes,
  visual,
  children,
  nextHref,
  nextTitle,
}: Props) {
  return (
    <article className={s.case}>
      <div className={s.top}>
        <Link href="/#work">← Index / Selected work</Link>
        <span>
          {number} / 03 · Nawiri
        </span>
      </div>

      <header className={s.heading}>
        <span className={s.kicker}>{discipline}</span>
        <h1>{title}</h1>
        <p className={s.intro}>{intro}</p>
        <dl className={s.facts}>
          <div>
            <dt>Responsibility</dt>
            <dd>Solution design, architecture &amp; implementation</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>{scope}</dd>
          </div>
          <div>
            <dt>Leverage</dt>
            <dd>{leverage}</dd>
          </div>
          <div>
            <dt>Project state</dt>
            <dd>{status}</dd>
          </div>
        </dl>
      </header>

      <figure className={s.feature}>
        <div className={s.featureInner}>{visual}</div>
        <figcaption>
          Conceptual illustration, simplified for this case study.
        </figcaption>
      </figure>

      <section className={s.outcomes} aria-label="At a glance">
        <div className={s.outcomesHead}>
          <span>At a glance</span>
          <span>{number} / Outcomes</span>
        </div>
        <ul>
          {outcomes.map((outcome, index) => (
            <li key={outcome}>
              <span aria-hidden="true">0{index + 1}</span>
              <p>{outcome}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className={s.body}>
        <aside className={s.contents}>
          <span>In this study</span>
          <CaseStudyNav sections={sections} />
        </aside>
        <div className={s.prose}>{children}</div>
      </div>

      <Link className={s.next} href={nextHref}>
        <span className={s.nextLabel}>Next case study</span>
        <h2>{nextTitle}</h2>
        <span className={s.nextArrow} aria-hidden="true">
          ↗
        </span>
      </Link>
    </article>
  );
}
