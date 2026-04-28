import React, { useState } from "react";
import { skills } from "../data/mock";
import { useReveal } from "../hooks/useReveal";
import { Layers, Server, Database, Wrench } from "lucide-react";

const categoryIcons = {
  Frontend: Layers,
  Backend: Server,
  "Bases de datos": Database,
  Herramientas: Wrench,
};

const SkillBar = ({ name, level }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal">
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-[11px] font-mono text-muted-foreground tabular-nums">
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-[width] duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const headRef = useReveal();
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);
  const Icon = categoryIcons[active];

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div ref={headRef} className="reveal max-w-2xl">
          <span className="text-xs font-mono text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">
            // Stack técnico
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Herramientas con las que trabajo
          </h2>
          <p className="mt-3 text-muted-foreground">
            Stack agrupado por categoría. Cada barra refleja el nivel de comodidad y experiencia real.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar">
            {categories.map((c) => {
              const I = categoryIcons[c];
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left whitespace-nowrap transition-all focus-ring ${
                    isActive
                      ? "border-emerald-500/40 bg-emerald-500/5 text-foreground"
                      : "border-border bg-card/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className={`h-9 w-9 rounded-lg inline-flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-emerald-500/15 text-emerald-500 dark:text-emerald-400"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <I size={16} />
                  </span>
                  <div>
                    <div className="text-sm font-medium">{c}</div>
                    <div className="text-[11px] text-muted-foreground">
                      {skills[c].length} skills
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bars */}
          <div className="lg:col-span-8 rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 inline-flex items-center justify-center">
                <Icon size={18} />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{active}</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {skills[active].map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
