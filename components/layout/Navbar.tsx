"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#game" },
  { label: "The Venue", href: "#venue" },
  { label: "Charities", href: "#charities" },
  { label: "Schedule", href: "#schedule" },
  { label: "The Teams", href: "#teams" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-gray-100">
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center h-20 lg:h-28">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <Image
              src="/Summit_Logo.png"
              width={150}
              height={90}
              alt="Summit Logo"
            />
          </a>

          {/* Desktop Nav + CTA — pushed to the far right */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-5 py-2 text-md font-black tracking-wider uppercase text-gray-700 hover:text-green-600 transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-green-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </a>
              ))}
            </nav>
            {/* <a
              href="#tickets"
              className="ml-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-black tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Donate
            </a> */}
          </div>

          {/* Mobile: Hamburger */}
          <div className="lg:hidden flex items-center gap-3 ml-auto">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
              />
              <span
                className={`block h-0.5 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`}
              />
              <span
                className={`block h-0.5 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}
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
