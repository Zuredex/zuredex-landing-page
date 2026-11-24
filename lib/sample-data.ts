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
  { label: "Total Reconciled", prefix: "$", unit: "K", color: "#10B981", series: [93, 99, 101, 112, 114, 121, 129.8] },
  { label: "At Risk", prefix: "$", unit: "K", color: "#FF7088", series: [25, 23, 24, 21, 22, 20, 19.3] },
  { label: "Avg Match Time", prefix: "", unit: "d", color: "#F59E0B", series: [2.2, 2, 2.1, 1.8, 1.7, 1.6, 1.4] },
  { label: "Match Rate", prefix: "", unit: "%", color: "#58C4DE", series: [69, 73, 72, 75, 78, 79, 80.9] },
] as const;

export const previewFacilities = [
  {
    name: "Aven Reach Center", city: "Indianapolis", longitude: -86.158, latitude: 39.768, volume: 46, atRisk: 14500,
    surgeons: [{ name: "Dr. A. Kelveth", amount: 64800 }, { name: "Dr. I. Veyrall", amount: 39300 }, { name: "Dr. T. Orvessa", amount: 25700 }],
  },
  {
    name: "Kelveth Ridge Clinic", city: "Fort Wayne", longitude: -85.140, latitude: 41.080, volume: 24, atRisk: 0,
    surgeons: [{ name: "Dr. I. Veyrall", amount: 43700 }, { name: "Dr. P. Lanveth", amount: 26800 }],
  },
  {
    name: "Selvar Vale Center", city: "South Bend", longitude: -86.252, latitude: 41.676, volume: 36, atRisk: 4800,
    surgeons: [{ name: "Dr. T. Orvessa", amount: 53400 }, { name: "Dr. M. Calveth", amount: 42600 }],
  },
  {
    name: "Orvessa Crossing", city: "Evansville", longitude: -87.572, latitude: 37.972, volume: 16, atRisk: 0,
    surgeons: [{ name: "Dr. P. Lanveth", amount: 24100 }, { name: "Dr. A. Kelveth", amount: 18300 }],
  },
  {
    name: "Quellor Grove Clinic", city: "Lafayette", longitude: -86.875, latitude: 40.417, volume: 28, atRisk: 0,
    surgeons: [{ name: "Dr. M. Calveth", amount: 38900 }, { name: "Dr. R. Belvora", amount: 31200 }],
  },
  {
    name: "Talveth Hollow Center", city: "Bloomington", longitude: -86.527, latitude: 39.165, volume: 19, atRisk: 0,
    surgeons: [{ name: "Dr. R. Belvora", amount: 28200 }, { name: "Dr. T. Orvessa", amount: 23700 }],
  },
] as const;

export const intelligenceSamples = [
  { question: "Which facilities have open POs over 30 days?", answer: "Aven Reach Center and Selvar Vale Center have open purchase orders older than 30 days." },
  { question: "Why did Q4 revenue shift vs. Q3?", answer: "More case sheets at Aven Reach Center matched their purchase orders in Q4. Those matches moved revenue from pending to confirmed." },
  { question: "Top manufacturers by revenue this quarter", answer: "Velqorin Ortho leads by confirmed revenue this quarter, followed by Kelmora Devices and Orveth Medical." },
] as const;
