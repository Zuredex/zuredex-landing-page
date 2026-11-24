"use client";

import { useEffect, useRef, useState } from "react";
import { analyticsSampleMetrics } from "@/lib/sample-data";

export default function AnimatedMetrics() {
  const grid = useRef<HTMLDivElement>(null);
  const [fraction, setFraction] = useState(1);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    if (!grid.current || media.matches || !("IntersectionObserver" in window)) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (media.matches) return;
      const start = performance.now();
      function tick(time: number) {
        const progress = Math.min(1, Math.max(0, (time-start)/850));
        setFraction(1 - .8 * (1-progress)**2);
        if (progress < 1) frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
    });
    function stop() {
      if (media.matches) { observer.disconnect(); cancelAnimationFrame(frame); setFraction(1); }
    }
    observer.observe(grid.current);
    media.addEventListener("change", stop);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); media.removeEventListener("change", stop); };
  }, []);

  return <div ref={grid} className="animated-metrics">
    {analyticsSampleMetrics.map(metric => {
      const { label, prefix, unit, color, series } = metric;
      const end = series[series.length-1];
      const format = (n: number) => `${prefix}${n.toFixed(1)}${unit}`;
      const low = Math.min(...series), range = Math.max(...series)-low;
      const points = series.map((n, i) => `${2+96*i/(series.length-1)},${25-20*(n-low)/range}`).join(" ");
      return <div key={label} className="glass-card metric-tile" style={{color}}>
        <div className="metric-label">{label}</div>
        <strong className="metric-number">
          <span className="metric-final">{format(end)}</span>
          <span className="metric-counter" aria-hidden="true">{format(end*fraction)}</span>
        </strong>
        <div className="metric-graphics" aria-hidden="true">
          <svg viewBox="0 0 100 30" fill="none"><path d="M0 27h100" stroke="#354b5d"/>
            <polyline points={points} stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="#324757" strokeWidth="3"/>
            <circle cx="16" cy="16" r="12" pathLength="100" strokeDasharray={`${unit === "%" ? end*fraction : 100*fraction} 100`}
              transform="rotate(-90 16 16)" stroke="currentColor" strokeWidth="3"/>
          </svg>
        </div>
      </div>;
    })}
  </div>;
}
