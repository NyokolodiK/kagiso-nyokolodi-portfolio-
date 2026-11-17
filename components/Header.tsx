"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import s from "./Header.module.css";

const nav = [
  { href: "/#work", label: "Work", index: "01" },
  { href: "/#lab", label: "Lab", index: "02" },
  { href: "/about", label: "About", index: "03" },
  { href: "/#contact", label: "Contact", index: "04" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <a className={s.skip} href="#main">
        Skip to content
      </a>
      <header className={s.header} data-open={open}>
        <div className={s.inner}>
          <Link
            href="/"
            className={s.brand}
            aria-label="Kagiso Nyokolodi — home"
          >
            <span className={s.mark} aria-hidden="true">
              KN
            </span>
            <span className={s.brandText}>
              <span className={s.name}>Kagiso Nyokolodi</span>
              <span className={s.role}>Principal Software Engineer</span>
            </span>
          </Link>

          <nav className={s.nav} aria-label="Main navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/about" && pathname === "/about"
                    ? s.active
                    : undefined
                }
              >
                <span aria-hidden="true">{item.index}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={s.actions}>
            <span className={s.available}>
              <i aria-hidden="true" />
              Open to roles
            </span>
            <Link className={s.cta} href="/#contact">
              Get in touch
              <span aria-hidden="true">↗</span>
            </Link>
            <button
              type="button"
              className={s.menuButton}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              <span className={s.menuLabel}>{open ? "Close" : "Menu"}</span>
              <span className={s.menuGlyph} aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>

        <div
          className={s.panel}
          id="mobile-navigation"
          hidden={!open}
          data-open={open}
        >
          <nav aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <span aria-hidden="true">{item.index}</span>
                {item.label}
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </nav>
          <div className={s.panelMeta}>
            <a href="mailto:Knyokolodi@gmail.com">Knyokolodi@gmail.com</a>
            <a href="/Kagiso_Nyokolodi_CV.pdf" download>
              Download CV ↓
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
