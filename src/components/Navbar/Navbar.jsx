import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MENU_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Optimized Scroll Detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Intersection Observer: Automatically highlight active section
  useEffect(() => {
    const observerOptions = { rootMargin: "-40% 0px -40% 0px" };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    MENU_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 3. Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
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

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-[7vw] lg:px-[20vw] ${
        isScrolled || isOpen
          ? "py-3 bg-[#050414]/80 backdrop-blur-xl shadow-2xl border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo - Semantically an H1 or a Link to home */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Ritesh</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Sharma</span>
          <span className="text-[#8245ec]">&gt;</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {MENU_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative text-sm font-medium transition-colors hover:text-white ${
                    activeSection === item.id ? "text-[#8245ec]" : "text-gray-400"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8245ec] rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <a href="https://github.com/ri00099" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/ritesh-sharma-14s6" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-[#8245ec] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-x-0 top-[60px] h-screen bg-[#050414] transition-all duration-500 md:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 pt-20">
          {MENU_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScrollTo(item.id)}
                className={`text-2xl font-bold ${
                  activeSection === item.id ? "text-[#8245ec]" : "text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;