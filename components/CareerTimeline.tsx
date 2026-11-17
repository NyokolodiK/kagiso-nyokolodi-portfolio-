import s from "./CareerTimeline.module.css";

const career = [
  {
    date: "Dec 2022 — Present",
    company: "Nawiri",
    title: "Principal Software Engineer",
    detail:
      "Lead frontend engineering across internal operations, partner portals and traveller-facing products. Quick Builder, Agent Assistant and the platform foundations behind them.",
  },
  {
    date: "Jul 2020 — 2022",
    company: "NTT",
    title: "Senior Frontend Engineer",
    detail:
      "Built enterprise applications with React, Next.js, TypeScript and Vue. Mentored junior developers and supported multiple delivery streams.",
  },
  {
    date: "Apr — Jun 2020",
    company: "OneCart",
    title: "Software Engineer",
  },
  {
    date: "Oct 2018 — Mar 2020",
    company: "Dimension Data",
    title: "Senior Software Engineer",
  },
  {
    date: "Sep 2015 — Sep 2018",
    company: "XPERTEK",
    title: "Software Developer",
  },
  {
    date: "Apr 2013 — Aug 2015",
    company: "IntelliLab",
    title: "Web and Mobile Developer",
  },
];

export function CareerTimeline() {
  return (
    <div className={s.timeline}>
      <div className={s.head}>
        <span className={s.label}>03 / Experience</span>
        <h2 id="experience-title">Experience</h2>
        <p>
          For more than a decade I’ve shipped web and mobile products, from
          implementation to principal-level ownership across a connected
          product portfolio.
        </p>
      </div>

      <ol className={s.list}>
        {career.map((job, index) => (
          <li
            className={`${s.job}${index === 0 ? ` ${s.current}` : ""}`}
            key={job.company}
          >
            <span className={s.period}>{job.date}</span>
            <div className={s.company}>
              <h3>{job.company}</h3>
              {index === 0 && <span className={s.badge}>Current</span>}
            </div>
            <p className={s.title}>{job.title}</p>
            {job.detail && <p className={s.detail}>{job.detail}</p>}
            <span className={s.index} aria-hidden="true">
              0{index + 1}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
