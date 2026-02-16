import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LuxureDetails - Luxury Car Detailing",
  description: "Experience the prestige of a professionally detailed car, radiating elegance and refinement at every turn.",
};

import LayoutWrapper from "@/components/LayoutWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-luxury-accent selection:text-black`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
