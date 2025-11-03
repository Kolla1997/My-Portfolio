import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import React from "react";


// ---- Simple data you can edit quickly ----
const PROFILE = {
  name: "Dinesh Kolla",
  role: "Backend-Focused Engineer • Go / Java / Kafka / AWS",
  summary:
    ` I’m a backend-focused engineer who cares deeply about clean architecture, reliability, and developer experience. Lately, I’ve been building Go microservices that handle millions of events with Kafka, Redis Streams, and context-driven concurrency, plus the occasional React front end when something needs a face.

Outside of work, I enjoy experimenting with AI tools, automating workflows, and cleaning messy data with Python and Pandas. I’m happiest when I’m making systems faster, smarter, and easier for others to use.`,

  aboutMe:
    `I’m a Full-Stack Developer with over 7 years of experience building scalable, cloud-native applications across healthcare, retail, and banking. I specialize in Golang and Java microservices, event-driven architecture, and AI-driven automation using tools like LangChain and the OpenAI API.

    I’ve designed and deployed production-grade systems on AWS using Docker, Kubernetes, and Terraform, and have a strong background in data streaming (Kafka, Redis Streams) and CI/CD automation with Jenkins and GitHub Actions. My work often focuses on performance tuning, system reliability, and security, whether it’s optimizing API latency under heavy load or enforcing OAuth 2.0/JWT standards for compliance.

    Beyond the code, I enjoy solving real business problems through clean architecture, observability (Prometheus, Grafana), and cross-team collaboration in Agile environments. Recently, I’ve been exploring how AI integrations can make backend systems more predictive and intelligent.`,

  
  location: "Chicago, IL",
  email: "dineshkolla26@gmail.com",
  phone: "(315) 232-1317",
  github: "https://github.com/Kolla1997",
  linkedin: "https://www.linkedin.com/in/kolla-26d/",
  resumeUrl: "/Dinesh_SD_Resume.pdf", // replace with your resume link
  // imageUrl: "/BW_PT.png", // Add your photo here
  imageUrl: "/PT.png", // Add your photo here
  // imageUrl: "/PT.jpeg", // Add your photo here
};

const TIMELINE = [
  {
    year: "May 2024 - Present",
    title: "Golang Full Stack Developer | Midwest Good Inc - Chicago, IL",
    desc: `Built and deployed cloud-native Golang (Fiber) microservices for real-time order and shipment tracking using PostgreSQL, MongoDB, Kafka, and Redis Streams. Designed asynchronous, scalable APIs integrated with React front-ends, achieving 40% faster UI response times. Automated CI/CD pipelines with GitHub Actions and Jenkins, doubling deployment frequency and cutting manual errors by 70%. Managed containerized workloads on AWS (Fargate, EKS, Terraform) with blue-green rollouts, Go-based cron jobs, and proactive system monitoring via Prometheus and Grafana. Integrated LangChain/OpenAI modules for shipment-delay prediction and anomaly detection, driving data-driven insights. Collaborated in Agile sprints to deliver iterative, production-grade features.`,
  },
  {
    year: "Jan 2023 - Mar 2024",
    title: "Senior Golang Developer | Optum (UnitedHealth Group) - Chicago, IL",
    desc: `Developed predictive health-analytics microservices using Golang (Fiber) and LangChain/OpenAI APIs for real-time patient insights. Designed ETL dataflows with Kafka and Redis to process millions of patient records daily, deploying inference models via AWS Lambda with sub-120 ms latency. Improved query performance by 40% through Redis caching and connection pooling (Redigo). Implemented HIPAA-compliant security using OAuth 2.0, encryption, secret rotation, and audit workflows. Built Prometheus + Grafana dashboards for reliability tracking and capacity planning, and collaborated in Agile sprints to deliver secure, production-grade releases.`,
  },
  {
    year: "Jan 2022 - Dec 2022",
    title: "Java Full Stack Developer | Capital One - Plano, TX",
    desc: `Engineered REST and GraphQL APIs with Spring Boot to streamline credit decisioning and customer onboarding, cutting onboarding time and improving reliability. Built responsive React.js interfaces with client-side validation, caching, and feature toggles for a seamless user experience. Implemented OAuth 2.0 (Client Credentials) and automated secret rotation to strengthen security and compliance. Integrated Kafka for event-driven payment notifications, boosting traceability and throughput under heavy load. Enhanced CI/CD pipelines with Jenkins and SonarQube, reducing regressions by 30% through automated testing and code quality checks. Collaborated in Agile sprints across QA, DevOps, and Product to deliver secure, scalable microservices.`,
  },
  {
    year: "Jan 2020 - Jun 2021",
    title: "Java Developer |  Royal Bank of Canada - India",
    desc: `Developed Spring Boot microservices for payments and credit processing with retry and circuit-breaker patterns to ensure high resilience. Designed ETL pipelines using Talend and Apache NiFi for core-banking data migration and reconciliation. Streamed transaction events via Kafka with managed schema registry and DLQs for fault-tolerant analytics integration. Optimized Oracle PL/SQL procedures and partitioning, cutting batch processing time by 35%. Secured APIs with JWT authentication, implemented audit logging, and automated testing using JUnit, Postman, and Jenkins CI/CD for reliable delivery.`,
  },
  {
    year: "Apr 2018 - Dec 2019",
    title: "Software Engineer | Tech Mahindra - India",
    desc: `Engineered REST and GraphQL APIs with Spring Boot to streamline credit decisioning and customer onboarding, cutting onboarding time and improving reliability. Built responsive React.js interfaces with client-side validation, caching, and feature toggles for a seamless user experience. Implemented OAuth 2.0 (Client Credentials) and automated secret rotation to strengthen security and compliance. Integrated Kafka for event-driven payment notifications, boosting traceability and throughput under heavy load. Enhanced CI/CD pipelines with Jenkins and SonarQube, reducing regressions by 30% through automated testing and code quality checks. Collaborated in Agile sprints across QA, DevOps, and Product to deliver secure, scalable microservices.`,
  },  
  
];

const SKILLS = [
"Go (Fiber, Gin, concurrency, context)",
"Java (Spring Boot, REST, GraphQL)",
"Python (Pandas, automation)",
"React.js (Redux, Tailwind CSS)",
"Kafka & Redis Streams",
"PostgreSQL / MongoDB / Cassandra",
"CI/CD (Jenkins, GitHub Actions)",
"Docker & Kubernetes",
"Cloud (AWS – ECS, Lambda, Terraform)",
"Prometheus & Grafana (monitoring)",
"LangChain / OpenAI API (AI integration)"

];

const PROJECTS = [
  {
    title: "FakeWeatherApp",
    desc: "Concurrent API calls, health checks, and aggregation endpoints.",
    link: "https://github.com/Kolla1997/Fake-Weather-App",
  },
  {
    title: "Personalized Due Date Analyzer",
    desc: "Clustering + descriptive analytics to personalize credit card due dates.",
    link: "https://github.com/Kolla1997/Expense_Tracker",
  },
  {
    title: "Movie Suggestions App",
    desc: "Movie recommendations using collaborative filtering and content-based filtering.",
    link: "https://github.com/dev1force/Movie-Suggestions",
  },
  {
    title: "MidWest Tracking Portal",
    desc: "Built end-to-end logistics portal with Go and Java microservices for real-time order tracking, statements, and returns, integrating BigCommerce and Zoho APIs.",
    link: "https://www.midwestgoods.info/login",
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
            <div className="mt-4 max-w-prose text-gray-600 space-y-4">
              {PROFILE.summary.split(/\n\s*\n/).map((para, idx) => (
                <p key={idx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
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
          <SectionTitle label="About Me" />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <div className="mt-4 max-w-prose text-gray-600 space-y-4">
              {PROFILE.aboutMe.split(/\n\s*\n/).map((para, idx) => (
                <p key={idx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
              <div className="flex flex-wrap gap-2">
                <Badge>{PROFILE.location}</Badge>
                <Badge>Backend Engineer</Badge>
                <Badge>Go Developer</Badge>
                <Badge>AI-Driven Systems</Badge>
                <Badge>Cloud & DevOps</Badge>
                <Badge>Open Source</Badge>
                <Badge>Clean Architecture</Badge>
              </div>
            </div>
            <aside className="space-y-3 rounded-2xl border p-4">
              <div className="text-sm text-gray-600">Contact</div>
              <a href="#contact" className="block text-sm font-medium hover:underline">
                {`Dinesh Kolla`} <br />
                {PROFILE.phone }<br />
                {PROFILE.email}<br />
                {PROFILE.location}
                
              </a>
              <div className="text-sm text-gray-600 pt-2">Focus Areas</div>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>API design & integration</li>
                <li>Event-driven microservices</li>
                <li>Data pipelines & real-time processing</li>
                <li>Cloud infrastructure & DevOps</li>
                <li>Observability & performance tuning</li>
                <li>AI/ML integration & automation</li>
              </ul>
            </aside>
          </div>
        </motion.div>
      </section>

      {/* Journey / Timeline */}
      <section id="timeline" className="mx-auto max-w-6xl px-4 py-12">
        <motion.div {...fadeUp}>
          <SectionTitle label="My Journey" />
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
          <SectionTitle label="Skills"  />
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
          <SectionTitle label="Selected Projects"  />
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
          <SectionTitle label="Get in touch" />
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
