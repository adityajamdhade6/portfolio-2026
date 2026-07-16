import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import local graphic design assets
import projectTennis from "@/assets/project-tennis.png";
import projectRetro from "@/assets/project-retro.png";
import projectSoulstretch from "@/assets/project-soulstretch.png";
import projectVelvoria from "@/assets/project-velvoria.png";

const Play = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const visualProjects = [
    {
      id: "city-open",
      title: "City Open – Tennis Event Poster",
      tagline: "Sports event poster utilizing clean layout, typography, and motion tilt.",
      tags: ["Canva", "Sports", "Typography"],
      image: projectTennis,
      bg: "#0B1D33",
      subtitle: "City Open Poster",
    },
    {
      id: "retro-rides",
      title: "Retro Rides – Classic Car Show",
      tagline: "Vintage advertising poster inspired by 90s American retro aesthetics.",
      tags: ["Canva Pro", "Retro", "Grain Texture"],
      image: projectRetro,
      bg: "#2A251B",
      subtitle: "Retro Rides Poster",
    },
    {
      id: "soulstretch",
      title: "SoulStretch : Yoga & Wellness",
      tagline: "Instagram social media posts promoting mindfulness through earthy visuals.",
      tags: ["Figma", "Branding", "Wellness"],
      image: projectSoulstretch,
      bg: "#1E2B24",
      subtitle: "SoulStretch Grid",
    },
    {
      id: "velvoria",
      title: "Velvoria Cupcake Delight Poster",
      tagline: "Premium food product advertising poster highlighting consumer indulgence.",
      tags: ["Canva Pro", "Pastel", "Food Advertising"],
      image: projectVelvoria,
      bg: "#331E2A",
      subtitle: "Velvoria Cupcake",
    }
  ];

  return (
    <div className="min-h-screen bg-[#070708] text-zinc-100 dark selection:bg-emerald-500 selection:text-white pb-16">
      
      {/* Return Home Link */}
      <a 
        aria-label="Return to landing page"
        className="group fixed left-4 top-4 z-50 inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-black/40 backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5"
        style={{ background: "rgba(8, 8, 14, 0.78)", border: "1px solid rgba(255, 255, 255, 0.12)" }}
        href="/"
      >
        <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-500">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M5 1L2 4L5 7" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>
        <span>home</span>
        <span className="hidden text-[9px] tracking-[0.28em] text-white/55 sm:inline">⟶ light</span>
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
        <div className="dotted-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col items-start">
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-300"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </span>
              <span>/play · visual work</span>
            </motion.p>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="font-sans font-extrabold text-[clamp(2.5rem,8.5vw,5.5rem)] leading-[0.95] tracking-tighter text-white mt-6"
            >
              Visual work, <br/>
              <span className="brand-gradient-text">clearly made.</span>
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg"
            >
              Posters, typography details, branding iterations, and layout explorations. Each asset representing a step in visual aesthetics.
            </motion.p>
            
            {/* Visual Social Channels Row */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a 
                href="https://github.com/adityajamdhade6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="pointer-events-auto inline-block"
              >
                <div className="glass inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-1.5 pr-3 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <span className="relative grid place-items-center h-9 w-9 rounded-[8px] bg-zinc-800 text-white">
                    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.69-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.05.78 2.13v3.16c0 .31.21.67.8.56 4.57-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="font-mono uppercase tracking-[0.16em] text-zinc-500 text-[8px]">code</span>
                    <span className="font-semibold text-white text-[11px]">GitHub</span>
                  </div>
                </div>
              </a>

              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="pointer-events-auto inline-block"
              >
                <div className="glass inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-1.5 pr-3 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <span className="relative grid place-items-center h-9 w-9 rounded-[8px] bg-pink-500 text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.37c-.311-.122-2.934-.993-5.912-.46 1.229 3.395 1.724 6.16 1.776 6.47 2.453-1.618 4.02-4.28 4.137-6.01zm-5.617 7.02c-.08-.43-.6-3.23-1.92-6.66-2.923.86-5.503.88-5.83.88-.08 0-.16 0-.24-.01a18.23 18.23 0 001.21 4.79 10.04 10.04 0 006.78-2.99zm-8.31.95c-.38-.99-.87-2.61-1.12-4.52-3.15.86-4.52.8-4.63.8-.02.6.05 1.2.19 1.78 1.15 0 3.86-.18 5.56-2.06zm-1.89-6.38a16.65 16.65 0 011.08-4.14C4.246 6.327 1.83 8.354 1.87 8.39c.02.04 1.48 1.455 5.43.832zm2.08-5.18a14.7 14.7 0 00-.99 3.82c2.936-.7 5.79-.1 6.09-.03a15.83 15.83 0 00-4.1-3.79zM12 1.87c-3.1 0-5.93 1.42-7.82 3.66.08-.04 2.87-1.39 5.86.07a17.43 17.43 0 014.28 3.99c.14-.37.94-2.52 3.12-4.83A9.98 9.98 0 0012 1.87z" />
                    </svg>
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="font-mono uppercase tracking-[0.16em] text-zinc-500 text-[8px]">portfolio</span>
                    <span className="font-semibold text-white text-[11px]">Dribbble</span>
                  </div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/adityajamdhade" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="pointer-events-auto inline-block"
              >
                <div className="glass inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-1.5 pr-3 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <span className="relative grid place-items-center h-9 w-9 rounded-[8px] bg-blue-700 text-white font-semibold text-xs">
                    in
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="font-mono uppercase tracking-[0.16em] text-zinc-500 text-[8px]">network</span>
                    <span className="font-semibold text-white text-[11px]">LinkedIn</span>
                  </div>
                </div>
              </a>

              <a 
                href="mailto:adityajamdhade6@gmail.com" 
                className="pointer-events-auto inline-block"
              >
                <div className="glass inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-1.5 pr-3 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <span className="relative grid place-items-center h-9 w-9 rounded-[8px] bg-red-600 text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="font-mono uppercase tracking-[0.16em] text-zinc-500 text-[8px]">connect</span>
                    <span className="font-semibold text-white text-[11px]">Email</span>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Featured Print Poster layout (mixtape no. 04) - Matches Reference exactly */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } }
            }}
            className="relative"
          >
            <figure 
              className="relative mx-auto aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-[18px] border border-zinc-800"
              style={{
                background: "radial-gradient(120% 90% at 80% 0%, #14182a 0%, #0a0c16 55%, #07080f 100%)",
                boxShadow: "0 30px 60px -32px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.02) inset"
              }}
              aria-label="Poster — Only in my dreams, mixtape no. 04"
            >
              <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M0 5 H4 M6 5 H10 M5 0 V4 M5 6 V10" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"></path>
                  <circle cx="5" cy="5" r="1.4" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" fill="none"></circle>
                </svg>
              </span>
              <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M0 5 H4 M6 5 H10 M5 0 V4 M5 6 V10" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"></path>
                  <circle cx="5" cy="5" r="1.4" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" fill="none"></circle>
                </svg>
              </span>
              <span aria-hidden="true" className="pointer-events-none absolute left-3 bottom-3">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M0 5 H4 M6 5 H10 M5 0 V4 M5 6 V10" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"></path>
                  <circle cx="5" cy="5" r="1.4" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" fill="none"></circle>
                </svg>
              </span>
              <span aria-hidden="true" className="pointer-events-none absolute right-3 bottom-3">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M0 5 H4 M6 5 H10 M5 0 V4 M5 6 V10" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"></path>
                  <circle cx="5" cy="5" r="1.4" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" fill="none"></circle>
                </svg>
              </span>
              <span aria-hidden="true" className="absolute left-0 top-[28%] h-px w-full origin-left rotate-[-6deg] opacity-40" style={{ background: "linear-gradient(90deg, transparent 0%, var(--brand) 35%, transparent 80%)" }}></span>
              
              <div className="relative flex h-full flex-col justify-between p-7">
                <header className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-zinc-400">wk · 27 / 52</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-zinc-500">ed. 03 / 50</span>
                </header>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-zinc-650">mixtape no. 04</p>
                  <h3 className="mt-3 text-[clamp(1.7rem,3.2vw,2.1rem)] font-semibold leading-[0.95] tracking-tight text-white">
                    Only <span className="italic font-light text-zinc-400">in my</span><br/>
                    <span className="italic font-light text-zinc-400">dreams.</span>
                  </h3>
                  <span aria-hidden="true" className="mt-5 block h-px w-10 bg-emerald-500/70"></span>
                  <p className="mt-3 max-w-[78%] text-[12px] leading-relaxed text-zinc-400">A small print run threaded through one recurring colour and an old film score.</p>
                </div>
                <footer className="flex items-end justify-between font-mono text-[9px] uppercase tracking-[0.28em] text-zinc-500">
                  <span>poster · a2</span>
                  <span>420 × 594 mm</span>
                </footer>
              </div>
            </figure>
          </motion.div>
        </div>
      </motion.section>

      {/* Marquee Ticker */}
      <section className="border-y border-zinc-900 bg-zinc-950 py-3 text-zinc-300">
        <div className="scroll-marquee py-2">
          <div className="scroll-marquee-track text-[clamp(1.2rem,3vw,2.5rem)] font-semibold tracking-tight uppercase">
            {Array(4).fill([
              "posters", "type design", "motion loops", "illustration systems", "risograph prints", "editorial layout"
            ]).flat().map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-6 select-none font-sans font-medium">
                {item}
                <span className="inline-block h-2 w-2 rounded-full bg-current opacity-40"></span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Archives Grid */}
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <header className="mb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">01 — VISUAL ARCHIVE</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white mt-2">Everything visual, <span className="italic font-light text-zinc-400">recent first.</span></h2>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {visualProjects.map((project, index) => (
              <motion.article 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className={`group relative flex flex-col ${index % 2 === 1 ? 'md:mt-24' : ''}`}
              >
                <div 
                  className="relative aspect-square w-full overflow-hidden rounded-[24px] border border-zinc-800 transition-all duration-500 cursor-zoom-in"
                  style={{ backgroundColor: project.bg }}
                  onClick={() => setSelectedImage(project.image)}
                >
                  {project.video ? (
                    <video 
                      src={project.video} 
                      poster={project.image}
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                    />
                  ) : (
                    <img src={project.image} alt={project.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                  )}
                  <span className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />
                </div>
                
                <div className="mt-5 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-400">
                      {project.subtitle}
                    </span>
                    <div className="flex gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-zinc-900 bg-zinc-900 px-2.5 py-0.5 text-[9px] text-zinc-500 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold leading-tight text-white mt-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs leading-relaxed text-zinc-400 max-w-[45ch]">
                    {project.tagline}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Visual Artwork */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Enlarged visual print poster" 
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" 
          />
          <button 
            className="absolute top-6 right-6 text-white hover:opacity-75 focus:outline-none"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      {/* Inputs Section */}
      <motion.section 
        className="relative px-6 mt-24 border-t border-zinc-900 pt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">02 — WHAT I'M WATCHING / LISTENING TO</p>
            <h2 className="text-3xl font-semibold text-white tracking-tight mt-2">The inputs behind <span className="italic font-light text-zinc-400">the outputs.</span></h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-md">A rolling list — playlists on Spotify, films on Letterboxd, motion loops on Vimeo, boards on Behance.</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/adityajamdhade6" target="_blank" rel="noopener noreferrer" className="glass-strong inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-1.5 pr-3 bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 transition-colors">
              <span className="relative grid place-items-center h-9 w-9 rounded-[8px] bg-zinc-800 text-white font-bold text-[11px]">G</span>
              <div className="flex flex-col leading-none">
                <span className="font-mono uppercase tracking-[0.14em] text-zinc-500 text-[8px]">code</span>
                <span className="font-semibold text-white text-[11px] mt-0.5">GitHub</span>
              </div>
            </a>
            
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="glass-strong inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-1.5 pr-3 bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 transition-colors">
              <span className="relative grid place-items-center h-9 w-9 rounded-[8px] bg-cyan-500 text-white font-bold text-[11px]">V</span>
              <div className="flex flex-col leading-none">
                <span className="font-mono uppercase tracking-[0.14em] text-zinc-500 text-[8px]">watch</span>
                <span className="font-semibold text-white text-[11px] mt-0.5">Vimeo</span>
              </div>
            </a>
            
            <a href="https://letterboxd.com" target="_blank" rel="noopener noreferrer" className="glass-strong inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-1.5 pr-3 bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 transition-colors">
              <span className="relative grid place-items-center h-9 w-9 rounded-[8px] bg-emerald-600 text-white font-bold text-[11px]">L</span>
              <div className="flex flex-col leading-none">
                <span className="font-mono uppercase tracking-[0.14em] text-zinc-500 text-[8px]">films</span>
                <span className="font-semibold text-white text-[11px] mt-0.5">Letterboxd</span>
              </div>
            </a>
            
            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="glass-strong inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-1.5 pr-3 bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 transition-colors">
              <span className="relative grid place-items-center h-9 w-9 rounded-[8px] bg-emerald-500 text-white font-bold text-[11px]">S</span>
              <div className="flex flex-col leading-none">
                <span className="font-mono uppercase tracking-[0.14em] text-zinc-500 text-[8px]">listen</span>
                <span className="font-semibold text-white text-[11px] mt-0.5">Spotify</span>
              </div>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Gateway redirect */}
      <motion.section 
        className="relative px-6 mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-[13px] text-zinc-500 font-light">
          Looking for product work? Visit <Link to="/ground" className="text-zinc-350 hover:text-white underline transition-colors">/ground</Link>. For a print or a trade, <a href="mailto:adityajamdhade6@gmail.com" className="text-zinc-350 hover:text-white underline transition-colors">email me</a>.
        </p>
      </motion.section>

    </div>
  );
};

export default Play;
