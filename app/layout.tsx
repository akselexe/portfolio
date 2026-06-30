import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://akselexe.github.io/portfolio/"),
  title: "Mohamed Amine Kabtni - Portfolio",
  description:
    "Portfolio of AI & Data Science Enthusiast ",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Mohamed Amine Kabtni",
    "Mohamed",
    "Amine",
    "Kabtni",
    "Mohamed_Amine_Kabtni",
    "Next.js",
    "ReactNative",
    "Android",
  ],
  openGraph: {
    title: "Mohamed Amine Kabtni - Portfolio",
    description:
      "Portfolio of AI & Data Science Enthusiast",
    images: "/amine.jpg",
  },
  alternates: {
    canonical: "https://akselexe.github.io/portfolio/",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Mohamed Amine Kabtni",
              jobTitle: "Software Engineer",
              url: "https://akselexe.github.io",
              sameAs: [
                "https://www.linkedin.com/in/mohamed-amine-kabtni-6b0240339",
                "https://github.com/akselexe",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
