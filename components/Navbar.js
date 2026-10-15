"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3">
        <a href="#home" className="font-display text-lg font-bold">hira<span className="grad-text">.dev</span></a>
        <ul className="hidden gap-7 md:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="muted text-sm font-medium transition hover:text-[color:var(--ink)]">{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark and light mode"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="glass grid h-9 w-9 place-items-center rounded-full"
          >
            {mounted && (resolvedTheme === "dark" ? <Sun size={17} /> : <Moon size={17} />)}
          </button>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="glass grid h-9 w-9 place-items-center rounded-full md:hidden">
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-5xl rounded-3xl p-4 md:hidden">
          {links.map((l) => (
            <a key={l} onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block rounded-xl px-3 py-2 font-medium">{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}
