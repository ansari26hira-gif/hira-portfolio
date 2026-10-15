"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

// Replace these with your real projects, and set each `href` to the live site.
const projects = [
  { title: "Bloom Boutique", type: "WordPress + Elementor", desc: "Online store for a local fashion brand with fast product pages.", tags: ["Elementor", "WooCommerce", "SEO"], from: "#7c5cff", to: "#ff6b9a", href: "#" },
  { title: "Dental Care Clinic", type: "Custom website", desc: "Appointment-focused site that ranks for local searches.", tags: ["HTML", "CSS", "JavaScript"], from: "#22d3ee", to: "#7c5cff", href: "#" },
  { title: "Newsroom Blog", type: "Gutenberg theme", desc: "Editor-friendly publishing site with custom blocks.", tags: ["Gutenberg", "Plugins"], from: "#ff6b9a", to: "#fbbf24", href: "#" },
  { title: "Agency Landing Page", type: "Frontend build", desc: "Animated one-page site with a lead form and a high speed score.", tags: ["JavaScript", "SEO"], from: "#34d399", to: "#7c5cff", href: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal><h2 className="font-display text-4xl font-bold sm:text-5xl">Selected projects</h2></Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <motion.a href={p.href} whileHover={{ y: -8 }} className="glass group block overflow-hidden rounded-[2rem] p-3">
              <div className="relative h-52 overflow-hidden rounded-3xl" style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}>
                <span className="absolute bottom-3 left-4 font-display text-4xl font-extrabold text-white/80">{p.title}</span>
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-black transition group-hover:rotate-45"><ArrowUpRight size={18} /></span>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-violet-brand">{p.type}</p>
                <p className="muted mt-1">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => <span key={t} className="glass rounded-full px-3 py-1 text-xs font-medium">{t}</span>)}
                </div>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
