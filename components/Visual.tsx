import s from './Visual.module.css';

export function BuilderVisual() {
  return (
    <div
      className={s.builder}
      role="img"
      aria-label="Conceptual itinerary builder interface showing accommodation, activity and transport steps with asynchronous room feedback"
    >
      <div className={s.window}>
        <div className={s.chrome}>
          <span className={s.dots} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className={s.url}>quickbuilder / itinerary</span>
          <span className={s.live}>
            <i aria-hidden="true" />
            Live
          </span>
        </div>

        <div className={s.app}>
          <div className={s.rail}>
            <span className={s.logo}>
              qb<span>/</span>
            </span>
            <span className={s.railLabel}>Build a journey</span>
            <span className={s.stepOn}>
              <b>01</b> Accommodation
            </span>
            <span className={s.step}>
              <b>02</b> Activities
            </span>
            <span className={s.step}>
              <b>03</b> Transport
            </span>
            <span className={s.railNote}>
              One journey.
              <br />
              Clear boundaries.
            </span>
          </div>

          <div className={s.canvas}>
            <div className={s.canvasTop}>
              <span>Your itinerary</span>
              <span>08 days ↗</span>
            </div>
            <div className={s.canvasHead}>
              <small>01 — Accommodation</small>
              <p className={s.canvasTitle}>
                A little room
                <br />
                for <em>possibility.</em>
              </p>
            </div>
            <div className={s.destination}>
              <div className={s.landscape} aria-hidden="true">
                <span>↗</span>
              </div>
              <div className={s.destinationText}>
                <strong>A place to pause</strong>
                <span>Room selection · 3 nights</span>
              </div>
              <span className={s.view}>View</span>
            </div>
            <div className={s.feedback}>
              <span className={s.check} aria-hidden="true">
                ✓
              </span>
              Room feedback received
              <span className={s.synced}>Synced</span>
            </div>
            <div className={s.lines} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <div className={s.caption}>
        <span>Fig. 01</span>
        <span>Conceptual interface · original illustration</span>
      </div>
    </div>
  );
}

export function AgentVisual() {
  return (
    <div
      className={s.agent}
      role="img"
      aria-label="Conceptual architecture showing a Preact host application connected through typed server-sent events to FastAPI orchestration, retrieval and tools"
    >
      <div className={s.agentFrame}>
        <div className={s.agentTop}>
          <span className={s.agentLabel}>AA / System view</span>
          <span className={s.typed}>
            <i aria-hidden="true" />
            Typed by design
          </span>
        </div>

        <div className={s.diagram}>
          <div className={s.host}>
            Host application
            <small>Preact experience</small>
          </div>

          <div className={s.stream}>
            <span className={s.streamLine}>
              <i aria-hidden="true">↑</i>
              Structured actions
            </span>
            <span className={s.streamLine}>
              <i aria-hidden="true">↓</i>
              Typed SSE stream
            </span>
          </div>

          <div className={s.engine}>
            <span className={s.engineIcon} aria-hidden="true">
              ↗
            </span>
            <div>
              <strong>Agent Assistant</strong>
              <small>FastAPI · orchestration</small>
            </div>
            <span className={s.status}>200 OK</span>
          </div>

          <div className={s.branches}>
            <div>
              <span>01</span>
              <strong>Retrieval</strong>
              <small>Relevant context</small>
            </div>
            <div>
              <span>02</span>
              <strong>Tools</strong>
              <small>Explicit actions</small>
            </div>
            <div>
              <span>03</span>
              <strong>Evaluation</strong>
              <small>Recovery & quality</small>
            </div>
          </div>
        </div>

        <div className={s.events}>
          <span>
            <i>event</i> token
          </span>
          <span>
            <i>event</i> action
          </span>
          <span>
            <i>event</i> done
          </span>
        </div>
      </div>

      <div className={s.caption}>
        <span>Fig. 02</span>
        <span>Conceptual architecture · simplified for this portfolio</span>
      </div>
    </div>
  );
}
