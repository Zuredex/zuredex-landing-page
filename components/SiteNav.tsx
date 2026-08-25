/**
 * Shared top nav for every page. Anchor links point back to `/#section` so
 * they resolve correctly regardless of which page they're clicked from.
 */
export default function SiteNav() {
  return (
    <nav
      className="nav-pad"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, zIndex: 100,
        height: 56,
        background: 'rgba(7,24,42,0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1C2430',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px',
      }}
    >
      {/* Logo */}
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <img src="/branding/zuredex-symbol.svg" width="28" height="28" alt="Zuredex" style={{ display: 'block' }} />
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 2, color: '#F4F7FA', lineHeight: 1 }}>ZUREDEX</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 8, color: '#4A5568', letterSpacing: 1, marginTop: 2 }}>OPERATIONAL INTELLIGENCE</div>
        </div>
      </a>

      {/* Center links */}
      <div className="nav-center" style={{ display: 'flex', gap: 28 }}>
        {[['Platform','/#platform'],['Workflow','/#workflow'],['Security','/#security'],['Analytics','/#analytics'],['Contact','/#cta']].map(([label, href]) => (
          <a key={label} href={href} className="nav-link">{label}</a>
        ))}
      </div>

      {/* Right */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <a
          href="https://app.zuredex.com"
          className="nav-link"
        >Client Login</a>
      </div>
    </nav>
  );
}
