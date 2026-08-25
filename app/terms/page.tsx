// Terms content is lawyer-reviewed (v2026-08-22-v1) — do not edit substance
// without legal review. Copied verbatim from the main app repo's
// lib/legal/terms.ts (TERMS_SECTIONS, TERMS_VERSION). If that file changes,
// this copy must be updated to match — it is not imported live since this is
// a separate repo/deployment.

import type { Metadata } from "next";
import SiteStyles from "@/components/SiteStyles";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service — Zuredex",
  description: "Zuredex Platform Terms of Service.",
};

const TERMS_VERSION = "2026-08-22-v1";

const TERMS_SECTIONS: { heading: string; body: string }[] = [
  {
    heading: "Zuredex Platform Terms of Service — Version 1.0",
    body:
      "Welcome to Zuredex. These Terms of Service ('Terms') govern your access to and use of the " +
      "Zuredex operational intelligence platform, applications, and APIs (collectively, the 'Service'). " +
      "By executing an order form, clicking 'I Agree', or accessing the Service, you agree to be bound " +
      "by these Terms on behalf of yourself and the organization you represent.",
  },
  {
    heading: "1. Scope of Service & Permitted Use",
    body:
      "Zuredex grants Authorized Users a non-exclusive, non-transferable right to access and use " +
      "the Service solely for legitimate internal business operations, including surgical case sheet " +
      "reconciliation, purchase order matching, and sales commission calculations. You shall not " +
      "(a) license, sublicense, sell, or reverse-engineer the Service; (b) attempt to bypass " +
      "tenant-isolation boundaries; or (c) use the Service to transmit malicious code or unauthorized payloads.",
  },
  {
    heading: "2. Protected Health Information (PHI) & BAA Governance",
    body:
      "To the extent the Service processes Protected Health Information ('PHI') subject to HIPAA/HITECH, " +
      "such processing is governed by the Business Associate Agreement ('BAA') executed between " +
      "Zuredex and your organization. Users acknowledge that Zuredex minimizes PHI exposure by " +
      "reconciling data via procedural and commercial attributes rather than patient identity. Users " +
      "agree to adhere to the Minimum Necessary standard and refrain from manually entering unneeded " +
      "PHI into unstructured text fields or downstream third-party integrations.",
  },
  {
    heading: "3. User Authentication & Multi-Factor Security",
    body:
      "Access to the Service requires multi-factor authentication ('MFA'). Authorized Users are " +
      "responsible for maintaining the confidentiality of their credentials and registered MFA " +
      "devices. You agree to notify Zuredex immediately upon discovering any unauthorized access, " +
      "compromised credentials, or anomalous session activity.",
  },
  {
    heading: "4. Data Security, Isolation, & Privacy",
    body:
      "Customer retains all right, title, and interest in and to all customer raw data and uploaded " +
      "documents. Zuredex maintains administrative, physical, and technical safeguards designed to align " +
      "with the HIPAA Security Rule, including encryption in transit (TLS 1.2+) and at rest (AES-256) " +
      "via Google Cloud Platform, fail-closed tenant query routing, and document access audit logging.",
  },
  {
    heading: "5. Suspension, Term, & Termination",
    body:
      "Zuredex reserves the right to immediately suspend access to any user or tenant in the event of " +
      "a suspected security breach, unauthorized credential sharing, or material violation of these Terms. " +
      "Upon termination, Zuredex will retain or securely dispose of Customer data in accordance with the " +
      "applicable Business Associate Agreement (BAA), order form agreement, and relevant data retention laws.",
  },
  {
    heading: "6. AI Services & Human-in-the-Loop Verification",
    body:
      "The Service utilizes automated document processing, optical character recognition (OCR), " +
      "and artificial intelligence (including Google Vertex AI and Document AI) to parse surgical " +
      "case sheets. Output from these tools is assistive and provided 'as-is.' Authorized Users " +
      "remain solely responsible for reviewing, verifying, and approving all extracted data prior " +
      "to reconciliation, purchase order submission, or commission calculation. Zuredex does not " +
      "use Customer PHI or proprietary case data to train public or third-party AI models.",
  },
  {
    heading: "7. Infrastructure Sub-processors",
    body:
      "Customer acknowledges and agrees that Zuredex utilizes third-party infrastructure and " +
      "cloud service providers, specifically Google Cloud Platform (GCP) and Firebase, as " +
      "sub-processors to host, store, and process Customer Data. Zuredex maintains executed " +
      "Business Associate Agreements and data processing addenda with all infrastructure sub-processors " +
      "handling PHI.",
  },
  {
    heading: "8. Prohibited Data & Unstructured Text Safeguards",
    body:
      "Customer agrees not to upload or transmit cardholder data (PCI-DSS), Social Security Numbers, " +
      "or unencrypted credentials into free-text fields or document uploads where such data is " +
      "unrelated to surgical case reconciliation. Users shall adhere to data minimization " +
      "principles when submitting source documentation.",
  },
  {
    heading: "9. Intellectual Property & Operational Metrics",
    body:
      "Zuredex retains all right, title, and interest in and to the Service, including software, " +
      "algorithms, and workflows. Zuredex may collect and process de-identified, aggregated operational " +
      "metrics and system performance data in compliance with HIPAA de-identification standards " +
      "(45 CFR § 164.514) to maintain, improve, and secure the platform.",
  },
  {
    heading: "10. Limitation of Liability & Service Availability",
    body:
      "To the maximum extent permitted by law, Zuredex's aggregate liability arising out of or related " +
      "to the Service shall not exceed the fees paid by Customer in the twelve (12) months preceding " +
      "the event giving rise to liability. Zuredex does not warrant uninterrupted or error-free operation, " +
      "and service availability is subject to planned maintenance and underlying cloud provider service level agreements.",
  },
];

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#4A5568", marginBottom: 48 }}>
            Version {TERMS_VERSION}
          </div>

          {TERMS_SECTIONS.map((s) => (
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
              Questions about these Terms? Contact us at{" "}
              <a href="mailto:analytics@zuredex.com" className="legal-link">analytics@zuredex.com</a>.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
