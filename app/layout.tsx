import type { Metadata } from "next";
import { Inter_Tight, Syne, IBM_Plex_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const heading = Inter_Tight({
  variable: "--font-heading",
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const brand = Syne({
  variable: "--font-syne",
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const body = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mono = DM_Mono({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zuredex.com"),
  title: "Zuredex — Operational Intelligence Platform",
  description: "AI-powered reconciliation and revenue visibility for surgical device distributors. Built in Indiana.",
  openGraph: {
    title: "Zuredex — Operational Intelligence Platform",
    description: "AI-powered reconciliation and revenue visibility for surgical device distributors.",
    url: "https://www.zuredex.com",
    type: "website",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  icons: {
    shortcut: "/favicon.ico",
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: { title: "Zuredex" },
  alternates: {
    canonical: "/",
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
      className={`${heading.variable} ${brand.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Zuredex",
              "url": "https://www.zuredex.com",
              "logo": "https://www.zuredex.com/branding/zuredex-symbol.svg",
              "description": "AI reads it, a person confirms every case in Manual Review. Zuredex connects case sheets, PO matching, and commission calculations for medical device distributors.",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "creator": {
                "@type": "Organization",
                "name": "Zuredex LLC",
                "url": "https://www.zuredex.com",
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
                "medical device sales operations",
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
