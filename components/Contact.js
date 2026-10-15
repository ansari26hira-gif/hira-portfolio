"use client";
import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Reveal from "./Reveal";

const field = "glass w-full rounded-2xl bg-transparent px-5 py-3.5 outline-none placeholder:text-[color:var(--muted)] focus:ring-2 focus:ring-violet-brand";

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    if (f.get("website")) return; // honeypot for bots
    if (!supabase) return setStatus({ state: "error", msg: "The form isn't connected yet. Add your Supabase keys to .env.local." });

    setStatus({ state: "loading", msg: "" });
    const { error } = await supabase.from("messages").insert({
      name: f.get("name").trim(), email: f.get("email").trim(), message: f.get("message").trim(),
    });
    if (error) return setStatus({ state: "error", msg: "Message not sent. Check your connection and try again." });
    form.reset();
    setStatus({ state: "success", msg: "Message sent. I'll reply within 24 hours." });
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="glass grid gap-10 rounded-[2.5rem] p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
        <Reveal>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Let's build your <span className="grad-text">next website.</span></h2>
          <p className="muted mt-5">Tell me what you need and your timeline. I'll get back to you with next steps.</p>
          <ul className="mt-8 space-y-3 text-sm font-medium">
            <li className="flex items-center gap-3"><Mail size={18} className="text-violet-brand" /> hello@yourdomain.com</li>
            <li className="flex items-center gap-3"><MapPin size={18} className="text-rose-brand" /> Hyderabad, Sindh, Pakistan</li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="space-y-4">
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <input name="name" required maxLength={100} placeholder="Your name" aria-label="Your name" className={field} />
            <input name="email" type="email" required maxLength={200} placeholder="Your email" aria-label="Your email" className={field} />
            <textarea name="message" required maxLength={3000} rows={5} placeholder="Tell me about your project" aria-label="Message" className={field} />
            <button disabled={status.state === "loading"} className="grad-bg inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-semibold text-white shadow-lg shadow-violet-brand/30 transition hover:scale-105 disabled:opacity-60">
              {status.state === "loading" ? "Sending…" : "Send message"} <Send size={16} />
            </button>
            {status.msg && <p role="status" className={`text-sm font-medium ${status.state === "success" ? "text-emerald-500" : "text-rose-brand"}`}>{status.msg}</p>}
          </form>
        </Reveal>
      </div>
      <p className="muted mt-12 text-center text-sm">© {new Date().getFullYear()} Hira Ansari. Built with Next.js, Tailwind and Supabase.</p>
    </section>
  );
}
