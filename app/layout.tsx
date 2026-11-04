import type { Metadata } from "next";
import "../styles/tailwind.css";
import "../styles/theme.scss";
import localFont from "next/font/local";

const sfProDisplay = localFont({
  src: [
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-Thin.otf",
      weight: "100",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-Ultralight.otf",
      weight: "200",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-UltralightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-Semibold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-Bold.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-Heavy.otf",
      weight: "800",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-HeavyItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-Black.otf",
      weight: "900",
    },
    {
      path: "../public/fonts/SF-Pro-Display/SF-Pro-Display-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-sf-pro-display",
});

const heathergreen = localFont({
  src: [
    {
      path: "../public/fonts/heathergreen/Heathergreen.otf",
      weight: "400",
    },
  ],
  variable: "--font-heathergreen",
});

const _1K_Reey = localFont({
  src: [
    {
      path: "../public/fonts/1K-Reey/1K-Reey.otf",
      weight: "400",
    },
  ],
  variable: "--font-1k-reey",
});

export const metadata: Metadata = {
  title: "Crizo Nguyen | Professional Video Editor & Visual Storyteller",
  manifest: "/site.webmanifest",
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
    <html
      lang="en"
      className={`${sfProDisplay.variable} ${heathergreen.variable} ${_1K_Reey.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
