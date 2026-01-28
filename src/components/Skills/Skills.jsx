import React from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Header */}
      <header className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
          SKILLS
        </h2>
        <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          A collection of technical skills strengthened through continuous learning and project-based experience.
        </p>
      </header>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={10} // Reduced slightly for better UX while keeping the feature
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1500}
            gyroscope={true}
            // Ensure the tilt container takes up full height for alignment
            className="flex"
          >
            <div className="bg-gray-900/60 backdrop-blur-lg p-8 w-full rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(130,69,236,0.2)] hover:border-[#8245ec]/50 transition-colors duration-500">
              <h3 className="text-2xl font-bold text-gray-300 mb-8 text-center uppercase tracking-wider">
                {category.title}
              </h3>

              {/* Skill Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col sm:flex-row items-center justify-center gap-2 bg-gray-800/40 border border-gray-700 rounded-xl p-3 hover:bg-gray-800 transition-all group"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} icon`}
                      className="w-6 h-6 sm:w-7 sm:h-7 object-contain group-hover:scale-110 transition-transform"
                      loading="lazy"
                    />
                    <span className="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;