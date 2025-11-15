export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className="drop-shadow-sm"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff7fbf" />
              <stop offset="50%" stopColor="#ffb3d6" />
              <stop offset="100%" stopColor="#ffeaf1" />
            </linearGradient>
            <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff3f8" />
              <stop offset="100%" stopColor="#f0f7ff" />
            </linearGradient>
          </defs>
          {/* Background circle with gradient */}
          <circle cx="32" cy="32" r="30" fill="url(#logoBg)" stroke="url(#logoGradient)" strokeWidth="2" />
          {/* Decorative stars */}
          <circle cx="20" cy="20" r="2" fill="#ffb3d6" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="44" cy="20" r="2" fill="#ffb3d6" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.5s" repeatCount="indefinite" />
          </circle>
          {/* Heart shape */}
          <path d="M32 38c-4-4-8-4-12 0 0-4 4-8 12-12 8 4 12 8 12 12-4-4-8-4-12 0z" fill="url(#logoGradient)" />
          {/* Sparkle effect */}
          <path d="M32 16 L34 20 L38 20 L35 23 L37 27 L32 24 L27 27 L29 23 L26 20 L30 20 Z" fill="#ffb3d6" opacity="0.8" />
        </svg>
        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full opacity-80 animate-pulse" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-300 rounded-full opacity-70" />
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Adopt Me Fonts
        </span>
        <span className="text-xs text-zinc-500 -mt-1">Free Roblox Font Generator</span>
      </div>
    </div>
  );
}