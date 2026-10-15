import Reveal from "./Reveal";
import { MapPin, Rocket, Gauge } from "lucide-react";

const facts = [
  { icon: MapPin, t: "Based in Hyderabad, Sindh", d: "Working with clients locally and worldwide." },
  { icon: Gauge, t: "Built to load fast", d: "Light pages that score well and keep visitors." },
  { icon: Rocket, t: "From idea to launch", d: "Design, build, SEO setup and handover." },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Websites that work as hard as you do.</h2>
      </Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <Reveal>
          <p className="muted max-w-prose text-lg leading-relaxed">
            I'm Hira, a web developer who loves turning plain briefs into polished sites. I code custom pages in HTML, CSS and JavaScript, and I build WordPress sites with Elementor, Gutenberg and the right plugins when you need to manage content yourself.
          </p>
          <p className="muted mt-5 max-w-prose text-lg leading-relaxed">
            Every site I ship is responsive, quick and set up for search, so people can actually find it.
          </p>
        </Reveal>
        <div className="grid gap-4">
          {facts.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="glass flex items-start gap-4 rounded-3xl p-5">
                <span className="grad-bg grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white"><Icon size={20} /></span>
                <div><h3 className="font-display text-lg font-semibold">{t}</h3><p className="muted text-sm">{d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
