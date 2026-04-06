"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#040f04]/90">
      {/* Animated pitch lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial grass glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_70%,rgba(34,197,94,0.12)_0%,transparent_70%)]" />

        {/* Pitch SVG lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          viewBox="0 0 1440 1200"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Center circle */}
          <circle
            cx="720"
            cy="600"
            r="200"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          <circle cx="720" cy="600" r="4" fill="#22c55e" />
          {/* Center line */}
          <line
            x1="0"
            y1="600"
            x2="1440"
            y2="600"
            stroke="#22c55e"
            strokeWidth="2"
          />
          {/* Left penalty box */}
          <rect
            x="0"
            y="430"
            width="220"
            height="340"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          <rect
            x="0"
            y="510"
            width="90"
            height="180"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          {/* Right penalty box */}
          <rect
            x="1220"
            y="430"
            width="220"
            height="340"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          <rect
            x="1350"
            y="510"
            width="90"
            height="180"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          {/* Outer boundary */}
          <rect
            x="40"
            y="80"
            width="1360"
            height="820"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          {/* Halfway striped */}
          <line
            x1="720"
            y1="80"
            x2="720"
            y2="900"
            stroke="#22c55e"
            strokeWidth="1"
            strokeDasharray="8 8"
          />
        </svg>

        {/* Particle sparkles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-green-400 animate-pulse"
            style={{
              left: `${10 + i * 7.5}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* Parallax player silhouette suggestion (decorative strip) */}
      <div className="absolute inset-0 pointer-events-none transition-transform duration-75 ease-out">
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-linear-to-t from-transparent via-transparent to-transparent" />
        {/* Green flare left */}
        <div className="absolute -left-20 top-1/3 w-96 h-96 rounded-full bg-green-600/10 blur-3xl" />
        {/* Green flare right */}
        <div className="absolute -right-20 top-1/2 w-80 h-80 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 min-w-5xl mx-auto pt-54 pb-16">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-black tracking-[0.3em] uppercase px-6 py-4 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          May 2026 — Nairobi, Kenya
        </div>

        {/* Main title */}
        <h1 className="font-black leading-none mb-4">
          <span
            className="block text-4xl sm:text-7xl uppercase"
            style={{
              fontFamily: "'Oswald', 'Arial Black', sans-serif",
              letterSpacing: "0.02em",
              background:
                "linear-gradient(135deg, #22c55e 0%, #86efac 50%, #4ade80 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            iGaming Afrika Charity Soccer Tournament
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-20 text-base sm:text-lg lg:text-xl text-white/60 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          Local players and delegates unite for an{" "}
          <span className="text-green-400 font-semibold">
            unforgettable tournament
          </span>{" "}
          with a cause bigger than the game.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#tickets"
            className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-black text-sm tracking-widest uppercase px-12 py-6 rounded-md transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 hover:-translate-y-1"
          >
            Donate Now
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/70 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-linear-to-b from-white/70 to-transparent" />
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#040f04] to-transparent pointer-events-none" />
    </section>
  );
}
