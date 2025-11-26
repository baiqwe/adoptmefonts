import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Star Brackets Adopt Me Fonts - Star Decorations for Roblox",
  description: "Create adopt me fonts with star brackets. Perfect for pet names and player names in Roblox Adopt Me. Cute star decorations that work great in-game.",
  keywords: [
    "star brackets adopt me fonts",
    "star fonts roblox",
    "star decorations adopt me",
    "star bracket font generator",
    "cute star fonts",
  ],
  openGraph: {
    title: "Star Brackets Adopt Me Fonts - Star Decorations",
    description: "Create adopt me fonts with star brackets. Perfect for Roblox Adopt Me names.",
    url: "https://adoptmefont.com/styles/star-brackets",
  },
  alternates: {
    canonical: "https://adoptmefont.com/styles/star-brackets",
  },
};

export default function StarBracketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

