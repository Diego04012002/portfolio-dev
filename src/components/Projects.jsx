import React, { useMemo, useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { projects, projectFilters } from "../data/mock";
import { Button } from "./ui/button";

const TechBadge = ({ name }) => (
  <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-border bg-secondary/60 text-muted-foreground">
    {name}
  </span>
);

const ProjectCard = ({ p }) => {
  return (
    <article className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-emerald-500/40 transition-colors duration-300">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-80" />
        {p.featured && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-md bg-emerald-500/90 text-white backdrop-blur">
            <Star size={12} className="fill-white" /> Destacado
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {p.title}
          </h3>
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
            {p.category}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {p.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <TechBadge key={t} name={t} />
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2">
          {p.demo && p.demo !== "#" && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <ExternalLink size={14} /> Demo
            </a>
          )}
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground ml-auto"
          >
            <Github size={14} /> Código
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const ref = useReveal();
  const [filter, setFilter] = useState("Todos");

  const filtered = useMemo(() => {
    if (filter === "Todos") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="proyectos" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">
              // Proyectos
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Trabajos seleccionados
            </h2>
            <p className="mt-3 text-muted-foreground">
              Algunos proyectos en los que he trabajado recientemente. Cada uno cuenta una historia distinta.
            </p>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 text-sm rounded-full border whitespace-nowrap transition-all focus-ring ${
                  filter === f
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground py-20">
            No hay proyectos en esta categoría todavía.
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="h-11 border-border bg-secondary/40 hover:bg-secondary"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github size={16} className="mr-2" /> Ver todo en GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
