"use client";
import { useState, useEffect } from 'react';

const words = ["Fast", "Wordpress", "SEO-friendly", "Responsive"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[85vh] flex items-center px-6 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        <div>
          <div className="inline-block bg-white/10 border-white/10 rounded-full px-4 py-1 text-sm mb-6 text-gray-200 dark:text-gray-300">
            Open for freelance projects
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-3 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-500">Hira Ansari</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white h-12">
            I build{" "}
            <span key={index} className="inline-block text-blue-500 min-w-[180px]">
              {words[index]}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
            Web developer from Hyderabad, Pakistan. I turn ideas into clean, quick websites that look sharp and work well.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
              View Projects
            </a>
            <a href="#contact" className="border border-gray-400 dark:border-gray-600 hover:bg-white/10 px-6 py-3 rounded-full font-medium transition text-gray-900 dark:text-white">
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/hira.jpg"
            alt="Hira Ansari"
            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl border-gray-200 dark:border-gray-700 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
