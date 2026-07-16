import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import Index from "./pages/Index";
import About from "./pages/About";
import Ground from "./pages/Ground";
import GroundCaseStudy from "./pages/GroundCaseStudy";
import Play from "./pages/Play";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import ZoomCaseStudy from "./pages/ZoomCaseStudy";
import NotFound from "./pages/NotFound";
import { GhostCompanion, GhostType } from "@/components/GhostCompanion";
import { CustomCursor } from "@/components/CustomCursor";

const queryClient = new QueryClient();

const AnimatedRoutes = ({ activeGhost, setActiveGhost }: { activeGhost: GhostType, setActiveGhost: (t: GhostType) => void }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={<Index activeGhost={activeGhost} onSelectGhost={setActiveGhost} />} 
        />
        <Route path="/ground" element={<Ground />}>
          <Route path=":projectId" element={<GroundCaseStudy />} />
          <Route path="nurture" element={<CaseStudy />} />
          <Route path="zoom" element={<ZoomCaseStudy />} />
        </Route>
        <Route path="/play" element={<Play />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Navigate to="/ground" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [activeGhost, setActiveGhost] = useState<GhostType>("boo");
  const [isLoading, setIsLoading] = useState(true);

  // Smooth out initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5s artificial delay allows heavy images and fonts to parse behind the scenes
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="global-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-[var(--bg)]"
          >
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="text-sm font-medium tracking-[0.2em] text-[var(--ink)] uppercase"
            >
              Aditya Jamdhade
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ReactLenis root>
        <TooltipProvider>
          <CustomCursor />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnimatedRoutes activeGhost={activeGhost} setActiveGhost={setActiveGhost} />
            {/* Global Ghost Companion */}
            <GhostCompanion type={activeGhost} />
          </BrowserRouter>
        </TooltipProvider>
      </ReactLenis>
    </QueryClientProvider>
  );
};

export default App;
