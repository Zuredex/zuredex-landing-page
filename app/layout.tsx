import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zuredex.com"),
  title: "Zuredex — Operational Intelligence Platform",
  description: "AI-powered reconciliation and revenue visibility for surgical device distributors. Built in Indiana.",
  openGraph: {
    title: "Zuredex — Operational Intelligence Platform",
    description: "AI-powered reconciliation and revenue visibility for surgical device distributors.",
    url: "https://zuredex.com",
    type: "website",
    images: [{ url: "https://zuredex.com/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://zuredex.com/og-image.png"],
  },
  icons: {
    shortcut: "/favicon.ico",
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: { title: "Zuredex" },
  alternates: {
    canonical: "https://www.zuredex.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Sans:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Zuredex",
              "url": "https://zuredex.com",
              "logo": "https://zuredex.com/og-image.png",
              "description": "AI-powered reconciliation and revenue visibility for surgical device distributors. Zuredex automates surgical case sheet reconciliation, purchase order matching, and unresolved revenue detection.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Pilot program available"
              },
              "creator": {
                "@type": "Organization",
                "name": "Zuredex LLC",
                "url": "https://zuredex.com",
                "email": "analytics@zuredex.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Indianapolis",
                  "addressRegion": "IN",
                  "addressCountry": "US"
                }
              },
              "keywords": [
                "medical device sales reconciliation",
                "surgical case sheet automation",
                "revenue intelligence",
                "purchase order matching",
                "medical device distributor software",
                "operational intelligence platform",
                "foot ankle orthopedic sales",
                "Indiana medical device software"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
