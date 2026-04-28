import React from "react";
import { Award, Calendar } from "lucide-react";
import { certifications } from "../data/data";
import { useReveal } from "../hooks/useReveal";

const CertCard = ({ c }) => {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className="reveal group relative rounded-2xl border border-border bg-card p-6 md:p-7 overflow-hidden hover:border-emerald-500/40 transition-colors"
    >
      <div
        aria-hidden
        className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <div className="flex items-start justify-between gap-4">
        <div className="h-11 w-11 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 inline-flex items-center justify-center ring-1 ring-emerald-500/20">
          <Award size={20} />
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground border border-border rounded-full px-2.5 py-1 bg-secondary/40">
          <Calendar size={11} /> {c.year}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground leading-snug">
        {c.title}
      </h3>
      <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
        {c.institution}
      </p>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {c.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {c.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono px-2 py-0.5 rounded border border-border bg-secondary/60 text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
};

const Certifications = () => {
  const headRef = useReveal();
  return (
    <section id="certificados" className="relative py-24 md:py-32 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div ref={headRef} className="reveal max-w-2xl mb-10">
          <span className="text-xs font-mono text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">
            // Formación
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Certificaciones &amp; estudios
          </h2>
          <p className="mt-3 text-muted-foreground">
            Una formación sólida, complementada con aprendizaje continuo.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c) => (
            <CertCard key={c.id} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
