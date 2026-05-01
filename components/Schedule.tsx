"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const scheduleItems = [
  {
    time: "",
    event: "Registration and Confirmation of teams and players",
    highlight: false,
  },
  { time: "", event: "Pooling", highlight: false },
  { time: "", event: "Uniforms Issuance", highlight: false },
  { time: "", event: "Convergence for National Anthem", highlight: true },
  { time: "", event: "Kick Off", highlight: true, kickoff: true },
  { time: "", event: "Coronations", highlight: true },
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
                  key={item.event}
                  className={`flex items-center gap-6 py-5 transition-all duration-700 ${
                    visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${150 + i * 80}ms` }}
                >
                  {/* Time */}
                  {/* <div
                    className={`w-20 shrink-0 font-black text-xl tracking-wider ${
                      item.highlight ? "text-green-400" : "text-white/60"
                    }`}
                    style={{
                      fontFamily:
                        "var(--font-oswald), 'Arial Black', sans-serif",
                    }}
                  >
                    {item.time}
                  </div> */}

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
                  {item.kickoff && (
                    <span className="ml-auto text-xs font-black tracking-widest uppercase bg-green-500/20 border border-green-500/40 text-green-400 px-3 py-1 rounded-full">
                      Kick Off
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Trophy illustration */}
          {/* <div className="relative w-full h-125 rounded-2xl overflow-hidden ">
            <Image
              src="/trophy.png"
              alt="Sanitation facilities in East Africa"
              fill
              className="object-contain "
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
