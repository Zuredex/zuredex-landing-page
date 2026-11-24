"use client";

import { useEffect, useRef, useState } from "react";

const outputs = ["Matched hospital PO", "Rep commission split", "Admin Intelligence"];

function FlowDrawing({ compact = false }: { compact?: boolean }) {
  const x = compact ? 64 : 574;
  const y = compact ? 270 : 24;
  const spacing = compact ? 64 : 78;
  const beams = compact
    ? ["M188 67H216Q224 67 224 75V144", "M224 238V252H40V420", ...outputs.map((_, i) => `M40 ${y + i*spacing + 22}h24`)]
    : ["M200 124H304", ...outputs.map((_, i) => `M482 124C530 124 526 ${y+i*spacing+22} 574 ${y+i*spacing+22}`)];
  return <svg className={compact ? "flow-compact" : "flow-wide"} viewBox={compact ? "0 0 320 466" : "0 0 820 248"} role="img"
    aria-label="A person confirms the extracted OR case sheet in Manual Review. The reviewed data feeds matched hospital POs, rep commission splits, and Admin Intelligence.">
    {beams.map(d => <g key={d}><path className="beam-base" d={d}/><path className="beam-light" d={d}/></g>)}
    <g transform={compact ? "translate(12 10)" : "translate(24 67)"}>
      <rect className="flow-node" width="176" height="114" rx="12"/>
      <text x="16" y="27">OR case sheet</text>
      <rect x="16" y="39" width="144" height="60" rx="4" fill="#122a3b" stroke="#375466"/>
      <path d="M28 52h56m10 0h38M28 65h94M28 78h39m12 0h35" stroke="#688395" strokeWidth="3"/>
      <path className="scan-line" d="M22 48h132" stroke="#71dce7" strokeWidth="2"/>
    </g>
    <g transform={compact ? "translate(135 144)" : "translate(304 77)"}>
      <rect className="flow-hub" width="178" height="94" rx="16"/>
      <image href="/branding/zuredex-symbol.svg" x="71" y="11" width="36" height="40"/>
      <text x="89" y="75" textAnchor="middle">Manual Review</text>
    </g>
    {outputs.map((label, i) => <g key={label} transform={`translate(${x} ${y+i*spacing})`}>
      <rect className="flow-node" width="218" height="44" rx="9"/>
      <circle cx="16" cy="22" r="3" fill={["#58c4de","#10b981","#b79ce9"][i]}/>
      <text x="29" y="27">{label}</text>
    </g>)}
  </svg>;
}

export default function WorkflowFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="workflow-flow" data-visible={visible}>
    <FlowDrawing /><FlowDrawing compact />
  </div>;
}
