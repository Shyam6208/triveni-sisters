export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
    </svg>
  );
}

export function PinterestIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.15 9.42 7.59 11.18-.1-.94-.19-2.38.04-3.41.21-.93 1.36-5.77 1.36-5.77s-.35-.7-.35-1.73c0-1.62.94-2.83 2.11-2.83 1 0 1.48.75 1.48 1.65 0 1-.64 2.5-.97 3.89-.28 1.16.58 2.11 1.73 2.11 2.08 0 3.67-2.19 3.67-5.35 0-2.8-2.01-4.75-4.88-4.75-3.32 0-5.27 2.49-5.27 5.07 0 1 .39 2.08.87 2.66a.35.35 0 0 1 .08.34c-.09.37-.29 1.16-.33 1.32-.05.22-.18.26-.41.16-1.54-.72-2.5-2.97-2.5-4.78 0-3.89 2.82-7.46 8.14-7.46 4.27 0 7.59 3.04 7.59 7.12 0 4.25-2.68 7.67-6.39 7.67-1.25 0-2.42-.65-2.82-1.42l-.77 2.93c-.28 1.07-1.04 2.42-1.55 3.24 1.17.36 2.41.56 3.69.56 6.63 0 12-5.37 12-12S18.63 0 12 0z" />
    </svg>
  );
}
