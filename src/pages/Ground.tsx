import { motion, AnimatePresence } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";

// Import local project assets
import projectFounderOS from "@/assets/project-founderos-new.png";
import projectAIAnalyst from "@/assets/project-aianalyst-new.png";
import projectInstamart from "@/assets/project-instamart-new.png";
import projectZomatoCase from "@/assets/project-zomatocase-new.png";
import projectInhaus from "@/assets/inhaus-screenshot.png";
import projectZupper from "@/assets/live-zupper.jpg";
import projectVantage from "@/assets/project-vantage.png";
import projectPorter from "@/assets/project-porter-new.png";
import projectZomatoReviews from "@/assets/project-zomatocase-reviews.png";


import projectFinancialMarket from "@/assets/iit-financial-market.jpg";
import projectSimpleThreads from "@/assets/iit-simple-threads.jpg";
import projectGoldPrediction from "@/assets/colab-gold-prediction.jpg";
import projectTitanicPrediction from "@/assets/colab-titanic-prediction.jpg";
import projectStreamverseEtl from "@/assets/colab-streamverse-etl.jpg";

const Ground = () => {
  const location = useLocation();
  const processes = [
    { num: "01", name: "Listen", desc: "User interviews, surveys, and competitive audits. I begin from the problem, not the code." },
    { num: "02", name: "Structure", desc: "Information Architecture, user flows, and sketches. Organising complexity into clear, logical paths." },
    { num: "03", name: "Design", desc: "High-fidelity wireframes, UI elements, and prototypes in Figma. Iterating hard on the core flows." },
    { num: "04", name: "Build", desc: "Working in the repo, validating logic, testing responsiveness. Design is coding, not handoffs." },
    { num: "05", name: "Refine", desc: "Post-launch reviews, analytics audits, usability logs. Improving incrementally sprint by sprint." },
  ];

  const allProjects: Array<{
    id: string;
    title: string;
    tagline: string;
    bg: string;
    tags: string[];
    image: string;
    bullets: string[];
    video?: string;
    externalLink?: string;
  }> = [
    {
      id: "founderos",
      title: "FounderOS: Business Automation Hub",
      tagline: "AI-driven order reporting and operations workflow automation",
      bg: "#0a0a0a",
      tags: ["AI", "Shopify", "Operations"],
      image: projectFounderOS,
      bullets: [
        "Engineered FounderOS to automate reporting across 55+ orders, integrating Shopify and Razorpay for seamless operations.",
        "Developed 6 AI workflows analyzing 28+ business metrics to identify early growth opportunities and operational risks."
      ]
    },
    {
      id: "aianalyst",
      title: "AI Feedback Analyst System",
      tagline: "Semantic search and automated PRD generation system",
      bg: "#ffffff",
      tags: ["AI & RAG", "Vector Search", "Analytics"],
      image: projectAIAnalyst,
      bullets: [
        "Developed an AI system that processed 10,000+ feedback records using embeddings and vector search to spot pain points.",
        "Built a scoring engine and RAG based Q&A tool that auto-generates product requirement docs and metrics across 6 dashboards."
      ]
    },
    {
      id: "instamart",
      title: "Swiggy Instamart UX & AOV Case Study",
      tagline: "Product strategy and user research proposing features to boost Average Order Value",
      bg: "#ffffff",
      tags: ["UX Research", "Product Strategy", "AOV Design"],
      image: projectInstamart,
      bullets: [
        "Conducted research with 40 users, benchmarking and segmentation to propose features targeting a 10% increase in AOV.",
        "Crafted a product strategy with 8+ success metrics and prioritized solutions to improve profitability."
      ]
    },
    {
      id: "financial-market",
      title: "Understanding Financial Market Dynamics",
      tagline: "A comprehensive capstone project analyzing how market shocks affect major Indian financial institutions using Linear Algebra and Python",
      bg: "#1C0A0A",
      tags: ["Linear Algebra", "Python", "Matrix Shock Simulation"],
      image: projectFinancialMarket,
      bullets: [
        "Analyzed interbank exposures and stress propagation waves across major Indian banks (SBI, ICICI, HDFC, Axis).",
        "Constructed a 4x4 matrix representation modeling cascading capital shortfalls, verifying stability conditions."
      ]
    },
    {
      id: "zomatocase",
      title: "Zomato User Cohort Analysis",
      tagline: "UX research and segmentation study targeting high-frequency monthly users",
      bg: "#ffffff",
      tags: ["Research", "User Segmentation", "Growth"],
      image: projectZomatoCase,
      bullets: [
        "Conducted 48 user surveys and 4 interviews, identifying review friction and low perceived value as key adoption barriers.",
        "Segmented 17M monthly users, prioritizing users with 3+ monthly orders as the highest-impact cohort."
      ]
    },
    {
      id: "zomato-text-reviews",
      title: "Zomato: Increasing Text Reviews",
      tagline: "Speech-to-text review flows and NLU quality pipelines designed to boost user text reviews",
      bg: "#ffffff",
      tags: ["Product PRD", "Speech-to-Text", "NLU Systems"],
      image: projectZomatoReviews,
      bullets: [
        "Prototyped a voice-to-text review flow using ASR models, reducing review time to under 30 seconds.",
        "Calculated business outcome mapping showing a projected lift of $0.836M in annual Gross Order Value (GOV)."
      ]
    },
    {
      id: "medagent",
      title: "MedAgent AI: Healthcare Sales Framework",
      tagline: "POC-to-contract framework and objection-handling protocol de-risking enterprise contracts",
      bg: "#0B2545",
      tags: ["AI Agents", "Healthcare B2B", "Sales Strategy"],
      image: projectAIAnalyst,
      bullets: [
        "Designed a POC-to-contract sales framework using a 30-day proof gate to de-risk a ₹12L/month enterprise contract.",
        "Built a comprehensive COO/CIO objection-handling protocol, achieving 90%+ contact rate within 48 hours across 6 partner hospitals."
      ]
    },
    {
      id: "vantage",
      title: "Vantage AI: Manufacturing GTM Strategy",
      tagline: "Proof-first GTM strategy and marketing funnel optimizing AI adoption for manufacturing ICPs",
      bg: "#ffffff",
      tags: ["Go-To-Market", "B2B SaaS", "Marketing Funnel"],
      image: projectVantage,
      bullets: [
        "Designed a proof-first GTM strategy for AI adoption across 3 manufacturing ICPs using 90-day pilot validation cycles.",
        "Architected a 4-stage marketing funnel with a ₹1.5L/month budget, targeting 40 qualified calls and 8 conversion pilots in 6 months."
      ]
    },
    {
      id: "greenscan",
      title: "AI GreenScan: Eco-Classification App",
      tagline: "First-place product strategy and AI recommendation engine classifying 20+ materials for sustainable disposal",
      bg: "#064E3B",
      tags: ["AI Product", "Computer Vision", "Sustainability"],
      image: projectFounderOS,
      bullets: [
        "Won 1st place among 8 competing teams by leading product strategy for an eco-classification mobile app.",
        "Architected a roadmap detailing a 10K-image dataset, 20+ material classes, and an AI recommendation engine for sustainable actions."
      ]
    },
    {
      id: "porter",
      title: "Porter: Driver Retention Strategy",
      tagline: "ML-driven demand positioning and retention strategy optimizing driver earnings on a 38K marketplace",
      bg: "#fec42e",
      tags: ["Marketplace Ops", "User Retention", "Data Strategy"],
      image: projectPorter,
      bullets: [
        "Identified supply-demand imbalances in a 38K-driver marketplace, designing a retention strategy to boost 90-day retention from 42% to 60%.",
        "Designed an ML-driven demand positioning model to increase driver earnings by 41% and acceptance rates from 66% to 88%."
      ]
    },
    {
      id: "hackathon25",
      title: "MESA Hackathon: AI Wedding Planner",
      tagline: "Intelligent venue-matching platform and recommendation engine designed and shipped in 24 hours",
      bg: "#4A1D96",
      tags: ["AI Matching", "Product Design", "Rapid Prototyping"],
      image: projectGoldPrediction,
      bullets: [
        "Built an AI-driven wedding planner platform matching couples with 100+ venues and local vendors during the 24-hour MESA Hackathon.",
        "Engineered a multi-signal recommendation engine parsing 10+ preferences across 500+ vendor profiles with automated triggers."
      ]
    },
    {
      id: "nurture",
      title: "Nurture: A Plant Care Companion",
      tagline: "End-to-end UI/UX design of a plant care app — research, personas, IA, and 25+ high-fidelity screens",
      bg: "#0f2d1a",
      tags: ["UI/UX Design", "Mobile App", "User Research"],
      image: "https://framerusercontent.com/images/0RKQNlUmdUNZZYuxu16clCX0vQ.png",
      bullets: [
        "Led full UX design process: qualitative interviews, quantitative surveys, competitor analysis across 5 apps.",
        "Designed 25+ high-fidelity screens covering onboarding, plant management, AI scanner, community, and settings."
      ]
    },
    {
      id: "zoom",
      title: "Zoom for Performing Artists",
      tagline: "Website redesign and UX strategy tailored for the performing arts community on Zoom",
      bg: "#0e1c2b",
      tags: ["UI/UX Design", "Website Redesign", "Figma"],
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f8806a232014615.6895c46a6201d.png",
      bullets: [
        "Redesigned Zoom's product experience for performing artists, including flow optimizations and hi-fi mockups.",
        "Delivered full case study documentation with Behance-quality visual storytelling across 6 presentation panels."
      ]
    },
    {
      id: "inhaus",
      title: "INHAUS Coffee: Brand Launch & D2C Growth",
      tagline: "Co-founded and scaled D2C coffee brand from 0 to 1",
      bg: "#ffffff",
      tags: ["Co-Founder", "Growth Marketing", "D2C Storefront"],
      image: projectInhaus,
      bullets: [
        "Co-founded and spearheaded the launch of a D2C coffee brand, generating ₹65k+ in revenue.",
        "Built outbound GTM strategy converting 32% of trials, and automated campaigns for 5,000+ leads."
      ]
    },
    {
      id: "zupper",
      title: "Zupper: B2B Marketplace UI/UX Design",
      tagline: "onboarding, marketplace auctions, Store+, and BNPL financing screens",
      bg: "#101D2B",
      tags: ["UI/UX Design", "B2B SaaS", "Mobile App"],
      image: projectZupper,
      bullets: [
        "Designed 45+ screens across onboarding, auctions, marketplace, Store+, and BNPL financing as first design hire.",
        "Created role-based onboarding for 3 user types, reducing onboarding steps by 30%."
      ]
    },

    {
      id: "simple-threads",
      title: "Simple Threads Business & Campaign Analysis",
      tagline: "Excel analytics report and campaign ROI audits for retail fashion collections",
      bg: "#0A1F2C",
      tags: ["Data Analytics", "Excel", "Business Strategy"],
      image: projectSimpleThreads,
      bullets: [
        "Compiled and structured transaction, discount, and buyer profiles across Q1 2025.",
        "Audited end-of-year discount campaign effectiveness to optimize ROI projections."
      ]
    },
    {
      id: "gold-prediction",
      title: "Gold Price Prediction Model",
      tagline: "Linear Regression machine learning forecasting model in Python with 99.97% accuracy",
      bg: "#0F1626",
      tags: ["Python", "Machine Learning", "Linear Regression"],
      image: projectGoldPrediction,
      bullets: [
        "Trained model on 10 years of historical gold, silver, oil, and market indexes.",
        "Achieved a MAPE score of 0.22% for short-term trade risk mitigation."
      ]
    },
    {
      id: "titanic-prediction",
      title: "Titanic Survival Prediction Model",
      tagline: "Logistic Regression classification model predicting passenger survival probabilities",
      bg: "#1A1A24",
      tags: ["Python", "Classification", "Logistic Regression"],
      image: projectTitanicPrediction,
      bullets: [
        "Processed demographic and ticketing records through median age imputers.",
        "Evaluated features using correlation maps, achieving ~80% test accuracy."
      ]
    },
    {
      id: "streamverse-etl",
      title: "Streamverse ETL watch history pipeline",
      tagline: "Python data engineering watch logs ingestion pipeline with normalization",
      bg: "#120B1C",
      tags: ["Data Engineering", "ETL", "Python"],
      image: projectStreamverseEtl,
      bullets: [
        "Engineered an ETL watch history normalization script parsing country and ratings.",
        "Normalized timestamps and resolved session inconsistencies before SQL upload."
      ]
    }
  ];

  return (
    <div className="dim min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--brand)] selection:text-white pb-16">
      {/* Return Home Link */}
      <a 
        aria-label="Return to landing page"
        className="group fixed left-4 top-4 z-50 inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--foreground)] transition-all duration-200 hover:-translate-y-0.5"
        href="/"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M9 6H3M3 6L6 3M3 6L6 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>home</span>
      </a>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.05 }
          }
        }}
        className="relative flex min-h-[85svh] w-full items-center px-6 pb-12 pt-24 md:pt-28"
      >
        <div className="dotted-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col items-start">
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--ink-base)]"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="live-dot absolute inset-0 rounded-full bg-[var(--brand)]"></span>
              </span>
              <span>/ground · product work</span>
              <span className="text-[var(--ink-mute)]">·</span>
              <span className="serif-italic normal-case tracking-tight text-[var(--ink-soft)]">dark dim.</span>
            </motion.p>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="hero-word text-[clamp(2.5rem,8vw,6.5rem)] text-[var(--foreground)] mt-6"
            >
              Design <span className="serif-italic font-light text-[var(--ink-soft)]">for</span><br/>
              <span className="brand-gradient-text">people, not pages.</span>
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="mt-8 max-w-xl text-base leading-relaxed text-[var(--ink-base)] md:text-lg"
            >
              I lead product work end-to-end — research, information architecture, interaction, and systems. I care about the unglamorous screens that make software actually work.
            </motion.p>
            
            {/* Metrics */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-[var(--line-strong)] pt-6 w-full"
            >
              <div className="border-t border-[var(--line-strong)] pt-3">
                <p className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">2+ yrs</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">shipping product</p>
              </div>
              <div className="border-t border-[var(--line-strong)] pt-3">
                <p className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">12+</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">case studies</p>
              </div>
              <div className="border-t border-[var(--line-strong)] pt-3">
                <p className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">4,000+</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">research calls</p>
              </div>
              <div className="border-t border-[var(--line-strong)] pt-3">
                <p className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">0</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">ego in the room</p>
              </div>
            </motion.div>
          </div>

          {/* Interactive Core Graphic Card */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
            }}
            className="relative"
          >
            <div className="glass-strong rounded-[28px] p-8 border border-zinc-800 bg-zinc-950/80 shadow-2xl">
              <div className="relative mx-auto aspect-square w-full max-w-sm flex items-center justify-center">
                <div className="absolute w-[80%] h-[80%] border border-zinc-800 rounded-full border-dashed animate-spin" style={{ animationDuration: "60s" }} />
                <div className="absolute w-[50%] h-[50%] border border-zinc-800 rounded-full border-dashed" />
                <div className="z-10 rounded-full bg-blue-500 px-6 py-6 text-center shadow-lg">
                  <p className="font-mono text-xs font-bold text-black uppercase tracking-widest">USER</p>
                </div>
                <div className="absolute top-[10%] left-[10%] rounded-full bg-zinc-900 border border-zinc-800 p-2.5 text-[9px] font-mono tracking-widest text-zinc-400">RESEARCH</div>
                <div className="absolute bottom-[10%] right-[10%] rounded-full bg-zinc-900 border border-zinc-800 p-2.5 text-[9px] font-mono tracking-widest text-zinc-400">SPECS</div>
                <div className="absolute top-[10%] right-[10%] rounded-full bg-zinc-900 border border-zinc-800 p-2.5 text-[9px] font-mono tracking-widest text-zinc-400">TEST</div>
                <div className="absolute bottom-[10%] left-[10%] rounded-full bg-zinc-900 border border-zinc-800 p-2.5 text-[9px] font-mono tracking-widest text-zinc-400">BUILD</div>
              </div>
              <div className="mt-6 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-500">
                <span>fig. 01</span>
                <span className="italic normal-case tracking-tight text-zinc-400">human centered execution loop</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Scrolling Ticker Marquee */}
      <section className="border-y border-[var(--line)] py-3" style={{ background: "var(--soft-blue)" }}>
        <div className="scroll-marquee py-4">
          <div className="scroll-marquee-track text-[clamp(1.2rem,3.8vw,3rem)] font-semibold tracking-tight text-[var(--foreground)]">
            {["research", "information architecture", "interaction design", "design systems", "onboarding", "growth", "b2b", "mobile",
              "research", "information architecture", "interaction design", "design systems", "onboarding", "growth", "b2b", "mobile"
            ].map((skill, i) => (
              <span key={i} className="inline-flex items-center gap-3 sm:gap-4 px-3 select-none">
                {skill}
                <span className="inline-block h-2 w-2 rounded-full bg-current opacity-40"></span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Rebuilt Showcase: Grid displaying ALL projects */}
      <section className="relative px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <header className="mb-16 flex flex-col items-start gap-3 sm:mb-20">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--ink-faint)]">02 — Selected case studies</p>
            <h2 className="text-[clamp(1.8rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-[var(--foreground)]">Case studies, <span className="serif-italic font-light">written properly.</span></h2>
            <p className="max-w-xl text-sm text-[var(--ink-base)]">Click any tile to open the full case study.</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {allProjects.map((proj, projIdx) => (
              <motion.article 
                key={proj.id} 
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1], delay: projIdx * 0.04 }}
                className="group relative flex flex-col transition-all duration-300 hover:-translate-y-2"
                style={{
                  filter: "drop-shadow(0 0 0 transparent)",
                }}
              >
                {/* Thumbnail */}
                <div 
                  className="relative w-full overflow-hidden rounded-[20px]"
                  style={{ aspectRatio: "16/10", backgroundColor: proj.bg }}
                >
                  {proj.video ? (
                    <video 
                      src={proj.video} 
                      poster={proj.image}
                      autoPlay loop muted playsInline 
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                    />
                  ) : (
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      loading="lazy" 
                      className={`absolute inset-0 h-full w-full ${
                        ['vantage', 'zomatocase', 'zomato-text-reviews', 'porter', 'instamart', 'aianalyst', 'founderos', 'inhaus', 'nurture', 'zoom'].includes(proj.id) 
                          ? 'object-contain p-3' 
                          : 'object-cover'
                      } transition-transform duration-500 group-hover:scale-[1.03]`} 
                    />
                  )}

                  {/* Top tag chip */}
                  <div className="absolute left-3 top-3 z-20 pointer-events-none">
                    <span className="glass inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--foreground)]">
                      <span className="h-1 w-1 rounded-full bg-[var(--brand)]"></span>
                      {proj.tags[0]}
                    </span>
                  </div>

                  {/* Hover arrow */}
                  <span className="pointer-events-none absolute right-3 top-3 z-20 grid h-7 w-7 place-items-center rounded-full bg-white text-black opacity-0 shadow-md group-hover:opacity-100 transition-all duration-200">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>

                  {proj.externalLink ? (
                    <Link to={proj.externalLink} className="absolute inset-0 z-10 outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2" />
                  ) : (
                    <Link to={`/ground/${proj.id}`} className="absolute inset-0 z-10 outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2" />
                  )}
                </div>

                {/* Card body */}
                <div className="mt-4 flex flex-col gap-1.5 px-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand)]">case study</span>
                    <div className="flex gap-1">
                      {proj.tags.slice(1, 3).map((tag) => (
                        <span key={tag} className="rounded-full border border-[var(--line-strong)] px-2 py-0.5 text-[9px] font-mono text-[var(--ink-mute)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-[1.1rem] font-semibold leading-snug tracking-tight text-[var(--foreground)] group-hover:text-[var(--brand)] transition-colors duration-200">
                    {proj.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[var(--ink-base)] font-light">
                    {proj.tagline}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <header className="mb-14 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--ink-faint)]">01 — How I work</p>
              <h2 className="mt-3 text-[clamp(1.8rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-[var(--foreground)]">A small, <span className="serif-italic font-light">stubborn</span> process.</h2>
            </div>
            <p className="max-w-sm text-sm text-[var(--ink-base)] md:text-right">Five core moves on every project — from plant care logs to AI security tools.</p>
          </header>
          
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {processes.map((proc, index) => (
              <motion.li 
                key={index} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
                className="glass relative flex flex-col rounded-2xl p-6"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--brand)]">{proc.num}</span>
                  <span aria-hidden="true" className="block h-px flex-1 mx-3 bg-[var(--line)]"></span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-mute)]">/05</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">{proc.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-base)]">{proc.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 03 - When the screens go dark */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative px-4 pb-16 sm:px-6 sm:pb-24"
      >
        <div className="glass-strong mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-[24px] p-6 sm:rounded-[28px] sm:p-10 md:flex-row md:items-center md:justify-between border border-[var(--line-strong)]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">03 — When the screens go dark</p>
            <h3 className="mt-2 text-[clamp(1.4rem,3vw,2.2rem)] font-semibold leading-tight tracking-tight text-[var(--foreground)]">
              Communities <span className="serif-italic font-light">&</span> games I'm in.
            </h3>
            <p className="mt-2 max-w-md text-sm text-[var(--ink-base)]">
              Design communities on Discord &amp; Behance, and the quiet games that keep my attention span working.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {/* Discord */}
            <div className="glass inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-2 pr-3.5">
              <span 
                className="relative grid place-items-center h-10 w-10 rounded-[10px] text-white" 
                style={{
                  background: "linear-gradient(180deg, color-mix(in oklab, #5865F2 70%, white) 0%, #5865F2 55%, color-mix(in oklab, #5865F2 88%, black) 100%)",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.55) inset, 0 -1px 1px rgba(0,0,0,0.12) inset",
                }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.078.037c-.211.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.618-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.058a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.22 14.22 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.007.128 12.3 12.3 0 0 1-1.873.891.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
                </svg>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-mono uppercase tracking-[0.16em] text-[var(--ink-soft)] text-[10px]">chat</span>
                <span className="font-semibold text-[var(--foreground)] text-[13px]">Discord</span>
              </div>
            </div>

            {/* Behance */}
            <a href="https://www.behance.net/adityajamdhade6" target="_blank" rel="noopener noreferrer" className="pointer-events-auto inline-block">
              <div className="glass inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-2 pr-3.5">
                <span 
                  className="relative grid place-items-center h-10 w-10 rounded-[10px] text-white" 
                  style={{
                    background: "linear-gradient(180deg, color-mix(in oklab, #0057FF 70%, white) 0%, #0057FF 55%, color-mix(in oklab, #0057FF 88%, black) 100%)",
                    boxShadow: "0 1px 0 rgba(255,255,255,0.55) inset, 0 -1px 1px rgba(0,0,0,0.12) inset",
                  }}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M7.799 5.69c.612 0 1.167.05 1.67.155.502.105.93.273 1.284.504.353.23.63.55.829.948.198.4.297.897.297 1.494 0 .647-.15 1.186-.449 1.618-.299.432-.739.786-1.32 1.062.79.227 1.38.625 1.77 1.194.39.57.585 1.257.585 2.062 0 .65-.125 1.214-.377 1.69-.25.477-.59.87-1.015 1.177-.426.308-.913.54-1.461.69a6.48 6.48 0 0 1-1.733.222H0V5.69h7.799Zm-.449 5.155c.502 0 .916-.12 1.243-.358.327-.239.491-.626.491-1.162 0-.298-.054-.541-.16-.73a1.18 1.18 0 0 0-.433-.456 1.713 1.713 0 0 0-.625-.225 4.2 4.2 0 0 0-.736-.06H3.135v2.99h4.215Zm.181 5.407c.275 0 .54-.027.794-.08.252-.053.475-.142.67-.268.193-.125.347-.295.46-.508.114-.213.17-.484.17-.81 0-.644-.184-1.104-.55-1.38-.367-.277-.852-.416-1.455-.416H3.135v3.462h4.396Zm8.46.061c.406.395.99.593 1.75.593.544 0 1.013-.137 1.403-.41.392-.275.633-.566.72-.874h2.614c-.418 1.298-1.059 2.224-1.924 2.784-.864.56-1.91.838-3.135.838-.848 0-1.615-.137-2.296-.41a5.12 5.12 0 0 1-1.738-1.167 5.25 5.25 0 0 1-1.098-1.817 6.44 6.44 0 0 1-.39-2.285c0-.824.134-1.586.4-2.286.266-.7.641-1.304 1.128-1.815.486-.51 1.066-.911 1.738-1.203.672-.293 1.416-.439 2.228-.439.908 0 1.7.176 2.376.528.677.35 1.233.82 1.672 1.406.436.585.751 1.254.944 2.006.194.752.26 1.545.206 2.38h-7.558c.035.898.273 1.577.679 1.97Zm3.104-5.324c-.323-.355-.86-.532-1.518-.532-.428 0-.785.073-1.068.217-.283.144-.52.323-.711.534-.182.21-.309.43-.383.658-.074.23-.117.428-.127.596h4.684c-.07-.745-.309-1.215-.877-1.473ZM15.34 6.97h5.76v1.39h-5.76V6.97Z" />
                  </svg>
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="font-mono uppercase tracking-[0.16em] text-[var(--ink-soft)] text-[10px]">design</span>
                  <span className="font-semibold text-[var(--foreground)] text-[13px]">Behance</span>
                </div>
              </div>
            </a>

            {/* Temple Run */}
            <div className="glass inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-2 pr-3.5">
              <span 
                className="relative grid place-items-center h-10 w-10 rounded-[10px] text-white" 
                style={{
                  background: "linear-gradient(180deg, color-mix(in oklab, #A1541F 70%, white) 0%, #A1541F 55%, color-mix(in oklab, #A1541F 88%, black) 100%)",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.55) inset, 0 -1px 1px rgba(0,0,0,0.12) inset",
                }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 2.5 9.5 6h5L12 2.5ZM7 7l-1.5 2.5h13L17 7H7Zm-2 4-1.5 2.5h17L18 11H5Zm-2 4-1 2.5h20l-1-2.5H3Zm-1 4v2h22v-2H2Z" />
                </svg>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-mono uppercase tracking-[0.16em] text-[var(--ink-soft)] text-[10px]">play</span>
                <span className="font-semibold text-[var(--foreground)] text-[13px]">Temple Run</span>
              </div>
            </div>

            {/* Clash of Clans */}
            <div className="glass inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-2 pr-3.5">
              <span 
                className="relative grid place-items-center h-10 w-10 rounded-[10px] text-black" 
                style={{
                  background: "linear-gradient(180deg, color-mix(in oklab, #F7B500 70%, white) 0%, #F7B500 55%, color-mix(in oklab, #F7B500 88%, black) 100%)",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.55) inset, 0 -1px 1px rgba(0,0,0,0.12) inset",
                }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M6.5 5.5C6 4.5 5 4 4 4.5v3c.5-.5 1.5-.5 2 0-.3.8-.5 1.7-.5 2.5 0 2.5 1.5 4.5 3 5v1H7c-.6 0-1 .4-1 1v2h12v-2c0-.6-.4-1-1-1h-2v-1c1.5-.5 3-2.5 3-5 0-.8-.2-1.7-.5-2.5.5-.5 1.5-.5 2 0v-3c-1-.5-2 0-2.5 1C16 4 14 3.5 12 3.5S8 4 6.5 5.5Zm3 4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Zm5 0a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Zm-5.3 3h5.6c-.3 1-1.4 1.5-2.8 1.5s-2.5-.5-2.8-1.5Z" />
                </svg>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-mono uppercase tracking-[0.16em] text-[var(--ink-soft)] text-[10px]">play</span>
                <span className="font-semibold text-[var(--foreground)] text-[13px]">Clash of Clans</span>
              </div>
            </div>

            {/* Survivors.io */}
            <div className="glass inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-2 pr-3.5">
              <span 
                className="relative grid place-items-center h-10 w-10 rounded-[10px] text-white" 
                style={{
                  background: "linear-gradient(180deg, color-mix(in oklab, #4B0082 70%, white) 0%, #4B0082 55%, color-mix(in oklab, #4B0082 88%, black) 100%)",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.55) inset, 0 -1px 1px rgba(0,0,0,0.12) inset",
                }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 2.2a2.8 2.8 0 0 0-2.8 2.8c0 1 .5 1.9 1.3 2.4L9.9 9H7.3c-.4 0-.7.4-.7.8v2.4c0 .4.3.8.7.8H9v9h2.3v-5.5h1.4V22H15v-9h1.7c.4 0 .7-.4.7-.8V9.8c0-.4-.3-.8-.7-.8h-1l2.7-1.3c.35-.16.5-.58.33-.92l-.5-1a.7.7 0 0 0-.93-.33L14.6 7.2a2.8 2.8 0 0 0-2.6-5Zm0 1.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
                </svg>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-mono uppercase tracking-[0.16em] text-[var(--ink-soft)] text-[10px]">play</span>
                <span className="font-semibold text-[var(--foreground)] text-[13px]">Survivors.io</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 04 - CTA */}
      <motion.section 
        className="relative mx-4 mb-20 overflow-hidden rounded-[24px] border border-[var(--line-strong)] px-6 py-10 text-[var(--foreground)] sm:mx-6 sm:mb-24 sm:rounded-[28px] sm:px-10 sm:py-14"
        style={{
          background: "linear-gradient(135deg, color-mix(in oklab, var(--brand) 18%, var(--background)) 0%, var(--background) 60%, color-mix(in oklab, var(--accent) 12%, var(--background)) 100%)"
        }}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">let's work together</p>
            <h3 className="mt-3 text-[clamp(1.8rem,4.5vw,3rem)] font-semibold leading-[0.95] tracking-tight">
              Got a messy problem?<br/>
              <span className="brand-gradient-text">I like those.</span>
            </h3>
          </div>
          <a 
            href="mailto:adityajamdhade6@gmail.com" 
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-transform hover:-translate-y-0.5"
          >
            Email me <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
        <p className="relative z-10 mt-10 max-w-md text-sm text-[var(--ink-base)]">
          Or see the visual side at <Link className="font-semibold text-[var(--foreground)] underline decoration-[var(--accent)] decoration-[2px] underline-offset-[5px]" to="/play">/play</Link>.
        </p>
      </motion.section>

      {/* Case Study Overlay */}
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </div>
  );
};

export default Ground;
