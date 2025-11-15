"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "@/lib/styles";
import Logo from "@/components/Logo";

export default function Home() {
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const [text, setText] = useState(params.get("text") ?? "Adopt Me Fonts");
  const [selected, setSelected] = useState<string>(params.get("style") ?? "normal");

  useEffect(() => {
    const next = new URLSearchParams(window.location.search);
    next.set("text", text);
    next.set("style", selected);
    const url = `${window.location.pathname}?${next.toString()}`;
    window.history.replaceState(null, "", url);
  }, [text, selected]);

  const data = useMemo(() => styles.map((s) => ({ ...s, out: s.apply(text) })), [text]);

  const onCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {}
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <section className="mb-8">
        <Logo />
        <h1 className="mt-4 text-3xl font-bold">Adopt Me Fonts Generator</h1>
        <p className="mt-2 text-zinc-600">Generate and copy adopt me fonts for Roblox Adopt Me.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, 64))}
            placeholder="Type your text"
            className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-black outline-none ring-0 focus:border-zinc-400"
          />
          <button
            onClick={() => setText("")}
            className="rounded-lg border border-zinc-200 px-4 py-3"
          >
            Clear
          </button>
        </div>
        <p className="mt-2 text-xs text-zinc-500">Roblox may filter some characters. Keep names short.</p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.map((s) => (
          <div key={s.id} className={`rounded-xl border ${selected === s.id ? "border-black" : "border-zinc-200"} bg-white p-4`}>
            <div className="flex items-center justify-between">
              <div className="font-medium flex items-center gap-2">
                <span aria-hidden>{s.icon}</span>
                {s.name}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelected(s.id)}
                  className={`rounded-md px-3 py-1 text-sm ${selected === s.id ? "bg-black text-white" : "border border-zinc-200"}`}
                >
                  Select
                </button>
                <button onClick={() => onCopy(s.out)} className="rounded-md border border-zinc-200 px-3 py-1 text-sm">
                  Copy
                </button>
              </div>
            </div>
            <div className="mt-3 break-words text-lg">{s.out}</div>
            <div className="mt-1 text-xs text-zinc-500">{s.description}</div>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <ul className="mt-2 list-disc pl-6 text-zinc-700">
          <li>These are Unicode characters, not real fonts.</li>
          <li>Some symbols may be filtered or not visible in Roblox.</li>
          <li>Copy the result and paste it into your Adopt Me name or chat.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Adopt Me Fonts: Guide and Tips</h2>
        <p className="mt-3 text-zinc-700">
          Adopt Me Fonts help you style names and chat using Unicode characters. This free adopt me fonts generator lets you
          type text, choose adopt me fonts like bubble, bold, cute, small caps, and aesthetic fullwidth, then copy the
          result to use in Roblox Adopt Me.
        </p>
        <h3 className="mt-6 text-xl font-semibold">How to use the Adopt Me font generator</h3>
        <p className="mt-2 text-zinc-700">
          Enter your text above, pick adopt me fonts style, and press Copy. Then open Roblox Adopt Me, paste into your player name,
          pet name, or chat. Keep names short and avoid excessive symbols to reduce filtering.
        </p>
        <h3 className="mt-6 text-xl font-semibold">Popular styles for Roblox Adopt Me</h3>
        <p className="mt-2 text-zinc-700">
          Players often use adopt me fonts like bubble fonts for cute vibes, bold for strong emphasis, small caps for clean labels, and
          aesthetic fullwidth (vaporwave) for a retro feel. Utility adopt me fonts such as underline and strikethrough use
          combining marks and may be filtered in some cases.
        </p>
        <h3 className="mt-6 text-xl font-semibold">Is it safe to use Adopt Me fonts?</h3>
        <p className="mt-2 text-zinc-700">
          These adopt me fonts styles are Unicode characters rendered by Roblox. While safe, some characters might not be visible on
          all devices or could be replaced by filters. Test short names first and avoid rare symbols.
        </p>
        <h3 className="mt-6 text-xl font-semibold">More help</h3>
        <p className="mt-2 text-zinc-700">
          For detailed explanations and compatibility notes, see the <a href="/faq" className="underline">Adopt Me Fonts FAQ</a>.
          This adopt me fonts tool is free and works on mobile and desktop.
        </p>
      </section>
    </main>
  );
}
