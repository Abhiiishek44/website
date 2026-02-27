import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Voxora - Open Source Customer Support Platform",
  description: "Voxora is a modern, real-time customer support platform. Open source, self-hostable, with AI-powered chat, voice integration, and powerful analytics.",
  keywords: ["customer support", "chat widget", "open source", "live chat", "AI support", "help desk"],
  authors: [{ name: "Voxora Team" }],
  openGraph: {
    title: "Voxora - Open Source Customer Support Platform",
    description: "Modern, real-time customer support platform. Open source and self-hostable.",
    url: "https://www.voxora.cloud",
    siteName: "Voxora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxora - Open Source Customer Support Platform",
    description: "Modern, real-time customer support platform. Open source and self-hostable.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      <Script src="https://cdn.voxora.cloud/voxora-widget/v1/voxora.js?v=2" data-voxora-cdn-url="https://cdn.voxora.cloud" data-voxora-api-url="https://apivoxora.voxora.cloud" data-voxora-public-key="69a1e081d18cbe85b0426d56" data-voxora-env="undefined" async></Script>
      </body>
    </html>
  );
}
