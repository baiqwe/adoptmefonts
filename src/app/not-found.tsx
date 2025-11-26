import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import Script from "next/script";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "404", url: "https://adoptmefont.com/404" },
];

export const metadata: Metadata = {
  title: "404 - Page Not Found | Adopt Me Fonts",
  description: "The page you're looking for doesn't exist. Find adopt me fonts generator, preppy fonts, name generator, and more tools for Roblox Adopt Me.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://adoptmefont.com/404",
  },
};

export default function NotFound() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="text-center mb-12">
          <h1 className="text-6xl sm:text-8xl font-bold text-zinc-200 mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-zinc-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 sm:p-8 border border-pink-200 mb-8">
          <h3 className="text-xl font-semibold mb-4">Popular Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/"
              className="block p-4 bg-white rounded-lg border border-zinc-200 hover:border-pink-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-zinc-900 mb-2">🎨 Font Generator</h4>
              <p className="text-sm text-zinc-600">
                Generate adopt me fonts with bubble, bold, cute, and more styles
              </p>
            </Link>
            
            <Link
              href="/preppy-font-generator"
              className="block p-4 bg-white rounded-lg border border-zinc-200 hover:border-pink-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-zinc-900 mb-2">✨ Preppy Fonts</h4>
              <p className="text-sm text-zinc-600">
                Create aesthetic preppy fonts with symbols and decorations
              </p>
            </Link>
            
            <Link
              href="/adopt-me-names-generator"
              className="block p-4 bg-white rounded-lg border border-zinc-200 hover:border-pink-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-zinc-900 mb-2">🐾 Name Generator</h4>
              <p className="text-sm text-zinc-600">
                Generate creative names for your Adopt Me pets
              </p>
            </Link>
            
            <Link
              href="/tag-filter-checker"
              className="block p-4 bg-white rounded-lg border border-zinc-200 hover:border-pink-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-zinc-900 mb-2">🔍 Filter Checker</h4>
              <p className="text-sm text-zinc-600">
                Test if your names will pass Roblox tag filters
              </p>
            </Link>
          </div>
        </div>

        <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
          <h3 className="text-xl font-semibold mb-4">More Resources</h3>
          <ul className="space-y-2 text-zinc-700">
            <li>
              <Link href="/symbols" className="text-pink-600 hover:underline font-medium">
                Safe Symbols List
              </Link>
              {" - Find Roblox-compatible symbols"}
            </li>
            <li>
              <Link href="/pet-names" className="text-pink-600 hover:underline font-medium">
                Pet Name Bank
              </Link>
              {" - Get inspiration for your pets"}
            </li>
            <li>
              <Link href="/how-to-use-adopt-me-fonts" className="text-pink-600 hover:underline font-medium">
                How-To Guide
              </Link>
              {" - Learn how to use adopt me fonts"}
            </li>
            <li>
              <Link href="/faq" className="text-pink-600 hover:underline font-medium">
                FAQ
              </Link>
              {" - Common questions and answers"}
            </li>
            <li>
              <Link href="/styles/bubble-fonts" className="text-pink-600 hover:underline font-medium">
                Bubble Fonts Guide
              </Link>
              {" - Learn about bubble font styles"}
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Go to Homepage
          </Link>
        </div>
      </main>
    </>
  );
}

