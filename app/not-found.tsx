import type { Metadata } from "next";
import Link from "next/link";
import s from "./not-found.module.css";

export const metadata: Metadata = {
  title: { absolute: "404 — Kagiso Nyokolodi" },
};

export default function NotFound() {
  return (
    <div className={s.page}>
      <section className={s.wrap}>
        <div className={s.top}>
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
            <span className={s.label}>A different direction</span>
            <h1>
              This page isn’t <em>here.</em>
            </h1>
            <p>
              That address doesn’t resolve. The selected work is a better place
              to continue.
            </p>
            <div className={s.links}>
              <Link href="/#work" className={s.primary}>
                Selected work
                <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/" className={s.ghost}>
                Home
                <span aria-hidden="true">↑</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={s.foot}>
          <span>Kagiso Nyokolodi / 2026</span>
          <span>Frontend × AI</span>
        </div>
      </section>
    </div>
  );
}
