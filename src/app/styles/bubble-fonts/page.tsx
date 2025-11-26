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
  { name: "Bubble Fonts", url: "https://adoptmefont.com/styles/bubble-fonts" },
];

export default function BubbleFontsPage() {
  const [text, setText] = useState("Adopt Me");
  const bubbleStyle = styles.find((s) => s.id === "bubble");
  const output = bubbleStyle ? bubbleStyle.apply(text) : text;
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
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Bubble Adopt Me Fonts - Cute Circled Letters for Roblox</h1>
        <p className="text-lg text-zinc-700 mb-6">
          Bubble fonts are one of the most popular choices for Adopt Me names. These circled letters create a playful, eye-catching look that stands out in Roblox. Whether you&apos;re naming your pet or updating your player name, bubble fonts add that extra touch of personality.
        </p>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-8 border border-pink-200">
          <h2 className="text-xl font-semibold mb-4">Try Bubble Fonts</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Why Choose Bubble Fonts?</h2>
          <p className="text-zinc-700 mb-4">
            Bubble fonts work great for Adopt Me because they&apos;re easy to read and highly compatible with Roblox. The circled letters are part of the Unicode standard, so they display correctly on most devices. Players love using them for pet names because they look cute and fun without being too flashy.
          </p>
          <p className="text-zinc-700 mb-4">
            These fonts are perfect if you want something that stands out but isn&apos;t overwhelming. They work well for both short pet names and longer player names. Plus, Roblox rarely filters bubble font characters, so you won&apos;t run into issues when using them in-game.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Uses for Bubble Fonts</h2>
          <ul className="space-y-3 text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Pet Names:</strong> Bubble fonts are ideal for pet names in Adopt Me. They&apos;re cute, readable, and work perfectly with emojis. Try combining them with paw prints or hearts for extra flair.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Player Names:</strong> Want a name that&apos;s fun but not too wild? Bubble fonts strike the perfect balance. They&apos;re noticeable without being distracting.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Chat Messages:</strong> While Roblox chat filters can be strict, bubble fonts usually pass through. They&apos;re simple enough that the moderation system doesn&apos;t flag them.</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Bubble Fonts vs Other Styles</h2>
          <div className="bg-zinc-50 rounded-lg p-6">
            <p className="text-zinc-700 mb-4">
              Compared to other font styles, bubble fonts offer excellent readability and compatibility. They&apos;re more playful than <Link href="/styles/bold-fonts" className="text-pink-600 underline">bold fonts</Link> but less decorative than <Link href="/styles/cute-fonts" className="text-pink-600 underline">cute fonts with hearts</Link>. This makes them a safe, reliable choice for most players.
            </p>
            <p className="text-zinc-700">
              If you&apos;re looking for something similar but want more options, check out our <Link href="/" className="text-pink-600 underline">main font generator</Link> to explore star brackets, cute brackets, and other decorative styles. They offer similar playful vibes with different decorative elements.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Compatibility & Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-semibold mb-2">High Compatibility</h3>
              <p className="text-zinc-700">
                Bubble fonts work on all Roblox platforms - desktop, mobile, and tablet. They display correctly in player names, pet names, and most chat messages. You won&apos;t see question marks or broken characters.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold mb-2">Keep It Short</h3>
              <p className="text-zinc-700">
                While bubble fonts are reliable, Roblox has character limits. Keep your names under 20 characters for the best results. Longer names might get cut off or filtered.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold mb-2">Test Before Finalizing</h3>
              <p className="text-zinc-700">
                Always test your bubble font name in-game before making it permanent. Copy the text, paste it into Roblox, and make sure it looks right. Some devices render Unicode slightly differently.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Ready to Create Your Bubble Font Name?</h2>
          <p className="text-zinc-700 mb-4">
            Use our <Link href="/" className="text-pink-600 underline font-semibold">font generator</Link> to create your perfect bubble font name. Just type your text, select the bubble style, and copy. It&apos;s that simple!
          </p>
          <p className="text-zinc-700">
            Need help getting started? Check out our <Link href="/how-to-use-adopt-me-fonts" className="text-pink-600 underline font-semibold">complete guide</Link> on using adopt me fonts in Roblox.
          </p>
        </section>
      </main>
    </>
  );
}

