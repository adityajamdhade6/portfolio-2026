import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projectSoulstretch from "@/assets/project-soulstretch.png";
import projectTennis from "@/assets/project-tennis.png";
import projectRetro from "@/assets/project-retro.png";
import projectVelvoria from "@/assets/project-velvoria.png";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("case-studies");

  const categories = [
    { id: "case-studies", label: "[CASE STUDIES]" },
    { id: "graphic-design", label: "[GRAPHIC DESIGN]" },
  ];

  const caseStudies = [
    {
      id: "nurture",
      title: "NURTURE : A PLANT CARE COMPANION",
      category: "PLANT WELLNESS APP DESIGN",
      image: "https://framerusercontent.com/images/0RKQNlUmdUNZZYuxu16clCX0vQ.png",
      link: "/case-study",
    }
  ];

  const graphicDesign = [
    {
      id: 1,
      title: "VELVORIA CUPCAKE DELIGHT POSTER",
      category: "FOOD & BEVERAGE ADVERTISING",
      image: projectVelvoria,
    },
    {
      id: 2,
      title: "CITY OPEN - TENNIS EVENT POSTER",
      category: "SPORTS EVENT PROMOTION",
      image: projectTennis,
    },
    {
      id: 3,
      title: "RETRO RIDES - CLASSIC CAR SHOW",
      category: "VINTAGE POSTER DESIGN",
      image: projectRetro,
    },
    {
      id: 4,
      title: "SOULSTRETCH : YOGA & WELLNESS",
      category: "SOCIAL MEDIA POSTS",
      image: projectSoulstretch,
    },
  ];

  const currentProjects = activeCategory === "case-studies" ? caseStudies : graphicDesign;

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />

      <main className="pt-20 md:pt-24 pb-16 md:pb-20">
        <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 pt-6 md:pt-10">
            
            {/* Left Column - Title & Categories */}
            <motion.div 
              className="lg:col-span-3 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
                MY WORK.
              </h1>
              
              <div className="space-y-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`block text-xs font-mono tracking-[0.1em] transition-colors ${
                      activeCategory === cat.id 
                        ? "text-foreground underline underline-offset-4" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Projects Grid */}
            <motion.div 
              className="lg:col-span-9"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    {activeCategory === "case-studies" && "link" in project ? (
                      <Link to={project.link} className="block">
                        <div className="border border-border/50 overflow-hidden transition-all duration-300 hover:border-border">
                          <div className="overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-auto object-contain bg-zinc-900 transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-4 space-y-2">
                            <h3 className="text-xs font-mono uppercase tracking-wide">
                              {project.title}
                            </h3>
                            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">
                              {project.category}
                            </p>
                            <button className="w-full mt-3 border border-foreground/20 py-2 text-center text-[10px] tracking-[0.15em] font-mono uppercase hover:bg-foreground hover:text-background transition-colors duration-300">
                              VIEW IN DETAIL
                            </button>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="border border-border/50 overflow-hidden">
                        <div className="overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-contain bg-zinc-900 transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4 space-y-2">
                          <h3 className="text-xs font-mono uppercase tracking-wide">
                            {project.title}
                          </h3>
                          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wide">
                            {project.category}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Do I Do Section */}
        <motion.section 
          className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mt-20 md:mt-28"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
            <div className="lg:col-span-3">
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.15em]">
                [WHAT DO I DO?]
              </p>
            </div>
            <div className="lg:col-span-9 space-y-4">
              <p className="text-xs leading-[1.8] text-muted-foreground font-mono uppercase tracking-wide">
                THESE DAYS, MY WORK REVOLVES AROUND UNDERSTANDING PROBLEMS DEEPLY AND TURNING THEM INTO CLEAR, USABLE SOLUTIONS.
              </p>
              <p className="text-xs leading-[1.8] text-muted-foreground font-mono uppercase tracking-wide">
                I SPEND MOST OF MY TIME WORKING WITH DATA, BUILDING ML AND ANALYTICS PROJECTS, DESIGNING INTERFACES, AND EXPERIMENTING WITH PRODUCT IDEAS. I ENJOY THE BALANCE BETWEEN LOGIC AND DESIGN, WHERE NUMBERS, STRUCTURE, AND USER EXPERIENCE COME TOGETHER.
              </p>
              <p className="text-xs leading-[1.8] text-muted-foreground font-mono uppercase tracking-wide">
                WHETHER IT'S A DATASET, A PRODUCT FLOW, OR AN EARLY-STAGE IDEA, I LIKE STARTING FROM FIRST PRINCIPLES AND BUILDING THINGS THAT ACTUALLY MAKE SENSE.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Marquee Section */}
        <div className="mt-20 md:mt-28 py-8 border-y border-border/30 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-4xl md:text-5xl font-mono tracking-[0.1em] text-foreground/10 mx-8">
                LET'S BUILD SOMETHING THAT MAKES SENSE ◆ 
              </span>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Work;
