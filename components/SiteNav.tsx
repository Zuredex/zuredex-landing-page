"use client";

import { useEffect, useRef, useState } from "react";

const links = [['Platform', '/#platform'], ['Workflow', '/#workflow'], ['Security', '/#security'], ['Analytics', '/#analytics'], ['Contact', '/#cta']];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 961px)');
    const closeOnResize = () => setOpen(false);
    const closeOutside = (event: PointerEvent) => {
      if (!nav.current?.contains(event.target as Node)) setOpen(false);
    };
    desktop.addEventListener('change', closeOnResize);
    document.addEventListener('pointerdown', closeOutside);
    return () => {
      desktop.removeEventListener('change', closeOnResize);
      document.removeEventListener('pointerdown', closeOutside);
    };
  }, []);

  function followSection(href: string) {
    setOpen(false);
    if (window.location.pathname === '/') {
      requestAnimationFrame(() => {
        const target = document.getElementById(href.split('#')[1]);
        target?.setAttribute('tabindex', '-1');
        target?.focus({ preventScroll: true });
      });
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <nav ref={nav} aria-label="Primary" className="site-nav"
        onBlur={event => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
        }}
        onKeyDown={event => {
          if (event.key === 'Escape' && open) {
            setOpen(false);
            menuButton.current?.focus();
          }
        }}
      >
        <a href="/" className="brand-link">
          {/* Existing website symbol; no branding change. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/branding/zuredex-symbol.svg" width="28" height="28" alt="Zuredex" />
          <span>
            <span className="brand-name">ZUREDEX</span>
            <span className="brand-tagline">OPERATIONAL INTELLIGENCE</span>
          </span>
        </a>
        <div className="nav-desktop">
          {links.map(([label, href]) => <a key={label} href={href} className="nav-link">{label}</a>)}
        </div>
        <div className="nav-actions">
          <a href="https://app.zuredex.com" className="nav-link">Client Login</a>
          <button ref={menuButton} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>Menu</button>
        </div>
        <div id="mobile-navigation" className="nav-mobile" hidden={!open}>
          {links.map(([label, href]) => <a key={label} href={href} className="nav-link" onClick={() => followSection(href)}>{label}</a>)}
        </div>
      </nav>
    </>
  );
}
