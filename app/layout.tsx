import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "interaOne | Atmospheric Precision Deep-Work",
  description:
    "A deep-work environment where autonomous AI agents handle mechanical tasks with surgical precision.",
  keywords: [
    "interaOne",
    "autonomous intelligence",
    "deep work",
    "AI agents",
    "developer productivity",
    "parallel execution",
    "code automation",
  ],
  authors: [{ name: "interaOne Team" }],
  openGraph: {
    title: "interaOne | Atmospheric Precision Deep-Work",
    description:
      "Built to make you extraordinarily productive with precision-built autonomous agents.",
    url: "https://www.interaone.com",
    siteName: "interaOne",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "interaOne | Atmospheric Precision Deep-Work",
    description:
      "Built to make you extraordinarily productive with precision-built autonomous agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="light bg-surface text-on-surface" lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,300,0,0" rel="stylesheet" />
      </head>
      <body className={`${hanken.className} ${hanken.variable} ${jetbrains.variable} bg-surface text-on-surface antialiased`}>
        {children}
      </body>
    </html>
  );
}
