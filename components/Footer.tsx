import Link from "next/link";
import s from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.grid}>
          <div className={s.brandCol}>
            <Link href="/" className={s.brand}>
              <span className={s.mark} aria-hidden="true">
                KN
              </span>
              <span>
                Kagiso Nyokolodi
                <small>Principal Software Engineer</small>
              </span>
            </Link>
          </div>
          <div className={s.col}>
            <span>Index</span>
            <Link href="/#work">Selected work</Link>
            <Link href="/#lab">Interaction lab</Link>
            <Link href="/about">About</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <div className={s.col}>
            <span>Elsewhere</span>
            <a
              href="https://www.linkedin.com/in/kagiso-nyokolodi/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="/Kagiso_Nyokolodi_CV.pdf" download>
              Download CV ↓
            </a>
            <a href="mailto:knyokolodi@gmail.com">Email ↗</a>
          </div>
          <div className={s.col}>
            <span>Colophon</span>
            <p>
              Next.js · TypeScript
              <br />
              CSS Modules · MDX
            </p>
            <p>Pre-rendered · no tracking</p>
          </div>
        </div>

        <div className={s.bottom}>
          <span>© 2026 Kagiso Nyokolodi</span>
          <span className={s.bottomCenter}>Frontend × AI</span>
          <a href="#main">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
