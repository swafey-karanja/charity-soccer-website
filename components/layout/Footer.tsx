import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1Ay79xHcfi/",
    icon: <FaFacebook className="h-8 w-8 hover:text-blue-400" />,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/iGASummit",
    icon: <FaX className="h-8 w-8 hover:text-white" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/igasummit",
    icon: <FaInstagram className="h-8 w-8 hover:text-rose-500" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@iGASummit",
    icon: <FaYoutube className="h-8 w-8 hover:text-red-600" />,
  },

  {
    label: "Linkedin",
    href: "https://www.linkedin.com/company/igasummit/",
    icon: <FaLinkedin className="h-8 w-8 hover:text-blue-500" />,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/11m2XkXyP3MmjHRgXEVgwx",
    icon: <FaSpotify className="h-8 w-8 hover:text-green-600" />,
  },
  {
    label: "Telegram",
    href: "https://t.me/YOUR_TELEGRAM_LINK",
    icon: <FaTelegram className="h-8 w-8 hover:text-blue-600" />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="xl:container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/Summit_Logo.png"
              width={230}
              height={120}
              alt="Summit Logo"
            />
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 lg:w-15 lg:h-15 rounded-full border bg-black flex items-center justify-center text-gray-100 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-5 border-gray-400/80">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500 font-bold tracking-wide">
            © {new Date().getFullYear()} iGaming Afrika Charity Soccer
            Tournament. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-sm text-gray-900 hover:text-green-400 transition-colors duration-200"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
