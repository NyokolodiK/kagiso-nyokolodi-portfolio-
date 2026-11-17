import s from "./AboutVisuals.module.css";

const layers = [
  {
    index: "01",
    name: "Experience",
    detail: "React · Preact · TypeScript · accessibility",
    tag: "Interface",
  },
  {
    index: "02",
    name: "Contracts",
    detail: "Typed events · product actions · API boundaries",
    tag: "Connection",
  },
  {
    index: "03",
    name: "Services",
    detail: "FastAPI · Rails · MCP tools",
    tag: "System",
  },
  {
    index: "04",
    name: "Evidence",
    detail: "Itinerary data · live supplier availability",
    tag: "Source",
  },
];

export function SystemMap() {
  return (
    <div
      className={s.map}
      role="img"
      aria-label="Simplified system map: experience, contracts, services and evidence connected across a single seam."
    >
      <div className={s.top}>
        <span>System map / Fig. 04</span>
        <span>Read across the seam</span>
      </div>

      <div className={s.layers}>
        {layers.map((layer, index) => (
          <div key={layer.name}>
            <div className={s.layer}>
              <span className={s.index}>{layer.index}</span>
              <div>
                <strong>{layer.name}</strong>
                <small>{layer.detail}</small>
              </div>
              <span className={s.tag}>{layer.tag}</span>
            </div>
            {index < layers.length - 1 && (
              <span className={s.connector} aria-hidden="true">
                <i />
                <b>
                  {index === 0
                    ? "typed events"
                    : index === 1
                      ? "tool calls"
                      : "live evidence"}
                </b>
                <i />
              </span>
            )}
          </div>
        ))}
      </div>

      <p className={s.note}>
        Correctness is designed across the seam, not inside a single component.
      </p>

      <div className={s.meta}>
        <span>Conceptual</span>
        <span>Frontend × services</span>
      </div>
    </div>
  );
}
