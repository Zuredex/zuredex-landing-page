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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
