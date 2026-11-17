"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AgentVisual,
  BuilderVisual,
  SystemsVisual,
} from "@/components/Visual";
import s from "./WorkIndex.module.css";

const projects = [
  {
    index: "01",
    href: "/work/quick-builder",
    discipline: "Product architecture",
    title: "Quick Builder",
    line: "Shared itinerary state · async pricing",
    summary:
      "Led the workflow end to end across React, TypeScript and Rails: shared itinerary data, route persistence and pricing that settles asynchronously.",
    leverage:
      "Reusable providers, hooks and typed service contracts now carry the workflow.",
    tags: ["React", "TypeScript", "Rails"],
    status: "Implemented workflow",
    visual: <BuilderVisual />,
  },
  {
    index: "02",
    href: "/work/agent-assistant",
    discipline: "AI application engineering",
    title: "Agent Assistant",
    line: "Typed actions · live evidence",
    summary:
      "Led architecture across FastAPI, Preact, MCP and host integration — typed events, explicit evidence and recoverable failure rather than inference from prose.",
    leverage:
      "Typed SSE, host bridges and an evaluation suite make the assistant a platform boundary.",
    tags: ["FastAPI", "Preact", "MCP"],
    status: "Evolving application",
    visual: <AgentVisual />,
  },
  {
    index: "03",
    href: "/work/modernization",
    discipline: "Frontend platform",
    title: "Platform modernization",
    line: "Shared foundations · staged migration",
    summary:
      "Set the frontend platform direction: a Storybook UI library, TanStack Query and staged React, Tailwind and Vite migrations across three applications.",
    leverage:
      "Shared primitives, compound forms and a coverage gate raise the baseline for product change.",
    tags: ["Storybook", "TanStack Query", "Vite"],
    status: "Ongoing migration",
    visual: <SystemsVisual />,
  },
];

export function WorkIndex() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <div className={s.grid}>
      <div className={s.list}>
        {projects.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${s.row}${active === index ? ` ${s.active}` : ""}`}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <span className={s.index}>{item.index}</span>
            <div className={s.content}>
              <span className={s.discipline}>{item.discipline}</span>
              <h3>{item.title}</h3>
              <p className={s.line}>{item.line}</p>
              <p className={s.summary}>{item.summary}</p>
              <p className={s.leverage}>
                <span>Leverage</span>{" "}
                {item.leverage}
              </p>
              <ul className={s.tags} aria-label="Technologies">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <span className={s.arrow} aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>

      <aside className={s.stage} aria-hidden="true">
        <div className={s.stageHead}>
          <span>Live index / 0{active + 1}</span>
          <span>{project.status}</span>
        </div>
        <div className={s.visual} key={active}>
          {project.visual}
        </div>
        <div className={s.stageFoot}>
          <span>{project.title}</span>
          <span>Conceptual system view</span>
        </div>
      </aside>
    </div>
  );
}
