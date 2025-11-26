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
  { name: "Star Brackets", url: "https://adoptmefont.com/styles/star-brackets" },
];

export default function StarBracketsPage() {
  const [text, setText] = useState("Adopt Me");
  const starBracketsStyle = styles.find((s) => s.id === "star-brackets");
  const output = starBracketsStyle ? starBracketsStyle.apply(text) : text;
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
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Star Brackets Adopt Me Fonts - Cute Star Decorations for Roblox</h1>
        <p className="text-lg text-zinc-700 mb-6">
          Star brackets are a fun and eye-catching way to decorate your Adopt Me names. These fonts wrap your text with star symbols (★), creating a playful and memorable look. Perfect for pet names and player names that need a bit of sparkle and personality.
        </p>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-8 border border-pink-200">
          <h2 className="text-xl font-semibold mb-4">Try Star Brackets</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Why Choose Star Brackets?</h2>
          <p className="text-zinc-700 mb-4">
            Star brackets are perfect for players who want something decorative but not too busy. The star symbol (★) is simple, recognizable, and highly compatible with Roblox&apos;s text system. Unlike more complex decorative styles, star brackets are clean and easy to read while still adding that special touch.
          </p>
          <p className="text-zinc-700 mb-4">
            These fonts work great for both pet names and player names. The stars create a sense of importance and style without overwhelming the text. Plus, star symbols are rarely filtered by Roblox, making them a safe choice for in-game use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Uses for Star Brackets</h2>
          <ul className="space-y-3 text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Pet Names:</strong> Star brackets are ideal for pet names in Adopt Me. They&apos;re cute, readable, and work perfectly with emojis. Try combining them with 🐾, ✨, or 🌟 for extra sparkle.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Player Names:</strong> Want a name that stands out? Star brackets give your player name that special, eye-catching look. They&apos;re noticeable without being distracting.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Profile Names:</strong> Star brackets work well in profile descriptions and display names. They add personality and make your name memorable to other players.</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Star Brackets vs Other Styles</h2>
          <div className="bg-zinc-50 rounded-lg p-6">
            <p className="text-zinc-700 mb-4">
              Compared to other font styles, star brackets offer a good balance between simplicity and decoration. They&apos;re more decorative than <Link href="/styles/bold-fonts" className="text-pink-600 underline">bold fonts</Link> but simpler than <Link href="/styles/cute-fonts" className="text-pink-600 underline">cute fonts with hearts</Link>. This makes them perfect for players who want something special but not too busy.
            </p>
            <p className="text-zinc-700 mb-4">
              If you&apos;re looking for similar decorative options, check out our <Link href="/styles/bubble-fonts" className="text-pink-600 underline">bubble fonts</Link> or <Link href="/preppy-font-generator" className="text-pink-600 underline">preppy font generator</Link> for more stylized options. For more star variations, explore our <Link href="/symbols" className="text-pink-600 underline">symbol picker</Link>.
            </p>
            <p className="text-zinc-700">
              Want to combine star brackets with other styles? Try our <Link href="/" className="text-pink-600 underline">main font generator</Link> to see all available styles and create the perfect combination.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Compatibility & Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-semibold mb-2">High Compatibility</h3>
              <p className="text-zinc-700">
                Star brackets work on all Roblox platforms - desktop, mobile, and tablet. The star symbol (★) is part of the Unicode standard, so it displays correctly in player names, pet names, and most chat messages.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold mb-2">Keep It Short</h3>
              <p className="text-zinc-700">
                While star brackets are reliable, Roblox has character limits. Keep your names under 20 characters for the best results. The star symbols add 2 characters (one on each side), so plan accordingly.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold mb-2">Combine with Emojis</h3>
              <p className="text-zinc-700">
                Star brackets work beautifully with emojis. Try adding ✨, 🌟, or ⭐ to create a name that&apos;s both decorative and cute. Just remember to keep the total length reasonable.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Ready to Create Your Star Bracket Name?</h2>
          <p className="text-zinc-700 mb-4">
            Use our <Link href="/" className="text-pink-600 underline font-semibold">font generator</Link> to create your perfect star bracket name. Just type your text, select the star brackets style, and copy. It&apos;s that simple!
          </p>
          <p className="text-zinc-700 mb-4">
            Looking for more options? Explore our <Link href="/" className="text-pink-600 underline font-semibold">main font generator</Link> to see all available styles, or check out our <Link href="/preppy-font-generator" className="text-pink-600 underline font-semibold">Preppy Font Generator</Link> for aesthetic names with multiple decorative symbols.
          </p>
          <p className="text-zinc-700">
            Need help getting started? Check out our <Link href="/how-to-use-adopt-me-fonts" className="text-pink-600 underline font-semibold">complete guide</Link> on using adopt me fonts in Roblox, or visit our <Link href="/faq" className="text-pink-600 underline font-semibold">FAQ page</Link> for answers to common questions.
          </p>
        </section>
      </main>
    </>
  );
}

