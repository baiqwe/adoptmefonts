export default function Head() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Adopt Me Fonts",
    url: "https://adoptmefont.com/",
    inLanguage: ["en"],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://adoptmefont.com/?text={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </>
  );
}