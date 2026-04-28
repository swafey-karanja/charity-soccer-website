"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const venueStats = [
  { value: "Nairobi", label: "City" },
  { value: "Westlands", label: "District" },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function Venue() {
  const { ref, visible } = useInView();

  return (
    <section
      id="venue"
      className="relative overflow-hidden min-h-[85vh] flex items-end"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/gymkhana-pitch.webp"
          alt="the goan gymkhana"
          fill
          className="object-cover"
          loading="eager"
        />
        {/* Layered overlays: dark from top, heavier dark from bottom where content sits */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-green-950/20" />
      </div>

      {/* Content pinned to bottom */}
      <div
        ref={ref}
        className="relative z-10 w-full max-w-380 mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-64"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          {/* Left — heading & description */}
          <div>
            <div
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-green-400 text-xs font-black tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                The Venue
              </span>

              <h2
                className="font-black text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-none mb-6"
                style={{
                  fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
                }}
              >
                The Goan
                <br />
                <span className="text-green-400">Gymkhana</span>
              </h2>
            </div>

            <div
              className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-4">
                The <strong className="text-white">Goan Gymkhana</strong> is one
                of Nairobi’s most historic and versatile social and sporting
                clubs. The venue is known for its well-maintained grounds,
                vibrant community atmosphere, and long-standing role as a hub
                for recreational and cultural events.
              </p>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                On the <strong className="text-white">6th of June 2026</strong>,
                the grounds will host the iGaming Afrika Summit Charity Game —
                bringing together football icons, industry leaders, and iGaming
                professionals for an engaging afternoon of sport, networking,
                and community impact in a relaxed and welcoming setting.
              </p>

              {/* Location pill */}
              <div className="flex items-center gap-3 mt-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-sm px-4 py-2.5 rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-green-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2 C8 2 4 5.5 4 10 C4 16 12 22 12 22 C12 22 20 16 20 10 C20 5.5 16 2 12 2Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Nairobi, Kenya
                </div>
              </div>
            </div>
          </div>

          {/* Right — stats */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              {venueStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`bg-white/5 backdrop-blur-xs px-8 py-7 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                >
                  <p
                    className="text-3xl sm:text-4xl font-black text-white leading-none mb-1"
                    style={{
                      fontFamily:
                        "var(--font-oswald), 'Arial Black', sans-serif",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs font-black tracking-[0.25em] uppercase text-green-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://maps.app.goo.gl/EPuY5SM1ngXWTUio8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-3 border border-white/25 hover:border-green-400/60 text-white/80 hover:text-white text-md font-semibold tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2 C8 2 4 5.5 4 10 C4 16 12 22 12 22 C12 22 20 16 20 10 C20 5.5 16 2 12 2Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              View on Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
