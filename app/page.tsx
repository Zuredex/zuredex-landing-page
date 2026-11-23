import Image from "next/image";
import territory from "@/public/territory-desktop.png";
import dashboard from "@/public/dashboard-desktop.png";
import mobileDashboard from "@/public/dashboard-mobile.png";
import mobileCases from "@/public/cases-mobile.png";
import SiteStyles from "@/components/SiteStyles";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { analyticsSampleMetrics, heroSampleMetrics, sampleCaption } from "@/lib/sample-data";

export default function Page() {
  return (
    <>
      <SiteStyles />
      <SiteNav />
      <main id="main-content" tabIndex={-1}>

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
              fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#3BA7C7',
              letterSpacing: 3, textTransform: 'uppercase',
              borderLeft: '2px solid #3BA7C7', paddingLeft: 12, marginBottom: 24,
            }}>RECONCILE • OPERATE • UNDERSTAND</div>

            <h1
              className="hero-headline"
              style={{
                fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 48,
                lineHeight: 1.12, letterSpacing: -1, color: '#F4F7FA',
              }}
            >
              Every Device.<br />
              Every Case.<br />
              Every <span style={{ color: '#3BA7C7' }}>Dollar.</span>
            </h1>

            <p style={{
              fontFamily: "var(--font-plex), sans-serif", fontWeight: 300, fontSize: 18, color: '#A7B4C0',
              lineHeight: 1.75, maxWidth: 480, marginTop: 20,
            }}>
              AI-powered reconciliation and revenue intelligence for medical device distributors.
            </p>

            <p style={{
              fontFamily: "var(--font-plex), sans-serif", fontSize: 14, color: '#A1B8C9',
              lineHeight: 1.75, maxWidth: 460, marginTop: 16,
            }}>
              AI reads it, a person confirms every case in Manual Review.
              Match case sheets to purchase orders and calculate commissions from confirmed revenue.
            </p>

            <div style={{
              marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap',
            }}>
              <a
                href="#cta"
                className="btn-primary"
                style={{ fontSize: 13, padding: '13px 28px' }}
              >Request Demo</a>
              <a
                href="#platform"
                className="btn-secondary"
                style={{ padding: '13px 24px' }}
              >See the Platform</a>
            </div>

            <div style={{
              fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#A1B8C9', marginTop: 20,
            }}>
              Built in Indiana&nbsp;&middot;&nbsp;Medical device sales operations
            </div>
          </div>

          {/* Static fictional values are rendered on the server. */}
          <div className="dashboard-preview" role="group" aria-label="Sample workflow preview">
            <div className="preview-heading">Zuredex · workflow preview</div>
            <div className="preview-metrics">
              {heroSampleMetrics.map(({ label, value }) => (
                <div className="preview-card" key={label} role="group" aria-label={`${sampleCaption}: ${label}, ${value}`}>
                  <div>{label}</div>
                  <span>{value}</span>
                  <small className="sample-label">{sampleCaption}</small>
                </div>
              ))}
            </div>
            <p className="preview-note">AI reads it, a person confirms every case in Manual Review.</p>
            <dl className="preview-statuses">
              <div><dt>Case sheet</dt><dd>Manual Review</dd></div>
              <div><dt>Purchase order</dt><dd>Waiting for PO</dd></div>
              <div><dt>Revenue</dt><dd>Confirmed after review and matching</dd></div>
            </dl>
            <p className="preview-caption">Sample workflow view</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CAPABILITY PILLARS ─────────────────────── */}
      <section className="section-pad" style={{ background: '#0F141A', padding: '86px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>SIX CAPABILITIES</div>
          <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', lineHeight: 1.14, marginBottom: 16 }}>
            More than reconciliation.<br />An operational intelligence platform.
          </h2>
          <p style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 16, color: '#A7B4C0', maxWidth: 600, marginBottom: 48, lineHeight: 1.75 }}>
            Six capabilities working from the same reconciled data — for operations teams and reps alike.
          </p>
          <div className="security-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
            {[
              { num: '01', title: 'Reconciliation', body: 'AI reads it, a person confirms every case in Manual Review.' },
              { num: '02', title: 'Revenue Intelligence', body: 'Visibility into confirmed revenue, cases awaiting POs, and rep performance.' },
              { num: '03', title: 'Territory Intelligence', body: "Geographic and facility-level visibility into where reps are working and what's being sold." },
              { num: '04', title: 'Commission Tracking', body: 'Commission calculation with split payees, flat fees, and per-rep payouts.' },
              { num: '05', title: 'Device Usage', body: "Visibility into device usage in your case data." },
              { num: '06', title: 'Rep Portal', body: 'Reps get their own view — case status, pipeline, and performance — not just administrators.' },
            ].map(item => (
              <div key={item.title} className="glass-card" style={{ display: 'flex', gap: 14, padding: 20, borderRadius: 6 }}>
                <div style={{
                  width: 32, height: 32, flexShrink: 0,
                  background: '#3BA7C714', border: '1px solid #1C2430', borderRadius: 4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "var(--font-dm), monospace", fontSize: 11, color: '#3BA7C7', letterSpacing: 0.5, fontWeight: 500,
                }}>{item.num}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 14, color: '#F4F7FA', marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 13, color: '#A7B4C0', lineHeight: 1.75 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#A1B8C9', textAlign: 'center', marginTop: 32 }}>
            Built for how medical device sales actually works — for operations teams and reps alike.
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TRUST BAR ──────────────────────────────── */}
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
            <span style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#A7B4C0', letterSpacing: 1.5, textTransform: 'uppercase' }}>{item.label}</span>
          </div>
        ))}
      </section>

      {/* ── SECTION 6: WHY NOW ────────────────────────────────── */}
      <section id="platform" className="section-pad" style={{ background: '#0F141A', padding: '86px 80px' }}>
        <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>THE DAILY WORKFLOW</div>
        <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', letterSpacing: -0.5, marginBottom: 16, maxWidth: 700, lineHeight: 1.14 }}>
          Bring case sheets, POs, and commissions into view.
        </h2>
        <p style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 16, color: '#A7B4C0', maxWidth: 560, marginBottom: 60, lineHeight: 1.75 }}>
          Keep document review and revenue visibility connected to the work your team does every day.
        </p>
        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {[
            { num: '01', title: 'Case sheets read by hand', body: 'AI extracts fields and line items from typed and handwritten case sheets for human review.' },
            { num: '02', title: 'Owners need current numbers', body: 'Review confirmed revenue and cases waiting for POs alongside rep performance.' },
            { num: '03', title: 'POs arrive late or never', body: 'Match case sheets to purchase orders and flag price mismatches for review.' },
            { num: '04', title: 'Double entry between spreadsheets and email', body: 'Bring extracted case details, PO matching, and commission calculations into a shared workflow.' },
          ].map(card => (
            <div key={card.num} className="why-card">
              <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 11, color: '#3BA7C7' }}>{card.num}</div>
              <div style={{ fontFamily: "var(--font-plex), sans-serif", fontWeight: 600, fontSize: 16, color: '#F4F7FA', marginTop: 12, lineHeight: 1.4 }}>{card.title}</div>
              <div style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 14, color: '#A7B4C0', lineHeight: 1.75, marginTop: 8 }}>{card.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: RECONCILIATION ENGINE ─────────────────── */}
      <section id="workflow" className="section-pad" style={{ background: '#07182A', borderTop: '1px solid #1C2430', borderBottom: '1px solid #1C2430', padding: '86px 80px' }}>
        <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>THE ENGINE</div>
        <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', letterSpacing: -0.5, marginBottom: 16, lineHeight: 1.14 }}>
          From fragmented documents to<br />operational intelligence.
        </h2>
        <p style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 16, color: '#A7B4C0', maxWidth: 520, marginBottom: 64, lineHeight: 1.75 }}>
          AI reads it, a person confirms every case in Manual Review. Case sheets and POs stay connected through matching and price-mismatch review.
        </p>

        <div className="recon-grid" style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 80px 1fr 80px 1fr', alignItems: 'start' }}>
          {/* Inputs */}
          <div>
            <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 9, color: '#A1B8C9', letterSpacing: 2, marginBottom: 20, textTransform: 'uppercase' }}>DOCUMENT INPUTS</div>
            {['Case Sheets','Purchase Orders','Document Uploads','Phone Camera'].map(item => (
              <div key={item} style={{
                background: '#151B22', border: '1px solid #1C2430', borderRadius: 4,
                padding: '10px 14px', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10,
                boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3BA7C7', flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 13, color: '#A7B4C0' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Arrow 1 */}
          <div className="recon-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 60 }}>
            <svg width="100%" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="12" x2="72" y2="12" stroke="#3BA7C7" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 8" strokeLinecap="round"  />
              <polygon points="68,7 80,12 68,17" fill="#3BA7C7" fillOpacity="0.6" />
            </svg>
          </div>

          {/* Engine */}
          <div style={{
            background: 'linear-gradient(135deg, #151B22, #0F141A)',
            border: '1px solid #1C2430', borderRadius: 8, padding: 24,
            boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}>
            <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 8, color: '#3BA7C7', letterSpacing: 2, marginBottom: 16, textTransform: 'uppercase' }}>AI EXTRACTION & HUMAN REVIEW</div>
            {['AI-Extracted Fields','Manual Review of Every Case','Human Confirmation','PO Matching','Price-Mismatch Detection','Duplicate Suggestions'].map(cap => (
              <div key={cap} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#3BA7C7', flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#A7B4C0' }}>{cap}</span>
              </div>
            ))}
          </div>

          {/* Arrow 2 */}
          <div className="recon-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 60 }}>
            <svg width="100%" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="12" x2="72" y2="12" stroke="#3BA7C7" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 8" strokeLinecap="round"  />
              <polygon points="68,7 80,12 68,17" fill="#3BA7C7" fillOpacity="0.6" />
            </svg>
          </div>

          {/* Outputs */}
          <div>
            <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 9, color: '#A1B8C9', letterSpacing: 2, marginBottom: 20, textTransform: 'uppercase' }}>OPERATIONAL OUTPUTS</div>
            {[
              { label: 'Confirmed Revenue', color: '#10B981' },
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
                <span style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 13, color: '#A7B4C0' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: WORKFLOW WALKTHROUGH ──────────────────── */}
      <section className="section-pad" style={{ background: '#0F141A', padding: '86px 80px' }}>
        <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>THE WORKFLOW</div>
        <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', marginBottom: 16, lineHeight: 1.14 }}>See Zuredex in action.</h2>
        <p style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 16, color: '#A7B4C0', marginBottom: 48, lineHeight: 1.75, maxWidth: 600 }}>
          AI reads it, a person confirms every case in Manual Review.
          Match reviewed case sheets to purchase orders and see confirmed revenue alongside cases awaiting a PO.
        </p>

        <div style={{
          maxWidth: 900, margin: '0 auto',
          background: '#0F141A', border: '1px solid #1C2430', borderRadius: 8,
          overflow: 'hidden', aspectRatio: '16 / 9', position: 'relative',
          boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
        }}>
          <Image
            src={territory}
            sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1060px) calc(100vw - 160px), 900px"
            alt="Zuredex territory intelligence dashboard with facility drill-down"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', background: '#151B22' }}
          />
        </div>

        <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#A1B8C9', textAlign: 'center', marginTop: 16 }}>
          {sampleCaption}
        </div>
      </section>

      {/* ── SECTION 9: OPERATIONAL VISIBILITY ────────────────── */}
      <section id="analytics" className="section-pad" style={{ background: '#07182A', borderTop: '1px solid #1C2430', borderBottom: '1px solid #1C2430', padding: '86px 80px' }}>
        <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>OPERATIONAL ANALYTICS</div>
        <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', letterSpacing: -0.5, marginBottom: 0, lineHeight: 1.14, maxWidth: 700 }}>
          Visibility built around how medical device distributors actually work.
        </h2>

        {/* Callout */}
        <div style={{
          maxWidth: 700, margin: '48px auto',
          background: '#151B22',
          border: '1px solid #1C2430', borderLeft: '3px solid #3BA7C7',
          borderRadius: 4, padding: '28px 36px',
        }}>
          <div style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 20, color: '#F4F7FA', lineHeight: 1.5 }}>
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
                <span style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 14, color: '#A7B4C0' }}>{stat.label}</span>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: stat.color, flexShrink: 0 }} />
              </div>
            ))}
          </div>

          {/* Rep bars + stat grid */}
          <div>
            <div style={{ marginBottom: 32 }}>
              {[
                { name: 'Alex Rivera', color: '#10B981' },
                { name: 'Jordan Kim', color: '#F59E0B' },
                { name: 'Casey Nguyen', color: '#10B981' },
              ].map(rep => (
                <div key={rep.name} style={{ marginBottom: 22 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
                    <span style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 13, color: '#F4F7FA' }}>{rep.name}</span>
                    <span style={{ fontFamily: "var(--font-dm), monospace", fontSize: 11, color: rep.color }}>—</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 14 }}>
              {analyticsSampleMetrics.map(stat => (
                <div key={stat.label} className="glass-card sample-metric" role="group" aria-label={`${sampleCaption}: ${stat.label}, ${stat.value}`} style={{ borderRadius: 6, padding: '16px 18px' }}>
                  <div className="sample-value" style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 20, color: stat.color }}>{stat.value}</div>
                  <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 9, color: '#A1B8C9', letterSpacing: 1, marginTop: 4, textTransform: 'uppercase' }}>{stat.label}</div>
                  <small className="sample-label">{sampleCaption}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: REAL PRODUCT PROOF ───────────────────── */}
      <section className="section-pad" style={{ background: '#07182A', borderTop: '1px solid #1C2430', padding: '86px 80px' }}>
        <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>PRODUCT VIEWS</div>
        <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', lineHeight: 1.14, marginBottom: 48, maxWidth: 700 }}>
          Built for the office and the field.
        </h2>
        <div
          className="product-proof-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 24, maxWidth: 1100, margin: '0 auto', alignItems: 'center' }}
        >
          <div style={{
            background: '#0F141A', border: '1px solid #1C2430', borderRadius: 8,
            overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}>
            <Image src={dashboard} sizes="(max-width: 768px) calc(100vw - 48px), 660px" alt="Zuredex admin revenue dashboard" style={{ display: 'block', width: '100%', height: 'auto' }} />
          </div>
          {/* Overlapping mobile pair — dashboard behind/top-left, cases in front/bottom-right */}
          <div style={{ position: 'relative', width: '100%', maxWidth: 320, height: 420, margin: '0 auto' }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '62%', zIndex: 1,
              background: '#0F141A', border: '1px solid #1C2430', borderRadius: 8,
              overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}>
              <Image src={mobileDashboard} sizes="200px" alt="Zuredex mobile dashboard" style={{ display: 'block', width: '100%', height: 'auto' }} />
            </div>
            <div style={{
              position: 'absolute', bottom: 0, right: 0, width: '62%', zIndex: 2,
              background: '#0F141A', border: '1px solid #22313D', borderRadius: 8,
              overflow: 'hidden', boxShadow: '0 12px 28px rgba(0,0,0,0.6)',
            }}>
              <Image src={mobileCases} sizes="200px" alt="Zuredex mobile case list" style={{ display: 'block', width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#A1B8C9', textAlign: 'center', marginTop: 32 }}>
          Desktop for operations, mobile for the field&nbsp;&middot;&nbsp;reps can review case status and performance.
        </div>
      </section>

      {/* ── SECTION 11: SECURITY ──────────────────────────────── */}
      <section id="security" className="section-pad" style={{ background: '#07182A', borderTop: '1px solid #1C2430', borderBottom: '1px solid #1C2430', padding: '86px 80px' }}>
        <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>SECURITY &amp; GOVERNANCE</div>
        <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 34, color: '#F4F7FA', lineHeight: 1.14, marginBottom: 16 }}>
          Designed for secure<br />operational workflows.
        </h2>
        <p style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 14, color: '#A1B8C9', fontStyle: 'italic', maxWidth: 600, marginBottom: 48, lineHeight: 1.75 }}>
          Built to minimize PHI exposure and support secure, BAA-governed operational workflows. Zuredex extracts
          operational and commercial data for reconciliation — patient identifiers are not required for matching
          and are not extracted into structured records.
        </p>
        <div className="security-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {[
            { icon: 'RBAC', title: 'Role-Based Access Control', body: 'Admin, manager, rep, and finance roles with granular permission enforcement.' },
            { icon: 'LOG', title: 'Full Audit Trail', body: 'Every status change, correction, and review action is logged with timestamp and user attribution.' },
            { icon: 'ISO', title: 'Tenant Separation', body: 'Organization data is isolated at the query layer. No cross-tenant data access.' },
            { icon: 'ENC', title: 'Encrypted Cloud Storage', body: 'Documents stored in Google Cloud Storage with encryption at rest and in transit.' },
            { icon: 'SHA', title: 'Duplicate Prevention', body: 'SHA-256 document fingerprinting prevents duplicate uploads from entering the pipeline.' },
            { icon: 'PHI', title: 'PHI-Minimized by Design', body: 'Reconciliation runs on operational and commercial fields, not clinical detail. Patient identifiers are not required for matching, and document access is access-controlled and audit-logged.' },
          ].map(item => (
            <div key={item.title} className="glass-card" style={{ display: 'flex', gap: 14, padding: 20, borderRadius: 6 }}>
              <div style={{
                width: 32, height: 32, flexShrink: 0,
                background: '#3BA7C714', border: '1px solid #1C2430', borderRadius: 4,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "var(--font-dm), monospace", fontSize: 7, color: '#3BA7C7', letterSpacing: 0.5, fontWeight: 500,
              }}>{item.icon}</div>
              <div>
                <div style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 14, color: '#F4F7FA', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 13, color: '#A7B4C0', lineHeight: 1.75 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 12: FINAL CTA ─────────────────────────────── */}
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
          <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#3BA7C7', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>EXPLORE THE WORKFLOW</div>
          <h2 className="cta-headline" style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 44, color: '#F4F7FA', letterSpacing: -1, lineHeight: 1.12, marginBottom: 20 }}>
            Operational intelligence for modern medical device distributors.
          </h2>
          <p style={{ fontFamily: "var(--font-plex), sans-serif", fontWeight: 300, fontSize: 18, color: '#A7B4C0', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 24px' }}>
            See how Zuredex connects document intake, Manual Review, PO matching, and commission calculations.
          </p>
          <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: '#A1B8C9', letterSpacing: 1.5, marginBottom: 36, textTransform: 'uppercase', lineHeight: 1.8 }}>
            CASE SHEETS · PURCHASE ORDERS · COMMISSIONS
          </div>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* SWAP: replace Calendly URL with your actual scheduling link */}
            <a
              href="https://cal.com/zuredex/60min"
              className="btn-primary"
              style={{ fontSize: 13, padding: '16px 32px' }}
            >Request Demo</a>
            <a
              href="mailto:analytics@zuredex.com"
              className="btn-secondary"
              style={{ padding: '16px 28px' }}
            >Send a Message</a>
          </div>
          <div style={{ marginTop: 36, textAlign: 'center' }}>
            <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 9, color: '#3BA7C7', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12 }}>
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
              <p style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 14, fontStyle: 'italic', color: '#A7B4C0', lineHeight: 1.8, margin: 0 }}>
                Built in Indiana by Zuredex LLC, informed by firsthand exposure to medical device sales operations,
                manual PO reconciliation, and rep-level reporting workflows.
              </p>
              <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 9, color: '#A1B8C9', letterSpacing: 2, marginTop: 12, textTransform: 'uppercase' }}>
                — ZUREDEX · INDIANA, USA · 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </>
  );
}
