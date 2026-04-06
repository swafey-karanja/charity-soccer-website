"use client";

import { useEffect, useRef, useState } from "react";

const charities = [
  {
    name: "Save the Children",
    category: "Child Welfare",
    description:
      "Working to give every child a healthy start in life, the opportunity to learn, and protection from harm.",
    accentColor: "text-red-500",
    impact: "2.4M+ children helped",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <circle cx="20" cy="12" r="7" fill="currentColor" opacity="0.9" />
        <path
          d="M6 36 C6 26 34 26 34 36"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M14 20 L20 28 L26 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Red Cross",
    category: "Humanitarian Aid",
    description:
      "Providing emergency assistance, disaster relief, and disaster preparedness education across the globe.",
    accentColor: "text-red-600",
    impact: "160+ countries reached",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="currentColor">
        <rect x="16" y="4" width="8" height="32" rx="2" />
        <rect x="4" y="16" width="32" height="8" rx="2" />
      </svg>
    ),
  },
  {
    name: "UNICEF",
    category: "Children's Rights",
    description:
      "Protecting the rights of every child, delivering life-saving supplies and championing their right to thrive.",
    accentColor: "text-cyan-600",
    impact: "190 countries & territories",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M20 8 C14 12 10 16 10 22 C10 28 14 32 20 34 C26 32 30 28 30 22 C30 16 26 12 20 8Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M8 20 L32 20" stroke="currentColor" strokeWidth="2" />
        <path
          d="M11 13 Q20 18 29 13"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M11 27 Q20 22 29 27"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Doctors Without Borders",
    category: "Medical Aid",
    description:
      "Delivering emergency medical care to people caught in crises around the world regardless of race, religion, or politics.",
    accentColor: "text-green-600",
    impact: "70+ countries operating",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <path
          d="M20 4 L28 14 L38 14 L30 22 L33 34 L20 27 L7 34 L10 22 L2 14 L12 14 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M16 20 L24 20 M20 16 L20 24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
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

export default function Charities() {
  const { ref, visible } = useInView();

  return (
    <section id="charities" className="bg-gray-100 py-24">
      <div ref={ref} className="max-w-380 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2
            className="font-black text-5xl sm:text-6xl text-gray-900 uppercase leading-none mb-5"
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
              Charities
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Every donation made goes directly to these four incredible
            organisations changing lives around the world.
          </p>
        </div>

        {/* Charity list */}
        <div className="flex flex-col divide-y divide-gray-200">
          {charities.map((charity, i) => (
            <div
              key={charity.name}
              className={`flex flex-col sm:flex-row sm:items-center gap-5 py-8 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              {/* Icon */}
              <div className={`shrink-0 ${charity.accentColor}`}>
                {charity.icon}
              </div>

              {/* Text block */}
              <div className="flex-1 min-w-0">
                <span
                  className={`text-xs font-black tracking-widest uppercase ${charity.accentColor}`}
                >
                  {charity.category}
                </span>
                <h3
                  className="font-black text-2xl text-gray-900 mt-0.5 leading-tight"
                  style={{
                    fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
                  }}
                >
                  {charity.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-1 max-w-xl">
                  {charity.description}
                </p>
              </div>

              {/* Impact stat */}
              <div className="shrink-0 text-right">
                <div
                  className={`text-2xl font-black ${charity.accentColor}`}
                  style={{
                    fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
                  }}
                >
                  {charity.impact.split(" ")[0]}
                </div>
                <div className="text-xs text-gray-400 tracking-wide">
                  {charity.impact.split(" ").slice(1).join(" ")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Donate CTA */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-gray-400 text-sm mb-5">
            100% of proceeds are distributed equally across all four charities
          </p>
          <a
            href="#tickets"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-black text-sm tracking-widest uppercase px-8 py-4 rounded-md transition-all duration-300 hover:-translate-y-0.5"
          >
            Donate
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
      </div>
    </section>
  );
}
