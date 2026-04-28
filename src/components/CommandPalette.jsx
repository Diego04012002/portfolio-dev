import React, { useEffect, useState, useMemo } from "react";
import { Search, ArrowRight, Github, Linkedin, Mail, Moon, Sun, FileText, Command } from "lucide-react";
import { navLinks, personal } from "../data/data";
import { useTheme } from "../context/ThemeContext";

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const { theme, toggle } = useTheme();

  const navItems = useMemo(
    () =>
      navLinks.map((l) => ({
        type: "nav",
        id: l.id,
        label: `Ir a · ${l.label}`,
        action: () => {
          const el = document.getElementById(l.id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        },
      })),
    []
  );

  const actions = useMemo(
    () => [
      ...navItems,
      {
        type: "action",
        id: "theme",
        label: theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
        icon: theme === "dark" ? Sun : Moon,
        action: toggle,
      },
      {
        type: "action",
        id: "cv",
        label: "Descargar CV (PDF)",
        icon: FileText,
        action: () => {
          const link = document.createElement("a");
          link.href = "/cv/Diego_Alejandro_García_Deus_CV_.pdf";
          link.download = "Diego_Alejandro_García_Deus_CV.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        },
      },
      {
        type: "link",
        id: "github",
        label: "Abrir GitHub",
        icon: Github,
        action: () => window.open(personal.social.github, "_blank"),
      },
      {
        type: "link",
        id: "linkedin",
        label: "Abrir LinkedIn",
        icon: Linkedin,
        action: () => window.open(personal.social.linkedin, "_blank"),
      },
      {
        type: "link",
        id: "email",
        label: "Enviar email",
        icon: Mail,
        action: () => (window.location.href = personal.social.email),
      },
    ],
    [navItems, theme, toggle]
  );

  const filtered = useMemo(() => {
    if (!q.trim()) return actions;
    const s = q.toLowerCase();
    return actions.filter((a) => a.label.toLowerCase().includes(s));
  }, [q, actions]);

  useEffect(() => {
    const onKey = (e) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      if (((isMac && e.metaKey) || (!isMac && e.ctrlKey)) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
      if (open) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setActive((i) => Math.min(i + 1, filtered.length - 1));
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setActive((i) => Math.max(i - 1, 0));
        }
        if (e.key === "Enter") {
          e.preventDefault();
          const sel = filtered[active];
          if (sel) {
            sel.action();
            setOpen(false);
            setQ("");
            setActive(0);
          }
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active]);

  useEffect(() => {
    setActive(0);
  }, [q]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center pt-[12vh] px-4"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-xl rounded-2xl border border-border bg-card shadow-2xl shadow-emerald-500/5 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 border-b border-border">
          <Search size={16} className="text-muted-foreground shrink-0" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar acciones, secciones, enlaces…"
            className="flex-1 h-12 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded border border-border text-muted-foreground bg-secondary">
            ESC
          </kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <li className="text-center text-sm text-muted-foreground py-8">
              Sin resultados…
            </li>
          )}
          {filtered.map((it, i) => {
            const Icon = it.icon || ArrowRight;
            const isActive = i === active;
            return (
              <li key={it.id}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    it.action();
                    setOpen(false);
                    setQ("");
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left transition-colors ${
                    isActive
                      ? "bg-emerald-500/10 text-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <span
                    className={`h-7 w-7 rounded-md inline-flex items-center justify-center ${
                      isActive
                        ? "bg-emerald-500/20 text-emerald-500 dark:text-emerald-400"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <Icon size={14} />
                  </span>
                  <span className="flex-1 truncate">{it.label}</span>
                  <span className="text-[10px] font-mono uppercase text-muted-foreground/70">
                    {it.type}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-between text-[11px] px-4 py-2 border-t border-border bg-secondary/30 text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Command size={11} /> + K para abrir
          </span>
          <span>
            <kbd className="font-mono px-1 py-0.5 rounded bg-card border border-border">↑↓</kbd>{" "}
            navegar · <kbd className="font-mono px-1 py-0.5 rounded bg-card border border-border">⏎</kbd> seleccionar
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
