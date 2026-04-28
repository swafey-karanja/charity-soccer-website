"use client";

import { useEffect, useRef, useState } from "react";

const details = [
  {
    label: "Format",
    value: "7-A-Side",
    sub: "4 competing teams",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7 L5 17 M12 7 L19 17 M5 17 L19 17" />
      </svg>
    ),
  },
  {
    label: "Pitch Size",
    value: "40 × 80m",
    sub: "Regulation 7-aside dimensions",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="5" width="20" height="14" rx="1" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <path d="M2 10 Q5 12 2 14" />
        <path d="M22 10 Q19 12 22 14" />
      </svg>
    ),
  },
  {
    label: "Date",
    value: "6th June 2026",
    sub: "Final day of iGaming Afrika Summit",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Venue",
    value: "The Goan Gymkhana",
    sub: "The Goan Gymkhana, Nairobi",
    icon: (
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
    ),
  },
];

const access = [
  {
    tier: "VIP",
    desc: "Full access for all VIP ticket holders of the iGaming Afrika Summit 2026",
  },
  {
    tier: "VVIP",
    desc: "Premium access for all VVIP ticket holders including exclusive pitch-side viewing",
  },
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

export default function About() {
  const { ref, visible } = useInView();

  return (
    <section id="game" className="bg-gray-100 py-24">
      <div ref={ref} className="max-w-380 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — text content */}
          <div>
            <div
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2
                className="font-black text-5xl sm:text-6xl text-gray-900 uppercase leading-none mb-8"
                style={{
                  fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
                }}
              >
                The{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Game
                </span>
              </h2>
            </div>

            <div
              className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                The{" "}
                <strong className="text-gray-900">
                  iGaming Afrika Summit Charity Soccer Tournament
                </strong>{" "}
                is a 7-a-side football tournament that brings together four
                teams of industry professionals and football enthusiasts for an
                afternoon of competitive, high-energy action — all in support of
                a meaningful cause.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Hosted at the{" "}
                <strong className="text-gray-900">Goan Gymkhana</strong> in
                Nairobi, the tournament will take place on a well-prepared
                7-a-side pitch, offering an intimate and engaging environment
                for both players and spectators. Teams will compete across
                multiple fixtures in a fast-paced, action-packed format.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Scheduled for the{" "}
                <strong className="text-gray-900">6th of June 2026</strong> —
                the closing day of the{" "}
                <strong className="text-gray-900">
                  iGaming Afrika Summit 2026
                </strong>{" "}
                — the tournament serves as a fitting grand finale to Africa’s
                premier iGaming gathering, uniting operators, regulators, and
                industry leaders for a shared experience that blends sport,
                networking, and community impact.
              </p>
            </div>

            {/* Access tiers */}
            <div
              className={`mt-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-sm font-black tracking-[0.2em] uppercase text-green-600 mb-4">
                Who Can Attend
              </p>
              <div className="flex flex-col gap-3">
                {access.map((a) => (
                  <div key={a.tier} className="flex items-start gap-4">
                    <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-12 h-7 rounded-full bg-green-600 text-white text-xs font-black tracking-wider">
                      {a.tier}
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500 italic">
                Open to all iGaming Afrika Summit 2026 VIP & VVIP ticket holders
                — including operators and regulators across the African iGaming
                ecosystem.
              </p>
            </div>
          </div>

          {/* Right — detail stats */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Stat blocks */}
            <div className="grid grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden">
              {details.map((d, i) => (
                <div
                  key={d.label}
                  className={`bg-gray-100 p-8 flex flex-col gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${250 + i * 80}ms` }}
                >
                  <div className="text-green-500">{d.icon}</div>
                  <div>
                    <p className="text-xs font-black tracking-[0.2em] uppercase text-gray-400 mb-1">
                      {d.label}
                    </p>
                    <p
                      className="text-2xl sm:text-3xl font-black text-gray-900 leading-none"
                      style={{
                        fontFamily:
                          "var(--font-oswald), 'Arial Black', sans-serif",
                      }}
                    >
                      {d.value}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{d.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary callout */}
            <div
              className={`mt-6 bg-green-600 rounded-2xl p-8 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <p
                className="text-white font-black text-xl sm:text-2xl leading-snug mb-3"
                style={{
                  fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
                }}
              >
                4 Teams. 7-a-side. One unforgettable afternoon.
              </p>
              <p className="text-green-100 text-sm leading-relaxed">
                Every match played, every goal scored, and every moment shared
                raises funds for four life-changing charities across Africa and
                the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
