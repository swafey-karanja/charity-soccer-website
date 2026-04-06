"use client";

import { useEffect, useRef, useState } from "react";

const teams = [
  {
    name: "Portugal Legends",
    logo: (
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield shape */}
        <path
          d="M60 8 L104 28 L104 72 Q104 100 60 114 Q16 100 16 72 L16 28 Z"
          fill="#006600"
        />
        {/* Red vertical band */}
        <path
          d="M44 8 L76 8 L76 114 Q68 117 60 114 Q52 117 44 114 Z"
          fill="#CC0000"
        />
        {/* Gold shield outline */}
        <path
          d="M60 8 L104 28 L104 72 Q104 100 60 114 Q16 100 16 72 L16 28 Z"
          fill="none"
          stroke="#FFD700"
          strokeWidth="3"
        />
        {/* Central crest circle */}
        <circle cx="60" cy="58" r="18" fill="#FFD700" opacity="0.15" />
        <circle
          cx="60"
          cy="58"
          r="18"
          fill="none"
          stroke="#FFD700"
          strokeWidth="2"
        />
        {/* Small cross detail */}
        <line
          x1="60"
          y1="44"
          x2="60"
          y2="72"
          stroke="#FFD700"
          strokeWidth="2.5"
        />
        <line
          x1="46"
          y1="58"
          x2="74"
          y2="58"
          stroke="#FFD700"
          strokeWidth="2.5"
        />
        {/* Stars */}
        {[0, 1, 2, 3, 4].map((s) => {
          const angle = ((s * 72 - 90) * Math.PI) / 180;
          const x = 60 + Math.cos(angle) * 28;
          const y = 90 + Math.sin(angle) * 9;
          return <circle key={s} cx={x} cy={y} r="2.5" fill="#FFD700" />;
        })}
      </svg>
    ),
  },
  {
    name: "World Legends",
    logo: (
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield */}
        <path
          d="M60 8 L104 28 L104 72 Q104 100 60 114 Q16 100 16 72 L16 28 Z"
          fill="#1a1a2e"
        />
        {/* Globe lines */}
        <circle
          cx="60"
          cy="58"
          r="30"
          fill="none"
          stroke="#4ade80"
          strokeWidth="2"
        />
        <ellipse
          cx="60"
          cy="58"
          rx="14"
          ry="30"
          fill="none"
          stroke="#4ade80"
          strokeWidth="1.5"
        />
        <line
          x1="30"
          y1="58"
          x2="90"
          y2="58"
          stroke="#4ade80"
          strokeWidth="1.5"
        />
        <line
          x1="34"
          y1="44"
          x2="86"
          y2="44"
          stroke="#4ade80"
          strokeWidth="1"
        />
        <line
          x1="34"
          y1="72"
          x2="86"
          y2="72"
          stroke="#4ade80"
          strokeWidth="1"
        />
        {/* Gold outline */}
        <path
          d="M60 8 L104 28 L104 72 Q104 100 60 114 Q16 100 16 72 L16 28 Z"
          fill="none"
          stroke="#FFD700"
          strokeWidth="3"
        />
        {/* Stars around */}
        {[0, 1, 2, 3, 4].map((s) => {
          const angle = ((s * 72 - 90) * Math.PI) / 180;
          const x = 60 + Math.cos(angle) * 28;
          const y = 96 + Math.sin(angle) * 8;
          return <circle key={s} cx={x} cy={y} r="2.5" fill="#FFD700" />;
        })}
      </svg>
    ),
  },
  {
    name: "Africa Legends",
    logo: (
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield */}
        <path
          d="M60 8 L104 28 L104 72 Q104 100 60 114 Q16 100 16 72 L16 28 Z"
          fill="#b45309"
        />
        {/* Diagonal stripe */}
        <path d="M16 28 L60 8 L104 28 L104 55 L16 55 Z" fill="#92400e" />
        {/* Sun symbol */}
        <circle cx="60" cy="55" r="16" fill="#FCD34D" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((r) => {
          const angle = (r * 45 * Math.PI) / 180;
          const x1 = 60 + Math.cos(angle) * 19;
          const y1 = 55 + Math.sin(angle) * 19;
          const x2 = 60 + Math.cos(angle) * 24;
          const y2 = 55 + Math.sin(angle) * 24;
          return (
            <line
              key={r}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FCD34D"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          );
        })}
        <circle cx="60" cy="55" r="8" fill="#F59E0B" />
        {/* Gold outline */}
        <path
          d="M60 8 L104 28 L104 72 Q104 100 60 114 Q16 100 16 72 L16 28 Z"
          fill="none"
          stroke="#FFD700"
          strokeWidth="3"
        />
        {/* Dots bottom */}
        {[0, 1, 2, 3, 4].map((s) => {
          const angle = ((s * 72 - 90) * Math.PI) / 180;
          const x = 60 + Math.cos(angle) * 28;
          const y = 94 + Math.sin(angle) * 8;
          return <circle key={s} cx={x} cy={y} r="2.5" fill="#FFD700" />;
        })}
      </svg>
    ),
  },
  {
    name: "Brazil Legends",
    logo: (
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield */}
        <path
          d="M60 8 L104 28 L104 72 Q104 100 60 114 Q16 100 16 72 L16 28 Z"
          fill="#009c3b"
        />
        {/* Yellow diamond */}
        <path d="M60 22 L92 58 L60 94 L28 58 Z" fill="#FFDF00" />
        {/* Blue circle */}
        <circle cx="60" cy="58" r="20" fill="#002776" />
        {/* White band across circle */}
        <path
          d="M40 52 Q60 46 80 52"
          stroke="white"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Stars in circle */}
        {[
          [53, 56],
          [60, 50],
          [67, 56],
          [64, 63],
          [56, 63],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" fill="white" />
        ))}
        {/* Gold outline */}
        <path
          d="M60 8 L104 28 L104 72 Q104 100 60 114 Q16 100 16 72 L16 28 Z"
          fill="none"
          stroke="#FFD700"
          strokeWidth="3"
        />
      </svg>
    ),
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

export default function Teams() {
  const { ref, visible } = useInView();

  return (
    <section id="teams" className="bg-gray-100 py-24">
      <div ref={ref} className="max-w-380 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2
            className="font-black text-5xl sm:text-6xl text-gray-900 uppercase leading-none"
            style={{
              fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
            }}
          >
            The{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Teams
            </span>
          </h2>
        </div>

        {/* Teams grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teams.map((team, i) => (
            <div
              key={team.name}
              className={`flex flex-col items-center gap-6 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Logo */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 drop-shadow-lg">
                {team.logo}
              </div>

              {/* Divider */}
              <div className="w-10 h-0.5 bg-green-400 rounded-full" />

              {/* Name */}
              <h3
                className="text-center font-black text-xl sm:text-2xl text-gray-900 uppercase leading-tight tracking-wide"
                style={{
                  fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
                }}
              >
                {team.name}
              </h3>
            </div>
          ))}
        </div>

        {/* VS dividers between teams on large screens */}
        <div className="hidden lg:flex items-center justify-center gap-4 mt-16">
          <div className="flex-1 h-px bg-gray-200" />
          <span
            className="text-xs font-black tracking-[0.4em] uppercase text-gray-400 px-4"
            style={{
              fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
            }}
          >
            iGA Summit 2026 Charity Game · May 2026 · Lisbon
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
