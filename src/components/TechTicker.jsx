import React from "react";
import { Atom, Triangle, Wind, FileCode2, Coffee, Leaf, Database, Github, Boxes, Zap, Server, FileType2 } from "lucide-react";

const items = [
  { icon: Atom, name: "React" },
  { icon: Triangle, name: "Next.js" },
  { icon: Boxes, name: "Angular" },
  { icon: Wind, name: "TailwindCSS" },
  { icon: FileType2, name: "TypeScript" },
  { icon: Coffee, name: "Java" },
  { icon: Leaf, name: "Spring Boot" },
  { icon: Database, name: "PostgreSQL" },
  { icon: Server, name: "Node.js" },
  { icon: Zap, name: "Vite" },
  { icon: Github, name: "Git" },
  { icon: FileCode2, name: "Astro" },
];

const Pill = ({ Icon, name }) => (
  <li className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 mx-1.5">
    <Icon size={16} className="text-emerald-500 dark:text-emerald-400" />
    <span className="text-sm font-medium text-foreground/90">{name}</span>
  </li>
);

const TechTicker = () => {
  return (
    <section aria-label="Tecnologías" className="relative py-10 border-y border-border bg-secondary/20 overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-marquee w-max">
        <ul className="flex items-center">
          {items.map((t) => (
            <Pill key={t.name + "-a"} Icon={t.icon} name={t.name} />
          ))}
        </ul>
        {/* duplicate for seamless loop */}
        <ul className="flex items-center" aria-hidden="true">
          {items.map((t) => (
            <Pill key={t.name + "-b"} Icon={t.icon} name={t.name} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechTicker;
