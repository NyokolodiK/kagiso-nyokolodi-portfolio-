import s from "./IdentityCard.module.css";

export function IdentityCard({ className }: { className?: string }) {
  return (
    <figure className={`${s.card}${className ? ` ${className}` : ""}`}>
      <div className={s.chrome}>
        <span className={s.file}>
          <i aria-hidden="true" />
          profile.ts
        </span>
        <span>TypeScript</span>
      </div>

      <div className={s.code}>
        <div className={s.declaration}>
          <span className={s.keyword}>const</span> engineer ={" "}
          <span className={s.punct}>{"{"}</span>
        </div>

        <dl className={s.fields}>
          <div>
            <dt>role</dt>
            <dd>
              <span className={s.string}>
                &quot;Principal Software Engineer&quot;
              </span>
              ,
            </dd>
          </div>
          <div>
            <dt>focus</dt>
            <dd>
              [<span className={s.string}>&quot;frontend architecture&quot;</span>
              , <span className={s.string}>&quot;AI applications&quot;</span>],
            </dd>
          </div>
          <div>
            <dt>since</dt>
            <dd>
              <span className={s.number}>2013</span>,
            </dd>
          </div>
          <div>
            <dt>current</dt>
            <dd>
              <span className={s.string}>&quot;Nawiri&quot;</span>,
            </dd>
          </div>
        </dl>

        <div className={s.declaration}>
          <span className={s.punct}>{"}"}</span>{" "}
          <span className={s.keyword}>as const</span>;
        </div>
      </div>

      <figcaption className={s.caption}>
        <span>Kagiso Nyokolodi</span>
        <span>Principal Software Engineer</span>
      </figcaption>

      <div className={s.footer}>
        <span>strict · ESM · React 19</span>
        <span>Frontend × AI</span>
      </div>
    </figure>
  );
}
