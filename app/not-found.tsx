import type { Metadata } from 'next';
import Link from 'next/link';
import s from './not-found.module.css';

export const metadata: Metadata = { title: { absolute: '404 — Kagiso Nyokolodi' } };

export default function NotFound() {
  return (
    <section className={s.wrap}>
      <div className={s.meta}>
        <span>
          <b>Error</b> / 404
        </span>
        <span>Page not found</span>
      </div>
      <div className={s.body}>
        <span className={s.code} aria-hidden="true">
          404
        </span>
        <div className={s.copy}>
          <h1>
            A different
            <br />
            <em>direction.</em>
          </h1>
          <p>
            This page isn’t here. There’s more to explore in the selected work.
          </p>
          <div className={s.links}>
            <Link href="/#work" className={s.primary}>
              Back to selected work <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/" className={s.ghost}>
              Home <span aria-hidden="true">↑</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
