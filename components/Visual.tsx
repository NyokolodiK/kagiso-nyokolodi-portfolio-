import s from "./Visual.module.css";

export function BuilderVisual() {
  return (
    <div
      className={s.builder}
      role="img"
      aria-label="Conceptual itinerary flow: accommodation, activities and transport share one journey; a route change is saved before pricing is reconciled. This is an illustration, not a product screenshot."
    >
      <div className={s.chrome}>
        <span>Quick Builder / itinerary</span>
        <span>Fig. 01</span>
      </div>

      <div className={s.head}>
        <div>
          <span>Selected journey</span>
          <strong>Camp → Airstrip</strong>
        </div>
        <span className={s.badge}>Saved</span>
      </div>

      <div className={s.stops}>
        <div>
          <span>01</span>
          <strong>Stay</strong>
          <small>Accommodation</small>
        </div>
        <i aria-hidden="true" />
        <div>
          <span>02</span>
          <strong>Explore</strong>
          <small>Activities</small>
        </div>
        <i aria-hidden="true" />
        <div className={s.current}>
          <span>03</span>
          <strong>Connect</strong>
          <small>Transport</small>
        </div>
      </div>

      <div className={s.rows}>
        <div>
          <span>Ownership</span>
          <p>Shared itinerary state</p>
        </div>
        <div>
          <span>Sync</span>
          <p>Pricing reconciled</p>
        </div>
      </div>

      <div className={s.pipeline}>
        <span>Route selected</span>
        <b aria-hidden="true">→</b>
        <span>Changes saved</span>
        <b aria-hidden="true">→</b>
        <span className={s.hot}>Pricing reconciled</span>
      </div>

      <p className={s.annotation}>
        A change in one step has a life beyond the screen.
      </p>

      <div className={s.meta}>
        <span>System boundary</span>
        <span>Conceptual / sample data</span>
      </div>
    </div>
  );
}

export function AgentVisual() {
  return (
    <div
      className={s.agent}
      role="img"
      aria-label="Conceptual Agent Assistant architecture: Preact product experience, typed streaming to FastAPI orchestration, and MCP product tools. Indexed discovery is separate from live supplier confirmation."
    >
      <div className={s.chrome}>
        <span>Agent Assistant / stream</span>
        <span>Fig. 02</span>
      </div>

      <div className={s.prompt}>
        <span aria-hidden="true">↳</span>
        Find a stay for these dates and rooms.
      </div>

      <div className={s.stream}>
        <div>
          <i aria-hidden="true" />
          <span>context.retrieved</span>
          <small>Candidate properties</small>
        </div>
        <div>
          <i aria-hidden="true" />
          <span>availability.checked</span>
          <small>Live supplier evidence</small>
        </div>
        <div>
          <i aria-hidden="true" />
          <span>response.streamed</span>
          <small>Typed product events</small>
        </div>
      </div>

      <div className={s.response}>
        <span>Assistant</span>
        <p>
          Search identifies candidates. A live check confirms the exact stay
          and party before availability is claimed.
        </p>
      </div>

      <div className={s.layers}>
        <span>Preact</span>
        <i aria-hidden="true">→</i>
        <span>FastAPI</span>
        <i aria-hidden="true">→</i>
        <span>MCP tools</span>
      </div>

      <div className={s.meta}>
        <span>Evidence threshold</span>
        <span>Conceptual / sample data</span>
      </div>
    </div>
  );
}

export function SystemsVisual() {
  const steps = [
    ["01", "Establish the baseline", "Current behaviour"],
    ["02", "Sequence dependencies", "Reviewable stages"],
    ["03", "Verify compatibility", "Types · lint · tests"],
    ["04", "Integrate deliberately", "Product behaviour"],
  ];

  return (
    <div
      className={s.systems}
      role="img"
      aria-label="Modernization approach: establish a baseline, sequence dependencies, verify compatibility, then integrate. Applies across Bazaruto, Wakala and Agent Assistant."
    >
      <div className={s.chrome}>
        <span>Modernization / sequence</span>
        <span>Fig. 03</span>
      </div>

      <h3>
        Change, <em>with a plan.</em>
      </h3>

      <div className={s.steps}>
        {steps.map(([number, title, detail], index) => (
          <div className={s.step} key={title}>
            <span>{number}</span>
            <div>
              <strong>{title}</strong>
              <small>{detail}</small>
            </div>
            <i aria-hidden="true">{index === steps.length - 1 ? "↗" : "↓"}</i>
          </div>
        ))}
      </div>

      <div className={s.meta}>
        <span>Dependency order</span>
        <span>Rollback aware</span>
      </div>
    </div>
  );
}
