import React, { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Code2, Download } from "lucide-react";
import { Button } from "./ui/button";
import { personal } from "../data/mock";

const Hero = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (!codeRef.current) return;
    const text = codeRef.current.dataset.full || "";
    let i = 0;
    codeRef.current.textContent = "";
    const id = setInterval(() => {
      if (!codeRef.current) return clearInterval(id);
      codeRef.current.textContent = text.slice(0, i);
      i++;
      if (i > text.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Aurora */}
      <div className="aurora">
        <div
          className="aurora__blob"
          style={{ top: "-100px", left: "-120px", background: "radial-gradient(circle, #10b981 0%, transparent 60%)" }}
        />
        <div
          className="aurora__blob"
          style={{ bottom: "-160px", right: "-120px", background: "radial-gradient(circle, #14b8a6 0%, transparent 60%)" }}
        />
      </div>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.18] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          color: "#10b981",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 75%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          {personal.available && (
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-6">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Disponible para nuevos proyectos
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05]">
            Hola, soy{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </span>
            <br />
            <span className="text-foreground/90">{personal.role}.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {personal.tagline} Especializado en{" "}
            <span className="text-foreground font-medium">Angular y Spring Boot</span>{" "}
            — transformo ideas en productos digitales escalables y eficientes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => scrollTo("proyectos")}
              className="h-11 px-5 bg-emerald-500 hover:bg-emerald-600 text-white border-0 group"
            >
              Ver proyectos
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              onClick={() => scrollTo("contacto")}
              variant="outline"
              className="h-11 px-5 border-border bg-secondary/40 hover:bg-secondary text-foreground"
            >
              Contáctame
            </Button>
            <Button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/cv/Diego_Alejandro_García_Deus_CV_.pdf";
                link.download = "Diego_Alejandro_García_Deus_CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              variant="ghost"
              className="h-11 px-5 text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              <Download size={16} className="mr-2" /> CV
            </Button>
            <div className="hidden sm:flex items-center gap-1 ml-2">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-10 w-10 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/40 transition-colors focus-ring"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/40 transition-colors focus-ring"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personal.social.email}
                aria-label="Email"
                className="h-10 w-10 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/40 transition-colors focus-ring"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} className="text-emerald-500" />
            {personal.location}
          </div>
        </div>

        {/* Code card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl border border-border bg-card/80 glass shadow-2xl shadow-emerald-500/5 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
              <span className="h-3 w-3 rounded-full bg-rose-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">
                ~/diego/profile.ts
              </span>
              <Code2 size={14} className="ml-auto text-muted-foreground" />
            </div>
            <pre className="text-[13.5px] leading-relaxed font-mono px-5 py-5 text-foreground/90 whitespace-pre-wrap">
              <code
                ref={codeRef}
                data-full={`const diego = {
  role: "Full Stack Dev",
  location: "Vigo, ES",
  stack: ["React", "Next", "Angular",
          "Spring Boot", "Postgres"],
  passion: "resolver problemas",
  available: true,
};

export default diego;`}
              />
            </pre>
          </div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-emerald-500/20 blur-2xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
