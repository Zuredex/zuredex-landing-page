// Fictional marketing fixtures, authored for this page; never sourced from customer data.
// Confirmed and at-risk revenue are separate sample amounts. Matching counts are lines, not cases.
export const sampleData = {
  cases: 32,
  confirmedRevenue: 48000,
  commissions: 4800,
  needsReview: 4,
  atRisk: 6000,
  averageMatchDays: 3,
  matchedLines: 36,
  totalLines: 48,
} as const;

export const sampleCaption = "Sample data shown";

const dollars = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

export const heroSampleMetrics = [
  { label: "Cases", value: String(sampleData.cases) },
  { label: "Confirmed revenue", value: dollars(sampleData.confirmedRevenue) },
  { label: "Commissions", value: dollars(sampleData.commissions) },
  { label: "Needs review", value: String(sampleData.needsReview) },
] as const;

export const analyticsSampleMetrics = [
  { label: "Total Reconciled", value: dollars(sampleData.confirmedRevenue), color: "#10B981" },
  { label: "At Risk", value: dollars(sampleData.atRisk), color: "#FF4D6A" },
  { label: "Avg Match Time", value: `${sampleData.averageMatchDays} days`, color: "#F59E0B" },
  { label: "Match Rate", value: `${sampleData.matchedLines} of ${sampleData.totalLines} lines matched`, color: "#3BA7C7" },
] as const;
