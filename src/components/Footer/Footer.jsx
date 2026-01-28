import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

// 1. Move static data outside to prevent re-creation on render
const NAV_LINKS = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "work" }, // Changed to 'work' to match your Projects section ID
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const SOCIAL_LINKS = [
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ritesh-sharma-14s6/", label: "LinkedIn" },
  { icon: <FaTwitter />, link: "https://x.com/riitesh14", label: "Twitter" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/riitteessh/", label: "Instagram" },
  { icon: <FaYoutube />, link: "https://www.youtube.com/@RiteshSharma-tk7jv", label: "YouTube" },
];

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for sticky header height if you have one
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-white/10 py-12 px-[7vw] lg:px-[20vw] bg-[#0d0d12]">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-purple-500 hover:-translate-y-1 transition-all group"
      >
        <FaArrowUp className="group-hover:animate-bounce" />
      </button>

      <div className="flex flex-col items-center">
        {/* Branding */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Ritesh Sharma
        </h2>

        {/* Semantic Navigation */}
        <nav className="mt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-purple-400 text-sm sm:text-base font-medium transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mt-10">
          {SOCIAL_LINKS.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-2xl text-gray-400 hover:text-white transition-all transform hover:scale-125"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Horizontal Divider */}
        <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-10" />

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-8 tracking-widest uppercase">
          © {new Date().getFullYear()} Ritesh Sharma. Crafted with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;