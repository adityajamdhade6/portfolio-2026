import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, X } from "lucide-react";
import { Link } from "react-router-dom";

const ZoomCaseStudy = ({ nextProject }: { nextProject?: any }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Full-width image sections from Behance
  const behanceImages = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f8806a232014615.6895c46a6201d.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8931cf232014615.6893c00db04c0.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/735e10232014615.6895285140348.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8cf4c5232014615.6893c00dafc07.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c390d1232014615.6895d18518466.png",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3fe2a6232014615.6895a46f1b401.png",
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div data-lenis-prevent="true" className="fixed inset-0 z-[100] flex flex-col items-center overflow-y-auto bg-black/60 p-2 sm:p-6 md:p-12 backdrop-blur-sm">
      <motion.div
        className="relative mx-auto w-full max-w-[840px] shrink-0 overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white text-zinc-900 shadow-2xl ring-1 ring-black/5 dark:bg-[#02040a] dark:text-zinc-100 dark:ring-white/10 mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Top Image Section */}
        <div className="relative aspect-[16/10] w-full bg-zinc-200 dark:bg-zinc-900">
          <img src={behanceImages[0]} alt="Zoom Case Study Hero" className="h-full w-full object-cover" />
          
          {/* Top Left Pill */}
          <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-900 shadow-sm backdrop-blur-md dark:bg-black/50 dark:text-zinc-100">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              PRODUCT • 2026
            </span>
          </div>

          {/* Top Right Close */}
          <Link to="/ground" className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60 sm:right-6 sm:top-6">
            <X size={20} />
          </Link>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-10 md:p-12">
          <h1 className="mb-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Zoom for Performing Artists
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-base font-light">
            Website Redesign and Development
          </p>
          
          {/* Metadata Row */}
          <div className="mb-10 flex flex-wrap gap-y-6 border-y border-zinc-200 py-6 text-sm dark:border-zinc-800">
            <div className="w-1/2 sm:w-1/3 pr-4">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Role</p>
              <p className="font-medium text-zinc-900 dark:text-zinc-200">UI/UX Designer</p>
            </div>
            <div className="w-1/2 sm:w-1/3 border-l border-zinc-200 pl-4 dark:border-zinc-800">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Client</p>
              <p className="font-medium text-zinc-900 dark:text-zinc-200">Academic Project</p>
            </div>
            <div className="w-full sm:w-1/3 sm:border-l border-zinc-200 sm:pl-4 dark:border-zinc-800 pt-4 sm:pt-0 border-t sm:border-t-0 mt-2 sm:mt-0">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Links</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.figma.com/design/S2Zal6RMMfnUr86rHdnSNC/Zoom---Case-Study?node-id=233-2858&m=dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-value underline underline-offset-4 hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Figma File <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>

        {/* Full-Width Image Gallery - Behance Style */}
        <div className="space-y-0 -mx-6 sm:-mx-10 md:-mx-12">
          {behanceImages.slice(1).map((image, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={image}
                alt={`Zoom Case Study Image ${index + 1}`}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>

        {nextProject && (
          <section className="border-t border-zinc-200 dark:border-zinc-800 pt-16 mt-16">
            <Link 
              to={`/ground/${nextProject.id}`}
              className="glass-strong group block rounded-[24px] border border-zinc-200 dark:border-zinc-800 p-8 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50 dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-32 h-32 rounded-full blur-[80px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" style={{ background: nextProject.accent }} />
              
              <div className="flex flex-col gap-2 relative z-10">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-500">Up next</span>
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  {nextProject.title}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light mt-0.5">{nextProject.tagline}</p>
              </div>
            </Link>
          </section>
        )}

        </div>
      </motion.div>
    </div>
  );
};

export default ZoomCaseStudy;
