"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const teams = [
  {
    name: "Team Leopard",
    logo: (
      <Image
        src="/leopard-1.png"
        alt="Team Leopard"
        fill
        className="object-contain"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    ),
  },
  {
    name: "Team Lion",
    logo: (
      <Image
        src="/lion-1.png"
        alt="Team Lion"
        fill
        className="object-contain"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    ),
  },
  {
    name: "Team Crocodile",
    logo: (
      <Image
        src="/crocodile.png"
        alt="Team Crocodile"
        fill
        className="object-contain"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    ),
  },
  {
    name: "Team Elephant",
    logo: (
      <Image
        src="/elephant.png"
        alt="Team Elephant"
        fill
        className="object-contain"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
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
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((team, i) => (
            <div
              key={team.name}
              className={`flex flex-col items-center gap-y-6 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Logo — fixed square so all images render identically */}
              <div className="relative w-36 h-36 sm:w-65 sm:h-65 shrink-0">
                {team.logo}
              </div>

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

        {/* Footer rule */}
        <div className="hidden lg:flex items-center justify-center gap-4 mt-16">
          <div className="flex-1 h-px bg-gray-200" />
          <span
            className="text-xs font-black tracking-[0.4em] uppercase text-gray-400 px-4"
            style={{
              fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
            }}
          >
            iGA Summit 2026 Charity Game · May 2026 · Nairobi
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
