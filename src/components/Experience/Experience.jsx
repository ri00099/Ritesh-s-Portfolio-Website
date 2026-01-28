import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 overflow-hidden"
    >
      {/* Section Header */}
      <header className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1.5 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations.
        </p>
      </header>

      {/* Timeline Container */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* The Vertical Line - Simplified Logic */}
        <div 
          className="absolute left-4 sm:left-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-purple-900 to-transparent h-full transform -translate-x-1/2" 
          aria-hidden="true"
        />

        {/* Experience Entries */}
        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <article
              key={experience.id}
              className={`relative flex items-center justify-between mb-16 w-full ${
                isEven ? "sm:flex-row-reverse" : "sm:flex-row"
              }`}
            >
              {/* 1. Spacer for Desktop (The "Other Side") */}
              <div className="hidden sm:block w-[45%]" />

              {/* 2. Central Timeline Marker */}
              <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-[#8245ec] bg-gray-900 overflow-hidden shadow-[0_0_15px_rgba(130,69,236,0.5)]">
                  <img
                    src={experience.img}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* 3. Content Card */}
              <div className="w-[calc(100%-3rem)] sm:w-[45%] ml-auto sm:ml-0 p-6 sm:p-8 rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/50">
                <header className="flex items-start gap-4 mb-4">
                  {/* Small internal logo for mobile clarity */}
                  <img
                    src={experience.img}
                    alt=""
                    className="w-12 h-12 rounded-lg object-cover sm:hidden border border-gray-700"
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      {experience.role}
                    </h3>
                    <p className="text-purple-400 font-medium">{experience.company}</p>
                    <time className="text-xs uppercase tracking-widest text-gray-500 mt-1 block">
                      {experience.date}
                    </time>
                  </div>
                </header>

                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {experience.desc}
                </p>

                {/* Skills Footer */}
                {experience.skills && (
                  <footer className="mt-6">
                    <h4 className="text-xs font-bold text-gray-200 uppercase tracking-tighter mb-3">
                      Key Skills
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, sIdx) => (
                        <li
                          key={sIdx}
                          className="bg-purple-500/10 text-purple-300 px-3 py-1 text-[10px] sm:text-xs rounded-md border border-purple-500/20"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </footer>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;