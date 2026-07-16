import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FloatingBadges } from "@/components/FloatingBadges";
import { GhostType, GhostSVG } from "@/components/GhostCompanion";

// Import local project assets for horizontal slider
import projectFounderOS from "@/assets/project-founderos-new.png";
import projectAIAnalyst from "@/assets/project-aianalyst-new.png";
import projectZupper from "@/assets/live-zupper.jpg";
import projectInhaus from "@/assets/inhaus-screenshot.png";
import projectVantage from "@/assets/project-vantage.png";
import projectInstamart from "@/assets/project-instamart-new.png";
import projectZomatoCase from "@/assets/project-zomato-aov.png";
import projectPorter from "@/assets/project-porter-new.png";



interface IndexProps {
  activeGhost: GhostType;
  onSelectGhost: (ghost: GhostType) => void;
}

const Index = ({ activeGhost, onSelectGhost }: IndexProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Track scroll on the horizontal showcase container
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Track active slide index as scroll progress changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * (projects.length + 0.05)), projects.length - 1);
    setActiveIndex(index);
  });

  // Scroll page vertically to align with clicked slide
  const handleNavClick = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    const totalHeight = rect.height - window.innerHeight;
    const targetScrollY = absoluteTop + (index / (projects.length - 1)) * totalHeight;
    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth"
    });
  };

  const ghostGuides: { id: GhostType; name: string; title: string; color: string }[] = [
    { id: "boo", name: "Boo", title: "gentleman", color: "var(--brand)" },
    { id: "lav", name: "Lav", title: "florist", color: "#a855f7" },
    { id: "mint", name: "Mint", title: "skater", color: "#10b981" },
    { id: "peach", name: "Peach", title: "wrangler", color: "#f97316" },
    { id: "sky", name: "Sky", title: "scholar", color: "#0ea5e9" },
    { id: "noir", name: "Noir", title: "rockstar", color: "#ec4899" },
  ];

  const projects = [
    {
      id: "founderos",
      title: "FounderOS",
      tagline: "AI-driven order reporting and operations workflow automation",
      kind: "ground",
      year: "2026",
      tag: "AI & Shopify",
      accent: "var(--brand)",
      image: projectFounderOS,
      link: "/ground/founderos",
      bg: "#0a0a0a",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" rx="1"/>
          <rect x="14" y="3" width="7" height="5" rx="1"/>
          <rect x="14" y="12" width="7" height="9" rx="1"/>
          <rect x="3" y="16" width="7" height="5" rx="1"/>
        </svg>
      )
    },
    {
      id: "aianalyst",
      title: "AI Analyst",
      tagline: "Semantic search and automated PRD generation system",
      kind: "ground",
      year: "2026",
      tag: "RAG & Search",
      accent: "var(--brand)",
      image: projectAIAnalyst,
      link: "/ground/aianalyst",
      bg: "#ffffff",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      )
    },
    {
      id: "zupper",
      title: "Zupper",
      tagline: "Designed B2B BlendCommerce screens for lifestyle sourcing and auctions",
      kind: "ground",
      year: "2025",
      tag: "UI/UX Design",
      accent: "var(--brand)",
      image: projectZupper,
      link: "/ground/zupper",
      bg: "#101D2B",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      id: "inhaus",
      title: "INHAUS Coffee",
      tagline: "Co-founded and scaled D2C coffee concentrate subscription funnel",
      kind: "ground",
      year: "2026",
      tag: "D2C Brand",
      accent: "var(--brand)",
      image: projectInhaus,
      link: "/ground/inhaus",
      bg: "#ffffff",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
          <line x1="6" y1="1" x2="6" y2="4"/>
          <line x1="10" y1="1" x2="10" y2="4"/>
          <line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
      )
    },
    {
      id: "vantage",
      title: "Vantage AI",
      tagline: "Enterprise AI go-to-market strategy for manufacturing",
      kind: "ground",
      year: "2025",
      tag: "Enterprise AI",
      accent: "var(--brand)",
      image: projectVantage,
      link: "/ground/vantage",
      bg: "#ffffff",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      )
    },
    {
      id: "instamart",
      title: "Swiggy Instamart",
      tagline: "UX research and contextual checkout recommendations",
      kind: "ground",
      year: "2025",
      tag: "UX Research",
      accent: "var(--brand)",
      image: projectInstamart,
      link: "/ground/instamart",
      bg: "#ffffff",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      )
    },
    {
      id: "zomatocase",
      title: "Zomato: Increasing AOV",
      tagline: "Product strategy and features designed to increase Average Order Value",
      kind: "ground",
      year: "2025",
      tag: "Product Strategy",
      accent: "var(--brand)",
      image: projectZomatoCase,
      link: "/ground/zomatocase",
      bg: "#ffffff",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      id: "porter",
      title: "Porter Optimization",
      tagline: "ML-driven demand positioning optimizing driver earnings",
      kind: "ground",
      year: "2024",
      tag: "Product Ops",
      accent: "var(--brand)",
      image: projectPorter,
      link: "/ground/porter",
      bg: "#fec42e",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    }
  ];

  // Map vertical scroll (0 to 1) to horizontal translation (0% to -83.33% for 8 projects)
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-600vw"]);

  return (
    <div className="min-h-screen bg-[var(--background)]">

      <main className="relative flex w-full flex-col">
        {/* Hero Section */}
        <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-6 py-12 sm:py-16">
          <div className="dotted-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
          
          {/* Drifting logo cards */}
          <FloatingBadges />

          <div className="relative z-20 flex w-full max-w-6xl flex-col items-center select-none pt-12">
            <p className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--ink-soft)] sm:mb-8 sm:text-[11px]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="live-dot absolute inset-0 rounded-full bg-emerald-500"></span>
              </span>
              Available for work · {new Date().getFullYear()}
            </p>

            <h1 className="relative z-20 text-center font-sans font-extrabold text-[clamp(2.5rem,8.5vw,7.5rem)] leading-[0.95] tracking-tighter text-[var(--ink)]">
              <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[140%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-white/40 blur-2xl dark:bg-black/20" />
              
              {/* Aditya's letter-by-letter animations */}
              <span className="inline-block">
                {Array.from("aditya's ").map((char, index) => (
                  <span
                    key={index}
                    className="letter"
                    style={{ "--letter-delay": `${index * 0.06}s` } as React.CSSProperties}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              
              <Link to="/play" className="play-link">
                {Array.from("play").map((char, index) => (
                  <span
                    key={index}
                    className="letter"
                    style={{ "--letter-delay": `${(9 + index) * 0.06}s` } as React.CSSProperties}
                  >
                    {char}
                  </span>
                ))}
              </Link>
              <br />
              <Link to="/ground" className="ground-link">
                {Array.from("ground").map((char, index) => (
                  <span
                    key={index}
                    className="letter"
                    style={{ "--letter-delay": `${(13 + index) * 0.06}s` } as React.CSSProperties}
                  >
                    {char}
                  </span>
                ))}
              </Link>
            </h1>

            <p className="mx-auto mt-10 max-w-2xl text-center text-sm sm:text-[15px] md:text-base leading-relaxed text-[var(--ink-base)] px-4 sm:px-0">
              Co-Founder of <span className="font-semibold text-amber-600">INHAUS Coffee</span>. Growth intern at <span className="font-semibold" style={{ color: "#3D5AFE" }}>Inventive AI</span> (YC). <br className="hidden md:block"/>
              Working across data analytics, GTM loops, and the interfaces in between. <br className="hidden md:block"/>
              Click <Link className="font-semibold text-[var(--ink)] underline decoration-purple-400 decoration-2 underline-offset-4 hover:opacity-80" to="/play">play</Link> for visual work, or <Link className="font-semibold text-[var(--ink)] underline decoration-[var(--brand)] decoration-2 underline-offset-4 hover:opacity-80" to="/ground">ground</Link> for products.
            </p>

            <div className="mt-14 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-[var(--ink-mute)]">
              <span>── scroll ──</span>
              <div className="mt-2 h-8 w-[1.5px] overflow-hidden rounded-full bg-[var(--line-strong)]">
                <span className="block h-full w-full bg-[var(--foreground)]" style={{ animation: "bob 2.4s ease-in-out infinite" }}></span>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Ticker Marquee */}
        <section className="border-y border-[var(--line)] bg-[var(--foreground)] py-3 text-[var(--background)]">
          <div className="scroll-marquee py-3">
            <div className="scroll-marquee-track text-[clamp(1.2rem,3vw,2.2rem)] font-semibold tracking-tight uppercase">
              {Array(6).fill([
                "building products", "growth", "ai systems"
              ]).flat().map((skill, i) => (
                <span key={i} className="inline-flex items-center gap-3 px-6 select-none font-sans font-medium">
                  {skill}
                  <span className="inline-block h-2 w-2 rounded-full bg-current opacity-40"></span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Ghost Guide Selection */}
        <section className="relative px-6 py-14 sm:py-20 bg-[var(--background)]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--ink-soft)]">
              ── pick your guide ──
            </p>
          <h2 className="mt-4 text-balance text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.05] tracking-tight text-[var(--foreground)]">
              A companion to walk you through <span className="brand-gradient-text">the playground.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-[var(--ink-soft)]">
              Choose a ghost helper. They will dock at the bottom-left and guide you across the portfolio. Click to wake them up, or double-click to hide them.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
              {ghostGuides.map((ghost) => {
                const isSelected = activeGhost === ghost.id;
                return (
                  <button
                    key={ghost.id}
                    type="button"
                    onClick={() => onSelectGhost(ghost.id)}
                    className={`glass group relative flex flex-col items-center gap-2 rounded-2xl px-3 py-5 transition-all duration-300 hover:-translate-y-1 ${
                      isSelected
                        ? "ring-2 ring-[var(--brand)] shadow-lg"
                        : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute -top-2.5 right-3 inline-flex items-center gap-1 rounded-full bg-[var(--ink)] px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--background)]">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-450"></span>
                        you
                      </span>
                    )}
                    
                    {/* Render the full beautiful companion ghost SVG preview directly in the card */}
                    <div className="grid h-20 w-16 place-items-end pt-2 transition-transform duration-300 group-hover:scale-105">
                      <GhostSVG type={ghost.id} />
                    </div>

                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)] mt-2">
                      {ghost.name}
                    </span>
                    <span className="font-mono text-[8px] lowercase tracking-[0.14em] text-[var(--ink-soft)] -mt-1">
                      {ghost.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Responsive Showcase - Mobile Stack View */}
        <section className="xl:hidden flex flex-col gap-12 px-6 py-12 bg-white dark:bg-zinc-950">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
              Selected works
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">Recent creations</h2>
          </div>
          
          <div className="flex flex-col gap-10">
            {projects.map((proj) => (
              <article key={proj.id} className="flex flex-col gap-4">
                <Link to={proj.link} className="relative aspect-video w-full overflow-hidden rounded-[18px] outline-none">
                  <img src={proj.image} alt={proj.title} loading="lazy" className="absolute inset-0 h-full w-full object-contain p-2 hover:scale-105 transition-transform duration-500" />
                  <span className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-inset ring-white/10" />
                </Link>
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--tag-border)] bg-[var(--tag-bg)] px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    <span className="h-1 w-1 rounded-full" style={{ background: proj.accent }}></span>
                    {proj.tag} · {proj.year}
                  </span>
                  <h3 className="mt-2 text-[1.4rem] font-semibold leading-tight tracking-tight text-[var(--ink)]">
                    {proj.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-[var(--ink-soft)]">
                    {proj.tagline}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Desktop horizontal scroll showcase */}
        <section ref={containerRef} className="relative hidden xl:block w-full h-[600vh] bg-[var(--background)] border-t border-[var(--line)]">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            
            {/* INTERACTIVE FLOATING NAVIGATION DOTS BAR (MATCHES REFERENCE EXACTLY) */}
            <div className="absolute left-1/2 top-6 z-30 -translate-x-1/2">
              <div className="flex items-center gap-1.5 rounded-full border border-black/[0.05] dark:border-white/5 p-1.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg">
                {projects.map((proj, idx) => {
                  const isCurrent = activeIndex === idx;
                  return (
                    <button
                      key={proj.id}
                      type="button"
                      onClick={() => handleNavClick(idx)}
                      title={`Go to ${proj.title}`}
                      className="group relative grid h-10 w-10 shrink-0 place-items-center rounded-full text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
                    >
                      <span className={`z-10 transition-transform duration-300 ${isCurrent ? "scale-110 text-zinc-900 dark:text-zinc-100 font-bold" : "opacity-60 hover:opacity-100"}`}>
                        {proj.icon}
                      </span>
                      {isCurrent && (
                        <motion.span 
                          layoutId="activePill" 
                           className="absolute inset-0 bg-neutral-100 dark:bg-zinc-800 rounded-full border border-neutral-300/40 shadow-sm"
                           transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        />
                      )}
                      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {proj.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* INTERACTIVE COUNTER (MATCHES REFERENCE EXACTLY) */}
            <div className="absolute right-8 top-7 z-30 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-450 tabular-nums">
              0{activeIndex + 1}<span className="mx-1.5 text-neutral-250">/</span>0{projects.length}
            </div>

            {/* Main horizontal scrolling track with spacing showing adjacent cards */}
            <motion.div 
              style={{ x }} 
              className="absolute left-0 top-0 flex h-full pl-[9vw] w-max will-change-transform items-center"
            >
              {projects.map((proj, idx) => {
                const isCurrent = activeIndex === idx;
                return (
                  <div 
                    key={proj.id} 
                    className="relative flex h-full w-[82vw] flex-shrink-0 flex-col pb-16 pt-28 justify-between"
                    style={{ marginRight: "4vw" }}
                  >
                    {/* Scale and Dim Card Image based on Active State */}
                    <motion.div 
                      animate={{
                        scale: isCurrent ? 1 : 0.91,
                        opacity: isCurrent ? 1 : 0.45,
                      }}
                      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                      className="relative flex flex-1 min-h-0 items-center justify-center"
                    >
                      <div 
                        className="relative w-full max-w-[960px] overflow-hidden rounded-[24px] shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-500"
                        style={{ aspectRatio: "16 / 9", maxHeight: "100%", backgroundColor: proj.bg }}
                      >
                        {proj.video ? (
                          <video 
                            src={proj.video} 
                            poster={proj.image}
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="absolute inset-0 h-full w-full object-contain p-2 hover:scale-[1.02] transition-transform duration-700" 
                          />
                        ) : (
                          <img 
                             src={proj.image} 
                             alt={proj.title} 
                             className="absolute inset-0 h-full w-full object-contain p-2 hover:scale-[1.02] transition-transform duration-700" 
                          />
                        )}
                        <Link 
                          to={proj.link} 
                          className="absolute inset-0 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]" 
                        />
                        <span className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />
                      </div>
                    </motion.div>

                    {/* Showcase Meta info - Smooth Fade In based on active state */}
                    <motion.div 
                      animate={{ 
                        opacity: isCurrent ? 1 : 0,
                        y: isCurrent ? 0 : 12 
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="mx-auto mt-6 flex w-full max-w-[960px] items-end justify-between gap-6"
                    >
                      <div className="min-w-0">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--tag-border)] bg-[var(--tag-bg)] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--ink-soft)]">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: proj.accent }}></span>
                          {proj.tag}
                          <span className="text-neutral-350">·</span>
                          {proj.year}
                          <span className="text-neutral-350">·</span>
                          {`0${idx + 1}`}
                        </span>
                        <h2 className="mt-2 truncate text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-none tracking-tight">
                          {proj.title}
                        </h2>
                        <p className="mt-1 max-w-xl truncate text-[14px] text-[var(--ink-soft)]">
                          {proj.tagline}
                        </p>
                      </div>
                      
                      <Link
                        to={proj.link}
                        className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-[13px] font-semibold text-[var(--background)] hover:scale-[1.03] transition-transform duration-200"
                      >
                        Know more
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Dimension Doors */}
        <section className="relative px-6 pb-20 pt-16 bg-[var(--background)]">
          <div className="mx-auto max-w-6xl">
            <header className="mb-10 flex flex-col items-start gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                WANT THE FULL ARCHIVE?
              </p>
              <h2 className="text-[clamp(1.6rem,4vw,2.6rem)] font-semibold leading-[1.1] tracking-tight text-[var(--ink)]">
                Step into the dimension that fits the work you came for.
              </h2>
            </header>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
              {/* Left Door: Ground */}
              <Link 
                className="group relative isolate flex flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--tag-border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 dark:bg-zinc-900"
                to="/ground"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    DIM. 02 · /GROUND
                  </p>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--tag-border)] bg-white text-black transition-transform duration-300 group-hover:rotate-[-12deg]" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3.5 10.5 L10.5 3.5 M10.5 3.5 L5 3.5 M10.5 3.5 L10.5 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </div>
                
                <div className="mt-16">
                  <h3 className="text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold leading-none tracking-tight text-[var(--ink)]">
                    <span className="text-[var(--brand)]">The</span> product wing
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)] max-w-[34ch] leading-relaxed">
                    Research, systems, shipped software. Case studies written properly.
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {["Research", "Systems", "Mobile", "B2B"].map((chip) => (
                      <span key={chip} className="rounded-full border border-[var(--tag-border)] bg-white/70 dark:bg-black/30 px-3 py-0.5 text-[11px] font-medium text-[var(--ink-soft)]">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              {/* Right Door: Play */}
              <Link 
                className="group relative isolate flex flex-col justify-between overflow-hidden rounded-[24px] border border-[var(--tag-border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5 dark:bg-zinc-900"
                to="/play"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                    DIM. 02 · /PLAY
                  </p>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--tag-border)] bg-white text-black transition-transform duration-300 group-hover:rotate-[-12deg]" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3.5 10.5 L10.5 3.5 M10.5 3.5 L5 3.5 M10.5 3.5 L10.5 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </div>
                
                <div className="mt-16">
                  <h3 className="text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold leading-none tracking-tight text-[var(--ink)]">
                    <span className="text-[var(--accent)]">The</span> visual archive
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)] max-w-[34ch] leading-relaxed">
                    Posters, type, motion loops, identity. The visual side of the practice.
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {["Motion", "Type", "Identity", "Loops"].map((chip) => (
                      <span key={chip} className="rounded-full border border-[var(--tag-border)] bg-white/70 dark:bg-black/30 px-3 py-0.5 text-[11px] font-medium text-[var(--ink-soft)]">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Live Sites Section - Matches Reference Exactly */}
        <section className="relative px-6 pb-20 sm:pb-24 bg-[var(--background)]">
          <div className="mx-auto max-w-6xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.05 }
                }
              }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              
              {/* Card 1: INHAUS Coffee */}
              <motion.a 
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                href="https://inhauscoffee.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-strong group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-black/5 hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-zinc-900"
                style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 18px 40px -22px rgba(15,23,42,0.1)" }}
              >
                <div className="relative h-40 overflow-hidden border-b border-black/5 bg-white sm:h-44">
                  <div className="absolute inset-x-0 top-0 z-20 flex items-center gap-2 border-b border-black/5 bg-white/85 px-3 py-2 backdrop-blur-md dark:bg-zinc-950/80">
                    <span className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/20"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/20"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/20"></span>
                    </span>
                    <span className="ml-1 truncate font-mono text-[9px] text-zinc-500">inhauscoffee.com</span>
                  </div>
                  <iframe src="https://inhauscoffee.com" title="INHAUS Coffee Live Preview" className="absolute inset-x-0 bottom-0 top-[34px] h-[calc(100%-34px)] w-full border-none pointer-events-none" />
                  <span className="pointer-events-none absolute right-3 top-[42px] z-20 inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white/95 px-2 py-0.5 font-mono text-[8px] font-medium uppercase tracking-[0.2em] text-zinc-650 backdrop-blur-md dark:bg-zinc-900 dark:text-zinc-300">
                    <span className="h-1 w-1 rounded-full bg-emerald-500"></span>live
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h3 className="text-[16px] font-semibold leading-tight tracking-tight text-[var(--ink)]">INHAUS Coffee</h3>
                    <p className="mt-0.5 text-[11px] font-medium text-zinc-500">D2C Coffee Concentrate · Co-Founder</p>
                  </div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400 mt-1">GTM, subscription setup, email marketing</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                     <span className="truncate font-mono text-[9px] text-zinc-400">inhauscoffee.com</span>
                     <span className="inline-flex items-center gap-1 rounded-full bg-black dark:bg-zinc-800 px-3 py-1 text-[9px] font-semibold text-white transition-transform group-hover:scale-[1.03]">
                       Visit
                       <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                         <path d="M3 9 L9 3 M9 3 L4.5 3 M9 3 L9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                       </svg>
                     </span>
                  </div>
                </div>
              </motion.a>

              {/* Card 2: Zupper App */}
              <motion.a 
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                href="https://play.google.com/store/apps/details?id=com.zupper.b2b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-strong group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-black/5 hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-zinc-900"
                style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 18px 40px -22px rgba(15,23,42,0.1)" }}
              >
                <div className="relative h-40 overflow-hidden border-b border-black/5 bg-white sm:h-44">
                  <div className="absolute inset-x-0 top-0 z-20 flex items-center gap-2 border-b border-black/5 bg-white/85 px-3 py-2 backdrop-blur-md dark:bg-zinc-950/80">
                    <span className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/20"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/20"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/20"></span>
                    </span>
                    <span className="ml-1 truncate font-mono text-[9px] text-zinc-500">zupper.com/app</span>
                  </div>
                  <iframe src="https://play.google.com/store/apps/details?id=com.zupper.b2b" title="Zupper B2B App Live Preview" className="absolute inset-x-0 bottom-0 top-[34px] h-[calc(100%-34px)] w-full border-none pointer-events-none" />
                  <span className="pointer-events-none absolute right-3 top-[42px] z-20 inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white/95 px-2 py-0.5 font-mono text-[8px] font-medium uppercase tracking-[0.2em] text-zinc-650 backdrop-blur-md dark:bg-zinc-900 dark:text-zinc-300">
                    <span className="h-1 w-1 rounded-full bg-emerald-500"></span>live
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h3 className="text-[16px] font-semibold leading-tight tracking-tight text-[var(--ink)]">Zupper B2B App</h3>
                    <p className="mt-0.5 text-[11px] font-medium text-zinc-500">Multi-Commerce App · Designer</p>
                  </div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400 mt-1">45+ screens, user journeys, developer handoffs</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                     <span className="truncate font-mono text-[9px] text-zinc-400">playstore.com</span>
                     <span className="inline-flex items-center gap-1 rounded-full bg-black dark:bg-zinc-800 px-3 py-1 text-[9px] font-semibold text-white transition-transform group-hover:scale-[1.03]">
                       Visit
                       <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                         <path d="M3 9 L9 3 M9 3 L4.5 3 M9 3 L9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                       </svg>
                     </span>
                  </div>
                </div>
              </motion.a>

              {/* Card 3: FounderOS Hub */}
              <motion.a 
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                href="https://founderos.co" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-strong group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-black/5 hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-zinc-900"
                style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 18px 40px -22px rgba(15,23,42,0.1)" }}
              >
                <div className="relative h-40 overflow-hidden border-b border-black/5 bg-white sm:h-44">
                  <div className="absolute inset-x-0 top-0 z-20 flex items-center gap-2 border-b border-black/5 bg-white/85 px-3 py-2 backdrop-blur-md dark:bg-zinc-950/80">
                    <span className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/20"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/20"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/20"></span>
                    </span>
                    <span className="ml-1 truncate font-mono text-[9px] text-zinc-500">founderos.co</span>
                  </div>
                  <iframe src="https://founderos.co/" title="FounderOS Hub Live Preview" className="absolute inset-x-0 bottom-0 top-[34px] h-[calc(100%-34px)] w-full border-none pointer-events-none" />
                  <span className="pointer-events-none absolute right-3 top-[42px] z-20 inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white/95 px-2 py-0.5 font-mono text-[8px] font-medium uppercase tracking-[0.2em] text-zinc-650 backdrop-blur-md dark:bg-zinc-900 dark:text-zinc-300">
                    <span className="h-1 w-1 rounded-full bg-emerald-500"></span>live
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h3 className="text-[16px] font-semibold leading-tight tracking-tight text-[var(--ink)]">FounderOS Hub</h3>
                    <p className="mt-0.5 text-[11px] font-medium text-zinc-500">Shopify Automation Hub · Dev</p>
                  </div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400 mt-1">Webhook processing queues, custom admin panels</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                     <span className="truncate font-mono text-[9px] text-zinc-400">founderos.co</span>
                     <span className="inline-flex items-center gap-1 rounded-full bg-black dark:bg-zinc-800 px-3 py-1 text-[9px] font-semibold text-white transition-transform group-hover:scale-[1.03]">
                       Visit
                       <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                         <path d="M3 9 L9 3 M9 3 L4.5 3 M9 3 L9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                       </svg>
                     </span>
                  </div>
                </div>
              </motion.a>

              {/* Card 4: IITJ Counseling Portal */}
              <motion.a 
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                href="https://counsel.iitj.ac.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="glass-strong group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-black/5 hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-zinc-900"
                style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 18px 40px -22px rgba(15,23,42,0.1)" }}
              >
                <div className="relative h-40 overflow-hidden border-b border-black/5 bg-white sm:h-44">
                  <div className="absolute inset-x-0 top-0 z-20 flex items-center gap-2 border-b border-black/5 bg-white/85 px-3 py-2 backdrop-blur-md dark:bg-zinc-950/80">
                    <span className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/20"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/20"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/20"></span>
                    </span>
                    <span className="ml-1 truncate font-mono text-[9px] text-zinc-500">counsel.iitj.ac.in</span>
                  </div>
                  <iframe src="https://iitj.ac.in/" title="IITJ Counseling Portal Live Preview" className="absolute inset-x-0 bottom-0 top-[34px] h-[calc(100%-34px)] w-full border-none pointer-events-none" />
                  <span className="pointer-events-none absolute right-3 top-[42px] z-20 inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-white/95 px-2 py-0.5 font-mono text-[8px] font-medium uppercase tracking-[0.2em] text-zinc-650 backdrop-blur-md dark:bg-zinc-900 dark:text-zinc-300">
                    <span className="h-1 w-1 rounded-full bg-emerald-500"></span>live
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h3 className="text-[16px] font-semibold leading-tight tracking-tight text-[var(--ink)]">IITJ Support Portal</h3>
                    <p className="mt-0.5 text-[11px] font-medium text-zinc-500">NLP Student Hotline · Lead</p>
                  </div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-400 mt-1">Student support portal, priority sorting scripts</p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                     <span className="truncate font-mono text-[9px] text-zinc-400">counsel.iitj.ac.in</span>
                     <span className="inline-flex items-center gap-1 rounded-full bg-black dark:bg-zinc-800 px-3 py-1 text-[9px] font-semibold text-white transition-transform group-hover:scale-[1.03]">
                       Visit
                       <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                         <path d="M3 9 L9 3 M9 3 L4.5 3 M9 3 L9 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                       </svg>
                     </span>
                  </div>
                </div>
              </motion.a>

            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Index;
