import Link from 'next/link';
import s from './Shell.module.css';

export function Header() {
  return (
    <>
      <a className={s.skip} href="#main">
        Skip to content
      </a>
      <header className={s.header}>
        <div className={s.bar}>
          <Link href="/" className={s.brand} aria-label="Kagiso Nyokolodi — home">
            <span className={s.mark} aria-hidden="true">
              KN
            </span>
            <span className={s.brandText}>
              Kagiso Nyokolodi
              <span className={s.role}>Principal Software Engineer</span>
            </span>
          </Link>
          <div className={s.actions}>
            <nav className={s.nav} aria-label="Main navigation">
              <Link href="/#work">
                <span className={s.num}>01</span>Work
              </Link>
              <Link href="/about">
                <span className={s.num}>02</span>About
              </Link>
              <Link href="/#contact">
                <span className={s.num}>03</span>Contact
              </Link>
            </nav>
            <a className={s.cv} href="/Kagiso_Nyokolodi_CV.pdf" download>
              <span>Download CV</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerTop}>
        <Link href="/" className={s.footerBrand}>
          <span className={s.footerMark} aria-hidden="true">
            KN
          </span>
          <span>
            Kagiso Nyokolodi
            <span className={s.footerRole}>Principal Software Engineer</span>
          </span>
        </Link>
        <p className={s.footerNote}>
          Thoughtful systems.
          <br />
          Useful experiences.
        </p>
        <nav className={s.footerNav} aria-label="Footer navigation">
          <a href="mailto:Knyokolodi@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/kagiso-nyokolodi/">LinkedIn</a>
          <a href="/Kagiso_Nyokolodi_CV.pdf" download>
            CV
          </a>
          <a href="#main">Top</a>
        </nav>
      </div>
      <div className={s.footerBottom}>
        <span>© 2026 Kagiso Nyokolodi</span>
        <span className={s.footerTag}>Designed &amp; built with intent</span>
        <a href="#main">Back to top ↑</a>
      </div>
    </footer>
  );
}
