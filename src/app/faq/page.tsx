export const metadata = {
  title: "Adopt Me Fonts FAQ",
  description: "Learn how Adopt Me Unicode styles work and Roblox compatibility.",
};

export default function FAQ() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Adopt Me Fonts FAQ</h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are Adopt Me fonts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "They are Unicode characters that look like styled text. You copy and paste them into Roblox.",
                },
              },
              {
                "@type": "Question",
                name: "Will Roblox filter these characters?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Some characters may be filtered or replaced. Keep names short and avoid excessive symbols.",
                },
              },
              {
                "@type": "Question",
                name: "How do I use them in Adopt Me?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Type text, select a style, copy the result, then paste it into your player name, pet name, or chat.",
                },
              },
            ],
          }),
        }}
      />
      <section className="mt-6">
        <h2 className="text-xl font-semibold">What are Adopt Me fonts?</h2>
        <p className="mt-2 text-zinc-700">They are Unicode characters that look like styled text. You copy and paste them into Roblox.</p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-semibold">Will Roblox filter these characters?</h2>
        <p className="mt-2 text-zinc-700">Some characters may be filtered or replaced. Keep names short and avoid excessive symbols.</p>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-semibold">How do I use them in Adopt Me?</h2>
        <p className="mt-2 text-zinc-700">Type text, select a style, copy the result, then paste it into your player name, pet name, or chat.</p>
      </section>
    </main>
  );
}