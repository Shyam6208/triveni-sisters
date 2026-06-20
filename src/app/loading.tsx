export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--background)]">
      <div className="flex flex-col items-center gap-6">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-burgundy to-burgundy-dark flex items-center justify-center shadow-2xl animate-pulse">
            <span className="font-heading text-white text-3xl font-bold">T</span>
          </div>
          <div className="absolute -inset-3 rounded-full border-2 border-antique-gold/30 animate-spin" style={{ animationDuration: "3s" }} />
          <div className="absolute -inset-6 rounded-full border border-rose-gold/15 animate-spin" style={{ animationDuration: "5s", animationDirection: "reverse" }} />
        </div>

        {/* Brand Name */}
        <div className="text-center">
          <p className="font-heading text-lg font-bold text-charcoal dark:text-dark-text">
            Triveni Art House
          </p>
          <p className="text-xs tracking-[0.3em] uppercase text-rose-gold mt-1 font-body">
            Loading
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-0.5 bg-rose-gold/10 rounded-full overflow-hidden">
          <div className="h-full w-full gradient-gold-line rounded-full animate-[shimmer_1.5s_infinite]" style={{ backgroundSize: "200% 100%" }} />
        </div>
      </div>
    </div>
  );
}
