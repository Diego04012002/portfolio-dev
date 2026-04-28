import React from "react";
import { ExternalLink, Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "../data/mock";
import { useReveal } from "../hooks/useReveal";

const ExperienceItem = ({ e, last }) => {
  const ref = useReveal();
  const Icon = e.type === "Empleo" ? Briefcase : GraduationCap;
  return (
    <div ref={ref} className="reveal relative pl-10 pb-10">
      {!last && (
        <span className="absolute left-[15px] top-7 bottom-0 w-px bg-border" />
      )}
      <span className="absolute left-0 top-0 h-8 w-8 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/40 inline-flex items-center justify-center text-emerald-500 dark:text-emerald-400">
        <Icon size={14} />
      </span>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-lg font-semibold text-foreground">{e.role}</h3>
        <span className="text-emerald-600 dark:text-emerald-400 font-medium">
          · {e.company}
        </span>
        <span className="text-xs font-mono px-2 py-0.5 rounded border border-border bg-secondary/60 text-muted-foreground">
          {e.type}
        </span>
      </div>
      <p className="mt-1 text-xs font-mono text-muted-foreground">{e.period}</p>
      <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
        {e.description}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {e.stack.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono px-2 py-0.5 rounded border border-border bg-card text-muted-foreground"
          >
            {t}
          </span>
        ))}
        {e.link && (
          <a
            href={e.link}
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Visitar <ExternalLink size={11} />
          </a>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const headRef = useReveal();
  return (
    <section id="experiencia" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div ref={headRef} className="reveal max-w-2xl mb-12">
          <span className="text-xs font-mono text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">
            // Experiencia
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Trayectoria profesional
          </h2>
          <p className="mt-3 text-muted-foreground">
            Roles donde he aprendido, fallado y crecido como desarrollador.
          </p>
        </div>

        <div className="max-w-3xl">
          {experiences.map((e, i) => (
            <ExperienceItem
              key={e.id}
              e={e}
              last={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
