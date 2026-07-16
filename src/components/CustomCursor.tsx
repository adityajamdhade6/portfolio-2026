import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  // Use Framer Motion values instead of React state for mouse coordinates
  // This prevents React from re-rendering 60+ times per second, fixing the lag!
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Add a spring physics wrapper for smooth tracking
  const springConfig = { damping: 28, stiffness: 500, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Attach hover listeners to clickable elements
    const attachHoverListeners = () => {
      const clickables = document.querySelectorAll("a, button, [role='button'], input, select, textarea");
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
      return clickables;
    };

    // Initial attachment
    let clickables = attachHoverListeners();

    // Re-attach on DOM mutations (for client-side routing)
    const observer = new MutationObserver(() => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      clickables = attachHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      observer.disconnect();
    };
  }, [isVisible, mouseX, mouseY]);

  // If touch device, don't show custom cursor
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full hidden md:block bg-[var(--ink)] opacity-80 shadow-sm"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: isHovering ? "-50%" : "-50%",
        translateY: isHovering ? "-50%" : "-50%",
        width: isHovering ? 48 : 16,
        height: isHovering ? 48 : 16,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.2 }
      }}
    />
  );
};
