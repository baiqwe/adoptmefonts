export default function Head() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Adopt Me Fonts",
    url: "https://adoptmefont.com/",
    inLanguage: ["en"],
    description: "Free Adopt Me fonts generator for Roblox. Create stylish adopt me fonts like bubble, bold, cute, small caps, and aesthetic fullwidth.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://adoptmefont.com/?text={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Adopt Me Fonts Generator",
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Free online tool to generate adopt me fonts for Roblox Adopt Me. Create bubble fonts, bold, cute, small caps, and aesthetic fullwidth styles.",
    url: "https://adoptmefont.com/",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1000",
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use Adopt Me Fonts Generator",
    description: "Step-by-step guide on how to generate and use adopt me fonts in Roblox Adopt Me",
    step: [
      {
        "@type": "HowToStep",
        name: "Enter your text",
        text: "Type the text you want to convert into adopt me fonts in the input field",
      },
      {
        "@type": "HowToStep",
        name: "Choose a font style",
        text: "Select from various adopt me fonts styles like bubble fonts, bold, cute, small caps, or aesthetic fullwidth",
      },
      {
        "@type": "HowToStep",
        name: "Copy the result",
        text: "Click the Copy button to copy the generated adopt me fonts to your clipboard",
      },
      {
        "@type": "HowToStep",
        name: "Paste in Roblox",
        text: "Open Roblox Adopt Me and paste the adopt me fonts into your player name, pet name, or chat",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}