import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adopt Me Names Generator - Cute Pet Names for Roblox",
  description: "Generate cute and playful adopt me names and adopt me pet names with emojis. Free random name generator for Roblox Adopt Me with 5 unique suggestions.",
  keywords: [
    "adopt me names",
    "adopt me pet name",
    "roblox adopt me names",
    "cute adopt me names",
    "adopt me name generator",
    "pet name generator",
    "roblox pet names",
  ],
  openGraph: {
    title: "Adopt Me Names Generator - Cute Pet Names for Roblox",
    description: "Generate cute and playful adopt me names and adopt me pet names with emojis. Free random name generator for Roblox Adopt Me.",
    url: "https://adoptmefont.com/names",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adopt Me Names Generator - Cute Pet Names",
    description: "Generate cute and playful adopt me names and adopt me pet names with emojis.",
  },
  alternates: {
    canonical: "https://adoptmefont.com/names",
  },
};

export default function NamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

