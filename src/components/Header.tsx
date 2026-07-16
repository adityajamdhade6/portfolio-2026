import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isGround = location.pathname.startsWith("/ground");
  const isPlay = location.pathname.startsWith("/play");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "glass rounded-full px-4 py-2 shadow-sm"
                : "bg-transparent px-0"
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--foreground)] hover:opacity-70 transition-opacity"
            >
              aditya.
            </Link>

            {/* Desktop nav — glass pill style */}
            <nav className="hidden md:flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--background)]/60 backdrop-blur-md px-1.5 py-1">
              {[
                { to: "/", label: "playground" },
                { to: "/ground", label: "/ground" },
                { to: "/play", label: "/play" },
                { to: "/about", label: "about" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`rounded-full px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] transition-all duration-200 ${
                    isActive(to)
                      ? "bg-[var(--foreground)] text-[var(--background)]"
                      : "text-[var(--ink-soft)] hover:text-[var(--foreground)] hover:bg-[var(--line)]"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right side CTA */}
            <a
              href="mailto:adityajamdhade6@gmail.com"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--ink-soft)] transition-all duration-200 hover:text-[var(--foreground)] hover:border-[var(--foreground)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              hire me
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[var(--foreground)] p-1 hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--background)] transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-8 py-6">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--ink-soft)]">
              aditya.
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--foreground)] p-2 hover:opacity-70 transition-opacity"
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col items-start justify-center flex-1 gap-6">
            {[
              { to: "/", label: "playground" },
              { to: "/ground", label: "/ground" },
              { to: "/play", label: "/play" },
              { to: "/about", label: "about" },
              { to: "/contact", label: "contact" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-[2rem] font-semibold tracking-tight transition-opacity hover:opacity-60 ${
                  isActive(to) ? "text-[var(--brand)]" : "text-[var(--foreground)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <a
            href="mailto:adityajamdhade6@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-soft)] pb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            adityajamdhade6@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
