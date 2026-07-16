import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  const education = [
    {
      year: "2025-29",
      degree: "B.S. in Applied AI & Data Science",
      inst: "Indian Institute of Technology (IIT) Jodhpur",
      grade: "8.2 CGPA"
    },
    {
      year: "2025-28",
      degree: "UG in Entrepreneurship",
      inst: "Institute of Venture Building",
      grade: "Pursuing"
    },
    {
      year: "2024-25",
      degree: "Class XII (PCMB)",
      inst: "SSVPS Dr. P. R. Ghogrey Science College, Dhule",
      grade: "76.17%"
    },
    {
      year: "2022-23",
      degree: "Class X (CBSE)",
      inst: "Kendriya Vidyalaya, Dhule",
      grade: "85.40%"
    }
  ];

  const experiences = [
    {
      period: "Jun 2026 - Present",
      role: "Co-Founder",
      company: "INHAUS Coffee",
      tag: "Product & Growth",
      bullets: [
        "Spearheaded launch of a D2C coffee concentrate brand from 0 to 1, generating ₹65,000+ in revenue via online and offline channels.",
        "Built outbound GTM strategy reaching 1,500+ prospects across four channels, converting 32% of trials into recurring customers.",
        "Automated lifecycle email campaigns for 5,000+ leads, generating ₹9,500+ in attributed revenue through targeted outreach."
      ]
    },
    {
      period: "Jun 2025 - Aug 2025",
      role: "Growth Marketing Intern",
      company: "Inventive AI (YC S23)",
      tag: "Product Strategy",
      bullets: [
        "Conducted competitive analysis across 12 platforms, benchmarking pricing, features, and positioning to refine product strategy.",
        "Synthesized insights from 800+ G2 and Capterra reviews to identify feature gaps, user pain points, and competitive differentiators.",
        "Diagnosed a 40% CAC inefficiency, designing 3 persona-specific lifecycle campaigns that improved conversion rates by 15%."
      ]
    },
    {
      period: "May 2025 - Jun 2025",
      role: "Business Development Intern",
      company: "Younity.in",
      tag: "Dev Intern",
      bullets: [
        "Converted 35+ enrollments through 120+ sales pitches, generating ₹10,725 in direct program revenue across multiple cohorts.",
        "Reduced lead drop-offs by 22% through personalized follow-ups and objection handling, accelerating enrollment conversions."
      ]
    },
    {
      period: "Sep 2024 - Nov 2024",
      role: "UI/UX Designer Intern",
      company: "Zupper",
      tag: "Product",
      bullets: [
        "Designed 45+ screens across onboarding, marketplace, auctions, and BNPL financing, delivering production-ready designs.",
        "Designed role-based onboarding, streamlining customer journeys and reducing onboarding steps by 30% through personalization."
      ]
    }
  ];

  const skillGroups = [
    {
      title: "Data & Analytics",
      items: ["Python", "SQL", "Pandas", "Excel", "Power BI", "Mixpanel", "Google Analytics (GA4)"]
    },
    {
      title: "Automation & Dev",
      items: ["GitHub", "Postman", "Claude Code", "Cursor", "n8n", "Zapier", "Shopify", "Webflow"]
    },
    {
      title: "Design & Marketing",
      items: ["Figma", "Canva", "Jira", "Notion", "Google Ads", "Meta Ads", "SEMrush"]
    }
  ];

  const achievements = [
    {
      title: "IIT Bombay Finalist",
      desc: "Top 3 Finalist Position among 250+ participants in Bid-n-Build & Ace the Case, E-Summit'25."
    },
    {
      title: "Competitive Chess",
      desc: "Represented Kendriya Vidyalaya Dhule in competitive chess for 4+ years across interschool and national tournaments in 8 states."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <Header />
      
      <main className="relative flex-1 pt-32 pb-20">
        <div className="dotted-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
          
          {/* Header */}
          <motion.div 
            className="space-y-4 mb-16"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--brand)]">
              /about · aditya jamdhade
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] font-semibold text-[var(--ink)]">Product <span className="italic font-light text-[var(--ink-soft)]">+ AI + GTM Builder</span></h1>
            <p className="text-sm md:text-base leading-relaxed text-[var(--ink-base)] font-light max-w-2xl mt-4">I’m a product‑focused builder who crafts AI‑powered solutions from 0→1, blending data insights, design, and go‑to‑market strategy. Proudly studying Applied AI at IIT Jodhpur and honing growth tactics at the Institute of Venture Building.</p>
            <div className="mt-6">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-xs font-semibold text-[var(--background)] hover:scale-[1.02] transition-transform duration-200"
              >
                <span>Download Resume</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1.2fr] gap-12 lg:gap-16">
            
            {/* Left Column: Experience */}
            <div className="space-y-12">
              <section>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-soft)] border-b border-[var(--line)] pb-2 mb-6">
                  Professional Experience
                </h2>
                
                <div className="space-y-10">
                  {experiences.map((exp, idx) => (
                    <motion.div 
                      key={idx}
                      className="group"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h3 className="text-base font-semibold text-[var(--ink)]">
                          {exp.role} <span className="text-[var(--ink-soft)] font-light">at</span> {exp.company}
                        </h3>
                        <span className="font-mono text-[10px] text-[var(--ink-mute)] whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      
                      <div className="mt-1">
                        <span className="inline-block rounded-full bg-[var(--tag-bg)] border border-[var(--tag-border)] px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-[var(--ink-soft)]">
                          {exp.tag}
                        </span>
                      </div>

                      <ul className="mt-3.5 space-y-2 pl-4 list-disc text-xs leading-[1.6] text-[var(--ink-base)] font-light">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Positions of Responsibility */}
              <section>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-soft)] border-b border-[var(--line)] pb-2 mb-4">
                  Positions of Responsibility
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-sm font-semibold text-[var(--ink)]">IITJ Club</h4>
                      <span className="font-mono text-[9px] text-[var(--ink-mute)]">Sep 2025 - Present</span>
                    </div>
                    <ul className="mt-2 space-y-1.5 pl-4 list-disc text-xs text-[var(--ink-base)] font-light">
                      <li>Set up anonymous feedback system collecting 120+ responses, analyzed using Python (Pandas, NLTK).</li>
                      <li>Reduced counseling wait times from 12 to 4 days by connecting 18 students with services and improving case prioritization.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Education & Skills */}
            <div className="space-y-12">
              {/* Education */}
              <section>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-soft)] border-b border-[var(--line)] pb-2 mb-6">
                  Education
                </h2>
                
                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="font-mono text-[10px] text-[var(--ink-mute)] pt-0.5 w-16 shrink-0">
                        {edu.year}
                      </span>
                      <div>
                        <h3 className="text-xs font-semibold text-[var(--ink)]">
                          {edu.degree}
                        </h3>
                        <p className="text-xs text-[var(--ink-soft)] font-light mt-0.5">
                          {edu.inst}
                        </p>
                        {edu.grade && (
                          <span className="inline-block mt-1 font-mono text-[9px] text-[var(--brand)] font-semibold">
                            {edu.grade}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-soft)] border-b border-[var(--line)] pb-2 mb-6">
                  Skills & Tools
                </h2>
                
                <div className="space-y-6">
                  {skillGroups.map((group, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-mute)]">
                        {group.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((skill) => (
                          <span 
                            key={skill}
                            className="rounded-full border border-[var(--tag-border)] bg-[var(--tag-bg)] px-2.5 py-0.5 text-[10px] text-[var(--ink-soft)] font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section>
                <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-soft)] border-b border-[var(--line)] pb-2 mb-4">
                  Achievements
                </h2>
                <div className="space-y-4">
                  {achievements.map((ach, idx) => (
                    <div key={idx}>
                      <h4 className="text-xs font-semibold text-[var(--ink)]">{ach.title}</h4>
                      <p className="text-xs text-[var(--ink-soft)] font-light mt-0.5 leading-relaxed">{ach.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
