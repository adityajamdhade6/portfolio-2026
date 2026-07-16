import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {

  const socialLinks = [
    { label: "[EMAIL]", href: "mailto:adityajamdhade6@gmail.com" },
    { label: "[LINKEDIN]", href: "https://www.linkedin.com/in/adityajamdhade" },
    { label: "[BEHANCE]", href: "https://www.behance.net/adityajamdhade6" },
    { label: "[DRIBBBLE]", href: "https://dribbble.com/adityajamdhade6" },
  ];

  return (
    <motion.div 
      className="min-h-screen bg-[var(--background)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      
      <main className="relative pt-24 pb-16 md:pb-20">
        <div className="dotted-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        
        <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-6 md:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column - Ideas */}
            <motion.div 
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--brand)]">
                [GOT ANY IDEAS?]
              </p>
              <div className="space-y-4">
                <p className="text-xs leading-[1.8] text-[var(--ink-soft)] font-mono uppercase tracking-wide">
                  I'M ALWAYS LOOKING FOR INTERESTING WORK AND COLLABORATIONS. IF YOU HAVE A COOL IDEA OR A CHALLENGING PROBLEM, I'D LOVE TO SHADOW AND BUILD.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="space-y-3 pt-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs font-mono tracking-[0.15em] text-[var(--ink-soft)] hover:text-[var(--ink)] transition-colors underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Massive Contact Link */}
            <motion.div 
              className="lg:col-span-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a 
                href="mailto:adityajamdhade6@gmail.com"
                className="group block glass rounded-[24px] p-8 md:p-16 flex flex-col items-center justify-center min-h-[500px] bg-white/70 dark:bg-black/40 hover:bg-white/90 dark:hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[var(--brand)] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                
                <h1 className="font-serif text-[12vw] md:text-8xl lg:text-9xl tracking-tighter leading-none text-[var(--ink)] font-semibold transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-4">
                  LET'S
                </h1>
                <h2 className="font-serif text-[12vw] md:text-8xl lg:text-9xl tracking-tighter leading-none text-[var(--brand)] font-light italic transition-transform duration-500 group-hover:scale-105 group-hover:translate-y-4 flex items-center gap-4">
                  BUILD
                  <span className="inline-block transform transition-all duration-500 group-hover:translate-x-4 opacity-0 group-hover:opacity-100 -ml-8 group-hover:ml-0">→</span>
                </h2>
                
                <div className="absolute bottom-8 right-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)] group-hover:text-[var(--ink)] transition-colors">
                  adityajamdhade6@gmail.com
                </div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Marquee Ticker */}
        <div className="mt-20 py-6 border-y border-[var(--line)] overflow-hidden bg-[var(--tag-bg)]">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-3xl md:text-4xl font-serif italic font-light tracking-[0.1em] text-[var(--ink-soft)] opacity-20 mx-8 select-none">
                LET'S DESIGN ◆ LET'S BUILD ◆ 
              </span>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Contact;
