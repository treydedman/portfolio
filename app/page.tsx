"use client";

import Image from "next/image";
import logo from "../public/td-logo-gray.gif";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  HiOutlineBriefcase,
  HiOutlineCommandLine,
  HiOutlineUser,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { SunriseBackground } from "@/components/SunriseBackground";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: "#about", label: "About", icon: HiOutlineUser },
  { href: "#experience", label: "Experience", icon: HiOutlineBriefcase },
  { href: "#projects", label: "Projects", icon: HiOutlineCommandLine },
  { href: "#skills", label: "Skills", icon: HiOutlineWrenchScrewdriver },
];

const SKILLS = [
  {
    category: "Languages & Frameworks",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "HTML5",
      "CSS3",
      "PowerShell",
    ],
  },
  {
    category: "Databases & Platforms",
    items: [
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "AWS",
      "Vercel",
      "WordPress",
      "WooCommerce",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "CLI Tools",
      "SSMS",
      "Figma",
      "Canva",
      "Microsoft 365",
    ],
  },
  {
    category: "AI-Assisted Development",
    items: ["Claude", "ChatGPT", "Grok", "Ollama", "Qwen2.5-Coder 14B"],
  },
  {
    category: "Professional",
    items: [
      "Technical Documentation",
      "Process Automation",
      "QA & Testing",
      "Workflow Optimization",
      "Technical Training",
      "Remote Operations",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Team Lead, macOS Research",
    company: "PC Matic, Inc.",
    period: "Nov 2019 – Feb 2024",
    bullets: [
      "Designed the core macOS research and classification workflow that supported the successful product launch.",
      "Built and maintained file and digital certificate intelligence datasets driving classification, testing, and threat analysis.",
      "Automated routine file classifications via Python scripts, increasing throughput to 10,000+ files per hour.",
      "Revamped the digital certificate allowlist a full month ahead of a four-month timeline.",
      "Eliminated redundant processes, reducing company resource consumption by 30%.",
      "Co-authored SOPs from scratch and trained all six researchers on macOS workflows.",
    ],
  },
  {
    role: "Malware Researcher",
    company: "PC Matic, Inc.",
    period: "Jan 2018 – Nov 2019",
    bullets: [
      "Analyzed 600,000+ program files and 400,000+ digital certificates with a 98% sustained threat detection accuracy rate.",
      "Wrote PowerShell scripts to scrape hash databases and surface matches against known good/bad file data.",
      "Produced monthly threat reports for leadership and CISA.",
    ],
  },
];

const PROJECTS = [
  {
    name: "ShopTrackr",
    tagline: "Multi-tenant Inventory Platform",
    description:
      "SaaS inventory platform built for a specialty retail client after identifying operational gaps in their tracking and purchasing workflows. Features multi-tenant RLS, Square OAuth integration, purchase order workflows, and a full inventory movements ledger.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    status: "In Development",
    statusType: "dev",
    liveUrl: null,
    repoUrl: null,
    isClient: true,
  },
  {
    name: "FieldHQ",
    tagline: "CRM Platform",
    description:
      "Full-stack business operations platform for small service businesses — invoicing, scheduling, client management, and activity tracking. Refined through beta user collaboration to match real-world operational workflows.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    status: "Live",
    statusType: "live",
    liveUrl: "https://fieldhq.vercel.app/",
    repoUrl: null,
    isClient: true,
  },
  {
    name: "CyBear Lock v2",
    tagline: "Password Manager",
    description:
      "Full architectural rebuild of the original CyBear Lock — migrated from React/Express/AWS to Next.js on Vercel and Supabase. AES encryption via CryptoJS with Argon2 password hashing and JWT session management.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
    ],
    status: "Live",
    statusType: "live",
    liveUrl: "https://cybear-lock-v2.vercel.app/",
    repoUrl: "https://github.com/treydedman/cybear-lock-v2",
    isClient: false,
  },
  {
    name: "Snipster",
    tagline: "Code Snippet Manager",
    description:
      "My first independent full-stack build after certification. Manages code snippets with structured data organization and real-time validation. Includes GitHub OAuth and CI/CD deployment via Vercel.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
    ],
    status: "Live",
    statusType: "live",
    liveUrl: "https://snipster-zeta.vercel.app/",
    repoUrl: "https://github.com/treydedman/snipster",
    isClient: false,
  },
  {
    name: "Crypto Watchlist",
    tagline: "Cryptocurrency Tracker",
    description:
      "Vanilla TypeScript crypto tracker with real-time data from the CoinCap REST API. DOM manipulation, LocalStorage persistence, and clean UI built without any frameworks.",
    stack: ["TypeScript", "HTML5", "CSS3", "CoinCap API"],
    status: "Live",
    statusType: "live",
    liveUrl: "https://treydedman.github.io/Crypto-Watchlist-Project/",
    repoUrl: "https://github.com/treydedman/Crypto-Watchlist-Project",
    isClient: false,
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ElementType;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 py-1 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
    >
      <span className="h-px w-6 bg-zinc-600 group-hover:w-10 group-hover:bg-zinc-100 transition-all duration-300" />
      <Icon className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
      <span className="tracking-widest uppercase text-[11px] font-medium">
        {label}
      </span>
    </a>
  );
}

function StatusBadge({ status, type }: { status: string; type: string }) {
  const styles =
    type === "live"
      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
      : type === "dev"
        ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
        : "bg-zinc-500/10 text-zinc-500 border-zinc-500/20";
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border ${styles}`}
    >
      {type === "live" && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      )}
      {type === "dev" && (
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
      )}
      {status}
    </span>
  );
}

function StackBadge({ label }: { label: string }) {
  return (
    <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 text-zinc-400 border border-zinc-300/50 dark:border-zinc-700/50">
      {label}
    </span>
  );
}

function ClientBadge() {
  return (
    <span className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-200 text-zinc-800 tracking-wider uppercase">
      Client Work
    </span>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0c0f] text-zinc-100 transition-colors duration-300 selection:bg-zinc-700">
      <SunriseBackground />
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <div className="lg:flex lg:gap-16 lg:min-h-screen">
          {/* ── LEFT PANEL (sticky on lg) ── */}
          <aside
            className="lg:w-80 lg:shrink-0 lg:sticky lg:top-0 lg:self-start lg:h-screen lg:flex lg:flex-col lg:justify-between py-12 lg:py-16"
            style={{ position: "relative" }}
          >
            {/* Warm tint overlay driven by scroll */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, #c45000, transparent 70%)",
                opacity: "var(--sidebar-warm-opacity, 0)" as unknown as number,
                pointerEvents: "none",
                zIndex: 0,
                transition: "opacity 0.15s ease",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Header row */}
              <div className="flex items-center justify-between mb-10">
                <div>
                  <Image
                    src={logo}
                    alt="TD logo"
                    className="w-full h-full max-h-6"
                  />
                </div>
                <ThemeToggle />
              </div>

              {/* Identity */}
              <div className="space-y-2 mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-50">
                  Trey Dedman
                </h1>
                <p className="text-base font-medium text-zinc-400">
                  Full-Stack Developer
                </p>
                <p className="text-sm text-zinc-500">
                  Cybersecurity background · Birmingham, AL
                </p>
              </div>

              {/* Tagline */}
              <p className="text-sm leading-relaxed text-zinc-400 mb-10 max-w-xs">
                I turn operational problems into clean, scalable software. Six
                years in security research taught me how to find the real issue
                — now I build the solution.
              </p>

              {/* Nav */}
              <nav className="space-y-1 mb-10">
                {NAV_LINKS.map(({ href, label, icon: Icon }) => (
                  <NavLink key={href} href={href} label={label} Icon={Icon} />
                ))}
              </nav>
            </div>

            {/* Bottom: socials + resume */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/treydedman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/treydedman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </Link>
              </div>
              <Link
                href="./TreyDedman-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-md text-xs tracking-widest uppercase font-semibold px-4 py-2 bg-zinc-100 text-zinc-900 hover:bg-zinc-300 transition-colors">
                  Resume <FaArrowRight className="ml-1 w-3 h-3" />
                </Button>
              </Link>
            </div>
          </aside>

          {/* ── RIGHT PANEL (scrollable) ── */}
          <main className="flex-1 py-12 lg:py-16 space-y-24">
            {/* ABOUT */}
            <section id="about" className="scroll-mt-16">
              <SectionLabel>About</SectionLabel>
              <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
                <p>
                  I spent six years at PC Matic building macOS security
                  infrastructure from scratch — designing classification
                  workflows, writing automation that processed 10,000+ files per
                  hour, and training the team that ran it. That experience
                  shaped how I approach every problem: find the actual
                  bottleneck, then build something that fixes it permanently.
                </p>
                <p>
                  I've since shipped production applications for real clients: a
                  CRM platform for small service businesses and a multi-tenant
                  inventory system for a specialty retailer. I handle the full
                  stack — architecture, implementation, deployment, and
                  iteration.
                </p>
                <p>
                  I'm a methodical problem-solver who takes ownership quietly
                  and delivers ahead of schedule.
                </p>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="scroll-mt-16">
              <SectionLabel>Experience</SectionLabel>
              <div className="space-y-10">
                {EXPERIENCE.map((job) => (
                  <div
                    key={job.role}
                    className="group relative pl-4 border-l border-zinc-800 hover:border-zinc-600 transition-colors duration-300"
                  >
                    <div className="mb-3">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <h3 className="text-sm font-semibold text-zinc-100">
                          {job.role}
                        </h3>
                        <span className="text-zinc-500 text-xs">·</span>
                        <span className="text-xs text-zinc-400">
                          {job.company}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-600 mt-0.5 font-mono">
                        {job.period}
                      </p>
                    </div>
                    <ul className="space-y-1.5">
                      {job.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-xs text-zinc-400 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="scroll-mt-16">
              <SectionLabel>Projects</SectionLabel>
              <div className="space-y-6">
                {PROJECTS.map((project) => (
                  <div
                    key={project.name}
                    className="group rounded-xl border border-zinc-800/60 bg-zinc-950/50 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all duration-300 p-5 backdrop-blur-sm"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-sm font-semibold text-zinc-100">
                            {project.name}
                          </h3>
                          {project.isClient && <ClientBadge />}
                        </div>
                        <p className="text-[11px] text-zinc-500 font-mono">
                          {project.tagline}
                        </p>
                      </div>
                      <StatusBadge
                        status={project.status}
                        type={project.statusType}
                      />
                    </div>

                    <p className="text-xs leading-relaxed text-zinc-400 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.stack.map((tech) => (
                        <StackBadge key={tech} label={tech} />
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors group/link"
                        >
                          <FaExternalLinkAlt className="w-3 h-3" />
                          Live Demo
                        </Link>
                      )}
                      {project.repoUrl && (
                        <Link
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                        >
                          <FaGithub className="w-3 h-3" />
                          GitHub
                        </Link>
                      )}
                      {!project.liveUrl && !project.repoUrl && (
                        <span className="text-xs text-zinc-600 italic">
                          Private repo · in active development
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SKILLS */}
            <section id="skills" className="scroll-mt-16">
              <SectionLabel>Skills</SectionLabel>
              <div className="space-y-6">
                {SKILLS.map((group) => (
                  <div key={group.category}>
                    <p className="text-[11px] font-medium tracking-widest uppercase text-zinc-600 mb-2.5">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <StackBadge key={item} label={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FOOTER */}
            <footer className="pt-4 pb-12 border-t border-zinc-800">
              <p className="text-xs text-zinc-600">
                Built with Next.js · Tailwind CSS · Deployed on Vercel
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
        {children}
      </h2>
      <div className="flex-1 h-px bg-zinc-800" />
    </div>
  );
}
