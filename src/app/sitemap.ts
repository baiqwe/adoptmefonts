import type { MetadataRoute } from "next";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://adoptmefont.com";
  return [
    { url: `${base}/`, lastModified: new Date("2025-12-15"), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/adopt-me-names-generator`, lastModified: new Date("2025-12-01"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/faq`, lastModified: new Date("2025-11-20"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/how-to-use-adopt-me-fonts`, lastModified: new Date("2025-11-18"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/styles`, lastModified: new Date("2025-11-15"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/preppy-font-generator`, lastModified: new Date("2025-12-01"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/symbols`, lastModified: new Date("2025-11-20"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tag-filter-checker`, lastModified: new Date("2025-11-25"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/pet-names`, lastModified: new Date("2025-12-10"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date("2025-12-23"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/adopt-me-name-aesthetics-trading`, lastModified: new Date("2025-11-26"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/adopt-me-font-design-readability`, lastModified: new Date("2025-11-25"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/adopt-me-pet-naming-marketing`, lastModified: new Date("2025-11-22"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/adopt-me-fonts-naming-revolution`, lastModified: new Date("2025-11-19"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/best-adopt-me-pet-names-2024`, lastModified: new Date("2025-11-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/how-to-prevent-name-filtering-roblox`, lastModified: new Date("2025-12-05"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date("2025-11-15"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date("2025-11-15"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: new Date("2025-11-01"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: new Date("2025-11-01"), changeFrequency: "yearly", priority: 0.3 },
  ];
}