export default function Page() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Sans:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap');

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
          .nav-hamburger { display: flex !important; }
          .nav-right-login { display: none !important; }
          .hero-grid { grid-template-columns: 1fr !important; padding: 100px 24px 60px !important; gap: 40px !important; }
          .hero-headline { font-size: 38px !important; }
          .dashboard-rep-cards { display: none !important; }
          .dashboard-table { display: none !important; }
          .why-grid { grid-template-columns: 1fr 1fr !important; }
          .recon-grid { grid-template-columns: 1fr !important; }
          .recon-arrow { display: none !important; }
          .analytics-grid { grid-template-columns: 1fr !important; }
          .platform-value-grid { grid-template-columns: 1fr !important; }
          .security-grid { grid-template-columns: 1fr !important; }
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
        }
        @media (max-width: 480px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── SECTION 1: NAVBAR ─────────────────────────────────── */}
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
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 8, color: '#4A5568', letterSpacing: 1, marginTop: 2 }}>REVENUE INTELLIGENCE</div>
          </div>
        </a>

        {/* Center links */}
        <div className="nav-center" style={{ display: 'flex', gap: 28 }}>
          {[['Platform','#platform'],['Workflow','#workflow'],['Security','#security'],['Analytics','#analytics'],['Contact','#cta']].map(([label, href]) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
        </div>

        {/* Hamburger — mobile only, static */}
        <div className="nav-hamburger" style={{ display: 'none', flexDirection: 'column', gap: 4, cursor: 'pointer' }}>
          <div style={{ width: 20, height: 2, background: '#A7B4C0', borderRadius: 1 }} />
          <div style={{ width: 20, height: 2, background: '#A7B4C0', borderRadius: 1 }} />
          <div style={{ width: 16, height: 2, background: '#A7B4C0', borderRadius: 1 }} />
        </div>

        {/* Right */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <a
            href="https://app.zuredex.com"
            className="nav-right-login"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12, color: '#A7B4C0',
              border: '1px solid #22313D', padding: '6px 16px', borderRadius: 4,
            }}
          >Client Login</a>
          <a
            href="#cta"
            className="btn-primary"
            style={{ fontSize: 12, padding: '6px 16px' }}
          >Request Pilot</a>
        </div>
      </nav>

      {/* ── SECTION 2: HERO ───────────────────────────────────── */}
      <section style={{ minHeight: '100vh', background: '#07182A', position: 'relative', overflow: 'hidden' }}>
        {/* Grid overlay — 3% opacity, no animation */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(28,36,48,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(28,36,48,0.03) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }} />
        {/* Subtle teal radial — 4% opacity, contained radius */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(circle 200px at 18% 60%, rgba(59,167,199,0.04), transparent)',
        }} />
        {/* Z diagonal motif — fades out toward bottom */}
        <div className="z-diagonal" style={{ zIndex: 0, maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }} />

        <div
          className="hero-grid"
          style={{
            position: 'relative', zIndex: 1,
            display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80,
            alignItems: 'center', padding: '120px 80px 80px',
            maxWidth: 1400, margin: '0 auto',
          }}
        >
          {/* LEFT COLUMN */}
          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3BA7C7',
              letterSpacing: 3, textTransform: 'uppercase',
              borderLeft: '2px solid #3BA7C7', paddingLeft: 12, marginBottom: 24,
              animation: 'fade-up 0.6s ease forwards',
            }}>REVENUE INTELLIGENCE PLATFORM</div>

            <h1
              className="hero-headline"
              style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 48,
                lineHeight: 1.12, letterSpacing: -1, color: '#F4F7FA',
                animation: 'fade-up 0.6s ease 0.1s both',
              }}
            >
              Every Device.<br />
              Every Case.<br />
              Every <span style={{ color: '#3BA7C7' }}>Dollar.</span>
            </h1>

            <p style={{
              fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 300, fontSize: 18, color: '#A7B4C0',
              lineHeight: 1.75, maxWidth: 480, marginTop: 20,
              animation: 'fade-up 0.6s ease 0.2s both',
            }}>
              AI-powered reconciliation and revenue intelligence for medical device sales organizations.
            </p>

            <p style={{
              fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14, color: '#4A5568',
              lineHeight: 1.75, maxWidth: 460, marginTop: 16,
              animation: 'fade-up 0.6s ease 0.3s both',
            }}>
              Zuredex automates surgical case sheet reconciliation, purchase order matching,
              and unresolved revenue detection — giving distributors and sales operations teams
              the visibility they have never had.
            </p>

            <div style={{
              marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap',
              animation: 'fade-up 0.6s ease 0.4s both',
            }}>
              <a
                href="#cta"
                className="btn-primary"
                style={{ fontSize: 13, padding: '13px 28px' }}
              >Schedule a Walkthrough</a>
              <a
                href="#platform"
                className="btn-secondary"
                style={{ padding: '13px 24px' }}
              >See the Platform</a>
            </div>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#4A5568', marginTop: 20,
              animation: 'fade-up 0.6s ease 0.5s both',
            }}>
              Built in Indiana&nbsp;&middot;&nbsp;Foot &amp; ankle orthopedic vertical&nbsp;&middot;&nbsp;Pilot-ready
            </div>
          </div>

          {/* RIGHT COLUMN: Dashboard preview */}
          <div style={{
            background: '#0F141A',
            border: '1px solid #1C2430',
            borderRadius: 8,
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px #1C2430',
          }}>
            {/* Browser chrome */}
            <div style={{
              height: 36, background: '#151B22', borderBottom: '1px solid #1C2430',
              display: 'flex', alignItems: 'center', padding: '0 14px', gap: 6,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF4D6A', flexShrink: 0 }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B', flexShrink: 0 }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#4A5568', marginLeft: 8 }}>
                zuredex&nbsp;&middot;&nbsp;dashboard&nbsp;&middot;&nbsp;morgan hayes&nbsp;&middot;&nbsp;admin
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: 16 }}>
              {/* KPI cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 10 }}>
                {[
                  { accent: '#3BA7C7', label: 'CASES / MONTH', value: '47', color: '#3BA7C7' },
                  { accent: '#10B981', label: 'MATCH RATE', value: '89.4%', color: '#10B981' },
                  { accent: '#FF4D6A', label: 'AT RISK', value: '$24.8K', color: '#FF4D6A' },
                  { accent: '#F59E0B', label: 'NEEDS REVIEW', value: '6', color: '#F59E0B' },
                ].map(card => (
                  <div key={card.label} style={{ background: '#151B22', border: '1px solid #1C2430', borderRadius: 6, overflow: 'hidden' }}>
                    <div style={{ height: 2, background: card.accent }} />
                    <div style={{ padding: '8px 10px' }}>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 7, color: '#4A5568', letterSpacing: 2, marginBottom: 4 }}>{card.label}</div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: card.color }}>{card.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Alert banner */}
              <div style={{
                background: '#FF4D6A0A', border: '1px solid #FF4D6A22', borderRadius: 4,
                padding: '7px 10px', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF4D6A', flexShrink: 0, animation: 'pulse-dot 2s ease infinite' }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 8, color: '#FF4D6A' }}>
                  ALERT: Jordan Kim&nbsp;&middot;&nbsp;$14.6K at risk&nbsp;&middot;&nbsp;4 unmatched cases
                </span>
              </div>

              {/* Rep cards */}
              <div className="dashboard-rep-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 10 }}>
                {[
                  { initials: 'AR', name: 'Alex Rivera', territory: 'Central Indiana', match: '90%', risk: '$4.2K', matchColor: '#10B981', riskColor: '#F59E0B', accent: '#10B981' },
                  { initials: 'JK', name: 'Jordan Kim', territory: 'South East', match: '76%', risk: '$14.6K', matchColor: '#FF4D6A', riskColor: '#FF4D6A', accent: '#FF4D6A' },
                  { initials: 'CN', name: 'Casey Nguyen', territory: 'North', match: '92%', risk: '$6.0K', matchColor: '#10B981', riskColor: '#F59E0B', accent: '#10B981' },
                ].map(rep => (
                  <div key={rep.initials} style={{
                    background: '#0F141A', border: '1px solid #1C2430', borderRadius: 6,
                    padding: '10px 10px 10px 12px', borderLeft: `3px solid ${rep.accent}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
                      <div style={{
                        width: 26, height: 26, borderRadius: 4, flexShrink: 0,
                        background: `${rep.accent}18`, border: `1px solid ${rep.accent}33`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: "'DM Mono', monospace", fontSize: 8, color: rep.accent, fontWeight: 500,
                      }}>{rep.initials}</div>
                      <div>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 10, color: '#F4F7FA', lineHeight: 1.2 }}>{rep.name}</div>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 7, color: '#4A5568', marginTop: 1 }}>{rep.territory}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 12 }}>
                      <div>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: rep.matchColor, fontWeight: 500 }}>{rep.match}</div>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 7, color: '#4A5568' }}>MATCH</div>
                      </div>
                      <div>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: rep.riskColor, fontWeight: 500 }}>{rep.risk}</div>
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 7, color: '#4A5568' }}>AT RISK</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cases mini-table */}
              <div className="dashboard-table">
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.4fr 1fr 1.3fr 0.7fr', gap: 4, paddingBottom: 4, marginBottom: 2 }}>
                  {['FACILITY','SURGEON','PO','STATUS','CONF'].map(h => (
                    <div key={h} style={{ fontFamily: "'DM Mono', monospace", fontSize: 7, color: '#4A5568', letterSpacing: 1 }}>{h}</div>
                  ))}
                </div>
                {[
                  { facility: 'Crestview Orthopedic', surgeon: 'Dr. N. Calloway', po: 'PO-2026-0513', status: 'MATCHED', sBg: '#3BA7C714', sColor: '#3BA7C7', sBorder: '#3BA7C720', conf: '94%', risk: null },
                  { facility: 'Summit Surgical', surgeon: 'Dr. P. Holden', po: '—', status: 'WAITING FOR PO', sBg: '#F59E0B14', sColor: '#F59E0B', sBorder: 'transparent', conf: '—', risk: '$4,280' },
                  { facility: 'Ridgeline ASC', surgeon: 'Dr. M. Wren', po: 'PO-2026-0510', status: 'MATCHED', sBg: '#3BA7C714', sColor: '#3BA7C7', sBorder: '#3BA7C720', conf: '97%', risk: null },
                  { facility: 'Crestview Orthopedic', surgeon: 'Dr. N. Calloway', po: '—', status: 'NEEDS REVIEW', sBg: '#FF6B3514', sColor: '#FF6B35', sBorder: 'transparent', conf: '61%', risk: '$2,840' },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '2fr 1.4fr 1fr 1.3fr 0.7fr', gap: 4,
                    padding: '5px 0', borderTop: '1px solid #1C2430', alignItems: 'center',
                  }}>
                    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 8, color: '#A7B4C0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.facility}</div>
                    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 8, color: '#A7B4C0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.surgeon}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 7, color: '#4A5568' }}>{row.po}</div>
                    <div style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 6.5, letterSpacing: 0.5,
                      background: row.sBg, color: row.sColor,
                      border: `1px solid ${row.sBorder}`,
                      padding: '2px 4px', borderRadius: 2,
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                    }}>{row.status}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 7.5, color: row.risk ? '#FF4D6A' : '#A7B4C0' }}>
                      {row.risk ?? row.conf}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status bar */}
              <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 8, borderTop: '1px solid #1C2430', paddingTop: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', flexShrink: 0, animation: 'pulse-dot 2s ease infinite' }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 8, color: '#4A5568' }}>
                  LIVE&nbsp;&middot;&nbsp;BIGQUERY&nbsp;&middot;&nbsp;47 CASES&nbsp;&middot;&nbsp;LAST SYNC 2m ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TRUST BAR ──────────────────────────────── */}
      <section
        className="trust-bar"
        style={{
          background: '#0F141A',
          borderTop: '1px solid #1C2430', borderBottom: '1px solid #1C2430',
          padding: '20px 80px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 24,
        }}
      >
        {[
          { sym: '⬡', label: 'Secure Cloud Infrastructure' },
          { sym: '◎', label: 'AI-Assisted Validation' },
          { sym: '⊞', label: 'Role-Based Access Control' },
          { sym: '≡', label: 'Workflow Audit Logging' },
          { sym: '⊘', label: 'Duplicate Prevention' },
          { sym: '⬡', label: 'Multi-Tenant Architecture' },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#3BA7C7', fontSize: 13, lineHeight: 1 }}>{item.sym}</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#A7B4C0', letterSpacing: 1.5, textTransform: 'uppercase' }}>{item.label}</span>
          </div>
        ))}
      </section>

      {/* ── SECTION 4: TECH STRIP ─────────────────────────────── */}
      <section className="tech-strip" style={{ background: '#07182A', padding: '40px 80px', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 4, marginBottom: 12, textTransform: 'uppercase' }}>
            BUILT ON ENTERPRISE INFRASTRUCTURE
          </div>
          <div style={{ width: 48, height: 1, background: 'rgba(59,167,199,0.2)', marginBottom: 20 }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10 }}>
          {['Google Cloud','BigQuery','Firebase','Cloud Run','Power BI Embedded','Next.js 14','Document AI','Python'].map(tech => (
            <span key={tech} className="tech-item">{tech}</span>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: WHY NOW ────────────────────────────────── */}
      <section id="platform" className="section-pad" style={{ background: '#0F141A', padding: '86px 80px' }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>THE MARKET WINDOW</div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', letterSpacing: -0.5, marginBottom: 16, maxWidth: 700, lineHeight: 1.14 }}>
          The infrastructure layer that medical device sales has been missing.
        </h2>
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 16, color: '#A7B4C0', maxWidth: 560, marginBottom: 60, lineHeight: 1.75 }}>
          Four forces have created an immediate window for reconciliation automation in this market.
        </p>
        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {[
            { num: '01', title: 'Document AI reached production reliability', body: 'Parsing surgical PDFs with high confidence is now a solved infrastructure problem.' },
            { num: '02', title: 'Distributors face margin pressure without visibility', body: 'Manual reconciliation leaves untracked revenue in every sales cycle with no systematic way to recover it.' },
            { num: '03', title: 'Hospital systems are accelerating digitization', body: 'Purchase orders and case documentation are increasingly structured and machine-readable.' },
            { num: '04', title: 'No purpose-built tool exists for this workflow', body: 'Generic CRMs and spreadsheets are the current state. There is no reconciliation infrastructure built for device sales.' },
          ].map(card => (
            <div key={card.num} className="why-card">
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#3BA7C7' }}>{card.num}</div>
              <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 16, color: '#F4F7FA', marginTop: 12, lineHeight: 1.4 }}>{card.title}</div>
              <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14, color: '#A7B4C0', lineHeight: 1.75, marginTop: 8 }}>{card.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: RECONCILIATION ENGINE ─────────────────── */}
      <section id="workflow" className="section-pad" style={{ background: '#07182A', borderTop: '1px solid #1C2430', borderBottom: '1px solid #1C2430', padding: '86px 80px' }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>THE ENGINE</div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', letterSpacing: -0.5, marginBottom: 16, lineHeight: 1.14 }}>
          From fragmented documents to<br />operational intelligence.
        </h2>
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 16, color: '#A7B4C0', maxWidth: 520, marginBottom: 64, lineHeight: 1.75 }}>
          Every surgical case generates documents across multiple systems. Zuredex connects them automatically.
        </p>

        <div className="recon-grid" style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 80px 1fr 80px 1fr', alignItems: 'start' }}>
          {/* Inputs */}
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#4A5568', letterSpacing: 2, marginBottom: 20, textTransform: 'uppercase' }}>DOCUMENT INPUTS</div>
            {['Case Sheets (PDF)','Purchase Orders','Uploaded Documents','Processing Queue','Email Attachments'].map(item => (
              <div key={item} style={{
                background: '#151B22', border: '1px solid #1C2430', borderRadius: 4,
                padding: '10px 14px', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10,
                boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3BA7C7', flexShrink: 0 }} />
                <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, color: '#A7B4C0' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Arrow 1 */}
          <div className="recon-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 60 }}>
            <svg width="100%" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="12" x2="72" y2="12" stroke="#3BA7C7" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 8" strokeLinecap="round" style={{ animation: 'dash-flow 1.5s linear infinite' }} />
              <polygon points="68,7 80,12 68,17" fill="#3BA7C7" fillOpacity="0.6" />
            </svg>
          </div>

          {/* Engine */}
          <div style={{
            background: 'linear-gradient(135deg, #151B22, #0F141A)',
            border: '1px solid #1C2430', borderRadius: 8, padding: 24,
            boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 8, color: '#3BA7C7', letterSpacing: 2, marginBottom: 16, textTransform: 'uppercase' }}>AI RECONCILIATION ENGINE</div>
            {['Confidence Scoring','Duplicate Detection','Field Normalization','Document Validation','Exception Routing','Audit Logging'].map(cap => (
              <div key={cap} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#3BA7C7', flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#A7B4C0' }}>{cap}</span>
              </div>
            ))}
          </div>

          {/* Arrow 2 */}
          <div className="recon-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 60 }}>
            <svg width="100%" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="12" x2="72" y2="12" stroke="#3BA7C7" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 8" strokeLinecap="round" style={{ animation: 'dash-flow 1.5s linear 0.5s infinite' }} />
              <polygon points="68,7 80,12 68,17" fill="#3BA7C7" fillOpacity="0.6" />
            </svg>
          </div>

          {/* Outputs */}
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#4A5568', letterSpacing: 2, marginBottom: 20, textTransform: 'uppercase' }}>OPERATIONAL OUTPUTS</div>
            {[
              { label: 'Matched Revenue', color: '#10B981' },
              { label: 'Unresolved Alerts', color: '#FF4D6A' },
              { label: 'Executive Analytics', color: '#8B5CF6' },
              { label: 'Review Queues', color: '#FF6B35' },
              { label: 'Workflow Reports', color: '#3BA7C7' },
            ].map(item => (
              <div key={item.label} style={{
                background: '#151B22', border: '1px solid #1C2430', borderRadius: 4,
                padding: '10px 14px', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10,
                boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, color: '#A7B4C0' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: VIDEO PLACEHOLDER ─────────────────────── */}
      <section className="section-pad" style={{ background: '#0F141A', padding: '86px 80px' }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>PLATFORM WALKTHROUGH</div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', marginBottom: 16, lineHeight: 1.14 }}>See Zuredex in action.</h2>
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 16, color: '#A7B4C0', marginBottom: 48, lineHeight: 1.75, maxWidth: 600 }}>
          Watch how Zuredex processes a surgical case sheet, matches a purchase order, and surfaces revenue at risk — in real time.
        </p>

        {/* SWAP: replace inner div with <video> or <iframe> when ready */}
        {/* <video autoPlay muted loop playsInline src="/demo.mp4" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
        {/* <iframe src="YOUR_LOOM_OR_YOUTUBE_EMBED_URL" width="100%" height="100%" frameBorder="0" allowFullScreen /> */}
        <div style={{
          maxWidth: 900, margin: '0 auto',
          background: '#0F141A', border: '1px solid #1C2430', borderRadius: 8,
          overflow: 'hidden', aspectRatio: '16 / 9', position: 'relative',
          boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: '#151B22',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              border: '2px solid #3BA7C7',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                width: 0, height: 0,
                borderTop: '12px solid transparent',
                borderBottom: '12px solid transparent',
                borderLeft: '24px solid #3BA7C7',
                marginLeft: 6,
              }} />
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#4A5568', letterSpacing: 2, marginTop: 24, textTransform: 'uppercase' }}>
              PLATFORM WALKTHROUGH · 4 MIN
            </div>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, color: '#4A5568', marginTop: 8 }}>
              Recording uploading — check back shortly
            </div>
          </div>
        </div>

        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#4A5568', textAlign: 'center', marginTop: 16 }}>
          Foot &amp; ankle orthopedic vertical&nbsp;&middot;&nbsp;Demo Medical Co&nbsp;&middot;&nbsp;Live BigQuery data
        </div>
      </section>

      {/* ── SECTION 8: OPERATIONAL VISIBILITY ────────────────── */}
      <section id="analytics" className="section-pad" style={{ background: '#07182A', borderTop: '1px solid #1C2430', borderBottom: '1px solid #1C2430', padding: '86px 80px' }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>OPERATIONAL ANALYTICS</div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', letterSpacing: -0.5, marginBottom: 0, lineHeight: 1.14, maxWidth: 700 }}>
          Visibility built around how device sales organizations actually work.
        </h2>

        {/* Callout */}
        <div style={{
          maxWidth: 700, margin: '48px auto',
          background: '#151B22',
          border: '1px solid #1C2430', borderLeft: '3px solid #3BA7C7',
          borderRadius: 4, padding: '28px 36px',
        }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: '#F4F7FA', lineHeight: 1.5 }}>
            Generic CRMs track relationships.<br />
            Zuredex tracks actual surgical revenue.
          </div>
        </div>

        <div className="analytics-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, maxWidth: 1000, margin: '0 auto' }}>
          {/* Stat rows */}
          <div>
            {[
              { label: 'Revenue by Rep', color: '#3BA7C7' },
              { label: 'Revenue by Surgeon', color: '#3BA7C7' },
              { label: 'Unresolved Case Exposure', color: '#FF4D6A' },
              { label: 'Rep Match Rate', color: '#10B981' },
              { label: 'Avg Days to Reconcile', color: '#F59E0B' },
              { label: 'Review Queue Depth', color: '#FF6B35' },
              { label: 'Duplicate Prevention', color: '#10B981' },
              { label: 'Monthly Revenue Trend', color: '#8B5CF6' },
            ].map(stat => (
              <div key={stat.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid #1C2430' }}>
                <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14, color: '#A7B4C0' }}>{stat.label}</span>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: stat.color, flexShrink: 0 }} />
              </div>
            ))}
          </div>

          {/* Rep bars + stat grid */}
          <div>
            <div style={{ marginBottom: 32 }}>
              {[
                { name: 'Alex Rivera', pct: 90, color: '#10B981' },
                { name: 'Jordan Kim', pct: 76, color: '#F59E0B' },
                { name: 'Casey Nguyen', pct: 92, color: '#10B981' },
              ].map(rep => (
                <div key={rep.name} style={{ marginBottom: 22 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
                    <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, color: '#F4F7FA' }}>{rep.name}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: rep.color }}>{rep.pct}%</span>
                  </div>
                  <div style={{ width: '100%', height: 6, background: '#1C2430', borderRadius: 3 }}>
                    <div style={{ width: `${rep.pct}%`, height: '100%', background: rep.color, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { value: '$173K', label: 'Total Reconciled', color: '#10B981' },
                { value: '$24.8K', label: 'At Risk', color: '#FF4D6A' },
                { value: '1.4d', label: 'Avg Match Time', color: '#F59E0B' },
                { value: '89.4%', label: 'Match Rate', color: '#3BA7C7' },
              ].map(stat => (
                <div key={stat.label} className="glass-card" style={{ borderRadius: 6, padding: '16px 18px' }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#4A5568', letterSpacing: 1, marginTop: 4, textTransform: 'uppercase' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: PLATFORM VALUE ─────────────────────────── */}
      <section className="section-pad" style={{ background: '#0F141A', padding: '86px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>PLATFORM VALUE</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', lineHeight: 1.14 }}>
            Operational leverage for<br />modern device sales teams.
          </h2>
          <div className="platform-value-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 56 }}>
            {[
              { accent: '#FF4D6A', icon: '↓ LEAKAGE', iconColor: '#FF4D6A', title: 'Reduce Revenue Leakage', body: 'Every unmatched case sheet is revenue at risk. Zuredex catches gaps automatically, before they fall through the cracks at end of month.' },
              { accent: '#10B981', icon: '⚡ SPEED', iconColor: '#10B981', title: 'Accelerate Reconciliation', body: 'Manual matching across email, spreadsheets, and portals takes days. Zuredex processes uploads in minutes and flags exceptions for human review.' },
              { accent: '#8B5CF6', icon: '◎ VISIBILITY', iconColor: '#8B5CF6', title: 'Improve Operational Visibility', body: 'Rep-level performance, facility analytics, and unresolved revenue tracking — organized into a single operational command center.' },
            ].map(card => (
              <div key={card.title} className="glass-card" style={{ borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ height: 2, background: '#3BA7C7' }} />
                <div style={{ padding: '24px 28px' }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: card.iconColor, marginBottom: 16, fontWeight: 500 }}>{card.icon}</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: '#F4F7FA', marginBottom: 12, lineHeight: 1.3 }}>{card.title}</div>
                  <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 15, color: '#A7B4C0', lineHeight: 1.75 }}>{card.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: SECURITY ──────────────────────────────── */}
      <section id="security" className="section-pad" style={{ background: '#07182A', borderTop: '1px solid #1C2430', borderBottom: '1px solid #1C2430', padding: '86px 80px' }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>SECURITY &amp; GOVERNANCE</div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', lineHeight: 1.14, marginBottom: 16 }}>
          Designed for secure<br />operational workflows.
        </h2>
        <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14, color: '#4A5568', fontStyle: 'italic', maxWidth: 600, marginBottom: 48, lineHeight: 1.75 }}>
          Designed to minimize unnecessary PHI storage and support secure healthcare-adjacent operational workflows.
          Zuredex does not store clinical records or patient data.
        </p>
        <div className="security-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {[
            { icon: 'RBAC', title: 'Role-Based Access Control', body: 'Admin, manager, rep, and finance roles with granular permission enforcement.' },
            { icon: 'LOG', title: 'Full Audit Trail', body: 'Every status change, correction, and review action is logged with timestamp and user attribution.' },
            { icon: 'ISO', title: 'Tenant Separation', body: 'Organization data is isolated at the query layer. No cross-tenant data access.' },
            { icon: 'ENC', title: 'Encrypted Cloud Storage', body: 'Documents stored in Google Cloud Storage with encryption at rest and in transit.' },
            { icon: 'SHA', title: 'Duplicate Prevention', body: 'SHA-256 document fingerprinting prevents duplicate uploads from entering the pipeline.' },
            { icon: 'PHI', title: 'No PHI Storage', body: 'Zuredex processes operational metadata, not clinical records. Patient identifiers are not required or retained.' },
          ].map(item => (
            <div key={item.title} className="glass-card" style={{ display: 'flex', gap: 14, padding: 20, borderRadius: 6 }}>
              <div style={{
                width: 32, height: 32, flexShrink: 0,
                background: '#3BA7C714', border: '1px solid #1C2430', borderRadius: 4,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'DM Mono', monospace", fontSize: 7, color: '#3BA7C7', letterSpacing: 0.5, fontWeight: 500,
              }}>{item.icon}</div>
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: '#F4F7FA', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, color: '#A7B4C0', lineHeight: 1.75 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 11: FINAL CTA ─────────────────────────────── */}
      <section id="cta" className="cta-pad" style={{ background: '#0F141A', padding: '100px 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Grid — 3% opacity, no animation */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(28,36,48,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(28,36,48,0.03) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }} />
        {/* Z diagonal motif — fades in from top */}
        <div className="z-diagonal" style={{ zIndex: 0, maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>EARLY ACCESS</div>
          <h2 className="cta-headline" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 44, color: '#F4F7FA', letterSpacing: -1, lineHeight: 1.12, marginBottom: 20 }}>
            Operational intelligence for modern medical device organizations.
          </h2>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: 300, fontSize: 18, color: '#A7B4C0', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 24px' }}>
            Zuredex is preparing pilot deployments for distributors seeking to reduce manual reconciliation and improve revenue visibility.
          </p>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: '#4A5568', letterSpacing: 1.5, marginBottom: 36, textTransform: 'uppercase', lineHeight: 1.8 }}>
            PILOT-READY · FOOT &amp; ANKLE VERTICAL · INDIANA-BASED · SEEKING DESIGN PARTNERS
          </div>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* SWAP: replace Calendly URL with your actual scheduling link */}
            <a
              href="https://cal.com/zuredex/60min"
              className="btn-primary"
              style={{ fontSize: 13, padding: '16px 32px' }}
            >Schedule a Walkthrough</a>
            <a
              href="mailto:analytics@zuredex.com"
              className="btn-secondary"
              style={{ padding: '16px 28px' }}
            >Send a Message</a>
          </div>
          <div style={{ marginTop: 36, textAlign: 'center' }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#3BA7C7', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12 }}>
              WHY WE BUILT THIS
            </div>
            <div style={{
              maxWidth: 520, margin: '0 auto',
              padding: '20px 24px',
              borderLeft: '2px solid #3BA7C7',
              background: 'rgba(59,167,199,0.03)',
              borderRadius: '0 4px 4px 0',
              textAlign: 'left',
            }}>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 14, fontStyle: 'italic', color: '#A7B4C0', lineHeight: 1.8, margin: 0 }}>
                Built in Indiana by Zuredex LLC, informed by firsthand exposure to medical device sales operations,
                manual PO reconciliation, and rep-level reporting workflows.
              </p>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#4A5568', letterSpacing: 2, marginTop: 12, textTransform: 'uppercase' }}>
                — ZUREDEX · INDIANA, USA · 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FOOTER ────────────────────────────────── */}
      <footer style={{ background: '#07182A', borderTop: '1px solid #1C2430', padding: '48px 80px' }}>
        <div className="footer-top" style={{ display: 'flex', justifyContent: 'space-between', gap: 32 }}>
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="/branding/zuredex-symbol.svg" width="20" height="20" alt="Zuredex" style={{ display: 'block' }} />
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 2, color: '#F4F7FA' }}>ZUREDEX</span>
            </div>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, color: '#4A5568', marginTop: 8, lineHeight: 1.75 }}>
              Revenue Intelligence for Medical Device<br />Sales Operations
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: '#4A5568', marginTop: 6 }}>analytics@zuredex.com</div>
          </div>

          {/* Link columns */}
          <div className="footer-links" style={{ display: 'flex', gap: 48 }}>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#4A5568', letterSpacing: 1.5, marginBottom: 14, textTransform: 'uppercase' }}>Platform</div>
              {[['Workflow','#workflow'],['Analytics','#analytics'],['Documents','#workflow'],['Cases','#workflow']].map(([l,h]) => (
                <a key={l} href={h} className="footer-link">{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#4A5568', letterSpacing: 1.5, marginBottom: 14, textTransform: 'uppercase' }}>Company</div>
              {[['Security','#security'],['Contact','#cta'],['Client Login','https://app.zuredex.com']].map(([l,h]) => (
                <a key={l} href={h} className="footer-link">{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: '#4A5568', letterSpacing: 1.5, marginBottom: 14, textTransform: 'uppercase' }}>Legal</div>
              {/* SWAP: replace # with actual privacy/terms URLs */}
              {[['Privacy','#'],['Terms','#']].map(([l,h]) => (
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
            BUILT ON GOOGLE CLOUD · INDIANA, USA
          </div>
        </div>
      </footer>
    </>
  );
}
