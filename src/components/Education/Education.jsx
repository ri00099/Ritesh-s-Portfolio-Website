import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3 overflow-hidden"
    >
      {/* Section Header */}
      <header className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-white tracking-tight uppercase">
          Education
        </h2>
        <div className="w-24 h-1.5 bg-purple-600 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          My education has been a journey of learning and development. 
          Here are the details of my academic background.
        </p>
      </header>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* The Central Line */}
        <div 
          className="absolute left-4 sm:left-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-white/20 to-transparent h-full transform -translate-x-1/2" 
          aria-hidden="true"
        />

        {/* Education Entries */}
        <div className="space-y-12">
          {education.map((edu, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={edu.id}
                className={`relative flex items-center justify-between w-full ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* 1. Content Card */}
                <div className="w-[calc(100%-3.5rem)] sm:w-[42%] ml-auto sm:ml-0 p-6 sm:p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/40">
                  <div className="flex flex-col gap-4">
                    <header className="flex items-center gap-4">
                      <div className="w-16 h-12 flex-shrink-0 bg-white rounded-lg overflow-hidden flex items-center justify-center p-1">
                        <img
                          src={edu.img}
                          alt={`${edu.school} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                          {edu.degree}
                        </h3>
                        <p className="text-purple-400 text-sm font-medium">{edu.school}</p>
                      </div>
                    </header>

                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <time className="text-xs font-mono text-gray-500">{edu.date}</time>
                      <span className="text-xs font-bold text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded">
                        Grade: {edu.grade}
                      </span>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed italic">
                      {edu.desc}
                    </p>
                  </div>
                </div>

                {/* 2. Central Timeline Marker */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-[#8245ec] bg-gray-900 overflow-hidden shadow-[0_0_20px_rgba(130,69,236,0.4)]">
                    <img
                      src={edu.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* 3. Spacer for the other side on Desktop */}
                <div className="hidden sm:block w-[42%]" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;