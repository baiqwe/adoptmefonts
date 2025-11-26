"use client";
import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "@/lib/styles";

const breadcrumbs = [
  { name: "Home", url: "https://adoptmefont.com/" },
  { name: "Styles", url: "https://adoptmefont.com/styles" },
  { name: "Double Struck", url: "https://adoptmefont.com/styles/double-struck" },
];

export default function DoubleStruckPage() {
  const [text, setText] = useState("Adopt Me");
  const doubleStruckStyle = styles.find((s) => s.id === "double-struck");
  const output = doubleStruckStyle ? doubleStruckStyle.apply(text) : text;
  const [toast, setToast] = useState("");

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setToast("Copied!");
      setTimeout(() => setToast(""), 1200);
    } catch {
      setToast("Copy failed");
      setTimeout(() => setToast(""), 1500);
    }
  };

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
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Double Struck Adopt Me Fonts - Mathematical Style for Roblox</h1>
        <p className="text-lg text-zinc-700 mb-6">
          Double struck fonts offer a unique, mathematical aesthetic that&apos;s both stylish and highly readable. These fonts use mathematical double-struck Unicode characters, creating a distinctive look that stands out in Adopt Me. Perfect for players who want something elegant and professional.
        </p>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-8 border border-pink-200">
          <h2 className="text-xl font-semibold mb-4">Try Double Struck Fonts</h2>
          <div className="space-y-4">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 32))}
              placeholder="Type your text here"
              className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-black outline-none focus:border-pink-400"
            />
            <div className="bg-white rounded-lg p-4 border border-zinc-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zinc-600">Preview:</span>
                <button
                  onClick={onCopy}
                  className="text-sm px-4 py-2 bg-black text-white rounded-md hover:bg-zinc-900 transition-colors"
                >
                  Copy
                </button>
              </div>
              <div className="text-2xl font-medium break-words">{output}</div>
            </div>
          </div>
          {toast && (
            <div className="mt-2 text-sm text-green-600">{toast}</div>
          )}
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Double Struck Fonts?</h2>
          <p className="text-zinc-700 mb-4">
            Double struck fonts are perfect for players who want something unique and professional. These mathematical Unicode characters are highly compatible with Roblox&apos;s text system and display correctly on all devices. They offer a distinctive look that&apos;s both elegant and readable.
          </p>
          <p className="text-zinc-700 mb-4">
            Unlike decorative fonts that might get filtered, double struck fonts are reliable and safe to use. They work great for both player names and pet names, providing that perfect balance between style and compatibility.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Uses for Double Struck Fonts</h2>
          <ul className="space-y-3 text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Player Names:</strong> Double struck fonts are perfect for player names because they&apos;re unique, readable, and stand out. They work great for both short and longer names.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Pet Names:</strong> Double struck fonts work well for pet names, especially if you want something distinctive. They&apos;re clear, easy to read, and work reliably in all situations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Profile Names:</strong> Double struck fonts add a sophisticated touch to profile names. They&apos;re noticeable without being overwhelming, making them perfect for standing out in the Adopt Me community.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Maximum Compatibility:</strong> Double struck fonts work on all platforms and devices. You won&apos;t run into display issues, making them a reliable choice for any situation.</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Double Struck vs Other Styles</h2>
          <div className="bg-zinc-50 rounded-lg p-6">
            <p className="text-zinc-700 mb-4">
              Compared to other font styles, double struck fonts offer a unique mathematical aesthetic. They&apos;re similar to <Link href="/styles/bold-fonts" className="text-pink-600 underline">bold fonts</Link> and <Link href="/styles/small-caps" className="text-pink-600 underline">small caps</Link> in terms of reliability but offer a more distinctive look. They&apos;re less decorative than <Link href="/styles/bubble-fonts" className="text-pink-600 underline">bubble fonts</Link> or <Link href="/styles/cute-fonts" className="text-pink-600 underline">cute fonts</Link>, making them perfect for players who want something elegant and unique.
            </p>
            <p className="text-zinc-700 mb-4">
              If you want something similar but with more personality, try <Link href="/styles/bold-fonts" className="text-pink-600 underline">bold fonts</Link> or <Link href="/styles/small-caps" className="text-pink-600 underline">small caps</Link>. For decorative options, check out our <Link href="/styles/cute-fonts" className="text-pink-600 underline">cute fonts</Link> or <Link href="/preppy-font-generator" className="text-pink-600 underline">preppy font generator</Link>.
            </p>
            <p className="text-zinc-700">
              Want to see all available styles? Explore our <Link href="/" className="text-pink-600 underline">main font generator</Link> to find the perfect style for your needs.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Compatibility & Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-semibold mb-2">Excellent Compatibility</h3>
              <p className="text-zinc-700">
                Double struck fonts work flawlessly on all Roblox platforms - desktop, mobile, and tablet. They display correctly in player names, pet names, and chat messages. You&apos;ll never see question marks or broken characters with double struck fonts.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold mb-2">Rarely Filtered</h3>
              <p className="text-zinc-700">
                Roblox almost never filters double struck characters. They&apos;re standard mathematical Unicode characters that the moderation system recognizes as safe. This makes them ideal if you&apos;ve had issues with other font styles getting rejected.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold mb-2">Perfect for All Lengths</h3>
              <p className="text-zinc-700">
                Double struck fonts work great for both short pet names (under 20 characters) and longer player names. Unlike some decorative fonts that might get filtered with longer text, double struck fonts remain reliable regardless of length.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Ready to Create Your Double Struck Name?</h2>
          <p className="text-zinc-700 mb-4">
            Use our <Link href="/" className="text-pink-600 underline font-semibold">font generator</Link> to create your perfect double struck name. Just type your text, select the double struck style, and copy. It&apos;s that simple!
          </p>
          <p className="text-zinc-700 mb-4">
            Looking for more options? Explore our <Link href="/" className="text-pink-600 underline font-semibold">main font generator</Link> to see all available styles, or check out our <Link href="/preppy-font-generator" className="text-pink-600 underline font-semibold">Preppy Font Generator</Link> for aesthetic names with decorative symbols.
          </p>
          <p className="text-zinc-700">
            Need help getting started? Check out our <Link href="/how-to-use-adopt-me-fonts" className="text-pink-600 underline font-semibold">complete guide</Link> on using adopt me fonts in Roblox, or visit our <Link href="/faq" className="text-pink-600 underline font-semibold">FAQ page</Link> for answers to common questions.
          </p>
        </section>
      </main>
    </>
  );
}

