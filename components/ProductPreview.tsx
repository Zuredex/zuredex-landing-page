"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { intelligenceSamples, previewFacilities, sampleDashboard } from "@/lib/sample-data";
import { cityPosition, indianaOutline } from "@/lib/indiana-map";

const tabs = ["Executive Command Center", "Territory & Surgeon Map", "Admin Intelligence"] as const;

function ExecutivePreview() {
  return <>
    <div className="product-kpis">
      {[
        ["Confirmed revenue YTD", sampleDashboard.revenue],
        ["Annual goal attained", `${sampleDashboard.goalPercent}%`],
        ["Open case revenue", sampleDashboard.openRevenue],
      ].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
    </div>
    <div className="product-columns">
      <div><h3>Purchase order status</h3>
        <div className="product-legend"><span>Confirmed</span><span>Pending PO</span></div>
        {sampleDashboard.reps.map(rep => <div className="product-rep" key={rep.name}>
          <div>{rep.name}<span aria-hidden="true">{rep.percent}% / {100 - rep.percent}%</span></div>
          <div className="product-bar" role="meter" aria-label={`${rep.name}, purchase order status`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={rep.percent}
            aria-valuetext={`${rep.percent}% confirmed, ${100 - rep.percent}% pending PO`}><i style={{width: `${rep.percent}%`}} /></div>
        </div>)}
      </div>
      <div><h3>Rep commission pipeline</h3>
        {sampleDashboard.reps.map((rep, i) => <div className="commission-row" key={rep.name}>
          <div><strong>{rep.name}</strong><small>{rep.territory}</small></div>
          <span className={i === 0 ? "stage-confirmed" : "stage-pending"}>{i === 0 ? "Split calculated" : "Awaiting PO"}</span>
        </div>)}
      </div>
    </div>
  </>;
}

function TerritoryPreview() {
  const [activeFacility, setActiveFacility] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [focus, setFocus] = useState<number | null>(null);
  const tooltip = hover ?? focus;
  const facility = previewFacilities[activeFacility];
  const production = facility.surgeons.reduce((total, surgeon) => total + surgeon.amount, 0);
  const dollars = (amount: number) => "$" + amount.toLocaleString("en-US");
  useEffect(() => {
    if (tooltip === null) return;
    function dismiss(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") { setHover(null); setFocus(null); }
    }
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [tooltip]);
  return <div className="territory-preview">
    <div className="region-map">
      <svg viewBox="0 0 400 370" aria-hidden="true">
        <defs><pattern id="region-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#213849" /></pattern></defs>
        <rect width="400" height="370" fill="url(#region-grid)" />
        <path d={indianaOutline} fill="#17384a" stroke="#6291a1" strokeWidth="1.3" strokeLinejoin="round"/>
        <text x="16" y="25" fill="#b7cbd8" fontSize="13" letterSpacing="2">INDIANA</text>
      </svg>
      {previewFacilities.map((f, i) => <div key={f.name} className="facility-marker"
        style={cityPosition(f.longitude, f.latitude)}
        onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
        <button type="button" className={`facility-dot ${f.atRisk > 0 ? "overdue" : ""}`} aria-label={`${f.name}, ${f.city}`} aria-describedby={tooltip === i ? "facility-tooltip" : undefined}
          aria-pressed={activeFacility === i} aria-controls="facility-detail"
          onFocus={() => { setHover(null); setFocus(i); }} onBlur={() => setFocus(null)} onClick={() => setActiveFacility(i)}>
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="20" cy="20" r={Math.sqrt(f.volume)*2.1} fill="currentColor" opacity=".18"/>
            <circle cx="20" cy="20" r={Math.sqrt(f.volume)*1.4} fill="currentColor"/>
            {activeFacility === i && <circle cx="20" cy="20" r={Math.sqrt(f.volume)*2.1} fill="none" stroke="currentColor" strokeWidth="1.2"/>}
          </svg>
        </button>
        {tooltip === i && <div id="facility-tooltip" role="tooltip" className="facility-tooltip">
          <strong>{f.name}</strong><span>{f.city} · {f.volume} cases</span>
          <span>{f.atRisk > 0 ? "At risk · PO over 30 days" : "No overdue POs"}</span>
        </div>}
      </div>)}
    </div>
    <div className="facility-sidebar">
      <div className="facility-detail" id="facility-detail" aria-live="polite" aria-atomic="true">
        <small>{facility.city}, Indiana</small><h3>{facility.name}</h3>
        <dl className="facility-stats">
          <div><dt>Production</dt><dd>{dollars(production)}</dd></div>
          <div><dt>At Risk</dt><dd className={facility.atRisk > 0 ? "facility-risk" : undefined}>{dollars(facility.atRisk)}</dd></div>
          <div><dt>Cases</dt><dd>{facility.volume}</dd></div>
          <div><dt>Surgeons</dt><dd>{facility.surgeons.length}</dd></div>
        </dl>
        <dl className="facility-surgeons">{facility.surgeons.map(surgeon =>
          <div key={surgeon.name}><dt>{surgeon.name}</dt><dd>{dollars(surgeon.amount)}</dd></div>
        )}</dl>
      </div>
      <div className="map-key"><p>Bubble area shows case volume.</p>
        <div className="product-legend map-legend"><span>No overdue POs</span><span>At-risk POs</span></div>
      </div>
    </div>
  </div>;
}

function IntelligencePreview() {
  const [selected, setSelected] = useState<number | null>(null);
  const [length, setLength] = useState(0);
  const timer = useRef<number | undefined>(undefined);
  const answer = selected === null ? "" : intelligenceSamples[selected].answer;
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    function preferenceChanged() {
      if (media.matches) { window.clearInterval(timer.current); setLength(answer.length); }
    }
    media.addEventListener("change", preferenceChanged);
    return () => media.removeEventListener("change", preferenceChanged);
  }, [answer]);
  useEffect(() => () => window.clearInterval(timer.current), []);
  function ask(index: number) {
    window.clearInterval(timer.current);
    setSelected(index);
    const total = intelligenceSamples[index].answer.length;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setLength(total); return; }
    setLength(0);
    let shown = 0;
    timer.current = window.setInterval(() => {
      shown = Math.min(total, shown + 4);
      setLength(shown);
      if (shown === total) window.clearInterval(timer.current);
    }, 32);
  }
  return <div className="intelligence-preview">
    <div><h3>Sample questions</h3>
      <div className="sample-questions">{intelligenceSamples.map((q, i) => <button key={q.question} type="button"
        aria-pressed={selected === i} onClick={() => ask(i)}>{q.question}</button>)}</div>
    </div>
    <div className="sample-answer"><h3>Sample answer</h3>
      <p aria-hidden="true">{selected === null ? "Choose a question to see its sample answer." : answer.slice(0, length)}</p>
      <span className="sr-only" aria-live="polite" aria-atomic="true">{answer && length === answer.length ? `Sample answer. ${answer}` : ""}</span>
    </div>
  </div>;
}

export default function ProductPreview() {
  const [active, setActive] = useState(0);
  const Panel = [ExecutivePreview, TerritoryPreview, IntelligencePreview][active];
  const list = useRef<HTMLDivElement>(null);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, i: number) {
    const destinations: Record<string, number> = {Home: 0, End: tabs.length-1,
      ArrowLeft: (i+tabs.length-1)%tabs.length, ArrowRight: (i+1)%tabs.length};
    const next = destinations[event.key];
    if (next === undefined) return;
    event.preventDefault(); setActive(next); list.current?.querySelectorAll("button")[next].focus();
  }
  return <div className="product-preview">
    <div className="product-tabs" ref={list} role="tablist" aria-label="Product preview">
      {tabs.map((tab, i) => <button type="button" key={tab} id={`product-tab-${i}`} role="tab"
        aria-selected={active === i} aria-controls={`product-panel-${i}`} tabIndex={active === i ? 0 : -1}
        onClick={() => setActive(i)} onKeyDown={event => navigate(event, i)}>{tab}</button>)}
    </div>
    {tabs.map((tab, i) => <div role="tabpanel" key={tab} id={`product-panel-${i}`} aria-labelledby={`product-tab-${i}`}
      hidden={i !== active} tabIndex={0} className="product-panel">
      <div className="panel-heading"><h3>{tab}{i === 2 && " (pilot)"}</h3><small>Sample data</small></div>
      {i === active && <Panel />}
    </div>)}
  </div>;
}
