import React from "react";
import { useReveal } from "../hooks/useReveal";
import { strengths, personal } from "../data/data";
import { CheckCircle2, Briefcase, Globe2, Zap } from "lucide-react";

const Pillar = ({ icon: Icon, title, text }) => (
  <div className="rounded-xl border border-border bg-card/60 p-5">
    <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 inline-flex items-center justify-center mb-3 ring-1 ring-emerald-500/20">
      <Icon size={18} />
    </div>
    <h4 className="font-semibold text-foreground mb-1">{title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

const About = () => {
  const ref = useReveal();
  return (
    <section id="sobre-mi" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div ref={ref} className="reveal max-w-3xl">
          <span className="text-xs font-mono text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">
            // Sobre mí
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Construyo software que la gente{" "}
            <span className="text-emerald-500 dark:text-emerald-400">realmente usa.</span>
          </h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>{personal.bio}</p>
            <p>{personal.bioExtended}</p>
            <div className="pt-3">
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                Puntos fuertes
              </h3>
              <div className="flex flex-wrap gap-2">
                {strengths.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-sm rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4 content-start">
            <Pillar
              icon={Briefcase}
              title="Producto Real"
              text="Plataformas de gestión usadas a diario por equipos en producción."
            />
            <Pillar
              icon={Zap}
              title="Alto Rendimiento"
              text="Optimizo cada detalle: bundle, queries y experiencia de usuario."
            />
            <Pillar
              icon={Globe2}
              title="Remoto"
              text="Trabajo remoto o híbrido con equipos internacionales."
            />
            <Pillar
              icon={CheckCircle2}
              title="Calidad"
              text="Código limpio, testeable y mantenible. Sin atajos baratos."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
