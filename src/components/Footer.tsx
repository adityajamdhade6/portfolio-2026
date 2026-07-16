import { Link } from "react-router-dom";

const Footer = () => {
  const email = "adityajamdhade6@gmail.com";

  return (
    <footer className="relative mt-auto border-t border-[var(--line)] px-4 py-14 sm:px-6 bg-[var(--background)]">
      {/* CTA section */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[24px] border border-[var(--line-strong)] px-6 py-10 sm:rounded-[28px] sm:px-10 sm:py-14 mb-14"
        style={{
          background: "linear-gradient(135deg, color-mix(in oklab, var(--brand) 8%, var(--background)) 0%, var(--background) 60%, color-mix(in oklab, var(--accent) 6%, var(--background)) 100%)"
        }}
      >
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">let's work together</p>
            <h3 className="mt-3 text-[clamp(1.8rem,4.5vw,3rem)] font-semibold leading-[0.95] tracking-tight text-[var(--foreground)]">
              Got a messy problem?<br/>
              <span className="brand-gradient-text">I like those.</span>
            </h3>
          </div>
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-transform hover:-translate-y-0.5"
          >
            Email me
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
        <p className="mt-8 max-w-md text-sm text-[var(--ink-base)]">
          Or see the visual side at <Link className="font-semibold text-[var(--foreground)] underline decoration-[var(--accent)] decoration-[2px] underline-offset-[5px]" to="/play">/play</Link>.
        </p>
      </div>

      {/* Footer bottom bar */}
      <div className="mx-auto max-w-6xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--ink-mute)]">
            ADITYA JAMDHADE · PRODUCT & GROWTH BUILDER
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-1.5 block text-lg font-semibold tracking-tight text-[var(--foreground)] hover:text-[var(--brand)] transition-colors"
          >
            {email}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-2">
          {[
            { href: "https://x.com/adityajamdhade", label: "X / Twitter" },
            { href: "https://www.linkedin.com/in/adityajamdhade", label: "LinkedIn" },
            { href: "https://www.behance.net/adityajamdhade6", label: "Behance" },
            { href: `mailto:${email}`, label: "Email" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--line-strong)] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)] transition-all hover:text-[var(--foreground)] hover:border-[var(--foreground)]"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Badges Row */}
      <div className="mx-auto max-w-6xl mt-8 flex flex-col gap-3 border-t border-[var(--line)] pt-6 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--ink-mute)]">
          © {new Date().getFullYear()} · Built with care, shipped with doubt
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-mute)]">vibe-coded |</span>
          {[
            { label: "Claude Pro", color: "#ea580c" },
            { label: "Antigravity", color: "var(--brand)" },
            { label: "Cursor", color: "#71717a" },
            { label: "Vercel", color: "var(--foreground)" },
          ].map(({ label, color }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--tag-bg)] px-2.5 py-0.5 font-mono text-[9px] text-[var(--ink-soft)] select-none"
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }}></span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
