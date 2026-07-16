import { useState, useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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

  // Premium Smooth Scrolling (Vanilla Lenis is much safer than the React wrapper)
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });
    return () => lenis.destroy();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
