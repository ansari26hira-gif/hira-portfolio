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
    link:  "https://ansarihira.free.je/",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className=className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition bg-white dark:bg-gray-800">
            <h3 className="texclassName="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
            <p className="tclassName="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm" rounded-full text-sm">{t}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
