import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Voxora – Developer-first AI Infrastructure",
  description:
    "Deploy, orchestrate, and scale agentic workflows with the reliability of a banking core. Designed for the builders of tomorrow.",
  keywords: [
    "AI infrastructure",
    "agentic workflows",
    "developer tools",
    "AI agents",
    "multi-tenant SaaS",
    "RAG",
    "LLM orchestration",
  ],
  authors: [{ name: "Voxora Team" }],
  openGraph: {
    title: "Voxora – Developer-first AI Infrastructure",
    description:
      "Deploy, orchestrate, and scale agentic workflows with the reliability of a banking core.",
    url: "https://www.voxora.cloud",
    siteName: "Voxora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxora – Developer-first AI Infrastructure",
    description:
      "Deploy, orchestrate, and scale agentic workflows with the reliability of a banking core.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,300,0,0" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {children}
        <Script
          src="https://cdn.voxora.cloud/voxora-widget/v1/voxora.js?v=2"
          data-voxora-cdn-url="https://cdn.voxora.cloud"
          data-voxora-api-url="https://apivoxora.voxora.cloud"
          data-voxora-public-key="69a1e081d18cbe85b0426d56"
          data-voxora-env="undefined"
          async
        />
      </body>
    </html>
  );
}
