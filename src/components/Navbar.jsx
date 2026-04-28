import React, { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Sparkles, Command } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { navLinks, personal } from "../data/data";
import { Button } from "./ui/button";

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
      const offset = window.scrollY + 120;
      let current = "home";
      for (const s of sections) {
        if (s.offsetTop <= offset) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 glass border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick("home")}
          className="flex items-center gap-2 group focus-ring rounded-md"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 ring-1 ring-emerald-500/20">
            <Sparkles className="h-4.5 w-4.5" size={18} />
          </span>
          <span className="font-semibold tracking-tight text-foreground">
            {personal.name}
            <span className="text-emerald-500 dark:text-emerald-400">.dev</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors focus-ring ${
                active === l.id
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const isMac = navigator.platform.toUpperCase().includes("MAC");
              const ev = new KeyboardEvent("keydown", {
                key: "k",
                metaKey: isMac,
                ctrlKey: !isMac,
                bubbles: true,
              });
              window.dispatchEvent(ev);
            }}
            aria-label="Abrir buscador"
            className="hidden md:inline-flex items-center gap-2 h-9 px-3 rounded-md border border-border bg-secondary/40 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors focus-ring"
          >
            <Command size={13} />
            <span className="text-xs font-mono">K</span>
          </button>
          <button
            onClick={toggle}
            aria-label="Cambiar tema"
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border bg-secondary/40 hover:bg-secondary text-foreground transition-colors focus-ring"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          {/* <Button
            onClick={() => handleClick("contacto")}
            className="hidden sm:inline-flex h-9 bg-emerald-500 hover:bg-emerald-600 text-white border-0"
          >
            Contactar
          </Button> */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-md border border-border bg-secondary/40 text-foreground focus-ring"
            aria-label="Menú"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 glass">
          <nav className="max-w-6xl mx-auto px-5 py-3 flex flex-col">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => handleClick(l.id)}
                className={`text-left px-3 py-2.5 rounded-md text-sm transition-colors ${
                  active === l.id
                    ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
