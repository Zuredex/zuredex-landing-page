import { sampleDashboard } from "@/lib/sample-data";

const tabs = [
  { label: "Home", path: "m3 10 9-7 9 7v11H3z M9 21v-8h6v8" },
  { label: "Cases", path: "M3 5h7l2 3h9v12H3z" },
  { label: "Upload", path: "M12 16V3m-6 6 6-6 6 6M3 16v5h18v-5" },
  { label: "Analytics", path: "M2 20h20M3 16l6-6 4 3 8-9m-6 0h6v6" },
  { label: "More", path: "M3 12h2m6 0h2m6 0h2" },
] as const;

function PhoneIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );
}

export default function SampleUploadPhone() {
  const initials = sampleDashboard.reps[0].name.split(" ").map(part => part[0]).join("");
  return (
    <div className="upload-phone" role="img" aria-label="Sample Zuredex mobile upload screen">
      <div className="phone-screen" aria-hidden="true">
        <div className="phone-header">
          <span className="dash-symbol" /><span className="phone-avatar">{initials}</span>
        </div>
        <div className="phone-content">
          <span className="passkey-indicator">
            <PhoneIcon path="M3 11a9 9 0 0 1 18 0m-15 2v-2a6 6 0 0 1 12 0c0 4-.5 7-2 10M4 18c1-1.5 2-3 2-5m3 7c2-2.5 3-5.5 3-9m-4 6c1-2 1-3.5 1-6a3 3 0 0 1 6 0c0 5-1 8-2.5 11" />
            Signed in with passkey
          </span>
          <strong className="phone-title">Upload Documents</strong>
          <div className="phone-segments"><span>Case Sheet</span><span>Purchase Order</span></div>
          <div className="phone-drop">
            <PhoneIcon path="M12 16V3m-6 6 6-6 6 6M3 16v5h18v-5" />
            <div className="phone-actions"><span>Take Photo</span><span>Browse Files</span></div>
          </div>
        </div>
        <div className="phone-tabs">
          {tabs.map(tab => (
            <span key={tab.label} className={tab.label === "Upload" ? "phone-active-tab" : undefined}>
              <PhoneIcon path={tab.path} />{tab.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
