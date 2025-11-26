import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Double Struck Adopt Me Fonts - Mathematical Style for Roblox",
  description: "Create double struck adopt me fonts for Roblox. Double struck fonts are highly compatible, easy to read, and perfect for player names and pet names in Adopt Me.",
  keywords: [
    "double struck adopt me fonts",
    "double struck fonts roblox",
    "mathematical fonts adopt me",
    "double struck font generator",
    "readable adopt me fonts",
  ],
  openGraph: {
    title: "Double Struck Adopt Me Fonts - Mathematical Style",
    description: "Create double struck adopt me fonts for Roblox. Highly compatible and easy to read.",
    url: "https://adoptmefont.com/styles/double-struck",
  },
  alternates: {
    canonical: "https://adoptmefont.com/styles/double-struck",
  },
};

export default function DoubleStruckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

