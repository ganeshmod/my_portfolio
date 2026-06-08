import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Ganesh Kumar Modanwal — Frontend Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, and Node.js. Based in Bengaluru.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceMono.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
