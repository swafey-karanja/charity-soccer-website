"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "The Game", href: "#game" },
  { label: "The Teams", href: "#teams" },
  { label: "Schedule", href: "#schedule" },
  { label: "Charities", href: "#charities" },
  { label: "The Venue", href: "#venue" },
  { label: "Tickets", href: "#tickets" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#dddfdd]`}
    >
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/Summit_Logo.png"
              width={150}
              height={90}
              alt="Summit Logo"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-5 py-2 text-sm font-black tracking-wider uppercase transition-colors duration-200 group ${"text-gray-700 hover:text-green-600"}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-green-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            {/* <a
              href="#tickets"
              className="hidden sm:inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-black tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5"
            >
              Donate
            </a> */}

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 rounded transition-all duration-300 "bg-gray-800" ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
              />
              <span
                className={`block h-0.5 rounded transition-all duration-300 "bg-gray-800" ${menuOpen ? "opacity-0 w-0" : "w-4"}`}
              />
              <span
                className={`block h-0.5 rounded transition-all duration-300 "bg-gray-800" ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-gray-100/98 backdrop-blur-md border-t border-gray-200`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm font-black tracking-wider uppercase text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#tickets"
            className="mt-2 text-center bg-green-500 hover:bg-green-400 text-white text-sm font-black tracking-widest uppercase px-5 py-3 rounded-full transition-all duration-300"
          >
            Donate
          </a>
        </nav>
      </div>
    </header>
  );
}
