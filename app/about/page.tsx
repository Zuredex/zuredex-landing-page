import type { Metadata } from "next";
import SiteStyles from "@/components/SiteStyles";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About — Zuredex",
  description: "Zuredex is an operational intelligence platform for medical device distributors, founded in Indianapolis, Indiana.",
};

const SECURITY_POINTS = [
  {
    num: "01",
    title: "Cloud-Native Infrastructure",
    body: "Scalable compute, event-driven document intake, and multi-tenant data isolation on Google Cloud Platform.",
  },
  {
    num: "02",
    title: "Document Intelligence",
    body: "AI-assisted extraction and OCR via Google Document AI and Vertex AI, with human-in-the-loop verification on every extracted record.",
  },
  {
    num: "03",
    title: "Privacy by Design",
    body: "A data-minimization posture: surgical revenue is reconciled using commercial and procedural attributes, and patient identifiers are not required for matching. Document access is access-controlled and audit-logged.",
  },
  {
    num: "04",
    title: "Enterprise Security",
    body: "Encryption in transit (TLS 1.2+) and at rest (AES-256), MFA-enforced authentication, and tenant-isolated data.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteStyles />
      <SiteNav />
      <main id="main-content" tabIndex={-1}>

      {/* Intro */}
      <section className="legal-pad" style={{ padding: "140px 80px 40px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: "#3BA7C7", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            ABOUT ZUREDEX
          </div>
          <h1 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 42, color: "#F4F7FA", letterSpacing: -0.5, lineHeight: 1.14, marginBottom: 24 }}>
            About Zuredex
          </h1>
          <p style={{ fontFamily: "var(--font-plex), sans-serif", fontWeight: 300, fontSize: 17, color: "#A7B4C0", lineHeight: 1.8 }}>
            Zuredex is an operational intelligence platform purpose-built for medical device distributors
            and their sales operations teams. Founded in Indianapolis, Indiana, Zuredex was created
            to solve a persistent challenge in surgical revenue workflows: the manual friction, slow turnaround, and
            revenue leakage caused by reconciling surgical case sheets against enterprise purchase orders.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad" style={{ padding: "60px 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: "#3BA7C7", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            OUR MISSION
          </div>
          <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 28, color: "#F4F7FA", lineHeight: 1.25, marginBottom: 20 }}>
            Complete visibility over every device, every case, and every dollar.
          </h2>
          <p style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 16, color: "#A7B4C0", lineHeight: 1.8 }}>
            We build modern tools that give surgical sales teams complete visibility over every device, every case,
            and every dollar. By combining AI-assisted document intelligence with human-in-the-loop verification,
            Zuredex streamlines case reconciliation while upholding strict enterprise security and privacy standards.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-pad" style={{ padding: "60px 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: "#3BA7C7", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            LEADERSHIP
          </div>
          <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 28, color: "#F4F7FA", lineHeight: 1.25, marginBottom: 32 }}>
            Founder-led.
          </h2>
          <p style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 16, color: "#A7B4C0", lineHeight: 1.8, marginBottom: 32 }}>
            Zuredex is built in Indianapolis, Indiana, by a founding team that includes firsthand operating experience inside orthopedic distribution, paired with engineering leadership. We built it to close the gap between the operating room, field reps, and hospital purchasing desks.
          </p>
          <div className="glass-card" style={{ display: "flex", alignItems: "center", gap: 20, padding: 24 }}>
            <div style={{
              width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
              background: "#3BA7C714", border: "1px solid #22313D",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 18, color: "#3BA7C7",
            }}>AG</div>
            <div>
              <div style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 17, color: "#F4F7FA" }}>Ambar Garcia</div>
              <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 11, color: "#3BA7C7", marginTop: 2, letterSpacing: 0.5 }}>CO-FOUNDER</div>
              <div style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 14, color: "#A7B4C0", marginTop: 8, lineHeight: 1.6 }}>
                Co-Founder, leading go-to-market and territory operations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering & Security Focus */}
      <section id="security" className="section-pad" style={{ padding: "60px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: "#3BA7C7", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            ENGINEERING &amp; SECURITY FOCUS
          </div>
          <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 28, color: "#F4F7FA", lineHeight: 1.25, marginBottom: 20, maxWidth: 700 }}>
            Product infrastructure
          </h2>
          <p style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 16, color: "#A7B4C0", lineHeight: 1.8, maxWidth: 700, marginBottom: 40 }}>
            Zuredex is built on Google Cloud infrastructure.
          </p>
          <div className="security-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {SECURITY_POINTS.map((item) => (
              <div key={item.title} className="glass-card" style={{ display: "flex", gap: 14, padding: 20 }}>
                <div style={{
                  width: 32, height: 32, flexShrink: 0,
                  background: "#3BA7C714", border: "1px solid #1C2430", borderRadius: 4,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-dm), monospace", fontSize: 11, color: "#3BA7C7", letterSpacing: 0.5, fontWeight: 500,
                }}>{item.num}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 14, color: "#F4F7FA", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontFamily: "var(--font-plex), sans-serif", fontSize: 13, color: "#A7B4C0", lineHeight: 1.75 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company & Contact */}
      <section className="section-pad" style={{ padding: "60px 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 10, color: "#3BA7C7", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            COMPANY &amp; CONTACT
          </div>
          <div style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 700, fontSize: 18, color: "#F4F7FA", marginBottom: 8 }}>
            Zuredex LLC — Indianapolis, Indiana, USA
          </div>
          <div style={{ fontFamily: "var(--font-dm), monospace", fontSize: 13, color: "#A7B4C0" }}>
            General inquiries:{" "}
            <a href="mailto:analytics@zuredex.com" className="legal-link">analytics@zuredex.com</a>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </>
  );
}
