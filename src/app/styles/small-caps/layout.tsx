import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Caps Adopt Me Fonts - Clean & Readable for Roblox",
  description: "Create small caps adopt me fonts for Roblox. Small caps are highly compatible, easy to read, and perfect for player names and pet names in Adopt Me.",
  keywords: [
    "small caps adopt me fonts",
    "small caps fonts roblox",
    "readable adopt me fonts",
    "small caps font generator",
    "clean adopt me fonts",
  ],
  openGraph: {
    title: "Small Caps Adopt Me Fonts - Clean & Readable",
    description: "Create small caps adopt me fonts for Roblox. Highly compatible and easy to read.",
    url: "https://adoptmefont.com/styles/small-caps",
  },
  alternates: {
    canonical: "https://adoptmefont.com/styles/small-caps",
  },
};

export default function SmallCapsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

