import { motion } from "framer-motion";
import React from "react";

interface BadgeProps {
  href: string;
  label?: string;
  sublabel?: string;
  color: string;
  icon: React.ReactNode;
  style: React.CSSProperties;
  hasText?: boolean;
}

const FloatingBadge = ({ href, label, sublabel, color, icon, style, hasText }: BadgeProps) => {
  return (
    <motion.div
      className="absolute pointer-events-auto"
      style={style}
      animate={{
        y: [0, -12, 0],
        rotate: [0, 1.5, -1.5, 0],
      }}
      transition={{
        duration: 4.5 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={sublabel || "floating widget"}
        className="group block"
      >
        <div className={`glass inline-flex items-center gap-2.5 rounded-[14px] pl-1.5 py-1.5 ${hasText ? "pr-3.5 py-2" : "pr-3"} shadow-md hover:scale-[1.05] hover:shadow-lg transition-all duration-350 select-none`}>
          <span
            className={`relative grid place-items-center rounded-[8px] text-white ${hasText ? "h-10 w-10 rounded-[10px]" : "h-9 w-9"}`}
            style={{
              background: color,
              boxShadow: "0 1px 0 rgba(255,255,255,0.55) inset, 0 -1px 1px rgba(0,0,0,0.12) inset",
            }}
          >
            {icon}
          </span>
          {hasText && sublabel && (
            <div className="flex flex-col leading-tight pr-1">
              <span className="font-mono uppercase tracking-[0.16em] text-[var(--ink-soft)] text-[10px]">
                {label}
              </span>
              <span className="font-semibold text-[var(--foreground)] text-[13px] mt-0.5">
                {sublabel}
              </span>
            </div>
          )}
        </div>
      </a>
    </motion.div>
  );
};

export const FloatingBadges = () => {
  const desktopBadges = [
    {
      href: "https://open.spotify.com",
      label: "listen",
      sublabel: "Spotify",
      color: "linear-gradient(180deg, color-mix(in oklab, #1DB954 70%, white) 0%, #1DB954 55%, color-mix(in oklab, #1DB954 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0Zm5.5 17.3a.74.74 0 0 1-1.02.24c-2.79-1.7-6.3-2.09-10.43-1.14a.74.74 0 1 1-.33-1.45c4.5-1.03 8.4-.58 11.54 1.33.35.21.46.68.24 1.02Zm1.46-3.25a.93.93 0 0 1-1.27.3c-3.2-1.97-8.07-2.54-11.85-1.39a.93.93 0 0 1-.54-1.78c4.33-1.32 9.71-.68 13.36 1.6.44.27.58.84.3 1.27Zm.13-3.38c-3.82-2.27-10.14-2.48-13.8-1.37a1.11 1.11 0 1 1-.64-2.13c4.22-1.28 11.23-1.03 15.65 1.59a1.11 1.11 0 0 1-1.21 1.91Z" />
        </svg>
      ),
      style: { top: "7%", left: "4%", transform: "rotate(-10deg)" },
      hasText: true,
    },
    {
      href: "https://claude.ai/",
      label: "reason",
      sublabel: "Claude",
      color: "linear-gradient(180deg, color-mix(in oklab, #D97757 70%, white) 0%, #D97757 55%, color-mix(in oklab, #D97757 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M12 2c.45 0 .86.3.99.73l1.72 5.56 5.56 1.72a1.04 1.04 0 0 1 0 1.98l-5.56 1.72-1.72 5.56a1.04 1.04 0 0 1-1.98 0l-1.72-5.56-5.56-1.72a1.04 1.04 0 0 1 0-1.98l5.56-1.72 1.72-5.56A1.04 1.04 0 0 1 12 2Z" />
        </svg>
      ),
      style: { top: "8%", right: "5%", transform: "rotate(1deg)" },
      hasText: true,
    },
    {
      href: "https://www.youtube.com",
      label: "watch",
      sublabel: "YouTube",
      color: "linear-gradient(180deg, color-mix(in oklab, #FF0033 70%, white) 0%, #FF0033 55%, color-mix(in oklab, #FF0033 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9 .5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
        </svg>
      ),
      style: { top: "17%", left: "22%", transform: "rotate(-7deg)" },
      hasText: true,
    },
    {
      href: "https://cursor.com/",
      label: "write",
      sublabel: "Cursor",
      color: "linear-gradient(180deg, color-mix(in oklab, #000000 70%, white) 0%, #000000 55%, color-mix(in oklab, #000000 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="m11.925 24 10.425-6-10.425-6L1.5 18l10.425 6Zm10.425-6V6l-10.425-6v12L22.35 18ZM11.925 12V0L1.5 6v12l10.425-6Z" />
        </svg>
      ),
      style: { top: "15%", right: "23%", transform: "rotate(0deg)" },
      hasText: true,
    },
    {
      href: "https://github.com/adityajamdhade6",
      label: "code",
      sublabel: "GitHub",
      color: "linear-gradient(180deg, color-mix(in oklab, #0a0a0a 70%, white) 0%, #0a0a0a 55%, color-mix(in oklab, #0a0a0a 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.69-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.05.78 2.13v3.16c0 .31.21.67.8.56 4.57-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      ),
      style: { top: "42%", left: "2%", transform: "rotate(-14deg)" },
      hasText: true,
    },
    {
      href: "https://chatgpt.com",
      label: "ask",
      sublabel: "ChatGPT",
      color: "linear-gradient(180deg, color-mix(in oklab, #111111 70%, white) 0%, #111111 55%, color-mix(in oklab, #111111 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
          <path d="M21.55 9.88a5.37 5.37 0 0 0-.46-4.41 5.43 5.43 0 0 0-5.85-2.6A5.37 5.37 0 0 0 11.17 1a5.44 5.44 0 0 0-5.18 3.75 5.37 5.37 0 0 0-3.6 2.6 5.43 5.43 0 0 0 .67 6.37 5.37 5.37 0 0 0 .46 4.41 5.43 5.43 0 0 0 5.85 2.6A5.37 5.37 0 0 0 13.04 23a5.44 5.44 0 0 0 5.18-3.76 5.37 5.37 0 0 0 3.59-2.6 5.43 5.43 0 0 0-.68-7.38Zm-8.08 11.34a4.02 4.02 0 0 1-2.58-.94l.12-.07 4.3-2.48a.71.71 0 0 0 .35-.61v-6.06l1.82 1.05a.07.07 0 0 1 .04.05v5.02a4.05 4.05 0 0 1-4.05 4.04ZM4.8 17.56a4.02 4.02 0 0 1-.48-2.71l.12.08 4.3 2.48a.69.69 0 0 0 .7 0l5.26-3.03v2.1a.08.08 0 0 1-.03.06l-4.35 2.51a4.05 4.05 0 0 1-5.52-1.49Zm-1.12-9.3a4.03 4.03 0 0 1 2.13-1.78v5.13a.7.7 0 0 0 .35.6l5.23 3.01-1.82 1.05a.06.06 0 0 1-.06 0l-4.34-2.5a4.04 4.04 0 0 1-1.49-5.5Zm14.94 3.47-5.25-3.04 1.82-1.05a.06.06 0 0 1 .06 0l4.35 2.51a4.05 4.05 0 0 1-.6 7.3v-5.11a.71.71 0 0 0-.38-.6Zm1.81-2.72-.13-.08-4.29-2.5a.7.7 0 0 0-.7 0L10.04 9.47v-2.1a.07.07 0 0 1 .03-.06l4.35-2.51a4.05 4.05 0 0 1 6.01 4.19ZM9.05 13.27l-1.82-1.05a.08.08 0 0 1-.04-.05V7.15a4.05 4.05 0 0 1 6.64-3.11l-.13.07-4.3 2.48a.71.71 0 0 0-.35.61Zm.99-2.13 2.34-1.35 2.34 1.35v2.7L12.38 15.2l-2.34-1.35Z" />
        </svg>
      ),
      style: { top: "44%", right: "2%", transform: "rotate(5deg)" },
      hasText: true,
    },

    {
      href: "https://gemini.google.com/",
      label: "search",
      sublabel: "Gemini",
      color: "linear-gradient(180deg, color-mix(in oklab, #4285F4 70%, white) 0%, #4285F4 55%, color-mix(in oklab, #4285F4 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M12 1c.28 5.07 1.65 8.31 4.35 9.72 2.7 1.41 5.52 2.2 8.65 2.28-3.13.08-5.95.87-8.65 2.28C13.65 16.69 12.28 19.93 12 25c-.28-5.07-1.65-8.31-4.35-9.72-2.7-1.41-5.52-2.2-8.65-2.28 3.13-.08 5.95-.87 8.65-2.28C10.35 9.31 11.72 6.07 12 1Z" />
        </svg>
      ),
      style: { bottom: "27%", right: "4%", transform: "rotate(3deg)" },
      hasText: true,
    },
    {
      href: "https://letterboxd.com",
      label: "films",
      sublabel: "Letterboxd",
      color: "linear-gradient(180deg, color-mix(in oklab, #14181C 70%, white) 0%, #14181C 55%, color-mix(in oklab, #14181C 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 48 24" className="h-4.5 w-9 fill-current">
          <circle cx="10" cy="12" r="9" fill="#00E054" />
          <circle cx="24" cy="12" r="9" fill="#40BCF4" />
          <circle cx="38" cy="12" r="9" fill="#FF8000" />
        </svg>
      ),
      style: { bottom: "9%", left: "20%", transform: "rotate(-1deg)" },
      hasText: true,
    },
    {
      href: "https://chatgpt.com",
      label: "ask",
      sublabel: "ChatGPT",
      color: "linear-gradient(180deg, color-mix(in oklab, #10A37F 70%, white) 0%, #10A37F 55%, color-mix(in oklab, #10A37F 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M21.55 9.88a5.37 5.37 0 0 0-.46-4.41 5.43 5.43 0 0 0-5.85-2.6A5.37 5.37 0 0 0 11.17 1a5.44 5.44 0 0 0-5.18 3.75 5.37 5.37 0 0 0-3.6 2.6 5.43 5.43 0 0 0 .67 6.37 5.37 5.37 0 0 0 .46 4.41 5.43 5.43 0 0 0 5.85 2.6A5.37 5.37 0 0 0 13.04 23a5.44 5.44 0 0 0 5.18-3.76 5.37 5.37 0 0 0 3.59-2.6 5.43 5.43 0 0 0-.68-7.38Zm-8.08 11.34a4.02 4.02 0 0 1-2.58-.94l.12-.07 4.3-2.48a.71.71 0 0 0 .35-.61v-6.06l1.82 1.05a.07.07 0 0 1 .04.05v5.02a4.05 4.05 0 0 1-4.05 4.04ZM4.8 17.56a4.02 4.02 0 0 1-.48-2.71l.12.08 4.3 2.48a.69.69 0 0 0 .7 0l5.26-3.03v2.1a.08.08 0 0 1-.03.06l-4.35 2.51a4.05 4.05 0 0 1-5.52-1.49Zm-1.12-9.3a4.03 4.03 0 0 1 2.13-1.78v5.13a.7.7 0 0 0 .35.6l5.23 3.01-1.82 1.05a.06.06 0 0 1-.06 0l-4.34-2.5a4.04 4.04 0 0 1-1.49-5.5Zm14.94 3.47-5.25-3.04 1.82-1.05a.06.06 0 0 1 .06 0l4.35 2.51a4.05 4.05 0 0 1-.6 7.3v-5.11a.71.71 0 0 0-.38-.6Zm1.81-2.72-.13-.08-4.29-2.5a.7.7 0 0 0-.7 0L10.04 9.47v-2.1a.07.07 0 0 1 .03-.06l4.35-2.51a4.05 4.05 0 0 1 6.01 4.19ZM9.05 13.27l-1.82-1.05a.08.08 0 0 1-.04-.05V7.15a4.05 4.05 0 0 1 6.64-3.11l-.13.07-4.3 2.48a.71.71 0 0 0-.35.61Zm.99-2.13 2.34-1.35 2.34 1.35v2.7L12.38 15.2l-2.34-1.35Z" />
        </svg>
      ),
      style: { bottom: "8%", right: "20%", transform: "rotate(-9deg)" },
      hasText: true,
    },
  ];

  const mobileBadges = [
    {
      href: "https://open.spotify.com",
      color: "linear-gradient(180deg, color-mix(in oklab, #1DB954 70%, white) 0%, #1DB954 55%, color-mix(in oklab, #1DB954 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0Zm5.5 17.3a.74.74 0 0 1-1.02.24c-2.79-1.7-6.3-2.09-10.43-1.14a.74.74 0 1 1-.33-1.45c4.5-1.03 8.4-.58 11.54 1.33.35.21.46.68.24 1.02Zm1.46-3.25a.93.93 0 0 1-1.27.3c-3.2-1.97-8.07-2.54-11.85-1.39a.93.93 0 0 1-.54-1.78c4.33-1.32 9.71-.68 13.36 1.6.44.27.58.84.3 1.27Zm.13-3.38c-3.82-2.27-10.14-2.48-13.8-1.37a1.11 1.11 0 1 1-.64-2.13c4.22-1.28 11.23-1.03 15.65 1.59a1.11 1.11 0 0 1-1.21 1.91Z" />
        </svg>
      ),
      style: { top: "8%", left: "5%", transform: "rotate(-12deg)" },
      hasText: false,
    },
    {
      href: "https://claude.ai/",
      color: "linear-gradient(180deg, color-mix(in oklab, #D97757 70%, white) 0%, #D97757 55%, color-mix(in oklab, #D97757 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
          <path d="M12 2c.45 0 .86.3.99.73l1.72 5.56 5.56 1.72a1.04 1.04 0 0 1 0 1.98l-5.56 1.72-1.72 5.56a1.04 1.04 0 0 1-1.98 0l-1.72-5.56-5.56-1.72a1.04 1.04 0 0 1 0-1.98l5.56-1.72 1.72-5.56A1.04 1.04 0 0 1 12 2Z" />
        </svg>
      ),
      style: { top: "8%", right: "5%", transform: "rotate(4deg)" },
      hasText: false,
    },
    {
      href: "https://cursor.com/",
      color: "linear-gradient(180deg, color-mix(in oklab, #000000 70%, white) 0%, #000000 55%, color-mix(in oklab, #000000 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
          <path d="m11.925 24 10.425-6-10.425-6L1.5 18l10.425 6Zm10.425-6V6l-10.425-6v12L22.35 18ZM11.925 12V0L1.5 6v12l10.425-6Z" />
        </svg>
      ),
      style: { top: "40%", left: "3%", transform: "rotate(-9deg)" },
      hasText: false,
    },
    {
      href: "https://gemini.google.com/",
      color: "linear-gradient(180deg, color-mix(in oklab, #4285F4 70%, white) 0%, #4285F4 55%, color-mix(in oklab, #4285F4 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
          <path d="M12 1c.28 5.07 1.65 8.31 4.35 9.72 2.7 1.41 5.52 2.2 8.65 2.28-3.13.08-5.95.87-8.65 2.28C13.65 16.69 12.28 19.93 12 25c-.28-5.07-1.65-8.31-4.35-9.72-2.7-1.41-5.52-2.2-8.65-2.28 3.13-.08 5.95-.87 8.65-2.28C10.35 9.31 11.72 6.07 12 1Z" />
        </svg>
      ),
      style: { top: "40%", right: "3%", transform: "rotate(2deg)" },
      hasText: false,
    },
    {
      href: "https://letterboxd.com",
      color: "linear-gradient(180deg, color-mix(in oklab, #14181C 70%, white) 0%, #14181C 55%, color-mix(in oklab, #14181C 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 48 24" className="h-4.5 w-9 fill-current">
          <circle cx="10" cy="12" r="9" fill="#00E054" />
          <circle cx="24" cy="12" r="9" fill="#40BCF4" />
          <circle cx="38" cy="12" r="9" fill="#FF8000" />
        </svg>
      ),
      style: { bottom: "11%", left: "7%", transform: "rotate(1deg)" },
      hasText: false,
    },
    {
      href: "https://chatgpt.com",
      color: "linear-gradient(180deg, color-mix(in oklab, #10A37F 70%, white) 0%, #10A37F 55%, color-mix(in oklab, #10A37F 88%, black) 100%)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M21.55 9.88a5.37 5.37 0 0 0-.46-4.41 5.43 5.43 0 0 0-5.85-2.6A5.37 5.37 0 0 0 11.17 1a5.44 5.44 0 0 0-5.18 3.75 5.37 5.37 0 0 0-3.6 2.6 5.43 5.43 0 0 0 .67 6.37 5.37 5.37 0 0 0 .46 4.41 5.43 5.43 0 0 0 5.85 2.6A5.37 5.37 0 0 0 13.04 23a5.44 5.44 0 0 0 5.18-3.76 5.37 5.37 0 0 0 3.59-2.6 5.43 5.43 0 0 0-.68-7.38Zm-8.08 11.34a4.02 4.02 0 0 1-2.58-.94l.12-.07 4.3-2.48a.71.71 0 0 0 .35-.61v-6.06l1.82 1.05a.07.07 0 0 1 .04.05v5.02a4.05 4.05 0 0 1-4.05 4.04ZM4.8 17.56a4.02 4.02 0 0 1-.48-2.71l.12.08 4.3 2.48a.69.69 0 0 0 .7 0l5.26-3.03v2.1a.08.08 0 0 1-.03.06l-4.35 2.51a4.05 4.05 0 0 1-5.52-1.49Zm-1.12-9.3a4.03 4.03 0 0 1 2.13-1.78v5.13a.7.7 0 0 0 .35.6l5.23 3.01-1.82 1.05a.06.06 0 0 1-.06 0l-4.34-2.5a4.04 4.04 0 0 1-1.49-5.5Zm14.94 3.47-5.25-3.04 1.82-1.05a.06.06 0 0 1 .06 0l4.35 2.51a4.05 4.05 0 0 1-.6 7.3v-5.11a.71.71 0 0 0-.38-.6Zm1.81-2.72-.13-.08-4.29-2.5a.7.7 0 0 0-.7 0L10.04 9.47v-2.1a.07.07 0 0 1 .03-.06l4.35-2.51a4.05 4.05 0 0 1 6.01 4.19ZM9.05 13.27l-1.82-1.05a.08.08 0 0 1-.04-.05V7.15a4.05 4.05 0 0 1 6.64-3.11l-.13.07-4.3 2.48a.71.71 0 0 0-.35.61Zm.99-2.13 2.34-1.35 2.34 1.35v2.7L12.38 15.2l-2.34-1.35Z" />
        </svg>
      ),
      style: { bottom: "11%", right: "7%", transform: "rotate(-10deg)" },
      hasText: false,
    },
  ];

  return (
    <>
      {/* Mobile absolute drifting layout */}
      <div 
        className="block md:hidden pointer-events-none absolute inset-0 w-full h-full overflow-hidden z-10"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 55% 38% at center, transparent 55%, black 88%)",
          maskImage: "radial-gradient(ellipse 55% 38% at center, transparent 55%, black 88%)"
        }}
      >
        {mobileBadges.map((badge, idx) => (
          <FloatingBadge key={idx} {...badge} />
        ))}
      </div>

      {/* Desktop absolute drifting layout */}
      <div 
        className="hidden md:block pointer-events-none absolute inset-0 w-full h-full overflow-hidden z-10"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 55% 38% at center, transparent 55%, black 88%)",
          maskImage: "radial-gradient(ellipse 55% 38% at center, transparent 55%, black 88%)"
        }}
      >
        {desktopBadges.map((badge, idx) => (
          <FloatingBadge key={idx} {...badge} />
        ))}
      </div>
    </>
  );
};
