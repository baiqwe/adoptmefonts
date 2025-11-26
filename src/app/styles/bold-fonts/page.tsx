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
  { name: "Bold Fonts", url: "https://adoptmefont.com/styles/bold-fonts" },
];

export default function BoldFontsPage() {
  const [text, setText] = useState("Adopt Me");
  const boldStyle = styles.find((s) => s.id === "bold");
  const output = boldStyle ? boldStyle.apply(text) : text;
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
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Bold Adopt Me Fonts - Strong & Highly Readable for Roblox</h1>
        <p className="text-lg text-zinc-700 mb-6">
          Bold fonts are one of the most reliable and compatible options for Adopt Me names. These mathematical bold characters are easy to read, work on all devices, and rarely get filtered by Roblox. Whether you&apos;re naming your pet or updating your player name, bold fonts provide that strong, clear look that stands out.
        </p>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-8 border border-pink-200">
          <h2 className="text-xl font-semibold mb-4">Try Bold Fonts</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Why Choose Bold Fonts?</h2>
          <p className="text-zinc-700 mb-4">
            Bold fonts are the gold standard for Adopt Me names because they offer the best combination of readability, compatibility, and reliability. These mathematical bold Unicode characters are part of the official Unicode standard, so they display correctly on virtually every device - desktop, mobile, and tablet.
          </p>
          <p className="text-zinc-700 mb-4">
            Unlike decorative fonts that might get filtered or display incorrectly, bold fonts are simple and straightforward. Roblox rarely filters them, making them a safe choice for both player names and pet names. They&apos;re also easy to read, which is important when other players are trying to identify you in-game.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Best Uses for Bold Fonts</h2>
          <ul className="space-y-3 text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Player Names:</strong> Bold fonts are perfect for player names because they&apos;re professional, readable, and stand out without being distracting. They work great for both short and longer names.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Pet Names:</strong> While bold fonts might seem simple, they&apos;re actually perfect for pet names. They&apos;re clear, easy to read, and work reliably in all situations. Combine them with emojis for extra personality.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Chat Messages:</strong> Bold fonts work excellently in Roblox chat. They&apos;re simple enough that the chat filter doesn&apos;t flag them, and they&apos;re easy to read in fast-moving conversations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 mt-1">•</span>
              <span><strong>Maximum Compatibility:</strong> If you&apos;re unsure which font to use, bold is always a safe choice. It works on all platforms and devices, so you won&apos;t run into display issues.</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Bold Fonts vs Other Styles</h2>
          <div className="bg-zinc-50 rounded-lg p-6">
            <p className="text-zinc-700 mb-4">
              Compared to other font styles, bold fonts prioritize readability and reliability over decoration. They&apos;re more straightforward than <Link href="/styles/bubble-fonts" className="text-pink-600 underline">bubble fonts</Link> and less decorative than <Link href="/styles/cute-fonts" className="text-pink-600 underline">cute fonts with hearts</Link>, but they offer unmatched compatibility and clarity.
            </p>
            <p className="text-zinc-700 mb-4">
              If you want something similar but with a bit more personality, try <Link href="/styles/small-caps" className="text-pink-600 underline">small caps</Link> or <Link href="/styles/double-struck" className="text-pink-600 underline">double struck</Link> fonts. They offer similar reliability with slightly different aesthetics.
            </p>
            <p className="text-zinc-700">
              For decorative options, check out our <Link href="/styles/cute-fonts" className="text-pink-600 underline">cute fonts</Link>, <Link href="/styles/bubble-fonts" className="text-pink-600 underline">bubble fonts</Link>, or <Link href="/preppy-font-generator" className="text-pink-600 underline">preppy font generator</Link> for more stylized options.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Compatibility & Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-semibold mb-2">Excellent Compatibility</h3>
              <p className="text-zinc-700">
                Bold fonts work flawlessly on all Roblox platforms - desktop, mobile, and tablet. They display correctly in player names, pet names, and chat messages. You&apos;ll never see question marks or broken characters with bold fonts.
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold mb-2">Rarely Filtered</h3>
              <p className="text-zinc-700">
                Roblox almost never filters bold font characters. They&apos;re simple, standard Unicode characters that the moderation system recognizes as safe. This makes them ideal if you&apos;ve had issues with other font styles getting rejected.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold mb-2">Perfect for All Lengths</h3>
              <p className="text-zinc-700">
                Bold fonts work great for both short pet names (under 20 characters) and longer player names. Unlike some decorative fonts that might get filtered with longer text, bold fonts remain reliable regardless of length.
              </p>
            </div>
            <div className="border-l-4 border-pink-400 pl-4">
              <h3 className="font-semibold mb-2">Combine with Emojis</h3>
              <p className="text-zinc-700">
                Bold fonts pair beautifully with emojis. Try adding 🐾, ✨, or 💫 to create a name that&apos;s both bold and cute. The contrast between the strong bold text and cute emojis creates a perfect balance.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-semibold mb-3">Ready to Create Your Bold Font Name?</h2>
          <p className="text-zinc-700 mb-4">
            Use our <Link href="/" className="text-pink-600 underline font-semibold">font generator</Link> to create your perfect bold font name. Just type your text, select the bold style, and copy. It&apos;s that simple!
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

