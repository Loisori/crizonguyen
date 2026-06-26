import type { Metadata } from "next";
import "../styles/tailwind.css";
import "../styles/theme.scss";

export const metadata: Metadata = {
  title: "Crizo Nguyen | Professional Video Editor & Visual Storyteller",
  description:
    "Portfolio of Crizo Nguyen - Professional Video Editor specializing in high-impact video production, cinematic color grading, motion graphics, and dynamic visual storytelling. Bringing creative visions to life with industry-standard editing tools.",
  keywords: [
    "Crizo Nguyen",
    "Video Editor Portfolio",
    "Professional Video Editor",
    "Visual Storyteller",
    "Video Production Vietnam",
    "Cinematic Color Grading",
    "Motion Graphics Designer",
    "Adobe Premiere Pro",
    "After Effects Expert",
    "DaVinci Resolve Colorist",
    "Commercial Video Editing",
    "YouTube Video Editor",
    "Music Video Editing",
    "Corporate Video Production",
    "Post-Production Specialist",
    "Next.js Portfolio",
    "Video Editing Services",
    "Creative Content Creator",
    "Short-form Content Editor", // TikTok/Reels/Shorts
  ].join(", "),
  authors: [{ name: "Crizo Nguyen", url: "https://crizonguyen.com/" }],
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
