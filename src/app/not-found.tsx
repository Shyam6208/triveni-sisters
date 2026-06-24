import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4">
      <div className="text-center max-w-md">
        {/* Logo */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-burgundy to-burgundy-dark flex items-center justify-center shadow-2xl">
          <span className="font-heading text-white text-3xl font-bold">T</span>
        </div>

        <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl font-bold gradient-text mb-4">404</h1>
        <h2 className="font-heading text-2xl font-bold text-charcoal dark:text-dark-text mb-4">
          Page Not Found
        </h2>
        <p className="text-charcoal-light dark:text-dark-text-muted mb-8 leading-relaxed font-body">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to creating something beautiful.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-burgundy text-white font-medium hover:bg-burgundy-light transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white transition-all duration-300 dark:border-antique-gold dark:text-antique-gold dark:hover:bg-antique-gold dark:hover:text-dark-bg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
