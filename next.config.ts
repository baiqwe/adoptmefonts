import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Cloudflare Pages
  output: "export",
  
  // Disable image optimization (required for Cloudflare free tier)
  images: {
    unoptimized: true,
  },

  // Keep React Compiler configuration
  reactCompiler: true,

  // Note: redirects() has been removed because static export doesn't support it.
  // Please configure www to non-www redirect in Cloudflare Dashboard:
  // Rules -> Redirect Rules -> Create rule for www.adoptmefont.com -> https://adoptmefont.com
};

export default nextConfig;
