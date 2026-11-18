"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import s from "./SystemStack.module.css";

const layers = [
  {
    id: "experience",
    index: "01",
    name: "Experience",
    short: "Interface",
    detail: "React · Preact · TypeScript · accessibility",
    summary:
      "The product surface: stateful screens, keyboard access and feedback that survives slow or partial responses.",
    tags: ["React", "TypeScript", "Preact"],
    x: "-15%",
    y: "-22%",
    z: "90px",
    tilt: "7deg",
  },
  {
    id: "contracts",
    index: "02",
    name: "Contracts",
    short: "Connection",
    detail: "Typed events · product actions · API boundaries",
    summary:
      "Typed events and explicit product actions keep the interface honest about what the backend has actually confirmed.",
    tags: ["Typed events", "Actions", "API"],
    x: "13%",
    y: "-4%",
    z: "40px",
    tilt: "-5deg",
  },
  {
    id: "services",
    index: "03",
    name: "Services",
    short: "System",
    detail: "FastAPI · Rails · MCP tools",
    summary:
      "Rails and FastAPI services own persistence and orchestration. MCP tools expose product actions to the assistant.",
    tags: ["FastAPI", "Rails", "MCP"],
    x: "-8%",
    y: "13%",
    z: "-10px",
    tilt: "5deg",
  },
  {
    id: "evidence",
    index: "04",
    name: "Evidence",
    short: "Source",
    detail: "Itinerary data · live supplier availability",
    summary:
      "A search match is not a confirmation. Itinerary data and live supplier checks provide the evidence behind a claim.",
    tags: ["Itinerary", "Availability", "Evidence"],
    x: "16%",
    y: "32%",
    z: "-64px",
    tilt: "-7deg",
  },
];

const BASE = { x: 8, y: 18 };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function SystemStack() {
  const stageRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const rotation = useRef({ ...BASE });
  const distance = useRef(0);
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const layer = layers[active];

  const applyRotation = useCallback(() => {
    const world = worldRef.current;
    if (!world) return;
    world.style.setProperty("--rx", `${rotation.current.x.toFixed(2)}deg`);
    world.style.setProperty("--ry", `${rotation.current.y.toFixed(2)}deg`);
  }, []);

  useEffect(() => {
    applyRotation();
  }, [applyRotation]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let drag: {
      id: number;
      x: number;
      y: number;
      rx: number;
      ry: number;
      touch: boolean;
    } | null = null;
    let frame = 0;
    let resetTimer = 0;

    const onDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      drag = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        rx: rotation.current.x,
        ry: rotation.current.y,
        touch: event.pointerType === "touch",
      };
      distance.current = 0;
      setDragging(true);
    };

    const onMove = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.id) return;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      distance.current = Math.max(distance.current, Math.hypot(dx, dy));

      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (!drag) return;
        rotation.current = {
          x: drag.touch
            ? rotation.current.x
            : clamp(drag.rx - dy * 0.14, -18, 30),
          y: clamp(drag.ry + dx * 0.26, -62, 62),
        };
        applyRotation();
      });
    };

    const finish = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.id) return;
      drag = null;
      setDragging(false);
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => {
        distance.current = 0;
      }, 0);
    };

    stage.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", finish);
    window.addEventListener("pointercancel", finish);

    return () => {
      stage.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", finish);
      window.removeEventListener("pointercancel", finish);
      window.clearTimeout(resetTimer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [applyRotation]);

  function select(index: number) {
    if (distance.current > 8) return;
    setActive(index);
  }

  function resetView() {
    rotation.current = { ...BASE };
    applyRotation();
  }

  return (
    <div className={s.wrap}>
      <div className={s.frame}>
        <header className={s.hud}>
          <span className={s.hudTitle}>
            <i aria-hidden="true" />
            System map / 04 layers
          </span>
          <span className={s.hudHint}>
            {dragging ? "Orbiting" : "Drag to orbit"}
            <span aria-hidden="true">✦</span>
          </span>
          <span className={s.hudActive}>
            {layer.index} / {layer.name}
          </span>
        </header>

        <div
          className={s.stage}
          ref={stageRef}
          data-dragging={dragging}
          role="group"
          aria-label="Interactive system map"
        >
          <span className={s.grid} aria-hidden="true" />
          <span className={s.floor} aria-hidden="true" />
          <span className={s.orbit} aria-hidden="true" />
          <span className={`${s.axis} ${s.axisX}`} aria-hidden="true" />
          <span className={`${s.axis} ${s.axisY}`} aria-hidden="true" />

          <div className={s.world} ref={worldRef}>
            {layers.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={s.layer}
                data-active={index === active}
                aria-pressed={index === active}
                onClick={() => select(index)}
                style={
                  {
                    "--i": index,
                    "--x": item.x,
                    "--y": item.y,
                    "--z": item.z,
                    "--tilt": item.tilt,
                  } as CSSProperties
                }
              >
                <span className={s.layerTop}>
                  <span className={s.layerIndex}>{item.index}</span>
                  <span className={s.layerTag}>{item.short}</span>
                </span>
                <strong className={s.layerName}>{item.name}</strong>
                <small className={s.layerDetail}>{item.detail}</small>
                <span className={s.layerRule} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        <footer className={s.stageFoot}>
          <span>Perspective / 1400</span>
          <button type="button" onClick={resetView}>
            Reset view
            <span aria-hidden="true">↺</span>
          </button>
          <span className={s.footMeta}>04 layers / 03 seams</span>
        </footer>
      </div>

      <aside className={s.readout}>
        <div className={s.readoutTop}>
          <span>Readout</span>
          <span>
            {layer.index} / 04
          </span>
        </div>

        <div className={s.readoutBody} aria-live="polite">
          <span className={s.readoutTag}>{layer.short}</span>
          <strong>{layer.name}</strong>
          <p>{layer.summary}</p>
          <ul className={s.tags}>
            {layer.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <nav className={s.layerNav} aria-label="System layers">
          {layers.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={index === active}
              onClick={() => select(index)}
            >
              <span>{item.index}</span>
              {item.name}
              <i aria-hidden="true">→</i>
            </button>
          ))}
        </nav>

        <p className={s.readoutHint}>
          Drag the stage to orbit. Select a plate or use the index to inspect
          each layer.
        </p>
      </aside>
    </div>
  );
}
