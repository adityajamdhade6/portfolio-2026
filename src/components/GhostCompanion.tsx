import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";

export type GhostType = "boo" | "lav" | "mint" | "peach" | "sky" | "noir";

interface GhostCompanionProps {
  type: GhostType;
}

const ghostDetails: Record<GhostType, { name: string; title: string; hint: string }> = {
  boo: {
    name: "boo",
    title: "gentleman",
    hint: "hi — i'm adi, aditya's ghost. left here to make sure you get him on the team ✦",
  },
  lav: {
    name: "lav",
    title: "florist",
    hint: "hello! i'm lav. i tend to the visual gardens. double click to send me home ✿",
  },
  mint: {
    name: "mint",
    title: "skater",
    hint: "yo! i'm mint. i speed up the development process. watch me roll! 🛹",
  },
  peach: {
    name: "peach",
    title: "wrangler",
    hint: "howdy! i'm peach. i wrangle messy data and shape complex products. 🤠",
  },
  sky: {
    name: "sky",
    title: "scholar",
    hint: "greetings. i'm sky. i analyze metrics and write clean specifications. 📖",
  },
  noir: {
    name: "noir",
    title: "rockstar",
    hint: "hey. noir here. i coordinate motion, transitions, and high-heat micro-interactions. ⚡",
  },
};

// Standalone exported component to return the specific ghost SVG content
export const GhostSVG = ({ type }: { type: GhostType }) => {
  switch (type) {
    case "lav":
      return (
        <svg viewBox="0 0 68 76" width="60" height="68" overflow="visible">
          <defs>
            <radialGradient id="ghost-body-lav" cx="38%" cy="26%" r="85%">
              <stop offset="0%" stopColor="#FBF7FF" />
              <stop offset="55%" stopColor="#E8DBFF" />
              <stop offset="100%" stopColor="#B59CE8" />
            </radialGradient>
            <radialGradient id="ghost-cheek-lav" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="rgba(168,85,247,0.85)" />
              <stop offset="55%" stopColor="rgba(192,132,252,0.55)" />
              <stop offset="100%" stopColor="rgba(216,180,254,0)" />
            </radialGradient>
          </defs>
          <ellipse cx="34" cy="70" rx="20" ry="2.5" fill="rgba(30,41,59,0.18)" />
          <path d="M34 4 C 14 4, 6 18, 6 34 L 6 54 C 6 60, 9 64, 14 64 C 18 64, 20 60, 22 57 C 24 54, 27 54, 28 57 C 29 61, 31 64, 34 64 C 37 64, 39 61, 40 57 C 41 54, 44 54, 46 57 C 48 60, 50 64, 54 64 C 59 64, 62 60, 62 54 L 62 34 C 62 18, 54 4, 34 4 Z" fill="url(#ghost-body-lav)" stroke="rgba(30,41,59,0.12)" strokeWidth="0.9" />
          <ellipse cx="15" cy="40" rx="7" ry="4.5" fill="url(#ghost-cheek-lav)" />
          <ellipse cx="53" cy="40" rx="7" ry="4.5" fill="url(#ghost-cheek-lav)" />
          <g transform="translate(24 32)">
            <circle cx="-1.6" cy="-1" r="2.2" fill="#2E1065" />
            <circle cx="1.6" cy="-1" r="2.2" fill="#2E1065" />
            <path d="M -3.6 0.2 L 3.6 0.2 L 0 4.2 Z" fill="#2E1065" />
          </g>
          <g transform="translate(44 32)">
            <circle cx="-1.6" cy="-1" r="2.2" fill="#2E1065" />
            <circle cx="1.6" cy="-1" r="2.2" fill="#2E1065" />
            <path d="M -3.6 0.2 L 3.6 0.2 L 0 4.2 Z" fill="#2E1065" />
          </g>
          <ellipse cx="34" cy="44" rx="1.5" ry="1.7" fill="#2E1065" />
          <g className="ghost-accessory-float">
            {/* Flowers */}
            <circle cx="34" cy="-2" r="3" fill="#FB7185" />
            <circle cx="30" cy="-6" r="2.5" fill="#F472B6" />
            <circle cx="38" cy="-6" r="2.5" fill="#C084FC" />
          </g>
        </svg>
      );
    case "mint":
      return (
        <svg viewBox="0 0 68 76" width="60" height="68" overflow="visible">
          <defs>
            <radialGradient id="ghost-body-mint" cx="38%" cy="26%" r="85%">
              <stop offset="0%" stopColor="#F2FFF8" />
              <stop offset="55%" stopColor="#D2F4DF" />
              <stop offset="100%" stopColor="#8AD4B0" />
            </radialGradient>
            <radialGradient id="ghost-cheek-mint" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="rgba(16,185,129,0.85)" />
              <stop offset="55%" stopColor="rgba(74,222,128,0.55)" />
              <stop offset="100%" stopColor="rgba(187,247,208,0)" />
            </radialGradient>
          </defs>
          <ellipse cx="34" cy="70" rx="20" ry="2.5" fill="rgba(30,41,59,0.18)" />
          <path d="M34 4 C 14 4, 6 18, 6 34 L 6 54 C 6 60, 9 64, 14 64 C 18 64, 20 60, 22 57 C 24 54, 27 54, 28 57 C 29 61, 31 64, 34 64 C 37 64, 39 61, 40 57 C 41 54, 44 54, 46 57 C 48 60, 50 64, 54 64 C 59 64, 62 60, 62 54 L 62 34 C 62 18, 54 4, 34 4 Z" fill="url(#ghost-body-mint)" stroke="rgba(30,41,59,0.12)" strokeWidth="0.9" />
          <ellipse cx="15" cy="40" rx="7" ry="4.5" fill="url(#ghost-cheek-mint)" />
          <ellipse cx="53" cy="40" rx="7" ry="4.5" fill="url(#ghost-cheek-mint)" />
          <g>
            <path d="M 20 31 L 28 31 Q 28 35, 24 35 Q 20 35, 20 31 Z" fill="#052E16" />
            <path d="M 40 31 L 48 31 Q 48 35, 44 35 Q 40 35, 40 31 Z" fill="#052E16" />
            <ellipse cx="25" cy="32.5" rx="1" ry="1.1" fill="#FFFFFF" />
            <ellipse cx="45" cy="32.5" rx="1" ry="1.1" fill="#FFFFFF" />
            <path d="M 30 45 Q 34 42, 38 45" stroke="#052E16" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          </g>
          <g className="ghost-accessory-float" transform="translate(14, 56)">
            {/* Mini skateboard details */}
            <rect x="0" y="0" width="40" height="6" rx="3" fill="#15803d" />
            <circle cx="8" cy="8" r="3" fill="#022c22" />
            <circle cx="32" cy="8" r="3" fill="#022c22" />
          </g>
        </svg>
      );
    case "peach":
      return (
        <svg viewBox="0 0 68 76" width="60" height="68" overflow="visible">
          <defs>
            <radialGradient id="ghost-body-peach" cx="38%" cy="26%" r="85%">
              <stop offset="0%" stopColor="#FFF8F2" />
              <stop offset="55%" stopColor="#FFDFC8" />
              <stop offset="100%" stopColor="#F0A589" />
            </radialGradient>
            <radialGradient id="ghost-cheek-peach" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="rgba(244,114,89,0.85)" />
              <stop offset="55%" stopColor="rgba(252,165,140,0.55)" />
              <stop offset="100%" stopColor="rgba(254,215,170,0)" />
            </radialGradient>
          </defs>
          <ellipse cx="34" cy="70" rx="20" ry="2.5" fill="rgba(30,41,59,0.18)" />
          <path d="M34 4 C 14 4, 6 18, 6 34 L 6 54 C 6 60, 9 64, 14 64 C 18 64, 20 60, 22 57 C 24 54, 27 54, 28 57 C 29 61, 31 64, 34 64 C 37 64, 39 61, 40 57 C 41 54, 44 54, 46 57 C 48 60, 50 64, 54 64 C 59 64, 62 60, 62 54 L 62 34 C 62 18, 54 4, 34 4 Z" fill="url(#ghost-body-peach)" stroke="rgba(30,41,59,0.12)" strokeWidth="0.9" />
          <ellipse cx="15" cy="40" rx="7" ry="4.5" fill="url(#ghost-cheek-peach)" />
          <ellipse cx="53" cy="40" rx="7" ry="4.5" fill="url(#ghost-cheek-peach)" />
          <g>
            <ellipse cx="24" cy="32" rx="3.2" ry="4.2" fill="#3F1208" />
            <ellipse cx="44" cy="32" rx="3.2" ry="4.2" fill="#3F1208" />
            <ellipse cx="25" cy="30" rx="1.2" ry="1.4" fill="#FFFFFF" />
            <ellipse cx="45" cy="30" rx="1.2" ry="1.4" fill="#FFFFFF" />
            <ellipse cx="34" cy="44" rx="2.3" ry="2.9" fill="#3F1208" />
          </g>
          <g className="ghost-accessory-float" transform="translate(12, -15)">
            {/* Cowboy hat */}
            <ellipse cx="22" cy="20" rx="18" ry="3" fill="#854d0e" />
            <path d="M 12 18 Q 22 6, 32 18 Z" fill="#a16207" />
            <rect x="14" y="16" width="16" height="2" fill="#451a03" />
          </g>
        </svg>
      );
    case "sky":
      return (
        <svg viewBox="0 0 68 76" width="60" height="68" overflow="visible">
          <defs>
            <radialGradient id="ghost-body-sky" cx="38%" cy="26%" r="85%">
              <stop offset="0%" stopColor="#F2FAFF" />
              <stop offset="55%" stopColor="#CFEAFF" />
              <stop offset="100%" stopColor="#94C7F0" />
            </radialGradient>
            <radialGradient id="ghost-cheek-sky" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="rgba(56,189,248,0.85)" />
              <stop offset="55%" stopColor="rgba(125,211,252,0.55)" />
              <stop offset="100%" stopColor="rgba(186,230,253,0)" />
            </radialGradient>
          </defs>
          <ellipse cx="34" cy="70" rx="20" ry="2.5" fill="rgba(30,41,59,0.18)" />
          <path d="M34 4 C 14 4, 6 18, 6 34 L 6 54 C 6 60, 9 64, 14 64 C 18 64, 20 60, 22 57 C 24 54, 27 54, 28 57 C 29 61, 31 64, 34 64 C 37 64, 39 61, 40 57 C 41 54, 44 54, 46 57 C 48 60, 50 64, 54 64 C 59 64, 62 60, 62 54 L 62 34 C 62 18, 54 4, 34 4 Z" fill="url(#ghost-body-sky)" stroke="rgba(30,41,59,0.12)" strokeWidth="0.9" />
          <ellipse cx="15" cy="40" rx="7" ry="4.5" fill="url(#ghost-cheek-sky)" />
          <ellipse cx="53" cy="40" rx="7" ry="4.5" fill="url(#ghost-cheek-sky)" />
          <g>
            <ellipse cx="24" cy="32" rx="4" ry="5" fill="#0C2540" />
            <ellipse cx="44" cy="32" rx="4" ry="5" fill="#0C2540" />
            <ellipse cx="25.4" cy="30.4" rx="1.4" ry="1.7" fill="#FFFFFF" />
            <ellipse cx="45.4" cy="30.4" rx="1.4" ry="1.7" fill="#FFFFFF" />
            <ellipse cx="34" cy="44.2" rx="2" ry="2.5" fill="#0C2540" />
          </g>
          <g className="ghost-accessory-float">
            {/* Glasses rim connection */}
            <circle cx="22" cy="32" r="9" fill="rgba(255,255,255,0.22)" stroke="#3F2517" strokeWidth="2" />
            <circle cx="46" cy="32" r="9" fill="rgba(255,255,255,0.22)" stroke="#3F2517" strokeWidth="2" />
            <path d="M 30 30 Q 34 28, 38 30" stroke="#3F2517" strokeWidth="2" fill="none" />
          </g>
        </svg>
      );
    case "noir":
      return (
        <svg viewBox="0 0 68 76" width="60" height="68" overflow="visible">
          <defs>
            <radialGradient id="ghost-body-noir" cx="38%" cy="26%" r="85%">
              <stop offset="0%" stopColor="#52525B" />
              <stop offset="55%" stopColor="#27272A" />
              <stop offset="100%" stopColor="#09090B" />
            </radialGradient>
            <radialGradient id="ghost-cheek-noir" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="rgba(244,114,182,0.85)" />
              <stop offset="55%" stopColor="rgba(249,168,212,0.55)" />
              <stop offset="100%" stopColor="rgba(251,207,232,0)" />
            </radialGradient>
          </defs>
          <ellipse cx="34" cy="70" rx="20" ry="2.5" fill="rgba(30,41,59,0.18)" />
          <path d="M34 4 C 14 4, 6 18, 6 34 L 6 54 C 6 60, 9 64, 14 64 C 18 64, 20 60, 22 57 C 24 54, 27 54, 28 57 C 29 61, 31 64, 34 64 C 37 64, 39 61, 40 57 C 41 54, 44 54, 46 57 C 48 60, 50 64, 54 64 C 59 64, 62 60, 62 54 L 62 34 C 62 18, 54 4, 34 4 Z" fill="url(#ghost-body-noir)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.9" />
          <ellipse cx="15" cy="40" rx="7" ry="4.5" fill="url(#ghost-cheek-noir)" />
          <ellipse cx="53" cy="40" rx="7" ry="4.5" fill="url(#ghost-cheek-noir)" />
          <g>
            <path d="M 30 45 L 38 45" stroke="#FAFAFA" strokeWidth="1.9" strokeLinecap="round" />
            <circle cx="24" cy="32" r="3" fill="#FAFAFA" />
            <circle cx="44" cy="32" r="3" fill="#FAFAFA" />
          </g>
          <g className="ghost-accessory-float">
            {/* Rockstar headphones */}
            <path d="M 12 34 Q 12 12, 34 12 Q 56 12, 56 34" fill="none" stroke="#e0f2fe" strokeWidth="3.2" />
            <rect x="8" y="30" width="6" height="10" rx="2" fill="#38bdf8" />
            <rect x="54" y="30" width="6" height="10" rx="2" fill="#38bdf8" />
          </g>
        </svg>
      );
    case "boo":
    default:
      return (
        <svg viewBox="0 0 68 76" width="60" height="68" overflow="visible">
          <defs>
            <radialGradient id="ghost-body-boo" cx="38%" cy="26%" r="85%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="55%" stopColor="#F9FAFF" />
              <stop offset="100%" stopColor="#D5DDF2" />
            </radialGradient>
            <radialGradient id="ghost-cheek-boo" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="rgba(251,113,133,0.85)" />
              <stop offset="55%" stopColor="rgba(253,164,175,0.55)" />
              <stop offset="100%" stopColor="rgba(254,205,211,0)" />
            </radialGradient>
          </defs>
          <ellipse cx="34" cy="70" rx="20" ry="2.5" fill="rgba(30,41,59,0.18)" />
          <path d="M34 4 C 14 4, 6 18, 6 34 L 6 54 C 6 60, 9 64, 14 64 C 18 64, 20 60, 22 57 C 24 54, 27 54, 28 57 C 29 61, 31 64, 34 64 C 37 64, 39 61, 40 57 C 41 54, 44 54, 46 57 C 48 60, 50 64, 54 64 C 59 64, 62 60, 62 54 L 62 34 C 62 18, 54 4, 34 4 Z" fill="url(#ghost-body-boo)" stroke="rgba(30,41,59,0.12)" strokeWidth="0.9" />
          <ellipse cx="15" cy="40" rx="7" ry="4.5" fill="url(#ghost-cheek-boo)" />
          <ellipse cx="53" cy="40" rx="7" ry="4.5" fill="url(#ghost-cheek-boo)" />
          <g>
            <path d="M 20 33 Q 24 28, 28 33" stroke="#1E293B" strokeWidth="1.9" fill="none" strokeLinecap="round" />
            <path d="M 40 33 Q 44 28, 48 33" stroke="#1E293B" strokeWidth="1.9" fill="none" strokeLinecap="round" />
            <path d="M 31 44 Q 34 47.5, 37 44" stroke="#1E293B" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            {/* Bowtie matching the reference */}
            <path d="M 30 53 L 38 57 L 38 53 L 30 57 Z" fill="#0B0F1A" />
            <circle cx="34" cy="55" r="1.8" fill="#0B0F1A" />
          </g>
          <g className="ghost-accessory-float">
            {/* Gentleman top hat */}
            <ellipse cx="34" cy="2" rx="20" ry="2.6" fill="#0B0F1A" />
            <ellipse cx="34" cy="1.5" rx="20" ry="1.6" fill="#1E2538" />
            <rect x="23" y="-14" width="22" height="16" rx="1" fill="#0B0F1A" />
            <rect x="23" y="-3" width="22" height="2.4" fill="#7C2D12" />
          </g>
        </svg>
      );
  }
};

export const GhostCompanion = ({ type }: GhostCompanionProps) => {
  const [showHint, setShowHint] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const controls = useAnimation();
  const location = useLocation();
  const isDarkPage = location.pathname === "/ground" || location.pathname === "/play";

  useEffect(() => {
    // Show hint when ghost type changes
    setShowHint(true);
    setIsDismissed(false);
    const timer = setTimeout(() => setShowHint(false), 8000);
    return () => clearTimeout(timer);
  }, [type]);

  const handleWake = async () => {
    setShowHint(true);
    await controls.start({
      y: [0, -12, 0],
      scaleY: [1, 0.85, 1.1, 1],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  };

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  const currentGhost = ghostDetails[type];

  return (
    <motion.div
      className="fixed left-6 bottom-6 z-[120] cursor-grab active:cursor-grabbing select-none"
      drag
      dragConstraints={{ left: 0, right: 300, top: -400, bottom: 0 }}
      animate={controls}
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative">
        {/* Speech Bubble Hint */}
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute -top-[82px] left-6 z-10 w-[240px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative rounded-2xl p-3 text-[11px] leading-snug shadow-lg ring-1 ring-black/5 ghost-hint-bob ${
              isDarkPage
                ? "bg-zinc-900 text-zinc-100 border border-zinc-800"
                : "bg-white text-black border border-black/5"
            }`}>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                {currentGhost.name} · companion
              </p>
              <p className={`mt-1 font-light ${isDarkPage ? "text-zinc-300" : "text-neutral-800"}`}>
                {currentGhost.hint}
              </p>
              <span 
                aria-hidden="true" 
                className={`absolute bottom-0 left-5 h-2.5 w-2.5 translate-y-1/2 rotate-45 ring-1 ring-black/5 ${
                  isDarkPage
                    ? "bg-zinc-900 border-r border-b border-zinc-800"
                    : "bg-white border-r border-b border-black/5"
                }`}
              ></span>
            </div>
          </motion.div>
        )}

        {/* Ghost Avatar */}
        <button
          type="button"
          onClick={handleWake}
          onDoubleClick={handleDismiss}
          title="Click to wake, double click to hide"
          className="relative block outline-none border-0 bg-transparent p-0 transition-opacity"
        >
          <GhostSVG type={type} />
        </button>
      </div>
    </motion.div>
  );
};
