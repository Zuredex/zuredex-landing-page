/**
 * Shared global styles for every page (home, about, privacy, terms) — the
 * design tokens, fonts, and named classes (.btn-primary, .nav-link,
 * .footer-link, .glass-card, etc.) that keep every page visually consistent.
 * Render once, as the first child, on every page.
 */
export default function SiteStyles() {
  return (
    <style>{`
      :root {
        --bg:         #07182A;
        --surface:    #0F141A;
        --elevated:   #151B22;
        --border:     #1C2430;
        --borderHi:   #22313D;
        --accent:     #3BA7C7;
        --accentDim:  #3BA7C714;
        --accentGlow: #3BA7C720;
        --accentSoft: #7FD1DF;
        --t1:         #F4F7FA;
        --t2:         #A7B4C0;
        --t3:         #A1B8C9;
        --green:      #10B981;
        --amber:      #F59E0B;
        --orange:     #FF6B35;
        --red:        #FF4D6A;
        --purple:     #8B5CF6;
      }

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { background: #07182A !important; color: #F4F7FA; flex-direction: column; }
      main { flex: 1; }
      [id] { scroll-margin-top: 80px; }
      :focus-visible { outline: 3px solid #7FD1DF; outline-offset: 4px; }
      .skip-link { position: fixed; top: 8px; left: 12px; z-index: 200; transform: translateY(-180%); background: #F4F7FA; color: #07182A; padding: 12px 18px; border-radius: 4px; }
      .skip-link:focus { transform: translateY(0); }
      .site-nav { position: fixed; inset: 0 0 auto; z-index: 100; min-height: 64px; padding: 4px 32px; display: flex; align-items: center; justify-content: space-between; gap: 16px; background: #07182A; border-bottom: 1px solid #22313D; }
      .brand-link { display: flex; align-items: center; gap: 10px; min-height: 44px; }
      .brand-link img { display: block; }
      .brand-name { display: block; font: 700 14px var(--font-syne), sans-serif; letter-spacing: 2px; color: #F4F7FA; }
      .brand-tagline { display: block; font: 10px var(--font-dm), monospace; color: #A1B8C9; margin-top: 2px; }
      .nav-desktop, .nav-actions { display: flex; align-items: center; gap: 20px; }
      .site-nav .nav-link { display: inline-flex; align-items: center; min-height: 44px; }
      .menu-toggle { display: none; min-height: 44px; padding: 8px 12px; color: #F4F7FA; background: #151B22; border: 1px solid #A1B8C9; border-radius: 4px; font: inherit; cursor: pointer; }
      .nav-mobile { display: none; }
      .dashboard-preview { background: #0F141A; border: 1px solid #22313D; border-radius: 8px; padding: 20px; font: 14px/1.6 var(--font-plex), sans-serif; color: #A7B4C0; box-shadow: 0 24px 60px rgba(0,0,0,.3); }
      .preview-heading { font-weight: 600; color: #F4F7FA; padding-bottom: 16px; }
      .preview-metrics { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; }
      .preview-card { border: 1px solid #22313D; border-top: 2px solid #3BA7C7; border-radius: 6px; padding: 12px; background: #151B22; }
      .preview-card span { font-size: 24px; color: #F4F7FA; }
      .preview-card, .sample-metric { min-width: 0; }
      .preview-card span, .sample-value { overflow-wrap: anywhere; }
      .sample-label { display: block; margin-top: 8px; color: #A1B8C9; font: 12px/1.5 var(--font-plex), sans-serif; }
      .preview-note { margin: 20px 0; color: #F4F7FA; border-left: 2px solid #3BA7C7; padding-left: 12px; }
      .preview-statuses > div { display: grid; grid-template-columns: 1fr 1.4fr; gap: 16px; padding: 12px 0; border-top: 1px solid #22313D; }
      .preview-statuses dd { color: #7FD1DF; }
      .preview-caption { padding-top: 16px; font-size: 12px; color: #A1B8C9; }
      @media (max-width: 960px) {
        .site-nav { padding: 4px 16px; gap: 8px; }
        .nav-desktop { display: none; }
        .nav-actions { gap: 8px; }
        .menu-toggle { display: block; }
        .nav-mobile:not([hidden]) { display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; padding: 12px 24px; background: #07182A; border-bottom: 1px solid #A1B8C9; max-height: calc(100dvh - 64px); overflow-y: auto; }
      }
      @media (max-width: 400px) {
        .brand-tagline { display: none; }
        .brand-link { gap: 6px; }
        .site-nav { padding-inline: 12px; }
        .preview-statuses > div { grid-template-columns: 1fr; gap: 4px; }
      }
      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
        *, *::before, *::after { animation: none !important; transition: none !important; }
      }

      @keyframes pulse-dot {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
      @keyframes fade-up {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes flow-right {
        0% { width: 0%; opacity: 0; }
        30% { opacity: 1; }
        100% { width: 100%; opacity: 0.6; }
      }
      @keyframes dash-flow {
        to { stroke-dashoffset: -36; }
      }

      a { text-decoration: none; }

      .nav-link {
        font-family: var(--font-plex), sans-serif;
        font-size: 13px;
        color: #A7B4C0;
        transition: color 150ms ease;
        text-decoration: none;
      }
      .nav-link:hover { color: #F4F7FA; }

      .tech-item {
        background: rgba(59,167,199,0.04);
        border: 1px solid rgba(59,167,199,0.2);
        border-radius: 4px;
        padding: 10px 24px;
        font-family: var(--font-dm), monospace;
        font-size: 12px;
        color: #A7B4C0;
        letter-spacing: 1.5px;
        transition: border-color 150ms ease, color 150ms ease, background 150ms ease;
        cursor: default;
      }
      .tech-item:hover { border-color: rgba(59,167,199,0.5); color: #F4F7FA; background: rgba(59,167,199,0.08); }

      .why-card {
        background: #151B22;
        border: 1px solid #1C2430;
        border-left: 3px solid #3BA7C7;
        border-radius: 8px;
        padding: 28px 32px;
        transition: border-right-color 150ms ease, border-top-color 150ms ease, border-bottom-color 150ms ease, box-shadow 150ms ease;
      }
      .why-card:hover {
        border-right-color: #22313D;
        border-top-color: #22313D;
        border-bottom-color: #22313D;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      }

      .glass-card {
        background: rgba(21, 27, 34, 0.72);
        border: 1px solid rgba(255,255,255,0.06);
        box-shadow: 0 2px 12px rgba(0,0,0,0.4);
        transition: transform 150ms ease, border-color 150ms ease;
      }
      .glass-card:hover {
        transform: translateY(-1px);
        border-color: rgba(255,255,255,0.1);
      }

      .btn-primary {
        font-family: var(--font-syne), sans-serif;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        background: #3BA7C7;
        color: #07182A;
        border: none;
        border-radius: 4px;
        display: inline-block;
        box-shadow: 0 0 20px rgba(59,167,199,0.125);
        transition: background 150ms ease, transform 150ms ease;
        text-decoration: none;
      }
      .btn-primary:hover { background: #7FD1DF; transform: translateY(-1px); }

      .btn-secondary {
        font-family: var(--font-plex), sans-serif;
        font-size: 13px;
        background: transparent;
        color: #F4F7FA;
        border: 1px solid #22313D;
        border-radius: 4px;
        display: inline-block;
        transition: border-color 150ms ease, color 150ms ease, transform 150ms ease;
        text-decoration: none;
      }
      .btn-secondary:hover { border-color: #3BA7C7; color: #3BA7C7; transform: translateY(-1px); }

      .footer-link {
        font-family: var(--font-plex), sans-serif;
        font-size: 13px;
        color: #A1B8C9;
        text-decoration: none;
        transition: color 150ms ease;
        display: block;
        margin-bottom: 8px;
      }
      .footer-link:hover { color: #A7B4C0; }

      .legal-link {
        color: #3BA7C7;
        text-decoration: underline;
        text-underline-offset: 2px;
      }
      .legal-link:hover { color: #7FD1DF; }

      .z-diagonal {
        position: absolute; inset: 0; pointer-events: none;
        background: repeating-linear-gradient(
          14deg,
          rgba(59,167,199,0.025) 0px,
          rgba(59,167,199,0.025) 1px,
          transparent 1px,
          transparent 80px
        );
      }

      /* Mobile */
      @media (max-width: 768px) {
        .nav-center { display: none !important; }
        .hero-grid { grid-template-columns: 1fr !important; padding: 100px 24px 60px !important; gap: 40px !important; }
        .hero-headline { font-size: 38px !important; }
        .dashboard-rep-cards { display: none !important; }
        .dashboard-table { display: none !important; }
        .why-grid { grid-template-columns: 1fr 1fr !important; }
        .recon-grid { grid-template-columns: 1fr !important; }
        .recon-arrow { display: none !important; }
        .analytics-grid { grid-template-columns: 1fr !important; }
        .security-grid { grid-template-columns: 1fr !important; }
        .product-proof-grid { grid-template-columns: 1fr !important; }
        .section-pad { padding: 60px 24px !important; }
        .trust-bar { padding: 20px 24px !important; flex-direction: column; align-items: flex-start !important; gap: 14px !important; }
        .tech-strip { padding: 40px 24px !important; }
        .cta-pad { padding: 80px 24px !important; }
        .cta-headline { font-size: 34px !important; }
        .footer-top { flex-direction: column !important; }
        .footer-links { gap: 24px !important; flex-wrap: wrap !important; }
        .footer-bottom { flex-direction: column !important; gap: 8px !important; }
        .nav-pad { padding: 0 20px !important; }
        .z-diagonal { display: none !important; }
        .legal-pad { padding: 120px 24px 60px !important; }
      }
      @media (max-width: 480px) {
        .why-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  );
}
