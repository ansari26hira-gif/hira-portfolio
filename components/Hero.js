"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, Search, Code, Zap } from "lucide-react";

const words = ["Fast websites", "Wordpress builds", "Elementor layouts", "SEO-ready pages"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setIndex((o) => (o + 1) % words.length), 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 md:px-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass mb-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm">
            <Sparkles size={16} /> Open for freelance projects
          </motion.div>

          <h1 className="font-display text-5xl font-extrabold leading-[0.9] tracking-tight md:text-6xl lg:text-7xl">
            <span className="block">Hi, I&apos;m</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">Hira Amanat</span>
            <span className="mt-2 flex items-center gap-3">
              <span className="text-2xl md:text-3xl">I build</span>
              <span className="relative block h-[1.1em] w-[320px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span key={index} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 max-w-xl text-lg text-white/70">
            Web developer from Hyderabad, Pakistan. I turn ideas into clean, quick websites that look sharp and work well.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="glass rounded-full px-7 py-3.5 font-semibold transition hover:bg-white hover:text-black">View Projects</a>
            <a href="#contact" className="glass rounded-full px-7 py-3.5 font-semibold transition hover:bg-white/20">Contact Me</a>
          </div>
        </div>

        <motion.div initial={{ scale: 0.9, rotate: -3 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="relative mx-auto w-full max-w-[360px]">
          <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2.5rem] p-3">
            <img
              src="/hira.jpg"
              alt="Hira Amanat"
              className="h-full w-full object-cover rounded-[2rem]"
            />
          </div>
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown />
      </a>
    </section>
  );
}
