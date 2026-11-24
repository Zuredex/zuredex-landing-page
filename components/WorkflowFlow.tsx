"use client";

import { useEffect, useRef, useState } from "react";

const outputs = ["Auto-matched hospital PO", "Rep commission split", "Admin Intelligence"];

function FlowDrawing({ compact = false }: { compact?: boolean }) {
  const x = compact ? 54 : 648;
  const y = compact ? 366 : 24;
  const spacing = compact ? 58 : 78;
  const beams = compact
    ? ["M160 126V148", "M160 242V270", "M160 314V338H30V504", ...outputs.map((_, i) => `M30 ${y+i*spacing+22}h24`)]
    : ["M184 124H216", "M410 124H440", ...outputs.map((_, i) => `M602 124C626 124 620 ${y+i*spacing+22} 648 ${y+i*spacing+22}`)];
  return <svg className={compact ? "flow-compact" : "flow-wide"} viewBox={compact ? "0 0 320 542" : "0 0 880 248"} role="img"
    aria-label="AI extracts fields from the OR case sheet and matches it to the hospital PO. A person reviews and confirms every case before the data feeds the auto-matched hospital PO, rep commission split, and Admin Intelligence.">
    {beams.map(d => <g key={d}><path className="beam-base" d={d}/><path className="beam-light" d={d}/></g>)}
    <g transform={compact ? "translate(72 12)" : "translate(8 67)"}>
      <rect className="flow-node" width="176" height="114" rx="12"/>
      <text x="16" y="27">OR case sheet</text>
      <rect x="16" y="39" width="144" height="60" rx="4" fill="#122a3b" stroke="#375466"/>
      <path d="M28 52h56m10 0h38M28 65h94M28 78h39m12 0h35" stroke="#688395" strokeWidth="3"/>
      <path className="scan-line" d="M22 48h132" stroke="#71dce7" strokeWidth="2"/>
    </g>
    <g transform={compact ? "translate(63 148)" : "translate(216 77)"}>
      <rect className="flow-hub" width="194" height="94" rx="16"/>
      <image href="/branding/zuredex-symbol.svg" x="79" y="11" width="36" height="40"/>
      <text x="97" y="75" textAnchor="middle">AI extraction &amp; matching</text>
    </g>
    <g transform={compact ? "translate(79 270)" : "translate(440 102)"}>
      <rect className="flow-node" width="162" height="44" rx="10"/>
      <circle cx="17" cy="22" r="9" fill="#17463f"/>
      <path d="m12 22 3 3 6-7" fill="none" stroke="#91e6c3" strokeWidth="2"/>
      <text x="32" y="27">Review &amp; confirm</text>
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
