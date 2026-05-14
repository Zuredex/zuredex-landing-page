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
  title: "Zuredex — Operational Intelligence Platform",
  description: "AI-powered reconciliation and revenue visibility for surgical device distributors.",
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
