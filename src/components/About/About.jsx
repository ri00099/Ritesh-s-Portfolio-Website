import React, { useMemo } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

// 1. Move static data outside to prevent re-renders and improve readability
const ROLES = ["Fullstack Developer", "Frontend Developer", "Coder"];
const RESUME_URL = "https://flowcv.com/resume/rr6ooidalf6g";

const About = () => {
  // 2. Memoize complex styles if they were dynamic (kept simple here)
  const gradientShadow = {
    background: "linear-gradient(90deg, #8245ec, #a855f7)",
    boxShadow: "0 0 40px -5px rgba(130, 69, 236, 0.5)",
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 px-[7vw] lg:px-[20vw] mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
        
        {/* Content Area */}
        <div className="md:w-1/2 text-center md:text-left">
          <header>
            <p className="text-xl sm:text-2xl font-medium text-gray-300 mb-2">
              Hi, I am
            </p>
            <h1 
              id="about-heading"
              className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight"
            >
              Ritesh Sharma
            </h1>
          </header>

          <h2 className="text-xl sm:text-3xl font-semibold mb-6 text-[#8245ec]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={ROLES}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => <span className="text-[#8245ec]">{cursor}</span>}
            />
          </h2>

          <p className="max-w-xl text-base sm:text-lg text-gray-400 mb-10 leading-relaxed">
            Frontend-focused <strong className="text-gray-200">Full-Stack Developer</strong> with hands-on experience in building modern, responsive web applications. Skilled in crafting smooth user experiences using <span className="text-purple-400">React, Tailwind CSS, and Framer Motion</span>, with a strong focus on clean UI and performance.
          </p>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8245ec] text-white py-4 px-10 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 shadow-lg"
            style={gradientShadow}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Visual Area */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1500}
            scale={1.02}
            className="relative"
          >
            {/* Decorative Background Ring */}
            <div className="absolute inset-0 border-4 border-[#8245ec]/30 rounded-full -m-2 animate-pulse" />
            
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-[#8245ec]">
              <img
                src={profileImage}
                alt="Ritesh Sharma - Profile Portrait"
                className="w-full h-full object-cover"
                loading="eager" 
                fetchpriority="high"
              />
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;