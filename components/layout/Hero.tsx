"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#040f04]/90">
      {/* Background image with parallax container */}
      <div className="absolute inset-0 transition-transform duration-75 ease-out">
        <Image
          src="/Football-field.jpg"
          alt="Football pitch aerial view"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlays */}
      {/* Dark base so text is always legible */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />
      {/* Green tint */}
      <div className="absolute inset-0 bg-green-950/30 pointer-events-none" />
      {/* Top vignette */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/70 pointer-events-none" />

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
            href="https://store.pesapal.com/charitysoccertournamentdonations"
            target="_blank"
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
