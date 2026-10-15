"use client";
import { motion } from "framer-motion";
import { Code2, Palette, Braces, LayoutTemplate, PenSquare, Plug, Search } from "lucide-react";
import Reveal from "./Reveal";

const skills = [
  { icon: Code2, name: "HTML", note: "Semantic, accessible markup" },
  { icon: Palette, name: "CSS", note: "Layouts, animation, Tailwind" },
  { icon: Braces, name: "JavaScript", note: "Interactive, modern front ends" },
  { icon: LayoutTemplate, name: "Elementor", note: "Custom page builds" },
  { icon: PenSquare, name: "Gutenberg", note: "Block-based WordPress editing" },
  { icon: Plug, name: "Plugins", note: "Setup, tuning and customization" },
  { icon: Search, name: "SEO", note: "On-page, speed and structure" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal><h2 className="font-display text-4xl font-bold sm:text-5xl">What I work with</h2></Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ icon: Icon, name, note }, i) => (
          <Reveal key={name} delay={i * 0.05}>
            <motion.div whileHover={{ y: -6, rotate: -1 }} className="glass group h-full rounded-3xl p-6">
              <span className="grad-bg mb-5 grid h-12 w-12 place-items-center rounded-2xl text-white transition group-hover:rotate-12"><Icon size={22} /></span>
              <h3 className="font-display text-xl font-semibold">{name}</h3>
              <p className="muted mt-1 text-sm">{note}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
