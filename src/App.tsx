import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import React from "react";


// ---- Simple data you can edit quickly ----
const PROFILE = {
  name: "Dinesh Kolla",
  role: "Software Engineer • Go / Python / React",
  summary:
    "I build fast, reliable web services and dashboards. I enjoy concurrency patterns in Go, clean REST APIs, and polished UI with React.",
  location: "Chicago, IL",
  email: "hello@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resumeUrl: "#", // replace with your resume link
  imageUrl: "/src/assets/PT.jpeg", // Add your photo here
};

const TIMELINE = [
  {
    year: "Mar 2025 - Present",
    title: "Offboarding Project Manager — Rebecca Everlene Trust Co.",
    desc: "Leading process automation and communications. Owning integrations and reporting dashboards.",
  },
  {
    year: "2024",
    title: "Built MidWest Tracking Page",
    desc: "Flask + HTML/CSS/JS; integrated Zoho & BigCommerce; invoice/credit memo generation with WeasyPrint.",
  },
  {
    year: "2023",
    title: "Data Engineering & Analytics",
    desc: "ETL with Pandas/NumPy; automated reports; started deep-dive into Go for backend services.",
  },
];

const SKILLS = [
  "Go (goroutines, channels)",
  "Python (Pandas, Flask)",
  "React.js",
  "REST APIs",
  "PostgreSQL",
  "Git & CI/CD (Jenkins)",
  "Docker",
  "Cloud (Vercel/Netlify)",
];

const PROJECTS = [
  {
    title: "FakeWeatherApp (Go)",
    desc: "Concurrent API calls, health checks, and aggregation endpoints.",
    link: "#",
  },
  {
    title: "Personalized Due Date Analyzer",
    desc: "Clustering + descriptive analytics to personalize credit card due dates.",
    link: "#",
  },
  {
    title: "MidWest Tracking Portal",
    desc: "Order tracking, statements, returns; Flask + BigCommerce + Zoho APIs.",
    link: "#",
  },
];

// ---- Reusable bits ----
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

function SectionTitle({ label, kicker }: { label: string; kicker?: string }) {
  return (
    <div className="mb-8">
      {kicker && (
        <span className="mb-2 inline-block text-xs uppercase tracking-widest text-gray-500">
          {kicker}
        </span>
      )}
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{label}</h2>
    </div>
  );
}

function TimelineItem({ item, last }: { item: any; last: boolean }) {
  return (
    <div className="relative pl-8 pb-10">
      {/* line */}
      {!last && (
        <span className="absolute left-[11px] top-4 h-full w-[2px] bg-gray-200" />
      )}
      {/* dot */}
      <span className="absolute left-0 top-2 grid h-6 w-6 place-items-center rounded-full bg-white ring-2 ring-gray-300">
        <span className="h-2.5 w-2.5 rounded-full bg-gray-800" />
      </span>
      <div className="space-y-1">
        <div className="text-sm font-semibold text-gray-800">{item.year}</div>
        <div className="font-medium">{item.title}</div>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    </div>
  );
}

// ---- Page ----
export default function AboutPortfolio() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <nav className="flex gap-8">
            <a className="text-lg font-bold hover:opacity-70" href="#about">About</a>
            <a className="text-lg font-bold hover:opacity-70" href="#timeline">Journey</a>
            <a className="text-lg font-bold hover:opacity-70" href="#skills">Skills</a>
            <a className="text-lg font-bold hover:opacity-70" href="#projects">Projects</a>
            <a className="text-lg font-bold hover:opacity-70" href="#contact">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-sm text-gray-600">Available for opportunities:</span>
            <span className="text-sm font-medium text-emerald-600">Yes</span>
            {/* To switch to No status, comment out the line above and uncomment the line below */}
            {/* <span className="text-sm font-medium text-red-600">No</span> */}
          </div>
          <button
            className="md:hidden"
            aria-label="Toggle Menu"
            onClick={() => setNavOpen((v) => !v)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {navOpen && (
          <div className="border-t md:hidden">
            <div className="mx-auto max-w-6xl px-4 py-3">
              <div className="flex items-center gap-2 py-2 border-b mb-2">
                <span className="text-sm text-gray-600">Available for opportunities:</span>
                <span className="text-sm font-medium text-emerald-600">Yes</span>
                {/* To switch to No status, comment out the line above and uncomment the line below */}
                {/* <span className="text-sm font-medium text-red-600">No</span> */}
              </div>
              {[
                ["About", "#about"],
                ["Journey", "#timeline"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setNavOpen(false)}
                  className="block py-3 text-lg font-bold hover:opacity-70"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="mx-auto max-w-6xl px-4 py-16">
        <motion.div {...fadeUp} className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              {PROFILE.name}
            </h1>
            <p className="mt-2 text-lg text-gray-700">{PROFILE.role}</p>
            <p className="mt-4 max-w-prose text-gray-600">{PROFILE.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                href={PROFILE.resumeUrl}
              >
                <Download className="h-4 w-4" /> Resume
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"
                href="#contact"
              >
                Contact <ArrowRight className="h-4 w-4" />
              </a>
              <a className="ml-2" href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a className="ml-1" href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-64 md:w-80"
          >
            <div className="aspect-square overflow-hidden rounded-full border-2 border-gray-100 shadow-xl">
              <img
                src={PROFILE.imageUrl}
                alt={PROFILE.name}
                className="h-full w-full object-cover transition duration-300 hover:scale-110"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12">
        <motion.div {...fadeUp}>
          <SectionTitle label="About Me" kicker="Overview" />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <p>
                I'm a systems‑minded engineer who cares about correctness, reliability, and developer ergonomics.
                Recently I've focused on Go services (worker pools, timeouts, context‑cancellation) and React UIs that feel snappy.
              </p>
              <p>
                Outside of work I enjoy building tooling for automating reports, cleaning data with Pandas, and teaching others what I've learned.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>{PROFILE.location}</Badge>
                <Badge>Open Source</Badge>
                <Badge>Clean Architecture</Badge>
              </div>
            </div>
            <aside className="space-y-3 rounded-2xl border p-4">
              <div className="text-sm text-gray-600">Contact</div>
              <a href="#contact" className="block text-sm font-medium hover:underline">
                {PROFILE.email}
              </a>
              <div className="text-sm text-gray-600 pt-2">Focus Areas</div>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>API design & integration</li>
                <li>Data pipelines & reporting</li>
                <li>DX & automation</li>
              </ul>
            </aside>
          </div>
        </motion.div>
      </section>

      {/* Journey / Timeline */}
      <section id="timeline" className="mx-auto max-w-6xl px-4 py-12">
        <motion.div {...fadeUp}>
          <SectionTitle label="My Journey" kicker="Timeline" />
          <div className="relative">
            {TIMELINE.map((t, i) => (
              <TimelineItem key={i} item={t} last={i === TIMELINE.length - 1} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
        <motion.div {...fadeUp}>
          <SectionTitle label="Skills" kicker="Toolbox" />
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s, i) => (
              <Badge key={i}>{s}</Badge>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
        <motion.div {...fadeUp}>
          <SectionTitle label="Selected Projects" kicker="Showcase" />
          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <a key={i} href={p.link} className="group rounded-2xl border p-5 hover:shadow-md transition">
                <div className="mb-2 text-base font-semibold group-hover:underline">{p.title}</div>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <motion.div {...fadeUp}>
          <SectionTitle label="Get in touch" kicker="Contact" />
          <div className="rounded-2xl border p-6">
            <p className="text-gray-700">
              Want to collaborate or chat about an idea? Send me an email and I'll get back soon.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-gray-50">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-gray-50">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm text-gray-600 md:flex-row md:justify-between md:text-left">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#projects">Projects</a>
            <a className="hover:underline" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
