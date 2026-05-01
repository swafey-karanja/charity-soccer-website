"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

export default function Charities() {
  const { ref, visible } = useInView();

  return (
    <section id="charities" className="bg-gray-100 py-24">
      <div
        ref={ref}
        className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* ── Left: Content ── */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Eyebrow */}
          <span className="text-xs font-black tracking-[0.3em] uppercase text-green-600 mb-4 block">
            2026 iGaming AFRIKA Summit
          </span>

          {/* Heading */}
          <h2
            className="font-black text-5xl sm:text-6xl text-gray-900 uppercase leading-none mb-6"
            style={{
              fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
            }}
          >
            Gaming for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Good
            </span>
          </h2>

          {/* Mission */}
          <div className="mb-3">
            <span className="text-sm font-black tracking-widest uppercase text-gray-900 mr-2">
              Mission
            </span>
            <span className="text-gray-500 text-base leading-relaxed">
              To empower society positively through gaming and sports.
            </span>
          </div>

          {/* Vision */}
          <div className="mb-8">
            <span className="text-sm font-black tracking-widest uppercase text-gray-900 mr-2">
              Vision
            </span>
            <span className="text-gray-500 text-base leading-relaxed">
              To utilise the opportunities in gaming across Africa to create a
              long-term positive impact on society.
            </span>
          </div>

          {/* Cause highlight */}
          <div className="border border-green-200 rounded-lg p-5 bg-green-50 mb-10">
            <p className="text-xs font-black tracking-widest uppercase text-green-600 mb-1">
              2026 Charity Cause
            </p>
            <p
              className="text-gray-900 font-black text-xl leading-snug mb-1"
              style={{
                fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
              }}
            >
              Construction of 10 Sanitation Facilities
            </p>
            <p className="text-gray-500 text-sm">
              Across low-income areas in East Africa — funded entirely by
              proceeds from the Summit.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mb-10">
            {[
              { value: "1M KES", label: "Fundraising Target" },
              { value: "10", label: "Sanitation Facilities" },
              { value: "East Africa", label: "Region of Impact" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-black text-3xl text-green-600 leading-none"
                  style={{
                    fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-sm text-gray-400 tracking-wide mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <p className="text-gray-400 text-xl font-bold mb-4">
            100% of proceeds go directly to the charity cause
          </p>
          <a
            href="#tickets"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-black text-sm tracking-widest uppercase px-8 py-4 rounded-md transition-all duration-300 hover:-translate-y-0.5"
          >
            Donate Now
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* ── Right: Image ── */}
        <div
          className={`relative w-full aspect-4/3 rounded-xl overflow-hidden transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="https://images.unsplash.com/photo-1579208570378-8c970854bc23?q=80&w=1222&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sanitation facilities in East Africa"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
