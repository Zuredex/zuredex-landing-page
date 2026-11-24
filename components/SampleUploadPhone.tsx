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
          <strong className="phone-title">Upload Documents</strong>
          <div className="phone-segments"><span>Case Sheet</span><span>Purchase Order</span></div>
          <div className="phone-drop">
            <PhoneIcon path="M12 16V3m-6 6 6-6 6 6M3 16v5h18v-5" />
            <span className="phone-photo">Take Photo</span>
          </div>
        </div>
        <div className="phone-tabs">
          {tabs.map(tab => (
            <span key={tab.label} className={tab.label === "Upload" ? "phone-active-tab" : undefined}>
              <PhoneIcon path={tab.path} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
