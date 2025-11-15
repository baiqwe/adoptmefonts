import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Adopt Me Fonts | Adopt Me Fonts Generator",
    template: "%s | Adopt Me Fonts",
  },
  description:
    "Adopt Me Fonts generator for Roblox: create and copy adopt me fonts styles like bubble, bold, cute, small caps, aesthetic fullwidth. Free and mobile-friendly.",
  keywords: [
    "adopt me fonts",
    "adopt me font generator",
    "roblox adopt me fonts",
    "cute adopt me fonts",
    "bubble adopt me fonts",
  ],
  metadataBase: new URL("https://adoptmefont.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Adopt Me Fonts | Adopt Me Fonts Generator",
    description:
      "Create and copy adopt me fonts for Roblox: bubble, bold, cute, small caps.",
    url: "https://adoptmefont.com/",
    siteName: "Adopt Me Fonts",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Adopt Me Fonts",
    description: "Generate and copy adopt me fonts for Roblox.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
