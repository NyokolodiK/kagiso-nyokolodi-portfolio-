import s from './IdentityCard.module.css';

export function IdentityCard({ className }: { className?: string }) {
  return (
    <div
      className={`${s.card}${className ? ` ${className}` : ''}`}
      role="img"
      aria-label="Kagiso Nyokolodi identity card: Principal Software Engineer and Frontend Lead, working since 2013"
    >
      <div className={s.top}>
        <span>KN / 001</span>
        <span>2013 — Now</span>
      </div>
      <div className={s.middle}>
        <span className={s.monogram} aria-hidden="true">
          kn
        </span>
        <span className={s.seal} aria-hidden="true">
          ↗
        </span>
      </div>
      <div className={s.name}>
        <strong>Kagiso Nyokolodi</strong>
        <span>Principal Software Engineer</span>
      </div>
      <div className={s.foot}>
        <span>Frontend Lead</span>
        <span>Architecture ↔ Experience</span>
      </div>
      <span className={s.cornerA} aria-hidden="true" />
      <span className={s.cornerB} aria-hidden="true" />
    </div>
  );
}
