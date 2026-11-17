"use client";

import { useEffect, useState } from "react";
import s from "./CaseStudyNav.module.css";

type Section = readonly [string, string];

export function CaseStudyNav({
  sections,
}: {
  sections: readonly Section[];
}) {
  const [active, setActive] = useState(sections[0]?.[0] ?? "");

  useEffect(() => {
    const elements = sections
      .map(([id]) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-16% 0px -62% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className={s.nav} aria-label="Case study sections">
      {sections.map(([id, label], index) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? s.active : undefined}
          aria-current={active === id ? "location" : undefined}
        >
          <span>0{index + 1}</span>
          {label}
        </a>
      ))}
    </nav>
  );
}
