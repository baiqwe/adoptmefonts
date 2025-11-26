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
  { name: "Small Caps", url: "https://adoptmefont.com/styles/small-caps" },
];

export default function SmallCapsPage() {
  const [text, setText] = useState("Adopt Me");
  const smallCapsStyle = styles.find((s) => s.id === "small-caps");
  const output = smallCapsStyle ? smallCapsStyle.apply(text) : text;
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
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Small Caps Adopt Me Fonts - Clean & Highly Readable for Roblox</h1>
        <p className="text-lg text-zinc-700 mb-6">
          Small caps fonts offer a clean, professional look that&apos;s both stylish and highly readable. These Unicode small capital letters are perfect for Adopt Me names when you want something elegant but not too decorative. Small caps work excellently on all devices and are rarely filtered by Roblox.
        </p>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-8 border border-pink-200">
          <h2 className="text-xl font-semibold mb-4">Try Small Caps</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Why Choose Small Caps?</h2>
          <p className="text-zinc-700 mb-4">
            Small caps fonts are perfect for players who want something clean and professional. Unlike decorative fonts that might get filtered or display incorrectly, small caps are simple, elegant, and highly compatible. They offer a sophisticated look without being overwhelming.
          </p>
          <p className="text-zinc-700 mb-4">
            These fonts are ideal for both player names and pet names. They&apos;re easy to read, work on all platforms, and rarely get filtered by Roblox. Small caps provide that perfect balance between style and reliability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Uses for Small Caps</h2>
          <ul className="space-y-3 text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Player Names:</strong> Small caps are perfect for player names because they&apos;re professional, readable, and stand out without being distracting. They work great for both short and longer names.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Pet Names:</strong> Small caps work well for pet names, especially if you want something clean and elegant. They&apos;re clear, easy to read, and work reliably in all situations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Chat Messages:</strong> Small caps work excellently in Roblox chat. They&apos;re simple enough that the chat filter doesn&apos;t flag them, and they&apos;re easy to read in fast-moving conversations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Maximum Compatibility:</strong> Small caps are one of the most compatible font styles. They work on all platforms and devices, so you won&apos;t run into display issues.</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Small Caps vs Other Styles</h2>
          <div className="bg-zinc-50 rounded-lg p-6">
            <p className="text-zinc-700 mb-4">
              Compared to other font styles, small caps prioritize readability and elegance. They&apos;re similar to <Link href="/styles/bold-fonts" className="text-pink-600 underline">bold fonts</Link> in terms of reliability but offer a more refined, sophisticated look. They&apos;re less decorative than <Link href="/styles/bubble-fonts" className="text-pink-600 underline">bubble fonts</Link> or <Link href="/styles/cute-fonts" className="text-pink-600 underline">cute fonts</Link>, making them perfect for players who want something clean and professional.
            </p>
            <p className="text-zinc-700 mb-4">
              If you want something similar but with more personality, try <Link href="/styles/double-struck" className="text-pink-600 underline">double struck</Link> fonts. They offer similar reliability with a slightly different aesthetic. For decorative options, check out our <Link href="/styles/cute-fonts" className="text-pink-600 underline">cute fonts</Link> or <Link href="/preppy-font-generator" className="text-pink-600 underline">preppy font generator</Link>.
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
                Small caps work flawlessly on all Roblox platforms - desktop, mobile, and tablet. They display correctly in player names, pet names, and chat messages. You&apos;ll never see question marks or broken characters with small caps.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold mb-2">Rarely Filtered</h3>
              <p className="text-zinc-700">
                Roblox almost never filters small caps characters. They&apos;re standard Unicode characters that the moderation system recognizes as safe. This makes them ideal if you&apos;ve had issues with other font styles getting rejected.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold mb-2">Perfect for All Lengths</h3>
              <p className="text-zinc-700">
                Small caps work great for both short pet names (under 20 characters) and longer player names. Unlike some decorative fonts that might get filtered with longer text, small caps remain reliable regardless of length.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Ready to Create Your Small Caps Name?</h2>
          <p className="text-zinc-700 mb-4">
            Use our <Link href="/" className="text-pink-600 underline font-semibold">font generator</Link> to create your perfect small caps name. Just type your text, select the small caps style, and copy. It&apos;s that simple!
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

