import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react";
import { personal, navLinks } from "../data/mock";

const Footer = () => {
  const year = new Date().getFullYear();
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="relative border-t border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30 inline-flex items-center justify-center text-emerald-500 dark:text-emerald-400 font-mono font-bold">
                D
              </span>
              <span className="font-semibold tracking-tight text-foreground text-lg">
                {personal.name}
                <span className="text-emerald-500 dark:text-emerald-400">.dev</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              {personal.role} desde {personal.location}. Construyendo productos digitales con propósito.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/40 transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/40 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={personal.social.email}
                aria-label="Email"
                className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/40 transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => handleClick(l.id)}
                    className="text-sm text-foreground/80 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              ¿Trabajamos juntos?
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Estoy disponible para nuevos proyectos. Cuéntame qué necesitas.
            </p>
            <button
              onClick={() => handleClick("contacto")}
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Empezar conversación <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} {personal.fullName}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
            Construido con <Heart size={12} className="text-emerald-500 fill-emerald-500" /> usando React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
