"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const scheduleItems = [
  { time: "18:00", event: "Player Arrivals", highlight: false },
  { time: "18:45", event: "Pre Game Show", highlight: false },
  { time: "20:00", event: "First Half Kick Off", highlight: true },
  { time: "20:50", event: "Half Time Show", highlight: false },
  { time: "21:10", event: "Second Half Kick Off", highlight: true },
  { time: "22:10", event: "Winner Trophy", highlight: false },
];

function useInView(threshold = 0.15) {
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

export default function Schedule() {
  const { ref, visible } = useInView();

  return (
    <section id="schedule" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/football_pitch.jpg"
          alt="Football pitch"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Subtle green tint overlay */}
        <div className="absolute inset-0 bg-green-950/40" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-380 mx-auto px-4 sm:px-8 lg:px-16 py-24 lg:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — schedule list */}
          <div>
            <h2
              className={`font-black text-6xl  text-white uppercase leading-none mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                fontFamily: "var(--font-oswald), 'Arial Black', sans-serif",
              }}
            >
              The
              <br />
              <span className="text-green-400">Schedule</span>
            </h2>

            <div className="flex flex-col divide-y divide-white/10">
              {scheduleItems.map((item, i) => (
                <div
                  key={item.time}
                  className={`flex items-center gap-6 py-5 transition-all duration-700 ${
                    visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${150 + i * 80}ms` }}
                >
                  {/* Time */}
                  <div
                    className={`w-20 shrink-0 font-black text-xl tracking-wider ${
                      item.highlight ? "text-green-400" : "text-white/60"
                    }`}
                    style={{
                      fontFamily:
                        "var(--font-oswald), 'Arial Black', sans-serif",
                    }}
                  >
                    {item.time}
                  </div>

                  {/* Dot connector */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                      item.highlight
                        ? "bg-green-400 shadow-lg shadow-green-400/50"
                        : "bg-white/30"
                    }`}
                  />

                  {/* Event name */}
                  <div
                    className={`text-lg font-semibold tracking-wide ${
                      item.highlight ? "text-white" : "text-white/70"
                    }`}
                  >
                    {item.event}
                  </div>

                  {/* Highlight pill */}
                  {item.highlight && (
                    <span className="ml-auto text-xs font-black tracking-widest uppercase bg-green-500/20 border border-green-500/40 text-green-400 px-3 py-1 rounded-full">
                      Kick Off
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Trophy illustration */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-400/10 blur-3xl scale-110" />
              <svg
                viewBox="0 0 320 480"
                className="relative w-56 sm:w-72 lg:w-80 drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="stemGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="50%" stopColor="#e2e8f0" />
                    <stop offset="100%" stopColor="#64748b" />
                  </linearGradient>
                  <linearGradient id="cupGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="40%" stopColor="#f1f5f9" />
                    <stop offset="100%" stopColor="#64748b" />
                  </linearGradient>
                  <radialGradient id="ballGrad" cx="40%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#166534" />
                  </radialGradient>
                </defs>

                {/* Base pedestal */}
                <rect
                  x="60"
                  y="380"
                  width="200"
                  height="90"
                  rx="6"
                  fill="#1a3a2a"
                  stroke="#2d6a4a"
                  strokeWidth="1.5"
                />
                <rect
                  x="80"
                  y="370"
                  width="160"
                  height="20"
                  rx="4"
                  fill="#22543d"
                />

                {/* Sponsor box */}
                <rect
                  x="75"
                  y="285"
                  width="170"
                  height="90"
                  rx="8"
                  fill="#0f4c35"
                  stroke="#2d8a5e"
                  strokeWidth="1.5"
                />
                <text
                  x="160"
                  y="313"
                  textAnchor="middle"
                  fill="#86efac"
                  fontSize="9"
                  fontWeight="bold"
                  letterSpacing="2"
                  fontFamily="Arial"
                >
                  TROPHY SPONSOR
                </text>
                <rect
                  x="90"
                  y="320"
                  width="140"
                  height="44"
                  rx="6"
                  fill="white"
                />

                {/* Stem */}
                <rect
                  x="140"
                  y="220"
                  width="40"
                  height="75"
                  rx="4"
                  fill="url(#stemGrad)"
                />

                {/* Cup body */}
                <path
                  d="M100 90 Q80 160 90 210 Q110 230 160 235 Q210 230 230 210 Q240 160 220 90 Z"
                  fill="url(#cupGrad)"
                  stroke="#94a3b8"
                  strokeWidth="1"
                />
                <path
                  d="M125 100 Q115 150 120 200"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.5"
                  fill="none"
                />

                {/* Handles */}
                <path
                  d="M100 110 Q60 130 65 170 Q68 200 95 190"
                  fill="none"
                  stroke="url(#stemGrad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <path
                  d="M220 110 Q260 130 255 170 Q252 200 225 190"
                  fill="none"
                  stroke="url(#stemGrad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                />

                {/* Ball */}
                <circle cx="160" cy="58" r="42" fill="url(#ballGrad)" />
                <circle
                  cx="160"
                  cy="58"
                  r="42"
                  fill="none"
                  stroke="#86efac"
                  strokeWidth="1.5"
                />
                <path
                  d="M160 20 L172 32 L168 48 L152 48 L148 32 Z"
                  fill="#166534"
                  opacity="0.6"
                />
                <circle cx="160" cy="58" r="10" fill="#166534" opacity="0.4" />
                <circle cx="145" cy="45" r="7" fill="#166534" opacity="0.3" />
                <circle cx="175" cy="45" r="7" fill="#166534" opacity="0.3" />
                <circle cx="148" cy="70" r="7" fill="#166634" opacity="0.3" />
                <circle cx="172" cy="70" r="7" fill="#166534" opacity="0.3" />
                <circle cx="150" cy="45" r="8" fill="white" opacity="0.25" />

                <text
                  x="160"
                  y="175"
                  textAnchor="middle"
                  fill="#166534"
                  fontSize="10"
                  fontWeight="900"
                  fontFamily="Arial Black, Arial"
                  letterSpacing="2"
                >
                  WINNER
                </text>

                {/* Badge circles */}
                <circle
                  cx="115"
                  cy="430"
                  r="22"
                  fill="#0f4c35"
                  stroke="#2d8a5e"
                  strokeWidth="1.5"
                />
                <text
                  x="115"
                  y="426"
                  textAnchor="middle"
                  fill="#86efac"
                  fontSize="6"
                  fontWeight="bold"
                  fontFamily="Arial"
                >
                  LEGENDS
                </text>
                <text
                  x="115"
                  y="434"
                  textAnchor="middle"
                  fill="#86efac"
                  fontSize="5"
                  fontFamily="Arial"
                >
                  CHARITY GAME
                </text>
                <circle
                  cx="115"
                  cy="420"
                  r="6"
                  fill="none"
                  stroke="#86efac"
                  strokeWidth="1"
                />
                <circle
                  cx="205"
                  cy="430"
                  r="22"
                  fill="#b91c1c"
                  stroke="#991b1b"
                  strokeWidth="1.5"
                />
                <text
                  x="205"
                  y="435"
                  textAnchor="middle"
                  fill="white"
                  fontSize="13"
                  fontFamily="Arial"
                >
                  🛡
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
