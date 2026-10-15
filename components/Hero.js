"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, Search, Code2 } from "lucide-react";

const words = ["fast websites", "WordPress builds", "Elementor layouts", "SEO-ready pages"];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16">
      <div className="pointer-events-none absolute -left-24 top-20 h-96 w-96 animate-blob rounded-full bg-violet-brand/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 animate-blob rounded-full bg-rose-brand/30 blur-3xl [animation-delay:-8s]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Sparkles size={15} className="text-rose-brand" /> Open for freelance projects
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I'm Hira Ansari.
            <span className="mt-2 block">I build</span>
            <span className="relative block h-[1.15em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[i]}
                  initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45 }} className="grad-text absolute inset-0"
                >
                  {words[i]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="muted mt-6 max-w-lg text-lg">
            Web developer from Hyderabad, Pakistan. I turn ideas into clean, quick websites that look sharp and rank well.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="grad-bg rounded-full px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-brand/30 transition hover:scale-105">See my work</a>
            <a href="#contact" className="glass rounded-full px-7 py-3.5 font-semibold transition hover:scale-105">Hire me</a>
          </motion.div>
        </div>

        {/* Photo placeholder: add /public/hira.jpg and swap the inner div for <Image /> */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="relative mx-auto w-full max-w-sm">
          <div className="grad-bg absolute inset-0 rotate-6 rounded-[2.5rem] opacity-60 blur-sm" />
<div className="glass relative aspect-[4/5] overflow-hidden rounded-[2.5rem] p-3">
  <img
    src="/hira.jpg"
    alt="Hira Ansari"
    className="h-full w-full object-cover rounded-[2rem]"
  />
</div>
      </div>
      <a href="#about" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce muted"><ArrowDown /></a>
    </section>
  );
}
