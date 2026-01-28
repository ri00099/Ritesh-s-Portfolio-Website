import React, { useState, useEffect, useCallback } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // 1. Lock scroll when modal is open for better UX
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // 2. Handle Escape key to close modal
  const handleCloseModal = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleCloseModal]);

  return (
    <section id="work" className="py-24 px-[7vw] lg:px-[20vw] font-sans">
      <header className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white">PROJECTS</h2>
        <div className="w-24 h-1.5 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
            className="group relative flex flex-col bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl"
          >
            <div className="p-4 overflow-hidden">
              <img
                src={project.image}
                alt=""
                className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-4 line-clamp-2 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal - Rendered via Portal if you're using them, but standard conditional works too */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-[#0d0d12] border border-white/10 rounded-2xl shadow-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card
          >
            <button
              onClick={handleCloseModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-purple-600 transition-colors"
            >
              &times;
            </button>

            <div className="p-2 sm:p-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="p-6 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="text-xs font-semibold text-purple-300 bg-purple-900/30 px-3 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 rounded-xl bg-gray-800 text-white font-bold text-center hover:bg-gray-700 transition-all active:scale-95"
                >
                  Source Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 rounded-xl bg-purple-600 text-white font-bold text-center shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:bg-purple-500 transition-all active:scale-95"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;