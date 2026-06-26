import type { Metadata } from "next";
import "../styles/tailwind.css";
import "../styles/theme.scss";

export const metadata: Metadata = {
  title: "InvestPro | AI-Powered Investment Crowdfunding Platform",
  description:
    "InvestPro (SmartVest AI) - The leading crowdfunding platform in Vietnam. Leverage Google Gemini AI to analyze investment risks, track project funding, and manage your portfolio with transparency and data-driven insights.",
  keywords: [
    "InvestPro",
    "SmartVest AI",
    "Investment Platform",
    "Crowdfunding Vietnam",
    "AI Financial Analysis",
    "AI Investment Assistant",
    "Gemini AI Financial Insights",
    "Project Risk Assessment",
    "Automated Due Diligence",
    "Real-time Funding Tracker",
    "Investment Portfolio Management",
    "Next.js Investment App",
    "NestJS Fintech Backend",
    "Blockchain Transparency",
    "Secure Payment Disbursement",
    "Crowdfunding for Startups",
    "Safe Investing for Beginners",
    "AI-Driven Venture Capital",
    "Startup Funding Portal",
  ].join(", "),
  authors: [{ name: "Crizo Nguyen", url: "https://investpro.site/" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CrizoNguyen",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
