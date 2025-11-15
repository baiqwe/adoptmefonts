export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="32" cy="32" r="30" fill="#ffeaf1" />
        <path d="M22 40c6-6 10-6 16 0" stroke="#ff7fbf" strokeWidth="4" fill="none" />
        <circle cx="22" cy="26" r="5" fill="#ffb3d6" />
        <circle cx="42" cy="26" r="5" fill="#ffb3d6" />
        <path d="M32 22c2-4 8-4 10 0" stroke="#ff7fbf" strokeWidth="3" fill="none" />
        <path d="M32 22c-2-4-8-4-10 0" stroke="#ff7fbf" strokeWidth="3" fill="none" />
      </svg>
      <span className="text-2xl font-bold">Adopt Me Fonts</span>
    </div>
  );
}