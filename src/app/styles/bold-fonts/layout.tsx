import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bold Adopt Me Fonts - Strong & Readable Fonts for Roblox",
  description: "Create bold adopt me fonts for Roblox. Bold fonts are highly compatible, easy to read, and perfect for player names and pet names in Adopt Me.",
  keywords: [
    "bold adopt me fonts",
    "bold fonts roblox",
    "strong adopt me fonts",
    "bold font generator",
    "readable adopt me fonts",
  ],
  openGraph: {
    title: "Bold Adopt Me Fonts - Strong & Readable Fonts",
    description: "Create bold adopt me fonts for Roblox. Highly compatible and easy to read.",
    url: "https://adoptmefont.com/styles/bold-fonts",
  },
  alternates: {
    canonical: "https://adoptmefont.com/styles/bold-fonts",
  },
};

export default function BoldFontsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

