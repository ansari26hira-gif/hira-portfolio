"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

// Replace these with your real projects, and set each `href` to the live site.
const projects = [
  {
    title: "Bloom Boutique",
    type: "WordPress + Elementor",
    desc: "Online store for a local fashion brand with fast product pages.",
    tags: ["Elementor", "WooCommerce", "SEO"],
    from: "#7c5cff",
    to: "#ff6b9a",
    href: "#"
  },
  {
    title: "Dental Care Clinic",
    type: "Custom website",
    desc: "Appointment-focused site that ranks for local searches.",
    tags: ["HTML", "CSS", "JavaScript"],
    from: "#22d3ee",
    to: "#7c5cff",
    href: "#"
  },
  {
    title: "Newsroom Blog",
    type: "Gutenberg theme",
    desc: "Editor-friendly publishing site with custom blocks.",
    tags: ["Gutenberg", "Plugins"],
    from: "#ff6b9a",
    to: "#fbbf24",
    href: "#"
  },
  {
    title: "Agency Landing Page",
    type: "Frontend build",
    desc: "Animated one-page site with a lead form and a high speed score.",
    tags: ["JavaScript", "SEO"],
    from: "#34d399",
    to: "#7c5cff",
    href: "#"
  },
  {
    title: "eLearning",
    type: "WordPress",
    desc: "A school eLearning website built with WordPress and hosted on InfinityFree. Designed to provide information about curricular and co-curricular activities.",
    tags: ["WordPress", "InfinityFree", "School"],
    from: "#7c5cff",
    to: "#ff6b9a",
    href: "https://ansarihira.free.je/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl p-[1.5px] bg-gradient-to-r"
            style={{ backgroundImage: `linear-gradient(to right, ${p.from}, ${p.to})` }}
          >
            <div className="rounded-2xl bg-zinc-900 p-6 h-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zinc-400">{p.type}</span>
                <ArrowUpRight className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-zinc-400 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-zinc-800 border-zinc-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
