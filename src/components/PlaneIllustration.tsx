export function PlaneIllustration() {
  return (
    <svg
      aria-hidden="true"
      className="plane-illustration"
      viewBox="0 0 760 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="planeBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cfe0ff" />
        </linearGradient>
        <linearGradient id="planeShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <ellipse cx="430" cy="314" rx="182" ry="38" fill="url(#planeShadow)" opacity="0.28" />
      <g transform="translate(102 70) rotate(-10 280 120)">
        <path
          d="M54 174c18-37 48-64 92-82l142-58c14-6 27-3 38 6l40 35 114 25c19 4 32 22 28 41l-3 15c-4 19-23 31-42 27l-98-21-62 95c-10 16-31 23-49 18l-16-5c-6-2-8-10-4-16l37-61-90 26-20 36c-7 12-21 18-34 14l-18-6c-8-3-11-12-7-20l16-33-48 11c-19 4-38-6-47-23l-10-21c-4-8-4-17 1-24Z"
          fill="url(#planeBody)"
        />
        <path
          d="M219 137l174-66 30 27-156 39-48 0Z"
          fill="#dbe7ff"
        />
        <path
          d="M322 165l103 18-95 12-76 75-9-3 77-102Z"
          fill="#d7e5ff"
        />
        <path
          d="M181 196l53 0-67 79-10-4 24-75Z"
          fill="#d7e5ff"
        />
        <circle cx="196" cy="156" r="17" fill="#153b94" />
        <path d="M136 166l62-8 8 20-85 17 15-29Z" fill="#143b94" />
        <path d="M444 103l55 11c8 2 14 9 12 18l-1 7-70-15 4-21Z" fill="#183e98" />
        <circle cx="192" cy="155" r="7" fill="#99b8ff" />
        <path
          d="M219 116c3-14 12-25 24-32l65-37c12-7 29-4 38 7l13 15-140 47Z"
          fill="#edf4ff"
        />
      </g>
    </svg>
  );
}
