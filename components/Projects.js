import React from 'react';

const projects = [
  {
    title: "AI-Assistant Portal",
    description: "To secure office files and documents",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://officedoc.xo.je/",
  },
  {
    title: "Wipe Hero - Cleaning Service Website",
    description: "Provides car wash and other cleaning services. WordPress template.",
    tech: ["WordPress"],
    link: "https://car-wash1.xo.je/?i=1",
  },
  {
    title: "Portfolio",
    description: "Showcase your skills",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://hiraansari.rf.gd/?i=1",
  },
  {
    title: "E-Learning Platform",
    description: "Online learning platform to showcase courses and skills",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://ansarihira.free.je/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900/70 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-pink-500 dark:hover:border-pink-500 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
