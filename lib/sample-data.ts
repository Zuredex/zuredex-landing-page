// Fictional display data for the marketing previews.
export const sampleCaption = "Sample view · fictional data";

export const sampleMatchedPO = { number: "88412", amount: "$14,250" } as const;

export const sampleDashboard = {
  revenue: "$5.9M",
  revenueChange: "8.4%",
  // Cumulative revenue, in millions.
  revenueHistory: [0.4, 0.7, 1.3, 1.4, 2.1, 2.3, 3.0, 3.2, 4.1, 4.3, 5.2, 5.9],
  annualGoal: "$8.0M",
  goalPercent: 74,
  cases: 738,
  casesChange: "22.6%",
  manufacturer: { name: "Velqorin Ortho", revenue: "$1.5M" },
  surgeons: [
    { name: "Dr. A. Kelveth", revenue: "$486K" },
    { name: "Dr. I. Veyrall", revenue: "$412K" },
    { name: "Dr. T. Orvessa", revenue: "$367K" },
  ],
  unmatchedCases: 44,
  openRevenue: "$486,970",
  reps: [
    { name: "Mira Talveth", territory: "Aven Reach", percent: 74 },
    { name: "Iven Quellor", territory: "Selvar Vale", percent: 61 },
  ],
} as const;

export const analyticsSampleMetrics = [
  { label: "Total Reconciled", value: "$129.8K", color: "#10B981" },
  { label: "At Risk", value: "$19.3K", color: "#FF4D6A" },
  { label: "Avg Match Time", value: "1.4d", color: "#F59E0B" },
  { label: "Match Rate", value: "80.9%", color: "#3BA7C7" },
] as const;
