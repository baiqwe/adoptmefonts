import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <nav className="border-b border-zinc-200 bg-white/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="/blog"
              className="px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium text-zinc-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium text-zinc-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
            >
              About
            </Link>
            <Link
              href="/tag-filter-checker"
              className="px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium text-zinc-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
            >
              🔍 Filter Checker
            </Link>
            <Link
              href="/preppy-font-generator"
              className="px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium text-zinc-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
            >
              ✨ Preppy Fonts
            </Link>
            <Link
              href="/adopt-me-names-generator"
              className="px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium text-zinc-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
            >
              🐾 Generate Names
            </Link>
            <a
              href="https://www.roblox.com/games/920587237/Adopt-Me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base font-semibold text-white bg-pink-600 hover:bg-pink-700 transition-colors shadow-sm"
            >
              ▶ Play
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

