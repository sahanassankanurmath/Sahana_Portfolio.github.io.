import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahana Sankanurmath — AI/ML Graduate",
  description: "Portfolio of Sahana Sankanurmath, an AI/ML Graduate based in Bengaluru.",
  openGraph: {
    title: "Sahana Sankanurmath — AI/ML Graduate",
    description: "Machine learning, computer vision, RAG systems, and AI-powered education projects.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a className="skip-link" href="#main">Skip to content</a>
          <SiteHeader />
          <main id="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
