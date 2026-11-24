import { sampleDashboard as data } from "@/lib/sample-data";

export default function SampleDashboard() {
  const history = data.revenueHistory;
  const points = history.map((value, i) =>
    `${2 + 196 * i / (history.length - 1)},${47 - 44 * value / history[history.length - 1]}`
  ).join(" ");

  return (
    <div className="dashboard-preview" role="img" aria-label="Sample Zuredex dashboard with fictional data">
      <div className="dashboard-screen" aria-hidden="true">
        <div className="dash-header"><span className="dash-symbol" />Dashboard</div>
        <div className="dash-body">
          <div className="dash-card dash-revenue">
            <div>
              <div className="dash-label">Revenue Year to Date</div>
              <strong className="dash-total">{data.revenue}</strong>
              <div className="dash-trend">↑ {data.revenueChange} vs prior year to date</div>
            </div>
            <svg className="dash-spark" viewBox="0 0 200 50" preserveAspectRatio="none">
              <defs>
                <linearGradient id="revenue-fill" x2="0" y2="1">
                  <stop stopColor="currentColor" stopOpacity=".32" />
                  <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 16h200M0 33h200M0 49h200" stroke="currentColor" opacity=".13" strokeDasharray="3 4" />
              <polygon points={`2,50 ${points} 198,50`} fill="url(#revenue-fill)" />
              <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              <circle cx="198" cy="3" r="2" fill="currentColor" />
            </svg>
          </div>
          <div className="dash-kpis">
            <div className="dash-card dash-goal">
              <div className="dash-ring">
                <svg viewBox="0 0 64 64" fill="none" strokeWidth="5">
                  <circle cx="32" cy="32" r="28" stroke="#24384a" />
                  <circle cx="32" cy="32" r="28" pathLength="100" stroke="currentColor" strokeDasharray={`${data.goalPercent} 100`} strokeLinecap="round" transform="rotate(-90 32 32)" />
                </svg>
                <strong>{data.goalPercent}%</strong>
              </div>
              <div><div className="dash-label">Org Annual Goal</div>{data.revenue} of {data.annualGoal}</div>
            </div>
            <div className="dash-card">
              <div className="dash-label">Cases Year to Date</div>
              <strong className="dash-cases">{data.cases}</strong>
              <div className="dash-trend">↑ {data.casesChange} vs prior year to date</div>
            </div>
            <div className="dash-card">
              <div className="dash-label">Top Manufacturer <span className="dash-period">YTD</span></div>
              <strong className="dash-manufacturer">{data.manufacturer.revenue}</strong>
              <div>{data.manufacturer.name}</div>
              <div className="dash-surgeons">
                <div className="dash-label">Top Surgeons <span className="dash-period">YTD</span></div>
                <dl>{data.surgeons.map(surgeon => (
                  <div key={surgeon.name}><dt>{surgeon.name}</dt><dd>{surgeon.revenue}</dd></div>
                ))}</dl>
              </div>
            </div>
          </div>
          <div className="dash-alert">
            <span><strong>Revenue alert:</strong> {data.unmatchedCases} unmatched cases · {data.openRevenue} open</span>
            <span className="dash-view">View Cases →</span>
          </div>
          <div className="dash-pipeline">
            <div className="dash-label">Rep Performance · Pipeline</div>
            <div className="dash-reps">{data.reps.map(rep => (
              <div className="dash-card" key={rep.name}>
                <strong>{rep.name}</strong>
                <div className="dash-territory"><span>{rep.territory}</span><span>{rep.percent}%</span></div>
                <div className="dash-track"><span style={{width: `${rep.percent}%`}} /></div>
              </div>
            ))}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
