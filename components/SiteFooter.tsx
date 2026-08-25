/**
 * Shared footer for every page. All links are real routes/anchors — no
 * placeholder hrefs.
 */
export default function SiteFooter() {
  return (
    <footer style={{ background: '#07182A', borderTop: '1px solid #1C2430', padding: '48px 80px' }}>
      <div className="footer-top" style={{ display: 'flex', justifyContent: 'space-between', gap: 32 }}>
        {/* Left */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/branding/zuredex-symbol.svg" width="20" height="20" alt="Zuredex" style={{ display: 'block' }} />
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 2, color: '#F4F7FA' }}>ZUREDEX</span>
          </div>
          <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, color: '#4A5568', marginTop: 8, lineHeight: 1.75 }}>
            Operational Intelligence for Medical Device<br />Sales Operations
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#4A5568', marginTop: 6 }}>analytics@zuredex.com</div>
        </div>

        {/* Link columns */}
        <div className="footer-links" style={{ display: 'flex', gap: 48 }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#4A5568', letterSpacing: 1.5, marginBottom: 14, textTransform: 'uppercase' }}>Platform</div>
            {[['Workflow','/#workflow'],['Analytics','/#analytics'],['Documents','/#workflow'],['Cases','/#workflow']].map(([l,h]) => (
              <a key={l} href={h} className="footer-link">{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#4A5568', letterSpacing: 1.5, marginBottom: 14, textTransform: 'uppercase' }}>Company</div>
            {[['About','/about'],['Security','/#security'],['Client Login','https://app.zuredex.com']].map(([l,h]) => (
              <a key={l} href={h} className="footer-link">{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#4A5568', letterSpacing: 1.5, marginBottom: 14, textTransform: 'uppercase' }}>Legal</div>
            {[['Privacy Policy','/privacy'],['Terms of Service','/terms']].map(([l,h]) => (
              <a key={l} href={h} className="footer-link">{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom" style={{ borderTop: '1px solid #1C2430', marginTop: 32, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12, color: '#4A5568' }}>
          © 2026 Zuredex LLC. All rights reserved.
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#4A5568', letterSpacing: 1, textTransform: 'uppercase' }}>
          HEADQUARTERED IN INDIANAPOLIS, IN, USA · BUILT ON GOOGLE CLOUD
        </div>
      </div>
    </footer>
  );
}
