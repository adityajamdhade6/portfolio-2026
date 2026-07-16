import { motion } from "framer-motion";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Monitor, FileText, Code, Presentation, BookOpen, X } from "lucide-react";
import { projectDetails } from "@/data/projectDetails";
import {
  FinancialMarketView,
  SimpleThreadsView,
  GoldPredictionView,
  TitanicPredictionView,
  StreamverseEtlView
} from "@/components/CapstoneViews";
import CaseStudy from "./CaseStudy";

const GroundCaseStudy = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectDetails[projectId || ""];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#02040a] text-white flex flex-col items-center justify-center p-6 overflow-y-auto">
        <h1 className="text-2xl font-mono uppercase tracking-widest text-red-500">Project Not Found</h1>
        <p className="mt-2 text-zinc-400">The requested project ID does not exist.</p>
        <Link to="/ground" className="mt-6 px-6 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm hover:bg-zinc-800 transition-all">
          Back to Ground
        </Link>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Find next project for footer redirect
  const allKeys = Object.keys(projectDetails);
  const currentIndex = allKeys.indexOf(project.id);
  const nextKey = allKeys[(currentIndex + 1) % allKeys.length];
  const nextProject = projectDetails[nextKey];


  if (project.id === "nurture") {
    return <CaseStudy nextProject={nextProject} />;
  }

  return (
    <div data-lenis-prevent="true" className="fixed inset-0 z-[100] flex flex-col items-center overflow-y-auto bg-black/60 p-2 sm:p-6 md:p-12 backdrop-blur-sm">
      <motion.div
        className="relative mx-auto w-full max-w-[840px] shrink-0 overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#f8f9fa] text-zinc-900 shadow-2xl ring-1 ring-black/5 dark:bg-[#02040a] dark:text-zinc-100 dark:ring-white/10 mb-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Top Image Section */}
        <div className="relative aspect-[16/10] w-full bg-zinc-200 dark:bg-zinc-900">
          {project.video ? (
            <video src={project.video} poster={project.image} autoPlay loop muted playsInline className="h-full w-full object-contain p-2 md:p-6" />
          ) : (
            <img src={project.image} alt={project.title} className="h-full w-full object-contain p-2 md:p-6" />
          )}
          
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
            {project.title}
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-base font-light">
            {project.tagline}
          </p>
          <div className="space-y-6 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300 mb-8">
            {(project.writeup || (project as any).bullets || []).map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          
          {/* Metadata Row */}
          <div className="mb-10 flex flex-wrap gap-y-6 border-y border-zinc-200 py-6 text-sm dark:border-zinc-800">
            <div className="w-1/2 sm:w-1/3 pr-4">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Role</p>
              <p className="font-medium text-zinc-900 dark:text-zinc-200">{project.role}</p>
            </div>
            <div className="w-1/2 sm:w-1/3 border-l border-zinc-200 pl-4 dark:border-zinc-800">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Client</p>
              <p className="font-medium text-zinc-900 dark:text-zinc-200">{project.client}</p>
            </div>
            <div className="w-full sm:w-1/3 sm:border-l border-zinc-200 sm:pl-4 dark:border-zinc-800 pt-4 sm:pt-0 border-t sm:border-t-0 mt-2 sm:mt-0">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">Links</p>
              <div className="flex flex-wrap gap-2">
                  {project.figmaLink && (
                    <a
                      href={project.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                      title="View Figma Design"
                    >
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                      title="View Github Repo"
                    >
                      <Github size={12} />
                    </a>
                  )}
                  {project.links?.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                      title={project.links.website.includes("colab.research.google.com") ? "Open Google Colab Notebook" : "View Live Website"}
                    >
                      {project.links.website.includes("colab.research.google.com") ? <Code size={12} /> : <ExternalLink size={12} />}
                    </a>
                  )}
                  {project.links?.pdf && (
                    <a
                      href={project.links.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                      title="Download PDF Report"
                    >
                      <FileText size={12} />
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                      title="View Github Repo"
                    >
                      <Github size={12} />
                    </a>
                  )}
                  {project.links?.docs && (
                    <a
                      href={project.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                      title="View Documentation"
                    >
                      <BookOpen size={12} />
                    </a>
                  )}
                  {project.links?.presentation && (
                    <a
                      href={project.links.presentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                      title="View Presentation"
                    >
                      <Presentation size={12} />
                    </a>
                  )}
                  {!project.figmaLink && !project.githubLink && !project.links && (
                    <span className="text-xs text-zinc-500 font-mono">Internal Assets</span>
                  )}
                </div>
              </div>
          </div>
        </div>



        {/* Narrative Split Block */}
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <section className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 border-b border-zinc-200 dark:border-zinc-800 pb-16 mb-20">
            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">The Context</h2>
              <p className="font-serif italic text-lg text-zinc-700 dark:text-zinc-300 mt-3 font-light leading-relaxed">
                {project.tagline}
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">The Narrative</h2>
              {project.writeup.map((para, idx) => (
                <p key={idx} className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">
                  {para}
                </p>
              ))}
            </div>
          </section>

          {/* Problem & Solution Grid Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 md:mb-32">
            <div className="glass-strong rounded-[20px] p-8 border border-zinc-200 dark:border-zinc-800 bg-black/5 dark:bg-zinc-950/40 relative">
              <span className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500">Problem</span>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-3">What was broken?</h3>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">{project.problemStatement}</p>
            </div>
            
            <div className="glass-strong rounded-[20px] p-8 border border-zinc-200 dark:border-zinc-800 bg-black/5 dark:bg-zinc-950/40 relative">
              <span className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-500">Solution</span>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-3">How did we fix it?</h3>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 font-light">{project.solutionStatement}</p>
            </div>
          </section>

          {/* Interactive Screen Walkthrough Sections */}
          {project.screens.length > 0 && (
            <section className="space-y-20 md:space-y-32 mb-20 md:mb-32">
              <header className="mb-14">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">02 — Screen breakdown</p>
                <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-zinc-900 dark:text-white mt-2">Rationales, <span className="serif-italic font-light">detailed thoroughly.</span></h3>
              </header>

              <div className="space-y-16">
                {project.screens.map((screen, idx) => {
                  const hasImage = !!screen.src;
                  return (
                    <div 
                      key={idx} 
                      className={hasImage 
                        ? "grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 md:gap-14 items-center" 
                        : "max-w-3xl mx-auto border border-zinc-200 dark:border-zinc-800 bg-black/5 dark:bg-zinc-950/20 rounded-[22px] p-6 md:p-8 shadow-lg"
                      }
                    >
                      {/* Mockup Canvas */}
                      {hasImage && (
                        <div 
                          className="relative rounded-[22px] overflow-hidden border border-zinc-200 dark:border-zinc-900 aspect-video shadow-lg"
                          style={{ backgroundColor: project.bg }}
                        >
                          <img
                            src={screen.src}
                            alt={screen.title}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                          <span className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-black/10 dark:ring-white/10" />
                        </div>
                      )}

                      {/* Explanatory Cards */}
                      <div className="flex flex-col gap-5">
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-blue-600 dark:text-blue-500">0{idx + 1} // Interface</span>
                          <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mt-1">{screen.title}</h4>
                        </div>
                        
                        <div className="space-y-4 border-t border-zinc-200 dark:border-zinc-800 pt-4">
                          <div>
                            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">The friction</p>
                            <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 mt-1 font-light">{screen.problem}</p>
                          </div>
                          <div>
                            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">The execution</p>
                            <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 mt-1 font-light">{screen.rationale}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Next Project Redirect Footer Banner */}
          <section className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
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

        </div>
      </motion.div>
    </div>
  );
};

export default GroundCaseStudy;
