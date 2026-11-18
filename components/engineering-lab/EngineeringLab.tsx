"use client";

import { useId, useState } from "react";
import { demos, type DemoMode } from "./demo";
import s from "./EngineeringLab.module.css";

export function EngineeringLab() {
  const [selection, setSelection] = useState({
    mode: "frontend" as DemoMode,
    step: 0,
  });
  const panelId = useId();
  const demo = demos[selection.mode];
  const active = demo.steps[selection.step];
  const complete = selection.step === demo.steps.length - 1;

  function selectMode(mode: DemoMode) {
    setSelection({ mode, step: 0 });
  }

  return (
    <section className={s.lab} aria-label="Interactive engineering demonstration">
      <div className={s.top}>
        <span className={s.live}>
          <i aria-hidden="true" />
          Interaction lab
        </span>
        <span>Interactive / sample data</span>
      </div>

      <div
        className={s.modes}
        role="group"
        aria-label="Choose an engineering example"
      >
        {(Object.keys(demos) as DemoMode[]).map((mode, index) => (
          <button
            key={mode}
            type="button"
            aria-pressed={selection.mode === mode}
            aria-controls={panelId}
            onClick={() => selectMode(mode)}
          >
            <span className={s.modeIndex} aria-hidden="true">
              0{index + 1}
            </span>
            {demos[mode].label}
            <span className={s.modeIcon} aria-hidden="true">
              {mode === "frontend" ? "↗" : "✳"}
            </span>
          </button>
        ))}
      </div>

      <div className={s.canvas}>
        <div className={s.canvasHeading}>
          <span>{demo.project}</span>
          <span>{demo.subtitle}</span>
        </div>

        <div className={s.preview}>
          {selection.mode === "frontend" ? (
            <>
              <div className={s.previewTop}>
                <span className={s.miniMark}>qb/</span>
                <span>Journey review</span>
                <span className={s.sample}>Sample itinerary</span>
              </div>
              <div className={s.route}>
                <div>
                  <i aria-hidden="true" />
                  <span>Stay</span>
                  <small>Accommodation</small>
                </div>
                <span className={s.routeSegment} />
                <div>
                  <i aria-hidden="true" />
                  <span>Explore</span>
                  <small>Activities</small>
                </div>
                <span className={s.routeSegment} />
                <div>
                  <i
                    className={selection.step > 0 ? s.nodeDone : ""}
                    aria-hidden="true"
                  />
                  <span>Connect</span>
                  <small>Transport</small>
                </div>
              </div>
              <div className={s.previewResult}>
                <div>
                  <small>Selected journey</small>
                  <strong>Camp → Airstrip</strong>
                </div>
                <span className={s.resultBadge}>{active.status}</span>
              </div>
            </>
          ) : (
            <>
              <div className={s.previewTop}>
                <span className={s.miniMark}>aa/</span>
                <span>Planning assistant</span>
                <span className={s.sample}>Sample response</span>
              </div>
              <div className={s.prompt}>
                <span aria-hidden="true">↳</span>
                Find a stay for these dates and rooms.
              </div>
              <div className={s.aiResponse}>
                <span className={s.aiSymbol} aria-hidden="true">
                  ✳
                </span>
                <div>
                  <small>{active.status}</small>
                  <p>
                    {selection.step === 0
                      ? "Matching product context to your trip."
                      : selection.step === 1
                        ? "Live evidence is attached to the selected stay."
                        : selection.step === 2
                          ? "Turning the result into a useful recommendation…"
                          : "Your stay recommendation is ready to review."}
                  </p>
                  {selection.step === 3 && (
                    <span className={s.actionPreview}>
                      Review stay <span aria-hidden="true">→</span>
                    </span>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        <div className={s.event}>
          <span className={s.eventDot} aria-hidden="true" />
          <span>{active.event}</span>
          <span>0{selection.step + 1} / 04</span>
        </div>
      </div>

      <div
        className={s.stepButtons}
        role="group"
        aria-label="Explore the flow steps"
      >
        {demo.steps.map((step, index) => (
          <button
            key={step.label}
            type="button"
            aria-label={`Step ${index + 1}: ${step.label}`}
            aria-pressed={index === selection.step}
            aria-controls={panelId}
            onClick={() => setSelection({ ...selection, step: index })}
          >
            <span>0{index + 1}</span>
            {step.label}
          </button>
        ))}
      </div>

      <div
        id={panelId}
        className={s.explanation}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className={s.expIndex} aria-hidden="true">
          0{selection.step + 1}
        </span>
        <div>
          <strong>{active.label}</strong>
          <p>{active.detail}</p>
        </div>
      </div>

      <div className={s.bottom}>
        <span>Local demonstration · sample data</span>
        <button
          type="button"
          onClick={() =>
            setSelection({
              ...selection,
              step: complete ? 0 : selection.step + 1,
            })
          }
        >
          {complete ? "Replay flow" : "Next step"}
          <span aria-hidden="true">{complete ? "↺" : "→"}</span>
        </button>
      </div>
    </section>
  );
}
