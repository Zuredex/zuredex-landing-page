// DRAFT — pending legal review before considered final

import type { Metadata } from "next";
import SiteStyles from "@/components/SiteStyles";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — Zuredex",
  description: "How Zuredex handles account data, uploaded documents, and Protected Health Information.",
};

const SECTIONS: { heading: string; body: string }[] = [
  {
    heading: "Introduction",
    body:
      "Zuredex LLC (\"Zuredex,\" \"we,\" \"us\") operates the Zuredex operational intelligence platform " +
      "(the \"Service\"), used by medical device sales organizations, surgical distributors, and sales " +
      "operations teams to reconcile surgical case sheets against purchase orders. This policy describes " +
      "how data is handled when you or your organization use the Service.",
  },
  {
    heading: "Account & Authentication",
    body:
      "Account credentials are managed securely via Google Firebase Authentication with multi-factor " +
      "authentication (MFA). We do not store raw passwords; authentication is delegated to Firebase's " +
      "managed identity infrastructure.",
  },
  {
    heading: "Document Processing",
    body:
      "Uploaded documents (case sheets, purchase orders) are processed and stored using Google Cloud " +
      "Storage and BigQuery for reconciliation. Documents are processed within your organization's isolated " +
      "tenant and are not accessible to other tenants.",
  },
  {
    heading: "PHI & HIPAA",
    body:
      "Where documents contain Protected Health Information (\"PHI\"), Zuredex acts as a Business Associate " +
      "under a HIPAA Business Associate Agreement (BAA) with its customers. Zuredex minimizes PHI exposure " +
      "— patient identifiers are not required for reconciliation and are not extracted into structured " +
      "records. Document access is access-controlled and audit-logged.",
  },
  {
    heading: "Sub-processors",
    body:
      "Zuredex uses Google Cloud Platform and Firebase as infrastructure sub-processors. Business Associate " +
      "Agreements and data processing terms are maintained with sub-processors that handle PHI.",
  },
  {
    heading: "Security",
    body:
      "Data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Tenant data is isolated at the query " +
      "layer, and access controls are enforced fail-closed.",
  },
  {
    heading: "Data Retention",
    body:
      "Customer data is retained or disposed of in accordance with the applicable Business Associate " +
      "Agreement and customer agreements.",
  },
  {
    heading: "Changes to This Policy",
    body:
      "This policy may be updated from time to time. Material changes will be reflected by updating the " +
      "effective date below.",
  },
  {
    heading: "Contact",
    body:
      "Questions about this policy can be directed to analytics@zuredex.com.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SiteStyles />
      <SiteNav />

      <section className="legal-pad" style={{ background: "#07182A", padding: "140px 80px 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#3BA7C7", letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
            LEGAL
          </div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 40, color: "#F4F7FA", letterSpacing: -0.5, lineHeight: 1.14, marginBottom: 12 }}>
            Privacy Policy
          </h1>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#4A5568", marginBottom: 48 }}>
            Effective date: August 25, 2026
          </div>

          {SECTIONS.map((s) => (
            <div key={s.heading} style={{ marginBottom: 36 }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "#F4F7FA", marginBottom: 10 }}>
                {s.heading}
              </h2>
              <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 15, color: "#A7B4C0", lineHeight: 1.8 }}>
                {s.body}
              </p>
            </div>
          ))}

          <div style={{
            marginTop: 48, padding: "20px 24px",
            borderLeft: "2px solid #3BA7C7", background: "rgba(59,167,199,0.03)",
            borderRadius: "0 4px 4px 0",
          }}>
            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, fontStyle: "italic", color: "#4A5568", lineHeight: 1.75 }}>
              Questions about this policy? Contact us at{" "}
              <a href="mailto:analytics@zuredex.com" className="legal-link">analytics@zuredex.com</a>.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
