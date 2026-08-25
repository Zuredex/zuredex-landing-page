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
        --t3:         #4A5568;
        --green:      #10B981;
        --amber:      #F59E0B;
        --orange:     #FF6B35;
        --red:        #FF4D6A;
        --purple:     #8B5CF6;
      }

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { background: #07182A !important; color: #F4F7FA; flex-direction: column; }

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
        font-family: 'IBM Plex Sans', sans-serif;
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
        font-family: 'DM Mono', monospace;
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
        font-family: 'Syne', sans-serif;
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
        font-family: 'IBM Plex Sans', sans-serif;
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
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 13px;
        color: #4A5568;
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
